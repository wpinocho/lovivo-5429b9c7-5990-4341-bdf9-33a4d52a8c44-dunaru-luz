# Store Plan — dunaru
<!-- Auto-maintained by Lovivo AI. READ THIS FIRST. UPDATE IT LAST. -->

## 1. Brand & Context
- Brand name: **dunaru** (dunaru.mx)
- Product: Velas perladas **rellenables** — **gránulos finos de cera tipo arena** (NO perlas grandes) + mechas de algodón. Material visual = arena/couscous fino.
- ⚠️ VOCABULARIO: usar **"rellenable"** (NO "recargable").
- ⚠️ ESTILO DE COPY: **PROHIBIDO el guion largo (—) en texto de la tienda.** El owner dice que "se ve generado con IA". Usar comas, dos puntos o "·".
- Tesis: no vendemos "cera para velas". Vendemos una forma simple de crear luz y decoración en el recipiente que ya tienes.
- **AROMA**: las velas nacen SIN perfume. Posicionamiento = **"el aroma lo eliges tú"** (feature, no carencia).
- Target: Mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO, decoración + hogar + regalo
- Market: México. Moneda MXN. Idioma: español de México.
- Tono: claro, cálido, directo. Sin tecnicismos.
- Pagos: **A meses sin intereses vía Stripe** (hasta 6 meses). ⚠️ NUNCA nombrar "Stripe" ni "Mercado Pago" en la UI — solo "a meses sin intereses" / "tarjetas participantes".
- Envío: **ENVÍO GRATIS A TODO MÉXICO, SIN MÍNIMO.**
- WhatsApp REAL: `525531215386` (+52 55 3121 5386).
- REGLA DE INTEGRIDAD: **NUNCA reseñas falsas.** Las 15 reseñas SÍ son reales. Prueba social usa `getReviewStats()` (4.9 / 15).
- ⚠️ 2026-08-07 — "+200 clientes felices" en el top bar: dato dado por el owner, NO verificado contra la DB.
- REGLA DE INTEGRIDAD (precios): **NUNCA inventar precios tachados.**
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`
- RUTAS EN ESPAÑOL: producto = `/productos/:slug`, paquete = `/paquete/:slug`, carrito = `/carrito`, checkout = `/pagar`, **categoría = `/categorias/:handle`**.
- Competencia: **VelaVita.cl** (LATAM) y **Foton (US)**.
- ⚠️ **kit-vaso-de-concreto** es en realidad de **CERÁMICA**. Slug sigue diciendo "concreto".
- ⚠️ El owner renombra y repriza productos desde el Dashboard con frecuencia. **NUNCA hardcodear precios ni títulos.** Verificar con `ecommerce--list-data`.

### CATÁLOGO (slugs SIEMPRE intactos — los anuncios de Meta dependen de ellos)
Snapshot 2026-08-07 (solo referencia; la fuente de verdad es la DB):
| Slug | Título | Precio | Compare |
|---|---|---|---|
| perlas-originales-500-g | Recarga para vela rellenable — 500 g + 30 mechas | $499 | $599 |
| reserva-1-kg | Recarga para vela rellenable — 1 Kg + 60 mechas | $799 | $999 |
| kit-vaso-de-vidrio | Kit Vela Rellenable · Vaso de Vidrio | $799 | $899 |
| kit-vaso-de-concreto | Kit Vela Rellenable · Bowl de Cerámica | $999 | $1,199 |
| d-o-de-tonos | Dúo de Tonos · 1 kg de Cera Perlada | $1,099 | $1,398 |
| tr-o-de-tonos | Trío de Tonos · 1.5 kg de Cera Perlada | $1,399 | $1,499 |
| bowl-negro | Bowl de Cerámica Negro | $399 | $499 |
| vaso-extra-transparente | Vaso de Vidrio Transparente | $249 | — |
| pack-30-mechas | Pack de 30 Mechas de Algodón | $99 | — |

## 2. Design System
- Fondo: Marfil #FAF6EF → `--background` · Alterno: Arena #F1E9DC → `bg-dunaru-arena`
- Texto: Carbón #2B2A27 → `--foreground` · Acento: Champagne #C2A878 → `text-dunaru-champagne`
- CTA: Ónix #1E1C1A → `--primary` · Detalle llama: Ámbar #D89A57 → `text-dunaru-ambar`
- Display: Instrument Serif → `font-display` · Body/UI: Manrope → `font-body`
- Tokens: `dunaru-marfil/arena/champagne/carbon/onix/ambar`
- Estética: editorial, mínima, mucho aire. Mobile-first. **Pero en la PDP la densidad gana al aire** (ver §3).
- **TOP BAR** (`EcommerceTemplate.tsx`): barra fija carbón, 2 items: Truck "Envío gratis a todo México" · Heart ámbar "+200 clientes felices".
- **HEADER OVERLAY**: `EcommerceTemplate` y `PageTemplate` aceptan prop `headerOverlay`. Solo `IndexUI` lo usa (hero a sangre).
- **MENÚ "Productos"**: dropdown en header con `PRODUCT_CATEGORIES`.
- **📄 ORDEN OFICIAL DE LA PDP** (`ProductStorySections.tsx`, actualizado 2026-08-07):
  1. Tira de garantías compacta (4 en una fila, también en móvil)
  2. **Crea tu vela en 4 pasos → `ProductStepsCarousel.tsx`** (carrusel, SIN subtítulo)
  3. **Reseñas / prueba social** ← subida desde la posición 5
  4. Bloques editoriales de beneficios
  5. Tabla comparativa "Esto hace diferente a dunaru"
  6. FAQ
  7. CTA de cierre (vuelve al buy box con `scrollTo top`)
  Lógica: entender → creer → desear → decidir. NO volver a bajar las reseñas.
- **`ProductStepsCarousel.tsx`**: móvil 1 slide con peek (`basis-[80%]`) + dots; `sm` 2; `lg` los 4 visibles + flechas. Recibe `steps` y `title` por props.
- **`Reviews.tsx` (compacto)**: sin subtítulo, sin tarjeta con borde en el resumen, promedio a la izquierda + distribución a la derecha SIEMPRE en fila, sin label "Opiniones con foto", **sin `r.title`**. El campo `title` sigue en `reviews.ts` pero ya NO se renderiza.
- **Franja "Pago 100% seguro / MSI"**: existe UNA sola vez, en el **footer negro global**. No duplicarla en la PDP.
- **Tabla comparativa**: `CompareRow.dunaru/traditional` acepta `boolean | string`.
- **`ProductQuantityTiers`**: labels genéricos vía props (`unitLabel` "Bolsa", `extraPerUnit` 30, `extraLabel` "mechas").
- **`PERLAS_BENEFIT_BLOCKS`**: 5 bloques compartidos por los 4 productos de cera.
- **4 PASOS duplicados en 2 lugares**: `HOW_IT_WORKS_STEPS` (PDP) y `STEPS` en `IndexUI.tsx` (landing). Cambiar en ambos.
- **📐 RATIO DE IMAGEN DE PRODUCTO = 4:5 (1122×1402 px)** + `object-cover`.
- **LANDING — PRECIOS DINÁMICOS**: `IndexUI.tsx` usa `buildCatalog(logic.products)` → mapa `slug → {title, price, compare, img}`. `CATALOG_FALLBACK` solo es respaldo mientras carga la red.
- ⚠️ Aún hay nombres de producto hardcodeados en el **footer de `EcommerceTemplate.tsx`**.

---

## 3. Active Plan — Medir el efecto de los cambios CRO

**Estado**: 5ª ronda implementada 2026-08-07 (carrusel de pasos + limpieza kit vidrio). Falta el video demo (lo graba el user).

### Baseline a batir (ver `.lovivo/cro-log.md`)
- Móvil 7d: 151 únicos vieron producto → 6 addtocart = **4.0%** → **0 compras**.
- Objetivo mínimo: **8% addtocart en móvil**.

### Qué medir el 2026-08-14
1. `posthog-query`: viewcontent → addtocart en móvil, 7 días post-cambio vs previos.
2. Scroll depth hasta `#resenas` (¿ahora sí llegan?).
3. initiatecheckout → purchase.
⚠️ Los cambios del 31-jul y del 07-ago se acumulan: medirlos como un solo paquete.

