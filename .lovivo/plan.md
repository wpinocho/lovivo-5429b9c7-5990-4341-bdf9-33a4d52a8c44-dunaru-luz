## 1. Brand & Context
- Brand: **dunaru** (dunaru.mx). Velas **rellenables** de **Cera Duna**: gránulos vegetales finos tipo arena + mechas de algodón.
- ⚠️ VOCABULARIO: **"rellenable"** (NO "recargable"). ⚠️ **PROHIBIDO el guion largo (—) en copy visible.**
- **Cera Duna** = nombre propietario de la cera (vegetal, en gránulos, sin parafina). Ya migrado a títulos y descripciones de la DB.
- **Cera 100% vegetal, biodegradable y ecológica** (claim aprobado por la owner). ⛔ NO usar porcentajes de soya/coco.
- ⚠️ 2026-08-27: el eyebrow del hero ahora dice **"Cera perlada 100% natural"** (pedido explícito de la owner) — convive con el claim "100% vegetal" usado en el resto del sitio; no armonizado aún.
- Tesis: no vendemos cera. Vendemos una forma simple de crear luz en el recipiente que ya tienes.
- **AROMA**: la cera nace neutra. Add-on **Esencia para Vela · 10 ml** ($99) en la PDP. **1 frasco de 10 ml perfuma 500 g** (`SCENT_YIELD_GRAMS`). ⚠️ **Cada frasco = UN solo aroma**, elegido entre seis.
- Target: mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO. Market: México, MXN, es-MX.
- Tono: claro, cálido, directo. Registro **editorial premium**. Referencias: **sensatehomes.com** (diseño) y **soliracandle.com** (mensaje).
- ⛔ **NO es founder-led. La owner NO aparece.**
- Pagos: **hasta 6 MSI**. ⚠️ NUNCA nombrar "Stripe" ni "Mercado Pago".
- Envío: **GRATIS A TODO MÉXICO, SIN MÍNIMO.** Garantía 30 días. WhatsApp: `525531215386`.
- REGLA DE INTEGRIDAD: **nunca reseñas falsas** (15 reales, 4.9 vía `getReviewStats()`), **nunca precios tachados inventados**, **nunca logos de prensa**.
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`
- RUTAS: producto `/productos/:slug`, paquete `/paquete/:slug`, carrito `/carrito`, checkout `/pagar`, categoría `/categorias/:handle`, **`/como-funciona`**.
- ⚠️ **kit-vaso-de-concreto** es de **CERÁMICA**; el slug NO se cambia (rompe los anuncios de Meta).
- ⚠️ **PRODUCTO ANCLA DE PAUTA (Meta Ads) = `kit-vaso-de-vidrio`**. El hero de la home NO usa este anclaje (CTA → `/categorias/todos`).
- ⚠️ El owner repriza y **crea productos** desde el Dashboard. **NUNCA hardcodear precios.** 🔁 Todo producto nuevo debe añadirse a `catalog-order.ts`, a `navigation.ts`, a **`SHOP_CARDS` + `CATALOG_FALLBACK` de `IndexUI.tsx`** y, si es una vela completa, a los **5 archivos de PDP** (ver §2 "CHECKLIST PDP").
- ⚠️ **STAGING**: los cambios se commitean al final del turno. Pedir refresh duro.

### 🏷️ SISTEMA DE NOMBRES (nomenclatura premium vigente)
Regla: **`[Qué es] · [Formato]`**. Nada de "Kit", "Pack" ni "Recarga".

| Slug (INTACTO) | Título en DB | Precio | Compare |
|---|---|---|---|
| kit-vaso-de-vidrio | **Vela Rellenable · Vaso de Vidrio** | $749 | $899 |
| kit-vaso-de-concreto | **Vela Rellenable · Bowl de Cerámica** | $949 | $1,199 |
| **vela-rellenable-cuenco-dunaru** | **Vela Rellenable · Cuenco Dunaru** | $1,199 | — |
| vela-bowl-de-acero | **Vela Rellenable · Bowl de Acero** | $849 | ⚠️ sin compare |
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

⚠️ Copias hardcodeadas de títulos: `CATALOG_FALLBACK` (IndexUI) y footer de `EcommerceTemplate`. `src/lib/navigation.ts` usa **etiquetas cortas propias**, desacopladas de la DB a propósito.

### CATÁLOGO — otros datos
- **CUENCO DUNARU (2026-08-27, creado por la owner)**: cerámica, **20 cm de diámetro × 6 cm de alto**, admite varias mechas.
  - `vela-rellenable-cuenco-dunaru` id `ec006544-6039-46ff-a15d-d7aa04ac82f3` — 11 imágenes, opción `Color` (Marfil/Champagne/Ónix) **con `image_urls` por variante** (2 c/u, exclusivas → la tarjeta sí cambia de foto). Imagen 1 = `biyop92l41t.webp`. **PDP completa desde 2026-08-27.**
  - `cuenco-dunaru` id `72c2c10d-b302-40e4-8925-abef8f7a5453` — 5 imágenes, sin variantes, $799.
  - ⚠️ Sus swatches en la DB están los tres en `#101010` (mal). Corregir en el Dashboard.
