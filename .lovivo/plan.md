## 1. Brand & Context
- Brand: **dunaru** (dunaru.mx). Velas **rellenables** de **Cera Duna**: gránulos vegetales finos tipo arena + mechas de algodón.
- ⚠️ VOCABULARIO: **"rellenable"** (NO "recargable"). ⚠️ **PROHIBIDO el guion largo (—) en copy visible.** (Excepción: sticker Buen Fin de la owner dice "2DA RECARGA", es su arte.)
- **Cera Duna** = nombre propietario de la cera (vegetal, en gránulos, sin parafina). Claim: **100% vegetal, biodegradable y ecológica**. ⛔ NO porcentajes soya/coco.
- ⚠️ 2026-08-27: eyebrow del hero dice **"Cera perlada 100% natural"** (pedido owner).
- Tesis: no vendemos cera. Vendemos una forma simple de crear luz en el recipiente que ya tienes.
- **AROMA**: cera neutra. Add-on **Esencia para Vela · 10 ml** ($99). 1 frasco perfuma 500 g. Cada frasco = UN aroma.
- Target: mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO. México, MXN, es-MX.
- Tono: claro, cálido, directo, **editorial premium** (refs sensatehomes.com, soliracandle.com). ⛔ NO founder-led.
- Pagos: **hasta 6 MSI** (nunca nombrar Stripe/Mercado Pago). Envío: HOY **GRATIS A TODO MÉXICO, SIN MÍNIMO** (⏳ propuesta 2026-11-24: gratis desde $499, ver FASE 18). Garantía 30 días. WhatsApp `525531215386`.
- INTEGRIDAD: nunca reseñas falsas (16 reales, 4.9), nunca precios tachados inventados, nunca logos de prensa.
- STORE_ID `5429b9c7-5990-4341-bdf9-33a4d52a8c44`. Rutas: `/productos/:slug`, `/paquete/:slug`, `/carrito`, `/pagar`, `/categorias/:handle`, `/como-funciona`, `/dia-de-muertos` (Navigate → `/categorias/dia-de-muertos`), **`/navidad`** (renderiza Collection handle `navidad`, canónica).
- ⚠️ `kit-vaso-de-concreto` = **Cuenco Eclipse**; slug no se cambia. Ancla Meta Ads = `kit-vaso-de-vidrio`.
- ⚠️ La owner repriza, crea, DUPLICA y ARCHIVA desde el Dashboard. **NUNCA hardcodear precios.** El agente NO puede cambiar slugs.
- 🗓️ **EDICIONES DE TEMPORADA = sistema anual reciclable** (`src/lib/editions.ts`). Activa: **NIEVE (Navidad)**, 6 productos activos. DDM regresa oct 2027. Archivar, nunca borrar. ⛔ NO fecha límite de pedido en la web.
- ⚠️ Los productos de edición pueden tener **nombres propios**: registrar SIEMPRE el slug real en `EDITIONS[].products`.
- 🛍️ **PROMOS**: add-on con descuento en PDP de kits + carrito (`src/lib/promo-addon.ts`). 🛒 **UPSELL CARRITO**: promo (si aplica) → aroma.
- 💸 Modelo de negocio = recompra de cera (rellenable). Los pedidos de solo cera ($499–$598) son clientas que vuelven: NUNCA castigarlos con envío.

