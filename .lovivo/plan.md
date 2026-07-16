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

## 3. Active Plan — 🔍 AUDITORÍA PRE-PAUTA (2026-07-16)
Objetivo del user: confirmar si la tienda está lista para invertir en pauta (Meta) y definir a qué 3 PDPs mandar tráfico frío. Comparación fuerte hecha vs VelaVita.cl.

### Veredicto general
Las PDPs se ven MUY profesionales (editorial, fotos reales, "Crea tu vela en 4 pasos", tabla comparativa, FAQ, benefits, sticky bar + carrusel móvil ya arreglados). El Kit de Concreto YA no muestra placeholders grises — quedó limpio. Nivel de diseño = a la par o mejor que VelaVita. PERO hay 1 bloqueador grande y varios boosters antes de escalar gasto.

### 3 PDPs recomendadas para pauta (tráfico frío)
1. **Kit Vaso de Vidrio** `/productos/kit-vaso-de-vidrio` — $899 · Ángulo "todo listo para empezar hoy" / regalo. Menor fricción (no necesita recipiente propio). FLAGSHIP para frío.
2. **Perlas Originales 500 g** `/productos/perlas-originales-500-g` — $599 · Ángulo hero "crea una vela en el recipiente que YA tienes". Precio de entrada más bajo = conversión más fácil. PDP más desarrollada.
3. **Kit Vaso de Concreto** `/productos/kit-vaso-de-concreto` — $1099 · Ángulo objeto de diseño / regalo premium. Sube AOV. Ya se ve limpio.

### 🔴 BLOQUEADOR #1 — Cero prueba social (el mayor gap vs VelaVita)
VelaVita tiene 91/69/9 reseñas con FOTOS de clientes y star ratings en todos lados. dunaru tiene 0 reseñas y solo un bloque "sé el primero en compartir tu experiencia". Para tráfico frío esto MATA la conversión.
- REGLA: NO inventar reseñas. Camino honesto:
  a) **Soft-launch primero**: presupuesto bajo o enviar producto a un puñado de clientes/amigas/micro-influencers reales → recolectar reseñas + fotos UGC reales → LUEGO escalar gasto.
  b) Configurar email post-compra pidiendo reseña (desde el Dashboard AI).
  c) Mientras llegan reseñas, reforzar confianza con: garantía visible + historia de marca + WhatsApp + framing honesto de "marca nueva mexicana".
- Cuando existan reseñas reales: activar star ratings en product cards + sección de reseñas con foto en las 3 PDPs.

### 🟡 BOOSTERS antes/junto con la pauta (conv rate)
1. **Línea de garantía en el buy box** de las 3 PDPs (ej. "Garantía 30 días — si no te encanta, te devolvemos tu dinero"). Verificar consistencia; ya existe `/devoluciones`.
2. **Estimado de entrega cerca del CTA** ("Recibe en 2–4 días hábiles"). VelaVita explota esto ("recibe HOY"). Alto impacto en frío.
3. **Video demo** (vierte → inserta → enciende → renueva) para creative de Meta Y embebido en PDP/landing. Usar `videogen`. Cold traffic en Meta convierte mucho mejor con video.
4. **Oferta/urgencia de lanzamiento** para frío: considerar `compare_at_price` en productos hero (Perlas/Kits) para un precio de lanzamiento, como hace VelaVita ("Oferta").
5. **Verificar checkout end-to-end**: descuento por volumen se cobra bien + regla de envío $99 solo en Perlas. Probar antes de pagar pauta.

### ✅ Ya está bien (no tocar)
- Diseño editorial, fotos reales de catálogo, galería desktop, carrusel móvil (peek), sticky bar condicional.
- "Crea tu vela en 4 pasos" con fotos reales (compartido landing+PDP).
- Tabla comparativa "Esto hace diferente a dunaru", FAQ, benefits icons.
- Topbar rotativo (envío gratis + MSI), footer con medios de pago, WhatsApp.
- Variantes de color, tiers de volumen, add-ons (Pack mechas).

### OJO datos
- Todos los productos tienen `track_inventory: false` → `inventory_quantity: 0` NO bloquea la compra. OK.

