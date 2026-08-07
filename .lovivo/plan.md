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
- Estética: editorial, mínima, mucho aire. Mobile-first.
- **TOP BAR** (`EcommerceTemplate.tsx`): barra fija carbón, 2 items: Truck "Envío gratis a todo México" · Heart ámbar "+200 clientes felices".
- **HEADER OVERLAY** (nuevo 2026-08-07): `EcommerceTemplate` y `PageTemplate` aceptan prop `headerOverlay`. Cuando es true: header `fixed top-0`, translúcido (`bg-background/55 backdrop-blur-md`) y sólido al hacer scroll o abrir el menú móvil; el wrapper de contenido pierde el `py-6` (que causaba la franja blanca). **Solo `IndexUI` lo usa** (hero a sangre).
- **MENÚ "Productos"**: dropdown en header con `PRODUCT_CATEGORIES`.
- **PDP secciones** (`ProductStorySections.tsx`): garantías → 4 pasos → bloques editoriales → Reviews → tabla comparativa → FAQ → pago seguro.
- **Tabla comparativa**: `CompareRow.dunaru/traditional` acepta `boolean | string`.
- **`ProductQuantityTiers`**: labels genéricos vía props (`unitLabel` "Bolsa", `extraPerUnit` 30, `extraLabel` "mechas").
- **`PERLAS_BENEFIT_BLOCKS`**: 5 bloques compartidos por los 4 productos de cera.
- **4 PASOS duplicados en 2 lugares**: `HOW_IT_WORKS_STEPS` (PDP) y `STEPS` en `IndexUI.tsx` (landing). Cambiar en ambos.
- **📐 RATIO DE IMAGEN DE PRODUCTO = 4:5 (1122×1402 px)** + `object-cover`.
- **LANDING — PRECIOS DINÁMICOS (2026-08-07)**: `IndexUI.tsx` ya NO hardcodea precios/títulos. Usa `buildCatalog(logic.products)` → mapa `slug → {title, price, compare, img}` con `formatMoney(x, 'MXN')`. `CATALOG_FALLBACK` solo es respaldo mientras carga la red. Secciones dinámicas: "¿Cómo quieres empezar?", "Quiero decorar más" (`VOLUME_META`), "Combina tonos" (`BUNDLE_META`).
- ⚠️ Aún hay nombres de producto hardcodeados en el **footer de `EcommerceTemplate.tsx`**.

---

## 3. Active Plan — Medir el efecto de los cambios CRO

**Estado**: 3ª ronda de ajustes (landing) implementada 2026-08-07. Falta el video demo (lo graba el user).

### Baseline a batir (ver `.lovivo/cro-log.md`)
- Móvil 7d: 151 únicos vieron producto → 6 addtocart = **4.0%** → **0 compras**.
- Objetivo mínimo: **8% addtocart en móvil**.

### Qué medir en la próxima sesión
1. `posthog-query`: viewcontent → addtocart en móvil, 7 días post-cambio vs previos.
2. `posthog-session-list` móvil: ¿siguen las sesiones con 0 clics?
3. initiatecheckout → purchase.

---

## 4. Recent Changes
- 2026-08-07 — ✅ **LANDING: precios y nombres desde la DB**. `IndexUI.tsx` ahora deriva título/precio/precio tachado/imagen de `logic.products` (`buildCatalog`). Se eliminaron los arrays `PRODUCTS` (código muerto) y `BUNDLES` hardcodeados.
- 2026-08-07 — ✅ **"Quiero decorar más"**: los 3 pills de distinto ancho → grid de 3 tarjetas de igual altura, badge flotante arriba a la izquierda, precio + tachado + flecha.
- 2026-08-07 — ✅ **HEADER OVERLAY**: eliminada la franja blanca entre menú y hero. Header fijo translúcido sobre la imagen (prop `headerOverlay` en `EcommerceTemplate` + `PageTemplate`; `py-6` del wrapper de `PageTemplate` era la causa).
- 2026-08-07 — ✅ **COPY sin guiones largos**: `BrandStorySection.tsx` ("tu vela, ni el recipiente que amas,") + 2 FAQ de la landing. También "recargables" → "rellenables".
- 2026-08-07 — ✅ **TABLA COMPARATIVA**: fila "Costo por hora de luz" ($ vs $$$) + "El aroma lo eliges tú" (✓/✗).
- 2026-08-07 — ✅ **TOP BAR estático**: "Envío gratis a todo México" · "+200 clientes felices".
- 2026-08-07 — ✅ **Selector "Lleva más y ahorra"**: "1 Bolsa de 500 g / + 30 mechas incluidas".
- 2026-07-31 — ✅ **RENOMBRE DE CATÁLOGO (9 productos, slugs intactos)**.
- 2026-07-31 — ✅ **LIMPIEZA DEL CARGO DE $99**.
- 2026-07-31 — 🐛 `ecommerce--update-product` no persiste `compare_at_price`.
- 2026-07-31 — ✅ **CRO PASO 1+2+4**: bloque promesa móvil, sticky CTA, `PDP_INCLUDES`, Reviews arriba de tabla y FAQ.
- 2026-07-31 — 🔍 **AUDITORÍA CRO COMPLETA**. Embudo móvil: 151 → 6 al carrito (4%) → 0 compras.
- 2026-07-31 — ✅ IMÁGENES REALES del user: pasos "Inserta"/"Enciende" y bloque aroma.
- 2026-07-28 — ✅ AROMA en PDP rellenables.
- 2026-07-25 — ✅ PDP para los 9 productos (`PDP_CONTENT`).

