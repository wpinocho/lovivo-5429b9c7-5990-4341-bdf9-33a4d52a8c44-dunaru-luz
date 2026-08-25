import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import { SCENTS } from '@/lib/scents';

/**
 * ScentsSection — "Seis aromas, una sola vela"
 *
 * El aroma es el activo premium de dunaru y hasta ahora solo se veía dentro de
 * la PDP. Esta sección lo sube arriba del funnel: seis esencias con nombre,
 * escena de una línea y el flat-lay de ingredientes (4:3).
 *
 * La lista SIEMPRE viene de src/lib/scents.ts — nunca duplicar aquí.
 */
export const ScentsSection = () => (
  <section id="aromas" className="section-pad-sm bg-dunaru-arena texture-travertino">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="text-center mb-10 sm:mb-14">
        <p className="eyebrow mb-4">El aroma lo eliges tú</p>
        <h2 className="lockup text-3xl sm:text-4xl text-foreground">
          SEIS AROMAS, <em>una sola</em> VELA
        </h2>
        <p className="font-body text-sm text-foreground/55 max-w-md mx-auto mt-4 leading-relaxed">
          La cera nace neutra, sin perfume de fábrica. Agregas unas gotas de la
          esencia que elijas y la casa cambia. Un frasco de 10 ml perfuma 500 g
          de cera.
        </p>
      </Reveal>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
        {SCENTS.map((scent, i) => (
          <Reveal key={scent.id} delay={(i % 3) * 90}>
            <Link
              to="/productos/kit-vaso-de-vidrio#aroma"
              className="group flex h-full flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-dunaru-marfil">
                <img
                  src={scent.imageUrl ?? undefined}
                  alt={`Ingredientes del aroma ${scent.name} de dunaru`}
                  loading="lazy"
                  decoding="async"
                  width={1456}
                  height={1092}
                  className="w-full h-full object-cover transition-editorial group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col pt-3.5">
                <h3 className="font-display text-lg leading-tight text-foreground">
                  {scent.name}
                </h3>
                <p className="font-body text-xs leading-relaxed text-foreground/60 mt-1.5">
                  {scent.story ?? scent.description}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <p className="text-center font-body text-xs text-foreground/50 mt-10">
        Eliges tu aroma al comprar cualquier vela o recarga.{' '}
        <Link
          to="/productos/kit-vaso-de-vidrio"
          className="text-dunaru-terracota font-medium hover:underline"
        >
          Empieza por el kit
        </Link>
      </p>
    </div>
  </section>
);