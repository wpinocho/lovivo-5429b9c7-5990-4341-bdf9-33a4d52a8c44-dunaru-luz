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
- 🏵️ **2026-10-09: EDICIÓN DE TEMPORADA "CEMPASÚCHIL" (Día de Muertos)** en planeación. Productos separados (no variante), colección propia, sección en la home. Se archivan al terminar la temporada. Ver §3.
- ⚠️ **STAGING**: los cambios se commitean al final del turno. Pedir refresh duro.

### 🏷️ SISTEMA DE NOMBRES (nomenclatura premium vigente)
Regla: **`[Qué es] · [Formato]`**. Nada de "Kit", "Pack" ni "Recarga".

| Slug (INTACTO) | Título en DB | Precio (DB 2026-10-09) | Compare |
|---|---|---|---|
| kit-vaso-de-vidrio | **Vela Rellenable · Vaso de Vidrio** | $749 | $899 |
| kit-vaso-de-concreto | **Vela Rellenable · Bowl de Cerámica** | $999 | $1,199 |
| **vela-rellenable-cuenco-dunaru** | **Vela Rellenable · Cuenco Dunaru** | $1,199 | — |
| vela-bowl-de-acero | **Vela Rellenable · Bowl de Acero** | $899 | ⚠️ **ARCHIVADO 2026-09-07 por la owner** |
| perlas-originales-500-g | **Cera Duna · 500 g** | $499 | — |
| reserva-1-kg | **Cera Duna · 1 kg** | **$849** | $999 |
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
- **CERA DUNA · 500 g** (`90445ca9-cf01-4e6a-a879-7487649e787c`) y **· 1 kg** (`64317fa8-9659-4201-861e-9e4dfcb068e9`): opción `Color` con `image_urls` propias.
- **KIT VASO DE VIDRIO** (`8213d069-ec98-4d52-b502-4c79de9698d5`): las 3 variantes comparten `1nbg1xmhf5uh` como imagen 1.
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
- 🏵️ Para ediciones de temporada: NO duplicar estas entradas; usar el alias `SEASONAL_BASE_SLUG` (ver §3 FASE 9).

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
- **🏠 ORDEN DE LA HOME**: hero → beneficios → **[🏵️ Día de Muertos, temporal]** → 4 pasos → "Elige tu vela" → Ritual → Reviews → Scents → Tonos → CasaReal → BrandStory → CompareTable → FAQ → newsletter.
- **🧾 El carrito SOLO se vacía cuando el pago se confirma.**

---

## 3. Active Plan — FASE 9: EDICIÓN CEMPASÚCHIL (DÍA DE MUERTOS) 🏵️

**Estado (2026-10-09)**: 📋 Planeado en Chat Mode, aprobado en concepto. ⏳ Esperando respuestas de la owner (ver 9.0). Fecha límite real: Día de Muertos 1–2 nov; entrega 2–5 días hábiles → la tienda debe estar lista **antes del 15 oct**.

### Por qué productos separados (y no una 4ª variante) — decisión
- Protagonismo: URL, foto principal, título y anuncio propios. Una variante quedaría escondida en un selector.
- Los 4 productos base quedan 100% intactos (reseñas, anuncios, URLs, variantes).
- Fin de temporada = archivar 4 productos. Menú/footer/rejilla ya respetan `status` (§2). La sección nueva y el link del menú deben hacer lo mismo (ver 9.4/9.5).

### 9.0 Preguntas abiertas a la owner (NO bloquean crear productos en borrador)
1. ¿Ya existe la cera naranja física y tiene fotos reales? ¿Qué tono exacto (hex)? → define si generamos portadas con IA (temporales) o usamos fotos reales.
2. ¿Es edición limitada real (cantidad fija)? Solo así se puede decir "edición limitada" o activar inventario. Si no, usar "edición de temporada".
3. Fecha de corte de envíos para llegar antes del 1 nov (propuesta: **pide antes del 26 de octubre**). Confirmar.
4. Precio: propuesta = **mismo precio que el producto base, SIN precio tachado** (no hay precio anterior real para un producto nuevo; regla de integridad). ¿De acuerdo?
5. ¿Aplicar a "Cera Duna Cempasúchil · 500 g" la misma promo 2 uds 10% / 3 uds 15%? (requiere price rule nueva).

