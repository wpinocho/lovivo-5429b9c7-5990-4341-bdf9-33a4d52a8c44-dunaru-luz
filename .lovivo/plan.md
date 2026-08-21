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
- **ESENCIA**: id `f11fc30d-b36e-4c07-b756-79d1ecc44c71`, `track_inventory: false`, 1 opción **`Aroma`** con 6 variantes: Madera Nocturna · Ámbar Cristal · Costa Mineral · Higo Matcha · Tabaco Vainilla · Musgo Mineral. **NO existe variante "Sin aroma"** (es estado virtual del componente). **El producto en la DB sigue sin imágenes** (los flat-lays viven en `scents.ts`, no en el producto). No pertenece a ninguna colección.
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
- 🎯 Roles: **oliva = selección + CTA principal** · **periwinkle = navegación y hovers secundarios** · **terracota/marfil = hover de CTA y acción secundaria**.
- ⚠️ **REGLA MÓVIL-FIRST: nada de información que dependa de `:hover`.** El grueso del tráfico es móvil desde Meta. El hover solo puede añadir refinamiento, nunca revelar contenido necesario para decidir.

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
- `optionLabel(name, slug)` renombra "Color" → "Color de la cera", excepto en `CONTAINER_ONLY_SLUGS`.
- **📦 REGLA DE CONTENIDO EN KITS**: el primer bullet de `PDP_BENEFITS` de los kits declara qué trae la caja. NO quitar.
- **📐 RATIO DE IMAGEN DE PRODUCTO = 4:5 (1122×1402)** + `object-cover`.
- **ORDEN DE LA PDP** (`ProductStorySections.tsx`): garantías → carrusel → reseñas → bloques editoriales → tabla comparativa → FAQ → CTA de cierre.

### 🌿 SISTEMA DE AROMAS (2026-08-21)
- **`src/lib/scents.ts`** = fuente única de verdad. Exporta `SCENTS` (name, inspiredBy, profile, description, recommendedFor, notes[], imageUrl), `SCENT_PRODUCT_SLUG`, `SCENT_OPTION_NAME` (`"Aroma"`), `SCENT_ENABLED_SLUGS`, `supportsScentAddon(slug)` y la constante privada `SCENT_IMG` (base de Supabase para los flat-lays).
- **Para activar el aroma en un producto nuevo: añade su slug a `SCENT_ENABLED_SLUGS`. Nada más.** Hoy: los 6 SKUs con cera perlada. Excluidos: `bowl-negro`, `vaso-extra-transparente`, `pack-30-mechas`.
- ⚠️ `SCENTS[].name` debe coincidir EXACTO con el valor de la variante en la DB (match por `variant.options.Aroma` con fallback a `variant.title`).
- ⚠️ **"Inspirado en X" es descriptor secundario**: nunca entra al nombre de la variante ni al line item. **Y el prefijo "Inspirado en" NO se quita del chip** (claridad + seguridad legal frente a las marcas originales).
- **📐 RATIO DE LOS FLAT-LAYS DE AROMA = 4:3 (1456×1092), webp.** El panel usa `aspect-[4/3]` + `object-cover`.
- ⚠️ **LOS FLAT-LAYS TIENEN INGREDIENTES HASTA EL BORDE INFERIOR** (Tabaco Vainilla, Higo Matcha, Musgo Mineral). **No poner overlays, degradados ni chips encima de la imagen**: taparían justo la materia que justifica el +$99.
- **`ProductScentSelector.tsx`**: título "AGREGA AROMA · OPCIONAL" + toggle "Conoce los aromas". Grid `grid-cols-2`, chip "Sin aroma" a `col-span-2`. `role="radiogroup"`. Panel expandido con imagen 4:3 del aroma seleccionado (si `imageUrl` es null no renderiza nada).
- **LOS TRES CAMINOS DE COMPRA YA INCLUYEN EL AROMA** (1 frasco por acción):
  1. **"Agregar al carrito"** → `handleAddToCartWithAddOns`: producto + `addItem(esencia)` como línea separada.
  2. **"Comprar ahora"** → `handleBuyNowWithScent`: NO pasa por el carrito. Construye `buyNowItems` con DOS líneas, `createCheckoutFromCart` → `saveCheckoutState` → `clearCart` → `sessionStorage` (`checkout_cart` / `checkout_order` / `checkout_order_id`) → `navigate('/pagar')`. Sin aroma delega en `logic.handleBuyNow()`.
  3. **Pago express Apple Pay / Google Pay** → `ProductExpressCheckout` acepta prop **`extraItems?: CartItem[]`**. `ProductPageUI` le pasa `scentExtraItems` (useMemo sobre `scentSelection`). Dentro del componente, `extras` (useMemo con clave estable `extrasKey`) alimenta: total del wallet, `buildDisplayItems(shipCents)`, items de `shipping-rates`, `buyNowItems` de `createCheckoutFromCart`, `validation_data.items` y el `trackPurchase`.
