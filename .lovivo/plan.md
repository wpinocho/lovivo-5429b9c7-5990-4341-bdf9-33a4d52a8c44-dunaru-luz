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
- ⚠️ **kit-vaso-de-concreto** es en realidad de **CERÁMICA** (no concreto). El user corrigió 2026-07-27. Slug sigue siendo "concreto" pero el material real es cerámica negra mate.

## 2. Design System
- Fondo: Marfil #FAF6EF → `--background` · Alterno: Arena #F1E9DC → `bg-dunaru-arena`
- Texto: Carbón #2B2A27 → `--foreground` · Acento: Champagne #C2A878 → `text-dunaru-champagne`
- CTA: Ónix #1E1C1A → `--primary` · Detalle llama: Ámbar #D89A57 → `text-dunaru-ambar`
- Display: Instrument Serif → `font-display` · Body/UI: Manrope → `font-body`
- Tokens: `dunaru-marfil/arena/champagne/carbon/onix/ambar`
- Estética: editorial, mínima, mucho aire. Mobile-first.
- **MENÚ "Productos"**: dropdown en header (`EcommerceTemplate.tsx`) con `PRODUCT_CATEGORIES` → Todos / Kits / Accesorios / Recipientes. Desktop = hover `group` panel; móvil = sección con label.
- **PDP secciones** (`ProductStorySections.tsx`): driven por `PDP_CONTENT[slug]`. Esquema fijo: garantías → "Crea tu vela en 4 pasos" (HOW_IT_WORKS_STEPS compartido) → bloques editoriales → "Esto hace diferente a dunaru" (tabla) → "Preguntas frecuentes" → "Opiniones de quienes ya la tienen" (Reviews). `steps` en el config es OPCIONAL y NO se renderiza (usa HOW_IT_WORKS_STEPS). Bloques con `photo:true` usan object-cover.
- **`PERLAS_BENEFIT_BLOCKS`** (const compartida en ProductStorySections.tsx): los 4 bloques de beneficios de Perlas Originales. Usada por perlas-originales-500-g, reserva-1-kg, d-o-de-tonos, tr-o-de-tonos. Editar aquí = cambia en los 4.
- **Categoría landing** (`src/pages/Collection.tsx`): grid 2/3 cols de ProductCard, header centrado con nombre+descripción, empty/notFound states, SEO. handle `todos` = todos los productos activos.

## 3. Active Plan — ✅ Sin plan activo.

## 4. Recent Changes
- 2026-07-27 — 🟠 DIAGNÓSTICO CHECKOUT: user ve "No realizamos envíos a esa dirección" en /pagar con dirección CDMX. Causa = backend `no_rate_for_destination` (store_settings tiene país MX con countries_count:1 PERO falta TARIFA de envío que cubra CDMX). NO es bug de código. Fix = Dashboard → Config Tienda → Envíos: crear tarifa MX ($99 Perlas / gratis desde $899) y/o incluir estado CDMX. store_settings es tabla interna, NO editable por Lovivo.
- 2026-07-27 — ✅ HERO (IndexUI.tsx): "recargables"→"rellenables". Botón "Comprar ahora" ahora → /productos/perlas-originales-500-g (bestseller). Imagen móvil object-center→object-top (empieza arriba, sin espacio blanco). Sección centrada (items-center) + mejor espaciado título/subtítulo/CTA (py-24, mb-7/8/10-12, gap-4).
- 2026-07-27 — ✅ PASO "Vierte": nueva foto real del user (arena de cera vertiéndose en vaso) descargada a `public/paso-vierte.webp` (sobrescrita). Aplica a los 4 pasos de TODAS las PDP + "Quiénes somos" (mismo archivo compartido).
- 2026-07-27 — ✅ BENEFICIOS COMPARTIDOS: extraídos los 4 bloques de perlas a const `PERLAS_BENEFIT_BLOCKS`. Ahora reserva-1-kg, d-o-de-tonos y tr-o-de-tonos usan los mismos beneficios+imágenes que Perlas Originales (antes tenían bloques propios de "casa-real").
- 2026-07-27 — ✅ IMÁGENES PDP (fotos reales user): bowl-negro "Un recipiente más para otro rincón" → yafqxd2xr9i. vaso-extra-transparente "Combina con cualquier decoración" → wovmtpzn66. kit-vaso-de-concreto: "Un objeto de diseño que da luz" → i54i3sm6qk, "Por qué concreto"→"Por qué cerámica" (texto concreto→cerámica) + u6xju9w4wjl, "El regalo que se nota" → 77nbrytmoii. Todos con photo:true.
- 2026-07-25 — ✅ IMÁGENES PDP: kit-vaso-de-vidrio "Tu vaso, también cuando no es vela" → `/pdp-vaso-decor.webp`. bowl-negro "Objeto de diseño…" → `/pdp-bowl-decor.webp`. pack-30-mechas "Para nunca quedarte sin luz" → foto real user.
- 2026-07-25 — ✅ MENÚ "Productos": dropdown desktop + móvil en `EcommerceTemplate.tsx` con 4 categorías (`/categorias/:handle`).
- 2026-07-25 — ✅ Nueva página `src/pages/Collection.tsx` + ruta `/categorias/:handle` en App.tsx. `todos` = catálogo completo.
- 2026-07-25 — ✅ PDP para TODOS los 9 productos: agregado `PDP_CONTENT` para reserva-1-kg, d-o-de-tonos, tr-o-de-tonos, bowl-negro, pack-30-mechas, vaso-extra-transparente.
- 2026-07-25 — ✅ "recargable" → "rellenable" en ProductStorySections + footer. Quitado "Mercado Pago" del bloque pago seguro de la PDP.
- 2026-07-25 — ✅ Colecciones creadas: Kits (2), Accesorios (1), Recipientes (2).
- 2026-07-23 — ✅ WHATSAPP: leyenda en PDP + footer. Número real 525531215386.
- 2026-07-23 — ✅ FIX INTEGRIDAD: quitado "Mercado Pago" del top bar y MSI bar footer.
- 2026-07-17 — ✅ FAVICON de marca `/favicon.png`.
- 2026-07-17 — ✅ Checkout UI: resumen móvil abierto, slots StripePayment, prueba social REAL 4.9/15.

