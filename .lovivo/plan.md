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

## 3. Active Plan — AUDITORÍA V1 (2026-06-29) — qué falta vs spec
**Resultado: la base está MUY completa. Gaps detectados (priorizados para próximos sprints):**

### GAPS reales (faltan)
1. **[high] Add-on "Recarga 500 g + 30 mechas — $499" NO existe en catálogo.** Solo hay 3 add-ons (Pack 30 $99, Pack 60 $159, Vaso extra $249). El plan decía que se creó `recarga-500-g-30-mechas` pero NO está en la BD (9 productos totales, sin él). Spec lo pide para PDPs de Kit. → recrear producto tag `addon`.
2. **[high] Home: sección "Así se ve en una casa real"** (carrusel 4–6 verticales shoppable, UGC real) — NO existe en IndexUI. Spec sección #7.
3. **[high] PDP Kit Vidrio y Kit Concreto: secciones editoriales NO construidas.** `PDP_CONTENT` en ProductStorySections.tsx SOLO tiene `perlas-originales-500-g`. Kits muestran únicamente buy box genérico + accordion de descripción. Spec #8 y #9 piden contenido dedicado (Qué incluye, promesa recarga, reutilizar vaso, por qué concreto, regalo).
4. **[med] Badge "Hasta 6 MSI" + Mercado Pago en el BUY BOX de la PDP** — no aparece. Solo está en topbar y footer. La highlights row de la PDP es genérica ("Envío rápido / Garantía 30 días / Devolución / Pago seguro"), NO dunaru-específica y sin MSI.
5. **[med] Prueba social en home** — no hay zona (aceptable porque no inventamos reseñas, pero spec #10 pide "zona lista para activar"). Dejar placeholder honesto.

### Desviaciones aceptables (decisión consciente)
- Dúo/Trío son SKUs separados + bundles en home + selector "1/2/3 kits" (ProductQuantityTiers) en PDP perlas. Spec original los quería como "Formato" dentro de PDP perlas con color por bolsa. La solución actual (tiers de volumen con price rule real) es válida y se cobra server-side.
- Header dice "Tonos" en vez de "Inspírate". Resto del nav ok (Cómo funciona, Preguntas, Comprar, Rastrear pedido).
- Hero = imagen estática (spec pide placeholder de video) → Sprint 4.

### YA cumplido (verificado 2026-06-29)
- Catálogo: 6 productos core con precios y 3 colores correctos (Perlas $599+$99 / Kit Vidrio $899 / Kit Concreto $1,099 / Reserva $999 / Dúo $1,099 c/$1,398 / Trío $1,499 c/$1,797). ✅
- Topbar (envío gratis $899 + 6 MSI Mercado Pago + 2–5 días). Footer con Mercado Pago/MSI/VISA/OXXO, links comprar/ayuda/contacto, WhatsApp real, redes. ✅
- Home: hero (H1 correcto + 2 CTAs), banda 4 beneficios, cómo funciona 4 pasos, compra por intención (2 paths + volumen), elige tu tono (3), por qué no es vela normal (3), bundles (Dúo Más elegido / Trío Mejor valor), FAQ (8), cierre newsletter+WhatsApp. ✅
- PDP perlas: editorial completa (garantías, 4 pasos, bloques alternados, comparativa, FAQ, reviews "sé el primero" sin inventar), selector volumen con price rule REAL `7bdcb204...` (2→10%, 3→15%), sticky CTA. ✅
- Sistema de diseño dunaru aplicado (colores, tipografía, badges). ✅

## 4. Recent Changes
- 2026-06-29 — AUDITORÍA V1: base muy completa. Gaps: (1) add-on Recarga $499 NO existe en BD, (2) home "Así se ve en casa real" falta, (3) PDP editorial de Kit Vidrio/Concreto no construida (solo perlas en PDP_CONTENT), (4) MSI badge falta en buy box PDP + highlights genéricos, (5) zona prueba social home.
- 2026-06-24 — SPRINT 2 ✅: PDP editorial perlas. Creada volume rule `7bdcb204...` (2→10%,3→15%). Nuevos ProductQuantityTiers + ProductStorySections. Quitados add-ons de perlas. Cableado por slug en ProductPageUI.
- 2026-06-24 — SPRINT 2 planificado: PDP editorial + selector lleva más y ahorra. CartContext NO aplica volume discount → backend server-side.
- 2026-06-24 — Selector add-on contextual: ProductAddOns.tsx + cableado en ProductPageUI.
- 2026-06-24 — WhatsApp real `525531215386` en IndexUI, EcommerceTemplate, OrderTrackUI.
- 2026-06-24 — Sprint 1: DunaruNewsletterForm.tsx creado + cableado en IndexUI.
- 2026-06-24 — Add-ons creados (tag addon): vaso-extra-transparente, pack-30-mechas, pack-60-mechas. (recarga-500-g-30-mechas NO persistió — verificado 2026-06-29).
- 2026-06-24 — AUDITORÍA: PDP real = ProductPageUI.tsx; sin reseñas falsas.
- 2026-06-24 — OrderTrackUI/OrderTrack + rutas tracking + footer links.
- 2026-06-23 — 6 productos + sistema de diseño dunaru + EcommerceTemplate.

## 5. Image Inventory
- Hero: `public/hero-dunaru.webp` (1024×576) — falta versión video (Sprint 4)
- Perlas Originales: `perlas-originales-marfil.webp` · Kit Vidrio: `kit-vaso-vidrio.webp` · Kit Concreto: `kit-concreto.webp` · Reserva: `reserva-1kg.webp` · Dúo: `duo-tonos.webp` · Trío: `trio-tonos.webp`
- Add-ons: reusan imagen de perlas/vaso. PENDIENTE imágenes dedicadas.
- PDP editorial Sprint 2: TODAS las imágenes de secciones (4 pasos, 4 bloques) = `/placeholder.svg`. Sprint 4 = arte real.
- Cada producto 1 sola imagen; falta galería PDP 6–8 (Sprint 4).

## 6. Known Issues
- 2026-06-29 — Add-on Recarga $499 ausente en BD pese a nota previa de creación.
- 2026-06-24 — Descuento de volumen: front no recalcula total del carrito; ahorro real depende del backend en checkout. VERIFICAR end-to-end con orden de prueba (2-3 kits) que cobre 10%/15%.
- 2026-06-24 — Regla de envío $99 solo en Perlas: VERIFICAR config real de shipping.
- 2026-06-24 — PDP editorial: imágenes placeholder. Add-ons con imágenes reusadas.
- 2026-06-24 — "Comprar ahora" NO incluye add-ons seleccionados (bypassa carrito). Aceptable.

## 7. Pending / Future Sessions
- [high] Recrear add-on "Recarga 500 g + 30 mechas — $499" (tag addon) y cablearlo en PDPs de Kit.
- [high] Construir sección home "Así se ve en una casa real" (carrusel shoppable, UGC real cuando exista).
- [high] Extender PDP_CONTENT a Kit Vidrio y Kit Concreto (secciones editoriales dedicadas).
- [high] VERIFICAR cobro real del descuento por volumen en checkout (orden de prueba 2-3 kits).
- [med] Añadir badge MSI + Mercado Pago en buy box PDP y reemplazar highlights genéricos por dunaru-específicos (envío estimado, pago seguro, MSI, devoluciones).
- [med] Zona "prueba social" honesta en home + activar reseñas reales post-compra.
- [med] Arte real para PDP editorial perlas (4 pasos, 4 bloques) + galería 6–8 por producto.
- [med] SPRINT 4: imágenes lifestyle, hero video.
- [med] SPRINT 5: legales + verificación end-to-end tracking.
- [low] Header "Inspírate", incluir add-ons en flujo "Comprar ahora", integración Mercado Pago completa.