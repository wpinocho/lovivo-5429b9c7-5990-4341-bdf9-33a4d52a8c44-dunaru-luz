import { Link } from 'react-router-dom';
import { ShieldCheck, Leaf, HandHeart, ArrowRight } from 'lucide-react';

/**
 * BrandStorySection — "Hecho en México" + historia de marca + garantía.
 * Reemplaza la falta de reseñas (marca nueva) con confianza emocional:
 * historia real de la marca, origen mexicano y garantía visible.
 * Sin datos inventados ni testimonios falsos.
 */

const PILLARS = [
  {
    icon: <Leaf className="h-5 w-5" />,
    title: 'Cera vegetal',
    desc: 'Perlas de cera de origen vegetal, sin parafina.',
  },
  {
    icon: <HandHeart className="h-5 w-5" />,
    title: 'Hecho en México',
    desc: 'Preparamos y empacamos cada pedido en la CDMX.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Garantía de 30 días',
    desc: 'Si llega roto o no te enamora, lo resolvemos.',
  },
];

export const BrandStorySection = () => {
  return (
    <section className="section-pad bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Imagen */}
          <div className="relative order-1 lg:order-none">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="/paso-vierte.webp"
                alt="Perlas de cera dunaru hechas en México, vertidas a mano en un recipiente de vidrio"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden sm:block bg-dunaru-onix text-dunaru-marfil px-5 py-4 rounded-sm shadow-lg">
              <p className="font-display text-2xl leading-none">Hecho</p>
              <p className="font-body text-xs tracking-widest uppercase text-dunaru-champagne mt-1">en México</p>
            </div>
          </div>

          {/* Texto */}
          <div>
            <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-dunaru-champagne mb-3">
              Quiénes somos
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground leading-tight mb-5">
              Una marca mexicana que cree en la luz que se queda.
            </h2>
            <div className="space-y-4 font-body text-[15px] text-foreground/70 leading-relaxed">
              <p>
                dunaru nació en la Ciudad de México con una idea simple: no deberías tirar tu
                vela —ni el recipiente que amas— cada vez que se acaba. Creamos las perlas de
                cera recargables para que la misma pieza viva contigo por años.
              </p>
              <p>
                Preparamos y empacamos cada pedido a mano, aquí en México. Somos una marca
                joven, y por eso cuidamos cada detalle: queremos que tu primera dunaru sea
                justo lo que imaginaste.
              </p>
            </div>

            {/* Pilares de confianza */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {PILLARS.map(({ icon, title, desc }, i) => (
                <div key={i} className="border-l-2 border-dunaru-champagne/40 pl-3">
                  <span className="text-dunaru-champagne">{icon}</span>
                  <h3 className="font-body font-semibold text-sm text-foreground mt-2">{title}</h3>
                  <p className="font-body text-xs text-foreground/55 leading-snug mt-0.5">{desc}</p>
                </div>
              ))}
            </div>

            <Link
              to="/devoluciones"
              className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-dunaru-champagne hover:underline mt-7"
            >
              Conoce nuestra garantía y cambios
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};