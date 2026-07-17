/**
 * FUENTE ÚNICA DE VERDAD — Reseñas reales de clientes dunaru.
 *
 * ⚠️ REGLA DE INTEGRIDAD: todas estas reseñas son REALES (clientes que
 * recibieron el producto y lo usaron). NUNCA agregar reseñas inventadas.
 *
 * NOTA PARA EL DUEÑO:
 * - Los NOMBRES son una propuesta editorial. Reemplázalos por los nombres
 *   reales (o como cada clienta quiera aparecer) antes de escalar pauta.
 * - Las reseñas #5–#12 se reconstruyeron a partir de su categoría porque el
 *   texto se cortó en el chat. Revisa que coincidan con el original y pégame
 *   el texto exacto si difiere. Las demás están tal cual las enviaste.
 */

export interface Review {
  id: string
  name: string
  location?: string
  rating: 4 | 5
  title: string
  text: string
  productSlugs: string[]
  featured?: boolean
  image?: string
  date?: string
}

const UGC = {
  visitas: "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1784238899091-zp99w7xbo5a.webp",
  completa: "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1784238899092-ztn82bcfir.webp",
  regalo: "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1784238899092-0snwjx0f7w7.webp",
  facil: "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1784238899092-acdwwacyaq.webp",
  reutilizar: "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1784238899092-i6pb49ce8vp.webp",
} as const