## 5. Image Inventory
- **Colecciones**: sin imagen asignada (Kits/Accesorios/Recipientes image=null). Opcional: generar banners.
- **FAVICON**: `/favicon.png` (256x256). Viejo `public/favicon.svg` huérfano.
- **FOTOS REALES catálogo**: `product-images/products/<hash>.webp`. 9 productos.
- **Hero desktop**: `/hero-dunaru.webp` · **Hero móvil**: `/hero-dunaru-mobile.webp` · **Casa real**: `/casa-real-{sala,comedor,recibidor}.webp` · **4 pasos**: `/paso-{vierte,inserta,enciende,renueva}.webp`.
- **`/paso-vierte.webp`** (actualizado 2026-07-27): foto real user de arena de cera vertiéndose en vaso de vidrio. Compartido por 4-pasos PDP + "Quiénes somos".
- **`PERLAS_BENEFIT_BLOCKS` imgs** (Supabase message-images 1784141750637/750638): h29qq6dodik (siempre nueva), 4z1j2dq3ab9 (recipiente que amas), go7315yuax (se cae), c47lrhv7fa (recarga). Compartidas por perlas/reserva/dúo/trío.
- **Bloques PDP fotos reales user** (message-images/.../): bowl-negro rincón = `1785182590879-yafqxd2xr9i.webp`. vaso-transparente decor = `1785182590879-wovmtpzn66.webp`. concreto objeto luz = `1785182590879-i54i3sm6qk.webp`. concreto cerámica = `1785182590879-u6xju9w4wjl.webp`. concreto regalo = `1785182590879-77nbrytmoii.webp`. mecha pack = `1785012509487-5bsut1tyt6c.webp`.
- **Bloques PDP generados** (2026-07-25): `/pdp-vaso-decor.webp`, `/pdp-bowl-decor.webp`.
- ✅ Ya NO quedan PLACEHOLDER en ninguna PDP.

## 6. Known Issues
- 2026-07-27 — 🟠 CHECKOUT BLOQUEA PAGO: "No realizamos envíos a esa dirección" (`no_rate_for_destination`) para CDMX. Falta TARIFA de envío para México (país sí está cubierto, countries_count:1). ARREGLAR en Dashboard → Config Tienda → Envíos: crear tarifa MX ($99 Perlas / gratis desde $899) e incluir estado CDMX. store_settings es interna, no editable por código. PENDIENTE confirmar con user tras agregar tarifa.
- 2026-07-27 — 🟡 FAQs de kit-vaso-de-concreto todavía dicen "concreto" (título producto + respuestas FAQ). El material real es CERÁMICA. Reconsiderar renombrar producto completo a "Kit Vaso de Cerámica" y actualizar FAQs.
- 2026-07-25 — 🟡 Perlas Originales, Reserva 1kg, Dúo y Trío NO están en ninguna categoría del menú (solo en "Todos"). Intencional. Reconsiderar categoría "Perlas".
- 2026-07-17 — 🟡 Verificar checkout móvil en deploy.
- 2026-06-24 — Verificar recálculo descuento volumen + regla envío $99 solo Perlas.

## 7. Pending / Future Sessions
- [high] Confirmar con user que tarifa de envío MX/CDMX quedó creada y el checkout ya deja pagar.
- [high] VIDEO DEMO con `videogen`: vierte→inserta→enciende→renueva.
- [med] Considerar renombrar "Kit Vaso de Concreto" → "Cerámica" en producto/FAQs.
- [med] Banners de colección (image null) para las landings de categoría.
- [low] Verificar visualmente el dropdown "Productos" en móvil tras deploy.
- [low] Borrar `public/favicon.svg`, `public/tmp-upload-hero.webp` huérfanos.