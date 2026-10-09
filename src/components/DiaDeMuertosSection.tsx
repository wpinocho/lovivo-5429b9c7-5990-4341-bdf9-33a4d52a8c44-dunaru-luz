import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { STORE_ID } from "@/lib/config"
import { Reveal } from "@/components/Reveal"
import { DDM_PATH, SEASONAL_SLUGS } from "@/lib/seasonal"

/**
 * DiaDeMuertosSection — Edición limitada Cempasúchil (temporal).
 *
 * Lee de la DB solo los productos de temporada con status = 'active'.
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

export const DiaDeMuertosSection = () => {
  const [products, setProducts] = useState<SeasonalProduct[]>([])

  useEffect(() => {
    let alive = true
    supabase
      .from("products")
      .select("id, slug, title, price, images")
      .eq("store_id", STORE_ID)
      .eq("status", "active")
      .in("slug", SEASONAL_SLUGS)
      .then(({ data, error }) => {
        if (!alive || error || !data) return
        const sorted = [...(data as SeasonalProduct[])].sort(
          (a, b) => SEASONAL_SLUGS.indexOf(a.slug) - SEASONAL_SLUGS.indexOf(b.slug),
        )
        setProducts(sorted)
      })
    return () => {
      alive = false
    }
  }, [])

  if (products.length === 0) return null

  return (
    <section
      id="dia-de-muertos"
      className="section-pad-sm bg-dunaru-onix texture-grain border-b border-dunaru-cempasuchil/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-10 sm:mb-12">
          <p className="font-body text-[11px] uppercase tracking-[0.24em] text-dunaru-cempasuchil mb-4">
            Edición limitada · Día de Muertos
          </p>
          <h2 className="lockup text-3xl sm:text-5xl text-dunaru-marfil">
            CEMPASÚCHIL. <em>Una luz</em> PARA RECORDAR
          </h2>
          <span className="block mx-auto mt-5 h-px w-16 bg-dunaru-cempasuchil/70" aria-hidden />
          <p className="font-body text-sm sm:text-base text-dunaru-marfil/70 max-w-md mx-auto mt-5 leading-relaxed">
            El naranja de la flor que guía el camino en la ofrenda, ahora en Cera Duna.
            Piezas contadas, solo esta temporada.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8 sm:gap-x-6">
          {products.map((p) => (
            <Link
              key={p.id}
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
                <span className="absolute left-2 top-2 bg-dunaru-cempasuchil px-2 py-1 font-body text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-dunaru-onix">
                  Edición limitada
                </span>
              </div>
              <h3 className="mt-3 font-body text-xs sm:text-sm text-dunaru-marfil leading-snug">
                {p.title}
              </h3>
              <p className="mt-1 font-body text-xs sm:text-sm text-dunaru-cempasuchil">
                {money.format(p.price)}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <Link
            to={DDM_PATH}
            className="inline-flex items-center gap-2 h-11 px-8 border border-dunaru-cempasuchil/60 font-body font-medium uppercase tracking-[0.12em] text-xs text-dunaru-cempasuchil hover:bg-dunaru-cempasuchil hover:text-dunaru-onix transition-editorial"
          >
            Ver la edición
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}