import { useState, useCallback, useEffect } from "react"
import { Star, Camera, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import {
  getReviews,
  getFeaturedReviews,
  getReviewStats,
  getRatingDistribution,
  type Review,
} from "@/data/reviews"

/**
 * Reviews — prueba social REAL de dunaru (layout mixto, mobile-first).
 * - Header: promedio + conteo + barra de distribución de estrellas.
 * - Featured (con foto): carrusel deslizable con peek (móvil) y flechas (desktop).
 * - Resto (solo texto): 3 visibles + botón "Ver las N opiniones" (expande inline).
 * - CTA WhatsApp para seguir juntando UGC.
 *
 * Sin slug → muestra TODAS las reseñas de la tienda (usado en landing y PDP,
 * para maximizar prueba social con pocas reseñas).
 */

interface ReviewsProps {
  slug?: string
  title?: string
}

function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-dunaru-champagne text-dunaru-champagne" : "text-dunaru-champagne/30"}`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

function FeaturedCard({ r }: { r: Review }) {
  return (
    <figure className="h-full bg-background rounded-lg overflow-hidden border border-border/50 flex flex-col">
      {r.image && (
        <div className="aspect-[4/5] overflow-hidden bg-dunaru-arena">
          <img
            src={r.image}
            alt={`Vela dunaru de ${r.name}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <figcaption className="p-5 flex flex-col gap-2 flex-1">
        <Stars rating={r.rating} />
        <p className="font-display text-lg text-foreground leading-snug">{r.title}</p>
        <p className="font-body text-sm text-foreground/70 leading-relaxed flex-1">"{r.text}"</p>
        <p className="font-body text-xs font-semibold text-foreground/80 mt-1">
          {r.name}
          {r.location && <span className="font-normal text-foreground/50"> · {r.location}</span>}
        </p>
      </figcaption>
    </figure>
  )
}

function TextCard({ r }: { r: Review }) {
  return (
    <div className="bg-background rounded-lg border border-border/50 p-5 flex flex-col gap-2">
      <Stars rating={r.rating} />
      <p className="font-display text-base text-foreground leading-snug">{r.title}</p>
      <p className="font-body text-sm text-foreground/70 leading-relaxed flex-1">"{r.text}"</p>
      <p className="font-body text-xs font-semibold text-foreground/80 mt-1">
        {r.name}
        {r.location && <span className="font-normal text-foreground/50"> · {r.location}</span>}
      </p>
    </div>
  )
}

export const Reviews = ({ slug, title }: ReviewsProps) => {
  const { average, count } = getReviewStats(slug)
  const featured = getFeaturedReviews(slug)
  const rest = getReviews(slug).filter((r) => !r.featured)
  const dist = getRatingDistribution(slug)

  const [expanded, setExpanded] = useState(false)
  const visibleRest = expanded ? rest : rest.slice(0, 3)

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false, dragFree: true })
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  if (count === 0) return null

  return (
    <section id="resenas" className="section-pad-sm bg-dunaru-arena scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header con resumen + distribución */}
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-3">
            {title ?? "Lo que dicen quienes ya la encendieron"}
          </h2>
          <p className="font-body text-sm sm:text-base text-foreground/60 max-w-xl mx-auto">
            Opiniones reales de clientes que la usan en casa. Sin filtros, sin invenciones.
          </p>
        </div>

        {/* Tarjeta resumen: promedio + barra de distribución */}
        <div className="max-w-md mx-auto mb-10 bg-background rounded-lg border border-border/50 p-6 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex flex-col items-center shrink-0">
            <span className="font-display text-5xl text-foreground leading-none">{average}</span>
            <Stars rating={Math.round(average)} className="mt-2" />
            <span className="font-body text-xs text-foreground/60 mt-1.5">{count} opiniones</span>
          </div>
          <div className="w-full flex-1 space-y-1.5">
            {([5, 4, 3, 2, 1] as const).map((stars) => {
              const n = dist[stars]
              const pct = count > 0 ? (n / count) * 100 : 0
              return (
                <div key={stars} className="flex items-center gap-2">
                  <span className="font-body text-xs text-foreground/60 w-6 shrink-0">{stars}★</span>
                  <div className="flex-1 h-2 rounded-full bg-dunaru-arena overflow-hidden">
                    <div
                      className="h-full rounded-full bg-dunaru-champagne transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="font-body text-xs text-foreground/50 w-6 shrink-0 text-right">{n}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Featured con foto — carrusel deslizable con peek */}
        {featured.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <p className="font-body text-sm font-semibold text-foreground/80">Opiniones con foto</p>
              <div className="hidden sm:flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => emblaApi?.scrollPrev()}
                  disabled={!canPrev}
                  aria-label="Anterior"
                  className="h-9 w-9 rounded-full border border-border/60 flex items-center justify-center text-foreground/70 hover:bg-background disabled:opacity-30 transition"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => emblaApi?.scrollNext()}
                  disabled={!canNext}
                  aria-label="Siguiente"
                  className="h-9 w-9 rounded-full border border-border/60 flex items-center justify-center text-foreground/70 hover:bg-background disabled:opacity-30 transition"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="overflow-hidden -mx-1" ref={emblaRef}>
              <div className="flex">
                {featured.map((r) => (
                  <div
                    key={r.id}
                    className="shrink-0 basis-[85%] sm:basis-1/2 lg:basis-1/3 px-1"
                  >
                    <FeaturedCard r={r} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Resto — solo texto, 3 visibles + expandir */}
        {rest.length > 0 && (
          <>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleRest.map((r) => (
                <TextCard key={r.id} r={r} />
              ))}
            </div>
            {rest.length > 3 && (
              <div className="text-center mt-8">
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-6 py-3 font-body text-sm font-medium text-foreground hover:bg-background transition-colors"
                >
                  {expanded ? "Ver menos" : `Ver las ${count} opiniones`}
                </button>
              </div>
            )}
          </>
        )}

        {/* CTA: seguir juntando UGC */}
        <div className="text-center mt-10">
          <a
            href="https://wa.me/525531215386?text=Hola%2C%20quiero%20compartir%20mi%20experiencia%20y%20una%20foto%20de%20mi%20vela%20dunaru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body font-medium text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            <Camera className="h-4 w-4" />
            ¿Ya tienes tu dunaru? Comparte tu experiencia
          </a>
        </div>
      </div>
    </section>
  )
}