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

## 3. Active Plan — SPRINT 2 ✅ COMPLETADO (PDP editorial perlas + tier selector)
**Hecho:** PDP de `perlas-originales-500-g` ahora es editorial estilo VelaVita, con selector "Lleva más y ahorra" y descuento por volumen REAL.
- **Volume price rule creada**: `7bdcb204-a5a5-4af5-999a-e5474ab6ab96` (flat %, tiers 2→10%, 3→15%) sobre product_id `90445ca9-cf01-4e6a-a879-7487649e787c`. Se aplica automáticamente en checkout (backend), igual que VolumeBadge.
- **ProductQuantityTiers.tsx** (NUEVO): selector 1/2/3 kits, lee descuento real con `usePriceRules`+`calcVolumeDiscount`, muestra total + tachado + "Ahorra X%". Llama `handleQuantityChange(n)`.
- **ProductStorySections.tsx** (NUEVO): secciones editoriales driven por `PDP_CONTENT[slug]` (solo perlas configurado): garantías, "Crea tu vela en 4 pasos" (bg arena), 4 bloques alternados imagen+texto, tabla comparativa dunaru vs tradicional, FAQ (6), reviews (estado "sé el primero", SIN inventar), tira pago seguro+MSI. Imágenes = PLACEHOLDER.
- **ProductAddOns.tsx**: quitada key `perlas-originales-500-g` de ADDON_MAP.
- **ProductPageUI.tsx**: `TIER_SELECTOR_SLUGS=["perlas-originales-500-g"]`. Si slug está en la lista → renderiza ProductQuantityTiers y oculta stepper+add-ons. ProductStorySections se renderiza tras el grid.

### Arquitectura clave (NO romper)
- PDP única compartida: `src/pages/ui/ProductPageUI.tsx` (recibe `logic` de `HeadlessProduct.tsx`, FORBIDDEN).
- Carrito: `addItem(product, variant?, sellingPlan?)`.
- Descuento de volumen: front NO recalcula el total del carrito (`calcVolumeDiscount` solo para display). El COBRO real lo hace el backend/edge en checkout vía la price rule (mismo patrón que VolumeBadge). Confirmado: `calcVolumeDiscount` no estaba cableado en cart/checkout, pero el backend aplica price_rules server-side.

## 4. Recent Changes
- 2026-06-24 — SPRINT 2 ✅: PDP editorial perlas. Creada volume rule `7bdcb204...` (2→10%,3→15%). Nuevos componentes ProductQuantityTiers + ProductStorySections. Quitados add-ons de perlas. Cableado por slug en ProductPageUI (oculta stepper cuando hay tiers). Imágenes placeholder.
- 2026-06-24 — SPRINT 2 planificado: PDP editorial estilo VelaVita + selector lleva más y ahorra. Detectado que CartContext NO aplica volume discount → backend lo aplica server-side.
- 2026-06-24 — Selector add-on contextual: ProductAddOns.tsx + cableado en ProductPageUI.
- 2026-06-24 — WhatsApp real `525531215386` en IndexUI, EcommerceTemplate, OrderTrackUI.
- 2026-06-24 — Sprint 1: DunaruNewsletterForm.tsx creado + cableado en IndexUI.
- 2026-06-24 — 4 add-ons creados (tag addon): recarga-500-g-30-mechas, vaso-extra-transparente, pack-30-mechas, pack-60-mechas.
- 2026-06-24 — AUDITORÍA: PDP real = ProductPageUI.tsx; sin reseñas falsas.
- 2026-06-24 — OrderTrackUI/OrderTrack + rutas tracking + footer links.
- 2026-06-23 — 6 productos + sistema de diseño dunaru + EcommerceTemplate.

## 5. Image Inventory
- Hero: `public/hero-dunaru.webp` (1024×576) — falta versión video (Sprint 4)
- Perlas Originales: `perlas-originales-marfil.webp` · Kit Vidrio: `kit-vaso-vidrio.webp` · Kit Concreto: `kit-concreto.webp` · Reserva: `reserva-1kg.webp` · Dúo: `duo-tonos.webp` · Trío: `trio-tonos.webp`
- Add-ons: placeholder reusado. PENDIENTE: imágenes dedicadas.
- PDP editorial Sprint 2: TODAS las imágenes de secciones (4 pasos, 4 bloques) = `/placeholder.svg`. Sprint 4 = arte real.
- Capturas VelaVita subidas por user = referencia visual, NO usar como assets.

## 6. Known Issues
- 2026-06-24 — Descuento de volumen: front no recalcula total del carrito; el ahorro real depende del backend en checkout. VERIFICAR end-to-end con una orden de prueba (2-3 kits) que el total cobre 10%/15%.
- 2026-06-24 — PDP editorial: imágenes placeholder (pasos + bloques). Sprint 4 dedicadas.
- 2026-06-24 — Add-ons con imágenes placeholder reusadas.
- 2026-06-24 — Cada producto 1 sola imagen; falta galería PDP 6–8 (Sprint 4).
- 2026-06-24 — "Comprar ahora" NO incluye add-ons seleccionados (bypassa carrito). Aceptable.

## 7. Pending / Future Sessions
- [high] VERIFICAR cobro real del descuento por volumen en checkout (orden de prueba 2-3 kits perlas).
- [med] Arte real para PDP editorial perlas (4 pasos, 4 bloques, comparativa) + galería 6–8.
- [med] Extender PDP editorial (PDP_CONTENT) a los otros 5 productos.
- [med] SPRINT 4: imágenes lifestyle, hero video.
- [med] SPRINT 5: legales + verificación end-to-end tracking.
- [low] Reviews reales (captación post-compra) — sin inventar.
- [low] Incluir add-ons en flujo "Comprar ahora".
- [low] Integración Mercado Pago completa.