---

## 4. Recent Changes
- 2026-08-07 — ✅ **PASOS EN CARRUSEL**: nuevo `ProductStepsCarousel.tsx` (embla/shadcn) reemplaza el grid estático. Sin subtítulo. Dots en móvil, flechas en desktop.
- 2026-08-07 — ✅ **kit-vaso-de-vidrio**: eliminado el bloque de beneficio "Tu vaso, también cuando no es vela" (imagen `/pdp-vaso-decor.webp` ya no se usa ahí).
- 2026-08-07 — ✅ **PDP REORDENADA**: prueba social sube de la posición 5 a la 3. Nuevo CTA de cierre en la posición 7.
- 2026-08-07 — ✅ **PDP más densa**: garantías en 1 fila (`grid-cols-4`, `py-5`), wrapper `mt-10 space-y-14`.
- 2026-08-07 — ✅ **`Reviews.tsx` compacto**: resumen en fila, sin subtítulo, sin títulos de reseña.
- 2026-08-07 — ✅ **Eliminada la franja de pago duplicada** de la PDP.
- 2026-08-07 — ✅ **LANDING: precios y nombres desde la DB** (`buildCatalog`).
- 2026-08-07 — ✅ **"Quiero decorar más"**: grid de 3 tarjetas iguales con badge flotante.
- 2026-08-07 — ✅ **HEADER OVERLAY**: eliminada la franja blanca entre menú y hero.
- 2026-08-07 — ✅ **COPY sin guiones largos** en `BrandStorySection.tsx` y FAQ de la landing.
- 2026-08-07 — ✅ **TABLA COMPARATIVA**: "Costo por hora de luz" + "El aroma lo eliges tú".
- 2026-08-07 — ✅ **TOP BAR estático** de 2 items.
- 2026-07-31 — ✅ **RENOMBRE DE CATÁLOGO (9 productos, slugs intactos)**.
- 2026-07-31 — ✅ **LIMPIEZA DEL CARGO DE $99**.
- 2026-07-31 — 🔍 **AUDITORÍA CRO COMPLETA**. Embudo móvil: 151 → 6 al carrito (4%) → 0 compras.