### 9.1 Crear 4 productos (ecommerce create-product) — SIN variantes
Mismo precio que la base, `track_inventory: false` (salvo que 9.0.2 diga lo contrario), `status: active` (o draft hasta tener fotos), tags `["dia-de-muertos","cempasuchil","edicion-temporada", ...tags base]`. Verificar el slug resultante tras crear (si la herramienta lo genera del título, corregir con update-product).

| Slug nuevo | Título | Base (alias) | Precio |
|---|---|---|---|
| `cera-duna-cempasuchil-500-g` | Cera Duna Cempasúchil · 500 g | `perlas-originales-500-g` | $499 |
| `cera-duna-cempasuchil-1-kg` | Cera Duna Cempasúchil · 1 kg | `reserva-1-kg` | $849 |
| `vela-rellenable-cempasuchil-vaso-de-vidrio` | Vela Rellenable Cempasúchil · Vaso de Vidrio | `kit-vaso-de-vidrio` | $749 |
| `vela-rellenable-cempasuchil-cuenco-dunaru` | Vela Rellenable Cempasúchil · Cuenco Dunaru | `vela-rellenable-cuenco-dunaru` | $1,199 |

**Imágenes**: la owner pidió copiar TODAS las del producto base (ella depura después desde el Dashboard). Hacerlo, PERO:
- Las fotos con cera Marfil/Champagne/Ónix muestran otro color → ordenar al final; primero las neutras (empaque, mechas, medidas, lifestyle sin color protagonista).
- **Imagen 1 = portada naranja.** Si no hay foto real: generar 1 portada por producto con `imagegen--generate_image` usando la foto real del producto como `reference_images` (cargar skill `media.product-imagery`), cera en tono cempasúchil, 4:5 1122×1402, fondo cálido con flor de cempasúchil discreta. Marcar en §5 como TEMPORAL hasta foto real.
- Origen de las URLs (DB 2026-10-09):
  - 500 g: 18 imgs (`m4gndhjxsj`…`1uw63qn80ye`). Por variante: Marfil m4gndhjxsj/wjrp5b6unfo/0fxyjfz8hpv5/7d84s8xv6k6/5vig8ko6ums · Champagne siffm8eo71e/30mhqgzkaxn/3wya2db93dp/4od2429ynab · Ónix smwszrq34a/jictndzmx2p/pi5pwhdzvv/7h7b7ivxkfu/iilwov035y8 · neutras: qqmcg71lw2k, 1xb5mgphkap, binneg1kw2o, 1uw63qn80ye.
  - 1 kg: 19 imgs; neutras (no ligadas a variante): d4ufr9di3p? (Marfil) … neutras reales: yszeg5ljr2k, vd0moi1fdye, 3tta8f9f87, ezdaye7y0kp.
  - Vaso de Vidrio: 8 imgs; neutras: zuyxmh5y3ok, 3q6ic91u8l4, r3jfwx7yvqk, pe6rcxptc4r (1nbg1xmhf5uh = imagen compartida por las 3 variantes).
  - Cuenco Dunaru (vela): 11 imgs; neutras: ztiuazxuif, xq7an639brl, acdrhpl3z5, p29jyylwjuk, b74rpferib8.
  - Base de URL: `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/products/<id>.webp`

**Descripciones** (cargar skill `craft.copywriting`; sin guion largo; "rellenable"; nada de % soya/coco). Ángulo: el cempasúchil es la flor que guía e ilumina el camino en la ofrenda → "una luz para recordar". Respetuoso, no caricaturesco (nada de calaveritas de caricatura). Mantener los datos duros de la base (500 g, 30 mechas, 120 h, 20×6 cm, envío gratis). Borrador 500 g:
"Edición de temporada. El naranja del cempasúchil, la flor que ilumina el camino en la ofrenda, ahora en Cera Duna. 500 g de cera 100% vegetal y biodegradable en gránulos finos, con 30 mechas de algodón. Viértela en tu recipiente favorito, coloca una mecha y enciende. Hasta 120 horas de luz. Disponible solo por Día de Muertos."

