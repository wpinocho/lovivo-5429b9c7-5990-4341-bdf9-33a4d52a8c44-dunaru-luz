# Store Plan — dunaru
<!-- Auto-maintained by Lovivo AI. READ THIS FIRST. UPDATE IT LAST. -->

## 1. Brand & Context
- Brand: **dunaru** (dunaru.mx). Velas perladas **rellenables**: gránulos finos de cera tipo arena + mechas de algodón.
- ⚠️ VOCABULARIO: **"rellenable"** (NO "recargable"). ⚠️ **PROHIBIDO el guion largo (—) en copy visible.**
- Tesis: no vendemos cera. Vendemos una forma simple de crear luz en el recipiente que ya tienes.
- **AROMA**: las velas nacen SIN perfume. "El aroma lo eliges tú".
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
Snapshot 2026-08-07 (fuente de verdad = la DB):
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
- Price rule activa: `perlas-originales-500-g` → 2 uds 10% OFF, 3 uds 15% OFF.

---

## 2. Design System

### 🎨 PALETA 2026 (vigente desde 2026-08-20)
| Rol | Color | HEX | HSL | Token |
|---|---|---|---|---|
| Base clara | Warm Ivory / Bone | #F2ECE3 | 36 37% 92% | `--background`, `dunaru-marfil` |
| Superficie | Travertino | #E7DDCE | 36 34% 86% | `--muted`, `dunaru-arena` |
| Principal (firma) | Burnt Terracotta | #C55B3A | 14 55% 50% | `--secondary`, `dunaru-terracota`, `--ring` |
| Contraste oscuro | Deep Olive / Charcoal | #2F3128 | 73 10% 17% | `--foreground`, `dunaru-carbon` |
| CTA / top bar / footer | Deep Olive oscuro | — | 75 13% 15% | `--primary`, `dunaru-onix` |
| Acento cálido | Saffron Gold | #D4A24A | 38 62% 56% | `--accent`, `dunaru-ambar` |
| Acento distintivo | Muted Periwinkle | #8B93B9 | 230 25% 64% | `dunaru-periwinkle` (uso mínimo) |
| Metal | Latón cepillado | — | 36 46% 50% | `dunaru-laton` |
- `dunaru-champagne` ya NO es champagne: hoy es **latón 36 46% 45%**, pensado para texto sobre fondos CLAROS.
- ⚠️ **REGLA DE CONTRASTE**: sobre fondos oscuros (`tabaco`, `cacao`, hero) usar **`dunaru-ambar`**, NUNCA `dunaru-champagne`.
- Oscuros atmosféricos: `dunaru-tabaco` (75 13% 13%) y `dunaru-cacao` (75 11% 21%), ahora en familia olivo.
- **Fuente de verdad = `src/index.css`.** `tailwind.config.ts` solo referencia `hsl(var(--x) / <alpha-value>)`.
- Display: Instrument Serif (`font-display`) · Body/UI: Manrope (`font-body`).
- **`--radius: 0rem`**. Excepción: `rounded-field` (0.25rem) en `ui/input.tsx` y `ui/textarea.tsx`. Los `rounded-full` se conservan.

### 🪨 MATERIALES / TEXTURAS (index.css, `@layer components`)
Todas pintan un `::before` con `z-index:-1` dentro de un stacking context aislado, así nunca tapan el contenido.
| Clase | Material | Uso |
|---|---|---|
| `.texture-grain` | grano de papel sutil | cualquier sección clara neutra |
| `.texture-arena` | cera en arena, granular fina | textura protagonista: "Elige tu vela", reseñas |
| `.texture-travertino` | piedra porosa, veteada | superficies base: tira de beneficios, historia de marca |
| `.texture-terracota` | cerámica mineral mate | insignias y bloques terracota |
| `.texture-ambar` | vidrio ámbar (blend `screen`) | **solo sobre fondos oscuros**: hero, RitualSection, newsletter |
| `.texture-metal` | metal cepillado satinado | ribetes, badges, detalles pequeños |
| `.hairline-metal` | divisor con reflejo de latón | separadores en secciones oscuras |
- El `<body>` lleva el grano de papel base (`--grain`, SVG feTurbulence inline, `background-attachment: fixed`).
- ⚠️ Las clases `texture-*` fuerzan `position: relative`. Están en `@layer components` para que `absolute`/`fixed` sigan ganando. **No sacarlas de esa capa.**

