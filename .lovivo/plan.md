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
| Top bar / footer | Deep Olive oscuro | — | 75 13% 15% | `--primary`, `dunaru-onix` |
| **CTA "Comprar ahora"** | **Verde oliva vivo** | — | **75 24% 25%** | **`--dunaru-oliva-cta`** (solo `Button` variant `default`) |
| Acento cálido | Saffron Gold | #D4A24A | 38 62% 56% | `--accent`, `dunaru-ambar` |
| Acento distintivo | Muted Periwinkle | #8B93B9 | 230 25% 64% | `dunaru-periwinkle` |
| Periwinkle legible | — | — | 230 27% 45% | `--dunaru-periwinkle-deep` (solo CSS) |
| Metal | Latón cepillado | — | 36 46% 50% | `dunaru-laton` |
- `dunaru-champagne` ya NO es champagne: hoy es **latón 36 46% 45%**, pensado para texto sobre fondos CLAROS.
- ⚠️ **REGLA DE CONTRASTE**: sobre fondos oscuros (`tabaco`, `cacao`, hero) usar **`dunaru-ambar`**, NUNCA `dunaru-champagne`.
- Oscuros atmosféricos: `dunaru-tabaco` (75 13% 13%) y `dunaru-cacao` (75 11% 21%), ahora en familia olivo.
- **Fuente de verdad = `src/index.css`.** `tailwind.config.ts` solo referencia `hsl(var(--x) / <alpha-value>)`.
- Display: Instrument Serif (`font-display`) · Body/UI: Manrope (`font-body`).
- **`--radius: 0rem`**. Excepción: `rounded-field` (0.25rem) en `ui/input.tsx` y `ui/textarea.tsx`. Los `rounded-full` se conservan.

### 🖱️ ESTADOS HOVER (regla de marca, desde 2026-08-20, ajustada 2026-08-20 x2)
- **Botón `default` (CTA principal "Comprar ahora", en TODAS las PDP vía `Button`)**: reposo `bg-[hsl(var(--dunaru-oliva-cta))]` + `text-dunaru-marfil` (verde oliva vivo, texto BEIGE/marfil — ⚠️ NO periwinkle, se probó y se revirtió 2026-08-20); hover pasa a Burnt Terracotta (`bg-secondary` + `text-secondary-foreground`). Vive en `src/components/ui/button.tsx`.
- **Botón "Agregar al carrito" de la PDP** (`ProductPageUI.tsx`, variant `outline`, h-11, debajo del CTA principal): className custom que SOBRESCRIBE el hover terracota genérico. Hover propio = **periwinkle**. Excepción puntual del owner.
- Otras variantes de `ui/button.tsx`: `outline` borde+texto terracota + fill 10% al hover · `secondary` terracota/85 · `ghost` fill terracota 10% + texto terracota · `link` texto terracota.
  ⚠️ Cualquier CTA con `bg-*`/`hover:*` hardcodeado en className NO hereda esto.
- **PATRÓN OFICIAL "INVERSIÓN MARFIL ↔ TERRACOTA"** (botones claros sobre fondo oscuro O CTA secundario en tarjeta):
  reposo `bg-dunaru-marfil` + `text-dunaru-terracota`; hover `bg-dunaru-terracota` + `text-dunaru-marfil`. **Sin borde.**
  Usado en: CTA del hero (`IndexUI`), botón "Agregar" de `ProductCardUI`.
- **PATRÓN "OUTLINE TERRACOTA"** (CTA secundario sobre fondo claro, desde 2026-08-20):
  `rounded-none border-dunaru-terracota/45 bg-transparent text-dunaru-terracota hover:bg-dunaru-terracota hover:text-dunaru-marfil hover:border-dunaru-terracota` + uppercase `tracking-[0.12em] text-xs`.
  Usado en: footer del carrusel de pasos ("Ver el kit completo"), flechas del carrusel.
- **SELECTOR DE VARIANTE (pill) — patrón oficial, sin borde**:
  activo `bg-dunaru-onix` + `text-dunaru-marfil`; reposo `bg-dunaru-arena/70` + `text-dunaru-carbon`;
  hover `bg-dunaru-periwinkle/25` + `text-[hsl(var(--dunaru-periwinkle-deep))]`.
  Swatch de color: seleccionado = `ring-2 ring-offset-2 ring-dunaru-terracota`.
  ⚠️ **`ProductPageUI.tsx` (~línea 675) TODAVÍA usa `bg-foreground`/`border-foreground`.** Pendiente Fase 3.
