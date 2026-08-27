## 1. Brand & Context
- Brand: **dunaru** (dunaru.mx). Velas **rellenables** de **Cera Duna**: gránulos vegetales finos tipo arena + mechas de algodón.
- ⚠️ VOCABULARIO: **"rellenable"** (NO "recargable"). ⚠️ **PROHIBIDO el guion largo (—) en copy visible.**
- **Cera Duna** = nombre propietario de la cera (vegetal, en gránulos, sin parafina). Ya migrado a títulos y descripciones de la DB.
- **Cera 100% vegetal, biodegradable y ecológica** (claim aprobado por la owner). ⛔ NO usar porcentajes de soya/coco.
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
- ⚠️ El owner repriza y **crea productos** desde el Dashboard. **NUNCA hardcodear precios.** 🔁 Todo producto nuevo debe añadirse a `catalog-order.ts` y a `navigation.ts`, si no cae en "Más de dunaru".
- ⚠️ **STAGING**: los cambios se commitean al final del turno. Pedir refresh duro.

### 🏷️ SISTEMA DE NOMBRES (nomenclatura premium vigente)
Regla: **`[Qué es] · [Formato]`**. Nada de "Kit", "Pack" ni "Recarga".

| Slug (INTACTO) | Título en DB | Precio | Compare |
|---|---|---|---|
| kit-vaso-de-vidrio | **Vela Rellenable · Vaso de Vidrio** | $749 | $899 |
| kit-vaso-de-concreto | **Vela Rellenable · Bowl de Cerámica** | $949 | $1,199 |
| **vela-rellenable-cuenco-dunaru** | **Vela Rellenable · Cuenco Dunaru** 🆕 | $1,199 | — |
| vela-bowl-de-acero | **Vela Rellenable · Bowl de Acero** | $849 | ⚠️ sin compare |
| perlas-originales-500-g | **Cera Duna · 500 g** | $499 | — |
| reserva-1-kg | **Cera Duna · 1 kg** | $799 | $999 |
| d-o-de-tonos | **Dúo de Tonos · 1 kg** | $899 | $999 |
| tr-o-de-tonos | **Trío de Tonos · 1.5 kg** | $1,199 | $1,499 |
| bowl-negro | **Bowl Artesanal de Cerámica** | $499 | $549 |
| **cuenco-dunaru** | **Cuenco Dunaru** (solo recipiente) 🆕 | $699 | — |
| bowl-espejo-de-acero | **Bowl Espejo de Acero** | $399 | $499 |
| vaso-extra-transparente | Vaso de Vidrio Transparente | $249 | — |
| pack-30-mechas | **30 Mechas de Algodón** | $99 | — |
| esencia-para-vela-10-ml | Esencia para Vela · 10 ml | $99 | visible en Accesorios |

⚠️ Copias hardcodeadas de títulos: `CATALOG_FALLBACK` (IndexUI) y footer de `EcommerceTemplate`. `src/lib/navigation.ts` usa **etiquetas cortas propias**, desacopladas de la DB a propósito.

### CATÁLOGO — otros datos
- **CUENCO DUNARU (2026-08-27, creado por la owner)**: cerámica, **20 cm de diámetro × 6 cm de alto**, admite varias mechas.
  - `vela-rellenable-cuenco-dunaru` id `ec006544-6039-46ff-a15d-d7aa04ac82f3` — 11 imágenes, opción `Color` (Marfil/Champagne/Ónix) **con `image_urls` por variante** (2 c/u, exclusivas → la tarjeta sí cambia de foto).
  - `cuenco-dunaru` id `72c2c10d-b302-40e4-8925-abef8f7a5453` — 5 imágenes, sin variantes.
  - ⚠️ Sus swatches en la DB están los tres en `#101010` (mal). Corregir en el Dashboard.
- **BOWL DE ACERO**: `vela-bowl-de-acero` id `5e40d590-9c02-4924-a2e4-3dd3700954d2` — variantes **SIN `image_urls`** (su tarjeta no cambia de foto). `bowl-espejo-de-acero` id `a28c4628-2ed9-4890-a321-ca4ef0d3bc61`.
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

### ✨ FRANJA DE BENEFICIOS (home, bajo el hero)
- `BENEFITS` en `IndexUI.tsx`: `{ icon, text }` con iconos lucide `Leaf`, `RefreshCw`, `MapPin`, `Truck`.
- Layout: **móvil `grid-cols-2 gap-x-5 gap-y-4 py-6`** · **sm+ `flex justify-between`**. ⛔ Sin `divide-x`, sin cajas.