## 5. Image Inventory
- **📐 Todas las fotos de producto son 1122×1402 px (4:5), webp.**
- **Colecciones**: sin imagen asignada.
- **FAVICON**: `/favicon.png` (256x256).
- **FOTOS REALES catálogo**: `product-images/products/<hash>.webp`. 9 productos, 75 imágenes.
- **Hero desktop**: `/hero-dunaru.webp` · **Hero móvil**: `/hero-dunaru-mobile.webp` · **Casa real**: `/casa-real-{sala,comedor,recibidor}.webp`
- **4 PASOS** — base `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/`:
  - Vierte → `/paso-vierte.webp` · Inserta → `1785521743155-htw95tvbi4b.webp` · Enciende → `1785521743156-3qeskqe43gv.webp` · Renueva → `/paso-renueva.webp` (generada, pendiente foto real)
- **Bloque aroma** → `1785521743156-7ucg5c0kwb7.webp`
- 🔴 **FALTA: video demo del mecanismo** (lo genera el user).

## 6. Known Issues
- 2026-08-07 — 🟠 **"+200 clientes felices" sin verificar** contra órdenes reales.
- 2026-08-07 — 🟠 Los títulos del catálogo en la DB contienen guion largo ("Recarga para vela rellenable — 500 g"). La landing los muestra tal cual. Si el owner quiere quitarlos, hay que renombrar desde el Dashboard.
- 2026-07-31 — 🟠 Nombres viejos hardcodeados en el **footer de `EcommerceTemplate.tsx`** y FAQ de PDP dice "concreto".
- 2026-07-31 — 🔴 `ecommerce--update-product` NO persiste `compare_at_price`. Workaround: Dashboard manual.
- 2026-07-31 — 🟠 Checkout: 20 inicios → 1 compra en 30d con 0 errores JS.
- 2026-07-31 — 🟡 `lov-search-files` devuelve 0 resultados incluso para strings triviales (índice roto). Usar `lov-view` con rutas directas.
- 2026-07-31 — 🟡 Autocapture de clics parece desactivado en PostHog.
- 2026-07-25 — 🟡 Perlas/Reserva/Dúo/Trío NO están en categoría del menú (solo "Todos").

## 7. Pending / Future Sessions
- [ALTA] Footer de `EcommerceTemplate.tsx`: nombres de producto viejos → hacerlos dinámicos o actualizar a mano.
- [ALTA] Medir addtocart móvil post-cambio vs baseline 4.0% y registrar Result en `cro-log.md`.
- [ALTA] User: redirigir anuncios Meta al Kit Vela Rellenable · Vaso de Vidrio.
- [ALTA] User: verificar tarifa de envío nacional y probar checkout desde MTY/Mérida.
- [ALTA] VIDEO DEMO (lo graba el user) → primer slide del carrusel móvil de la PDP y en "Cómo funciona".
- [MED] FAQ de kit-vaso-de-concreto sigue diciendo "concreto" → cambiar a cerámica.
- [MED] Cambiar CTA del hero de `IndexUI.tsx` → `/productos/kit-vaso-de-vidrio`.
- [MED] Encuesta PostHog de salida en PDP móvil: "¿Qué te frenó de comprar hoy?".
- [MED] `PDP_HEADLINE`/`PDP_INCLUDES`/`PDP_VALUE_ANCHOR` para bowl-negro, vaso-transparente y pack de mechas.
- [MED] Barrer el resto del sitio buscando guiones largos (—) en copy.
- [MED] Pedir al user foto real del paso "Renueva".
- [MED] FASE AROMAS: lanzar esencias propias dunaru.
- [BAJA] Banners de colección (image null).
- [BAJA] Borrar huérfanos: `public/favicon.svg`, `public/tmp-upload-hero.webp`, `public/pdp-aroma.webp`, `public/paso-inserta.webp`, `public/paso-enciende.webp`.