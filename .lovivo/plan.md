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
- Pagos: Mercado Pago + hasta 6 MSI — visible en topbar y footer. (Badge MSI en buy box PDP: NO ponerlo aún.)
- Concepto: "Luz de diseño que cambia contigo."
- Envío: Perlas Originales = +$99. Todo lo demás = gratis desde $899.
- WhatsApp REAL: `525531215386` (+52 55 3121 5386) — formato wa.me sin "1" intermedio.
- V0 scope: sin aromas, sin suscripción, sin regalos físicos, sin B2B.
- REGLA DE INTEGRIDAD: **NUNCA reseñas falsas ni testimonios inventados.**
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

## 3. Active Plan — ✅ IMÁGENES DE LANDING SINCRONIZADAS CON FOTOS REALES (2026-07-03)

### COMPLETADO este turno
- **Fase 1 (GRATIS)**: `IndexUI.tsx` — arrays PRODUCTS, BUNDLES, TONOS y las 3 URLs inline
  de "¿Cómo quieres empezar?" ahora apuntan a las fotos reales (`products/<hash>.webp`).
  TONOS: los 3 slugs ahora → `perlas-originales-500-g` con la foto por color real
  (Marfil x3azemqdof, Champagne ndawzidqt2a, Ónix 57db85v1ixx).
- **Fase 2 (GENERADAS con producto real como referencia, model=gemini)**:
  - Hero `public/hero-dunaru.webp` (16:9) — ref Kit Vidrio marfil `21sy3747vik`. Espacio libre a la izquierda para el texto.
  - `public/casa-real-comedor.webp` (3:4) — ref Kit Vidrio champagne `ad0bgoukmee`.
  - `public/casa-real-recibidor.webp` (3:4) — ref Kit Concreto `c47q4wicqvv` (bowl oscuro, noche).
  - `public/casa-real-recamara.webp` (3:4) — ref Perlas marfil `x3azemqdof`.
  - `public/casa-real-sala.webp` (3:4) — ref Kit Vidrio marfil `21sy3747vik`.
  - NOTA: se sobreescribieron los archivos en `public/` (mismas rutas que ya usaba el código) → sin cambios de código en hero/CasaReal.

### MAPEO DE FOTOS REALES (primary por producto)
- Perlas 500g: Marfil `x3azemqdof` · Champagne `ndawzidqt2a` · Ónix `57db85v1ixx`
- Kit Vidrio: Marfil `21sy3747vik` · Champagne `ad0bgoukmee` · Ónix `wdn1zm2i6s`
- Kit Concreto: `c47q4wicqvv` · Reserva 1kg: `vjtp9uzft8` · Dúo: `yuq5htx9eol` · Trío: `bfh3fau5iyv`
- Base: `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/products/`

### Restricciones confirmadas
- No usar capturas de VelaVita.cl. Add-on $499 y badge MSI en PDP: fuera de scope.
- El visor de screenshots NO abre .webp directo (usar generación con reference_images para inspeccionar).

## 4. Recent Changes
- 2026-07-03 — ✅ LANDING SINCRONIZADA: Fase 1 (swaps gratis de PRODUCTS/BUNDLES/TONOS + URLs inline a fotos reales) + Fase 2 (hero + 4 escenas casa real regeneradas con Gemini usando cada producto real como referencia). Todas consistentes con producto real. Archivos public/ sobreescritos, sin cambio de código en hero/CasaReal.
- 2026-07-03 — DIAGNÓSTICO IMÁGENES LANDING: fotos reales cargadas en catálogo pero landing con URLs viejas. Plan 2 fases.
- 2026-06-30 — V1 CIERRE: 4 lifestyle "casa real" + `CasaRealSection.tsx`. `PDP_CONTENT` extendido a Kit Vidrio y Concreto.
- 2026-06-29 — AUDITORÍA V1: 5 gaps detectados.
- 2026-06-24 — SPRINT 2 ✅: PDP editorial perlas. Volume rule `7bdcb204...` (2→10%,3→15%).
- 2026-06-24 — WhatsApp real `525531215386` en IndexUI, EcommerceTemplate, OrderTrackUI.
- 2026-06-24 — Add-ons creados (tag addon): vaso-extra, pack-30, pack-60 mechas.
- 2026-06-24 — OrderTrackUI/OrderTrack + rutas tracking + footer links.
- 2026-06-23 — 6 productos + sistema de diseño dunaru + EcommerceTemplate.

## 5. Image Inventory
- **FOTOS REALES (buenas)**: catálogo, ruta `product-images/products/<hash>.webp`. 9 productos, 74 imágenes. Ver mapeo §3. ESTAS son las que se usan.
- **Landing sincronizada**: cards de producto/tono/bundle → fotos reales ✅
- Hero: `public/hero-dunaru.webp` — REGENERADO con ref real ✅
- Casa real: `/casa-real-comedor|recibidor|recamara|sala.webp` — REGENERADAS con ref real ✅
- **VIEJAS/generadas (ya NO se usan en landing)**: `product-images/5429b9c7.../*.webp` (perlas-originales-marfil, kit-vaso-vidrio, kit-concreto, reserva-1kg, duo-tonos, trio-tonos).

## 6. Known Issues
- 2026-06-24 — Descuento de volumen: front no recalcula total carrito; depende del backend en checkout. VERIFICAR end-to-end con orden 2-3 kits (10%/15%).
- 2026-06-24 — Regla de envío $99 solo en Perlas: VERIFICAR config real de shipping.
- 2026-06-24 — "Comprar ahora" NO incluye add-ons seleccionados (bypassa carrito). Aceptable.

## 7. Pending / Future Sessions
- [med] REVISAR visualmente la landing ya desplegada (hero + casa real + cards) tras el commit — confirmar que todo carga bien en mobile.
- [high] VERIFICAR cobro real del descuento por volumen en checkout (orden de prueba 2-3 kits).
- [med] Activar reseñas reales post-compra (zona de confianza ya lista).
- [med] SPRINT 4: hero video. SPRINT 5: legales + verificación tracking end-to-end.
- [low] Header "Inspírate", add-ons en flujo "Comprar ahora", integración Mercado Pago completa. Badge MSI en buy box PDP cuando esté confirmado.