import { Star } from "lucide-react"
import { getReviewStats, reviews } from "@/data/reviews"

/**
 * Micro-componentes de confianza de la PDP.
 *
 * 1. DeliveryEstimate — disponibilidad + fecha concreta de entrega.
 *    Una fecha real ("llega entre el 11 y el 14 de agosto") convierte
 *    mucho mejor que un rango abstracto ("2 a 5 días hábiles").
 * 2. PdpSocialProof — barra de prueba social con fotos reales de clientas.
 */

const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
]

/** Suma días hábiles (salta sábados y domingos) a partir de hoy. */
function addBusinessDays(days: number) {
  const date = new Date()
  let added = 0
  while (added < days) {
    date.setDate(date.getDate() + 1)
    const day = date.getDay()
    if (day !== 0 && day !== 6) added++
  }
  return date
}

/**
 * Devuelve el rango de entrega ya formateado: "11 y el 14 de agosto".
 * Se reutiliza en la PDP y en el checkout para que el usuario vea
 * exactamente la misma promesa en los dos lugares.
 */
export function getDeliveryRange() {
  const from = addBusinessDays(2)
  const to = addBusinessDays(5)
  const sameMonth = from.getMonth() === to.getMonth()

  return sameMonth
    ? `${from.getDate()} y el ${to.getDate()} de ${MESES[to.getMonth()]}`
    : `${from.getDate()} de ${MESES[from.getMonth()]} y el ${to.getDate()} de ${MESES[to.getMonth()]}`
}

export function DeliveryEstimate() {
  const range = getDeliveryRange()

  return (
    <p className="flex items-center gap-2 text-sm text-foreground/80">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500/50 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
      </span>
      <span>
        <span className="font-medium text-foreground">En stock.</span>{" "}
        Pídelo hoy y llega entre el {range}
      </span>
    </p>
  )
}

/**
 * Barra de prueba social bajo los CTA.
 * Las fotos son de clientas reales (UGC enviado por ellas).
 */
export function PdpSocialProof({
  slug,
  linkable = true,
}: {
  slug?: string
  /** En el checkout no existe `#resenas`, así que se renderiza estático. */
  linkable?: boolean
}) {
  const stats = getReviewStats()
  if (stats.count === 0) return null

  const withPhoto = reviews.filter((r) => r.image)
  const relevant = slug
    ? withPhoto.filter((r) => r.productSlugs.includes(slug))
    : withPhoto
  const avatars = (relevant.length >= 3 ? relevant : withPhoto).slice(0, 3)
  const firstName = (relevant[0] || withPhoto[0] || reviews[0]).name

  const Wrapper = linkable ? "a" : "div"

  return (
    <Wrapper
      {...(linkable ? { href: "#resenas" } : {})}
      className={`flex items-center gap-3 rounded-lg border border-border/70 bg-muted/40 px-3 py-2.5 ${
        linkable ? "transition-colors hover:bg-muted/70" : ""
      }`}
    >
      {avatars.length > 0 && (
        <span className="flex -space-x-2 shrink-0">
          {avatars.map((r) => (
            <img
              key={r.id}
              src={r.image}
              alt={`Vela de ${r.name}`}
              loading="lazy"
              decoding="async"
              className="h-8 w-8 rounded-full object-cover border-2 border-background"
            />
          ))}
        </span>
      )}
      <span className="text-xs leading-snug text-muted-foreground">
        <span className="font-semibold text-foreground">{firstName}</span> y{" "}
        <span className="font-semibold text-foreground">+200 personas</span> ya
        la tienen en casa
        <span className="mt-0.5 flex items-center gap-1">
          <Star
            className="h-3 w-3 fill-dunaru-champagne text-dunaru-champagne"
            strokeWidth={1.5}
          />
          <span className="font-medium text-foreground/80">
            {stats.average}
          </span>
          <span>de {stats.count} opiniones reales</span>
        </span>
      </span>
    </Wrapper>
  )
}