- El precio de los CTAs suma `scentSelection.price`. Ambos CTAs (buy box y sticky móvil) muestran "Procesando..." con `isBuyingNowWithScent || logic.isBuyingNow`.
- ⚠️ `ProductPageUI` llama `useSettings()` dos veces (alias `checkoutCurrency` arriba; `storeName/currencyCode` más abajo). No renombrar sin revisar.
- **PostHog**: eventos `scent_selected` y `scent_details_toggled`.
- **Ocultar del catálogo**: `HIDDEN_FROM_CATALOG_SLUGS` + `filterCatalogVisible()` en `src/lib/catalog-order.ts`, aplicado en `Collection.tsx`.

### 🗂️ CATÁLOGO `/categorias/:handle`
`catalog-order.ts` ordena en ambos caminos; `todos` renderiza 4 grupos con `.hairline` + `<h2 class="eyebrow">`. Orden: Empieza aquí → Cera perlada → Colecciones de tonos → Recipientes y accesorios.

### 🧾 CHECKOUT (`CheckoutUI.tsx`) — 🔒 no se toca, solo hereda tokens.

---

## 3. Active Plan — REDISEÑO "HIGH END" (Sensate)

**Estado**: ✅ Fases 1, 2, 2.5–2.11, 3.7, 3.12 · ✅ Sistema de aromas completo con los 3 caminos de compra y sus 6 imágenes editoriales (2026-08-21) · 🔜 **SIGUIENTE: 3.13 Compactar el panel de aroma** · ⏭️ Resto de Fase 3 y Fase 4 pendientes.

### 3.0 REGLA MAESTRA
Elevar las **superficies de marca**, no tocar la **maquinaria de conversión**.
- 🔒 No tocar: buy box (orden), checkout, `DeliveryEstimate`, `PdpSocialProof`, avisos MSI, envío gratis, WhatsApp.

### 3.13 🔜 COMPACTAR EL PANEL DE AROMA (decidido 2026-08-21, PENDIENTE DE IMPLEMENTAR)

**Problema real (diagnóstico):** el panel expandido no es largo por la imagen, es largo por **redundancia semántica**. Hoy dice lo mismo cuatro veces:
| Capa | Ejemplo (Tabaco Vainilla) | Veredicto |
|---|---|---|
| `profile` | "CÁLIDO · DULCE · PROFUNDO" | ❌ redundante con description + notes |
| `description` | "Tabaco dulce, vainilla oscura y miel sobre un fondo cálido de madera y especias." | ✅ se queda (sensorial, de marca) |
| `recommendedFor` | "un aroma cálido, intenso y acogedor." | ✅ se queda (es lo que ayuda a DECIDIR) |
| `notes` (6 chips en caja, 2 filas) | Tabaco · Vainilla · Miel · Jengibre · Tonka · Cedro | ✅ contenido sí, formato ❌ |

Altura estimada actual del panel en móvil: **~600 px**. Objetivo: **~360-400 px**, sin esconder nada útil.

**IDEAS DEL OWNER — VEREDICTO RAZONADO (no implementar tal cual):**
1. ❌ **Hover con máscara sobre la imagen.** Rechazado: el grueso del tráfico es móvil (Meta) y en touch el hover no existe. Escondería la ayuda de decisión justo en el momento de decidir, y una máscara arruina el flat-lay, que es el activo que justifica el +$99.
2. ❌ **Chips de notas dentro de la imagen (abajo).** Rechazado: en Tabaco Vainilla, Higo Matcha y Musgo Mineral hay ingredientes pegados al borde inferior. El scrim taparía exactamente la materia que queremos mostrar, y la legibilidad varía foto a foto.
3. ✅ **"Hay demasiada información en la tarjeta".** CORRECTO. Esa es la palanca: quitar la capa redundante y aligerar el formato de las notas.

