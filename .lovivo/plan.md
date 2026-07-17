# Store Plan — dunaru
<!-- Auto-maintained by Lovivo AI. READ THIS FIRST. UPDATE IT LAST. -->

## 1. Brand & Context
- Brand name: **dunaru** (dunaru.mx)
- Product: Velas perladas recargables — **gránulos finos de cera tipo arena** (NO perlas grandes) + mechas de algodón. Material visual = arena/couscous fino.
- Tesis: no vendemos "cera para velas". Vendemos una forma simple de crear luz y decoración en el recipiente que ya tienes.
- Target: Mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO, decoración + hogar + regalo
- Market: México. Moneda MXN. Idioma: español de México.
- Tono: claro, cálido, directo. Sin tecnicismos.
- Pagos: **A meses sin intereses vía Stripe** (hasta 6 meses). ⚠️ NO usar Mercado Pago (no lo tienen). ⚠️ NUNCA nombrar "Stripe" ni "Mercado Pago" en la UI — solo decir "a meses sin intereses". Concepto: "Luz de diseño que cambia contigo."
- Envío: Perlas Originales = +$99. Todo lo demás = gratis desde $899.
- WhatsApp REAL: `525531215386` (+52 55 3121 5386).
- REGLA DE INTEGRIDAD: **NUNCA reseñas falsas.** Las 15 reseñas SÍ son reales. Cualquier "prueba social" en checkout usa `getReviewStats()` (4.9 / 15), NO números inventados.
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`
- RUTAS EN ESPAÑOL: producto = `/productos/:slug`, paquete = `/paquete/:slug`, carrito = `/carrito`, checkout = `/pagar`.
- Competencia: **VelaVita.cl** (LATAM) y **Foton (US)**.
- Slugs pauta: `perlas-originales-500-g`, `kit-vaso-de-vidrio`, `kit-vaso-de-concreto`.

## 2. Design System
- Fondo: Marfil #FAF6EF → `--background` · Alterno: Arena #F1E9DC → `--muted`/`bg-dunaru-arena`
- Texto: Carbón #2B2A27 → `--foreground` · Acento: Champagne #C2A878 → `text-dunaru-champagne`
- CTA: Ónix #1E1C1A → `--primary` · Detalle llama: Ámbar #D89A57 → `text-dunaru-ambar`
- Display: Instrument Serif → `font-display` · Body/UI: Manrope → `font-body`
- Tokens: `dunaru-marfil/arena/champagne/carbon/onix/ambar`
- Estrellas de reseñas: `fill-dunaru-champagne text-dunaru-champagne` (vacías = `/30`).
- Estética: editorial, mínima, mucho aire. Mobile-first.
- **HERO responsive**: móvil usa imagen VERTICAL dedicada (`/hero-dunaru-mobile.webp`, 9:16, `md:hidden`), desktop usa la horizontal (`/hero-dunaru.webp`, `hidden md:block`).
- **PDP layout**: `ProductPageUI.tsx`. Grid 7/5. Galería sticky desktop + carrusel móvil. Contenedor `-mt-4 md:mt-0`.
- **PDP buy box**: MSI bajo el precio + reaseguros ETA + garantía bajo el CTA (íconos `text-dunaru-ambar`). Barra sticky con `StickyRating`.
- **CHECKOUT layout** (`CheckoutUI.tsx` + `StripePayment.tsx`): 2 cols desktop (form + resumen sticky), 1 col móvil (resumen colapsable arriba + form). Botón de pago vive DENTRO de `StripePayment`.

## 3. Active Plan — 🎯 Mejorar UI Checkout + limpiar menciones de "Mercado Pago" (2026-07-17)

Referencia visual del user: checkout estilo Pliego (imagen 1) = resumen abierto, prueba social, badges de confianza, callout "a meses". Su checkout actual (imagen 2) se ve pobre en móvil (resumen colapsado, sin prueba social, sin badges).

### TAREA A — Rediseño UI del checkout (mobile-first)
Archivos: `src/pages/ui/CheckoutUI.tsx`, `src/components/StripePayment.tsx`.

1. **Resumen del pedido móvil abierto por defecto** (`MobileOrderSummary`, CheckoutUI ~línea 590):
   - Cambiar `useState(false)` → `useState(true)` para que arranque expandido (como imagen 1).
   - Mantener botón para colapsar. Estilo con tokens de marca (`bg-dunaru-arena/40`, borde suave).
   - Añadir línea de reaseguro bajo los totales: ícono `Truck` + "**Envío gratis** · Llega en 2 a 5 días hábiles" (`text-dunaru-ambar`). Solo mostrar "Envío gratis" cuando aplique (>= $899 o pickup); si hay costo, mostrar el monto.

2. **Línea de seguridad arriba del pago** (CheckoutUI, dentro de la `<section>` de pago ~línea 238, ANTES del bloque `isStripeReady`):
   - Banda sutil centrada: 🔒 `Lock` + "**Pago 100% seguro** · Cifrado SSL". (NO nombrar Stripe.)

3. **Nuevos slots en `StripePayment`** (agregar props opcionales `React.ReactNode`, renderizar en el JSX del `PaymentForm`, ~líneas 843-1037):
   - `paymentNoticeSlot` → renderizar JUSTO ARRIBA de `<PaymentElement>` (línea ~984). Aquí va el callout de meses (ver Tarea B copy).
   - `socialProofSlot` → renderizar JUSTO ARRIBA del `<Button>` submit (línea ~1018).
   - `trustBadgesSlot` → renderizar JUSTO DEBAJO del `<Button>` submit y ANTES del bloque de links Condiciones/Privacidad (línea ~1032).
   - Pasar los tres desde `CheckoutUI` en el `<StripePayment ...>` (junto a `billingSlot`, `deliveryMethodSlot`, `paypalSlot`).

4. **Contenido de los slots (construir en CheckoutUI, importar `getReviewStats` de `@/data/reviews` y `Star, ShieldCheck, Truck, Lock, CreditCard` de lucide-react):**
   - `socialProofSlot`: fila centrada de 5 estrellas champagne + "**{stats.average}** · {stats.count} clientes felices" usando `getReviewStats()` (REAL: 4.9 / 15). Ocultar si `stats.count === 0`. NO inventar "+196".
   - `trustBadgesSlot`: fila de 3 reaseguros con íconos `text-dunaru-ambar` → "Envío gratis a todo México" · "Pago seguro" · "Garantía 30 días". Debajo, fila de logos de métodos de pago en texto/badges sutiles: VISA · MASTERCARD · AMEX · APPLE PAY · G PAY (mostrar OXXO/SPEI solo si `paymentMethods.oxxo`/`.spei` están activos — leer de `useSettings()`). Estilo badges outline discretos, no llamativos.

5. **CTA del botón de pago**: ya dice "Completar Compra - {MXN $X}". Mantener; opcional cambiar guion por "·" para look editorial. No tocar la lógica.

### TAREA B — Quitar "Mercado Pago" y NO nombrar proveedores
1. **PDP** `ProductPageUI.tsx` líneas 363-366 (MSI bajo el precio): cambiar
   `o 6 pagos de {X} sin intereses con Mercado Pago`
   → `o **6 pagos de {X}** a meses sin intereses` (sin nombrar proveedor).
2. **Checkout `paymentNoticeSlot`** (callout arriba de la tarjeta, estilo caja ámbar suave `bg-dunaru-arena/60` borde `dunaru-champagne/40`):
   - Título: `CreditCard` + "**Págalo a meses sin intereses**"
   - Sub: "Desde **{formatMoney(finalTotal/6)} al mes**, hasta 6 meses. Ingresa tu tarjeta y verás los plazos disponibles de tu banco."
   - (Nota: los plazos reales los define el banco emisor / Stripe; no prometer meses garantizados, por eso "verás los plazos disponibles".)
3. Verificar que NO quede ninguna otra mención de "Mercado Pago" ni "Stripe" en texto visible (búsqueda dio solo la línea de la PDP; confirmar en craft con grep).

### Notas de implementación
- No tocar la lógica de pago/HeadlessCheckout ni props existentes de StripePayment; solo AGREGAR slots opcionales.
- Todo mobile-first: single column, tap targets ≥44px, badges que hagan wrap.
- Probar con `browser-test`: PDP → Agregar al carrito → /pagar con 1 producto (no screenshot directo a /pagar = carrito vacío).

## 4. Recent Changes
- 2026-07-17 — 📋 PLAN checkout: resumen móvil abierto + línea seguridad + slots (paymentNotice/socialProof/trustBadges) en StripePayment con prueba social REAL (getReviewStats) y badges de pago. + Quitar "Mercado Pago" (PDP) y callout "a meses" sin nombrar proveedor.
- 2026-07-17 — ✅ CONVERSIÓN PDP: (1) línea MSI 6 pagos bajo precio, (2) reaseguros ETA + garantía 30 días bajo CTA, (4) rating champagne en barra sticky. Rec #3 video demo pospuesta.
- 2026-07-17 — ✅ PDP: quitado botón "Seguir comprando" (móvil) + galería subida con `-mt-4 md:mt-0`.
- 2026-07-17 — ✅ FIX HERO MÓVIL: generada imagen vertical `/hero-dunaru-mobile.webp` (9:16).
- 2026-07-17 — ✅ EJECUTADO rediseño reseñas PDP: `Reviews.tsx` layout mixto. PDP muestra las 15.
- 2026-07-16 — ✅ RESEÑAS REALES LIVE: `src/data/reviews.ts` (15 reseñas). 5 fotos UGC. Promedio 4.9/15.
- 2026-07-16 — 🔍 AUDITORÍA PRE-PAUTA vs VelaVita.cl.
- 2026-07-16 — ✅ FIX PDP sticky bar prematuro.
- 2026-07-16 — ✅ FIX carrusel móvil PDP estilo rodata.mx.
- 2026-07-15 — ✅ FIX BUG galería PDP desktop.
- 2026-07-15 — ✅ PDP PERLAS: 4 fotos editoriales + copy propio.
- 2026-07-15 — ✅ FIX "Crea tu vela en 4 pasos" con fotos reales.
- 2026-07-06 — ✅ SPRINT PRE-LANZAMIENTO.
- 2026-07-03 — ✅ LANDING SINCRONIZADA con fotos reales.

## 5. Image Inventory
- **FOTOS REALES catálogo**: `product-images/products/<hash>.webp`. 9 productos.
- **Hero desktop**: `/hero-dunaru.webp` · **Hero móvil**: `/hero-dunaru-mobile.webp` (9:16) · **Casa real**: `/casa-real-*.webp` · **4 pasos**: `/paso-*.webp` — ✅.
- **UGC RESEÑAS (5 fotos, en `reviews.ts` const UGC)** — Supabase message-images.
- OJO consistencia: material = **arena fina**, no perlas grandes.

## 6. Known Issues
- 2026-07-17 — 🟡 Callout de meses en checkout NO debe prometer "6 meses garantizados": los plazos los define el banco/Stripe. Copy = "verás los plazos disponibles".
- 2026-07-16 — 🟡 Textos reseñas #5–#12 RECONSTRUIDOS. User debe pegar exactos.
- 2026-07-16 — 🟡 Nombres de reseñas = propuesta, confirmar reales antes de pauta.
- 2026-07-16 — 🟡 `ReviewsInvite.tsx` huérfano. Se puede borrar.
- 2026-06-24 — Descuento volumen: verificar recálculo total carrito end-to-end.
- 2026-06-24 — Regla envío $99 solo Perlas: verificar config shipping.

## 7. Pending / Future Sessions
- [high] EJECUTAR en Craft Mode Tarea A + B del Active Plan (checkout UI + limpiar Mercado Pago).
- [high] VIDEO DEMO con `videogen` (rec #3, pospuesta por user): vierte→inserta→enciende→renueva, arriba de reseñas.
- [high] USER confirma textos exactos #5–#12 + nombres reales → `reviews.ts`.
- [med] ProductCardUI stars: conteo global (15).
- [med] Oferta lanzamiento (`compare_at_price`) en productos hero.
- [low] Borrar `ReviewsInvite.tsx`, barra envío gratis en carrito, JSON-LD AggregateRating. Borrar `public/tmp-upload-hero.webp`.