import { forwardRef } from "react"
import { Check } from "lucide-react"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { DUO_PICK_COUNT, DUO_TONES } from "@/lib/duo-tones"

interface DuoTonePickerProps {
  /** Tonos elegidos, en el orden en que se tocaron. */
  value: string[]
  onChange: (tones: string[]) => void
  /** Resalta el bloque cuando intentan comprar sin completar la pareja. */
  showError?: boolean
}

/**
 * Selector "Elige 2 tonos" del Dúo. Mismo lenguaje visual que el selector de
 * Color de Cera Duna · 500 g (miniatura + nombre), pero con selección múltiple:
 * - tocar un tono elegido lo quita;
 * - con 2 elegidos, tocar el tercero reemplaza al primero que se eligió.
 */
export const DuoTonePicker = forwardRef<HTMLDivElement, DuoTonePickerProps>(
  ({ value, onChange, showError }, ref) => {
    const remaining = DUO_PICK_COUNT - value.length

    const toggle = (name: string) => {
      if (value.includes(name)) {
        onChange(value.filter((t) => t !== name))
      } else if (value.length >= DUO_PICK_COUNT) {
        onChange([...value.slice(1), name])
      } else {
        onChange([...value, name])
      }
    }

    const summary =
      remaining === 0
        ? DUO_TONES.map((t) => t.name).filter((n) => value.includes(n)).join(" + ")
        : remaining === DUO_PICK_COUNT
          ? "Elige 2"
          : "Elige 1 más"

    return (
      <div ref={ref} className="space-y-2.5 scroll-mt-28">
        <div className="flex items-baseline justify-between gap-3">
          <Label className="text-sm font-medium uppercase tracking-wider">
            Elige tus 2 tonos
          </Label>
          <span
            className={cn(
              "text-sm",
              remaining === 0
                ? "text-foreground/80"
                : showError
                  ? "text-dunaru-terracota font-medium"
                  : "text-muted-foreground"
            )}
            aria-live="polite"
          >
            {summary}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {DUO_TONES.map((tone) => {
            const order = value.indexOf(tone.name)
            const isSelected = order >= 0
            return (
              <button
                key={tone.name}
                type="button"
                aria-pressed={isSelected}
                onClick={() => toggle(tone.name)}
                className={cn(
                  "relative overflow-hidden rounded-md border text-left transition-all",
                  isSelected
                    ? "border-dunaru-oliva-claro ring-1 ring-dunaru-oliva-claro"
                    : showError
                      ? "border-dunaru-terracota/60"
                      : "border-border hover:border-dunaru-periwinkle"
                )}
              >
                <span className="block aspect-square overflow-hidden bg-muted/30">
                  <img
                    src={tone.img}
                    alt={`Cera Duna tono ${tone.name}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </span>
                {isSelected && (
                  <span className="absolute top-1.5 right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-dunaru-oliva-claro text-dunaru-marfil shadow-sm">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                )}
                <span
                  className={cn(
                    "block px-1.5 py-1.5 text-[11px] font-medium leading-tight",
                    isSelected
                      ? "bg-dunaru-oliva-claro text-dunaru-marfil"
                      : "bg-background text-foreground/85"
                  )}
                >
                  {tone.name}
                </span>
              </button>
            )
          })}
        </div>

        <p className="text-xs text-muted-foreground">
          Recibes una bolsa de 500 g de cada tono, con 30 mechas por bolsa.
        </p>
      </div>
    )
  }
)
DuoTonePicker.displayName = "DuoTonePicker"