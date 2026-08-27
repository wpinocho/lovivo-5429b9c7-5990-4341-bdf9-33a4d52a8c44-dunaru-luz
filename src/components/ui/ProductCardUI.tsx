import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import { PriceRuleBadge } from "@/components/ui/PriceRuleBadge"
import { usePriceRules } from "@/hooks/usePriceRules"
import type { Product } from "@/lib/supabase"
import { getReviewStats } from "@/data/reviews"
import { getChooseOnPdp } from "@/lib/catalog-order"
import { getVariantDisplayImage } from "@/lib/variant-image"
import { Star } from "lucide-react"

/**
 * EDITABLE UI COMPONENT - ProductCardUI
 * 
 * Este componente solo maneja la presentación del ProductCard.
 * Toda la lógica viene del HeadlessProductCard.
 * 
 * PUEDES MODIFICAR LIBREMENTE:
 * - Colores, temas, estilos
 * - Textos e idioma
 * - Layout y estructura visual
 * - Animaciones y efectos
 * - Agregar features visuales (hover effects, etc.)
 */

interface ProductCardUIProps {
  product: Product
}

export const ProductCardUI = ({ product }: ProductCardUIProps) => {
  const { getRulesForProduct } = usePriceRules()
  const productRules = getRulesForProduct(product.id)
  // Productos que se eligen en su propia página (ej. la esencia: primero el aroma).
  const chooseOnPdp = getChooseOnPdp(product.slug)

  return (
    <HeadlessProductCard product={product}>
      {(logic) => {
        // Foto propia de la variante elegida (color, aroma...). Si todas las
        // variantes comparten el mismo packshot, esto devuelve la exclusiva.
        const variantImage = getVariantDisplayImage(logic.matchingVariant, logic.variants)
        const primaryImage = variantImage || logic.product.images?.[0]
        const showHoverImage =
          !variantImage && !!logic.product.images && logic.product.images.length > 1

        return (
        <Card className="bg-card border-0 shadow-none">
          <CardContent className="p-4">
            <Link to={`/productos/${logic.product.slug}`} className="block">
              <div className="aspect-square bg-dunaru-arena/40 mb-3 overflow-hidden relative group" style={{ aspectRatio: '1/1' }}>
                {primaryImage ? (
                  <>
                    {/* Primary image - only fade on hover if there's a second image */}
                    <img
                      key={primaryImage}
                      src={primaryImage}
                      alt={logic.product.title}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full object-contain transition-opacity duration-300 ${
                        showHoverImage ? 'group-hover:opacity-0' : ''
                      }`}
                    />
                    {/* Secondary image on hover (only if exists and no variant image) */}
                    {showHoverImage && (
                      <img
                        src={logic.product.images![1]}
                        alt={`${logic.product.title} - alternativa`}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Sin imagen
                  </div>
                )}

                {/* Badges — max 2, compact */}
                {(() => {
                  const badges: React.ReactNode[] = []
                  if (logic.discountPercentage) {
                    badges.push(
                      <span key="discount" className="bg-destructive text-destructive-foreground text-[10px] px-1.5 py-0.5 rounded-sm font-medium">
                        -{logic.discountPercentage}%
                      </span>
                    )
                  }
                  if (!logic.inStock) {
                    badges.push(
                      <span key="oos" className="bg-muted text-muted-foreground text-[10px] px-1.5 py-0.5 rounded-sm font-medium">
                        Agotado
                      </span>
                    )
                  }
                  // Volume & BOGO badges (rendered inline to count them)
                  const volBogo = productRules.filter(r => r.rule_type === 'volume' || r.rule_type === 'bogo')
                  for (const rule of volBogo) {
                    if (badges.length >= 2) break
                    badges.push(<PriceRuleBadge key={rule.id} rule={rule} />)
                  }
                  if (badges.length === 0) return null
                  return (
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {badges.slice(0, 2)}
                    </div>
                  )
                })()}
              </div>

              <h3 className="font-display text-dunaru-carbon text-base mb-1 line-clamp-2">
                {logic.product.title}
              </h3>
              {(() => {
                const stats = getReviewStats(logic.product.slug)
                if (stats.count === 0) return null
                return (
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < Math.round(stats.average) ? "fill-dunaru-ambar text-dunaru-ambar" : "text-dunaru-ambar/30"}`}
                          strokeWidth={1.5}
                        />
                      ))}
                    </span>
                    <span className="text-xs text-muted-foreground">({stats.count})</span>
                  </div>
                )
              })()}
              {logic.product.description && (
                <p className="text-muted-foreground text-xs mb-3 line-clamp-2 leading-relaxed">
                  {logic.product.description.replace(/<[^>]*>/g, '')}
                </p>
              )}
            </Link>

            {!chooseOnPdp && logic.hasVariants && logic.options && (
              <div className="mb-3 space-y-2">
                {logic.options.map((opt) => (
                  <div key={opt.id}>
                    <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-1.5">{opt.name}</div>
                    <div className="flex flex-wrap gap-2">
                      {opt.values.filter(val => logic.isOptionValueAvailable(opt.name, val)).map((val) => {
                        const isSelected = logic.selected[opt.name] === val
                        const swatch = opt.name.toLowerCase() === 'color' ? opt.swatches?.[val] : undefined

                        if (swatch) {
                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => logic.handleOptionChange(opt.name, val)}
                              title={`${opt.name}: ${val}`}
                              className={`h-6 w-6 rounded-full border-0 transition-colors duration-200 ${
                                isSelected
                                  ? 'ring-2 ring-offset-2 ring-dunaru-terracota'
                                  : logic.selected[opt.name]
                                    ? 'opacity-40 hover:opacity-100'
                                    : ''
                              }`}
                              style={{ backgroundColor: swatch }}
                              aria-label={`${opt.name}: ${val}`}
                            />
                          )
                        }

                        return (
                          <button
                            key={val}
                            type="button"
                            onClick={() => logic.handleOptionChange(opt.name, val)}
                            className={`border-0 px-3 py-1.5 text-xs transition-colors duration-200 ${
                              isSelected
                                ? 'bg-dunaru-oliva-claro text-dunaru-marfil'
                                : 'bg-dunaru-arena/70 text-dunaru-carbon hover:bg-dunaru-periwinkle/25 hover:text-[hsl(var(--dunaru-periwinkle-deep))]'
                            }`}
                            aria-pressed={isSelected}
                            aria-label={`${opt.name}: ${val}`}
                            title={`${opt.name}: ${val}`}
                          >
                            {val}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-dunaru-carbon font-semibold">
                  {logic.formatMoney(logic.currentPrice)}
                </span>
                {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                  <span className="text-muted-foreground/70 text-xs line-through">
                    {logic.formatMoney(logic.currentCompareAt)}
                  </span>
                )}
              </div>
              {chooseOnPdp ? (
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="border-0 px-5 bg-dunaru-marfil text-dunaru-terracota hover:bg-dunaru-terracota hover:text-dunaru-marfil transition-colors duration-300"
                >
                  <Link to={`/productos/${logic.product.slug}`}>{chooseOnPdp.cta}</Link>
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    logic.onAddToCartSuccess() // Hook para features adicionales
                    logic.handleAddToCart()
                  }}
                  disabled={!logic.canAddToCart}
                  className="border-0 px-5 bg-dunaru-marfil text-dunaru-terracota hover:bg-dunaru-terracota hover:text-dunaru-marfil transition-colors duration-300 disabled:opacity-50"
                >
                  {logic.inStock ? 'Agregar' : 'Agotado'}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
        )
      }}
    </HeadlessProductCard>
  )
}