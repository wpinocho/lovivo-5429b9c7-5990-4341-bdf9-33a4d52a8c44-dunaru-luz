/**
 * DÚO DE TONOS: la clienta elige 2 de los 3 tonos.
 *
 * En la base de datos el Dúo tiene 3 variantes (una por combinación):
 * "Marfil + Champagne", "Marfil + Ónix", "Champagne + Ónix" en la opción
 * `Tonos`. En la PDP NO se muestran las combinaciones: se muestran los 3 tonos
 * y, al elegir 2, seleccionamos la variante que corresponde. Así el carrito y
 * el checkout reciben UN producto cuyo nombre de variante dice los dos tonos.
 *
 * ⚠️ Si la owner renombra variantes en el Dashboard, deben seguir el formato
 * "Tono + Tono" en el orden de DUO_TONES.
 */

const IMG =
  "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/products/"

export const DUO_SLUGS = ["d-o-de-tonos"]
export const DUO_OPTION_NAME = "Tonos"
export const DUO_PICK_COUNT = 2

/** Imagen 1 de cada variante de Cera Duna · 500 g. */
export const DUO_TONES = [
  { name: "Marfil", img: `${IMG}m4gndhjxsj.webp` },
  { name: "Champagne", img: `${IMG}siffm8eo71e.webp` },
  { name: "Ónix", img: `${IMG}smwszrq34a.webp` },
] as const

const SEPARATOR = " + "

export const isDuoSlug = (slug?: string | null) =>
  !!slug && DUO_SLUGS.includes(slug)

/** ["Ónix", "Marfil"] → "Marfil + Ónix" (orden canónico). */
export const duoValueFromTones = (tones: string[]) =>
  DUO_TONES.map((t) => t.name)
    .filter((name) => tones.includes(name))
    .join(SEPARATOR)

/** "Marfil + Ónix" → ["Marfil", "Ónix"] */
export const tonesFromDuoValue = (value?: string | null) =>
  value ? value.split(SEPARATOR).map((t) => t.trim()).filter(Boolean) : []