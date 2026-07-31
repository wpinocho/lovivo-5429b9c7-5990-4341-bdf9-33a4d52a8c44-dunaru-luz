# Store Plan — dunaru
<!-- Auto-maintained by Lovivo AI. READ THIS FIRST. UPDATE IT LAST. -->

## 1. Brand & Context
- Brand name: **dunaru** (dunaru.mx)
- Product: Velas perladas **rellenables** — **gránulos finos de cera tipo arena** (NO perlas grandes) + mechas de algodón. Material visual = arena/couscous fino.
- ⚠️ VOCABULARIO: usar **"rellenable"** (NO "recargable").
- Tesis: no vendemos "cera para velas". Vendemos una forma simple de crear luz y decoración en el recipiente que ya tienes.
- **AROMA**: las velas nacen SIN perfume. Posicionamiento = **"el aroma lo eliges tú"** (feature, no carencia).
- Target: Mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO, decoración + hogar + regalo
- Market: México. Moneda MXN. Idioma: español de México.
- Tono: claro, cálido, directo. Sin tecnicismos.
- Pagos: **A meses sin intereses vía Stripe** (hasta 6 meses). ⚠️ NUNCA nombrar "Stripe" ni "Mercado Pago" en la UI — solo "a meses sin intereses" / "tarjetas participantes".
- Envío: **2026-07-31 el owner eliminó el cargo de $99 de Perlas Originales.** Copy actual en PDP = "Envío gratis a todo México" para todos los productos. ⚠️ VERIFICAR en Dashboard que no haya umbral mínimo activo.
- WhatsApp REAL: `525531215386` (+52 55 3121 5386).
- REGLA DE INTEGRIDAD: **NUNCA reseñas falsas.** Las 15 reseñas SÍ son reales. Prueba social usa `getReviewStats()` (4.9 / 15).
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`
- RUTAS EN ESPAÑOL: producto = `/productos/:slug`, paquete = `/paquete/:slug`, carrito = `/carrito`, checkout = `/pagar`, **categoría = `/categorias/:handle`**.
- Competencia: **VelaVita.cl** (LATAM) y **Foton (US)**.
- ⚠️ **kit-vaso-de-concreto** es en realidad de **CERÁMICA**. Slug sigue diciendo "concreto".
- CATÁLOGO (precios MXN): Perlas Originales 500g $599 · Kit Vaso de Vidrio $899 · Reserva 1kg $999 · Dúo de Tonos $1,099 (de $1,398) · Kit bowl de Cerámica $1,099 · Trío de Tonos $1,499 (de $1,797) · Bowl negro $399 · Vaso extra transparente $249 · Pack 30 mechas $99.

## 2. Design System
- Fondo: Marfil #FAF6EF → `--background` · Alterno: Arena #F1E9DC → `bg-dunaru-arena`
- Texto: Carbón #2B2A27 → `--foreground` · Acento: Champagne #C2A878 → `text-dunaru-champagne`
- CTA: Ónix #1E1C1A → `--primary` · Detalle llama: Ámbar #D89A57 → `text-dunaru-ambar`
- Display: Instrument Serif → `font-display` · Body/UI: Manrope → `font-body`
- Tokens: `dunaru-marfil/arena/champagne/carbon/onix/ambar`
- Estética: editorial, mínima, mucho aire. Mobile-first.
- **MENÚ "Productos"**: dropdown en header (`EcommerceTemplate.tsx`) con `PRODUCT_CATEGORIES`.
- **PDP secciones** (`ProductStorySections.tsx`): garantías → "Crea tu vela en 4 pasos" (`HOW_IT_WORKS_STEPS`) → bloques editoriales → **Reviews** → tabla comparativa → FAQ → pago seguro. ⚠️ Reviews se movió ARRIBA el 2026-07-31.
- **`PERLAS_BENEFIT_BLOCKS`**: 5 bloques compartidos por perlas-originales-500-g, reserva-1-kg, d-o-de-tonos, tr-o-de-tonos.
- **4 PASOS duplicados en 2 lugares**: `HOW_IT_WORKS_STEPS` en `ProductStorySections.tsx` (PDP) y `STEPS` en `src/pages/ui/IndexUI.tsx` (landing). ⚠️ Cambiar imágenes/textos SIEMPRE en ambos.
- **Categoría landing** (`src/pages/Collection.tsx`): grid 2/3 cols; handle `todos` = catálogo completo.
- **PDP arriba del fold (post 2026-07-31)** en `src/pages/ui/ProductPageUI.tsx`:
  - Bloque `lg:hidden` ANTES de la galería: `<h1>` + promesa (`PDP_HEADLINE[slug]`) + rating compacto (`InlineRating`).
  - ⚠️ El `<h1>` vive SOLO en ese bloque móvil. La columna info usa `<p className="hidden lg:block">` para evitar doble h1.
  - Galería móvil = `aspect-[4/3]`.
  - `PDP_INCLUDES[slug]` = bloque "Qué incluye" (3 bullets) pegado al precio.
  - 3 reaseguros: Envío gratis a todo México · Garantía de 30 días · Hasta 6 meses sin intereses.
  - **Sticky bar SIEMPRE visible en móvil** (`translate-y-0` base; `md:translate-y-*` condicional con `scrolledPastCta`). Wrapper lleva `pb-32 md:pb-0`.
- `ProductCardUI.tsx` YA muestra estrellas + conteo por slug (`getReviewStats(slug)`).

---

## 3. Active Plan — Medir el efecto de los cambios CRO (revisar 2026-08-07)

**Estado**: Pasos 1, 2 y 4 de la auditoría → ✅ IMPLEMENTADOS 2026-07-31. Paso 3 (video) lo genera el user. Paso 5 (encuesta) opcional.

### Baseline a batir (ver `.lovivo/cro-log.md` para el detalle)
- Móvil 7d: 151 únicos vieron producto → 6 addtocart = **4.0%** → **0 compras**.
- Objetivo mínimo: **8% addtocart en móvil**.

### Qué revisar el 2026-08-07
1. `posthog-query`: viewcontent → addtocart en móvil, 7 días post-cambio vs 7 días previos.
2. `posthog-session-list` móvil: ¿siguen las sesiones con 0 clics?
3. initiatecheckout → purchase: ¿mejoró tras arreglar el envío?

### Pendiente del user (Dashboard, NO código)
1. **Redirigir presupuesto Meta** de Perlas Originales $599 → **Kit Vaso de Vidrio $899** (envío gratis, todo incluido). [ALTA]
2. **Verificar tarifa de envío nacional** — probar checkout con CP 64000 (MTY) y 97000 (Mérida). 20 initiatecheckout → 1 purchase en 30d con 0 errores JS. [ALTA]
3. **Confirmar que "Envío gratis a todo México" es cierto sin umbral** — el copy de la PDP ya lo afirma en TODOS los productos. Si hay mínimo de compra, avisar para ajustar el texto. [ALTA]
4. Grabar/subir el **video demo** (vierte → inserta mecha → enciende → renueva). Se insertará como primer slide del carrusel móvil y en "Cómo funciona".

---

## 4. Recent Changes
- 2026-07-31 — ✅ **CRO PASO 1+2+4 IMPLEMENTADOS** en `ProductPageUI.tsx` y `ProductStorySections.tsx`: (a) bloque promesa `lg:hidden` con h1 + `PDP_HEADLINE` + rating ARRIBA de la galería; (b) galería móvil `4/5`→`4/3`; (c) sticky CTA siempre visible en móvil + `pb-32`; (d) bloque "Qué incluye" (`PDP_INCLUDES`); (e) 4 badges genéricos → 3 concretos (envío gratis / garantía 30 días / 6 MSI); (f) Reviews movidas arriba de tabla comparativa y FAQ; (g) FAQ Perlas: "$99 de envío" → "envío gratis". Baseline y cambio registrados en `.lovivo/cro-log.md`.
- 2026-07-31 — 🔍 **AUDITORÍA CRO COMPLETA**. Embudo móvil: 151 personas → 6 al carrito (4%) → 0 compras. 172 sesiones con 0.0 clics y 0 errores JS = problema de mensaje. Anuncios Meta mandan 59 a Perlas Originales y 57 a Cerámica $1,099; Kit Vidrio $899 recibió 4.
- 2026-07-31 — ✅ IMÁGENES REALES del user: paso "Inserta", paso "Enciende" y bloque "El aroma lo eliges tú" (landing + PDP).
- 2026-07-31 — ✅ FAQ landing: quitado "Mercado Pago" → "tarjetas participantes (VISA y Mastercard)".
- 2026-07-28 — ✅ AROMA en PDP rellenables: bloque compartido + FAQ en los 4 productos.
- 2026-07-27 — 🟠 DIAGNÓSTICO CHECKOUT: "No realizamos envíos a esa dirección". Causa = falta TARIFA de envío MX.
- 2026-07-27 — ✅ HERO: "recargables"→"rellenables". CTA → /productos/perlas-originales-500-g. ⚠️ REVISAR: debería apuntar al Kit Vidrio.
- 2026-07-27 — ✅ PASO "Vierte": foto real en `public/paso-vierte.webp`.
- 2026-07-27 — ✅ BENEFICIOS COMPARTIDOS: const `PERLAS_BENEFIT_BLOCKS`.
- 2026-07-27 — ✅ IMÁGENES PDP (fotos reales user): bowl-negro, vaso-transparente, kit-cerámica.
- 2026-07-25 — ✅ MENÚ "Productos": dropdown desktop + móvil con 4 categorías.
- 2026-07-25 — ✅ Nueva página `src/pages/Collection.tsx` + ruta `/categorias/:handle`.
- 2026-07-25 — ✅ PDP para TODOS los 9 productos (`PDP_CONTENT`).
- 2026-07-23 — ✅ WHATSAPP: leyenda en PDP + footer.
- 2026-07-17 — ✅ FAVICON de marca `/favicon.png`.

## 5. Image Inventory
- **Colecciones**: sin imagen asignada (Kits/Accesorios/Recipientes image=null).
- **FAVICON**: `/favicon.png` (256x256).
- **FOTOS REALES catálogo**: `product-images/products/<hash>.webp`. 9 productos, 76 imágenes.
- **Hero desktop**: `/hero-dunaru.webp` · **Hero móvil**: `/hero-dunaru-mobile.webp` · **Casa real**: `/casa-real-{sala,comedor,recibidor}.webp`
- **4 PASOS** — base URL `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/`:
  - Vierte → `/paso-vierte.webp` (repo, foto real user)
  - Inserta → `1785521743155-htw95tvbi4b.webp` (foto real user)
  - Enciende → `1785521743156-3qeskqe43gv.webp` (foto real user)
  - Renueva → `/paso-renueva.webp` (generada, pendiente foto real)
- **Bloque "El aroma lo eliges tú"** → `1785521743156-7ucg5c0kwb7.webp` (foto real user).
- **`PERLAS_BENEFIT_BLOCKS` imgs**: h29qq6dodik, 4z1j2dq3ab9, go7315yuax, c47lrhv7fa + la de aroma.
- **Bloques PDP fotos reales user**: bowl-negro = yafqxd2xr9i · vaso-transparente = wovmtpzn66 · concreto luz = i54i3sm6qk · cerámica = u6xju9w4wjl · regalo = 77nbrytmoii · mecha pack = 5bsut1tyt6c.
- 🔴 **FALTA: video demo del mecanismo** (lo genera el user).

## 6. Known Issues
- 2026-07-31 — 🟠 **Checkout: 20 inicios → 1 compra en 30d con 0 errores JS.** Verificar cobertura de envío nacional (CP 64000 y 97000).
- 2026-07-31 — 🟠 **Copy "Envío gratis a todo México"** ahora aparece en TODAS las PDP. Si existe umbral mínimo, es una promesa falsa → ajustar.
- 2026-07-31 — 🟡 `lov-search-files` devuelve 0 resultados incluso para strings triviales (índice roto). Usar `lov-view` con rutas directas.
- 2026-07-31 — 🟡 Autocapture de clics parece desactivado en PostHog (`click_count`=0 en TODAS las sesiones). No confiar en esa métrica.
- 2026-07-31 — 🟡 Imports `RotateCcw` y `Lock` quedaron sin usar en `ProductPageUI.tsx` (no rompe build).
- 2026-07-27 — 🟡 FAQs de kit-vaso-de-concreto dicen "concreto"; material real es CERÁMICA.
- 2026-07-25 — 🟡 Perlas/Reserva/Dúo/Trío NO están en categoría del menú (solo "Todos").

## 7. Pending / Future Sessions
- [ALTA] 2026-08-07: medir addtocart móvil post-cambio vs baseline 4.0% y registrar Result en `cro-log.md`.
- [ALTA] User: redirigir anuncios Meta al Kit Vaso de Vidrio $899.
- [ALTA] User: verificar tarifa de envío nacional y probar checkout desde MTY/Mérida.
- [ALTA] VIDEO DEMO (lo graba el user) → insertar como primer slide del carrusel móvil de la PDP y en "Cómo funciona" de `IndexUI.tsx`.
- [MED] Cambiar CTA del hero de `IndexUI.tsx` → `/productos/kit-vaso-de-vidrio` (producto de entrada).
- [MED] Encuesta PostHog de salida en PDP móvil: "¿Qué te frenó de comprar hoy?" (`posthog-survey`).
- [MED] Añadir `PDP_HEADLINE` / `PDP_INCLUDES` para bowl-negro, vaso-transparente y pack de mechas.
- [MED] Pedir al user foto real del paso "Renueva".
- [MED] FASE AROMAS: lanzar esencias propias dunaru.
- [MED] Considerar renombrar slug "kit-vaso-de-concreto" → cerámica.
- [BAJA] Banners de colección (image null).
- [BAJA] Borrar huérfanos: `public/favicon.svg`, `public/tmp-upload-hero.webp`, `public/pdp-aroma.webp`, `public/paso-inserta.webp`, `public/paso-enciende.webp`.