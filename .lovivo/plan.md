# Store Plan — dunaru
<!-- Auto-maintained by Lovivo AI. READ THIS FIRST. UPDATE IT LAST. -->

## 1. Brand & Context
- Brand name: **dunaru** (dunaru.mx)
- Product: Velas perladas recargables — perlas de cera + mechas de algodón
- Tesis: no vendemos "cera para velas". Vendemos una forma simple de crear luz y decoración en el recipiente que ya tienes.
- Target: Mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO, decoración + hogar + regalo
- Market: México. Moneda MXN. Idioma: español de México.
- Tono: claro, cálido, directo. Sin tecnicismos.
- Posicionamiento: vs Amazon/ML — más marca, más premium, más confiable
- Pagos: Mercado Pago + hasta 6 MSI — visible en topbar, PDP, carrito, footer
- Concepto: "Luz de diseño que cambia contigo."
- Envío: Perlas Originales = +$99. Todo lo demás = gratis desde $899.
- WhatsApp REAL: `525531215386` (+52 55 3121 5386) — formato wa.me sin "1" intermedio.
- V0 scope: sin aromas, sin suscripción, sin regalos físicos, sin B2B.
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`

## 2. Design System
- Fondo: Marfil #FAF6EF → `--background` · Alterno: Arena #F1E9DC → `--muted`/`bg-dunaru-arena`
- Texto: Carbón #2B2A27 → `--foreground`
- Acento: Champagne #C2A878 → `text-dunaru-champagne` · CTA: Ónix #1E1C1A → `--primary`
- Detalle llama: Ámbar #D89A57 → `text-dunaru-ambar`
- Display: Instrument Serif → `font-display` · Body/UI: Manrope → `font-body`
- Tokens: `dunaru-marfil/arena/champagne/carbon/onix/ambar`
- Badges: `.badge-mas-elegido`, `.badge-mejor-valor`, `.badge-msi`
- Estética: editorial, mínima, mucho aire. Pocas animaciones. Mobile-first.

## 3. Active Plan — SPRINT 1 (CERRADO ✅)
- Sprint 1 completo. Newsletter real + 4 add-ons + selector de add-on contextual + WhatsApp real listos.
- PDP real de TODOS los productos = genérica `src/pages/ui/ProductPageUI.tsx` (los PDP dedicados NUNCA existieron). Lógica en `HeadlessProduct.tsx` (FORBIDDEN).
- Selector add-on: componente `src/components/ProductAddOns.tsx`. Mapea slug→add-ons (máx 2, sin preseleccionar), carga productos reales por slug desde supabase, reporta selección a ProductPageUI que los agrega con `addItem()` como líneas extra. Solo aplica a "Agregar al carrito" (main + sticky bar), NO a "Comprar ahora" (ese flujo arma su propio array y omite el carrito).
- Mapeo actual en ADDON_MAP (ProductAddOns.tsx):
  - kit-vaso-de-vidrio / kit-vaso-de-concreto → recarga-500-g-30-mechas + pack-30-mechas
  - perlas-originales-500-g → vaso-extra-transparente + pack-30-mechas
  - reserva-1-kg / d-o-de-tonos / tr-o-de-tonos → pack-60-mechas

## 4. Recent Changes
- 2026-06-24 — Selector add-on contextual: creado `ProductAddOns.tsx` + cableado en `ProductPageUI.tsx` (estado selectedAddOns, handler handleAddToCartWithAddOns en botones add-to-cart main + sticky desktop/móvil).
- 2026-06-24 — WhatsApp real `525531215386` en IndexUI (cierre), EcommerceTemplate (footer Contacto) y OrderTrackUI (ayuda). Placeholder `5215500000000` eliminado.
- 2026-06-24 — Sprint 1: `DunaruNewsletterForm.tsx` creado + cableado en IndexUI cierre. Newsletter captura leads reales.
- 2026-06-24 — 4 add-ons creados (tag `addon`, status active, sin variantes, imágenes placeholder reusadas):
  - Recarga 500 g + 30 mechas $499 → `0ce14892-c4ef-4672-9a8e-0f5f2b2502d9` / slug `recarga-500-g-30-mechas`
  - Vaso extra transparente $249 → `c099661d-98c1-4768-839f-46f801acd9e4` / slug `vaso-extra-transparente`
  - Pack 30 mechas $99 → `26c1941c-ca05-4266-93ee-acf7c8ddb7d3` / slug `pack-30-mechas`
  - Pack 60 mechas $159 → `edb0810a-5a35-4af7-a371-63a66139fb4f` / slug `pack-60-mechas`
- 2026-06-24 — AUDITORÍA corregida: PDP files no existen; PDP real = ProductPageUI.tsx; sin reseñas falsas.
- 2026-06-24 — OrderTrackUI/OrderTrack creados + rutas tracking + footer links `/productos/`
- 2026-06-23 — 6 productos + sistema de diseño dunaru + EcommerceTemplate rediseñado

## 5. Image Inventory
- Hero: `public/hero-dunaru.webp` (1024×576) — estático, falta versión video (Sprint 4)
- Perlas Originales: `perlas-originales-marfil.webp` · Kit Vidrio: `kit-vaso-vidrio.webp` · Kit Concreto: `kit-concreto.webp` · Reserva: `reserva-1kg.webp` · Dúo: `duo-tonos.webp` · Trío: `trio-tonos.webp` (todos 1 sola imagen, falta galería 6–8)
- Add-ons: usan placeholder reusado. PENDIENTE: imágenes dedicadas (se ven como thumbnail en el selector de add-on, así que ahora importa más).
- PENDIENTE: escenas por tono, carrusel "casa real", fotos por paso.

## 6. Known Issues
- 2026-06-24 — Add-ons con imágenes placeholder reusadas → ahora visibles en el selector de PDP; generar dedicadas (Sprint 2).
- 2026-06-24 — Cada producto 1 sola imagen; falta galería PDP 6–8 (Sprint 2).
- 2026-06-24 — "Comprar ahora" NO incluye add-ons seleccionados (bypassa carrito). Aceptable por ahora; si se quiere, inyectar add-ons en handleBuyNow (forbidden headless → requeriría refactor).
- 2026-06-24 — Confirmar vista `orders_customer` expone tracking fields (backend).

## 7. Pending / Future Sessions
- [high] SPRINT 2: galerías PDP 6–8 assets + imágenes dedicadas de add-ons (urgente: ya se ven en selector)
- [med] SPRINT 3: sección "casa real" + UGC + nav "Inspírate" + "Elige tu tono" ambientado
- [med] SPRINT 4: arte editorial lifestyle + fotos por paso + hero video
- [med] SPRINT 5: legales + verificación end-to-end tracking
- [low] Considerar incluir add-ons en flujo "Comprar ahora"
- [low] Integración Mercado Pago completa