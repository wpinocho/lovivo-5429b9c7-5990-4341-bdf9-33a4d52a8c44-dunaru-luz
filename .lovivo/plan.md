## 1. Brand & Context
- Brand: **dunaru** (dunaru.mx). Velas perladas **rellenables**: gránulos finos de cera tipo arena + mechas de algodón.
- ⚠️ VOCABULARIO: **"rellenable"** (NO "recargable"). ⚠️ **PROHIBIDO el guion largo (—) en copy visible.**
- Tesis: no vendemos cera. Vendemos una forma simple de crear luz en el recipiente que ya tienes.
- **AROMA**: las velas nacen SIN perfume. Desde 2026-08-21 el aroma SÍ se vende: **Esencia para Vela · 10 ml** como add-on opcional en la PDP. ⚠️ **2026-08-25: el copy viejo ("agrega unas gotas de la esencia que ya tienes en casa") CONTRADICE el negocio actual. Ver Fase 5.**
- Target: mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO. Decoración, hogar, regalo. Market: México, MXN, es-MX.
- Tono: claro, cálido, directo. Registro **"high end" / editorial atmosférico**. Referencias: **sensatehomes.com** (diseño) y **soliracandle.com** (mensaje/estructura, benchmark 2026-08-25).
- ⛔ **NO es founder-led. La owner NO aparece.** Storytelling = producto, materia, manos anónimas, taller y casa.
- Pagos: **hasta 6 MSI**. ⚠️ NUNCA nombrar "Stripe" ni "Mercado Pago" en la UI.
- Envío: **GRATIS A TODO MÉXICO, SIN MÍNIMO.** WhatsApp real: `525531215386`.
- REGLA DE INTEGRIDAD: **nunca reseñas falsas** (15 reales, 4.9 vía `getReviewStats()`), **nunca precios tachados inventados**, **nunca logos de prensa que no existen**.
- ⚠️ "+200 clientes felices": dato del owner, sin verificar contra la DB.
- STORE_ID: `5429b9c7-5990-4341-bdf9-33a4d52a8c44`
- RUTAS: producto `/productos/:slug`, paquete `/paquete/:slug`, carrito `/carrito`, checkout `/pagar`, categoría `/categorias/:handle`.
- ⚠️ **kit-vaso-de-concreto** es de **CERÁMICA**; el slug no se cambia (rompería los anuncios de Meta).
- ⚠️ **PRODUCTO ANCLA DE PAUTA = `kit-vaso-de-vidrio`.**
- ⚠️ El owner renombra y repriza desde el Dashboard. **NUNCA hardcodear precios ni títulos.**
- ⚠️ **STAGING**: los cambios se commitean al final del turno. Pedir refresh duro antes de re-implementar.
- 📦 2026-08-25: el owner está **rediseñando el empaque** para subir el registro premium. Falta copy de empaque (bolsa resellable, caja, inserto).

### CATÁLOGO (slugs SIEMPRE intactos)
Snapshot 2026-08-21 (fuente de verdad = la DB):
| Slug | Título | Precio | Compare | $/g |
|---|---|---|---|---|
| perlas-originales-500-g | Recarga 500 g + 30 mechas | $499 | $599 | $1.00 |
| reserva-1-kg | Recarga 1 Kg + 60 mechas | $799 | $999 | $0.80 |
| kit-vaso-de-vidrio | Kit · Vaso de Vidrio | $799 | $899 | — |
| kit-vaso-de-concreto | Kit · Bowl de Cerámica | $999 | $1,199 | — |
| d-o-de-tonos | Dúo de Tonos · 1 kg | $1,099 | $1,398 | $1.10 ⚠️ |
| tr-o-de-tonos | Trío de Tonos · 1.5 kg | $1,399 | $1,499 | $0.93 |
| bowl-negro | Bowl de Cerámica Negro | $399 | $499 | — |
| vaso-extra-transparente | Vaso de Vidrio Transparente | $249 | — | — |
| pack-30-mechas | Pack de 30 Mechas | $99 | — | — |
| esencia-para-vela-10-ml | Esencia para Vela · 10 ml | $99 | — | add-on OCULTO del catálogo |
- **ESENCIA**: id `f11fc30d-b36e-4c07-b756-79d1ecc44c71`, `track_inventory: false`, 1 opción **`Aroma`** con 6 variantes: Madera Nocturna · Ámbar Cristal · Costa Mineral · Higo Matcha · Tabaco Vainilla · Musgo Mineral. **NO existe variante "Sin aroma"** (estado virtual del componente). Tiene las 6 fotos (flat-lays, mismo orden que `SCENTS`). No pertenece a ninguna colección.
- ⚠️ **2026-08-21: los IDs de las variantes de la esencia CAMBIARON** al tocar `variants_config`. Carritos viejos en localStorage pueden fallar en checkout.
- Price rule activa: `perlas-originales-500-g` → 2 uds 10% OFF, 3 uds 15% OFF.
- **CONTENIDO DE LOS KITS**: ambos = recipiente + **500 g de cera + 30 mechas**.
- **COLECCIONES ACTUALES**: `kits` (2), `recipientes` (2), `accesorios` (1). ⚠️ 4 productos sin colección. Falta colección **`recargas`**.
- **ORDEN DE MERCHANDISING** = `src/lib/catalog-order.ts`. **Añadir ahí el slug de cada producto nuevo.**

