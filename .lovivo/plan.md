## 1. Brand & Context
- Brand: **dunaru** (dunaru.mx). Velas **rellenables** de **Cera Duna**: gránulos vegetales finos tipo arena + mechas de algodón.
- ⚠️ VOCABULARIO: **"rellenable"** (NO "recargable"). ⚠️ **PROHIBIDO el guion largo (—) en copy visible.**
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
- ⚠️ `kit-vaso-de-concreto` es CERÁMICA; slug no se cambia. Producto ancla de Meta Ads = `kit-vaso-de-vidrio`.
- ⚠️ La owner repriza, crea y ARCHIVA desde el Dashboard. **NUNCA hardcodear precios.** Archivar = desaparecer (§2).
- 🏵️ **2026-10-09: EDICIÓN LIMITADA CEMPASÚCHIL (Día de Muertos) EN VIVO.** Edición limitada REAL. ⛔ **NO poner fecha límite de pedido en la web**.

### 🏷️ SISTEMA DE NOMBRES — `[Qué es] · [Formato]`
| Slug | Título | Precio | Compare |
|---|---|---|---|
| kit-vaso-de-vidrio | Vela Rellenable · Vaso de Vidrio | $749 | $899 |
| kit-vaso-de-concreto | Vela Rellenable · Bowl de Cerámica | $999 | $1,199 |
| vela-rellenable-cuenco-dunaru | Vela Rellenable · Cuenco Dunaru | $1,199 | — |
| 🟠 vela-rellenable-bowl-ambar | Vela Rellenable · Bowl Ámbar | $1,199 | — (id `4dd68c50-f83b-4a16-9d9f-20231dc12e9b`) |
| vela-bowl-de-acero | Vela Rellenable · Bowl de Acero | $899 | ARCHIVADO |
| perlas-originales-500-g | Cera Duna · 500 g | $499 | — |
| reserva-1-kg | Cera Duna · 1 kg | $849 | $999 |
| d-o-de-tonos | Dúo de Tonos · 1 kg | $899 | ⚠️ se perdió $999 (2026-10-13), owner debe ponerlo en Dashboard por variante |
| tr-o-de-tonos | Trío de Tonos · 1.5 kg | $1,199 | $1,499 |
| bowl-negro | Bowl Artesanal de Cerámica | $499 | $549 |
| cuenco-dunaru | Cuenco Dunaru (solo recipiente) | $799 | — |
| 🟠 bowl-ambar | Bowl Ámbar (solo recipiente) | $699 | — (id `84d48963-cbca-4bee-9b38-721d809a5d4c`) |
| bowl-espejo-de-acero | Bowl Espejo de Acero | $399 | $499 |
| vaso-extra-transparente | Vaso de Vidrio Transparente | $249 | — |
| pack-30-mechas | 30 Mechas de Algodón | $99 | — |
| esencia-para-vela-10-ml | Esencia para Vela · 10 ml | $99 | — |
| 🏵️ esencia-para-vela-cempasuchil-10-ml | Esencia para Vela Cempasúchil · 10 ml | $99 | — (id `e8881a75-2348-4a05-a44a-8c16f2384c7b`, sin variantes, oculto del catálogo) |
| 🏵️ cera-duna-cempasuchil-500-g | Cera Duna Cempasúchil · 500 g | $499 | — (id `5b73ad7e-...`) |
| 🏵️ cera-duna-cempasuchil-1-kg | Cera Duna Cempasúchil · 1 kg | $849 | — (id `2e727197-...`) |
| 🏵️ vela-rellenable-cempasuchil-vaso-de-vidrio | Vela Rellenable Cempasúchil · Vaso de Vidrio | $749 | — (id `c5340501-...`) |
| 🏵️ vela-rellenable-cempasuchil-cuenco-dunaru | Vela Rellenable Cempasúchil · Cuenco Dunaru | $1,199 | — (id `92e6befb-...`) |
| 🏵️🟠 vela-rellenable-cempasuchil-bowl-ambar | Vela Rellenable Cempasúchil · Bowl Ámbar | $1,199 | — (id `8083d7fc-4888-4794-b2f7-dae760c877ec`) |