- **BOWL DE ACERO**: `vela-bowl-de-acero` id `5e40d590-9c02-4924-a2e4-3dd3700954d2` — variantes **SIN `image_urls`**. `bowl-espejo-de-acero` id `a28c4628-2ed9-4890-a321-ca4ef0d3bc61`.
- **ESENCIA**: id `f11fc30d-b36e-4c07-b756-79d1ecc44c71`, `track_inventory: false`, opción **`Aroma`**, 6 variantes **SIN `image_urls`**. Las 6 fotos flat-lay viven en `product.images` en el MISMO orden que `SCENTS` de `scents.ts`.
- **CERA DUNA · 500 g** (`90445ca9-...`) y **· 1 kg** (`64317fa8-...`): opción `Color` → Marfil / Champagne / Ónix con `image_urls` propias.
- **KIT VASO DE VIDRIO** (`8213d069-...`): las 3 variantes comparten `1nbg1xmhf5uh` como **imagen 1** y su foto de color va **en segunda posición**. Por eso existe la lógica de "imagen exclusiva".
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
- 🎯 **oliva = selección + CTA** · **periwinkle = navegación y hovers** · **terracota = hover de CTA, precios de add-on, acentos editoriales, iconos de beneficios**.
- ⚠️ **MÓVIL-FIRST: nada de información que dependa de `:hover`.**

### 🪨 TEXTURAS / utilidades
`.texture-grain` · `.texture-arena` · `.texture-travertino` · `.texture-terracota` · `.texture-ambar` (solo oscuros) · `.texture-metal` · `.hairline-metal` · `.lockup` · `.eyebrow` · `.h-editorial` · `.transition-editorial` · `<Reveal>` · `.full-bleed` · `.section-pad` / `.section-pad-sm`.

### ✅ CHECKLIST PDP — qué tocar al añadir una vela nueva
Una PDP "completa" (como `kit-vaso-de-vidrio`) necesita entrada en **5 lugares**:
1. `src/components/ProductStorySections.tsx` → `PDP_CONTENT[slug]` = `{ steps?, blocks, compareRows, faqs }`. **Sin esta entrada NO se renderiza NADA** (garantías, 4 pasos, reseñas, bloques, comparativa, FAQ, CTA de cierre). Es la causa #1 de "esta PDP se ve vacía".
2. `src/pages/ui/ProductPageUI.tsx` → `PDP_HEADLINE[slug]` (promesa de 1 línea bajo el título).
3. `src/pages/ui/ProductPageUI.tsx` → `PDP_BENEFITS[slug]` (3 bullets sobre el selector de variantes).
4. `src/lib/pdp-includes.ts` → `PDP_INCLUDES[slug]` (acordeón "Qué incluye").
5. `src/lib/scents.ts` → `SCENT_ENABLED_SLUGS` si el producto trae Cera Duna (habilita el add-on de aroma).
⚠️ Los `steps` de `PDP_CONTENT` hoy son decorativos: el carrusel real usa `HOW_IT_WORKS_STEPS` (compartido con la home) y por eso los `PLACEHOLDER` no se ven.