### 🏷️ CATÁLOGO
| Slug | Título | Precio | Compare |
|---|---|---|---|
| kit-vaso-de-vidrio | Vela Rellenable · Vaso de Vidrio | $749 | $899 |
| kit-vaso-de-concreto | Vela Rellenable · Cuenco Eclipse | $999 | $1,199 |
| vela-rellenable-cuenco-eclipse-copy-ppsiy | Vela Rellenable · Cuenco Alba | $999 | $1,199 |
| vela-rellenable-cuenco-dunaru | Vela Rellenable · Cuenco Dunaru | $1,199 | — |
| vela-rellenable-bowl-ambar | Vela Rellenable · Bowl Ámbar | $1,199 | $1,299 |
| perlas-originales-500-g | Cera Duna · 500 g | $499 | — |
| reserva-1-kg | Cera Duna · 1 kg | $849 | $999 |
| d-o-de-tonos / tr-o-de-tonos | Dúo / Trío de Tonos | $899 / $1,199 | — / $1,499 |
| bowl-negro ($549), cuenco-eclipse-copy-tjby7 ($549), cuenco-dunaru ($799), bowl-ambar ($699), vaso-extra-transparente ($299) | recipientes solos | | |
| pack-30-mechas · esencia-para-vela-10-ml | accesorios | $99 | |
| ❄️ casita-de-navidad-cuenco-dunaru | Casita de Navidad · Cuenco Dunaru | $1,399 | $1,499 |
| ❄️ aldea-de-navidad-centro-de-madera | Aldea de Navidad · Centro de madera | $1,999 | $2,500 |
| ❄️ pino-de-invierno-cuenco-alba | Pino de Invierno · Cuenco Alba | $1,099 | |
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

### Otros sistemas
- TRACKING `tracking-utils.ts`. ESTATUS `useActiveProductSlugs.ts`. RESEÑAS `src/data/reviews.ts`. DEEP LINK `?variante=`.
- ADD-ONS PDP: `scentSelection` + `addonSelection`; candado `enforcePromoAddonLimit`.
- CHECKLIST PDP vela nueva: PDP_HEADLINE + PDP_BENEFITS, pdp-includes, SCENT_ENABLED_SLUGS, catalog-order, SHOP_CARDS + CATALOG_FALLBACK, [promo] `PROMO_ADDON.kitSlugs`.
- ENVÍO: barra de progreso `src/components/ui/FreeShippingBar.tsx` ya lee price rules `free_shipping` con `conditions.min_subtotal` (vía `usePriceRules().getFreeShippingRules()`). Hoy no hay regla activa → la barra no se muestra.

---

## 3. Active Plan

### 🚚 FASE 18: POLÍTICA DE ENVÍO (propuesta 2026-11-24, ⏳ esperando OK de la owner)
**Problema:** owner cubre envío en todos los pedidos; pierde dinero en pedidos muy chicos (mechas $99 sola).
**Datos PostHog 90 días (107 pedidos):** AOV $1,400 · mediana $1,199. Distribución: <$300 = 1 pedido ($99 mechas) · $300–499 = 3 (Cera 500 g sola, recompra) · $500–749 = 6 (casi todos $598 = cera + esencia/mechas) · $750–999 = 15 · $1,000–1,499 = 62 · $1,500+ = 20. → 97% de pedidos ya ≥ $499. El problema es ~1% de pedidos.
**Recomendación:**
1. **Envío gratis desde $499** (= precio Cera Duna 500 g). Cubre todos los kits, todas las ceras (recompra protegida) y casi todos los recipientes. Solo pagan envío: mechas $99, esencia $99, vaso solo $299 (o combinaciones < $499).
   - NO usar umbral alto ($899/$1,500): castigaría a las clientas de recompra (corazón del modelo rellenable) y debilitaría el gancho de Meta Ads.
   - Costo de envío bajo el mínimo: tarifa plana (sugerido $99, confirmar costo real de guía con la owner). Configurar en Dashboard (zonas/tarifas de envío).
2. **Copy honesto:** "Envío gratis a todo México desde $499". Quitar TODOS los "sin mínimo".
3. **Barra de progreso en carrito** (ya existe FreeShippingBar): se activa al crear price rule free_shipping min_subtotal 499. Mensaje "Te faltan $X para envío gratis" → en pedido de mechas sugiere agregar cera.
4. **Palanca AOV real = regalo por monto, no el envío** (fase opcional 18B): "Desde $1,400 te regalamos una esencia de 10 ml" (≈ AOV actual; cuenco $999 + cera $499 lo cruza). Barra en carrito con 2 metas: envío gratis ($499) → regalo ($1,400). Implementar como sistema tipo `promo-addon.ts` (agregar esencia $0 / variante elegible cuando subtotal ≥ umbral). Medir con PostHog (AOV antes/después, % pedidos ≥ umbral). Alternativa más simple si no quiere regalo: dejar solo upsell actual.

