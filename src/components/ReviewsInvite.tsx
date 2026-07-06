import { Camera, MessageCircle, Star } from 'lucide-react';

/**
 * ReviewsInvite — bloque de reseñas HONESTO para una marca recién lanzada.
 * No inventa reseñas ni testimonios. Comunica con transparencia que somos
 * nuevos e invita a las primeras clientas a compartir su experiencia real.
 * Cuando existan reseñas reales, este bloque se reemplaza por el widget real.
 */
export const ReviewsInvite = () => {
  return (
    <section className="section-pad-sm bg-dunaru-arena">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-1 mb-4 text-dunaru-champagne">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5" strokeWidth={1.5} />
          ))}
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-3">
          Sé de las primeras en opinar
        </h2>
        <p className="font-body text-sm sm:text-base text-foreground/65 leading-relaxed max-w-xl mx-auto">
          Acabamos de abrir, así que preferimos ser honestos: todavía estamos reuniendo las
          primeras opiniones. Cuando enciendas tu dunaru, cuéntanos cómo te fue y comparte tu
          foto —la publicaremos aquí, tal cual, sin filtros ni reseñas inventadas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <a
            href="https://wa.me/525531215386?text=Hola%2C%20quiero%20compartir%20mi%20experiencia%20y%20una%20foto%20de%20mi%20vela%20dunaru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-dunaru-onix text-dunaru-marfil font-body font-semibold text-sm px-6 py-3 rounded-sm hover:bg-dunaru-carbon transition-colors"
          >
            <Camera className="h-4 w-4" />
            Comparte tu experiencia
          </a>
          <a
            href="https://wa.me/525531215386?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20dunaru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body font-medium text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Pregúntanos antes de comprar
          </a>
        </div>
      </div>
    </section>
  );
};