## 1. Brand & Context
- Brand: **dunaru** (dunaru.mx). Velas **rellenables** de **Cera Duna**: gránulos vegetales finos tipo arena + mechas de algodón.
- ⚠️ VOCABULARIO: **"rellenable"** (NO "recargable"). ⚠️ **PROHIBIDO el guion largo (—) en copy visible.**
- **Cera Duna** = nombre propietario de la cera (vegetal, en gránulos, sin parafina). Ya migrado a títulos y descripciones de la DB.
- **Cera 100% vegetal, biodegradable y ecológica** (claim aprobado por la owner). ⛔ NO usar porcentajes de soya/coco.
- ⚠️ 2026-08-27: el eyebrow del hero dice **"Cera perlada 100% natural"** (pedido explícito de la owner); no armonizado con "100% vegetal".
- Tesis: no vendemos cera. Vendemos una forma simple de crear luz en el recipiente que ya tienes.
- **AROMA**: la cera nace neutra. Add-on **Esencia para Vela · 10 ml** ($99) en la PDP. **1 frasco de 10 ml perfuma 500 g** (`SCENT_YIELD_GRAMS`). ⚠️ **Cada frasco = UN solo aroma**.
- Target: mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO. Market: México, MXN, es-MX.
- Tono: claro, cálido, directo. Registro **editorial premium**. Referencias: **sensatehomes.com** y **soliracandle.com**.
- ⛔ **NO es founder-led. La owner NO aparece.**
- Pagos: **hasta 6 MSI**. ⚠️ NUNCA nombrar "Stripe" ni "Mercado Pago".
- Envío: **GRATIS A TODO MÉXICO, SIN MÍNIMO.** Garantía 30 días. WhatsApp: `525531215386`.
- REGLA DE INTEGRIDAD: **nunca reseñas falsas** (**16 reales**, 4.9 vía `getReviewStats()`), **nunca precios tachados inventados**, **nunca logos de prensa**.
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`
- RUTAS: producto `/productos/:slug`, paquete `/paquete/:slug`, carrito `/carrito`, checkout `/pagar`, categoría `/categorias/:handle`, **`/como-funciona`**.
- ⚠️ **kit-vaso-de-concreto** es de **CERÁMICA**; el slug NO se cambia (rompe los anuncios de Meta).
- ⚠️ **PRODUCTO ANCLA DE PAUTA (Meta Ads) = `kit-vaso-de-vidrio`**. El hero de la home NO usa este anclaje (CTA → `/categorias/todos`).
- ⚠️ El owner repriza, **crea y ARCHIVA productos** desde el Dashboard. **NUNCA hardcodear precios.**
- ✅ **2026-09-07: ARCHIVAR = DESAPARECER.** El menú, el footer y la rejilla de la home ya respetan `status`. Ver §2 "ESTATUS DEL PRODUCTO".
- ⚠️ **STAGING**: los cambios se commitean al final del turno. Pedir refresh duro.

### 🏷️ SISTEMA DE NOMBRES (nomenclatura premium vigente)
Regla: **`[Qué es] · [Formato]`**. Nada de "Kit", "Pack" ni "Recarga".

| Slug (INTACTO) | Título en DB | Precio | Compare |
|---|---|---|---|
| kit-vaso-de-vidrio | **Vela Rellenable · Vaso de Vidrio** | $749 | $899 |
| kit-vaso-de-concreto | **Vela Rellenable · Bowl de Cerámica** | $949 | $1,199 |
| **vela-rellenable-cuenco-dunaru** | **Vela Rellenable · Cuenco Dunaru** | $1,199 | — |
| vela-bowl-de-acero | **Vela Rellenable · Bowl de Acero** | $849 | ⚠️ **ARCHIVADO 2026-09-07 por la owner** |
| perlas-originales-500-g | **Cera Duna · 500 g** | $499 | — |
| reserva-1-kg | **Cera Duna · 1 kg** | $799 | $999 |
| d-o-de-tonos | **Dúo de Tonos · 1 kg** | $899 | $999 |
| tr-o-de-tonos | **Trío de Tonos · 1.5 kg** | $1,199 | $1,499 |
| bowl-negro | **Bowl Artesanal de Cerámica** | $499 | $549 |
| **cuenco-dunaru** | **Cuenco Dunaru** (solo recipiente) | **$799** | — |
| bowl-espejo-de-acero | **Bowl Espejo de Acero** | $399 | $499 |
| vaso-extra-transparente | Vaso de Vidrio Transparente | $249 | — |
| pack-30-mechas | **30 Mechas de Algodón** | $99 | — |
| esencia-para-vela-10-ml | Esencia para Vela · 10 ml | $99 | visible en Accesorios |

⚠️ Copias hardcodeadas de títulos: `CATALOG_FALLBACK` (IndexUI), `FOOTER_SHOP_LINKS` (EcommerceTemplate) y `src/lib/navigation.ts` (etiquetas cortas propias, desacopladas a propósito).

### CATÁLOGO — otros datos
- **CUENCO DUNARU (2026-08-27)**: cerámica, **20 cm × 6 cm**, varias mechas.
  - `vela-rellenable-cuenco-dunaru` id `ec006544-6039-46ff-a15d-d7aa04ac82f3` — 11 imágenes, opción `Color` (Marfil/Champagne/Ónix) con `image_urls` por variante. **PDP completa.**
  - `cuenco-dunaru` id `72c2c10d-b302-40e4-8925-abef8f7a5453` — 5 imágenes, sin variantes, $799.
  - ⚠️ Swatches en la DB los tres en `#101010` (mal). Corregir en el Dashboard.
