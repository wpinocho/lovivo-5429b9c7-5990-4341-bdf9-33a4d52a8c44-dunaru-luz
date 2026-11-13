import { useEffect, useMemo, useState } from "react"
import type { ProductVariant } from "@/lib/supabase"
import { useCart, type CartItem } from "@/contexts/CartContext"
import { useSettings } from "@/contexts/SettingsContext"
import { usePostHog } from "@/contexts/PostHogContext"
import { isVariantAvailable } from "@/lib/utils"
import {
  PROMO_ADDON,
  getColorValue,
  matchColorVariant,
  suggestPromoAddonColor,
} from "@/lib/promo-addon"
import type { PromoAddonData } from "@/hooks/usePromoAddon"
import { trackCartUpsellAdded } from "@/lib/cart-upsell-tracking"
import { CartUpsellCard } from "./CartUpsellCard"

interface CartPromoUpsellProps {
  promo: PromoAddonData
  items: CartItem[]
}

/** Bolsa Buen Fin dentro del carrito: color de la vela preseleccionado, 1 clic. */
export const CartPromoUpsell = ({ promo, items }: CartPromoUpsellProps) => {
  const { addItem } = useCart()
  const { formatMoney, currencyCode } = useSettings()
  const posthog = usePostHog()
  const { product, compareAt } = promo

  const variants = useMemo(
    () => ((product as any).variants || []) as ProductVariant[],
    [product]
  )
  const isAvail = (v: ProductVariant) =>
    (product as any).track_inventory === false || isVariantAvailable(v)

  const suggestedColor = useMemo(() => suggestPromoAddonColor(items), [items])
  const [touched, setTouched] = useState(false)
  const [variantId, setVariantId] = useState<string | undefined>()

  useEffect(() => {
    if (touched) return
    const available = variants.filter(isAvail)
    const match = matchColorVariant(available, suggestedColor)
    setVariantId((match || available[0] || variants[0])?.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [suggestedColor, touched, variants])

  const variant = variants.find((v) => v.id === variantId)
  const price = Number(variant?.price ?? product.price ?? 0)
  const savings = compareAt && compareAt > price ? compareAt - price : 0
  const idx = Math.max(0, variants.findIndex((v) => v.id === variantId))
  const images: string[] = (product as any).images || []
  const thumb = (variant as any)?.image_urls?.[0] || images[idx] || images[0]

  const handleAdd = () => {
    if (variants.length && !variant) return
    addItem(product, variant)
    trackCartUpsellAdded(posthog, {
      type: "promo",
      product,
      variant,
      price,
      currencyCode,
      extra: { color: getColorValue(variant) },
    })
    setTouched(false)
  }

  return (
    <CartUpsellCard
      eyebrow={PROMO_ADDON.label}
      eyebrowTone="promo"
      title="Agrega otra bolsa de 500 g + 30 mechas"
      thumb={thumb}
      thumbAlt={`Cera Duna 500 g ${getColorValue(variant) || ""}`.trim()}
      price={formatMoney(price)}
      compareAt={savings > 0 && compareAt ? formatMoney(compareAt) : null}
      savings={savings > 0 ? formatMoney(savings) : null}
      helper="Para rellenar tu vela una vez más. Hasta 120 horas de luz extra."
      optionsLabel="Color de la bolsa"
      options={variants.map((v) => ({
        id: v.id,
        label: getColorValue(v) || (v as any).title,
        disabled: !isAvail(v),
      }))}
      selectedId={variantId}
      onSelect={(id) => {
        setTouched(true)
        setVariantId(id)
      }}
      ctaLabel={`Agregar · ${formatMoney(price)}`}
      onAdd={handleAdd}
    />
  )
}