## 1. Brand & Context
- Brand: **dunaru** (dunaru.mx). Velas **rellenables** de **Cera Duna**: gránulos vegetales finos tipo arena + mechas de algodón.
- ⚠️ VOCABULARIO: **"rellenable"** (NO "recargable"). ⚠️ **PROHIBIDO el guion largo (—) en copy visible.** (Excepción: sticker Buen Fin de la owner dice "2DA RECARGA", es su arte.)
- **Cera Duna** = nombre propietario de la cera (vegetal, en gránulos, sin parafina). Claim: **100% vegetal, biodegradable y ecológica**. ⛔ NO porcentajes soya/coco.
- ⚠️ 2026-08-27: eyebrow del hero dice **"Cera perlada 100% natural"** (pedido owner).
- Tesis: no vendemos cera. Vendemos una forma simple de crear luz en el recipiente que ya tienes.
- **AROMA**: cera neutra. Add-on **Esencia para Vela · 10 ml** ($99). 1 frasco perfuma 500 g. Cada frasco = UN aroma.
- Target: mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO. México, MXN, es-MX.
- Tono: claro, cálido, directo, **editorial premium** (refs sensatehomes.com, soliracandle.com). ⛔ NO founder-led.
- Pagos: **hasta 6 MSI** (nunca nombrar Stripe/Mercado Pago). Envío: **GRATIS A TODO MÉXICO DESDE $499** (desde 2026-11-24); pedidos menores pagan **$99**. Garantía 30 días. WhatsApp `525531215386`.
- INTEGRIDAD: nunca reseñas falsas (16 reales, 4.9), nunca precios tachados inventados, nunca logos de prensa. **Nunca prometer fechas de envío que no sean reales** (preventa = fecha confirmada por owner + colchón).
- STORE_ID `5429b9c7-5990-4341-bdf9-33a4d52a8c44`. Rutas: `/productos/:slug`, `/paquete/:slug`, `/carrito`, `/pagar`, `/categorias/:handle`, `/como-funciona`, `/dia-de-muertos` (Navigate → `/categorias/dia-de-muertos`), **`/navidad`** (renderiza Collection handle `navidad`, canónica).
- ⚠️ `kit-vaso-de-concreto` = **Cuenco Eclipse**; slug no se cambia. Ancla Meta Ads = `kit-vaso-de-vidrio`.
- ⚠️ La owner repriza, crea, DUPLICA y ARCHIVA desde el Dashboard. **NUNCA hardcodear precios.** El agente NO puede cambiar slugs.
- 🗓️ **EDICIONES DE TEMPORADA = sistema anual reciclable** (`src/lib/editions.ts`). Activa: **NIEVE (Navidad)**, 6 productos activos. DDM regresa oct 2027. Archivar, nunca borrar. ⛔ NO fecha límite de pedido en la web.
- ⚠️ Los productos de edición pueden tener **nombres propios**: registrar SIEMPRE el slug real en `EDITIONS[].products`.
- 🛍️ **PROMOS**: add-on con descuento en PDP de kits + carrito (`src/lib/promo-addon.ts`). 🛒 **UPSELL CARRITO**: promo (si aplica) → aroma.
- 💸 Modelo de negocio = recompra de cera (rellenable). Los pedidos de solo cera ($499–$598) son clientas que vuelven: NUNCA castigarlos con envío (por eso el mínimo = $499).

