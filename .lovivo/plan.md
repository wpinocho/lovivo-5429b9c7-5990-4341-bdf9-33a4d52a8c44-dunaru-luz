## 1. Brand & Context
- Brand: **dunaru** (dunaru.mx). Velas **rellenables** de **Cera Duna**: gránulos vegetales finos tipo arena + mechas de algodón.
- ⚠️ VOCABULARIO: **"rellenable"** (NO "recargable"). ⚠️ **PROHIBIDO el guion largo (—) en copy visible.**
- **Cera Duna** = nombre propietario de la cera (vegetal, en gránulos, sin parafina). Ya migrado a títulos y descripciones de la DB.
- **Cera 100% vegetal, biodegradable y ecológica** (claim aprobado por la owner). ⛔ NO usar porcentajes de soya/coco.
- Tesis: no vendemos cera. Vendemos una forma simple de crear luz en el recipiente que ya tienes.
- **AROMA**: la cera nace neutra. Add-on **Esencia para Vela · 10 ml** ($99) en la PDP. **1 frasco de 10 ml perfuma 500 g** (`SCENT_YIELD_GRAMS`).
- Target: mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO. Market: México, MXN, es-MX.
- Tono: claro, cálido, directo. Registro **editorial premium**. Referencias: **sensatehomes.com** (diseño) y **soliracandle.com** (mensaje).
- ⛔ **NO es founder-led. La owner NO aparece.**
- Pagos: **hasta 6 MSI**. ⚠️ NUNCA nombrar "Stripe" ni "Mercado Pago".
- Envío: **GRATIS A TODO MÉXICO, SIN MÍNIMO.** Garantía 30 días. WhatsApp: `525531215386`.
- REGLA DE INTEGRIDAD: **nunca reseñas falsas** (15 reales, 4.9 vía `getReviewStats()`), **nunca precios tachados inventados**, **nunca logos de prensa**.
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`
- RUTAS: producto `/productos/:slug`, paquete `/paquete/:slug`, carrito `/carrito`, checkout `/pagar`, categoría `/categorias/:handle`, **`/como-funciona`**.
- ⚠️ **kit-vaso-de-concreto** es de **CERÁMICA**; el slug NO se cambia (rompe los anuncios de Meta).
- ⚠️ **PRODUCTO ANCLA DE PAUTA = `kit-vaso-de-vidrio`.**
- ⚠️ El owner repriza desde el Dashboard. **NUNCA hardcodear precios.**
- ⚠️ **STAGING**: los cambios se commitean al final del turno. Pedir refresh duro.

### 🏷️ SISTEMA DE NOMBRES (nomenclatura premium vigente)
Regla: **`[Qué es] · [Formato]`**. Nada de "Kit", "Pack" ni "Recarga".

| Slug (INTACTO) | Título en DB | Precio | Compare |
|---|---|---|---|
| kit-vaso-de-vidrio | **Vela Rellenable · Vaso de Vidrio** | $799 | $899 |
| kit-vaso-de-concreto | **Vela Rellenable · Bowl de Cerámica** | $999 | $1,199 |
| **vela-bowl-de-acero** | **Vela Rellenable · Bowl de Acero** 🆕 | $1,099 | ⚠️ $1,299 SIN persistir |
| perlas-originales-500-g | **Cera Duna · 500 g** | $499 | $599 |
| reserva-1-kg | **Cera Duna · 1 kg** | $799 | $999 |
| d-o-de-tonos | **Dúo de Tonos · 1 kg** | $1,099 | $1,398 ⚠️ $1.10/g |
| tr-o-de-tonos | **Trío de Tonos · 1.5 kg** | $1,399 | $1,499 |
| bowl-negro | **Bowl Artesanal de Cerámica** | $399 | $499 |
| **bowl-espejo-de-acero** | **Bowl Espejo de Acero** 🆕 | $599 | $699 |
| vaso-extra-transparente | Vaso de Vidrio Transparente | $249 | — |
| pack-30-mechas | **30 Mechas de Algodón** | $99 | — |
| esencia-para-vela-10-ml | Esencia para Vela · 10 ml | $99 | add-on OCULTO del catálogo |

⚠️ Copias hardcodeadas de títulos: `CATALOG_FALLBACK` (IndexUI) y footer de `EcommerceTemplate`. `src/lib/navigation.ts` usa **etiquetas cortas propias**, desacopladas de la DB a propósito.

### CATÁLOGO — otros datos
- **BOWL DE ACERO (2026-08-26)**: acero pulido tipo espejo. Medidas de la foto de specs: **7 cm de diámetro × 4 cm de alto**. ⚠️ Verificar con la owner: 500 g de cera probablemente NO caben en un bowl de 7 cm; la copy actual dice "incluye 500 g".
  - `vela-bowl-de-acero` id `5e40d590-9c02-4924-a2e4-3dd3700954d2` — 5 imágenes, opción `Color` (Marfil/Champagne/Ónix), featured.
  - `bowl-espejo-de-acero` id `a28c4628-2ed9-4890-a321-ca4ef0d3bc61` — 2 imágenes (baño + noche), sin variantes.
- **ESENCIA**: id `f11fc30d-b36e-4c07-b756-79d1ecc44c71`, `track_inventory: false`, opción **`Aroma`**, 6 variantes. 6 fotos flat-lay.
- **CERA DUNA · 500 g** (`90445ca9-cf01-4e6a-a879-7487649e787c`): opción `Color` → Marfil / Champagne / Ónix. Imagen 1 de cada variante: `m4gndhjxsj` · `siffm8eo71e` · `smwszrq34a`.
- **CERA DUNA · 1 kg** (`64317fa8-...`): mismos 3 colores. Imagen 1: `tsdmco2i81` · `mryl7toxxm` · `obhn43su2qk`.
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
- 🎯 **oliva = selección + CTA** · **periwinkle = navegación y hovers** · **terracota = hover de CTA, precios de add-on, acentos editoriales**.
- ⚠️ **MÓVIL-FIRST: nada de información que dependa de `:hover`.**

### 🪨 TEXTURAS / utilidades
`.texture-grain` · `.texture-arena` · `.texture-travertino` · `.texture-terracota` · `.texture-ambar` (solo oscuros) · `.texture-metal` · `.hairline-metal` · `.lockup` · `.eyebrow` · `.h-editorial` · `.transition-editorial` · `<Reveal>` · `.full-bleed` · `.section-pad` / `.section-pad-sm`.

### 🧭 NAVEGACIÓN
- **FUENTE ÚNICA: `src/lib/navigation.ts`** → `SHOP_COLUMNS`, `SHOP_FEATURED`, `SHOP_ALL`, `PRIMARY_LINKS`, `UTILITY_LINKS`.
- **Componente: `src/components/MainNav.tsx`** → exporta `DesktopNav` y `MobileNav({ onNavigate })`.
- ⛔ **REGLA DE ORO: el menú NO contiene anclas a la home (`/#...`).**
- **Desktop**: `Tienda ▾` (mega menú de 4 columnas) + `Aromas` + `Cómo funciona`.
- Columna "Velas rellenables" ahora tiene 3 items (vidrio, cerámica, acero); "Recipientes y accesorios" tiene 4.
- ⚙️ El panel del mega menú es `absolute top-full left-0 right-0` y depende de que el wrapper `.max-w-7xl` del header tenga `relative`. **No quitar ese `relative`.**