## 4. Recent Changes
- 2026-07-16 — 🔍 AUDITORÍA PRE-PAUTA vs VelaVita.cl. Veredicto: PDPs listas en diseño; bloqueador = 0 reseñas. 3 PDPs elegidas: Kit Vidrio, Perlas Originales, Kit Concreto. Boosters: garantía en buy box, ETA de entrega, video demo, oferta de lanzamiento, verificar checkout.
- 2026-07-16 — ✅ FIX PDP sticky bar prematuro: ahora usa `scrolledPastCta = !ctaInView && entry.boundingClientRect.top < 0`. Solo sale al pasar el CTA.
- 2026-07-16 — ✅ FIX carrusel móvil PDP estilo rodata.mx: peek `basis-[88%]` + `align:"start"`, sin flechas laterales. Imports `CarouselPrevious/Next` eliminados.
- 2026-07-15 — ✅ FIX BUG galería PDP (desktop): thumbnails se desbordaban. Solución: `overflow-x-auto` + `snap-x` + `.thumbnails-scroll`.
- 2026-07-15 — ✅ PDP PERLAS: reemplazadas las 4 fotos de los blocks editoriales por fotos mejoradas del user (Supabase message-images).
- 2026-07-15 — ✅ PDP PERLAS blocks editoriales: reescritos los 4 TÍTULOS + copy propio. Todos con `photo: true`.
- 2026-07-15 — ✅ FIX PDP "Crea tu vela en 4 pasos": usa `HOW_IT_WORKS_STEPS` con fotos reales. Igual en los 3 productos.
- 2026-07-15 — 🖼️ REEMPLAZADA imagen paso "Renueva" (`/paso-renueva.webp`) con foto real del user.
- 2026-07-15 — 🧩 FIX layout "¿Cómo quieres empezar?" en `IndexUI.tsx`.
- 2026-07-15 — 🎨 FIX `/paso-vierte.webp` a arena fina (~1mm).
- 2026-07-07 — 🔍 REVISIÓN VISUAL en vivo landing + PDPs. Detectado bug placeholder.
- 2026-07-06 — ✅ SPRINT PRE-LANZAMIENTO: fix imágenes, "Cómo funciona", `BrandStorySection`, `ReviewsInvite`, `/devoluciones`, topbar rotativo.
- 2026-07-06 — 🔍 AUDITORÍA PRE-LANZAMIENTO vs VelaVita.cl + Foton.
- 2026-07-03 — ✅ LANDING SINCRONIZADA: swaps a fotos reales + hero/casa real.
- 2026-06-30 — V1 CIERRE: 4 lifestyle "casa real" + `CasaRealSection.tsx`.

## 5. Image Inventory
- **FOTOS REALES (catálogo)**: `product-images/products/<hash>.webp`. 9 productos, 74 imágenes.
- **Hero**: `/hero-dunaru.webp` — ✅.
- **Casa real**: `/casa-real-comedor|recibidor|recamara|sala.webp` — ✅.
- **Cómo funciona / 4 pasos**: `/paso-vierte|inserta|enciende|renueva.webp` — ✅. Compartidos entre landing y PDP (constante `HOW_IT_WORKS_STEPS`).
- **PDP Perlas blocks**: ✅ usan las 4 fotos mejoradas del user (URLs Supabase message-images, no /public).
- **PDP Kits blocks**: ✅ verificado 2026-07-16 en vivo, ya NO se ven placeholders grises (Concreto limpio).
- **PENDIENTE UGC**: reseñas con foto real de clientes (aún no existen — recolectar en soft-launch).
- **Ref de marca ideal para generar**: foto subida por user `1784138202029-sv5fpcay1h.webp` (mano vertiendo arena a vaso, bolsa DUNARU).
- **OJO consistencia visual**: material = **arena fina**, no perlas grandes.

## 6. Known Issues
- 2026-07-16 — 🔴 CERO reseñas/prueba social — bloqueador principal para tráfico frío. Camino honesto: soft-launch + email post-compra + garantía/marca visible. NO inventar reseñas.
- 2026-06-24 — Descuento de volumen: front no recalcula total carrito; VERIFICAR end-to-end antes de pagar pauta.
- 2026-06-24 — Regla de envío $99 solo en Perlas: VERIFICAR config real de shipping.
- 2026-06-24 — "Comprar ahora" NO incluye add-ons seleccionados. Aceptable.

## 7. Pending / Future Sessions
- [high] PRUEBA SOCIAL: plan de recolección de reseñas reales (soft-launch + email post-compra vía Dashboard). Activar star ratings en cards + sección reseñas con foto cuando existan.
- [high] VIDEO DEMO (vierte→inserta→enciende→renueva) con `videogen` — para creative Meta + embebido en PDP/landing.
- [high] Garantía visible en buy box de las 3 PDPs de pauta + ETA de entrega cerca del CTA.
- [med] Oferta de lanzamiento (`compare_at_price`) en productos hero para tráfico frío.
- [med] VERIFICAR checkout end-to-end: descuento por volumen + regla envío $99.
- [med] Barra "te faltan $X para envío gratis" en carrito (AOV).
- [low] Feed IG/UGC, FAQ en tabs, badge MSI en buy box PDP, dots en carrusel móvil PDP.