- **NAVEGACIÓN → MUTED PERIWINKLE.** Clases en `index.css` (`@layer components`): `.nav-link`, `.nav-link-mobile`, `.nav-link-dark`, `.nav-item`.
- ⚠️ `.nav-link` usa `position: relative` → vive en `@layer components`. No sacarla de ahí.
- 🎯 Reparto de roles: **oliva/periwinkle = selección, navegación y CTA principal** · **terracota/marfil = hover de CTA y acción secundaria** · **terracota + periwinkle juntos = acentos editoriales de sección** (numerales, reglas, dots) · EXCEPCIÓN: hover de "Agregar al carrito" en periwinkle.

### 🪨 MATERIALES / TEXTURAS (index.css, `@layer components`)
Todas pintan un `::before` con `z-index:-1` dentro de un stacking context aislado.
| Clase | Material | Uso |
|---|---|---|
| `.texture-grain` | grano de papel sutil | cualquier sección clara neutra |
| `.texture-arena` | cera en arena, granular fina | "Elige tu vela", reseñas |
| `.texture-travertino` | piedra porosa, veteada | tira de beneficios, historia de marca |
| `.texture-terracota` | cerámica mineral mate | insignias y bloques terracota |
| `.texture-ambar` | vidrio ámbar (blend `screen`) | **solo sobre fondos oscuros** |
| `.texture-metal` | metal cepillado satinado | ribetes, badges, detalles |
| `.hairline-metal` | divisor con reflejo de latón | separadores en secciones oscuras |
- El `<body>` lleva el grano de papel base (`--grain`, SVG feTurbulence inline, `background-attachment: fixed`).
- ⚠️ Las clases `texture-*` fuerzan `position: relative`. **No sacarlas de `@layer components`.**

### Utilidades editoriales
- `.lockup` → serif + versalitas + `tracking .14em`. `.lockup em` → itálica minúscula.
- `.eyebrow` (latón, fondos claros) · `.eyebrow-light` (saffron gold, fondos oscuros).
- `.h-editorial` (30 → 48 → 60px) · `.transition-editorial` (700ms) · `<Reveal delay={n}>` / `useReveal()`.
- `.full-bleed` → ⚠️ NO usar dentro de `layout="full-width"`.
- ⚠️ `.hairline` / `.hairline-dark` / `.hairline-metal` son DIVISORES (`height: 1px`), NO bordes.

### 🔢 CARRUSEL DE PASOS (`ProductStepsCarousel.tsx`) — patrón terracota + periwinkle (2026-08-20)
Componente COMPARTIDO: home (`IndexUI`, `bg-background`, con eyebrow y footer CTA) + todas las PDP (`ProductStorySections`, `bg-dunaru-arena`, sin eyebrow). Un solo archivo = cambio replicado en todo el sitio.
- Eyebrow en `text-dunaru-terracota` (antes champagne).
- Bajo el título: ornamento centrado = línea terracota/50 + rombo periwinkle + línea terracota/50.
- Numeral del paso: **cuadrado** (sin radius) `bg-dunaru-terracota` + `text-dunaru-marfil`, anclado a la esquina; al hover del grupo pasa a `--dunaru-periwinkle-deep`.
- Imagen: sin radius, fondo `dunaru-marfil`, zoom 1.04 en 700ms al hover.
- Título del paso: `font-display` precedido de una regla periwinkle de 20px que crece a 32px y se vuelve terracota al hover.
- Dots: activo `w-8 bg-dunaru-terracota`; inactivo `w-4 bg-dunaru-periwinkle/45` con hover periwinkle sólido.
- Flechas: patrón "outline terracota".

