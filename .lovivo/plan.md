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
- RUTAS: producto `/productos/:slug`, paquete `/paquete/:slug`, carrito `/carrito`, checkout `/pagar`, categoría `/categorias/:handle`, **`/como-funciona` (nueva)**.
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
| perlas-originales-500-g | **Cera Duna · 500 g** | $499 | $599 |
| reserva-1-kg | **Cera Duna · 1 kg** | $799 | $999 |
| d-o-de-tonos | **Dúo de Tonos · 1 kg** | $1,099 | $1,398 ⚠️ $1.10/g |
| tr-o-de-tonos | **Trío de Tonos · 1.5 kg** | $1,399 | $1,499 |
| bowl-negro | **Bowl Artesanal de Cerámica** | $399 | $499 |
| vaso-extra-transparente | Vaso de Vidrio Transparente | $249 | — |
| pack-30-mechas | **30 Mechas de Algodón** | $99 | — |
| esencia-para-vela-10-ml | Esencia para Vela · 10 ml | $99 | add-on OCULTO del catálogo |

⚠️ Copias hardcodeadas de títulos: `CATALOG_FALLBACK` (IndexUI) y footer de `EcommerceTemplate`. `src/lib/navigation.ts` usa **etiquetas cortas propias**, desacopladas de la DB a propósito.

### CATÁLOGO — otros datos
- **ESENCIA**: id `f11fc30d-b36e-4c07-b756-79d1ecc44c71`, `track_inventory: false`, opción **`Aroma`**, 6 variantes (Madera Nocturna · Ámbar Cristal · Costa Mineral · Higo Matcha · Tabaco Vainilla · Musgo Mineral). 6 fotos flat-lay.
- Price rule activa: `perlas-originales-500-g` → 2 uds 10% OFF, 3 uds 15% OFF.
- **MECHAS: 30 por bolsa de 500 g → Dúo 60, Trío 90, Cera Duna 1 kg = 60.**
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
- **Fuente de verdad = `src/index.css`.** Display: Instrument Serif · Body: Manrope. **`--radius: 0rem`**.
- 🎯 **oliva = selección + CTA** · **periwinkle = navegación y hovers** · **terracota = hover de CTA, precios de add-on, acentos editoriales**.
- ⚠️ **MÓVIL-FIRST: nada de información que dependa de `:hover`.**

### 🪨 TEXTURAS / utilidades
`.texture-grain` · `.texture-arena` · `.texture-travertino` · `.texture-terracota` · `.texture-ambar` (solo oscuros) · `.texture-metal` · `.hairline-metal` · `.lockup` · `.eyebrow` · `.h-editorial` · `.transition-editorial` · `<Reveal>` · `.full-bleed` · `.section-pad` / `.section-pad-sm`.

### 🧭 NAVEGACIÓN (2026-08-25 — REDISEÑADA)
- **FUENTE ÚNICA: `src/lib/navigation.ts`** → `SHOP_COLUMNS`, `SHOP_FEATURED`, `SHOP_ALL`, `PRIMARY_LINKS`, `UTILITY_LINKS`.
- **Componente: `src/components/MainNav.tsx`** → exporta `DesktopNav` y `MobileNav({ onNavigate })`. `EcommerceTemplate` solo los monta.
- ⛔ **REGLA DE ORO: el menú NO contiene anclas a la home (`/#...`).** Todo item apunta a una ruta real, para que funcione igual desde una PDP. (Problema reportado por la owner el 2026-08-25.)
- **Desktop**: `Tienda ▾` (mega menú de 4 columnas: Velas rellenables · Cera Duna · Recipientes y accesorios · tarjeta destacada de Aromas) + `Aromas` + `Cómo funciona`. "Rastrear pedido" salió de la barra y vive en el menú móvil y el footer.
- ⚙️ El panel del mega menú es `absolute top-full left-0 right-0` y depende de que el wrapper `.max-w-7xl` del header tenga `relative`. **No quitar ese `relative`.**
- Las etiquetas del menú son CORTAS ("Vaso de Vidrio", "500 g") y no replican el título de la DB: así el menú no se desincroniza si el owner renombra.
- **Móvil**: acordeón por columna (primera abierta), sin dependencias de hover.

