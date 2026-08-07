# CRO Log
<!-- This file is maintained by Lovivo AI to track conversion optimization work.
     READ this file before starting any CRO analysis to avoid repeating past work.
     UPDATE this file after every change with hypothesis, implementation, and results.

     WHEN TO READ this file:
     - User asks anything about conversion, funnel, drop-off, A/B test, experiment, CRO.
     - You're about to make a change that could affect conversion (PDP layout, CTA copy,
       hero, checkout, pricing display, urgency, social proof).
     - You're analyzing PostHog data and want to know what's already been tried.

     WHEN TO WRITE to this file:
     - You logged a hypothesis or made a CRO change.
     - You created / launched / stopped a survey or experiment.
     - You analyzed funnel data and drew a conclusion worth remembering.
     - A change was disproven (add to "Ruled Out" so you don't repeat it). -->

## Baseline
<!-- Record your funnel metrics here BEFORE making changes. Update with new baselines after significant changes. -->
<!-- Example:
- **Date**: 2026-03-25
- **Period**: 7 days
- **Funnel**: pageview(225) → viewcontent(203, 90%) → photo_uploaded(8, 3.9%) → addtocart(1) → purchase(0)
- **Bottleneck**: viewcontent → photo_uploaded (96% drop-off)
- **Device split**: Mobile 67%, Desktop 33%
- **Top sources**: direct 45%, meta ads 30%, organic 25%
-->

### Baseline 2026-07-31 (tráfico pagado Meta)
- **Period**: 7 días (2026-07-25 → 07-31)
- **Móvil**: 156 personas · 212 viewcontent · 8 addtocart (**3.8%**) · 5 initiatecheckout · **0 purchase**
- **Únicos móvil**: 151 vieron producto → 6 al carrito = **4.0%** (benchmark sano 8–12%)
- **30d**: 372 viewcontent → 23 addtocart (6.2%) → 20 initiatecheckout → **1 purchase** (prueba del owner)
- **172 sesiones sin carrito, 0.0 clics promedio, 0% errores JS** → problema de mensaje, no técnico
- **Landing del tráfico**: /productos/perlas-originales-500-g (59 desde IG) · /productos/kit-vaso-de-concreto (57 desde IG) · kit-vaso-de-vidrio (4)
- **Bottleneck**: viewcontent → addtocart en móvil + producto de aterrizaje equivocado

## Changes
<!-- Log every CRO change. Format:
### YYYY-MM-DD — Short description
- **Hypothesis**: What you think is wrong and why this change should fix it
- **Change**: What was actually modified
- **Files**: Which files were edited
- **Metric to watch**: Which conversion step should improve
- **Result**: (fill in after 5-7 days) before% → after%, verdict: ✅ kept / ❌ reverted / ➡️ inconclusive
-->

### 2026-07-06 — Capa de confianza pre-lanzamiento (marca nueva, 0 reseñas)
- **Hypothesis**: Como marca nueva sin reseñas (vs VelaVita/Foton con miles), la confianza debe venir de historia de marca, garantía visible y honestidad. Emojis en "Cómo funciona" y hero/casa-real rotas restan credibilidad y frenan la conversión.
- **Change**: (1) Regeneré hero + 4 imágenes "casa real" que estaban rotas (archivos faltantes en public/). (2) Reemplacé emojis del "Cómo funciona" por 4 fotos reales de manos. (3) Nueva sección historia de marca + Hecho en México + garantía 30 días. (4) Bloque de reseñas honesto (sin fakes) invitando a las primeras clientas. (5) Página /devoluciones con garantía. (6) Topbar rotativo con envío/MSI/garantía.
- **Files**: IndexUI.tsx, CasaRealSection (assets), BrandStorySection.tsx (nuevo), ReviewsInvite.tsx (nuevo), ReturnsPolicy.tsx (nuevo), EcommerceTemplate.tsx, App.tsx, public/*.webp.
- **Metric to watch**: viewcontent → addtocart (confianza), tiempo en home, scroll depth a secciones de confianza.
- **Result**: (pendiente 5-7 días post-lanzamiento).

### 2026-07-31 — PDP móvil: promesa arriba del fold, qué incluye, CTA sticky siempre visible
- **Hypothesis**: En iPhone (390×844) lo único visible al cargar era foto (487px) + título + precio. Sin explicación de qué es el producto ni CTA visible, el usuario frío de Instagram no entiende el mecanismo y se va sin tocar nada (0.0 clics promedio en 172 sesiones). Si damos promesa + qué incluye + botón visible desde el primer segundo, sube addtocart.
- **Change**:
  1. Nuevo bloque `lg:hidden` ARRIBA de la galería con `<h1>` + **promesa por slug** (`PDP_HEADLINE`) + rating compacto. El título de la columna info pasa a `<p className="hidden lg:block">` (un solo `<h1>` en DOM, visible en mobile-first crawl).
  2. Galería móvil `aspect-[4/5]` → **`aspect-[4/3]`** (~120px menos de altura).
  3. **Sticky bar siempre visible en móvil** (`translate-y-0` base, condicional solo en `md:`). Añadido `pb-32 md:pb-0` al wrapper.
  4. Nuevo bloque **"Qué incluye"** (`PDP_INCLUDES`, 3 bullets con check por slug) pegado al precio.
  5. Reemplazados los 4 badges genéricos (Envío rápido / Pago seguro / etc.) por **3 concretos**: Envío gratis a todo México · Garantía de 30 días · Hasta 6 meses sin intereses.
  6. **Reseñas movidas ARRIBA** de la tabla comparativa y del FAQ en todas las PDP.
  7. FAQ de Perlas Originales: quitado "$99 de envío" → "envío gratis a todo México" (el owner eliminó el cargo).
- **Files**: `src/pages/ui/ProductPageUI.tsx`, `src/components/ProductStorySections.tsx`
- **Metric to watch**: viewcontent → addtocart en **móvil** (baseline 4.0%). Objetivo mínimo 8%.
- **Result**: (pendiente 7 días — revisar 2026-08-07). Comparación secuencial antes/después; NO A/B test (volumen insuficiente).
- **Nota**: no es aislable del cambio de segmentación de anuncios si el owner redirige el presupuesto al Kit Vidrio en la misma semana.

### 2026-08-07 — PDP: reorden de secciones (prueba social en posición 3) + densidad
- **Hypothesis**: El producto tiene un **mecanismo nuevo** (perlas de cera rellenables). En tráfico frío de Meta la secuencia mental es *entender → creer → desear → decidir*. Hoy la prueba social vive en la posición 5 de 7, detrás de 5 bloques editoriales largos: la mayoría de móviles nunca la ve. Además el aire vertical (tira de garantías en 2 filas con py-8, bloque de reseñas ocupando casi una pantalla completa antes de la primera opinión) alarga el scroll sin aportar información. Subir reseñas justo después de "Cómo funciona" y compactar debería aumentar el % de usuarios expuestos a prueba social y, con ello, addtocart.
- **Change** (orden nuevo de `ProductStorySections`):
  1. Garantías (compacta) → 2. Crea tu vela en 4 pasos → **3. Reseñas** → 4. Bloques editoriales → 5. Tabla comparativa → 6. FAQ → 7. **CTA de cierre**.
  - Tira de garantías: `grid-cols-2` (2 filas en móvil) → `grid-cols-4` en una sola fila, `py-8`→`py-5`, iconos 48→36px, labels acortados ("Libre de parafina"→"Sin parafina").
  - Wrapper `mt-16 space-y-16` → `mt-10 space-y-14`; sección de 4 pasos `py-16`→`py-12`.
  - `Reviews.tsx` compactado: eliminado el subtítulo, eliminada la tarjeta con borde del resumen (ahora promedio a la izquierda + distribución a la derecha, siempre en fila, también en móvil), eliminado el label "Opiniones con foto", eliminados los **títulos de reseña** ("Facilidad de uso", "Transformación del espacio"…) que sonaban a categoría interna y no a voz de cliente. Padding de sección `section-pad-sm`→`py-12`.
  - Eliminada la franja duplicada "Pago 100% seguro / MSI" (ya existe idéntica en el footer negro global) y reemplazada por un **CTA de cierre** que devuelve al buy box (`scrollTo top`) con línea de riesgo cero (envío gratis, 2-5 días, 30 días de garantía).
- **Files**: `src/components/ProductStorySections.tsx`, `src/components/Reviews.tsx`
- **Metric to watch**: viewcontent → addtocart en móvil (baseline 4.0%, objetivo 8%). Secundaria: scroll depth hasta `#resenas` y clics en el CTA de cierre.
- **Result**: (pendiente 7 días — revisar 2026-08-14).
- **Nota**: se acumula con el cambio del 2026-07-31, cuyo Result sigue sin medirse. Al medir, tratar ambos como un solo paquete.

### 2026-08-07 — Landing móvil: de 13 secciones a 9, carruseles y prueba social arriba
- **Hypothesis**: La home móvil medía ~11,000 px (unas 13 pantallas de iPhone). El tráfico frío de Meta que aterriza en la home no llega ni a la mitad. Tres problemas concretos: (1) los **mismos 6 SKUs se mostraban en 3 bloques distintos** ("¿Cómo quieres empezar?", "Quiero decorar más", "Combina tonos") con 3 diseños de tarjeta diferentes, lo que lee como catálogo desordenado y no como una decisión; (2) "Cómo funciona" y "Elige tu tono" apilaban 4 y 3 imágenes grandes en vertical, ~3,500 px de puro scroll; (3) la **prueba social (Reviews) vivía en la posición 10 de 13**, prácticamente invisible en móvil. Comprimir el scroll y adelantar la prueba social debería subir el % de usuarios que llegan a un producto y el CTR a PDP.
- **Change**:
  1. **Tira de beneficios**: `grid-cols-2` (2 filas en móvil) → `grid-cols-4` en una sola fila, labels acortados ("Hasta 120 h de luz"→"120 h de luz", "Renueva cuando quieras"→"Rellenable"), `py-5`→`py-4`.
  2. **"Cómo funciona" → carrusel**: reutiliza `ProductStepsCarousel` (el mismo de la PDP), ahora con props `bleed`, `background`, `eyebrow`, `id` y `footer`. Móvil: 1 paso con peek + puntos. Ahorro ≈ 1,500 px. CTA de cierre apunta al producto ancla (`kit-vaso-de-vidrio`) en vez de a las perlas.
  3. **Consolidación de compra**: los 3 bloques de producto se fusionan en una sola sección **"Elige tu vela"** (`SHOP_CARDS`): rejilla de 2 columnas, 6 tarjetas idénticas 4:5 con eyebrow de segmentación ("Todo incluido", "Ya tengo recipiente", "Para regalar", "2 tonos · 1 kg"…), badge y precio. Elimina las secciones "Quiero decorar más" y "Combina tonos".
  4. **Reviews subido** de la posición 10 a la 5, justo antes de "Elige tu tono".
  5. **"Elige tu tono" → carrusel** horizontal con snap y peek al 70%.
  6. **Eliminada "Por qué no es una vela normal"**: sus 3 argumentos ya estaban en la tira de beneficios y en `BrandStorySection`.
  7. Añadida micro-ayuda "¿No sabes cuál? Te ayudamos por WhatsApp" bajo la rejilla de producto.
- **Files**: `src/pages/ui/IndexUI.tsx`, `src/components/ProductStepsCarousel.tsx`
- **Metric to watch**: scroll depth en `/` móvil, clics home → PDP, y `viewcontent` originado en la home. Secundaria: addtocart móvil (baseline 4.0%).
- **Result**: (pendiente 7 días — revisar 2026-08-14).
- **Nota**: la mayoría del tráfico pagado aterriza directo en PDP, no en la home. El impacto de este cambio se verá sobre todo en tráfico orgánico/directo y en usuarios que vuelven al logo. No mezclarlo con los cambios de PDP/checkout al medir.

### 2026-08-07 — 🔍 AUDITORÍA PDP `perlas-originales-500-g` (diagnóstico, sin cambios aún)
- **Datos (30d, pathname `/productos/perlas-originales-500-g`)**:
  - Móvil: 123 personas · 122 viewcontent · **5 addtocart = 4.1%**
  - Desktop: 7 personas · 6 viewcontent · 2 addtocart (casi seguro el owner)
  - Tablet: 3 personas · 0 addtocart
  - Benchmark de PDP con tráfico pagado: 8–12%. Estamos a menos de la mitad.
- **Hallazgo 1 (el más grave)**: el producto se llama **"Recarga para vela rellenable"**. Una recarga es por definición un producto de RECOMPRA y se lo estamos sirviendo a tráfico frío de Instagram que nunca ha visto una vela perlada. VelaVita llama al SKU equivalente **"Velas Perladas 500 g - 120 horas de luz"** (vende el resultado, no el rol en el ciclo de vida) y tiene 115 reseñas ahí.
- **Hallazgo 2**: la **primera imagen de la galería es un packshot de la bolsa** (`x3azemqdof.webp`: bolsa + montón de cera suelta con 3 mechas sobre una mesa). Vende materia prima, no el resultado deseado.
- **Hallazgo 3**: la objeción #1 del producto ("¿me sirve el recipiente que YA tengo?") solo vive en la descripción de la DB (≥10 cm diámetro, ≥5 cm alto). No está en el buy box.
- **Hallazgo 4**: la galería son 13 packshots. VelaVita mete **infografías dentro de la galería** (`Beneficios.jpg`, `Guia_Aromas.jpg`). En móvil el carrusel es el elemento con más engagement y lo estamos desperdiciando.
- **Hallazgo 5 (técnico)**: `TIER_SELECTOR_SLUGS` incluye este slug, y el selector "Lleva más y ahorra" se muestra **en lugar** de `ProductAddOns`. Es decir: en la PDP con más tráfico de la tienda **no hay cross-sell de recipiente**. Hueco de AOV directo.
- **Hallazgo 6 (oferta)**: la price rule de volumen es REAL y correcta (2 = 10%, 3 = 15%). Pero 3 bolsas **del mismo color** no es un deseo natural. Además la escalera de precio por gramo está rota: perlas 500 g = $1.00/g · Reserva 1 kg = $0.80/g · **Dúo 1 kg = $1.10/g** (el Dúo es más caro por gramo que la Reserva).
- **Hallazgo 7**: prueba social genérica. `getReviewStats()` devuelve 4.9/15 global para TODAS las fichas, no reseñas de este SKU.
- **Hallazgo 8**: falta el ángulo AROMA. VelaVita vende variantes con aroma (Lavanda, Canela, Bergamota, Mango) + esencias sueltas como accesorio de AOV. Foton vende "Scent Samples" a $2.99 como producto de entrada.
- **Referentes analizados**: velavita.cl (LATAM, mismo producto, mismo precio ≈$500 MXN) y fotoncandle.com (US: Bundle Builder, calculadora "How much Foton do I need?", barra de progreso a envío gratis, regalo gratis en carrito, 3,771 reseñas en su SKU ancla).
- **Nota de método**: 122 usuarios/mes en esta PDP → **volumen insuficiente para A/B test**. Medición secuencial antes/después únicamente.
- **Result**: n/a (auditoría, sin cambios implementados).

## Active Experiments
<!-- A/B tests currently running. Include flag_key, start date, variants, and target metric. -->
None

## Ruled Out
<!-- Changes that were tried and didn't work, or hypotheses that were disproven.
     This prevents repeating failed approaches. -->
None

## Micro-Events Status
<!-- Track which micro-events have been instrumented for the main drop-off step.
     Check items as they're added to the codebase. -->
<!-- Example:
- [ ] element_visible (tracks if the key UI element enters viewport)
- [ ] cta_clicked
- [ ] action_started
- [ ] action_completed
- [ ] action_failed (with error_type property)
-->