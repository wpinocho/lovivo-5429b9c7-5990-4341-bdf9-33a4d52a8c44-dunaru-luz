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
import { Reviews } from "@/components/Reviews"

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
  steps?: StoryStep[]
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
        body: "Ese tazón de cerámica, el vaso de vidrio o el cuenco de concreto que tanto te gusta **pasa a ser una vela de diseño**. Tú eliges el estilo, nosotros ponemos la luz.",
        bullets: [
          "Funciona en cualquier recipiente de +10 cm",
          "Combina colores y texturas a tu gusto",
        ],
        image: "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1784141750638-4z1j2dq3ab9.webp",
        photo: true,
        flip: true,
      },
      {
        title: "Se cae y no pasa nada",
        body: "Al ser perlas de cera, un golpe **no significa cera caliente encima ni manchas imposibles**. Las recoges y sigues. Pensadas para casas con vida, niños y mascotas.",
        bullets: [
          "Mucho menos riesgo que una vela común",
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
    ],
    compareRows: [
      { label: "Rellenable infinitamente", dunaru: true, traditional: false },
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
        image: "/pdp-vaso-decor.webp",
        photo: true,
      },
    ],
    compareRows: [
      { label: "Llega listo para encender", dunaru: true, traditional: false },
      { label: "Rellenable infinitamente", dunaru: true, traditional: false },
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
          "Rellenable para siempre",
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
      { label: "Rellenable infinitamente", dunaru: true, traditional: false },
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

  "reserva-1-kg": {
    blocks: [
      {
        title: "El doble de luz, el mismo recipiente",
        body: "1 kg de perlas de cera perlada: **el doble de duración** para quien ya ama dunaru. Llena recipientes más grandes o mantén varios encendidos a la vez, sin quedarte corto.",
        bullets: [
          "1 kg de perlas + 30 mechas de algodón",
          "Rinde el doble que la bolsa original",
          "Envío gratis a todo México",
        ],
        image: "/casa-real-sala.webp",
        photo: true,
      },
      {
        title: "Compra una vez, rellena para siempre",
        body: "Cuando las perlas se consumen **no tiras nada**: solo vacías, vuelves a llenar tu recipiente y colocas una mecha nueva. La misma luz cálida, una y otra vez.",
        bullets: [
          "Rellenable en cualquier recipiente de +10 cm",
          "Menos desperdicio, más ahorro",
        ],
        image: "/casa-real-comedor.webp",
        photo: true,
        flip: true,
      },
    ],
    compareRows: [
      { label: "El doble de duración", dunaru: true, traditional: false },
      { label: "Rellenable infinitamente", dunaru: true, traditional: false },
      { label: "Sin cera pegada ni desperdicio", dunaru: true, traditional: false },
      { label: "Envío gratis a todo México", dunaru: true, traditional: false },
      { label: "Luz cálida y aroma neutro", dunaru: true, traditional: true },
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
        q: "¿Tiene costo el envío?",
        a: "No. La Reserva 1 kg incluye envío gratis a todo México, con entrega estimada de 2 a 5 días hábiles.",
      },
    ],
  },

  "d-o-de-tonos": {
    blocks: [
      {
        title: "Dos tonos para combinar a tu gusto",
        body: "Dos bolsas de 500 g en los colores que elijas: **combina, alterna o llena dos recipientes a la vez**. Marfil, Champagne u Ónix para crear el ambiente que se te antoje.",
        bullets: [
          "2 bolsas de 500 g + 60 mechas incluidas",
          "Elige los tonos que más te gusten",
          "Envío gratis a todo México",
        ],
        image: "/casa-real-recibidor.webp",
        photo: true,
      },
      {
        title: "Más valor que comprar por separado",
        body: "El Dúo de Tonos te da **más perlas por menos**: perfecto para tu casa o para regalar. Una compra, luz para mucho tiempo en más de un rincón.",
        bullets: [
          "Ahorras frente a comprar dos bolsas sueltas",
          "Rellenable infinitamente en tus recipientes",
        ],
        image: "/casa-real-sala.webp",
        photo: true,
        flip: true,
      },
    ],
    compareRows: [
      { label: "Dos tonos para combinar", dunaru: true, traditional: false },
      { label: "Mejor precio que por separado", dunaru: true, traditional: false },
      { label: "Rellenable infinitamente", dunaru: true, traditional: false },
      { label: "Envío gratis a todo México", dunaru: true, traditional: false },
      { label: "Luz cálida y aroma neutro", dunaru: true, traditional: true },
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
    blocks: [
      {
        title: "La colección completa, el mejor valor",
        body: "Tres bolsas de 500 g, tres colores: **Marfil, Champagne y Ónix juntos**. La forma más completa de vivir dunaru y nuestro mejor precio por gramo.",
        bullets: [
          "3 bolsas de 500 g + 60 mechas incluidas",
          "Los tres tonos de la colección",
          "El mejor valor dunaru · envío gratis",
        ],
        image: "/casa-real-sala.webp",
        photo: true,
      },
      {
        title: "Un tono para cada momento",
        body: "Cambia el ambiente según el día: **el marfil cálido, el champagne elegante, el ónix dramático**. Con el Trío tienes luz de diseño para toda la casa y para regalar.",
        bullets: [
          "Combina y alterna cuando quieras",
          "Rellenable infinitamente en tus recipientes",
        ],
        image: "/casa-real-comedor.webp",
        photo: true,
        flip: true,
      },
    ],
    compareRows: [
      { label: "Los tres tonos de la colección", dunaru: true, traditional: false },
      { label: "El mejor precio por gramo", dunaru: true, traditional: false },
      { label: "Rellenable infinitamente", dunaru: true, traditional: false },
      { label: "Envío gratis a todo México", dunaru: true, traditional: false },
      { label: "Luz cálida y aroma neutro", dunaru: true, traditional: true },
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
        image: "/casa-real-recibidor.webp",
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
        image: PLACEHOLDER,
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
  { icon: RefreshCw, label: "Rellenable infinita" },
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

      {/* 6 — Reseñas reales (todas, para máxima prueba social) */}
      <Reviews title="Opiniones de quienes ya la tienen" />

      {/* 7 — Pago seguro + MSI */}
      <section className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 py-8 border-t border-border/60 text-sm text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-5 w-5 text-dunaru-champagne" strokeWidth={1.5} />
            <span>Pago 100% seguro</span>
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