---

## 2. Design System

### 🎨 PALETA 2026 (vigente desde 2026-08-20)
| Rol | Color | HEX | HSL | Token |
|---|---|---|---|---|
| Base clara | Warm Ivory / Bone | #F2ECE3 | 36 37% 92% | `--background`, `dunaru-marfil` |
| Superficie | Travertino | #E7DDCE | 36 34% 86% | `--muted`, `dunaru-arena` |
| Principal (firma) | Burnt Terracotta | #C55B3A | 14 55% 50% | `--secondary`, `dunaru-terracota`, `--ring` |
| Contraste oscuro | Deep Olive / Charcoal | #2F3128 | 73 10% 17% | `--foreground`, `dunaru-carbon` |
| Top bar / footer | Deep Olive oscuro | — | 75 13% 15% | `--primary`, `dunaru-onix` |
| **CTA "Comprar ahora"** | **Verde oliva vivo** | — | **75 24% 25%** | **`--dunaru-oliva-cta`** |
| **Selector de variante Y de aroma (seleccionado)** | **Verde oliva claro** | — | **75 22% 37%** | **`--dunaru-oliva-claro`** |
| Acento cálido | Saffron Gold | #D4A24A | 38 62% 56% | `--accent`, `dunaru-ambar` |
| Acento distintivo | Muted Periwinkle | #8B93B9 | 230 25% 64% | `dunaru-periwinkle` |
| Periwinkle legible | — | — | 230 27% 45% | `--dunaru-periwinkle-deep` (solo CSS) |
| Metal | Latón cepillado | — | 36 46% 50% | `dunaru-laton` |
- `dunaru-champagne` hoy es **latón 36 46% 45%**, para texto sobre fondos CLAROS.
- ⚠️ Sobre fondos oscuros usar **`dunaru-ambar`**, NUNCA `dunaru-champagne`.
- **Fuente de verdad = `src/index.css`.** Display: Instrument Serif (`font-display`) · Body/UI: Manrope (`font-body`).
- **`--radius: 0rem`**. Excepción: `rounded-field` en inputs.

### 🏷️ BADGE MSI (`.badge-msi`) y avisos MSI
Pill "Hasta 6 MSI" frosted glass + periwinkle. El aviso del checkout y el trust-icon "6 meses · Sin intereses" de la PDP son componentes DISTINTOS (siguen en champagne/ambar).

### 🖱️ ESTADOS HOVER (regla de marca)
- **Botón `default`**: reposo oliva-cta + marfil; hover terracota. En `ui/button.tsx`.
- **"Agregar al carrito" (PDP, outline)**: hover periwinkle.
- **AccordionTrigger**: hover periwinkle-deep + underline.
- **Links de texto secundarios** → hover periwinkle-deep.
- **Pills de variante (PDP y `ProductCardUI`) y chips de aroma**: seleccionado `bg-dunaru-oliva-claro text-dunaru-marfil`; no seleccionado hover `bg-dunaru-periwinkle/10` + `text-[hsl(var(--dunaru-periwinkle-deep))]`.
- **PATRÓN "INVERSIÓN MARFIL ↔ TERRACOTA"**: hero CTA, botón "Agregar" de `ProductCardUI`.
- **PATRÓN "OUTLINE TERRACOTA"**: footer y flechas del carrusel de pasos.
- **NAVEGACIÓN → PERIWINKLE** (`.nav-link*` en `index.css`).
- 🎯 Roles: **oliva = selección + CTA principal** · **periwinkle = navegación y hovers secundarios** · **terracota/marfil = hover de CTA, acción secundaria y PRECIOS de add-on**.
- ⚠️ **REGLA MÓVIL-FIRST: nada de información que dependa de `:hover`.**

### 🪨 MATERIALES / TEXTURAS (index.css, `@layer components`)
`.texture-grain` · `.texture-arena` · `.texture-travertino` · `.texture-terracota` · `.texture-ambar` (solo fondos oscuros) · `.texture-metal` · `.hairline-metal`. Fuerzan `position: relative`: **no sacarlas de `@layer components`.**

### Utilidades editoriales
`.lockup` · `.eyebrow` / `.eyebrow-light` · `.h-editorial` · `.transition-editorial` · `<Reveal>` · `.full-bleed` (no dentro de `layout="full-width"`) · `.hairline*` son DIVISORES.

