import { useRef, useState, type TouchEvent } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

/**
 * DdmInspirationGallery — "Ideas para tu altar" (Día de Muertos, temporal).
 * Se usa en /categorias/dia-de-muertos (debajo de productos) y en las 4 PDPs
 * de temporada. Móvil: carrusel con snap. Desktop: mosaico escalonado.
 * Toca una foto → lightbox con la idea completa (swipe / flechas).
 */

const BASE =
  "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de"

const IDEAS = [
  {
    src: `${BASE}/1791586723101-uqttcs5raf.webp`,
    title: "Un campo de luz",
    tip: "Extiende la cera sobre una charola amplia y enciende varias mechas entre flores de cempasúchil.",
  },
  {
    src: `${BASE}/1791586723101-beyoys9qmbm.webp`,
    title: "Camino de ofrenda",
    tip: "Un sendero de cera al centro de la mesa, con barro, fruta de temporada y semillas.",
  },
  {
    src: `${BASE}/1791586723101-m6tb2khuzlr.webp`,
    title: "Mesa para recibir",
    tip: "Vasos altos de vidrio con cera, cempasúchil alrededor, fruta y luz baja para la cena.",
  },
  {
    src: `${BASE}/1791586723101-1fvs134xdv6.webp`,
    title: "Altar en la cocina",
    tip: "Un cuenco con varias mechas, calaveritas de barro y un ramo naranja. Pequeño y lleno de sentido.",
  },
  {
    src: `${BASE}/1791586723101-b7696bizhwg.webp`,
    title: "Sobre la credenza",
    tip: "Calabazas, flores sueltas y una vela en cada extremo. Simple, cálido y fácil de armar.",
  },
  {
    src: `${BASE}/1791586723101-bcdckoare7.webp`,
    title: "Un río de cera",
    tip: "La misma credenza, ahora con Cera Duna como camino y mechas entre las calabazas.",
  },
]

const pad = (n: number) => String(n).padStart(2, "0")

export const DdmInspirationGallery = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState<number | null>(null)
  const touchX = useRef<number | null>(null)

  const go = (dir: 1 | -1) =>
    setOpen((i) => (i === null ? i : (i + dir + IDEAS.length) % IDEAS.length))

  const onTouchStart = (e: TouchEvent) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: TouchEvent) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
    touchX.current = null
  }

  const current = open !== null ? IDEAS[open] : null

  return (
    <section
      aria-labelledby="ddm-inspiracion"
      className={cn("section-pad bg-dunaru-onix texture-grain overflow-hidden", className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-10 sm:mb-14">
          <p className="font-body text-[11px] uppercase tracking-[0.24em] text-dunaru-cempasuchil mb-4">
            Inspiración · Día de Muertos
          </p>
          <h2 id="ddm-inspiracion" className="lockup text-3xl sm:text-5xl text-dunaru-marfil">
            IDEAS PARA <em>tu altar</em>
          </h2>
          <span className="block mx-auto mt-5 h-px w-16 bg-dunaru-cempasuchil/70" aria-hidden />
          <p className="font-body text-sm sm:text-base text-dunaru-marfil/70 max-w-md mx-auto mt-5 leading-relaxed">
            Seis formas de llevar la luz de la temporada a tu casa. Toca una foto para verla completa.
          </p>
        </Reveal>
      </div>

      {/* Móvil: carrusel con snap · Desktop: mosaico escalonado de 3 columnas */}
      <ul
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-auto md:grid md:max-w-7xl md:grid-cols-3 md:gap-x-6 md:gap-y-10 md:overflow-visible md:px-6 lg:px-8"
      >
        {IDEAS.map((idea, i) => (
          <li
            key={idea.src}
            className={cn(
              "w-[78%] shrink-0 snap-center sm:w-[46%] md:w-auto",
              i % 3 === 1 && "md:translate-y-12",
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full text-left"
              aria-label={`Ver idea: ${idea.title}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-dunaru-carbon">
                <img
                  src={idea.src}
                  alt={`${idea.title}: ${idea.tip}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-editorial group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 font-display text-2xl text-dunaru-marfil drop-shadow">
                  {pad(i + 1)}
                </span>
              </div>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="h-px w-6 shrink-0 bg-dunaru-cempasuchil/70 translate-y-[-3px]" aria-hidden />
                <h3 className="font-display text-xl text-dunaru-marfil">{idea.title}</h3>
              </div>
              <p className="mt-1 pl-9 font-body text-xs sm:text-sm text-dunaru-marfil/60 leading-relaxed line-clamp-2">
                {idea.tip}
              </p>
            </button>
          </li>
        ))}
      </ul>
      <p className="md:hidden mt-4 text-center font-body text-[11px] uppercase tracking-[0.2em] text-dunaru-marfil/50">
        Desliza para ver más
      </p>
      <div className="hidden md:block h-12" aria-hidden />

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent
          className="max-w-[min(92vw,30rem)] gap-0 border-dunaru-cempasuchil/30 bg-dunaru-onix p-0 sm:rounded-none [&>button]:right-3 [&>button]:top-3 [&>button]:z-10 [&>button]:rounded-full [&>button]:bg-dunaru-onix/70 [&>button]:p-1.5 [&>button]:text-dunaru-marfil [&>button]:opacity-100"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") go(1)
            if (e.key === "ArrowLeft") go(-1)
          }}
        >
          {current && open !== null && (
            <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              <div className="relative aspect-[4/5] max-h-[70vh] w-full bg-dunaru-carbon">
                <img src={current.src} alt={current.title} className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-2">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Idea anterior"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-dunaru-onix/70 text-dunaru-marfil"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Siguiente idea"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-dunaru-onix/70 text-dunaru-marfil"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="px-5 py-4">
                <p className="font-body text-[10px] uppercase tracking-[0.22em] text-dunaru-cempasuchil">
                  Idea {pad(open + 1)} de {pad(IDEAS.length)}
                </p>
                <DialogTitle className="mt-1 font-display text-2xl font-normal text-dunaru-marfil">
                  {current.title}
                </DialogTitle>
                <DialogDescription className="mt-1 font-body text-sm text-dunaru-marfil/70 leading-relaxed">
                  {current.tip}
                </DialogDescription>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}