- **BOWL DE ACERO**: `vela-bowl-de-acero` id `5e40d590-...` (**archivado**). `bowl-espejo-de-acero` id `a28c4628-...`.
- **ESENCIA**: id `f11fc30d-...`, `track_inventory: false`, opción **`Aroma`**, 6 variantes SIN `image_urls`. Las 6 fotos flat-lay viven en `product.images` en el MISMO orden que `SCENTS`.
- **CERA DUNA · 500 g** (`90445ca9-...`) y **· 1 kg** (`64317fa8-...`): opción `Color` con `image_urls` propias.
- **KIT VASO DE VIDRIO** (`8213d069-...`): las 3 variantes comparten `1nbg1xmhf5uh` como imagen 1.
- Price rule activa: `perlas-originales-500-g` → 2 uds 10% OFF, 3 uds 15% OFF.
- **MECHAS: 30 por bolsa de 500 g → Dúo 60, Trío 90, Cera Duna 1 kg = 60.**
- **COLECCIONES**: `kits` (3), `recipientes` (3), `accesorios` (1). Falta **`recargas`**.
- **ORDEN DE MERCHANDISING** = `src/lib/catalog-order.ts`.

---

## 2. Design System

### 🎨 PALETA 2026
| Rol | HSL | Token |
|---|---|---|
| Base clara (Warm Ivory) | 36 37% 92% | `--background`, `dunaru-marfil` |
| Superficie (Travertino) | 36 34% 86% | `--muted`, `dunaru-arena` |
| Principal (Burnt Terracotta) | 14 55% 50% | `--secondary`, `dunaru-terracota`, `--ring` |
| Contraste oscuro | 73 10% 17% | `--foreground`, `dunaru-carbon` |
| Top bar / footer | 75 13% 15% | `--primary`, `dunaru-onix` |
| **CTA "Comprar ahora"** | **75 24% 25%** | `--dunaru-oliva-cta` |
| **Selector variante/aroma activo** | **75 22% 37%** | `--dunaru-oliva-claro` |
| Acento cálido (Saffron) | 38 62% 56% | `--accent`, `dunaru-ambar` |
| Acento distintivo (Periwinkle) | 230 25% 64% | `dunaru-periwinkle` |
| Periwinkle legible | 230 27% 45% | `--dunaru-periwinkle-deep` |
| Metal (latón) | 36 46% 50% | `dunaru-laton` |
- ⚠️ Sobre fondos oscuros usar **`dunaru-ambar`**, NUNCA `dunaru-champagne`.
- **Fuente de verdad = `src/index.css`.** Display: Instrument Serif · Body: Manrope. **`--radius: 0rem`**.
- 🎯 **oliva = selección + CTA** · **periwinkle = navegación y hovers** · **terracota = hover de CTA, precios de add-on, acentos editoriales, iconos**.
- ⚠️ **MÓVIL-FIRST: nada de información que dependa de `:hover`.**

