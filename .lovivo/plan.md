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
- 🆕 **DIRECCIÓN DE MARCA 2026-08-20: subir a registro "high end" / editorial atmosférico.** Referencia aprobada por el owner: **sensatehomes.com** (agencia Exhibea). Ver sección 3.
- ⛔ **2026-08-20 DECISIÓN DEL OWNER: la marca NO es founder-led. La owner NO quiere aparecer como fundadora (ni retrato, ni voz en primera persona, ni página "sobre mí" personal).** El storytelling se construye con producto, materia prima, manos anónimas, taller y casa. NO volver a proponer contenido de fundadora.
- Pagos: **A meses sin intereses vía Stripe** (hasta 6 meses). ⚠️ NUNCA nombrar "Stripe" ni "Mercado Pago" en la UI.
- Envío: **ENVÍO GRATIS A TODO MÉXICO, SIN MÍNIMO.**
- WhatsApp REAL: `525531215386` (+52 55 3121 5386).
- REGLA DE INTEGRIDAD: **NUNCA reseñas falsas.** Las 15 reseñas SÍ son reales. Prueba social usa `getReviewStats()` (4.9 / 15).
- ⚠️ "+200 clientes felices" (top bar y `PdpSocialProof`): dato del owner, NO verificado contra la DB.
- REGLA DE INTEGRIDAD (precios): **NUNCA inventar precios tachados.**
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`
- RUTAS EN ESPAÑOL: producto = `/productos/:slug`, paquete = `/paquete/:slug`, carrito = `/carrito`, checkout = `/pagar`, categoría = `/categorias/:handle`.
- Competencia: **VelaVita.cl** y **Foton (US)**. Referencia de UI de PDP: **rodata.mx**. 🆕 Referencia de ARTE/MARCA: **sensatehomes.com**.
- ⚠️ **kit-vaso-de-concreto** es en realidad de **CERÁMICA**. El slug no se puede cambiar con las tools. Todo el COPY visible ya dice cerámica.
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
- Display: Instrument Serif → `font-display` · Body/UI: Manrope → `font-body`
- Tokens: `dunaru-marfil/arena/champagne/carbon/onix/ambar`
- Estética: editorial, mínima, mucho aire. Mobile-first. **Pero en PDP, landing y checkout la densidad gana al aire.**
- 🆕 **AMPLIACIÓN "HIGH END" pendiente de implementar (ver sección 3): tokens oscuros nuevos, radius 0, lockups tipográficos, secciones full-bleed oscuras.**
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
- 🔒 **EL CHECKOUT NO SE TOCA EN EL REDISEÑO HIGH END.** Solo hereda tokens (radius, tipografía). Cero cambios estructurales.

---

## 3. Active Plan — 🆕 REDISEÑO "HIGH END" INSPIRADO EN SENSATE

**Estado**: plan aprobado por el owner el 2026-08-20. Preguntas abiertas RESUELTAS (ver 3.0b). **Sin implementar.** Ejecutar por fases en Craft Mode.
**Referencia**: sensatehomes.com (Exhibea). Analizada home + PDP `alchemy-candle` el 2026-08-20 vía `lov-fetch-website`.
**Idioma**: TODO en español de México. Nada de copy en inglés.

### 3.0 Tensión central que hay que respetar
Dunaru hoy está optimizada para conversión (densidad, badges, precios tachados, tira de beneficios, CTA sólidos). Sensate está optimizada para deseo (aire, oscuridad, tipografía, cero ruido promocional). **Sensate puede permitírselo porque vende a $95 USD con marca prestada de The Beverly Hills Estates. Dunaru vende a tráfico frío de Meta con 4.1% de ATC.**

**REGLA MAESTRA DEL REDISEÑO**: elevar las **superficies de marca**, no tocar la **maquinaria de conversión**.
- ✅ SÍ elevar: hero, secciones editoriales, `CasaRealSection`, `BrandStorySection`, footer, tipografía, tratamiento de imagen, transiciones, galería de PDP.
- 🔒 NO tocar: buy box de la PDP (orden oficial intacto), checkout, `DeliveryEstimate`, `PdpSocialProof`, avisos MSI, envío gratis, WhatsApp.
- Si un cambio estético reduce claridad de precio, disponibilidad o envío → **no se hace**.

### 3.0b Decisiones cerradas del owner (2026-08-20)
1. ⛔ **NADA de founder-led storytelling.** La owner no quiere aparecer. No retrato, no primera persona, no página "sobre la fundadora". → `BrandStorySection` se resuelve como **historia de MATERIA y OFICIO**: manos anónimas trabajando la cera, macro de los gránulos, el taller, la vela encendida en una casa real. Voz de marca en tercera persona / "nosotros". **La Fase 2.8 queda desbloqueada con esta variante.**
2. 🗑️ **Las 2 imágenes sueltas del hilo (`1786132713652-czg3jwwtcrv.webp`, `1786129807292-5eb2uq5pl0m.webp`) se IGNORAN.** No usarlas en ningún slot. Descartadas por el owner.

### 3.1 Diagnóstico visual: qué separa hoy a dunaru de Sensate
Comparación de screenshots (home dunaru mobile+desktop vs home y PDP Sensate):
1. **Luz.** Sensate vive en penumbra cálida: interiores saturados, dorados, velas encendidas de noche. Dunaru es todo marfil claro con luz de mediodía. Esto por sí solo explica ~70% de la diferencia percibida de precio.
2. **Cajas.** Dunaru encierra cada producto en una tarjeta con borde, radius y hover-shadow. Sensate no tiene ni una sola caja: la imagen sangra y el texto flota.
3. **Tipografía plana.** Dunaru usa serif solo para títulos, todo en sentence case. Sensate construye "lockups": VERSALITAS con tracking amplio + palabra en *itálica minúscula* ("WHERE SPACE *becomes* SANCTUARY").
4. **Ruido promocional.** 6 precios tachados visibles en un scroll + badges "Más elegido"/"Mejor valor" + badge verde MSI. Sensate no muestra ni un solo descuento.
5. **Densidad de microcopy.** Dunaru explica todo el tiempo. Sensate confía en la imagen y guarda el detalle en acordeones.
6. **Ritmo.** Dunaru alterna marfil/arena (dos claros casi iguales) → todo se siente igual. Sensate alterna claro/oscuro/full-bleed → hay respiración y clímax.
7. **Movimiento.** Dunaru usa `animate-fade-up` en carga. Sensate usa video en loop y reveals lentos al hacer scroll.

### 3.2 FASE 1 — Sistema de diseño (base de todo lo demás)
Archivos: `src/index.css`, `tailwind.config.ts`
1. **Radius a 0.** `--radius: 0.375rem` → `0rem`. Barrer `rounded-sm` / `rounded` en componentes de marca. Excepción: inputs del checkout y avatares/swatches circulares.
2. **Nuevos tokens oscuros** (para las secciones editoriales full-bleed):
   - `--dunaru-tabaco: 24 22% 14%` (marrón cálido profundo, para fondos atmosféricos)
   - `--dunaru-cacao: 22 26% 22%` (medio, para gradientes)
   - Registrarlos en `tailwind.config.ts` como `dunaru-tabaco` / `dunaru-cacao`.
3. **Lockup tipográfico editorial.** Nueva utilidad en `index.css`:
   - `.lockup` → `font-display`, `uppercase`, `tracking-[0.14em]`, `leading-[1.15]`
   - `.lockup em` → `italic lowercase tracking-normal` (para la palabra conectora)
   - Uso: `<h2 className="lockup">DONDE LA CASA <em>se vuelve</em> SANTUARIO</h2>`
4. **Eyebrows más finos**: crear `.eyebrow` = `font-body text-[10px] font-medium uppercase tracking-[0.28em] text-dunaru-champagne`. Hoy están en `text-xs font-semibold tracking-[0.2em]` (demasiado gordos). Reemplazar en landing y PDP.
5. **Transiciones lentas**: utilidad `.transition-editorial` = `transition-all duration-700 ease-out`. Cambiar los `duration-500` de las imágenes de producto.
6. **Reveal on scroll**: crear hook `src/hooks/useReveal.ts` con IntersectionObserver + utilidad `.reveal` / `.reveal-in` (opacity 0 → 1, translateY 24px → 0, 900ms). Aplicar a títulos de sección y bloques editoriales. Respetar `prefers-reduced-motion`.
7. **Escala tipográfica del display más grande en desktop**: los h2 de sección pasan de `text-3xl sm:text-4xl` a `text-3xl sm:text-5xl lg:text-6xl` en secciones de marca (no en las de commerce).

### 3.3 FASE 2 — Home (`src/pages/ui/IndexUI.tsx`)
Mantener el orden de 9 secciones ya optimizado. Cambia el **tratamiento**, no la arquitectura.
1. **Hero**: subir a `min-h-screen`. H1 pasa a lockup: `CREA LUZ <em>en el</em> RECIPIENTE QUE YA AMAS` (o mantener el actual si el owner prefiere claridad; A/B no es viable por volumen, decidir a mano). Gradiente más profundo usando `dunaru-tabaco` en vez de `dunaru-carbon`. CTA primario: sharp corners, uppercase, `tracking-[0.12em]`, `text-xs`. **Conservar los dos CTA y el badge de MSI + envío gratis.**
2. **Tira de beneficios**: quitar iconos de Lucide (se ven genéricos), dejar solo texto en versalitas con tracking amplio, separadores hairline. Fondo `dunaru-arena` → mantener.
3. **Tarjetas de "Elige tu vela"**: **quitar borde, fondo de tarjeta y hover-shadow.** Imagen 4:5 a sangre + debajo: eyebrow, título, precio. Hover = zoom lento 700ms, sin sombra. Badges: de píldora rellena a texto plano uppercase `text-[10px] tracking-[0.2em]` en la esquina, sobre la imagen. **Quitar el badge "Mejor valor"** (dos badges compiten), dejar solo "Más elegido".
4. **Precios tachados**: reducirlos a `text-[11px] text-foreground/35`, sin peso. No eliminarlos (son reales y ayudan), solo silenciarlos.
5. **NUEVA sección oscura full-bleed "El ritual"** entre "Elige tu vela" y `<Reviews />`: fondo `dunaru-tabaco`, una sola frase en lockup grande centrada, una imagen a sangre de vela encendida de noche, un link fino subrayado. Es el clímax visual que hoy no existe. Copy propuesto: `EN UN MUNDO QUE VA MUY RÁPIDO, <em>te invitamos a</em> ENCENDER DESPACIO.` (sin guiones largos).
6. **"Elige tu tono"**: ya es carrusel; subir la imagen a `aspect-[3/4]`, gradiente más profundo, nombre del tono en lockup. **Depende de fotos nuevas (ver 3.5).**
7. **`CasaRealSection`**: convertir a full-bleed real (romper el `max-w-7xl`), con las 4 escenas a sangre y el texto flotando encima en marfil.
8. **`BrandStorySection`** ✅ **DESBLOQUEADA con variante SIN fundadora** (decisión 3.0b.1). Reencuadrar como **historia de materia y oficio**, con la misma ambición editorial de Sensate pero sin persona:
   - Layout editorial a 2 columnas asimétricas, imagen grande a sangre por un lado.
   - Sujetos fotográficos permitidos: manos anónimas vertiendo los gránulos, macro de la cera tipo arena, mecha encendiéndose, el taller, la vela terminada en una casa real de noche. **Nunca un rostro identificable.**
   - Voz: tercera persona / "nosotros". Nada de "yo fundé", "mi casa", "mi historia".
   - Estructura de copy sugerida (3 bloques cortos, sin guiones largos): qué es la cera perlada · por qué rellenable en vez de desechable · qué pasa en tu casa cuando la enciendes.
   - Fondo: puede ser el segundo momento oscuro de la home (`dunaru-cacao`) si "El ritual" (3.3.5) queda muy lejos en el scroll. Validar ritmo claro/oscuro completo antes de decidir.
9. **Cierre newsletter**: fondo `dunaru-tabaco`, input hairline sin caja, botón texto uppercase.

### 3.4 FASE 3 — PDP (`ProductPageUI.tsx` + `ProductStorySections.tsx`)
🔒 **El orden del buy box NO cambia.** Solo tratamiento visual + dos añadidos.
1. **Galería**: imágenes a sangre en móvil (romper padding lateral), sin borde ni radius. En desktop, columna de imágenes apiladas con scroll (patrón Sensate) en vez de miniaturas, si el esfuerzo lo permite; si no, dejar miniaturas pero sin borde.
2. **Título del producto** a lockup (versalitas + tracking). Precio en `font-body`, discreto, al estilo Sensate.
3. **Acordeones**: renombrar a lenguaje de ritual y mantenerlos cerrados. Sensate usa: Fragrance Notes / Care / Materials & Size / Customer Care. Equivalente dunaru: `El ritual` · `Cuidado y seguridad` · `Materiales y medidas` · `Atención a clientes` (con el WhatsApp real dentro).
4. **NUEVO bloque "Combina bien con"** (= "Pairs well with" de Sensate): reutilizar `ProductAddOns` pero presentado como fila editorial de 3 productos con botón "Agregar" inline. **Esto también resuelve el issue conocido de que `perlas-originales-500-g` no tiene cross-sell**: mostrarlo DEBAJO del buy box, para que conviva con `ProductQuantityTiers` en vez de sustituirlo.
5. **Bloque de cierre oscuro** al final de la PDP (mismo componente que 3.3.5 de la home) para que la ficha no termine en FAQ blanco.

### 3.5 FASE 4 — Arte y fotografía (LA PALANCA MÁS GRANDE)
El 70% del efecto Sensate es dirección de arte, no código. Sin esto, las fases 1 a 3 rinden la mitad.
- Necesitamos un set de **imágenes atmosféricas nocturnas**: vela encendida en penumbra, luz dorada, interiores saturados (madera, lino, cerámica), sombras largas. Nada de fondo beige plano a mediodía.
- ⛔ **Restricción de casting: SIN ROSTROS.** Manos, siluetas, objetos e interiores solamente. Deriva de la decisión 3.0b.1.
- Slots prioritarios: (a) hero nuevo desktop + móvil, (b) imagen de la sección oscura "El ritual", (c) 3 fotos de ambiente para "Elige tu tono" (hoy son packshots, ya listado en Known Issues), (d) 2 imágenes editoriales de materia/oficio para `BrandStorySection` (manos + macro de cera).
- Generar en Craft Mode con `imagegen--generate_image` usando `reference_images` de los productos reales para mantener consistencia. Cargar antes la skill `media.product-imagery`.
- ⚠️ **Las fotos de producto del catálogo (4:5, fondo claro) NO se cambian.** Son las que usan los anuncios de Meta y las que dan claridad de producto. Lo atmosférico va en las secciones editoriales.

### 3.6 Lo que NO copiamos de Sensate (decisiones explícitas)
- ❌ **Su founder-led storytelling** (retrato de Rayni, About editorial personal): descartado por el owner el 2026-08-20. Se sustituye por historia de materia y oficio.
- ❌ Su grid de "6 sentidos" con marquee infinito: es puro branding, no aporta a un catálogo de 9 SKUs.
- ❌ Esconder el precio o quitar los tachados: dunaru compite por valor, no por prestigio.
- ❌ Quitar los badges de confianza, MSI y envío gratis: son los que sostienen el 4.1% actual.
- ❌ Su densidad de texto casi nula en la PDP: nuestro producto necesita explicación (nadie sabe qué es una vela rellenable).
- ❌ Video en loop en el hero: pendiente hasta que el owner grabe el video demo real.

### 3.7 Medición
Volumen insuficiente para A/B (122 usuarios/mes en la PDP principal). Medición secuencial con `posthog-query`:
- Antes de la Fase 1: capturar baseline de `viewcontent → addtocart` móvil, scroll depth en `/`, y tiempo en página.
- 14 días después del deploy: comparar. Si ATC móvil cae por debajo de 3.5%, revertir badges y densidad primero (son lo primero que se sospecha).

---

## 4. Recent Changes
- 2026-08-20 — ⛔ **DECISIÓN: dunaru NO será founder-led.** La owner no quiere aparecer. `BrandStorySection` se reencuadra como historia de materia y oficio (manos, macro de cera, taller, casa), sin rostros. Fase 2.8 desbloqueada. Las 2 imágenes sueltas del hilo quedan descartadas.
- 2026-08-20 — 📐 **PLAN DE REDISEÑO "HIGH END" (Sensate)**. Analizada home + PDP de sensatehomes.com. Plan por 4 fases con regla maestra "elevar marca, no tocar conversión". Sin implementar.
- 2026-08-07 — 🔍 **AUDITORÍA PDP `perlas-originales-500-g`** (sin cambios). 8 hallazgos + análisis de velavita.cl y fotoncandle.com. Detalle completo en `.lovivo/cro-log.md`.
- 2026-08-07 — ✅ **AUDITORÍA DE LANDING MÓVIL**: 13 secciones → 9. Scroll móvil ≈ 40% más corto.
- 2026-08-07 — ✅ **CLARIDAD DE VARIANTE + CERÁMICA**: `optionLabel()` → "Color de la cera"; barrido "concreto" → "cerámica".
- 2026-08-07 — ✅ **AUDITORÍA DE CHECKOUT**: `ShippingPromise`, resumen móvil cerrado, `CouponSection`, MSI bajo el Total.
- 2026-08-07 — ✅ **AUDITORÍA PDP kit-vaso-de-vidrio**: `DeliveryEstimate`, `PdpSocialProof`, acordeones cerrados.
- 2026-08-07 — ✅ **BUY BOX REDISEÑADO**: `PDP_BENEFITS`, cantidad compacta, CTA `h-12` con precio.
- 2026-08-07 — ✅ **PASOS EN CARRUSEL**: `ProductStepsCarousel.tsx`.
- 2026-08-07 — ✅ **PDP REORDENADA**: prueba social de la posición 5 a la 3.
- 2026-08-07 — ✅ **PDP más densa** + **`Reviews.tsx` compacto**.
- 2026-08-07 — ✅ **LANDING: precios y nombres desde la DB** (`buildCatalog`).
- 2026-08-07 — ✅ **HEADER OVERLAY** + **COPY sin guiones largos** + **TABLA COMPARATIVA**.
- 2026-07-31 — ✅ **RENOMBRE DE CATÁLOGO (9 productos, slugs intactos)**.
- 2026-07-31 — 🔍 **AUDITORÍA CRO COMPLETA**. Embudo móvil: 151 → 6 al carrito (4%) → 0 compras.

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
- 🆕 2026-08-20 — **FALTAN las imágenes atmosféricas nocturnas de la Fase 4** (hero nuevo, sección "El ritual", 3 tonos de ambiente, 2 editoriales de materia/oficio). **SIN ROSTROS.** Sin ellas el rediseño rinde la mitad.
- ⛔ 2026-08-20 — Las imágenes `1786132713652-czg3jwwtcrv.webp` y `1786129807292-5eb2uq5pl0m.webp` fueron **DESCARTADAS por el owner**. No usarlas ni volver a preguntar por ellas.

## 6. Known Issues
- 2026-08-20 — 🟠 **Riesgo del rediseño high end**: quitar cajas, badges y bajar densidad puede reducir el ATC móvil (hoy 4.1%). Mitigación en 3.0 y 3.7.
- 2026-08-07 — 🔴 **`perlas-originales-500-g` se llama "Recarga"** y recibe el grueso del tráfico frío de Meta. Producto de recompra vendido a gente que nunca ha comprado.
- 2026-08-07 — 🟠 **Sin cross-sell en `perlas-originales-500-g`**: `TIER_SELECTOR_SLUGS` sustituye `ProductAddOns` por `ProductQuantityTiers`. → Se resuelve en la Fase 3.4 punto 4.
- 2026-08-07 — 🟠 **Escalera de precio por gramo rota**: Dúo 1 kg ($1.10/g) más caro que Reserva 1 kg ($0.80/g).
- 2026-08-07 — 🟡 `getReviewStats()` es global (4.9/15) para todas las fichas, no por SKU.
- 2026-08-07 — 🟡 Las fotos de `TONOS` en la landing son packshots, no escenas de ambiente.
- 2026-08-07 — 🟠 **SLUG `kit-vaso-de-concreto` es incorrecto** (el producto es de cerámica). Decisión: **dejarlo** (rompería los anuncios de Meta).
- 2026-08-07 — 🟠 **"+200 clientes felices" sin verificar** contra órdenes reales.
- 2026-08-07 — 🟡 `ShippingPromise` asume envío gratis cuando `shippingCost === 0`.
- 2026-08-07 — 🟠 Los títulos del catálogo en la DB contienen guion largo.
- 2026-08-07 — 🟡 `PDP_BENEFITS` solo cubre 6 slugs.
- 2026-07-31 — 🟠 Footer de `EcommerceTemplate.tsx`: 3 nombres de producto hardcodeados.
- 2026-07-31 — 🔴 `ecommerce--update-product` NO persiste `compare_at_price`. Workaround: Dashboard manual.
- 2026-07-31 — 🟡 `lov-search-files` devuelve 0 resultados incluso para strings triviales. Usar `lov-view` con rutas directas.
- 2026-07-31 — 🟡 Autocapture de clics parece desactivado en PostHog.
- 2026-07-06 — 🔴 `meta-capi` edge function falla en preview (`Failed to send a request to the Edge Function`).

## 7. Pending / Future Sessions
- [ALTA] 🆕 Capturar baseline de PostHog ANTES de tocar nada (ATC móvil, scroll depth, tiempo en página).
- [ALTA] 🆕 Ejecutar FASE 1 del rediseño high end (tokens, radius 0, lockups, reveal on scroll). Es la base de todo.
- [ALTA] 🆕 Ejecutar FASE 2 (home). `BrandStorySection` con variante materia/oficio, sin rostros.
- [ALTA] Ejecutar P0 de la PDP de perlas (renombrar sin "Recarga", foto #1 = resultado, bloque "¿te sirve tu recipiente?", tiers como "elige tus tonos"). **Combinable con la Fase 3.**
- [ALTA] `PDP_BENEFITS` para bowl-negro, vaso-extra-transparente y pack-30-mechas.
- [ALTA] Footer de `EcommerceTemplate.tsx`: nombres de producto → dinámicos.
- [ALTA] User: redirigir anuncios Meta al Kit Vela Rellenable · Vaso de Vidrio.
- [ALTA] VIDEO DEMO (lo graba el user) → primer slide del carrusel de pasos.
- [MED] 🆕 Generar el set de imágenes atmosféricas de la Fase 4 (sin rostros).
- [MED] Fotos reales para los `steps` de kit-vaso-de-concreto.
- [MED] Encuesta PostHog de salida en `/pagar` y en la PDP de perlas.
- [MED] Reseñas: pedir al owner los nombres reales de clientas antes de escalar pauta.
- [MED] CTA del hero de `IndexUI.tsx` → `/productos/kit-vaso-de-vidrio`.
- [MED] Barrer el resto del sitio buscando guiones largos (—) en copy.
- [BAJA] Banners de colección y borrar imágenes huérfanas.