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
| d-o-de-tonos | Dúo de Tonos · 1 kg | $899 | $999 |
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
- 🟠 **BOWL ÁMBAR (2026-10-09)**: vidrio color ámbar, borde ondulado. Medidas y nº de mechas NO confirmados (no se afirman en copy). Owner subió fotos y confirmó "quedó todo bien".
- ESENCIA: opción `Aroma`, 6 variantes; fotos en `product.images` en el orden de `SCENTS`.
- 🏵️ AROMA DE TEMPORADA (2026-10-09): **Cempasúchil** es PRODUCTO PROPIO (no variante) para que la esencia normal siga con 6 aromas. En PDPs de temporada el selector muestra: Cempasúchil (primero, etiqueta "Temporada") + los 5 regulares sin Costa Mineral. Config en `src/lib/scents.ts` (`SEASONAL_SCENTS`, `HIDDEN_IN_SEASONAL`, `getScentsForProduct`). Si el producto se archiva, el aroma desaparece solo.
- Price rule: `perlas-originales-500-g` 2 uds 10% / 3 uds 15% (NO aplica a Cempasúchil 500 g).
- MECHAS: 30 por 500 g.
- COLECCIONES: `kits`, `recipientes`, `accesorios`, **`dia-de-muertos`** (id `fdd25437-...`, 5 productos). Falta `recargas`.
- ORDEN DE MERCHANDISING = `src/lib/catalog-order.ts` (grupo `dia-de-muertos` primero). `HIDDEN_FROM_CATALOG_SLUGS` = esencia cempasúchil.

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
| 🏵️ **Cempasúchil** | **30 88% 55%** | **`dunaru-cempasuchil`** — SOLO edición Día de Muertos. Usar como fondo (texto onix) o acento, nunca texto pequeño sobre claro. |
- Fuente de verdad = `src/index.css`. Display Instrument Serif · Body Manrope. `--radius: 0rem`. Móvil-first, nada dependiente de hover.
- oliva = selección + CTA · periwinkle = navegación · terracota = acentos.
- `.full-bleed` (index.css) = sección a ancho completo dentro de un contenedor centrado. `body { overflow-x: clip }` evita scroll horizontal.

### 🏵️ EDICIÓN DE TEMPORADA — `src/lib/seasonal.ts`
- `SEASONAL_BASE_SLUG` (temporada → base), `SEASONAL_SLUGS`, `SEASONAL_HEADLINE`, `contentSlug(slug)`, `isSeasonalSlug`, `DDM_PATH`, `DDM_COLLECTION_HANDLE`.
- `contentSlug()` usado en: `ProductStorySections` (PDP_CONTENT), `ProductPageUI` (PDP_HEADLINE/PDP_BENEFITS; `SEASONAL_HEADLINE` tiene prioridad), `getIncludes()`, `supportsScentAddon()`, `getReviews()`.
- ⛔ NO aliasado: `TIER_SELECTOR_SLUGS`.
- `<DiaDeMuertosSection />` (home): carrusel con scroll-snap (2 visibles móvil, 3 tablet, 4 desktop, flechas md+).
- `<DdmInspirationGallery />` ("Ideas para tu altar"): en `Collection.tsx` y en PDPs `isSeasonal` vía prop `afterReviews` de `ProductStorySections`.
- `LimitedEditionBadge.tsx`: `<LimitedEditionTag />` + `<LimitedEditionNotice />` en PDPs de temporada.
- Aromas de temporada: `SEASONAL_SCENTS` en scents.ts (selector `ProductScentSelector` carga esencia normal + productos de temporada en una sola query).
- Para la próxima temporada: añadir slugs a `SEASONAL_BASE_SLUG` + headline; cambiar fotos de `IDEAS`; cambiar `SEASONAL_SCENTS`.

