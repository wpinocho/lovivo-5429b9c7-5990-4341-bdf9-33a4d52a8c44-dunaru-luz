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

### 📡 TRACKING META PIXEL + CAPI — lifecycle del event_id (2026-09-26)
- Archivo: `src/lib/tracking-utils.ts`. `trackHybrid` genera el `eventId` UNA vez y lo pasa idéntico a Pixel (`eventID`), CAPI (`meta-capi` edge) y PostHog → así deduplica Meta.
- **event_id ÚNICO POR OCURRENCIA REAL.** Random UUID para ViewContent, AddToCart, Search, PageView, CustomEvent.
- **Determinístico SOLO con clave de negocio idempotente**: Purchase → `purchase_<order_id>`; InitiateCheckout → `initiatecheckout_<order_id>` si hay order_id (hoy CheckoutAdapter no lo manda → random).
- ⛔ NUNCA usar product_id / search query como stableId. ⛔ NUNCA filtrar eventos a Meta por fuente de tráfico.
- Tests: `src/lib/__tests__/tracking-utils.test.ts` (Vitest, casos A–H). Correr: `npx vitest run src/lib/__tests__/tracking-utils.test.ts`.
- ℹ️ No existe Google Ads/gtag en el repo (búsqueda 2026-09-26).

### 🗂️ ESTATUS DEL PRODUCTO — archivado = invisible (2026-09-07)
- **FUENTE ÚNICA: `src/hooks/useActiveProductSlugs.ts`.** Consulta `products` con `status = 'active'` + `store_id`, cachea en módulo y exporta `useActiveProductSlugs()`, `filterActiveLinks(items, slugs)`, `slugFromPath(path)`.
- ⚠️ **Fail-open**: si la query falla o devuelve vacío NO se oculta nada.
- Consumidores: `MainNav.tsx` (`useLiveNav()`), `EcommerceTemplate.tsx` (`FOOTER_SHOP_LINKS`), `IndexUI.tsx` (`buildCatalog()`).
- ⚠️ La **PDP directa** de un archivado sigue accesible (`HeadlessProduct` prohibido, no filtra status).

### 🪨 TEXTURAS / utilidades
`.texture-grain` · `.texture-arena` · `.texture-travertino` · `.texture-terracota` · `.texture-ambar` (solo oscuros) · `.texture-metal` · `.hairline-metal` · `.lockup` · `.eyebrow` · `.h-editorial` · `.transition-editorial` · `<Reveal>` · `.full-bleed` · `.section-pad` / `.section-pad-sm`.

### ⭐ RESEÑAS — `src/data/reviews.ts` es FUENTE ÚNICA
- 16 reseñas reales. Helpers: `getReviews(slug)`, `getFeaturedReviews(slug)`, `getRatingDistribution`, `getReviewStats`. El orden del array manda. Fotos UGC en `UGC`. Slug en `productSlugs` para aparecer en una PDP.

### 🔗 DEEP LINK DE VARIANTE — `?variante=`
- Implementado en `ProductPageUI.tsx`. ⚠️ `HeadlessProduct` auto-selecciona la primera variante; el effect depende de `logic.selected` y reintenta. ⛔ No simplificarlo a `[search, product.id]`.

### 💰 PRECIO DEL CTA — `ctaTotal` es la ÚNICA fuente (3 CTAs + `stickyPriceNote`). ⛔ NUNCA `logic.currentPrice` en la sticky.

### ✅ CHECKLIST PDP — vela nueva
1. `ProductStorySections.tsx` → `PDP_CONTENT[slug]` (sin esto no renderiza nada). 2. `PDP_HEADLINE[slug]`. 3. `PDP_BENEFITS[slug]`. 4. `src/lib/pdp-includes.ts`. 5. `SCENT_ENABLED_SLUGS`.

