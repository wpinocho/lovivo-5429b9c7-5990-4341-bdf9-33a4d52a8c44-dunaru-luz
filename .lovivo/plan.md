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
- ⚠️ La owner repriza, crea, DUPLICA y ARCHIVA desde el Dashboard. **NUNCA hardcodear precios.** Al duplicar el slug queda `...-copy-xxxxx` y el agente NO puede cambiar slugs.
- 🗓️ **EDICIONES DE TEMPORADA = sistema anual reciclable** (`src/lib/editions.ts`, construido 2026-11-16). Activa ahora: **NIEVE (Navidad)**. DDM regresa oct 2027. Archivar, nunca borrar. ⛔ NO fecha límite de pedido en la web.
- 🛍️ **PROMOS (Buen Fin, Hot Sale…)**: add-on con descuento en PDP de kits + carrito (`src/lib/promo-addon.ts`). Sticker arriba derecha (PDP + tarjetas).
- 🛒 **UPSELL CARRITO**: una sugerencia a la vez: promo (si aplica) → aroma.

### 🏷️ SISTEMA DE NOMBRES — `[Qué es] · [Formato]`
| Slug | Título | Precio | Compare |
|---|---|---|---|
| kit-vaso-de-vidrio | Vela Rellenable · Vaso de Vidrio | $749 | $899 |
| kit-vaso-de-concreto | Vela Rellenable · Cuenco Eclipse | $999 | $1,199 |
| vela-rellenable-cuenco-eclipse-copy-ppsiy | Vela Rellenable · Cuenco Alba | $999 | $1,199 |
| vela-rellenable-cuenco-dunaru | Vela Rellenable · Cuenco Dunaru | $1,199 | — |
| vela-rellenable-bowl-ambar | Vela Rellenable · Bowl Ámbar | $1,199 | $1,299 |
| vela-bowl-de-acero | Vela Rellenable · Bowl de Acero | $899 | ARCHIVADO |
| perlas-originales-500-g | Cera Duna · 500 g | $499 | — |
| reserva-1-kg | Cera Duna · 1 kg | $849 | $999 |
| d-o-de-tonos | Dúo de Tonos · 1 kg | $899 | ⚠️ falta $999 |
| tr-o-de-tonos | Trío de Tonos · 1.5 kg | $1,199 | $1,499 |
| bowl-negro | Cuenco Eclipse (recipiente) | $549 | $699 |
| cuenco-eclipse-copy-tjby7 | Cuenco Alba (recipiente) | $549 | $699 |
| cuenco-dunaru | Cuenco Dunaru (recipiente) | $799 | — |
| bowl-ambar | Bowl Ámbar (recipiente) | $699 | — |
| bowl-espejo-de-acero | Bowl Espejo de Acero | $399 | $499 |
| vaso-extra-transparente | Vaso de Vidrio Transparente | $249 | — |
| pack-30-mechas | 30 Mechas de Algodón | $99 | — |
| esencia-para-vela-10-ml | Esencia para Vela · 10 ml | $99 | — |
| 🛍️ cera-duna-500-g-buen-fin | Add-on Buen Fin (id `02a9c4b1-...`) | $249 | OCULTO |
| ❄️ (owner creando 2026-11-16) | `Vela Rellenable Nieve · [Recipiente]`, `Cera Duna Nieve · 500 g / 1 kg` | ? | — |
| 🏵️ 7 productos Cempasúchil + esencia | ARCHIVADOS desde 2026-11-02 | | |

⚠️ Copias hardcodeadas de títulos: `CATALOG_FALLBACK` (IndexUI), `FOOTER_SHOP_LINKS` (EcommerceTemplate), `src/lib/navigation.ts`.

