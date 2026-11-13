## 1. Brand & Context
- Brand: **dunaru** (dunaru.mx). Velas **rellenables** de **Cera Duna**: gránulos vegetales finos tipo arena + mechas de algodón.
- ⚠️ VOCABULARIO: **"rellenable"** (NO "recargable"). ⚠️ **PROHIBIDO el guion largo (—) en copy visible.** (Excepción: el sticker Buen Fin de la owner dice "2DA RECARGA", es su arte.)
- **Cera Duna** = nombre propietario de la cera (vegetal, en gránulos, sin parafina).
- **Cera 100% vegetal, biodegradable y ecológica** (claim aprobado). ⛔ NO usar porcentajes de soya/coco.
- ⚠️ 2026-08-27: eyebrow del hero dice **"Cera perlada 100% natural"** (pedido explícito de la owner).
- Tesis: no vendemos cera. Vendemos una forma simple de crear luz en el recipiente que ya tienes.
- **AROMA**: cera neutra. Add-on **Esencia para Vela · 10 ml** ($99). **1 frasco de 10 ml perfuma 500 g**. Cada frasco = UN aroma.
- Target: mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO. Market: México, MXN, es-MX.
- Tono: claro, cálido, directo, **editorial premium** (refs sensatehomes.com, soliracandle.com). ⛔ NO es founder-led.
- Pagos: **hasta 6 MSI** (nunca nombrar Stripe/Mercado Pago). Envío **GRATIS A TODO MÉXICO, SIN MÍNIMO**. Garantía 30 días. WhatsApp `525531215386`.
- INTEGRIDAD: nunca reseñas falsas (16 reales, 4.9), nunca precios tachados inventados, nunca logos de prensa.
- STORE_ID `5429b9c7-5990-4341-bdf9-33a4d52a8c44`. Rutas: `/productos/:slug`, `/paquete/:slug`, `/carrito`, `/pagar`, `/categorias/:handle`, `/como-funciona`, **`/dia-de-muertos`** (alias → `/categorias/dia-de-muertos`).
- ⚠️ `kit-vaso-de-concreto` ahora se llama **Cuenco Eclipse** (cerámica negra mate); slug no se cambia. Producto ancla de Meta Ads = `kit-vaso-de-vidrio`.
- ⚠️ La owner repriza, crea, DUPLICA y ARCHIVA desde el Dashboard. **NUNCA hardcodear precios.** Archivar = desaparecer (§2). Al duplicar, el slug queda `...-copy-xxxxx` y el agente NO puede cambiar slugs.
- 🗓️ **EDICIONES DE TEMPORADA = sistema anual reciclable** (decidido 2026-11-02). DDM regresa en 2027. Siguiente: **Navidad**. Archivar, nunca borrar; URL perenne sin año. ⛔ NO fecha límite de pedido en la web (excepción: promos con fecha real como Buen Fin).
- 🛍️ **PROMOS DE TEMPORADA (Buen Fin, Hot Sale…)**: mecánica = **add-on con descuento en PDP de kits + en carrito** (`src/lib/promo-addon.ts`, reusable). Producto APARTE, oculto, solo en carrito junto a un kit. La owner NO quiere copy "ya trae el mismo color": preselección + selector visible. Sticker de la promo flotando arriba a la derecha de la foto (PDP + tarjetas).
- 🛒 **UPSELL EN CARRITO (decidido 2026-11-13)**: UNA sugerencia a la vez, en secuencia: 1º promo de temporada (si aplica) → 2º aroma. El aroma es permanente (no depende de promos). Primera vez que la owner hace upsell en carrito: medir antes de agregar más.