### Utilidades editoriales
- `.lockup` → serif + versalitas + `tracking .14em`. `.lockup em` → itálica minúscula.
- `.eyebrow` (latón, fondos claros) · `.eyebrow-light` (saffron gold, fondos oscuros).
- `.h-editorial` (30 → 48 → 60px) · `.transition-editorial` (700ms) · `<Reveal delay={n}>` / `useReveal()`.
- `.full-bleed` → ⚠️ NO usar dentro de `layout="full-width"`.
- ⚠️ `.hairline` / `.hairline-dark` / `.hairline-metal` son DIVISORES (`height: 1px`), NO bordes.

### Reglas de layout existentes
- **TOP BAR** (`EcommerceTemplate.tsx`): barra fija, 2 items. NO se replica en el checkout a propósito.
- **HEADER OVERLAY**: prop `headerOverlay` en `EcommerceTemplate`/`PageTemplate`. Solo `IndexUI` lo usa.
- **🛒 ORDEN OFICIAL DEL BUY BOX** (`ProductPageUI.tsx`): 1 título+precio+MSI+rating · 2 `PDP_BENEFITS[slug]` · 3 variantes · 4 cantidad · 5 add-ons/`ProductQuantityTiers` · 6 `<DeliveryEstimate />` · 7 CTA `h-12` con precio · 8 CTA outline `h-11` · 9 micro-línea `Lock` · 10 badges · 11 `<PdpSocialProof />` · 12 WhatsApp · 13 acordeones cerrados.
- ⚠️ `TIER_SELECTOR_SLUGS` (solo `perlas-originales-500-g`) reemplaza `ProductAddOns` → esa PDP no tiene cross-sell.
- `optionLabel(name, slug)` renombra "Color" → "Color de la cera", excepto en `CONTAINER_ONLY_SLUGS`.
- `PdpTrust.tsx` exporta `getDeliveryRange()`, `DeliveryEstimate`, `PdpSocialProof({ slug?, linkable? })`.
- **ORDEN DE LA PDP** (`ProductStorySections.tsx`): garantías → `ProductStepsCarousel` → reseñas → bloques editoriales → tabla comparativa → FAQ → CTA de cierre.
- **📐 RATIO DE IMAGEN DE PRODUCTO = 4:5 (1122×1402)** + `object-cover`.
- `ProductStepsCarousel.tsx` compartido PDP + landing. `RitualSection.tsx` reutilizable (home + cierre de PDP).

### 🏠 LANDING (`src/pages/ui/IndexUI.tsx`) — orden oficial
1. Hero (`min-h-screen`, tabaco + `texture-ambar`) · 2. Beneficios (`texture-travertino`) · 3. Cómo funciona · 4. **Elige tu vela** (`SHOP_CARDS`, 6 tarjetas 4:5 sin caja, `texture-arena`) · 5. `<RitualSection />` · 6. `<Reviews />` (`texture-arena`) · 7. Elige tu tono (`texture-grain`) · 8. `<CasaRealSection />` · 9. `<BrandStorySection />` (`texture-travertino`) · 10. FAQ (`texture-grain`) · 11. Newsletter tabaco (`texture-ambar`) + WhatsApp.
- ⚠️ Prohibido duplicar SKUs en varias secciones. Precios y títulos SIEMPRE dinámicos vía `buildCatalog(logic.products)`.

### 🧾 CHECKOUT (`src/pages/ui/CheckoutUI.tsx`) — reglas fijas
- Header minimal, solo logo. Sin nav, sin top bar promocional.
- Móvil: `MobileOrderSummary` (CERRADO) → `ShippingPromise` → `PdpSocialProof linkable={false}` → SSL → PayPal → wallets → email → dirección → aviso MSI → tarjeta → estrellas → CTA → badges + WhatsApp.
- `CouponSection` colapsado y gris al final. 🔒 **El checkout NO se toca en el rediseño: solo hereda tokens.**

---

## 3. Active Plan — REDISEÑO "HIGH END" (Sensate)

**Estado**: ✅ Fase 1 · ✅ Fase 2 · ✅ Fase 2.5 (paleta + texturas). ⏭️ Fase 3 y Fase 4 pendientes.

