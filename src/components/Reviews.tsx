import { Star, Camera } from "lucide-react"
import { getReviews, getFeaturedReviews, getReviewStats } from "@/data/reviews"

/**
 * Reviews — prueba social REAL de dunaru.
 * - Sin slug (landing): muestra las reseñas destacadas de toda la tienda.
 * - Con slug (PDP): filtra a las reseñas de ese producto.
 * Estética editorial dunaru (arena / champagne / font-display).
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

export const Reviews = ({ slug, title }: ReviewsProps) => {
  const { average, count } = getReviewStats(slug)
  const featured = getFeaturedReviews(slug)
  const rest = getReviews(slug).filter((r) => !r.featured)

  if (count === 0) return null

  return (
    <section id="resenas" className="section-pad-sm bg-dunaru-arena scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Stars rating={5} />
            <span className="font-body text-sm font-semibold text-foreground">
              {average} · {count} opiniones
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-2">
            {title ?? "Lo que dicen quienes ya la encendieron"}
          </h2>
          <p className="font-body text-sm sm:text-base text-foreground/60 max-w-xl mx-auto">
            Opiniones reales de clientes que la usan en casa. Sin filtros, sin invenciones.
          </p>
        </div>

        {/* Reseñas destacadas con foto */}
        {featured.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-6">
            {featured.map((r) => (
              <figure
                key={r.id}
                className="bg-background rounded-lg overflow-hidden border border-border/50 flex flex-col"
              >
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
                  <p className="font-body text-sm text-foreground/70 leading-relaxed flex-1">
                    "{r.text}"
                  </p>
                  <p className="font-body text-xs font-semibold text-foreground/80 mt-1">
                    {r.name}
                    {r.location && <span className="font-normal text-foreground/50"> · {r.location}</span>}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {/* Resto de reseñas (solo texto) */}
        {rest.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((r) => (
              <div
                key={r.id}
                className="bg-background rounded-lg border border-border/50 p-5 flex flex-col gap-2"
              >
                <Stars rating={r.rating} />
                <p className="font-display text-base text-foreground leading-snug">{r.title}</p>
                <p className="font-body text-sm text-foreground/70 leading-relaxed flex-1">
                  "{r.text}"
                </p>
                <p className="font-body text-xs font-semibold text-foreground/80 mt-1">
                  {r.name}
                  {r.location && <span className="font-normal text-foreground/50"> · {r.location}</span>}
                </p>
              </div>
            ))}
          </div>
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