### 🏷️ SISTEMA DE NOMBRES — `[Qué es] · [Formato]`
| Slug | Título | Precio | Compare |
|---|---|---|---|
| kit-vaso-de-vidrio | Vela Rellenable · Vaso de Vidrio | $749 | $899 |
| kit-vaso-de-concreto | **Vela Rellenable · Cuenco Eclipse** | $999 | $1,199 |
| vela-rellenable-cuenco-eclipse-copy-ppsiy | **Vela Rellenable · Cuenco Alba** (id `f54a5a9e-...`) | $999 | $1,199 |
| vela-rellenable-cuenco-dunaru | Vela Rellenable · Cuenco Dunaru | $1,199 | — |
| 🟠 vela-rellenable-bowl-ambar | Vela Rellenable · Bowl Ámbar | $1,199 | $1,299 (id `4dd68c50-...`) |
| vela-bowl-de-acero | Vela Rellenable · Bowl de Acero | $899 | ARCHIVADO |
| perlas-originales-500-g | Cera Duna · 500 g (id `90445ca9-...`) | $499 | — |
| reserva-1-kg | Cera Duna · 1 kg | $849 | $999 |
| d-o-de-tonos | Dúo de Tonos · 1 kg | $899 | ⚠️ falta $999 por variante (Dashboard) |
| tr-o-de-tonos | Trío de Tonos · 1.5 kg | $1,199 | $1,499 |
| bowl-negro | **Cuenco Eclipse** (solo recipiente) | $549 | $699 |
| cuenco-eclipse-copy-tjby7 | **Cuenco Alba** (solo recipiente, id `f4698252-...`) | $549 | $699 |
| cuenco-dunaru | Cuenco Dunaru (solo recipiente) | $799 | — |
| 🟠 bowl-ambar | Bowl Ámbar (solo recipiente) | $699 | — |
| bowl-espejo-de-acero | Bowl Espejo de Acero | $399 | $499 |
| vaso-extra-transparente | Vaso de Vidrio Transparente | $249 | — |
| pack-30-mechas | 30 Mechas de Algodón | $99 | — |
| esencia-para-vela-10-ml | Esencia para Vela · 10 ml | $99 | — |
| 🛍️ cera-duna-500-g-buen-fin | Cera Duna · 500 g + 30 mechas · Precio Buen Fin (id `02a9c4b1-a775-46c1-9f8f-4fad67e044f4`, creado 2026-11-13) | $249 | compare NO se guardó en DB (bug tool); el código usa precio de Cera Duna 500 g ($499). OCULTO, solo add-on. Variantes Color Marfil/Champagne/Ónix; images en ese orden. |
| 🏵️ esencia-para-vela-cempasuchil-10-ml | Esencia para Vela Cempasúchil · 10 ml | $99 | — (oculto) |
| 🏵️ cera-duna-cempasuchil-500-g | Cera Duna Cempasúchil · 500 g | $499 | — |
| 🏵️ cera-duna-cempasuchil-1-kg | Cera Duna Cempasúchil · 1 kg | $849 | — |
| 🏵️ vela-rellenable-cempasuchil-vaso-de-vidrio | Vela Rellenable Cempasúchil · Vaso de Vidrio | $749 | — |
| 🏵️ vela-rellenable-cempasuchil-cuenco-dunaru | Vela Rellenable Cempasúchil · Cuenco Dunaru | $1,199 | — |
| 🏵️ vela-rellenable-cempasuchil-cuenco-dunaru-copy-da2k8 | Vela Rellenable Cempasúchil · Cuenco Eclipse | $1,199 | — |
| 🏵️ vela-rellenable-cempasuchil-cuenco-dunaru-copy-ksihd | Vela Rellenable Cempasúchil · Cuenco Alba | $999 | $1,199 |
| 🏵️ vela-rellenable-cempasuchil-bowl-ambar | Vela Rellenable Cempasúchil · Bowl Ámbar | $1,199 | — |

🏵️ = edición DDM. ARCHIVADOS desde 2026-11-02. Se desarchivan en oct 2027.

⚠️ Copias hardcodeadas de títulos: `CATALOG_FALLBACK` (IndexUI), `FOOTER_SHOP_LINKS` (EcommerceTemplate, aún dice "Bowl de Cerámica"), `src/lib/navigation.ts`.

