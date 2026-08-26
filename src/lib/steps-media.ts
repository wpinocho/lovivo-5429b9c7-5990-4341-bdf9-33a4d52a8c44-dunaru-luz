/**
 * FUENTE ÚNICA de las fotos del ritual "Crea tu vela en 4 pasos".
 *
 * Las mismas cuatro imágenes se usan en la home (IndexUI), en todas las PDP
 * (ProductStorySections) y en /como-funciona. Si el owner sube fotos nuevas,
 * se cambian AQUÍ y se propagan a todo el sitio.
 *
 * Orden fijo: 1 Vierte · 2 Inserta · 3 Enciende · 4 Renueva.
 */
const MEDIA =
  "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/"

export const STEP_IMAGES = {
  vierte: `${MEDIA}1787701006060-mdjjspbepql.webp`,
  inserta: `${MEDIA}1787699972902-6ha0kcq29g.webp`,
  enciende: `${MEDIA}1787699972902-pr81fsb4jso.webp`,
  renueva: `${MEDIA}1787699972902-11zjzn59pysq.webp`,
} as const

/** Retrato editorial usado en "Quiénes somos / La luz que se queda". */
export const BRAND_STORY_IMAGE = STEP_IMAGES.vierte

/** Fondo atmosférico a sangre del bloque "El ritual". */
export const RITUAL_IMAGE = `${MEDIA}1787701006060-vpgjgog2juh.webp`

/**
 * Composición horizontal del hero de la home.
 * Se usa en desktop (object-center) y también en móvil recortada a la derecha
 * (object-right), donde queda el bowl y la mano vertiendo la cera.
 */
export const HERO_DESKTOP_IMAGE = `${MEDIA}1787702019949-nscqjcvsz0r.webp`

/**
 * HERO MÓVIL — video vertical 9:16.
 * MP4 H.264 720×1280, sin pista de audio, ~1.8 MB. Se reproduce solo en móvil.
 * El póster es el primer frame exacto del video, así el fundido es invisible.
 * ⛔ No sustituir el póster por la foto horizontal: provocaría un salto visual.
 */
const STORE_MEDIA =
  "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/"

export const HERO_MOBILE_VIDEO = `${STORE_MEDIA}store-videos/5429b9c7-5990-4341-bdf9-33a4d52a8c44/hero-dunaru-mobile.mp4`

export const HERO_MOBILE_POSTER = `${STORE_MEDIA}product-images/5429b9c7-5990-4341-bdf9-33a4d52a8c44/hero-dunaru-mobile-poster.webp`