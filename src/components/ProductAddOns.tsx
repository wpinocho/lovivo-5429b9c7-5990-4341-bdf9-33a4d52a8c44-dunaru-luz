import { useEffect, useState } from "react"
import { supabase, type Product } from "@/lib/supabase"
import { STORE_ID } from "@/lib/config"
import { Label } from "@/components/ui/label"
import { Check, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * ProductAddOns — Selector contextual de complementos (AOV).
 *
 * - Mapea cada producto principal a sus add-ons relevantes (máx 2).
 * - NUNCA viene preseleccionado.
 * - Carga los productos add-on reales desde Supabase por slug.
 * - Reporta la selección al padre vía onSelectionChange para que la PDP
 *   los agregue al carrito como líneas extra.
 */

const ADDON_MAP: Record<string, string[]> = {
  "kit-vaso-de-vidrio": ["recarga-500-g-30-mechas", "pack-30-mechas"],
  "kit-vaso-de-concreto": ["recarga-500-g-30-mechas", "pack-30-mechas"],
  // perlas-originales-500-g: sin add-ons — usa el selector "Lleva más y ahorra"
  "reserva-1-kg": ["pack-60-mechas"],
  "d-o-de-tonos": ["pack-60-mechas"],
  "tr-o-de-tonos": ["pack-60-mechas"],
}

const ADDON_PITCH: Record<string, string> = {
  "recarga-500-g-30-mechas":
    "Para no quedarte sin luz: renueva tu vela cuando se consuma.",
  "pack-30-mechas": "30 mechas extra para seguir encendiendo más tiempo.",
  "pack-60-mechas": "60 mechas extra: rinde el doble entre recargas.",
  "vaso-extra-transparente":
    "Un segundo recipiente para tener velas en dos lugares.",
}

interface ProductAddOnsProps {
  productSlug: string
  formatMoney: (n: number) => string
  onSelectionChange: (addons: Product[]) => void
}

export const ProductAddOns = ({
  productSlug,
  formatMoney,
  onSelectionChange,
}: ProductAddOnsProps) => {
  const [addons, setAddons] = useState<Product[]>([])
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  useEffect(() => {
    const slugs = ADDON_MAP[productSlug] || []
    setSelectedIds([])
    if (slugs.length === 0) {
      setAddons([])
      return
    }
    let active = true
    ;(async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .in("slug", slugs)
        .eq("status", "active")
        .eq("store_id", STORE_ID)
      if (!active) return
      const ordered = slugs
        .map((s) => (data || []).find((d: any) => d.slug === s))
        .filter(Boolean) as Product[]
      setAddons(ordered)
    })()
    return () => {
      active = false
    }
  }, [productSlug])

  useEffect(() => {
    onSelectionChange(addons.filter((a) => selectedIds.includes(a.id)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIds, addons])

  const toggle = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  if (addons.length === 0) return null

  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium uppercase tracking-wider">
        Complétalo
      </Label>
      <div className="space-y-2.5">
        {addons.map((addon) => {
          const isSelected = selectedIds.includes(addon.id)
          const image = addon.images?.[0]
          const pitch = ADDON_PITCH[(addon as any).slug] || ""
          return (
            <button
              key={addon.id}
              type="button"
              onClick={() => toggle(addon.id)}
              aria-pressed={isSelected}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-lg border-2 text-left transition-all",
                isSelected
                  ? "border-dunaru-champagne bg-dunaru-champagne/10"
                  : "border-border hover:border-muted-foreground/40"
              )}
            >
              {image && (
                <div className="w-14 h-14 rounded-md overflow-hidden bg-muted/30 shrink-0">
                  <img
                    src={image}
                    alt={addon.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-medium text-sm text-foreground truncate">
                    {addon.title}
                  </span>
                  <span className="font-semibold text-sm text-foreground shrink-0">
                    +{formatMoney(addon.price)}
                  </span>
                </div>
                {pitch && (
                  <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                    {pitch}
                  </p>
                )}
              </div>
              <span
                className={cn(
                  "shrink-0 h-6 w-6 rounded-full border-2 flex items-center justify-center transition-colors",
                  isSelected
                    ? "border-dunaru-champagne bg-dunaru-champagne text-dunaru-carbon"
                    : "border-border text-muted-foreground"
                )}
              >
                {isSelected ? (
                  <Check className="h-3.5 w-3.5" />
                ) : (
                  <Plus className="h-3.5 w-3.5" />
                )}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}