import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { SEO } from '@/components/SEO';
import { ShieldCheck, Truck, RefreshCw, MessageCircle } from 'lucide-react';

const ReturnsPolicy = () => {
  return (
    <EcommerceTemplate pageTitle="Garantía, cambios y devoluciones">
      <SEO
        title="Garantía, cambios y devoluciones | dunaru"
        description="Conoce la garantía de 30 días de dunaru, nuestra política de cambios y devoluciones, y cómo resolvemos cualquier problema con tu pedido."
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Garantía destacada */}
        <div className="bg-dunaru-arena rounded-sm p-6 flex items-start gap-4 mb-10">
          <ShieldCheck className="h-6 w-6 text-dunaru-champagne shrink-0 mt-0.5" />
          <div>
            <h2 className="font-display text-xl text-foreground mb-1">Garantía de satisfacción de 30 días</h2>
            <p className="font-body text-sm text-foreground/70 leading-relaxed">
              Queremos que ames tu dunaru. Si tu pedido llega roto, incompleto o simplemente no
              es lo que esperabas, escríbenos dentro de los primeros 30 días y lo resolvemos:
              reemplazo, cambio o reembolso.
            </p>
          </div>
        </div>

        <div className="space-y-8 font-body text-[15px] text-foreground/75 leading-relaxed">
          <section>
            <div className="flex items-center gap-2 mb-2">
              <Truck className="h-5 w-5 text-dunaru-champagne" />
              <h3 className="font-display text-lg text-foreground">Si tu pedido llega dañado</h3>
            </div>
            <p>
              Empacamos cada vela con cuidado, pero si algo llega roto por el envío, tómale una
              foto al producto y a la caja y mándanosla por WhatsApp dentro de las primeras 72
              horas. Te enviamos un reemplazo sin costo.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-2">
              <RefreshCw className="h-5 w-5 text-dunaru-champagne" />
              <h3 className="font-display text-lg text-foreground">Cambios y devoluciones</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Tienes 30 días desde que recibes tu pedido para solicitar un cambio o devolución.
              </li>
              <li>
                Los productos deben estar sin usar y en su empaque original. Por higiene y
                seguridad, las mechas abiertas no son retornables.
              </li>
              <li>
                El costo de envío de la devolución corre por cuenta del cliente, salvo que el
                producto haya llegado defectuoso o equivocado.
              </li>
              <li>
                Una vez que recibimos y revisamos el producto, procesamos tu reembolso al mismo
                método de pago en un plazo de 5 a 10 días hábiles.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="font-display text-lg text-foreground mb-2">Tiempos de entrega</h3>
            <p>
              Enviamos desde la Ciudad de México a todo el país. Las entregas tardan de 2 a 5
              días hábiles. Envío gratis en pedidos desde $899.
            </p>
          </section>

          <section className="bg-dunaru-onix text-dunaru-marfil rounded-sm p-6">
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle className="h-5 w-5 text-dunaru-champagne" />
              <h3 className="font-display text-lg text-dunaru-marfil">¿Necesitas ayuda?</h3>
            </div>
            <p className="text-sm text-dunaru-marfil/70 mb-4">
              Estamos para ayudarte. Escríbenos por WhatsApp y te respondemos en horario hábil.
            </p>
            <a
              href="https://wa.me/525531215386?text=Hola%2C%20necesito%20ayuda%20con%20un%20cambio%20o%20devoluci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-dunaru-marfil text-dunaru-onix font-semibold text-sm px-5 py-3 rounded-sm hover:bg-dunaru-arena transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Escribir por WhatsApp
            </a>
          </section>
        </div>
      </div>
    </EcommerceTemplate>
  );
};

export default ReturnsPolicy;