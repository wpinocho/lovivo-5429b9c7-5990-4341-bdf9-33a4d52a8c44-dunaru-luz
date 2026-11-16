import type { Edition } from "@/lib/editions"
import { cn } from "@/lib/utils"

/**
 * Sello de Edición Limitada (cualquier edición de temporada).
 * - LimitedEditionTag: etiqueta sobre el título de la PDP.
 * - LimitedEditionNotice: aviso de urgencia junto al CTA.
 * ⛔ Sin fecha límite de pedido (la owner la comunica en redes).
 * En PDP de Nieve el acento escarcha es claro: el aviso usa texto oscuro.
 */

type Props = { edition: Edition; className?: string }

export const LimitedEditionTag = ({ edition, className }: Props) => (
  <span
    className={cn(
      "inline-flex items-center gap-1.5 bg-dunaru-edition px-2.5 py-1 font-body text-[10px] font-medium uppercase tracking-[0.18em] text-dunaru-onix",
      edition.accentClass,
      className,
    )}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-dunaru-onix animate-pulse" aria-hidden />
    {edition.eyebrow}
  </span>
)

export const LimitedEditionNotice = ({ edition, className }: Props) => (
  <div
    className={cn(
      "flex items-start gap-3 border-l-2 border-dunaru-edition bg-dunaru-edition/15 px-4 py-3",
      edition.accentClass,
      className,
    )}
  >
    <span className="relative mt-1.5 flex h-2 w-2 shrink-0" aria-hidden>
      <span className="absolute inline-flex h-full w-full rounded-full bg-dunaru-edition opacity-75 animate-ping" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-dunaru-edition" />
    </span>
    <p className="font-body text-sm leading-snug text-foreground/85">
      <strong className="font-semibold text-foreground">Edición limitada de temporada.</strong>{" "}
      {edition.notice}
    </p>
  </div>
)