### 🏷️ CATÁLOGO
| Slug | Título | Precio | Compare |
|---|---|---|---|
| kit-vaso-de-vidrio | Vela Rellenable · Vaso de Vidrio | $749 | $899 |
| kit-vaso-de-concreto | Vela Rellenable · Cuenco Eclipse | $999 | $1,199 |
| vela-rellenable-cuenco-eclipse-copy-ppsiy | Vela Rellenable · Cuenco Alba (id f54a5a9e…) | $999 | $1,199 |
| vela-rellenable-cuenco-dunaru | Vela Rellenable · Cuenco Dunaru | $1,199 | — |
| vela-rellenable-bowl-ambar | Vela Rellenable · Bowl Ámbar | $1,199 | $1,299 |
| perlas-originales-500-g | Cera Duna · 500 g | $499 | — |
| reserva-1-kg | Cera Duna · 1 kg | $849 | $999 |
| d-o-de-tonos / tr-o-de-tonos | Dúo / Trío de Tonos | $899 / $1,199 | — / $1,499 |
| bowl-negro ($549), cuenco-eclipse-copy-tjby7 = **Cuenco Alba solo** ($549, id f4698252…), cuenco-dunaru ($799), bowl-ambar ($699), vaso-extra-transparente ($299) | recipientes solos | | |
| pack-30-mechas · esencia-para-vela-10-ml | accesorios | $99 | |
| ❄️ casita-de-navidad-cuenco-dunaru | Casita de Navidad · Cuenco Dunaru | $1,399 | $1,499 |
| ❄️ aldea-de-navidad-centro-de-madera | Aldea de Navidad · Centro de madera | $1,999 | $2,500 |
| ❄️ pino-de-invierno-cuenco-alba | Pino de Invierno · Cuenco Alba (id 3a319228…) | $1,099 | |
| ❄️ refugio-de-invierno-cuenco-eclipse | Refugio de Invierno · Cuenco Eclipse | $1,099 | |
| ❄️ nochebuena-de-navidad-bowl-mbar | Nochebuena de Navidad · Bowl Ámbar | $1,299 | slug "mbar" |
| ❄️ cera-duna-nieve-500-g | Cera Duna Nieve · 500 g (id 37545763-…) | $499 | sin variantes; hereda PDP de perlas-originales-500-g |
| ❄️ esencia-para-vela-navideo-10-ml | Esencia Navideño · 10 ml (Pino Navideño / Manzana Canela) | $99 | OCULTO en catálogo |
| 🛍️ cera-duna-500-g-buen-fin | Add-on Buen Fin | $249 | OCULTO |
| 🏵️ 7 productos Cempasúchil + esencia | ARCHIVADOS desde 2026-11-02 | | |

### ❄️ CONTENIDO CONFIRMADO NIEVE (owner 2026-11-18)
- Casita (Cuenco Dunaru 20×6 cm): casita DE VELA con mecha + pino DECORATIVO · 500 g · 30 mechas.
- Aldea (batea madera 43×30×4 cm): 3 casitas de vela + 2 nochebuenas de cera + 3 pinos DECORATIVOS · **1 kg** · 30 mechas.
- Pino de Invierno (Alba 15×4 cm) y Refugio (Eclipse 15×4 cm): pino DE VELA · 500 g · 30 mechas.
- Nochebuena (Bowl Ámbar): nochebuena DE VELA · 500 g · 30 mechas. ⏳ Medidas del Bowl Ámbar NO confirmadas.
- Cera Duna Nieve 500 g (2026-11-20): misma PDP que Cera Duna 500 g; fotos = las de variante Marfil + generales (sin Champagne/Ónix).
- Cera color **Nieve** (sin selector de color).
- Aromas: Pino Navideño = aguja de pino, ciprés, enebro, resina, corteza. Manzana Canela = manzana roja, jengibre, canela, anís estrella, clavo, miel.

⚠️ Copias hardcodeadas de títulos: `CATALOG_FALLBACK` (IndexUI), `FOOTER_SHOP_LINKS` (EcommerceTemplate), `src/lib/navigation.ts`.
- COLECCIONES: `kits`, `recipientes`, `accesorios`, `dia-de-muertos`, `navidad` (6 productos Nieve).
- ORDEN = `src/lib/catalog-order.ts`. `HIDDEN_FROM_CATALOG_SLUGS` = esencias de temporada + add-on Buen Fin.

---

