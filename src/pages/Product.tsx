import { Navigate, useParams } from "react-router-dom"
import { HeadlessProduct } from "@/components/headless/HeadlessProduct"
import { ProductPageUI } from "@/pages/ui/ProductPageUI"
import { PROMO_ADDON, isPromoAddonSlug } from "@/lib/promo-addon"

/**
 * ROUTE COMPONENT - Product
 * 
 * Este componente conecta HeadlessProduct con ProductPageUI.
 * Toda la lógica está en HeadlessProduct y la presentación en ProductPageUI.
 */

const Product = () => {
  const { slug } = useParams()

  // El add-on de promo no tiene página propia: solo se ofrece en los kits
  if (isPromoAddonSlug(slug)) {
    return <Navigate to={`/productos/${PROMO_ADDON.baseSlug}`} replace />
  }

  return (
    <HeadlessProduct>
      {(logic) => <ProductPageUI logic={logic} />}
    </HeadlessProduct>
  )
}

export default Product