### 🛍️ REJILLA "ELIGE TU VELA" (home, sección `#comprar`)
- **`SHOP_CARDS` en `IndexUI.tsx`** = lista curada `{ slug, tag, badge? }`. Hoy 8 tarjetas.
- ⚠️ Una tarjeta **solo se renderiza si su slug existe en `CATALOG_FALLBACK`**. Añadir producto = **dos ediciones**: `CATALOG_FALLBACK` + `SHOP_CARDS`.
- ⚠️ **Un solo badge "Nuevo" a la vez.**

### ✨ FRANJA DE BENEFICIOS (home, bajo el hero)
- `BENEFITS` en `IndexUI.tsx`: iconos lucide `Leaf`, `RefreshCw`, `MapPin`, `Truck`. Móvil `grid-cols-2`, sm+ `flex justify-between`. ⛔ Sin `divide-x`.

### 🧭 NAVEGACIÓN
- **FUENTE ÚNICA: `src/lib/navigation.ts`** → `SHOP_COLUMNS`, `SHOP_FEATURED`, `SHOP_ALL`, `PRIMARY_LINKS`, `UTILITY_LINKS`. Componente: `src/components/MainNav.tsx`.
- ⛔ **REGLA DE ORO: el menú NO contiene anclas a la home (`/#...`).**
- ⚠️ **"Aromas" del menú → `/productos/esencia-para-vela-10-ml`**. El panel del mega menú exige que el wrapper `.max-w-7xl` del header tenga `relative`.

### 🖼️ FOTO POR VARIANTE — FUENTE ÚNICA (`src/lib/variant-image.ts`)
- `getVariantDisplayImage(variant, variants)`. Lo consume `ProductCardUI`. `ProductPageUI.galleryImages` duplica la lógica inline.
- ⚠️ La rejilla `SHOP_CARDS` de la home **no** usa `ProductCardUI`.

### 🛒 TARJETA DE PRODUCTO — modo "elegir en la PDP"
- `catalog-order.ts` exporta **`CHOOSE_ON_PDP`** + `getChooseOnPdp(slug)`. Hoy solo `esencia-para-vela-10-ml`.

### 🖼️ IMÁGENES EDITORIALES — FUENTE ÚNICA (`src/lib/steps-media.ts`)
- `STEP_IMAGES`, `BRAND_STORY_IMAGE`, `RITUAL_IMAGE`, `HERO_DESKTOP_IMAGE`, `HERO_MOBILE_VIDEO`, `HERO_MOBILE_POSTER`. ⛔ Nunca hardcodear estas URLs.

### 🎬 HERO
- Desktop `HERO_DESKTOP_IMAGE` · Móvil `<HeroMobileVideo />`. CTA → `/categorias/todos`; secundario → `#como-funciona`.
- Eyebrow: "Cera perlada 100% natural · Hecha en México".

### 🧭 PÁGINA `/como-funciona` (`src/pages/ComoFunciona.tsx`)
- Orden: intro + CTA → 4 pasos → CTA de mitad → `<Reviews />` → sección comparativa con encabezado propio → FAQ + CTA → cierre oscuro.
- ⚠️ **La `<CompareTable />` NUNCA va suelta.** `InlineCta` = helper local. Alternancia arena → background → arena → background → arena → carbon.

### 🎨 "ELIGE TU TONO" (home)
- `TONOS` usa la imagen 1 de cada variante de `perlas-originales-500-g`.

### 📱 CARRUSEL MÓVIL = SELECTOR DESLIZABLE — **SOLO AROMAS**
- `sliderOption` exige `o.name === SCENT_OPTION_NAME`. Slide: `basis-[99%] pl-1` + `aspect-[4/5]` sin `max-h`.

