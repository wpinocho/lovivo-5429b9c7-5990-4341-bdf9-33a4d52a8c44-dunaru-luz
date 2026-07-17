# Store Plan — dunaru
<!-- Auto-maintained by Lovivo AI. READ THIS FIRST. UPDATE IT LAST. -->

## 1. Brand & Context
- Brand name: **dunaru** (dunaru.mx)
- Product: Velas perladas recargables — **gránulos finos de cera tipo arena** (NO perlas grandes) + mechas de algodón. Material visual = arena/couscous fino.
- Tesis: no vendemos "cera para velas". Vendemos una forma simple de crear luz y decoración en el recipiente que ya tienes.
- Target: Mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO, decoración + hogar + regalo
- Market: México. Moneda MXN. Idioma: español de México.
- Tono: claro, cálido, directo. Sin tecnicismos.
- Pagos: Mercado Pago + hasta 6 MSI. Concepto: "Luz de diseño que cambia contigo."
- Envío: Perlas Originales = +$99. Todo lo demás = gratis desde $899.
- WhatsApp REAL: `525531215386` (+52 55 3121 5386).
- REGLA DE INTEGRIDAD: **NUNCA reseñas falsas.** Las 15 reseñas SÍ son reales.
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
- **HERO responsive**: móvil usa imagen VERTICAL dedicada (`/hero-dunaru-mobile.webp`, 9:16, `md:hidden`), desktop usa la horizontal (`/hero-dunaru.webp`, `hidden md:block`). Contenido `items-start` en móvil, `md:items-center` desktop.
- **PDP layout**: `ProductPageUI.tsx`. Grid 7/5. Galería sticky desktop + carrusel móvil. SIN botón "Seguir comprando" (quitado 2026-07-17). Contenedor tiene `-mt-4 md:mt-0` para subir galería en móvil. `py-6` global del template NO se toca.

## 3. Active Plan — ✅ PDP: quitado back-link + galería más arriba (2026-07-17)
Quitado "Seguir comprando" en móvil y subida la galería con `-mt-4 md:mt-0`. Recomendaciones de conversión propuestas al user (ver sección 7) — esperando cuáles quiere implementar.

### ⚠️ PENDIENTE DE CONFIRMAR POR EL USER (arrastrado)
- **Textos reseñas #5–#12**: reconstruidos. User debe pegar texto EXACTO. (Verbatim OK: #1–#4, #13–#15.)
- **Nombres**: propuesta editorial. Reemplazar por reales antes de escalar pauta.
- **ProductCardUI** stars: sigue conteo por slug (no global). Evaluar cambiar a global.

## 4. Recent Changes
- 2026-07-17 — ✅ PDP: quitado botón "Seguir comprando" (móvil) + galería subida con `-mt-4 md:mt-0` en contenedor. Propuestas de conversión PDP dadas al user (ETA/urgencia cerca del CTA, MSI+garantía en buy box, video demo).
- 2026-07-17 — ✅ FIX HERO MÓVIL: generada imagen vertical `/hero-dunaru-mobile.webp` (9:16). `IndexUI` sirve img móvil vs desktop responsive.
- 2026-07-17 — ✅ EJECUTADO rediseño reseñas PDP: `Reviews.tsx` layout mixto. PDP muestra las 15. Buy box mini-rating global.
- 2026-07-16 — ✅ RESEÑAS REALES LIVE: `src/data/reviews.ts` (15 reseñas). 5 fotos UGC. Promedio 4.9/15.
- 2026-07-16 — 🔍 AUDITORÍA PRE-PAUTA vs VelaVita.cl.
- 2026-07-16 — ✅ FIX PDP sticky bar prematuro.
- 2026-07-16 — ✅ FIX carrusel móvil PDP estilo rodata.mx.
- 2026-07-15 — ✅ FIX BUG galería PDP desktop.
- 2026-07-15 — ✅ PDP PERLAS: 4 fotos editoriales + copy propio.
- 2026-07-15 — ✅ FIX "Crea tu vela en 4 pasos" con fotos reales.
- 2026-07-06 — ✅ SPRINT PRE-LANZAMIENTO.
- 2026-07-03 — ✅ LANDING SINCRONIZADA con fotos reales.

## 5. Image Inventory
- **FOTOS REALES catálogo**: `product-images/products/<hash>.webp`. 9 productos.
- **Hero desktop**: `/hero-dunaru.webp` · **Hero móvil**: `/hero-dunaru-mobile.webp` (9:16) · **Casa real**: `/casa-real-*.webp` · **4 pasos**: `/paso-*.webp` — ✅.
- **UGC RESEÑAS (5 fotos, en `reviews.ts` const UGC)** — Supabase message-images.
- OJO consistencia: material = **arena fina**, no perlas grandes.

## 6. Known Issues
- 2026-07-16 — 🟡 Textos reseñas #5–#12 RECONSTRUIDOS. User debe pegar exactos.
- 2026-07-16 — 🟡 Nombres de reseñas = propuesta, confirmar reales antes de pauta.
- 2026-07-16 — 🟡 `ReviewsInvite.tsx` huérfano. Se puede borrar.
- 2026-06-24 — Descuento volumen: verificar recálculo total carrito end-to-end.
- 2026-06-24 — Regla envío $99 solo Perlas: verificar config shipping.

## 7. Pending / Future Sessions
- [high] RECOMENDACIONES PDP propuestas (esperando OK del user):
  1. ETA concreta + urgencia cerca del CTA ("Pídelo hoy, llega en 2–5 días").
  2. Recordatorio MSI + garantía 30 días PEGADO al buy box (no solo en highlights).
  3. Video demo corto (vierte→inserta→enciende→renueva) arriba de reseñas.
  4. Sticky add-to-cart móvil: verificar que muestre precio + rating.
- [high] USER confirma textos exactos #5–#12 + nombres reales → `reviews.ts`.
- [high] VIDEO DEMO con `videogen`.
- [med] ProductCardUI stars: conteo global (15).
- [med] Oferta lanzamiento (`compare_at_price`) en productos hero.
- [low] Borrar `ReviewsInvite.tsx`, barra envío gratis en carrito, JSON-LD AggregateRating. Borrar `public/tmp-upload-hero.webp`.