### 🛍️ REJILLA "ELIGE TU VELA" — `SHOP_CARDS` en `IndexUI.tsx`; requiere slug en `CATALOG_FALLBACK` y producto activo. Un solo badge "Nuevo" (Cuenco Dunaru).
### ✨ FRANJA DE BENEFICIOS — `BENEFITS` en `IndexUI.tsx`. ⛔ Sin `divide-x`.
### 🧭 NAVEGACIÓN — FUENTE ÚNICA `src/lib/navigation.ts`; `MainNav.tsx`. ⛔ Sin anclas `/#...`. "Aromas" → `/productos/esencia-para-vela-10-ml`.
### 🖼️ FOTO POR VARIANTE — `src/lib/variant-image.ts`.
### 🛒 `CHOOSE_ON_PDP` en `catalog-order.ts` (hoy solo esencia).
### 🖼️ IMÁGENES EDITORIALES — `src/lib/steps-media.ts`. ⛔ Nunca hardcodear.
### 🎬 HERO — Desktop imagen · Móvil `<HeroMobileVideo />`. CTA → `/categorias/todos`.
### 🧭 `/como-funciona` — intro → 4 pasos → CTA → Reviews → comparativa con encabezado → FAQ → cierre.
### 🌿 AROMAS — `src/lib/scents.ts` fuente única; `ScentsSection` → `?variante=`. Carrusel-selector móvil SOLO para aromas.

### Reglas de layout
- **🛒 ORDEN DEL BUY BOX**: título+precio+rating · `PDP_BENEFITS` · variantes · `<ProductScentSelector />` · cantidad · `<DeliveryEstimate />` · express + CTA `h-12` · CTA outline `h-11` · `Lock` · badges · `<PdpSocialProof />` · WhatsApp · acordeones.
- **📐 IMAGEN DE PRODUCTO = 4:5 (1122×1402)** + `object-cover`.
- **🏠 ORDEN DE LA HOME**: hero → beneficios → 4 pasos → "Elige tu vela" → Ritual → Reviews → Scents → Tonos → CasaReal → BrandStory → CompareTable → FAQ → newsletter.
- **🧾 El carrito SOLO se vacía cuando el pago se confirma.**

---

## 3. Active Plan — FASE 8: CATÁLOGO VIVO Y VERIFICACIÓN

**Estado**: ✅ Estatus del producto. ✅ Sticky. ✅ 2026-09-26 fix de event_id Pixel/CAPI. 🔜 Verificación visual + correr tests.

### 8.0 🔴 P1 — Validar fix de tracking (2026-09-26)
- Correr `npx vitest run src/lib/__tests__/tracking-utils.test.ts` y `npx tsc -p tsconfig.app.json --noEmit` (el agente no tiene shell; no se pudieron ejecutar).
- En Meta Events Manager → Test Events: confirmar que ViewContent/AddToCart llegan "Deduplicados" (browser + server) con event_id distinto en cada ocurrencia.

### 8.1 🔴 P1 — Verificación visual tras el commit (Bowl de Acero archivado fuera de menú/footer/home; sticky; deep links; 360 px; video iOS; carrito → /pagar).
### 8.2 🔴 P1 — Confirmar con la owner: contenido y swatches del Cuenco Dunaru; ¿archivar `bowl-espejo-de-acero`?
### 8.3 🟡 P2 — Página `/aromas`. 8.4 🟡 P2 — Tiers AOV con nombre.
### 8.6 Medición — volumen insuficiente para A/B; medición secuencial con PostHog.

---