## 2. Design System
| Rol | HSL | Token |
|---|---|---|
| Base clara | 36 37% 92% | `--background`, `dunaru-marfil` |
| Superficie | 36 34% 86% | `--muted`, `dunaru-arena` |
| Terracota | 14 55% 50% | `dunaru-terracota` |
| Contraste oscuro | 73 10% 17% | `--foreground`, `dunaru-carbon` |
| Top bar/footer | 75 13% 15% | `--primary`, `dunaru-onix` |
| CTA | 75 24% 25% | `--dunaru-oliva-cta` |
| Selector activo | 75 22% 37% | `--dunaru-oliva-claro` |
| Saffron | 38 62% 56% | `dunaru-ambar` |
| Periwinkle | 230 25% 64% | `dunaru-periwinkle` |
| 🏵️ Cempasúchil | 30 88% 55% | `dunaru-cempasuchil` |
| ❄️ Nieve | 205 32% 76% | `--dunaru-nieve` |
| Acento edición | var | `--edition-accent` → **`dunaru-edition`** |
- Instrument Serif + Manrope. `--radius: 0`. Móvil-first. oliva = selección/CTA · periwinkle = navegación · terracota = promos.

### 🗓️ SISTEMA DE EDICIONES (`src/lib/editions.ts`)
- `EDITIONS[]`: id, name, occasion, collectionHandle, path, canonicalPath, navLabel, eyebrow, title, heroTagline, heroImage, home{}, notice, inspiration{ideas[]}, accentClass, pdpThemeClass, **products (slug real → slug base)**, slugPrefixes, headlines, **scents {seasonal, hide}**.
- Nieve: Casita, Aldea, Alba y Eclipse mapean a `vela-rellenable-cuenco-dunaru`. Nochebuena → `vela-rellenable-bowl-ambar`. Cera Nieve → `perlas-originales-500-g`.
- Aromas: `SEASONAL_SCENTS` en `scents.ts`. Nieve oculta higo-matcha + costa-mineral; DDM oculta costa-mineral. `supportsScentAddon` usa contentSlug.
- Contenido PDP: `PDP_INCLUDES`, `PDP_BENEFITS` (ProductPageUI) y **`NIEVE_STORY`** (ProductStorySections) buscan **slug exacto primero**, luego `contentSlug`. Reseñas también por contentSlug.
- `TIER_SELECTOR_SLUGS` (500 g / 1 kg) es por slug exacto: NO aparece en Cera Nieve (correcto, no hay 1 kg Nieve).
- Menú: link "Navidad" aparece si algún slug activo hace match con `editionForSlug`.
- CHECKLIST NUEVA EDICIÓN: entrada en `EDITIONS` (slugs reales) + `--dunaru-X`, `.edition-X`/`.theme-X` en index.css + ruta corta App.tsx + sitemap + colección DB + esencia oculta + includes/benefits/story por slug.

### 🚚 SISTEMA DE ENVÍO (`src/lib/shipping.ts`, 2026-11-24)
- Fuente de verdad: price rule DB **`473eff23-0da2-4714-a0f5-0a7fea205d81`** "Envío gratis desde $499" (free_shipping, `min_subtotal: 499`, applies_to all, activa, usage_count 0).
- `FREE_SHIPPING_MIN = 499` (respaldo + cifra del copy estático) · `FREE_SHIPPING_COPY {short, long, sub}` · hook `useFreeShippingThreshold()` lee la regla.
- ⚠️ Si la owner cambia el mínimo: actualizar regla + constante + copy hardcodeado "$499" (top bar, MainNav, IndexUI, ProductPageUI, ComoFunciona, ReturnsPolicy, ProductStorySections cierre).
- Tarifa < $499 = **$99**, configurada por la owner en Dashboard (zonas de envío). El costo real llega del backend: `CheckoutAdapter` → `updateShippingAddress(...)` → `response.shipping_amount` → `shippingFromCheckout` → `shippingCost`.
- `FreeShippingBar` (carrito drawer + /carrito): "Te faltan $X para envío gratis" → "Tu envío es gratis a todo México". Estilo dunaru (radius 0, oliva-claro).
- Checkout: `ShippingPromise` y `ShippingAmount` (CheckoutUI ~L641-679).
- Copy en PDPs de kits/ceras (≥ $499) sigue diciendo "Envío gratis a todo México" (verdadero). Copy genérico dice "desde $499".

