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
- **RUTAS EN ESPAÑOL**: producto = `/productos/:slug` (NO `/products/`), paquete = `/paquete/:slug`, carrito = `/carrito`, checkout = `/pagar`. (Confirmado en App.tsx 2026-07-07.)
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
Revisión visual en vivo (screenshot-preview) landing + PDPs. Landing OK. **Bug real en PDPs**: `ProductStorySections.tsx` usa `PLACEHOLDER = "/placeholder.svg"` en muchos bloques → salen recuadros grises vacíos en las páginas que venden. Hay que reemplazar por fotos reales.

### Estado del bug por producto (en `src/components/ProductStorySections.tsx`, objeto `PDP_CONTENT`)
- **"Crea tu vela en 4 pasos" (steps)**: los 4 pasos usan PLACEHOLDER en LOS 3 productos (perlas, kit-vidrio, kit-concreto). → REUTILIZAR las 4 fotos reales que YA existen en public/: `/paso-vierte.webp`, `/paso-inserta.webp`, `/paso-enciende.webp`, `/paso-renueva.webp`.
- **perlas-originales-500-g → blocks**: los 4 bloques editoriales usan PLACEHOLDER (ninguno `photo:true`). Faltan 4 fotos reales.
- **kit-vaso-de-vidrio → blocks**: bloque 1 (`/casa-real-comedor.webp` ✅), bloque 2 (`/casa-real-sala.webp` ✅), bloque 3 = PLACEHOLDER. Falta 1 foto.
- **kit-vaso-de-concreto → blocks**: bloque 1 (`/casa-real-recibidor.webp` ✅), bloque 2 = PLACEHOLDER, bloque 3 = PLACEHOLDER. Faltan 2 fotos.

### Implementation steps (Craft Mode)
1. **4 pasos**: en `PDP_CONTENT`, cambiar los `image: PLACEHOLDER` de los `steps[]` de los 3 productos por las rutas reales `/paso-vierte|inserta|enciende|renueva.webp` (mismo orden: vierte→inserta/coloca→enciende→renueva). El paso 1 de los kits ("Abre tu kit"/"Recibe el objeto") puede usar `/paso-vierte.webp` o una foto de producto; usar la más adecuada.
2. **Rendering de steps**: hoy las imágenes de paso se muestran con `object-contain p-6 opacity-60` (tratamiento de placeholder). Al ser fotos reales, cambiar ese bloque para que las fotos de paso se vean `object-cover` sin opacidad (añadir flag `photo?` al `StoryStep` igual que en `StoryBlock`, o simplemente cambiar el className del `<img>` de steps a object-cover full-bleed). Mantener el badge numérico.
3. **Blocks con PLACEHOLDER**: reemplazar por fotos reales. Opciones por orden de preferencia:
   a. Reutilizar imágenes de catálogo reales (las de `ecommerce list-data` → columna `images` de cada producto) o las `/casa-real-*.webp` existentes que aún no se usan.
   b. Si no hay una foto adecuada, GENERAR con `imagegen--generate_image` pasando como `reference_images` las URLs reales del producto (perlas/vaso/concreto del catálogo) para consistencia. Cargar skill `media.product-imagery` ANTES.
   - Marcar esos bloques con `photo: true` para que rendericen `object-cover` (no faded contain).
4. Verificar con screenshot-preview en `/productos/perlas-originales-500-g`, `/productos/kit-vaso-de-vidrio`, `/productos/kit-vaso-de-concreto` (mobile + desktop) que NO queden recuadros grises.

### Archivos a modificar
- `src/components/ProductStorySections.tsx`: rutas de imágenes en `PDP_CONTENT` (steps + blocks), flag `photo` en steps, className del `<img>` de steps.
- (posible) nuevas imágenes generadas → guardar en `public/`.