### 🔢 CARRUSEL DE PASOS (`ProductStepsCarousel.tsx`)
Compartido home + PDP. Terracota + periwinkle, numeral cuadrado, dots activos terracota.

### Reglas de layout existentes
- **TOP BAR** fija en `EcommerceTemplate.tsx` (2 items), no en checkout. **HEADER OVERLAY** solo en `IndexUI`.
- **🛒 ORDEN OFICIAL DEL BUY BOX** (`ProductPageUI.tsx`): 1 título+precio+MSI+rating · 2 `PDP_BENEFITS[slug]` · 3 variantes de color · **3.5 `<ProductScentSelector />` (aroma opcional)** · 4 cantidad (o `ProductQuantityTiers`) · 5 `<DeliveryEstimate />` · 6 pago express + CTA `h-12` con precio · 7 CTA outline `h-11` "Agregar al carrito" · 8 micro-línea `Lock` · 9 badges · 10 `<PdpSocialProof />` · 11 WhatsApp · 12 acordeones cerrados.
- ⚠️ `TIER_SELECTOR_SLUGS` (solo `perlas-originales-500-g`) reemplaza el stepper.
- **💰 PRECIO EN EL CTA "COMPRAR AHORA"**: `ctaTotal` = `ctaUnitPrice * ctaQuantity + scentSelection.price`. La barra sticky sigue mostrando solo el precio UNITARIO sin aroma.
- `optionLabel(name, slug)` renombra "Color" → "Color de la cera", excepto en `CONTAINER_ONLY_SLUGS`.
- **📦 REGLA DE CONTENIDO EN KITS**: el primer bullet de `PDP_BENEFITS` de los kits declara qué trae la caja. NO quitar.
- **📐 RATIO DE IMAGEN DE PRODUCTO = 4:5 (1122×1402)** + `object-cover`.
- **ORDEN DE LA PDP** (`ProductStorySections.tsx`): garantías → carrusel → reseñas → bloques editoriales → tabla comparativa → FAQ → CTA de cierre.

### 🌿 SISTEMA DE AROMAS (2026-08-21)
- **`src/lib/scents.ts`** = fuente única de verdad. Exporta `SCENTS`, `SCENT_PRODUCT_SLUG`, `SCENT_OPTION_NAME` (`"Aroma"`), `SCENT_ENABLED_SLUGS`, `supportsScentAddon(slug)` y **`getScentImageByVariantName(name)`**.
- **Para activar el aroma en un producto nuevo: añade su slug a `SCENT_ENABLED_SLUGS`.** Hoy: los 6 SKUs con cera perlada.
- ⚠️ `SCENTS[].name` debe coincidir EXACTO con el valor de la variante en la DB.
- ⚠️ **"Inspirado en X" es descriptor secundario**: nunca entra al nombre de la variante ni al line item.
- **📐 RATIO DE LOS FLAT-LAYS DE AROMA = 4:3 (1456×1092), webp.** ⚠️ Ingredientes hasta el borde inferior: **no poner overlays.**
- **🖼️ IMAGEN DEL AROMA EN TODO EL FLUJO**: 3 capas (carrito/drawer via inyección en `ProductScentSelector`; checkout via `useOrderItems.transformOrderItems`; confirmación via `ThankYou.tsx`).
- ⚠️ **`ecommerce--update-product` NO soporta imágenes por variante.**
- **LOS TRES CAMINOS DE COMPRA INCLUYEN EL AROMA**: `handleAddToCartWithAddOns` · `handleBuyNowWithScent` · `ProductExpressCheckout` con `extraItems`.
- **PostHog**: eventos `scent_selected` y `scent_details_toggled`.
- **Ocultar del catálogo**: `HIDDEN_FROM_CATALOG_SLUGS` + `filterCatalogVisible()` en `src/lib/catalog-order.ts`.

### 🗂️ CATÁLOGO `/categorias/:handle`
`catalog-order.ts` ordena en ambos caminos; `todos` renderiza 4 grupos con `.hairline` + `<h2 class="eyebrow">`.

### 🧾 CHECKOUT (`CheckoutUI.tsx`) — 🔒 no se toca, solo hereda tokens.

---

## 3. Active Plan — FASE 5: REFINAMIENTO DE MENSAJE (benchmark Solira)

**Estado**: ✅ Fases 1, 2, 2.5–2.11, 3.7, 3.12–3.17 · Sistema de aromas completo · 🔜 **SIGUIENTE: Fase 5.1 (arreglar la contradicción del aroma) y 5.2 (credenciales premium en la landing)**. Resto de Fase 3 y Fase 4 siguen pendientes.