### 📦 INVENTARIO (verificado 2026-11-27)
- Los productos Alba tienen `track_inventory: false` → siguen vendibles aunque `inventory_quantity` = 0. NO desaparecen.
- ⚠️ Si algún producto se pone `track_inventory: true` con stock 0: `Collection.tsx` (`isInStock`) y `HeadlessIndex` lo **ocultan** del catálogo, `ProductCardUI` muestra "Agotado" y el checkout lo quita (`unavailable_items`). Para preventa, mantener `track_inventory: false`.

### Otros sistemas
- TRACKING `tracking-utils.ts`. ESTATUS `useActiveProductSlugs.ts`. RESEÑAS `src/data/reviews.ts`. DEEP LINK `?variante=`.
- ADD-ONS PDP: `scentSelection` + `addonSelection`; candado `enforcePromoAddonLimit`.
- CHECKLIST PDP vela nueva: PDP_HEADLINE + PDP_BENEFITS, pdp-includes, SCENT_ENABLED_SLUGS, catalog-order, SHOP_CARDS + CATALOG_FALLBACK, [promo] `PROMO_ADDON.kitSlugs`.

---

## 3. Active Plan

### 📦 FASE 19: PREVENTA CUENCO ALBA — 🟡 PLANEADA 2026-11-27 (esperando fecha exacta de la owner)
**Contexto:** Se acabó el Cuenco Alba; nuevo inventario llega en ~8 días (≈ 5 dic 2026). Afecta 3 productos:
- `pino-de-invierno-cuenco-alba` (Nieve, $1,099)
- `vela-rellenable-cuenco-eclipse-copy-ppsiy` (Vela Rellenable · Cuenco Alba, $999, variantes Marfil/Champagne/Ónix)
- `cuenco-eclipse-copy-tjby7` (Cuenco Alba solo, $549)
Owner NO quiere apagarlos. Decisión: **preventa con fecha clara** (mejor práctica: sigue vendiendo, temporada navideña, alinea expectativas). NO "se nos acabó" (suena a problema); SÍ "Preventa · se envía a partir del X".

**Antes de construir, confirmar con owner:**
1. Fecha REAL de envío (llegada + 1-2 días de colchón). Propuesta: "Se envía a partir del 8 de diciembre".
2. Pedidos mixtos (Alba + otros productos): ¿se envía todo junto cuando llega el Alba (default recomendado, más simple y un solo envío) o en dos envíos?

**Implementación (Craft Mode):**
1. Nuevo `src/lib/restock.ts`:
   - `PREORDERS: { slugs: string[]; shipDate: string /* ISO yyyy-mm-dd */; label?: string }[]` con los 3 slugs.
   - `getPreorder(slug)` → entrada solo si `today < shipDate` (se apaga sola al llegar la fecha; sin re-deploy).
   - `formatShipDate()` → "8 de diciembre" (es-MX, sin año).
   - `cartHasPreorder(items)` → la fecha más tardía.