### Otros sistemas (ver historial)
- TRACKING Meta Pixel + CAPI: `src/lib/tracking-utils.ts`. Tests `src/lib/__tests__/tracking-utils.test.ts`.
- ESTATUS: `src/hooks/useActiveProductSlugs.ts` (fail-open, cache por sesión).
- RESEÑAS: `src/data/reviews.ts` fuente única.
- DEEP LINK `?variante=` en ProductPageUI (no simplificar el effect).
- PRECIO CTA: `ctaTotal` única fuente.
- CHECKLIST PDP vela nueva: PDP_CONTENT (ProductStorySections), PDP_HEADLINE + PDP_BENEFITS (ProductPageUI), pdp-includes, SCENT_ENABLED_SLUGS, catalog-order.
- Orden PDP (ProductStorySections): garantías → 4 pasos → Reseñas → [afterReviews] → bloques → comparativa → FAQ → cierre.
- Texturas/utilidades: `.texture-*`, `.lockup`, `.eyebrow`, `<Reveal>`, `.section-pad(-sm)`, `.full-bleed`.
- Navegación: `src/lib/navigation.ts`. Imágenes editoriales: `src/lib/steps-media.ts`. Aromas: `src/lib/scents.ts`.
- Imagen de producto 4:5 (1122×1402) + object-cover.
- 🏠 HOME: hero → beneficios → 🏵️ Día de Muertos (carrusel) → 4 pasos → Elige tu vela → Ritual → Reviews → Scents → Tonos → CasaReal → BrandStory → CompareTable → FAQ → newsletter.

---

## 3. Active Plan
### FASE 10: BOWL ÁMBAR 🟠
- 10.b 🟡 Confirmar medidas y si admite varias mechas → añadir a copy/FAQ.
- 10.c 🟡 Añadir `blocks` con foto a PDP_CONTENT `vela-rellenable-bowl-ambar`; revisar swatches.
- 10.d 🟡 Opcional: añadir a `SHOP_CARDS`/`CATALOG_FALLBACK` (IndexUI), footer y navigation.ts.

### FASE 9: EDICIÓN CEMPASÚCHIL 🏵️
- 9.a 🔴 QA visual: carrusel home, PDPs, `/dia-de-muertos`, carrito → /pagar. **Incluye: agregar aroma Cempasúchil desde PDP de temporada y verificar línea + foto en carrito/checkout.**
- 9.i 🟡 Confirmar con owner las notas del aroma Cempasúchil (redactadas por el agente: hoja verde / flor de cempasúchil / madera).
- 9.b 🟡 Portadas IA temporales; reemplazar por fotos reales.
- 9.c 🟡 Inventario: `track_inventory: false`.
- 9.e 🟡 Sitemap: PDPs + colección.
- 9.f 🟡 Fin de temporada: archivar 5 productos + esencia cempasúchil; redirect slug de temporada → base.
- 9.g Anuncios Meta → `/dia-de-muertos`.
- 9.h Idea: "Comprar esta idea" en galería.

### FASE 8 (sigue pendiente)
- 8.0 🔴 Tests de tracking + `tsc`; dedup en Meta Test Events.
- 8.1 🔴 Verificación visual general.
- 8.2 🔴 Contenido y swatches del Cuenco Dunaru; ¿archivar `bowl-espejo-de-acero`?
- 8.3 🟡 `/aromas`. 8.4 🟡 Tiers AOV. 8.6 PostHog.

---

## 4. Recent Changes
- 2026-10-09 — 🏵️ Aroma de temporada **Cempasúchil**: producto nuevo `esencia-para-vela-cempasuchil-10-ml` ($99, oculto del catálogo). En PDPs de temporada aparece primero con etiqueta "Temporada"; Costa Mineral se oculta ahí. Colección normal sin cambios (6 aromas).
- 2026-10-09 — 🎠 Home: sección Día de Muertos en carrusel. PDPs de temporada: "Ideas para tu altar" después de opiniones.
- 2026-10-09 — 🟠 **BOWL ÁMBAR**: 3 productos creados y conectados.
- 2026-10-09 — 🏵️ Galería "Ideas para tu altar" + sello "Edición limitada" en PDPs de temporada.
- 2026-10-09 — 🏵️ EDICIÓN LIMITADA CEMPASÚCHIL CONSTRUIDA.
- 2026-10-09 — 📋 Plan Edición Cempasúchil (Chat Mode).
- 2026-09-26 — 📡 Fix dedup Meta Pixel + CAPI.
- 2026-09-07 — 🗂️ Archivar un producto lo oculta de todo el sitio.
- 2026-08-27 — 🐛 Precio en barra sticky arreglado (`ctaTotal`).
- 2026-08-27 — ⭐ Nueva reseña real (Jimena C.), `r16`.
- 2026-08-27 — 🔗 Deep link de variante arreglado.
- 2026-08-27 — 🌿 Tarjetas de aroma apuntan al producto correcto.
- 2026-08-27 — 🧱 PDP completa del Cuenco Dunaru.
- 2026-08-27 — 🛍️ Cuenco Dunaru en la home.
- 2026-08-27 — ⚖️ Título de la comparativa restaurado.

