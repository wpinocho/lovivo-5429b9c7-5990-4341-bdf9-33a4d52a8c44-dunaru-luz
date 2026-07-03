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

## 3. Active Plan — SINCRONIZAR IMÁGENES DE LANDING CON FOTOS REALES (estado 2026-07-03)

### Contexto del problema
El user subió sus FOTOS REALES buenas de producto (ya están en el catálogo, ruta
`product-images/products/<hash>.webp`). PERO la landing (`IndexUI.tsx` +
`CasaRealSection.tsx`) sigue apuntando a las fotos VIEJAS/generadas
(`product-images/5429b9c7.../perlas-originales-marfil.webp`, `/hero-dunaru.webp`,
`/casa-real-*.webp`). Hay que reemplazar.

### Insight clave (lo que respondimos al user)
- La MAYORÍA de la landing se arregla SOLO reutilizando fotos reales existentes → GRATIS, sin generar.
- Solo el HERO y las 4 escenas "Casa real" (lifestyle en hogar) PODRÍAN necesitar generación,
  y solo si el catálogo real no trae tomas de ambiente reutilizables. Hacerlas de UNA EN UNA (no todas a la vez).

### MAPEO DE IMÁGENES REALES (primary studio shot por producto)
- Perlas Originales 500 g (slug `perlas-originales-500-g`):
  - Marfil: `.../products/x3azemqdof.webp`
  - Champagne: `.../products/ndawzidqt2a.webp`
  - Ónix: `.../products/57db85v1ixx.webp`
- Kit Vaso de Vidrio (`kit-vaso-de-vidrio`):
  - Marfil: `.../products/21sy3747vik.webp`
  - Champagne: `.../products/ad0bgoukmee.webp`
  - Ónix: `.../products/wdn1zm2i6s.webp`
- Kit Vaso de Concreto (`kit-vaso-de-concreto`): primary `.../products/c47q4wicqvv.webp`
- Reserva 1 kg (`reserva-1-kg`): primary `.../products/vjtp9uzft8.webp`
- Dúo de Tonos (`d-o-de-tonos`): `.../products/yuq5htx9eol.webp`
- Trío de Tonos (`tr-o-de-tonos`): `.../products/bfh3fau5iyv.webp`
- Base URL: `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/products/`
- NOTA: cada producto tiene 6–15 imágenes; revisar el array completo en Craft con
  `ecommerce list-data type=products` por si hay tomas de ambiente/flat-lay mejores.

### FASE 1 — Swaps GRATIS (sin generar) — hacer en un solo batch
Archivo: `src/pages/ui/IndexUI.tsx`
1. Sección "¿Cómo quieres empezar?" (URLs inline, líneas ~292, ~317, ~337):
   - Perlas Originales → `x3azemqdof.webp`
   - Kit Vaso de Vidrio → `21sy3747vik.webp`
   - Kit de Concreto → `c47q4wicqvv.webp`
2. Sección "Elige tu tono" (array `TONOS`, líneas ~105-130) — usar imagen por COLOR real:
   - Marfil (slug perlas) → `x3azemqdof.webp`
   - Champagne (slug perlas) → `ndawzidqt2a.webp`
   - Ónix (slug kit-concreto) → `c47q4wicqvv.webp` o Ónix perlas `57db85v1ixx.webp`
3. Sección "Combina tonos" (array `BUNDLES`, líneas ~55-76):
   - Dúo → `yuq5htx9eol.webp` · Trío → `bfh3fau5iyv.webp`
4. Array `PRODUCTS` (líneas ~16-53): actualizar todas las `img` a las reales por si se usa en otras vistas.

### FASE 2 — Hero + "Casa real" (revisar → generar solo si hace falta) — de UNA EN UNA
1. HERO (`IndexUI.tsx` línea ~174, src `/hero-dunaru.webp`):
   - Primero revisar en el catálogo real si hay una toma horizontal/ambiente aprovechable.
   - Si no, generar hero editorial con `imagegen--generate_image` usando como
     `reference_images` la foto real del Kit Vidrio encendido, para que sea 100% consistente.
     Cargar skill `media.product-imagery` ANTES de generar.