### 🖼️ IMÁGENES EDITORIALES — FUENTE ÚNICA (`src/lib/steps-media.ts`)
- Exporta: `STEP_IMAGES` (`vierte`, `inserta`, `enciende`, `renueva`), `BRAND_STORY_IMAGE` (= `vierte`), **`RITUAL_IMAGE`**, **`HERO_DESKTOP_IMAGE`**, **`HERO_MOBILE_VIDEO`** y **`HERO_MOBILE_POSTER`**.
- La consumen: `IndexUI` (STEPS + hero desktop), `HeroMobileVideo`, `ProductStorySections`, `ComoFunciona`, `BrandStorySection`, `RitualSection`.
- ⛔ **Nunca hardcodear URLs de pasos, hero, ritual ni video.** Se cambia solo en `steps-media.ts`.

### 🎬 HERO (desde 2026-08-26)
- **Desktop**: foto horizontal `HERO_DESKTOP_IMAGE`, `object-center`. Sin video, nunca lo descarga.
- **Móvil**: **`<HeroMobileVideo />`** → video 9:16 720×1280 MP4 H.264, **sin audio, 1.8 MB**, `autoPlay muted loop playsInline`.
- **Estrategia LCP (no romper)**: póster `<img fetchPriority="high">` (webp 55 KB, primer frame exacto); el `<video>` no se monta hasta `requestIdleCallback` (fallback 1200 ms) y solo si `useIsMobile()`. Respeta `prefers-reduced-motion`.
- ⛔ **El póster debe ser siempre el primer frame del video.**
- Huérfanos en repo: `/hero-dunaru.webp`, `/hero-dunaru-mobile.webp`.

