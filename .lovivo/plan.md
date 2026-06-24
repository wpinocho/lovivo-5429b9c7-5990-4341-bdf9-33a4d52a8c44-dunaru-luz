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

### A) FIX URGENTE — Links rotos del FOOTER (causa del 404 en la captura del cliente)
- Status: pendiente (Craft Mode)
- Archivo: `src/templates/EcommerceTemplate.tsx`, columna "Comprar" del footer (líneas ~197–202).
- Los 4 links usan prefijo en inglés `/products/` → deben ser `/productos/`:
  - `/products/perlas-originales-500-g` → `/productos/perlas-originales-500-g`
  - `/products/kit-vaso-de-vidrio` → `/productos/kit-vaso-de-vidrio`
  - `/products/kit-vaso-de-concreto` → `/productos/kit-vaso-de-concreto`
  - `/products/reserva-1-kg` → `/productos/reserva-1-kg`
- Nota: la homepage (IndexUI) ya está corregida; este footer es lo único que aún apunta a `/products/`. Verificar con búsqueda `grep "/products/"` que quede en 0 ocurrencias en todo `src/`.

### B) FEATURE — Página pública de rastreo de pedidos (Order Tracking)
- Status: pendiente (Craft Mode). Backend YA desplegado (edge function `order-track`).
- Contexto backend: `order-track` acepta `{ token }` o `{ store_id, order_number, email }` y devuelve `steps[]`, `current_step`, `cancelled`, `carrier`, `tracking_number`, `tracking_url`, `estimated_delivery_at`, `events[]`, `display_mode` ('detailed' | 'masked'). Es público (no requiere auth). Los emails de envío enlazan a `https://{dominio}/orders/track/{checkout_token}`.

#### Archivos a CREAR
1. `src/pages/OrderTrack.tsx` (página delgada, Tipo B)
   - Lee `:token` con `useParams`.
   - SEO con `noindex` (contenido transaccional por cliente) usando `<SEO title="Rastrea tu pedido" noindex />`.
   - Monta `<OrderTrackUI token={token} />` dentro de `<EcommerceTemplate>`.
2. `src/pages/ui/OrderTrackUI.tsx` (UI editable, Tipo B)
   - **Modo token** (`/orders/track/:token`): al montar, `callEdge('order-track', { token })` (helper en `src/lib/edge.ts`).
   - **Modo lookup** (`/orders/track` sin token): formulario `order_number` + `email` → `callEdge('order-track', { store_id: STORE_ID, order_number, email })` (importar `STORE_ID` de `@/lib/config`).
   - Timeline estilo Shopify: 4 pasos de `steps[]`, progreso pintado por `current_step` (● completado, ● actual en champagne/ámbar, ○ pendiente).
   - Si `cancelled: true` → banner rojo "Pedido cancelado".
   - Bloque destacado "Entrega estimada" con `estimated_delivery_at` (formato `d MMM yyyy` con `date-fns` + locale `es`).
   - Bloque carrier solo si `display_mode === 'detailed'`: nombre/logo carrier, `tracking_number` copiable, botón "Rastrear con la paquetería" → `tracking_url`.
   - Lista `events[]` colapsable (usar `Collapsible`): `occurred_at` + `status_detail` + `location`.
   - Si `display_mode === 'masked'`: ocultar carrier/tracking/eventos; mostrar solo timeline + entrega estimada (marca blanca).
   - Estados: loading skeleton, error 404 ("No encontramos tu pedido"), error genérico.
   - Estilos: reusar shadcn que ya usa MyOrdersUI (`Card`, `Badge`, `Button`, `Skeleton`, `Collapsible`) + tokens dunaru (champagne/ámbar para el paso activo, carbón para texto).
3. (Opcional) `src/pages/ui/OrderTrackLookupForm.tsx` — subcomponente del formulario de búsqueda sin link.