### CATÁLOGO — otros datos
- CUENCO DUNARU: cerámica 20×6 cm, varias mechas. Swatches en DB `#101010` → tarjetas IGNORAN swatches.
- CUENCO ECLIPSE / ALBA: 14×5 cm no confirmado. Descripción de Cuenco Alba en DB dice "cerámica negra mate" (probablemente mal).
- 🟠 BOWL ÁMBAR: vidrio ámbar, borde ondulado. Medidas/mechas NO confirmados.
- ESENCIA: opción `Aroma`, 6 variantes; fotos en orden de `SCENTS`.
- 🏵️ Cempasúchil es PRODUCTO PROPIO. Config `src/lib/scents.ts`.
- 🎨 DÚO DE TONOS: `<DuoTonePicker />` (`src/lib/duo-tones.ts`). Tarjetas: "Elegir tonos" (`CHOOSE_ON_PDP`).
- Price rule: `perlas-originales-500-g` 2 uds 10% / 3 uds 15% (por eso el add-on es producto aparte).
- MECHAS: 30 por 500 g.
- COLECCIONES: `kits`, `recipientes`, `accesorios`, `dia-de-muertos` (id `fdd25437-...`). Falta `recargas`. Próxima: `navidad`.
- ORDEN = `src/lib/catalog-order.ts`. `HIDDEN_FROM_CATALOG_SLUGS` = esencia cempasúchil + `cera-duna-500-g-buen-fin`.
- Opción de color en kits: `Color`/`Colores`; PDP muestra "Color de la cera". Valores Marfil / Champagne / Ónix. Inventario NO se rastrea (`track_inventory: false`, inventory 0) → usar track_inventory para disponibilidad.

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
| Latón | 36 46% 50% | `dunaru-laton` |
| 🏵️ Cempasúchil | 30 88% 55% | `dunaru-cempasuchil`: SOLO DDM. |
- Fuente de verdad = `src/index.css`. Display Instrument Serif · Body Manrope. `--radius: 0rem`. Móvil-first.
- oliva = selección + CTA · periwinkle = navegación · terracota = acentos/promos.
- `.full-bleed`. `body { overflow-x: clip }`. `PageTemplate` default ya agrega `max-w-7xl px-4 py-6`.
- 🃏 `ProductCardUI`: foto 4:5, chips con nombre (swatches ignorados), `tone="dark"` para ediciones.

### 🗓️ EDICIONES (HOY `src/lib/seasonal.ts`, solo DDM → MIGRAR a `src/lib/editions.ts`, FASE 14)
- Archivar oculta: sección home, link menú, grupo `/categorias/todos`. Redirect de PDP archivada NO implementado.
- CHECKLIST CAMBIO DE EDICIÓN — Owner: archivar (no borrar), no archivar colección, crear nuevos en Borrador, publicar cuando el agente confirme. Agente: entrada en `EDITIONS`, verificar home/menú/landing/PDP/carrito, sitemap+SEO, actualizar §1 y §7.

### Otros sistemas
- TRACKING `src/lib/tracking-utils.ts`. ESTATUS `useActiveProductSlugs.ts`. RESEÑAS `src/data/reviews.ts`.
- DEEP LINK `?variante=` en ProductPageUI (no simplificar).
- 🧩 ADD-ONS PDP (ProductPageUI): `scentSelection` (aroma) + `addonSelection`/`activeAddon` (promo). `addOnExtraItems` = líneas extra (aroma + promo) usadas en Comprar ahora, express checkout y tracking. `handleAddToCartWithAddOns` agrega kit → aroma → promo (en ese orden, para que el candado cuente el kit). `ctaTotal` y `stickyPriceNote` suman ambos.
- 🔒 CANDADO PROMO: `CartContext` usa `guardedCartReducer` → `enforcePromoAddonLimit` (promo-addon.ts) tras CADA acción + al cargar localStorage. Recorta add-on a nº de kits; si `!isPromoLive()` lo quita. Toast con dedup 1.5 s.
- 🛍️ PROMO ADD-ON: `src/lib/promo-addon.ts` (config `PROMO_ADDON`, incl. `badgeImage`/`badgeAlt`), `src/hooks/usePromoAddon.ts`, `src/components/PromoAddonSelector.tsx` (tarjeta checkbox + chips de color). `/productos/cera-duna-500-g-buen-fin` redirige a Cera Duna 500 g (`src/pages/Product.tsx`).
- 🏷️ STICKER PROMO: `src/components/PromoStickerBadge.tsx` (`slug`, `size="pdp"|"card"`). Solo kits de `PROMO_ADDON.kitSlugs` + `isPromoLive()`. Usado en ProductPageUI y ProductCardUI. Para otra promo: cambiar `badgeImage`.
- CHECKLIST PDP vela nueva: PDP_HEADLINE + PDP_BENEFITS, pdp-includes, SCENT_ENABLED_SLUGS, catalog-order, SHOP_CARDS + CATALOG_FALLBACK, [opc] PDP_CONTENT, [si hay promo] `PROMO_ADDON.kitSlugs`.
- Orden PDP (ProductStorySections): garantías → 4 pasos → Reseñas → bloques → comparativa → FAQ → cierre.
- 🏠 HOME: hero → beneficios → franja edición → 4 pasos → Elige tu vela → Ritual → Reviews → Scents → Tonos → CasaReal → BrandStory → CompareTable → FAQ → newsletter.