### Reglas de layout existentes
- **TOP BAR** (`EcommerceTemplate.tsx`): barra fija, 2 items. NO se replica en el checkout a propósito.
- **HEADER OVERLAY**: prop `headerOverlay` en `EcommerceTemplate`/`PageTemplate`. Solo `IndexUI` lo usa.
- **🛒 ORDEN OFICIAL DEL BUY BOX** (`ProductPageUI.tsx`): 1 título+precio+MSI+rating · 2 `PDP_BENEFITS[slug]` · 3 variantes · 4 cantidad · 5 add-ons/`ProductQuantityTiers` · 6 `<DeliveryEstimate />` · 7 CTA `h-12` con precio · 8 CTA outline `h-11` "Agregar al carrito" · 9 micro-línea `Lock` · 10 badges · 11 `<PdpSocialProof />` · 12 WhatsApp · 13 acordeones cerrados.
- ⚠️ `TIER_SELECTOR_SLUGS` (solo `perlas-originales-500-g`) reemplaza `ProductAddOns` → esa PDP no tiene cross-sell.
- `optionLabel(name, slug)` renombra "Color" → "Color de la cera", excepto en `CONTAINER_ONLY_SLUGS`.
- `PdpTrust.tsx` exporta `getDeliveryRange()`, `DeliveryEstimate`, `PdpSocialProof({ slug?, linkable? })`.
- **ORDEN DE LA PDP** (`ProductStorySections.tsx`): garantías → `ProductStepsCarousel` → reseñas → bloques editoriales → tabla comparativa → FAQ → CTA de cierre.
- **📐 RATIO DE IMAGEN DE PRODUCTO = 4:5 (1122×1402)** + `object-cover`.
- **`ProductCardUI.tsx`**: sin borde de card, imagen sobre `bg-dunaru-arena/40`, título `font-display`, estrellas en `dunaru-ambar`.

### 🏠 LANDING (`src/pages/ui/IndexUI.tsx`) — orden oficial
1. Hero (`min-h-screen`, tabaco + `texture-ambar`) · 2. Beneficios (`texture-travertino`) · 3. Cómo funciona (`ProductStepsCarousel`) · 4. **Elige tu vela** (`SHOP_CARDS`, `texture-arena`) · 5. `<RitualSection />` · 6. `<Reviews />` · 7. Elige tu tono · 8. `<CasaRealSection />` · 9. `<BrandStorySection />` · 10. FAQ · 11. Newsletter tabaco + WhatsApp.
- ⚠️ Prohibido duplicar SKUs en varias secciones. Precios y títulos SIEMPRE dinámicos vía `buildCatalog(logic.products)`.

### 🧾 CHECKOUT (`src/pages/ui/CheckoutUI.tsx`) — reglas fijas
- Header minimal, solo logo. Sin nav, sin top bar promocional.
- Móvil: `MobileOrderSummary` (CERRADO) → `ShippingPromise` → `PdpSocialProof linkable={false}` → SSL → PayPal → wallets → email → dirección → aviso MSI → tarjeta → estrellas → CTA → badges + WhatsApp.
- 🔒 **El checkout NO se toca en el rediseño: solo hereda tokens.**

---

## 3. Active Plan — REDISEÑO "HIGH END" (Sensate)

**Estado**: ✅ Fase 1 · ✅ Fase 2 · ✅ Fase 2.5 · ✅ Fase 2.6 · ✅ Fase 2.7 · ✅ Fase 2.8 · ✅ Fase 2.9 (carrusel de pasos terracota+periwinkle). ⏭️ Fase 3 y Fase 4 pendientes.

### 3.0 REGLA MAESTRA
Elevar las **superficies de marca**, no tocar la **maquinaria de conversión**.
- ✅ Elevar: hero, secciones editoriales, footer, tipografía, tratamiento de imagen, transiciones, galería de PDP.
- 🔒 No tocar: buy box, checkout, `DeliveryEstimate`, `PdpSocialProof`, avisos MSI, envío gratis, WhatsApp.
- Si un cambio estético reduce claridad de precio, disponibilidad o envío → **no se hace**.

### 3.1–3.6 ✅ Completadas (2026-08-20)
Fase 1 sistema base · Fase 2 home · Fase 2.5 paleta + texturas · Fase 2.6 hovers + `ProductCardUI` · Fase 2.7 CTA oliva/marfil · Fase 2.8 hover periwinkle en "Agregar al carrito".

### 3.6b ✅ FASE 2.9 — Carrusel de pasos (2026-08-20)
`ProductStepsCarousel.tsx` migrado a acentos terracota + periwinkle (ver sección 2). Footer CTA de la home ("Ver el kit completo") al patrón "outline terracota". Al ser componente compartido, el cambio se replica en home y en TODAS las PDP.

