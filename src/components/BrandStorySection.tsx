import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

/**
 * BrandStorySection — historia de materia y oficio.
 * Sin rostros, sin fundadora, sin primera persona del singular.
 * Voz en "nosotros". Tres bloques: qué es la cera perlada,
 * por qué rellenable, y qué pasa en tu casa cuando la enciendes.
 */

const PILLARS = [
  { title: 'Cera vegetal', desc: 'Gránulos de origen vegetal, sin parafina.' },
  { title: 'Hecho en México', desc: 'Preparamos y empacamos cada pedido en la CDMX.' },
  { title: 'Garantía de 30 días', desc: 'Si llega roto o no te enamora, lo resolvemos.' },
];

const BLOCKS = [
  {
    kicker: 'La materia',
    text: 'Nuestra cera no viene en bloque ni en molde. Son gránulos finos, casi como arena, que se acomodan solos a la forma de lo que ya tienes en casa. Sin derretir, sin temperatura, sin instrumentos.',
  },
  {
    kicker: 'El oficio',
    text: 'Preparamos y empacamos cada pedido a mano en la Ciudad de México. Hacemos velas rellenables en vez de desechables porque nos parece absurdo tirar un recipiente bonito cada vez que se acaba la luz.',
  },
  {
    kicker: 'En tu casa',
    text: 'Viertes, insertas una mecha y enciendes. Cuando la mecha se consume, pones otra. La misma pieza en tu mesa, en tu buró o en tu baño, encendiéndose una y otra vez durante años.',
  },
];

export const BrandStorySection = () => {
  return (
    <section className="bg-dunaru-arena">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-stretch">
        {/* Imagen grande a sangre */}
        <div className="lg:col-span-7 relative overflow-hidden bg-dunaru-tabaco">
          <div className="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[38rem]">
            <img
              src="/paso-vierte.webp"
              alt="Gránulos de cera perlada dunaru vertidos a mano en un recipiente de vidrio"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 p-6 sm:p-8">
            <p className="lockup text-xl sm:text-2xl text-dunaru-marfil drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              HECHO <em>en</em> MÉXICO
            </p>
          </div>
        </div>

        {/* Texto */}
        <div className="lg:col-span-5 flex items-center px-4 py-16 sm:px-8 sm:py-20 lg:px-14">
          <div className="max-w-md">
            <Reveal>
              <p className="eyebrow mb-4">Quiénes somos</p>
              <h2 className="lockup text-2xl sm:text-3xl text-foreground mb-8">
                LA LUZ <em>que</em> SE QUEDA
              </h2>
            </Reveal>

            <div className="space-y-7">
              {BLOCKS.map(({ kicker, text }, i) => (
                <Reveal key={kicker} delay={100 + i * 90}>
                  <p className="eyebrow mb-2">{kicker}</p>
                  <p className="font-body text-[15px] leading-relaxed text-foreground/70">{text}</p>
                </Reveal>
              ))}
            </div>

            {/* Pilares de confianza, sin cajas */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
              {PILLARS.map(({ title, desc }) => (
                <div key={title} className="border-t border-foreground/15 pt-3">
                  <h3 className="font-body text-xs uppercase tracking-[0.14em] text-foreground">{title}</h3>
                  <p className="font-body text-xs leading-snug text-foreground/50 mt-1.5">{desc}</p>
                </div>
              ))}
            </div>

            <Link
              to="/devoluciones"
              className="mt-9 inline-flex items-center gap-1.5 border-b border-dunaru-champagne/50 pb-1 font-body text-xs uppercase tracking-[0.16em] text-foreground transition-editorial hover:border-dunaru-champagne"
            >
              Garantía y cambios
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};