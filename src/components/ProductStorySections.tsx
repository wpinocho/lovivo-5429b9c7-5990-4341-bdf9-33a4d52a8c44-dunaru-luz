import {
  Leaf,
  Flame,
  RefreshCw,
  Sparkles,
  Check,
  X,
  ShieldCheck,
  CreditCard,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

/**
 * ProductStorySections — Secciones editoriales full-width de la PDP.
 *
 * Driven por PDP_CONTENT[slug]. Si el slug no tiene config → no renderiza
 * nada (los demás productos quedan igual). Imágenes = PLACEHOLDER por ahora.
 */

interface StoryStep {
  title: string
  text: string
  image: string
}

interface StoryBlock {
  title: string
  body: string
  bullets?: string[]
  image: string
  flip?: boolean
  /** true = foto lifestyle real (object-cover, sin opacidad); false/undefined = placeholder */
  photo?: boolean
}

interface CompareRow {
  label: string
  dunaru: boolean
  traditional: boolean
}

interface FaqItem {
  q: string
  a: string
}

interface PdpContent {
  steps: StoryStep[]
  blocks: StoryBlock[]
  compareRows: CompareRow[]
  faqs: FaqItem[]
}

const PLACEHOLDER = "/placeholder.svg"

const PDP_CONTENT: Record<string, PdpContent> = {
  "perlas-originales-500-g": {
    steps: [
      {
        title: "Vierte las perlas",
        text: "Llena tu recipiente favorito con las perlas de cera. Sin moldes ni complicaciones.",
        image: PLACEHOLDER,
      },
      {
        title: "Coloca la mecha",
        text: "Inserta una mecha de algodón en el centro, hasta tocar el fondo.",
        image: PLACEHOLDER,
      },
      {
        title: "Enciende y disfruta",
        text: "Hasta 120 horas de luz cálida y decoración en cualquier rincón.",
        image: PLACEHOLDER,
      },
      {
        title: "Recarga sin fin",
        text: "Cuando se consuma, vierte más perlas y una mecha nueva. Tu vela vuelve a empezar.",
        image: PLACEHOLDER,
      },
    ],
    blocks: [
      {
        title: "Velas que no pierden su encanto",
        body: "Las velas tradicionales se deforman, se pegan al recipiente y terminan en la basura. Con dunaru, tu vela **siempre se ve como nueva**: vacías, limpias y vuelves a empezar.",
        bullets: [
          "Sin cera pegada ni recipientes manchados",
          "Cambia de recipiente cuando quieras",
          "Una compra, luz para siempre",
        ],
        image: PLACEHOLDER,
      },
      {
        title: "Dale vida a tus recipientes favoritos",
        body: "Ese tazón de cerámica, el vaso de vidrio o el cuenco de concreto que tanto te gusta **se convierte en una vela de diseño**. Tú decides cómo se ve.",
        bullets: [
          "Compatible con recipientes de +10 cm de diámetro",
          "Combina colores y texturas a tu estilo",
        ],
        image: PLACEHOLDER,
        flip: true,
      },
      {
        title: "Porque los accidentes también ocurren",
        body: "Si se cae, **no hay cera caliente derramada ni manchas imposibles**. Las perlas se recogen y vuelves a empezar. Pensadas para hogares con vida (y con niños o mascotas).",
        bullets: [
          "Menos riesgo que una vela tradicional",
          "Fáciles de recoger y reutilizar",
        ],
        image: PLACEHOLDER,
      },
      {
        title: "No vuelvas a botar otra vela",
        body: "Cada vela tradicional termina en la basura. Con dunaru **recargas infinitamente**: menos desperdicio, más ahorro y la misma luz cálida de siempre.",
        bullets: [
          "Recarga ilimitada con bolsas de perlas",
          "Menos residuos, decisión más consciente",
        ],
        image: PLACEHOLDER,
        flip: true,
      },
    ],
    compareRows: [
      { label: "Recargable infinitamente", dunaru: true, traditional: false },
      { label: "Sin desperdicio ni cera pegada", dunaru: true, traditional: false },
      { label: "Libre de parafina", dunaru: true, traditional: false },
      { label: "Usa el recipiente que tú quieras", dunaru: true, traditional: false },
      { label: "Hasta 120 horas de luz", dunaru: true, traditional: false },
      { label: "Luz cálida y aroma neutro", dunaru: true, traditional: true },
    ],
    faqs: [
      {
        q: "¿Cómo funciona exactamente?",
        a: "Viertes las perlas de cera en tu recipiente, colocas una mecha de algodón en el centro y enciendes. Las perlas se derriten alrededor de la mecha y crean luz. Cuando se consumen, agregas más perlas y una mecha nueva.",
      },
      {
        q: "¿Qué recipientes puedo usar?",
        a: "Cualquier recipiente resistente al calor de más de 10 cm de diámetro y 5 cm de alto: vasos de vidrio, tazones de cerámica, cuencos de concreto. Evita plásticos.",
      },
      {
        q: "¿Es seguro en casa?",
        a: "Sí. Al ser perlas, si se cae el recipiente no hay derrame de cera caliente como en una vela tradicional. Aun así, nunca dejes una vela encendida sin supervisión.",
      },
      {
        q: "¿Cuánto dura?",
        a: "500 g de perlas rinden hasta 120 horas de luz, dependiendo del tamaño del recipiente y la cantidad de mechas encendidas.",
      },
      {
        q: "¿Cuánto cuesta el envío y cuándo llega?",
        a: "El envío de Perlas Originales tiene un costo de $99. El tiempo estimado de entrega es de 2 a 5 días hábiles a todo México.",
      },
      {
        q: "¿Puedo devolverlo?",
        a: "Sí. Cuentas con 30 días para solicitar tu devolución sin costo adicional si el producto no cumple tus expectativas.",
      },
    ],
  },

  "kit-vaso-de-vidrio": {
    steps: [
      {
        title: "Abre tu kit",
        text: "Vaso de vidrio, 500 g de perlas y 30 mechas. Todo lo que necesitas, en una sola caja.",
        image: PLACEHOLDER,
      },
      {
        title: "Vierte las perlas",
        text: "Llena el vaso de vidrio con las perlas de cera. Sin moldes, sin derretir nada.",
        image: PLACEHOLDER,
      },
      {
        title: "Enciende hoy mismo",
        text: "Coloca una mecha en el centro y préndela. Tu vela queda lista en segundos.",
        image: PLACEHOLDER,
      },
      {
        title: "Recarga sin fin",
        text: "Cuando se consuma, agrega más perlas y una mecha nueva. El mismo vaso, otra vela.",
        image: PLACEHOLDER,
      },
    ],
    blocks: [
      {
        title: "Todo listo para encender hoy",
        body: "Sin armar, sin buscar recipiente, sin complicaciones. Tu Kit Vaso de Vidrio llega **completo y listo para usar o regalar**.",
        bullets: [
          "Vaso de vidrio de diseño, resistente al calor",
          "500 g de perlas de cera perlada",
          "30 mechas de algodón incluidas",
          "Envío gratis a todo México",
        ],
        image: "/casa-real-comedor.webp",
        photo: true,
      },
      {
        title: "Se compra una vez, se rellena para siempre",
        body: "Cuando las perlas se consumen, **no tiras nada**: vuelves a llenar el mismo vaso con una recarga y tu vela empieza de nuevo. Una compra, luz para mucho tiempo.",
        bullets: [
          "El vaso se reutiliza infinitas veces",
          "Recarga con cualquier bolsa de perlas dunaru",
        ],
        image: "/casa-real-sala.webp",
        photo: true,
        flip: true,
      },
      {
        title: "Tu vaso, también cuando no es vela",
        body: "El vaso de vidrio es una pieza de diseño por sí sola. Úsalo como **portavela, florero pequeño o detalle de mesa** cuando quieras.",
        bullets: [
          "Vidrio transparente que combina con todo",
          "Fácil de limpiar y reutilizar",
        ],
        image: PLACEHOLDER,
      },
    ],
    compareRows: [
      { label: "Llega listo para encender", dunaru: true, traditional: false },
      { label: "Recargable infinitamente", dunaru: true, traditional: false },
      { label: "Sin cera pegada ni desperdicio", dunaru: true, traditional: false },
      { label: "Vaso reutilizable de diseño", dunaru: true, traditional: false },
      { label: "Hasta 120 horas de luz", dunaru: true, traditional: false },
      { label: "Luz cálida y aroma neutro", dunaru: true, traditional: true },
    ],
    faqs: [
      {
        q: "¿Qué incluye el kit?",
        a: "Un vaso de vidrio transparente de diseño, 500 g de perlas de cera perlada y 30 mechas de algodón. Todo listo para encender o regalar.",
      },
      {
        q: "¿Tiene costo el envío?",
        a: "No. El Kit Vaso de Vidrio incluye envío gratis a todo México, con entrega estimada de 2 a 5 días hábiles.",
      },
      {
        q: "¿Puedo recargarlo después?",
        a: "Sí. Cuando las perlas se consuman, agregas una recarga y una mecha nueva en el mismo vaso. Se reutiliza infinitas veces.",
      },
      {
        q: "¿Sirve para regalar?",
        a: "Totalmente. Llega en una presentación cuidada, listo para usar desde el primer momento. Es un regalo con intención y diseño.",
      },
      {
        q: "¿Qué colores hay?",
        a: "Elige entre Marfil, Champagne y Ónix. Cada tono crea un ambiente distinto en el mismo vaso.",
      },
    ],
  },

  "kit-vaso-de-concreto": {
    steps: [
      {
        title: "Recibe el objeto",
        text: "Un bowl de concreto mate, hecho a mano. Llega listo para regalar o estrenar en tu mesa.",
        image: PLACEHOLDER,
      },
      {
        title: "Vierte las perlas",
        text: "Llena el cuenco de concreto con las perlas. La pieza ya se ve increíble apagada.",
        image: PLACEHOLDER,
      },
      {
        title: "Enciende y presume",
        text: "Coloca la mecha y enciende. Una luz cálida sobre concreto: presencia pura.",
        image: PLACEHOLDER,
      },
      {
        title: "Rellena para siempre",
        text: "El concreto dura años. Solo recargas perlas y mechas cuando se acaben.",
        image: PLACEHOLDER,
      },
    ],
    blocks: [
      {
        title: "Un objeto de diseño que da luz",
        body: "El bowl de concreto gris mate es una pieza de decoración por mérito propio. **Encendido, transforma cualquier espacio**: una cena, un recibidor, una casa nueva.",
        bullets: [
          "Bowl artesanal de concreto mate",
          "500 g de perlas + 30 mechas incluidas",
          "Llega listo para regalar · envío gratis",
        ],
        image: "/casa-real-recibidor.webp",
        photo: true,
      },
      {
        title: "Por qué concreto",
        body: "El concreto es **durable, pesado y mate**: aguanta el calor, no se deforma y envejece con elegancia. Se compra una vez y se rellena infinitamente.",
        bullets: [
          "Material que dura años, no se desecha",
          "Acabado mate que combina con todo",
          "Recargable para siempre",
        ],
        image: PLACEHOLDER,
        flip: true,
      },
      {
        title: "El regalo que se nota",
        body: "Cuando buscas algo que diga \"pensé en ti\", un objeto de concreto con luz cálida **se siente distinto a una vela cualquiera**. Perfecto para estrenos de casa, cumpleaños o agradecimientos.",
        bullets: [
          "Presentación cuidada, lista para obsequiar",
          "Un detalle que se queda en la casa",
        ],
        image: PLACEHOLDER,
      },
    ],
    compareRows: [
      { label: "Objeto de diseño reutilizable", dunaru: true, traditional: false },
      { label: "Recargable infinitamente", dunaru: true, traditional: false },
      { label: "Llega listo para regalar", dunaru: true, traditional: false },
      { label: "Sin cera pegada ni desperdicio", dunaru: true, traditional: false },
      { label: "Hasta 120 horas de luz", dunaru: true, traditional: false },
      { label: "Luz cálida y aroma neutro", dunaru: true, traditional: true },
    ],
    faqs: [
      {
        q: "¿Qué incluye el kit?",
        a: "Un bowl de concreto gris mate hecho a mano, 500 g de perlas de cera perlada y 30 mechas de algodón. Listo para regalar o estrenar.",
      },
      {
        q: "¿Tiene costo el envío?",
        a: "No. El Kit Vaso de Concreto incluye envío gratis a todo México, con entrega estimada de 2 a 5 días hábiles.",
      },
      {
        q: "¿El concreto es seguro con el calor?",
        a: "Sí. El concreto resiste el calor de la llama sin deformarse. Úsalo siempre sobre una superficie plana y nunca lo dejes encendido sin supervisión.",
      },
      {
        q: "¿Se puede recargar?",
        a: "Por supuesto. El bowl de concreto se reutiliza infinitamente: solo agregas más perlas y mechas cuando se consuman.",
      },
      {
        q: "¿Es buen regalo?",
        a: "Es nuestro producto más elegido para regalar. Llega en una presentación cuidada y queda como objeto de diseño en la casa de quien lo recibe.",
      },
    ],
  },
}

/**
 * Pasos reales compartidos con la landing ("Cómo funciona").
 * Mismos textos e imágenes en todas las PDPs para consistencia.
 */
const HOW_IT_WORKS_STEPS: StoryStep[] = [
  {
    title: "Vierte",
    text: "Llena tu recipiente favorito con las perlas. Cualquier vaso, bowl o copa de mínimo 10 cm de diámetro.",
    image: "/paso-vierte.webp",
  },
  {
    title: "Inserta",
    text: "Coloca una mecha de algodón en el centro. Sin instrumentos, sin temperatura, sin riesgo.",
    image: "/paso-inserta.webp",
  },
  {
    title: "Enciende",
    text: "Prende la mecha. Tu vela ya está lista. Hasta 120 horas de luz con una bolsa de 500 g.",
    image: "/paso-enciende.webp",
  },
  {
    title: "Renueva",
    text: "Cuando la mecha se consume, agrega una nueva. Las perlas se reutilizan. Tu recipiente también.",
    image: "/paso-renueva.webp",
  },
]

const GUARANTEES = [
  { icon: Leaf, label: "Libre de parafina" },
  { icon: Flame, label: "Larga duración" },
  { icon: RefreshCw, label: "Recargable infinita" },
  { icon: Sparkles, label: "Siempre como nueva" },
]

interface ProductStorySectionsProps {
  slug: string
}

export const ProductStorySections = ({ slug }: ProductStorySectionsProps) => {
  const content = PDP_CONTENT[slug]
  if (!content) return null

  return (
    <div className="mt-16 lg:mt-24 space-y-16 lg:space-y-24">
      {/* 1 — Tira de garantías */}
      <section className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 py-8 border-y border-border/60">
          {GUARANTEES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-3 px-2">
              <span className="h-12 w-12 rounded-full border border-dunaru-champagne/50 flex items-center justify-center text-dunaru-champagne">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <span className="text-sm font-medium text-foreground/80 leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 2 — Crea tu vela en 4 pasos */}
      <section className="bg-dunaru-arena py-16 lg:py-20 -mx-4 px-4 md:-mx-6 md:px-6">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-3">
            Crea tu vela en 4 pasos
          </h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
            Sin moldes, sin desperdicio. Así de simple es tener luz de diseño en casa.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <div key={i} className="space-y-4">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-background/60">
                  <img
                    src={step.image}
                    alt={`Paso ${i + 1}: ${step.title} — vela perlada dunaru`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 h-8 w-8 rounded-full bg-foreground text-background flex items-center justify-center font-display text-lg">
                    {i + 1}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-medium text-base">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-snug">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Bloques editoriales alternados */}
      <section className="max-w-[1400px] mx-auto space-y-16 lg:space-y-24">
        {content.blocks.map((block, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <div
              className={cn(
                "relative aspect-[4/3] rounded-xl overflow-hidden bg-dunaru-arena",
                block.flip ? "md:order-2" : "md:order-1"
              )}
            >
              <img
                src={block.image}
                alt={block.title}
                loading="lazy"
                className={cn(
                  "w-full h-full",
                  block.photo
                    ? "object-cover"
                    : "object-contain p-8 opacity-60"
                )}
              />
            </div>
            <div
              className={cn(
                "space-y-4",
                block.flip ? "md:order-1" : "md:order-2"
              )}
            >
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight">
                {block.title}
              </h2>
              <p
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: block.body.replace(
                    /\*\*(.+?)\*\*/g,
                    '<strong class="text-foreground font-semibold">$1</strong>'
                  ),
                }}
              />
              {block.bullets && (
                <ul className="space-y-2 pt-1">
                  {block.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-dunaru-champagne shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* 4 — Tabla comparativa */}
      <section className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-10">
          Esto hace diferente a dunaru
        </h2>
        <div className="rounded-xl border border-border/60 overflow-hidden">
          <div className="grid grid-cols-[1fr_auto_auto] items-center bg-dunaru-arena">
            <span className="px-4 py-4 text-sm font-medium text-muted-foreground" />
            <span className="px-4 py-4 text-center font-display text-lg w-24">
              dunaru
            </span>
            <span className="px-4 py-4 text-center text-xs text-muted-foreground leading-tight w-24">
              Vela
              <br />
              tradicional
            </span>
          </div>
          {content.compareRows.map((row, i) => (
            <div
              key={i}
              className={cn(
                "grid grid-cols-[1fr_auto_auto] items-center border-t border-border/60",
                i % 2 === 1 && "bg-muted/30"
              )}
            >
              <span className="px-4 py-4 text-sm text-foreground/90">
                {row.label}
              </span>
              <span className="px-4 py-4 flex justify-center w-24">
                {row.dunaru ? (
                  <Check className="h-5 w-5 text-dunaru-champagne" strokeWidth={2.5} />
                ) : (
                  <X className="h-5 w-5 text-muted-foreground/40" />
                )}
              </span>
              <span className="px-4 py-4 flex justify-center w-24">
                {row.traditional ? (
                  <Check className="h-5 w-5 text-muted-foreground/60" strokeWidth={2.5} />
                ) : (
                  <X className="h-5 w-5 text-muted-foreground/40" />
                )}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5 — FAQ */}
      <section className="max-w-2xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-3">
          Preguntas frecuentes
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Todo lo que necesitas saber antes de tu primera vela dunaru.
        </p>
        <Accordion type="single" collapsible className="space-y-3">
          {content.faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border/60 rounded-lg px-4"
            >
              <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* 6 — Reviews (sin reseñas reales todavía) */}
      <section className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-2xl md:text-3xl mb-3">
          Opiniones de clientes
        </h2>
        <p className="text-muted-foreground">
          Aún no hay reseñas de este producto.{" "}
          <span className="text-foreground font-medium">
            Sé el primero en compartir tu experiencia.
          </span>
        </p>
      </section>

      {/* 7 — Pago seguro + MSI */}
      <section className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 py-8 border-t border-border/60 text-sm text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-5 w-5 text-dunaru-champagne" strokeWidth={1.5} />
            <span>Pago 100% seguro con Mercado Pago</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CreditCard className="h-5 w-5 text-dunaru-champagne" strokeWidth={1.5} />
            <span>Hasta 6 meses sin intereses</span>
          </div>
        </div>
      </section>
    </div>
  )
}