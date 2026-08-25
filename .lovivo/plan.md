## 1. Brand & Context
- Brand: **dunaru** (dunaru.mx). Velas **rellenables** de **Cera Duna**: gránulos vegetales finos tipo arena + mechas de algodón.
- ⚠️ VOCABULARIO: **"rellenable"** (NO "recargable"). ⚠️ **PROHIBIDO el guion largo (—) en copy visible.**
- **Cera Duna** = nombre propietario de la cera (vegetal, en gránulos, sin parafina). Ya migrado en `IndexUI`, `BrandStorySection`, `ProductPageUI`, `ProductStorySections`, `ProductScentSelector`, `catalog-order`, `pdp-includes`. ⚠️ Falta en los TÍTULOS DE LA DB (Dúo/Trío dicen "Cera Perlada") → los cambia el owner desde el Dashboard.
- 🆕 **2026-08-25 (owner): la cera es 100% VEGETAL, BIODEGRADABLE Y ECOLÓGICA.** Claim aprobado: **"Cera 100% vegetal y biodegradable"**. ⛔ NO usar porcentajes de soya/coco (sin confirmar). Ya está en: barra de credenciales de la home, FAQ de la home, `BrandStorySection`, `CompareTable`, `pdp-includes`.
- Tesis: no vendemos cera. Vendemos una forma simple de crear luz en el recipiente que ya tienes.
- **AROMA**: la cera nace neutra. Add-on **Esencia para Vela · 10 ml** ($99) en la PDP. **1 frasco de 10 ml perfuma 500 g de cera** (`SCENT_YIELD_GRAMS`). El copy viejo de DIY ya fue eliminado.
- Target: mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO. Market: México, MXN, es-MX.
- Tono: claro, cálido, directo. Registro **editorial premium**. Referencias: **sensatehomes.com** (diseño) y **soliracandle.com** (mensaje).
- ⛔ **NO es founder-led. La owner NO aparece.**
- Pagos: **hasta 6 MSI**. ⚠️ NUNCA nombrar "Stripe" ni "Mercado Pago".
- Envío: **GRATIS A TODO MÉXICO, SIN MÍNIMO.** Garantía 30 días. WhatsApp: `525531215386`.
- REGLA DE INTEGRIDAD: **nunca reseñas falsas** (15 reales, 4.9 vía `getReviewStats()`), **nunca precios tachados inventados**, **nunca logos de prensa**.
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`
- RUTAS: producto `/productos/:slug`, paquete `/paquete/:slug`, carrito `/carrito`, checkout `/pagar`, categoría `/categorias/:handle`.
- ⚠️ **kit-vaso-de-concreto** es de **CERÁMICA**; el slug NO se cambia (rompe los anuncios de Meta).
- ⚠️ **PRODUCTO ANCLA DE PAUTA = `kit-vaso-de-vidrio`.**
- ⚠️ El owner renombra y repriza desde el Dashboard. **NUNCA hardcodear precios ni títulos.**
- ⚠️ **STAGING**: los cambios se commitean al final del turno. Pedir refresh duro.
- 📦 El owner está rediseñando el empaque para subir el registro premium.

### CATÁLOGO (slugs SIEMPRE intactos)
| Slug | Título | Precio | Compare |
|---|---|---|---|
| perlas-originales-500-g | Recarga 500 g + 30 mechas | $499 | $599 |
| reserva-1-kg | Recarga 1 Kg + 60 mechas | $799 | $999 |
| kit-vaso-de-vidrio | Kit · Vaso de Vidrio | $799 | $899 |
| kit-vaso-de-concreto | Kit · Bowl de Cerámica | $999 | $1,199 |
| d-o-de-tonos | Dúo de Tonos · 1 kg | $1,099 | $1,398 ⚠️ $1.10/g |
| tr-o-de-tonos | Trío de Tonos · 1.5 kg | $1,399 | $1,499 |
| bowl-negro | Bowl de Cerámica Negro | $399 | $499 |
| vaso-extra-transparente | Vaso de Vidrio Transparente | $249 | — |
| pack-30-mechas | Pack de 30 Mechas | $99 | — |
| esencia-para-vela-10-ml | Esencia para Vela · 10 ml | $99 | add-on OCULTO |
- **ESENCIA**: id `f11fc30d-b36e-4c07-b756-79d1ecc44c71`, `track_inventory: false`, opción **`Aroma`**, 6 variantes (Madera Nocturna · Ámbar Cristal · Costa Mineral · Higo Matcha · Tabaco Vainilla · Musgo Mineral). NO existe "Sin aroma" (estado virtual). 6 fotos flat-lay, mismo orden que `SCENTS`.
- ⚠️ 2026-08-21: los IDs de las variantes de la esencia CAMBIARON. Carritos viejos pueden fallar.
- Price rule activa: `perlas-originales-500-g` → 2 uds 10% OFF, 3 uds 15% OFF.
- **KITS** = recipiente + 500 g de cera + 30 mechas.
- **COLECCIONES**: `kits` (2), `recipientes` (2), `accesorios` (1). Falta **`recargas`**.
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
- **Fuente de verdad = `src/index.css`.** Display: Instrument Serif · Body: Manrope. **`--radius: 0rem`** (excepción `rounded-field`).

### 🖱️ ESTADOS HOVER
- Botón `default`: reposo oliva-cta + marfil; hover terracota.
- "Agregar al carrito" (PDP, outline) y AccordionTrigger → periwinkle.
- Pills de variante y chips de aroma: activo `bg-dunaru-oliva-claro text-dunaru-marfil`; hover `bg-dunaru-periwinkle/10` + `text-[hsl(var(--dunaru-periwinkle-deep))]`.
- Patrón "inversión marfil ↔ terracota" (hero CTA, `ProductCardUI`) y "outline terracota" (footer, flechas).
- 🎯 **oliva = selección + CTA** · **periwinkle = navegación y hovers** · **terracota = hover de CTA, PRECIOS de add-on y palomitas de la tabla comparativa**.
- ⚠️ **MÓVIL-FIRST: nada de información que dependa de `:hover`.**

### 🪨 TEXTURAS (`@layer components` en index.css)
`.texture-grain` · `.texture-arena` · `.texture-travertino` · `.texture-terracota` · `.texture-ambar` (solo fondos oscuros) · `.texture-metal` · `.hairline-metal`. **No sacarlas de `@layer components`.**

### Utilidades editoriales
`.lockup` · `.eyebrow` / `.eyebrow-light` · `.h-editorial` · `.transition-editorial` · `<Reveal>` · `.full-bleed` (no dentro de `layout="full-width"`).

### Reglas de layout
- **TOP BAR** fija en `EcommerceTemplate.tsx`; **HEADER OVERLAY** solo en `IndexUI`.
- **🛒 ORDEN DEL BUY BOX** (`ProductPageUI.tsx`): título+precio+MSI+rating · `PDP_BENEFITS[slug]` · variantes · **`<ProductScentSelector />`** · cantidad (o `ProductQuantityTiers`) · `<DeliveryEstimate />` · express + CTA `h-12` con precio · CTA outline `h-11` · micro-línea `Lock` · badges · `<PdpSocialProof />` · WhatsApp · acordeones.
- **📚 ACORDEONES DE LA PDP (orden fijo)**: `Qué incluye` (driven por `src/lib/pdp-includes.ts`) → `La pieza` (description de la DB) → `Cuidado y seguridad` → `Envío y garantía`. Todos cerrados por default (`type="single" collapsible`).
- `TIER_SELECTOR_SLUGS` (solo `perlas-originales-500-g`) reemplaza el stepper.
- `ctaTotal` = `ctaUnitPrice * ctaQuantity + scentSelection.price`. La barra sticky muestra solo el unitario.
- **📐 IMAGEN DE PRODUCTO = 4:5 (1122×1402)** + `object-cover`.
- **ORDEN DE LA PDP** (`ProductStorySections.tsx`): garantías → carrusel → reseñas → bloques editoriales → `<CompareTable />` → FAQ → CTA de cierre.
- **🏠 ORDEN DE LA HOME** (`IndexUI.tsx`): hero → barra de credenciales → 4 pasos → **`<CompareTable />` "dunaru vs vela normal"** → "Elige tu vela" → `RitualSection` → `Reviews` → `ScentsSection` → "Elige tu tono" → `CasaRealSection` → `BrandStorySection` → FAQ → newsletter.

### ⚖️ TABLA COMPARATIVA (`src/components/CompareTable.tsx`)
- **FUENTE ÚNICA.** Exporta `CompareTable`, `CompareRow` y `BASE_COMPARE_ROWS`.
- La home la usa **sin props** (`BASE_COMPARE_ROWS`); cada PDP pasa `rows={content.compareRows}` desde `PDP_CONTENT`.
- ⛔ NUNCA volver a escribir el markup de la tabla en otro archivo.
- Nota al pie (costo por hora) se auto-oculta si no hay filas de tipo string.

### 📦 "QUÉ INCLUYE" (`src/lib/pdp-includes.ts`)
- `PDP_INCLUDES[slug]` = lista de `{ item, benefit }`. Helper `getIncludes(slug)`.
- Constantes reutilizadas: `CERA_500`, `MECHAS_30`, `ENVIO`.
- Cubre los 10 slugs. ⛔ Solo datos verificados: **no** afirmar "guía impresa", "sin plomo" ni composición exacta.

### 🌿 SISTEMA DE AROMAS
- **`src/lib/scents.ts`** = fuente única. Exporta `SCENTS`, `SCENT_PRODUCT_SLUG`, `SCENT_OPTION_NAME`, `SCENT_ENABLED_SLUGS`, `supportsScentAddon()`, `getScentImageByVariantName()`, `SCENT_YIELD_GRAMS` / `SCENT_YIELD_COPY`.
- Cada `Scent` tiene `story` (1 línea) y `pyramid { salida, corazon, fondo }` **derivada de `notes` reales, nunca inventada**.
- Activar aroma en un producto nuevo = añadir su slug a `SCENT_ENABLED_SLUGS`.
- ⚠️ `SCENTS[].name` debe coincidir EXACTO con la variante en la DB.
- **📐 FLAT-LAYS DE AROMA = 4:3 (1456×1092) webp. NO poner overlays.**
- Los 3 caminos de compra incluyen aroma: `handleAddToCartWithAddOns` · `handleBuyNowWithScent` · `ProductExpressCheckout` (`extraItems`).
- PostHog: `scent_selected`, `scent_details_toggled`.
- Ocultar del catálogo: `HIDDEN_FROM_CATALOG_SLUGS` + `filterCatalogVisible()`.

### 🧾 CHECKOUT (`CheckoutUI.tsx`) — 🔒 no se toca, solo hereda tokens.

---

## 3. Active Plan — FASE 5: REFINAMIENTO DE MENSAJE (benchmark Solira)

**Estado**: ✅ 5.0 auditoría · ✅ 5.1 contradicción del aroma · ✅ 5.2 credenciales premium · ✅ **5.2.6 tabla comparativa extraída + montada en la home** · ✅ **5.3 "Qué incluye" + acordeones renombrados** · 🔜 **SIGUIENTE: 5.4 (tiers con nombre y % de ahorro) y verificación en móvil.**

### 5.4 🟡 P2 — AOV: tiers con nombre y % de ahorro
`ProductQuantityTiers` (solo `perlas-originales-500-g`): `Una bolsa` / `Dos bolsas · Ahorra 10% · La más elegida` / `Tres bolsas · Ahorra 15% · Mejor valor`. Extenderlo a otros SKUs **requiere price rules nuevas del owner**.

### 5.5 DECISIONES DEL OWNER
1. ✅ **Nombre de la cera = "Cera Duna"**. Confirmar si quiere registrarlo.
2. ✅ **1 frasco de 10 ml perfuma 500 g de cera.**
3. ✅ **Cera 100% vegetal, biodegradable y ecológica** (claim cerrado 2026-08-25). ⛔ Sin porcentajes de soya/coco.
4. ❓ Nombre de la garantía (`Garantía Primera Luz · 30 días`).
5. ❓ ¿Cuántas horas da UNA mecha? (Solira dice 15 h).
6. ❓ Copy del empaque nuevo (bolsa resellable, caja, inserto).
7. ❓ ¿B2B / wholesale? ❓ ¿SKU sample barato (30 g + 5 mechas)?
8. ❓ ¿Las bolsas incluyen algún inserto o guía impresa? (hoy `pdp-includes` NO lo afirma).

### 3.8 FASE 3 — PDP — RESTANTE
Galería a sangre en móvil · título a lockup · "Combina bien con" (`ADDON_MAP` vacío) · `<RitualSection />` al cierre · eyebrows viejos → `.eyebrow` · migrar `dunaru-champagne` → terracota/periwinkle · unificar trust-icons de MSI.

### 3.9 FASE 4 — Arte y fotografía (LA PALANCA MÁS GRANDE)
Imágenes atmosféricas nocturnas, ⛔ SIN ROSTROS. Slots: hero desktop/móvil, fondo de `RitualSection`, 3 ambientes de "Elige tu tono", `BrandStorySection`. Falta: **packshots 4:5 del frasco de esencia**.

### 3.11 Medición
Volumen insuficiente para A/B (122 usuarios/mes en la PDP principal). Medición secuencial con `posthog-query`. Si el ATC móvil cae por debajo de 3.5%, revertir densidad primero.

---

## 4. Recent Changes
- 2026-08-25 — ⚖️ **`CompareTable.tsx`: tabla comparativa extraída a componente único** (paleta terracota, sin `dunaru-champagne`) y **montada en la home** tras "Crea tu vela en 4 pasos" como "DUNARU vs VELA NORMAL". La PDP ahora consume el mismo componente.
- 2026-08-25 — 📦 **Acordeón "Qué incluye" en la PDP** (`src/lib/pdp-includes.ts`, los 10 slugs) con componente + beneficio por línea.
- 2026-08-25 — 📚 Acordeones de la PDP renombrados: `Descripción` → **La pieza**, `Envío y devoluciones` → **Envío y garantía**, y nuevo **Cuidado y seguridad**.
- 2026-08-25 — 🌱 **Claim cerrado: "Cera 100% vegetal y biodegradable"** en la barra de credenciales, la FAQ de la home, `BrandStorySection` y las 3 tablas comparativas (sustituye "Libre de parafina").
- 2026-08-25 — 🌾 **"Cera Duna": la cera ya tiene nombre propietario** y se migró en landing, PDP, historia de marca y catálogo.
- 2026-08-25 — 🔴→✅ **Fase 5.1: eliminada la contradicción del aroma.** Bloque "Seis aromas, una sola vela", FAQ nueva en las 4 PDP.
- 2026-08-25 — 🌿 `scents.ts`: `story` + `pyramid` en los 6 aromas + `SCENT_YIELD_GRAMS = 500`.
- 2026-08-25 — 💎 El panel del selector de aroma muestra escena + pirámide olfativa.
- 2026-08-25 — 🏅 Barra de la home: specs → credenciales.
- 2026-08-25 — 🆕 **`ScentsSection.tsx`**: los 6 aromas con flat-lay y escena.
- 2026-08-25 — 🛡️ Bloque "Se cae y no pasa nada" → **"Seguridad por diseño"**.
- 2026-08-21 — 🖼️ Cada esencia muestra SU foto en carrito, checkout y confirmación.
- 2026-08-21 — 💰 El CTA "Comprar ahora" muestra el total en TODOS los productos.
- 2026-08-21 — 🌿 Sistema de aromas completo (3 caminos de compra).
- 2026-08-21 — 🗂️ Orden curado del catálogo.

## 5. Image Inventory
- **📐 Fotos de producto: 1122×1402 (4:5), webp.** 10 productos; la esencia tiene 6 imágenes (flat-lays 4:3, provisionales).
- **🌿 FLAT-LAYS DE AROMA (4:3, 1456×1092)** — base `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/`:
  - Madera Nocturna `1787337333998-ynkiiz87l1n.webp` · Ámbar Cristal `1787337333997-44wwhmmisy5.webp` · Costa Mineral `1787337333998-jphdwvy2pbh.webp` · Higo Matcha `1787337333998-enck999sju7.webp` · Tabaco Vainilla `1787337333998-5e5poqkcxh8.webp` · Musgo Mineral `1787337333998-n7f8zqhfx8m.webp`
  - ⚠️ Ingredientes hasta el borde inferior. **No overlays.** Se reusan en `ScentsSection`.
- ⚠️ Foto #1 de `perlas-originales-500-g` = `x3azemqdof.webp`. Candidata #1 a reemplazo.
- Colecciones sin imagen. **FAVICON**: `/favicon.png` (256×256).
- **UGC de clientas** (5 fotos): constante `UGC` en `src/data/reviews.ts`.
- **Hero**: `/hero-dunaru.webp` · `/hero-dunaru-mobile.webp`. **Casa real**: `/casa-real-{sala,comedor,recibidor,recamara}.webp`.
- **4 PASOS**: `/paso-vierte.webp` · `1785521743155-htw95tvbi4b.webp` · `1785521743156-3qeskqe43gv.webp` · `/paso-renueva.webp`.
- 🟡 2 imágenes subidas por el owner el 2026-08-25 sin usar aún: `1787681082141-dy7wr0dcp15.webp`, `1787681082142-42qlfq25nvs.webp` (revisar y asignar slot).
- 🔴 **FALTAN: packshots 4:5 del frasco de esencia · imágenes atmosféricas nocturnas (Fase 4) · video demo · foto del EMPAQUE NUEVO.**
- 🟡 `steps` de `kit-vaso-de-concreto` con `PLACEHOLDER`. 🟡 `/pdp-vaso-decor.webp` huérfana.
- ⛔ Descartadas por el owner: `1786132713652-czg3jwwtcrv.webp` y `1786129807292-5eb2uq5pl0m.webp`.

## 6. Known Issues
- 2026-08-25 — 🟡 **`CompareTable` en la home sin verificar en 360 px** (3 columnas: label + 2 de 76 px).
- 2026-08-25 — 🟡 La PDP ahora tiene 4 acordeones; **verificar que no empuje demasiado el CTA en móvil**.
- 2026-08-25 — 🟡 `pdp-includes.ts` asume 60 mechas en el Dúo y 90 en el Trío (30 por bolsa). ⚠️ La FAQ de la home dice "los bundles Dúo y Trío incluyen 60 mechas" → **contradicción a confirmar con el owner**.
- 2026-08-25 — 🟠 **"Cera Duna" aún no está en los títulos de la DB** (Dúo y Trío dicen "Cera Perlada"). Solo el owner puede cambiarlos.
- 2026-08-25 — 🟡 `ScentsSection` sin verificar en 360 px.
- 2026-08-21 — 🔴 **`ecommerce--update-product` NO soporta imágenes por variante.** No repetir.
- 2026-08-21 — 🟠 Los IDs de las variantes de la esencia cambiaron: un carrito guardado antes del 21/08 20:35 puede fallar.
- 2026-08-21 — 🟡 Las fotos de la esencia son flat-lays 4:3, no packshots del frasco.
- 2026-08-21 — 🟡 La barra sticky de la PDP muestra el precio unitario sin aroma.
- 2026-08-21 — 🟠 El panel de aroma abierto por default empuja el CTA en móvil.
- 2026-08-21 — 🟡 Pago express con esencia sin probar en device real. 🟡 Aroma limitado a 1 frasco por acción (MVP).
- 2026-08-21 — 🟡 `ProductPageUI` llama `useSettings()` dos veces.
- 2026-08-21 — 🟠 4 de 9 productos sin colección → falta "Recargas" en el menú.
- 2026-08-20 — 🟠 `ProductStorySections.tsx` aún tiene `dunaru-champagne` en los bullets de los bloques. 🟠 Trust-icons de MSI en champagne/ambar. 🟠 Paleta sin auditar en carrito ni checkout.
- 2026-08-07 — 🔴 `perlas-originales-500-g` se llama "Recarga" y recibe el grueso del tráfico frío de Meta.
- 2026-08-07 — 🟠 Escalera de precio por gramo rota: Dúo 1 kg ($1.10/g) vs Reserva 1 kg ($0.80/g).
- 2026-08-07 — 🟡 `getReviewStats()` es global (4.9/15), no por SKU. 🟠 Slug `kit-vaso-de-concreto` incorrecto. 🟡 `ShippingPromise` asume gratis si `shippingCost === 0`. 🟠 Títulos de la DB con guion largo. 🟡 `PDP_BENEFITS` solo cubre 6 slugs.
- 2026-07-31 — 🟠 Footer de `EcommerceTemplate.tsx` con 3 nombres de producto hardcodeados.
- 2026-07-31 — 🔴 `ecommerce--update-product` NO persiste `compare_at_price`. Workaround: Dashboard manual.
- 2026-07-31 — 🟡 `lov-search-files` puede devolver resultados falsos. **Verificar con `lov-view`.**
- 2026-07-06 — 🔴 `meta-capi` edge function falla en preview.

## 7. Pending / Future Sessions
- [ALTA] **Verificar en móvil (360 px)**: `CompareTable` en la home, `ScentsSection`, y los 4 acordeones de la PDP.
- [ALTA] **Resolver la contradicción de mechas** del Dúo/Trío (FAQ home vs `pdp-includes`).
- [ALTA] **Pedir al owner**: horas por mecha, nombre de la garantía, copy del empaque, si hay inserto impreso.
- [ALTA] **Actualizar títulos de la DB** a "Cera Duna" (lo hace el owner).
- [ALTA] **Packshots del frasco de esencia (4:5)**.
- [ALTA] **Probar el flujo completo con aroma tras refresh duro**: PDP → carrito → /pagar → orden.
- [ALTA] **Medir el attach rate de aroma** en PostHog.
- [ALTA] **Crear la colección `recargas`** y añadirla al menú.
- [ALTA] **FASE 4 (fotos atmosféricas nocturnas)**, sin rostros.
- [MED] **Fase 5.4**: tiers con nombre y % de ahorro (requiere price rules del owner).
- [MED] Reflejar el aroma en el precio de la barra sticky. Descripción y SEO propios de la PDP de la esencia.
- [MED] Resto de FASE 3 (PDP) y auditar la paleta en carrito y checkout.
- [BAJA] Página B2B / wholesale. SKU sample barato. Banners de colección.