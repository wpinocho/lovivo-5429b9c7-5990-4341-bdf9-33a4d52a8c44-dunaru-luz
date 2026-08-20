import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

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
    <section className="bg-background pt-16 sm:pt-24">
      <Reveal className="text-center mb-10 sm:mb-14 px-4">
        <p className="eyebrow mb-4">En espacios reales</p>
        <h2 className="lockup text-3xl sm:text-4xl text-foreground">
          ASÍ SE VE <em>en una</em> CASA REAL
        </h2>
        <p className="font-body text-sm text-foreground/55 max-w-md mx-auto mt-4">
          La misma luz, en recámaras, comedores y recibidores como el tuyo. Toca una escena para llevártela.
        </p>
      </Reveal>

      {/* Cuatro escenas a sangre, sin marcos ni separaciones */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {SCENES.map((scene, i) => (
          <Link key={i} to={`/productos/${scene.slug}`} className="group relative block overflow-hidden">
            <div className="aspect-[3/4] overflow-hidden bg-dunaru-tabaco">
              <img
                src={scene.img}
                alt={`Vela dunaru tono ${scene.tono}, ${scene.space}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-editorial"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-dunaru-tabaco/85 via-dunaru-tabaco/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <span className="eyebrow eyebrow-light">{scene.tono}</span>
              <p className="lockup text-sm sm:text-base text-dunaru-marfil leading-snug mt-1.5">
                {scene.space}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Franja de confianza honesta (sin reseñas inventadas) */}
        <div className="mt-12 sm:mt-16 border-t border-border pt-8 pb-16 sm:pb-24">
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