/**
 * Compatibilidad: la lógica de temporada vive en `src/lib/editions.ts`.
 * Se mantienen estos nombres porque varios módulos (reseñas, pdp-includes,
 * ProductStorySections) importan `contentSlug` desde aquí.
 */
export {
  contentSlug,
  isEditionSlug as isSeasonalSlug,
  ALL_EDITION_SLUGS as SEASONAL_SLUGS,
} from "@/lib/editions"