### 5.0 CONTEXTO DEL BENCHMARK (2026-08-25)
Competidor UK: **soliracandle.com** (WooCommerce, "candle sand", £30 por 500 g + 20 mechas). El owner quiere ese registro premium. Se auditó su home y su PDP `emberly-candle-sand` con `lov-fetch-website`.

**LO QUE ELLOS HACEN MEJOR (a nivel de wording):**
1. **Headline = categoría + credencial**: "Premium Scented Candle Sand, Made in the UK". Nombran la categoría Y la credencial en la misma línea. Nuestro H1 es poético pero no reclama nada.
2. **Barra de confianza con 6 credenciales**, no features: envío gratis, 100% natural vegano, hecho en UK, garantía 30 días money-back, libre de parabenos, eco. **Nuestra barra son 4 specs de producto** ("120 h de luz", "30 mechas", "Cualquier recipiente", "Rellenable"). Las specs no construyen premium; las credenciales sí.
3. **El AROMA es el héroe.** Cada SKU es un aroma con nombre propio (Emberly, Grove, Mellor) y una **pirámide olfativa en 3 fases** narrada ("The Tranquil Opening", "The Hearth-Warmed Heart", "The Enveloping Finish"). Es su activo premium número uno.
4. **Material propietario con nombre**: "EcoSnow wax". Nombrar la materia la vuelve exclusiva. Nosotros decimos "cera perlada" (genérico y copiable).
5. **Números concretos por todos lados**: "cada 100 g = 20 horas", "hasta 15 h por mecha", "más de 100 h por bolsa", "35 millones de frascos de vela al año en vertederos del Reino Unido".
6. **Tiers con nombre y % de ahorro explícito** en el buy box: "The Classic Solo" / "The Perfect Pair · Most Popular · save 18%" / "The Ultimate Trio · Best Value · save 25%".
7. **"What's Included?" con el beneficio de cada componente**, no solo la lista.
8. **Seguridad como feature de diseño**: "Safer by Design", "Self-Extinguishing Flame".
9. **Garantía con nombre**: "30-Day Happiness Guarantee".
10. **B2B / wholesale** (floristas, event planners, hospitality) y **sample de £5 / 30 g** como puerta de entrada barata.

**LO QUE NOSOTROS YA HACEMOS MEJOR (no tocar):**
- `RitualSection` y `BrandStorySection` son más editoriales que su "Designed for the Modern Home".
- Nuestra tabla comparativa dunaru vs vela tradicional ya existe (ellos la tienen en home, nosotros solo en PDP).
- `CasaRealSection`, UGC real, `DeliveryEstimate`, MSI, envío gratis sin mínimo, WhatsApp.
- Home deduplicada (la suya repite "how to use" y "why choose" 2 veces; su PDP repite el carrusel 3 veces = bug).

**LO QUE NO HAY QUE COPIAR:**
- ⛔ El muro legal de su PDP (H-statements, "toxic to aquatic life", SDS, disclaimer médico). Mata la conversión y el registro premium.
- ⛔ "As Featured In" con logos de prensa: **no tenemos prensa. No inventar.**
- ⛔ Su PDP de scroll infinito con 8 acordeones enormes.

---

### 5.1 🔴 P0 — ARREGLAR LA CONTRADICCIÓN DEL AROMA
**Problema**: desde que vendemos `esencia-para-vela-10-ml` ($99), el copy viejo sigue diciendo que el aroma es un DIY con "la esencia o aceite que ya tienes en casa". Eso (a) canibaliza el add-on, (b) suena barato, (c) es la palanca premium más grande que tenemos sin usar.

Archivos y cambios exactos:

**`src/components/ProductStorySections.tsx`**
- Bloque `PERLAS_BENEFIT_BLOCKS` → "El aroma lo eliges tú". Reescribir:
  - title: `Seis aromas, una sola vela`
  - body: `Tu vela nace neutra, sin perfume de fábrica. **Tú eliges el aroma**: seis esencias creadas para dunaru, en frascos de 10 ml. Unas gotas antes de encender y la casa cambia. Cuando quieras otro ambiente, cambias de esencia, no de vela.`
  - bullets: `Seis esencias propias, formuladas para cera perlada` / `Cambias de aroma sin comprar otra vela` / `O déjala neutra: luz limpia, sin humo perfumado`
  - ⚠️ mantener `photo: true` y la misma imagen.
- `compareRows`: cambiar la fila `"El aroma lo eliges tú"` → `"Cambias de aroma sin cambiar de vela"` en los 6 slugs donde aparece.
- FAQs `"¿Las velas tienen aroma?"` (aparece en `perlas-originales-500-g`, `reserva-1-kg`, `d-o-de-tonos`, `tr-o-de-tonos`): nueva respuesta:
  `La cera nace neutra, sin perfume de fábrica. En esta misma página puedes agregar una de nuestras seis esencias de 10 ml y elegir el aroma de tu casa: unas gotas antes de encender y listo. Si prefieres luz sin olor, también funciona perfecto. Cambias de aroma cuando quieras, sin cambiar de vela.`
