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
- REGLA DE INTEGRIDAD: **NUNCA reseñas falsas ni testimonios inventados.** Reviews solo si son reales; si no hay, omitir la sección o estado "sé el primero".
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

## 3. Active Plan — SPRINT 2: PDP EDITORIAL (estilo VelaVita) + bundle por cantidad
**Referencia del user:** https://velavita.cl/products/velas-perladas-500g (2 capturas subidas = SOLO referencia visual, NO son assets a usar).
**Objetivo:** que `perlas-originales-500-g` deje de verse genérica y se vea como una PDP editorial de marca. Quitar add-ons de ESE producto (satura) y reemplazar por selector "Lleva más y ahorra" (1/2/3 kits con descuento, SIN regalos). Estructura mucho más rica, reutilizable por slug. Imágenes placeholder OK por ahora.

### Arquitectura clave (NO romper)
- PDP única compartida: `src/pages/ui/ProductPageUI.tsx` (recibe `logic` desde `HeadlessProduct.tsx`, que es FORBIDDEN).
- Carrito: `addItem(product, variant?, sellingPlan?)` en `CartContext.tsx`.
- ⚠️ HALLAZGO CRÍTICO: `CartContext.calcTotal/getItemPrice` **NO aplica descuento de volumen** (usa precio base × qty). El descuento por volumen vive en `src/lib/price-rule-utils.ts` (`calcVolumeDiscount` / `calcItemUnitPrice`) y debe consumirse en la capa de display/checkout. ANTES de prometer el descuento, Craft Mode DEBE abrir `src/components/CartSidebar.tsx`, `src/pages/ui/CartUI.tsx` y `src/pages/ui/CheckoutUI.tsx` (+ `useCheckout`) y verificar que el TOTAL realmente aplica `calcVolumeDiscount`. Si el checkout NO lo aplica → fallback: crear un **discount code automático** por cantidad en lugar de (o además de) la price rule, para que el cobro sea real. NO mostrar "Ahorra 10%" si no se cobra.

### PARTE A — Quitar add-ons de perlas + selector "Lleva más y ahorra"
1. `src/components/ProductAddOns.tsx`: eliminar la entrada `"perlas-originales-500-g"` de `ADDON_MAP` (los add-ons siguen en kits/reserva/dúo/trío). Esto descarga visualmente la PDP de perlas.
2. Crear **volume price rule** para perlas (Craft Mode, `create-price-rule`):
   - rule_type `volume`, applies_to `specific_products`, product_ids = id de perlas-originales-500-g.
   - conditions: `tier_mode: 'flat'`, `discount_type: 'percentage'`, tiers: `[{min_quantity:2, discount_value:10}, {min_quantity:3, discount_value:15}]`.
3. Nuevo componente `src/components/ProductQuantityTiers.tsx` (selector "LLEVA MÁS Y AHORRA"):
   - 3 opciones radio tipo tarjeta: "1 Kit de 500 g", "2 Kits (Ahorra 10%)", "3 Kits (Ahorra 15%)".
   - Usa `usePriceRules` + `calcVolumeDiscount` para calcular total y ahorro REAL por tier (no hardcodear %; leer de la rule). Muestra precio total + precio tachado.
   - Al seleccionar un tier llama `logic.handleQuantityChange(n)` → fija la cantidad. La opción seleccionada por defecto = 1.
   - Diseño dunaru: tarjetas con borde, tier activo `border-foreground bg-foreground/5`, badge "Ahorra X%" en `dunaru-champagne`. Mobile-first.
4. En `ProductPageUI.tsx`: renderizar `<ProductQuantityTiers>` SOLO para slugs configurados (empezar con perlas). Cuando el tier selector está activo, **ocultar el stepper de Cantidad** genérico (se vuelve redundante). Mantener `<ProductAddOns>` para el resto.
5. Verificar que `handleBuyNow` y `handleAddToCart` respeten la cantidad del tier (ya leen `logic.quantity`). Confirmar.

