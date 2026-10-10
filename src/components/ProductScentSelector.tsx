import { useEffect, useMemo, useState } from "react"
import { supabase, type Product, type ProductVariant } from "@/lib/supabase"
import { STORE_ID } from "@/lib/config"
import { Label } from "@/components/ui/label"
import { ChevronDown } from "lucide-react"
import { cn, isVariantAvailable } from "@/lib/utils"
import { usePostHog } from "@/contexts/PostHogContext"
import {
  getScentsForProduct,
  SCENT_OPTION_NAME,
  SCENT_PRODUCT_SLUG,
  type Scent,
} from "@/lib/scents"

/**
 * ProductScentSelector — "Agrega aroma · opcional"
 *
 * Selector de esencia como COMPLEMENTO de la configuración del producto.
 * Vive entre "Color de la cera" y "Cantidad".
 *
 * Reglas:
 * - "Sin aroma" es un estado virtual del componente: NO existe como variante
 *   en la DB y no agrega nada al carrito.
 * - Elegir un aroma reporta al padre { product, variant } del producto
 *   independiente "Esencia para Vela · 10 ml" para que se agregue como
 *   línea separada del carrito.
 * - El contenido editorial de cada aroma vive en src/lib/scents.ts.
 */

export type ScentSelection = {
  scent: Scent
  product: Product
  variant?: ProductVariant
  price: number
}

interface ProductScentSelectorProps {
  /** Slug del producto principal (solo para tracking/contexto). */
  productSlug: string
  formatMoney: (n: number) => string
  onSelectionChange: (selection: ScentSelection | null) => void
}

const NONE = "__none__"