### 🧭 NAVEGACIÓN
- **FUENTE ÚNICA: `src/lib/navigation.ts`** → `SHOP_COLUMNS`, `SHOP_FEATURED`, `SHOP_ALL`, `PRIMARY_LINKS`, `UTILITY_LINKS`.
- **Componente: `src/components/MainNav.tsx`** → `DesktopNav` y `MobileNav({ onNavigate })`.
- ⛔ **REGLA DE ORO: el menú NO contiene anclas a la home (`/#...`).**
- **Desktop**: `Tienda ▾` (mega menú de 3 columnas) + `Aromas` + `Cómo funciona`.
- ⚠️ **"Aromas" del menú → `/productos/esencia-para-vela-10-ml`**.
- ⚙️ El panel del mega menú depende de que el wrapper `.max-w-7xl` del header tenga `relative`. **No quitar ese `relative`.**

### 🖼️ FOTO POR VARIANTE — FUENTE ÚNICA (`src/lib/variant-image.ts`)
- Exporta **`getVariantDisplayImage(variant, variants)`**: primera `image_url` **exclusiva** de esa variante; si no, flat-lay de aroma por nombre (`scents.ts`); si no, `image_urls[0]` / `variant.image`.
- **Lo consume `ProductCardUI`** (tarjetas del catálogo y home). `ProductPageUI.galleryImages` duplica la lógica inline.

### 🛒 TARJETA DE PRODUCTO — modo "elegir en la PDP"
- `catalog-order.ts` exporta **`CHOOSE_ON_PDP`** + `getChooseOnPdp(slug)`. Hoy solo `esencia-para-vela-10-ml` → CTA **"Elegir aroma"**.
- `HIDDEN_FROM_CATALOG_SLUGS` vacío (la API sigue existiendo).

### 🖼️ IMÁGENES EDITORIALES — FUENTE ÚNICA (`src/lib/steps-media.ts`)
- `STEP_IMAGES`, `BRAND_STORY_IMAGE`, `RITUAL_IMAGE`, `HERO_DESKTOP_IMAGE`, `HERO_MOBILE_VIDEO`, `HERO_MOBILE_POSTER`. ⛔ Nunca hardcodear estas URLs.

### 🎬 HERO
- **Desktop**: `HERO_DESKTOP_IMAGE`. **Móvil**: `<HeroMobileVideo />` (MP4 9:16, 1.8 MB, sin audio).
- **CTA hero "Comprar ahora" → `/categorias/todos`**. Secundario → `#como-funciona`.

### 🎨 "ELIGE TU TONO" (home)
- `TONOS` usa la imagen 1 de cada variante de `perlas-originales-500-g`; linkea a `?variante=<Nombre>`.

### 📱 CARRUSEL MÓVIL = SELECTOR DESLIZABLE — **SOLO AROMAS**
- `sliderOption` exige `o.name === SCENT_OPTION_NAME`. ⛔ El color usa **toggle de 3 botones con miniatura**.
- **📐 Slide**: `basis-[99%] pl-1` + `w-full aspect-[4/5]` **SIN `max-h`**.

### Reglas de layout
- **TOP BAR** fija en `EcommerceTemplate.tsx`; **HEADER OVERLAY** solo en `IndexUI`.
- **🛒 ORDEN DEL BUY BOX**: título+precio+rating · `PDP_BENEFITS[slug]` · variantes · `<ProductScentSelector />` · cantidad · `<DeliveryEstimate />` · express + CTA `h-12` · CTA outline `h-11` · micro-línea `Lock` · badges · `<PdpSocialProof />` · WhatsApp · acordeones.
- **📚 ACORDEONES DE LA PDP**: `Qué incluye` → `Más detalles` → `Envío y garantía` (`src/lib/pdp-includes.ts`).
- **📐 IMAGEN DE PRODUCTO = 4:5 (1122×1402)** + `object-cover`.
- **ORDEN DE LA PDP**: garantías → carrusel → reseñas → bloques editoriales → `<CompareTable />` → FAQ → CTA de cierre.
- **🏠 ORDEN DE LA HOME**: hero → beneficios → 4 pasos → "Elige tu vela" → `RitualSection` → `Reviews` → `ScentsSection` → "Elige tu tono" → `CasaRealSection` → `BrandStorySection` → `<CompareTable />` → FAQ → newsletter.
- **📦 `/categorias/todos`** agrupa con `groupByCatalog`: Empieza aquí → Cera Duna → Colecciones de tonos → Accesorios.

