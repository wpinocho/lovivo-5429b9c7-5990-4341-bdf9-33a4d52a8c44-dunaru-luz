# Store Plan — dunaru
<!-- Auto-maintained by Lovivo AI. READ THIS FIRST. UPDATE IT LAST. -->

## 1. Brand & Context
- Brand name: **dunaru** (dunaru.mx)
- Product: Velas perladas recargables — perlas de cera + mechas de algodón
- Tesis: no vendemos "cera para velas". Vendemos una forma simple de crear luz y decoración en el recipiente que ya tienes.
- Target audience: Mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO, decoración + hogar + regalo
- Market: México. Moneda MXN. Idioma: español de México.
- Tono: claro, cálido, directo. Sin tecnicismos. Explica sin asumir.
- Posicionamiento: vs Amazon/ML — más marca, más premium, más confiable
- Pagos: Mercado Pago + hasta 6 MSI — visible en topbar, PDP, carrito, footer
- Concepto de marca: "Luz de diseño que cambia contigo."
- Envío: Perlas Originales = +$99. Todo lo demás = gratis desde $899.
- V0 scope: sin aromas, sin suscripción, sin regalos físicos, sin B2B.
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`

## 2. Design System
- Fondo principal: Marfil #FAF6EF → HSL 40 43% 96% → `--background`
- Fondo alterno: Arena #F1E9DC → HSL 36 38% 90% → `--muted` / `bg-dunaru-arena`
- Texto: Carbón #2B2A27 → HSL 46 4% 16% → `--foreground`
- Acento/marca: Champagne dorado #C2A878 → HSL 38 40% 61% → `--secondary` / `text-dunaru-champagne`
- Botones CTA: Ónix #1E1C1A → HSL 30 4% 11% → `--primary`
- Detalle llama (mínimo): Ámbar #D89A57 → `--accent` / `text-dunaru-ambar`
- Tipografía display: Instrument Serif (h1, h2, h3, logotipo en CSS) → `font-display`
- Tipografía body/UI: Manrope (precios, body, labels, botones) → `font-body`
- Tokens custom: `dunaru-marfil`, `dunaru-arena`, `dunaru-champagne`, `dunaru-carbon`, `dunaru-onix`, `dunaru-ambar`
- Swatches CSS: `.swatch-marfil` · `.swatch-champagne` · `.swatch-onix`
- Badges: `.badge-mas-elegido`, `.badge-mejor-valor`, `.badge-msi`
- Estética: editorial, mínima, mucho aire, no saturada de íconos. Pocas animaciones.
- Mobile-first, enfoque conversión

## 3. Active Plan — ROADMAP UI V0 (auditoría brief vs realidad)

### AUDITORÍA — Estado actual vs brief (2026-06-24)
Catálogo (6 productos, todos con variante Color Marfil/Champagne/Ónix):
- ✅ Perlas Originales ($599), Kit Vidrio ($899), Kit Concreto ($1,099), Reserva 1kg ($999), Dúo ($1,099 / compare $1,398), Trío ($1,499 / compare $1,797)
- ❌ ADD-ONS NO EXISTEN como productos: "500g + 30 mechas $499", "Vaso extra $249", "Pack 30 mechas $99", "Pack 60 mechas $159"
- ⚠️ Cada producto tiene 1 sola imagen (brief pide galería 6–8 assets por PDP)

Home (IndexUI.tsx) — secciones brief 1–12:
- ✅ 1 Topbar · ✅ 2 Hero (estático, brief pide opción video) · ✅ 3 Banda beneficios · ✅ 4 Cómo funciona (usa emojis, brief pide clip/foto por paso) · ✅ 5 Compra por intención · ⚠️ 6 Elige tu tono (usa product shots, brief pide escena ambientada por color) · ❌ 7 "Así se ve en una casa real" (carrusel shoppable) FALTA · ✅ 8 Por qué no es vela normal · ✅ 9 Bundles · ❌ 10 Prueba social UGC (sin zona lista) FALTA · ✅ 11 FAQ · ✅ 12 Cierre newsletter+WhatsApp
- ⚠️ Newsletter form en home es dummy (`onSubmit preventDefault`) — NO captura leads. Conectar a NewsletterAdapter.
- ⚠️ WhatsApp = placeholder `5215500000000` (link muerto)

PDPs (existen los 3 layouts en pages: PDPPerlasOriginales 7 sec, PDPKitVidrio 5 sec, PDPKitConcreto 7 sec):
- ❌ Add-on contextual (máx 2, sin preseleccionar) NO implementado en ninguna PDP — depende de crear los productos add-on
- ⚠️ Galería 6–8 assets: hoy 1 imagen
- ⚠️ Reviews estáticas/inventadas (48 reseñas 4.9) — brief V0 dice NO reseñas inventadas → cambiar a "zona lista para activar"
- (Confirmar sticky CTA mobile en cada PDP)

Legales: PrivacyPolicy.tsx y TermsAndConditions.tsx existen → validar contenido real (envíos, cambios, privacidad).

### PLAN POR SPRINTS (orden recomendado por impacto en ingresos)

**SPRINT 1 — Cerrar fugas + palanca de AOV (alto ROI, sin depender de fotos nuevas)**
1. Conectar formulario newsletter de home (IndexUI) → usar NewsletterAdapter/NewsletterSection real. Idem cierre.
2. WhatsApp real: reemplazar `5215500000000` en IndexUI + EcommerceTemplate + OrderTrackUI por número definitivo (pedir al user).
3. Crear 4 productos ADD-ON (Craft): "Recarga 500 g + 30 mechas" $499, "Vaso extra transparente" $249, "Pack 30 mechas" $99, "Pack 60 mechas" $159 (tags: addon; status active; sin variante o variante única).
4. Implementar selector de add-on contextual en PDPs (máx 2, nunca preseleccionado): Kit Vidrio/Concreto → recarga $499; Perlas → vaso extra $249 + pack 30 mechas $99; Reserva/Dúo/Trío → pack 60 mechas $159. Agrega al carrito como línea extra.
5. Quitar reseñas inventadas de PDPs → bloque "zona lista para activar reseñas" (o ocultar rating estático).
- Skills a cargar: `pages.pdp` (add-on + reviews), `craft.copywriting` (microcopy add-on).

**SPRINT 2 — Galerías de PDP (confianza + conversión)**
1. Estructura de galería 6–8 slots por PDP (thumbnails + principal, swipe en mobile).
2. Generar/colocar assets por PDP (depende de shot list / imagegen). Mientras: placeholders con proporción correcta.
- Skills: `media.product-imagery`, `pages.pdp`.

**SPRINT 3 — Secciones faltantes de home + nav "Inspírate"**
1. Sección 7 "Así se ve en una casa real": carrusel shoppable 4–6 verticales (vaso reutilizado, bowl cerámica, copa, mesa cena, repisa). Embla carousel. Cada slide enlaza a producto.
2. Sección 10 Prueba social UGC: grid/carrusel "zona lista para activar" (sin reseñas inventadas).
3. Agregar "Inspírate" al header (ancla a sección 7) — completar nav brief: dunaru · Comprar · Cómo funciona · Inspírate · Preguntas · 🛍.
4. Sección 6 "Elige tu tono": cambiar product shots por escenas ambientadas por color (Marfil día / Champagne cena / Ónix noche).
- Skills: `craft.copywriting`, `media.product-imagery`.

**SPRINT 4 — Arte editorial final + video**
1. Reemplazar AI product shots por lifestyle editorial (interiores mexicanos contemporáneos, luz natural).
2. Foto/clip por paso en "Cómo funciona" (sustituir emojis).
3. Hero con video placeholder (mano vertiendo perlas en recipiente encendido).
- Skills: `media.product-imagery`.

**SPRINT 5 — Legales + cierre**
1. Validar/redactar contenido legal: envíos, cambios/devoluciones, aviso de privacidad, términos.
2. Verificación end-to-end tracking (ver abajo).

### Verificación end-to-end pendiente del tracking (post-deploy)
- Etiqueta Envia → email `order_shipped` link `/orders/track/{token}` → timeline + carrier + entrega estimada.
- `/mis-pedidos` autenticado → "Rastrear pedido" (depende de vista `orders_customer` exponiendo checkout_token/tracking_number/tracking_url/estimated_delivery_at).
- `/orders/track` sin token con order_number + email → lookup.
- `tracking_display_mode='masked'` → sin carrier/tracking/eventos.

## 4. Recent Changes
- 2026-06-24 — AUDITORÍA UI V0 completa: brief vs realidad. Roadmap por 5 sprints definido (add-ons/AOV, galerías PDP, secciones home faltantes, arte editorial, legales).
- 2026-06-24 — OrderTrackUI.tsx CREADO: timeline horizontal Shopify (4 pasos), entrega estimada, carrier+guía copiable, eventos colapsables, modo lookup, modo masked, estados loading/404/error
- 2026-06-24 — OrderTrack.tsx CREADO: wrapper SEO noindex, lee :token, monta UI en EcommerceTemplate centered
- 2026-06-24 — App.tsx: rutas `/orders/track` y `/orders/track/:token` (lazy OrderTrack)
- 2026-06-24 — EcommerceTemplate.tsx: FIX footer links `/products/` → `/productos/` + "Rastrear pedido" en nav desktop, menú móvil y footer "Ayuda"
- 2026-06-24 — MyOrdersUI.tsx: OrderCard muestra "Rastrear pedido" + entrega estimada + guía/link paquetería
- 2026-06-24 — ThankYou.tsx: captura checkout_token + CTA "Rastrear mi pedido"
- 2026-06-24 — IndexUI.tsx: 9 links re-corregidos `/products/` → `/productos/`
- 2026-06-23 — PDPKitConcreto.tsx creado: 7 secciones dark CTA
- 2026-06-23 — PDPKitVidrio.tsx creado: 5 secciones
- 2026-06-23 — PDPPerlasOriginales.tsx creado: 7 secciones educativas
- 2026-06-23 — ProductPageUI.tsx rediseñado: swatches, MSI badge, shipping-aware trust bar
- 2026-06-23 — Sistema de diseño dunaru completo (index.css, tailwind.config.ts)
- 2026-06-23 — EcommerceTemplate rediseñado: topbar MSI, header sticky, footer dunaru
- 2026-06-23 — 6 productos creados + 7 imágenes Gemini

## 5. Image Inventory
- Hero: `public/hero-dunaru.webp` (1024×576) — estático, falta versión video (Sprint 4)
- Perlas Originales: `products/perlas-originales-marfil.webp` (1024×1024) — 1 sola, falta galería 6–8
- Kit Vaso Vidrio: `products/kit-vaso-vidrio.webp` (1024×1024) — falta galería
- Kit Concreto: `products/kit-concreto.webp` (1024×1024) — falta galería
- Reserva 1kg: `products/reserva-1kg.webp` (1024×1024)
- Dúo de Tonos: `products/duo-tonos.webp` (1024×1024)
- Trío de Tonos: `products/trio-tonos.webp` (1024×1024)
- Logo: `public/logo.png`
- PENDIENTE: escenas ambientadas por tono (Sprint 3), carrusel "casa real" 4–6 verticales (Sprint 3), fotos por paso (Sprint 4)

## 6. Known Issues
- 2026-06-24 — Newsletter form en IndexUI es dummy (`onSubmit preventDefault`), no captura leads. Conectar a NewsletterAdapter (Sprint 1).
- 2026-06-24 — Add-ons del brief NO existen como productos → bloquean selector contextual de add-on en PDPs (Sprint 1).
- 2026-06-24 — Reseñas en PDP son inventadas (48 reseñas, 4.9) — brief V0 prohíbe reseñas falsas. Cambiar a "zona lista para activar".
- 2026-06-24 — CONFIRMAR vista `orders_customer` expone checkout_token/tracking_number/tracking_url/estimated_delivery_at (ajuste backend, no template).
- 2026-06-24 — Forma exacta de `steps[]` del response order-track es asumida; validar contra response real.
- 2026-06-23 — WhatsApp número en footer/cierre/tracking es placeholder (5215500000000). Pedir número real (Sprint 1).

## 7. Pending / Future Sessions
- [high] SPRINT 1: newsletter live + WhatsApp real + crear add-ons + selector add-on en PDPs + quitar reseñas falsas
- [high] SPRINT 2: galerías PDP 6–8 assets
- [med] SPRINT 3: sección "casa real" + UGC + nav "Inspírate" + "Elige tu tono" ambientado
- [med] SPRINT 4: arte editorial lifestyle + fotos por paso + hero video
- [med] SPRINT 5: legales (envíos/cambios/privacidad/términos) + verificación end-to-end tracking
- [low] Integración Mercado Pago completa