### 🗂️ ESTATUS DEL PRODUCTO — archivado = invisible (2026-09-07)
- **FUENTE ÚNICA: `src/hooks/useActiveProductSlugs.ts`.** Consulta `products` con `status = 'active'` + `store_id`, cachea en módulo (una sola query por sesión) y exporta:
  - `useActiveProductSlugs()` → `Set<string>` o `null` mientras carga.
  - `filterActiveLinks(items, slugs)` → quita links `/productos/<slug>` archivados; **no toca** links que no sean de producto.
  - `slugFromPath(path)`.
- ⚠️ **Fail-open**: si la query falla o devuelve vacío NO se oculta nada (mejor mostrar de más que dejar el menú vacío).
- Ya lo consumen:
  1. `MainNav.tsx` → helper local `useLiveNav()`: filtra `SHOP_COLUMNS` (y esconde columnas que quedan vacías), `PRIMARY_LINKS` y `SHOP_FEATURED`. Lo usan desktop y móvil.
  2. `EcommerceTemplate.tsx` → `FOOTER_SHOP_LINKS` (constante nueva, antes iba inline en el JSX).
  3. `IndexUI.tsx` → `buildCatalog()` borra del catálogo cualquier slug del `CATALOG_FALLBACK` que la DB no devolvió (el fetch de `HeadlessIndex` ya filtra por `status='active'`).
- ✅ Desarchivar en el Dashboard lo devuelve solo, sin tocar código.
- ⚠️ La **PDP directa** (`/productos/<slug-archivado>`) sigue siendo accesible: `HeadlessProduct` es archivo prohibido y no filtra por status. Solo desaparece de la navegación.

### 🪨 TEXTURAS / utilidades
`.texture-grain` · `.texture-arena` · `.texture-travertino` · `.texture-terracota` · `.texture-ambar` (solo oscuros) · `.texture-metal` · `.hairline-metal` · `.lockup` · `.eyebrow` · `.h-editorial` · `.transition-editorial` · `<Reveal>` · `.full-bleed` · `.section-pad` / `.section-pad-sm`.

### ⭐ RESEÑAS — `src/data/reviews.ts` es FUENTE ÚNICA
- 16 reseñas reales. Helpers: `getReviews(slug)`, `getFeaturedReviews(slug)` (solo `featured: true` **con foto**), `getRatingDistribution`, `getReviewStats`.
- **El orden del array manda.** Fotos UGC centralizadas en el objeto `UGC`.
- Para que una reseña aparezca en una PDP debe tener el slug en `productSlugs`.

### 🔗 DEEP LINK DE VARIANTE — `?variante=`
- `/productos/<slug>?variante=<Valor>` preselecciona la variante. Implementado en `ProductPageUI.tsx` (effect junto a `appliedVariantRef`), normaliza acentos y mayúsculas.
- ⚠️ **`HeadlessProduct` auto-selecciona la primera variante y pisa la preselección.** El effect depende de `logic.selected` y reintenta hasta que coincide. ⛔ No simplificarlo a `[search, product.id]`.
- Lo usan: "Elige tu tono" (`TONOS`) y `ScentsSection`.

### 💰 PRECIO DEL CTA — `ctaTotal` es la ÚNICA fuente
- `ctaTotal = ctaUnitPrice (con descuento por volumen) × cantidad + precio del aroma`. Lo usan los 3 CTAs (buy box, sticky desktop, sticky móvil).
- La sticky pinta además `stickyPriceNote` ("2 uds · + Tabaco Vainilla").
- ⛔ NUNCA volver a pintar `logic.currentPrice` en la barra sticky.

### ✅ CHECKLIST PDP — qué tocar al añadir una vela nueva
1. `ProductStorySections.tsx` → `PDP_CONTENT[slug]`. **Sin esta entrada NO se renderiza NADA.**
2. `ProductPageUI.tsx` → `PDP_HEADLINE[slug]`.
3. `ProductPageUI.tsx` → `PDP_BENEFITS[slug]`.
4. `src/lib/pdp-includes.ts` → `PDP_INCLUDES[slug]`.
5. `src/lib/scents.ts` → `SCENT_ENABLED_SLUGS` si trae Cera Duna.
⚠️ Los `steps` de `PDP_CONTENT` hoy son decorativos: el carrusel real usa `HOW_IT_WORKS_STEPS`.