**IMPLEMENTACIÓN — `src/components/ProductScentSelector.tsx` (panel expandido, líneas ~239-302):**
1. **Eliminar la línea `profile`** del render (líneas 273-275). NO borrar el campo de `scents.ts` (puede servir en la PDP directa de la esencia); solo dejar de pintarlo en el panel.
2. **Notas: de 6 chips en caja a UNA línea inline.** Sustituir el bloque `pt-1` + `.hairline` + `<ul>` de chips por una sola línea de texto:
   `Tabaco · Vainilla · Miel · Jengibre · Tonka · Cedro`
   Estilo sugerido: `text-[11px] tracking-[0.08em] text-foreground/60 leading-relaxed`, precedida de un micro-label `NOTAS` (`text-[10px] uppercase tracking-[0.16em] text-dunaru-terracota`) en la misma línea o justo encima. Quitar el `.hairline`. Ahorro: ~80 px y mucho ruido visual.
3. **Apretar el ritmo vertical**: contenedor `space-y-3` → `space-y-2.5`; `p-4` → `p-3.5`. Título `text-xl` → `text-lg`.
4. **Layout de 2 columnas en desktop.** Envolver imagen + texto en `sm:grid sm:grid-cols-[minmax(0,44%)_1fr] sm:gap-4 sm:items-start`. Móvil sigue apilado (imagen arriba). En desktop la altura del panel baja ~45% y se ve más editorial.
5. **La imagen NO se toca**: sigue 4:3, `object-cover`, `width/height` fijos, sin overlays. Es el activo que vende.
6. Mantener intactos los eventos PostHog `scent_details_toggled` y `scent_selected`.

**NO se toca en este cambio:** el grid de chips de selección (los 7 botones), el copy de `scents.ts`, ni el orden del buy box. El chip conserva el prefijo "Inspirado en" (seguridad legal).

**Criterio de éxito:** el CTA "Comprar ahora" debe quedar visible o a menos de un scroll corto cuando el panel está abierto en un iPhone estándar. Verificar con screenshot en móvil después de implementar.

### 3.8 FASE 3 — PDP — RESTANTE
1. Galería a sangre en móvil, sin borde ni radius.
2. Título a lockup; precio en `font-body`, discreto.
3. Acordeones con lenguaje de ritual: `El ritual` · `Cuidado y seguridad` · `Materiales y medidas` · `Atención a clientes`.
4. **"Combina bien con"**: reutilizar `ProductAddOns` (hoy con `ADDON_MAP` vacío) para cross-sell real (recarga sobre kit), no mechas.
5. `<RitualSection />` al cierre de la PDP.
6. Barrer eyebrows viejos → `.eyebrow`; aplicar texturas a las secciones de historia.
7. ~~Selector de variantes~~ ✅ HECHO.
8. Migrar `ProductStorySections.tsx` de `dunaru-champagne` a terracota/periwinkle.
9. Unificar el bloque de trust-icons "6 meses sin intereses" con terracota/periwinkle.

### 3.9 FASE 4 — Arte y fotografía (LA PALANCA MÁS GRANDE)
Imágenes atmosféricas nocturnas, ⛔ SIN ROSTROS. Slots: hero desktop/móvil, fondo de `RitualSection`, 3 ambientes de "Elige tu tono", imagen de `BrandStorySection`.
~~6 flat-lays de aroma~~ ✅ HECHO (entregados por el owner). Falta: **packshots del frasco de esencia** (4:5) para la PDP directa del producto.

### 3.11 Medición
Volumen insuficiente para A/B (122 usuarios/mes en la PDP principal). Medición secuencial con `posthog-query`. Si el ATC móvil cae por debajo de 3.5%, revertir densidad primero.

---

## 4. Recent Changes
- 2026-08-21 — 🖼️ **Los 6 flat-lays de aroma ya viven en el selector de la PDP.** Imágenes del owner (4:3, webp) mapeadas una a una en `SCENTS[].imageUrl` vía la constante `SCENT_IMG`. El panel pasó de `aspect-[16/9]` a `aspect-[4/3]` con `width/height` para evitar CLS y alt descriptivo.
- 2026-08-21 — 🍎 **El pago express (Apple/Google Pay) ya incluye la esencia.** Nueva prop `extraItems` en `ProductExpressCheckout`.
- 2026-08-21 — ⚡ **"Comprar ahora" con aroma va DIRECTO al checkout** vía `handleBuyNowWithScent`.
- 2026-08-21 — 🌿 **SISTEMA DE AROMAS COMPLETO.** Producto `esencia-para-vela-10-ml` en DB ($99, 6 variantes), `src/lib/scents.ts`, `ProductScentSelector.tsx`, integración en `ProductPageUI`, ocultamiento del catálogo.
- 2026-08-21 — 🧵 **Add-on de mechas retirado de la PDP**: `ADDON_MAP` vaciado.
- 2026-08-21 — 🟢 Pills de variante seleccionada en `ProductCardUI.tsx` a `dunaru-oliva-claro`.
- 2026-08-21 — 🗂️ Orden curado del catálogo (`src/lib/catalog-order.ts` + `Collection.tsx` agrupado).
- 2026-08-21 — 🧱 Descripciones de los KITS corregidas en la DB con formato "Incluye: A + B + C".
- 2026-08-21 — 📦 Contenido explícito de los kits en `PDP_BENEFITS`.
- 2026-08-21 — 🫒 Token `--dunaru-oliva-claro` para el selector de variante.
- 2026-08-20 — 🖱️ Hovers periwinkle en accordions, links y pills (Fase 2.11).
- 2026-08-20 — 🏷️ Badge "Hasta 6 MSI" frosted glass + periwinkle.
- 2026-08-20 — 🔢 Carrusel "Crea tu vela en 4 pasos" a terracota + periwinkle.
- 2026-08-20 — 🟢 CTA "Comprar ahora" oliva con hover terracota.
- 2026-08-20 — 🎴 `ProductCardUI` a la paleta 2026.

