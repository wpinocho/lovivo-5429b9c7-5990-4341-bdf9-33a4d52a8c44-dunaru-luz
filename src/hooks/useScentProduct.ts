import { useEffect, useState } from "react"
import { supabase, type Product } from "@/lib/supabase"
import { STORE_ID } from "@/lib/config"
import { SCENT_PRODUCT_SLUG } from "@/lib/scents"

// Cache de módulo: el drawer se abre y cierra seguido, no recargar cada vez.
let cached: Product | null | undefined

/** Carga el producto "Esencia para Vela · 10 ml" (activo). */
export const useScentProduct = (enabled = true): Product | null => {
  const [product, setProduct] = useState<Product | null>(cached ?? null)

  useEffect(() => {
    if (!enabled || cached !== undefined) return
    let active = true
    ;(async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("slug", SCENT_PRODUCT_SLUG)
        .eq("status", "active")
        .eq("store_id", STORE_ID)
        .maybeSingle()
      cached = (data as Product) || null
      if (active) setProduct(cached)
    })()
    return () => {
      active = false
    }
  }, [enabled])

  return product
}