- FAQ del mismo tema en `IndexUI.tsx` (`FAQ_ITEMS`): añadir un item nuevo `¿Las velas tienen aroma?` con la misma respuesta (hoy la landing NO habla de aroma en el FAQ).

**`src/lib/scents.ts`** — subir el registro de cada aroma (es la joya premium):
- Añadir a cada entrada de `SCENTS` dos campos nuevos opcionales: `story` (1 frase editorial, máx 14 palabras) y `pyramid: { salida: string; corazon: string; fondo: string }`.
- Mantener `name` EXACTO (el match con la DB depende de eso) y `notes` como está.
- Ejemplo de tono a seguir (adaptar a las notas reales de cada aroma, NO inventar notas que no existan): Madera Nocturna → story `Cedro y humo tibio. La sala cuando ya nadie tiene prisa.`; pyramid `salida: Cedro`, `corazon: Vetiver y clavo`, `fondo: Ámbar seco`.
- ⚠️ Las notas reales de los 6 aromas ya existen en el archivo: **usarlas, no inventarlas**. Si un aroma no tiene 3 niveles claros, pedir el dato al owner antes de publicar.

**`src/components/ProductScentSelector.tsx`**
- En el panel de detalles (ya abierto por default), pintar `story` en una línea propia arriba de las notas, y las 3 fases como `Salida · Corazón · Fondo` en una sola línea compacta con separadores.
- ⚠️ NO agrandar el panel: ya empuja el CTA en móvil (issue abierto). Si crece más de ~1 línea, colapsar la pirámide detrás de "Ver notas".
- ⚠️ NO poner overlays sobre el flat-lay.

---

### 5.2 🟠 P1 — CREDENCIALES PREMIUM EN LA LANDING (`src/pages/ui/IndexUI.tsx`)
1. **Eyebrow del hero**: `Velas perladas rellenables` → `Cera perlada vegetal · Hecha en México`.
2. **Sub-línea del hero**: hoy `Sin derretir, sin riesgo, sin comprar una vela nueva. Solo vierte las perlas, inserta una mecha y enciende.` → `Cera vegetal en gránulos finos. Viertes, insertas una mecha y enciendes. El aroma lo eliges tú.` (más corta, mete la palanca de aroma arriba del fold).
3. **Barra de beneficios** (`const BENEFITS`): cambiar de specs a credenciales, manteniendo `grid-cols-4`:
   `['Cera vegetal, sin parafina', 'Rellenable para siempre', 'Hecha en México', 'Envío gratis + 30 días']`
   Las specs que salen (120 h, 30 mechas, cualquier recipiente) YA viven en `PDP_BENEFITS` y en las tarjetas: no se pierde información.
4. **Subline de "ELIGE tu VELA"**: añadir la garantía → `Envío gratis a todo México, sin mínimo. Hasta 6 meses sin intereses. 30 días de garantía.`
5. **Sección nueva de AROMAS en la landing** (hoy NO existe, y es el activo premium): bloque compacto con los 6 flat-lays 4:3 + nombre + `story` de una línea, link a `/productos/kit-vaso-de-vidrio`. Colocarlo **entre `<Reviews />` y "Elige tu tono"**. Reutilizar `SCENTS` de `scents.ts` (nunca duplicar la lista).
6. **Mover la tabla comparativa a la landing**: extraer la tabla dunaru vs vela tradicional de `ProductStorySections.tsx` a un componente reutilizable y ponerla en la home después de "Crea tu vela en 4 pasos". Solira la tiene en home y es un activo de conversión: hoy solo la ve quien llega a una PDP.
7. **Revisar redundancia**: "Elige tu tono" (carrusel de 3 tonos) y la rejilla "Elige tu vela" apuntan casi siempre a `perlas-originales-500-g`. Si tras añadir la sección de aromas la home queda muy larga, **el candidato a recortar es "Elige tu tono"**, no la sección de aromas.

---

### 5.3 🟠 P1 — PDP: "QUÉ INCLUYE" Y SEGURIDAD POR DISEÑO (`ProductPageUI.tsx`)
1. **Acordeón nuevo `Qué incluye`** (primer acordeón, cerrado, antes de "Descripción"), estilo Solira pero breve: cada componente + su beneficio en una línea. Driven por slug, ej. `kit-vaso-de-vidrio`:
   - `Vaso de vidrio resistente al calor · se rellena por años, no se tira`
   - `500 g de cera perlada vegetal · hasta 120 horas de luz`
   - `30 mechas de algodón · cambias mecha, no vela`
   - `Guía de uso · lista en 3 pasos, sin derretir nada`