### Reglas de layout
- **TOP BAR** fija en `EcommerceTemplate.tsx`; **HEADER OVERLAY** solo en `IndexUI`.
- **🛒 ORDEN DEL BUY BOX** (`ProductPageUI.tsx`): título+precio+MSI+rating · `PDP_BENEFITS[slug]` · variantes · `<ProductScentSelector />` · cantidad · `<DeliveryEstimate />` · express + CTA `h-12` · CTA outline `h-11` · micro-línea `Lock` · badges · `<PdpSocialProof />` · WhatsApp · acordeones.
- **📚 ACORDEONES DE LA PDP (3, orden fijo)**: `Qué incluye` (`src/lib/pdp-includes.ts`) → `La pieza` → `Envío y garantía`. ⛔ "Cuidado y seguridad" eliminado; no volver a añadirlo.
- **📐 IMAGEN DE PRODUCTO = 4:5 (1122×1402)** + `object-cover`.
- **ORDEN DE LA PDP** (`ProductStorySections.tsx`): garantías → carrusel → reseñas → bloques editoriales → `<CompareTable />` → FAQ → CTA de cierre.
- **🏠 ORDEN DE LA HOME** (`IndexUI.tsx`): hero → credenciales → 4 pasos → "Elige tu vela" → `RitualSection` → `Reviews` → `ScentsSection` → "Elige tu tono" → `CasaRealSection` → `BrandStorySection` → `<CompareTable />` → FAQ → newsletter.
- **📄 `/como-funciona`** (`src/pages/ComoFunciona.tsx`): intro → 4 pasos alternados → `<CompareTable />` → FAQ de 6 → CTA oscuro. Página autocontenida (no depende de constantes de IndexUI).

### ⚖️ TABLA COMPARATIVA (`src/components/CompareTable.tsx`)
- **FUENTE ÚNICA.** Exporta `CompareTable`, `CompareRow` y `BASE_COMPARE_ROWS`. Home y `/como-funciona` la usan sin props; cada PDP pasa `rows={content.compareRows}`.

### 🌿 SISTEMA DE AROMAS
- **`src/lib/scents.ts`** = fuente única (`SCENTS`, `SCENT_ENABLED_SLUGS`, `supportsScentAddon()`, `SCENT_YIELD_GRAMS`).
- Los 3 caminos de compra incluyen aroma: `handleAddToCartWithAddOns` · `handleBuyNowWithScent` · `ProductExpressCheckout`.
- PostHog: `scent_selected`, `scent_details_toggled`.

### 🧾 CHECKOUT (`CheckoutUI.tsx`) — 🔒 no se toca.

---

## 3. Active Plan — FASE 6: NAVEGACIÓN Y ARQUITECTURA DE SITIO

**Estado**: ✅ Mega menú + `/como-funciona` construidos. 🔜 **Verificar en 360 px y en desktop 1280 px, y decidir si "Aromas" merece página propia.**

### 6.1 🔴 P1 — Verificación visual del menú nuevo
Tras el commit: abrir home y una PDP, confirmar que el panel del mega menú se alinea con el header (no se corta a la derecha) y que en móvil el acordeón no empuja el hero.

### 6.2 🟡 P2 — Página `/aromas` propia
Hoy "Aromas" apunta a la PDP de la esencia (`/productos/esencia-para-vela-10-ml`), que está oculta del catálogo y sin SEO propio. Merece una landing editorial con los 6 aromas (reusar `ScentsSection`) + CTA a la PDP.

### 6.3 🟡 P2 — AOV: tiers con nombre y % de ahorro
`ProductQuantityTiers` (solo `perlas-originales-500-g`): `Una bolsa` / `Dos bolsas · Ahorra 10%` / `Tres bolsas · Ahorra 15%`. Extenderlo requiere price rules nuevas.

### 6.4 DECISIONES PENDIENTES DEL OWNER
1. ❓ Nombre de la garantía (`Garantía Primera Luz · 30 días`).
2. ❓ ¿Cuántas horas da UNA mecha? (Solira dice 15 h).
3. ❓ Copy del empaque nuevo. ❓ ¿Hay inserto impreso?
4. ❓ ¿B2B / wholesale? ❓ ¿SKU sample barato (30 g + 5 mechas)?

