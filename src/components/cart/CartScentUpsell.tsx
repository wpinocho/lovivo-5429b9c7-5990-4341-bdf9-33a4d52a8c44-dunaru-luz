import { useMemo, useState } from "react"
import type { Product, ProductVariant } from "@/lib/supabase"
import { useCart } from "@/contexts/CartContext"
import { useSettings } from "@/contexts/SettingsContext"
import { usePostHog } from "@/contexts/PostHogContext"
import { isVariantAvailable } from "@/lib/utils"
import { SCENTS, SCENT_OPTION_NAME, SCENT_YIELD_COPY } from "@/lib/scents"
import { trackCartUpsellAdded } from "@/lib/cart-upsell-tracking"
import { CartUpsellCard } from "./CartUpsellCard"

/** Aroma dentro del carrito: sin preselección, la clienta elige y agrega. */
export const CartScentUpsell = ({ product }: { product: Product }) => {
  const { addItem } = useCart()
  const { formatMoney, currencyCode } = useSettings()
  const posthog = usePostHog()
  const [selectedId, setSelectedId] = useState<string | undefined>()

  const variants = ((product as any).variants || []) as ProductVariant[]

  // Solo aromas regulares que existan como variante en la DB
  const options = useMemo(
    () =>
      SCENTS.map((scent) => {
        const variant = variants.find((v: any) => {
          const ov = v?.options || {}
          return ov[SCENT_OPTION_NAME] === scent.name || v?.title === scent.name
        })
        const available =
          !!variant &&
          ((product as any).track_inventory === false || isVariantAvailable(variant))
        return { scent, variant, available }
      }).filter((o) => !!o.variant),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [product]
  )

  const selected = options.find((o) => o.scent.id === selectedId)
  const price = Number(
    selected?.variant?.price ?? variants[0]?.price ?? product.price ?? 0
  )
  const images: string[] = (product as any).images || []
  const thumb = selected?.scent.imageUrl || images[0]

  const handleAdd = () => {
    if (!selected?.variant) return
    addItem(product, selected.variant)
    trackCartUpsellAdded(posthog, {
      type: "scent",
      product,
      variant: selected.variant,
      price,
      currencyCode,
      extra: { aroma: selected.scent.name },
    })
    setSelectedId(undefined)
  }

  if (!options.length) return null

  return (
    <CartUpsellCard
      eyebrow="Dale aroma"
      title="Esencia para Vela · 10 ml"
      thumb={thumb}
      thumbAlt={selected ? `Aroma ${selected.scent.name}` : "Esencia para Vela 10 ml"}
      price={formatMoney(price)}
      helper={`Tu cera viene sin aroma. ${SCENT_YIELD_COPY}.`}
      optionsLabel="Elige tu aroma"
      options={options.map((o) => ({
        id: o.scent.id,
        label: o.scent.name,
        disabled: !o.available,
      }))}
      selectedId={selectedId}
      onSelect={setSelectedId}
      ctaLabel={selected ? `Agregar · ${formatMoney(price)}` : "Elige un aroma"}
      ctaDisabled={!selected}
      onAdd={handleAdd}
    />
  )
}