2. **Renombrar acordeones** con lenguaje de ritual: `Descripción` → `La pieza`; `Envío y devoluciones` → `Envío y garantía`. Añadir tercero: `Cuidado y seguridad` con el texto de `SHARED_FAQS` + la línea de seguridad por diseño.
3. **Seguridad por diseño** en `PERLAS_BENEFIT_BLOCKS`: el bloque "Se cae y no pasa nada" sube de registro:
   - title: `Seguridad por diseño`
   - body: `Al ser gránulos y no un bloque de cera, un golpe **no significa cera caliente encima**. La llama pierde contacto y se apaga sola. Recoges las perlas y sigues.`
   - bullets: `La llama se apaga sola si se vuelca` / `Pensada para casas con niños y mascotas` / `Se recogen y se vuelven a usar`
4. **Matemática de la luz** (concreto vende): añadir a `PDP_BENEFITS` de las recargas la línea `Cada 100 g dan cerca de 24 horas de luz` (derivado consistente de 500 g = 120 h, no es un dato inventado).
5. **Trust icons**: si se adopta el nombre de la garantía (ver 5.5), cambiar `30 días / De garantía`.

---

### 5.4 🟡 P2 — AOV: TIERS CON NOMBRE Y % DE AHORRO
- `ProductQuantityTiers` hoy solo aplica a `perlas-originales-500-g` (`TIER_SELECTOR_SLUGS`). Añadir **nombre editorial + ahorro explícito** a cada tier, estilo Solira:
  - `Una bolsa` / `Dos bolsas · Ahorra 10% · La más elegida` / `Tres bolsas · Ahorra 15% · Mejor valor`
- Extenderlo a `kit-vaso-de-vidrio` y `reserva-1-kg` **requiere que el owner cree price rules de volumen en el Dashboard primero**. No inventar descuentos que no existen en la DB.

---

### 5.5 DECISIONES QUE NECESITAN AL OWNER (bloquean parte del copy)
1. **Nombre propietario de la cera** (el "EcoSnow" de dunaru). Opciones a proponer: `Perla Vegetal`, `Cera Duna`, `Cera Perlada dunaru`. Sin esto, el material sigue sonando genérico.
2. **Nombre de la garantía**: `Garantía Primera Luz · 30 días` o `Garantía 30 noches`.
3. **¿Cuántos gramos de cera perfuma un frasco de 10 ml?** Dato clave para justificar los $99. Hoy no lo tenemos y no se puede inventar.
4. **¿Cuántas horas da una mecha?** Solira dice 15 h. Nosotros solo tenemos el total por bolsa.
5. **Composición exacta de la cera** (¿soya? ¿coco? ¿% vegetal?) para poder decir algo más fuerte que "vegetal, sin parafina".
6. **Copy del empaque nuevo** (bolsa resellable, caja, inserto) para reflejarlo en la PDP: Solira vende fuerte "airtight resealable pouch".
7. **¿Interés en B2B?** (floristas, restaurantes, hoteles, event planners). Solira tiene página de wholesale. Puede ser un canal grande para dunaru.
8. **¿Crear un sample barato?** (tipo 30 g + 5 mechas). Es su puerta de entrada de £5 y baja muchísimo la barrera del primer pedido.

---

### 3.8 FASE 3 — PDP — RESTANTE
1. Galería a sangre en móvil, sin borde ni radius.
2. Título a lockup; precio en `font-body`, discreto.
3. **"Combina bien con"**: reutilizar `ProductAddOns` (hoy `ADDON_MAP` vacío) para cross-sell real.
4. `<RitualSection />` al cierre de la PDP.
5. Barrer eyebrows viejos → `.eyebrow`; texturas en las secciones de historia.
6. Migrar `ProductStorySections.tsx` de `dunaru-champagne` a terracota/periwinkle.
7. Unificar el bloque de trust-icons "6 meses sin intereses".

### 3.9 FASE 4 — Arte y fotografía (LA PALANCA MÁS GRANDE)
Imágenes atmosféricas nocturnas, ⛔ SIN ROSTROS. Slots: hero desktop/móvil, fondo de `RitualSection`, 3 ambientes de "Elige tu tono", imagen de `BrandStorySection`. Falta: **packshots del frasco de esencia (4:5)**.

### 3.11 Medición
Volumen insuficiente para A/B (122 usuarios/mes en la PDP principal). Medición secuencial con `posthog-query`. Si el ATC móvil cae por debajo de 3.5%, revertir densidad primero.

---

