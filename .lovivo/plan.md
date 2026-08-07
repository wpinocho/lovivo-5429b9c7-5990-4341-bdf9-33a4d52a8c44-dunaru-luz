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
- ⚠️ 2026-08-07 — "+200 clientes felices" en el top bar y en `PdpSocialProof`: dato dado por el owner, NO verificado contra la DB.
- REGLA DE INTEGRIDAD (precios): **NUNCA inventar precios tachados.**
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`
- RUTAS EN ESPAÑOL: producto = `/productos/:slug`, paquete = `/paquete/:slug`, carrito = `/carrito`, checkout = `/pagar`, **categoría = `/categorias/:handle`**.
- Competencia: **VelaVita.cl** (LATAM) y **Foton (US)**. Referencia de UI de PDP que le gusta al owner: **rodata.mx**.
- ⚠️ **kit-vaso-de-concreto** es en realidad de **CERÁMICA**. El slug sigue diciendo "concreto" y **NO se puede cambiar con las tools**. Todo el COPY visible ya dice cerámica (2026-08-07).
- ⚠️ **PRODUCTO ANCLA DE PAUTA = `kit-vaso-de-vidrio`.**
- ⚠️ El owner renombra y repriza productos desde el Dashboard con frecuencia. **NUNCA hardcodear precios ni títulos.**
- ⚠️ **STAGING**: los cambios se commitean AL FINAL del turno. Si el owner dice "no se aplicó", casi siempre es caché: pedir refresh duro antes de re-implementar.

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
- Estética: editorial, mínima, mucho aire. Mobile-first. **Pero en PDP, landing y checkout la densidad gana al aire.**
- **TOP BAR** (`EcommerceTemplate.tsx`): barra fija carbón, 2 items: Truck "Envío gratis a todo México" · Heart ámbar "+200 clientes felices". **NO se replica en el checkout a propósito.**
- **HEADER OVERLAY**: `EcommerceTemplate` y `PageTemplate` aceptan prop `headerOverlay`. Solo `IndexUI` lo usa.
- **🛒 ORDEN OFICIAL DEL BUY BOX** (`ProductPageUI.tsx`):
  1. Título + precio + "6 pagos de $X a meses sin intereses" + rating
  2. `PDP_BENEFITS[slug]` = 3 bullets · 3. Selector de variantes · 4. Cantidad compacta
  5. Add-ons / `ProductQuantityTiers` · 6. `<DeliveryEstimate />` · 7. CTA primario `h-12` con precio
  8. CTA secundario `h-11` outline · 9. Micro-línea `Lock` "Pago seguro · Compra protegida"
  10. 3 badges · 11. `<PdpSocialProof />` · 12. WhatsApp · 13. Acordeones CERRADOS
- **SELECTOR DE VARIANTES**: `optionLabel(name, slug)` renombra "Color" → **"Color de la cera"**, excepto en `CONTAINER_ONLY_SLUGS` (bowl-negro, vaso-extra-transparente, pack-30-mechas).
- **`src/components/PdpTrust.tsx`** exporta `getDeliveryRange()`, `DeliveryEstimate`, `PdpSocialProof({ slug?, linkable? })`.
- **📄 ORDEN OFICIAL DE LA PDP** (`ProductStorySections.tsx`): garantías → `ProductStepsCarousel` → reseñas → bloques editoriales → tabla comparativa → FAQ → CTA de cierre
- **📐 RATIO DE IMAGEN DE PRODUCTO = 4:5 (1122×1402 px)** + `object-cover`.
- **`ProductStepsCarousel.tsx`** es **compartido PDP + landing**. Props: `steps`, `title`, `eyebrow`, `id`, `bleed` (default `true` = full-bleed dentro de un contenedor ya paddeado, como la PDP; `false` = sección propia de ancho completo, como la landing), `background`, `footer`.

### 🏠 LANDING (`src/pages/ui/IndexUI.tsx`) — orden oficial (2026-08-07)
1. **Hero** (`min-h-[92vh]`, imagen dedicada móvil `object-top`)
2. **Tira de beneficios** · `grid-cols-4` en UNA sola fila también en móvil. Labels cortos obligatorios.
3. **Cómo funciona** → `<ProductStepsCarousel bleed={false} background="bg-background" />`
4. **Elige tu vela** (`id="comprar"`) → `SHOP_CARDS`, rejilla `grid-cols-2 lg:grid-cols-3`, 6 tarjetas uniformes 4:5. **Única sección de producto de la landing.**
5. **`<Reviews />`** (prueba social, subida a propósito)
6. **Elige tu tono** → carrusel horizontal snap, peek 70%
7. **`<CasaRealSection />`** (ya era carrusel)
8. **`<BrandStorySection />`**
9. **FAQ** · 10. **Cierre newsletter + WhatsApp**
- ⚠️ **Prohibido volver a duplicar SKUs en varias secciones de la landing.** Dúo, Trío y Reserva 1 kg viven SOLO en `SHOP_CARDS`.
- Precios y títulos SIEMPRE dinámicos vía `buildCatalog(logic.products)`.

### 🧾 CHECKOUT (`src/pages/ui/CheckoutUI.tsx`) — reglas fijas (2026-08-07)
- Header minimal, **solo logo**. Sin nav, sin top bar promocional.
- **Móvil, orden**: `MobileOrderSummary` (CERRADO) → `ShippingPromise` → `PdpSocialProof linkable={false}` → SSL → PayPal → wallets → email → dirección → aviso MSI → tarjeta → estrellas → CTA → badges + WhatsApp + tarjetas.
- **`ShippingPromise`** resuelve el envío desde el primer render. **Nunca volver a poner "Pendiente".**
- **`CouponSection`**: colapsado, gris, al final del resumen, móvil Y escritorio. **Prohibido exponer el input abierto.**
- MSI como micro-línea bajo el Total + `paymentNoticeSlot` arriba de la tarjeta.

---

## 3. Active Plan — Medir el paquete PDP + Checkout + Landing

**Estado**: 3 rondas implementadas el 2026-08-07 (PDP, checkout, landing). Ninguna medida todavía.

### Baseline a batir
- PDP móvil 7d: 151 únicos → 6 addtocart = **4.0%** → **0 compras**.
- Checkout 30d: **20 initiatecheckout → 1 purchase = 5%**. Objetivo mínimo: **15%**.
- Landing: sin baseline de scroll depth. Medir antes/después con `posthog-query`.

### Qué medir el 2026-08-14
1. `posthog-query`: initiatecheckout → purchase (7d post-cambio vs previos).
2. viewcontent → addtocart en móvil.
3. Scroll depth en `/` móvil y clics home → PDP.
⚠️ Los cambios de PDP, checkout y landing se acumulan. La landing es aislable-ish: el tráfico pagado aterriza directo en PDP.

### Decisiones que NO hay que revertir por accidente
- **Sin banner promocional en el checkout** (cero links de navegación).
- **Resumen cerrado por defecto en móvil.**
- **Cupón degradado.**
- **Landing sin secciones duplicadas de producto** (ver sección 2).
- **"Por qué no es una vela normal" y "Combina tonos" eliminadas** de la landing por redundancia. Si alguien pide "más argumentos en la home", reforzar `BrandStorySection`, no crear secciones nuevas.

---

## 4. Recent Changes
- 2026-08-07 — ✅ **AUDITORÍA DE LANDING MÓVIL**: 13 secciones → 9. (a) beneficios en 1 fila `grid-cols-4`; (b) "Cómo funciona" → `ProductStepsCarousel` (nuevas props `bleed`/`background`/`eyebrow`/`id`/`footer`); (c) 3 bloques de producto fusionados en **"Elige tu vela"** (`SHOP_CARDS`, rejilla 2 col, 6 tarjetas uniformes); (d) `<Reviews />` subido a la posición 5; (e) "Elige tu tono" → carrusel snap; (f) eliminadas "Por qué no es una vela normal" y "Combina tonos"; (g) micro-ayuda WhatsApp bajo la rejilla. Scroll móvil ≈ 40% más corto.
- 2026-08-07 — ✅ **CLARIDAD DE VARIANTE + CERÁMICA**: `optionLabel()` → "Color de la cera"; barrido "concreto" → "cerámica" en `ProductStorySections.tsx` y footer.
- 2026-08-07 — ✅ **AUDITORÍA DE CHECKOUT**: `ShippingPromise`, resumen móvil cerrado, `CouponSection`, MSI bajo el Total, `PdpSocialProof`, WhatsApp bajo el CTA.
- 2026-08-07 — ✅ **AUDITORÍA PDP kit-vaso-de-vidrio**: `DeliveryEstimate`, `PdpSocialProof`, acordeones cerrados.
- 2026-08-07 — ✅ **BUY BOX REDISEÑADO**: `PDP_BENEFITS`, cantidad compacta, CTA `h-12` con precio.
- 2026-08-07 — ✅ **PASOS EN CARRUSEL**: `ProductStepsCarousel.tsx`.
- 2026-08-07 — ✅ **kit-vaso-de-vidrio**: eliminado el bloque "Tu vaso, también cuando no es vela".
- 2026-08-07 — ✅ **PDP REORDENADA**: prueba social de la posición 5 a la 3.
- 2026-08-07 — ✅ **PDP más densa** + **`Reviews.tsx` compacto**.
- 2026-08-07 — ✅ **LANDING: precios y nombres desde la DB** (`buildCatalog`).
- 2026-08-07 — ✅ **HEADER OVERLAY** + **COPY sin guiones largos** + **TABLA COMPARATIVA**.
- 2026-07-31 — ✅ **RENOMBRE DE CATÁLOGO (9 productos, slugs intactos)**.
- 2026-07-31 — 🔍 **AUDITORÍA CRO COMPLETA**. Embudo móvil: 151 → 6 al carrito (4%) → 0 compras.

## 5. Image Inventory
- **📐 Todas las fotos de producto son 1122×1402 px (4:5), webp.**
- **Colecciones**: sin imagen asignada. **FAVICON**: `/favicon.png` (256x256).
- **FOTOS REALES catálogo**: `product-images/products/<hash>.webp`. 9 productos, 75 imágenes.
- **UGC de clientas** (5 fotos): constante `UGC` en `src/data/reviews.ts`.
- **Hero desktop**: `/hero-dunaru.webp` · **Hero móvil**: `/hero-dunaru-mobile.webp` · **Casa real**: `/casa-real-{sala,comedor,recibidor,recamara}.webp`
- **4 PASOS** — base `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/`:
  - Vierte → `/paso-vierte.webp` · Inserta → `1785521743155-htw95tvbi4b.webp` · Enciende → `1785521743156-3qeskqe43gv.webp` · Renueva → `/paso-renueva.webp`
- **Bloque aroma** → `1785521743156-7ucg5c0kwb7.webp`
- 🟡 `/pdp-vaso-decor.webp` quedó huérfana.
- 🔴 **FALTA: video demo del mecanismo** (lo genera el user).
- 🟡 Los `steps` de `kit-vaso-de-concreto` siguen usando `PLACEHOLDER`.

## 6. Known Issues
- 2026-08-07 — 🟡 Las fotos de `TONOS` en la landing son packshots de producto, no escenas de ambiente. El copy promete "tres ambientes" pero la imagen no lo entrega. Candidato a generar 3 lifestyle reales.
- 2026-08-07 — 🟠 **SLUG `kit-vaso-de-concreto` es incorrecto** (el producto es de cerámica). Decisión actual: **dejarlo** (rompería los anuncios de Meta).
- 2026-08-07 — 🟠 **"+200 clientes felices" sin verificar** contra órdenes reales.
- 2026-08-07 — 🟡 El desktop coupon ya no usa `logic.couponInputRef`.
- 2026-08-07 — 🟡 `ShippingPromise` asume envío gratis cuando `shippingCost === 0`.
- 2026-08-07 — 🟠 Los títulos del catálogo en la DB contienen guion largo.
- 2026-08-07 — 🟡 `PDP_BENEFITS` solo cubre 6 slugs.
- 2026-07-31 — 🟠 Footer de `EcommerceTemplate.tsx`: 3 nombres de producto siguen hardcodeados.
- 2026-07-31 — 🔴 `ecommerce--update-product` NO persiste `compare_at_price`. Workaround: Dashboard manual.
- 2026-07-31 — 🟡 `lov-search-files` devuelve 0 resultados incluso para strings triviales. Usar `lov-view` con rutas directas.
- 2026-07-31 — 🟡 Autocapture de clics parece desactivado en PostHog.
- 2026-07-25 — 🟡 Perlas/Reserva/Dúo/Trío NO están en categoría del menú (solo "Todos").

## 7. Pending / Future Sessions
- [ALTA] Medir el 2026-08-14: addtocart móvil vs 4.0%, initiatecheckout→purchase vs 5%, scroll depth en `/`.
- [ALTA] Probar la landing y el checkout end-to-end con `browser-test` tras el deploy.
- [ALTA] `PDP_BENEFITS` para bowl-negro, vaso-extra-transparente y pack-30-mechas.
- [ALTA] Footer de `EcommerceTemplate.tsx`: nombres de producto → dinámicos.
- [ALTA] User: redirigir anuncios Meta al Kit Vela Rellenable · Vaso de Vidrio.
- [ALTA] VIDEO DEMO (lo graba el user) → primer slide del carrusel de pasos.
- [MED] Generar 3 fotos lifestyle reales para "Elige tu tono" (hoy son packshots).
- [MED] Fotos reales para los `steps` de kit-vaso-de-concreto.
- [MED] Considerar barra sticky de pago en móvil dentro del checkout.
- [MED] Encuesta PostHog de salida en `/pagar`.
- [MED] Reseñas: pedir al owner los nombres reales de clientas antes de escalar pauta.
- [MED] CTA del hero de `IndexUI.tsx` → `/productos/kit-vaso-de-vidrio` (hoy apunta a perlas).
- [MED] Barrer el resto del sitio buscando guiones largos (—) en copy.
- [BAJA] Banners de colección (image null) y borrar imágenes huérfanas.