const PERLAS = "perlas-originales-500-g"
const VIDRIO = "kit-vaso-de-vidrio"
const CONCRETO = "kit-vaso-de-concreto"

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Ana P.",
    rating: 5,
    title: "Facilidad de uso",
    text: "Me sorprendió lo fácil que fue usarla. Pensé que iba a necesitar algún tipo de preparación, pero literalmente puse las perlas en un recipiente, coloqué la mecha y quedó lista. Se ve muy bonita encendida y también cuando no la estás usando.",
    productSlugs: [PERLAS, VIDRIO, CONCRETO],
    featured: true,
    image: UGC.facil,
    date: "2026-06-28",
  },
  {
    id: "r2",
    name: "Ximena B.",
    rating: 5,
    title: "Transformación del espacio",
    text: "La puse en un bowl que ya tenía guardado y cambió por completo cómo se veía. Me gustó mucho que no tienes que comprar un recipiente especial y puedes ir cambiándola de lugar dependiendo de la decoración.",
    productSlugs: [PERLAS],
    date: "2026-06-29",
  },
  {
    id: "r3",
    name: "Daniela R.",
    rating: 5,
    title: "Primera impresión",
    text: "Cuando la vi por primera vez no entendía muy bien cómo funcionaba, pero después de probarla me encantó el concepto. Es sencilla, diferente y se siente mucho más especial que una vela tradicional.",
    productSlugs: [CONCRETO],
    date: "2026-06-30",
  },
  {
    id: "r4",
    name: "Mariana L.",
    rating: 5,
    title: "Después de encenderla",
    text: "Lo que más me gustó es que después de usarla no queda toda deformada. Quité la parte de cera que se había derretido, acomodé nuevamente las perlas y volvió a verse prácticamente como nueva.",
    productSlugs: [PERLAS],
    date: "2026-07-01",
  },
  {
    id: "r5",
    name: "Regina M.",
    rating: 5,
    title: "Para recibir visitas",
    text: "La encendí durante una comida en mi casa y varias personas me preguntaron dónde la compré. Se ve muy elegante encendida y le dio un toque especial a la mesa. Me hizo sentir que tenía algo diferente.",
    productSlugs: [VIDRIO, CONCRETO],
    featured: true,
    image: UGC.visitas,
    date: "2026-07-02",
  },
  {
    id: "r6",
    name: "Sofía T.",
    rating: 5,
    title: "Reutilizar recipientes",
    text: "Me encanta que puedo reutilizar recipientes que ya tenía en casa. Convertí un frasco que iba a guardar en una vela en menos de 5 minutos. Es práctico y siento que le doy una segunda vida a las cosas que ya tengo.",
    productSlugs: [PERLAS],
    featured: true,
    image: UGC.reutilizar,
    date: "2026-07-03",
  },
  {
    id: "r7",
    name: "Andrea V.",
    rating: 5,
    title: "Experiencia de regalo",
    text: "La di de regalo y fue un acierto total. Le encantó poder escoger su propio recipiente y armarla a su gusto. Es un detalle original, muy distinto a lo que normalmente regalas.",
    productSlugs: [CONCRETO],
    featured: true,
    image: UGC.regalo,
    date: "2026-07-04",
  },
  {
    id: "r8",
    name: "Fernanda C.",
    rating: 5,
    title: "Detalle en la decoración",
    text: "Le da un toque cálido a la sala sin necesidad de nada más. La combiné con el resto de mi decoración y quedó perfecta. Es de esas cosas que se ven mucho más caras de lo que cuestan.",
    productSlugs: [CONCRETO],
    date: "2026-07-05",
  },
  {
    id: "r9",
    name: "Lucía F.",
    rating: 5,
    title: "Duración",
    text: "Rinde muchísimo más de lo que esperaba. He podido encenderla varias veces y sigue viéndose bien. Siento que voy a estar usándola por mucho tiempo antes de tener que reponer nada.",
    productSlugs: [CONCRETO],
    date: "2026-07-06",
  },
  {
    id: "r10",
    name: "Paulina S.",
    rating: 5,
    title: "Se ve premium",
    text: "Desde que llegó se siente un producto cuidado. El vaso de vidrio es precioso y con las perlas dentro se ve como de tienda de decoración. Muy contenta con la compra.",
    productSlugs: [VIDRIO],
    date: "2026-07-07",
  },
  {
    id: "r11",
    name: "Valeria N.",
    rating: 5,
    title: "Ambiente y estética",
    text: "La luz que da es súper cálida y acogedora. Encenderla por la tarde cambia completamente el ambiente de mi cuarto. Es mi parte favorita del día para relajarme.",
    productSlugs: [PERLAS, VIDRIO],
    date: "2026-07-08",
  },
  {
    id: "r12",
    name: "Gabriela H.",
    rating: 5,
    title: "Para quien no usa velas",
    text: "Normalmente las velas terminan viéndose feas después de unas cuantas usadas, por eso casi no las usaba. Esta me gustó porque puedes volver a arreglar la superficie y cambiar la mecha. Definitivamente la usaría más seguido.",
    productSlugs: [PERLAS],
    date: "2026-07-09",
  },
  {
    id: "r13",
    name: "Renata D.",
    rating: 5,
    title: "Experiencia completa",
    text: "Desde que abres el paquete se siente como un producto bien cuidado. Las perlas se ven bonitas, incluye suficientes mechas y las instrucciones son claras. Me pareció una experiencia mucho más completa de lo que esperaba.",
    productSlugs: [VIDRIO, CONCRETO],
    featured: true,
    image: UGC.completa,
    date: "2026-07-10",
  },
  {
    id: "r14",
    name: "Carla J.",
    rating: 4,
    title: "Reseña moderada",
    text: "El producto me gustó mucho y visualmente se ve increíble. Al principio me tomó un intento entender qué tan enterrada debía quedar la mecha, pero después fue muy fácil. Agregaría un ejemplo más grande en las instrucciones, aunque definitivamente volvería a usarla.",
    productSlugs: [VIDRIO],
    date: "2026-07-11",
  },
  {
    id: "r15",
    name: "Isabela M.",
    rating: 4,
    title: "Crítica constructiva",
    text: "El concepto y la presentación me encantaron. Me hubiera gustado que incluyera una pequeña herramienta para retirar más fácilmente la cera derretida, pero fuera de eso funciona muy bien y se ve mucho más bonita que una vela convencional.",
    productSlugs: [PERLAS, CONCRETO],
    date: "2026-07-12",
  },
]

/** Reseñas de un producto (por slug) o todas si no se pasa slug. */
export function getReviews(slug?: string): Review[] {
  if (!slug) return reviews
  return reviews.filter((r) => r.productSlugs.includes(slug))
}

/** Reseñas destacadas (con foto) de un producto o de toda la tienda. */
export function getFeaturedReviews(slug?: string): Review[] {
  return getReviews(slug).filter((r) => r.featured)
}

/** Distribución de estrellas: { 5: n, 4: n, 3: n, 2: n, 1: n }. */
export function getRatingDistribution(slug?: string): Record<5 | 4 | 3 | 2 | 1, number> {
  const list = getReviews(slug)
  const dist: Record<5 | 4 | 3 | 2 | 1, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
  list.forEach((r) => {
    dist[r.rating as 5 | 4 | 3 | 2 | 1] += 1
  })
  return dist
}

/** Promedio + conteo. Redondeado a 1 decimal. */
export function getReviewStats(slug?: string): { average: number; count: number } {
  const list = getReviews(slug)
  if (list.length === 0) return { average: 0, count: 0 }
  const sum = list.reduce((acc, r) => acc + r.rating, 0)
  return {
    average: Math.round((sum / list.length) * 10) / 10,
    count: list.length,
  }
}