export const ProductScentSelector = ({
  productSlug,
  formatMoney,
  onSelectionChange,
}: ProductScentSelectorProps) => {
  const posthog = usePostHog()
  const [scentProduct, setScentProduct] = useState<Product | null>(null)
  // Productos propios de los aromas de temporada (slug → producto activo)
  const [seasonalProducts, setSeasonalProducts] = useState<Record<string, Product>>({})
  const [selectedId, setSelectedId] = useState<string>(NONE)
  // Los detalles vienen ABIERTOS por defecto: la clienta ve la foto y las notas
  // sin tener que descubrir el toggle. Puede cerrarlos con "Ocultar detalles".
  const [expanded, setExpanded] = useState(true)

  // Aromas que corresponden a este producto (temporada primero si aplica)
  const candidateScents = useMemo(() => getScentsForProduct(productSlug), [productSlug])
  const seasonalSlugs = useMemo(
    () =>
      candidateScents
        .map((s) => s.seasonalProductSlug)
        .filter((s): s is string => !!s),
    [candidateScents]
  )

  // Carga el producto de esencias + los de temporada que apliquen
  useEffect(() => {
    let active = true
    ;(async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .in("slug", [SCENT_PRODUCT_SLUG, ...seasonalSlugs])
        .eq("status", "active")
        .eq("store_id", STORE_ID)
      if (!active) return
      const rows = (data as Product[]) || []
      setScentProduct(rows.find((p: any) => p.slug === SCENT_PRODUCT_SLUG) || null)
      const map: Record<string, Product> = {}
      rows.forEach((p: any) => {
        if (p.slug !== SCENT_PRODUCT_SLUG) map[p.slug] = p
      })
      setSeasonalProducts(map)
    })()
    return () => {
      active = false
    }
  }, [seasonalSlugs])

  /** Producto de la DB que se agrega al carrito para este aroma. */
  const productFor = (scent: Scent): Product | null =>
    scent.seasonalProductSlug
      ? seasonalProducts[scent.seasonalProductSlug] || null
      : scentProduct

  // Si el producto de temporada está archivado, el aroma simplemente no aparece
  const scents = candidateScents.filter((s) => !!productFor(s))

  // Al cambiar de producto, resetear a "Sin aroma"
  useEffect(() => {
    setSelectedId(NONE)
    setExpanded(true)
  }, [productSlug])

  const variantFor = (scent: Scent): ProductVariant | undefined => {
    const variants = (productFor(scent) as any)?.variants as ProductVariant[] | undefined
    return (variants || []).find((v: any) => {
      const ov = v?.options || {}
      return ov[SCENT_OPTION_NAME] === scent.name || v?.title === scent.name
    })
  }

  const availableFor = (scent: Scent) => {
    const product = productFor(scent) as any
    if (!product) return false
    if (product.track_inventory === false) return true
    const variants = product.variants as ProductVariant[] | undefined
    // Producto sin variantes (aroma de temporada): se rige por su inventario
    if (!variants || variants.length === 0) return (product.inventory_quantity ?? 0) > 0
    const v = variantFor(scent)
    if (!v) return false
    return isVariantAvailable(v)
  }

  const priceFor = (scent: Scent) => {
    const v = variantFor(scent) as any
    return (v?.price ?? productFor(scent)?.price ?? 0) as number
  }

  const selectedScent = scents.find((s) => s.id === selectedId) || null

  // Reportar selección al padre
  useEffect(() => {
    const selectedProduct = selectedScent ? productFor(selectedScent) : null
    if (!selectedScent || !selectedProduct) {
      onSelectionChange(null)
      return
    }
    const rawVariant = variantFor(selectedScent) as any
    const image = selectedScent.imageUrl || undefined
    // El carrito y el checkout leen la imagen del line item desde
    // variant.image_urls / variant.image / product.images[0]. Como el producto
    // de esencias tiene 6 fotos (una por aroma), aquí dejamos SIEMPRE la del
    // aroma elegido al frente para que la clienta vea su aroma, no otro.
    onSelectionChange({
      scent: selectedScent,
      product: image
        ? ({ ...(selectedProduct as any), images: [image] } as Product)
        : selectedProduct,
      variant:
        rawVariant && image
          ? ({ ...rawVariant, image, image_urls: [image] } as ProductVariant)
          : rawVariant,
      price: priceFor(selectedScent),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId, scentProduct, seasonalProducts])

  if (scents.length === 0) return null

  const handleSelect = (id: string, scent: Scent | null) => {
    setSelectedId(id)
    posthog?.capture?.("scent_selected", {
      product_slug: productSlug,
      scent: scent?.name ?? "sin_aroma",
      price: scent ? priceFor(scent) : 0,
    })
  }

  const optionBase =
    "group relative flex flex-col items-start justify-center text-left px-3 py-2.5 border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"

  const optionState = (isSelected: boolean, isAvailable: boolean) =>
    !isAvailable
      ? "border-border/60 bg-muted/30 text-muted-foreground opacity-60 cursor-not-allowed"
      : isSelected
      ? "border-dunaru-oliva-claro bg-dunaru-oliva-claro text-dunaru-marfil"
      : "border-border/70 bg-background text-foreground hover:border-dunaru-periwinkle hover:bg-dunaru-periwinkle/10 hover:text-[hsl(var(--dunaru-periwinkle-deep))]"

  return (
    <div className="space-y-2 sm:space-y-3">
      {/* Encabezado */}
      <div className="flex items-baseline justify-between gap-3">
        <Label className="text-sm font-medium uppercase tracking-wider">
          Agrega aroma · Opcional
        </Label>
        <button
          type="button"
          onClick={() => {
            const next = !expanded
            setExpanded(next)
            posthog?.capture?.("scent_details_toggled", {
              product_slug: productSlug,
              expanded: next,
            })
          }}
          aria-expanded={expanded}
          aria-controls="panel-aromas"
          className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-[hsl(var(--dunaru-periwinkle-deep))] underline underline-offset-4 decoration-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {expanded ? "Ocultar detalles" : "Conoce los aromas"}
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-300",
              expanded && "rotate-180"
            )}
            strokeWidth={2}
          />
        </button>
      </div>

      <p className="text-xs text-muted-foreground leading-snug -mt-1">
        La Cera Duna nace neutra, sin perfume de fábrica.{" "}
        <span className="text-foreground/70">
          Un frasco de 10 ml perfuma 500 g de cera.
        </span>
      </p>

      {/* Opciones */}
      <div
        role="radiogroup"
        aria-label="Aroma de la vela"
        className="grid grid-cols-2 gap-2"
      >
        {/* Sin aroma — estado virtual, no agrega nada al carrito */}
        <button
          type="button"
          role="radio"
          aria-checked={selectedId === NONE}
          onClick={() => handleSelect(NONE, null)}
          className={cn(optionBase, "col-span-2", optionState(selectedId === NONE, true))}
        >
          <span className="font-display text-[15px] leading-tight">
            Sin aroma
          </span>
          <span
            className={cn(
              "text-[11px] leading-tight mt-0.5",
              selectedId === NONE ? "text-dunaru-marfil/75" : "text-muted-foreground"
            )}
          >
            Luz limpia, sin perfume
          </span>
          <span
            className={cn(
              "text-[11px] font-medium leading-none mt-1.5 tracking-wide",
              selectedId === NONE
                ? "text-dunaru-marfil"
                : "text-dunaru-terracota"
            )}
          >
            Incluido
          </span>
        </button>

        {scents.map((scent) => {
          const isSelected = selectedId === scent.id
          const isAvailable = availableFor(scent)
          const isSeasonal = !!scent.seasonalProductSlug
          return (
            <button
              key={scent.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              aria-disabled={!isAvailable}
              disabled={!isAvailable}
              onClick={() => handleSelect(scent.id, scent)}
              className={cn(
                optionBase,
                optionState(isSelected, isAvailable),
                isSeasonal && !isSelected && isAvailable && "border-dunaru-cempasuchil"
              )}
            >
              <span className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                <span className="font-display text-[15px] leading-tight">
                  {scent.name}
                </span>
                {isSeasonal && (
                  <span className="bg-dunaru-cempasuchil text-dunaru-onix px-1.5 py-0.5 text-[9px] font-semibold uppercase leading-none tracking-[0.14em]">
                    Temporada
                  </span>
                )}
              </span>
              <span
                className={cn(
                  "text-[11px] leading-tight mt-0.5",
                  isSelected ? "text-dunaru-marfil/75" : "text-muted-foreground"
                )}
              >
                {isAvailable ? scent.inspiredBy : "Agotado por ahora"}
              </span>
              {isAvailable && (
                <span
                  className={cn(
                    "text-[11px] font-medium leading-none mt-1.5 tracking-wide",
                    isSelected ? "text-dunaru-marfil" : "text-dunaru-terracota"
                  )}
                >
                  {`+ ${formatMoney(priceFor(scent))}`}
                  <span
                    className={cn(
                      "font-normal",
                      isSelected ? "text-dunaru-marfil/70" : "text-muted-foreground"
                    )}
                  >
                    {" · 10 ml"}
                  </span>
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Panel expandido — detalle del aroma seleccionado */}
      {expanded && (
        <div
          id="panel-aromas"
          className="border border-border/60 bg-dunaru-arena/40 texture-arena p-2.5 sm:p-3.5"
        >
          {!selectedScent ? (
            <p className="font-display text-[15px] text-foreground/80 leading-snug">
              Selecciona un aroma para conocer sus notas.
            </p>
          ) : (
            <div className="flex gap-3 items-start sm:grid sm:grid-cols-[minmax(0,44%)_1fr] sm:gap-4">
              {selectedScent.imageUrl && (
                <div className="w-24 shrink-0 aspect-square sm:w-full sm:aspect-[4/3] overflow-hidden bg-dunaru-arena">
                  <img
                    src={selectedScent.imageUrl}
                    alt={`Ingredientes del aroma ${selectedScent.name} de dunaru`}
                    loading="lazy"
                    decoding="async"
                    width={1456}
                    height={1092}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="flex-1 min-w-0 space-y-1.5 sm:space-y-2.5">
                <div className="space-y-0.5 sm:space-y-1">
                  <h4 className="font-display text-lg leading-none text-foreground">
                    {selectedScent.name}
                  </h4>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-dunaru-terracota">
                    {selectedScent.inspiredBy}
                  </p>
                </div>

                {selectedScent.story && (
                  <p className="font-display text-[15px] leading-snug text-foreground/90">
                    {selectedScent.story}
                  </p>
                )}

                {selectedScent.pyramid && (
                  <dl className="space-y-1">
                    {(
                      [
                        ["Salida", selectedScent.pyramid.salida],
                        ["Corazón", selectedScent.pyramid.corazon],
                        ["Fondo", selectedScent.pyramid.fondo],
                      ] as const
                    ).map(([label, value]) => (
                      <div key={label} className="flex gap-2 text-[11px] leading-snug">
                        <dt className="w-14 shrink-0 uppercase tracking-[0.14em] text-dunaru-terracota">
                          {label}
                        </dt>
                        <dd className="text-foreground/80">{value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                <p className="text-[11px] leading-snug text-foreground/60">
                  <span className="uppercase tracking-[0.16em] text-dunaru-terracota">
                    Notas
                  </span>{" "}
                  <span className="tracking-normal">
                    {selectedScent.notes.join("\u2009·\u2009")}
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}