### 3.7 FASE 3 — PDP — SIGUIENTE
🔒 El orden del buy box NO cambia. Solo tratamiento visual + dos añadidos.
1. Galería a sangre en móvil, sin borde ni radius.
2. Título a lockup; precio en `font-body`, discreto.
3. Acordeones con lenguaje de ritual, cerrados: `El ritual` · `Cuidado y seguridad` · `Materiales y medidas` · `Atención a clientes`.
4. **NUEVO "Combina bien con"**: `ProductAddOns` debajo del buy box → resuelve la falta de cross-sell en `perlas-originales-500-g`.
5. `<RitualSection />` al cierre de la PDP.
6. Barrer eyebrows viejos → `.eyebrow`; aplicar texturas a las secciones de historia.
7. **Migrar el selector de variantes de `ProductPageUI.tsx` (~línea 675) al patrón oficial de pills**.
8. Migrar `ProductStorySections.tsx` (garantías, bloques, tabla comparativa) de `dunaru-champagne` a terracota/periwinkle, igual que el carrusel.

### 3.8 FASE 4 — Arte y fotografía (LA PALANCA MÁS GRANDE)
Set de **imágenes atmosféricas nocturnas**: penumbra, luz dorada, interiores saturados, sombras largas. ⛔ **SIN ROSTROS.**
- Slots: (a) hero desktop + móvil, (b) fondo de `RitualSection`, (c) 3 ambientes para "Elige tu tono", (d) imagen de `BrandStorySection`.
- Generar con `imagegen--generate_image` + `reference_images` de productos reales. Cargar antes `media.product-imagery`.
- ⚠️ Las fotos de catálogo (4:5, fondo claro) NO se cambian: las usan los anuncios de Meta.

### 3.9 Lo que NO copiamos de Sensate
Founder-led · marquee de "6 sentidos" · esconder precios o quitar tachados · quitar badges de confianza/MSI/envío gratis · densidad de texto casi nula en la PDP.

### 3.10 Medición
Volumen insuficiente para A/B (122 usuarios/mes en la PDP principal). Medición secuencial con `posthog-query`. Si el ATC móvil cae por debajo de 3.5%, revertir badges y densidad primero.

---

## 4. Recent Changes
- 2026-08-20 — 🔢 **Carrusel "Crea tu vela en 4 pasos" a terracota + periwinkle** (`ProductStepsCarousel.tsx`, compartido home + todas las PDP): eyebrow terracota, ornamento terracota/rombo periwinkle bajo el título, numeral cuadrado terracota→periwinkle al hover, imagen sin radius con zoom lento, regla periwinkle antes del título del paso, dots terracota/periwinkle, flechas outline terracota. En `IndexUI.tsx` el CTA "Ver el kit completo" pasó al patrón outline terracota.
- 2026-08-20 — 🟢 **"Agregar al carrito" (PDP) con hover periwinkle** (excepción puntual del owner).
- 2026-08-20 — 🟢 **CTA "Comprar ahora" — texto BEIGE/marfil** sobre verde oliva (`--dunaru-oliva-cta`), hover terracota.
- 2026-08-20 — 🎴 **`ProductCardUI` a la paleta 2026** (pills oliva/periwinkle, CTA marfil ↔ terracota, sin bordes).
- 2026-08-20 — 🖱️ **CTA del hero con inversión de color** marfil ↔ terracota.
- 2026-08-20 — 🖱️ **ESTADOS HOVER DE MARCA** en `ui/button.tsx` + navegación periwinkle en `index.css`.
- 2026-08-20 — 🎨 **PALETA 2026 + SISTEMA DE MATERIALES** (6 clases `texture-*` + grano global).
- 2026-08-20 — ⚠️ **Aprendizaje**: `dunaru-champagne` pasó a latón oscuro, ilegible sobre fondos oscuros → usar `dunaru-ambar`.
- 2026-08-20 — ⚠️ **Aprendizaje**: las clases con `position: relative` deben ir en `@layer components`.
- 2026-08-20 — ✅ **FASE 2 (home)** completa.
- 2026-08-20 — 🐞 `.hairline` es `height:1px`, NO un borde.
- 2026-08-20 — ✅ **FASE 1**: `--radius: 0rem`, tokens oscuros, utilidades editoriales.
- 2026-08-20 — ⛔ **DECISIÓN: dunaru NO será founder-led.**
- 2026-08-07 — 🔍 Auditoría PDP `perlas-originales-500-g` (ver `.lovivo/cro-log.md`).
- 2026-08-07 — ✅ Auditoría de landing móvil: 13 secciones → 9.

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
- 🔴 **FALTAN las imágenes atmosféricas nocturnas de la Fase 4** (sin rostros).
- ⛔ Descartadas por el owner: `1786132713652-czg3jwwtcrv.webp` y `1786129807292-5eb2uq5pl0m.webp`.

