import { useEffect, useState } from "react"
import { supabase, type Product } from "@/lib/supabase"
import { STORE_ID } from "@/lib/config"
import { PROMO_ADDON, isPromoLive } from "@/lib/promo-addon"

export type PromoAddonData = {
  product: Product
  /** Precio "antes" real: compare_at del add-on o el precio de Cera Duna 500 g. */
  compareAt: number | null
}

/**
 * Carga el producto add-on de la promo activa.
 * Devuelve null si no existe, está archivado o la promo terminó.
 */
export const usePromoAddon = (enabled = true): PromoAddonData | null => {
  const [data, setData] = useState<PromoAddonData | null>(null)

  useEffect(() => {
    if (!enabled || !isPromoLive()) {
      setData(null)
      return
    }
    let active = true
    ;(async () => {
      const { data: rows } = await supabase
        .from("products")
        .select("*")
        .in("slug", [PROMO_ADDON.slug, PROMO_ADDON.baseSlug])
        .eq("status", "active")
        .eq("store_id", STORE_ID)
      if (!active) return
      const list = (rows as Product[]) || []
      const addon = list.find((p: any) => p.slug === PROMO_ADDON.slug)
      const base = list.find((p: any) => p.slug === PROMO_ADDON.baseSlug) as any
      if (!addon) {
        setData(null)
        return
      }
      const compareAt =
        (addon as any).compare_at_price ??
        base?.variants?.[0]?.price ??
        base?.price ??
        null
      setData({ product: addon, compareAt: compareAt ? Number(compareAt) : null })
    })()
    return () => {
      active = false
    }
  }, [enabled])

  return data
}