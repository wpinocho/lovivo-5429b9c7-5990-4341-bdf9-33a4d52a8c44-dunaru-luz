import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { DDM_PATH } from "@/lib/seasonal"

/**
 * Edición Día de Muertos en PDPs (temporal).
 * - useSeasonalTheme: activa la paleta cálida (.theme-ddm) mientras la PDP
 *   de temporada está montada; se limpia sola al salir.
 * - SeasonalRibbon: franja ónix a ancho completo que conecta con la edición.
 */

export const useSeasonalTheme = (active: boolean) => {
  useEffect(() => {
    if (!active) return
    const root = document.documentElement
    root.classList.add("theme-ddm")
    return () => root.classList.remove("theme-ddm")
  }, [active])
}

export const SeasonalRibbon = () => (
  <div className="full-bleed bg-dunaru-onix texture-grain border-b border-dunaru-cempasuchil/30">
    <Link
      to={DDM_PATH}
      className="group mx-auto flex h-9 max-w-[1400px] items-center justify-center gap-2 px-4 font-body text-[10px] uppercase tracking-[0.22em] text-dunaru-marfil/85 sm:text-[11px]"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-dunaru-cempasuchil" aria-hidden />
      <span>
        Edición <span className="text-dunaru-cempasuchil">Cempasúchil</span>
        <span className="hidden sm:inline"> · Día de Muertos</span>
      </span>
      <span className="text-dunaru-cempasuchil underline-offset-4 group-hover:underline">
        Ver todo
      </span>
      <ArrowRight className="h-3 w-3 text-dunaru-cempasuchil" strokeWidth={1.5} />
    </Link>
  </div>
)