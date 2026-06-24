import { Button } from '@/components/ui/button';
import { HeadlessNewsletter } from '@/components/headless/HeadlessNewsletter';
import { Check } from 'lucide-react';

/**
 * Newsletter form estilizado para la sección de cierre (fondo carbón) de la home.
 * Consume la lógica real de HeadlessNewsletter → captura leads en newsletter-subscribe.
 */
export const DunaruNewsletterForm = () => {
  return (
    <HeadlessNewsletter>
      {(logic) => (
        <div className="mb-8">
          {logic.success ? (
            <div className="flex items-center justify-center gap-2 max-w-sm mx-auto py-3 px-4 rounded-sm bg-dunaru-champagne/15 border border-dunaru-champagne/30">
              <Check className="h-4 w-4 text-dunaru-champagne shrink-0" />
              <span className="font-body text-sm text-dunaru-marfil">
                ¡Listo! Serás la primera en enterarte.
              </span>
            </div>
          ) : (
            <>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  logic.handleSubscribe();
                }}
                className="flex gap-2 max-w-sm mx-auto"
              >
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  value={logic.email}
                  onChange={(e) => logic.setEmail(e.target.value)}
                  disabled={logic.isSubmitting}
                  required
                  className="flex-1 px-4 py-3 rounded-sm bg-dunaru-marfil/10 border border-dunaru-marfil/20 text-dunaru-marfil placeholder:text-dunaru-marfil/30 font-body text-sm focus:outline-none focus:border-dunaru-champagne transition-colors disabled:opacity-60"
                />
                <Button
                  type="submit"
                  disabled={logic.isSubmitting}
                  className="bg-dunaru-champagne hover:bg-dunaru-ambar text-dunaru-carbon font-body font-semibold rounded-sm px-5 shrink-0 transition-colors border-0"
                >
                  {logic.isSubmitting ? 'Enviando…' : 'Suscribirse'}
                </Button>
              </form>
              {logic.error && (
                <p className="mt-2 font-body text-xs text-dunaru-ambar">{logic.error}</p>
              )}
            </>
          )}
        </div>
      )}
    </HeadlessNewsletter>
  );
};