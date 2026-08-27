/**
 * catalog-order — Orden de merchandising del catálogo dunaru.
 *
 * Fuente única de verdad del ORDEN en que se muestran los productos.
 * ⚠️ Aquí SOLO viven slugs. Títulos, precios e imágenes siempre vienen de la DB,
 * porque el owner los edita desde el Dashboard.
 *
 * Lógica narrativa: primero "quiero empezar" (kits completos), luego
 * "quiero repetir" (recargas), luego "quiero más" (colecciones de tonos)
 * y al final refacciones y recipientes sueltos.
 */

export type CatalogGroup = {
  id: string
  label: string
  slugs: string[]
}

export const CATALOG_GROUPS: CatalogGroup[] = [
  {
    id: "kits",
    label: "Empieza aquí",
    slugs: [
      "kit-vaso-de-vidrio",
      "kit-vaso-de-concreto",
      "vela-rellenable-cuenco-dunaru",
      "vela-bowl-de-acero",
    ],
  },
  {
    id: "recargas",
    label: "Cera Duna",
    slugs: ["perlas-originales-500-g", "reserva-1-kg"],
  },
  {
    id: "tonos",
    label: "Colecciones de tonos",
    slugs: ["d-o-de-tonos", "tr-o-de-tonos"],
  },
  {
    id: "accesorios",
    label: "Accesorios",
    slugs: [
      "esencia-para-vela-10-ml",
      "vaso-extra-transparente",
      "cuenco-dunaru",
      "bowl-negro",
      "bowl-espejo-de-acero",
      "pack-30-mechas",
    ],
  },
]

/**
 * Productos que SÍ se pueden comprar (y aparecen en carrito y checkout) pero
 * NO deben listarse en grids, colecciones ni recomendaciones automáticas.
 * Hoy está vacío: la esencia ya se lista en "Accesorios" como tarjeta que
 * lleva a su propia página (ver CHOOSE_ON_PDP).
 */
export const HIDDEN_FROM_CATALOG_SLUGS: string[] = []

/**
 * Productos que se listan en el catálogo pero NO se agregan al carrito desde la
 * tarjeta: primero hay que elegir una opción en su propia página (el aroma).
 * La tarjeta oculta los selectores y su botón navega a la PDP.
 */
export const CHOOSE_ON_PDP: Record<string, { cta: string }> = {
  "esencia-para-vela-10-ml": { cta: "Elegir aroma" },
}

export const getChooseOnPdp = (slug?: string | null) =>
  (slug && CHOOSE_ON_PDP[slug]) || null

export const isHiddenFromCatalog = (slug?: string | null): boolean =>
  !!slug && HIDDEN_FROM_CATALOG_SLUGS.includes(slug)

/** Quita del listado los productos marcados como ocultos del catálogo. */
export function filterCatalogVisible<T extends { slug?: string | null }>(
  items: T[]
): T[] {
  return items.filter((i) => !isHiddenFromCatalog(i.slug))
}

/** Etiqueta para productos nuevos que aún no están en ningún grupo. */
export const CATALOG_FALLBACK_LABEL = "Más de dunaru"

/** Orden plano derivado de los grupos. */
export const CATALOG_ORDER: string[] = CATALOG_GROUPS.flatMap((g) => g.slugs)

const orderIndex = new Map(CATALOG_ORDER.map((slug, i) => [slug, i]))

type Sortable = { slug?: string | null; created_at?: string | null }

/**
 * Ordena por CATALOG_ORDER. Los slugs desconocidos (productos nuevos creados
 * desde el Dashboard) no desaparecen: se van al final, del más nuevo al más viejo.
 */
export function sortByCatalogOrder<T extends Sortable>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const ia = orderIndex.has(a.slug || "") ? (orderIndex.get(a.slug || "") as number) : Number.MAX_SAFE_INTEGER
    const ib = orderIndex.has(b.slug || "") ? (orderIndex.get(b.slug || "") as number) : Number.MAX_SAFE_INTEGER
    if (ia !== ib) return ia - ib
    // Ambos fuera de la lista curada: más recientes primero.
    const da = a.created_at ? Date.parse(a.created_at) : 0
    const db = b.created_at ? Date.parse(b.created_at) : 0
    return db - da
  })
}

/**
 * Agrupa productos ya ordenados en las secciones del catálogo.
 * Los grupos vacíos se omiten (no se renderiza su encabezado).
 */
export function groupByCatalog<T extends Sortable>(
  items: T[]
): { id: string; label: string; items: T[] }[] {
  const groups = CATALOG_GROUPS.map((g) => ({
    id: g.id,
    label: g.label,
    items: items.filter((p) => g.slugs.includes(p.slug || "")),
  })).filter((g) => g.items.length > 0)

  const rest = items.filter((p) => !CATALOG_ORDER.includes(p.slug || ""))
  if (rest.length > 0) {
    groups.push({ id: "otros", label: CATALOG_FALLBACK_LABEL, items: rest })
  }

  return groups
}