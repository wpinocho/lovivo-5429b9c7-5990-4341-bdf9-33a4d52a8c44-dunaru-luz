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
- REGLA DE INTEGRIDAD: **NUNCA reseñas falsas ni testimonios inventados.** (Las 15 reseñas actuales SÍ son reales: producto enviado a amigos que lo usaron.)
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

## 3. Active Plan — ⭐ RESEÑAS REALES (2026-07-16)
Objetivo: montar prueba social REAL en landing + las 3 PDPs de pauta. El user tiene 15 reseñas reales (amigos a los que envió producto y lo usaron). Esto desbloquea el bloqueador #1 para tráfico frío. Ya subió 2 imágenes de reseña (prev-3) y va a mandar más.

### Arquitectura a construir
1. **Nuevo archivo de datos `src/data/reviews.ts`** — fuente única de verdad. Array tipado `Review[]`:
   ```ts
   interface Review {
     id: string
     name: string          // nombre real de la clienta (el user confirma/edita)
     location?: string     // ciudad opcional (CDMX, GDL...) — solo si es real
     rating: 4 | 5
     title: string         // etiqueta corta (categoría)
     text: string          // reseña textual (usar las 15 tal cual)
     productSlugs: string[] // en qué PDPs aparece
     featured?: boolean     // destacada (aparece primero + en landing)
     image?: string         // URL foto UGC (opcional)
     date?: string
   }
   ```
   - Rating: 13 reseñas = 5★, las 2 con crítica constructiva (#14, #15) = 4★. Promedio ≈ **4.9 / 5 · 15 reseñas**.
   - Nombres: asignar nombres propios plausibles (ver mapping abajo) pero MARCAR que el user debe confirmarlos/reemplazarlos por los reales. NO inventar apellidos completos si el user no los da → usar "Nombre + inicial".
   - Helper: `getReviewStats(slug?)` → `{ average, count }` y `getReviews(slug?)` → filtra por productSlug.

2. **Nuevo componente `src/components/Reviews.tsx`** (reemplaza al placeholder). Props: `{ slug?: string; title?: string }`.
   - Header: estrellas + "4.9 · 15 opiniones" + subtítulo honesto "Opiniones reales de clientes que ya la usan en casa."
   - Reseñas FEATURED con foto arriba (card grande: foto + estrellas + texto + nombre/ciudad).
   - Resto en grid 2–3 col (estrellas + título + texto + nombre). Estética editorial dunaru (arena/champagne, font-display para títulos).
   - Si `slug` → filtra a las reseñas de ese producto; sin slug (landing) → muestra las featured de toda la tienda.
   - Estrellas con `lucide-react` Star (fill champagne). Reutilizar tokens dunaru.

3. **Landing (`src/pages/ui/IndexUI.tsx`)**: reemplazar `<ReviewsInvite />` (línea ~515) por `<Reviews />` (featured de toda la tienda, 4–6 reseñas + 2–3 con foto). Mantener el CTA de WhatsApp "comparte tu experiencia" al final del bloque de reseñas (reciclar de ReviewsInvite) para seguir juntando UGC.

4. **PDP (`src/components/ProductStorySections.tsx`)**: reemplazar la sección 6 placeholder "Opiniones de clientes / Aún no hay reseñas" (líneas ~571-582) por `<Reviews slug={slug} />`.

5. **Buy box PDP (`src/pages/ui/ProductPageUI.tsx`)**: agregar mini rating debajo del título/precio (después del bloque de precio, ~línea 369): estrellas + "4.9 (15)" como enlace ancla que hace scroll a la sección de reseñas (`#resenas`). Alto impacto en conv rate — la prueba social se ve arriba del fold.

6. **Product cards (`src/components/ProductCard.tsx`)**: agregar resumen de estrellas + count debajo del título si el producto tiene reseñas (opcional pero recomendado — sube CTR a PDP). Verificar estructura del card antes de editar.

7. **Imágenes UGC**: en Craft Mode, `lov-copy('https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1784160660593-bwrlpr76c5q.webp', 'public/resena-1.webp')` y el otro `...2p4fwwsbql7.webp` → `public/resena-2.webp`. Usar las URLs devueltas en `reviews.ts`. Pedir al user las fotos restantes de las reseñas destacadas (ver lista en el mensaje).

### Selección de reseñas destacadas (las que más confianza generan en frío)
- **#5 "Para recibir visitas"** — "varias personas me preguntaron dónde la compré" → prueba social pura. FEATURED (Vidrio + Concreto). PEDIR FOTO.
- **#1 "Facilidad de uso"** — mata la objeción "¿es complicado?". FEATURED (todas). PEDIR FOTO.
- **#6 "Reutilizar recipientes"** — "vela en menos de 5 min" → valor + reuso. FEATURED (Perlas). PEDIR FOTO.
- **#7 "Experiencia de regalo"** — ángulo regalo. FEATURED (Concreto). PEDIR FOTO.
- **#13 "Experiencia completa"** — unboxing premium. FEATURED (Vidrio + Concreto). PEDIR FOTO.
- **#4 "Después de encenderla"** — prueba la promesa core (no se deforma). Perlas.
- **#11 "Ambiente y estética"** — emocional/luz cálida. Todas.
- **#12 "Para personas que no usan velas"** — convierte escépticos. Perlas.
- **#15 y #14 (4★, crítica constructiva)** — INCLUIRLAS: dan autenticidad (0 reseñas negativas = sospechoso). No featured, pero visibles.
- Resto (#2, #3, #8, #9, #10) — distribuir en las PDPs por ángulo.

### Mapping reseña → nombre propuesto (USER DEBE CONFIRMAR nombres reales)
1 Ana P. · 2 Ximena B. · 3 Daniela R. · 4 Mariana L. · 5 Regina M. · 6 Sofía T. · 7 Andrea V. · 8 Fernanda C. · 9 Lucía F. · 10 Paulina S. · 11 Valeria N. · 12 Gabriela H. · 13 Renata D. · 14 Carla J. (4★) · 15 Isabela M. (4★)

### Mapping reseña → PDPs
- **Perlas** (`perlas-originales-500-g`): #1, #6, #4, #12, #11, #2, #15
- **Kit Vidrio** (`kit-vaso-de-vidrio`): #1, #5, #13, #10, #11, #14
- **Kit Concreto** (`kit-vaso-de-concreto`): #7, #5, #8, #13, #3, #9, #15

### Reglas
- NO tocar el rating promedio a mano: calcularlo desde el array.
- Mantener honestidad: si el user no da ciudad real, omitir `location`.
- Reciclar y luego borrar `ReviewsInvite.tsx` cuando `Reviews.tsx` esté integrado en landing y PDP (o dejar CTA de WhatsApp dentro de Reviews).

## 4. Recent Changes
- 2026-07-16 — ⭐ PLAN RESEÑAS REALES: 15 reseñas reales del user. Crear `src/data/reviews.ts` + `Reviews.tsx`, reemplazar `ReviewsInvite` en landing y placeholder sección 6 de `ProductStorySections`, mini-rating en buy box PDP + estrellas en ProductCard. 2 imágenes ya subidas (prev-3), faltan más. Promedio 4.9/15.
- 2026-07-16 — 🔍 AUDITORÍA PRE-PAUTA vs VelaVita.cl. Veredicto: PDPs listas en diseño; bloqueador = 0 reseñas. 3 PDPs elegidas: Kit Vidrio, Perlas Originales, Kit Concreto. Boosters: garantía en buy box, ETA de entrega, video demo, oferta de lanzamiento, verificar checkout.
- 2026-07-16 — ✅ FIX PDP sticky bar prematuro: ahora usa `scrolledPastCta = !ctaInView && entry.boundingClientRect.top < 0`. Solo sale al pasar el CTA.
- 2026-07-16 — ✅ FIX carrusel móvil PDP estilo rodata.mx: peek `basis-[88%]` + `align:"start"`, sin flechas laterales.
- 2026-07-15 — ✅ FIX BUG galería PDP (desktop): thumbnails se desbordaban. `overflow-x-auto` + `snap-x` + `.thumbnails-scroll`.
- 2026-07-15 — ✅ PDP PERLAS: 4 fotos editoriales reemplazadas por fotos mejoradas del user (Supabase message-images).
- 2026-07-15 — ✅ PDP PERLAS blocks editoriales: reescritos los 4 TÍTULOS + copy propio.
- 2026-07-15 — ✅ FIX PDP "Crea tu vela en 4 pasos": usa `HOW_IT_WORKS_STEPS` con fotos reales.
- 2026-07-15 — 🖼️ REEMPLAZADA imagen paso "Renueva" con foto real del user.
- 2026-07-15 — 🧩 FIX layout "¿Cómo quieres empezar?" en `IndexUI.tsx`.
- 2026-07-15 — 🎨 FIX `/paso-vierte.webp` a arena fina (~1mm).
- 2026-07-07 — 🔍 REVISIÓN VISUAL en vivo landing + PDPs.
- 2026-07-06 — ✅ SPRINT PRE-LANZAMIENTO: imágenes, "Cómo funciona", BrandStory, ReviewsInvite, /devoluciones, topbar rotativo.
- 2026-07-06 — 🔍 AUDITORÍA PRE-LANZAMIENTO vs VelaVita.cl + Foton.
- 2026-07-03 — ✅ LANDING SINCRONIZADA: swaps a fotos reales + hero/casa real.

## 5. Image Inventory
- **FOTOS REALES (catálogo)**: `product-images/products/<hash>.webp`. 9 productos, 74 imágenes.
- **Hero**: `/hero-dunaru.webp` — ✅.
- **Casa real**: `/casa-real-comedor|recibidor|recamara|sala.webp` — ✅.
- **Cómo funciona / 4 pasos**: `/paso-vierte|inserta|enciende|renueva.webp` — ✅.
- **PDP Perlas blocks**: ✅ 4 fotos mejoradas del user (URLs Supabase message-images).
- **PDP Kits blocks**: ✅ verificado, sin placeholders grises.
- **UGC RESEÑAS (NUEVO)**: 2 imágenes subidas por user → `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1784160660593-bwrlpr76c5q.webp` y `...2p4fwwsbql7.webp`. En Craft: `lov-copy` a `public/resena-1.webp` / `resena-2.webp`. FALTAN fotos de las reseñas destacadas (#5, #1, #6, #7, #13) — pedidas al user.
- **Ref de marca ideal**: foto subida `1784138202029-sv5fpcay1h.webp` (mano vertiendo arena a vaso, bolsa DUNARU).
- **OJO consistencia visual**: material = **arena fina**, no perlas grandes.

## 6. Known Issues
- 2026-07-16 — 🟡 Reseñas reales: nombres asignados son PROPUESTA — el user debe confirmar/reemplazar por nombres reales antes de publicar en frío.
- 2026-06-24 — Descuento de volumen: front no recalcula total carrito; VERIFICAR end-to-end antes de pagar pauta.
- 2026-06-24 — Regla de envío $99 solo en Perlas: VERIFICAR config real de shipping.
- 2026-06-24 — "Comprar ahora" NO incluye add-ons seleccionados. Aceptable.

## 7. Pending / Future Sessions
- [high] CONSTRUIR reseñas reales (este plan) en Craft Mode: `reviews.ts` + `Reviews.tsx` + integraciones + mini-rating buy box.
- [high] Recolectar fotos UGC restantes de reseñas destacadas + email post-compra pidiendo reseña (Dashboard).
- [high] VIDEO DEMO (vierte→inserta→enciende→renueva) con `videogen` — creative Meta + PDP/landing.
- [high] Garantía visible en buy box + ETA de entrega cerca del CTA (VelaVita "recibe HOY").
- [med] Oferta de lanzamiento (`compare_at_price`) en productos hero para tráfico frío.
- [med] VERIFICAR checkout end-to-end: descuento por volumen + regla envío $99.
- [med] Barra "te faltan $X para envío gratis" en carrito (AOV).
- [low] Feed IG/UGC, badge MSI en buy box PDP, dots en carrusel móvil PDP.