2. "Casa real" (`CasaRealSection.tsx`, array `SCENES`, 4 escenas `/casa-real-*.webp`):
   - Comedor (Champagne/vidrio), Recibidor (Ónix/concreto), Recámara (Marfil/perlas), Sala (Marfil/vidrio).
   - Revisar si el catálogo real trae lifestyle en hogar reutilizable. Si no, regenerar
     una por una con la foto real del producto correspondiente como referencia. Revisar consistencia tras cada una.

### Restricciones confirmadas por el user
- No usar las capturas de VelaVita.cl (referencia de diseño, tienen su marca).
- Add-on Recarga $499: descartado. Badge MSI en buy box PDP: fuera de scope por ahora.

## 4. Recent Changes
- 2026-07-03 — DIAGNÓSTICO IMÁGENES LANDING: el user cargó fotos reales de producto (ruta `products/<hash>.webp`) pero la landing sigue con URLs viejas/generadas. Plan en 2 fases: (1) swaps gratis de cards de producto/tono/bundle a fotos reales, (2) hero + casa real regenerar solo si no hay lifestyle real reutilizable, de una en una. Mapeo de URLs reales documentado.
- 2026-06-30 — V1 CIERRE: 4 lifestyle "casa real" generadas + `CasaRealSection.tsx` + cableado IndexUI. `PDP_CONTENT` extendido a Kit Vidrio y Kit Concreto. Add-on $499 y badge MSI descartados.
- 2026-06-29 — AUDITORÍA V1: base muy completa, 5 gaps detectados.
- 2026-06-24 — SPRINT 2 ✅: PDP editorial perlas. Volume rule `7bdcb204...` (2→10%,3→15%). ProductQuantityTiers + ProductStorySections.
- 2026-06-24 — WhatsApp real `525531215386` en IndexUI, EcommerceTemplate, OrderTrackUI.
- 2026-06-24 — Add-ons creados (tag addon): vaso-extra, pack-30, pack-60 mechas.
- 2026-06-24 — OrderTrackUI/OrderTrack + rutas tracking + footer links.
- 2026-06-23 — 6 productos + sistema de diseño dunaru + EcommerceTemplate.

## 5. Image Inventory
- **FOTOS REALES (NUEVAS, buenas)**: en catálogo, ruta `product-images/products/<hash>.webp`.
  9 productos, 74 imágenes. Ver mapeo primary en §3. ESTAS son las que se deben usar.
- **VIEJAS / generadas (a reemplazar)**: `product-images/5429b9c7.../perlas-originales-marfil.webp`,
  `kit-vaso-vidrio.webp`, `kit-concreto.webp`, `reserva-1kg.webp`, `duo-tonos.webp`, `trio-tonos.webp`.
- Hero: `public/hero-dunaru.webp` — generado, revisar reemplazo (Fase 2).
- Casa real: `/casa-real-comedor.webp` · `/casa-real-recibidor.webp` · `/casa-real-recamara.webp` · `/casa-real-sala.webp` — generadas, revisar reemplazo (Fase 2).
- Nota: el visor de screenshots NO abre .webp directo; para inspeccionar fotos reales usar generación/edición con reference_images en Craft.

## 6. Known Issues
- 2026-07-03 — Landing desincronizada con fotos reales de producto (ver Active Plan). PENDIENTE ejecutar en Craft.
- 2026-06-24 — Descuento de volumen: front no recalcula total carrito; depende del backend en checkout. VERIFICAR end-to-end con orden 2-3 kits (10%/15%).
- 2026-06-24 — Regla de envío $99 solo en Perlas: VERIFICAR config real de shipping.
- 2026-06-24 — "Comprar ahora" NO incluye add-ons seleccionados (bypassa carrito). Aceptable.

## 7. Pending / Future Sessions
- [high] EJECUTAR Fase 1 (swaps gratis) + Fase 2 (hero/casa real) — plan listo en §3.
- [high] VERIFICAR cobro real del descuento por volumen en checkout (orden de prueba 2-3 kits).
- [med] Activar reseñas reales post-compra (zona de confianza ya lista).
- [med] SPRINT 4: hero video. SPRINT 5: legales + verificación tracking end-to-end.
- [low] Header "Inspírate", add-ons en flujo "Comprar ahora", integración Mercado Pago completa. Badge MSI en buy box PDP cuando esté confirmado.