---

## 3. Active Plan

### 🛒 FASE 16: UPSELL EN CARRITO (Buen Fin → Aroma) — 📋 PLANEADO 2026-11-13, aprobado en concepto por owner, NO construido
**Qué quiere la owner:** si en el carrito hay una vela del Buen Fin y aún no tiene su bolsa de $249, mostrar la MISMA oferta dentro del carrito, agregable con 1 clic y con color cambiable. Preguntó si también tiene sentido sugerir aroma. Decisión: SÍ, pero **una sugerencia a la vez, en secuencia**.

**Lógica (una sola tarjeta visible, prioridad en orden):**
1. **Buen Fin** → si `isPromoLive()` && `usePromoAddon()` devuelve producto && hay ≥1 kit de `PROMO_ADDON.kitSlugs` en carrito && `promoAddonRoom(items) > 0`.
2. **Aroma** → si NO aplica (1) && hay ≥1 producto con `supportsScentAddon(slug)` en carrito (kit, Cera Duna 500 g/1 kg, Dúo, Trío; el add-on Buen Fin también cuenta como cera) && NO hay ninguna línea de `SCENT_PRODUCT_SLUG` en el carrito.
3. Ninguna → no se muestra nada.
Efecto: la clienta agrega la bolsa → la tarjeta cambia sola a la del aroma (la "secuencia" que propuso la owner). Si tiene 2 kits y 1 bolsa, sigue mostrando Buen Fin ("para tu otra vela").

**Ubicación:** dentro del área con scroll, DEBAJO de las líneas del carrito (aprovecha el espacio vacío del drawer), antes del bloque de código de descuento/total. En `CartSidebar.tsx` (drawer) y en `src/pages/ui/CartUI.tsx` (`/carrito`). Encabezado pequeño opcional: "Completa tu vela" (uppercase tracking, text-foreground/60).

**16.1 Tarjeta Buen Fin en carrito** — nuevo `src/components/cart/CartPromoUpsell.tsx`
- Reusar visual de `PromoAddonSelector` (mismo eyebrow terracota `PROMO_ADDON.label`, título "Agrega otra bolsa de 500 g + 30 mechas", precio $249 + tachado compareAt + chip "Ahorras $250", línea "Para rellenar tu vela una vez más. Hasta 120 horas de luz extra.").
- DIFERENCIA vs PDP: en carrito NO checkbox. Chips de color SIEMPRE visibles (Marfil/Champagne/Ónix) + botón **"Agregar · $249"** (oliva CTA, full width en móvil o a la derecha). 1 clic = `addItem(addon.product, variant)`.
- Preselección de color: color (`getColorValue`) del ÚLTIMO kit de promo en el carrito que aún no tenga bolsa equivalente; fallback primera variante disponible. Al tocar chip cambia miniatura (misma lógica `thumb` por índice de variante).
- Si `promoAddonRoom > 1` (ej. 2 velas): título "Agrega otra bolsa para tu otra vela" no hace falta; mantener el mismo título, simple.
- Ideal: extraer de `PromoAddonSelector` un subcomponente `PromoAddonColorChips` + `PromoAddonPriceRow` para no duplicar; si complica, duplicar con cuidado.
- Tracking: `trackAddToCart` existente con `source: "cart_upsell_promo"` + evento PostHog `cart_upsell_added` `{ type: "promo", variant }`. También `cart_upsell_viewed` una vez por sesión por tipo (sessionStorage) para medir tasa de toma.

