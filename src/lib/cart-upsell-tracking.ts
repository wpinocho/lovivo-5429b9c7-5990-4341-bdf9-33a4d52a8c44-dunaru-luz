import { trackAddToCart, tracking } from "@/lib/tracking-utils"
import type { Product, ProductVariant } from "@/lib/supabase"

export type CartUpsellType = "promo" | "scent"

/** Una vez por sesión y por tipo, para medir tasa de toma (viewed vs added). */
export const trackCartUpsellViewed = (posthog: any, type: CartUpsellType) => {
  try {
    const key = `cart_upsell_viewed_${type}`
    if (sessionStorage.getItem(key)) return
    sessionStorage.setItem(key, "1")
  } catch {
    /* sin sessionStorage: seguir */
  }
  posthog?.capture?.("cart_upsell_viewed", { type })
}

export const trackCartUpsellAdded = (
  posthog: any,
  params: {
    type: CartUpsellType
    product: Product
    variant?: ProductVariant
    price: number
    currencyCode?: string
    extra?: Record<string, unknown>
  }
) => {
  const { type, product, variant, price, currencyCode, extra } = params
  posthog?.capture?.("cart_upsell_added", {
    type,
    variant: (variant as any)?.title,
    price,
    ...extra,
  })
  trackAddToCart({
    products: [
      tracking.createTrackingProduct({
        id: product.id,
        title: product.title,
        price,
        category: "product",
        variant,
      }),
    ],
    value: price,
    currency: tracking.getCurrencyFromSettings(currencyCode),
    num_items: 1,
  })
}