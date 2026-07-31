# Store Plan — dunaru
<!-- Auto-maintained by Lovivo AI. READ THIS FIRST. UPDATE IT LAST. -->

## 1. Brand & Context
- Brand name: **dunaru** (dunaru.mx)
- Product: Velas perladas **rellenables** — **gránulos finos de cera tipo arena** (NO perlas grandes) + mechas de algodón. Material visual = arena/couscous fino.
- ⚠️ VOCABULARIO: usar **"rellenable"** (NO "recargable").
- Tesis: no vendemos "cera para velas". Vendemos una forma simple de crear luz y decoración en el recipiente que ya tienes.
- **AROMA**: las velas nacen SIN perfume. Posicionamiento = **"el aroma lo eliges tú"** (feature, no carencia).
- Target: Mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO, decoración + hogar + regalo
- Market: México. Moneda MXN. Idioma: español de México.
- Tono: claro, cálido, directo. Sin tecnicismos.
- Pagos: **A meses sin intereses vía Stripe** (hasta 6 meses). ⚠️ NUNCA nombrar "Stripe" ni "Mercado Pago" en la UI — solo "a meses sin intereses" / "tarjetas participantes".
- Envío: Perlas Originales = +$99. Todo lo demás = gratis desde $899.
- WhatsApp REAL: `525531215386` (+52 55 3121 5386).
- REGLA DE INTEGRIDAD: **NUNCA reseñas falsas.** Las 15 reseñas SÍ son reales. Prueba social usa `getReviewStats()` (4.9 / 15).
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`
- RUTAS EN ESPAÑOL: producto = `/productos/:slug`, paquete = `/paquete/:slug`, carrito = `/carrito`, checkout = `/pagar`, **categoría = `/categorias/:handle`**.
- Competencia: **VelaVita.cl** (LATAM) y **Foton (US)**.
- ⚠️ **kit-vaso-de-concreto** es en realidad de **CERÁMICA**. Slug sigue diciendo "concreto".

## 2. Design System
- Fondo: Marfil #FAF6EF → `--background` · Alterno: Arena #F1E9DC → `bg-dunaru-arena`
- Texto: Carbón #2B2A27 → `--foreground` · Acento: Champagne #C2A878 → `text-dunaru-champagne`
- CTA: Ónix #1E1C1A → `--primary` · Detalle llama: Ámbar #D89A57 → `text-dunaru-ambar`
- Display: Instrument Serif → `font-display` · Body/UI: Manrope → `font-body`
- Tokens: `dunaru-marfil/arena/champagne/carbon/onix/ambar`
- Estética: editorial, mínima, mucho aire. Mobile-first.
- **MENÚ "Productos"**: dropdown en header (`EcommerceTemplate.tsx`) con `PRODUCT_CATEGORIES`.
- **PDP secciones** (`ProductStorySections.tsx`): driven por `PDP_CONTENT[slug]`. Esquema: garantías → "Crea tu vela en 4 pasos" (`HOW_IT_WORKS_STEPS`) → bloques editoriales → tabla comparativa → FAQ → Reviews.
- **`PERLAS_BENEFIT_BLOCKS`**: 5 bloques compartidos por perlas-originales-500-g, reserva-1-kg, d-o-de-tonos, tr-o-de-tonos.
- **4 PASOS duplicados en 2 lugares**: `HOW_IT_WORKS_STEPS` en `ProductStorySections.tsx` (PDP) y `STEPS` en `src/pages/ui/IndexUI.tsx` (landing "Cómo funciona"). ⚠️ Cambiar imágenes/textos SIEMPRE en ambos.
- **Categoría landing** (`src/pages/Collection.tsx`): grid 2/3 cols; handle `todos` = catálogo completo.

## 3. Active Plan — ✅ Sin plan activo.

## 4. Recent Changes
- 2026-07-31 — ✅ IMÁGENES REALES del user reemplazan generadas: paso "Inserta" (mano insertando mecha en vaso de vidrio), paso "Enciende" (mano con cerillo, sala cálida) y bloque "El aroma lo eliges tú" (gotero de esencia sobre bowl negro con 3 llamas). Aplicado en landing (`IndexUI.tsx` STEPS) Y en PDP (`ProductStorySections.tsx` HOW_IT_WORKS_STEPS + PERLAS_BENEFIT_BLOCKS). URLs Supabase message-images (ver §5).
- 2026-07-31 — ✅ FAQ landing: quitado "Mercado Pago" → "tarjetas participantes (VISA y Mastercard)".
- 2026-07-28 — ✅ AROMA en PDP rellenables: bloque compartido "El aroma lo eliges tú" en `PERLAS_BENEFIT_BLOCKS` + FAQ "¿Las velas tienen aroma?" en los 4 productos.
- 2026-07-27 — 🟠 DIAGNÓSTICO CHECKOUT: "No realizamos envíos a esa dirección" en /pagar. Causa = falta TARIFA de envío MX en store_settings. NO es bug de código.
- 2026-07-27 — ✅ HERO (IndexUI.tsx): "recargables"→"rellenables". CTA → /productos/perlas-originales-500-g.
- 2026-07-27 — ✅ PASO "Vierte": foto real del user en `public/paso-vierte.webp`.
- 2026-07-27 — ✅ BENEFICIOS COMPARTIDOS: const `PERLAS_BENEFIT_BLOCKS`.
- 2026-07-27 — ✅ IMÁGENES PDP (fotos reales user): bowl-negro, vaso-transparente, kit-cerámica.
- 2026-07-25 — ✅ MENÚ "Productos": dropdown desktop + móvil con 4 categorías.
- 2026-07-25 — ✅ Nueva página `src/pages/Collection.tsx` + ruta `/categorias/:handle`.
- 2026-07-25 — ✅ PDP para TODOS los 9 productos (`PDP_CONTENT`).
- 2026-07-25 — ✅ Colecciones creadas: Kits (2), Accesorios (1), Recipientes (2).
- 2026-07-23 — ✅ WHATSAPP: leyenda en PDP + footer.
- 2026-07-17 — ✅ FAVICON de marca `/favicon.png`.
- 2026-07-17 — ✅ Checkout UI: resumen móvil abierto, prueba social REAL 4.9/15.

## 5. Image Inventory
- **Colecciones**: sin imagen asignada (Kits/Accesorios/Recipientes image=null).
- **FAVICON**: `/favicon.png` (256x256).
- **FOTOS REALES catálogo**: `product-images/products/<hash>.webp`. 9 productos.
- **Hero desktop**: `/hero-dunaru.webp` · **Hero móvil**: `/hero-dunaru-mobile.webp` · **Casa real**: `/casa-real-{sala,comedor,recibidor}.webp`
- **4 PASOS (estado actual 2026-07-31)** — base URL `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/`:
  - Vierte → `/paso-vierte.webp` (repo, foto real user)
  - Inserta → `1785521743155-htw95tvbi4b.webp` (foto real user) ⚠️ ya NO `/paso-inserta.webp`
  - Enciende → `1785521743156-3qeskqe43gv.webp` (foto real user) ⚠️ ya NO `/paso-enciende.webp`
  - Renueva → `/paso-renueva.webp` (generada, pendiente foto real)
- **Bloque "El aroma lo eliges tú"** → `1785521743156-7ucg5c0kwb7.webp` (foto real user: gotero sobre bowl negro con 3 llamas). ⚠️ `/pdp-aroma.webp` quedó HUÉRFANO.
- **`PERLAS_BENEFIT_BLOCKS` imgs**: h29qq6dodik, 4z1j2dq3ab9, go7315yuax, c47lrhv7fa + la de aroma.
- **Bloques PDP fotos reales user**: bowl-negro = yafqxd2xr9i · vaso-transparente = wovmtpzn66 · concreto luz = i54i3sm6qk · cerámica = u6xju9w4wjl · regalo = 77nbrytmoii · mecha pack = 5bsut1tyt6c.
- ✅ Ya NO quedan PLACEHOLDER visibles en ninguna PDP.

## 6. Known Issues
- 2026-07-31 — 🟡 `lov-search-files` devuelve 0 resultados para strings que SÍ existen (índice desactualizado). Usar `lov-view` con rutas directas.
- 2026-07-27 — 🟠 CHECKOUT BLOQUEA PAGO: `no_rate_for_destination` para CDMX. Falta TARIFA de envío MX. ARREGLAR en Dashboard → Config Tienda → Envíos. PENDIENTE del user.
- 2026-07-27 — 🟡 FAQs de kit-vaso-de-concreto dicen "concreto"; material real es CERÁMICA.
- 2026-07-25 — 🟡 Perlas/Reserva/Dúo/Trío NO están en categoría del menú (solo "Todos").
- 2026-06-24 — Verificar recálculo descuento volumen + regla envío $99 solo Perlas.

## 7. Pending / Future Sessions
- [high] Confirmar con user que tarifa de envío MX/CDMX quedó creada y el checkout ya deja pagar.
- [med] Pedir al user foto real del paso "Renueva" (sigue siendo imagen generada).
- [med] FASE AROMAS: lanzar esencias propias dunaru → actualizar copy del bloque aroma.
- [high] VIDEO DEMO con `videogen`: vierte→inserta→enciende→renueva.
- [med] Considerar renombrar "Kit Vaso de Concreto" → "Cerámica".
- [med] Banners de colección (image null).
- [low] Borrar huérfanos: `public/favicon.svg`, `public/tmp-upload-hero.webp`, `public/pdp-aroma.webp`, `public/paso-inserta.webp`, `public/paso-enciende.webp`.