### PENDIENTE pre-lanzamiento (resto, tras el fix de PDP)
- [high] SPRINT video demo (hero/cómo funciona) con `videogen` — producto novedoso, VER en movimiento vende (Foton).
- [med] Garantía en el BUY BOX de PDP (línea/badge "30 días"). Nota: el buy box YA muestra "Garantía 30 días" arriba (visto en screenshot concreto) — VERIFICAR si aplica a los 3; en perlas parece no verse igual.
- [med] Barra "te faltan $X para envío gratis" en carrito/drawer (AOV). Cargar skill `pages.checkout`.
- [med] VERIFICAR cobro real del descuento por volumen en checkout (orden prueba 2-3 kits, 10%/15%).
- [med] Star ratings + nº reseñas en product cards (cuando existan reseñas reales).
- [low] Feed IG/UGC, FAQ en tabs.

### Restricciones confirmadas
- No copiar activos de VelaVita/Foton (solo inspiración de estructura).
- NUNCA reseñas/testimonios falsos.
- Badge MSI en buy box PDP: fuera de scope hasta confirmar.

## 4. Recent Changes
- 2026-07-07 — 🔍 REVISIÓN VISUAL en vivo (screenshot-preview) landing + PDPs. Landing ✅ impecable. Detectado bug: `ProductStorySections.tsx` usa `/placeholder.svg` en steps (los 3 productos) y varios blocks → recuadros grises en PDPs. Plan de fix documentado (reutilizar `/paso-*.webp` + fotos reales/generadas). Confirmado que rutas de producto son `/productos/:slug` (español).
- 2026-07-06 — ✅ SPRINT PRE-LANZAMIENTO: fix bug imágenes (hero+4 casa real regeneradas), "Cómo funciona" con 4 fotos reales de manos, `BrandStorySection`, `ReviewsInvite` (honesto), página `/devoluciones`, topbar rotativo (5 msgs), link garantía en footer.
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
- **FOTOS REALES (catálogo)**: ruta `product-images/products/<hash>.webp`. 9 productos, 74 imágenes. Son las que usa la landing y las galerías de PDP.
- **Hero**: `/hero-dunaru.webp` — ✅ carga.
- **Casa real**: `/casa-real-comedor|recibidor|recamara|sala.webp` — ✅ cargan. Usadas en landing + algunos blocks de PDP. `recamara` y otras aún reutilizables para blocks vacíos.
- **Cómo funciona / 4 pasos**: `/paso-vierte|inserta|enciende|renueva.webp` — ✅ existen (fotos de manos con producto real). USAR TAMBIÉN en los steps de las PDPs (hoy están en placeholder).
- **PLACEHOLDER (bug)**: varios blocks/steps de `ProductStorySections.tsx` apuntan a `/placeholder.svg` → recuadros grises. A reemplazar (ver Active Plan).
- **PENDIENTE**: posible video demo; posibles 2-3 lifestyle nuevas para blocks de kit-concreto/perlas.

## 6. Known Issues
- 2026-07-07 — PDP story sections con `/placeholder.svg`: recuadros grises en "4 pasos" (3 productos) y en varios blocks editoriales (perlas x4, kit-vidrio x1, kit-concreto x2). Ver Active Plan.
- 2026-06-24 — Descuento de volumen: front no recalcula total carrito; depende del backend en checkout. VERIFICAR end-to-end con orden 2-3 kits (10%/15%).
- 2026-06-24 — Regla de envío $99 solo en Perlas: VERIFICAR config real de shipping.
- 2026-06-24 — "Comprar ahora" NO incluye add-ons seleccionados (bypassa carrito). Aceptable.

## 7. Pending / Future Sessions
- [high] FIX PDP placeholder images (Active Plan) — PRIORIDAD 1 pre-lanzamiento.
- [high] SPRINT video demo (hero/cómo funciona) con `videogen`.
- [med] Garantía en buy box de PDP (verificar consistencia en los 3).
- [med] Barra "te faltan $X para envío gratis" en carrito (AOV).
- [med] VERIFICAR cobro real del descuento por volumen en checkout.
- [med] Star ratings en product cards (cuando haya reseñas reales).
- [low] Feed IG/UGC, FAQ en tabs, badge MSI en buy box PDP.