### 🛍️ REJILLA "ELIGE TU VELA" (home, sección `#comprar`)
- **`SHOP_CARDS` en `IndexUI.tsx`** = lista curada `{ slug, tag, badge? }`.
- ⚠️ Una tarjeta solo se renderiza si su slug está en `CATALOG_FALLBACK` **y** el producto está activo en la DB.
- ⚠️ **Un solo badge "Nuevo" a la vez** (hoy: Cuenco Dunaru).

### ✨ FRANJA DE BENEFICIOS (home)
- `BENEFITS` en `IndexUI.tsx`: `Leaf`, `RefreshCw`, `MapPin`, `Truck`. Móvil `grid-cols-2`, sm+ `flex justify-between`. ⛔ Sin `divide-x`.

### 🧭 NAVEGACIÓN
- **FUENTE ÚNICA: `src/lib/navigation.ts`** → `SHOP_COLUMNS`, `SHOP_FEATURED`, `SHOP_ALL`, `PRIMARY_LINKS`, `UTILITY_LINKS`. Componente: `src/components/MainNav.tsx` (filtra por estatus).
- ⛔ **REGLA DE ORO: el menú NO contiene anclas a la home (`/#...`).**
- ⚠️ **"Aromas" → `/productos/esencia-para-vela-10-ml`**. El panel del mega menú exige `relative` en el wrapper `.max-w-7xl` del header.

### 🖼️ FOTO POR VARIANTE — `src/lib/variant-image.ts`
- `getVariantDisplayImage(variant, variants)`. Lo consume `ProductCardUI`. `ProductPageUI.galleryImages` duplica la lógica inline.

### 🛒 TARJETA DE PRODUCTO — modo "elegir en la PDP"
- `catalog-order.ts` exporta **`CHOOSE_ON_PDP`** + `getChooseOnPdp(slug)`. Hoy solo `esencia-para-vela-10-ml`.

### 🖼️ IMÁGENES EDITORIALES — `src/lib/steps-media.ts`
- `STEP_IMAGES`, `BRAND_STORY_IMAGE`, `RITUAL_IMAGE`, `HERO_DESKTOP_IMAGE`, `HERO_MOBILE_VIDEO`, `HERO_MOBILE_POSTER`. ⛔ Nunca hardcodear estas URLs.

### 🎬 HERO
- Desktop `HERO_DESKTOP_IMAGE` · Móvil `<HeroMobileVideo />`. CTA → `/categorias/todos`; secundario → `#como-funciona`.
- Eyebrow: "Cera perlada 100% natural · Hecha en México".

### 🧭 PÁGINA `/como-funciona`
- Orden: intro + CTA → 4 pasos → CTA de mitad → `<Reviews />` → comparativa con encabezado propio → FAQ + CTA → cierre oscuro. ⚠️ La `<CompareTable />` NUNCA va suelta.

### 🎨 "ELIGE TU TONO" (home)
- `TONOS` usa la imagen 1 de cada variante de `perlas-originales-500-g` y enlaza con `?variante=`.

### 🌿 SECCIÓN DE AROMAS (`ScentsSection.tsx`)
- Las 6 tarjetas → `/productos/esencia-para-vela-10-ml?variante=<nombre>`. El pie manda al kit de vidrio.

### 📱 CARRUSEL MÓVIL = SELECTOR DESLIZABLE — SOLO AROMAS
- `sliderOption` exige `o.name === SCENT_OPTION_NAME`. Slide: `basis-[99%] pl-1` + `aspect-[4/5]`.

