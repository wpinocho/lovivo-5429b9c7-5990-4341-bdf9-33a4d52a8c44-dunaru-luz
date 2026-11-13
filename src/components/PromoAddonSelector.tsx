import { useEffect, useMemo, useState } from "react"
import { Check } from "lucide-react"
import type { Product, ProductVariant } from "@/lib/supabase"
import { cn, isVariantAvailable } from "@/lib/utils"
import { PROMO_ADDON, getColorValue, matchColorVariant } from "@/lib/promo-addon"

export type PromoAddonSelection = {
  product: Product
  variant?: ProductVariant
  price: number
}

interface PromoAddonSelectorProps {
  product: Product
  compareAt: number | null
  /** Color de cera elegido en el kit (preselección). */
  kitColor: string | null
  formatMoney: (n: number) => string
  onSelectionChange: (selection: PromoAddonSelection | null) => void
}

/**
 * Oferta de temporada en la PDP de los kits: "Agrega otra bolsa de 500 g".
 * Desmarcada por defecto. El color sigue al de la vela hasta que la clienta
 * toca un chip; desde ahí se respeta su elección.
 */
export const PromoAddonSelector = ({
  product,
  compareAt,
  kitColor,
  formatMoney,
  onSelectionChange,
}: PromoAddonSelectorProps) => {
  const variants = useMemo(
    () => ((product as any).variants || []) as ProductVariant[],
    [product]
  )
  // Si el producto no rastrea inventario, todas las variantes se pueden vender
  const isAvail = (v: ProductVariant) =>
    (product as any).track_inventory === false || isVariantAvailable(v)
  const available = useMemo(
    () => variants.filter(isAvail),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [variants, product]
  )
  const [checked, setChecked] = useState(false)
  const [touched, setTouched] = useState(false)
  const [variantId, setVariantId] = useState<string | undefined>(undefined)

  // Preselección: color de la vela (o el primero disponible)
  useEffect(() => {
    if (touched) return
    const match = matchColorVariant(available, kitColor)
    setVariantId((match || available[0] || variants[0])?.id)
  }, [kitColor, touched, available, variants])

  const variant = variants.find((v) => v.id === variantId)
  const price = Number(variant?.price ?? product.price ?? 0)
  const savings = compareAt && compareAt > price ? compareAt - price : 0
  const idx = Math.max(0, variants.findIndex((v) => v.id === variantId))
  const images: string[] = (product as any).images || []
  const thumb =
    (variant as any)?.image_urls?.[0] || images[idx] || images[0] || ""

  useEffect(() => {
    onSelectionChange(checked ? { product, variant, price } : null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked, variantId, product])

  const toggle = () => setChecked((c) => !c)

  return (
    <div
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault()
          toggle()
        }
      }}
      className={cn(
        "cursor-pointer border p-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        checked
          ? "border-[hsl(var(--dunaru-oliva-cta))] bg-[hsl(var(--dunaru-oliva-cta)/0.06)]"
          : "border-border/80 bg-background"
      )}
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className={cn(
            "mt-1 flex h-5 w-5 shrink-0 items-center justify-center border transition-colors",
            checked
              ? "border-[hsl(var(--dunaru-oliva-cta))] bg-[hsl(var(--dunaru-oliva-cta))] text-primary-foreground"
              : "border-foreground/40"
          )}
        >
          {checked && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
        </span>

        {thumb && (
          <img
            src={thumb}
            alt={`Cera Duna 500 g ${getColorValue(variant) || ""}`.trim()}
            width={56}
            height={70}
            loading="lazy"
            className="h-[70px] w-14 shrink-0 bg-muted object-cover"
          />
        )}

        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-dunaru-terracota">
            {PROMO_ADDON.label}
          </p>
          <p className="mt-0.5 text-sm font-semibold leading-snug text-foreground">
            Agrega otra bolsa de 500 g + 30 mechas
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-sm font-semibold text-foreground">
              {formatMoney(price)}
            </span>
            {savings > 0 && compareAt && (
              <>
                <span className="text-xs text-muted-foreground line-through">
                  {formatMoney(compareAt)}
                </span>
                <span className="bg-dunaru-terracota/10 px-1.5 py-0.5 text-[11px] font-semibold text-dunaru-terracota">
                  Ahorras {formatMoney(savings)}
                </span>
              </>
            )}
          </div>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Para rellenar tu vela una vez más. Hasta 120 horas de luz extra.
          </p>
        </div>
      </div>

      {checked && variants.length > 1 && (
        <div className="mt-3 border-t border-border/60 pt-3 pl-8">
          <p className="mb-1.5 text-xs text-foreground/70">Color de esta bolsa:</p>
          <div role="radiogroup" aria-label="Color de esta bolsa" className="flex flex-wrap gap-1.5">
            {variants.map((v) => {
              const label = getColorValue(v) || (v as any).title
              const active = v.id === variantId
              const ok = isAvail(v)
              return (
                <button
                  key={v.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  disabled={!ok}
                  onClick={(e) => {
                    e.stopPropagation()
                    setTouched(true)
                    setVariantId(v.id)
                  }}
                  onKeyDown={(e) => e.stopPropagation()}
                  className={cn(
                    "h-8 border px-3 text-xs font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40",
                    active
                      ? "border-[hsl(var(--dunaru-oliva-claro))] bg-[hsl(var(--dunaru-oliva-claro))] text-primary-foreground"
                      : "border-border bg-background text-foreground/80"
                  )}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}