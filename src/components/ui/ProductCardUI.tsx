import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import { PriceRuleBadge } from "@/components/ui/PriceRuleBadge"
import { usePriceRules } from "@/hooks/usePriceRules"
import type { Product } from "@/lib/supabase"
import { getReviewStats } from "@/data/reviews"
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

  return (
    <HeadlessProductCard product={product}>
      {(logic) => (
        <Card className="surface-nacar border border-dunaru-travertino elev-suave transition-all hover:border-dunaru-terracota/60 hover:shadow-lg">
          <CardContent className="p-4">
            <Link to={`/productos/${logic.product.slug}`} className="block">
              <div className="aspect-square bg-dunaru-arena rounded-lg mb-3 overflow-hidden relative group" style={{ aspectRatio: '1/1' }}>
                {(logic.matchingVariant?.image || (logic.product.images && logic.product.images.length > 0)) ? (
                  <>
                    {/* Primary image - only fade on hover if there's a second image */}
                    <img
                      src={logic.matchingVariant?.image_urls?.[0] || (logic.matchingVariant?.image as any) || logic.product.images![0]}
                      alt={logic.product.title}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full object-contain transition-opacity duration-300 ${
                        logic.product.images && logic.product.images.length > 1 && !logic.matchingVariant?.image && !logic.matchingVariant?.image_urls?.[0]
                          ? 'group-hover:opacity-0'
                          : ''
                      }`}
                    />
                    {/* Secondary image on hover (only if exists and no variant image) */}
                    {logic.product.images && logic.product.images.length > 1 && !logic.matchingVariant?.image && !logic.matchingVariant?.image_urls?.[0] && (
                      <img
                        src={logic.product.images[1]}
                        alt={`${logic.product.title} - alternativa`}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-foreground/35 font-body text-sm">
                    Sin imagen
                  </div>
                )}

                {/* Badges — max 2, compact */}
                {(() => {
                  const badges: React.ReactNode[] = []
                  if (logic.discountPercentage) {
                    badges.push(
                      <span key="discount" className="bg-dunaru-terracota text-dunaru-marfil text-[10px] px-2 py-0.5 rounded-full font-semibold tracking-wide">
                        -{logic.discountPercentage}%
                      </span>
                    )
                  }
                  if (!logic.inStock) {
                    badges.push(
                      <span key="oos" className="bg-dunaru-travertino text-foreground/70 text-[10px] px-2 py-0.5 rounded-full font-semibold tracking-wide">
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

              <h3 className="font-body text-foreground font-medium text-sm mb-1 line-clamp-2">
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
                          className={`h-3 w-3 ${i < Math.round(stats.average) ? "fill-dunaru-ocre text-dunaru-ocre" : "text-dunaru-ocre/25"}`}
                          strokeWidth={1.5}
                        />
                      ))}
                    </span>
                    <span className="font-body text-xs text-foreground/55">({stats.count})</span>
                  </div>
                )
              })()}
              {logic.product.description && (
                <p className="font-body text-foreground/60 text-xs mb-3 line-clamp-2">
                  {logic.product.description.replace(/<[^>]*>/g, '')}
                </p>
              )}
            </Link>

            {logic.hasVariants && logic.options && (
              <div className="mb-3 space-y-2">
                {logic.options.map((opt) => (
                  <div key={opt.id}>
                    <div className="font-body text-xs font-medium text-foreground mb-1">{opt.name}</div>
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
                              className={`h-6 w-6 rounded-full border ${
                                logic.selected[opt.name] && !isSelected ? 'opacity-40' : ''
                              }`}
                              style={{
                                backgroundColor: swatch,
                                borderColor: 'hsl(var(--dunaru-travertino))'
                              }}
                              aria-label={`${opt.name}: ${val}`}
                            />
                          )
                        }

                        return (
                          <button
                            key={val}
                            type="button"
                            onClick={() => logic.handleOptionChange(opt.name, val)}
                            className={`font-body border rounded-md px-2 py-1 text-xs font-medium transition-colors ${
                              isSelected
                                ? 'border-dunaru-olivo bg-dunaru-olivo text-dunaru-marfil'
                                : logic.selected[opt.name] && !isSelected
                                  ? 'border-dunaru-travertino bg-background text-foreground/70 opacity-40'
                                  : 'border-dunaru-travertino bg-background text-foreground/75 hover:border-dunaru-terracota'
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
                <span className="font-body text-foreground font-bold">
                  {logic.formatMoney(logic.currentPrice)}
                </span>
                {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                  <span className="font-body text-foreground/40 text-xs line-through">
                    {logic.formatMoney(logic.currentCompareAt)}
                  </span>
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  logic.onAddToCartSuccess() // Hook para features adicionales
                  logic.handleAddToCart()
                }}
                disabled={!logic.canAddToCart}
                className="font-body font-medium border-dunaru-olivo/45 text-foreground hover:bg-dunaru-olivo hover:text-dunaru-marfil hover:border-dunaru-olivo disabled:opacity-50"
              >
                {logic.inStock ? 'Agregar' : 'Agotado'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </HeadlessProductCard>
  )
}