**Implementación (Craft Mode, cuando la owner apruebe):**
- [Dashboard/owner] Configurar tarifa de envío para pedidos < $499 (monto a confirmar).
- `create-price-rule` tipo free_shipping, `conditions.min_subtotal = 499`, activa. Verificar que el checkout la respete (CheckoutUI línea ~657 usa `logic.shippingCost` / `isFree`).
- Revisar FreeShippingBar: estilo dunaru (radius 0, oliva), copy "Te faltan $X para envío gratis" / "Tu envío es gratis". Sin guion largo.
- Actualizar copy (quitar "sin mínimo", agregar "desde $499" donde sea afirmación absoluta):
  - `src/templates/EcommerceTemplate.tsx` L69 top bar → "Envío gratis a todo México desde $499"
  - `src/components/MainNav.tsx` L136
  - `src/pages/ui/IndexUI.tsx` L122, L186 (FAQ "sin monto mínimo"), L273, L329 ("sin mínimo")
  - `src/pages/ui/ProductPageUI.tsx` L1651 trust badge (sub "A todo México desde $499"), L1754 ("sin mínimo de compra")
  - `src/pages/ui/CheckoutUI.tsx` L317
  - `src/pages/ComoFunciona.tsx` L121, L232
  - `src/components/ProductStorySections.tsx` (17 matches: en PDPs de kits ≥ $499 el claim sigue siendo verdadero; solo cambiar FAQs genéricas)
  - `src/components/ProductQuantityTiers.tsx` L126 (ok, siempre ≥ $499)
  - `src/lib/pdp-includes.ts` L29 (ok para kits)
  - ⚠️ `src/pages/ReturnsPolicy.tsx` L68 dice "Envío gratis en pedidos desde $899" → YA ES INCONSISTENTE HOY; alinear a $499.
  - Descripciones DB de mechas/esencia/vaso solo: no deben prometer envío gratis.
  - `public/llms.txt` si menciona envío.
- QA: carrito con solo mechas ($99) → muestra barra + cobra envío; carrito con Cera 500 g ($499) → gratis; checkout total correcto.

### ❄️ FASE 17: EDICIÓN NIEVE (Navidad) — 🟢 EN VIVO
- 2026-11-20: creado **Cera Duna Nieve · 500 g** ($499, activo, colección navidad), mapeado en EDITIONS + headline.
- ⏳ Pendiente:
  1. Medidas del Bowl Ámbar (hoy no se mencionan).
  2. Imagen "Este kit incluye" por producto (Aldea ya existe: `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1795040429854-34pnoxnxfvx.webp`). Preguntar si la agrego a galería.
  3. Descripción del producto Esencia Navideño (vacía).
  4. QA visual: `/navidad`, PDPs, Cera Nieve PDP, carrito, móvil 375; `npx tsc --noEmit`.
  5. Owner: asignar paquete "Caja chica" a Cera Nieve en Dashboard (tool no lo copia).
  6. ¿Fotos propias color Nieve para Cera Nieve? hoy usa fotos Marfil.

### 🛒 FASE 16 UPSELL CARRITO ✅ · ⏳ QA 16.5
### 🛍️ FASE 15 BUEN FIN terminó 17 nov · ⏳ owner archiva add-on, quitar sticker
### FASE 14 EDICIONES: pendiente 14.5 landing fuera de temporada, 14.7 PDP archivada → redirect, footer dinámico.

---

## 4. Recent Changes
- 2026-11-24 — 🚚 Análisis de envío (chat): datos PostHog + recomendación FASE 18 (gratis desde $499 + regalo por monto). Sin cambios de código.
- 2026-11-20 — ❄️ Nuevo producto `cera-duna-nieve-500-g` (clon de Cera Duna 500 g, sin variantes, fotos Marfil), en colección navidad, mapeado a perlas en EDITIONS.
- 2026-11-18 — ❄️ Nieve: datos reales, `NIEVE_STORY` en ProductStorySections, descripciones DB, notas de aromas navideños.
- 2026-11-18 — ❄️ Nieve conectada a productos reales: slugs, inspiración, aromas navideños, includes/beneficios, colección.
- 2026-11-18 — 🌿 `Edition.scents {seasonal, hide}` reemplaza `seasonalScents`.
- 2026-11-16 — ❄️ Sistema de ediciones + edición NIEVE.
- 2026-11-13 — 🛒 FASE 16 upsell en carrito.
- 2026-11-13 — 🏷️ Sticker Buen Fin.
- 2026-11-13 — 🛍️ FASE 15 core Buen Fin.
- 2026-11-09 — 🃏 Tarjetas con chips de nombre.
- 2026-10-14 — 🏵️ Cempasúchil Eclipse y Alba publicados.
- 2026-10-13 — 🎨 Dúo de Tonos selector.
- 2026-10-10 — 🏵️ PDPs de temporada.
- 2026-10-09 — 🏵️ Aroma Cempasúchil.