### Reglas de layout
- **TOP BAR** fija en `EcommerceTemplate.tsx`; **HEADER OVERLAY** solo en `IndexUI`.
- **🛒 ORDEN DEL BUY BOX**: título+precio+rating · `PDP_BENEFITS` · variantes · `<ProductScentSelector />` · cantidad · `<DeliveryEstimate />` · express + CTA `h-12` · CTA outline `h-11` · micro-línea `Lock` · badges · `<PdpSocialProof />` · WhatsApp · acordeones.
- **📚 ACORDEONES**: `Qué incluye` → `Más detalles` → `Envío y garantía`.
- **📐 IMAGEN DE PRODUCTO = 4:5 (1122×1402)** + `object-cover`.
- **ORDEN DE LA PDP**: garantías → carrusel 4 pasos → reseñas → bloques editoriales → `<CompareTable />` → FAQ → CTA de cierre.
- **🏠 ORDEN DE LA HOME**: hero → beneficios → 4 pasos → "Elige tu vela" → `RitualSection` → `Reviews` → `ScentsSection` → "Elige tu tono" → `CasaRealSection` → `BrandStorySection` → `<CompareTable />` → FAQ → newsletter.
- **📦 `/categorias/todos`** agrupa con `groupByCatalog`.
- **📌 BARRA STICKY DE LA PDP**: solo cuando `scrolledPastCta`.

### ⚖️ TABLA COMPARATIVA (`CompareTable.tsx`) — FUENTE ÚNICA, sin título propio.
### 🌿 SISTEMA DE AROMAS — `src/lib/scents.ts` fuente única.
### 🧾 CARRITO Y CHECKOUT — **el carrito SOLO se vacía cuando el pago se confirma.**

---

## 3. Active Plan — FASE 8: CATÁLOGO VIVO Y VERIFICACIÓN

**Estado**: ✅ Estatus del producto respetado en menú, footer y home. ✅ Precio del sticky sincronizado. 🔜 **Verificación visual tras el commit.**

### 8.1 🔴 P1 — Verificación visual tras el commit (refresh duro)
- **Bowl de Acero archivado**: NO debe aparecer en el mega menú (desktop y móvil), ni en el footer, ni en la rejilla "Elige tu vela".
- Desarchivarlo en el Dashboard y confirmar que **vuelve solo** (puede requerir recargar la página: el set de slugs se cachea por sesión).
- Sticky de la PDP con aroma y cantidad > 1. Deep links `?variante=`. Home a 360 px. Video hero en iOS. Flujo carrito → /pagar.

### 8.2 🔴 P1 — Confirmar con la owner
1. Cuenco Dunaru: swatches mal (3 en `#101010`). ¿Lleva `compare_at_price`? **¿Cuánta cera incluye el kit de $1,199?** ¿Cuántas mechas a la vez en 20 cm?
2. ¿`bowl-espejo-de-acero` también se archiva (la línea de acero se descontinúa completa)?

### 8.3 🟡 P2 — Página `/aromas` propia
### 8.4 🟡 P2 — AOV: tiers con nombre y % de ahorro
### 8.5 DECISIONES PENDIENTES DEL OWNER
1. ❓ Nombre de la garantía. 2. ❓ Horas por mecha. 3. ❓ Copy del empaque. 4. ❓ B2B / SKU sample.
### 8.6 Medición
Volumen insuficiente para A/B (122 usuarios/mes en la PDP principal). Medición secuencial con `posthog-query`.

---