### 6.5 FASE 4 — Arte y fotografía (LA PALANCA MÁS GRANDE)
Imágenes atmosféricas nocturnas, ⛔ SIN ROSTROS. Falta: **packshots 4:5 del frasco de esencia**.

### 6.6 Medición
Volumen insuficiente para A/B (122 usuarios/mes en la PDP principal). Medición secuencial con `posthog-query`.

---

## 4. Recent Changes
- 2026-08-25 — 🧭 **MENÚ REDISEÑADO**: nuevo `src/lib/navigation.ts` + `src/components/MainNav.tsx`. Mega menú "Tienda" de 4 columnas con los 9 SKUs visibles y tarjeta destacada de aromas. Fuera "Comprar", "Tonos", "Preguntas" y "Rastrear pedido" de la barra. **Cero anclas a la home.**
- 2026-08-25 — 📄 **Nueva página `/como-funciona`** (`src/pages/ComoFunciona.tsx`), ruta lazy en `App.tsx`, con SEO propio, 4 pasos, `CompareTable` y FAQ de 6.
- 2026-08-25 — 🧹 `EcommerceTemplate.tsx`: eliminados `PRODUCT_CATEGORIES`, el dropdown viejo y el menú móvil viejo; imports muertos limpiados; wrapper del header ahora `relative` (ancla del mega menú).
- 2026-08-25 — 🏷️ **NOMENCLATURA PREMIUM: renombrados 8 productos en la DB** (título + descripción). Slugs intactos.
- 2026-08-25 — 🔻 Tabla comparativa bajada en la home (después de `BrandStorySection`, antes del FAQ).
- 2026-08-25 — ✂️ Acordeón "Cuidado y seguridad" eliminado de la PDP.
- 2026-08-25 — 🔢 Mechas corregidas: Trío = 90, Cera Duna 1 kg = 60.
- 2026-08-25 — ⚖️ `CompareTable.tsx` extraída a componente único y montada en la home.
- 2026-08-25 — 📦 Acordeón "Qué incluye" (`src/lib/pdp-includes.ts`, los 10 slugs).
- 2026-08-25 — 🌱 Claim "Cera 100% vegetal y biodegradable" en credenciales, FAQ y `BrandStorySection`.
- 2026-08-25 — 🌾 "Cera Duna": la cera ya tiene nombre propietario.
- 2026-08-25 — 🆕 `ScentsSection.tsx`: los 6 aromas con flat-lay y escena.
- 2026-08-21 — 🖼️ Cada esencia muestra SU foto en carrito, checkout y confirmación.
- 2026-08-21 — 🌿 Sistema de aromas completo (3 caminos de compra).

## 5. Image Inventory
- **📐 Fotos de producto: 1122×1402 (4:5), webp.** 10 productos; la esencia tiene 6 imágenes (flat-lays 4:3, provisionales).
- **🌿 FLAT-LAYS DE AROMA (4:3, 1456×1092)** — base `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/`:
  - Madera Nocturna `1787337333998-ynkiiz87l1n.webp` · Ámbar Cristal `1787337333997-44wwhmmisy5.webp` · Costa Mineral `1787337333998-jphdwvy2pbh.webp` · Higo Matcha `1787337333998-enck999sju7.webp` · Tabaco Vainilla `1787337333998-5e5poqkcxh8.webp` · Musgo Mineral `1787337333998-n7f8zqhfx8m.webp`
- **4 PASOS** (reusados en `/como-funciona`): `/paso-vierte.webp` · `1785521743155-htw95tvbi4b.webp` · `1785521743156-3qeskqe43gv.webp` · `/paso-renueva.webp`.
- **Hero**: `/hero-dunaru.webp` · `/hero-dunaru-mobile.webp`. **Casa real**: `/casa-real-{sala,comedor,recibidor,recamara}.webp`.
- **UGC de clientas** (5 fotos): constante `UGC` en `src/data/reviews.ts`. **FAVICON**: `/favicon.png`.
- 🟡 Subidas por el owner sin usar: `1787681082141-dy7wr0dcp15.webp`, `1787681082142-42qlfq25nvs.webp`, `1787684660654-vr5uiznl7cj.webp`, `1787698127139-n6q8hqbtmui.webp`, `1787698127139-45kar166s3a.webp` (las 2 últimas son screenshots del menú, no assets).
- 🔴 **FALTAN: packshots 4:5 del frasco de esencia · imágenes atmosféricas nocturnas · video demo · foto del EMPAQUE NUEVO.**
- ⛔ Descartadas por el owner: `1786132713652-czg3jwwtcrv.webp` y `1786129807292-5eb2uq5pl0m.webp`.

