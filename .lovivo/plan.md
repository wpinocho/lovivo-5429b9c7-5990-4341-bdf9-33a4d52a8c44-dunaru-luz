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
- 🏵️ **2026-10-09: EDICIÓN LIMITADA CEMPASÚCHIL (Día de Muertos) EN VIVO.** La owner confirmó que es **edición limitada REAL** (se puede decir "edición limitada", "cuando se agote, se acaba"). ⛔ **NO poner fecha límite de pedido en la web** (ella la comunica en redes).

### 🏷️ SISTEMA DE NOMBRES — `[Qué es] · [Formato]`
| Slug | Título | Precio | Compare |
|---|---|---|---|
| kit-vaso-de-vidrio | Vela Rellenable · Vaso de Vidrio | $749 | $899 |
| kit-vaso-de-concreto | Vela Rellenable · Bowl de Cerámica | $999 | $1,199 |
| vela-rellenable-cuenco-dunaru | Vela Rellenable · Cuenco Dunaru | $1,199 | — |
| vela-bowl-de-acero | Vela Rellenable · Bowl de Acero | $899 | ARCHIVADO |
| perlas-originales-500-g | Cera Duna · 500 g | $499 | — |
| reserva-1-kg | Cera Duna · 1 kg | $849 | $999 |
| d-o-de-tonos | Dúo de Tonos · 1 kg | $899 | $999 |
| tr-o-de-tonos | Trío de Tonos · 1.5 kg | $1,199 | $1,499 |
| bowl-negro | Bowl Artesanal de Cerámica | $499 | $549 |
| cuenco-dunaru | Cuenco Dunaru (solo recipiente) | $799 | — |
| bowl-espejo-de-acero | Bowl Espejo de Acero | $399 | $499 |
| vaso-extra-transparente | Vaso de Vidrio Transparente | $249 | — |
| pack-30-mechas | 30 Mechas de Algodón | $99 | — |
| esencia-para-vela-10-ml | Esencia para Vela · 10 ml | $99 | — |
| 🏵️ cera-duna-cempasuchil-500-g | Cera Duna Cempasúchil · 500 g | $499 | — (id `5b73ad7e-1e25-4f84-82d5-0337028eb346`) |
| 🏵️ cera-duna-cempasuchil-1-kg | Cera Duna Cempasúchil · 1 kg | $849 | — (id `2e727197-4489-45a1-84af-7c86d0f15cd0`) |
| 🏵️ vela-rellenable-cempasuchil-vaso-de-vidrio | Vela Rellenable Cempasúchil · Vaso de Vidrio | $749 | — (id `c5340501-8dc7-4499-8220-83b90261d5d5`) |
| 🏵️ vela-rellenable-cempasuchil-cuenco-dunaru | Vela Rellenable Cempasúchil · Cuenco Dunaru | $1,199 | — (id `92e6befb-e2eb-4d12-b663-828d29bccc7f`) |

⚠️ Copias hardcodeadas de títulos: `CATALOG_FALLBACK` (IndexUI), `FOOTER_SHOP_LINKS` (EcommerceTemplate), `src/lib/navigation.ts`.

### CATÁLOGO — otros datos
- CUENCO DUNARU: cerámica 20×6 cm, varias mechas. Swatches en DB todos `#101010` (mal).
- ESENCIA: opción `Aroma`, 6 variantes; fotos en `product.images` en el orden de `SCENTS`.
- Price rule: `perlas-originales-500-g` 2 uds 10% / 3 uds 15% (NO aplica a Cempasúchil 500 g).
- MECHAS: 30 por 500 g.
- COLECCIONES: `kits`, `recipientes`, `accesorios`, **`dia-de-muertos`** (id `fdd25437-dfed-46d6-a421-3cc02906d4e2`, 4 productos). Falta `recargas`.
- ORDEN DE MERCHANDISING = `src/lib/catalog-order.ts` (grupo `dia-de-muertos` primero).

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
| 🏵️ **Cempasúchil** | **30 88% 55%** | **`dunaru-cempasuchil`** — SOLO edición Día de Muertos. ⚠️ Bajo contraste sobre marfil: usar como fondo (con texto onix) o acento, nunca texto pequeño sobre claro. |
- Fuente de verdad = `src/index.css`. Display Instrument Serif · Body Manrope. `--radius: 0rem`. Móvil-first, nada dependiente de hover.
- oliva = selección + CTA · periwinkle = navegación · terracota = acentos.