### 🎨 "ELIGE TU TONO" (home)
- La constante `TONOS` de `IndexUI` usa la **imagen 1 de cada variante** de `perlas-originales-500-g`.
- Cada tarjeta linkea a `/productos/perlas-originales-500-g?variante=<Nombre>`.
- `ProductPageUI` lee `?variante=` con `useLocation` y llama `logic.handleOptionSelect` una sola vez (guard con `appliedVariantRef`).

### Reglas de layout
- **TOP BAR** fija en `EcommerceTemplate.tsx`; **HEADER OVERLAY** solo en `IndexUI`.
- **🛒 ORDEN DEL BUY BOX** (`ProductPageUI.tsx`): título+precio+MSI+rating · `PDP_BENEFITS[slug]` · variantes · `<ProductScentSelector />` · cantidad · `<DeliveryEstimate />` · express + CTA `h-12` · CTA outline `h-11` · micro-línea `Lock` · badges · `<PdpSocialProof />` · WhatsApp · acordeones.
- **📚 ACORDEONES DE LA PDP (3, orden fijo)**: `Qué incluye` → `La pieza` → `Envío y garantía`.
- **📐 IMAGEN DE PRODUCTO = 4:5 (1122×1402)** + `object-cover`.
- **ORDEN DE LA PDP** (`ProductStorySections.tsx`): garantías → carrusel → reseñas → bloques editoriales → `<CompareTable />` → FAQ → CTA de cierre.
- **🏠 ORDEN DE LA HOME** (`IndexUI.tsx`): hero → credenciales → 4 pasos → "Elige tu vela" (7 cards) → `RitualSection` → `Reviews` → `ScentsSection` → "Elige tu tono" → `CasaRealSection` → `BrandStorySection` → `<CompareTable />` → FAQ → newsletter.
- **📄 `/como-funciona`**: intro → 4 pasos alternados → `<CompareTable />` → FAQ de 6 → CTA oscuro. Ya en el sitemap.

### ⚖️ TABLA COMPARATIVA (`src/components/CompareTable.tsx`)
- **FUENTE ÚNICA.** Exporta `CompareTable`, `CompareRow` y `BASE_COMPARE_ROWS`.

### 🌿 SISTEMA DE AROMAS
- **`src/lib/scents.ts`** = fuente única. `SCENT_ENABLED_SLUGS` incluye ya `vela-bowl-de-acero`. PostHog: `scent_selected`, `scent_details_toggled`.

### 🧾 CHECKOUT (`CheckoutUI.tsx`) — 🔒 no se toca.

---

## 3. Active Plan — FASE 7: LÍNEA DE ACERO Y VERIFICACIÓN

**Estado**: ✅ 2 productos de acero creados y cableados en todo el front. 🔜 **Verificación visual + precio tachado + copy de la cera.**

### 7.1 🔴 P1 — Confirmar con la owner (bowl de acero)
1. ¿El kit realmente incluye **500 g** de Cera Duna? El bowl mide 7 × 4 cm según la foto de specs. Si no caben, ajustar copy en DB, `pdp-includes.ts` y `PDP_BENEFITS`.
2. Confirmar precios: kit $1,099 / bowl solo $599. **El `compare_at_price` de `vela-bowl-de-acero` NO persistió vía API: ponerlo a mano en el Dashboard ($1,299).**
3. ¿Es acero inoxidable pulido o cromado? La copy dice "acero pulido tipo espejo".

### 7.2 🔴 P1 — Verificación visual tras el commit
- Video hero móvil (360 px, iOS real), mega menú con 3 columnas actualizadas, grid de 7 cards en la home, las 2 PDP nuevas.

### 7.3 🟡 P2 — Página `/aromas` propia
Hoy "Aromas" apunta a la PDP de la esencia (oculta del catálogo, sin SEO propio).

### 7.4 🟡 P2 — AOV: tiers con nombre y % de ahorro
`ProductQuantityTiers` (solo `perlas-originales-500-g`).

### 7.5 DECISIONES PENDIENTES DEL OWNER
1. ❓ Nombre de la garantía. 2. ❓ Horas por mecha. 3. ❓ Copy del empaque / inserto. 4. ❓ B2B / SKU sample.

### 7.6 Medición
Volumen insuficiente para A/B (122 usuarios/mes en la PDP principal). Medición secuencial con `posthog-query`.

