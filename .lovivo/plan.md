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
- **HERO responsive**: móvil usa imagen VERTICAL dedicada (`/hero-dunaru-mobile.webp`, 9:16, `md:hidden`), desktop usa la horizontal (`/hero-dunaru.webp`, `hidden md:block`). Contenido `items-start` en móvil (texto arriba), `md:items-center` en desktop. Gradiente móvil = oscuro arriba (`to-b`); desktop = oscuro izquierda (`to-r`).

## 3. Active Plan — ✅ FIX HERO MÓVIL (ejecutado 2026-07-17)
El producto no se veía en el hero móvil porque la imagen era horizontal y cortaba mal. Solución: imagen vertical 9:16 dedicada + layout responsive. Hecho.

### ⚠️ PENDIENTE DE CONFIRMAR POR EL USER (arrastrado)
- **Textos reseñas #5–#12**: reconstruidos. User debe pegar texto EXACTO. (Verbatim OK: #1–#4, #13–#15.)
- **Nombres**: propuesta editorial. Reemplazar por reales antes de escalar pauta.
- **ProductCardUI** stars: sigue conteo por slug (no global). Evaluar cambiar a global.

## 4. Recent Changes
- 2026-07-17 — ✅ FIX HERO MÓVIL: generada imagen vertical `/hero-dunaru-mobile.webp` (9:16, producto+arena visible abajo, espacio para texto arriba, ref = bolsa perlas x3azemqdof). `IndexUI` hero ahora sirve img móvil vs desktop con `md:hidden`/`hidden md:block`, `items-start md:items-center`, gradientes responsive.
- 2026-07-17 — (previo) intento object-right en móvil (insuficiente, revertido a solución vertical).
- 2026-07-17 — ✅ EJECUTADO rediseño reseñas PDP: `Reviews.tsx` layout mixto (resumen+barra distribución, featured en carrusel Embla, "Ver las 15 opiniones"). PDP muestra las 15. Buy box mini-rating global.
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
- **Hero desktop**: `/hero-dunaru.webp` (horizontal) · **Hero móvil**: `/hero-dunaru-mobile.webp` (9:16 vertical, NUEVO 2026-07-17) · **Casa real**: `/casa-real-*.webp` · **4 pasos**: `/paso-*.webp` — ✅.
- **UGC RESEÑAS (5 fotos, en `reviews.ts` const UGC)** — Supabase message-images:
  - `1784238899091-zp99w7xbo5a.webp` = visitas · `...092-ztn82bcfir.webp` = completa · `...092-0snwjx0f7w7.webp` = regalo · `...092-acdwwacyaq.webp` = facil · `...092-i6pb49ce8vp.webp` = reutilizar
- OJO consistencia: material = **arena fina**, no perlas grandes.

## 6. Known Issues
- 2026-07-16 — 🟡 Textos reseñas #5–#12 RECONSTRUIDOS. User debe pegar exactos.
- 2026-07-16 — 🟡 Nombres de reseñas = propuesta, confirmar reales antes de pauta.
- 2026-07-16 — 🟡 `ReviewsInvite.tsx` huérfano. Se puede borrar.
- 2026-06-24 — Descuento volumen: verificar recálculo total carrito end-to-end.
- 2026-06-24 — Regla envío $99 solo Perlas: verificar config shipping.

## 7. Pending / Future Sessions
- [high] USER confirma textos exactos #5–#12 + nombres reales → actualizar `reviews.ts`.
- [high] Recolectar fotos UGC no-featured + email post-compra pidiendo reseña.
- [high] VIDEO DEMO (vierte→inserta→enciende→renueva) con `videogen`.
- [med] ProductCardUI stars: evaluar conteo global (15).
- [med] Garantía visible en buy box + ETA cerca del CTA.
- [med] Oferta de lanzamiento (`compare_at_price`) en productos hero.
- [low] Borrar `ReviewsInvite.tsx`, barra envío gratis en carrito, JSON-LD AggregateRating. Borrar `public/tmp-upload-hero.webp` (temporal).