### ⚖️ TABLA COMPARATIVA (`src/components/CompareTable.tsx`) — FUENTE ÚNICA.

### 🌿 SISTEMA DE AROMAS
- **`src/lib/scents.ts`** = fuente única. `getScentImageByVariantName()`, `SCENT_OPTION_NAME = "Aroma"`, `SCENT_PRODUCT_SLUG`.

### 🧾 CARRITO Y CHECKOUT
- **⚠️ El carrito SOLO se vacía cuando el pago se confirma.** Back links en `CartUI` y `CheckoutUI`.

---

## 3. Active Plan — FASE 7: LÍNEA DE ACERO, CUENCO Y VERIFICACIÓN

**Estado**: ✅ Línea de acero. ✅ Cuenco Dunaru integrado al catálogo y al menú. ✅ Foto por variante en tarjetas. ✅ Carrito persistente. 🔜 **Verificación visual en 360 px.**

### 7.1 🔴 P1 — Confirmar con la owner
1. Bowl de acero: ¿el kit incluye 500 g si el bowl mide 7 × 4 cm? ¿Acero inoxidable pulido o cromado? Falta `compare_at_price`.
2. Cuenco Dunaru: swatches de color mal (los 3 en `#101010`). ¿Lleva `compare_at_price`? ¿Cuánta cera incluye el kit de $1,199?

### 7.2 🔴 P1 — Verificación visual tras el commit
- **`/categorias/todos`**: los 4 kits en "Empieza aquí", Cuenco Dunaru recipiente en "Accesorios", y cambio de foto al elegir color.
- Home 360 px, PDP esencia (carrusel), PDP vaso de vidrio (toggle), video hero iOS, mega menú, flujo carrito → /pagar.

### 7.3 🟡 P2 — Página `/aromas` propia
### 7.4 🟡 P2 — AOV: tiers con nombre y % de ahorro
### 7.5 DECISIONES PENDIENTES DEL OWNER
1. ❓ Nombre de la garantía. 2. ❓ Horas por mecha. 3. ❓ Copy del empaque. 4. ❓ B2B / SKU sample.
### 7.6 Medición
Volumen insuficiente para A/B (122 usuarios/mes en la PDP principal). Medición secuencial con `posthog-query`.

---

## 4. Recent Changes
- 2026-08-27 — 🗂️ **CUENCO DUNARU INTEGRADO**: `vela-rellenable-cuenco-dunaru` movido al grupo **"Empieza aquí"** (kits) y `cuenco-dunaru` al grupo **"Accesorios"** en `catalog-order.ts`. Antes caían en "Más de dunaru". También añadidos al mega menú (`navigation.ts`): "Cuenco Dunaru" en Velas rellenables y en Accesorios, ambos con tag "Nuevo".
- 2026-08-27 — 🖼️ **FOTO POR VARIANTE EN LAS TARJETAS**: nuevo `src/lib/variant-image.ts` con `getVariantDisplayImage()`. `ProductCardUI` lo usa para `primaryImage` y desactiva la foto de hover cuando hay foto de variante.
- 2026-08-27 — 🔗 **CTA HERO "Comprar ahora" → `/categorias/todos`** (`IndexUI.tsx`).
- 2026-08-27 — ✨ **FRANJA DE BENEFICIOS LIMPIADA** (`IndexUI.tsx`): iconos lucide en terracota, grid 2×2 en móvil.
- 2026-08-27 — 🎚️ **CARRUSEL-SELECTOR SOLO PARA AROMAS** (`ProductPageUI.tsx`).
- 2026-08-27 — 🖼️ **FOTO DEL CARRUSEL MÓVIL AMPLIADA**: `basis-[99%]`, sin `max-h`.
- 2026-08-27 — 📏 **HUECO VACÍO ELIMINADO**: `allOptionsAreSlider`.
- 2026-08-27 — 💰 **PRECIO JUNTO AL NOMBRE DEL AROMA** (`priceInSlide`).
- 2026-08-27 — 📱 **CARRUSEL MÓVIL = SELECTOR** (`sliderOption`, `mobileSlides`).
- 2026-08-27 — 🎛️ **SELECTOR DE VARIANTE CON MINIATURAS** (desktop).
- 2026-08-27 — 📱 **PANEL DE AROMAS COMPACTO EN MÓVIL**.
- 2026-08-27 — 🧴 **ESENCIA EN EL CATÁLOGO** + CTA "Elegir aroma".
- 2026-08-27 — 🛒 **CARRITO PERSISTENTE EN CHECKOUT** + back links.
- 2026-08-27 — 📚 **ACORDEÓN RENOMBRADO**: "La pieza" → "Más detalles".
- 2026-08-27 — 🌿 **GALERÍA DE LA PDP DE AROMAS ARREGLADA**.