---

## 4. Recent Changes
- 2026-08-26 — 🪞 **LÍNEA DE ACERO**: creados `vela-bowl-de-acero` ($1,099, 5 fotos, variantes de color) y `bowl-espejo-de-acero` ($599, fotos 3 y 4). Añadidos a colecciones `kits` / `recipientes`, `catalog-order.ts`, `navigation.ts` (con tag "Nuevo"), `pdp-includes.ts`, `PDP_HEADLINE` + `PDP_BENEFITS`, `CATALOG_FALLBACK` + `SHOP_CARDS` de IndexUI, footer y `SCENT_ENABLED_SLUGS`.
- 2026-08-26 — 🗺️ `/como-funciona` añadida a `scripts/generate-sitemap.ts`.
- 2026-08-26 — 🎬 **VIDEO HERO MÓVIL**: comprimido a 1.8 MB, componente `HeroMobileVideo.tsx` con póster webp y montaje diferido.
- 2026-08-25 — 🌅 **HERO REEMPLAZADO (v2)**: foto horizontal `1787702019949-nscqjcvsz0r.webp`.
- 2026-08-25 — 🔁 **Paso 1 corregido** y **pasos 3 y 4 intercambiados**.
- 2026-08-25 — 🕯️ **`RitualSection` migrada** a la foto del bowl negro (`RITUAL_IMAGE`).
- 2026-08-25 — 🖼️ Fotos del ritual centralizadas en `src/lib/steps-media.ts`.
- 2026-08-25 — 🎨 **"Elige tu tono"** usa la imagen 1 de cada variante y linkea con `?variante=`.
- 2026-08-25 — 🔗 **`ProductPageUI` preselecciona variante desde la URL**.
- 2026-08-25 — 🧭 **MENÚ REDISEÑADO**: `src/lib/navigation.ts` + `src/components/MainNav.tsx`.
- 2026-08-25 — 📄 **Nueva página `/como-funciona`** con SEO propio.
- 2026-08-25 — 🏷️ **NOMENCLATURA PREMIUM: renombrados 8 productos en la DB**. Slugs intactos.
- 2026-08-25 — 🔻 Tabla comparativa bajada en la home.
- 2026-08-25 — ✂️ Acordeón "Cuidado y seguridad" eliminado de la PDP.
- 2026-08-25 — 🔢 Mechas corregidas: Trío = 90, Cera Duna 1 kg = 60.

## 5. Image Inventory
- **📐 Fotos de producto: 1122×1402 (4:5), webp.**
- Base de uploads del owner: `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/`
- **🪞 BOWL DE ACERO (2026-08-26)**: `1787759673455-m5x9h5ouxwf` (bodegón día + tubo) · `1787759673455-uu86xb8ars` (mármol atardecer) · `1787759673455-vsmlwdqns` (sala de noche, cera oscura) · `1787759673455-e2tr1gctjfo` (baño, luz de día) · `1787759673455-udq3osxrsej` (specs 7 × 4 cm).
  - Kit: 1, 2, baño, noche, specs. Recipiente solo: baño, noche.
- **🔥 4 PASOS**: Vierte `1787701006060-mdjjspbepql` (también BrandStory) · Inserta `1787699972902-6ha0kcq29g` · Enciende `1787699972902-pr81fsb4jso` · Renueva `1787699972902-11zjzn59pysq`
- **🌅 HERO DESKTOP**: `1787702019949-nscqjcvsz0r.webp`.
- **🎬 HERO MÓVIL (video)**: `store-videos/<STORE_ID>/hero-dunaru-mobile.mp4` (720×1280, 1.8 MB). **PÓSTER**: `product-images/<STORE_ID>/hero-dunaru-mobile-poster.webp`.
- **🕯️ RITUAL**: `1787701006060-vpgjgog2juh.webp`.
- ⛔ Deprecadas: `/paso-vierte.webp`, `/paso-renueva.webp`, `1785521743155-htw95tvbi4b`, `1785521743156-3qeskqe43gv`, `1787699972902-dld268c7c0u`, `1787701006060-xuyehajl1yr`, `public/hero-dunaru.webp`, `public/hero-dunaru-mobile.webp`.
- **🌿 FLAT-LAYS DE AROMA (4:3)**: Madera Nocturna `1787337333998-ynkiiz87l1n` · Ámbar Cristal `1787337333997-44wwhmmisy5` · Costa Mineral `1787337333998-jphdwvy2pbh` · Higo Matcha `1787337333998-enck999sju7` · Tabaco Vainilla `1787337333998-5e5poqkcxh8` · Musgo Mineral `1787337333998-n7f8zqhfx8m`.
- **Casa real**: `/casa-real-{sala,comedor,recibidor,recamara}.webp`. **UGC** (5 fotos): constante `UGC` en `src/data/reviews.ts`. **FAVICON**: `/favicon.png`.
- 🟡 Subidas sin usar: `1787681082141-dy7wr0dcp15`, `1787681082142-42qlfq25nvs`, `1787684660654-vr5uiznl7cj`.
- 🔴 **FALTAN: packshots 4:5 del frasco de esencia · foto del EMPAQUE NUEVO.**

