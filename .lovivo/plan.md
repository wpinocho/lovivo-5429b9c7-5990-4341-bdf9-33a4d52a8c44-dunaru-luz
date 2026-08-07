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
- ⚠️ **kit-vaso-de-concreto** es en realidad de **CERÁMICA**. Slug sigue diciendo "concreto".
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
- Estética: editorial, mínima, mucho aire. Mobile-first. **Pero en PDP y checkout la densidad gana al aire.**
- **TOP BAR** (`EcommerceTemplate.tsx`): barra fija carbón, 2 items: Truck "Envío gratis a todo México" · Heart ámbar "+200 clientes felices". ⚠️ **NO se replica en el checkout a propósito** (ver sección 3).
- **HEADER OVERLAY**: `EcommerceTemplate` y `PageTemplate` aceptan prop `headerOverlay`. Solo `IndexUI` lo usa.
- **🛒 ORDEN OFICIAL DEL BUY BOX** (`ProductPageUI.tsx`):
  1. Título + precio + "6 pagos de $X a meses sin intereses" + rating
  2. `PDP_BENEFITS[slug]` = 3 bullets de beneficio · 3. Selector de variantes · 4. Cantidad compacta
  5. Add-ons / `ProductQuantityTiers` · 6. `<DeliveryEstimate />` · 7. CTA primario `h-12` con precio
  8. CTA secundario `h-11` outline · 9. Micro-línea `Lock` "Pago seguro · Compra protegida"
  10. 3 badges · 11. `<PdpSocialProof />` · 12. WhatsApp · 13. Acordeones (Descripción, Envío) CERRADOS
- **`src/components/PdpTrust.tsx`** exporta:
  - `getDeliveryRange()` → string "11 y el 14 de agosto" (días hábiles, +2/+5). **Fuente única de la promesa de entrega; se usa en PDP y en checkout.**
  - `DeliveryEstimate` (punto verde pulsante)
  - `PdpSocialProof({ slug?, linkable? })` — `linkable={false}` renderiza `<div>` en vez de `<a href="#resenas">` (para el checkout).
- **📄 ORDEN OFICIAL DE LA PDP** (`ProductStorySections.tsx`): garantías → `ProductStepsCarousel` → reseñas → bloques editoriales → tabla comparativa → FAQ → CTA de cierre
- **📐 RATIO DE IMAGEN DE PRODUCTO = 4:5 (1122×1402 px)** + `object-cover`.
- **LANDING — PRECIOS DINÁMICOS**: `IndexUI.tsx` usa `buildCatalog(logic.products)`.
- ⚠️ Aún hay nombres de producto hardcodeados en el **footer de `EcommerceTemplate.tsx`**.

### 🧾 CHECKOUT (`src/pages/ui/CheckoutUI.tsx`) — reglas fijas (2026-08-07)
- Header minimal, **solo logo**. Sin nav, sin top bar promocional. Es intencional: en checkout todo link es una fuga.
- **Móvil, orden**: `MobileOrderSummary` (CERRADO por defecto) → `ShippingPromise` siempre visible → `PdpSocialProof linkable={false}` → línea SSL → PayPal → wallets → email → dirección → aviso MSI → tarjeta → estrellas → CTA → badges + WhatsApp + tarjetas.
- **`ShippingPromise`**: componente único que resuelve el envío desde el primer render ("Envío gratis · Llega entre el X y el Y"). Reemplazó el "Envío: Pendiente". **Nunca volver a poner "Pendiente".**
- La fila "Envío" de totales dice **GRATIS**, nunca "Pendiente".
- **`CouponSection`** (antes `MobileCouponSection`): colapsado, texto `text-muted-foreground`, copy "Agregar código de descuento", SIEMPRE al final del resumen. Se usa en móvil Y escritorio. **Prohibido volver a exponer el input abierto.**
- **MSI en el resumen**: micro-línea "Desde $X al mes a 6 meses sin intereses" debajo del Total (reencuadre de precio). Se mantiene además el `paymentNoticeSlot` arriba de la tarjeta (contexto de acción).
- **Prueba social duplicada a propósito**: `PdpSocialProof` bajo el resumen (arriba, antes de invertir tiempo) + estrellas 4.9 pegadas al CTA (abajo, antes de pagar).
- WhatsApp de soporte en `trustBadgesSlot`, debajo del CTA.

