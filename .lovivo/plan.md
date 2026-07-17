# Store Plan — dunaru
<!-- Auto-maintained by Lovivo AI. READ THIS FIRST. UPDATE IT LAST. -->

## 1. Brand & Context
- Brand name: **dunaru** (dunaru.mx)
- Product: Velas perladas recargables — **gránulos finos de cera tipo arena** (NO perlas grandes) + mechas de algodón. Material visual = arena/couscous fino.
- Tesis: no vendemos "cera para velas". Vendemos una forma simple de crear luz y decoración en el recipiente que ya tienes.
- Target: Mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO, decoración + hogar + regalo
- Market: México. Moneda MXN. Idioma: español de México.
- Tono: claro, cálido, directo. Sin tecnicismos.
- Pagos: **A meses sin intereses vía Stripe** (hasta 6 meses). ⚠️ NO usar Mercado Pago (no lo tienen). ⚠️ NUNCA nombrar "Stripe" ni "Mercado Pago" en la UI — solo decir "a meses sin intereses". Concepto: "Luz de diseño que cambia contigo."
- Envío: Perlas Originales = +$99. Todo lo demás = gratis desde $899.
- WhatsApp REAL: `525531215386` (+52 55 3121 5386).
- REGLA DE INTEGRIDAD: **NUNCA reseñas falsas.** Las 15 reseñas SÍ son reales. Cualquier "prueba social" en checkout usa `getReviewStats()` (4.9 / 15), NO números inventados.
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`
- RUTAS EN ESPAÑOL: producto = `/productos/:slug`, paquete = `/paquete/:slug`, carrito = `/carrito`, checkout = `/pagar`.
- Competencia: **VelaVita.cl** (LATAM) y **Foton (US)**.
- Slugs pauta: `perlas-originales-500-g`, `kit-vaso-de-vidrio`, `kit-vaso-de-concreto`.

## 2. Design System
- Fondo: Marfil #FAF6EF → `--background` · Alterno: Arena #F1E9DC → `--muted`/`bg-dunaru-arena`
- Texto: Carbón #2B2A27 → `--foreground` · Acento: Champagne #C2A878 → `text-dunaru-champagne`
- CTA: Ónix #1E1C1A → `--primary` · Detalle llama: Ámbar #D89A57 → `text-dunaru-ambar`
- Display: Instrument Serif → `font-display` · Body/UI: Manrope → `font-body`
- Tokens: `dunaru-marfil/arena/champagne/carbon/onix/ambar`
- Estrellas de reseñas: `fill-dunaru-champagne text-dunaru-champagne` (vacías = `/30`).
- Estética: editorial, mínima, mucho aire. Mobile-first.
- **HERO responsive**: móvil usa imagen VERTICAL dedicada (`/hero-dunaru-mobile.webp`, 9:16, `md:hidden`), desktop usa la horizontal (`/hero-dunaru.webp`, `hidden md:block`).
- **PDP layout**: `ProductPageUI.tsx`. Grid 7/5. Galería sticky desktop + carrusel móvil. Contenedor `-mt-4 md:mt-0`.
- **PDP buy box**: MSI bajo el precio (ahora "a meses sin intereses", SIN nombrar proveedor) + reaseguros ETA + garantía bajo el CTA (íconos `text-dunaru-ambar`). Barra sticky con `StickyRating`.
- **CHECKOUT layout** (`CheckoutUI.tsx` + `StripePayment.tsx`): 2 cols desktop (form + resumen sticky), 1 col móvil (resumen colapsable arriba ABIERTO por defecto + form). Botón de pago vive DENTRO de `StripePayment`.
- **CHECKOUT slots** (StripePayment tiene props opcionales `React.ReactNode`): `paymentNoticeSlot` (arriba de PaymentElement), `socialProofSlot` (arriba del botón), `trustBadgesSlot` (debajo del botón). Se construyen en CheckoutUI dentro del IIFE de isStripeReady.

## 3. Active Plan — ✅ COMPLETADO: Checkout UI + limpiar "Mercado Pago" (2026-07-17)
Ejecutado en esta sesión. Ver Recent Changes. Próximo foco sugerido: video demo (pending) y confirmar textos/nombres reales de reseñas.

## 4. Recent Changes
- 2026-07-17 — ✅ EJECUTADO checkout UI: (1) resumen móvil ABIERTO por defecto + línea reaseguro Truck "Envío gratis · Llega 2-5 días", (2) línea seguridad Lock "Pago 100% seguro · SSL" arriba del pago, (3) StripePayment nuevos slots paymentNotice/socialProof/trustBadges, (4) callout "Págalo a meses sin intereses" (CreditCard, desde $X/mes), (5) prueba social REAL getReviewStats (4.9/15 estrellas champagne), (6) trust badges VISA/MC/AMEX/APPLE PAY/G PAY (+OXXO/SPEI condicional). CTA guion→"·".
- 2026-07-17 — ✅ PDP: quitado "Mercado Pago" del MSI → "6 pagos de {X} a meses sin intereses".
- 2026-07-17 — 📋 PLAN checkout (ya ejecutado arriba).
- 2026-07-17 — ✅ CONVERSIÓN PDP: MSI + reaseguros ETA + garantía + rating champagne barra sticky.
- 2026-07-17 — ✅ PDP: quitado botón "Seguir comprando" (móvil) + galería subida.
- 2026-07-17 — ✅ FIX HERO MÓVIL: imagen vertical `/hero-dunaru-mobile.webp` (9:16).
- 2026-07-17 — ✅ rediseño reseñas PDP: `Reviews.tsx` layout mixto.
- 2026-07-16 — ✅ RESEÑAS REALES LIVE: `src/data/reviews.ts` (15 reseñas). 5 fotos UGC. 4.9/15.
- 2026-07-16 — 🔍 AUDITORÍA PRE-PAUTA vs VelaVita.cl.
- 2026-07-16 — ✅ FIX PDP sticky bar prematuro.
- 2026-07-16 — ✅ FIX carrusel móvil PDP.
- 2026-07-15 — ✅ FIX BUG galería PDP desktop.
- 2026-07-15 — ✅ PDP PERLAS: 4 fotos editoriales + copy propio.
- 2026-07-06 — ✅ SPRINT PRE-LANZAMIENTO.
- 2026-07-03 — ✅ LANDING SINCRONIZADA con fotos reales.

## 5. Image Inventory
- **FOTOS REALES catálogo**: `product-images/products/<hash>.webp`. 9 productos.
- **Hero desktop**: `/hero-dunaru.webp` · **Hero móvil**: `/hero-dunaru-mobile.webp` (9:16) · **Casa real**: `/casa-real-*.webp` · **4 pasos**: `/paso-*.webp` — ✅.
- **UGC RESEÑAS (5 fotos, en `reviews.ts` const UGC)** — Supabase message-images.
- OJO consistencia: material = **arena fina**, no perlas grandes.

## 6. Known Issues
- 2026-07-17 — 🟡 Callout de meses en checkout NO promete "6 meses garantizados": copy = "verás los plazos disponibles de tu banco". Mantener.
- 2026-07-17 — 🟡 Verificar en preview desplegado que los slots del checkout se ven bien en móvil (probar con 1 producto en carrito, NO screenshot directo a /pagar = vacío).
- 2026-07-16 — 🟡 Textos reseñas #5–#12 RECONSTRUIDOS. User debe pegar exactos.
- 2026-07-16 — 🟡 Nombres de reseñas = propuesta, confirmar reales antes de pauta.
- 2026-07-16 — 🟡 `ReviewsInvite.tsx` huérfano. Se puede borrar.
- 2026-06-24 — Descuento volumen: verificar recálculo total carrito end-to-end.
- 2026-06-24 — Regla envío $99 solo Perlas: verificar config shipping.

## 7. Pending / Future Sessions
- [high] VIDEO DEMO con `videogen` (rec pospuesta por user): vierte→inserta→enciende→renueva, arriba de reseñas.
- [high] USER confirma textos exactos #5–#12 + nombres reales → `reviews.ts`.
- [med] Verificar visualmente checkout móvil en deploy (slots + resumen abierto).
- [med] ProductCardUI stars: conteo global (15).
- [med] Oferta lanzamiento (`compare_at_price`) en productos hero.
- [low] Borrar `ReviewsInvite.tsx`, barra envío gratis en carrito, JSON-LD AggregateRating. Borrar `public/tmp-upload-hero.webp`.