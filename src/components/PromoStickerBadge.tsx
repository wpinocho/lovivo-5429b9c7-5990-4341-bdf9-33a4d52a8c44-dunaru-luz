import { PROMO_ADDON, isPromoKitSlug, isPromoLive } from "@/lib/promo-addon"
import { cn } from "@/lib/utils"

/**
 * Sticker de la promo (Buen Fin) flotando arriba a la derecha de la foto.
 * Solo aparece en los kits de la promo y mientras la promo esté viva.
 * El padre debe ser `relative`.
 */
interface PromoStickerBadgeProps {
  slug?: string | null
  size?: "card" | "pdp"
  className?: string
}

export const PromoStickerBadge = ({ slug, size = "pdp", className }: PromoStickerBadgeProps) => {
  if (!isPromoKitSlug(slug) || !isPromoLive()) return null

  return (
    <img
      src={PROMO_ADDON.badgeImage}
      alt={PROMO_ADDON.badgeAlt}
      width={400}
      height={373}
      decoding="async"
      className={cn(
        "pointer-events-none absolute z-10 h-auto select-none drop-shadow-md",
        size === "card"
          ? "right-1.5 top-1.5 w-14 sm:w-[4.5rem]"
          : "right-2 top-2 w-20 md:right-3 md:top-3 md:w-28",
        className
      )}
    />
  )
}