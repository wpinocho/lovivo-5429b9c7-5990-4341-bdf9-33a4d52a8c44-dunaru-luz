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
- Envío: **ENVÍO GRATIS A TODO MÉXICO, SIN MÍNIMO.** El cargo de $99 de Perlas fue eliminado por el owner (2026-07-31) y el copy ya se limpió de landing + PDP + selector de volumen.
- WhatsApp REAL: `525531215386` (+52 55 3121 5386).
- REGLA DE INTEGRIDAD: **NUNCA reseñas falsas.** Las 15 reseñas SÍ son reales. Prueba social usa `getReviewStats()` (4.9 / 15).
- REGLA DE INTEGRIDAD (precios): **NUNCA inventar precios tachados.** El owner los puso a mano en Dashboard el 2026-07-31 (ver §4).
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`
- RUTAS EN ESPAÑOL: producto = `/productos/:slug`, paquete = `/paquete/:slug`, carrito = `/carrito`, checkout = `/pagar`, **categoría = `/categorias/:handle`**.
- Competencia: **VelaVita.cl** (LATAM) y **Foton (US)**.
- ⚠️ **kit-vaso-de-concreto** es en realidad de **CERÁMICA**. Slug sigue diciendo "concreto"; el título ya dice Cerámica.

### CATÁLOGO (nombres nuevos 2026-07-31 · slugs INTACTOS)
| Slug | Título nuevo | Precio | Antes |
|---|---|---|---|
| perlas-originales-500-g | Cera Perlada Rellenable 500 g | $599 | $799 |
| reserva-1-kg | Cera Perlada Rellenable 1 kg | $999 | — (falta) |
| kit-vaso-de-vidrio | Kit Vela Rellenable · Vaso de Vidrio | $899 | $999 |
| kit-vaso-de-concreto | Kit Vela Rellenable · Bowl de Cerámica | $1,099 | $1,199 |
| d-o-de-tonos | Dúo de Tonos · 1 kg de Cera Perlada | $1,099 | $1,398 |
| tr-o-de-tonos | Trío de Tonos · 1.5 kg de Cera Perlada | $1,499 | $1,797 |
| bowl-negro | Bowl de Cerámica Negro | $399 | — |
| vaso-extra-transparente | Vaso de Vidrio Transparente | $249 | — |
| pack-30-mechas | Pack de 30 Mechas de Algodón | $99 | — |

## 2. Design System
- Fondo: Marfil #FAF6EF → `--background` · Alterno: Arena #F1E9DC → `bg-dunaru-arena`
- Texto: Carbón #2B2A27 → `--foreground` · Acento: Champagne #C2A878 → `text-dunaru-champagne`
- CTA: Ónix #1E1C1A → `--primary` · Detalle llama: Ámbar #D89A57 → `text-dunaru-ambar`
- Display: Instrument Serif → `font-display` · Body/UI: Manrope → `font-body`
- Tokens: `dunaru-marfil/arena/champagne/carbon/onix/ambar`
- Estética: editorial, mínima, mucho aire. Mobile-first.
- **MENÚ "Productos"**: dropdown en header (`EcommerceTemplate.tsx`) con `PRODUCT_CATEGORIES`.
- **PDP secciones** (`ProductStorySections.tsx`): garantías → "Crea tu vela en 4 pasos" (`HOW_IT_WORKS_STEPS`) → bloques editoriales → **Reviews** → tabla comparativa → FAQ → pago seguro.
- **`PERLAS_BENEFIT_BLOCKS`**: 5 bloques compartidos por perlas-originales-500-g, reserva-1-kg, d-o-de-tonos, tr-o-de-tonos.
- **4 PASOS duplicados en 2 lugares**: `HOW_IT_WORKS_STEPS` en `ProductStorySections.tsx` (PDP) y `STEPS` en `src/pages/ui/IndexUI.tsx` (landing). ⚠️ Cambiar imágenes/textos SIEMPRE en ambos.
- **Categoría landing** (`src/pages/Collection.tsx`): grid 2/3 cols; handle `todos` = catálogo completo.
- **📐 RATIO DE IMAGEN DE PRODUCTO = 4:5 (1122×1402 px)**. TODOS los contenedores de galería deben usar `aspect-[4/5]` + `object-cover`. ⚠️ Otro ratio + `object-contain` = huecos laterales en móvil (error corregido 2026-07-31).
- **PDP arriba del fold** en `src/pages/ui/ProductPageUI.tsx`: bloque `lg:hidden` con h1 + `PDP_HEADLINE[slug]` + `InlineRating`; `PDP_INCLUDES[slug]`; `PDP_VALUE_ANCHOR[slug]`; 3 reaseguros; sticky bar SOLO tras pasar el CTA inline; `VolumeBadge` eliminado.
- ⚠️ **Nombres de producto hardcodeados en `IndexUI.tsx`** (arrays `PRODUCTS`, `BUNDLES`, cards de "¿Cómo quieres empezar?" y chips de volumen). Si se renombra en Dashboard, hay que sincronizar aquí a mano.

---

## 3. Active Plan — Medir el efecto de los cambios CRO (revisar 2026-08-07)

**Estado**: Auditoría CRO implementada + ronda de correcciones del owner + limpieza de envío + renombre de catálogo (todo 2026-07-31). Falta el video demo (lo genera el user).

### Baseline a batir (ver `.lovivo/cro-log.md`)
- Móvil 7d: 151 únicos vieron producto → 6 addtocart = **4.0%** → **0 compras**.
- Objetivo mínimo: **8% addtocart en móvil**.

### Qué revisar el 2026-08-07
1. `posthog-query`: viewcontent → addtocart en móvil, 7 días post-cambio vs 7 días previos.
2. `posthog-session-list` móvil: ¿siguen las sesiones con 0 clics?
3. initiatecheckout → purchase: ¿mejoró tras arreglar el envío?
4. ¿Cambió el CTR/tiempo en página tras el renombre de productos?

---

## 4. Recent Changes
- 2026-07-31 — ✅ **RENOMBRE DE CATÁLOGO (9 productos, slugs intactos)**: nombres descriptivos + keyword SEO ("Cera Perlada Rellenable", "Kit Vela Rellenable · …"). Ver tabla en §1. Sincronizados también los títulos hardcodeados de `IndexUI.tsx`.
- 2026-07-31 — ✅ **LIMPIEZA DEL CARGO DE $99**: `ProductQuantityTiers.tsx` ("Envío de Perlas Originales: +$99" → "Envío gratis a todo México") y `IndexUI.tsx` (card de Perlas "+$99 envío" → "envío gratis", hero "Envío gratis desde $899" → "a todo México", FAQ "desde $899" → "sin monto mínimo"). También FAQ "(vidrio o concreto)" → "(vaso de vidrio o bowl de cerámica)".
- 2026-07-31 — ✅ **El owner puso los `compare_at_price` a mano en Dashboard**: Perlas $799 · Kit Vidrio $999 · Cerámica $1,199 · Dúo $1,398 · Trío $1,797. ⚠️ **Reserva 1 kg sigue SIN precio tachado** (sugerido: $1,198 = 2× 500 g).
- 2026-07-31 — ✅ **CORRECCIONES DEL OWNER sobre la ronda CRO** en `ProductPageUI.tsx`: galería móvil `aspect-[4/5]`+`object-cover`; sticky bar revertida a aparecer solo tras pasar el CTA; `VolumeBadge` eliminado; nuevo `PDP_VALUE_ANCHOR`; imports muertos limpiados.
- 2026-07-31 — 🐛 **BUG REPORTADO**: `ecommerce--update-product` devuelve success pero NO persiste `compare_at_price` (ID 365f54ae). El campo `title` SÍ persiste correctamente.
- 2026-07-31 — ✅ **CRO PASO 1+2+4 IMPLEMENTADOS**: bloque promesa `lg:hidden` con h1 + `PDP_HEADLINE` + rating; sticky CTA; `PDP_INCLUDES`; 3 badges concretos; Reviews arriba de tabla comparativa y FAQ.
- 2026-07-31 — 🔍 **AUDITORÍA CRO COMPLETA**. Embudo móvil: 151 personas → 6 al carrito (4%) → 0 compras.
- 2026-07-31 — ✅ IMÁGENES REALES del user: paso "Inserta", paso "Enciende" y bloque "El aroma lo eliges tú".
- 2026-07-31 — ✅ FAQ landing: quitado "Mercado Pago" → "tarjetas participantes (VISA y Mastercard)".
- 2026-07-28 — ✅ AROMA en PDP rellenables: bloque compartido + FAQ en los 4 productos.
- 2026-07-27 — ✅ HERO: "recargables"→"rellenables". CTA → /productos/perlas-originales-500-g.
- 2026-07-27 — ✅ PASO "Vierte": foto real en `public/paso-vierte.webp`.
- 2026-07-27 — ✅ BENEFICIOS COMPARTIDOS: const `PERLAS_BENEFIT_BLOCKS`.
- 2026-07-25 — ✅ MENÚ "Productos": dropdown desktop + móvil con 4 categorías.
- 2026-07-25 — ✅ PDP para TODOS los 9 productos (`PDP_CONTENT`).

## 5. Image Inventory
- **📐 Todas las fotos de producto son 1122×1402 px (4:5), webp.**
- **Colecciones**: sin imagen asignada (Kits/Accesorios/Recipientes image=null).
- **FAVICON**: `/favicon.png` (256x256).
- **FOTOS REALES catálogo**: `product-images/products/<hash>.webp`. 9 productos, 75 imágenes.
- **Hero desktop**: `/hero-dunaru.webp` · **Hero móvil**: `/hero-dunaru-mobile.webp` · **Casa real**: `/casa-real-{sala,comedor,recibidor}.webp`
- **4 PASOS** — base URL `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/`:
  - Vierte → `/paso-vierte.webp` (repo, foto real user)
  - Inserta → `1785521743155-htw95tvbi4b.webp` (foto real user)
  - Enciende → `1785521743156-3qeskqe43gv.webp` (foto real user)
  - Renueva → `/paso-renueva.webp` (generada, pendiente foto real)
- **Bloque "El aroma lo eliges tú"** → `1785521743156-7ucg5c0kwb7.webp` (foto real user).
- **`PERLAS_BENEFIT_BLOCKS` imgs**: h29qq6dodik, 4z1j2dq3ab9, go7315yuax, c47lrhv7fa + la de aroma.
- 🔴 **FALTA: video demo del mecanismo** (lo genera el user).

## 6. Known Issues
- 2026-07-31 — 🟠 **Sin verificar si quedan nombres viejos hardcodeados** en `ProductStorySections.tsx` (tabla comparativa / FAQ por slug). Revisar en la próxima sesión.
- 2026-07-31 — 🔴 **`ecommerce--update-product` NO persiste `compare_at_price`** (reportado, ID 365f54ae). Workaround: Dashboard manual.
- 2026-07-31 — 🟠 **Checkout: 20 inicios → 1 compra en 30d con 0 errores JS.** Verificar cobertura de envío nacional (CP 64000 y 97000).
- 2026-07-31 — 🟡 `lov-search-files` devuelve 0 resultados incluso para strings triviales (índice roto). Usar `lov-view` con rutas directas.
- 2026-07-31 — 🟡 Autocapture de clics parece desactivado en PostHog (`click_count`=0 en TODAS las sesiones).
- 2026-07-27 — 🟡 FAQs de kit-vaso-de-concreto dicen "concreto"; material real es CERÁMICA.
- 2026-07-25 — 🟡 Perlas/Reserva/Dúo/Trío NO están en categoría del menú (solo "Todos").

## 7. Pending / Future Sessions
- [ALTA] Revisar `ProductStorySections.tsx` y `EcommerceTemplate.tsx` por nombres de producto viejos hardcodeados.
- [ALTA] User: poner `compare_at_price` de **Reserva 1 kg = $1,198** en Dashboard (único que falta).
- [ALTA] 2026-08-07: medir addtocart móvil post-cambio vs baseline 4.0% y registrar Result en `cro-log.md`.
- [ALTA] User: redirigir anuncios Meta al Kit Vela Rellenable · Vaso de Vidrio $899.
- [ALTA] User: verificar tarifa de envío nacional y probar checkout desde MTY/Mérida.
- [ALTA] VIDEO DEMO (lo graba el user) → primer slide del carrusel móvil de la PDP y en "Cómo funciona" de `IndexUI.tsx`.
- [MED] Actualizar descripciones de producto para que digan "cerámica" en kit-vaso-de-concreto (la description sigue diciendo "concreto gris mate").
- [MED] Cambiar CTA del hero de `IndexUI.tsx` → `/productos/kit-vaso-de-vidrio`.
- [MED] Encuesta PostHog de salida en PDP móvil: "¿Qué te frenó de comprar hoy?".
- [MED] Añadir `PDP_HEADLINE` / `PDP_INCLUDES` / `PDP_VALUE_ANCHOR` para bowl-negro, vaso-transparente y pack de mechas.
- [MED] Pedir al user foto real del paso "Renueva".
- [MED] FASE AROMAS: lanzar esencias propias dunaru.
- [BAJA] Banners de colección (image null).
- [BAJA] Borrar huérfanos: `public/favicon.svg`, `public/tmp-upload-hero.webp`, `public/pdp-aroma.webp`, `public/paso-inserta.webp`, `public/paso-enciende.webp`.