### 3.0 REGLA MAESTRA
Elevar las **superficies de marca**, no tocar la **maquinaria de conversión**.
- ✅ Elevar: hero, secciones editoriales, footer, tipografía, tratamiento de imagen, transiciones, galería de PDP.
- 🔒 No tocar: buy box, checkout, `DeliveryEstimate`, `PdpSocialProof`, avisos MSI, envío gratis, WhatsApp.
- Si un cambio estético reduce claridad de precio, disponibilidad o envío → **no se hace**.

### 3.1 ✅ FASE 1 — Sistema de diseño base (2026-08-20)
Radius 0 + `rounded-field`, tokens oscuros, `.lockup`, `.eyebrow`, `.h-editorial`, `.transition-editorial`, `Reveal`, `.full-bleed`, `.hairline`.

### 3.2 ✅ FASE 2 — Home (2026-08-20)
Hero `min-h-screen` con lockup y CTA a `kit-vaso-de-vidrio`; beneficios sin iconos; tarjetas sin caja; `RitualSection`; `CasaRealSection` a sangre; `BrandStorySection` como materia y oficio; newsletter en tabaco.

### 3.3 ✅ FASE 2.5 — Paleta 2026 + materiales (2026-08-20)
Ver sección 2. Paleta terracota/olivo/saffron + 6 clases de textura + grano global. PDP y checkout heredan la paleta automáticamente; **todavía NO tienen texturas aplicadas**.

### 3.4 FASE 3 — PDP — SIGUIENTE
🔒 El orden del buy box NO cambia. Solo tratamiento visual + dos añadidos.
1. Galería a sangre en móvil, sin borde ni radius.
2. Título a lockup; precio en `font-body`, discreto.
3. Acordeones con lenguaje de ritual, cerrados: `El ritual` · `Cuidado y seguridad` · `Materiales y medidas` · `Atención a clientes`.
4. **NUEVO "Combina bien con"**: `ProductAddOns` como fila editorial debajo del buy box → resuelve la falta de cross-sell en `perlas-originales-500-g`.
5. `<RitualSection />` al cierre de la PDP.
6. Barrer eyebrows viejos → `.eyebrow`; aplicar `texture-arena` / `texture-travertino` a las secciones de historia.

### 3.5 FASE 4 — Arte y fotografía (LA PALANCA MÁS GRANDE)
Set de **imágenes atmosféricas nocturnas**: penumbra, luz dorada, interiores saturados (madera, lino, cerámica, travertino, vidrio ámbar, metal cepillado), sombras largas. ⛔ **SIN ROSTROS.**
- Slots: (a) hero desktop + móvil, (b) fondo de `RitualSection`, (c) 3 ambientes para "Elige tu tono", (d) imagen de `BrandStorySection`.
- Generar con `imagegen--generate_image` + `reference_images` de productos reales. Cargar antes `media.product-imagery`.
- ⚠️ Las fotos de catálogo (4:5, fondo claro) NO se cambian: las usan los anuncios de Meta.

### 3.6 Lo que NO copiamos de Sensate
Founder-led · marquee de "6 sentidos" · esconder precios o quitar tachados · quitar badges de confianza/MSI/envío gratis · su densidad de texto casi nula en la PDP · video en loop en el hero (pendiente del video del owner).

### 3.7 Medición
Volumen insuficiente para A/B (122 usuarios/mes en la PDP principal). Medición secuencial con `posthog-query`: baseline de `viewcontent → addtocart` móvil, scroll depth y tiempo en página. Si el ATC móvil cae por debajo de 3.5%, revertir badges y densidad primero.

---