## 4. Recent Changes
- 2026-08-25 — 🔎 **Auditoría del competidor soliracandle.com** (home + PDP) y plan de Fase 5: refinamiento de mensaje. Hallazgo P0: el copy del aroma contradice el add-on que ya vendemos.
- 2026-08-21 — 🖼️ Cada esencia muestra SU foto en carrito, checkout y confirmación (3.17).
- 2026-08-21 — ⚠️ `ecommerce--update-product` deformó las variantes de la esencia; se restauraron (IDs nuevos).
- 2026-08-21 — 💰 El CTA "Comprar ahora" muestra el total en TODOS los productos (3.16).
- 2026-08-21 — 👁️ Detalles del aroma ABIERTOS por default (3.15) + chip `+ $99 · 10 ml`.
- 2026-08-21 — 💲 Precio del aroma con jerarquía propia (3.14).
- 2026-08-21 — 📏 Panel de aroma compactado (3.13).
- 2026-08-21 — 🖼️ Los 6 flat-lays de aroma ya viven en el selector de la PDP.
- 2026-08-21 — 🍎 El pago express (Apple/Google Pay) ya incluye la esencia (`extraItems`).
- 2026-08-21 — ⚡ "Comprar ahora" con aroma va DIRECTO al checkout.
- 2026-08-21 — 🌿 SISTEMA DE AROMAS COMPLETO.
- 2026-08-21 — 🧵 Add-on de mechas retirado de la PDP.
- 2026-08-21 — 🟢 Pills de variante seleccionada en `ProductCardUI.tsx` a `dunaru-oliva-claro`.
- 2026-08-21 — 🗂️ Orden curado del catálogo.
- 2026-08-21 — 🧱 Descripciones de los KITS corregidas en la DB.

## 5. Image Inventory
- **📐 Fotos de producto: 1122×1402 px (4:5), webp.** 10 productos; la esencia tiene 6 imágenes (los flat-lays 4:3, provisionales).
- **🌿 FLAT-LAYS DE AROMA (4:3, 1456×1092, webp)** — base `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/`:
  - Madera Nocturna → `1787337333998-ynkiiz87l1n.webp`
  - Ámbar Cristal → `1787337333997-44wwhmmisy5.webp`
  - Costa Mineral → `1787337333998-jphdwvy2pbh.webp`
  - Higo Matcha → `1787337333998-enck999sju7.webp`
  - Tabaco Vainilla → `1787337333998-5e5poqkcxh8.webp`
  - Musgo Mineral → `1787337333998-n7f8zqhfx8m.webp`
  - ⚠️ Ingredientes hasta el borde inferior. **No overlays.** Mismo orden en `SCENTS` y en `product.images` de la esencia.
  - 👉 Estos 6 flat-lays son los que se reusan en la sección nueva de aromas de la landing (5.2.5).
- ⚠️ Foto #1 de `perlas-originales-500-g` = `x3azemqdof.webp`. Candidata #1 a reemplazo.
- Colecciones sin imagen. **FAVICON**: `/favicon.png` (256×256).
- **UGC de clientas** (5 fotos): constante `UGC` en `src/data/reviews.ts`.
- **Hero**: `/hero-dunaru.webp` · `/hero-dunaru-mobile.webp`. **Casa real**: `/casa-real-{sala,comedor,recibidor,recamara}.webp`.
- **4 PASOS**: Vierte `/paso-vierte.webp` · Inserta `1785521743155-htw95tvbi4b.webp` · Enciende `1785521743156-3qeskqe43gv.webp` · Renueva `/paso-renueva.webp`.
- 🔴 **FALTAN: (a) packshots 4:5 del frasco de esencia; (b) imágenes atmosféricas nocturnas de la Fase 4; (c) video demo; (d) foto del EMPAQUE NUEVO.**
- 🟡 Los `steps` de `kit-vaso-de-concreto` siguen con `PLACEHOLDER`. 🟡 `/pdp-vaso-decor.webp` huérfana.
- ⛔ Descartadas por el owner: `1786132713652-czg3jwwtcrv.webp` y `1786129807292-5eb2uq5pl0m.webp`.