2. PDP (`ProductPageUI.tsx`), justo arriba del CTA: aviso sobrio estilo dunaru (radius 0, borde oliva-claro, ícono reloj/caja): **"Preventa · Se envía a partir del 8 de diciembre."** Subtexto: "Llega a tiempo para Navidad." (solo si shipDate ≤ ~12 dic; si es más tarde, omitir). Mantener texto del botón; opcional sufijo "· Preventa". Reemplazar/ajustar cualquier línea de "Llega entre X y Y" en esa PDP para que no contradiga.
3. Tarjetas (`ProductCardUI` / cards de colección y home / SHOP_CARDS): chip pequeño "Preventa" (no "Agotado").
4. Carrito (drawer + `/carrito`, CartUI): bajo la línea del producto, "Preventa · se envía a partir del 8 dic". Si hay mezcla: "Tu pedido completo se envía a partir del 8 dic" (según respuesta 2).
5. Checkout (`CheckoutUI` `ShippingPromise`): si `cartHasPreorder` → reemplazar "Llega entre…" por "Se envía a partir del 8 de diciembre (preventa)". Hoy el checkout muestra "Llega entre el 26 de noviembre y el 1 de diciembre" → debe cambiar para no prometer en falso.
6. Página de gracias (`ThankYou`): si la orden incluye slugs de preventa, una línea "Tu Cuenco Alba está en preventa: lo enviamos a partir del 8 de diciembre y te avisamos con tu guía."
7. Opcional (venta cruzada): en PDP del Alba, link discreto "¿Lo necesitas ya? El Cuenco Eclipse tiene la misma medida y sale hoy" → Pino de Invierno → `refugio-de-invierno-cuenco-eclipse`; Vela Alba → `kit-vaso-de-concreto`; Alba solo → recipiente Eclipse. Confirmar con owner.
8. JSON-LD (`src/lib/seo/jsonld.ts`): para preventa usar `https://schema.org/PreOrder` (no InStock) si el slug está en PREORDERS.
9. NO tocar `track_inventory` (ya es false → sigue vendiendo).
10. QA: 3 PDPs, tarjetas en /navidad y /categorias/kits, carrito con Alba solo y mezclado, checkout, móvil 375; `npx tsc --noEmit`.

**Fuera del código (owner):** avisar en email/WhatsApp de confirmación a quien compre Alba; actualizar inventario en Dashboard cuando llegue. Cuando pase la fecha, el aviso desaparece solo; si el proveedor se retrasa, actualizar `shipDate` en Craft.

**Hallazgo extra:** la descripción DB de "Vela Rellenable · Cuenco Alba" dice "bowl artesanal de cerámica negra mate" (parece copy del Eclipse). Revisar con owner y corregir con `update-product` (solo description; NO usar variants_config porque borra compare_at).

### 🚚 FASE 18.1: BUG "ENVÍO POR CALCULAR" EN CHECKOUT — 🔴 DIAGNOSTICADO 2026-11-24, falta fix en Craft
**Síntoma (screenshot owner):** carrito solo "30 Mechas" ($99), dirección CDMX 06700 completa → resumen dice "Envío: Por calcular", Total MXN $99, botón "Completar compra · MXN $99.00". O sea: el backend devolvió `shipping_amount = 0` y la clienta pagaría $99 SIN envío.

**Diagnóstico (código revisado):**
- El front SÍ lee bien el costo del backend (`CheckoutAdapter` L298-308 → `setShippingFromCheckout(response.shipping_amount)`). El backend respondió 0.
- `ShippingAmount` (CheckoutUI L673-679): si `shippingCost` = 0 y subtotal < $499 → "Por calcular" PARA SIEMPRE. → Bug de UI nuestro.
- Por qué el backend da 0: A) tarifa $99 no configurada en Dashboard, o B) `min_subtotal: 499` leído en CENTAVOS = $4.99.
- PREGUNTÉ A LA OWNER si ya puso la tarifa $99 en Dashboard (sin respuesta aún al 2026-11-27).

**Prueba A vs B (Craft):** desactivar temporalmente regla `473eff23…` → si cobra $99 es B; si sigue en 0 es A. Reactivar siempre.

