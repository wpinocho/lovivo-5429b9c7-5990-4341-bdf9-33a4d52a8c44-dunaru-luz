/**
 * scents — Configuración central de los aromas dunaru.
 *
 * Fuente única de verdad del CONTENIDO editorial de cada esencia y de
 * QUÉ productos pueden llevar aroma como complemento.
 *
 * ⚠️ Aquí no viven precios ni títulos comerciales: el precio y el nombre de la
 * variante siempre vienen de la DB (el owner los edita desde el Dashboard).
 * Lo que vive aquí es el copy sensorial y el mapeo por slug.
 *
 * Para activar el selector de aroma en un producto nuevo:
 *   1. añade su slug a SCENT_ENABLED_SLUGS
 *   2. listo — no hay que tocar el componente.
 */

export type Scent = {
  /** id estable interno (no se muestra) */
  id: string
  /** Nombre dunaru. Debe coincidir EXACTO con el valor de la variante en la DB. */
  name: string
  /** Descriptor secundario. NUNCA forma parte del nombre de la variante ni del line item. */
  inspiredBy: string
  /** Perfil olfativo corto. */
  profile: string
  /** Descripción sensorial de 1-2 líneas. */
  description: string
  /** Ayuda de elección: completa la frase "Elígelo si buscas: ..." */
  recommendedFor: string
  /** Notas olfativas. */
  notes: string[]
  /**
   * Imagen editorial horizontal (~16:9). Mientras sea null el área de imagen
   * simplemente no se renderiza (sin placeholders grises).
   */
  imageUrl: string | null
}

/** Slug del producto independiente de esencias en la DB. */
export const SCENT_PRODUCT_SLUG = "esencia-para-vela-10-ml"

/** Nombre de la opción de variante del producto de esencias. */
export const SCENT_OPTION_NAME = "Aroma"

/**
 * Productos que soportan aroma como complemento.
 * Por ahora: todo lo que incluye cera perlada.
 */
export const SCENT_ENABLED_SLUGS: string[] = [
  "kit-vaso-de-vidrio",
  "kit-vaso-de-concreto",
  "perlas-originales-500-g",
  "reserva-1-kg",
  "d-o-de-tonos",
  "tr-o-de-tonos",
]

export const supportsScentAddon = (slug?: string | null): boolean =>
  !!slug && SCENT_ENABLED_SLUGS.includes(slug)

export const SCENTS: Scent[] = [
  {
    id: "madera-nocturna",
    name: "Madera Nocturna",
    inspiredBy: "Inspirado en Santal 33",
    profile: "Amaderado · cálido · sofisticado",
    description:
      "Sándalo seco, cuero suave y cedro con un toque especiado de cardamomo.",
    recommendedFor: "una casa cálida, amaderada y sofisticada.",
    notes: ["Sándalo", "Cuero", "Iris", "Cardamomo", "Violeta", "Cedro"],
    imageUrl: null,
  },
  {
    id: "ambar-cristal",
    name: "Ámbar Cristal",
    inspiredBy: "Inspirado en Baccarat Rouge 540",
    profile: "Dulce · ambarado · envolvente",
    description:
      "Ámbar cálido y ligeramente dulce, con jazmín, azafrán y maderas suaves.",
    recommendedFor: "un aroma envolvente, sofisticado y con un toque dulce.",
    notes: ["Azafrán", "Jazmín", "Ámbar", "Cedro", "Abeto", "Musgo"],
    imageUrl: null,
  },
  {
    id: "costa-mineral",
    name: "Costa Mineral",
    inspiredBy: "Inspirado en Wood Sage & Sea Salt",
    profile: "Fresco · limpio · amaderado",
    description:
      "Aire de mar, salvia fresca y madera clara. Limpio, mineral y nada dulce.",
    recommendedFor: "algo fresco, limpio y nada dulce.",
    notes: ["Sal marina", "Salvia", "Ambreta", "Madera de ámbar"],
    imageUrl: null,
  },
  {
    id: "higo-matcha",
    name: "Higo Matcha",
    inspiredBy: "Inspirado en Thé Matcha 26",
    profile: "Verde · fresco · cremoso",
    description:
      "Higo verde y matcha con cítricos suaves y un fondo limpio de madera.",
    recommendedFor: "algo verde, relajado y moderno.",
    notes: ["Higo", "Matcha", "Bergamota", "Naranja amarga", "Cedro", "Vetiver"],
    imageUrl: null,
  },
  {
    id: "tabaco-vainilla",
    name: "Tabaco Vainilla",
    inspiredBy: "Inspirado en Tobacco Vanille",
    profile: "Cálido · dulce · profundo",
    description:
      "Tabaco dulce, vainilla oscura y miel sobre un fondo cálido de madera y especias.",
    recommendedFor: "un aroma cálido, intenso y acogedor.",
    notes: ["Tabaco", "Vainilla", "Miel", "Jengibre", "Tonka", "Cedro"],
    imageUrl: null,
  },
  {
    id: "musgo-mineral",
    name: "Musgo Mineral",
    inspiredBy: "Inspirado en Another 13",
    profile: "Limpio · almizclado · sutil",
    description:
      "Almizcle limpio y ámbar suave con flores ligeras y un fondo cálido, casi de piel.",
    recommendedFor: "algo limpio, sutil y sofisticado.",
    notes: ["Almizcle", "Jazmín", "Rosa", "Lavanda", "Ámbar gris", "Tonka"],
    imageUrl: null,
  },
]