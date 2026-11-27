import { CalendarClock } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  arrivesForChristmas,
  formatShipDate,
  formatShipDateShort,
  getLatestPreorder,
  getPreorder,
  type Preorder,
} from "@/lib/restock"

/** Aviso de preventa en la PDP, justo arriba de los CTA. */
export function PreorderNotice({ preorder }: { preorder: Preorder }) {
  return (
    <div className="flex items-start gap-3 border border-dunaru-oliva-claro/50 bg-dunaru-oliva-claro/10 px-4 py-3">
      <CalendarClock className="mt-0.5 h-4 w-4 shrink-0 text-dunaru-oliva-claro" strokeWidth={1.75} />
      <div className="text-sm leading-snug">
        <p className="text-foreground">
          <span className="font-semibold">Preventa.</span> Se envía a partir del{" "}
          {formatShipDate(preorder.shipDate)}.
        </p>
        {arrivesForChristmas(preorder) && (
          <p className="mt-0.5 text-xs text-muted-foreground">
            Aparta el tuyo hoy, llega a tiempo para Navidad.
          </p>
        )}
      </div>
    </div>
  )
}

/** Línea compacta para carrito, checkout y gracias. */
export function PreorderLine({
  preorder,
  scope = "item",
  className,
}: {
  preorder: Preorder
  scope?: "item" | "order"
  className?: string
}) {
  return (
    <p className={cn("flex items-center gap-1.5 text-[11px] text-dunaru-oliva-claro", className)}>
      <CalendarClock className="h-3 w-3 shrink-0" strokeWidth={2} />
      {scope === "item"
        ? `Preventa · se envía a partir del ${formatShipDateShort(preorder.shipDate)}`
        : `Tu pedido completo se envía a partir del ${formatShipDate(preorder.shipDate)}`}
    </p>
  )
}

/**
 * Aviso de pedido completo (carrito): solo si hay preventa mezclada con
 * productos en stock. Todo se manda junto cuando llega la preventa.
 */
export function CartPreorderBanner({ slugs }: { slugs: (string | null | undefined)[] }) {
  const preorder = getLatestPreorder(slugs)
  if (!preorder) return null
  const mixed = slugs.some((s) => !getPreorder(s))
  if (!mixed) return null
  return (
    <div className="border border-dunaru-oliva-claro/50 bg-dunaru-oliva-claro/10 px-3 py-2.5">
      <PreorderLine preorder={preorder} scope="order" className="text-xs" />
      <p className="mt-0.5 pl-[18px] text-[11px] text-muted-foreground">
        Incluye el {preorder.label} en preventa: lo enviamos todo junto en un solo paquete.
      </p>
    </div>
  )
}

/** Chip para tarjetas de catálogo. */
export function PreorderChip() {
  return (
    <span className="bg-dunaru-oliva-claro px-2 py-1 font-body text-[9px] uppercase tracking-[0.16em] text-dunaru-marfil sm:text-[10px]">
      Preventa
    </span>
  )
}