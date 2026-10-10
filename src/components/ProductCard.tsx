import { ProductCardUI, type ProductCardTone } from "@/components/ui/ProductCardUI"
import type { Product } from "@/lib/supabase"

/**
 * ROUTE COMPONENT - ProductCard
 * 
 * Este componente solo importa y usa ProductCardUI.
 * Toda la lógica está en HeadlessProductCard y la presentación en ProductCardUI.
 */

interface ProductCardProps {
  product: Product
  /** "dark" para fondos oscuros (edición Día de Muertos). */
  tone?: ProductCardTone
}

export const ProductCard = ({ product, tone }: ProductCardProps) => {
  return <ProductCardUI product={product} tone={tone} />
}