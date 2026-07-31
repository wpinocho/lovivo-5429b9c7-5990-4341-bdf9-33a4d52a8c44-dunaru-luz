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