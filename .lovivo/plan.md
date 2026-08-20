# Store Plan — dunaru
<!-- Auto-maintained by Lovivo AI. READ THIS FIRST. UPDATE IT LAST. -->

## 1. Brand & Context
- Brand name: **dunaru** (dunaru.mx)
- Product: Velas perladas **rellenables** — **gránulos finos de cera tipo arena** (NO perlas grandes) + mechas de algodón. Material visual = arena/couscous fino.
- ⚠️ VOCABULARIO: usar **"rellenable"** (NO "recargable").
- ⚠️ ESTILO DE COPY: **PROHIBIDO el guion largo (—) en texto de la tienda.** Usar comas, dos puntos o "·".
- Tesis: no vendemos "cera para velas". Vendemos una forma simple de crear luz y decoración en el recipiente que ya tienes.
- **AROMA**: las velas nacen SIN perfume. Posicionamiento = **"el aroma lo eliges tú"**.
- Target: Mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO, decoración + hogar + regalo
- Market: México. Moneda MXN. Idioma: español de México.
- Tono: claro, cálido, directo. Sin tecnicismos.
- **DIRECCIÓN DE MARCA 2026-08-20: registro "high end" / editorial atmosférico.** Referencia aprobada: **sensatehomes.com** (agencia Exhibea). Ver sección 3.
- ⛔ **La marca NO es founder-led. La owner NO aparece** (ni retrato, ni primera persona, ni página "sobre mí"). Storytelling = producto, materia prima, manos anónimas, taller y casa. NO volver a proponer contenido de fundadora.
- Pagos: **A meses sin intereses vía Stripe** (hasta 6 meses). ⚠️ NUNCA nombrar "Stripe" ni "Mercado Pago" en la UI.
- Envío: **ENVÍO GRATIS A TODO MÉXICO, SIN MÍNIMO.**
- WhatsApp REAL: `525531215386` (+52 55 3121 5386).
- REGLA DE INTEGRIDAD: **NUNCA reseñas falsas.** Las 15 reseñas SÍ son reales. Prueba social usa `getReviewStats()` (4.9 / 15).
- ⚠️ "+200 clientes felices" (top bar y `PdpSocialProof`): dato del owner, NO verificado contra la DB.
- REGLA DE INTEGRIDAD (precios): **NUNCA inventar precios tachados.**
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`
- RUTAS EN ESPAÑOL: producto = `/productos/:slug`, paquete = `/paquete/:slug`, carrito = `/carrito`, checkout = `/pagar`, categoría = `/categorias/:handle`.
- Competencia: **VelaVita.cl** y **Foton (US)**. Referencia de UI de PDP: **rodata.mx**. Referencia de ARTE/MARCA: **sensatehomes.com**.
- ⚠️ **kit-vaso-de-concreto** es en realidad de **CERÁMICA**. El slug no se puede cambiar. Todo el COPY visible ya dice cerámica.
- ⚠️ **PRODUCTO ANCLA DE PAUTA = `kit-vaso-de-vidrio`.**
- ⚠️ El owner renombra y repriza productos desde el Dashboard. **NUNCA hardcodear precios ni títulos.**
- ⚠️ **STAGING**: los cambios se commitean AL FINAL del turno. Si el owner dice "no se aplicó", pedir refresh duro antes de re-implementar.

### CATÁLOGO (slugs SIEMPRE intactos — los anuncios de Meta dependen de ellos)
Snapshot 2026-08-07 (fuente de verdad = la DB):
| Slug | Título | Precio | Compare | $/g cera |
|---|---|---|---|---|
| perlas-originales-500-g | Recarga para vela rellenable — 500 g + 30 mechas | $499 | $599 | $1.00 |
| reserva-1-kg | Recarga para vela rellenable — 1 Kg + 60 mechas | $799 | $999 | $0.80 |
| kit-vaso-de-vidrio | Kit Vela Rellenable · Vaso de Vidrio | $799 | $899 | — |
| kit-vaso-de-concreto | Kit Vela Rellenable · Bowl de Cerámica | $999 | $1,199 | — |
| d-o-de-tonos | Dúo de Tonos · 1 kg de Cera Perlada | $1,099 | $1,398 | $1.10 ⚠️ |
| tr-o-de-tonos | Trío de Tonos · 1.5 kg de Cera Perlada | $1,399 | $1,499 | $0.93 |
| bowl-negro | Bowl de Cerámica Negro | $399 | $499 | — |
| vaso-extra-transparente | Vaso de Vidrio Transparente | $249 | — | — |
| pack-30-mechas | Pack de 30 Mechas de Algodón | $99 | — | — |
- ⚠️ **ESCALERA DE PRECIO ROTA**: el Dúo (1 kg, $1.10/g) es más caro por gramo que la Reserva 1 kg ($0.80/g).
- Price rule activa: `perlas-originales-500-g` volumen → 2 uds = 10% OFF, 3 uds = 15% OFF (flat, se aplica en checkout).

## 2. Design System
- Fondo: Marfil #FAF6EF → `--background` · Alterno: Arena #F1E9DC → `bg-dunaru-arena`
- Texto: Carbón #2B2A27 → `--foreground` · Acento: Champagne #C2A878 → `text-dunaru-champagne`
- CTA: Ónix #1E1C1A → `--primary` · Detalle llama: Ámbar #D89A57 → `text-dunaru-ambar`
- 🆕 **Oscuros atmosféricos (2026-08-20)**: `bg-dunaru-tabaco` (24 22% 14%) y `bg-dunaru-cacao` (22 26% 22%). Solo para secciones editoriales full-bleed.
- Display: Instrument Serif → `font-display` · Body/UI: Manrope → `font-body`
- Tokens: `dunaru-marfil/arena/champagne/carbon/onix/ambar/tabaco/cacao`
- 🆕 **`--radius: 0rem`** (2026-08-20). `rounded-sm|md|lg` = 0 en todo el sitio. **Excepción: `rounded-field` (0.25rem)** ya aplicado a `ui/input.tsx` y `ui/textarea.tsx` para no endurecer el checkout. Círculos (`rounded-full`) no se tocan.
- Estética: editorial, mínima, mucho aire. Mobile-first. **Pero en PDP, landing y checkout la densidad gana al aire.**

### 🆕 Utilidades editoriales disponibles (index.css, desde 2026-08-20)
- `.lockup` → serif + versalitas + `tracking .14em`. `.lockup em` → itálica minúscula. Uso: `<h2 className="lockup">DONDE LA CASA <em>se vuelve</em> SANTUARIO</h2>`
- `.eyebrow` → Manrope 10px, `tracking .28em`, champagne. Sustituye a `text-xs font-semibold tracking-[0.2em]`. Variante `.eyebrow-light` para fondos oscuros.
- `.h-editorial` → escala display grande (30px → 48px → 60px). Solo secciones de marca.
- `.transition-editorial` → 700ms cubic-bezier(.22,1,.36,1).
- `.reveal` / `.reveal-in` → fade+slide 900ms. Usar vía **`<Reveal delay={120}>`** (`src/components/Reveal.tsx`) o el hook **`useReveal()`** (`src/hooks/useReveal.ts`). Respeta `prefers-reduced-motion`.
- `.full-bleed` → rompe el contenedor centrado a 100vw.
- `.hairline` / `.hairline-dark` → separadores de 1px.

### Reglas de layout existentes
- **TOP BAR** (`EcommerceTemplate.tsx`): barra fija carbón, 2 items. **NO se replica en el checkout a propósito.**
- **HEADER OVERLAY**: `EcommerceTemplate` y `PageTemplate` aceptan prop `headerOverlay`. Solo `IndexUI` lo usa.
- **🛒 ORDEN OFICIAL DEL BUY BOX** (`ProductPageUI.tsx`):
  1. Título + precio + "6 pagos de $X a meses sin intereses" + rating
  2. `PDP_BENEFITS[slug]` = 3 bullets · 3. Selector de variantes · 4. Cantidad compacta
  5. Add-ons / `ProductQuantityTiers` · 6. `<DeliveryEstimate />` · 7. CTA primario `h-12` con precio
  8. CTA secundario `h-11` outline · 9. Micro-línea `Lock` "Pago seguro · Compra protegida"
  10. 3 badges · 11. `<PdpSocialProof />` · 12. WhatsApp · 13. Acordeones CERRADOS
- ⚠️ `TIER_SELECTOR_SLUGS` (hoy solo `perlas-originales-500-g`) muestra `ProductQuantityTiers` **EN LUGAR DE** `ProductAddOns` → esa PDP no tiene cross-sell.
- **SELECTOR DE VARIANTES**: `optionLabel(name, slug)` renombra "Color" → **"Color de la cera"**, excepto en `CONTAINER_ONLY_SLUGS`.
- **`src/components/PdpTrust.tsx`** exporta `getDeliveryRange()`, `DeliveryEstimate`, `PdpSocialProof({ slug?, linkable? })`.
- **📄 ORDEN OFICIAL DE LA PDP** (`ProductStorySections.tsx`): garantías → `ProductStepsCarousel` → reseñas → bloques editoriales → tabla comparativa → FAQ → CTA de cierre
- **📐 RATIO DE IMAGEN DE PRODUCTO = 4:5 (1122×1402 px)** + `object-cover`.
- **`ProductStepsCarousel.tsx`** es compartido PDP + landing. Props: `steps`, `title`, `eyebrow`, `id`, `bleed`, `background`, `footer`.

### 🏠 LANDING (`src/pages/ui/IndexUI.tsx`) — orden oficial
1. Hero · 2. Tira de beneficios (`grid-cols-4`, 1 fila) · 3. Cómo funciona (`ProductStepsCarousel bleed={false}`) · 4. **Elige tu vela** (`SHOP_CARDS`, 6 tarjetas 4:5) · 5. `<Reviews />` · 6. Elige tu tono (carrusel snap) · 7. `<CasaRealSection />` · 8. `<BrandStorySection />` · 9. FAQ · 10. Cierre newsletter + WhatsApp
- ⚠️ **Prohibido duplicar SKUs en varias secciones.** Precios y títulos SIEMPRE dinámicos vía `buildCatalog(logic.products)`.

### 🧾 CHECKOUT (`src/pages/ui/CheckoutUI.tsx`) — reglas fijas
- Header minimal, solo logo. Sin nav, sin top bar promocional.
- Móvil: `MobileOrderSummary` (CERRADO) → `ShippingPromise` → `PdpSocialProof linkable={false}` → SSL → PayPal → wallets → email → dirección → aviso MSI → tarjeta → estrellas → CTA → badges + WhatsApp.
- `ShippingPromise` resuelve el envío desde el primer render. **Nunca volver a poner "Pendiente".**
- `CouponSection` colapsado y gris al final del resumen. **Prohibido exponer el input abierto.**
- 🔒 **EL CHECKOUT NO SE TOCA EN EL REDISEÑO HIGH END.** Solo hereda tokens. Cero cambios estructurales.

---

## 3. Active Plan — REDISEÑO "HIGH END" INSPIRADO EN SENSATE

**Estado**: ✅ Fase 1 IMPLEMENTADA (2026-08-20). Fases 2, 3 y 4 pendientes.
**Referencia**: sensatehomes.com (Exhibea). **Idioma**: TODO en español de México.

### 3.0 REGLA MAESTRA
Elevar las **superficies de marca**, no tocar la **maquinaria de conversión**.
- ✅ SÍ elevar: hero, secciones editoriales, `CasaRealSection`, `BrandStorySection`, footer, tipografía, tratamiento de imagen, transiciones, galería de PDP.
- 🔒 NO tocar: buy box de la PDP (orden oficial intacto), checkout, `DeliveryEstimate`, `PdpSocialProof`, avisos MSI, envío gratis, WhatsApp.
- Si un cambio estético reduce claridad de precio, disponibilidad o envío → **no se hace**.
- Contexto de riesgo: Sensate vende a $95 USD con marca prestada de Beverly Hills. Dunaru vende a tráfico frío de Meta con 4.1% de ATC.

### 3.1 Diagnóstico: qué separa hoy a dunaru de Sensate
1. **Luz.** Sensate vive en penumbra cálida (noche, dorados). Dunaru es marfil a mediodía. ~70% de la diferencia percibida de precio.
2. **Cajas.** Dunaru encierra productos en tarjetas con borde/radius/shadow. Sensate no tiene ni una caja.
3. **Tipografía plana** vs. lockups de Sensate. → resuelto a nivel sistema en Fase 1.
4. **Ruido promocional**: 6 precios tachados + badges en un scroll.
5. **Densidad de microcopy**: Dunaru explica todo; Sensate guarda el detalle en acordeones.
6. **Ritmo**: Dunaru alterna dos claros casi iguales. Sensate alterna claro/oscuro/full-bleed.
7. **Movimiento**: `animate-fade-up` en carga vs. reveals lentos al scroll. → resuelto en Fase 1.

### 3.2 ✅ FASE 1 — Sistema de diseño (HECHA 2026-08-20)
Archivos tocados: `src/index.css`, `tailwind.config.ts`, `src/hooks/useReveal.ts` (nuevo), `src/components/Reveal.tsx` (nuevo), `ui/input.tsx`, `ui/textarea.tsx`.
Entregado: radius 0 + `rounded-field`, tokens `tabaco`/`cacao`, `.lockup`, `.eyebrow`, `.h-editorial`, `.transition-editorial`, `.reveal` + `<Reveal>`, `.full-bleed`, `.hairline`.
⚠️ **Pendiente de barrido**: los componentes siguen usando los eyebrows viejos (`text-xs font-semibold tracking-[0.2em]`) y `duration-500`. Se migran en Fase 2 y 3.

### 3.3 FASE 2 — Home (`src/pages/ui/IndexUI.tsx`) — SIGUIENTE
Mantener el orden de 9 secciones. Cambia el **tratamiento**, no la arquitectura.
1. **Hero**: `min-h-screen`. H1 a lockup: `CREA LUZ <em>en el</em> RECIPIENTE QUE YA AMAS`. Gradiente con `dunaru-tabaco`. CTA sharp, uppercase, `tracking-[0.12em]`, `text-xs`. **Conservar los dos CTA y el badge de MSI + envío gratis.**
2. **Tira de beneficios**: quitar iconos de Lucide, solo texto en versalitas + separadores hairline.
3. **Tarjetas "Elige tu vela"**: quitar borde, fondo y hover-shadow. Imagen 4:5 a sangre + eyebrow/título/precio debajo. Hover = zoom 700ms sin sombra. Badges a texto plano `text-[10px] tracking-[0.2em]` sobre la imagen. **Quitar "Mejor valor"**, dejar solo "Más elegido".
4. **Precios tachados**: a `text-[11px] text-foreground/35`. Silenciar, no eliminar.
5. **NUEVA sección oscura full-bleed "El ritual"** entre "Elige tu vela" y `<Reviews />`: fondo `dunaru-tabaco`, frase en lockup grande, imagen a sangre de vela encendida de noche, link fino subrayado. Copy: `EN UN MUNDO QUE VA MUY RÁPIDO, <em>te invitamos a</em> ENCENDER DESPACIO.`
6. **"Elige tu tono"**: `aspect-[3/4]`, gradiente más profundo, nombre en lockup. **Depende de fotos nuevas (3.5).**
7. **`CasaRealSection`**: full-bleed real, 4 escenas a sangre, texto flotando en marfil.
8. **`BrandStorySection`** — variante **materia y oficio, sin rostros**: 2 columnas asimétricas, imagen grande a sangre. Sujetos: manos anónimas vertiendo gránulos, macro de la cera, mecha encendiéndose, taller, vela en casa real de noche. Voz en "nosotros". Copy en 3 bloques: qué es la cera perlada · por qué rellenable en vez de desechable · qué pasa en tu casa cuando la enciendes. Fondo posible `dunaru-cacao` (validar ritmo claro/oscuro contra 3.3.5).
9. **Cierre newsletter**: fondo `dunaru-tabaco`, input hairline, botón texto uppercase.

### 3.4 FASE 3 — PDP (`ProductPageUI.tsx` + `ProductStorySections.tsx`)
🔒 **El orden del buy box NO cambia.** Solo tratamiento visual + dos añadidos.
1. **Galería** a sangre en móvil, sin borde ni radius. En desktop, columna apilada con scroll si el esfuerzo lo permite.
2. **Título** a lockup. Precio en `font-body`, discreto.
3. **Acordeones** renombrados a lenguaje de ritual, cerrados: `El ritual` · `Cuidado y seguridad` · `Materiales y medidas` · `Atención a clientes` (WhatsApp real dentro).
4. **NUEVO "Combina bien con"**: `ProductAddOns` como fila editorial de 3 productos con "Agregar" inline, **debajo del buy box** → resuelve la falta de cross-sell en `perlas-originales-500-g`.
5. **Bloque de cierre oscuro** al final (mismo componente que 3.3.5).

### 3.5 FASE 4 — Arte y fotografía (LA PALANCA MÁS GRANDE)
El 70% del efecto Sensate es dirección de arte. Sin esto, las fases 1 a 3 rinden la mitad.
- Set de **imágenes atmosféricas nocturnas**: penumbra, luz dorada, interiores saturados (madera, lino, cerámica), sombras largas.
- ⛔ **SIN ROSTROS.** Manos, siluetas, objetos e interiores.
- Slots: (a) hero desktop + móvil, (b) sección oscura "El ritual", (c) 3 ambientes para "Elige tu tono", (d) 2 editoriales de materia/oficio para `BrandStorySection`.
- Generar con `imagegen--generate_image` + `reference_images` de productos reales. Cargar antes la skill `media.product-imagery`.
- ⚠️ **Las fotos de producto del catálogo (4:5, fondo claro) NO se cambian.** Las usan los anuncios de Meta.

### 3.6 Lo que NO copiamos de Sensate
- ❌ Founder-led storytelling (descartado por el owner).
- ❌ Grid de "6 sentidos" con marquee infinito.
- ❌ Esconder el precio o quitar los tachados.
- ❌ Quitar badges de confianza, MSI y envío gratis.
- ❌ Su densidad de texto casi nula en la PDP.
- ❌ Video en loop en el hero (pendiente del video real del owner).

### 3.7 Medición
Volumen insuficiente para A/B (122 usuarios/mes en la PDP principal). Medición secuencial con `posthog-query`:
- Capturar baseline de `viewcontent → addtocart` móvil, scroll depth en `/` y tiempo en página.
- 14 días después del deploy: comparar. Si ATC móvil cae por debajo de 3.5%, revertir badges y densidad primero.

---

## 4. Recent Changes
- 2026-08-20 — ✅ **FASE 1 DEL REDISEÑO HIGH END IMPLEMENTADA**: `--radius: 0rem` global con excepción `rounded-field` para inputs/textarea, tokens `dunaru-tabaco`/`dunaru-cacao`, utilidades `.lockup`, `.eyebrow`, `.h-editorial`, `.transition-editorial`, `.full-bleed`, `.hairline`. Nuevos `src/hooks/useReveal.ts` y `src/components/Reveal.tsx`.
- 2026-08-20 — ⛔ **DECISIÓN: dunaru NO será founder-led.** `BrandStorySection` se reencuadra como historia de materia y oficio, sin rostros. Las 2 imágenes sueltas del hilo quedan descartadas.
- 2026-08-20 — 📐 **PLAN DE REDISEÑO "HIGH END" (Sensate)** por 4 fases con regla maestra "elevar marca, no tocar conversión".
- 2026-08-07 — 🔍 **AUDITORÍA PDP `perlas-originales-500-g`**. 8 hallazgos. Detalle en `.lovivo/cro-log.md`.
- 2026-08-07 — ✅ **AUDITORÍA DE LANDING MÓVIL**: 13 secciones → 9. Scroll móvil ≈ 40% más corto.
- 2026-08-07 — ✅ **CLARIDAD DE VARIANTE + CERÁMICA**: `optionLabel()` → "Color de la cera".
- 2026-08-07 — ✅ **AUDITORÍA DE CHECKOUT**: `ShippingPromise`, resumen móvil cerrado, `CouponSection`, MSI bajo el Total.
- 2026-08-07 — ✅ **AUDITORÍA PDP kit-vaso-de-vidrio**: `DeliveryEstimate`, `PdpSocialProof`, acordeones cerrados.
- 2026-08-07 — ✅ **BUY BOX REDISEÑADO**: `PDP_BENEFITS`, cantidad compacta, CTA `h-12` con precio.
- 2026-08-07 — ✅ **PASOS EN CARRUSEL**: `ProductStepsCarousel.tsx`.
- 2026-08-07 — ✅ **PDP REORDENADA**: prueba social de la posición 5 a la 3.
- 2026-08-07 — ✅ **PDP más densa** + **`Reviews.tsx` compacto**.
- 2026-08-07 — ✅ **LANDING: precios y nombres desde la DB** (`buildCatalog`).
- 2026-08-07 — ✅ **HEADER OVERLAY** + **COPY sin guiones largos** + **TABLA COMPARATIVA**.
- 2026-07-31 — ✅ **RENOMBRE DE CATÁLOGO (9 productos, slugs intactos)**.

## 5. Image Inventory
- **📐 Todas las fotos de producto son 1122×1402 px (4:5), webp.** 9 productos, 75 imágenes en `product-images/products/`.
- ⚠️ **Foto #1 de `perlas-originales-500-g` = `x3azemqdof.webp`** (packshot de bolsa + cera suelta). Candidata #1 a reemplazo.
- **Colecciones**: sin imagen asignada. **FAVICON**: `/favicon.png` (256x256).
- **UGC de clientas** (5 fotos): constante `UGC` en `src/data/reviews.ts`.
- **Hero desktop**: `/hero-dunaru.webp` · **Hero móvil**: `/hero-dunaru-mobile.webp` · **Casa real**: `/casa-real-{sala,comedor,recibidor,recamara}.webp`
- **4 PASOS** — base `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/`:
  - Vierte → `/paso-vierte.webp` · Inserta → `1785521743155-htw95tvbi4b.webp` · Enciende → `1785521743156-3qeskqe43gv.webp` · Renueva → `/paso-renueva.webp`
- **Bloque aroma** → `1785521743156-7ucg5c0kwb7.webp`
- 🟡 `/pdp-vaso-decor.webp` quedó huérfana.
- 🔴 **FALTA: video demo del mecanismo** (lo genera el user).
- 🟡 Los `steps` de `kit-vaso-de-concreto` siguen usando `PLACEHOLDER`.
- 🔴 **FALTAN las imágenes atmosféricas nocturnas de la Fase 4** (hero nuevo, "El ritual", 3 tonos de ambiente, 2 editoriales de materia/oficio). **SIN ROSTROS.** Bloquean el 70% del efecto.
- ⛔ Las imágenes `1786132713652-czg3jwwtcrv.webp` y `1786129807292-5eb2uq5pl0m.webp` fueron **DESCARTADAS por el owner**.

## 6. Known Issues
- 2026-08-20 — 🟡 **Barrido de radius pendiente**: hay componentes con `rounded-full`, `rounded-[Npx]` y `rounded-xl/2xl` hardcodeados que NO se vieron afectados por `--radius: 0`. Revisar caso por caso en Fases 2 y 3 (los círculos se conservan a propósito).
- 2026-08-20 — 🟠 **Riesgo del rediseño high end**: quitar cajas, badges y bajar densidad puede reducir el ATC móvil (hoy 4.1%). Mitigación en 3.0 y 3.7.
- 2026-08-07 — 🔴 **`perlas-originales-500-g` se llama "Recarga"** y recibe el grueso del tráfico frío de Meta.
- 2026-08-07 — 🟠 **Sin cross-sell en `perlas-originales-500-g`**. → Se resuelve en 3.4 punto 4.
- 2026-08-07 — 🟠 **Escalera de precio por gramo rota**: Dúo 1 kg ($1.10/g) más caro que Reserva 1 kg ($0.80/g).
- 2026-08-07 — 🟡 `getReviewStats()` es global (4.9/15) para todas las fichas, no por SKU.
- 2026-08-07 — 🟡 Las fotos de `TONOS` en la landing son packshots, no escenas de ambiente.
- 2026-08-07 — 🟠 **SLUG `kit-vaso-de-concreto` es incorrecto**. Decisión: dejarlo (rompería los anuncios de Meta).
- 2026-08-07 — 🟠 **"+200 clientes felices" sin verificar** contra órdenes reales.
- 2026-08-07 — 🟡 `ShippingPromise` asume envío gratis cuando `shippingCost === 0`.
- 2026-08-07 — 🟠 Los títulos del catálogo en la DB contienen guion largo.
- 2026-08-07 — 🟡 `PDP_BENEFITS` solo cubre 6 slugs.
- 2026-07-31 — 🟠 Footer de `EcommerceTemplate.tsx`: 3 nombres de producto hardcodeados.
- 2026-07-31 — 🔴 `ecommerce--update-product` NO persiste `compare_at_price`. Workaround: Dashboard manual.
- 2026-07-31 — 🟡 `lov-search-files` devuelve 0 resultados incluso para strings triviales. Usar `lov-view` con rutas directas.
- 2026-07-31 — 🟡 Autocapture de clics parece desactivado en PostHog.
- 2026-07-06 — 🔴 `meta-capi` edge function falla en preview.

## 7. Pending / Future Sessions
- [ALTA] **Ejecutar FASE 2 (home)**: hero lockup, tarjetas sin caja, sección oscura "El ritual", `BrandStorySection` materia/oficio.
- [ALTA] Capturar baseline de PostHog (ATC móvil, scroll depth, tiempo en página) antes de medir el impacto.
- [ALTA] Generar el set de imágenes atmosféricas de la Fase 4 (sin rostros). Bloquea la calidad de la Fase 2.
- [ALTA] Ejecutar P0 de la PDP de perlas (renombrar sin "Recarga", foto #1 = resultado, bloque "¿te sirve tu recipiente?", tiers como "elige tus tonos"). **Combinable con la Fase 3.**
- [ALTA] `PDP_BENEFITS` para bowl-negro, vaso-extra-transparente y pack-30-mechas.
- [ALTA] Footer de `EcommerceTemplate.tsx`: nombres de producto → dinámicos.
- [ALTA] User: redirigir anuncios Meta al Kit Vela Rellenable · Vaso de Vidrio.
- [ALTA] VIDEO DEMO (lo graba el user) → primer slide del carrusel de pasos.
- [MED] Fotos reales para los `steps` de kit-vaso-de-concreto.
- [MED] Encuesta PostHog de salida en `/pagar` y en la PDP de perlas.
- [MED] Reseñas: pedir al owner los nombres reales de clientas antes de escalar pauta.
- [MED] CTA del hero de `IndexUI.tsx` → `/productos/kit-vaso-de-vidrio`.
- [MED] Barrer el resto del sitio buscando guiones largos (—) en copy.
- [BAJA] Banners de colección y borrar imágenes huérfanas.