⚠️ Copias hardcodeadas de títulos: `CATALOG_FALLBACK` (IndexUI), `FOOTER_SHOP_LINKS` (EcommerceTemplate), `src/lib/navigation.ts`.

### CATÁLOGO — otros datos
- CUENCO DUNARU: cerámica 20×6 cm, varias mechas. Swatches en DB todos `#101010` (mal).
- 🟠 **BOWL ÁMBAR (2026-10-09)**: vidrio color ámbar, borde ondulado. Medidas y nº de mechas NO confirmados (no se afirman en copy).
- ESENCIA: opción `Aroma`, 6 variantes; fotos en `product.images` en el orden de `SCENTS`.
- 🏵️ AROMA DE TEMPORADA: **Cempasúchil** es PRODUCTO PROPIO (no variante). Config `src/lib/scents.ts`.
- 🎨 **DÚO DE TONOS (2026-10-13)**: en DB opción `Tonos` con 3 variantes: "Marfil + Champagne", "Marfil + Ónix", "Champagne + Ónix" ($899). En la PDP NO se ven combinaciones: `<DuoTonePicker />` muestra los 3 tonos y la clienta elige 2; se selecciona la variante de la pareja (`src/lib/duo-tones.ts`, formato canónico "Tono + Tono" en orden Marfil, Champagne, Ónix). Sin pareja completa, Comprar/Agregar (también sticky) muestran toast y llevan al selector; express checkout oculto. Tarjetas de catálogo: CTA "Elegir tonos" → PDP (`CHOOSE_ON_PDP`). Trío no tiene variantes (trae los 3).
- Price rule: `perlas-originales-500-g` 2 uds 10% / 3 uds 15% (NO aplica a Cempasúchil 500 g).
- MECHAS: 30 por 500 g.
- COLECCIONES: `kits`, `recipientes`, `accesorios`, **`dia-de-muertos`** (id `fdd25437-...`). Falta `recargas`.
- ORDEN DE MERCHANDISING = `src/lib/catalog-order.ts` (grupo `dia-de-muertos` primero). `HIDDEN_FROM_CATALOG_SLUGS` = esencia cempasúchil. `CHOOSE_ON_PDP` = esencia + dúo.

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
| 🏵️ **Cempasúchil** | **30 88% 55%** | **`dunaru-cempasuchil`**: SOLO edición Día de Muertos. |
- Fuente de verdad = `src/index.css`. Display Instrument Serif · Body Manrope. `--radius: 0rem`. Móvil-first, nada dependiente de hover.
- oliva = selección + CTA · periwinkle = navegación · terracota = acentos/errores suaves.
- `.full-bleed` (index.css). `body { overflow-x: clip }`.
- ⚠️ `PageTemplate` layout `default` YA agrega `max-w-7xl px-4` + `py-6`. Páginas con contenedor propio deben usar `layout="full-width"`.
- 🃏 **TARJETA DE CATÁLOGO** (`ProductCardUI`, 2026-10-10): foto 4:5 a sangre, título Manrope text-sm, estrellas, precio + "Agregar" (o CTA de `CHOOSE_ON_PDP`). Prop `tone="dark"` para DDM.

### 🏵️ EDICIÓN DE TEMPORADA — `src/lib/seasonal.ts`
- `SEASONAL_BASE_SLUG`, `SEASONAL_SLUGS`, `SEASONAL_HEADLINE`, `contentSlug(slug)`, `isSeasonalSlug`, `DDM_PATH`, `DDM_COLLECTION_HANDLE`.
- Landing `/categorias/dia-de-muertos`: `<DdmCollectionHero />` → grid ónix con tarjetas `tone="dark"` → `<DdmInspirationGallery />`.
- PDPs de temporada: `useSeasonalTheme()` (`.theme-ddm`), `<SeasonalRibbon />`, breadcrumb a Día de Muertos. `LimitedEditionBadge.tsx`.
- Próxima temporada: añadir slugs a `SEASONAL_BASE_SLUG` + headline; cambiar fotos de `IDEAS` y `HERO_IMG`; cambiar `SEASONAL_SCENTS`.