### PARTE B — PDP editorial (secciones full-width tras el grid principal)
Crear `src/components/ProductStorySections.tsx`, render al final de `ProductPageUI` (después de `</div>` del grid, antes del sticky bar), driven por config `PDP_CONTENT[slug]`. Si el slug no tiene config → no renderiza nada (otros productos quedan igual por ahora).
Secciones para `perlas-originales-500-g` (orden, inspirado en VelaVita):
  1. **Tira de garantías** (fila de 4 íconos: libre de parafina/larga duración/recargable/siempre como nueva) — benefit-first.
  2. **"Crea tu vela en 4 pasos"** — banda en `bg-dunaru-arena`, 4 tarjetas con imagen placeholder + paso + título + texto corto (vierte perlas / coloca mecha / enciende / recarga).
  3. **Bloques editoriales alternados imagen+texto** (placeholder img): "Velas que no pierden su encanto", "Dale vida a tus recipientes favoritos", "Porque los accidentes también ocurren" (seguridad), "No vuelvas a botar otra vela" (sustentabilidad/recarga infinita). Copy benefit-first, negritas en lo clave, bullets cortos.
  4. **Tabla comparativa "Esto hace diferente a dunaru"** — dunaru vs vela tradicional (recargable, sin desperdicio, sin parafina, dura más, personalizable). Check/cross.
  5. **FAQ dedicada** (accordion, 5–6 preguntas: ¿cómo funciona?, ¿qué recipientes sirven?, ¿es seguro?, ¿cuánto dura?, envío, devoluciones).
  6. **Reviews**: SOLO si hay reales. Por ahora dejar la sección preparada pero oculta / estado "sé el primero en opinar". **NO inventar reseñas** (regla de marca).
  7. **Tira de pago seguro + MSI** (íconos Mercado Pago + "hasta 6 MSI").
- Tipografía: títulos `font-display`, cuerpo `font-body`. Colores dunaru. Mucho aire, mobile-first. Bandas alternando marfil/arena.

### Imágenes
- TODO placeholder por ahora (reusar `/placeholder.svg` o los webp existentes). Marcar claramente como placeholder. Sprint 4 = arte real (pasos, lifestyle, comparativa).

### Archivos a tocar
- `src/components/ProductAddOns.tsx` — quitar key perlas de ADDON_MAP.
- `src/components/ProductQuantityTiers.tsx` — NUEVO selector de cantidad con descuento.
- `src/components/ProductStorySections.tsx` — NUEVO secciones editoriales por slug (PDP_CONTENT).
- `src/pages/ui/ProductPageUI.tsx` — cablear ambos componentes (condicional por slug), ocultar stepper cuando hay tiers.
- Verificar (solo lectura/ajuste): `CartSidebar.tsx`, `CartUI.tsx`, `CheckoutUI.tsx`, `useCheckout.ts` aplican volume discount; si no → discount code automático.
- Craft Mode: `create-price-rule` (volume perlas) — y/o `add-discount` fallback.

## 4. Recent Changes
- 2026-06-24 — SPRINT 2 planificado: PDP editorial estilo VelaVita para perlas-originales + selector "Lleva más y ahorra" (1/2/3, descuento real vía volume rule). Quitar add-ons solo de perlas. Detectado que CartContext NO aplica volume discount → verificar checkout antes de prometer ahorro.
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
- Add-ons: usan placeholder reusado. PENDIENTE: imágenes dedicadas.
- PDP editorial Sprint 2: TODAS las imágenes de secciones (4 pasos, bloques, comparativa) = PLACEHOLDER. Sprint 4 = arte real.
- Capturas VelaVita subidas por user = referencia visual, NO usar como assets.

## 6. Known Issues
- 2026-06-24 — CartContext NO aplica volume discount en su `total`; el ahorro depende de capa display/checkout. Verificar antes de mostrar "Ahorra X%".
- 2026-06-24 — Add-ons con imágenes placeholder reusadas (Sprint 4 dedicadas).
- 2026-06-24 — Cada producto 1 sola imagen; falta galería PDP 6–8 (Sprint 4 arte real).
- 2026-06-24 — "Comprar ahora" NO incluye add-ons seleccionados (bypassa carrito). Aceptable.
- 2026-06-24 — Confirmar vista `orders_customer` expone tracking fields (backend).

## 7. Pending / Future Sessions
- [high] SPRINT 2 (ESTE): PDP editorial perlas + tier selector + volume rule + verificación de cobro del descuento.
- [med] Extender PDP editorial (PDP_CONTENT) a los otros 5 productos.
- [med] SPRINT 4: arte real — imágenes de pasos, lifestyle, comparativa, galería PDP 6–8, hero video.
- [med] SPRINT 5: legales + verificación end-to-end tracking.
- [low] Reviews reales (mecanismo de captación post-compra) — sin inventar.
- [low] Incluir add-ons en flujo "Comprar ahora".
- [low] Integración Mercado Pago completa.