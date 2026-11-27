import { useCallback, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { EDITIONS, fetchEditionProducts, type Edition } from "@/lib/editions"
import { filterCatalogVisible } from "@/lib/catalog-order"
import { cn } from "@/lib/utils"
import { isPreorderSlug } from "@/lib/restock"
import { PreorderChip } from "@/components/PreorderNotice"

/**
 * EditionHomeSection — franja de la edición de temporada en la home.
 *
 * Lee de la DB solo los productos de la edición con status = 'active'.
 * Si la owner los archiva, la sección deja de renderizarse sola.
 * Títulos, precios e imágenes vienen SIEMPRE de la DB.
 */

type SeasonalProduct = {
  id: string
  slug: string
  title: string
  price: number
  images: string[] | null
}

const money = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
})

/** Todas las ediciones: cada una se oculta sola si no tiene productos activos. */
export const EditionHomeSections = () => (
  <>
    {EDITIONS.map((e) => (
      <EditionHomeSection key={e.id} edition={e} />
    ))}
  </>
)

export const EditionHomeSection = ({ edition }: { edition: Edition }) => {
  const [products, setProducts] = useState<SeasonalProduct[]>([])
  const trackRef = useRef<HTMLUListElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const updateArrows = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    updateArrows()
    window.addEventListener("resize", updateArrows)
    return () => window.removeEventListener("resize", updateArrows)
  }, [products, updateArrows])

  const scrollByPage = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" })
  }

  useEffect(() => {
    let alive = true
    fetchEditionProducts<SeasonalProduct>(edition, "id, slug, title, price, images").then(
      (data) => {
        if (alive) setProducts(filterCatalogVisible(data))
      },
    )
    return () => {
      alive = false
    }
  }, [edition])

  if (products.length === 0) return null

  return (
    <section
      id={`edicion-${edition.id}`}
      className={cn(
        "section-pad-sm bg-dunaru-onix texture-grain border-b border-dunaru-edition/30",
        edition.accentClass,
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-10 sm:mb-12">
          <p className="font-body text-[11px] uppercase tracking-[0.24em] text-dunaru-edition mb-4">
            {edition.eyebrow}
          </p>
          <h2 className="lockup text-3xl sm:text-5xl text-dunaru-marfil">
            {edition.home.titleLead} <em>{edition.home.titleEm}</em> {edition.home.titleTail}
          </h2>
          <span className="block mx-auto mt-5 h-px w-16 bg-dunaru-edition/70" aria-hidden />
          <p className="font-body text-sm sm:text-base text-dunaru-marfil/70 max-w-md mx-auto mt-5 leading-relaxed">
            {edition.home.intro}
          </p>
        </Reveal>

        {/* Carrusel: 2 visibles en móvil, 3 en tablet, 4 en desktop */}
        <div className="relative">
          <ul
            ref={trackRef}
            onScroll={updateArrows}
            aria-label={`Productos de la edición ${edition.name}`}
            className="-mx-4 flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-px-4 px-4 pb-2 sm:-mx-6 sm:scroll-px-6 sm:px-6 sm:gap-6 lg:mx-0 lg:scroll-px-0 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
          {products.map((p) => (
            <li
              key={p.id}
              className="w-[calc((100%-0.75rem)/2)] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] md:w-[calc((100%-3rem)/3)] lg:w-[calc((100%-4.5rem)/4)]"
            >
            <Link
              to={`/productos/${p.slug}`}
              className="group block"
              aria-label={p.title}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-dunaru-carbon">
                {p.images?.[0] && (
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-editorial group-hover:scale-[1.03]"
                  />
                )}
                <div className="absolute left-2 top-2 flex flex-col items-start gap-1">
                  <span className="bg-dunaru-edition px-2 py-1 font-body text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-dunaru-onix">
                    Edición limitada
                  </span>
                  {isPreorderSlug(p.slug) && <PreorderChip />}
                </div>
              </div>
              <h3 className="mt-3 font-body text-xs sm:text-sm text-dunaru-marfil leading-snug">
                {p.title}
              </h3>
              <p className="mt-1 font-body text-xs sm:text-sm text-dunaru-edition">
                {money.format(p.price)}
              </p>
            </Link>
            </li>
          ))}
          </ul>

          {/* Flechas (desktop/tablet). En móvil se desliza con el dedo. */}
          {(canPrev || canNext) && (
            <div className="hidden md:flex justify-end gap-2 mt-6">
              <button
                type="button"
                onClick={() => scrollByPage(-1)}
                disabled={!canPrev}
                aria-label="Productos anteriores"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-dunaru-edition/60 text-dunaru-edition transition-editorial hover:bg-dunaru-edition hover:text-dunaru-onix disabled:pointer-events-none disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={() => scrollByPage(1)}
                disabled={!canNext}
                aria-label="Más productos"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-dunaru-edition/60 text-dunaru-edition transition-editorial hover:bg-dunaru-edition hover:text-dunaru-onix disabled:pointer-events-none disabled:opacity-30"
              >
                <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          )}
          {canNext && (
            <p className="md:hidden mt-4 text-center font-body text-[11px] uppercase tracking-[0.2em] text-dunaru-marfil/50">
              Desliza para ver más
            </p>
          )}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <Link
            to={edition.path}
            className="inline-flex items-center gap-2 h-11 px-8 border border-dunaru-edition/60 font-body font-medium uppercase tracking-[0.12em] text-xs text-dunaru-edition hover:bg-dunaru-edition hover:text-dunaru-onix transition-editorial"
          >
            Ver la edición
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}