### 🏵️ EDICIÓN DE TEMPORADA — `src/lib/seasonal.ts` (2026-10-09)
- `SEASONAL_BASE_SLUG` (temporada → base), `SEASONAL_SLUGS`, `SEASONAL_HEADLINE`, `contentSlug(slug)`, `isSeasonalSlug`, `DDM_PATH`, `DDM_COLLECTION_HANDLE`.
- `contentSlug()` usado en: `ProductStorySections` (PDP_CONTENT), `ProductPageUI` (PDP_HEADLINE/PDP_BENEFITS; `SEASONAL_HEADLINE` tiene prioridad), `getIncludes()`, `supportsScentAddon()`, `getReviews()` (reseñas heredadas del base: misma cera y recipiente).
- ⛔ NO aliasado: `TIER_SELECTOR_SLUGS` (depende de la price rule del base).
- `<DiaDeMuertosSection />` (home, tras beneficios): consulta products `status=active` + slug en `SEASONAL_SLUGS`; 0 activos → no renderiza. Fondo `dunaru-onix`, acentos cempasúchil, badge "Edición limitada", CTA → `/dia-de-muertos`.
- **`<DdmInspirationGallery />`** ("Ideas para tu altar", 6 fotos de la owner con título + tip, fondo onix): móvil carrusel snap con peek, desktop mosaico 3 col con columna central escalonada, lightbox (Dialog) con flechas/teclado/swipe. Se muestra en `Collection.tsx` cuando `handle === dia-de-muertos` (debajo de productos, full-bleed) y en las PDPs `isSeasonal` (después de `ProductStorySections`). Datos dentro del componente (`IDEAS`).
- **`LimitedEditionBadge.tsx`**: `<LimitedEditionTag />` (pill cempasúchil sobre el título, móvil + desktop) y `<LimitedEditionNotice />` (aviso junto al CTA, tras DeliveryEstimate: "Edición limitada de temporada. Se hace solo para Día de Muertos. Cuando se agote, se acaba."). Solo en PDPs `isSeasonalSlug`.
- Encabezado de `/categorias/dia-de-muertos`: eyebrow "Edición limitada · Día de Muertos" (en vez de "Categoría").
- Menú: "Día de Muertos" primero en `PRIMARY_LINKS`; `MainNav` lo oculta si ningún slug de temporada está activo.
- Para la próxima temporada: añadir slugs a `SEASONAL_BASE_SLUG` + headline; cambiar fotos de `IDEAS`; todo lo demás se hereda.

### Otros sistemas (ver historial)
- TRACKING Meta Pixel + CAPI: `src/lib/tracking-utils.ts`, event_id único por ocurrencia; Purchase `purchase_<order_id>`. Tests `src/lib/__tests__/tracking-utils.test.ts`.
- ESTATUS: `src/hooks/useActiveProductSlugs.ts` (fail-open, cache por sesión). Consumidores: MainNav, EcommerceTemplate, IndexUI.
- RESEÑAS: `src/data/reviews.ts` fuente única.
- DEEP LINK `?variante=` en ProductPageUI (no simplificar el effect).
- PRECIO CTA: `ctaTotal` única fuente.
- CHECKLIST PDP vela nueva: PDP_CONTENT, PDP_HEADLINE, PDP_BENEFITS, pdp-includes, SCENT_ENABLED_SLUGS.
- Texturas/utilidades: `.texture-*`, `.lockup`, `.eyebrow`, `<Reveal>`, `.section-pad(-sm)`.
- Navegación: `src/lib/navigation.ts`. Imágenes editoriales: `src/lib/steps-media.ts`. Aromas: `src/lib/scents.ts`.
- Buy box: [🏵️ tag edición limitada] título+precio+rating · benefits · variantes · aroma · cantidad · DeliveryEstimate · [🏵️ aviso edición limitada] · express + CTA · outline · badges · social proof · WhatsApp · acordeones.
- Imagen de producto 4:5 (1122×1402) + object-cover.
- 🏠 HOME: hero → beneficios → **🏵️ Día de Muertos (temporal)** → 4 pasos → Elige tu vela → Ritual → Reviews → Scents → Tonos → CasaReal → BrandStory → CompareTable → FAQ → newsletter.

