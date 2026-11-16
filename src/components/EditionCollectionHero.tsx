import type { Edition } from "@/lib/editions"
import { cn } from "@/lib/utils"

/**
 * EditionCollectionHero — banner de la landing de una edición de temporada.
 * Compacto a propósito: en móvil deja ver los productos casi de inmediato.
 */
export const EditionCollectionHero = ({ edition }: { edition: Edition }) => (
  <header className={cn("relative overflow-hidden bg-dunaru-onix", edition.accentClass)}>
    <img
      src={edition.heroImage}
      alt={edition.heroAlt}
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
    {/* Velo oscuro para que el texto se lea siempre */}
    <div
      className="absolute inset-0 bg-gradient-to-t from-dunaru-onix via-dunaru-onix/70 to-dunaru-onix/30"
      aria-hidden
    />
    <div className="relative mx-auto flex min-h-[210px] max-w-7xl flex-col items-center justify-end px-4 pb-6 pt-14 text-center sm:min-h-[300px] sm:px-6 sm:pb-10 lg:min-h-[380px] lg:px-8 lg:pb-12">
      <p className="font-body text-[10px] uppercase tracking-[0.26em] text-dunaru-edition sm:text-[11px]">
        {edition.eyebrow}
      </p>
      <h1 className="lockup mt-2 text-3xl text-dunaru-marfil sm:mt-3 sm:text-5xl lg:text-6xl">
        {edition.title}
      </h1>
      <span className="mt-3 block h-px w-12 bg-dunaru-edition/70" aria-hidden />
      <p className="mt-3 max-w-md font-body text-xs leading-relaxed text-dunaru-marfil/75 sm:text-sm">
        {edition.heroTagline}
      </p>
    </div>
  </header>
)