## 5. Image Inventory
- Fotos de producto: 1122×1402 (4:5), webp. Base uploads owner: `.../message-images/58337cbc-5a9f-4862-810a-1470616566de/`.
- 🏵️ Aroma Cempasúchil flat-lay (owner, 1448×1086): `1791590350527-o3gpv79gzvi.webp`.
- 🟠 Bowl Ámbar referencia (owner): `1791588734332-bzvkrpcdmwe.webp`.
- 🏵️ INSPIRACIÓN DDM (owner, 4:5): `1791586723101-uqttcs5raf` · `-beyoys9qmbm` · `-m6tb2khuzlr` · `-1fvs134xdv6` · `-b7696bizhwg` · `-bcdckoare7`.
- 🏵️ CEMPASÚCHIL portadas (IA Gemini, TEMPORALES) en `.../product-images/5429b9c7-.../`.
- UGC reseñas: `facil` `1784238899092-acdwwacyaq` · `sala` `1787861715629-sjd49g0k2j` · `visitas` `1784238899091-zp99w7xbo5a` · `reutilizar` `-i6pb49ce8vp` · `regalo` `-0snwjx0f7w7` · `completa` `-ztn82bcfir`.
- Cuenco Dunaru bloques: `1787859462824-br3pyp2cr9k` · `1787859462825-p6zo71cvpai`.
- Cerámica bloques: `1787846317152-fp7km169wu7` · `-d15my4ruzvs` · `-kecin16ha`.
- 4 pasos: `1787701006060-mdjjspbepql` · `1787699972902-6ha0kcq29g` · `-pr81fsb4jso` · `-11zjzn59pysq`.
- Hero desktop `1787702019949-nscqjcvsz0r.webp`; hero móvil `store-videos/<STORE_ID>/hero-dunaru-mobile.mp4`. Ritual `1787701006060-vpgjgog2juh.webp`.
- Flat-lays aroma (4:3): `1787337333998-ynkiiz87l1n` · `-44wwhmmisy5` · `-jphdwvy2pbh` · `-enck999sju7` · `-5e5poqkcxh8` · `-n7f8zqhfx8m`.
- Casa real `/casa-real-{sala,comedor,recibidor,recamara}.webp`. Favicon `/favicon.png`.
- 🔴 FALTAN: fotos reales cempasúchil · packshots esencia · empaque nuevo.

## 6. Known Issues
- 2026-10-09 — 🟡 Notas olfativas del aroma Cempasúchil redactadas por el agente, sin confirmar.
- 2026-10-09 — 🟡 Esencia Cempasúchil tiene PDP accesible por URL directa (oculta de grids, sin selector propio).
- 2026-10-09 — 🟡 Bowl Ámbar: swatches posiblemente sin color correcto.
- 2026-10-09 — 🟡 Portadas Cempasúchil son IA.
- 2026-10-09 — 🟡 Cempasúchil hereda reseñas del base.
- 2026-09-26 — 🟡 Tests y tsc no ejecutados por el agente.
- 2026-09-07 — 🟡 Slugs activos cacheados por sesión. PDP archivada sigue abriendo por URL (9.f).
- 2026-08-27 — 🟠 PDP Cuenco Dunaru afirma "500 g + 30 mechas" sin confirmación. 🟡 Swatches Cuenco mal. 🟡 `CATALOG_FALLBACK` precios viejos.
- 2026-08-25 — 🟠 Nombres nuevos no están en anuncios/emails.
- 2026-08-21 — 🔴 `update-product` NO soporta imágenes por variante.

## 7. Pending / Future Sessions
- [URGENTE] QA Edición Cempasúchil (9.a) + redirect fin de temporada (9.f) antes del 3 nov.
- [ALTA] Confirmar notas del aroma Cempasúchil (9.i).
- [ALTA] Bowl Ámbar: medidas/mechas (10.b), bloques con foto (10.c).
- [ALTA] Fotos reales cempasúchil; stock real si quiere piezas contadas.
- [ALTA] Tests de tracking + tsc; dedup en Meta Test Events.
- [ALTA] Confirmar contenido real del Cuenco Dunaru y swatches. Packshots esencia.
- [MED] Bowl Ámbar en home/menú/footer (10.d). Sitemap DDM. "Comprar esta idea" (9.h). `/aromas`. Tiers AOV. Colección `recargas`.
- [BAJA] B2B. Banners de colección.