## 4. Recent Changes
- 2026-08-20 — 🎨 **PALETA 2026 + SISTEMA DE MATERIALES**. Warm Ivory / Travertino / Burnt Terracotta / Deep Olive / Saffron Gold / Muted Periwinkle. Tokens `dunaru-*` migrados a variables CSS con `<alpha-value>`; nuevos `terracota`, `periwinkle`, `travertino`, `laton`. 6 clases `texture-*` + `.hairline-metal` + grano global en `<body>`. Aplicadas en home, `Reviews`, `RitualSection`, `BrandStorySection`. Estrellas de reseñas a Saffron Gold.
- 2026-08-20 — ⚠️ **Aprendizaje**: `dunaru-champagne` pasó a latón oscuro, ilegible sobre fondos oscuros → hero, `RitualSection` y `.eyebrow-light` migrados a `dunaru-ambar`.
- 2026-08-20 — ⚠️ **Aprendizaje**: las clases con `position: relative` deben ir en `@layer components` o pisan las utilidades `absolute` de Tailwind.
- 2026-08-20 — ✅ **FASE 2 (home)**: hero lockup `min-h-screen`, beneficios sin iconos, tarjetas sin caja, `RitualSection`, `CasaRealSection` a sangre, `BrandStorySection` reescrita, newsletter en tabaco.
- 2026-08-20 — 🐞 `.hairline` es `height:1px`, NO un borde. `.full-bleed` sobra dentro de `layout="full-width"`.
- 2026-08-20 — ✅ **FASE 1**: `--radius: 0rem`, tokens oscuros, utilidades editoriales, `useReveal.ts`, `Reveal.tsx`.
- 2026-08-20 — ⛔ **DECISIÓN: dunaru NO será founder-led.**
- 2026-08-07 — 🔍 Auditoría PDP `perlas-originales-500-g` (8 hallazgos, ver `.lovivo/cro-log.md`).
- 2026-08-07 — ✅ Auditoría de landing móvil: 13 secciones → 9.
- 2026-08-07 — ✅ `optionLabel()` → "Color de la cera" + copy de cerámica.
- 2026-08-07 — ✅ Auditoría de checkout: `ShippingPromise`, resumen móvil cerrado, `CouponSection`, MSI bajo el Total.
- 2026-08-07 — ✅ Buy box rediseñado: `PDP_BENEFITS`, cantidad compacta, CTA `h-12` con precio.
- 2026-08-07 — ✅ `ProductStepsCarousel.tsx` + PDP reordenada (prueba social a la posición 3).
- 2026-08-07 — ✅ Landing con precios y nombres desde la DB (`buildCatalog`).
- 2026-07-31 — ✅ Renombre de catálogo (9 productos, slugs intactos).

## 5. Image Inventory
- **📐 Fotos de producto: 1122×1402 px (4:5), webp.** 9 productos, 75 imágenes en `product-images/products/`.
- ⚠️ Foto #1 de `perlas-originales-500-g` = `x3azemqdof.webp`. Candidata #1 a reemplazo.
- Colecciones sin imagen. **FAVICON**: `/favicon.png` (256×256).
- **UGC de clientas** (5 fotos): constante `UGC` en `src/data/reviews.ts`.
- **Hero**: `/hero-dunaru.webp` (desktop) · `/hero-dunaru-mobile.webp` (móvil). **Casa real**: `/casa-real-{sala,comedor,recibidor,recamara}.webp`.
- **4 PASOS** — base `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/`:
  Vierte → `/paso-vierte.webp` · Inserta → `1785521743155-htw95tvbi4b.webp` · Enciende → `1785521743156-3qeskqe43gv.webp` · Renueva → `/paso-renueva.webp`
- `RitualSection` usa provisionalmente la imagen de "Enciende". `BrandStorySection` usa `/paso-vierte.webp`. Ambas se reemplazan en Fase 4.
- Bloque aroma → `1785521743156-7ucg5c0kwb7.webp`. 🟡 `/pdp-vaso-decor.webp` huérfana.
- 🔴 **FALTA: video demo del mecanismo** (lo genera el user).
- 🟡 Los `steps` de `kit-vaso-de-concreto` siguen con `PLACEHOLDER`.
- 🔴 **FALTAN las imágenes atmosféricas nocturnas de la Fase 4** (sin rostros). Bloquean el 70% del efecto.
- ⛔ Descartadas por el owner: `1786132713652-czg3jwwtcrv.webp` y `1786129807292-5eb2uq5pl0m.webp`.

