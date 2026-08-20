import { ElementType, ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Retraso en ms para escalonar varios bloques. */
  delay?: number;
  /** Etiqueta HTML a renderizar. Default: div */
  as?: ElementType;
}

/**
 * Envoltorio de reveal editorial al hacer scroll.
 * Respeta prefers-reduced-motion (definido en index.css).
 *
 * <Reveal delay={120}><h2 className="lockup">...</h2></Reveal>
 */
export const Reveal = ({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: RevealProps) => {
  const { ref, className: revealClass } = useReveal<HTMLDivElement>({ delay });

  return (
    <Tag ref={ref} className={cn(revealClass, className)}>
      {children}
    </Tag>
  );
};

export default Reveal;