#### Rutas — `src/App.tsx`
- Agregar lazy: `const OrderTrack = lazy(() => import('./pages/OrderTrack'));`
- Agregar dentro de `<Routes>`:
  - `<Route path="/orders/track" element={<OrderTrack />} />`
  - `<Route path="/orders/track/:token" element={<OrderTrack />} />`
- IMPORTANTE: usar `/orders/track/...` (NO traducir a `/pedidos/rastrear/...`) porque es la URL que Lovivo arma en los emails (`buildTrackingUrl`).

#### Conectar `src/pages/ui/MyOrdersUI.tsx` (Tipo B, editable)
- Dentro de `OrderCard`, en la sección expandida (`CollapsibleContent`), después del bloque de dirección de envío:
  - Si `order.checkout_token` existe → botón principal "Rastrear pedido" → `navigate('/orders/track/' + order.checkout_token)` (ya hay `useNavigate` disponible a nivel de página; pasar `navigate` como prop a `OrderCard` o importarlo dentro del card).
  - Si además `order.tracking_number` existe → chip secundario con el número; si hay `order.tracking_url`, link externo "Ver en la paquetería".
  - Si `order.estimated_delivery_at` existe → línea "Entrega estimada: {fecha}" (formato `d MMM yyyy`, locale `es`).
- **NO editar `src/adapters/MyOrdersAdapter.tsx`** (Tipo C, prohibido). Ya usa `select('*')` sobre la vista `orders_customer`, así que los campos de tracking llegan automáticamente SI la vista los expone. Verificación: confirmar en runtime que `order.checkout_token`, `order.tracking_number`, `order.tracking_url`, `order.estimated_delivery_at` vienen poblados. Si la vista `orders_customer` NO expone esos campos, es un ajuste de backend (no del template) — reportar, no editar el adapter.

#### CTA en `src/pages/ThankYou.tsx` (recomendado)
- El `checkout_token` ya está disponible en localStorage bajo `checkout:${STORE_ID}` (`parsed.checkout_token`) durante el hidratado. Capturarlo en un estado al hidratar.
- Agregar en la zona de "Action Buttons" un botón principal "Rastrear mi pedido" → `Link to={'/orders/track/' + checkoutToken}` cuando el token exista. Dejar permanente desde la primera pantalla (patrón Shopify).
- Mantener el botón "Seguir Comprando" existente como secundario.

#### Consideraciones técnicas
- Edge call: `callEdge('order-track', payload)` de `src/lib/edge.ts`. Público, sin auth.
- SEO: `noindex` en OrderTrack.
- i18n: todos los strings en español de México.
- No tocar `HeadlessMyOrders.tsx` ni adapters salvo lo indicado (que es: NO tocarlos).

#### Verificación end-to-end (post-build)
- Generar etiqueta de Envia en dashboard → email `order_shipped` con link `https://{dominio}/orders/track/{token}`.
- Abrir link → timeline en paso "Enviado", carrier, tracking, entrega estimada.
- Simular webhook Envia → recargar → eventos nuevos + avance de paso.
- `/mis-pedidos` autenticado → card muestra "Rastrear pedido" + entrega estimada.
- `/orders/track` sin token con order_number + email → lookup funciona.
- Cambiar `store_settings.tracking_display_mode` a `'masked'` → recargar → sin carrier/tracking/eventos.

