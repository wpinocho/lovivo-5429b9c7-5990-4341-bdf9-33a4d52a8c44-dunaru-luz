import { cn } from "@/lib/utils"

/**
 * Sello de Edición Limitada (Día de Muertos).
 * - LimitedEditionTag: etiqueta sobre el título de la PDP.
 * - LimitedEditionNotice: aviso de urgencia junto al CTA.
 * ⛔ Sin fecha límite de pedido (la owner la comunica en redes).
 */

export const LimitedEditionTag = ({ className }: { className?: string }) => (
  <span
    className={cn(
      "inline-flex items-center gap-1.5 bg-dunaru-cempasuchil px-2.5 py-1 font-body text-[10px] font-medium uppercase tracking-[0.18em] text-dunaru-onix",
      className,
    )}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-dunaru-onix animate-pulse" aria-hidden />
    Edición limitada · Día de Muertos
  </span>
)

export const LimitedEditionNotice = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "flex items-start gap-3 border-l-2 border-dunaru-cempasuchil bg-dunaru-cempasuchil/10 px-4 py-3",
      className,
    )}
  >
    <span className="relative mt-1.5 flex h-2 w-2 shrink-0" aria-hidden>
      <span className="absolute inline-flex h-full w-full rounded-full bg-dunaru-cempasuchil opacity-75 animate-ping" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-dunaru-cempasuchil" />
    </span>
    <p className="font-body text-sm leading-snug text-foreground/85">
      <strong className="font-semibold text-foreground">Edición limitada de temporada.</strong>{" "}
      Se hace solo para Día de Muertos. Cuando se agote, se acaba.
    </p>
  </div>
)