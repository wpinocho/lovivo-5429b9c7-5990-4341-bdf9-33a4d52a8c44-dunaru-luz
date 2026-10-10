import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import { PriceRuleBadge } from "@/components/ui/PriceRuleBadge"
import { usePriceRules } from "@/hooks/usePriceRules"
import type { Product } from "@/lib/supabase"
import { getReviewStats } from "@/data/reviews"
import { getChooseOnPdp } from "@/lib/catalog-order"
import { getVariantDisplayImage } from "@/lib/variant-image"
import { isSeasonalSlug } from "@/lib/seasonal"
import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

/**
 * EDITABLE UI COMPONENT - ProductCardUI
 *
 * Tarjeta de catálogo (/categorias/*). Mismo lenguaje que las tarjetas de la
 * home: foto 4:5 a sangre (object-cover), sin padding interno, texto debajo.
 * tone="dark" → versión para fondos oscuros (edición Día de Muertos).
 */

export type ProductCardTone = "light" | "dark"

interface ProductCardUIProps {
  product: Product
  tone?: ProductCardTone
}

export const ProductCardUI = ({ product, tone = "light" }: ProductCardUIProps) => {
  const { getRulesForProduct } = usePriceRules()
  const productRules = getRulesForProduct(product.id)
  // Productos que se eligen en su propia página (ej. la esencia: primero el aroma).
  const chooseOnPdp = getChooseOnPdp(product.slug)
  const dark = tone === "dark"
  const seasonal = isSeasonalSlug(product.slug)

  const ctaClass = dark
    ? "border border-dunaru-cempasuchil/60 bg-transparent text-dunaru-cempasuchil hover:bg-dunaru-cempasuchil hover:text-dunaru-onix"
    : "border-0 bg-transparent text-dunaru-terracota hover:bg-dunaru-terracota hover:text-dunaru-marfil"

  return (
    <HeadlessProductCard product={product}>
      {(logic) => {
        // Foto propia de la variante elegida (color, aroma...). Si todas las
        // variantes comparten el mismo packshot, esto devuelve la exclusiva.
        const variantImage = getVariantDisplayImage(logic.matchingVariant, logic.variants)
        const primaryImage = variantImage || logic.product.images?.[0]
        const showHoverImage =
          !variantImage && !!logic.product.images && logic.product.images.length > 1
        const stats = getReviewStats(logic.product.slug)

        const badges: React.ReactNode[] = []
        if (seasonal) {
          badges.push(
            <span key="ddm" className="bg-dunaru-cempasuchil px-2 py-1 font-body text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-dunaru-onix">
              Edición limitada
            </span>
          )
        }
        if (logic.discountPercentage) {
          badges.push(
            <span key="discount" className="bg-destructive text-destructive-foreground text-[10px] px-1.5 py-0.5 font-medium">
              -{logic.discountPercentage}%
            </span>
          )
        }
        if (!logic.inStock) {
          badges.push(
            <span key="oos" className="bg-muted text-muted-foreground text-[10px] px-1.5 py-0.5 font-medium">
              Agotado
            </span>
          )
        }
        for (const rule of productRules.filter(r => r.rule_type === 'volume' || r.rule_type === 'bogo')) {
          if (badges.length >= 2) break
          badges.push(<PriceRuleBadge key={rule.id} rule={rule} />)
        }

        return (
          <article className="group flex h-full flex-col">
            <Link to={`/productos/${logic.product.slug}`} className="block">
              <div
                className={cn(
                  "relative aspect-[4/5] overflow-hidden",
                  dark ? "bg-dunaru-carbon" : "bg-dunaru-arena/60"
                )}
              >
                {primaryImage ? (
                  <>
                    <img
                      key={primaryImage}
                      src={primaryImage}
                      alt={logic.product.title}
                      loading="lazy"
                      decoding="async"
                      className={cn(
                        "h-full w-full object-cover transition-editorial group-hover:scale-[1.03]",
                        showHoverImage && "md:group-hover:opacity-0"
                      )}
                    />
                    {/* Segunda foto al pasar el mouse (solo desktop) */}
                    {showHoverImage && (
                      <img
                        src={logic.product.images![1]}
                        alt=""
                        aria-hidden
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 hidden h-full w-full object-cover opacity-0 transition-opacity duration-500 md:block md:group-hover:opacity-100"
                      />
                    )}
                  </>
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
                    Sin imagen
                  </div>
                )}

                {badges.length > 0 && (
                  <div className="absolute left-2 top-2 flex flex-col items-start gap-1">
                    {badges.slice(0, 2)}
                  </div>
                )}
              </div>

              <h3
                className={cn(
                  "mt-3 font-body text-sm leading-snug line-clamp-2",
                  dark ? "text-dunaru-marfil" : "text-foreground"
                )}
              >
                {logic.product.title}
              </h3>

              {stats.count > 0 && (
                <div className="mt-1.5 flex items-center gap-1.5">
                  <span className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${i < Math.round(stats.average) ? "fill-dunaru-ambar text-dunaru-ambar" : "text-dunaru-ambar/30"}`}
                        strokeWidth={1.5}
                      />
                    ))}
                  </span>
                  <span className={cn("text-[11px]", dark ? "text-dunaru-marfil/55" : "text-muted-foreground")}>
                    ({stats.count})
                  </span>
                </div>
              )}

              {/* Descripción solo en tablet/desktop: en móvil, más producto y menos texto */}
              {logic.product.description && (
                <p
                  className={cn(
                    "mt-1.5 hidden text-xs leading-relaxed line-clamp-2 sm:block",
                    dark ? "text-dunaru-marfil/60" : "text-muted-foreground"
                  )}
                >
                  {logic.product.description.replace(/<[^>]*>/g, '')}
                </p>
              )}
            </Link>

            {!chooseOnPdp && logic.hasVariants && logic.options && (
              <div className="mt-3 space-y-2">
                {logic.options.map((opt) => (
                  <div key={opt.id}>
                    <div className={cn("mb-1.5 text-[10px] uppercase tracking-[0.14em]", dark ? "text-dunaru-marfil/55" : "text-muted-foreground")}>
                      {opt.name}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
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
                            className={cn(
                              "border-0 px-2.5 py-1 text-[11px] transition-colors duration-200",
                              isSelected
                                ? "bg-dunaru-oliva-claro text-dunaru-marfil"
                                : dark
                                  ? "bg-dunaru-marfil/10 text-dunaru-marfil hover:bg-dunaru-marfil/20"
                                  : "bg-dunaru-arena/70 text-dunaru-carbon hover:bg-dunaru-periwinkle/25"
                            )}
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

            <div className="mt-auto flex items-center justify-between gap-2 pt-3">
              <div className="flex items-baseline gap-2">
                <span className={cn("font-body text-sm font-semibold", dark ? "text-dunaru-cempasuchil" : "text-foreground")}>
                  {logic.formatMoney(logic.currentPrice)}
                </span>
                {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                  <span className={cn("text-[11px] line-through", dark ? "text-dunaru-marfil/40" : "text-foreground/35")}>
                    {logic.formatMoney(logic.currentCompareAt)}
                  </span>
                )}
              </div>
              {chooseOnPdp ? (
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className={cn("h-8 px-3 text-xs transition-colors duration-300", ctaClass)}
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
                  className={cn("h-8 px-3 text-xs transition-colors duration-300 disabled:opacity-50", ctaClass)}
                >
                  {logic.inStock ? 'Agregar' : 'Agotado'}
                </Button>
              )}
            </div>
          </article>
        )
      }}
    </HeadlessProductCard>
  )
}