## 5. Image Inventory
- **📐 Fotos de producto: 1122×1402 px (4:5), webp.** 10 productos (la esencia aún SIN imágenes en la DB).
- **🌿 FLAT-LAYS DE AROMA (4:3, 1456×1092, webp)** — base `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/`:
  - Madera Nocturna → `1787337333998-ynkiiz87l1n.webp`
  - Ámbar Cristal → `1787337333997-44wwhmmisy5.webp`
  - Costa Mineral → `1787337333998-jphdwvy2pbh.webp`
  - Higo Matcha → `1787337333998-enck999sju7.webp`
  - Tabaco Vainilla → `1787337333998-5e5poqkcxh8.webp`
  - Musgo Mineral → `1787337333998-n7f8zqhfx8m.webp`
  - ⚠️ Composición: ingredientes hasta el borde inferior en varias. **No overlays.**
- ⚠️ Foto #1 de `perlas-originales-500-g` = `x3azemqdof.webp`. Candidata #1 a reemplazo.
- Colecciones sin imagen. **FAVICON**: `/favicon.png` (256×256).
- **UGC de clientas** (5 fotos): constante `UGC` en `src/data/reviews.ts`.
- **Hero**: `/hero-dunaru.webp` · `/hero-dunaru-mobile.webp`. **Casa real**: `/casa-real-{sala,comedor,recibidor,recamara}.webp`.
- **4 PASOS** — misma base de Supabase: Vierte `/paso-vierte.webp` · Inserta `1785521743155-htw95tvbi4b.webp` · Enciende `1785521743156-3qeskqe43gv.webp` · Renueva `/paso-renueva.webp`.
- 🔴 **FALTAN: (a) packshots 4:5 del frasco de esencia para la PDP del producto; (b) imágenes atmosféricas nocturnas de la Fase 4; (c) video demo del mecanismo.**
- 🟡 Los `steps` de `kit-vaso-de-concreto` siguen con `PLACEHOLDER`. 🟡 `/pdp-vaso-decor.webp` huérfana.
- ⛔ Descartadas por el owner: `1786132713652-czg3jwwtcrv.webp` y `1786129807292-5eb2uq5pl0m.webp`.

