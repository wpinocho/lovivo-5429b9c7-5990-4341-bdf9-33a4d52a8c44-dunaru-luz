import { getScentImageByVariantName, SCENT_OPTION_NAME } from "@/lib/scents"

/**
 * Foto representativa de una variante.
 *
 * Varios productos comparten el MISMO packshot como primera imagen en todas sus
 * variantes (ej. el Vaso de Vidrio), y la foto del color real vive en segunda
 * posición. Si tomáramos siempre `image_urls[0]` la imagen nunca cambiaría al
 * elegir otro color. Por eso buscamos la primera foto EXCLUSIVA de la variante:
 * la que ninguna otra variante del producto usa.
 *
 * Fallback: los aromas no tienen imágenes asignadas por variante, pero su
 * flat-lay vive en `src/lib/scents.ts`, así que lo resolvemos por nombre.
 */
export const getVariantDisplayImage = (
  variant: any,
  variants: any[] | undefined | null
): string | undefined => {
  if (!variant) return undefined

  const variantImages: string[] = Array.isArray(variant.image_urls)
    ? variant.image_urls
    : []

  if (Array.isArray(variants) && variants.length >= 2 && variantImages.length > 0) {
    const exclusive = variantImages.find(
      (url) =>
        !variants.some(
          (other: any) =>
            other?.id !== variant.id &&
            Array.isArray(other?.image_urls) &&
            other.image_urls.includes(url)
        )
    )
    if (exclusive) return exclusive
  }

  const scentName = variant?.options?.[SCENT_OPTION_NAME] || variant?.title
  const scentImage = getScentImageByVariantName(scentName)
  if (scentImage) return scentImage

  return variantImages[0] || (variant.image as string | undefined) || undefined
}