---

## 3. Active Plan — Auditoría de CHECKOUT implementada, falta medir

**Estado**: cambios de checkout implementados 2026-08-07 (misma sesión que la 7ª ronda de PDP).

### Baseline a batir
- PDP móvil 7d: 151 únicos → 6 addtocart = **4.0%** → **0 compras**.
- Checkout 30d: **20 initiatecheckout → 1 purchase = 5%**. Objetivo mínimo: **15%**.

### Qué medir el 2026-08-14
1. `posthog-query`: initiatecheckout → purchase (7d post-cambio vs previos).
2. viewcontent → addtocart en móvil.
3. Si hay tráfico suficiente, encuesta de salida en `/pagar`.
⚠️ Los cambios de PDP y checkout se acumulan: medirlos como un solo paquete.

### Decisiones de esta ronda (razonamiento, para no revertirlas por accidente)
- **NO se puso banner promocional en el checkout.** Best practice (Baymard/Shopify): el checkout debe tener el menor número de elementos y cero links de navegación. El reaseguro se integró DENTRO del resumen del pedido, que es donde el usuario ya está mirando.
- **Resumen cerrado por defecto en móvil**: la cabecera ya muestra artículos + total, así el pago express (PayPal/GPay) queda visible sin scroll.
- **Cupón degradado**: en tráfico frío un campo de cupón visible manda a la gente a Google. Riesgo de abandono > beneficio.

---

## 4. Recent Changes
- 2026-08-07 — ✅ **AUDITORÍA DE CHECKOUT**: (a) `ShippingPromise` nuevo, elimina el "Envío: Pendiente" y muestra fecha real de entrega desde el primer render; (b) resumen móvil CERRADO por defecto con reaseguro siempre visible; (c) cupón unificado en `CouponSection`, colapsado y gris, también en escritorio (antes era un input abierto con label); (d) MSI reencuadrado como micro-línea bajo el Total en ambos resúmenes; (e) `PdpSocialProof linkable={false}` bajo el resumen; (f) link de WhatsApp de soporte bajo el CTA; (g) `getDeliveryRange()` extraído en `PdpTrust.tsx` como fuente única de la promesa de entrega.
- 2026-08-07 — ✅ **AUDITORÍA PDP kit-vaso-de-vidrio**: `DeliveryEstimate`, `PdpSocialProof`, acordeón "Cuidado del producto" → `SHARED_FAQS`, acordeones cerrados por defecto.
- 2026-08-07 — ✅ **BUY BOX REDISEÑADO**: `PDP_BENEFITS`, cantidad compacta, CTA primario `h-12` con precio.
- 2026-08-07 — ✅ **PASOS EN CARRUSEL**: `ProductStepsCarousel.tsx`.
- 2026-08-07 — ✅ **kit-vaso-de-vidrio**: eliminado el bloque "Tu vaso, también cuando no es vela".
- 2026-08-07 — ✅ **PDP REORDENADA**: prueba social de la posición 5 a la 3.
- 2026-08-07 — ✅ **PDP más densa** + **`Reviews.tsx` compacto** + franja de pago duplicada eliminada.
- 2026-08-07 — ✅ **LANDING: precios y nombres desde la DB** (`buildCatalog`).
- 2026-08-07 — ✅ **HEADER OVERLAY** + **COPY sin guiones largos** + **TABLA COMPARATIVA**.
- 2026-07-31 — ✅ **RENOMBRE DE CATÁLOGO (9 productos, slugs intactos)**.
- 2026-07-31 — 🔍 **AUDITORÍA CRO COMPLETA**. Embudo móvil: 151 → 6 al carrito (4%) → 0 compras.

