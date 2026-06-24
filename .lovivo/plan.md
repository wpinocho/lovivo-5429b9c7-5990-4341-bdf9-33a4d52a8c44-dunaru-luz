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
- Estética: editorial, mínima, mucho aire, no saturada de íconos
- Mobile-first, enfoque conversión

## 3. Active Plan
- Sin tarea activa. Order Tracking + fix footer COMPLETADOS este turno (ver Recent Changes).
- Siguiente recomendado: validación end-to-end del tracking (ver sección verificación abajo) y páginas legales.

### Verificación end-to-end pendiente del tracking (post-deploy)
- Generar etiqueta de Envia → email `order_shipped` con link `/orders/track/{token}` → abrir y confirmar timeline + carrier + entrega estimada.
- `/mis-pedidos` autenticado → card muestra "Rastrear pedido" + entrega estimada (depende de que la vista `orders_customer` exponga `checkout_token`, `tracking_number`, `tracking_url`, `estimated_delivery_at`).
- `/orders/track` sin token con order_number + email → lookup funciona.
- `store_settings.tracking_display_mode = 'masked'` → sin carrier/tracking/eventos.

## 4. Recent Changes
- 2026-06-24 — OrderTrackUI.tsx CREADO: timeline horizontal Shopify (4 pasos, current_step en champagne/ámbar), entrega estimada, carrier+guía copiable, eventos colapsables, modo lookup (order_number+email), modo masked, estados loading/404/error
- 2026-06-24 — OrderTrack.tsx CREADO: wrapper con SEO noindex, lee :token, monta UI en EcommerceTemplate centered
- 2026-06-24 — App.tsx: rutas `/orders/track` y `/orders/track/:token` (lazy OrderTrack)
- 2026-06-24 — EcommerceTemplate.tsx: FIX footer links `/products/` → `/productos/` (causa del 404) + "Rastrear pedido" agregado a nav desktop, menú móvil y footer "Ayuda"
- 2026-06-24 — MyOrdersUI.tsx: OrderCard ahora muestra botón "Rastrear pedido" (navigate a /orders/track/:checkout_token), entrega estimada y guía/link paquetería
- 2026-06-24 — ThankYou.tsx: captura checkout_token al hidratar + CTA principal "Rastrear mi pedido"
- 2026-06-24 — PLAN: definida feature Order Tracking + detectado fix footer roto
- 2026-06-24 — IndexUI.tsx: 9 links re-corregidos `/products/` → `/productos/`
- 2026-06-23 — PDPKitConcreto.tsx creado: 7 secciones con dark CTA
- 2026-06-23 — PDPKitVidrio.tsx creado: 5 secciones
- 2026-06-23 — PDPPerlasOriginales.tsx creado: 7 secciones educativas
- 2026-06-23 — ProductPageUI.tsx rediseñado: swatches, MSI badge, shipping-aware trust bar
- 2026-06-23 — Sistema de diseño dunaru completo (index.css, tailwind.config.ts)
- 2026-06-23 — EcommerceTemplate rediseñado: topbar MSI, header sticky, footer dunaru
- 2026-06-23 — 6 productos creados + 7 imágenes Gemini

## 5. Image Inventory
- Hero: `public/hero-dunaru.webp` (1024×576)
- Perlas Originales: `products/perlas-originales-marfil.webp` (1024×1024)
- Kit Vaso Vidrio: `products/kit-vaso-vidrio.webp` (1024×1024)
- Kit Concreto: `products/kit-concreto.webp` (1024×1024)
- Reserva 1kg: `products/reserva-1kg.webp` (1024×1024)
- Dúo de Tonos: `products/duo-tonos.webp` (1024×1024)
- Trío de Tonos: `products/trio-tonos.webp` (1024×1024)
- Logo: `public/logo.png`

## 6. Known Issues
- 2026-06-24 — CONFIRMAR que la vista `orders_customer` exponga `checkout_token`, `tracking_number`, `tracking_url`, `estimated_delivery_at`. El adapter (Tipo C, no editable) usa `select('*')`. Si la vista no los expone, el botón "Rastrear pedido" y la entrega estimada en /mis-pedidos no aparecerán → es ajuste de backend, NO del template.
- 2026-06-24 — La forma exacta de `steps[]` del response order-track es asumida (label + date/completed_at/occurred_at). OrderTrackUI maneja fallbacks defensivos; validar contra response real.
- 2026-06-23 — Whatsapp number en footer/cierre/tracking es placeholder (5215500000000). Actualizar con número real.
- 2026-06-23 — Star rating en PDP es estático (48 reseñas, 4.9).

## 7. Pending / Future Sessions
- [high] Validación end-to-end del tracking (ver Active Plan)
- [high] Páginas legales: /terminos-y-condiciones, /aviso-de-privacidad (validar contenido)
- [med] Número real de WhatsApp en footer + IndexUI + OrderTrackUI
- [med] Sección "Así se ve en una casa real" — carrusel shoppable (requiere fotos UGC)
- [med] Reviews reales (UGC)
- [low] Add-on contextual en PDPs
- [low] Integración Mercado Pago completa
- [low] PDP Reserva 1kg