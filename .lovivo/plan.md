# Store Plan — dunaru
<!-- Auto-maintained by Lovivo AI. READ THIS FIRST. UPDATE IT LAST. -->

## 1. Brand & Context
- Brand name: **dunaru** (dunaru.mx)
- Tagline del mood board: **"Sculpted light. Naturally refined."** · Bajada: *Candle sand & wax pearls*
- Palabras clave de marca (mood board): EARTHY · ARTFUL · SENSORY · ATMOSPHERIC · REFINED
- Product: Velas perladas **rellenables** — **gránulos finos de cera tipo arena** (NO perlas grandes) + mechas de algodón. Material visual = arena/couscous fino.
- ⚠️ VOCABULARIO: usar **"rellenable"** (NO "recargable").
- ⚠️ ESTILO DE COPY: **PROHIBIDO el guion largo (—) en texto de la tienda.** Usar comas, dos puntos o "·".
- Tesis: no vendemos "cera para velas". Vendemos una forma simple de crear luz y decoración en el recipiente que ya tienes.
- **AROMA**: las velas nacen SIN perfume. Posicionamiento = **"el aroma lo eliges tú"**.
- Target: Mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO, decoración + hogar + regalo
- Market: México. Moneda MXN. Idioma: español de México.
- Tono: claro, cálido, directo. Sin tecnicismos.
- Pagos: **A meses sin intereses vía Stripe** (hasta 6 meses). ⚠️ NUNCA nombrar "Stripe" ni "Mercado Pago" en la UI.
- Envío: **ENVÍO GRATIS A TODO MÉXICO, SIN MÍNIMO.**
- WhatsApp REAL: `525531215386` (+52 55 3121 5386).
- REGLA DE INTEGRIDAD: **NUNCA reseñas falsas.** Las 15 reseñas SÍ son reales. Prueba social usa `getReviewStats()` (4.9 / 15).
- ⚠️ "+200 clientes felices" (top bar y `PdpSocialProof`): dato del owner, NO verificado contra la DB.
- REGLA DE INTEGRIDAD (precios): **NUNCA inventar precios tachados.**
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`
- RUTAS EN ESPAÑOL: producto = `/productos/:slug`, paquete = `/paquete/:slug`, carrito = `/carrito`, checkout = `/pagar`, categoría = `/categorias/:handle`.
- Competencia: **VelaVita.cl** y **Foton (US)**. Referencia de UI de PDP que le gusta al owner: **rodata.mx**.
- ⚠️ **kit-vaso-de-concreto** es en realidad de **CERÁMICA**. El slug no se puede cambiar. Todo el COPY visible ya dice cerámica.
- ⚠️ **PRODUCTO ANCLA DE PAUTA = `kit-vaso-de-vidrio`.**
- ⚠️ El owner renombra y repriza productos desde el Dashboard. **NUNCA hardcodear precios ni títulos.**
- ⚠️ **STAGING**: los cambios se commitean AL FINAL del turno. Si el owner dice "no se aplicó", pedir refresh duro antes de re-implementar.

### CATÁLOGO (slugs SIEMPRE intactos — los anuncios de Meta dependen de ellos)
Snapshot 2026-08-07 (fuente de verdad = la DB):
| Slug | Título | Precio | Compare | $/g cera |
|---|---|---|---|---|
| perlas-originales-500-g | Recarga para vela rellenable — 500 g + 30 mechas | $499 | $599 | $1.00 |
| reserva-1-kg | Recarga para vela rellenable — 1 Kg + 60 mechas | $799 | $999 | $0.80 |
| kit-vaso-de-vidrio | Kit Vela Rellenable · Vaso de Vidrio | $799 | $899 | — |
| kit-vaso-de-concreto | Kit Vela Rellenable · Bowl de Cerámica | $999 | $1,199 | — |
| d-o-de-tonos | Dúo de Tonos · 1 kg de Cera Perlada | $1,099 | $1,398 | $1.10 ⚠️ |
| tr-o-de-tonos | Trío de Tonos · 1.5 kg de Cera Perlada | $1,399 | $1,499 | $0.93 |
| bowl-negro | Bowl de Cerámica Negro | $399 | $499 | — |
| vaso-extra-transparente | Vaso de Vidrio Transparente | $249 | — | — |
| pack-30-mechas | Pack de 30 Mechas de Algodón | $99 | — | — |
- ⚠️ **ESCALERA DE PRECIO ROTA**: el Dúo (1 kg, $1.10/g) es más caro por gramo que la Reserva 1 kg ($0.80/g).
- Price rule activa: `perlas-originales-500-g` volumen → 2 uds = 10% OFF, 3 uds = 15% OFF (flat, en checkout).

## 2. Design System — **v2 "Sculpted light" (2026-08-19)**

### Paleta (todo en HSL en `src/index.css`, expuesto como tokens `dunaru-*`)
| Token | Hex aprox | Uso |
|---|---|---|
| `dunaru-marfil` / `--background` | #F3EDDF | Warm Ivory, fondo base |
| `dunaru-arena` / `--muted` | #E7DBC7 | Travertino claro, secciones alternas |
| `dunaru-travertino` | #DCCDB6 | Bordes, divisores, barras |
| `dunaru-nacar` | #F1E9DC | Tarjetas (madreperla) |
| `dunaru-terracota` / `--secondary` | #C0603C | **Color firma**: eyebrows, acentos, CTA de hero |
| `dunaru-terracota-suave` | #D69A7C | Terracota sobre fondos oscuros |
| `dunaru-ocre` / `--accent` | #C89A2A | Estrellas de reseñas, ratings |
| `dunaru-olivo` / `--primary` | #3A4A2C | **CTA principal**, top bar, footer, hero overlay |
| `dunaru-periwinkle` | #97A9E0 | Contrapunto frío, uso mínimo/editorial |
| `dunaru-champagne` | #B08A55 | **Ahora es LATÓN**, no oro pálido. Filetes y divisores |
| `dunaru-carbon` / `--foreground` | #2A2F2B | Charcoal con matiz verde |
| `dunaru-onix` | #1E211E | Overlays oscuros |
| `dunaru-ambar` | #D89A57 | Llama / halo de luz |

### Clases de material (definidas en `index.css`)
- `surface-travertino` · `surface-travertino-fuerte` — piedra porosa (foto real `/textura-travertino.webp`)
- `surface-arena-rastrillada` — arena zen (foto real `/textura-arena.webp`)
- `band-arena` — banda separadora de 88 px con máscara de degradado
- `surface-nacar` — madreperla iridiscente (tarjetas)
- `surface-acanalado` — cerámica terracota estriada (badges/bloques)
- `surface-laton` — latón cepillado (filetes de 1 px, eyebrows)
- `surface-terracota` · `surface-olivo` · `surface-periwinkle` — superficies plenas con su foreground
- `texture-grano` — overlay de grano vía `::after` (requiere `relative` en el padre)
- `glow-vela` — halo radial ámbar · `shape-arco` — forma de arco
- `elev-suave` / `elev-media` / `elev-relieve` — sombras CÁLIDAS (nunca negro puro)
- `eyebrow` — 11 px, uppercase, tracking .22em, color terracota
- ⚠️ `elev-*` son clases CSS planas: **NO admiten prefijo `hover:`**. Para hover usar `hover:shadow-lg`.
- `body` lleva grano de papel + halo cálido superior fijos.

### Tipografía
- Display: Instrument Serif → `font-display` · Body/UI: Manrope → `font-body`
- Eyebrows: 11 px uppercase, tracking `0.22em`, casi siempre con filete de latón a los lados.

### Variantes de botón (`src/components/ui/button.tsx`)
`default` (olivo + elev-suave) · `secondary` (terracota plano) · **`terracota`** (gradiente firma) · **`laton`** (latón cepillado) · `outline` (borde travertino, hover arena) · `ghost` (hover arena) · `link` (terracota)

### Reglas de layout que NO cambian
- Estética: editorial, mínima, mucho aire. Mobile-first. **Pero en PDP, landing y checkout la densidad gana al aire.**
- **TOP BAR** (`EcommerceTemplate.tsx`): barra fija OLIVO, 2 items. **NO se replica en el checkout a propósito.**
- **HEADER OVERLAY**: `EcommerceTemplate` y `PageTemplate` aceptan prop `headerOverlay`. Solo `IndexUI` lo usa.
- **🛒 ORDEN OFICIAL DEL BUY BOX** (`ProductPageUI.tsx`):
  1. Título + precio + "6 pagos de $X a meses sin intereses" + rating
  2. `PDP_BENEFITS[slug]` = 3 bullets · 3. Selector de variantes · 4. Cantidad compacta
  5. Add-ons / `ProductQuantityTiers` · 6. `<DeliveryEstimate />` · 7. CTA primario `h-12` con precio
  8. CTA secundario `h-11` outline · 9. Micro-línea `Lock` "Pago seguro · Compra protegida"
  10. 3 badges · 11. `<PdpSocialProof />` · 12. WhatsApp · 13. Acordeones CERRADOS
- ⚠️ `TIER_SELECTOR_SLUGS` (hoy solo `perlas-originales-500-g`) muestra `ProductQuantityTiers` **EN LUGAR DE** `ProductAddOns` → esa PDP no tiene cross-sell.
- **SELECTOR DE VARIANTES**: `optionLabel(name, slug)` renombra "Color" → **"Color de la cera"**, excepto en `CONTAINER_ONLY_SLUGS`.
- **`src/components/PdpTrust.tsx`** exporta `getDeliveryRange()`, `DeliveryEstimate`, `PdpSocialProof({ slug?, linkable? })`.
- **📄 ORDEN OFICIAL DE LA PDP** (`ProductStorySections.tsx`): garantías → `ProductStepsCarousel` → reseñas → bloques editoriales → tabla comparativa → FAQ → CTA de cierre
- **📐 RATIO DE IMAGEN DE PRODUCTO = 4:5 (1122×1402 px)** + `object-cover`.
- **`ProductStepsCarousel.tsx`** compartido PDP + landing. Props: `steps`, `title`, `eyebrow`, `id`, `bleed`, `background` (default ahora `surface-travertino`), `footer`.

### 🏠 LANDING (`src/pages/ui/IndexUI.tsx`) — orden oficial
1. Hero (overlay olivo + `glow-vela`) · 2. Tira de beneficios (`surface-travertino`) · 3. Cómo funciona · 4. **Elige tu vela** (`surface-arena-rastrillada`, 6 tarjetas 4:5 en `surface-nacar`) · 5. `<Reviews />` · 6. `band-arena` → Elige tu tono · 7. `<CasaRealSection />` · 8. `<BrandStorySection />` (`surface-nacar`) · 9. FAQ (`surface-travertino`) · 10. Cierre newsletter (`surface-olivo`)
- ⚠️ **Prohibido duplicar SKUs en varias secciones.** Precios y títulos SIEMPRE dinámicos vía `buildCatalog(logic.products)`.

### 🧾 CHECKOUT (`src/pages/ui/CheckoutUI.tsx`) — reglas fijas
- Header minimal, solo logo. Sin nav, sin top bar promocional.
- Móvil: `MobileOrderSummary` (CERRADO) → `ShippingPromise` → `PdpSocialProof linkable={false}` → SSL → PayPal → wallets → email → dirección → aviso MSI → tarjeta → estrellas → CTA → badges + WhatsApp.
- `ShippingPromise` resuelve el envío desde el primer render. **Nunca volver a poner "Pendiente".**
- `CouponSection` colapsado y gris al final del resumen.

---

## 3. Active Plan — Terminar de propagar el look v2 + P0 de la PDP de perlas

**Estado del rediseño**: base completa (tokens, texturas, botones, landing, header/footer, reviews, pasos). **Falta propagar a PDP, carrito, checkout y páginas secundarias.**

### Siguiente paso inmediato (rediseño)
1. `ProductPageUI.tsx` + `ProductStorySections.tsx`: cambiar fondos planos por `surface-travertino` / `surface-nacar`, badges a `surface-acanalado`, acentos a terracota.
2. `CartUI.tsx` / `CheckoutUI.tsx`: tarjetas a `surface-nacar`, bordes a `dunaru-travertino`. **No tocar la arquitectura del checkout.**
3. `ProductCard.tsx`, `CollectionCard.tsx`, `PdpTrust.tsx`, `NewsletterSection.tsx`: mismo barrido.
4. Barrer `text-dunaru-champagne` restante: si es acento de texto → `text-dunaru-terracota`; si es filete/divisor → dejar champagne (ahora latón).

### P0 CRO de `perlas-originales-500-g` (diagnóstico 2026-08-07, sin implementar)
1. Renombrar producto + H1: quitar la palabra "Recarga". Slug INTACTO.
2. Foto #1 = resultado (bowl encendido en casa real), no packshot.
3. Bloque "¿Te sirve tu recipiente?" arriba del selector.
4. Rehacer `ProductQuantityTiers` como "elige tus tonos".

### P1 / P2 CRO
5. Infografías en la galería · 6. Restaurar cross-sell · 7. Arreglar precio del Dúo (Dashboard, lo hace el owner) · 8. Encuesta PostHog de salida · 9. Evaluar accesorio de AROMA.

### Método
122 usuarios/mes en esa PDP → **volumen insuficiente para A/B test**. Medición secuencial antes/después con `posthog-query`.

### Decisiones que NO hay que revertir por accidente
- Sin banner promocional en el checkout. Resumen cerrado por defecto en móvil. Cupón degradado.
- Landing sin secciones duplicadas de producto.
- **El fondo NO es crema plano**: cada sección alterna material (travertino / arena rastrillada / nácar / olivo).

---

## 4. Recent Changes
- 2026-08-19 — 🎨 **REDISEÑO v2 "Sculpted light"** desde el mood board del owner. Nueva paleta (terracota, ocre, olivo, charcoal, periwinkle, latón), 2 texturas fotográficas generadas, 10+ clases de material, sombras cálidas, nuevas variantes de botón. Aplicado a `index.css`, `tailwind.config.ts`, `button.tsx`, `EcommerceTemplate`, `IndexUI`, `Reviews`, `ProductStepsCarousel`, `BrandStorySection`, `CasaRealSection`. **Sin tocar textos, arquitectura ni fotos de producto.**
- 2026-08-07 — 🔍 **AUDITORÍA PDP `perlas-originales-500-g`** (sin cambios). 8 hallazgos + análisis de velavita.cl y fotoncandle.com. Detalle en `.lovivo/cro-log.md`.
- 2026-08-07 — ✅ **AUDITORÍA DE LANDING MÓVIL**: 13 secciones → 9. Scroll móvil ≈ 40% más corto.
- 2026-08-07 — ✅ **CLARIDAD DE VARIANTE + CERÁMICA**: `optionLabel()` → "Color de la cera"; barrido "concreto" → "cerámica".
- 2026-08-07 — ✅ **AUDITORÍA DE CHECKOUT**: `ShippingPromise`, resumen móvil cerrado, `CouponSection`, MSI bajo el Total.
- 2026-08-07 — ✅ **AUDITORÍA PDP kit-vaso-de-vidrio**: `DeliveryEstimate`, `PdpSocialProof`, acordeones cerrados.
- 2026-08-07 — ✅ **BUY BOX REDISEÑADO**: `PDP_BENEFITS`, cantidad compacta, CTA `h-12` con precio.
- 2026-08-07 — ✅ **PASOS EN CARRUSEL**: `ProductStepsCarousel.tsx`.
- 2026-08-07 — ✅ **PDP REORDENADA**: prueba social de la posición 5 a la 3.
- 2026-08-07 — ✅ **PDP más densa** + **`Reviews.tsx` compacto**.
- 2026-08-07 — ✅ **LANDING: precios y nombres desde la DB** (`buildCatalog`).
- 2026-08-07 — ✅ **HEADER OVERLAY** + **COPY sin guiones largos** + **TABLA COMPARATIVA**.
- 2026-07-31 — ✅ **RENOMBRE DE CATÁLOGO (9 productos, slugs intactos)**.
- 2026-07-31 — 🔍 **AUDITORÍA CRO COMPLETA**. Embudo móvil: 151 → 6 al carrito (4%) → 0 compras.

## 5. Image Inventory
- **📐 Todas las fotos de producto son 1122×1402 px (4:5), webp.** 9 productos, 75 imágenes en `product-images/products/`.
- **🆕 TEXTURAS v2** (repo + storage): `/textura-travertino.webp` (1232×816) y `/textura-arena.webp` (1232×816). Usadas por `surface-travertino`, `surface-arena-rastrillada` y `band-arena`.
- ⚠️ **Foto #1 de `perlas-originales-500-g` = `x3azemqdof.webp`** (packshot de bolsa). Candidata #1 a reemplazo.
- **Colecciones**: sin imagen asignada. **FAVICON**: `/favicon.png` (256x256).
- **UGC de clientas** (5 fotos): constante `UGC` en `src/data/reviews.ts`.
- **Hero desktop**: `/hero-dunaru.webp` · **Hero móvil**: `/hero-dunaru-mobile.webp` · **Casa real**: `/casa-real-{sala,comedor,recibidor,recamara}.webp`
- **4 PASOS** — base `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/`:
  - Vierte → `/paso-vierte.webp` · Inserta → `1785521743155-htw95tvbi4b.webp` · Enciende → `1785521743156-3qeskqe43gv.webp` · Renueva → `/paso-renueva.webp`
- **Bloque aroma** → `1785521743156-7ucg5c0kwb7.webp`
- 🟡 `/pdp-vaso-decor.webp` quedó huérfana.
- 🔴 **FALTA: video demo del mecanismo** (lo genera el user).
- 🟡 Los `steps` de `kit-vaso-de-concreto` siguen usando `PLACEHOLDER`.
- 🟡 **Los heroes y las fotos de producto son de la paleta v1** (marfil/champagne). Con la paleta v2 conviven bien, pero unas fotos con más terracota/olivo elevarían la coherencia.

## 6. Known Issues
- 2026-08-19 — 🟡 **Rediseño v2 a medio propagar**: PDP, carrito, checkout y páginas legales siguen con superficies planas heredadas. No rompe nada (heredan tokens), pero se ven menos ricas que la landing.
- 2026-08-19 — 🟡 `elev-suave/media/relieve` no funcionan con prefijo `hover:` (son CSS plano, no utilidades Tailwind).
- 2026-08-07 — 🔴 **`perlas-originales-500-g` se llama "Recarga"** y recibe el grueso del tráfico frío de Meta.
- 2026-08-07 — 🟠 **Sin cross-sell en `perlas-originales-500-g`**: `TIER_SELECTOR_SLUGS` sustituye `ProductAddOns`.
- 2026-08-07 — 🟠 **Escalera de precio por gramo rota**: Dúo 1 kg ($1.10/g) más caro que Reserva 1 kg ($0.80/g).
- 2026-08-07 — 🟡 `getReviewStats()` es global (4.9/15) para todas las fichas, no por SKU.
- 2026-08-07 — 🟡 Las fotos de `TONOS` en la landing son packshots, no escenas de ambiente.
- 2026-08-07 — 🟠 **SLUG `kit-vaso-de-concreto` es incorrecto** (el producto es de cerámica). Decisión: **dejarlo**.
- 2026-08-07 — 🟠 **"+200 clientes felices" sin verificar** contra órdenes reales.
- 2026-08-07 — 🟡 `ShippingPromise` asume envío gratis cuando `shippingCost === 0`.
- 2026-08-07 — 🟠 Los títulos del catálogo en la DB contienen guion largo.
- 2026-08-07 — 🟡 `PDP_BENEFITS` solo cubre 6 slugs.
- 2026-07-31 — 🟠 Footer de `EcommerceTemplate.tsx`: 3 nombres de producto hardcodeados.
- 2026-07-31 — 🔴 `ecommerce--update-product` NO persiste `compare_at_price`. Workaround: Dashboard manual.
- 2026-07-31 — 🔴 `lov-search-files` devuelve 0 resultados incluso para strings triviales. **Usar `lov-view` con rutas directas siempre.**
- 2026-07-31 — 🟡 Autocapture de clics parece desactivado en PostHog.
- 2026-07-06 — 🔴 `meta-capi` edge function falla en preview.

## 7. Pending / Future Sessions
- [ALTA] Propagar el look v2 a PDP, carrito y checkout (ver sección 3, paso 1-4).
- [ALTA] Revisar la landing v2 con `screenshot-preview` móvil + desktop tras el deploy y ajustar contraste si hace falta.
- [ALTA] Ejecutar P0 de la PDP de perlas en cuanto el owner dé OK.
- [ALTA] Medir el 2026-08-14: addtocart móvil vs 4.0%, initiatecheckout→purchase vs 5%, scroll depth en `/`.
- [ALTA] `PDP_BENEFITS` para bowl-negro, vaso-extra-transparente y pack-30-mechas.
- [ALTA] Footer de `EcommerceTemplate.tsx`: nombres de producto → dinámicos.
- [ALTA] User: redirigir anuncios Meta al Kit Vela Rellenable · Vaso de Vidrio.
- [ALTA] VIDEO DEMO (lo graba el user) → primer slide del carrusel de pasos.
- [MED] Regenerar hero desktop/móvil con la paleta v2 (más terracota y olivo).
- [MED] Generar 3 fotos lifestyle reales para "Elige tu tono".
- [MED] Fotos reales para los `steps` de kit-vaso-de-concreto.
- [MED] Encuesta PostHog de salida en `/pagar` y en la PDP de perlas.
- [MED] Reseñas: pedir al owner los nombres reales de clientas antes de escalar pauta.
- [MED] CTA del hero de `IndexUI.tsx` → `/productos/kit-vaso-de-vidrio`.
- [BAJA] Banners de colección y borrar imágenes huérfanas.