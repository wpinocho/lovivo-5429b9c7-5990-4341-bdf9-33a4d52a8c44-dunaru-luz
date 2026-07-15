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
- REGLA COPY: NO copiar textos de VelaVita. Inspirarse en el concepto, redactar propio.
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

## 3. Active Plan — 🟡 FIX PDP: placeholders restantes en blocks de KITS (2026-07-15)
Perlas YA quedó 100% con fotos reales del user. Faltan solo los **blocks** de los kits con `PLACEHOLDER`:
- **kit-vaso-de-vidrio → blocks**: bloque 3 ("Tu vaso, también cuando no es vela") = PLACEHOLDER (falta 1).
- **kit-vaso-de-concreto → blocks**: bloques 2 ("Por qué concreto") y 3 ("El regalo que se nota") = PLACEHOLDER (faltan 2).
- Para generarlas: `imagegen` model=gemini, reference = foto real de producto. aspect_ratio 4:3. Marcar `photo: true`.

## 4. Recent Changes
- 2026-07-15 — ✅ FIX BUG galería PDP (desktop): las miniaturas (`flex gap-3` con `shrink-0`, sin wrap/scroll) se desbordaban horizontalmente e invadían la columna de descripción. Solución: `overflow-x-auto` + `snap-x` en la fila de thumbnails + clase `.thumbnails-scroll` (scrollbar sutil) en index.css. Ahora las miniaturas se deslizan dentro de su columna. `ProductPageUI.tsx` líneas ~250.
- 2026-07-15 — ✅ PDP PERLAS: reemplazadas las 4 fotos de los blocks editoriales por las **fotos mejoradas que subió el user** (URLs directas de Supabase message-images). Mapeo: "Siempre luce como el primer día" = h29qq6dodik, "El recipiente que ya amas..." = 4z1j2dq3ab9, "Se cae y no pasa nada" = go7315yuax, "Recarga en vez de tirar" = c47lrhv7fa. NOTA: `lov-copy` de user-uploads NO copia a public/, devuelve URL de Supabase → usar esa URL directa en el código.
- 2026-07-15 — ✅ PDP PERLAS blocks editoriales: reescritos los 4 TÍTULOS para no copiar a VelaVita + copy refrescado. Todos con `photo: true`.
- 2026-07-15 — ✅ FIX PDP "Crea tu vela en 4 pasos": usa `HOW_IT_WORKS_STEPS` (constante compartida) con fotos reales de la landing. Igual en los 3 productos.
- 2026-07-15 — 🖼️ REEMPLAZADA imagen paso "Renueva" (`/paso-renueva.webp`) con foto real del user.
- 2026-07-15 — 🧩 FIX layout "¿Cómo quieres empezar?" en `IndexUI.tsx` (columnas parejas).
- 2026-07-15 — 🎨 FIX `/paso-vierte.webp` a arena fina (~1mm).
- 2026-07-07 — 🔍 REVISIÓN VISUAL en vivo landing + PDPs. Detectado bug placeholder.
- 2026-07-06 — ✅ SPRINT PRE-LANZAMIENTO: fix imágenes, "Cómo funciona", `BrandStorySection`, `ReviewsInvite`, `/devoluciones`, topbar rotativo.
- 2026-07-06 — 🔍 AUDITORÍA PRE-LANZAMIENTO vs VelaVita.cl + Foton.
- 2026-07-03 — ✅ LANDING SINCRONIZADA: swaps a fotos reales + hero/casa real.
- 2026-06-30 — V1 CIERRE: 4 lifestyle "casa real" + `CasaRealSection.tsx`.
- 2026-06-24 — SPRINT 2: PDP editorial perlas. Volume rule (2→10%,3→15%).
- 2026-06-24 — WhatsApp real `525531215386`.
- 2026-06-23 — 6 productos + sistema de diseño dunaru + EcommerceTemplate.

## 5. Image Inventory
- **FOTOS REALES (catálogo)**: `product-images/products/<hash>.webp`. 9 productos, 74 imágenes.
- **Hero**: `/hero-dunaru.webp` — ✅.
- **Casa real**: `/casa-real-comedor|recibidor|recamara|sala.webp` — ✅.
- **Cómo funciona / 4 pasos**: `/paso-vierte|inserta|enciende|renueva.webp` — ✅. Compartidos entre landing y PDP (constante `HOW_IT_WORKS_STEPS`).
- **PDP Perlas blocks**: ✅ AHORA usan las 4 fotos mejoradas del user (URLs Supabase message-images, no /public). Los `/pdp-perlas-*.webp` viejos (AI) ya NO se usan.
- **PLACEHOLDER (bug restante)**: solo en blocks de KITS (ver Active Plan). Perlas YA no tiene placeholder.
- **Ref de marca ideal para generar**: foto subida por user `1784138202029-sv5fpcay1h.webp` (mano vertiendo arena a vaso, bolsa DUNARU).
- **OJO consistencia visual**: material = **arena fina**, no perlas grandes.

## 6. Known Issues
- 2026-07-15 — PDP `blocks` de KITS con `/placeholder.svg`: recuadros grises. Ver Active Plan.
- 2026-06-24 — Descuento de volumen: front no recalcula total carrito; VERIFICAR end-to-end.
- 2026-06-24 — Regla de envío $99 solo en Perlas: VERIFICAR config real de shipping.
- 2026-06-24 — "Comprar ahora" NO incluye add-ons seleccionados. Aceptable.

## 7. Pending / Future Sessions
- [high] FIX placeholders en blocks de KITS (kit-vidrio 1, kit-concreto 2) — generar 3 fotos.
- [high] SPRINT video demo (hero/cómo funciona) con `videogen`.
- [med] Garantía en buy box de PDP (verificar consistencia en los 3).
- [med] Barra "te faltan $X para envío gratis" en carrito (AOV).
- [med] VERIFICAR cobro real del descuento por volumen en checkout.
- [med] Star ratings en product cards (cuando haya reseñas reales).
- [low] Feed IG/UGC, FAQ en tabs, badge MSI en buy box PDP.