**16.2 Tarjeta Aroma en carrito** — nuevo `src/components/cart/CartScentUpsell.tsx`
- Cargar producto `SCENT_PRODUCT_SLUG` (reusar el loader que ya usa ProductPageUI para el selector de aroma; buscar `SCENT_PRODUCT_SLUG` en src). Solo aromas REGULARES (`SCENTS`, nunca Cempasúchil: está archivado).
- Copy (sin guion largo): eyebrow "Dale aroma" · título "Esencia para Vela · 10 ml" · precio $99 (de la DB) · ayuda `SCENT_YIELD_COPY` ("Un frasco perfuma 500 g de cera").
- Selector: 6 chips con nombre del aroma (scroll horizontal en móvil o wrap), SIN preselección; botón "Agregar · $99" deshabilitado hasta elegir (texto "Elige un aroma"). Miniatura = `getScentImageByVariantName(selected)` o foto del producto.
- 1 clic agregar = `addItem(scentProduct, variant)`, cantidad 1 (independiente, igual que en PDP).
- Opcional (no MVP): línea "Tienes 1 kg de cera: con 2 frascos perfumas todo" calculada por gramos. NO en esta fase.
- Tracking igual: `source: "cart_upsell_scent"`, `cart_upsell_added { type: "scent", aroma }`.

**16.3 Contenedor** — `src/components/cart/CartUpsell.tsx` decide cuál mostrar (lógica arriba) y se inserta en CartSidebar + CartUI. Recibe `items` y `addItem` del `useCart()`.

**16.4 Línea del add-on en carrito (= 15.b, hacerlo junto):** en CartSidebar (~l.222-292) y CartUI: si `isPromoAddonSlug(item.product.slug)` → eyebrow "Precio Buen Fin" terracota, título "Cera Duna · 500 g + 30 mechas - {color}", tachado `compareAt` (de `usePromoAddon`) y `disabled` en "+" cuando `promoAddonRoom(items) <= 0`.

**16.5 QA:** carrito con Eclipse Marfil → tarjeta Buen Fin con Marfil preseleccionado → cambiar a Ónix → Agregar → línea Ónix $249 tachado $499 → tarjeta pasa a Aroma → elegir Higo Matcha → Agregar → no queda tarjeta. 2 kits + 1 bolsa → sigue Buen Fin. Solo Cera Duna 500 g → solo Aroma. Solo recipiente (bowl-negro) → nada. Después de 17 nov (simular cambiando fecha) → solo Aroma. Móvil 375 px: tarjeta cabe sin scroll horizontal; chips tappables (h-8+). `npx tsc --noEmit`.

**Lo que NO se hace (decisión):** carrusel de varios productos, sugerencias aleatorias, popups. Una sola tarjeta relevante. Medir 1 semana con PostHog (`cart_upsell_viewed` vs `cart_upsell_added`) antes de sumar más (siguiente candidato: mechas extra o Cera Duna 1 kg para quien solo compra 500 g).

### 🛍️ FASE 15: BUEN FIN ADD-ON (500 g + 30 mechas a $249) — CORE CONSTRUIDO 2026-11-13 · promo vive hasta 17 nov 23:59 CDMX
✅ Hecho: producto add-on creado (activo, oculto), config + hook + tarjeta en PDP de los 5 kits, total en CTA + sticky, agregar al carrito / Comprar ahora / express con add-on, candado en CartContext, oculto del catálogo, redirect de su PDP. ✅ sticker Buen Fin en PDP y tarjetas de los 5 kits. Owner confirmó que quedó perfecto.
⏳ Pendiente:
- 15.a QA en preview (ver lista anterior: tarjeta, sticker, candado, móvil 375 px, tsc).
- 15.b → se hace dentro de 16.4.
- 15.c Excluir slug del sitemap (`scripts/generate-sitemap.ts`), búsqueda y upsells del carrito si no usan `filterCatalogVisible`.
- 15.d Top bar "Buen Fin: 500 g extra a mitad de precio con tu vela" condicionado a `isPromoLive()`.
- 15.e Cierre 18 nov: owner ARCHIVA el producto add-on (la fecha ya lo apaga sola, incluido sticker y tarjeta de carrito).

