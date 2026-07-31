# Store Plan — dunaru
<!-- Auto-maintained by Lovivo AI. READ THIS FIRST. UPDATE IT LAST. -->

## 1. Brand & Context
- Brand name: **dunaru** (dunaru.mx)
- Product: Velas perladas **rellenables** — **gránulos finos de cera tipo arena** (NO perlas grandes) + mechas de algodón. Material visual = arena/couscous fino.
- ⚠️ VOCABULARIO: usar **"rellenable"** (NO "recargable").
- Tesis: no vendemos "cera para velas". Vendemos una forma simple de crear luz y decoración en el recipiente que ya tienes.
- **AROMA**: las velas nacen SIN perfume. Posicionamiento = **"el aroma lo eliges tú"** (feature, no carencia).
- Target: Mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO, decoración + hogar + regalo
- Market: México. Moneda MXN. Idioma: español de México.
- Tono: claro, cálido, directo. Sin tecnicismos.
- Pagos: **A meses sin intereses vía Stripe** (hasta 6 meses). ⚠️ NUNCA nombrar "Stripe" ni "Mercado Pago" en la UI — solo "a meses sin intereses" / "tarjetas participantes".
- Envío: Perlas Originales = +$99. Todo lo demás = gratis desde $899.
- WhatsApp REAL: `525531215386` (+52 55 3121 5386).
- REGLA DE INTEGRIDAD: **NUNCA reseñas falsas.** Las 15 reseñas SÍ son reales. Prueba social usa `getReviewStats()` (4.9 / 15).
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`
- RUTAS EN ESPAÑOL: producto = `/productos/:slug`, paquete = `/paquete/:slug`, carrito = `/carrito`, checkout = `/pagar`, **categoría = `/categorias/:handle`**.
- Competencia: **VelaVita.cl** (LATAM) y **Foton (US)**.
- ⚠️ **kit-vaso-de-concreto** es en realidad de **CERÁMICA**. Slug sigue diciendo "concreto".
- CATÁLOGO (precios MXN): Perlas Originales 500g $599 · Kit Vaso de Vidrio $899 · Reserva 1kg $999 · Dúo de Tonos $1,099 (de $1,398) · Kit bowl de Cerámica $1,099 · Trío de Tonos $1,499 (de $1,797) · Bowl negro $399 · Vaso extra transparente $249 · Pack 30 mechas $99.

## 2. Design System
- Fondo: Marfil #FAF6EF → `--background` · Alterno: Arena #F1E9DC → `bg-dunaru-arena`
- Texto: Carbón #2B2A27 → `--foreground` · Acento: Champagne #C2A878 → `text-dunaru-champagne`
- CTA: Ónix #1E1C1A → `--primary` · Detalle llama: Ámbar #D89A57 → `text-dunaru-ambar`
- Display: Instrument Serif → `font-display` · Body/UI: Manrope → `font-body`
- Tokens: `dunaru-marfil/arena/champagne/carbon/onix/ambar`
- Estética: editorial, mínima, mucho aire. Mobile-first.
- **MENÚ "Productos"**: dropdown en header (`EcommerceTemplate.tsx`) con `PRODUCT_CATEGORIES`.
- **PDP secciones** (`ProductStorySections.tsx`): driven por `PDP_CONTENT[slug]`. Esquema: garantías → "Crea tu vela en 4 pasos" (`HOW_IT_WORKS_STEPS`) → bloques editoriales → tabla comparativa → FAQ → Reviews.
- **`PERLAS_BENEFIT_BLOCKS`**: 5 bloques compartidos por perlas-originales-500-g, reserva-1-kg, d-o-de-tonos, tr-o-de-tonos.
- **4 PASOS duplicados en 2 lugares**: `HOW_IT_WORKS_STEPS` en `ProductStorySections.tsx` (PDP) y `STEPS` en `src/pages/ui/IndexUI.tsx` (landing "Cómo funciona"). ⚠️ Cambiar imágenes/textos SIEMPRE en ambos.
- **Categoría landing** (`src/pages/Collection.tsx`): grid 2/3 cols; handle `todos` = catálogo completo.
- **PDP arriba del fold** (`src/pages/ui/ProductPageUI.tsx` líneas ~330-430): galería `aspect-[4/5]` full-width en móvil → título → precio → línea MSI → rating → 4 badges genéricos → selectores → CTA. Sticky bar via `useInView` (`scrolledPastCta`) solo aparece DESPUÉS de scrollear más allá del CTA.

---

## 3. Active Plan — 🔴 AUDITORÍA CRO 2026-07-31: arreglar embudo de tráfico pagado

### Contexto: el problema NO es el tráfico, es la PDP de aterrizaje

**Datos PostHog (7 días reales de tráfico Meta, 2026-07-25 → 07-31):**

| Dispositivo | Personas | viewcontent | addtocart | initiatecheckout | purchase |
|---|---|---|---|---|---|
| **Mobile** | **156** | 212 | **8 (3.8%)** | 5 | **0** |
| Desktop | 16 | 84 | 9 | 9 | 1 (prueba del owner) |
| Tablet | 4 | 4 | 0 | 0 | 0 |

- Únicos que vieron producto en móvil: **151 → solo 6 agregaron al carrito = 4.0%**. Benchmark sano PDP móvil = 8–12%.
- 30d acumulado: 372 viewcontent → 23 addtocart (6.2%) → 20 initiatecheckout → **1 purchase**.
- **172 sesiones sin carrito · promedio de clics = 0.0 · 0% con errores JS.** No hay bug: la gente llega, mira, y se va SIN TOCAR NADA. Eso es problema de **mensaje/comprensión**, no técnico.
- Navegadores: Mobile Safari 37, Chrome 23, Facebook in-app 3.

**Páginas de aterrizaje del tráfico pagado (utm_medium=paid, utm_source=ig/fb):**
- `/productos/perlas-originales-500-g` → **59 personas desde instagram.com** + 15 m.facebook + 10 facebook + 4 threads
- `/productos/kit-vaso-de-concreto` → **57 personas desde instagram.com** + 6 m.facebook
- `/productos/kit-vaso-de-vidrio` → **solo 4 visitantes en total**

### 🔴 HALLAZGO #1 (el más grave): los anuncios mandan al producto equivocado
Casi el 100% del tráfico frío cae en dos PDP problemáticas para primera compra:
1. **Perlas Originales $599** = SOLO el relleno. El usuario frío no tiene recipiente, no sabe que necesita uno, y no sabe qué está comprando. **Y encima es el ÚNICO producto con envío +$99** (todo lo demás es gratis). Peor producto posible para tráfico frío.
2. **Kit bowl de Cerámica $1,099** = el más caro del catálogo. Ticket alto para una marca desconocida sin reseñas masivas.
3. El producto de entrada natural — **Kit Vaso de Vidrio $899, todo incluido, envío gratis** — recibió **4 visitantes**.

→ **ACCIÓN (Dashboard, no código):** redirigir el presupuesto de Meta al **Kit Vaso de Vidrio $899** como oferta de entrada. Mantener Cerámica $1,099 como segunda variante. **Sacar Perlas Originales $599 del tráfico frío** (dejarlo para retargeting/recompra).

### 🔴 HALLAZGO #2: arriba del fold en móvil no hay promesa, solo un producto
En iPhone (390×844): header (~64px) + galería `aspect-[4/5]` (~487px) = **~551px consumidos**. Lo primero y único que ve el usuario es: una foto de una bolsa de gránulos + "Perlas Originales 500 g" + "$599". **Cero explicación de qué es, para qué sirve o por qué importa.** El botón de comprar queda muy por debajo del fold, y la sticky bar solo aparece cuando el usuario ya scrolleó más allá del CTA (por diseño, `scrolledPastCta`).

→ **ACCIÓN (código):** ver "Implementación" abajo.

### 🔴 HALLAZGO #3: falta el video demo — el producto no se entiende con foto estática
Foton lidera con "TURN ANYTHING INTO A CANDLE" + video "How does it work?". VelaVita lidera con "Velas que no pierden su encanto después de usarlas" + secuencia visual de vertido. dunaru muestra una bolsa. El mecanismo (vierte → inserta → enciende → renueva) es **inherentemente cinético** y ya está pendiente desde hace semanas.

### 🟠 HALLAZGO #4: prueba social muy por debajo de la competencia
- VelaVita: 107 y 85 reseñas POR PRODUCTO, con estrellas en las tarjetas de catálogo, reseñas verificadas de Google con foto, bloque gigante en home.
- Foton: "THOUSANDS OF 5-STAR REVIEWS" + logos de prensa (New York Times, Country Living) + fotos de las fundadoras.
- dunaru: 4.9 (15 reseñas) reales, correcto, pero enterradas al final de una PDP larguísima y sin ningún refuerzo arriba del fold más allá de una línea pequeña.

### 🟠 HALLAZGO #5: el checkout sigue bajo sospecha
20 `initiatecheckout` → 1 `purchase` en 30 días, con **0 errores JS registrados**. El owner confirmó que él SÍ pudo comprar (07-28, desktop, CDMX). Pero 19 de 20 abandonos sin error de código apunta fuertemente a que la **tarifa de envío no cubre todo México** — solo la zona que el owner probó. Un usuario de Monterrey/Guadalajara/Mérida vería "No realizamos envíos a esa dirección" y se iría.
→ **ACCIÓN (Dashboard):** verificar en Configuración de Tienda → Envíos que exista una tarifa que cubra **todos los estados de México**, no solo CDMX. Probar el checkout con un CP de Monterrey (64000) y uno de Mérida (97000).

### ⚠️ Volumen: NO hacer A/B tests todavía
151 visitantes móviles/semana y ~6 conversiones. Muy por debajo del mínimo (~500 conv/semana). **Hacer cambios secuenciales y comparar periodos antes/después**, nunca split test.

---

### Implementación (Craft Mode) — orden de prioridad

#### PASO 1 — Bloque "promesa" arriba del fold en PDP móvil (mayor impacto, menor esfuerzo)
Archivo: `src/pages/ui/ProductPageUI.tsx`
1. En móvil, **antes** de la galería (`{/* Mobile: carousel */}`, ~línea 290), insertar un bloque compacto `md:hidden` con:
   - H1 del producto (mover el título arriba de la foto en móvil; ocultarlo en el bloque de abajo con `hidden md:block`).
   - **Subtítulo de promesa por slug** (nuevo mapa `PDP_HEADLINE: Record<string, string>`), ej:
     - `kit-vaso-de-vidrio`: "Enciende tu primera vela hoy. Cuando se acabe, la vuelves a llenar — no la tiras."
     - `kit-vaso-de-concreto`: "El objeto de diseño que nunca se acaba. Se rellena, no se tira."
     - `perlas-originales-500-g`: "Convierte cualquier recipiente que ya tienes en una vela. Hasta 120 horas de luz."
   - Rating compacto (`getReviewStats()`) en la misma línea.
2. Reducir la galería móvil de `aspect-[4/5]` a **`aspect-[4/3]`** (o `max-h-[52vh]`) para que la promesa + inicio del precio quepan en 844px.
3. **Sticky bar SIEMPRE visible en móvil**: cambiar la condición para que en `md:hidden` la barra con precio + "Agregar al carrito" aparezca desde el load (no esperar a `scrolledPastCta`). Mantener el comportamiento actual en desktop.

#### PASO 2 — Bloque "Qué incluye" inmediatamente debajo del precio
Archivo: `src/pages/ui/ProductPageUI.tsx` (después del bloque de precio/MSI, ~línea 397)
- Nuevo mapa `PDP_INCLUDES: Record<string, string[]>` con 3 bullets con check por slug. Ej. Kit Vaso de Vidrio: "Vaso de vidrio de diseño" · "500 g de cera perlada (≈120 h de luz)" · "30 mechas de algodón".
- Reemplazar los 4 badges genéricos ("Envío rápido", "Pago seguro") por 3 específicos y verificables: **"Envío gratis"** · **"Garantía 30 días"** · **"Hasta 6 meses sin intereses"**.
  - ⚠️ Para `perlas-originales-500-g` el badge debe decir el costo real de envío, NO "envío gratis".

#### PASO 3 — Video demo (bloqueante para entender el producto)
- Generar con `videogen--generate_video` un clip 8–12s: **vierte → inserta mecha → enciende → renueva**, usando como referencia las fotos reales ya en el repo (`/paso-vierte.webp` y las URLs de §5).
- Insertarlo como **primer slide del carrusel móvil** de la PDP (autoplay, muted, loop, playsInline) y en la sección "Cómo funciona" de `IndexUI.tsx`.

#### PASO 4 — Subir la prueba social
- Mover el bloque `Reviews` de las PDP de los dos productos con tráfico pagado a **justo después de los bloques de beneficios**, no al final.
- Añadir en la PDP un bloque corto tipo "Lo que dicen quienes ya la tienen" con 2–3 reseñas destacadas + rating, visible sin scroll infinito.
- Poner estrellas + conteo en las tarjetas de producto (`ProductCard.tsx`) y en `Collection.tsx` (como VelaVita).

#### PASO 5 — Encuesta de salida para saber el "por qué" (opcional pero recomendado)
- `posthog-survey` action=create + launch:
  - Nombre: "PDP móvil — por qué no agregan al carrito"
  - Pregunta (single_choice): "¿Qué te frenó de comprar hoy?" → opciones: "No entendí bien cómo funciona" · "Me pareció caro" · "No sé si me va a llegar bien" · "Dudas del envío o la devolución" · "Solo estaba mirando" · "Otro"
  - target_url `/productos/`, target_device `mobile`
- Dejar correr 7 días y leer resultados.

### Archivos a modificar
- `src/pages/ui/ProductPageUI.tsx` — bloque promesa móvil, altura galería, sticky bar siempre visible en móvil, "Qué incluye", badges específicos.
- `src/components/ProductStorySections.tsx` — reordenar `Reviews` más arriba en los slugs con tráfico pagado.
- `src/pages/ui/IndexUI.tsx` — insertar video demo en "Cómo funciona".
- `src/components/ProductCard.tsx` — estrellas + conteo en tarjetas.
- `.lovivo/cro-log.md` — ⚠️ REGISTRAR el baseline de esta auditoría y cada cambio (ver formato del archivo).

### Acciones que NO son de código (avisar al user → Dashboard)
1. **Redirigir anuncios Meta** de Perlas Originales $599 → Kit Vaso de Vidrio $899. [ALTA]
2. **Verificar tarifa de envío para TODO México** (no solo CDMX) y probar checkout con CP de Monterrey y Mérida. [ALTA]
3. Considerar quitar el +$99 de envío de Perlas Originales o subir el precio a $649 con envío gratis (el costo de envío visible mata conversión más que un precio ligeramente mayor).

---

## 4. Recent Changes
- 2026-07-31 — 🔍 **AUDITORÍA CRO COMPLETA**. Embudo móvil: 151 personas vieron producto → 6 al carrito (4%) → 0 compras. 172 sesiones sin carrito con **0 clics promedio y 0 errores JS** = problema de mensaje, no técnico. Anuncios Meta mandan 59 personas a Perlas Originales $599 (solo relleno, +$99 envío) y 57 a Cerámica $1,099 (el más caro); el Kit Vidrio $899 (entrada natural) recibió 4. Arriba del fold móvil = foto 487px + título + precio, sin promesa. Competencia (VelaVita/Foton) lidera con promesa + video + prueba social masiva. Plan de 5 pasos guardado en §3.
- 2026-07-31 — ✅ IMÁGENES REALES del user reemplazan generadas: paso "Inserta" (mano insertando mecha en vaso de vidrio), paso "Enciende" (mano con cerillo, sala cálida) y bloque "El aroma lo eliges tú" (gotero de esencia sobre bowl negro con 3 llamas). Aplicado en landing (`IndexUI.tsx` STEPS) Y en PDP (`ProductStorySections.tsx` HOW_IT_WORKS_STEPS + PERLAS_BENEFIT_BLOCKS). URLs Supabase message-images (ver §5).
- 2026-07-31 — ✅ FAQ landing: quitado "Mercado Pago" → "tarjetas participantes (VISA y Mastercard)".
- 2026-07-28 — ✅ AROMA en PDP rellenables: bloque compartido "El aroma lo eliges tú" en `PERLAS_BENEFIT_BLOCKS` + FAQ "¿Las velas tienen aroma?" en los 4 productos.
- 2026-07-27 — 🟠 DIAGNÓSTICO CHECKOUT: "No realizamos envíos a esa dirección" en /pagar. Causa = falta TARIFA de envío MX en store_settings. NO es bug de código.
- 2026-07-27 — ✅ HERO (IndexUI.tsx): "recargables"→"rellenables". CTA → /productos/perlas-originales-500-g. ⚠️ REVISAR: debería apuntar al Kit Vidrio según auditoría.
- 2026-07-27 — ✅ PASO "Vierte": foto real del user en `public/paso-vierte.webp`.
- 2026-07-27 — ✅ BENEFICIOS COMPARTIDOS: const `PERLAS_BENEFIT_BLOCKS`.
- 2026-07-27 — ✅ IMÁGENES PDP (fotos reales user): bowl-negro, vaso-transparente, kit-cerámica.
- 2026-07-25 — ✅ MENÚ "Productos": dropdown desktop + móvil con 4 categorías.
- 2026-07-25 — ✅ Nueva página `src/pages/Collection.tsx` + ruta `/categorias/:handle`.
- 2026-07-25 — ✅ PDP para TODOS los 9 productos (`PDP_CONTENT`).
- 2026-07-25 — ✅ Colecciones creadas: Kits (2), Accesorios (1), Recipientes (2).
- 2026-07-23 — ✅ WHATSAPP: leyenda en PDP + footer.
- 2026-07-17 — ✅ FAVICON de marca `/favicon.png`.

## 5. Image Inventory
- **Colecciones**: sin imagen asignada (Kits/Accesorios/Recipientes image=null).
- **FAVICON**: `/favicon.png` (256x256).
- **FOTOS REALES catálogo**: `product-images/products/<hash>.webp`. 9 productos, 76 imágenes.
- **Hero desktop**: `/hero-dunaru.webp` · **Hero móvil**: `/hero-dunaru-mobile.webp` · **Casa real**: `/casa-real-{sala,comedor,recibidor}.webp`
- **4 PASOS (estado actual 2026-07-31)** — base URL `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/`:
  - Vierte → `/paso-vierte.webp` (repo, foto real user)
  - Inserta → `1785521743155-htw95tvbi4b.webp` (foto real user) ⚠️ ya NO `/paso-inserta.webp`
  - Enciende → `1785521743156-3qeskqe43gv.webp` (foto real user) ⚠️ ya NO `/paso-enciende.webp`
  - Renueva → `/paso-renueva.webp` (generada, pendiente foto real)
- **Bloque "El aroma lo eliges tú"** → `1785521743156-7ucg5c0kwb7.webp` (foto real user: gotero sobre bowl negro con 3 llamas). ⚠️ `/pdp-aroma.webp` quedó HUÉRFANO.
- **`PERLAS_BENEFIT_BLOCKS` imgs**: h29qq6dodik, 4z1j2dq3ab9, go7315yuax, c47lrhv7fa + la de aroma.
- **Bloques PDP fotos reales user**: bowl-negro = yafqxd2xr9i · vaso-transparente = wovmtpzn66 · concreto luz = i54i3sm6qk · cerámica = u6xju9w4wjl · regalo = 77nbrytmoii · mecha pack = 5bsut1tyt6c.
- ✅ Ya NO quedan PLACEHOLDER visibles en ninguna PDP.
- 🔴 **FALTA: video demo del mecanismo** (vierte→inserta→enciende→renueva). Bloqueante para conversión.

## 6. Known Issues
- 2026-07-31 — 🔴 **CONVERSIÓN MÓVIL 4% add-to-cart, 0 compras de 151 visitantes de pago.** Causa raíz identificada: PDP de aterrizaje equivocada + sin promesa arriba del fold. Ver §3.
- 2026-07-31 — 🔴 **Anuncios Meta apuntan a Perlas Originales $599 (+$99 envío) y Cerámica $1,099.** Deberían apuntar a Kit Vaso de Vidrio $899 (envío gratis). Acción del user en Dashboard.
- 2026-07-31 — 🟠 **Checkout: 20 inicios → 1 compra en 30d con 0 errores JS.** Sospecha alta de que la tarifa de envío solo cubre CDMX. Verificar cobertura nacional y probar CP 64000 (MTY) y 97000 (Mérida).
- 2026-07-31 — 🟡 `lov-search-files` devuelve 0 resultados para strings que SÍ existen (índice desactualizado). Usar `lov-view` con rutas directas.
- 2026-07-31 — 🟡 Autocapture de clics parece desactivado en PostHog (`click_count`=0 en TODAS las sesiones, incluso las que convirtieron). No confiar en esa métrica; usar micro-eventos propios.
- 2026-07-27 — 🟡 FAQs de kit-vaso-de-concreto dicen "concreto"; material real es CERÁMICA (el título del producto ya dice "Kit bowl de Cerámica" pero el slug no).
- 2026-07-25 — 🟡 Perlas/Reserva/Dúo/Trío NO están en categoría del menú (solo "Todos").

## 7. Pending / Future Sessions
- [ALTA] PASO 1+2 de la auditoría: promesa arriba del fold + "Qué incluye" + sticky CTA siempre visible en móvil.
- [ALTA] User: redirigir anuncios Meta al Kit Vaso de Vidrio $899.
- [ALTA] User: verificar tarifa de envío nacional y probar checkout desde MTY/Mérida.
- [ALTA] VIDEO DEMO con `videogen`: vierte→inserta→enciende→renueva. Insertar en PDP y landing.
- [MED] Subir prueba social (reviews más arriba en PDP, estrellas en ProductCard).
- [MED] Encuesta PostHog de salida en PDP móvil.
- [MED] Decidir: quitar +$99 de envío de Perlas Originales o subir precio a $649 con envío gratis.
- [MED] Pedir al user foto real del paso "Renueva".
- [MED] FASE AROMAS: lanzar esencias propias dunaru.
- [MED] Considerar renombrar slug "kit-vaso-de-concreto" → cerámica.
- [BAJA] Banners de colección (image null).
- [BAJA] Borrar huérfanos: `public/favicon.svg`, `public/tmp-upload-hero.webp`, `public/pdp-aroma.webp`, `public/paso-inserta.webp`, `public/paso-enciende.webp`.