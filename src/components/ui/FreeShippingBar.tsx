import { useSettings } from '@/contexts/SettingsContext'
import { Truck, Check } from 'lucide-react'
import { useFreeShippingThreshold } from '@/lib/shipping'

interface FreeShippingBarProps {
  cartTotal: number
  cartQuantity: number
}

/**
 * Barra de progreso hacia envío gratis (umbral = price rule free_shipping).
 * Muestra cuánto falta; al llegar, confirma el envío gratis.
 */
export const FreeShippingBar = ({ cartTotal }: FreeShippingBarProps) => {
  const { formatMoney } = useSettings()
  const { minSubtotal, loading } = useFreeShippingThreshold()

  if (loading || minSubtotal <= 0) return null

  const remaining = minSubtotal - cartTotal
  const achieved = remaining <= 0
  const progress = Math.min((cartTotal / minSubtotal) * 100, 100)

  return (
    <div className="border border-border bg-muted/60 px-4 py-3 space-y-2" aria-live="polite">
      <div className="flex items-center gap-2 text-sm text-foreground">
        {achieved ? (
          <>
            <Check className="h-4 w-4 shrink-0 text-dunaru-oliva-claro" />
            <span>
              <span className="font-semibold">Tu envío es gratis</span> a todo México
            </span>
          </>
        ) : (
          <>
            <Truck className="h-4 w-4 shrink-0 text-dunaru-oliva-claro" />
            <span>
              Te faltan <span className="font-semibold">{formatMoney(remaining)}</span> para envío gratis
            </span>
          </>
        )}
      </div>
      <div
        className="h-1 w-full bg-background overflow-hidden"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
      >
        <div
          className="h-full bg-dunaru-oliva-claro transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}