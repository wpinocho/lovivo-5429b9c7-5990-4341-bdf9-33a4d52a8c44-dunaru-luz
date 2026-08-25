import {
  Leaf,
  Flame,
  RefreshCw,
  Sparkles,
  Check,
  X,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { Reviews } from "@/components/Reviews"
import { ProductStepsCarousel } from "@/components/ProductStepsCarousel"

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
  /** boolean = palomita/tache · string = valor comparativo (ej. "$" vs "$$$") */
  dunaru: boolean | string
  traditional: boolean | string
}

interface FaqItem {
  q: string
  a: string
}

interface PdpContent {
  steps?: StoryStep[]
  blocks: StoryBlock[]
  compareRows: CompareRow[]
  faqs: FaqItem[]
}

const PLACEHOLDER = "/placeholder.svg"

/**
 * FAQ que aplica a todos los productos. Antes vivía como acordeón
 * "Cuidado del producto" arriba, junto al botón de compra: ahí solo
 * estorbaba. Aquí sí responde una duda real.
 */
const SHARED_FAQS: FaqItem[] = [
  {
    q: "¿Cómo cuido mi vela para que dure más?",
    a: "Guárdala en un lugar fresco y seco, lejos del sol directo. Cada vez que la enciendas, deja que la mecha queme entre 2 y 3 horas y luego apágala. Cuando se consuma la cera, vacía el recipiente, lávalo con agua tibia y vuelve a llenarlo.",
  },
]

/**
 * Bloques de beneficios "estrella" (los de Perlas Originales).
 * Compartidos con Reserva 1kg, Dúo y Trío de Tonos para máxima consistencia.
 */