## 6. Known Issues
- 2026-08-20 — 🟠 **La paleta nueva no se ha auditado en PDP, carrito ni checkout.** Heredan tokens, pero hay que revisar contraste real, sobre todo cualquier `text-dunaru-champagne` sobre fondo oscuro y los verdes del `badge-msi`.
- 2026-08-20 — 🟡 **Texturas aún no aplicadas en PDP ni en `CasaRealSection`.** Pendiente para la Fase 3.
- 2026-08-20 — 🟡 Los hex de `TONOS` en la landing (`#F2EBDD`, `#E2CCA3`, `#1F1D1B`) son colores REALES de la cera, no de la marca: **no se cambian** con la paleta.
- 2026-08-20 — 🟡 Barrido de radius pendiente en la PDP (`rounded-full`, `rounded-[Npx]`, `rounded-xl/2xl`).
- 2026-08-20 — 🟠 Riesgo del rediseño: quitar cajas y bajar densidad puede reducir el ATC móvil (hoy 4.1%). **Home desplegada sin baseline capturado.**
- 2026-08-20 — 🟡 Eyebrows viejos aún vivos en `ProductStepsCarousel`, `Reviews` y la PDP.
- 2026-08-07 — 🔴 `perlas-originales-500-g` se llama "Recarga" y recibe el grueso del tráfico frío de Meta.
- 2026-08-07 — 🟠 Sin cross-sell en `perlas-originales-500-g` → se resuelve en 3.4 punto 4.
- 2026-08-07 — 🟠 Escalera de precio por gramo rota: Dúo 1 kg ($1.10/g) más caro que Reserva 1 kg ($0.80/g).
- 2026-08-07 — 🟡 `getReviewStats()` es global (4.9/15), no por SKU.
- 2026-08-07 — 🟡 Las fotos de `TONOS` son packshots, no escenas de ambiente.
- 2026-08-07 — 🟠 Slug `kit-vaso-de-concreto` incorrecto. Decisión: dejarlo.
- 2026-08-07 — 🟠 "+200 clientes felices" sin verificar.
- 2026-08-07 — 🟡 `ShippingPromise` asume envío gratis cuando `shippingCost === 0`.
- 2026-08-07 — 🟠 Los títulos del catálogo en la DB contienen guion largo.
- 2026-08-07 — 🟡 `PDP_BENEFITS` solo cubre 6 slugs.
- 2026-07-31 — 🟠 Footer de `EcommerceTemplate.tsx`: 3 nombres de producto hardcodeados.
- 2026-07-31 — 🔴 `ecommerce--update-product` NO persiste `compare_at_price`. Workaround: Dashboard manual.
- 2026-07-31 — 🟡 `lov-search-files` devuelve 0 resultados incluso para strings triviales. Usar `lov-view` con rutas directas.
- 2026-07-31 — 🟡 Autocapture de clics parece desactivado en PostHog.
- 2026-07-06 — 🔴 `meta-capi` edge function falla en preview.

## 7. Pending / Future Sessions
- [ALTA] **Auditar la paleta nueva en PDP, carrito y checkout** (contraste + `badge-msi`).
- [ALTA] **Ejecutar FASE 3 (PDP)**: galería a sangre, título lockup, acordeones de ritual, "Combina bien con", `RitualSection` de cierre, texturas.
- [ALTA] **Ejecutar FASE 4 (fotos atmosféricas nocturnas)**, sin rostros. 4 slots esperando imagen.
- [ALTA] Capturar baseline de PostHog (ATC móvil, scroll depth, tiempo en página).
- [ALTA] P0 de la PDP de perlas (renombrar sin "Recarga", foto #1 = resultado, bloque "¿te sirve tu recipiente?", tiers como "elige tus tonos"). Combinable con la Fase 3.
- [ALTA] `PDP_BENEFITS` para bowl-negro, vaso-extra-transparente y pack-30-mechas.
- [ALTA] Footer de `EcommerceTemplate.tsx`: nombres de producto → dinámicos.
- [ALTA] User: redirigir anuncios Meta al Kit Vela Rellenable · Vaso de Vidrio.
- [ALTA] VIDEO DEMO (lo graba el user) → primer slide del carrusel de pasos.
- [MED] Aplicar `texture-*` en `CasaRealSection` y en las secciones de historia de la PDP.
- [MED] Fotos reales para los `steps` de kit-vaso-de-concreto.
- [MED] Encuesta PostHog de salida en `/pagar` y en la PDP de perlas.
- [MED] Barrer el resto del sitio buscando guiones largos (—) en copy.
- [BAJA] Banners de colección y borrar imágenes huérfanas.