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

## 3. Active Plan — 🎯 REDISEÑO SECCIÓN RESEÑAS EN PDP (definido 2026-07-17)

### Decisión del user (confirmada)
1. **Mostrar las 15 reseñas en TODAS las PDP** (dejar de filtrar por slug). Con tan pocas reseñas, filtrar reduce la prueba social percibida. Best practice validada (productos con 5+ reseñas convierten mucho más; ocultar reseñas resta confianza).
2. **Resolver el "muro vertical largo"** con layout mixto (NO todo vertical, NO todo carrusel).

### Layout objetivo de `Reviews.tsx` (formato mixto, mobile-first)
A. **Header resumen** (ya existe, mejorar): "4.9 · 15 opiniones" + añadir **barra de distribución de estrellas** (5★: 13, 4★: 2, 3★/2★/1★: 0). Compacto, genera confianza inmediata.
B. **Reseñas con foto (featured) en CARRUSEL horizontal deslizable** en móvil (usar `embla-carousel-react` ya instalado, patrón peek `basis-[85%]` como el carrusel PDP existente). En desktop: grid 3-col como ahora.
C. **Reseñas de solo texto:** mostrar **3 por defecto**, y un botón **"Ver las 15 opiniones"** que despliega el resto INLINE (estado `useState` show/collapse). Evita el muro largo pero mantiene todo accesible con un toque. El botón muestra el conteo total real.
D. Mantener CTA WhatsApp UGC al final.
- Evitar: convertir TODAS las reseñas en carrusel (accesibilidad + banner blindness). El mix featured-carrusel + texto-expandible es lo que mejor convierte.

### Cambios técnicos
- **`src/components/Reviews.tsx`**:
  - Añadir prop `showAllProducts?: boolean` (o simplemente, para PDP, llamar `<Reviews />` SIN slug para traer las 15). Decisión: en PDP pasar sin slug → `getReviews()` devuelve las 15. Mantener el filtro por slug solo si en el futuro hay muchas reseñas (>30). Por ahora: PDP = todas.
  - Header: agregar barra de distribución de estrellas. Nuevo helper en `reviews.ts`: `getRatingDistribution(slug?)` → `{5: n, 4: n, ...}`.
  - Featured: envolver en Embla carousel para móvil (peek), grid en `sm:`/`lg:`.
  - Texto (rest): estado `expanded` con `useState`. Slice a 3 si `!expanded`. Botón "Ver las N opiniones" / "Ver menos".
- **PDP integration** (`src/components/ProductStorySections.tsx` sección 6): cambiar `<Reviews slug={slug} />` por `<Reviews />` para mostrar las 15 en cada PDP. (Confirmar dónde se renderiza y el prop actual.)
- **Mini-rating buy box** (`ProductPageUI`): actualizar el conteo para reflejar 15 globales (ya usa `getReviewStats` — si se pasa sin slug dará 4.9 · 15; verificar que use el global).
- **Landing** (`IndexUI`): mantiene `<Reviews />` sin slug (ya muestra las 15 destacadas). Sin cambios salvo heredar el nuevo layout.

### ⚠️ PENDIENTE DE CONFIRMAR POR EL USER (arrastrado)
- **Textos reseñas #5–#12**: reconstruidos del título/categoría (chat cortado). User debe pegar texto EXACTO. (Verbatim OK: #1, #2, #3, #4, #13, #14, #15.)
- **Nombres**: propuesta editorial. Reemplazar por reales antes de escalar pauta.

## 4. Recent Changes
- 2026-07-17 — 🎯 PLAN rediseño reseñas PDP: mostrar las 15 en cada PDP (quitar filtro por slug) + layout mixto (header con distribución de estrellas, featured en carrusel deslizable móvil, texto con "Ver las 15 opiniones"). Best practices web validadas. PENDIENTE ejecutar en Craft.
- 2026-07-16 — ✅ RESEÑAS REALES LIVE: creados `src/data/reviews.ts` (15 reseñas + helpers) y `Reviews.tsx`. Integrado en landing (reemplaza ReviewsInvite), PDP sección 6 (`Reviews slug`), mini-rating buy box PDP (ancla #resenas) y estrellas en ProductCardUI. 5 fotos UGC en featured. Promedio 4.9/15. OJO: textos #5–#12 reconstruidos, user debe confirmar; nombres son propuesta.
- 2026-07-16 — ⭐ PLAN RESEÑAS REALES definido (ya ejecutado).
- 2026-07-16 — 🔍 AUDITORÍA PRE-PAUTA vs VelaVita.cl. Bloqueador era 0 reseñas (ya resuelto).
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
- 2026-07-16 — 🟡 `ReviewsInvite.tsx` quedó huérfano (ya no se importa). Se puede borrar en próxima sesión.
- 2026-06-24 — Descuento volumen: verificar recálculo total carrito end-to-end.
- 2026-06-24 — Regla envío $99 solo Perlas: verificar config shipping.

## 7. Pending / Future Sessions
- [high] EJECUTAR rediseño reseñas PDP (sección 3): 15 por PDP + layout mixto (carrusel featured + "ver todas" texto + barra distribución).
- [high] USER confirma textos exactos #5–#12 + nombres reales → actualizar `reviews.ts`.
- [high] Recolectar fotos UGC de reseñas no-featured + email post-compra pidiendo reseña.
- [high] VIDEO DEMO (vierte→inserta→enciende→renueva) con `videogen`.
- [med] Garantía visible en buy box + ETA "recibe en 2–4 días" cerca del CTA.
- [med] Oferta de lanzamiento (`compare_at_price`) en productos hero.
- [med] Verificar checkout end-to-end (descuento volumen + envío $99).
- [low] Borrar `ReviewsInvite.tsx`, barra envío gratis en carrito, JSON-LD AggregateRating con reviews reales (SEO + estrellas en Google).