### 9.2 Colección `dia-de-muertos` (create-collection)
- Nombre "Día de Muertos · Edición Cempasúchil", handle `dia-de-muertos`, descripción editorial corta. Agregar los 4 productos.
- URL: `/categorias/dia-de-muertos`. Agregar alias corto **`/dia-de-muertos`** → `<Navigate to="/categorias/dia-de-muertos" replace />` en `App.tsx` (para bio de IG y anuncios).
- `Collection.tsx`: si `handle === 'dia-de-muertos'`, encabezado editorial propio (eyebrow "Edición de temporada" en vez de "Categoría", texto de fecha de corte de envío). Opcional banner con imagen.

### 9.3 Alias de contenido (evita duplicar 5 diccionarios por slug)
- Nuevo `src/lib/seasonal.ts`:
  - `SEASONAL_BASE_SLUG: Record<string,string>` (tabla 9.1).
  - `contentSlug(slug) => SEASONAL_BASE_SLUG[slug] ?? slug`.
  - `SEASONAL_SLUGS`, `DDM_COLLECTION_HANDLE = 'dia-de-muertos'`, `DDM_SHIP_CUTOFF` (fecha, ej. '2026-10-26'), `DDM_END` ('2026-11-03').
- Usar `contentSlug()` en: `PDP_CONTENT` (ProductStorySections), `PDP_HEADLINE`/`PDP_BENEFITS` (ProductPageUI), `getIncludes()` (pdp-includes), `supportsScentAddon()` (scents.ts), `getReviews/getFeaturedReviews/getReviewStats` (reviews.ts: mismo producto en otro color → reseñas del base; es honesto porque es la misma cera y el mismo recipiente). Override solo de `PDP_HEADLINE` para las 4 con un titular de temporada.
- Si la owner prefiere NO heredar reseñas, quitar el alias solo en reviews.

### 9.4 Sección en la home `<DiaDeMuertosSection />`
- Posición: después de la franja de beneficios, antes de los 4 pasos.
- Contenido: eyebrow "Edición de temporada", H2 tipo "Cempasúchil. Una luz para recordar.", 2 líneas de copy, 4 tarjetas (foto 4:5, título y precio desde DB, link a PDP), CTA "Ver la edición" → `/dia-de-muertos`, línea de fecha de corte ("Pide antes del 26 de octubre y llega antes del 1 de noviembre", solo si la owner confirma).
- Datos: leer productos de la colección `dia-de-muertos` con `status='active'` (o filtrar `logic.products` por `SEASONAL_SLUGS`). **Si hay 0 activos → no renderizar nada** (así al archivar desaparece sola). Opcional: ocultar también después de `DDM_END`.
- Color: añadir token `--dunaru-cempasuchil` (~`28 85% 52%`) en `index.css` + tailwind, SOLO para acentos de esta sección (hairline, eyebrow, borde). No tocar la paleta base.
- Móvil-first; nada dependiente de hover.

### 9.5 Menú, footer, catálogo
- `navigation.ts`: añadir a `PRIMARY_LINKS` (primero) `{ label: "Día de Muertos", to: "/dia-de-muertos" }`. En `MainNav` ocultarlo cuando no haya ningún slug de `SEASONAL_SLUGS` activo (usar `useActiveProductSlugs`; ojo: `filterActiveLinks` usa `slugFromPath` de `/productos/`, así que este link necesita su propia condición).
- `catalog-order.ts`: nuevo grupo PRIMERO `{ id: "dia-de-muertos", label: "Edición Día de Muertos", slugs: [4 slugs] }` (los grupos vacíos ya se ocultan solos → al archivar desaparece de `/categorias/todos`).
- NO tocar `SHOP_CARDS` ("Elige tu vela") para no desplazar el catálogo base; la temporada vive en su sección propia.
- Sitemap (`public/sitemap.xml` / `scripts/generate-sitemap.ts`): añadir 4 PDPs + colección. Quitar al terminar.

