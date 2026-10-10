import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { supabase, type Product, type Collection as CollectionType } from "@/lib/supabase"
import { STORE_ID } from "@/lib/config"
import { EcommerceTemplate } from "@/templates/EcommerceTemplate"
import { ProductCard } from "@/components/ProductCard"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { SEO } from "@/components/SEO"
import { useSettings } from "@/contexts/SettingsContext"
import {
  sortByCatalogOrder,
  groupByCatalog,
  filterCatalogVisible,
} from "@/lib/catalog-order"
import { DDM_COLLECTION_HANDLE } from "@/lib/seasonal"
import { DdmInspirationGallery } from "@/components/DdmInspirationGallery"
import { DdmCollectionHero } from "@/components/DdmCollectionHero"
import { cn } from "@/lib/utils"

/**
 * Collection — Landing de categoría.
 * Ruta: /categorias/:handle
 * handle === "todos" muestra todo el catálogo. Cualquier otro handle
 * carga la colección por su handle y sus productos vía collection_products.
 */

const ALL_HANDLE = "todos"

const isInStock = (p: Product) => {
  const anyP = p as any
  if (anyP.track_inventory === false) return true
  if (typeof anyP.inventory_quantity === "number") return (anyP.inventory_quantity || 0) > 0
  if (Array.isArray(anyP.variants) && anyP.variants.length > 0) {
    return anyP.variants.some((v: any) => (v?.inventory_quantity ?? 0) > 0)
  }
  return true
}

const Collection = () => {
  const { handle } = useParams<{ handle: string }>()
  const { storeName } = useSettings()

  const [collection, setCollection] = useState<CollectionType | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  const isAll = handle === ALL_HANDLE
  const isDdm = handle === DDM_COLLECTION_HANDLE

  useEffect(() => {
    let active = true

    const load = async () => {
      setLoading(true)
      setNotFound(false)

      try {
        if (isAll) {
          const { data } = await supabase
            .from("products")
            .select("*")
            .eq("status", "active")
            .eq("store_id", STORE_ID)
            .order("created_at", { ascending: false })
          if (!active) return
          setCollection(null)
          setProducts(data || [])
          setLoading(false)
          return
        }

        // 1) colección por handle
        const { data: col } = await supabase
          .from("collections")
          .select("*")
          .eq("status", "active")
          .eq("store_id", STORE_ID)
          .eq("handle", handle)
          .maybeSingle()

        if (!active) return

        if (!col) {
          setNotFound(true)
          setLoading(false)
          return
        }
        setCollection(col as CollectionType)

        // 2) product_ids
        const { data: cp } = await supabase
          .from("collection_products")
          .select("product_id")
          .eq("collection_id", (col as any).id)

        const ids = (cp || []).map((r: any) => r.product_id)

        if (ids.length === 0) {
          if (!active) return
          setProducts([])
          setLoading(false)
          return
        }

        // 3) productos
        const { data: prods } = await supabase
          .from("products")
          .select("*")
          .eq("status", "active")
          .in("id", ids)

        if (!active) return
        setProducts(prods || [])
      } catch (e) {
        console.error("Error loading collection:", e)
        if (active) setNotFound(true)
      } finally {
        if (active) setLoading(false)
      }
    }

    load()
    return () => {
      active = false
    }
  }, [handle, isAll])

  const visibleProducts = sortByCatalogOrder(
    filterCatalogVisible(products.filter(isInStock) as any)
  ) as Product[]
  const groupedProducts = isAll ? groupByCatalog(visibleProducts as any) : []

  const title = isAll ? "Todos los productos" : collection?.name || "Categoría"
  const description = isAll
    ? "Empieza con un kit completo, repón la cera cuando se acabe y suma tonos o recipientes cuando quieras."
    : collection?.description || `Descubre los productos de ${title} en dunaru.`

  return (
    // full-width: la plantilla no agrega su propio contenedor (evita doble padding)
    <EcommerceTemplate layout="full-width">
      <SEO
        title={title}
        description={description}
        canonicalPath={`/categorias/${handle}`}
        storeName={storeName}
      />

      {/* Día de Muertos: banner propio + página oscura (edición de temporada) */}
      {isDdm && (
        <div className="-mt-6">
          <DdmCollectionHero />
        </div>
      )}

      {/* `dark` invierte los tokens: los estados vacíos también se leen sobre ónix */}
      <div className={cn(isDdm && "dark bg-dunaru-onix texture-grain")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-12 sm:pt-8 lg:pt-12 lg:pb-16">
        {/* Encabezado compacto: en móvil, producto antes que texto */}
        {!isDdm && (
          <header className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 lg:mb-12">
            <p className="eyebrow text-[10px] sm:text-xs mb-2">Categoría</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
              {title}
            </h1>
            {description && (
              <p className="mt-2 sm:mt-3 text-sm text-muted-foreground font-body leading-relaxed line-clamp-2 sm:line-clamp-none">
                {description}
              </p>
            )}
          </header>
        )}

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className={cn("aspect-[4/5] w-full", isDdm && "bg-dunaru-carbon")} />
            ))}
          </div>
        ) : notFound ? (
          <div className="text-center py-16">
            <h2 className="font-display text-2xl text-foreground mb-3">
              Categoría no encontrada
            </h2>
            <p className="text-muted-foreground font-body mb-6">
              No pudimos encontrar esta categoría. Explora todo el catálogo.
            </p>
            <Button asChild>
              <Link to="/categorias/todos">Ver todos los productos</Link>
            </Button>
          </div>
        ) : visibleProducts.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="font-display text-2xl text-foreground mb-3">
              Muy pronto
            </h2>
            <p className="text-muted-foreground font-body mb-6">
              Aún no hay productos en esta categoría. Mientras tanto, explora todo el catálogo.
            </p>
            <Button asChild>
              <Link to="/categorias/todos">Ver todos los productos</Link>
            </Button>
          </div>
        ) : isAll ? (
          <div className="space-y-14 lg:space-y-20">
            {groupedProducts.map((group) => (
              <section key={group.id} aria-labelledby={`grupo-${group.id}`}>
                <div className="hairline mb-6" />
                <h2
                  id={`grupo-${group.id}`}
                  className="eyebrow text-xs uppercase tracking-[0.2em] mb-6"
                >
                  {group.label}
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-12">
                  {(group.items as Product[]).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-12">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} tone={isDdm ? "dark" : "light"} />
            ))}
          </div>
        )}
      </div>
      </div>

      {isDdm && !loading && !notFound && (
        <DdmInspirationGallery className="-mb-6 border-t border-dunaru-cempasuchil/25" />
      )}
    </EcommerceTemplate>
  )
}

export default Collection