**Fix si es B:** `conditions.min_subtotal: 49900`; `useFreeShippingThreshold` normaliza `min >= 10000 ? min/100 : min`; revisar consumidores de `getFreeShippingRules()`. QA: mechas → $99 envío (total $198) · Cera 500 g → GRATIS · kit → GRATIS.

**Fix UI (SIEMPRE):** flag `shippingResolved` en `CheckoutAdapter`; `ShippingAmount`: `>0` monto · `!resolved && subtotal<min` "Por calcular" · resto "GRATIS". `ShippingPromise` con "Envío $99 · Te faltan $X para envío gratis". Revisar MobileOrderSummary y botón (finalTotal).

### 🚚 FASE 18: POLÍTICA DE ENVÍO — 🟢 IMPLEMENTADA 2026-11-24 (ver 18.1)
**Datos PostHog 90 días (107 pedidos):** AOV $1,400 · mediana $1,199. 97% de pedidos ya ≥ $499.
**Pendiente:** 18.1 · revisar descripciones DB de mechas / esencia / vaso solo (que no prometan envío gratis).
**FASE 18B:** regalo "Desde $1,400 te regalamos una esencia de 10 ml". Barra con 2 metas. Medir AOV.

### ❄️ FASE 17: EDICIÓN NIEVE (Navidad) — 🟢 EN VIVO
- ⏳ Pendiente:
  1. Medidas del Bowl Ámbar.
  2. Imagen "Este kit incluye" por producto (Aldea: `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1795040429854-34pnoxnxfvx.webp`).
  3. Descripción del producto Esencia Navideño (vacía).
  4. QA visual: `/navidad`, PDPs, Cera Nieve PDP, carrito, móvil 375; `npx tsc --noEmit`.
  5. Owner: asignar paquete "Caja chica" a Cera Nieve en Dashboard.
  6. ¿Fotos propias color Nieve para Cera Nieve?

### 🛒 FASE 16 UPSELL CARRITO ✅ · ⏳ QA 16.5
### 🛍️ FASE 15 BUEN FIN terminó 17 nov · ⏳ owner archiva add-on, quitar sticker
### FASE 14 EDICIONES: pendiente 14.5 landing fuera de temporada, 14.7 PDP archivada → redirect, footer dinámico.

---

## 4. Recent Changes
- 2026-11-27 — 📦 FASE 19 plan (chat): preventa Cuenco Alba (3 productos) con fecha de envío visible en PDP, tarjetas, carrito, checkout y gracias; se apaga sola. Verificado que los 3 tienen `track_inventory: false` (siguen vendibles).
- 2026-11-24 — 🔎 FASE 18.1 diagnóstico (chat): checkout con mechas muestra "Por calcular" y cobra $0 de envío.
- 2026-11-24 — 🚚 FASE 18: regla envío gratis desde $499 (DB), `src/lib/shipping.ts`, FreeShippingBar, copy "desde $499", ReturnsPolicy.
- 2026-11-24 — 🚚 Análisis de envío (chat): datos PostHog + recomendación FASE 18.
- 2026-11-20 — ❄️ Nuevo producto `cera-duna-nieve-500-g`.
- 2026-11-18 — ❄️ Nieve: datos reales, `NIEVE_STORY`, descripciones DB, notas de aromas navideños.
- 2026-11-18 — ❄️ Nieve conectada a productos reales.
- 2026-11-18 — 🌿 `Edition.scents {seasonal, hide}` reemplaza `seasonalScents`.
- 2026-11-16 — ❄️ Sistema de ediciones + edición NIEVE.
- 2026-11-13 — 🛒 FASE 16 upsell en carrito.
- 2026-11-13 — 🏷️ Sticker Buen Fin.
- 2026-11-13 — 🛍️ FASE 15 core Buen Fin.
- 2026-11-09 — 🃏 Tarjetas con chips de nombre.
- 2026-10-14 — 🏵️ Cempasúchil Eclipse y Alba publicados.
- 2026-10-13 — 🎨 Dúo de Tonos selector.

