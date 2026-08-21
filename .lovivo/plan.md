## 1. Brand & Context
- Brand: **dunaru** (dunaru.mx). Velas perladas **rellenables**: gránulos finos de cera tipo arena + mechas de algodón.
- ⚠️ VOCABULARIO: **"rellenable"** (NO "recargable"). ⚠️ **PROHIBIDO el guion largo (—) en copy visible.**
- Tesis: no vendemos cera. Vendemos una forma simple de crear luz en el recipiente que ya tienes.
- **AROMA**: las velas nacen SIN perfume. "El aroma lo eliges tú". Desde 2026-08-21 el aroma SÍ se vende: **Esencia para Vela · 10 ml** como add-on opcional en la PDP.
- Target: mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO. Decoración, hogar, regalo. Market: México, MXN, es-MX.
- Tono: claro, cálido, directo. Registro **"high end" / editorial atmosférico**. Referencia: **sensatehomes.com**.
- ⛔ **NO es founder-led. La owner NO aparece.** Storytelling = producto, materia, manos anónimas, taller y casa.
- Pagos: **hasta 6 MSI**. ⚠️ NUNCA nombrar "Stripe" ni "Mercado Pago" en la UI.
- Envío: **GRATIS A TODO MÉXICO, SIN MÍNIMO.** WhatsApp real: `525531215386`.
- REGLA DE INTEGRIDAD: **nunca reseñas falsas** (15 reales, 4.9 vía `getReviewStats()`), **nunca precios tachados inventados**.
- ⚠️ "+200 clientes felices": dato del owner, sin verificar contra la DB.
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`
- RUTAS: producto `/productos/:slug`, paquete `/paquete/:slug`, carrito `/carrito`, checkout `/pagar`, categoría `/categorias/:handle`.
- ⚠️ **kit-vaso-de-concreto** es de **CERÁMICA**; el slug no se cambia (rompería los anuncios de Meta).
- ⚠️ **PRODUCTO ANCLA DE PAUTA = `kit-vaso-de-vidrio`.**
- ⚠️ El owner renombra y repriza desde el Dashboard. **NUNCA hardcodear precios ni títulos.**
- ⚠️ **STAGING**: los cambios se commitean al final del turno. Pedir refresh duro antes de re-implementar.

### CATÁLOGO (slugs SIEMPRE intactos)
Snapshot 2026-08-21 (fuente de verdad = la DB):
| Slug | Título | Precio | Compare | $/g |
|---|---|---|---|---|
| perlas-originales-500-g | Recarga 500 g + 30 mechas | $499 | $599 | $1.00 |
| reserva-1-kg | Recarga 1 Kg + 60 mechas | $799 | $999 | $0.80 |
| kit-vaso-de-vidrio | Kit · Vaso de Vidrio | $799 | $899 | — |
| kit-vaso-de-concreto | Kit · Bowl de Cerámica | $999 | $1,199 | — |
| d-o-de-tonos | Dúo de Tonos · 1 kg | $1,099 | $1,398 | $1.10 ⚠️ |
| tr-o-de-tonos | Trío de Tonos · 1.5 kg | $1,399 | $1,499 | $0.93 |
| bowl-negro | Bowl de Cerámica Negro | $399 | $499 | — |
| vaso-extra-transparente | Vaso de Vidrio Transparente | $249 | — | — |
| pack-30-mechas | Pack de 30 Mechas | $99 | — | — |
| esencia-para-vela-10-ml | Esencia para Vela · 10 ml | $99 | — | add-on OCULTO del catálogo |
- **ESENCIA**: id `f11fc30d-b36e-4c07-b756-79d1ecc44c71`, `track_inventory: false`, 1 opción **`Aroma`** con 6 variantes: Madera Nocturna · Ámbar Cristal · Costa Mineral · Higo Matcha · Tabaco Vainilla · Musgo Mineral. **NO existe variante "Sin aroma"** (estado virtual del componente). **Desde 2026-08-21 el producto SÍ tiene las 6 fotos** (los flat-lays, en el mismo orden que `SCENTS`). No pertenece a ninguna colección.
- ⚠️ **2026-08-21: los IDs de las variantes de la esencia CAMBIARON** al tocar `variants_config`. Carritos viejos en localStorage con los IDs anteriores pueden fallar en checkout.
- Price rule activa: `perlas-originales-500-g` → 2 uds 10% OFF, 3 uds 15% OFF.
- **CONTENIDO DE LOS KITS**: ambos = recipiente + **500 g de cera + 30 mechas**.
- **COLECCIONES ACTUALES**: `kits` (2), `recipientes` (2), `accesorios` (1). ⚠️ 4 productos sin colección: `perlas-originales-500-g`, `reserva-1-kg`, `d-o-de-tonos`, `tr-o-de-tonos`. Falta colección **`recargas`**.
- **ORDEN DE MERCHANDISING** = `src/lib/catalog-order.ts`. **Añadir ahí el slug de cada producto nuevo.**

---

## 2. Design System

### 🎨 PALETA 2026 (vigente desde 2026-08-20)
| Rol | Color | HEX | HSL | Token |
|---|---|---|---|---|
| Base clara | Warm Ivory / Bone | #F2ECE3 | 36 37% 92% | `--background`, `dunaru-marfil` |
| Superficie | Travertino | #E7DDCE | 36 34% 86% | `--muted`, `dunaru-arena` |
| Principal (firma) | Burnt Terracotta | #C55B3A | 14 55% 50% | `--secondary`, `dunaru-terracota`, `--ring` |
| Contraste oscuro | Deep Olive / Charcoal | #2F3128 | 73 10% 17% | `--foreground`, `dunaru-carbon` |
| Top bar / footer | Deep Olive oscuro | — | 75 13% 15% | `--primary`, `dunaru-onix` |
| **CTA "Comprar ahora"** | **Verde oliva vivo** | — | **75 24% 25%** | **`--dunaru-oliva-cta`** |
| **Selector de variante Y de aroma (seleccionado)** | **Verde oliva claro** | — | **75 22% 37%** | **`--dunaru-oliva-claro`** |
| Acento cálido | Saffron Gold | #D4A24A | 38 62% 56% | `--accent`, `dunaru-ambar` |
| Acento distintivo | Muted Periwinkle | #8B93B9 | 230 25% 64% | `dunaru-periwinkle` |
| Periwinkle legible | — | — | 230 27% 45% | `--dunaru-periwinkle-deep` (solo CSS) |
| Metal | Latón cepillado | — | 36 46% 50% | `dunaru-laton` |
- `dunaru-champagne` hoy es **latón 36 46% 45%**, para texto sobre fondos CLAROS.
- ⚠️ Sobre fondos oscuros usar **`dunaru-ambar`**, NUNCA `dunaru-champagne`.
- **Fuente de verdad = `src/index.css`.** Display: Instrument Serif (`font-display`) · Body/UI: Manrope (`font-body`).
- **`--radius: 0rem`**. Excepción: `rounded-field` en inputs.

### 🏷️ BADGE MSI (`.badge-msi`) y avisos MSI
Pill "Hasta 6 MSI" frosted glass + periwinkle. El aviso del checkout y el trust-icon "6 meses · Sin intereses" de la PDP son componentes DISTINTOS (siguen en champagne/ambar).

### 🖱️ ESTADOS HOVER (regla de marca)
- **Botón `default`**: reposo oliva-cta + marfil; hover terracota. En `ui/button.tsx`.
- **"Agregar al carrito" (PDP, outline)**: hover periwinkle.
- **AccordionTrigger**: hover periwinkle-deep + underline.
- **Links de texto secundarios** → hover periwinkle-deep.
- **Pills de variante (PDP y `ProductCardUI`) y chips de aroma**: seleccionado `bg-dunaru-oliva-claro text-dunaru-marfil`; no seleccionado hover `bg-dunaru-periwinkle/10` + `text-[hsl(var(--dunaru-periwinkle-deep))]`.
- **PATRÓN "INVERSIÓN MARFIL ↔ TERRACOTA"**: hero CTA, botón "Agregar" de `ProductCardUI`.
- **PATRÓN "OUTLINE TERRACOTA"**: footer y flechas del carrusel de pasos.
- **NAVEGACIÓN → PERIWINKLE** (`.nav-link*` en `index.css`).
- 🎯 Roles: **oliva = selección + CTA principal** · **periwinkle = navegación y hovers secundarios** · **terracota/marfil = hover de CTA, acción secundaria y PRECIOS de add-on**.
- ⚠️ **REGLA MÓVIL-FIRST: nada de información que dependa de `:hover`.**

### 🪨 MATERIALES / TEXTURAS (index.css, `@layer components`)
`.texture-grain` · `.texture-arena` · `.texture-travertino` · `.texture-terracota` · `.texture-ambar` (solo fondos oscuros) · `.texture-metal` · `.hairline-metal`. Fuerzan `position: relative`: **no sacarlas de `@layer components`.**

### Utilidades editoriales
`.lockup` · `.eyebrow` / `.eyebrow-light` · `.h-editorial` · `.transition-editorial` · `<Reveal>` · `.full-bleed` (no dentro de `layout="full-width"`) · `.hairline*` son DIVISORES.

### 🔢 CARRUSEL DE PASOS (`ProductStepsCarousel.tsx`)
Compartido home + PDP. Terracota + periwinkle, numeral cuadrado, dots activos terracota.

### Reglas de layout existentes
- **TOP BAR** fija en `EcommerceTemplate.tsx` (2 items), no en checkout. **HEADER OVERLAY** solo en `IndexUI`.
- **🛒 ORDEN OFICIAL DEL BUY BOX** (`ProductPageUI.tsx`): 1 título+precio+MSI+rating · 2 `PDP_BENEFITS[slug]` · 3 variantes de color · **3.5 `<ProductScentSelector />` (aroma opcional)** · 4 cantidad (o `ProductQuantityTiers`) · 5 `<DeliveryEstimate />` · 6 pago express + CTA `h-12` con precio · 7 CTA outline `h-11` "Agregar al carrito" · 8 micro-línea `Lock` · 9 badges · 10 `<PdpSocialProof />` · 11 WhatsApp · 12 acordeones cerrados.
- ⚠️ `TIER_SELECTOR_SLUGS` (solo `perlas-originales-500-g`) reemplaza el stepper.
- **💰 PRECIO EN EL CTA "COMPRAR AHORA"**: `ctaTotal` = `ctaUnitPrice * ctaQuantity + scentSelection.price`. Se muestra en TODOS los productos. La barra sticky sigue mostrando solo el precio UNITARIO sin aroma.
- `optionLabel(name, slug)` renombra "Color" → "Color de la cera", excepto en `CONTAINER_ONLY_SLUGS`.
- **📦 REGLA DE CONTENIDO EN KITS**: el primer bullet de `PDP_BENEFITS` de los kits declara qué trae la caja. NO quitar.
- **📐 RATIO DE IMAGEN DE PRODUCTO = 4:5 (1122×1402)** + `object-cover`.
- **ORDEN DE LA PDP** (`ProductStorySections.tsx`): garantías → carrusel → reseñas → bloques editoriales → tabla comparativa → FAQ → CTA de cierre.

### 🌿 SISTEMA DE AROMAS (2026-08-21)
- **`src/lib/scents.ts`** = fuente única de verdad. Exporta `SCENTS`, `SCENT_PRODUCT_SLUG`, `SCENT_OPTION_NAME` (`"Aroma"`), `SCENT_ENABLED_SLUGS`, `supportsScentAddon(slug)` y **`getScentImageByVariantName(name)`**.
- **Para activar el aroma en un producto nuevo: añade su slug a `SCENT_ENABLED_SLUGS`.** Hoy: los 6 SKUs con cera perlada.
- ⚠️ `SCENTS[].name` debe coincidir EXACTO con el valor de la variante en la DB (match por `variant.options.Aroma` con fallback a `variant.title`). **`getScentImageByVariantName` depende de esa coincidencia.**
- ⚠️ **"Inspirado en X" es descriptor secundario**: nunca entra al nombre de la variante ni al line item.
- ⚠️ `profile` ya no se pinta en el panel.
- **📐 RATIO DE LOS FLAT-LAYS DE AROMA = 4:3 (1456×1092), webp.** Panel `aspect-[4/3]` + `object-cover`.
- ⚠️ **LOS FLAT-LAYS TIENEN INGREDIENTES HASTA EL BORDE INFERIOR. No poner overlays.** Decisión firme.
- **🖼️ IMAGEN DEL AROMA EN TODO EL FLUJO (2026-08-21)** — tres capas, porque cada superficie resuelve la imagen distinto:
  1. **Carrito y drawer** (`CartSidebar`, `CartUI` leen `variant.image_urls[0] || variant.image || product.images[0]`): `ProductScentSelector` inyecta la foto del aroma elegido en el objeto que reporta al padre (`product.images = [img]`, `variant.image` + `variant.image_urls`). Los line items del carrito guardan esos objetos.
  2. **Resumen del checkout** (`useOrderItems.transformOrderItems`): nueva rama que llama `getScentImageByVariantName(variantName)` justo después de `variant_image`. Sin esto pintaba siempre la foto #1 del producto para cualquier aroma.
  3. **Confirmación** (`ThankYou.tsx`): misma helper sobre `item.variant_name`.
  - ⚠️ **`ecommerce--update-product` NO soporta imágenes por variante.** Al mandarlas dentro de `variants_config` concatena todos los campos en el `title` y regenera los IDs. Por eso las fotos por aroma se resuelven en el FRONTEND, no en la DB.
- **LOS TRES CAMINOS DE COMPRA INCLUYEN EL AROMA** (1 frasco por acción): `handleAddToCartWithAddOns` · `handleBuyNowWithScent` (directo a `/pagar`) · `ProductExpressCheckout` con prop `extraItems`.
- ⚠️ `ProductPageUI` llama `useSettings()` dos veces. No renombrar sin revisar.
- **PostHog**: eventos `scent_selected` y `scent_details_toggled`.
- **Ocultar del catálogo**: `HIDDEN_FROM_CATALOG_SLUGS` + `filterCatalogVisible()` en `src/lib/catalog-order.ts`.

### 🗂️ CATÁLOGO `/categorias/:handle`
`catalog-order.ts` ordena en ambos caminos; `todos` renderiza 4 grupos con `.hairline` + `<h2 class="eyebrow">`.

### 🧾 CHECKOUT (`CheckoutUI.tsx`) — 🔒 no se toca, solo hereda tokens.

---

## 3. Active Plan — REDISEÑO "HIGH END" (Sensate)

**Estado**: ✅ Fases 1, 2, 2.5–2.11, 3.7, 3.12 · ✅ Sistema de aromas completo (3 caminos de compra + 6 imágenes) · ✅ 3.13–3.16 · ✅ **3.17 Imagen del aroma en carrito, checkout y confirmación (2026-08-21)** · 🔜 **SIGUIENTE: verificar el flujo completo con refresh duro + medir attach rate** · ⏭️ Resto de Fase 3 y Fase 4 pendientes.

### 3.0 REGLA MAESTRA
Elevar las **superficies de marca**, no tocar la **maquinaria de conversión**.
- 🔒 No tocar: buy box (orden), checkout, `DeliveryEstimate`, `PdpSocialProof`, avisos MSI, envío gratis, WhatsApp.

### 3.17 ✅ FOTO DE CADA ESENCIA EN TODO EL FLUJO (2026-08-21)
- La esencia salía sin foto en el carrito porque el producto no tenía `images` en la DB.
- Se subieron las 6 fotos al producto (orden = orden de `SCENTS`) y se resuelve la foto del aroma exacto en carrito, checkout y ThankYou.
- 🔜 Falta: packshots reales del frasco (hoy se usan los flat-lays de ingredientes).

### 3.8 FASE 3 — PDP — RESTANTE
1. Galería a sangre en móvil, sin borde ni radius.
2. Título a lockup; precio en `font-body`, discreto.
3. Acordeones con lenguaje de ritual.
4. **"Combina bien con"**: reutilizar `ProductAddOns` (hoy `ADDON_MAP` vacío) para cross-sell real.
5. `<RitualSection />` al cierre de la PDP.
6. Barrer eyebrows viejos → `.eyebrow`; texturas en las secciones de historia.
7. ~~Selector de variantes~~ ✅ HECHO.
8. Migrar `ProductStorySections.tsx` de `dunaru-champagne` a terracota/periwinkle.
9. Unificar el bloque de trust-icons "6 meses sin intereses".

### 3.9 FASE 4 — Arte y fotografía (LA PALANCA MÁS GRANDE)
Imágenes atmosféricas nocturnas, ⛔ SIN ROSTROS. Slots: hero desktop/móvil, fondo de `RitualSection`, 3 ambientes de "Elige tu tono", imagen de `BrandStorySection`.
~~6 flat-lays de aroma~~ ✅ HECHO. Falta: **packshots del frasco de esencia** (4:5).

### 3.11 Medición
Volumen insuficiente para A/B (122 usuarios/mes en la PDP principal). Medición secuencial con `posthog-query`. Si el ATC móvil cae por debajo de 3.5%, revertir densidad primero.

---

## 4. Recent Changes
- 2026-08-21 — 🖼️ **Cada esencia muestra SU foto en carrito, checkout y confirmación** (3.17). Producto de esencias con 6 imágenes en la DB + `getScentImageByVariantName()`.
- 2026-08-21 — ⚠️ Al intentar imágenes por variante, `ecommerce--update-product` deformó las variantes de la esencia; se restauraron (IDs nuevos).
- 2026-08-21 — 💰 El CTA "Comprar ahora" muestra el total en TODOS los productos (3.16).
- 2026-08-21 — 👁️ Detalles del aroma ABIERTOS por default (3.15) + chip `+ $99 · 10 ml`.
- 2026-08-21 — 💲 Precio del aroma con jerarquía propia (3.14).
- 2026-08-21 — 📏 Panel de aroma compactado (3.13).
- 2026-08-21 — 🖼️ Los 6 flat-lays de aroma ya viven en el selector de la PDP.
- 2026-08-21 — 🍎 El pago express (Apple/Google Pay) ya incluye la esencia (`extraItems`).
- 2026-08-21 — ⚡ "Comprar ahora" con aroma va DIRECTO al checkout.
- 2026-08-21 — 🌿 SISTEMA DE AROMAS COMPLETO.
- 2026-08-21 — 🧵 Add-on de mechas retirado de la PDP.
- 2026-08-21 — 🟢 Pills de variante seleccionada en `ProductCardUI.tsx` a `dunaru-oliva-claro`.
- 2026-08-21 — 🗂️ Orden curado del catálogo.
- 2026-08-21 — 🧱 Descripciones de los KITS corregidas en la DB.
- 2026-08-20 — 🖱️ Hovers periwinkle en accordions, links y pills (Fase 2.11).

## 5. Image Inventory
- **📐 Fotos de producto: 1122×1402 px (4:5), webp.** 10 productos; **la esencia ya tiene 6 imágenes** (los flat-lays 4:3, provisionales).
- **🌿 FLAT-LAYS DE AROMA (4:3, 1456×1092, webp)** — base `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/`:
  - Madera Nocturna → `1787337333998-ynkiiz87l1n.webp`
  - Ámbar Cristal → `1787337333997-44wwhmmisy5.webp`
  - Costa Mineral → `1787337333998-jphdwvy2pbh.webp`
  - Higo Matcha → `1787337333998-enck999sju7.webp`
  - Tabaco Vainilla → `1787337333998-5e5poqkcxh8.webp`
  - Musgo Mineral → `1787337333998-n7f8zqhfx8m.webp`
  - ⚠️ Ingredientes hasta el borde inferior. **No overlays.** Mismo orden en `SCENTS` y en `product.images` de la esencia: **si se reordena una lista, reordenar la otra.**
- ⚠️ Foto #1 de `perlas-originales-500-g` = `x3azemqdof.webp`. Candidata #1 a reemplazo.
- Colecciones sin imagen. **FAVICON**: `/favicon.png` (256×256).
- **UGC de clientas** (5 fotos): constante `UGC` en `src/data/reviews.ts`.
- **Hero**: `/hero-dunaru.webp` · `/hero-dunaru-mobile.webp`. **Casa real**: `/casa-real-{sala,comedor,recibidor,recamara}.webp`.
- **4 PASOS**: Vierte `/paso-vierte.webp` · Inserta `1785521743155-htw95tvbi4b.webp` · Enciende `1785521743156-3qeskqe43gv.webp` · Renueva `/paso-renueva.webp`.
- 🔴 **FALTAN: (a) packshots 4:5 del frasco de esencia; (b) imágenes atmosféricas nocturnas de la Fase 4; (c) video demo.**
- 🟡 Los `steps` de `kit-vaso-de-concreto` siguen con `PLACEHOLDER`. 🟡 `/pdp-vaso-decor.webp` huérfana.
- ⛔ Descartadas por el owner: `1786132713652-czg3jwwtcrv.webp` y `1786129807292-5eb2uq5pl0m.webp`.

## 6. Known Issues
- 2026-08-21 — 🔴 **`ecommerce--update-product` NO soporta imágenes por variante.** Mandarlas en `variants_config` concatena los campos en el `title` y **regenera los IDs de variante**. No repetir.
- 2026-08-21 — 🟠 **Los IDs de las variantes de la esencia cambiaron hoy**: un carrito guardado antes de las 20:35 con esencia puede fallar al crear checkout. Se resuelve vaciando el carrito.
- 2026-08-21 — 🟡 **Las fotos de la esencia son flat-lays de ingredientes 4:3**, no packshots del frasco: en el thumbnail cuadrado del carrito se recortan.
- 2026-08-21 — 🟡 La barra sticky de la PDP muestra el precio unitario sin aroma.
- 2026-08-21 — 🟠 El panel de aroma abierto por default empuja el CTA en móvil. Sin medir.
- 2026-08-21 — 🟡 Chip de aroma de 3 líneas sin verificar en 360 px.
- 2026-08-21 — 🟡 Pago express con esencia sin probar en device real.
- 2026-08-21 — 🟡 Aroma limitado a 1 frasco por acción (MVP).
- 2026-08-21 — 🟡 `ProductPageUI` llama `useSettings()` dos veces.
- 2026-08-21 — 🟠 4 de 9 productos sin colección → falta "Recargas" en el menú.
- 2026-08-21 — 🟡 `catalog-order.ts` y `scents.ts` son listas manuales.
- 2026-08-20 — 🟠 `ProductStorySections.tsx` sigue en `dunaru-champagne`.
- 2026-08-20 — 🟠 Bloque de trust-icons "6 meses sin intereses" en champagne/ambar.
- 2026-08-20 — 🟠 Paleta nueva sin auditar en carrito ni checkout.
- 2026-08-20 — 🟡 Texturas aún no aplicadas en PDP ni en `CasaRealSection`.
- 2026-08-20 — 🟡 Los hex de `TONOS` en la landing son colores REALES de la cera.
- 2026-08-07 — 🔴 `perlas-originales-500-g` se llama "Recarga" y recibe el grueso del tráfico frío de Meta.
- 2026-08-07 — 🟠 Escalera de precio por gramo rota: Dúo 1 kg ($1.10/g) vs Reserva 1 kg ($0.80/g).
- 2026-08-07 — 🟡 `getReviewStats()` es global (4.9/15), no por SKU.
- 2026-08-07 — 🟠 Slug `kit-vaso-de-concreto` incorrecto (es cerámica).
- 2026-08-07 — 🟡 `ShippingPromise` asume envío gratis cuando `shippingCost === 0`.
- 2026-08-07 — 🟠 Títulos del catálogo en la DB con guion largo.
- 2026-08-07 — 🟡 `PDP_BENEFITS` solo cubre 6 slugs.
- 2026-07-31 — 🟠 Footer de `EcommerceTemplate.tsx`: 3 nombres de producto hardcodeados.
- 2026-07-31 — 🔴 `ecommerce--update-product` NO persiste `compare_at_price`. Workaround: Dashboard manual.
- 2026-07-31 — 🟡 `lov-search-files` devuelve resultados falsos o vacíos. **Verificar SIEMPRE con `lov-view`.**
- 2026-07-31 — 🟡 Autocapture de clics desactivado en PostHog.
- 2026-07-06 — 🔴 `meta-capi` edge function falla en preview.

## 7. Pending / Future Sessions
- [ALTA] **Probar el flujo completo con aroma tras refresh duro**: PDP → carrito (foto correcta) → /pagar (foto correcta) → orden.
- [ALTA] **Packshots del frasco de esencia (4:5)** y sustituir los flat-lays como imágenes del producto.
- [ALTA] **Verificar el total del CTA en `perlas-originales-500-g`** con 2 y 3 bolsas + aroma.
- [ALTA] **Medir el impacto del panel abierto por default** y el **attach rate de aroma** en PostHog.
- [ALTA] **Verificar en móvil (360 px)** el chip de 3 líneas.
- [ALTA] **Probar Apple Pay / Google Pay con esencia en device real.**
- [ALTA] **Crear la colección `recargas`** y añadirla al menú (requiere OK del owner).
- [ALTA] **Resto de FASE 3 (PDP)** y **auditar la paleta en carrito y checkout**.
- [ALTA] **FASE 4 (fotos atmosféricas nocturnas)**, sin rostros.
- [ALTA] Capturar baseline de PostHog. P0 de la PDP de perlas.
- [MED] Reflejar el aroma en el precio de la barra sticky.
- [MED] Descripción y SEO propios de la PDP de la esencia.
- [MED] Fotos reales para los `steps` de kit-vaso-de-concreto.
- [BAJA] Banners de colección y borrar imágenes huérfanas.