## 4. Recent Changes
- 2026-09-07 — 🗂️ **ARCHIVAR UN PRODUCTO YA LO OCULTA DE TODO EL SITIO.** Nuevo `src/hooks/useActiveProductSlugs.ts` (query cacheada de slugs con `status='active'` + helper `filterActiveLinks`). Conectado a `MainNav` (mega menú desktop y acordeón móvil, esconde columnas vacías y el destacado), a `EcommerceTemplate` (nueva constante `FOOTER_SHOP_LINKS`) y a `buildCatalog()` de `IndexUI` (borra del `CATALOG_FALLBACK` lo que la DB no devuelve). Fail-open y reversible: desarchivar lo devuelve solo.
- 2026-08-27 — 🐛 **BUG DEL PRECIO EN LA BARRA STICKY ARREGLADO**: los 3 CTAs usan `ctaTotal` + micro-nota `stickyPriceNote`.
- 2026-08-27 — ⭐ **NUEVA RESEÑA REAL (Jimena C.)**, id `r16`, con foto (`UGC.sala`), en segunda posición. Total 16, promedio 4.9.
- 2026-08-27 — 🔗 **DEEP LINK DE VARIANTE ARREGLADO**.
- 2026-08-27 — 🌿 **TARJETAS DE AROMA APUNTAN AL PRODUCTO CORRECTO**.
- 2026-08-27 — 🧱 **PDP COMPLETA DEL CUENCO DUNARU** (los 5 archivos).
- 2026-08-27 — 🛍️ **CUENCO DUNARU EN LA HOME** (badge "Nuevo").
- 2026-08-27 — ⚖️ **TÍTULO DE LA COMPARATIVA RESTAURADO**.
- 2026-08-27 — 🧭 **`/como-funciona` REFORZADA**.
- 2026-08-27 — ✍️ **COPY DEL HERO ACTUALIZADO**.
- 2026-08-27 — 🖼️ **FOTO POR VARIANTE EN LAS TARJETAS** (`variant-image.ts`).
- 2026-08-27 — 🔗 **CTA HERO → `/categorias/todos`**.
- 2026-08-27 — ✨ **FRANJA DE BENEFICIOS LIMPIADA**.
- 2026-08-27 — 🎚️ **CARRUSEL-SELECTOR SOLO PARA AROMAS**.
- 2026-08-27 — 📏 **HUECO VACÍO ELIMINADO** (`allOptionsAreSlider`).

## 5. Image Inventory
- **📐 Fotos de producto: 1122×1402 (4:5), webp.**
- Base de uploads del owner: `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/`
- **⭐ UGC RESEÑAS**: `facil` `1784238899092-acdwwacyaq` · **`sala` `1787861715629-sjd49g0k2j`** · `visitas` `1784238899091-zp99w7xbo5a` · `reutilizar` `-i6pb49ce8vp` · `regalo` `-0snwjx0f7w7` · `completa` `-ztn82bcfir`.
- **🏺 CUENCO DUNARU — bloques editoriales**: `1787859462824-br3pyp2cr9k` · `1787859462825-p6zo71cvpai`.
- **🏺 CUENCO DUNARU (vela)**: Marfil `biyop92l41t` + `srrf9e1v9yh` · Champagne `eb0630mux1c` + `gnvgvl9g2z6` · Ónix `9qpn00vexkt` + `bvww9lwbol`. **Cuenco suelto**: `z2wsj39j63`, `sorsudu67w`, `3wluzx3dk3o`, `as3ysmbal8e`, `wuzqds86opf`.
- **🏺 BLOQUES EDITORIALES CERÁMICA**: `1787846317152-fp7km169wu7` · `-d15my4ruzvs` · `-kecin16ha`.
- **🪞 BOWL DE ACERO (producto archivado)**: `1787759673455-m5x9h5ouxwf` · `-uu86xb8ars` · `-vsmlwdqns` · `-e2tr1gctjfo` · `-udq3osxrsej`.
- **🔥 4 PASOS**: `1787701006060-mdjjspbepql` · `1787699972902-6ha0kcq29g` · `-pr81fsb4jso` · `-11zjzn59pysq`.
- **🌅 HERO DESKTOP**: `1787702019949-nscqjcvsz0r.webp`. **🎬 HERO MÓVIL**: `store-videos/<STORE_ID>/hero-dunaru-mobile.mp4` + póster.
- **🕯️ RITUAL**: `1787701006060-vpgjgog2juh.webp`.
- ⛔ Deprecadas: `1785182590879-i54i3sm6qk`, `-u6xju9w4wjl`, `-77nbrytmoii`, `/paso-vierte.webp`, `/paso-renueva.webp`, `1785521743155-htw95tvbi4b`, `1785521743156-3qeskqe43gv`, `1787699972902-dld268c7c0u`, `1787701006060-xuyehajl1yr`, `public/hero-dunaru.webp`, `public/hero-dunaru-mobile.webp`.
- **🌿 FLAT-LAYS DE AROMA (4:3)**: Madera Nocturna `1787337333998-ynkiiz87l1n` · Ámbar Cristal `-44wwhmmisy5` · Costa Mineral `-jphdwvy2pbh` · Higo Matcha `-enck999sju7` · Tabaco Vainilla `-5e5poqkcxh8` · Musgo Mineral `-n7f8zqhfx8m`.
- **Casa real**: `/casa-real-{sala,comedor,recibidor,recamara}.webp`. **FAVICON**: `/favicon.png`.
- 🔴 **FALTAN: packshots 4:5 del frasco de esencia · foto del EMPAQUE NUEVO.**

