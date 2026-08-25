import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * CompareTable — dunaru vs vela tradicional.
 *
 * Fuente ÚNICA de la tabla comparativa. La usan la home (con BASE_COMPARE_ROWS)
 * y cada PDP (con sus propias filas via ProductStorySections). No duplicar filas
 * en otros archivos: si hay que cambiar el argumento, se cambia aquí.
 */

export interface CompareRow {
  label: string
  /** boolean = palomita/tache · string = valor comparativo (ej. "$" vs "$$$") */
  dunaru: boolean | string
  traditional: boolean | string
}

/** Filas por defecto (home y cualquier producto sin filas propias). */
export const BASE_COMPARE_ROWS: CompareRow[] = [
  { label: "Rellenable infinitamente", dunaru: true, traditional: false },
  { label: "Cera 100% vegetal y biodegradable", dunaru: true, traditional: false },
  { label: "Sin desperdicio ni cera pegada", dunaru: true, traditional: false },
  { label: "Usa el recipiente que tú quieras", dunaru: true, traditional: false },
  { label: "Cambias de aroma sin cambiar de vela", dunaru: true, traditional: false },
  { label: "Hasta 120 horas de luz por bolsa", dunaru: true, traditional: false },
  { label: "Costo por hora de luz", dunaru: "$", traditional: "$$$" },
]

interface CompareTableProps {
  rows?: CompareRow[]
  className?: string
  /** Nota al pie sobre el costo por hora. Se oculta si no hay filas de valor. */
  footnote?: boolean
}

export function CompareTable({
  rows = BASE_COMPARE_ROWS,
  className,
  footnote = true,
}: CompareTableProps) {
  const hasValueRow = rows.some((r) => typeof r.dunaru === "string")

  return (
    <div className={cn("max-w-3xl mx-auto", className)}>
      <div className="border border-foreground/12 overflow-hidden bg-background">
        <div className="grid grid-cols-[1fr_auto_auto] items-center bg-dunaru-arena texture-travertino">
          <span className="px-4 py-4" />
          <span className="px-3 sm:px-4 py-4 text-center font-display text-base sm:text-lg w-[76px] sm:w-24 text-foreground">
            dunaru
          </span>
          <span className="px-3 sm:px-4 py-4 text-center font-body text-[10px] uppercase tracking-[0.14em] text-foreground/50 leading-tight w-[76px] sm:w-24">
            Vela
            <br />
            normal
          </span>
        </div>

        {rows.map((row, i) => (
          <div
            key={i}
            className={cn(
              "grid grid-cols-[1fr_auto_auto] items-center border-t border-foreground/10",
              i % 2 === 1 && "bg-dunaru-arena/35"
            )}
          >
            <span className="px-4 py-4 font-body text-[13px] sm:text-sm text-foreground/85 leading-snug">
              {row.label}
            </span>
            <span className="px-3 sm:px-4 py-4 flex justify-center w-[76px] sm:w-24">
              {typeof row.dunaru === "string" ? (
                <span className="font-display text-lg leading-none text-dunaru-terracota">
                  {row.dunaru}
                </span>
              ) : row.dunaru ? (
                <Check
                  className="h-[18px] w-[18px] text-dunaru-terracota"
                  strokeWidth={2.5}
                />
              ) : (
                <X className="h-[18px] w-[18px] text-foreground/25" />
              )}
            </span>
            <span className="px-3 sm:px-4 py-4 flex justify-center w-[76px] sm:w-24">
              {typeof row.traditional === "string" ? (
                <span className="font-display text-lg leading-none text-foreground/45">
                  {row.traditional}
                </span>
              ) : row.traditional ? (
                <Check className="h-[18px] w-[18px] text-foreground/45" strokeWidth={2.5} />
              ) : (
                <X className="h-[18px] w-[18px] text-foreground/25" />
              )}
            </span>
          </div>
        ))}
      </div>

      {footnote && hasValueRow && (
        <p className="mt-4 px-2 font-body text-xs text-foreground/50 leading-relaxed text-center">
          Una bolsa de 500 g rinde hasta 120 horas de luz. Como rellenas el mismo
          recipiente en vez de comprar una vela nueva cada vez, cada hora de luz
          te sale mucho más barata.
        </p>
      )}
    </div>
  )
}