---

## 3. Active Plan — FASE 9: EDICIÓN CEMPASÚCHIL 🏵️
**Estado (2026-10-09)**: ✅ En vivo + galería de inspiración + sello de edición limitada en PDPs.

Pendiente:
- 9.a 🔴 QA visual: home 360 px, 4 PDPs (tag + aviso, galería, lightbox swipe, sticky), `/dia-de-muertos` (galería debajo de productos), carrito → /pagar.
- 9.b 🟡 Portadas son IA (Gemini) TEMPORALES; reemplazar por fotos reales. Las fotos con cera Marfil/Champagne/Ónix van al final de cada galería; la owner depura desde el Dashboard.
- 9.c 🟡 Inventario: `track_inventory: false`. Si quiere piezas contadas reales, activar stock en el Dashboard.
- 9.e 🟡 Sitemap: añadir 4 PDPs + colección (quitar al terminar).
- 9.f 🟡 Fin de temporada: la owner archiva los 4. Implementar redirect: PDP de slug en `SEASONAL_BASE_SLUG` no activo → `<Navigate>` al slug base (en `Product.tsx`/`ProductPageUI`).
- 9.g Avisar: anuncios nuevos de Meta → `/dia-de-muertos` o PDPs nuevas.
- 9.h Idea futura: en la galería, link "Comprar esta idea" por foto hacia el producto relacionado.

### FASE 8 (sigue pendiente)
- 8.0 🔴 Correr tests de tracking + `tsc`; validar dedup en Meta Test Events.
- 8.1 🔴 Verificación visual (Bowl de Acero archivado fuera; sticky; deep links; 360 px; video iOS; carrito → /pagar).
- 8.2 🔴 Confirmar contenido y swatches del Cuenco Dunaru; ¿archivar `bowl-espejo-de-acero`?
- 8.3 🟡 `/aromas`. 8.4 🟡 Tiers AOV. 8.6 PostHog.

---

## 4. Recent Changes
- 2026-10-09 — 🏵️ **Galería "Ideas para tu altar"** (`DdmInspirationGallery`, 6 fotos de la owner, carrusel móvil + mosaico desktop + lightbox) en `/categorias/dia-de-muertos` y en las 4 PDPs de temporada. **Sello "Edición limitada"** sobre el título + aviso de urgencia junto al CTA en PDPs de temporada. Eyebrow de la colección DDM.
- 2026-10-09 — 🏵️ **EDICIÓN LIMITADA CEMPASÚCHIL CONSTRUIDA**: 4 productos, colección `dia-de-muertos`, `src/lib/seasonal.ts`, `<DiaDeMuertosSection />`, link menú, grupo catálogo, ruta `/dia-de-muertos`, token `dunaru-cempasuchil`.
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
- 2026-08-27 — 🧭 `/como-funciona` reforzada.
- 2026-08-27 — ✍️ Copy del hero actualizado.
- 2026-08-27 — 🖼️ Foto por variante en las tarjetas.