## 6. Known Issues
- 2026-08-21 — 🟠 **El panel de aroma expandido mide ~600 px en móvil y empuja el CTA fuera de pantalla.** Plan de compactación en 3.13. Causa: 4 capas de copy redundantes + 6 chips de notas en caja.
- 2026-08-21 — 🟡 **La imagen del aroma solo se ve si el usuario abre "Conoce los aromas"**. Si el attach rate es bajo, considerar auto-expandir el panel al seleccionar un aroma (empuja el CTA hacia abajo: medir antes; hacerlo DESPUÉS de compactar el panel, no antes).
- 2026-08-21 — 🟡 **En el pago express, la esencia se ve en el sheet del wallet como línea propia**. Sin probar en device real todavía.
- 2026-08-21 — 🟡 **La esencia no tiene imágenes en la DB**: su PDP directa se ve pobre. Oculta de grids pero indexable.
- 2026-08-21 — 🟡 **Aroma limitado a 1 frasco por acción** (decisión de MVP), en los tres caminos de compra.
- 2026-08-21 — 🟡 `ProductPageUI` llama `useSettings()` dos veces y la segunda está después de early returns (patrón heredado). No romper el alias `checkoutCurrency`.
- 2026-08-21 — 🟠 4 de 9 productos sin colección → falta la categoría "Recargas" en el menú.
- 2026-08-21 — 🟡 `catalog-order.ts` y `scents.ts` son listas manuales: un SKU nuevo del Dashboard cae en "Más de dunaru" y sin aroma hasta añadir su slug.
- 2026-08-20 — 🟠 `ProductStorySections.tsx` sigue en `dunaru-champagne` (Fase 3 punto 8).
- 2026-08-20 — 🟠 Bloque de trust-icons "6 meses sin intereses" sigue en champagne/ambar.
- 2026-08-20 — 🟠 Paleta nueva sin auditar en carrito ni checkout.
- 2026-08-20 — 🟡 Texturas aún no aplicadas en PDP ni en `CasaRealSection`.
- 2026-08-20 — 🟡 Los hex de `TONOS` en la landing son colores REALES de la cera: no se cambian.
- 2026-08-20 — 🟠 Riesgo: bajar densidad puede reducir el ATC móvil (hoy 4.1%). Sin baseline capturado.
- 2026-08-07 — 🔴 `perlas-originales-500-g` se llama "Recarga" y recibe el grueso del tráfico frío de Meta.
- 2026-08-07 — 🟠 Escalera de precio por gramo rota: Dúo 1 kg ($1.10/g) vs Reserva 1 kg ($0.80/g).
- 2026-08-07 — 🟡 `getReviewStats()` es global (4.9/15), no por SKU.
- 2026-08-07 — 🟠 Slug `kit-vaso-de-concreto` incorrecto (es cerámica). Se deja por los anuncios de Meta.
- 2026-08-07 — 🟡 `ShippingPromise` asume envío gratis cuando `shippingCost === 0`.
- 2026-08-07 — 🟠 Títulos del catálogo en la DB con guion largo.
- 2026-08-07 — 🟡 `PDP_BENEFITS` solo cubre 6 slugs.
- 2026-07-31 — 🟠 Footer de `EcommerceTemplate.tsx`: 3 nombres de producto hardcodeados.
- 2026-07-31 — 🔴 `ecommerce--update-product` NO persiste `compare_at_price`. Workaround: Dashboard manual.
- 2026-07-31 — 🟡 `lov-search-files` devuelve resultados falsos o vacíos. **Verificar SIEMPRE con `lov-view`.**
- 2026-07-31 — 🟡 Autocapture de clics desactivado en PostHog.
- 2026-07-06 — 🔴 `meta-capi` edge function falla en preview.

## 7. Pending / Future Sessions
- [ALTA] **3.13 Compactar el panel de aroma** (quitar `profile`, notas inline, 2 columnas en desktop, ritmo vertical). Verificar con screenshot móvil.
- [ALTA] **Probar en device real**: PDP con aroma → Apple Pay / Google Pay → verificar total y que la orden tenga las dos líneas.
- [ALTA] **Medir el attach rate de aroma** en PostHog (`scent_selected` → orden) y el uso de `scent_details_toggled`.
- [ALTA] **Packshots del frasco de esencia (4:5)** para la PDP del producto en la DB.
- [ALTA] **Crear la colección `recargas`** y añadirla al menú del header (requiere OK del owner).
- [ALTA] **Resto de FASE 3 (PDP)**: galería a sangre, título lockup, acordeones de ritual, "Combina bien con", `RitualSection`, texturas, migración de champagne.
- [ALTA] **Auditar la paleta nueva en carrito y checkout**.
- [ALTA] **FASE 4 (fotos atmosféricas nocturnas)**, sin rostros.
- [ALTA] Capturar baseline de PostHog (ATC móvil, scroll depth, CTR de tarjeta).
- [ALTA] P0 de la PDP de perlas (renombrar sin "Recarga", foto #1 = resultado, tiers como "elige tus tonos").
- [ALTA] `PDP_BENEFITS` para bowl-negro, vaso-extra-transparente y pack-30-mechas.
- [ALTA] Footer de `EcommerceTemplate.tsx`: nombres de producto → dinámicos.
- [MED] Descripción y SEO propios de la PDP de la esencia.
- [MED] Aplicar `texture-*` en `CasaRealSection` y en las secciones de historia de la PDP.
- [MED] Fotos reales para los `steps` de kit-vaso-de-concreto.
- [MED] Encuesta PostHog de salida en `/pagar` y en la PDP de perlas.
- [MED] Barrer guiones largos (—) en copy, incluidos títulos de producto en la DB.
- [BAJA] Banners de colección y borrar imágenes huérfanas.