### FASE 14: SISTEMA DE EDICIONES RECICLABLES (DDM → Navidad) 📋 planeado 2026-11-02, NO construido
- 14.1 `src/lib/editions.ts` (reemplaza `seasonal.ts`) con `EDITIONS[]`, helpers y `useActiveEdition()`.
- 14.2 `--edition-accent` / `.theme-edition-ddm`. 14.3 componentes genéricos. 14.4 menú dinámico (`MainNav.useLiveNav`, móvil, footer). 14.5 landing fuera de temporada ("regresa en…" + newsletter). 14.6 aliases de rutas. 14.7 PDP archivada → `<Navigate>` al base. 14.8 Navidad (ángulo REGALO) cuando la owner mande datos. 14.9 QA. 14.10 sitemap.

### FASE 13: CUENCO ALBA ✅ pendientes 13.b variantes (owner) · 13.c descripción (owner) · 13.d menú/footer (con 14.4)
### FASE 12: DÚO ✅ falta QA (12.a) + $999 compare (12.b)
### FASE 10: BOWL ÁMBAR 🟠 10.b medidas/mechas · 10.c bloques · 10.d menú/footer
### FASE 8: 8.0 tests tracking + tsc · 8.2 contenido Cuenco Dunaru · 8.3 `/aromas` · 8.4 tiers AOV

---

## 4. Recent Changes
- 2026-11-13 — 📋 Plan FASE 16 guardado: upsell en carrito (Buen Fin → Aroma, una tarjeta a la vez).
- 2026-11-13 — 🏷️ Sticker Buen Fin flotante (arriba derecha) en PDP y tarjetas de catálogo de los 5 kits (`PromoStickerBadge`). Fondo removido. Owner: "quedó perfecto".
- 2026-11-13 — 🛍️ FASE 15 core construido: add-on Buen Fin en PDP de 5 kits, candado en carrito, add-on oculto + redirect. Producto `cera-duna-500-g-buen-fin` creado.
- 2026-11-13 — ✅ FASE 15 aprobada por owner (5 kits, bolsa con 30 mechas, color preseleccionado + selector).
- 2026-11-13 — 📋 Plan FASE 15 guardado.
- 2026-11-09 — 🃏 Tarjetas de catálogo: chips con nombre en vez de swatches.
- 2026-10-14 — 🏵️ Cempasúchil · Cuenco Eclipse y · Cuenco Alba publicados.
- 2026-10-14 — 🏠 "Elige tu vela": + Cuenco Alba y Bowl Ámbar.
- 2026-10-13 — 🎨 Dúo de Tonos: selector "Elige tus 2 tonos".
- 2026-10-10 — 🏵️ PDPs de temporada: fondo cálido, franja, breadcrumb.
- 2026-10-10 — 🏵️ `/categorias/dia-de-muertos` rediseñada.
- 2026-10-10 — 🃏 Tarjetas de catálogo rediseñadas; fix doble padding en Collection.
- 2026-10-09 — 🏵️ Aroma de temporada Cempasúchil.
- 2026-10-09 — 🎠 Home: sección DDM en carrusel.
- 2026-10-09 — 🟠 BOWL ÁMBAR: 3 productos.