## 5. Image Inventory
- Fotos de producto: 1122×1402 (4:5), webp. Base uploads owner: `.../message-images/58337cbc-5a9f-4862-810a-1470616566de/`.
- 🏵️ **INSPIRACIÓN DDM (owner, 4:5)** en base uploads: `1791586723101-uqttcs5raf` (campo de luz) · `-beyoys9qmbm` (camino ofrenda, cenital) · `-m6tb2khuzlr` (mesa vasos vidrio) · `-1fvs134xdv6` (cocina, cuenco 3 mechas) · `-b7696bizhwg` (credenza calabazas) · `-bcdckoare7` (credenza río de cera).
- 🏵️ **CEMPASÚCHIL (IA Gemini, TEMPORALES, 1200×1600)** en `.../product-images/5429b9c7-5990-4341-bdf9-33a4d52a8c44/`: `cera-duna-cempasuchil-500g.webp` · `cera-duna-cempasuchil-1kg-v2.webp` · `vela-cempasuchil-vaso-vidrio-v2.webp` · `vela-cempasuchil-cuenco-dunaru.webp` (también portada de la colección). ⛔ Descartadas: `cera-duna-cempasuchil-1kg.webp`, `vela-cempasuchil-vaso-vidrio.webp`.
- UGC reseñas: `facil` `1784238899092-acdwwacyaq` · `sala` `1787861715629-sjd49g0k2j` · `visitas` `1784238899091-zp99w7xbo5a` · `reutilizar` `-i6pb49ce8vp` · `regalo` `-0snwjx0f7w7` · `completa` `-ztn82bcfir`.
- Cuenco Dunaru bloques: `1787859462824-br3pyp2cr9k` · `1787859462825-p6zo71cvpai`. Vela: Marfil `biyop92l41t`+`srrf9e1v9yh` · Champagne `eb0630mux1c`+`gnvgvl9g2z6` · Ónix `9qpn00vexkt`+`bvww9lwbol`.
- Cerámica bloques: `1787846317152-fp7km169wu7` · `-d15my4ruzvs` · `-kecin16ha`.
- 4 pasos: `1787701006060-mdjjspbepql` · `1787699972902-6ha0kcq29g` · `-pr81fsb4jso` · `-11zjzn59pysq`.
- Hero desktop `1787702019949-nscqjcvsz0r.webp`; hero móvil `store-videos/<STORE_ID>/hero-dunaru-mobile.mp4`. Ritual `1787701006060-vpgjgog2juh.webp`.
- Flat-lays aroma (4:3): `1787337333998-ynkiiz87l1n` · `-44wwhmmisy5` · `-jphdwvy2pbh` · `-enck999sju7` · `-5e5poqkcxh8` · `-n7f8zqhfx8m`.
- Casa real `/casa-real-{sala,comedor,recibidor,recamara}.webp`. Favicon `/favicon.png`.
- 🔴 FALTAN: fotos reales de cera cempasúchil · packshots 4:5 del frasco de esencia · foto del empaque nuevo.

## 6. Known Issues
- 2026-10-09 — 🟡 Portadas Cempasúchil son IA: el texto del empaque sale levemente deformado. Reemplazar por fotos reales.
- 2026-10-09 — 🟡 Cempasúchil hereda reseñas del base. Si la owner no lo quiere, quitar alias en `getReviews`.
- 2026-10-09 — 🟡 Galerías Cempasúchil incluyen fotos con cera Marfil/Champagne/Ónix al final (la owner depura).
- 2026-09-26 — 🟡 Tests y tsc no ejecutados por el agente.
- 2026-09-07 — 🟡 Slugs activos cacheados por sesión. PDP archivada sigue abriendo por URL (redirect pendiente 9.f).
- 2026-08-27 — 🟠 PDP Cuenco Dunaru afirma "500 g + 30 mechas" sin confirmación. 🟡 Swatches Cuenco mal. 🟡 `CATALOG_FALLBACK` precios viejos. 🟡 Flat-lays 4:3 en carrusel 4:5. 🟡 Órdenes abandonadas duplicadas.
- 2026-08-25 — 🟠 Nombres nuevos no están en anuncios/emails. 🟡 `bowl-negro`/`vaso-extra-transparente` dicen "perlas dunaru".
- 2026-08-21 — 🔴 `update-product` NO soporta imágenes por variante.

## 7. Pending / Future Sessions
- [URGENTE] QA Edición Cempasúchil (9.a) + redirect fin de temporada (9.f) antes del 3 nov.
- [ALTA] Fotos reales cempasúchil; stock real si quiere piezas contadas.
- [ALTA] Tests de tracking + tsc; dedup en Meta Test Events.
- [ALTA] Verificar Bowl de Acero archivado; ¿archivar `bowl-espejo-de-acero`?; pauta apuntando a `vela-bowl-de-acero`.
- [ALTA] Confirmar contenido real del Cuenco Dunaru y swatches. Packshots esencia. Flujo carrito → /pagar.
- [MED] Sitemap DDM. "Comprar esta idea" en galería (9.h). `SHOP_CARDS` desde DB. `/aromas`. Tiers AOV. Colección `recargas`.
- [BAJA] B2B. Banners de colección.