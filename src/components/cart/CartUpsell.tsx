import { useEffect } from "react"
import { useCart, type CartProductItem } from "@/contexts/CartContext"
import { usePostHog } from "@/contexts/PostHogContext"
import {
  isPromoAddonSlug,
  isPromoKitSlug,
  isPromoLive,
  promoAddonRoom,
} from "@/lib/promo-addon"
import { supportsScentAddon } from "@/lib/scents"
import type { PromoAddonData } from "@/hooks/usePromoAddon"
import { useScentProduct } from "@/hooks/useScentProduct"
import { trackCartUpsellViewed } from "@/lib/cart-upsell-tracking"
import { CartPromoUpsell } from "./CartPromoUpsell"
import { CartScentUpsell } from "./CartScentUpsell"

/**
 * UPSELL EN CARRITO: una sola sugerencia a la vez, en secuencia.
 *  1. Bolsa de la promo de temporada (si hay vela de la promo y cabe otra bolsa).
 *  2. Aroma (si hay algo con cera y todavía no hay ninguna esencia).
 */
export const CartUpsell = ({ promo }: { promo: PromoAddonData | null }) => {
  const { state } = useCart()
  const posthog = usePostHog()
  const items = state.items
  const lines = items.filter((i) => i.type === "product") as CartProductItem[]

  const showPromo =
    !!promo &&
    isPromoLive() &&
    lines.some((i) => isPromoKitSlug(i.product?.slug)) &&
    promoAddonRoom(items) > 0

  const hasWax = lines.some(
    (i) => supportsScentAddon(i.product?.slug) || isPromoAddonSlug(i.product?.slug)
  )
  const hasScent = lines.some((i) => i.product?.slug?.startsWith("esencia-para-vela"))
  const wantScent = !showPromo && hasWax && !hasScent
  const scentProduct = useScentProduct(wantScent)

  const type = showPromo ? "promo" : wantScent && scentProduct ? "scent" : null

  useEffect(() => {
    if (type) trackCartUpsellViewed(posthog, type)
  }, [type, posthog])

  if (!type) return null

  return (
    <section aria-label="Completa tu vela" className="space-y-2 pt-2">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/60">
        Completa tu vela
      </p>
      {type === "promo" && promo ? (
        <CartPromoUpsell promo={promo} items={items} />
      ) : scentProduct ? (
        <CartScentUpsell product={scentProduct} />
      ) : null}
    </section>
  )
}