## 4. Recent Changes
- 2026-09-26 — 📡 **FIX DEDUP META PIXEL + CAPI**: `tracking-utils.ts` ya no usa product_id/search query como event_id. ViewContent, AddToCart, Search → UUID por ocurrencia; InitiateCheckout → order_id o UUID (sin fallback a product id); Purchase intacto (`order_id`). Agregado `vitest` + `src/lib/__tests__/tracking-utils.test.ts` (casos A–H).
- 2026-09-07 — 🗂️ **ARCHIVAR UN PRODUCTO YA LO OCULTA DE TODO EL SITIO** (`useActiveProductSlugs`).
- 2026-08-27 — 🐛 **BUG DEL PRECIO EN LA BARRA STICKY ARREGLADO** (`ctaTotal`).
- 2026-08-27 — ⭐ **NUEVA RESEÑA REAL (Jimena C.)**, id `r16`.
- 2026-08-27 — 🔗 **DEEP LINK DE VARIANTE ARREGLADO**.
- 2026-08-27 — 🌿 **TARJETAS DE AROMA APUNTAN AL PRODUCTO CORRECTO**.
- 2026-08-27 — 🧱 **PDP COMPLETA DEL CUENCO DUNARU**.
- 2026-08-27 — 🛍️ **CUENCO DUNARU EN LA HOME**.
- 2026-08-27 — ⚖️ **TÍTULO DE LA COMPARATIVA RESTAURADO**.
- 2026-08-27 — 🧭 **`/como-funciona` REFORZADA**.
- 2026-08-27 — ✍️ **COPY DEL HERO ACTUALIZADO**.
- 2026-08-27 — 🖼️ **FOTO POR VARIANTE EN LAS TARJETAS**.
- 2026-08-27 — 🔗 **CTA HERO → `/categorias/todos`**.
- 2026-08-27 — ✨ **FRANJA DE BENEFICIOS LIMPIADA**.
- 2026-08-27 — 🎚️ **CARRUSEL-SELECTOR SOLO PARA AROMAS**.

## 5. Image Inventory
- **📐 Fotos de producto: 1122×1402 (4:5), webp.**
- Base de uploads del owner: `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/`
- **⭐ UGC RESEÑAS**: `facil` `1784238899092-acdwwacyaq` · `sala` `1787861715629-sjd49g0k2j` · `visitas` `1784238899091-zp99w7xbo5a` · `reutilizar` `-i6pb49ce8vp` · `regalo` `-0snwjx0f7w7` · `completa` `-ztn82bcfir`.
- **🏺 CUENCO DUNARU — bloques editoriales**: `1787859462824-br3pyp2cr9k` · `1787859462825-p6zo71cvpai`.
- **🏺 CUENCO DUNARU (vela)**: Marfil `biyop92l41t` + `srrf9e1v9yh` · Champagne `eb0630mux1c` + `gnvgvl9g2z6` · Ónix `9qpn00vexkt` + `bvww9lwbol`. **Cuenco suelto**: `z2wsj39j63`, `sorsudu67w`, `3wluzx3dk3o`, `as3ysmbal8e`, `wuzqds86opf`.
- **🏺 BLOQUES EDITORIALES CERÁMICA**: `1787846317152-fp7km169wu7` · `-d15my4ruzvs` · `-kecin16ha`.
- **🪞 BOWL DE ACERO (archivado)**: `1787759673455-m5x9h5ouxwf` · `-uu86xb8ars` · `-vsmlwdqns` · `-e2tr1gctjfo` · `-udq3osxrsej`.
- **🔥 4 PASOS**: `1787701006060-mdjjspbepql` · `1787699972902-6ha0kcq29g` · `-pr81fsb4jso` · `-11zjzn59pysq`.
- **🌅 HERO DESKTOP**: `1787702019949-nscqjcvsz0r.webp`. **🎬 HERO MÓVIL**: `store-videos/<STORE_ID>/hero-dunaru-mobile.mp4` + póster.
- **🕯️ RITUAL**: `1787701006060-vpgjgog2juh.webp`.
- ⛔ Deprecadas: `1785182590879-i54i3sm6qk`, `-u6xju9w4wjl`, `-77nbrytmoii`, `/paso-vierte.webp`, `/paso-renueva.webp`, `1785521743155-htw95tvbi4b`, `1785521743156-3qeskqe43gv`, `1787699972902-dld268c7c0u`, `1787701006060-xuyehajl1yr`, `public/hero-dunaru.webp`, `public/hero-dunaru-mobile.webp`.
- **🌿 FLAT-LAYS DE AROMA (4:3)**: Madera Nocturna `1787337333998-ynkiiz87l1n` · Ámbar Cristal `-44wwhmmisy5` · Costa Mineral `-jphdwvy2pbh` · Higo Matcha `-enck999sju7` · Tabaco Vainilla `-5e5poqkcxh8` · Musgo Mineral `-n7f8zqhfx8m`.
- **Casa real**: `/casa-real-{sala,comedor,recibidor,recamara}.webp`. **FAVICON**: `/favicon.png`.
- 🔴 **FALTAN: packshots 4:5 del frasco de esencia · foto del EMPAQUE NUEVO.**

