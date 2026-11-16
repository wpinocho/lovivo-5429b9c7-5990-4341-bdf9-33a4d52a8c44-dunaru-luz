import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import type { Edition } from "@/lib/editions"
import { cn } from "@/lib/utils"

/**
 * Edición de temporada en PDPs.
 * - useSeasonalTheme: pone en <html> el papel (theme-*) y el acento (edition-*)
 *   de la edición mientras la PDP está montada; se limpia sola al salir.
 * - SeasonalRibbon: franja ónix a ancho completo que conecta con la edición.
 */

export const useSeasonalTheme = (edition: Edition | null) => {
  useEffect(() => {
    if (!edition) return
    const root = document.documentElement
    const classes = [edition.pdpThemeClass, edition.accentClass]
    root.classList.add(...classes)
    return () => root.classList.remove(...classes)
  }, [edition])
}

export const SeasonalRibbon = ({ edition }: { edition: Edition }) => (
  <div
    className={cn(
      "full-bleed bg-dunaru-onix texture-grain border-b border-dunaru-edition/30",
      edition.accentClass,
    )}
  >
    <Link
      to={edition.path}
      className="group mx-auto flex h-9 max-w-[1400px] items-center justify-center gap-2 px-4 font-body text-[10px] uppercase tracking-[0.22em] text-dunaru-marfil/85 sm:text-[11px]"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-dunaru-edition" aria-hidden />
      <span>
        Edición <span className="text-dunaru-edition">{edition.name}</span>
        <span className="hidden sm:inline"> · {edition.occasion}</span>
      </span>
      <span className="text-dunaru-edition underline-offset-4 group-hover:underline">
        Ver todo
      </span>
      <ArrowRight className="h-3 w-3 text-dunaru-edition" strokeWidth={1.5} />
    </Link>
  </div>
)