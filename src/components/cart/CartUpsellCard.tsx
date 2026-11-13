import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type UpsellOption = { id: string; label: string; disabled?: boolean }

interface CartUpsellCardProps {
  eyebrow: string
  eyebrowTone?: "promo" | "default"
  title: string
  thumb?: string
  thumbAlt: string
  price: string
  compareAt?: string | null
  savings?: string | null
  helper?: string
  optionsLabel: string
  options: UpsellOption[]
  selectedId?: string
  onSelect: (id: string) => void
  ctaLabel: string
  ctaDisabled?: boolean
  onAdd: () => void
}

/**
 * Tarjeta visual de sugerencia en el carrito (una a la vez).
 * Sin checkbox: chips visibles + botón "Agregar" de un clic.
 */
export const CartUpsellCard = ({
  eyebrow,
  eyebrowTone = "default",
  title,
  thumb,
  thumbAlt,
  price,
  compareAt,
  savings,
  helper,
  optionsLabel,
  options,
  selectedId,
  onSelect,
  ctaLabel,
  ctaDisabled,
  onAdd,
}: CartUpsellCardProps) => (
  <div className="border border-border/80 bg-background p-3 animate-fade-in">
    <div className="flex items-start gap-3">
      {thumb && (
        <img
          src={thumb}
          alt={thumbAlt}
          width={56}
          height={70}
          loading="lazy"
          className="h-[70px] w-14 shrink-0 bg-muted object-cover"
        />
      )}
      <div className="min-w-0 flex-1">
        <p
          className={cn(
            "text-[11px] font-semibold uppercase tracking-[0.14em]",
            eyebrowTone === "promo" ? "text-dunaru-terracota" : "text-foreground/60"
          )}
        >
          {eyebrow}
        </p>
        <p className="mt-0.5 text-sm font-semibold leading-snug text-foreground">{title}</p>
        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-sm font-semibold text-foreground">{price}</span>
          {compareAt && (
            <span className="text-xs text-muted-foreground line-through">{compareAt}</span>
          )}
          {savings && (
            <span className="bg-dunaru-terracota/10 px-1.5 py-0.5 text-[11px] font-semibold text-dunaru-terracota">
              Ahorras {savings}
            </span>
          )}
        </div>
        {helper && (
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{helper}</p>
        )}
      </div>
    </div>

    {options.length > 1 && (
      <div className="mt-3 border-t border-border/60 pt-3">
        <p className="mb-1.5 text-xs text-foreground/70">{optionsLabel}</p>
        <div role="radiogroup" aria-label={optionsLabel} className="flex flex-wrap gap-1.5">
          {options.map((o) => {
            const active = o.id === selectedId
            return (
              <button
                key={o.id}
                type="button"
                role="radio"
                aria-checked={active}
                disabled={o.disabled}
                onClick={() => onSelect(o.id)}
                className={cn(
                  "h-8 border px-3 text-xs font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40",
                  active
                    ? "border-[hsl(var(--dunaru-oliva-claro))] bg-[hsl(var(--dunaru-oliva-claro))] text-primary-foreground"
                    : "border-border bg-background text-foreground/80 hover:border-foreground/40"
                )}
              >
                {o.label}
              </button>
            )
          })}
        </div>
      </div>
    )}

    <Button
      type="button"
      size="sm"
      className="mt-3 h-10 w-full"
      disabled={ctaDisabled}
      onClick={onAdd}
    >
      {ctaLabel}
    </Button>
  </div>
)