## 5. Image Inventory
- Fotos de producto: 1122×1402 (4:5), webp. Base uploads owner: `.../message-images/58337cbc-5a9f-4862-810a-1470616566de/`.
- 🛍️ Sticker Buen Fin (sin fondo, 400×373): `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5429b9c7-5990-4341-bdf9-33a4d52a8c44/buen-fin-badge.webp`. Original owner: `1794591349171-qik2qb5jzk.webp`. DEPRECAR tras 17 nov.
- Portadas home fallback: Cuenco Eclipse `4miuldwd4fr` · Cuenco Alba `cjqxfk2uuyh` · Bowl Ámbar `ki2tpr6i8vh`.
- Tonos / bolsa Cera Duna 500 g: Marfil `m4gndhjxsj` · Champagne `siffm8eo71e` · Ónix `smwszrq34a` (también son las 3 fotos del add-on Buen Fin, en ese orden).
- Aromas (flat-lays, en `SCENTS.imageUrl`): usar `getScentImageByVariantName` para miniatura en carrito.
- 🏵️ Banner DDM `1791586723101-uqttcs5raf.webp`. Aroma Cempasúchil `1791590350527-o3gpv79gzvi.webp`. Bowl Ámbar ref `1791588734332-bzvkrpcdmwe.webp`.
- 🏵️ INSPIRACIÓN DDM: `1791586723101-uqttcs5raf` · `-beyoys9qmbm` · `-m6tb2khuzlr` · `-1fvs134xdv6` · `-b7696bizhwg` · `-bcdckoare7`.
- UGC reseñas: `facil` `1784238899092-acdwwacyaq` · `sala` `1787861715629-sjd49g0k2j` · `visitas` `1784238899091-zp99w7xbo5a` · `reutilizar` `-i6pb49ce8vp` · `regalo` `-0snwjx0f7w7` · `completa` `-ztn82bcfir`.
- Cuenco bloques: `1787859462824-br3pyp2cr9k` · `1787859462825-p6zo71cvpai`. Cerámica: `1787846317152-fp7km169wu7` · `-d15my4ruzvs` · `-kecin16ha`.
- 4 pasos: `1787701006060-mdjjspbepql` · `1787699972902-6ha0kcq29g` · `-pr81fsb4jso` · `-11zjzn59pysq`.
- Hero desktop `1787702019949-nscqjcvsz0r.webp`; hero móvil `hero-dunaru-mobile.mp4`. Ritual `1787701006060-vpgjgog2juh.webp`. Casa real `/casa-real-*.webp`.
- 🔴 FALTAN: fotos reales cempasúchil · packshots esencia · empaque nuevo · todo Navidad.

## 6. Known Issues
- 2026-11-13 — 🟠 `create-product`/`update-product` NO guardan `compare_at_price` en el add-on. Workaround: `usePromoAddon` usa precio de Cera Duna 500 g como "antes". Si la owner pone compare en Dashboard, se usa ese.
- 2026-11-13 — 🟡 Stepper "+" del carrito no se deshabilita para el add-on (se arregla en 16.4); el candado recorta y avisa con toast.
- 2026-11-13 — 🟡 Sticker Buen Fin: posición en carrusel móvil calculada (slide 90%), validar visualmente en QA.
- 2026-11-02 — 🟠 PDP de producto de temporada archivado muestra "Producto no encontrado". Fix en 14.7.
- 2026-11-02 — 🟡 `/categorias/dia-de-muertos` sin productos = "Muy pronto" genérico. Fix en 14.5.
- 2026-10-14 — 🟠 Duplicar en Dashboard copia los variant IDs. Para Navidad: crear productos nuevos, no duplicar.
- 2026-10-13 — 🟠 `update-product` con `variants_config` BORRA el compare_at.
- 2026-10-13 — 🟡 Variantes del Dúo sin foto propia.
- 2026-10-10 — 🟡 Tarjetas 4:5 recortan fotos no 4:5.
- 2026-09-26 — 🟡 Tests y tsc no ejecutados por el agente.
- 2026-08-27 — 🟠 Cuenco Dunaru "500 g + 30 mechas" sin confirmar. 🟡 `CATALOG_FALLBACK` precios viejos.
- 2026-08-21 — 🔴 `update-product` NO soporta imágenes por variante ni cambio de slug.

## 7. Pending / Future Sessions
- [URGENTE HOY] FASE 16 upsell carrito (16.1–16.5, incluye 15.b). Luego FASE 15: QA (15.a), sitemap (15.c), top bar (15.d).
- [2026-11-20] Revisar en PostHog `cart_upsell_viewed` vs `cart_upsell_added` por tipo; decidir siguiente upsell (mechas / 1 kg).
- [2026-11-18] Owner: archivar producto add-on Buen Fin. Sticker y tarjeta de carrito se apagan solos por fecha.
- [URGENTE] Craft: FASE 14 ANTES de lanzar Navidad. Owner: mandar datos de Navidad → 14.8.
- [ALTA] QA Dúo (12.a/12.b). Owner: variantes + descripción Cuenco Alba. Menú/footer Eclipse/Alba (13.d con 14.4).
- [ALTA] Bowl Ámbar medidas/bloques. Tests tracking + tsc.
- [MED] PDP_CONTENT Cuenco Alba. Foto del Dúo por pareja. `/aromas`. Tiers AOV.
- [2027-09] Regreso DDM.
- [BAJA] B2B. Banners de colección.