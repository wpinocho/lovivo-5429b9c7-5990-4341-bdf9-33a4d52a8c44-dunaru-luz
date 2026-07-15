# Store Plan — dunaru
<!-- Auto-maintained by Lovivo AI. READ THIS FIRST. UPDATE IT LAST. -->

## 1. Brand & Context
- Brand name: **dunaru** (dunaru.mx)
- Product: Velas perladas recargables — **gránulos finos de cera tipo arena** (NO perlas grandes) + mechas de algodón. IMPORTANTE: visualmente el material es como arena/couscous fino, no bolitas grandes.
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
- **RUTAS EN ESPAÑOL**: producto = `/productos/:slug`, paquete = `/paquete/:slug`, carrito = `/carrito`, checkout = `/pagar`.
- Competencia analizada: **VelaVita.cl** (LATAM) y **Foton (US)**.

## 2. Design System
- Fondo: Marfil #FAF6EF → `--background` · Alterno: Arena #F1E9DC → `--muted`/`bg-dunaru-arena`
- Texto: Carbón #2B2A27 → `--foreground`
- Acento: Champagne #C2A878 → `text-dunaru-champagne` · CTA: Ónix #1E1C1A → `--primary`
- Detalle llama: Ámbar #D89A57 → `text-dunaru-ambar`
- Display: Instrument Serif → `font-display` · Body/UI: Manrope → `font-body`
- Tokens: `dunaru-marfil/arena/champagne/carbon/onix/ambar`
- Badges: `.badge-mas-elegido`, `.badge-mejor-valor`, `.badge-msi`
- Estética: editorial, mínima, mucho aire. Pocas animaciones. Mobile-first.

## 3. Active Plan — 🔴 FIX PDP: imágenes placeholder en secciones de historia (2026-07-07)
`ProductStorySections.tsx` usa `PLACEHOLDER = "/placeholder.svg"` en varios bloques → recuadros grises en las PDPs. Reemplazar por fotos reales.

### Estado del bug por producto (`PDP_CONTENT` en `src/components/ProductStorySections.tsx`)
- **"Crea tu vela en 4 pasos" (steps)**: los 4 pasos usan PLACEHOLDER en los 3 productos. → REUTILIZAR `/paso-vierte.webp`, `/paso-inserta.webp`, `/paso-enciende.webp`, `/paso-renueva.webp` (ya existen). Cambiar render de steps a object-cover (hoy object-contain opacity-60).
- **perlas-originales-500-g → blocks**: 4 bloques con PLACEHOLDER. Faltan 4 fotos reales.
- **kit-vaso-de-vidrio → blocks**: bloque 3 = PLACEHOLDER (faltan 1).
- **kit-vaso-de-concreto → blocks**: bloques 2 y 3 = PLACEHOLDER (faltan 2).

## 4. Recent Changes
- 2026-07-15 — 🎨 FIX imagen `/paso-vierte.webp`: el material vertido se veía como perlas grandes; regenerado con Gemini (referencia = imagen actual del preview) para que se vea como **arena fina de cera** (gránulos ~1mm, tipo couscous). Escena idéntica (mano, bolsa DUNARU, vaso, mesa, luz). Se actualiza en 2 lugares: paso "Vierte" de "Cómo funciona" + sección "Quiénes somos" (BrandStorySection). Sin cambios de código.
- 2026-07-07 — 🔍 REVISIÓN VISUAL en vivo landing + PDPs. Landing ✅. Detectado bug placeholder en `ProductStorySections.tsx`. Confirmado rutas `/productos/:slug`.
- 2026-07-06 — ✅ SPRINT PRE-LANZAMIENTO: fix bug imágenes, "Cómo funciona" con fotos reales, `BrandStorySection`, `ReviewsInvite`, `/devoluciones`, topbar rotativo.
- 2026-07-06 — 🔍 AUDITORÍA PRE-LANZAMIENTO vs VelaVita.cl + Foton.
- 2026-07-03 — ✅ LANDING SINCRONIZADA: swaps a fotos reales + hero/casa real regeneradas.
- 2026-06-30 — V1 CIERRE: 4 lifestyle "casa real" + `CasaRealSection.tsx`.
- 2026-06-29 — AUDITORÍA V1: 5 gaps.
- 2026-06-24 — SPRINT 2: PDP editorial perlas. Volume rule (2→10%,3→15%).
- 2026-06-24 — WhatsApp real `525531215386`.
- 2026-06-23 — 6 productos + sistema de diseño dunaru + EcommerceTemplate.

## 5. Image Inventory
- **FOTOS REALES (catálogo)**: `product-images/products/<hash>.webp`. 9 productos, 74 imágenes.
- **Hero**: `/hero-dunaru.webp` — ✅.
- **Casa real**: `/casa-real-comedor|recibidor|recamara|sala.webp` — ✅.
- **Cómo funciona / 4 pasos**: `/paso-vierte|inserta|enciende|renueva.webp` — ✅. `paso-vierte.webp` REGENERADO 2026-07-15 (material = arena fina, no perlas grandes). USAR también en steps de PDPs.
- **PLACEHOLDER (bug)**: varios blocks/steps de `ProductStorySections.tsx` apuntan a `/placeholder.svg`.
- **OJO consistencia visual**: si se regeneran otras imágenes con producto, el material debe verse como **arena fina**, no perlas grandes.

## 6. Known Issues
- 2026-07-07 — PDP story sections con `/placeholder.svg`: recuadros grises. Ver Active Plan.
- 2026-06-24 — Descuento de volumen: front no recalcula total carrito; VERIFICAR end-to-end.
- 2026-06-24 — Regla de envío $99 solo en Perlas: VERIFICAR config real de shipping.
- 2026-06-24 — "Comprar ahora" NO incluye add-ons seleccionados. Aceptable.

## 7. Pending / Future Sessions
- [high] FIX PDP placeholder images (Active Plan) — PRIORIDAD 1 pre-lanzamiento.
- [high] SPRINT video demo (hero/cómo funciona) con `videogen`.
- [med] Garantía en buy box de PDP (verificar consistencia en los 3).
- [med] Barra "te faltan $X para envío gratis" en carrito (AOV).
- [med] VERIFICAR cobro real del descuento por volumen en checkout.
- [med] Star ratings en product cards (cuando haya reseñas reales).
- [low] Feed IG/UGC, FAQ en tabs, badge MSI en buy box PDP.
- [nota] Revisar si otras fotos muestran el material como perlas grandes y corregir a arena fina.