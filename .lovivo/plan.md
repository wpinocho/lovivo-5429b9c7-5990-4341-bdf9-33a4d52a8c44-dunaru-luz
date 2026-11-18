## 1. Brand & Context
- Brand: **dunaru** (dunaru.mx). Velas **rellenables** de **Cera Duna**: gránulos vegetales finos tipo arena + mechas de algodón.
- ⚠️ VOCABULARIO: **"rellenable"** (NO "recargable"). ⚠️ **PROHIBIDO el guion largo (—) en copy visible.** (Excepción: sticker Buen Fin de la owner dice "2DA RECARGA", es su arte.)
- **Cera Duna** = nombre propietario de la cera (vegetal, en gránulos, sin parafina). Claim: **100% vegetal, biodegradable y ecológica**. ⛔ NO porcentajes soya/coco.
- ⚠️ 2026-08-27: eyebrow del hero dice **"Cera perlada 100% natural"** (pedido owner).
- Tesis: no vendemos cera. Vendemos una forma simple de crear luz en el recipiente que ya tienes.
- **AROMA**: cera neutra. Add-on **Esencia para Vela · 10 ml** ($99). 1 frasco perfuma 500 g. Cada frasco = UN aroma.
- Target: mujer 25–45, urbana, CDMX/GDL/MTY/Puebla/QRO. México, MXN, es-MX.
- Tono: claro, cálido, directo, **editorial premium** (refs sensatehomes.com, soliracandle.com). ⛔ NO founder-led.
- Pagos: **hasta 6 MSI** (nunca nombrar Stripe/Mercado Pago). Envío **GRATIS A TODO MÉXICO, SIN MÍNIMO**. Garantía 30 días. WhatsApp `525531215386`.
- INTEGRIDAD: nunca reseñas falsas (16 reales, 4.9), nunca precios tachados inventados, nunca logos de prensa.
- STORE_ID `5429b9c7-5990-4341-bdf9-33a4d52a8c44`. Rutas: `/productos/:slug`, `/paquete/:slug`, `/carrito`, `/pagar`, `/categorias/:handle`, `/como-funciona`, `/dia-de-muertos` (Navigate → `/categorias/dia-de-muertos`), **`/navidad`** (renderiza Collection handle `navidad`, canónica).
- ⚠️ `kit-vaso-de-concreto` = **Cuenco Eclipse**; slug no se cambia. Ancla Meta Ads = `kit-vaso-de-vidrio`.
- ⚠️ La owner repriza, crea, DUPLICA y ARCHIVA desde el Dashboard. **NUNCA hardcodear precios.** El agente NO puede cambiar slugs.
- 🗓️ **EDICIONES DE TEMPORADA = sistema anual reciclable** (`src/lib/editions.ts`). Activa: **NIEVE (Navidad)**, 5 productos activos desde 2026-11-18. DDM regresa oct 2027. Archivar, nunca borrar. ⛔ NO fecha límite de pedido en la web.
- ⚠️ Los productos de edición pueden tener **nombres propios** (no siempre `Vela Rellenable X · Recipiente`): registrar SIEMPRE el slug real en `EDITIONS[].products`.
- 🛍️ **PROMOS**: add-on con descuento en PDP de kits + carrito (`src/lib/promo-addon.ts`).
- 🛒 **UPSELL CARRITO**: una sugerencia a la vez: promo (si aplica) → aroma.

### 🏷️ CATÁLOGO
| Slug | Título | Precio | Compare |
|---|---|---|---|
| kit-vaso-de-vidrio | Vela Rellenable · Vaso de Vidrio | $749 | $899 |
| kit-vaso-de-concreto | Vela Rellenable · Cuenco Eclipse | $999 | $1,199 |
| vela-rellenable-cuenco-eclipse-copy-ppsiy | Vela Rellenable · Cuenco Alba | $999 | $1,199 |
| vela-rellenable-cuenco-dunaru | Vela Rellenable · Cuenco Dunaru | $1,199 | — |
| vela-rellenable-bowl-ambar | Vela Rellenable · Bowl Ámbar | $1,199 | $1,299 |
| perlas-originales-500-g | Cera Duna · 500 g | $499 | — |
| reserva-1-kg | Cera Duna · 1 kg | $849 | $999 |
| d-o-de-tonos / tr-o-de-tonos | Dúo / Trío de Tonos | $899 / $1,199 | — / $1,499 |
| bowl-negro, cuenco-eclipse-copy-tjby7, cuenco-dunaru, bowl-ambar, bowl-espejo-de-acero, vaso-extra-transparente | recipientes solos | | |
| pack-30-mechas · esencia-para-vela-10-ml | accesorios | $99 | |
| ❄️ casita-de-navidad-cuenco-dunaru | Casita de Navidad · Cuenco Dunaru | $1,399 | base Cuenco Dunaru |
| ❄️ aldea-de-navidad-centro-de-madera | Aldea de Navidad · Centro de madera | $1,999 | sin base (hereda Cuenco Dunaru) |
| ❄️ pino-de-invierno-cuenco-alba | Pino de Invierno · Cuenco Alba | $1,099 | base Alba |
| ❄️ refugio-de-invierno-cuenco-eclipse | Refugio de Invierno · Cuenco Eclipse | $1,099 | base Eclipse |
| ❄️ nochebuena-de-navidad-bowl-mbar | Nochebuena de Navidad · Bowl Ámbar | $1,299 | base Ámbar (slug "mbar") |
| ❄️ esencia-para-vela-navideo-10-ml | Esencia Navideño · 10 ml (Pino Navideño / Manzana Canela) | $99 | OCULTO en catálogo |
| 🛍️ cera-duna-500-g-buen-fin | Add-on Buen Fin | $249 | OCULTO |
| 🏵️ 7 productos Cempasúchil + esencia | ARCHIVADOS desde 2026-11-02 | | |

