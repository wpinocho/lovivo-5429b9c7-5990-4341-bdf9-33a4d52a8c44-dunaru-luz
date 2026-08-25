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
  vierte: `${MEDIA}1787699972902-dld268c7c0u.webp`,
  inserta: `${MEDIA}1787699972902-6ha0kcq29g.webp`,
  enciende: `${MEDIA}1787699972902-11zjzn59pysq.webp`,
  renueva: `${MEDIA}1787699972902-pr81fsb4jso.webp`,
} as const

/** Retrato editorial usado en "Quiénes somos / La luz que se queda". */
export const BRAND_STORY_IMAGE = STEP_IMAGES.vierte