import { usePriceRules } from "@/hooks/usePriceRules"
import { calcVolumeDiscount } from "@/lib/price-rule-utils"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import { Label } from "@/components/ui/label"

/**
 * ProductQuantityTiers — Selector "Lleva más y ahorra" (1 / 2 / 3 kits).
 *
 * Lee el descuento REAL desde la volume price rule del producto
 * (vía usePriceRules + calcVolumeDiscount). No hardcodea porcentajes.
 * El cobro del descuento lo aplica el backend en checkout (mismo origen
 * de datos que la price rule). Aquí solo mostramos el ahorro y fijamos
 * la cantidad seleccionada con onQuantityChange.
 */

interface ProductQuantityTiersProps {
  productId: string
  basePrice: number
  quantity: number
  unitLabel?: string
  unitSuffix?: string
  onQuantityChange: (quantity: number) => void
  formatMoney: (n: number) => string
}

const TIERS = [1, 2, 3]

export const ProductQuantityTiers = ({
  productId,
  basePrice,
  quantity,
  unitLabel = "Kit",
  unitSuffix = "de 500 g",
  onQuantityChange,
  formatMoney,
}: ProductQuantityTiersProps) => {
  const { getVolumeRulesForProduct } = usePriceRules()
  const volumeRules = getVolumeRulesForProduct(productId)

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-border" />
        <Label className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70 whitespace-nowrap">
          Lleva más y ahorra
        </Label>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="space-y-2.5">
        {TIERS.map((n) => {
          const discount = calcVolumeDiscount(basePrice, n, volumeRules)
          const unit = discount?.discountedPrice ?? basePrice
          const total = unit * n
          const originalTotal = basePrice * n
          const savePct =
            discount && basePrice > 0
              ? Math.round((1 - unit / basePrice) * 100)
              : 0
          const isActive = quantity === n

          return (
            <button
              key={n}
              type="button"
              onClick={() => onQuantityChange(n)}
              aria-pressed={isActive}
              className={cn(
                "w-full flex items-center gap-3 p-3.5 rounded-lg border-2 text-left transition-all",
                isActive
                  ? "border-foreground bg-foreground/5"
                  : "border-border hover:border-muted-foreground/40"
              )}
            >
              <span
                className={cn(
                  "shrink-0 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors",
                  isActive
                    ? "border-foreground bg-foreground text-background"
                    : "border-muted-foreground/40"
                )}
              >
                {isActive && <Check className="h-3 w-3" strokeWidth={3} />}
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-medium text-sm text-foreground">
                    {n} {n === 1 ? unitLabel : `${unitLabel}s`} {unitSuffix}
                  </span>
                  {savePct > 0 && (
                    <span className="rounded-full bg-dunaru-champagne/20 text-dunaru-carbon text-[11px] font-semibold px-2 py-0.5">
                      Ahorra {savePct}%
                    </span>
                  )}
                </div>
              </div>

              <div className="shrink-0 text-right">
                <div className="font-semibold text-sm text-foreground tabular-nums">
                  {formatMoney(total)}
                </div>
                {savePct > 0 && (
                  <div className="text-xs text-muted-foreground line-through tabular-nums">
                    {formatMoney(originalTotal)}
                  </div>
                )}
              </div>
            </button>
          )
        })}
      </div>

      <p className="text-[11px] text-muted-foreground leading-snug">
        El descuento se aplica automáticamente al pagar. Envío de Perlas Originales: +$99.
      </p>
    </div>
  )
}