⚠️ Copias hardcodeadas de títulos: `CATALOG_FALLBACK` (IndexUI), `FOOTER_SHOP_LINKS` (EcommerceTemplate), `src/lib/navigation.ts`.
- COLECCIONES: `kits`, `recipientes`, `accesorios`, `dia-de-muertos`, `navidad` (id `1f05814b-...`, 5 productos Nieve agregados 2026-11-18).
- ORDEN = `src/lib/catalog-order.ts`. `HIDDEN_FROM_CATALOG_SLUGS` = esencias de temporada + add-on Buen Fin.

---

## 2. Design System
| Rol | HSL | Token |
|---|---|---|
| Base clara | 36 37% 92% | `--background`, `dunaru-marfil` |
| Superficie | 36 34% 86% | `--muted`, `dunaru-arena` |
| Terracota | 14 55% 50% | `dunaru-terracota` |
| Contraste oscuro | 73 10% 17% | `--foreground`, `dunaru-carbon` |
| Top bar/footer | 75 13% 15% | `--primary`, `dunaru-onix` |
| CTA | 75 24% 25% | `--dunaru-oliva-cta` |
| Selector activo | 75 22% 37% | `--dunaru-oliva-claro` |
| Saffron | 38 62% 56% | `dunaru-ambar` |
| Periwinkle | 230 25% 64% | `dunaru-periwinkle` |
| 🏵️ Cempasúchil | 30 88% 55% | `dunaru-cempasuchil` |
| ❄️ Nieve | 205 32% 76% | `--dunaru-nieve` |
| Acento edición | var | `--edition-accent` → **`dunaru-edition`** |
- Instrument Serif + Manrope. `--radius: 0`. Móvil-first. oliva = selección/CTA · periwinkle = navegación · terracota = promos.

### 🗓️ SISTEMA DE EDICIONES (`src/lib/editions.ts`)
- `EDITIONS[]`: id, name, occasion, collectionHandle, path, canonicalPath, navLabel, eyebrow, title, heroTagline, heroImage, home{}, notice, inspiration{ideas[]}, accentClass, pdpThemeClass, **products (slug real → slug base)**, slugPrefixes, headlines, **scents {seasonal: ids de SEASONAL_SCENTS, hide: ids regulares}** (2026-11-18, reemplaza `seasonalScents: boolean`).
- Aromas: `SEASONAL_SCENTS` en `scents.ts` (cempasuchil, pino-navideno, manzana-canela). Nieve oculta higo-matcha + costa-mineral; DDM oculta costa-mineral. Selector usa `dunaru-edition` para borde y etiqueta "Temporada".
- Contenido PDP: `PDP_INCLUDES` (pdp-includes.ts) y `PDP_BENEFITS` (ProductPageUI) buscan **slug exacto primero**, luego `contentSlug`. Nieve tiene entradas propias en ambos.
- Menú: link "Navidad" aparece si algún slug activo hace match con `editionForSlug`.
- CHECKLIST NUEVA EDICIÓN: entrada en `EDITIONS` (con slugs reales) + `--dunaru-X`, `.edition-X`/`.theme-X` en index.css + ruta corta App.tsx + sitemap + colección DB + esencia oculta en HIDDEN_FROM_CATALOG_SLUGS.

### Otros sistemas
- TRACKING `tracking-utils.ts`. ESTATUS `useActiveProductSlugs.ts`. RESEÑAS `src/data/reviews.ts`. DEEP LINK `?variante=`.
- ADD-ONS PDP: `scentSelection` + `addonSelection`; candado `enforcePromoAddonLimit`.
- CHECKLIST PDP vela nueva: PDP_HEADLINE + PDP_BENEFITS, pdp-includes, SCENT_ENABLED_SLUGS, catalog-order, SHOP_CARDS + CATALOG_FALLBACK, [promo] `PROMO_ADDON.kitSlugs`.

---

## 3. Active Plan