## 6. Known Issues
- 2026-08-20 — 🟠 **`ProductStorySections.tsx` sigue en `dunaru-champagne`** (tira de garantías, checks de bullets, tabla comparativa). Debe alinearse a terracota/periwinkle como el carrusel → Fase 3 punto 8.
- 2026-08-20 — 🟠 **La PDP sigue con hovers y colores hardcodeados** (selector de variantes `ProductPageUI.tsx` ~línea 675: `bg-foreground`/`border-foreground`).
- 2026-08-20 — 🟠 **La paleta nueva no se ha auditado en carrito ni checkout.**
- 2026-08-20 — 🟡 **Texturas aún no aplicadas en PDP ni en `CasaRealSection`.**
- 2026-08-20 — 🟡 Los hex de `TONOS` en la landing (`#F2EBDD`, `#E2CCA3`, `#1F1D1B`) son colores REALES de la cera: **no se cambian**.
- 2026-08-20 — 🟡 Barrido de radius pendiente en la PDP.
- 2026-08-20 — 🟠 Riesgo del rediseño: bajar densidad puede reducir el ATC móvil (hoy 4.1%). **Sin baseline capturado.**
- 2026-08-07 — 🔴 `perlas-originales-500-g` se llama "Recarga" y recibe el grueso del tráfico frío de Meta.
- 2026-08-07 — 🟠 Sin cross-sell en `perlas-originales-500-g`.
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
- 2026-07-31 — 🟡 `lov-search-files` devuelve resultados falsos o vacíos incluso para strings triviales (reconfirmado 2026-08-20, 3 veces seguidas). **Verificar SIEMPRE con `lov-view`.**
- 2026-07-31 — 🟡 Autocapture de clics parece desactivado en PostHog.
- 2026-07-06 — 🔴 `meta-capi` edge function falla en preview.

## 7. Pending / Future Sessions
- [ALTA] **Ejecutar FASE 3 (PDP)**: galería a sangre, título lockup, acordeones de ritual, "Combina bien con", `RitualSection` de cierre, texturas, migrar variantes/CTAs y **`ProductStorySections` a terracota/periwinkle**.
- [ALTA] **Auditar la paleta nueva en carrito y checkout**.
- [ALTA] **Ejecutar FASE 4 (fotos atmosféricas nocturnas)**, sin rostros. 4 slots esperando imagen.
- [ALTA] Capturar baseline de PostHog (ATC móvil, scroll depth, tiempo en página).
- [ALTA] P0 de la PDP de perlas (renombrar sin "Recarga", foto #1 = resultado, bloque "¿te sirve tu recipiente?", tiers como "elige tus tonos").
- [ALTA] `PDP_BENEFITS` para bowl-negro, vaso-extra-transparente y pack-30-mechas.
- [ALTA] Footer de `EcommerceTemplate.tsx`: nombres de producto → dinámicos.
- [ALTA] User: redirigir anuncios Meta al Kit Vela Rellenable · Vaso de Vidrio.
- [ALTA] VIDEO DEMO (lo graba el user) → primer slide del carrusel de pasos.
- [MED] Aplicar `texture-*` en `CasaRealSection` y en las secciones de historia de la PDP.
- [MED] Fotos reales para los `steps` de kit-vaso-de-concreto.
- [MED] Encuesta PostHog de salida en `/pagar` y en la PDP de perlas.
- [MED] Barrer el resto del sitio buscando guiones largos (—) en copy.
- [BAJA] Banners de colección y borrar imágenes huérfanas.