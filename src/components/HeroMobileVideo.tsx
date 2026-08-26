import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { HERO_MOBILE_VIDEO, HERO_MOBILE_POSTER } from '@/lib/steps-media';

interface HeroMobileVideoProps {
  /** Clases del contenedor. Debe incluir `relative` y el control de breakpoint. */
  className?: string;
  alt: string;
}

/**
 * Fondo de hero para móvil: video vertical 9:16 con imagen de respaldo.
 *
 * Estrategia de rendimiento (LCP):
 * 1. El póster se pinta como <img> normal, con prioridad alta. Es lo que ve el
 *    usuario en el primer frame y lo que Google mide como LCP.
 * 2. El <video> ni siquiera se monta hasta que el navegador queda libre
 *    (requestIdleCallback), así no compite por ancho de banda con el hero.
 * 3. En escritorio el video NUNCA se descarga, porque el elemento no se renderiza.
 * 4. Se respeta `prefers-reduced-motion`: si el usuario lo pide, se queda la foto.
 */
export const HeroMobileVideo = ({ className = '', alt }: HeroMobileVideoProps) => {
  const isMobile = useIsMobile();
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isMobile) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const start = () => setShouldLoad(true);
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (typeof w.requestIdleCallback === 'function') {
      const id = w.requestIdleCallback(start, { timeout: 2500 });
      return () => w.cancelIdleCallback?.(id);
    }

    const timer = window.setTimeout(start, 1200);
    return () => window.clearTimeout(timer);
  }, [isMobile]);

  return (
    <div className={className}>
      <img
        src={HERO_MOBILE_POSTER}
        alt={alt}
        width={720}
        height={1280}
        className="w-full h-full object-cover"
        fetchPriority="high"
        decoding="async"
      />

      {shouldLoad && (
        <video
          src={HERO_MOBILE_VIDEO}
          poster={HERO_MOBILE_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => setIsPlaying(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isPlaying ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
};