## 4. Recent Changes
- 2026-06-24 — PLAN: definida feature Order Tracking (página pública /orders/track + CTA en MyOrders y ThankYou) + detectado fix urgente de footer roto en EcommerceTemplate
- 2026-06-24 — IndexUI.tsx: 9 links re-corregidos de `/products/` → `/productos/` (cambio anterior no había persistido correctamente)
- 2026-06-24 — IndexUI.tsx: 9 links corregidos de `/products/` → `/productos/` (hero CTA, cómo funciona, intención de compra, tonos, bundles, reserva)
- 2026-06-23 — PDPKitConcreto.tsx creado: 7 secciones including dark CTA "Se compra una vez. Para siempre."
- 2026-06-23 — PDPKitVidrio.tsx creado: 5 secciones "Kit listo para encender hoy"
- 2026-06-23 — PDPPerlasOriginales.tsx creado: 7 secciones educativas + comparativa vs vela
- 2026-06-23 — ProductPageUI.tsx rediseñado: swatches de tono, MSI badge, shipping-aware trust bar, below-fold routing por slug
- 2026-06-23 — Sistema de diseño dunaru completo (index.css, tailwind.config.ts)
- 2026-06-23 — Fonts: Instrument Serif + Manrope agregados a index.html
- 2026-06-23 — EcommerceTemplate rediseñado: topbar MSI, header sticky, footer dunaru
- 2026-06-23 — BrandLogoLeft actualizado: wordmark dunaru + dot ámbar
- 2026-06-23 — IndexUI completa: Hero, Beneficios, Cómo funciona, Intención de compra, Tonos, Por qué no vela normal, Bundles, FAQ, Cierre newsletter
- 2026-06-23 — 7 imágenes generadas con Gemini: hero, 6 productos
- 2026-06-23 — 6 productos creados en DB: Perlas 500g, Kit Vidrio, Kit Concreto, Reserva 1kg, Dúo, Trío
- 2026-06-23 — SEO básico: title + meta description dunaru en index.html

## 5. Image Inventory
- Hero: `public/hero-dunaru.webp` (1024×576) — mesa mexicana contemporánea, mano vertiendo perlas
- Perlas Originales: `products/perlas-originales-marfil.webp` (1024×1024) — bolsa kraft sobre travertino
- Kit Vaso Vidrio: `products/kit-vaso-vidrio.webp` (1024×1024) — vaso + perlas champagne
- Kit Concreto: `products/kit-concreto.webp` (1024×1024) — bowl concreto + perlas ónix encendidas
- Reserva 1kg: `products/reserva-1kg.webp` (1024×1024) — bolsa grande sobre travertino + cucharas doradas
- Dúo de Tonos: `products/duo-tonos.webp` (1024×1024) — dos bolsas marfil+champagne sobre lino
- Trío de Tonos: `products/trio-tonos.webp` (1024×1024) — tres bolsas marfil+champagne+ónix
- Logo: `public/logo.png` — wordmark dunaru minimalista con llama

## 6. Known Issues
- 2026-06-24 — FOOTER ROTO: `src/templates/EcommerceTemplate.tsx` columna "Comprar" usa `/products/` (inglés) → 404. Es la causa del 404 que reportó el cliente en la captura. Pendiente de fix en Craft Mode (ver Active Plan A).
- 2026-06-24 — Verificar que la vista `orders_customer` exponga `checkout_token`, `tracking_number`, `tracking_url`, `estimated_delivery_at`. El adapter usa `select('*')` y es Tipo C (no editable).
- 2026-06-24 — Los cambios en IndexUI.tsx no persistían correctamente en sesión anterior (bug de staging). Re-aplicados manualmente verificando cada cambio.
- 2026-06-23 — Whatsapp number en footer/cierre es placeholder (5215500000000). Actualizar con número real.
- 2026-06-23 — Star rating en PDP es estático (48 reseñas, 4.9). Activar reviews reales cuando haya UGC.
- 2026-06-23 — Add-on (500g extra para kits) es cross-sell informativo, no agrega al carrito directamente.

## 7. Pending / Future Sessions
- [high] FIX footer links `/products/` → `/productos/` en EcommerceTemplate (Active Plan A)
- [high] Order Tracking feature (Active Plan B)
- [high] Páginas legales: /terminos-y-condiciones, /aviso-de-privacidad (rutas ya existen, validar contenido)
- [med] Número real de WhatsApp en footer + IndexUI
- [med] Sección "Así se ve en una casa real" — carrusel shoppable (requiere fotos UGC reales)
- [med] Reviews reales (UGC) — activar cuando el cliente tenga testimonios
- [low] Add-on contextual en PDPs (agregar 500g extra directo al carrito)
- [low] Integración Mercado Pago completa
- [low] PDP Reserva 1kg (below-fold genérico o educativo)