### CATÁLOGO — otros datos
- CUENCO DUNARU 20×6 cm. ECLIPSE/ALBA 14×5 no confirmado. BOWL ÁMBAR medidas no confirmadas.
- ESENCIA: opción `Aroma`, 6 variantes. Cempasúchil = producto propio oculto (`SEASONAL_SCENTS`, solo ediciones con `seasonalScents: true` = DDM).
- DÚO: `<DuoTonePicker />`. Price rule 500 g: 2 uds 10% / 3 uds 15%. 30 mechas por 500 g.
- COLECCIONES: `kits`, `recipientes`, `accesorios`, `dia-de-muertos`, **`navidad`** (id `1f05814b-5ea4-451c-9d63-e76b2be0b88a`, "Navidad · Nieve", creada 2026-11-16).
- ORDEN = `src/lib/catalog-order.ts` (grupos de edición generados desde `EDITIONS`, con `match` para slugs nuevos). `HIDDEN_FROM_CATALOG_SLUGS` = esencia cempasúchil + add-on Buen Fin.
- Color en kits: `Color`/`Colores`, Marfil / Champagne / Ónix. `track_inventory: false`.

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
| 🏵️ Cempasúchil | 30 88% 55% | `dunaru-cempasuchil` (DDM) |
| ❄️ Nieve (escarcha) | 205 32% 76% | `--dunaru-nieve` |
| Acento edición | var | `--edition-accent` → clase tailwind **`dunaru-edition`** |
- Fuente de verdad `src/index.css`. Instrument Serif + Manrope. `--radius: 0`. Móvil-first.
- oliva = selección + CTA · periwinkle = navegación · terracota = acentos/promos.
- `.full-bleed`. `body { overflow-x: clip }`. `PageTemplate` default `max-w-7xl px-4 py-6`.
- `ProductCardUI`: foto 4:5, chips con nombre, `tone="dark"` para landings de edición.

### 🗓️ SISTEMA DE EDICIONES (`src/lib/editions.ts`) ✅ 2026-11-16
- `EDITIONS[]`: id, name, occasion, collectionHandle, path, canonicalPath, navLabel, eyebrow, title, heroTagline, heroImage/Alt, home{titleLead,titleEm,titleTail,intro}, notice, inspiration{eyebrow,titleLead,titleEm,intro,ideas[]}, accentClass (`edition-*`), pdpThemeClass (`theme-*`), products (slug→base, orden), slugPrefixes, headlines, seasonalScents.
- Helpers: `editionForSlug/Handle/Path`, `isEditionSlug`, `contentSlug` (explícito o por sufijo: vaso-de-vidrio, cuenco-dunaru, cuenco-eclipse, cuenco-alba, bowl-ambar, 500-g, 1-kg; quita `-copy-xxx`), `editionRank`, `editionHeadline`, `fetchEditionProducts` (activos por slugs explícitos + prefijos).
- `src/lib/seasonal.ts` = shim de compatibilidad (re-exporta contentSlug, isSeasonalSlug, SEASONAL_SLUGS).
- Componentes genéricos: `EditionCollectionHero`, `EditionInspirationGallery` (null si no hay ideas; dialog lleva accentClass porque es portal), `EditionHomeSection` + `EditionHomeSections` (home, una por edición, se ocultan solas), `SeasonalRibbon({edition})` + `useSeasonalTheme(edition)` (pone theme-* y edition-* en <html>), `LimitedEditionTag/Notice({edition})`, sello en `ProductCardUI`.
- Landing: `Collection.tsx` acepta prop `handle`; si es edición carga productos con `fetchEditionProducts` (NO depende de collection_products), canonical = `edition.canonicalPath`.
- Menú: `navigation.ts` PRIMARY_LINKS genera links de `EDITIONS`; `MainNav` oculta cada uno si no hay producto activo de esa edición.
- Sitemap: `/navidad` agregado en `scripts/generate-sitemap.ts`.
- CHECKLIST NUEVA EDICIÓN: entrada en `EDITIONS` + `--dunaru-X` y `.edition-X`/`.theme-X` en index.css + ruta corta en App.tsx + sitemap + colección en DB.