## 6. Known Issues
- 2026-08-25 — 🔴 **CONTRADICCIÓN DE COPY EN EL AROMA**: `ProductStorySections.tsx` (bloque "El aroma lo eliges tú", FAQs y `compareRows`) invita a usar "la esencia que ya tienes en casa" mientras vendemos esencia propia a $99. Canibaliza el add-on y baja el registro. Fix en 5.1.
- 2026-08-25 — 🟠 **La landing no menciona el aroma en ningún lugar** (ni FAQ ni sección). Es el activo premium más fuerte y está invisible arriba del funnel.
- 2026-08-25 — 🟡 La barra de beneficios de la home son 4 specs, no credenciales de marca.
- 2026-08-25 — 🟡 La tabla comparativa dunaru vs vela tradicional solo existe en PDP, no en la home.
- 2026-08-25 — 🟡 La cera no tiene nombre propietario ni composición pública (soya/coco/%). Bloquea copy premium.
- 2026-08-21 — 🔴 **`ecommerce--update-product` NO soporta imágenes por variante.** No repetir.
- 2026-08-21 — 🟠 Los IDs de las variantes de la esencia cambiaron: un carrito guardado antes de las 20:35 del 21/08 puede fallar. Se resuelve vaciando el carrito.
- 2026-08-21 — 🟡 Las fotos de la esencia son flat-lays 4:3, no packshots del frasco.
- 2026-08-21 — 🟡 La barra sticky de la PDP muestra el precio unitario sin aroma.
- 2026-08-21 — 🟠 El panel de aroma abierto por default empuja el CTA en móvil. Sin medir. ⚠️ Tenerlo en cuenta al añadir la pirámide olfativa (5.1).
- 2026-08-21 — 🟡 Chip de aroma de 3 líneas sin verificar en 360 px.
- 2026-08-21 — 🟡 Pago express con esencia sin probar en device real.
- 2026-08-21 — 🟡 Aroma limitado a 1 frasco por acción (MVP).
- 2026-08-21 — 🟡 `ProductPageUI` llama `useSettings()` dos veces.
- 2026-08-21 — 🟠 4 de 9 productos sin colección → falta "Recargas" en el menú.
- 2026-08-21 — 🟡 `catalog-order.ts` y `scents.ts` son listas manuales.
- 2026-08-20 — 🟠 `ProductStorySections.tsx` sigue en `dunaru-champagne`.
- 2026-08-20 — 🟠 Bloque de trust-icons "6 meses sin intereses" en champagne/ambar.
- 2026-08-20 — 🟠 Paleta nueva sin auditar en carrito ni checkout.
- 2026-08-20 — 🟡 Texturas aún no aplicadas en PDP ni en `CasaRealSection`.
- 2026-08-20 — 🟡 Los hex de `TONOS` en la landing son colores REALES de la cera.
- 2026-08-07 — 🔴 `perlas-originales-500-g` se llama "Recarga" y recibe el grueso del tráfico frío de Meta.
- 2026-08-07 — 🟠 Escalera de precio por gramo rota: Dúo 1 kg ($1.10/g) vs Reserva 1 kg ($0.80/g).
- 2026-08-07 — 🟡 `getReviewStats()` es global (4.9/15), no por SKU.
- 2026-08-07 — 🟠 Slug `kit-vaso-de-concreto` incorrecto (es cerámica).
- 2026-08-07 — 🟡 `ShippingPromise` asume envío gratis cuando `shippingCost === 0`.
- 2026-08-07 — 🟠 Títulos del catálogo en la DB con guion largo.
- 2026-08-07 — 🟡 `PDP_BENEFITS` solo cubre 6 slugs.
- 2026-07-31 — 🟠 Footer de `EcommerceTemplate.tsx`: 3 nombres de producto hardcodeados.
- 2026-07-31 — 🔴 `ecommerce--update-product` NO persiste `compare_at_price`. Workaround: Dashboard manual.
- 2026-07-31 — 🟡 `lov-search-files` devuelve resultados falsos o vacíos. **Verificar SIEMPRE con `lov-view`.**
- 2026-07-31 — 🟡 Autocapture de clics desactivado en PostHog.
- 2026-07-06 — 🔴 `meta-capi` edge function falla en preview.

## 7. Pending / Future Sessions
- [ALTA] **Fase 5.1**: arreglar la contradicción del aroma (bloque, FAQs, compareRows, FAQ de la home) + pirámide olfativa en `scents.ts`.
- [ALTA] **Fase 5.2**: credenciales premium en la landing (eyebrow, sub-línea, barra de beneficios, sección de aromas, tabla comparativa en home).
- [ALTA] **Fase 5.3**: acordeón "Qué incluye" + "Seguridad por diseño" en la PDP.
- [ALTA] **Confirmar con el owner los 8 puntos de 5.5** (nombre de la cera, nombre de la garantía, gramos por frasco, horas por mecha, composición, empaque, B2B, sample).
- [ALTA] **Packshots del frasco de esencia (4:5)** y sustituir los flat-lays como imágenes del producto.
- [ALTA] **Probar el flujo completo con aroma tras refresh duro**: PDP → carrito → /pagar → orden.
- [ALTA] **Medir el attach rate de aroma** y el impacto del panel abierto por default en PostHog.
- [ALTA] **Verificar en móvil (360 px)** el chip de 3 líneas y el panel con pirámide.
- [ALTA] **Crear la colección `recargas`** y añadirla al menú (requiere OK del owner).
- [ALTA] **FASE 4 (fotos atmosféricas nocturnas)**, sin rostros.
- [MED] **Fase 5.4**: tiers con nombre y % de ahorro (requiere price rules nuevas del owner).
- [MED] Reflejar el aroma en el precio de la barra sticky.
- [MED] Descripción y SEO propios de la PDP de la esencia.
- [MED] Resto de FASE 3 (PDP) y auditar la paleta en carrito y checkout.
- [BAJA] Página B2B / wholesale. SKU sample barato. Banners de colección.