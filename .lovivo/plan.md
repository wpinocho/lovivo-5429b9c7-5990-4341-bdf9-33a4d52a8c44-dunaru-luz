# Store Plan — dunaru
<!-- Auto-maintained by Lovivo AI. READ THIS FIRST. UPDATE IT LAST. -->

## 1. Brand & Context
- Brand name: **dunaru** (dunaru.mx)
- Product: Velas perladas **rellenables** — **gránulos finos de cera tipo arena** (NO perlas grandes) + mechas de algodón. Material visual = arena/couscous fino.
- ⚠️ VOCABULARIO: usar **"rellenable"** (NO "recargable"). El user pidió el cambio 2026-07-25. "Recarga"/"rellena" como verbo OK.
- Tesis: no vendemos "cera para velas". Vendemos una forma simple de crear luz y decoración en el recipiente que ya tienes.
- Target: Mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO, decoración + hogar + regalo
- Market: México. Moneda MXN. Idioma: español de México.
- Tono: claro, cálido, directo. Sin tecnicismos.
- Pagos: **A meses sin intereses vía Stripe** (hasta 6 meses). ⚠️ NO usar Mercado Pago. ⚠️ NUNCA nombrar "Stripe" ni "Mercado Pago" en la UI — solo "a meses sin intereses".
- Envío: Perlas Originales = +$99. Todo lo demás = gratis desde $899.
- WhatsApp REAL: `525531215386` (+52 55 3121 5386).
- REGLA DE INTEGRIDAD: **NUNCA reseñas falsas.** Las 15 reseñas SÍ son reales. Prueba social usa `getReviewStats()` (4.9 / 15).
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`
- RUTAS EN ESPAÑOL: producto = `/productos/:slug`, paquete = `/paquete/:slug`, carrito = `/carrito`, checkout = `/pagar`, **categoría = `/categorias/:handle`** (`todos` = catálogo completo).
- Competencia: **VelaVita.cl** (LATAM) y **Foton (US)**.

## 2. Design System
- Fondo: Marfil #FAF6EF → `--background` · Alterno: Arena #F1E9DC → `bg-dunaru-arena`
- Texto: Carbón #2B2A27 → `--foreground` · Acento: Champagne #C2A878 → `text-dunaru-champagne`
- CTA: Ónix #1E1C1A → `--primary` · Detalle llama: Ámbar #D89A57 → `text-dunaru-ambar`
- Display: Instrument Serif → `font-display` · Body/UI: Manrope → `font-body`
- Tokens: `dunaru-marfil/arena/champagne/carbon/onix/ambar`
- Estética: editorial, mínima, mucho aire. Mobile-first.
- **MENÚ "Productos"**: dropdown en header (`EcommerceTemplate.tsx`) con `PRODUCT_CATEGORIES` → Todos / Kits / Accesorios / Recipientes. Desktop = hover `group` panel; móvil = sección con label.
- **PDP secciones** (`ProductStorySections.tsx`): driven por `PDP_CONTENT[slug]`. Esquema fijo: garantías → "Crea tu vela en 4 pasos" (HOW_IT_WORKS_STEPS compartido) → bloques editoriales → "Esto hace diferente a dunaru" (tabla) → "Preguntas frecuentes" → "Opiniones de quienes ya la tienen" (Reviews). `steps` en el config es OPCIONAL y NO se renderiza (usa HOW_IT_WORKS_STEPS). Bloques con `photo:true` usan object-cover.
- **Categoría landing** (`src/pages/Collection.tsx`): grid 2/3 cols de ProductCard, header centrado con nombre+descripción, empty/notFound states, SEO. handle `todos` = todos los productos activos.

## 3. Active Plan — ✅ Sin plan activo.

## 4. Recent Changes
- 2026-07-25 — ✅ IMÁGENES PDP: kit-vaso-de-vidrio "Tu vaso, también cuando no es vela" → `/pdp-vaso-decor.webp` (gen con ref producto). bowl-negro "Objeto de diseño…" → `/pdp-bowl-decor.webp` (gen con ref producto). pack-30-mechas "Para nunca quedarte sin luz" → foto subida por user (caja MECHAS DUNARU).
- 2026-07-25 — ✅ MENÚ "Productos": dropdown desktop + móvil en `EcommerceTemplate.tsx` con 4 categorías (`/categorias/:handle`).
- 2026-07-25 — ✅ Nueva página `src/pages/Collection.tsx` + ruta `/categorias/:handle` en App.tsx. `todos` = catálogo completo.
- 2026-07-25 — ✅ PDP para TODOS los 9 productos: agregado `PDP_CONTENT` para reserva-1-kg, d-o-de-tonos, tr-o-de-tonos, bowl-negro, pack-30-mechas, vaso-extra-transparente (antes solo 3).
- 2026-07-25 — ✅ "recargable" → "rellenable" en ProductStorySections + footer. Quitado "Mercado Pago" del bloque pago seguro de la PDP.
- 2026-07-25 — ✅ Colecciones creadas: Kits (2), Accesorios (1), Recipientes (2).
- 2026-07-23 — ✅ WHATSAPP: leyenda en PDP + footer. Número real 525531215386.
- 2026-07-23 — ✅ FIX INTEGRIDAD: quitado "Mercado Pago" del top bar y MSI bar footer.
- 2026-07-17 — ✅ FAVICON de marca `/favicon.png`.
- 2026-07-17 — ✅ Checkout UI: resumen móvil abierto, slots StripePayment, prueba social REAL 4.9/15.
- 2026-07-17 — ✅ CONVERSIÓN PDP: MSI + reaseguros ETA + garantía + rating champagne barra sticky.
- 2026-07-17 — ✅ FIX HERO MÓVIL: imagen vertical `/hero-dunaru-mobile.webp`.
- 2026-07-16 — ✅ RESEÑAS REALES LIVE: `src/data/reviews.ts` (15 reseñas). 4.9/15.
- 2026-07-16 — ✅ FIX PDP sticky bar + carrusel móvil.
- 2026-07-15 — ✅ FIX galería PDP desktop.

## 5. Image Inventory
- **Colecciones**: sin imagen asignada (Kits/Accesorios/Recipientes image=null). Opcional: generar banners.
- **FAVICON**: `/favicon.png` (256x256). Viejo `public/favicon.svg` huérfano.
- **FOTOS REALES catálogo**: `product-images/products/<hash>.webp`. 9 productos.
- **Hero desktop**: `/hero-dunaru.webp` · **Hero móvil**: `/hero-dunaru-mobile.webp` · **Casa real**: `/casa-real-{sala,comedor,recibidor}.webp` · **4 pasos**: `/paso-{vierte,inserta,enciende,renueva}.webp`.
- **Bloques PDP nuevos** (2026-07-25): `/pdp-vaso-decor.webp` (vaso decorativo), `/pdp-bowl-decor.webp` (bowl decorativo), mecha pack = URL supabase message-images (foto real user). Ya NO usan PLACEHOLDER.
- Restante PLACEHOLDER en PDP: kit-vaso-de-concreto bloques 2 y 3 ("Por qué concreto" + "El regalo que se nota"), vaso-extra-transparente bloque 2 ("Combina con cualquier decoración").

## 6. Known Issues
- 2026-07-25 — 🟡 Perlas Originales, Reserva 1kg, Dúo y Trío NO están en ninguna categoría del menú (solo en "Todos"). Intencional. Reconsiderar categoría "Perlas".
- 2026-07-25 — 🟡 Quedan PLACEHOLDER en kit-vaso-de-concreto (2 bloques) y vaso-extra-transparente (1 bloque). Reemplazar con fotos reales cuando se pueda.
- 2026-07-17 — 🟡 Verificar checkout móvil en deploy.
- 2026-06-24 — Verificar recálculo descuento volumen + regla envío $99 solo Perlas.

## 7. Pending / Future Sessions
- [high] VIDEO DEMO con `videogen`: vierte→inserta→enciende→renueva.
- [med] Fotos/imágenes para PLACEHOLDER restantes: kit-vaso-de-concreto (2) + vaso-extra-transparente (1).
- [med] Banners de colección (image null) para las landings de categoría.
- [low] Verificar visualmente el dropdown "Productos" en móvil tras deploy.
- [low] Borrar `public/favicon.svg`, `public/tmp-upload-hero.webp` huérfanos.