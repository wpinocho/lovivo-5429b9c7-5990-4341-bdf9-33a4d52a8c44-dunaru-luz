import { Link } from 'react-router-dom'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { SEO } from '@/components/SEO'
import { CompareTable } from '@/components/CompareTable'
import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { STEP_IMAGES } from '@/lib/steps-media'

const STEPS = [
  {
    n: '01',
    title: 'Vierte',
    body: 'Llena tu recipiente con Cera Duna. Son gránulos vegetales finos, como arena. No se derrite nada, no se calienta nada.',
    img: STEP_IMAGES.vierte,
  },
  {
    n: '02',
    title: 'Inserta',
    body: 'Clava una mecha de algodón en el centro. Puedes poner una, dos o tres: tú decides qué tan viva quieres la llama.',
    img: STEP_IMAGES.inserta,
  },
  {
    n: '03',
    title: 'Enciende',
    body: 'La cera se consume solo alrededor de la mecha. El resto queda intacto, listo para la próxima vez.',
    img: STEP_IMAGES.enciende,
  },
  {
    n: '04',
    title: 'Renueva',
    body: 'Cuando se acaba, rellenas y sigues. El mismo recipiente te dura años, cambies de tono o de aroma cuando quieras.',
    img: STEP_IMAGES.renueva,
  },
]

const FAQ = [
  {
    q: '¿Se derrite y hace tiradero?',
    a: 'No. La Cera Duna se consume solamente alrededor de la mecha, en un círculo pequeño. El resto de los gránulos se queda seco y suelto, así que puedes vaciar, cambiar de tono o guardar el recipiente sin batidero.',
  },
  {
    q: '¿Cuánto dura?',
    a: 'Una bolsa de 500 g rinde hasta 120 horas de luz cálida con una mecha encendida. Si prendes dos o tres mechas a la vez, la luz es más grande y el rendimiento se reparte.',
  },
  {
    q: '¿Sirve en cualquier recipiente?',
    a: 'Sí, mientras sea de material resistente al calor y con paredes rectas: vidrio, cerámica, metal, concreto. Por eso funciona en el vaso que ya tienes en casa.',
  },
  {
    q: '¿A qué huele?',
    a: 'La Cera Duna nace neutra, sin perfume de fábrica. Si quieres aroma, agregas una de nuestras seis esencias: un frasco de 10 ml perfuma 500 g de cera. Tú controlas la intensidad.',
  },
  {
    q: '¿De qué está hecha la cera?',
    a: 'Cera 100% vegetal, biodegradable y ecológica, sin parafina. Las mechas son de algodón.',
  },
  {
    q: '¿Necesito comprar todo por separado?',
    a: 'No. La Vela Rellenable llega completa: recipiente, 500 g de Cera Duna y 30 mechas de algodón. Después solo repones la cera.',
  },
]

const ComoFunciona = () => (
  <EcommerceTemplate>
    <SEO
      title="Cómo funciona una vela rellenable | dunaru"
      description="Viertes la Cera Duna, insertas una mecha de algodón y enciendes. Cuando se acaba, rellenas: el mismo recipiente te dura años. Así funciona dunaru."
    />

    {/* Intro */}
    <section className="section-pad-sm bg-dunaru-arena texture-arena">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <Reveal>
          <p className="eyebrow mb-4">Simple desde el primer día</p>
          <h1 className="lockup text-3xl sm:text-5xl text-foreground">
            ASÍ <em>funciona</em> DUNARU
          </h1>
          <p className="font-body text-[15px] sm:text-base text-foreground/60 leading-relaxed mt-5">
            No vendemos una vela que se acaba. Vendemos una forma de crear luz, otra vez,
            en el recipiente que ya amas. Toma menos de un minuto y no necesitas nada más.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 4 pasos */}
    <section className="section-pad bg-background texture-grain">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20">
        {STEPS.map((s, i) => (
          <Reveal key={s.n}>
            <div
              className={`grid md:grid-cols-2 gap-7 sm:gap-12 items-center ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="aspect-[4/5] sm:aspect-[4/3] overflow-hidden bg-dunaru-arena">
                <img
                  src={s.img}
                  alt={`Paso ${s.n}: ${s.title} la Cera Duna en tu recipiente`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-display text-4xl sm:text-5xl text-dunaru-terracota/70 leading-none mb-3">
                  {s.n}
                </p>
                <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-3">{s.title}</h2>
                <p className="font-body text-[15px] text-foreground/65 leading-relaxed max-w-md">
                  {s.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Comparativa */}
    <div className="bg-dunaru-arena texture-arena">
      <CompareTable />
    </div>

    {/* FAQ */}
    <section className="section-pad bg-background texture-grain">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-9">
          <p className="eyebrow mb-4">Antes de encender</p>
          <h2 className="lockup text-2xl sm:text-3xl text-foreground">
            LAS DUDAS <em>de siempre</em>
          </h2>
        </Reveal>
        <Accordion type="single" collapsible className="w-full">
          {FAQ.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="font-body text-left text-[15px]">{f.q}</AccordionTrigger>
              <AccordionContent className="font-body text-sm text-foreground/65 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* Cierre */}
    <section className="section-pad-sm bg-dunaru-carbon texture-ambar text-dunaru-marfil">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="lockup text-2xl sm:text-4xl mb-4">
          EMPIEZA <em>esta noche</em>
        </h2>
        <p className="font-body text-sm text-dunaru-marfil/70 leading-relaxed mb-7 max-w-md mx-auto">
          Tu vela llega completa: recipiente, 500 g de Cera Duna y 30 mechas. Envío gratis a todo
          México y 30 días de garantía.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/productos/kit-vaso-de-vidrio">
            <Button className="w-full sm:w-auto h-12 px-9 font-body font-medium uppercase tracking-[0.12em] text-xs">
              Ver la vela rellenable
            </Button>
          </Link>
          <Link to="/categorias/todos">
            <Button
              variant="outline"
              className="w-full sm:w-auto h-12 px-9 font-body font-medium uppercase tracking-[0.12em] text-xs bg-transparent border-dunaru-marfil/35 text-dunaru-marfil hover:bg-dunaru-marfil hover:text-dunaru-carbon"
            >
              Ver todo el catálogo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </EcommerceTemplate>
)

export default ComoFunciona