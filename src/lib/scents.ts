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
  /** Frase editorial de una línea (máx ~14 palabras). Escena, no ingredientes. */
  story?: string
  /** Pirámide olfativa derivada de `notes`. Nunca inventar notas nuevas. */
  pyramid?: { salida: string; corazon: string; fondo: string }
  /**
   * Imagen editorial horizontal (flat-lay 4:3). Mientras sea null el área de
   * imagen simplemente no se renderiza (sin placeholders grises).
   */
  imageUrl: string | null
}

/** Base de las imágenes editoriales de aromas (flat-lays de ingredientes). */
const SCENT_IMG =
  "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/"

/** Slug del producto independiente de esencias en la DB. */
export const SCENT_PRODUCT_SLUG = "esencia-para-vela-10-ml"

/** Nombre de la opción de variante del producto de esencias. */
export const SCENT_OPTION_NAME = "Aroma"

/**
 * Rendimiento real de un frasco de 10 ml (dato del owner, 2026-08-25):
 * un frasco perfuma un paquete completo de 500 g de Cera Duna.
 */
export const SCENT_YIELD_GRAMS = 500
export const SCENT_YIELD_COPY = "Un frasco perfuma 500 g de cera"

/**
 * Productos que soportan aroma como complemento.
 * Por ahora: todo lo que incluye Cera Duna.
 */
export const SCENT_ENABLED_SLUGS: string[] = [
  "kit-vaso-de-vidrio",
  "kit-vaso-de-concreto",
  "vela-bowl-de-acero",
  "perlas-originales-500-g",
  "reserva-1-kg",
  "d-o-de-tonos",
  "tr-o-de-tonos",
]

export const supportsScentAddon = (slug?: string | null): boolean =>
  !!slug && SCENT_ENABLED_SLUGS.includes(slug)

/**
 * Devuelve la foto editorial de un aroma a partir del NOMBRE de la variante.
 *
 * Se usa en el resumen del checkout y en la confirmación de compra, donde el
 * line item solo trae el nombre de la variante ("Higo Matcha") y las fotos del
 * producto de esencias vienen todas juntas: sin esto se pintaría siempre la
 * primera foto para cualquier aroma.
 */
export const getScentImageByVariantName = (
  variantName?: string | null
): string | undefined => {
  if (!variantName) return undefined
  const clean = variantName.trim().toLowerCase()
  return SCENTS.find((s) => s.name.toLowerCase() === clean)?.imageUrl || undefined
}

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
    story: "La sala cuando ya nadie tiene prisa. Madera tibia, luz baja.",
    pyramid: {
      salida: "Cardamomo y violeta",
      corazon: "Iris y cuero suave",
      fondo: "Sándalo y cedro",
    },
    imageUrl: `${SCENT_IMG}1787337333998-ynkiiz87l1n.webp`,
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
    story: "Dulce sin empalagar. El aroma que te preguntan al entrar.",
    pyramid: {
      salida: "Azafrán",
      corazon: "Jazmín",
      fondo: "Ámbar, cedro y musgo",
    },
    imageUrl: `${SCENT_IMG}1787337333997-44wwhmmisy5.webp`,
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
    story: "Ventanas abiertas y sábanas limpias. Fresco de verdad, sin dulzor.",
    pyramid: {
      salida: "Sal marina",
      corazon: "Salvia",
      fondo: "Ambreta y madera de ámbar",
    },
    imageUrl: `${SCENT_IMG}1787337333998-jphdwvy2pbh.webp`,
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
    story: "Una mañana lenta con la ventana abierta. Verde y sereno.",
    pyramid: {
      salida: "Bergamota y naranja amarga",
      corazon: "Higo y matcha",
      fondo: "Cedro y vetiver",
    },
    imageUrl: `${SCENT_IMG}1787337333998-enck999sju7.webp`,
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
    story: "Noche de invierno, cobija pesada, algo dulce en el aire.",
    pyramid: {
      salida: "Jengibre",
      corazon: "Tabaco y miel",
      fondo: "Vainilla, tonka y cedro",
    },
    imageUrl: `${SCENT_IMG}1787337333998-5e5poqkcxh8.webp`,
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
    story: "Piel limpia y ámbar suave. Se nota sin anunciarse.",
    pyramid: {
      salida: "Lavanda",
      corazon: "Jazmín y rosa",
      fondo: "Almizcle, ámbar gris y tonka",
    },
    imageUrl: `${SCENT_IMG}1787337333998-n7f8zqhfx8m.webp`,
  },
]