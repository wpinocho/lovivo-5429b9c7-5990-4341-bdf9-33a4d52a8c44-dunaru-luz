/**
 * EDICIÓN DE TEMPORADA · CEMPASÚCHIL (Día de Muertos 2026)
 *
 * Los productos de temporada son productos SEPARADOS en la DB (sin variantes)
 * pero reutilizan todo el contenido de PDP de su producto base (qué incluye,
 * historia, beneficios, aroma, reseñas) vía `contentSlug()`.
 *
 * Fin de temporada: archivar los 4 productos desde el Dashboard. La sección de
 * la home, el link del menú y el grupo del catálogo desaparecen solos, y las
 * PDPs archivadas redirigen al producto base.
 */

/** slug de temporada → slug del producto base cuyo contenido hereda. */
export const SEASONAL_BASE_SLUG: Record<string, string> = {
  "vela-rellenable-cempasuchil-vaso-de-vidrio": "kit-vaso-de-vidrio",
  "vela-rellenable-cempasuchil-cuenco-dunaru": "vela-rellenable-cuenco-dunaru",
  "vela-rellenable-cempasuchil-bowl-ambar": "vela-rellenable-bowl-ambar",
  "cera-duna-cempasuchil-500-g": "perlas-originales-500-g",
  "cera-duna-cempasuchil-1-kg": "reserva-1-kg",
}

/** Orden de merchandising de la edición. */
export const SEASONAL_SLUGS: string[] = Object.keys(SEASONAL_BASE_SLUG)

export const DDM_COLLECTION_HANDLE = "dia-de-muertos"
export const DDM_PATH = "/dia-de-muertos"

/** Titular propio de la PDP para cada producto de temporada. */
export const SEASONAL_HEADLINE: Record<string, string> = {
  "vela-rellenable-cempasuchil-vaso-de-vidrio":
    "El naranja del cempasúchil en una vela lista para tu ofrenda. Cuando se acabe, la vuelves a llenar.",
  "vela-rellenable-cempasuchil-cuenco-dunaru":
    "Una luz generosa para el centro de tu altar, en el color de la flor que guía el camino.",
  "vela-rellenable-cempasuchil-bowl-ambar":
    "Vidrio ámbar y cera cempasúchil: una vela que brilla en tonos de fuego sobre tu altar.",
  "cera-duna-cempasuchil-500-g":
    "El color del cempasúchil para el recipiente que ya tienes. Edición limitada de temporada.",
  "cera-duna-cempasuchil-1-kg":
    "Cera cempasúchil para llenar varios recipientes de tu altar. Edición limitada de temporada.",
}

export const isSeasonalSlug = (slug?: string | null): boolean =>
  !!slug && slug in SEASONAL_BASE_SLUG

/** Slug cuyo contenido de PDP se debe usar (el base si es de temporada). */
export const contentSlug = (slug: string): string =>
  SEASONAL_BASE_SLUG[slug] ?? slug