## 5. Image Inventory
- **📐 Todas las fotos de producto son 1122×1402 px (4:5), webp.**
- **Colecciones**: sin imagen asignada.
- **FAVICON**: `/favicon.png` (256x256).
- **FOTOS REALES catálogo**: `product-images/products/<hash>.webp`. 9 productos, 75 imágenes.
- **Hero desktop**: `/hero-dunaru.webp` · **Hero móvil**: `/hero-dunaru-mobile.webp` · **Casa real**: `/casa-real-{sala,comedor,recibidor}.webp`
- **4 PASOS** — base `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/`:
  - Vierte → `/paso-vierte.webp` · Inserta → `1785521743155-htw95tvbi4b.webp` · Enciende → `1785521743156-3qeskqe43gv.webp` · Renueva → `/paso-renueva.webp` (generada, pendiente foto real)
- **Bloque aroma** → `1785521743156-7ucg5c0kwb7.webp`
- 🟡 `/pdp-vaso-decor.webp` quedó huérfana (se quitó del kit de vidrio el 2026-08-07).
- 🔴 **FALTA: video demo del mecanismo** (lo genera el user).

## 6. Known Issues
- 2026-08-07 — 🟠 **"+200 clientes felices" sin verificar** contra órdenes reales.
- 2026-08-07 — 🟠 Los títulos del catálogo en la DB contienen guion largo. Hay que renombrarlos desde el Dashboard.
- 2026-08-07 — 🟡 `Review.title` ya no se renderiza, pero sigue en la interfaz y en `reviews.ts`.
- 2026-07-31 — 🟠 Nombres viejos hardcodeados en el **footer de `EcommerceTemplate.tsx`** y FAQ de PDP dice "concreto".
- 2026-07-31 — 🔴 `ecommerce--update-product` NO persiste `compare_at_price`. Workaround: Dashboard manual.
- 2026-07-31 — 🟠 Checkout: 20 inicios → 1 compra en 30d con 0 errores JS.
- 2026-07-31 — 🟡 `lov-search-files` devuelve 0 resultados incluso para strings triviales. Usar `lov-view` con rutas directas.
- 2026-07-31 — 🟡 Autocapture de clics parece desactivado en PostHog.
- 2026-07-25 — 🟡 Perlas/Reserva/Dúo/Trío NO están en categoría del menú (solo "Todos").

## 7. Pending / Future Sessions
- [ALTA] Medir addtocart móvil el 2026-08-14 vs baseline 4.0% y registrar Result en `cro-log.md`.
- [ALTA] Footer de `EcommerceTemplate.tsx`: nombres de producto viejos → hacerlos dinámicos o actualizar a mano.
- [ALTA] User: redirigir anuncios Meta al Kit Vela Rellenable · Vaso de Vidrio.
- [ALTA] VIDEO DEMO (lo graba el user) → primer slide del carrusel de pasos y del carrusel móvil de la PDP.
- [MED] Considerar aplicar el mismo `ProductStepsCarousel` en la landing (`IndexUI.tsx` usa `STEPS` con grid propio).
- [MED] Reseñas: pedir al owner los nombres reales de clientas antes de escalar pauta.
- [MED] FAQ de kit-vaso-de-concreto sigue diciendo "concreto" → cambiar a cerámica.
- [MED] Cambiar CTA del hero de `IndexUI.tsx` → `/productos/kit-vaso-de-vidrio`.
- [MED] Encuesta PostHog de salida en PDP móvil: "¿Qué te frenó de comprar hoy?".
- [MED] `PDP_HEADLINE`/`PDP_INCLUDES`/`PDP_VALUE_ANCHOR` para bowl-negro, vaso-transparente y pack de mechas.
- [MED] Barrer el resto del sitio buscando guiones largos (—) en copy.
- [MED] Pedir al user foto real del paso "Renueva".
- [MED] FASE AROMAS: lanzar esencias propias dunaru.
- [BAJA] Banners de colección (image null).
- [BAJA] Borrar huérfanos: `public/favicon.svg`, `public/tmp-upload-hero.webp`, `public/pdp-aroma.webp`, `public/paso-inserta.webp`, `public/paso-enciende.webp`, `public/pdp-vaso-decor.webp`.