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
### Routing — completado 2026-06-24
- Status: done
- Todos los links de la homepage usan `/productos/:slug` correctamente (corregido 2 veces — el cambio previo no se había persistido).

### Siguiente sesión
- Páginas legales: /terminos-y-condiciones, /aviso-de-privacidad
- Sección reseñas reales cuando el cliente tenga UGC
- WhatsApp real (reemplazar placeholder 5215500000000)

## 4. Recent Changes
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
- 2026-06-24 — Los cambios en IndexUI.tsx no persistían correctamente en sesión anterior (bug de staging). Re-aplicados manualmente con lov-multi-edit verificando cada cambio.
- 2026-06-23 — Logo PNG generado es cuadrado 1024×1024, se renderiza como CSS wordmark en BrandLogoLeft.
- 2026-06-23 — Whatsapp number en footer/cierre es placeholder (5215500000000). Actualizar con número real.
- 2026-06-23 — Star rating en PDP es estático (48 reseñas, 4.9). Activar reviews reales cuando haya UGC.
- 2026-06-23 — Add-on (500g extra para kits) es cross-sell informativo, no agrega al carrito directamente.

## 7. Pending / Future Sessions
- [high] Páginas legales: /terminos-y-condiciones, /aviso-de-privacidad
- [med] Número real de WhatsApp en footer + IndexUI
- [med] Sección "Así se ve en una casa real" — carrusel shoppable (requiere fotos UGC reales)
- [med] Reviews reales (UGC) — activar cuando el cliente tenga testimonios
- [low] Add-on contextual en PDPs (agregar 500g extra directo al carrito, requiere CartContext lookup)
- [low] Integración Mercado Pago completa
- [low] PDP Reserva 1kg (below-fold genérico o educativo)