### Otros sistemas
- TRACKING `src/lib/tracking-utils.ts`. ESTATUS `useActiveProductSlugs.ts`. RESEÑAS `src/data/reviews.ts`. DEEP LINK `?variante=` (no simplificar).
- ADD-ONS PDP: `scentSelection` + `addonSelection`/`activeAddon`; `handleAddToCartWithAddOns` agrega kit → aroma → promo.
- CANDADO PROMO: `guardedCartReducer` → `enforcePromoAddonLimit`.
- PROMO ADD-ON: `promo-addon.ts`, `usePromoAddon`, `PromoAddonSelector`, `PromoStickerBadge`.
- UPSELL CARRITO (`src/components/cart/`): `CartUpsell` → `CartPromoUpsell` / `CartScentUpsell`. Tracking `cart-upsell-tracking.ts`.
- CHECKLIST PDP vela nueva: PDP_HEADLINE + PDP_BENEFITS, pdp-includes, SCENT_ENABLED_SLUGS, catalog-order, SHOP_CARDS + CATALOG_FALLBACK, [opc] PDP_CONTENT, [promo] `PROMO_ADDON.kitSlugs`.
- Orden PDP: garantías → 4 pasos → Reseñas → (galería edición) → bloques → comparativa → FAQ → cierre.
- HOME: hero → beneficios → franja(s) edición → 4 pasos → Elige tu vela → Ritual → Reviews → Scents → Tonos → CasaReal → BrandStory → CompareTable → FAQ → newsletter.

---

## 3. Active Plan

### ❄️ FASE 17: EDICIÓN NIEVE (Navidad) — 🟡 CÓDIGO LISTO 2026-11-16, esperando productos de la owner
- Confirmado por owner: URL `/navidad`, eyebrow "Edición limitada · Navidad", título "NIEVE", productos `Vela Rellenable Nieve · [Recipiente]`.
- Hecho: sistema de ediciones (FASE 14 core), colección `navidad` en DB, banner generado (flux, ramas de pino con escarcha, sin producto), sección home, menú "Navidad", sellos, PDP (ribbon, tag, aviso, papel frío `.theme-nieve`, headlines por slug previsto), sitemap.
- ⏳ Siguiente al recibir aviso de la owner:
  1. `list-data products search=nieve` → verificar slugs reales; si difieren de `vela-rellenable-nieve-*` / `cera-duna-nieve-*` agregarlos a `EDITIONS[nieve].products` + headlines.
  2. Agregar productos a la colección `navidad` (opcional, la landing no lo necesita).
  3. Verificar contenido heredado (pdp-includes, beneficios, reseñas) por `contentSlug`.
  4. Pedir/subir fotos de inspiración (3–6) → `inspiration.ideas`; reemplazar banner por foto real si la owner manda una.
  5. ¿Aroma de temporada (pino/canela)? → producto oculto + `SEASONAL_SCENTS` por edición (hoy solo DDM).
  6. QA: `/navidad`, `/categorias/navidad`, home, menú, PDP, carrito, móvil 375; `npx tsc --noEmit`.
  7. Decir a la owner que publique (Borrador → Activo).

### 🛒 FASE 16: UPSELL CARRITO — ✅ 2026-11-13 · ⏳ QA 16.5
### 🛍️ FASE 15: BUEN FIN — vive hasta 17 nov 23:59 · ⏳ 15.a QA, 15.c sitemap/búsqueda, 15.d top bar, 15.e owner archiva 18 nov
### FASE 14: EDICIONES — ✅ core 2026-11-16. Pendiente: 14.5 landing fuera de temporada ("regresa en…" + newsletter en vez de "Muy pronto"), 14.7 PDP archivada → `<Navigate>` al base, footer dinámico.
### FASE 13 Cuenco Alba (13.b/c owner) · FASE 12 Dúo QA · FASE 10 Bowl Ámbar · FASE 8 varios

---