## 6. Known Issues
- 2026-09-07 — 🟡 **El set de slugs activos se cachea por sesión de navegador.** Al archivar/desarchivar hay que recargar la página para ver el cambio. Aceptable (evita una query por render).
- 2026-09-07 — 🟡 **La PDP de un producto archivado sigue abriéndose por URL directa** (`HeadlessProduct` es archivo prohibido y no filtra por status). Solo desaparece de la navegación. Si hay pauta activa apuntando ahí, avisar al owner.
- 2026-08-27 — 🟡 **Foto de la reseña de Jimena C.**: cuenco verde/oliva que no corresponde a los tonos de catálogo.
- 2026-08-27 — 🟠 **La PDP del Cuenco Dunaru afirma "500 g + 30 mechas" sin confirmación de la owner**.
- 2026-08-27 — 🟡 **`CATALOG_FALLBACK` de `IndexUI` tiene precios viejos hardcodeados** (solo visibles ~1 s mientras carga).
- 2026-08-27 — 🟡 **Copy del hero usa "natural" mientras el resto del sitio usa "100% vegetal"**.
- 2026-08-27 — 🟡 **Swatches del Cuenco Dunaru mal**: los 3 colores en `#101010`.
- 2026-08-27 — 🟡 **Lógica de "foto exclusiva de variante" DUPLICADA** (`variant-image.ts` vs `ProductPageUI`).
- 2026-08-27 — 🟡 **Los flat-lays de aroma son 4:3 y el carrusel móvil es 4:5**: se recortan.
- 2026-08-27 — 🟡 **Órdenes abandonadas duplicadas** (efecto del carrito persistente).
- 2026-08-27 — 🟡 Los `steps` de `PDP_CONTENT` siguen con `PLACEHOLDER` en varios slugs.
- 2026-08-25 — 🟡 `public/hero-dunaru.webp` y `-mobile.webp` huérfanos.
- 2026-08-25 — 🟡 **Mega menú sin verificar visualmente**.
- 2026-08-25 — 🟠 **Los nombres nuevos NO están en los anuncios de Meta ni en emails automatizados.**
- 2026-08-25 — 🟡 `bowl-negro` y `vaso-extra-transparente` todavía dicen "perlas dunaru".
- 2026-08-21 — 🔴 `ecommerce--update-product` NO soporta imágenes por variante.

## 7. Pending / Future Sessions
- [ALTA] **Verificar que el Bowl de Acero archivado desapareció de menú, footer y home** (refresh duro).
- [ALTA] **Preguntar si `bowl-espejo-de-acero` también se archiva.**
- [ALTA] **Revisar si hay pauta de Meta apuntando a `/productos/vela-bowl-de-acero`** (la URL sigue viva).
- [ALTA] **Confirmar el contenido real del Cuenco Dunaru ($1,199)**.
- [ALTA] **Corregir swatches del Cuenco Dunaru** en el Dashboard.
- [ALTA] **Packshots del frasco de esencia (4:5)**.
- [ALTA] **Verificar el flujo carrito → /pagar → volver atrás**.
- [ALTA] **Avisar al owner que sincronice los nombres en anuncios de Meta y emails.**
- [ALTA] **Medir el attach rate de aroma** en PostHog.
- [ALTA] **Crear la colección `recargas`**.
- [MED] **Hacer que `SHOP_CARDS` lea precios/imágenes solo de la DB**.
- [MED] Refactorizar `ProductPageUI` para que use `getVariantDisplayImage`.
- [MED] **Página `/aromas`** propia. Tiers con nombre y % de ahorro.
- [MED] Limpiar "perlas dunaru" de `bowl-negro` y `vaso-extra-transparente`.
- [BAJA] Página B2B / wholesale. SKU sample barato. Banners de colección.