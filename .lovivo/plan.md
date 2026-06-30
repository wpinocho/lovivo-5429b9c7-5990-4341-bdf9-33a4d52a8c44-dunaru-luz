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
- Pagos: Mercado Pago + hasta 6 MSI — visible en topbar y footer. (Badge MSI en buy box PDP: el user pidió NO ponerlo aún — no lo tienen confirmado.)
- Concepto: "Luz de diseño que cambia contigo."
- Envío: Perlas Originales = +$99. Todo lo demás = gratis desde $899.
- WhatsApp REAL: `525531215386` (+52 55 3121 5386) — formato wa.me sin "1" intermedio.
- V0 scope: sin aromas, sin suscripción, sin regalos físicos, sin B2B.
- REGLA DE INTEGRIDAD: **NUNCA reseñas falsas ni testimonios inventados.** Reviews solo si son reales; si no hay, omitir o estado "sé el primero".
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

## 3. Active Plan — V1 GAPS (estado 2026-06-30)
**CERRADOS este sprint:**
1. ✅ Add-on Recarga $499 — DESCARTADO por el user (no se crea).
2. ✅ Home "Así se ve en una casa real" — CONSTRUIDO. `CasaRealSection.tsx` (carrusel shoppable 4 escenas + franja confianza honesta + CTA compartir foto WhatsApp). Cableado en IndexUI tras "Elige tu tono".
3. ✅ PDP editorial Kit Vidrio + Kit Concreto — `PDP_CONTENT` extendido con `kit-vaso-de-vidrio` y `kit-vaso-de-concreto` (steps, blocks con fotos reales, compareRows, faqs). Render por slug ya existía en ProductPageUI línea 708.
4. ✅ Badge MSI en buy box PDP — el user pidió NO ponerlo aún (no confirmado). Queda fuera de scope a propósito.
5. ✅ Prueba social home — resuelta como franja honesta de confianza dentro de CasaRealSection (sin reseñas inventadas).

## 4. Recent Changes
- 2026-06-30 — V1 CIERRE: (a) 4 imágenes lifestyle "casa real" generadas con refs reales (comedor/recibidor/recamara/sala). (b) `CasaRealSection.tsx` nuevo + cableado IndexUI. (c) `PDP_CONTENT` extendido a Kit Vidrio y Kit Concreto + soporte `photo` en StoryBlock (object-cover vs placeholder). Add-on $499 y badge MSI descartados por el user.
- 2026-06-29 — AUDITORÍA V1: base muy completa, 5 gaps detectados.
- 2026-06-24 — SPRINT 2 ✅: PDP editorial perlas. Volume rule `7bdcb204...` (2→10%,3→15%). ProductQuantityTiers + ProductStorySections.
- 2026-06-24 — WhatsApp real `525531215386` en IndexUI, EcommerceTemplate, OrderTrackUI.
- 2026-06-24 — Add-ons creados (tag addon): vaso-extra, pack-30, pack-60 mechas.
- 2026-06-24 — OrderTrackUI/OrderTrack + rutas tracking + footer links.
- 2026-06-23 — 6 productos + sistema de diseño dunaru + EcommerceTemplate.

## 5. Image Inventory
- Hero: `public/hero-dunaru.webp` (1024×576) — falta versión video (Sprint 4)
- Productos: `perlas-originales-marfil.webp` · `kit-vaso-vidrio.webp` · `kit-concreto.webp` · `reserva-1kg.webp` · `duo-tonos.webp` · `trio-tonos.webp`
- **NUEVAS lifestyle "casa real" (1200×1600, repo + cloud):** `/casa-real-comedor.webp` (vidrio/cena) · `/casa-real-recibidor.webp` (concreto/noche) · `/casa-real-recamara.webp` (perlas/mañana) · `/casa-real-sala.webp` (vidrio/sala). Usadas en CasaRealSection y blocks editoriales de los kits.
- PDP editorial: steps + algunos blocks siguen en `/placeholder.svg`. Blocks de kits con `photo:true` usan lifestyle reales.
- Falta galería PDP 6–8 por producto (Sprint 4).

## 6. Known Issues
- 2026-06-24 — Descuento de volumen: front no recalcula total carrito; ahorro depende del backend en checkout. VERIFICAR end-to-end con orden 2-3 kits (10%/15%).
- 2026-06-24 — Regla de envío $99 solo en Perlas: VERIFICAR config real de shipping.
- 2026-06-24 — "Comprar ahora" NO incluye add-ons seleccionados (bypassa carrito). Aceptable.
- 2026-06-30 — Las 2 imágenes que subió el user eran capturas de VelaVita.cl (referencia de diseño), NO fotos reales de dunaru — no se usaron en la tienda.

## 7. Pending / Future Sessions
- [high] VERIFICAR cobro real del descuento por volumen en checkout (orden de prueba 2-3 kits).
- [med] Reemplazar fotos UGC reales en CasaRealSection cuando lleguen (hoy son generadas).
- [med] Arte real para steps PDP (4 pasos) + blocks restantes con placeholder + galería 6–8 por producto.
- [med] Activar reseñas reales post-compra (zona de confianza ya lista).
- [med] SPRINT 4: hero video. SPRINT 5: legales + verificación tracking end-to-end.
- [low] Header "Inspírate", add-ons en flujo "Comprar ahora", integración Mercado Pago completa. Badge MSI en buy box PDP cuando esté confirmado.