## 6. Known Issues
- 2026-08-26 — 🔴 **`compare_at_price` de `vela-bowl-de-acero` NO persistió** ($1,299). Ponerlo desde el Dashboard.
- 2026-08-26 — 🟠 **Copy sin verificar del kit de acero**: dice "500 g de Cera Duna" pero el bowl mide 7 × 4 cm según la foto de specs.
- 2026-08-26 — 🟡 `ProductStorySections` NO tiene entrada propia para `vela-bowl-de-acero`: usa el bloque genérico.
- 2026-08-26 — 🟡 Video hero móvil sin verificar en dispositivo real (iOS Low Power Mode bloquea autoplay; se queda el póster).
- 2026-08-26 — 🟡 El póster del video es una escena diurna; verificar contraste del H1 en 360 px.
- 2026-08-25 — 🟡 `public/hero-dunaru.webp` y `public/hero-dunaru-mobile.webp` huérfanos.
- 2026-08-25 — 🟡 **Mega menú sin verificar visualmente**.
- 2026-08-25 — 🟡 **"Aromas" del menú apunta a la PDP de la esencia**, oculta del catálogo y sin SEO propio.
- 2026-08-25 — 🟠 **Los nombres nuevos NO están en los anuncios de Meta ni en emails automatizados.**
- 2026-08-25 — 🟡 `CATALOG_FALLBACK` (IndexUI) y el footer duplican los títulos de la DB.
- 2026-08-25 — 🟡 Sin verificar en 360 px: `CompareTable` en la home, `ScentsSection`, `MobileNav`.
- 2026-08-25 — 🟡 `bowl-negro` y `vaso-extra-transparente` todavía dicen "perlas dunaru".
- 2026-08-21 — 🔴 `ecommerce--update-product` NO soporta imágenes por variante.
- 2026-08-21 — 🟡 La barra sticky de la PDP muestra el precio unitario sin aroma.
- 2026-08-21 — 🟠 El panel de aroma abierto por default empuja el CTA en móvil.
- 2026-08-20 — 🟠 `ProductStorySections.tsx` aún tiene `dunaru-champagne` en los bullets.
- 2026-08-07 — 🟠 Escalera de precio por gramo rota: Dúo 1 kg ($1.10/g) vs Cera Duna 1 kg ($0.80/g).
- 2026-08-07 — 🟡 `getReviewStats()` es global (4.9/15), no por SKU.
- 2026-07-31 — 🔴 `ecommerce--update-product` NO persiste `compare_at_price` explícito. Workaround: Dashboard.
- 2026-07-06 — 🔴 `meta-capi` edge function falla en preview.

## 7. Pending / Future Sessions
- [ALTA] **Confirmar con la owner los datos del bowl de acero** (gramaje incluido, precios, material) y poner el compare de $1,299 en el Dashboard.
- [ALTA] **Verificar tras el commit**: PDP de acero, mega menú, grid de 7 cards, video hero móvil.
- [ALTA] **Escribir bloques editoriales propios de `vela-bowl-de-acero`** en `ProductStorySections.tsx`.
- [ALTA] **Avisar al owner que sincronice los nombres en anuncios de Meta y emails.**
- [ALTA] **Pedir al owner**: horas por mecha, nombre de la garantía, copy del empaque.
- [ALTA] **Packshots del frasco de esencia (4:5)**.
- [ALTA] **Medir el attach rate de aroma** en PostHog.
- [ALTA] **Crear la colección `recargas`**.
- [MED] **Página `/aromas`** propia (7.3).
- [MED] Tiers con nombre y % de ahorro.
- [MED] Limpiar "perlas dunaru" de `bowl-negro` y `vaso-extra-transparente`.
- [BAJA] Página B2B / wholesale. SKU sample barato. Banners de colección.