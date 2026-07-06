# Store Plan — dunaru
<!-- Auto-maintained by Lovivo AI. READ THIS FIRST. UPDATE IT LAST. -->

## 1. Brand & Context
- Brand name: **dunaru** (dunaru.mx)
- Product: Velas perladas recargables — perlas de cera + mechas de algodón
- Tesis: no vendemos "cera para velas". Vendemos una forma simple de crear luz y decoración en el recipiente que ya tienes.
- Target: Mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO, decoración + hogar + regalo
- Market: México. Moneda MXN. Idioma: español de México.
- Tono: claro, cálido, directo. Sin tecnicismos.
- Posicionamiento: vs Amazon/ML y vs VelaVita — más marca, más premium, más confiable
- Pagos: Mercado Pago + hasta 6 MSI — visible en topbar y footer. (Badge MSI en buy box PDP: NO ponerlo aún.)
- Concepto: "Luz de diseño que cambia contigo."
- Envío: Perlas Originales = +$99. Todo lo demás = gratis desde $899.
- WhatsApp REAL: `525531215386` (+52 55 3121 5386) — formato wa.me sin "1" intermedio.
- V0 scope: sin aromas, sin suscripción, sin regalos físicos, sin B2B.
- REGLA DE INTEGRIDAD: **NUNCA reseñas falsas ni testimonios inventados.**
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`
- Competencia analizada: **VelaVita.cl** (LATAM, mismo producto) y **Foton (US)** (líder global).

## 2. Design System
- Fondo: Marfil #FAF6EF → `--background` · Alterno: Arena #F1E9DC → `--muted`/`bg-dunaru-arena`
- Texto: Carbón #2B2A27 → `--foreground`
- Acento: Champagne #C2A878 → `text-dunaru-champagne` · CTA: Ónix #1E1C1A → `--primary`
- Detalle llama: Ámbar #D89A57 → `text-dunaru-ambar`
- Display: Instrument Serif → `font-display` · Body/UI: Manrope → `font-body`
- Tokens: `dunaru-marfil/arena/champagne/carbon/onix/ambar`
- Badges: `.badge-mas-elegido`, `.badge-mejor-valor`, `.badge-msi`
- Estética: editorial, mínima, mucho aire. Pocas animaciones. Mobile-first.

## 3. Active Plan — ✅ SPRINT PRE-LANZAMIENTO EJECUTADO (2026-07-06)
Auditoría vs VelaVita/Foton → ejecutados los bloqueadores y varios de alto impacto:
1. ✅ Bug imágenes: hero + 4 casa-real NO existían en repo → regenerados con Gemini + ref producto real, guardados en `public/`.
2. ✅ "Cómo funciona" emojis → 4 fotos reales de manos (`/paso-vierte|inserta|enciende|renueva.webp`), layout de tarjetas con foto + número.
3. ✅ Historia de marca + Hecho en México + garantía → `BrandStorySection.tsx` (imagen paso-vierte, 3 pilares: cera vegetal / hecho en México / garantía 30 días, link a /devoluciones).
4. ✅ Garantía visible global: topbar rotativo incluye "Garantía 30 días", footer link, brand story.
5. ✅ Bloque de reseñas HONESTO → `ReviewsInvite.tsx` ("Sé de las primeras en opinar", CERO fakes, CTA WhatsApp).
6. ✅ Política de devoluciones → `ReturnsPolicy.tsx` en ruta `/devoluciones` + link en footer (Ayuda).
7. ✅ Topbar rotativo (5 mensajes, cambia cada 3.5s) en `EcommerceTemplate.tsx`.

### PENDIENTE del sprint (siguiente sesión)
- [med] Garantía en el BUY BOX de PDP (línea/badge "30 días de garantía") — falta; hoy sólo global + home.
- [high] SPRINT video demo (hero/cómo funciona) con `videogen` — el producto es novedoso, VER en movimiento vende (Foton).
- [med] Star ratings + nº reseñas en product cards (cuando existan reseñas reales).
- [med] Barra "te faltan $X para envío gratis" en carrito/drawer (AOV). Cargar skill `pages.checkout`.
- [med] VERIFICAR cobro real del descuento por volumen en checkout (orden prueba 2-3 kits, 10%/15%).
- [low] Feed IG/UGC, bloques problema→solución estilo Foton, FAQ en tabs.

### Restricciones confirmadas
- No copiar activos de VelaVita/Foton (solo inspiración de estructura).
- NUNCA reseñas/testimonios falsos.
- Badge MSI en buy box PDP: fuera de scope hasta confirmar.

## 4. Recent Changes
- 2026-07-06 — ✅ SPRINT PRE-LANZAMIENTO: fix bug imágenes (hero+4 casa real regeneradas y guardadas en public/), "Cómo funciona" con 4 fotos reales de manos, nueva `BrandStorySection` (historia + Hecho en México + garantía 30 días), `ReviewsInvite` (reseñas honestas sin fakes), página `/devoluciones` (`ReturnsPolicy`), topbar rotativo (5 msgs) y link garantía en footer.
- 2026-07-06 — 🔍 AUDITORÍA PRE-LANZAMIENTO vs VelaVita.cl + Foton. Gaps priorizados.
- 2026-07-03 — ✅ LANDING SINCRONIZADA: swaps a fotos reales + hero/casa real regeneradas.
- 2026-06-30 — V1 CIERRE: 4 lifestyle "casa real" + `CasaRealSection.tsx`. `PDP_CONTENT` extendido.
- 2026-06-29 — AUDITORÍA V1: 5 gaps.
- 2026-06-24 — SPRINT 2: PDP editorial perlas. Volume rule `7bdcb204...` (2→10%,3→15%).
- 2026-06-24 — WhatsApp real `525531215386`.
- 2026-06-24 — Add-ons (tag addon): vaso-extra, pack-30, pack-60 mechas.
- 2026-06-24 — OrderTrackUI/OrderTrack + rutas tracking + footer links.
- 2026-06-23 — 6 productos + sistema de diseño dunaru + EcommerceTemplate.

## 5. Image Inventory
- **FOTOS REALES (catálogo)**: ruta `product-images/products/<hash>.webp`. 9 productos, 74 imágenes. Son las que usa la landing.
- **Hero**: `/hero-dunaru.webp` — ✅ REGENERADO y guardado en public/ (sala mexicana golden hour, bolsa DUNARU + vela).
- **Casa real**: `/casa-real-comedor|recibidor|recamara|sala.webp` — ✅ REGENERADAS y guardadas en public/ (ya cargan).
- **Cómo funciona**: `/paso-vierte|inserta|enciende|renueva.webp` — ✅ NUEVAS, fotos de manos con producto real, en public/.
- **PENDIENTE**: posible video demo.

## 6. Known Issues
- 2026-06-24 — Descuento de volumen: front no recalcula total carrito; depende del backend en checkout. VERIFICAR end-to-end con orden 2-3 kits (10%/15%).
- 2026-06-24 — Regla de envío $99 solo en Perlas: VERIFICAR config real de shipping.
- 2026-06-24 — "Comprar ahora" NO incluye add-ons seleccionados (bypassa carrito). Aceptable.

## 7. Pending / Future Sessions
- [med] Garantía en buy box de PDP (línea/badge 30 días).
- [high] SPRINT video demo (hero/cómo funciona) con `videogen`.
- [med] Star ratings en product cards (cuando haya reseñas reales).
- [med] Barra "te faltan $X para envío gratis" en carrito (AOV).
- [med] VERIFICAR cobro real del descuento por volumen en checkout.
- [low] Feed IG/UGC, bloques problema→solución, FAQ en tabs, badge MSI en buy box PDP.