const PERLAS_BENEFIT_BLOCKS: StoryBlock[] = [
  {
    title: "Siempre luce como el primer día",
    body: "Las velas de siempre se deforman, dejan cera pegada y acaban en la basura. Tu vela dunaru **nunca envejece**: se consume, la vacías, la limpias y empieza de cero.",
    bullets: [
      "Cero cera pegada ni recipientes manchados",
      "Cambia de recipiente cuando se te antoje",
      "Una sola compra, luz por años",
    ],
    image: "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1784141750637-h29qq6dodik.webp",
    photo: true,
  },
  {
    title: "El recipiente que ya amas, ahora da luz",
    body: "Ese tazón de cerámica, el vaso de vidrio o el cuenco de barro que tanto te gusta **pasa a ser una vela de diseño**. Tú eliges el estilo, nosotros ponemos la luz.",
    bullets: [
      "Funciona en cualquier recipiente de +10 cm",
      "Combina colores y texturas a tu gusto",
    ],
    image: "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1784141750638-4z1j2dq3ab9.webp",
    photo: true,
    flip: true,
  },
  {
    title: "Seguridad por diseño",
    body: "Al ser gránulos y no un bloque de cera, un golpe **no significa cera caliente encima**. La llama pierde contacto y se apaga sola. Recoges las perlas y sigues.",
    bullets: [
      "La llama se apaga sola si se vuelca",
      "Pensada para casas con niños y mascotas",
      "Se recogen y se vuelven a usar",
    ],
    image: "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1784141750638-go7315yuax.webp",
    photo: true,
  },
  {
    title: "Recarga en vez de tirar",
    body: "Cada vela común termina en el bote de basura. Con dunaru **rellenas las veces que quieras**: menos desperdicio, más ahorro y la misma luz cálida de siempre.",
    bullets: [
      "Rellenable con cualquier bolsa de perlas",
      "Menos residuos, una decisión más consciente",
    ],
    image: "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1784141750638-c47lrhv7fa.webp",
    photo: true,
    flip: true,
  },
  {
    title: "Seis aromas, una sola vela",
    body: "Tu vela nace neutra, sin perfume de fábrica. **Tú eliges el aroma**: seis esencias creadas para dunaru, en frascos de 10 ml. Un frasco perfuma 500 g de cera. Cuando quieras otro ambiente, cambias de esencia, no de vela.",
    bullets: [
      "Seis esencias propias, formuladas para Cera Duna",
      "Un frasco de 10 ml perfuma 500 g de cera",
      "O déjala neutra: luz limpia, sin humo perfumado",
    ],
    image: "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1785521743156-7ucg5c0kwb7.webp",
    photo: true,
  },
]

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
    blocks: PERLAS_BENEFIT_BLOCKS,
    compareRows: [
      { label: "Rellenable infinitamente", dunaru: true, traditional: false },
      { label: "Sin desperdicio ni cera pegada", dunaru: true, traditional: false },
      { label: "Libre de parafina", dunaru: true, traditional: false },
      { label: "Usa el recipiente que tú quieras", dunaru: true, traditional: false },
      { label: "Hasta 120 horas de luz", dunaru: true, traditional: false },
      { label: "Cambias de aroma sin cambiar de vela", dunaru: true, traditional: false },
      { label: "Costo por hora de luz", dunaru: "$", traditional: "$$$" },
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
        q: "¿Las velas tienen aroma?",
        a: "La cera nace neutra, sin perfume de fábrica. En esta misma página puedes agregar una de nuestras seis esencias de 10 ml y elegir el aroma de tu casa: unas gotas antes de encender y listo. Un frasco perfuma 500 g de cera. Si prefieres luz sin olor, también funciona perfecto: cambias de aroma cuando quieras, sin cambiar de vela.",
      },
      {
        q: "¿Cuánto dura?",
        a: "500 g de perlas rinden hasta 120 horas de luz, dependiendo del tamaño del recipiente y la cantidad de mechas encendidas.",
      },
      {
        q: "¿Cuánto cuesta el envío y cuándo llega?",
        a: "El envío es gratis a todo México. El tiempo estimado de entrega es de 2 a 5 días hábiles.",
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
          "500 g de Cera Duna vegetal",
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
    ],
    compareRows: [
      { label: "Llega listo para encender", dunaru: true, traditional: false },
      { label: "Rellenable infinitamente", dunaru: true, traditional: false },
      { label: "Sin cera pegada ni desperdicio", dunaru: true, traditional: false },
      { label: "Vaso reutilizable de diseño", dunaru: true, traditional: false },
      { label: "Hasta 120 horas de luz", dunaru: true, traditional: false },
      { label: "Cambias de aroma sin cambiar de vela", dunaru: true, traditional: false },
      { label: "Costo por hora de luz", dunaru: "$", traditional: "$$$" },
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
        text: "Un bowl de cerámica negra mate, hecho a mano. Llega listo para regalar o estrenar en tu mesa.",
        image: PLACEHOLDER,
      },
      {
        title: "Vierte las perlas",
        text: "Llena el bowl de cerámica con las perlas. La pieza ya se ve increíble apagada.",
        image: PLACEHOLDER,
      },
      {
        title: "Enciende y presume",
        text: "Coloca la mecha y enciende. Una luz cálida sobre cerámica mate: presencia pura.",
        image: PLACEHOLDER,
      },
      {
        title: "Rellena para siempre",
        text: "La cerámica dura años. Solo recargas perlas y mechas cuando se acaben.",
        image: PLACEHOLDER,
      },
    ],
    blocks: [
      {
        title: "Un objeto de diseño que da luz",
        body: "El bowl de cerámica negra mate es una pieza de decoración por mérito propio. **Encendido, transforma cualquier espacio**: una cena, un recibidor, una casa nueva.",
        bullets: [
          "Bowl artesanal de cerámica mate",
          "500 g de perlas + 30 mechas incluidas",
          "Llega listo para regalar · envío gratis",
        ],
        image: "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1785182590879-i54i3sm6qk.webp",
        photo: true,
      },
      {
        title: "Por qué cerámica",
        body: "La cerámica es **durable, resistente y mate**: aguanta el calor, no se deforma y envejece con elegancia. Se compra una vez y se rellena infinitamente.",
        bullets: [
          "Material que dura años, no se desecha",
          "Acabado mate que combina con todo",
          "Rellenable para siempre",
        ],
        image: "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1785182590879-u6xju9w4wjl.webp",
        photo: true,
        flip: true,
      },
      {
        title: "El regalo que se nota",
        body: "Cuando buscas algo que diga \"pensé en ti\", un objeto de cerámica con luz cálida **se siente distinto a una vela cualquiera**. Perfecto para estrenos de casa, cumpleaños o agradecimientos.",
        bullets: [
          "Presentación cuidada, lista para obsequiar",
          "Un detalle que se queda en la casa",
        ],
        image: "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1785182590879-77nbrytmoii.webp",
        photo: true,
      },
    ],
    compareRows: [
      { label: "Objeto de diseño reutilizable", dunaru: true, traditional: false },
      { label: "Rellenable infinitamente", dunaru: true, traditional: false },
      { label: "Llega listo para regalar", dunaru: true, traditional: false },
      { label: "Sin cera pegada ni desperdicio", dunaru: true, traditional: false },
      { label: "Hasta 120 horas de luz", dunaru: true, traditional: false },
      { label: "Cambias de aroma sin cambiar de vela", dunaru: true, traditional: false },
      { label: "Costo por hora de luz", dunaru: "$", traditional: "$$$" },
    ],
    faqs: [
      {
        q: "¿Qué incluye el kit?",
        a: "Un bowl de cerámica negra mate hecho a mano, 500 g de perlas de cera perlada y 30 mechas de algodón. Listo para regalar o estrenar.",
      },
      {
        q: "¿Tiene costo el envío?",
        a: "No. El Kit Bowl de Cerámica incluye envío gratis a todo México, con entrega estimada de 2 a 5 días hábiles.",
      },
      {
        q: "¿La cerámica es segura con el calor?",
        a: "Sí. La cerámica resiste el calor de la llama sin deformarse. Úsalo siempre sobre una superficie plana y nunca lo dejes encendido sin supervisión.",
      },
      {
        q: "¿Se puede recargar?",
        a: "Por supuesto. El bowl de cerámica se reutiliza infinitamente: solo agregas más perlas y mechas cuando se consuman.",
      },
      {
        q: "¿Es buen regalo?",
        a: "Es nuestro producto más elegido para regalar. Llega en una presentación cuidada y queda como objeto de diseño en la casa de quien lo recibe.",
      },
    ],
  },

  "reserva-1-kg": {
    blocks: PERLAS_BENEFIT_BLOCKS,
    compareRows: [
      { label: "El doble de duración", dunaru: true, traditional: false },
      { label: "Rellenable infinitamente", dunaru: true, traditional: false },
      { label: "Sin cera pegada ni desperdicio", dunaru: true, traditional: false },
      { label: "Envío gratis a todo México", dunaru: true, traditional: false },
      { label: "Cambias de aroma sin cambiar de vela", dunaru: true, traditional: false },
      { label: "Costo por hora de luz", dunaru: "$", traditional: "$$$" },
    ],
    faqs: [
      {
        q: "¿Qué incluye la Reserva 1 kg?",
        a: "1 kg de perlas de cera perlada (el doble de la bolsa original) más 30 mechas de algodón. Ideal para recipientes grandes o para tener varias velas encendidas.",
      },
      {
        q: "¿Necesito un recipiente aparte?",
        a: "Sí. La Reserva es solo perlas y mechas. Úsala con cualquier recipiente resistente al calor de más de 10 cm de diámetro, o con tu kit dunaru.",
      },
      {
        q: "¿Cuánto dura 1 kg?",
        a: "Hasta 240 horas de luz aproximadamente, dependiendo del tamaño del recipiente y la cantidad de mechas encendidas.",
      },
      {
        q: "¿Las velas tienen aroma?",
        a: "La cera nace neutra, sin perfume de fábrica. En esta misma página puedes agregar una de nuestras seis esencias de 10 ml y elegir el aroma de tu casa: unas gotas antes de encender y listo. Un frasco perfuma 500 g de cera. Si prefieres luz sin olor, también funciona perfecto: cambias de aroma cuando quieras, sin cambiar de vela.",
      },
      {
        q: "¿Tiene costo el envío?",
        a: "No. La Reserva 1 kg incluye envío gratis a todo México, con entrega estimada de 2 a 5 días hábiles.",
      },
    ],
  },

  "d-o-de-tonos": {
    blocks: PERLAS_BENEFIT_BLOCKS,
    compareRows: [
      { label: "Dos tonos para combinar", dunaru: true, traditional: false },
      { label: "Mejor precio que por separado", dunaru: true, traditional: false },
      { label: "Rellenable infinitamente", dunaru: true, traditional: false },
      { label: "Envío gratis a todo México", dunaru: true, traditional: false },
      { label: "Cambias de aroma sin cambiar de vela", dunaru: true, traditional: false },
      { label: "Costo por hora de luz", dunaru: "$", traditional: "$$$" },
    ],
    faqs: [
      {
        q: "¿Qué incluye el Dúo de Tonos?",
        a: "Dos bolsas de 500 g de perlas de cera perlada en los colores que elijas, más 60 mechas de algodón. Envío gratis.",
      },
      {
        q: "¿Puedo elegir los colores?",
        a: "Sí. Combina Marfil, Champagne y Ónix como prefieras: dos iguales o dos distintos para alternar según el ambiente.",
      },
      {
        q: "¿Las velas tienen aroma?",
        a: "La cera nace neutra, sin perfume de fábrica. En esta misma página puedes agregar una de nuestras seis esencias de 10 ml y elegir el aroma de tu casa: unas gotas antes de encender y listo. Un frasco perfuma 500 g de cera. Si prefieres luz sin olor, también funciona perfecto: cambias de aroma cuando quieras, sin cambiar de vela.",
      },
      {
        q: "¿Necesito recipiente aparte?",
        a: "Sí. El Dúo es solo perlas y mechas. Úsalo con cualquier recipiente resistente al calor de más de 10 cm, o con tu kit dunaru.",
      },
      {
        q: "¿Tiene costo el envío?",
        a: "No. El Dúo de Tonos incluye envío gratis a todo México, con entrega estimada de 2 a 5 días hábiles.",
      },
    ],
  },

  "tr-o-de-tonos": {
    blocks: PERLAS_BENEFIT_BLOCKS,
    compareRows: [
      { label: "Los tres tonos de la colección", dunaru: true, traditional: false },
      { label: "El mejor precio por gramo", dunaru: true, traditional: false },
      { label: "Rellenable infinitamente", dunaru: true, traditional: false },
      { label: "Envío gratis a todo México", dunaru: true, traditional: false },
      { label: "Cambias de aroma sin cambiar de vela", dunaru: true, traditional: false },
      { label: "Costo por hora de luz", dunaru: "$", traditional: "$$$" },
    ],
    faqs: [
      {
        q: "¿Qué incluye el Trío de Tonos?",
        a: "Tres bolsas de 500 g de perlas de cera perlada en Marfil, Champagne y Ónix, más 60 mechas de algodón. Es nuestro mejor valor. Envío gratis.",
      },
      {
        q: "¿Es el mejor precio?",
        a: "Sí. El Trío es la opción con mejor precio por gramo y la forma más completa de tener toda la colección de tonos dunaru.",
      },
      {
        q: "¿Las velas tienen aroma?",
        a: "La cera nace neutra, sin perfume de fábrica. En esta misma página puedes agregar una de nuestras seis esencias de 10 ml y elegir el aroma de tu casa: unas gotas antes de encender y listo. Un frasco perfuma 500 g de cera. Si prefieres luz sin olor, también funciona perfecto: cambias de aroma cuando quieras, sin cambiar de vela.",
      },
      {
        q: "¿Necesito recipiente aparte?",
        a: "Sí. El Trío es solo perlas y mechas. Úsalo con cualquier recipiente resistente al calor de más de 10 cm, o con tu kit dunaru.",
      },
      {
        q: "¿Tiene costo el envío?",
        a: "No. El Trío de Tonos incluye envío gratis a todo México, con entrega estimada de 2 a 5 días hábiles.",
      },
    ],
  },

  "bowl-negro": {
    blocks: [
      {
        title: "Un recipiente más para otro rincón",
        body: "Bowl de cerámica negra, resistente al calor y reutilizable. **Úsalo con tus perlas dunaru** para encender en otro espacio, o como portavela y objeto de decoración.",
        bullets: [
          "Cerámica resistente al calor",
          "Compatible con todas las perlas dunaru",
          "Reutilizable infinitamente",
        ],
        image: "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1785182590879-yafqxd2xr9i.webp",
        photo: true,
      },
      {
        title: "Objeto de diseño, encendido o apagado",
        body: "El bowl negro **se ve increíble aunque no lo enciendas**. Como cuenco decorativo, portavela o detalle de mesa: una pieza mínima que combina con todo.",
        bullets: [
          "Acabado mate que combina con todo",
          "Fácil de limpiar y reutilizar",
        ],
        image: "/pdp-bowl-decor.webp",
        photo: true,
        flip: true,
      },
    ],
    compareRows: [
      { label: "Reutilizable infinitamente", dunaru: true, traditional: false },
      { label: "Compatible con perlas dunaru", dunaru: true, traditional: false },
      { label: "Objeto de diseño por sí solo", dunaru: true, traditional: false },
      { label: "Resistente al calor", dunaru: true, traditional: true },
    ],
    faqs: [
      {
        q: "¿El bowl incluye perlas?",
        a: "No. El Bowl negro es solo el recipiente de cerámica. Úsalo con cualquier bolsa de perlas dunaru para encender tu vela.",
      },
      {
        q: "¿Es seguro con el calor?",
        a: "Sí. La cerámica resiste el calor de la llama sin deformarse. Úsalo siempre sobre una superficie plana y nunca lo dejes encendido sin supervisión.",
      },
      {
        q: "¿Se puede reutilizar?",
        a: "Por supuesto. El bowl se reutiliza infinitamente: cuando las perlas se consumen, lo vacías, lo limpias y vuelves a empezar.",
      },
    ],
  },

  "pack-30-mechas": {
    blocks: [
      {
        title: "Para nunca quedarte sin luz",
        body: "30 mechas de algodón de repuesto. Cuando una se consume, **colocas otra y tu vela sigue encendida**. Las perlas se reutilizan; solo cambias la mecha.",
        bullets: [
          "30 mechas de algodón natural",
          "Compatible con todos los productos dunaru",
          "El complemento para que tu vela nunca pare",
        ],
        image: "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1785012509487-5bsut1tyt6c.webp",
        photo: true,
      },
      {
        title: "Así funciona la renovación",
        body: "La magia de dunaru: **la mecha se consume, no las perlas**. Con este pack tienes repuesto para muchísimas encendidas más, sin comprar cera nueva.",
        bullets: [
          "Menos desperdicio, más ahorro",
          "Siempre lista para renovar",
        ],
        image: "/paso-renueva.webp",
        photo: true,
        flip: true,
      },
    ],
    compareRows: [
      { label: "Renueva sin comprar cera nueva", dunaru: true, traditional: false },
      { label: "Algodón natural", dunaru: true, traditional: false },
      { label: "Compatible con todo dunaru", dunaru: true, traditional: false },
      { label: "Larga duración por mecha", dunaru: true, traditional: true },
    ],
    faqs: [
      {
        q: "¿Cuántas mechas incluye?",
        a: "30 mechas de algodón natural, listas para reemplazar cuando la anterior se consuma.",
      },
      {
        q: "¿Sirven para cualquier producto dunaru?",
        a: "Sí. Las mechas son compatibles con todas las perlas, kits y recipientes dunaru.",
      },
      {
        q: "¿Cuánto dura una mecha?",
        a: "Cada mecha ofrece varias horas de luz. Cuando se consume, colocas una nueva y tu vela sigue encendida sin cambiar las perlas.",
      },
    ],
  },

  "vaso-extra-transparente": {
    blocks: [
      {
        title: "Un recipiente más para otro rincón",
        body: "Vaso de vidrio transparente de diseño, resistente al calor y reutilizable. **Úsalo con tus perlas dunaru** para encender en otro espacio, o como portavela donde quieras.",
        bullets: [
          "Vidrio transparente resistente al calor",
          "Compatible con todas las perlas dunaru",
          "Reutilizable infinitamente",
        ],
        image: "/casa-real-comedor.webp",
        photo: true,
      },
      {
        title: "Combina con cualquier decoración",
        body: "El vidrio transparente **deja ver el tono de tus perlas** y encaja en cualquier estilo. Como portavela, florero pequeño o detalle de mesa cuando no es vela.",
        bullets: [
          "Transparente: combina con todo",
          "Fácil de limpiar y reutilizar",
        ],
        image: "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1785182590879-wovmtpzn66.webp",
        photo: true,
        flip: true,
      },
    ],
    compareRows: [
      { label: "Reutilizable infinitamente", dunaru: true, traditional: false },
      { label: "Compatible con perlas dunaru", dunaru: true, traditional: false },
      { label: "Deja ver el tono de las perlas", dunaru: true, traditional: false },
      { label: "Resistente al calor", dunaru: true, traditional: true },
    ],
    faqs: [
      {
        q: "¿El vaso incluye perlas?",
        a: "No. El Vaso extra transparente es solo el recipiente de vidrio. Úsalo con cualquier bolsa de perlas dunaru para encender tu vela.",
      },
      {
        q: "¿Es seguro con el calor?",
        a: "Sí. El vidrio resiste el calor de la llama. Úsalo siempre sobre una superficie plana y nunca lo dejes encendido sin supervisión.",
      },
      {
        q: "¿Se puede reutilizar?",
        a: "Por supuesto. El vaso se reutiliza infinitamente: cuando las perlas se consumen, lo vacías, lo limpias y vuelves a empezar.",
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
    image: "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1785521743155-htw95tvbi4b.webp",
  },
  {
    title: "Enciende",
    text: "Prende la mecha. Tu vela ya está lista. Hasta 120 horas de luz con una bolsa de 500 g.",
    image: "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1785521743156-3qeskqe43gv.webp",
  },
  {
    title: "Renueva",
    text: "Cuando la mecha se consume, agrega una nueva. Las perlas se reutilizan. Tu recipiente también.",
    image: "/paso-renueva.webp",
  },
]

const GUARANTEES = [
  { icon: Leaf, label: "Sin parafina" },
  { icon: Flame, label: "Larga duración" },
  { icon: RefreshCw, label: "Rellenable" },
  { icon: Sparkles, label: "Siempre nueva" },
]

interface ProductStorySectionsProps {
  slug: string
}

export const ProductStorySections = ({ slug }: ProductStorySectionsProps) => {
  const content = PDP_CONTENT[slug]
  if (!content) return null

  return (
    <div className="mt-10 lg:mt-16 space-y-14 lg:space-y-20">
      {/* 1 — Tira de garantías (compacta, 1 sola fila también en móvil) */}
      <section className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-4 gap-x-1 sm:gap-x-4 py-5 border-y border-border/60">
          {GUARANTEES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <span className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-dunaru-champagne/50 flex items-center justify-center text-dunaru-champagne shrink-0">
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </span>
              <span className="text-[11px] sm:text-sm font-medium text-foreground/80 leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 2 — Crea tu vela en 4 pasos (carrusel navegable) */}
      <ProductStepsCarousel steps={HOW_IT_WORKS_STEPS} />

      {/* 3 — Prueba social: reseñas reales, justo después de entender el producto */}
      <Reviews title="Opiniones de quienes ya la tienen" />

      {/* 4 — Bloques editoriales alternados */}
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

      {/* 5 — Tabla comparativa */}
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
                {typeof row.dunaru === "string" ? (
                  <span className="font-display text-lg leading-none text-dunaru-champagne">
                    {row.dunaru}
                  </span>
                ) : row.dunaru ? (
                  <Check className="h-5 w-5 text-dunaru-champagne" strokeWidth={2.5} />
                ) : (
                  <X className="h-5 w-5 text-muted-foreground/40" />
                )}
              </span>
              <span className="px-4 py-4 flex justify-center w-24">
                {typeof row.traditional === "string" ? (
                  <span className="font-display text-lg leading-none text-muted-foreground/70">
                    {row.traditional}
                  </span>
                ) : row.traditional ? (
                  <Check className="h-5 w-5 text-muted-foreground/60" strokeWidth={2.5} />
                ) : (
                  <X className="h-5 w-5 text-muted-foreground/40" />
                )}
              </span>
            </div>
          ))}
        </div>
        {content.compareRows.some((r) => typeof r.dunaru === "string") && (
          <p className="mt-4 px-2 text-xs text-muted-foreground leading-relaxed text-center">
            Una bolsa de 500 g rinde hasta 120 horas de luz. Como rellenas el
            mismo recipiente en vez de comprar una vela nueva cada vez, cada hora
            de luz te sale mucho más barata.
          </p>
        )}
      </section>

      {/* 6 — FAQ */}
      <section className="max-w-2xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-3">
          Preguntas frecuentes
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Todo lo que necesitas saber antes de tu primera vela dunaru.
        </p>
        <Accordion type="single" collapsible className="space-y-3">
          {[...content.faqs, ...SHARED_FAQS].map((faq, i) => (
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

      {/* 7 — Cierre: devolver al usuario a la compra */}
      <section className="max-w-[1400px] mx-auto">
        <div className="rounded-xl bg-dunaru-arena px-6 py-10 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-foreground">
            ¿Lista para encender la tuya?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Envío gratis a todo México, llega en 2 a 5 días · 30 días de garantía
          </p>
          <button
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 font-body text-sm font-medium text-primary-foreground hover:text-dunaru-periwinkle transition-colors"
          >
            Elegir mi vela
          </button>
        </div>
      </section>
    </div>
  )
}