## 5. Image Inventory
- **📐 Fotos de producto: 1122×1402 (4:5), webp.**
- Base de uploads del owner: `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/`
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
- 2026-08-27 — 🟡 **Swatches del Cuenco Dunaru mal**: los 3 colores en `#101010`. Corregir en el Dashboard.
- 2026-08-27 — 🟡 **La lógica de "foto exclusiva de variante" está DUPLICADA**: `src/lib/variant-image.ts` (tarjetas) y el `useMemo galleryImages` de `ProductPageUI` (PDP).
- 2026-08-27 — 🟡 **Los flat-lays de aroma son 4:3 y el carrusel móvil es 4:5**: se recortan.
- 2026-08-27 — 🟡 **Órdenes abandonadas duplicadas** (efecto del carrito persistente).
- 2026-08-27 — 🟡 Los `steps` de `kit-vaso-de-concreto` en `ProductStorySections` siguen con `PLACEHOLDER`.
- 2026-08-26 — 🔴 **`compare_at_price` de `vela-bowl-de-acero` NO persistió**.
- 2026-08-26 — 🟠 **Copy sin verificar del kit de acero** ("500 g" vs bowl de 7 × 4 cm).
- 2026-08-26 — 🟡 `vela-bowl-de-acero` sin variantes con `image_urls` → su tarjeta NO cambia de foto.
- 2026-08-25 — 🟡 `public/hero-dunaru.webp` y `-mobile.webp` huérfanos.
- 2026-08-25 — 🟡 **Mega menú sin verificar visualmente**.
- 2026-08-25 — 🟠 **Los nombres nuevos NO están en los anuncios de Meta ni en emails automatizados.**
- 2026-08-25 — 🟡 `CATALOG_FALLBACK` (IndexUI) y el footer duplican los títulos de la DB.
- 2026-08-25 — 🟡 `bowl-negro` y `vaso-extra-transparente` todavía dicen "perlas dunaru".
- 2026-08-21 — 🔴 `ecommerce--update-product` NO soporta imágenes por variante.
- 2026-08-21 — 🟡 La barra sticky de la PDP muestra el precio unitario sin aroma.
- 2026-08-07 — 🟡 `getReviewStats()` es global (4.9/15), no por SKU.
- 2026-07-31 — 🔴 `ecommerce--update-product` NO persiste `compare_at_price` explícito.
- 2026-07-06 — 🔴 `meta-capi` edge function falla en preview.

## 7. Pending / Future Sessions
- [ALTA] **Verificar `/categorias/todos`**: 4 kits arriba, Cuenco Dunaru recipiente en Accesorios, cambio de foto por color.
- [ALTA] **Corregir swatches del Cuenco Dunaru** en el Dashboard.
- [ALTA] **Asignar `image_urls` por variante a `vela-bowl-de-acero`**.
- [ALTA] **Packshots del frasco de esencia (4:5)**.
- [ALTA] **Verificar el flujo carrito → /pagar → volver atrás**.
- [ALTA] **Escribir bloques editoriales propios de `vela-bowl-de-acero` y `vela-rellenable-cuenco-dunaru`**.
- [ALTA] **Avisar al owner que sincronice los nombres en anuncios de Meta y emails.**
- [ALTA] **Medir el attach rate de aroma** en PostHog.
- [ALTA] **Crear la colección `recargas`**.
- [MED] Refactorizar `ProductPageUI` para que use `getVariantDisplayImage`.
- [MED] **Página `/aromas`** propia. Tiers con nombre y % de ahorro.
- [MED] Limpiar "perlas dunaru" de `bowl-negro` y `vaso-extra-transparente`.
- [BAJA] Página B2B / wholesale. SKU sample barato. Banners de colección.