## 5. Image Inventory
- Fotos producto 1122×1402 (4:5) webp. Uploads owner: `.../message-images/58337cbc-5a9f-4862-810a-1470616566de/`.
- Cera Duna 500 g: Marfil `m4gndhjxsj, wjrp5b6unfo, 0fxyjfz8hpv5, 7d84s8xv6k6, 5vig8ko6ums`; generales `qqmcg71lw2k, 1xb5mgphkap, binneg1kw2o, 1uw63qn80ye` (products/). Cera Nieve usa estas 9.
- ❄️ Banner Nieve (aprobado): `.../product-images/5429b9c7-.../nieve-banner.webp`.
- ❄️ Inspiración Nieve: `1795038283050-{yuqxeisjjd, w6zybbbc4dd, et53jlvbbf, 7fohsz8y38l, dhe9t85y9ge, zjoe0ial8g}.webp`.
- ❄️ Aromas navideños: Pino `products/xpu7atgmjzq.webp`, Manzana Canela `products/b8pwxy0ah5k.webp` (4:3).
- ❄️ Fotos bloque "Todo listo" NIEVE_STORY: Casita `pcr2chmvxs`, Aldea `aa7f61ffq9t`, Alba `u42c8wvtmid`, Eclipse `0189tb9i2pfv`, Nochebuena `l6o60g0rwz` (products/). Bloque 2 = `1787859462825-p6zo71cvpai`.
- 🛍️ Sticker Buen Fin: DEPRECAR. 🏵️ DDM banner + 6 inspiración en `EDITIONS[ddm]`.

## 6. Known Issues
- 2026-11-24 — 🟡 `ReturnsPolicy.tsx` L68 dice "Envío gratis en pedidos desde $899" mientras el resto del sitio dice "sin mínimo". Inconsistente; corregir en FASE 18.
- 2026-11-20 — 🟡 Cera Nieve creada sin `default_package_id` (original = "Caja chica"); owner debe asignarlo en Dashboard.
- 2026-11-18 — 🟡 Cambios de Nieve sin `tsc` ni QA visual.
- 2026-11-18 — 🟡 Slug `nochebuena-de-navidad-bowl-mbar` (sin "a"); funciona por mapeo explícito.
- 2026-11-16 — 🟠 gpt-image/gemini sin créditos (402); usar flux.
- 2026-11-13 — 🟠 `create/update-product` NO guardan `compare_at_price` en add-on.
- 2026-11-02 — 🟠 PDP de producto de edición archivado = "Producto no encontrado" (14.7).
- 2026-10-14 — 🟠 Duplicar en Dashboard copia variant IDs.
- 2026-10-13 — 🟠 `update-product` con `variants_config` BORRA compare_at.
- 2026-08-21 — 🔴 `update-product` NO soporta imágenes por variante ni cambio de slug.

## 7. Pending / Future Sessions
- [ALTA] FASE 18 envío: esperar OK de owner (umbral $499, tarifa < $499, ¿regalo desde $1,400?).
- [URGENTE] Nieve pendientes 1–6 de FASE 17.
- [ALTA] Owner archiva add-on Buen Fin y quitar sticker.
- [2026-11-20] PostHog `cart_upsell_viewed` vs `added`.
- [ALTA] 14.5 landing fuera de temporada · 14.7 redirect PDP archivada.
- [2027-09] Regreso DDM (desarchivar).