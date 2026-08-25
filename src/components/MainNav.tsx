import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'
import {
  SHOP_COLUMNS,
  SHOP_FEATURED,
  SHOP_ALL,
  PRIMARY_LINKS,
  UTILITY_LINKS,
} from '@/lib/navigation'

/* ────────────────────────────────────────────────────────────────────────────
   DESKTOP — mega menú "Tienda" + links primarios.
   Todo son rutas reales, así que el menú se comporta igual en la home que
   dentro de una PDP.
   ──────────────────────────────────────────────────────────────────────────── */
export const DesktopNav = () => (
  <nav className="hidden md:flex items-center gap-8 font-body text-sm font-medium">
    {/* Tienda — mega menú */}
    <div className="group">
      <button
        type="button"
        className="nav-link flex items-center gap-1 text-foreground/60 py-2"
        aria-haspopup="true"
      >
        Tienda
        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
      </button>

      {/* Panel — full-bleed, centrado sobre el viewport */}
      <div className="absolute top-full left-0 right-0 z-50 pointer-events-none">
        <div className="pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto focus-within:opacity-100 focus-within:visible transition-all duration-200">
          <div className="border-y border-border bg-background shadow-xl">
            <div className="px-6 lg:px-8 py-9 grid grid-cols-12 gap-8">
              {SHOP_COLUMNS.map((col) => (
                <div key={col.id} className="col-span-3">
                  <p className="eyebrow mb-4 text-foreground/40">{col.title}</p>
                  <ul className="space-y-3">
                    {col.items.map((item) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          className="group/item block transition-editorial"
                        >
                          <span className="flex items-center gap-2 font-body text-[15px] text-foreground/85 group-hover/item:text-[hsl(var(--dunaru-periwinkle-deep))] transition-colors">
                            {item.label}
                            {item.tag && (
                              <span className="font-body text-[9px] uppercase tracking-[0.14em] text-dunaru-terracota border border-dunaru-terracota/40 px-1.5 py-0.5">
                                {item.tag}
                              </span>
                            )}
                          </span>
                          {item.desc && (
                            <span className="block font-body text-xs text-foreground/45 mt-0.5">
                              {item.desc}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Destacado — empuja el add-on de aroma */}
              <div className="col-span-3">
                <div className="bg-dunaru-arena texture-arena h-full p-6 flex flex-col">
                  <p className="eyebrow mb-3 text-dunaru-terracota">{SHOP_FEATURED.eyebrow}</p>
                  <p className="font-display text-2xl leading-tight text-foreground mb-2">
                    {SHOP_FEATURED.title}
                  </p>
                  <p className="font-body text-xs text-foreground/60 leading-relaxed mb-5">
                    {SHOP_FEATURED.body}
                  </p>
                  <Link
                    to={SHOP_FEATURED.to}
                    className="mt-auto inline-flex items-center gap-1.5 font-body text-xs uppercase tracking-[0.14em] text-foreground hover:text-dunaru-terracota transition-colors"
                  >
                    {SHOP_FEATURED.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-border">
              <div className="px-6 lg:px-8 py-3.5 flex items-center justify-between">
                <Link
                  to={SHOP_ALL.to}
                  className="font-body text-xs uppercase tracking-[0.14em] text-foreground/60 hover:text-[hsl(var(--dunaru-periwinkle-deep))] transition-colors"
                >
                  {SHOP_ALL.label}
                </Link>
                <span className="font-body text-xs text-foreground/45">
                  Envío gratis a todo México · Hasta 6 meses sin intereses
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {PRIMARY_LINKS.map((item) => (
      <Link key={item.to} to={item.to} className="nav-link text-foreground/60 py-2">
        {item.label}
      </Link>
    ))}
  </nav>
)

/* ────────────────────────────────────────────────────────────────────────────
   MÓVIL — acordeón. Nada depende de :hover.
   ──────────────────────────────────────────────────────────────────────────── */
export const MobileNav = ({ onNavigate }: { onNavigate: () => void }) => {
  const [openCol, setOpenCol] = useState<string | null>(SHOP_COLUMNS[0]?.id ?? null)

  return (
    <nav className="md:hidden pt-4 pb-3 border-t border-border mt-3 font-body text-sm animate-fade-in">
      {SHOP_COLUMNS.map((col) => {
        const isOpen = openCol === col.id
        return (
          <div key={col.id} className="border-b border-border/60">
            <button
              type="button"
              onClick={() => setOpenCol(isOpen ? null : col.id)}
              className="w-full flex items-center justify-between py-3.5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-body text-[13px] uppercase tracking-[0.14em] text-foreground/80">
                {col.title}
              </span>
              <ChevronDown
                className={`h-4 w-4 text-foreground/40 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <ul className="pb-3 space-y-1">
                {col.items.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={onNavigate}
                      className="flex items-center justify-between py-2 pl-1 pr-1"
                    >
                      <span className="font-body text-[15px] text-foreground/75">
                        {item.label}
                        {item.desc && (
                          <span className="block text-xs text-foreground/40 mt-0.5">{item.desc}</span>
                        )}
                      </span>
                      {item.tag && (
                        <span className="font-body text-[9px] uppercase tracking-[0.14em] text-dunaru-terracota border border-dunaru-terracota/40 px-1.5 py-0.5 shrink-0">
                          {item.tag}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      })}

      <div className="flex flex-col pt-2">
        {[SHOP_ALL, ...PRIMARY_LINKS].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            className="nav-link-mobile text-foreground/80 py-3 border-b border-border/60"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4">
        {UTILITY_LINKS.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            className="font-body text-xs text-foreground/50 hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}