### Otros sistemas
- TRACKING Meta Pixel + CAPI: `src/lib/tracking-utils.ts`. ESTATUS: `useActiveProductSlugs.ts`. RESEÑAS: `src/data/reviews.ts`.
- DEEP LINK `?variante=` en ProductPageUI (no simplificar el effect). PRECIO CTA: `ctaTotal`.
- CHECKLIST PDP vela nueva: PDP_CONTENT, PDP_HEADLINE + PDP_BENEFITS, pdp-includes, SCENT_ENABLED_SLUGS, catalog-order.
- Orden PDP (ProductStorySections): garantías → 4 pasos → Reseñas → [afterReviews] → bloques → comparativa → FAQ → cierre.
- Texturas/utilidades: `.texture-*`, `.lockup`, `.eyebrow`, `<Reveal>`, `.section-pad(-sm)`.
- Navegación: `src/lib/navigation.ts`. Imágenes editoriales: `src/lib/steps-media.ts`. Aromas: `src/lib/scents.ts`. Tonos Dúo: `src/lib/duo-tones.ts`.
- 🏠 HOME: hero → beneficios → 🏵️ DDM → 4 pasos → Elige tu vela → Ritual → Reviews → Scents → Tonos → CasaReal → BrandStory → CompareTable → FAQ → newsletter.

---

## 3. Active Plan
### FASE 12: DÚO ELIGE 2 TONOS (2026-10-13) ✅ construido, falta QA
- 12.a 🔴 QA: `/productos/d-o-de-tonos` elegir 2 tonos → carrito/checkout muestran "Marfil + Ónix"; sin pareja, botones muestran toast; tarjeta catálogo dice "Elegir tonos".
- 12.b 🔴 Owner: poner precio de comparación $999 en las 3 variantes desde Dashboard (el tool lo borró).

### FASE 11: LOOK DDM + TARJETAS ✅ construido, falta QA
- 11.a 🔴 QA visual móvil de `/categorias/todos`, `/categorias/dia-de-muertos`, PDP de temporada.

### FASE 10: BOWL ÁMBAR 🟠
- 10.b medidas/mechas · 10.c bloques con foto · 10.d home/menú/footer.

### FASE 9: EDICIÓN CEMPASÚCHIL 🏵️
- 9.a 🔴 QA aroma Cempasúchil en carrito. 9.i notas del aroma. 9.b fotos reales. 9.e sitemap. 9.f fin de temporada: archivar + redirect.

### FASE 8
- 8.0 🔴 Tests tracking + tsc. 8.2 🔴 Contenido Cuenco Dunaru. 8.3 `/aromas`. 8.4 Tiers AOV.

---

## 4. Recent Changes
- 2026-10-13 — 🎨 Dúo de Tonos: 3 variantes por combinación en DB + selector "Elige tus 2 tonos" en PDP + "Elegir tonos" en tarjetas.
- 2026-10-10 — 🏵️ PDPs de temporada: fondo cálido, franja "Edición Cempasúchil", breadcrumb.
- 2026-10-10 — 🏵️ `/categorias/dia-de-muertos` rediseñada.
- 2026-10-10 — 🃏 Tarjetas de catálogo rediseñadas; fix doble padding en Collection.
- 2026-10-09 — 🏵️ Aroma de temporada Cempasúchil.
- 2026-10-09 — 🎠 Home: sección DDM en carrusel. "Ideas para tu altar".
- 2026-10-09 — 🟠 BOWL ÁMBAR: 3 productos.
- 2026-10-09 — 🏵️ EDICIÓN LIMITADA CEMPASÚCHIL CONSTRUIDA.
- 2026-09-26 — 📡 Fix dedup Meta Pixel + CAPI.
- 2026-09-07 — 🗂️ Archivar un producto lo oculta de todo el sitio.
- 2026-08-27 — 🐛 Precio en barra sticky (`ctaTotal`).
- 2026-08-27 — ⭐ Reseña real r16.
- 2026-08-27 — 🔗 Deep link de variante arreglado.
- 2026-08-27 — 🌿 Tarjetas de aroma apuntan al producto correcto.
- 2026-08-27 — 🧱 PDP completa del Cuenco Dunaru.