## 5. Image Inventory
- Fotos producto 1122×1402 (4:5) webp. Uploads owner: `.../message-images/58337cbc-5a9f-4862-810a-1470616566de/`.
- Cera Duna 500 g: Marfil `m4gndhjxsj, wjrp5b6unfo, 0fxyjfz8hpv5, 7d84s8xv6k6, 5vig8ko6ums`; generales `qqmcg71lw2k, 1xb5mgphkap, binneg1kw2o, 1uw63qn80ye` (products/). Cera Nieve usa estas 9.
- ❄️ Banner Nieve (aprobado): `.../product-images/5429b9c7-.../nieve-banner.webp`.
- ❄️ Inspiración Nieve: `1795038283050-{yuqxeisjjd, w6zybbbc4dd, et53jlvbbf, 7fohsz8y38l, dhe9t85y9ge, zjoe0ial8g}.webp`.
- ❄️ Aromas navideños: Pino `products/xpu7atgmjzq.webp`, Manzana Canela `products/b8pwxy0ah5k.webp` (4:3).
- ❄️ Fotos bloque "Todo listo" NIEVE_STORY: Casita `pcr2chmvxs`, Aldea `aa7f61ffq9t`, Alba `u42c8wvtmid`, Eclipse `0189tb9i2pfv`, Nochebuena `l6o60g0rwz` (products/). Bloque 2 = `1787859462825-p6zo71cvpai`.
- 🛍️ Sticker Buen Fin: DEPRECAR. 🏵️ DDM banner + 6 inspiración en `EDITIONS[ddm]`.

## 6. Known Issues
- 2026-11-27 — 🟡 Cuenco Alba sin stock hasta ~5 dic; los 3 productos se siguen vendiendo sin aviso (track_inventory false) y el checkout promete "Llega entre 26 nov y 1 dic" → falso para Alba hasta implementar FASE 19.
- 2026-11-27 — 🟡 Descripción DB de "Vela Rellenable · Cuenco Alba" dice "cerámica negra mate" (posible copy equivocado).
- 2026-11-24 — 🔴 Checkout bajo $499 cobra $0 de envío y muestra "Por calcular" permanente (FASE 18.1).
- 2026-11-20 — 🟡 Cera Nieve creada sin `default_package_id`; owner debe asignarlo.
- 2026-11-18 — 🟡 Cambios de Nieve sin `tsc` ni QA visual.
- 2026-11-18 — 🟡 Slug `nochebuena-de-navidad-bowl-mbar` (sin "a"); funciona por mapeo explícito.
- 2026-11-16 — 🟠 gpt-image/gemini sin créditos (402); usar flux.
- 2026-11-13 — 🟠 `create/update-product` NO guardan `compare_at_price` en add-on.
- 2026-11-02 — 🟠 PDP de producto de edición archivado = "Producto no encontrado" (14.7).
- 2026-10-14 — 🟠 Duplicar en Dashboard copia variant IDs.
- 2026-10-13 — 🟠 `update-product` con `variants_config` BORRA compare_at.
- 2026-08-21 — 🔴 `update-product` NO soporta imágenes por variante ni cambio de slug.

## 7. Pending / Future Sessions
- [URGENTE] FASE 19 preventa Alba: owner confirma fecha exacta + pedidos mixtos → construir.
- [URGENTE] FASE 18.1: respuesta owner (¿tarifa $99 configurada?) → prueba → fix unidad si aplica + fix UI "Por calcular".
- [MEDIA] FASE 18B regalo desde $1,400.
- [URGENTE] Nieve pendientes 1–6 de FASE 17.
- [ALTA] Owner archiva add-on Buen Fin y quitar sticker.
- [2026-11-20] PostHog `cart_upsell_viewed` vs `added`.
- [ALTA] 14.5 landing fuera de temporada · 14.7 redirect PDP archivada.
- [2027-09] Regreso DDM (desarchivar).