### ❄️ FASE 17: EDICIÓN NIEVE (Navidad) — 🟢 EN VIVO 2026-11-18 (productos activos)
- Hecho 2026-11-18: slugs reales en `EDITIONS[nieve].products` + headlines; 6 fotos de inspiración; aromas Pino Navideño y Manzana Canela primero en el selector (Higo Matcha y Costa Mineral ocultos); "Qué incluye" y beneficios propios; descripciones + tags de los 5 productos; colección `navidad` con los 5; esencia navideña oculta del catálogo.
- ⏳ Pendiente:
  1. Owner confirma: qué incluye cada pieza (¿casita/pino/nochebuena son de cera con mecha o decorativas?), gramos de cera, cuántas mechas, medidas de Aldea/Alba/Eclipse/Ámbar. Hoy el copy NO dice gramos ni número de mechas.
  2. Owner confirma notas de los aromas navideños (puse Pino/Abeto/Madera y Manzana/Canela, genéricas).
  3. Descripción del producto Esencia Navideño (vacía).
  4. QA visual: `/navidad`, home, menú, PDP (selector aromas), carrito, móvil 375; `npx tsc --noEmit`.
  5. Aldea hereda reseñas/FAQ/4 pasos del Cuenco Dunaru (ProductStorySections dice "cuenco de cerámica, 500 g"). Revisar si hace falta contenido propio.
  6. ¿Agregar los Nieve a "Elige tu vela" / footer? (no pedido aún).

### 🛒 FASE 16 UPSELL CARRITO ✅ · ⏳ QA 16.5
### 🛍️ FASE 15 BUEN FIN terminó 17 nov · ⏳ owner archiva add-on, quitar sticker
### FASE 14 EDICIONES: pendiente 14.5 landing fuera de temporada, 14.7 PDP archivada → redirect, footer dinámico.

---

## 4. Recent Changes
- 2026-11-18 — ❄️ Nieve conectada a productos reales: slugs, inspiración (6 fotos), aromas navideños con UI de temporada, includes/beneficios propios, descripciones, colección.
- 2026-11-18 — 🌿 `Edition.scents {seasonal, hide}` reemplaza `seasonalScents`; selector usa acento de la edición.
- 2026-11-16 — ❄️ Sistema de ediciones + edición NIEVE (landing `/navidad`, banner, home, menú, sellos, PDP).
- 2026-11-13 — 🛒 FASE 16 upsell en carrito.
- 2026-11-13 — 🏷️ Sticker Buen Fin.
- 2026-11-13 — 🛍️ FASE 15 core Buen Fin.
- 2026-11-09 — 🃏 Tarjetas con chips de nombre.
- 2026-10-14 — 🏵️ Cempasúchil Eclipse y Alba publicados.
- 2026-10-13 — 🎨 Dúo de Tonos selector.
- 2026-10-10 — 🏵️ PDPs de temporada.
- 2026-10-09 — 🏵️ Aroma Cempasúchil.

## 5. Image Inventory
- Fotos producto 1122×1402 (4:5) webp. Uploads owner: `.../message-images/58337cbc-5a9f-4862-810a-1470616566de/`.
- ❄️ Banner Nieve (flux, aprobado por owner 2026-11-18): `.../product-images/5429b9c7-.../nieve-banner.webp`.
- ❄️ Inspiración Nieve: `1795038283050-{yuqxeisjjd, w6zybbbc4dd, et53jlvbbf, 7fohsz8y38l, dhe9t85y9ge, zjoe0ial8g}.webp`.
- ❄️ Aromas navideños: Pino `products/xpu7atgmjzq.webp`, Manzana Canela `products/b8pwxy0ah5k.webp` (4:3).
- Productos Nieve comparten 2 fotos comunes: lata Dunaru sobre nieve (72 KB) y 4 pasos (112 KB).
- 🛍️ Sticker Buen Fin: DEPRECAR.
- 🏵️ DDM banner + 6 inspiración en `EDITIONS[ddm]`.

## 6. Known Issues
- 2026-11-18 — 🟡 Cambios de esta sesión sin `tsc` ni QA visual.
- 2026-11-18 — 🟡 Slug `nochebuena-de-navidad-bowl-mbar` (sin "a"); funciona por mapeo explícito.
- 2026-11-16 — 🟠 gpt-image/gemini sin créditos (402); usar flux.
- 2026-11-13 — 🟠 `create/update-product` NO guardan `compare_at_price` en add-on.
- 2026-11-02 — 🟠 PDP de producto de edición archivado = "Producto no encontrado" (14.7).
- 2026-10-14 — 🟠 Duplicar en Dashboard copia variant IDs.
- 2026-10-13 — 🟠 `update-product` con `variants_config` BORRA compare_at.
- 2026-08-21 — 🔴 `update-product` NO soporta imágenes por variante ni cambio de slug.

## 7. Pending / Future Sessions
- [URGENTE] Nieve pendientes 1–5 de FASE 17 (confirmaciones owner + QA).
- [ALTA] Owner archiva add-on Buen Fin y quitar sticker.
- [2026-11-20] PostHog `cart_upsell_viewed` vs `added`.
- [ALTA] 14.5 landing fuera de temporada · 14.7 redirect PDP archivada.
- [2027-09] Regreso DDM (desarchivar).