## 5. Image Inventory
- Fotos de producto: 1122×1402 (4:5), webp. Base uploads owner: `.../message-images/58337cbc-5a9f-4862-810a-1470616566de/`.
- Tonos (imagen 1 de cada variante Cera Duna 500 g): Marfil `m4gndhjxsj` · Champagne `siffm8eo71e` · Ónix `smwszrq34a` (usadas en home TONOS y `duo-tones.ts`).
- 🏵️ Banner landing DDM = `1791586723101-uqttcs5raf.webp`. Aroma Cempasúchil flat-lay `1791590350527-o3gpv79gzvi.webp`. Bowl Ámbar ref `1791588734332-bzvkrpcdmwe.webp`.
- 🏵️ INSPIRACIÓN DDM (owner, 4:5): `1791586723101-uqttcs5raf` · `-beyoys9qmbm` · `-m6tb2khuzlr` · `-1fvs134xdv6` · `-b7696bizhwg` · `-bcdckoare7`.
- 🏵️ CEMPASÚCHIL portadas (IA, TEMPORALES).
- UGC reseñas: `facil` `1784238899092-acdwwacyaq` · `sala` `1787861715629-sjd49g0k2j` · `visitas` `1784238899091-zp99w7xbo5a` · `reutilizar` `-i6pb49ce8vp` · `regalo` `-0snwjx0f7w7` · `completa` `-ztn82bcfir`.
- Cuenco bloques: `1787859462824-br3pyp2cr9k` · `1787859462825-p6zo71cvpai`. Cerámica: `1787846317152-fp7km169wu7` · `-d15my4ruzvs` · `-kecin16ha`.
- 4 pasos: `1787701006060-mdjjspbepql` · `1787699972902-6ha0kcq29g` · `-pr81fsb4jso` · `-11zjzn59pysq`.
- Hero desktop `1787702019949-nscqjcvsz0r.webp`; hero móvil `hero-dunaru-mobile.mp4`. Ritual `1787701006060-vpgjgog2juh.webp`.
- Flat-lays aroma: `1787337333998-ynkiiz87l1n` · `-44wwhmmisy5` · `-jphdwvy2pbh` · `-enck999sju7` · `-5e5poqkcxh8` · `-n7f8zqhfx8m`.
- Casa real `/casa-real-*.webp`. Favicon `/favicon.png`.
- 🔴 FALTAN: fotos reales cempasúchil · packshots esencia · empaque nuevo.

## 6. Known Issues
- 2026-10-13 — 🟠 `update-product` con `variants_config` BORRA el compare_at del producto y no permite compare_at por variante (si se pasa, lo trata como opción). Reportado. Dúo quedó sin $999 tachado.
- 2026-10-13 — 🟡 Variantes del Dúo sin foto propia (tool no soporta imágenes por variante); la galería no cambia al elegir tonos.
- 2026-10-10 — 🟡 Tarjetas 4:5 object-cover recortan fotos no 4:5.
- 2026-10-10 — 🟡 `.theme-ddm` tiñe header/footer en PDP de temporada (intencional).
- 2026-10-09 — 🟡 Notas aroma Cempasúchil sin confirmar. Esencia Cempasúchil accesible por URL. Swatches Bowl Ámbar. Portadas IA.
- 2026-09-26 — 🟡 Tests y tsc no ejecutados por el agente.
- 2026-09-07 — 🟡 Slugs activos cacheados por sesión.
- 2026-08-27 — 🟠 Cuenco Dunaru "500 g + 30 mechas" sin confirmar. 🟡 `CATALOG_FALLBACK` precios viejos.
- 2026-08-21 — 🔴 `update-product` NO soporta imágenes por variante.

## 7. Pending / Future Sessions
- [URGENTE] QA Dúo (12.a) + compare $999 (12.b). QA fase 11 + 9.a + redirect fin de temporada (9.f) antes del 3 nov.
- [ALTA] Notas aroma Cempasúchil. Bowl Ámbar medidas/bloques. Fotos reales cempasúchil.
- [ALTA] Tests de tracking + tsc. Contenido real Cuenco Dunaru.
- [MED] Idea: foto del Dúo que cambie según la pareja elegida (requiere subir fotos por variante en Dashboard). Bowl Ámbar en home/menú. Sitemap DDM. `/aromas`. Tiers AOV.
- [BAJA] B2B. Banners de colección.