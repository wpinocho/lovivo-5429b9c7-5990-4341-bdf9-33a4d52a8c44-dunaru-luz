import { useEffect, useMemo, useState } from "react"
import { supabase, type Product, type ProductVariant } from "@/lib/supabase"
import { STORE_ID } from "@/lib/config"
import { Label } from "@/components/ui/label"
import { ChevronDown } from "lucide-react"
import { cn, isVariantAvailable } from "@/lib/utils"
import { usePostHog } from "@/contexts/PostHogContext"
import {
  SCENTS,
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
  const [selectedId, setSelectedId] = useState<string>(NONE)
  // Los detalles vienen ABIERTOS por defecto: la clienta ve la foto y las notas
  // sin tener que descubrir el toggle. Puede cerrarlos con "Ocultar detalles".
  const [expanded, setExpanded] = useState(true)

  // Carga el producto de esencias (una sola vez por PDP)
  useEffect(() => {
    let active = true
    ;(async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("slug", SCENT_PRODUCT_SLUG)
        .eq("status", "active")
        .eq("store_id", STORE_ID)
        .maybeSingle()
      if (!active) return
      setScentProduct((data as Product) || null)
    })()
    return () => {
      active = false
    }
  }, [])

  // Al cambiar de producto, resetear a "Sin aroma"
  useEffect(() => {
    setSelectedId(NONE)
    setExpanded(true)
  }, [productSlug])

  const variants = (scentProduct as any)?.variants as ProductVariant[] | undefined
  const trackInventory = (scentProduct as any)?.track_inventory !== false

  const variantFor = useMemo(
    () => (scent: Scent) =>
      (variants || []).find((v: any) => {
        const ov = v?.options || {}
        return ov[SCENT_OPTION_NAME] === scent.name || v?.title === scent.name
      }),
    [variants]
  )

  const availableFor = (scent: Scent) => {
    if (!trackInventory) return true
    const v = variantFor(scent)
    if (!v) return false
    return isVariantAvailable(v)
  }

  const priceFor = (scent: Scent) => {
    const v = variantFor(scent) as any
    return (v?.price ?? scentProduct?.price ?? 0) as number
  }

  const selectedScent = SCENTS.find((s) => s.id === selectedId) || null

  // Reportar selección al padre
  useEffect(() => {
    if (!selectedScent || !scentProduct) {
      onSelectionChange(null)
      return
    }
    onSelectionChange({
      scent: selectedScent,
      product: scentProduct,
      variant: variantFor(selectedScent),
      price: priceFor(selectedScent),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId, scentProduct])

  if (!scentProduct) return null

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
    <div className="space-y-3">
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
        Nuestra cera nace sin perfume. El aroma lo eliges tú.
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
            Solo cera perlada, sin perfume
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

        {SCENTS.map((scent) => {
          const isSelected = selectedId === scent.id
          const isAvailable = availableFor(scent)
          return (
            <button
              key={scent.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              aria-disabled={!isAvailable}
              disabled={!isAvailable}
              onClick={() => handleSelect(scent.id, scent)}
              className={cn(optionBase, optionState(isSelected, isAvailable))}
            >
              <span className="font-display text-[15px] leading-tight">
                {scent.name}
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
          className="border border-border/60 bg-dunaru-arena/40 texture-arena p-3.5"
        >
          {!selectedScent ? (
            <p className="font-display text-[15px] text-foreground/80 leading-snug">
              Selecciona un aroma para conocer sus notas.
            </p>
          ) : (
            <div className="space-y-2.5 sm:space-y-0 sm:grid sm:grid-cols-[minmax(0,44%)_1fr] sm:gap-4 sm:items-start">
              {selectedScent.imageUrl && (
                <div className="w-full aspect-[4/3] overflow-hidden bg-dunaru-arena">
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

              <div className="space-y-2.5">
                <div className="space-y-1">
                  <h4 className="font-display text-lg leading-none text-foreground">
                    {selectedScent.name}
                  </h4>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-dunaru-terracota">
                    {selectedScent.inspiredBy}
                  </p>
                </div>

                <p className="text-sm text-foreground/85 leading-relaxed">
                  {selectedScent.description}
                </p>

                <p className="text-sm text-foreground/85 leading-relaxed">
                  <span className="font-medium">Elígelo si buscas:</span>{" "}
                  {selectedScent.recommendedFor}
                </p>

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