### Reglas de layout
- **TOP BAR** fija en `EcommerceTemplate.tsx`; **HEADER OVERLAY** solo en `IndexUI`.
- **🛒 ORDEN DEL BUY BOX**: título+precio+rating · `PDP_BENEFITS[slug]` · variantes · `<ProductScentSelector />` · cantidad · `<DeliveryEstimate />` · express + CTA `h-12` · CTA outline `h-11` · micro-línea `Lock` · badges · `<PdpSocialProof />` · WhatsApp · acordeones.
- **📚 ACORDEONES**: `Qué incluye` → `Más detalles` → `Envío y garantía`.
- **📐 IMAGEN DE PRODUCTO = 4:5 (1122×1402)** + `object-cover`.
- **ORDEN DE LA PDP**: garantías → carrusel 4 pasos → reseñas → bloques editoriales → `<CompareTable />` → FAQ → CTA de cierre.
- **🏠 ORDEN DE LA HOME**: hero → beneficios → 4 pasos → "Elige tu vela" → `RitualSection` → `Reviews` → `ScentsSection` → "Elige tu tono" → `CasaRealSection` → `BrandStorySection` → `<CompareTable />` → FAQ → newsletter.
- **📦 `/categorias/todos`** agrupa con `groupByCatalog`.

### ⚖️ TABLA COMPARATIVA (`src/components/CompareTable.tsx`) — FUENTE ÚNICA, sin título propio.
### 🌿 SISTEMA DE AROMAS — `src/lib/scents.ts` fuente única.
### 🧾 CARRITO Y CHECKOUT — **el carrito SOLO se vacía cuando el pago se confirma.**

---

## 3. Active Plan — FASE 7: LÍNEA DE ACERO, CUENCO Y VERIFICACIÓN

**Estado**: ✅ Línea de acero. ✅ Cuenco Dunaru integrado (catálogo, menú, home **y PDP completa**). ✅ Foto por variante. ✅ Carrito persistente. ✅ `/como-funciona`. 🔜 **Verificación visual en 360 px.**

### 7.1 🔴 P1 — Confirmar con la owner
1. Bowl de acero: ¿el kit incluye 500 g si el bowl mide 7 × 4 cm? ¿Acero pulido o cromado? Falta `compare_at_price`.
2. Cuenco Dunaru: swatches mal (3 en `#101010`). ¿Lleva `compare_at_price`? **¿Cuánta cera incluye el kit de $1,199? La PDP hoy dice 500 g + 30 mechas por analogía con el kit de vidrio — SIN CONFIRMAR.** ¿Cuántas mechas se recomiendan encender a la vez en 20 cm?

### 7.2 🔴 P1 — Verificación visual tras el commit
- **PDP `/productos/vela-rellenable-cuenco-dunaru`**: garantías, 4 pasos, reseñas, los 2 bloques editoriales con las fotos nuevas, comparativa, FAQ y CTA de cierre.
- **Home**: rejilla de 8 tarjetas, badge "Nuevo" solo en el Cuenco.
- **`/como-funciona`** y **`/categorias/todos`**. Home 360 px, video hero iOS, mega menú, flujo carrito → /pagar.

### 7.3 🟡 P2 — Página `/aromas` propia
### 7.4 🟡 P2 — AOV: tiers con nombre y % de ahorro
### 7.5 DECISIONES PENDIENTES DEL OWNER
1. ❓ Nombre de la garantía. 2. ❓ Horas por mecha. 3. ❓ Copy del empaque. 4. ❓ B2B / SKU sample.
### 7.6 Medición
Volumen insuficiente para A/B (122 usuarios/mes en la PDP principal). Medición secuencial con `posthog-query`.

---

