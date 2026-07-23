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
- **WHATSAPP**: leyenda "¿Tienes dudas? Escríbenos por WhatsApp" con ícono `MessageCircle`. En PDP ícono `text-dunaru-ambar` + underline champagne; en footer ícono `text-dunaru-champagne`. Link `https://wa.me/525531215386` con texto contextual. NUNCA verde (usar colores de marca).
- **FAVICON**: `/favicon.png` (256x256) — monograma "d" serif champagne con glow ámbar sobre ónix. apple-touch-icon también apunta ahí. El viejo `favicon.svg` (L azul genérico) quedó huérfano.
- **HERO responsive**: móvil usa imagen VERTICAL dedicada (`/hero-dunaru-mobile.webp`, 9:16, `md:hidden`), desktop usa la horizontal (`/hero-dunaru.webp`, `hidden md:block`).
- **PDP layout**: `ProductPageUI.tsx`. Grid 7/5. Galería sticky desktop + carrusel móvil. Contenedor `-mt-4 md:mt-0`.
- **PDP buy box**: MSI bajo el precio (ahora "a meses sin intereses", SIN nombrar proveedor) + reaseguros ETA + garantía + leyenda WhatsApp bajo el CTA (íconos `text-dunaru-ambar`). Barra sticky con `StickyRating`.
- **CHECKOUT layout** (`CheckoutUI.tsx` + `StripePayment.tsx`): 2 cols desktop (form + resumen sticky), 1 col móvil (resumen colapsable arriba ABIERTO por defecto + form). Botón de pago vive DENTRO de `StripePayment`.
- **CHECKOUT slots** (StripePayment tiene props opcionales `React.ReactNode`): `paymentNoticeSlot` (arriba de PaymentElement), `socialProofSlot` (arriba del botón), `trustBadgesSlot` (debajo del botón). Se construyen en CheckoutUI dentro del IIFE de isStripeReady.

## 3. Active Plan — ✅ Sin plan activo. Foco sugerido: video demo (pending) + confirmar textos/nombres reales de reseñas.

## 4. Recent Changes
- 2026-07-23 — ✅ WHATSAPP: leyenda "¿Tienes dudas? Escríbenos por WhatsApp" en PDP (bajo reaseguros, ícono ámbar) y footer Contacto (ícono champagne + tel visible). Número real 525531215386.
- 2026-07-23 — ✅ FIX INTEGRIDAD: quitado "Mercado Pago" del top bar rotativo y del MSI bar del footer (→ "Pagos 100% seguros · Hasta 6 meses sin intereses · VISA · Mastercard · AMEX").
- 2026-07-17 — ✅ FAVICON de marca: generado `/favicon.png` (256px, monograma "d" champagne + glow ámbar sobre ónix). Agregado apple-touch-icon. Corregida meta description en index.html.
- 2026-07-17 — ✅ EJECUTADO checkout UI: resumen móvil abierto, línea seguridad SSL, slots StripePayment, callout meses sin intereses, prueba social REAL 4.9/15, trust badges.
- 2026-07-17 — ✅ PDP: quitado "Mercado Pago" del MSI → "6 pagos de {X} a meses sin intereses".
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

## 5. Image Inventory
- **FAVICON**: `/favicon.png` (256x256, ~52KB). Viejo `public/favicon.svg` huérfano (borrable).
- **FOTOS REALES catálogo**: `product-images/products/<hash>.webp`. 9 productos.
- **Hero desktop**: `/hero-dunaru.webp` · **Hero móvil**: `/hero-dunaru-mobile.webp` (9:16) · **Casa real**: `/casa-real-*.webp` · **4 pasos**: `/paso-*.webp` — ✅.
- **UGC RESEÑAS (5 fotos, en `reviews.ts` const UGC)** — Supabase message-images.
- OJO consistencia: material = **arena fina**, no perlas grandes.

## 6. Known Issues
- 2026-07-17 — 🟡 Callout de meses en checkout NO promete "6 meses garantizados": copy = "verás los plazos disponibles de tu banco". Mantener.
- 2026-07-17 — 🟡 Verificar en preview desplegado que los slots del checkout se ven bien en móvil.
- 2026-07-16 — 🟡 Textos reseñas #5–#12 RECONSTRUIDOS. User debe pegar exactos.
- 2026-07-16 — 🟡 Nombres de reseñas = propuesta, confirmar reales antes de pauta.
- 2026-06-24 — Descuento volumen: verificar recálculo total carrito end-to-end.
- 2026-06-24 — Regla envío $99 solo Perlas: verificar config shipping.

## 7. Pending / Future Sessions
- [high] VIDEO DEMO con `videogen` (rec pospuesta por user): vierte→inserta→enciende→renueva, arriba de reseñas.
- [high] USER confirma textos exactos #5–#12 + nombres reales → `reviews.ts`.
- [med] Verificar visualmente checkout móvil en deploy (slots + resumen abierto).
- [med] ProductCardUI stars: conteo global (15).
- [med] Oferta lanzamiento (`compare_at_price`) en productos hero.
- [low] Borrar `ReviewsInvite.tsx`, `public/favicon.svg`, barra envío gratis en carrito, JSON-LD AggregateRating. Borrar `public/tmp-upload-hero.webp`.