## 6. Known Issues
- 2026-09-26 — 🟡 **Tests y tsc no ejecutados por el agente** (sin shell en el entorno). Vitest quedó agregado vía `lov-add-dependency` (puede haber caído en `dependencies`, no `devDependencies`). No hay script `test` en package.json: usar `npx vitest run`.
- 2026-09-26 — ℹ️ Tras el fix, eventos disparados dos veces por la MISMA ocurrencia (p. ej. StrictMode en dev) ya no se colapsan. En producción ViewContent se dispara 1 vez por carga de producto e InitiateCheckout está protegido por `useRef`.
- 2026-09-07 — 🟡 Set de slugs activos cacheado por sesión (recargar tras archivar).
- 2026-09-07 — 🟡 PDP de producto archivado sigue abriendo por URL directa.
- 2026-08-27 — 🟡 Foto de la reseña de Jimena C. (cuenco oliva fuera de catálogo).
- 2026-08-27 — 🟠 PDP del Cuenco Dunaru afirma "500 g + 30 mechas" sin confirmación.
- 2026-08-27 — 🟡 `CATALOG_FALLBACK` con precios viejos (visibles ~1 s).
- 2026-08-27 — 🟡 Hero "natural" vs "100% vegetal".
- 2026-08-27 — 🟡 Swatches del Cuenco Dunaru mal (`#101010`).
- 2026-08-27 — 🟡 Lógica de foto de variante duplicada.
- 2026-08-27 — 🟡 Flat-lays 4:3 en carrusel 4:5.
- 2026-08-27 — 🟡 Órdenes abandonadas duplicadas.
- 2026-08-25 — 🟠 Nombres nuevos no están en anuncios de Meta ni emails.
- 2026-08-25 — 🟡 `bowl-negro` y `vaso-extra-transparente` dicen "perlas dunaru".
- 2026-08-21 — 🔴 `ecommerce--update-product` NO soporta imágenes por variante.

## 7. Pending / Future Sessions
- [ALTA] **Correr tests de tracking + tsc y validar dedup en Meta Test Events.**
- [ALTA] Verificar Bowl de Acero archivado fuera de menú, footer y home.
- [ALTA] Preguntar si `bowl-espejo-de-acero` también se archiva.
- [ALTA] Revisar pauta de Meta apuntando a `/productos/vela-bowl-de-acero`.
- [ALTA] Confirmar contenido real del Cuenco Dunaru ($1,199) y corregir swatches.
- [ALTA] Packshots del frasco de esencia (4:5).
- [ALTA] Verificar flujo carrito → /pagar → volver atrás.
- [ALTA] Avisar al owner que sincronice nombres en anuncios de Meta y emails.
- [ALTA] Medir attach rate de aroma en PostHog. Crear colección `recargas`.
- [MED] `SHOP_CARDS` solo desde DB. Refactor `ProductPageUI` → `getVariantDisplayImage`. Página `/aromas`. Tiers AOV. Limpiar "perlas dunaru".
- [BAJA] B2B / wholesale. SKU sample. Banners de colección.