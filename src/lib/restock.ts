/**
 * PREVENTAS (productos sin stock con reabasto confirmado).
 *
 * Mientras hoy sea anterior a `shipDate`, el producto se sigue vendiendo pero
 * en PDP, tarjetas, carrito, checkout y gracias se muestra la fecha real de
 * envío. Al llegar la fecha, todo se apaga solo (sin re-deploy).
 *
 * ⚠️ Si el proveedor se retrasa: actualizar `shipDate` aquí.
 * ⚠️ El producto debe tener `track_inventory: false` en Dashboard para
 *    seguir vendible con stock 0.
 */

export interface Preorder {
  slugs: string[]
  /** Fecha desde la que se envía (yyyy-mm-dd, hora de CDMX). */
  shipDate: string
  /** Nombre corto para mensajes ("Cuenco Alba"). */
  label: string
  /**
   * Texto que aparece en el título de TODOS los productos de la preventa.
   * Se usa en checkout y gracias, donde las líneas de la orden no traen slug.
   */
  titleIncludes: string
}

export const PREORDERS: Preorder[] = [
  {
    label: "Cuenco Alba",
    titleIncludes: "cuenco alba",
    shipDate: "2026-12-08",
    slugs: [
      "pino-de-invierno-cuenco-alba",
      "vela-rellenable-cuenco-eclipse-copy-ppsiy",
      "cuenco-eclipse-copy-tjby7",
    ],
  },
]

/** Fecha de corte para que "Llega a tiempo para Navidad" sea verdad. */
const CHRISTMAS_CUTOFF = "2026-12-14"

const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
]
const MESES_CORTOS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]

const toDate = (iso: string) => new Date(`${iso}T00:00:00-06:00`)

const isActive = (p: Preorder) => Date.now() < toDate(p.shipDate).getTime()

/** Preventa activa para un slug (o null). */
export function getPreorder(slug?: string | null): Preorder | null {
  if (!slug) return null
  return PREORDERS.find((p) => isActive(p) && p.slugs.includes(slug)) ?? null
}

export const isPreorderSlug = (slug?: string | null) => !!getPreorder(slug)

const parts = (iso: string) => {
  const [, m, d] = iso.split("-").map(Number)
  return { day: d, month: m - 1 }
}

/** "8 de diciembre" */
export function formatShipDate(iso: string) {
  const { day, month } = parts(iso)
  return `${day} de ${MESES[month]}`
}

/** "8 dic" */
export function formatShipDateShort(iso: string) {
  const { day, month } = parts(iso)
  return `${day} ${MESES_CORTOS[month]}`
}

export const arrivesForChristmas = (p: Preorder) => p.shipDate <= CHRISTMAS_CUTOFF

/** Preventa activa por título de producto (líneas de orden sin slug). */
export function getPreorderByTitle(title?: string | null): Preorder | null {
  if (!title) return null
  const t = title.toLowerCase()
  return PREORDERS.find((p) => isActive(p) && t.includes(p.titleIncludes)) ?? null
}

/** Preventa más tardía entre títulos de una orden + si hay productos en stock mezclados. */
export function getOrderPreorder(titles: (string | null | undefined)[]) {
  let preorder: Preorder | null = null
  let mixed = false
  for (const title of titles) {
    const p = getPreorderByTitle(title)
    if (!p) mixed = true
    else if (!preorder || p.shipDate > preorder.shipDate) preorder = p
  }
  return { preorder, mixed: !!preorder && mixed }
}

/** Preventa con la fecha más tardía entre una lista de slugs (carrito / orden). */
export function getLatestPreorder(slugs: (string | null | undefined)[]): Preorder | null {
  let latest: Preorder | null = null
  for (const slug of slugs) {
    const p = getPreorder(slug)
    if (p && (!latest || p.shipDate > latest.shipDate)) latest = p
  }
  return latest
}