## 6. Known Issues
- 2026-08-25 — 🟡 **Mega menú sin verificar visualmente** (staging). Riesgo: el panel `absolute left-0 right-0` depende del `relative` del wrapper del header; si alguien lo quita, el panel se descuadra.
- 2026-08-25 — 🟡 **"Aromas" del menú apunta a la PDP de la esencia**, que está en `HIDDEN_FROM_CATALOG_SLUGS` y sin SEO propio. Solución real: página `/aromas` (ver 6.2).
- 2026-08-25 — 🟡 Las anclas `#tonos`, `#faq`, `#comprar` de la home ya NO tienen entrada en el menú. Siguen existiendo para links internos.
- 2026-08-25 — 🟠 **Los nombres nuevos NO están en los anuncios de Meta ni en emails automatizados.**
- 2026-08-25 — 🟡 `CATALOG_FALLBACK` (IndexUI) y el footer de `EcommerceTemplate` duplican los títulos de la DB.
- 2026-08-25 — 🟡 Sin verificar en 360 px: `CompareTable` en la home, `ScentsSection`, `MobileNav`.
- 2026-08-25 — 🟡 `bowl-negro` y `vaso-extra-transparente` todavía dicen "perlas dunaru" en la descripción.
- 2026-08-21 — 🔴 `ecommerce--update-product` NO soporta imágenes por variante.
- 2026-08-21 — 🟠 Los IDs de las variantes de la esencia cambiaron: carritos guardados antes del 21/08 20:35 pueden fallar.
- 2026-08-21 — 🟡 La barra sticky de la PDP muestra el precio unitario sin aroma.
- 2026-08-21 — 🟠 El panel de aroma abierto por default empuja el CTA en móvil.
- 2026-08-21 — 🟡 `ProductPageUI` llama `useSettings()` dos veces.
- 2026-08-20 — 🟠 `ProductStorySections.tsx` aún tiene `dunaru-champagne` en los bullets. Paleta sin auditar en carrito ni checkout.
- 2026-08-07 — 🟠 Escalera de precio por gramo rota: Dúo 1 kg ($1.10/g) vs Cera Duna 1 kg ($0.80/g).
- 2026-08-07 — 🟡 `getReviewStats()` es global (4.9/15), no por SKU. 🟠 Slug `kit-vaso-de-concreto` dice concreto pero es cerámica.
- 2026-07-31 — 🔴 `ecommerce--update-product` NO persiste `compare_at_price` cuando se envía explícitamente. Workaround: Dashboard manual.
- 2026-07-06 — 🔴 `meta-capi` edge function falla en preview.

## 7. Pending / Future Sessions
- [ALTA] **Verificar el mega menú y `/como-funciona` en desktop y en 360 px tras el commit.**
- [ALTA] **Añadir `/como-funciona` al sitemap** (`scripts/generate-sitemap.ts`) y al footer.
- [ALTA] **Avisar al owner que sincronice los nombres en los anuncios de Meta y emails.**
- [ALTA] **Pedir al owner**: horas por mecha, nombre de la garantía, copy del empaque.
- [ALTA] **Packshots del frasco de esencia (4:5)**.
- [ALTA] **Medir el attach rate de aroma** en PostHog.
- [ALTA] **Crear la colección `recargas`**.
- [ALTA] **FASE 4 (fotos atmosféricas nocturnas)**, sin rostros.
- [MED] **Página `/aromas`** propia (6.2).
- [MED] Tiers con nombre y % de ahorro (requiere price rules del owner).
- [MED] Limpiar "perlas dunaru" de `bowl-negro` y `vaso-extra-transparente`.
- [MED] Reflejar el aroma en el precio de la barra sticky.
- [BAJA] Página B2B / wholesale. SKU sample barato. Banners de colección.