## 4. Recent Changes
- 2026-11-16 — ❄️ Sistema de ediciones (`editions.ts`) + edición NIEVE: landing `/navidad`, colección `navidad`, banner, sección home, menú, sellos, PDP. DDM migrado al mismo sistema (sin cambios visuales).
- 2026-11-16 — 📋 FASE 17 en definición: auditado lo hardcodeado a DDM, instrucciones de productos a owner.
- 2026-11-13 — 🛒 FASE 16 construida: upsell en carrito Buen Fin → Aroma.
- 2026-11-13 — 🏷️ Sticker Buen Fin flotante en PDP y tarjetas de 5 kits.
- 2026-11-13 — 🛍️ FASE 15 core: add-on Buen Fin, candado, producto oculto + redirect.
- 2026-11-09 — 🃏 Tarjetas: chips con nombre en vez de swatches.
- 2026-10-14 — 🏵️ Cempasúchil · Cuenco Eclipse y · Cuenco Alba publicados.
- 2026-10-14 — 🏠 "Elige tu vela": + Cuenco Alba y Bowl Ámbar.
- 2026-10-13 — 🎨 Dúo de Tonos: selector de 2 tonos.
- 2026-10-10 — 🏵️ PDPs de temporada: fondo cálido, franja, breadcrumb.
- 2026-10-10 — 🏵️ `/categorias/dia-de-muertos` rediseñada.
- 2026-10-09 — 🏵️ Aroma Cempasúchil.

## 5. Image Inventory
- Fotos de producto: 1122×1402 (4:5), webp. Uploads owner: `.../message-images/58337cbc-5a9f-4862-810a-1470616566de/`.
- ❄️ Banner Nieve (generado flux, 1344×752, provisional): `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5429b9c7-5990-4341-bdf9-33a4d52a8c44/nieve-banner.webp`. Reemplazar si la owner manda foto real.
- 🛍️ Sticker Buen Fin: `.../product-images/5429b9c7-.../buen-fin-badge.webp`. DEPRECAR tras 17 nov.
- Portadas home: Eclipse `4miuldwd4fr` · Alba `cjqxfk2uuyh` · Ámbar `ki2tpr6i8vh`. Tonos 500 g: Marfil `m4gndhjxsj` · Champagne `siffm8eo71e` · Ónix `smwszrq34a`.
- 🏵️ DDM banner + 6 inspiración: ahora en `EDITIONS[ddm]`.
- UGC reseñas, cuenco bloques, 4 pasos, hero desktop `1787702019949-nscqjcvsz0r.webp`, hero móvil `hero-dunaru-mobile.mp4`, ritual, casa real: sin cambios.
- 🔴 FALTAN: fotos Nieve (productos, inspiración, banner real), packshots esencia, empaque nuevo.

## 6. Known Issues
- 2026-11-16 — 🟠 Generación de imágenes gpt-image/gemini falló (402 créditos). Se usó flux.pro.
- 2026-11-16 — 🟡 Refactor de ediciones sin `tsc` ni QA visual ejecutado por el agente.
- 2026-11-16 — 🟡 Slugs Nieve PREVISTOS (`vela-rellenable-nieve-*`, `cera-duna-nieve-*`); prefijos los atrapan igual, pero headlines solo aplican a slugs exactos.
- 2026-11-13 — 🟠 `create/update-product` NO guardan `compare_at_price` en el add-on.
- 2026-11-02 — 🟠 PDP de producto de edición archivado = "Producto no encontrado" (14.7).
- 2026-11-02 — 🟡 Landing de edición sin productos = "Muy pronto" genérico (14.5).
- 2026-10-14 — 🟠 Duplicar en Dashboard copia variant IDs → crear nuevos.
- 2026-10-13 — 🟠 `update-product` con `variants_config` BORRA el compare_at.
- 2026-08-21 — 🔴 `update-product` NO soporta imágenes por variante ni cambio de slug.

## 7. Pending / Future Sessions
- [URGENTE] Nieve: cuando la owner avise, pasos 1–7 de FASE 17.
- [URGENTE] QA FASE 16 + 15.a; sitemap 15.c; top bar 15.d.
- [2026-11-18] Owner archiva add-on Buen Fin.
- [2026-11-20] PostHog `cart_upsell_viewed` vs `added`.
- [ALTA] 14.5 landing fuera de temporada · 14.7 redirect PDP archivada · footer con link de edición.
- [ALTA] QA Dúo, variantes/descr. Cuenco Alba, Bowl Ámbar medidas.
- [2027-09] Regreso DDM (desarchivar; el sistema lo muestra solo).