## 4. Recent Changes
- 2026-08-27 — 🧱 **PDP COMPLETA DEL CUENCO DUNARU**: `vela-rellenable-cuenco-dunaru` no tenía entrada en `PDP_CONTENT`, así que su PDP salía sin garantías, sin "Crea tu vela en 4 pasos", sin reseñas, sin comparativa ni FAQ. Se replicó la estructura de `kit-vaso-de-vidrio` en los 5 archivos (`ProductStorySections`, `PDP_HEADLINE`, `PDP_BENEFITS`, `pdp-includes`, `SCENT_ENABLED_SLUGS`). Los 2 bloques editoriales usan **fotos nuevas subidas por la owner** (`1787859462824-br3pyp2cr9k` y `1787859462825-p6zo71cvpai`). Copy adaptado a cerámica de 20 cm y varias mechas.
- 2026-08-27 — 🛍️ **CUENCO DUNARU EN LA HOME** (`IndexUI.tsx`): entrada en `CATALOG_FALLBACK` + tarjeta en `SHOP_CARDS` (4ª posición, tag "Varias mechas", badge "Nuevo"). Se quitó el badge del Bowl de Acero.
- 2026-08-27 — ⚖️ **TÍTULO DE LA COMPARATIVA RESTAURADO** (`ComoFunciona.tsx`).
- 2026-08-27 — 🧭 **`/como-funciona` REFORZADA**: `<Reviews>` tras el paso 04 y 4 puntos de conversión.
- 2026-08-27 — ✍️ **COPY DEL HERO ACTUALIZADO**.
- 2026-08-27 — 🗂️ **CUENCO DUNARU INTEGRADO** en `catalog-order.ts` y mega menú.
- 2026-08-27 — 🖼️ **FOTO POR VARIANTE EN LAS TARJETAS**: `src/lib/variant-image.ts` + `ProductCardUI`.
- 2026-08-27 — 🔗 **CTA HERO → `/categorias/todos`**.
- 2026-08-27 — ✨ **FRANJA DE BENEFICIOS LIMPIADA**.
- 2026-08-27 — 🎚️ **CARRUSEL-SELECTOR SOLO PARA AROMAS**.
- 2026-08-27 — 🖼️ **FOTO DEL CARRUSEL MÓVIL AMPLIADA**.
- 2026-08-27 — 📏 **HUECO VACÍO ELIMINADO** (`allOptionsAreSlider`).
- 2026-08-27 — 💰 **PRECIO JUNTO AL NOMBRE DEL AROMA**.
- 2026-08-27 — 🎛️ **SELECTOR DE VARIANTE CON MINIATURAS**.
- 2026-08-27 — 🧴 **ESENCIA EN EL CATÁLOGO** + CTA "Elegir aroma".

## 5. Image Inventory
- **📐 Fotos de producto: 1122×1402 (4:5), webp.**
- Base de uploads del owner: `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/`
- **🏺 CUENCO DUNARU — bloques editoriales de la PDP (4:3 lifestyle)**: `1787859462824-br3pyp2cr9k` ("Todo listo para encender hoy") · `1787859462825-p6zo71cvpai` ("Se compra una vez, se rellena para siempre").
- **🏺 CUENCO DUNARU (vela)**: Marfil `biyop92l41t` + `srrf9e1v9yh` · Champagne `eb0630mux1c` + `gnvgvl9g2z6` · Ónix `9qpn00vexkt` + `bvww9lwbol`. **Cuenco suelto**: `z2wsj39j63`, `sorsudu67w`, `3wluzx3dk3o`, `as3ysmbal8e`, `wuzqds86opf`.
- **🏺 BLOQUES EDITORIALES CERÁMICA**: `1787846317152-fp7km169wu7` · `-d15my4ruzvs` · `-kecin16ha`.
- **🪞 BOWL DE ACERO**: `1787759673455-m5x9h5ouxwf` · `-uu86xb8ars` · `-vsmlwdqns` · `-e2tr1gctjfo` · `-udq3osxrsej`.
- **🔥 4 PASOS**: Vierte `1787701006060-mdjjspbepql` · Inserta `1787699972902-6ha0kcq29g` · Enciende `1787699972902-pr81fsb4jso` · Renueva `1787699972902-11zjzn59pysq`
- **🌅 HERO DESKTOP**: `1787702019949-nscqjcvsz0r.webp`. **🎬 HERO MÓVIL**: `store-videos/<STORE_ID>/hero-dunaru-mobile.mp4` + póster webp.
- **🕯️ RITUAL**: `1787701006060-vpgjgog2juh.webp`.
- ⛔ Deprecadas: `1785182590879-i54i3sm6qk`, `-u6xju9w4wjl`, `-77nbrytmoii`, `/paso-vierte.webp`, `/paso-renueva.webp`, `1785521743155-htw95tvbi4b`, `1785521743156-3qeskqe43gv`, `1787699972902-dld268c7c0u`, `1787701006060-xuyehajl1yr`, `public/hero-dunaru.webp`, `public/hero-dunaru-mobile.webp`.
- **🌿 FLAT-LAYS DE AROMA (4:3)**: Madera Nocturna `1787337333998-ynkiiz87l1n` · Ámbar Cristal `1787337333997-44wwhmmisy5` · Costa Mineral `1787337333998-jphdwvy2pbh` · Higo Matcha `1787337333998-enck999sju7` · Tabaco Vainilla `1787337333998-5e5poqkcxh8` · Musgo Mineral `1787337333998-n7f8zqhfx8m`.
- **Casa real**: `/casa-real-{sala,comedor,recibidor,recamara}.webp`. **UGC**: `src/data/reviews.ts`. **FAVICON**: `/favicon.png`.
- 🔴 **FALTAN: packshots 4:5 del frasco de esencia · foto del EMPAQUE NUEVO.**