## 5. Image Inventory
- **📐 Todas las fotos de producto son 1122×1402 px (4:5), webp.**
- **Colecciones**: sin imagen asignada. **FAVICON**: `/favicon.png` (256x256).
- **FOTOS REALES catálogo**: `product-images/products/<hash>.webp`. 9 productos, 75 imágenes.
- **UGC de clientas** (5 fotos): constante `UGC` en `src/data/reviews.ts`. Se usan en `Reviews.tsx` y como avatares en `PdpSocialProof` (PDP y checkout).
- **Hero desktop**: `/hero-dunaru.webp` · **Hero móvil**: `/hero-dunaru-mobile.webp` · **Casa real**: `/casa-real-{sala,comedor,recibidor}.webp`
- **4 PASOS** — base `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/`:
  - Vierte → `/paso-vierte.webp` · Inserta → `1785521743155-htw95tvbi4b.webp` · Enciende → `1785521743156-3qeskqe43gv.webp` · Renueva → `/paso-renueva.webp`
- **Bloque aroma** → `1785521743156-7ucg5c0kwb7.webp`
- 🟡 `/pdp-vaso-decor.webp` quedó huérfana.
- 🔴 **FALTA: video demo del mecanismo** (lo genera el user).

## 6. Known Issues
- 2026-08-07 — 🟠 **"+200 clientes felices" sin verificar** contra órdenes reales (top bar, `PdpSocialProof`).
- 2026-08-07 — 🟡 El desktop coupon ya no usa `logic.couponInputRef` (se eliminó el input abierto). Si algún día el backend quiere hacer focus programático al cupón, hay que reconectarlo dentro de `CouponSection`.
- 2026-08-07 — 🟡 `ShippingPromise` asume envío gratis cuando `shippingCost === 0`. Correcto hoy porque el envío es gratis a todo México sin mínimo. Si el owner activa cobro de envío, revisar el copy.
- 2026-08-07 — 🟠 Los títulos del catálogo en la DB contienen guion largo.
- 2026-08-07 — 🟡 `PDP_BENEFITS` solo cubre 6 slugs (faltan bowl-negro, vaso-extra-transparente, pack-30-mechas).
- 2026-07-31 — 🟠 Nombres viejos hardcodeados en el **footer de `EcommerceTemplate.tsx`**; FAQ de PDP dice "concreto".
- 2026-07-31 — 🔴 `ecommerce--update-product` NO persiste `compare_at_price`. Workaround: Dashboard manual.
- 2026-07-31 — 🟡 `lov-search-files` devuelve 0 resultados incluso para strings triviales. Usar `lov-view` con rutas directas.
- 2026-07-31 — 🟡 Autocapture de clics parece desactivado en PostHog.
- 2026-07-25 — 🟡 Perlas/Reserva/Dúo/Trío NO están en categoría del menú (solo "Todos").

## 7. Pending / Future Sessions
- [ALTA] Registrar en `.lovivo/cro-log.md` DOS hipótesis pendientes: (1) ronda PDP del 07-ago (delivery estimate + social proof + acordeones cerrados); (2) ronda CHECKOUT del 07-ago (shipping resuelto + resumen cerrado + cupón degradado + MSI en resumen + social proof).
- [ALTA] Medir el 2026-08-14: addtocart móvil vs 4.0% y initiatecheckout→purchase vs 5%.
- [ALTA] Probar el checkout end-to-end con `browser-test` (producto → carrito → /pagar) para confirmar que el resumen cerrado no rompe nada en móvil real.
- [ALTA] `PDP_BENEFITS` para bowl-negro, vaso-extra-transparente y pack-30-mechas.
- [ALTA] Footer de `EcommerceTemplate.tsx`: nombres de producto → dinámicos.
- [ALTA] User: redirigir anuncios Meta al Kit Vela Rellenable · Vaso de Vidrio.
- [ALTA] VIDEO DEMO (lo graba el user) → primer slide del carrusel de pasos.
- [MED] Considerar barra sticky de pago en móvil dentro del checkout (total + CTA) si el scroll sigue siendo largo.
- [MED] Encuesta PostHog de salida en `/pagar`: "¿Qué te frenó de completar tu compra?".
- [MED] Aplicar `ProductStepsCarousel` también en la landing.
- [MED] Reseñas: pedir al owner los nombres reales de clientas antes de escalar pauta.
- [MED] FAQ de kit-vaso-de-concreto sigue diciendo "concreto" → cambiar a cerámica.
- [MED] CTA del hero de `IndexUI.tsx` → `/productos/kit-vaso-de-vidrio`.
- [MED] Barrer el resto del sitio buscando guiones largos (—) en copy.
- [BAJA] Banners de colección (image null) y borrar imágenes huérfanas.