import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';

interface RitualSectionProps {
  /** Imagen atmosférica de fondo. */
  image?: string;
  /** Texto del enlace inferior. */
  linkLabel?: string;
  /** Destino del enlace inferior. */
  linkTo?: string;
  className?: string;
}

const DEFAULT_IMAGE =
  'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1785521743156-3qeskqe43gv.webp';

/**
 * Bloque editorial oscuro a sangre. Rompe el ritmo claro de la página
 * y sostiene el registro "high end" sin tocar la maquinaria de conversión.
 * Se reutiliza en la home y al cierre de la PDP.
 */
export const RitualSection = ({
  image = DEFAULT_IMAGE,
  linkLabel = 'Conoce el ritual',
  linkTo = '/productos/kit-vaso-de-vidrio',
  className = '',
}: RitualSectionProps) => {
  return (
    <section className={`relative isolate overflow-hidden bg-dunaru-tabaco ${className}`}>
      <img
        src={image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dunaru-tabaco/95 via-dunaru-tabaco/70 to-dunaru-tabaco/95" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center sm:py-32 md:py-40">
        <Reveal>
          <p className="eyebrow eyebrow-light mb-8">El ritual</p>
        </Reveal>

        <Reveal delay={140}>
          <h2 className="lockup h-editorial text-dunaru-marfil">
            EN UN MUNDO QUE VA MUY RÁPIDO,{' '}
            <em className="text-dunaru-champagne">te invitamos a</em> ENCENDER DESPACIO.
          </h2>
        </Reveal>

        <Reveal delay={280}>
          <p className="mx-auto mt-8 max-w-md font-body text-sm leading-relaxed text-dunaru-marfil/60 sm:text-base">
            No es solo una vela. Es el minuto en que bajas la luz, sirves algo caliente y la casa deja
            de correr contigo.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <Link
            to={linkTo}
            className="mt-10 inline-block border-b border-dunaru-champagne/50 pb-1 font-body text-xs uppercase tracking-[0.18em] text-dunaru-marfil transition-editorial hover:border-dunaru-champagne"
          >
            {linkLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default RitualSection;