## 6. Known Issues
- 2026-08-27 — 🟠 **La PDP del Cuenco Dunaru afirma "500 g + 30 mechas" sin confirmación de la owner** (se copió del kit de vidrio). Verificar antes de escalar pauta.
- 2026-08-27 — 🟡 **`CATALOG_FALLBACK` de `IndexUI` tiene precios viejos hardcodeados** (vidrio $799, cerámica $999, acero $1,099).
- 2026-08-27 — 🟡 **Copy del hero usa "natural" mientras el resto del sitio usa "100% vegetal"**.
- 2026-08-27 — 🟡 **Swatches del Cuenco Dunaru mal**: los 3 colores en `#101010`.
- 2026-08-27 — 🟡 **Lógica de "foto exclusiva de variante" DUPLICADA**: `variant-image.ts` y el `useMemo galleryImages` de `ProductPageUI`.
- 2026-08-27 — 🟡 **Los flat-lays de aroma son 4:3 y el carrusel móvil es 4:5**: se recortan.
- 2026-08-27 — 🟡 **Órdenes abandonadas duplicadas** (efecto del carrito persistente).
- 2026-08-27 — 🟡 Los `steps` de `PDP_CONTENT` siguen con `PLACEHOLDER` en varios slugs (no se renderizan: el carrusel usa `HOW_IT_WORKS_STEPS`).
- 2026-08-26 — 🔴 **`compare_at_price` de `vela-bowl-de-acero` NO persistió**.
- 2026-08-26 — 🟠 **Copy sin verificar del kit de acero** ("500 g" vs bowl de 7 × 4 cm).
- 2026-08-26 — 🟡 `vela-bowl-de-acero` sin variantes con `image_urls`.
- 2026-08-25 — 🟡 `public/hero-dunaru.webp` y `-mobile.webp` huérfanos.
- 2026-08-25 — 🟡 **Mega menú sin verificar visualmente**.
- 2026-08-25 — 🟠 **Los nombres nuevos NO están en los anuncios de Meta ni en emails automatizados.**
- 2026-08-25 — 🟡 `bowl-negro` y `vaso-extra-transparente` todavía dicen "perlas dunaru".
- 2026-08-21 — 🔴 `ecommerce--update-product` NO soporta imágenes por variante.

## 7. Pending / Future Sessions
- [ALTA] **Confirmar el contenido real del Cuenco Dunaru ($1,199)** y corregir la PDP si no son 500 g.
- [ALTA] **Verificar la PDP del Cuenco y la home en 360 px**.
- [ALTA] **Corregir swatches del Cuenco Dunaru** en el Dashboard.
- [ALTA] **Asignar `image_urls` por variante a `vela-bowl-de-acero`** y darle PDP completa (`PDP_CONTENT`).
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