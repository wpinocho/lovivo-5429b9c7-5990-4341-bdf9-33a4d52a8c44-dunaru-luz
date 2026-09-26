/**
 * Event_id lifecycle for Meta Pixel + CAPI deduplication.
 *
 * Rule: event_id is UNIQUE PER REAL OCCURRENCE and SHARED by Pixel + CAPI
 * (+ PostHog) within that occurrence. Only Purchase (and InitiateCheckout
 * when an order_id exists) use a deterministic business key.
 *
 * Run: npx vitest run src/lib/__tests__/tracking-utils.test.ts
 */
import { describe, it, expect, vi, beforeEach, beforeAll } from 'vitest';

const mocks = vi.hoisted(() => ({
  pixelTrack: vi.fn(),
  pixelSearch: vi.fn(),
  callEdge: vi.fn(async () => ({ ok: true })),
  posthogCapture: vi.fn(),
}));

vi.mock('@/lib/facebook-pixel', () => ({
  facebookPixel: {
    track: mocks.pixelTrack,
    search: mocks.pixelSearch,
    updateAdvancedMatching: vi.fn(),
  },
}));

vi.mock('@/lib/edge', () => ({ callEdge: mocks.callEdge }));
vi.mock('@/lib/config', () => ({ STORE_ID: 'test-store' }));
vi.mock('posthog-js', () => ({
  default: { __loaded: true, capture: mocks.posthogCapture },
}));

// Minimal browser globals so the PostHog + CAPI branches execute in Node.
beforeAll(() => {
  vi.stubGlobal('window', { location: { href: 'https://dunaru.mx/productos/x' } });
  if (!globalThis.crypto?.randomUUID) {
    let n = 0;
    vi.stubGlobal('crypto', { randomUUID: () => `uuid-${++n}-${Math.random()}` });
  }
});

// Import AFTER mocks are registered.
const load = async () => (await import('@/lib/tracking-utils')).tracking;

const product = { id: 'prod-123', title: 'Vela', price: 749 };
const baseParams = () => ({
  products: [{ id: product.id, name: product.title, price: product.price }],
  value: 749,
  currency: 'MXN',
});

/** event_id sent to the Browser Pixel on the Nth fbq call (0-based). */
const pixelIdAt = (i: number) => mocks.pixelTrack.mock.calls[i][2] as string;
/** event_id sent to CAPI on the Nth edge call (0-based). */
const capiIdAt = (i: number) => (mocks.callEdge.mock.calls[i] as any[])[1].event_id as string;

describe('tracking-utils · event_id lifecycle', () => {
  let tracking: Awaited<ReturnType<typeof load>>;

  beforeEach(async () => {
    vi.clearAllMocks();
    tracking = await load();
    tracking.setPixelData('pixel-1', null, null);
  });

  it('A) two ViewContent of the same product get DIFFERENT event_ids', () => {
    tracking.trackViewContent(baseParams());
    tracking.trackViewContent(baseParams());
    expect(pixelIdAt(0)).not.toBe(pixelIdAt(1));
    expect(capiIdAt(0)).not.toBe(capiIdAt(1));
    expect(pixelIdAt(0)).not.toContain(product.id);
  });

  it('B) within ONE ViewContent, Pixel, CAPI and PostHog share the SAME event_id', () => {
    tracking.trackViewContent(baseParams());
    const pixelId = pixelIdAt(0);
    expect(pixelId).toMatch(/^viewcontent_/);
    expect(capiIdAt(0)).toBe(pixelId);
    const ph = mocks.posthogCapture.mock.calls.find(c => c[0] === 'viewcontent');
    expect(ph?.[1].event_id).toBe(pixelId);
  });

  it('C) two AddToCart of the same product get DIFFERENT event_ids (Pixel = CAPI each)', () => {
    tracking.trackAddToCart(baseParams());
    tracking.trackAddToCart(baseParams());
    expect(pixelIdAt(0)).not.toBe(pixelIdAt(1));
    expect(capiIdAt(0)).toBe(pixelIdAt(0));
    expect(capiIdAt(1)).toBe(pixelIdAt(1));
  });

  it('D) two InitiateCheckout WITHOUT order_id get DIFFERENT event_ids', () => {
    tracking.trackInitiateCheckout(baseParams());
    tracking.trackInitiateCheckout(baseParams());
    expect(pixelIdAt(0)).not.toBe(pixelIdAt(1));
    expect(pixelIdAt(0)).not.toContain(product.id);
    expect(capiIdAt(0)).toBe(pixelIdAt(0));
  });

  it('E) two InitiateCheckout WITH the same order_id get the SAME event_id', () => {
    tracking.trackInitiateCheckout({ ...baseParams(), order_id: 'ord-1' });
    tracking.trackInitiateCheckout({ ...baseParams(), order_id: 'ord-1' });
    expect(pixelIdAt(0)).toBe('initiatecheckout_ord-1');
    expect(pixelIdAt(1)).toBe(pixelIdAt(0));
    expect(capiIdAt(0)).toBe(pixelIdAt(0));
  });

  it('F) two Purchase with the same order_id get the SAME event_id (unchanged)', () => {
    tracking.trackPurchase({ ...baseParams(), order_id: 'ord-9' });
    tracking.trackPurchase({ ...baseParams(), order_id: 'ord-9' });
    expect(pixelIdAt(0)).toBe('purchase_ord-9');
    expect(pixelIdAt(1)).toBe('purchase_ord-9');
    expect(capiIdAt(0)).toBe('purchase_ord-9');
    expect(capiIdAt(1)).toBe('purchase_ord-9');
  });

  it('G) two Search with the same string get DIFFERENT event_ids (Pixel = CAPI each)', () => {
    tracking.trackSearch({ search_string: 'faja moto' });
    tracking.trackSearch({ search_string: 'faja moto' });
    const s0 = mocks.pixelSearch.mock.calls[0][1] as string;
    const s1 = mocks.pixelSearch.mock.calls[1][1] as string;
    expect(s0).not.toBe(s1);
    expect(s0).not.toContain('faja');
    expect(capiIdAt(0)).toBe(s0);
    expect(capiIdAt(1)).toBe(s1);
  });

  it('H) PostHog still receives every event with its event_id', () => {
    tracking.trackViewContent(baseParams());
    tracking.trackAddToCart(baseParams());
    tracking.trackInitiateCheckout(baseParams());
    tracking.trackPurchase({ ...baseParams(), order_id: 'ord-2' });
    tracking.trackSearch({ search_string: 'vela' });

    const names = mocks.posthogCapture.mock.calls.map(c => c[0]);
    expect(names).toEqual(
      expect.arrayContaining(['viewcontent', 'addtocart', 'initiatecheckout', 'purchase', 'search_performed'])
    );
    mocks.posthogCapture.mock.calls.forEach(c => expect(c[1].event_id).toBeTruthy());
    // No CAPI errors surfaced
    expect(names).not.toContain('meta_capi_error');
  });
});