### 9.6 Fin de temporada (post 2 nov)
- La owner archiva los 4 productos (y opcionalmente la colección) desde el Dashboard → sección, link de menú y grupo del catálogo desaparecen solos.
- PDPs archivadas siguen abriendo por URL directa (Known Issue). Para la temporada: en `ProductPageUI`/`Product.tsx`, si el slug está en `SEASONAL_BASE_SLUG` y el producto ya no está activo → `<Navigate>` al slug base. Evita anuncios/links viejos a página muerta.

### 9.7 QA
- 4 PDPs: contenido heredado, add-on de aroma, sticky con precio correcto, sin selector de variantes.
- Home 360 px; sección se oculta si se archivan los 4 (probar con 1 en draft).
- Carrito → /pagar con producto de temporada; Purchase/ViewContent con el nuevo product_id.
- Avisar a la owner: anuncios de Meta nuevos apuntando a `/dia-de-muertos` o a las PDPs nuevas.

### FASE 8 (sigue pendiente)
- 8.0 🔴 Correr `npx vitest run src/lib/__tests__/tracking-utils.test.ts` + `npx tsc -p tsconfig.app.json --noEmit`; validar dedup en Meta Test Events.
- 8.1 🔴 Verificación visual (Bowl de Acero archivado fuera de menú/footer/home; sticky; deep links; 360 px; video iOS; carrito → /pagar).
- 8.2 🔴 Confirmar con la owner: contenido y swatches del Cuenco Dunaru; ¿archivar `bowl-espejo-de-acero`?
- 8.3 🟡 Página `/aromas`. 8.4 🟡 Tiers AOV con nombre. 8.6 Medición secuencial con PostHog.

---

## 4. Recent Changes
- 2026-10-09 — 📋 **PLAN EDICIÓN CEMPASÚCHIL** (Chat Mode, sin cambios de código): 4 productos separados + colección `dia-de-muertos` + sección temporal en home + alias de contenido. Precios de la tabla §1 actualizados desde la DB (1 kg = $849, Bowl Cerámica = $999).
- 2026-09-26 — 📡 **FIX DEDUP META PIXEL + CAPI**: `tracking-utils.ts` ya no usa product_id/search query como event_id. ViewContent, AddToCart, Search → UUID por ocurrencia; InitiateCheckout → order_id o UUID; Purchase intacto (`order_id`). Agregado `vitest` + `src/lib/__tests__/tracking-utils.test.ts` (casos A–H).
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
- 🏵️ **CEMPASÚCHIL**: pendiente. Portadas 4:5 de los 4 productos (reales o IA temporales) + 1 imagen editorial para la sección de la home.
- 🔴 **FALTAN: packshots 4:5 del frasco de esencia · foto del EMPAQUE NUEVO.**

## 6. Known Issues
- 2026-09-26 — 🟡 **Tests y tsc no ejecutados por el agente** (sin shell en el entorno). Vitest quedó agregado vía `lov-add-dependency` (puede haber caído en `dependencies`). No hay script `test` en package.json: usar `npx vitest run`.
- 2026-09-26 — ℹ️ Tras el fix, eventos disparados dos veces por la MISMA ocurrencia (p. ej. StrictMode en dev) ya no se colapsan.
- 2026-09-07 — 🟡 Set de slugs activos cacheado por sesión (recargar tras archivar).
- 2026-09-07 — 🟡 PDP de producto archivado sigue abriendo por URL directa (para Cempasúchil se resuelve con redirect 9.6).
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
- 2026-08-21 — 🔴 `ecommerce--update-product` NO soporta imágenes por variante (no afecta Cempasúchil: van sin variantes).

## 7. Pending / Future Sessions
- [URGENTE, antes del 15 oct] **FASE 9 Edición Cempasúchil** (ver §3).
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