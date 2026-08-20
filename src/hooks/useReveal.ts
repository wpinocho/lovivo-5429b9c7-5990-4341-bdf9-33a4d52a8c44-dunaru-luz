import { useEffect, useRef, useState } from 'react';

interface UseRevealOptions {
  /** Porcentaje del elemento visible para disparar el reveal. Default 0.15 */
  threshold?: number;
  /** Margen del root del observer. Default '0px 0px -10% 0px' */
  rootMargin?: string;
  /** Si true, se revela una sola vez y deja de observar. Default true */
  once?: boolean;
  /** Retraso en ms antes de aplicar la clase. Útil para stagger. Default 0 */
  delay?: number;
}

/**
 * Reveal on scroll editorial.
 * Devuelve un ref y la clase a aplicar (`reveal` / `reveal reveal-in`).
 * Respeta prefers-reduced-motion vía CSS (ver index.css).
 *
 * Uso:
 *   const { ref, className } = useReveal<HTMLDivElement>();
 *   <div ref={ref} className={className}>...</div>
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseRevealOptions = {}
) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -10% 0px',
    once = true,
    delay = 0,
  } = options;

  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Sin soporte de IntersectionObserver: mostrar de inmediato.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeout = setTimeout(() => setVisible(true), delay);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [threshold, rootMargin, once, delay]);

  return {
    ref,
    visible,
    className: visible ? 'reveal reveal-in' : 'reveal',
  };
}

export default useReveal;