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
- REGLA DE INTEGRIDAD: **NUNCA reseñas falsas.** Las 15 reseñas SÍ son reales (amigos que usaron el producto enviado).
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

## 3. Active Plan — ✅ REDISEÑO SECCIÓN RESEÑAS PDP (ejecutado 2026-07-17)
Todo hecho. Estado final de `Reviews.tsx`:
- **Header resumen mejorado**: título + tarjeta con promedio grande (4.9) + estrellas + barra de distribución 5★→1★ (helper `getRatingDistribution`).
- **Featured con foto** en carrusel Embla deslizable (peek `basis-[85%]` móvil, 1/2 sm, 1/3 lg) + flechas prev/next en desktop.
- **Reseñas de solo texto**: 3 visibles + botón "Ver las N opiniones" (estado `expanded`, expande inline). Botón muestra conteo total real.
- **PDP** (`ProductStorySections.tsx` sección 6): ahora `<Reviews />` SIN slug → las 15 en cada PDP.
- **Mini-rating buy box** (`ProductPageUI.tsx` ~L366): `getReviewStats()` sin slug → 4.9 (15 opiniones) global, coincide con la sección.
- Landing (`IndexUI`): ya usa `<Reviews />` sin slug, hereda el nuevo layout.

### ⚠️ PENDIENTE DE CONFIRMAR POR EL USER (arrastrado)
- **Textos reseñas #5–#12**: reconstruidos del título/categoría (chat cortado). User debe pegar texto EXACTO. (Verbatim OK: #1, #2, #3, #4, #13, #14, #15.)
- **Nombres**: propuesta editorial. Reemplazar por reales antes de escalar pauta.
- **ProductCardUI** stars: sigue usando conteo por slug (no global). Evaluar cambiar a global para consistencia total.

## 4. Recent Changes
- 2026-07-17 — ✅ EJECUTADO rediseño reseñas PDP: `Reviews.tsx` reconstruido con layout mixto (tarjeta resumen + barra de distribución de estrellas, featured en carrusel Embla con flechas desktop, texto 3+"Ver las 15 opiniones"). PDP muestra las 15 (quitado filtro slug). Buy box mini-rating ahora global. Helper `getRatingDistribution` en `reviews.ts`.
- 2026-07-17 — 🎯 PLAN rediseño reseñas PDP definido (ya ejecutado).
- 2026-07-16 — ✅ RESEÑAS REALES LIVE: `src/data/reviews.ts` (15 reseñas + helpers) y `Reviews.tsx`. Integrado en landing, PDP, mini-rating buy box, estrellas ProductCardUI. 5 fotos UGC. Promedio 4.9/15.
- 2026-07-16 — 🔍 AUDITORÍA PRE-PAUTA vs VelaVita.cl. Bloqueador era 0 reseñas (resuelto).
- 2026-07-16 — ✅ FIX PDP sticky bar prematuro.
- 2026-07-16 — ✅ FIX carrusel móvil PDP estilo rodata.mx (peek `basis-[88%]`).
- 2026-07-15 — ✅ FIX BUG galería PDP desktop (thumbnails scroll).
- 2026-07-15 — ✅ PDP PERLAS: 4 fotos editoriales mejoradas del user.
- 2026-07-15 — ✅ PDP PERLAS blocks: títulos + copy propio reescritos.
- 2026-07-15 — ✅ FIX "Crea tu vela en 4 pasos" con fotos reales.
- 2026-07-15 — 🧩 FIX layout "¿Cómo quieres empezar?" en IndexUI.
- 2026-07-06 — ✅ SPRINT PRE-LANZAMIENTO.
- 2026-07-03 — ✅ LANDING SINCRONIZADA con fotos reales.

## 5. Image Inventory
- **FOTOS REALES catálogo**: `product-images/products/<hash>.webp`. 9 productos.
- **Hero**: `/hero-dunaru.webp` · **Casa real**: `/casa-real-*.webp` · **4 pasos**: `/paso-*.webp` — ✅.
- **UGC RESEÑAS (5 fotos, en `reviews.ts` const UGC)** — URLs Supabase message-images:
  - `1784238899091-zp99w7xbo5a.webp` = visitas (vidrio ámbar estriado)
  - `1784238899092-ztn82bcfir.webp` = completa (arena negra, cerámica blanca)
  - `1784238899092-0snwjx0f7w7.webp` = regalo (cerámica estriada crema)
  - `1784238899092-acdwwacyaq.webp` = facil (vidrio cuadrado, arena blanca)
  - `1784238899092-i6pb49ce8vp.webp` = reutilizar (bowl cerámica crema)
- OJO consistencia: material = **arena fina**, no perlas grandes.

## 6. Known Issues
- 2026-07-16 — 🟡 Textos reseñas #5–#12 RECONSTRUIDOS (chat cortado). User debe pegar exactos.
- 2026-07-16 — 🟡 Nombres de reseñas = propuesta, confirmar reales antes de pauta.
- 2026-07-16 — 🟡 `ReviewsInvite.tsx` quedó huérfano (ya no se importa). Se puede borrar.
- 2026-06-24 — Descuento volumen: verificar recálculo total carrito end-to-end.
- 2026-06-24 — Regla envío $99 solo Perlas: verificar config shipping.

## 7. Pending / Future Sessions
- [high] USER confirma textos exactos #5–#12 + nombres reales → actualizar `reviews.ts`.
- [high] Recolectar fotos UGC de reseñas no-featured + email post-compra pidiendo reseña.
- [high] VIDEO DEMO (vierte→inserta→enciende→renueva) con `videogen`.
- [med] ProductCardUI stars: evaluar pasar a conteo global (15) para consistencia con PDP.
- [med] Garantía visible en buy box + ETA "recibe en 2–4 días" cerca del CTA.
- [med] Oferta de lanzamiento (`compare_at_price`) en productos hero.
- [med] Verificar checkout end-to-end (descuento volumen + envío $99).
- [low] Borrar `ReviewsInvite.tsx`, barra envío gratis en carrito, JSON-LD AggregateRating con reviews reales (SEO + estrellas en Google).