import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, MessageCircle } from 'lucide-react';

/**
 * CasaRealSection — "Así se ve en una casa real".
 * Carrusel shoppable de fotos lifestyle de dunaru en espacios reales.
 * Cada tarjeta enlaza a un producto. Debajo, una franja honesta de confianza
 * (sin reseñas inventadas — solo hechos verificables de la marca).
 */

const SCENES = [
  {
    img: '/casa-real-comedor.webp',
    tono: 'Champagne',
    space: 'En la mesa de la cena',
    slug: 'kit-vaso-de-vidrio',
  },
  {
    img: '/casa-real-recibidor.webp',
    tono: 'Ónix',
    space: 'En el recibidor de noche',
    slug: 'kit-vaso-de-concreto',
  },
  {
    img: '/casa-real-recamara.webp',
    tono: 'Marfil',
    space: 'En la mesa de noche',
    slug: 'perlas-originales-500-g',
  },
  {
    img: '/casa-real-sala.webp',
    tono: 'Marfil',
    space: 'En la sala, sobre la mesa de centro',
    slug: 'kit-vaso-de-vidrio',
  },
];

const TRUST = [
  { icon: <ShieldCheck className="h-4 w-4" />, text: 'Hecho en México con cera vegetal' },
  { icon: <Truck className="h-4 w-4" />, text: 'Envíos a todo el país en 2–5 días' },
  { icon: <MessageCircle className="h-4 w-4" />, text: 'Atención real por WhatsApp' },
];

export const CasaRealSection = () => {
  return (
    <section className="section-pad bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-dunaru-champagne mb-3">
            En espacios reales
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">
            Así se ve en una casa real
          </h2>
          <p className="font-body text-sm text-foreground/55 max-w-md mx-auto mt-3">
            La misma luz, en recámaras, comedores y recibidores como el tuyo. Toca una escena para llevártela.
          </p>
        </div>

        {/* Carrusel horizontal en mobile, grid en desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:mx-0 md:px-0 md:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SCENES.map((scene, i) => (
            <Link
              key={i}
              to={`/productos/${scene.slug}`}
              className="group block shrink-0 w-[72%] sm:w-[48%] md:w-auto snap-start"
            >
              <div className="relative overflow-hidden rounded-sm">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={scene.img}
                    alt={`Vela dunaru tono ${scene.tono} — ${scene.space}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="font-body text-[11px] font-semibold tracking-widest uppercase text-dunaru-champagne">
                    {scene.tono}
                  </span>
                  <p className="font-display text-lg text-white leading-snug mt-0.5">
                    {scene.space}
                  </p>
                  <span className="font-body text-xs text-white/70 flex items-center gap-1 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver producto <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Franja de confianza honesta (sin reseñas inventadas) */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2">
            {TRUST.map(({ icon, text }, i) => (
              <div key={i} className="flex items-center justify-center gap-2.5 text-center">
                <span className="text-dunaru-champagne shrink-0">{icon}</span>
                <span className="font-body text-sm font-medium text-foreground/75">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-center font-body text-xs text-foreground/45 mt-6">
            ¿Ya encendiste tu dunaru?{' '}
            <a
              href="https://wa.me/525531215386?text=Hola%2C%20quiero%20compartir%20una%20foto%20de%20mi%20vela%20dunaru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dunaru-champagne font-medium hover:underline"
            >
              Comparte tu foto por WhatsApp
            </a>{' '}
            y aparece aquí.
          </p>
        </div>
      </div>
    </section>
  );
};