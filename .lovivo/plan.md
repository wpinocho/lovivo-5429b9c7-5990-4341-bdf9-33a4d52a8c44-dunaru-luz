# Store Plan — dunaru
<!-- Auto-maintained by Lovivo AI. READ THIS FIRST. UPDATE IT LAST. -->

## 1. Brand & Context
- Brand name: **dunaru** (dunaru.mx)
- Product: Velas perladas recargables — perlas de cera + mechas de algodón
- Tesis: no vendemos "cera para velas". Vendemos una forma simple de crear luz y decoración en el recipiente que ya tienes.
- Target: Mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO, decoración + hogar + regalo
- Market: México. Moneda MXN. Idioma: español de México.
- Tono: claro, cálido, directo. Sin tecnicismos.
- Posicionamiento: vs Amazon/ML — más marca, más premium, más confiable
- Pagos: Mercado Pago + hasta 6 MSI — visible en topbar y footer. (Badge MSI en buy box PDP: NO ponerlo aún.)
- Concepto: "Luz de diseño que cambia contigo."
- Envío: Perlas Originales = +$99. Todo lo demás = gratis desde $899.
- WhatsApp REAL: `525531215386` (+52 55 3121 5386) — formato wa.me sin "1" intermedio.
- V0 scope: sin aromas, sin suscripción, sin regalos físicos, sin B2B.
- REGLA DE INTEGRIDAD: **NUNCA reseñas falsas ni testimonios inventados.**
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`
- Competencia analizada: **VelaVita.cl** (LATAM, Shopify, MISMO producto exacto) y **Foton (US)** (líder global "world's most viral candle brand").

## 2. Design System
- Fondo: Marfil #FAF6EF → `--background` · Alterno: Arena #F1E9DC → `--muted`/`bg-dunaru-arena`
- Texto: Carbón #2B2A27 → `--foreground`
- Acento: Champagne #C2A878 → `text-dunaru-champagne` · CTA: Ónix #1E1C1A → `--primary`
- Detalle llama: Ámbar #D89A57 → `text-dunaru-ambar`
- Display: Instrument Serif → `font-display` · Body/UI: Manrope → `font-body`
- Tokens: `dunaru-marfil/arena/champagne/carbon/onix/ambar`
- Badges: `.badge-mas-elegido`, `.badge-mejor-valor`, `.badge-msi`
- Estética: editorial, mínima, mucho aire. Pocas animaciones. Mobile-first.

## 3. Active Plan — 🚀 AUDITORÍA PRE-LANZAMIENTO vs COMPETENCIA (2026-07-06)

### QUÉ HACEN VELAVITA Y FOTON QUE NOSOTROS NO (hallazgos)
**VelaVita.cl (mismo producto, LATAM):**
- Topbar ROTATIVO con 4 mensajes: urgencia ("compra antes de 12:00, recibe HOY"), rating ("⭐⭐⭐⭐⭐ miles de clientes"), envío gratis, cuotas sin interés.
- "Cómo funciona" con FOTOS REALES de manos (vierte / inserta mecha / enciende / refresca), no emojis.
- Sección de RESEÑAS enorme con foto del cliente + producto reseñado (widget Revie). 78 reseñas en el hero product.
- Product cards con ★★★★★ + nº de reseñas + precio tachado ("Oferta / Precio habitual").
- "Comprar por categoría" en tiles.
- FAQ dividido en tabs (Productos y uso / Despachos y compras).

**Foton (US, líder):**
- Hero en VIDEO + "How does it work?" en video (producto novedoso = hay que MOSTRARLO en movimiento).
- "World's most viral candle brand" — feed de Instagram embebido (social proof visual).
- 6,525 reseñas (Judge.me, 4.73/5) + galería de fotos/videos de clientes.
- Logos de PRENSA: Daily Mail, New York Magazine, Country Living, Stylecaster.
- Historia de fundadoras ("Who we are" — dos hermanas, family owned) → confianza para marca nueva.
- Bloques problema→solución ("House flooded with containers?", "Tired of cleaning messy vases?").
- Barra de progreso a envío gratis en carrito + free gift + bundle builder + scent samples upsell.
- Garantía de devolución visible.

### GAPS PRIORIZADOS PARA DUNARU (qué nos falta REALMENTE)

**🔴 BLOQUEADORES (arreglar antes de lanzar):**
1. **BUG: imágenes de "Así se ve en una casa real" no cargan** (salen en gris/gradient placeholder en el screenshot desktop). Revisar `CasaRealSection.tsx` — rutas `/casa-real-*.webp` en `public/`. Confirmar que los archivos existan y carguen; regenerar si es necesario.
2. **"Cómo funciona" usa EMOJIS (🫙🕯️🔥♻️) en vez de fotos reales.** Ambos competidores usan fotos de manos ejecutando cada paso. Los emojis se ven inacabados/baratos y matan credibilidad. → Generar 4 fotos reales (vierte perlas / inserta mecha / enciende / renueva mecha) consistentes con producto real (usar `imagegen` con reference_images de producto real; cargar skill `media.product-imagery`).
3. **Capa de CONFIANZA para marca nueva SIN reseñas.** Al lanzar tendremos 0 reseñas y los competidores tienen miles → hay que compensar con: (a) historia de marca/fundadores, (b) garantía de satisfacción/devolución visible, (c) "Hecho en México" reforzado, (d) medios de pago seguros (Mercado Pago). NUNCA inventar reseñas.
4. **Páginas legales + política de devolución** deben existir (ya hay PrivacyPolicy/Terms; falta política de cambios/devoluciones visible y linkeada). Requisito de confianza en checkout.

**🟠 ALTO IMPACTO EN CONVERSIÓN (lanzar con esto o justo después):**
5. **Sistema de reseñas REALES listo desde el día 1.** Sección "reseñas" en home + PDP con estado honesto ("Sé de las primeras en opinar") y captura post-compra automática (email post-compra se hace desde Dashboard AI). Preparar el bloque UI ahora para llenarlo con reseñas reales luego. CERO fakes.
6. **Historia de marca / "Quiénes somos" (Hecho en México).** Sección corta con la historia de dunaru + foto/estudio. Convierte la falta de reseñas en confianza emocional (como las hermanas de Foton).
7. **Garantía visible** (ej. "30 días de garantía / devolución fácil") como badge en home y en buy box de PDP. Reduce el riesgo de primera compra.
8. **Topbar rotativo con urgencia + prueba social** (hoy es estático). Rotar: envío gratis desde $899 · hasta 6 MSI · Hecho en México · entrega 2–5 días. (Sin rating hasta tener reseñas reales.)
9. **Video demo del producto** (hero o sección "cómo funciona"). El producto es NOVEDOSO — la gente necesita VERLO funcionar. Foton lo basa TODO en video. → Sprint dedicado (`videogen`). Ya estaba en pending.

**🟡 MEJORAS (post-lanzamiento / iterar con datos):**
10. Star ratings + nº reseñas en product cards (cuando existan reseñas reales).
11. Barra de progreso "te faltan $X para envío gratis" en carrito/drawer (AOV). Cargar skill `pages.checkout`.
12. Feed de Instagram / UGC embebido cuando haya contenido.
13. Bloques problema→solución estilo Foton ("¿Cansada de tirar el vaso de la vela?").
14. FAQ en tabs (Producto / Envíos y pagos) si crece.

### VENTAJAS QUE YA TENEMOS (no tocar / defender)
- Estética editorial premium — MÁS refinada que VelaVita (que es más "promo/naranja").
- Posicionamiento y copy de marca más fuerte ("luz de diseño que cambia contigo").
- Rutas de compra claras ("¿Cómo quieres empezar?" con Perlas vs Kit vs Regalo).
- Selector de tono con mood copy.
- Fotos de producto reales ya sincronizadas.

### ORDEN DE EJECUCIÓN SUGERIDO (Craft Mode)
1. Fix bug imágenes Casa Real (rápido).
2. Fotos reales "Cómo funciona" (4 pasos).
3. Sección historia de marca / Hecho en México + garantía.
4. Bloque de reseñas honesto (UI listo) + política de devoluciones.
5. Topbar rotativo.
6. (Sprint aparte) Video demo.

### Archivos probables a tocar
- `src/components/CasaRealSection.tsx` — bug imágenes.
- `src/pages/ui/IndexUI.tsx` — STEPS (fotos reales), nueva sección historia/garantía, bloque reseñas.
- `src/templates/EcommerceTemplate.tsx` — topbar rotativo.
- `public/` — nuevas imágenes de pasos + posible video.
- Nueva página/sección política de devoluciones + link en footer.

### Restricciones confirmadas
- No usar capturas ni fotos de VelaVita/Foton. Inspiración de estructura, no copiar activos.
- NUNCA reseñas/testimonios falsos.
- Badge MSI en buy box PDP: aún fuera de scope hasta confirmar.

## 4. Recent Changes
- 2026-07-06 — 🔍 AUDITORÍA PRE-LANZAMIENTO vs VelaVita.cl + Foton. Gaps priorizados: (bloqueadores) bug imágenes Casa Real, "Cómo funciona" con emojis en vez de fotos, capa de confianza sin reseñas, legales/devoluciones; (alto impacto) sistema de reseñas real, historia de marca, garantía visible, topbar rotativo, video demo. Plan de ejecución guardado.
- 2026-07-03 — ✅ LANDING SINCRONIZADA: Fase 1 (swaps gratis de PRODUCTS/BUNDLES/TONOS + URLs inline a fotos reales) + Fase 2 (hero + 4 escenas casa real regeneradas con Gemini usando cada producto real como referencia).
- 2026-07-03 — DIAGNÓSTICO IMÁGENES LANDING: fotos reales cargadas en catálogo pero landing con URLs viejas. Plan 2 fases.
- 2026-06-30 — V1 CIERRE: 4 lifestyle "casa real" + `CasaRealSection.tsx`. `PDP_CONTENT` extendido a Kit Vidrio y Concreto.
- 2026-06-29 — AUDITORÍA V1: 5 gaps detectados.
- 2026-06-24 — SPRINT 2 ✅: PDP editorial perlas. Volume rule `7bdcb204...` (2→10%,3→15%).
- 2026-06-24 — WhatsApp real `525531215386` en IndexUI, EcommerceTemplate, OrderTrackUI.
- 2026-06-24 — Add-ons creados (tag addon): vaso-extra, pack-30, pack-60 mechas.
- 2026-06-24 — OrderTrackUI/OrderTrack + rutas tracking + footer links.
- 2026-06-23 — 6 productos + sistema de diseño dunaru + EcommerceTemplate.

## 5. Image Inventory
- **FOTOS REALES (buenas)**: catálogo, ruta `product-images/products/<hash>.webp`. 9 productos, 74 imágenes. ESTAS son las que se usan.
- **Landing sincronizada**: cards de producto/tono/bundle → fotos reales ✅
- Hero: `public/hero-dunaru.webp` — REGENERADO con ref real ✅
- Casa real: `/casa-real-comedor|recibidor|recamara|sala.webp` — ⚠️ REGENERADAS pero NO CARGAN en el render actual (aparecen en gris). VERIFICAR rutas/archivos.
- **PENDIENTE generar**: 4 fotos "Cómo funciona" (vierte/inserta/enciende/renueva) con manos, ref producto real. Posible video demo.
- **VIEJAS/generadas (ya NO se usan en landing)**: `product-images/5429b9c7.../*.webp`.

## 6. Known Issues
- 2026-07-06 — 🔴 Imágenes de sección "Casa real" no cargan en el home (aparecen como gradient gris). Verificar existencia/rutas de `/casa-real-*.webp` en `public/` y el render de `CasaRealSection.tsx`.
- 2026-06-24 — Descuento de volumen: front no recalcula total carrito; depende del backend en checkout. VERIFICAR end-to-end con orden 2-3 kits (10%/15%).
- 2026-06-24 — Regla de envío $99 solo en Perlas: VERIFICAR config real de shipping.
- 2026-06-24 — "Comprar ahora" NO incluye add-ons seleccionados (bypassa carrito). Aceptable.

## 7. Pending / Future Sessions
- [🔴 blocker] Fix imágenes Casa Real.
- [🔴 blocker] Fotos reales "Cómo funciona" (reemplazar emojis).
- [🔴 blocker] Capa de confianza: historia de marca + garantía + Hecho en México.
- [🔴 blocker] Política de devoluciones visible + linkeada en footer/checkout.
- [high] Bloque de reseñas real (UI listo, captura post-compra desde Dashboard AI). CERO fakes.
- [high] Topbar rotativo con urgencia + envío + MSI.
- [high] SPRINT video demo (hero/cómo funciona) con `videogen`.
- [med] Star ratings en product cards (cuando haya reseñas reales).
- [med] Barra "te faltan $X para envío gratis" en carrito (AOV).
- [med] VERIFICAR cobro real del descuento por volumen en checkout (orden de prueba 2-3 kits).
- [low] Feed IG/UGC, bloques problema→solución, FAQ en tabs, badge MSI en buy box PDP.