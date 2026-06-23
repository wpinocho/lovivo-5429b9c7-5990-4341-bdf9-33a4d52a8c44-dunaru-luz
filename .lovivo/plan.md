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
- Tipografía display: Instrument Serif (h1, h2, h3, logotipo en CSS)
- Tipografía body/UI: Manrope (precios, body, labels, botones)
- Tokens custom: `dunaru-marfil`, `dunaru-arena`, `dunaru-champagne`, `dunaru-carbon`, `dunaru-onix`, `dunaru-ambar`
- Swatches: Marfil #F2EBDD · Champagne #E2CCA3 · Ónix #1F1D1B
- Badges: `.badge-mas-elegido`, `.badge-mejor-valor`, `.badge-msi`
- Estética: editorial, mínima, mucho aire, no saturada de íconos
- Mobile-first, enfoque conversión

## 3. Active Plan
### Homepage MVP — completado 2026-06-23
- Status: done
- Archivos: src/index.css, tailwind.config.ts, src/templates/EcommerceTemplate.tsx, src/pages/ui/IndexUI.tsx, src/components/BrandLogoLeft.tsx, index.html

### Siguiente sesión: PDPs + header refinements
- Status: pending
- PDP Perlas Originales (educativa, completa per brief §7)
- PDP Kit Vaso Vidrio (§8)
- PDP Kit Concreto (§9)
- Páginas: /terminos-y-condiciones, /aviso-de-privacidad

## 4. Recent Changes
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
- 2026-06-23 — Logo PNG generado es cuadrado 1024×1024, se renderiza como CSS wordmark en BrandLogoLeft. Considerar generar SVG o imagen horizontal en próxima sesión.
- 2026-06-23 — Whatsapp number en footer/cierre es placeholder (5215500000000). Actualizar con número real del cliente.

## 7. Pending / Future Sessions
- [high] PDP Perlas Originales — sección educativa completa (§7 del brief)
- [high] PDP Kit Vaso Vidrio (§8)
- [high] PDP Kit Concreto (§9)
- [med] Páginas legales: /terminos-y-condiciones, /aviso-de-privacidad
- [med] Sección "Así se ve en una casa real" — carrusel shoppable (requiere fotos UGC reales)
- [med] Sección prueba social — zona lista para activar reseñas
- [med] Número real de WhatsApp en footer
- [low] Add-ons contextuales en PDPs (500g extra, vaso extra, pack mechas)
- [low] Integración Mercado Pago
- [low] Comparativa dunaru vs vela tradicional en PDP