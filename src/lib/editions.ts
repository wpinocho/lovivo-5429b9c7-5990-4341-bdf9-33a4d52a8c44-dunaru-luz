import { supabase } from "@/lib/supabase"
import { STORE_ID } from "@/lib/config"

/**
 * EDICIONES DE TEMPORADA (sistema anual reciclable)
 *
 * Cada edición son productos SEPARADOS en la DB (sin variantes de color: el
 * color ES la edición) que reutilizan el contenido de PDP de su producto base
 * (qué incluye, beneficios, reseñas, FAQ) vía `contentSlug()`.
 *
 * Fin de temporada: la owner ARCHIVA los productos. Sección de la home, link
 * del menú y grupo del catálogo desaparecen solos. Nunca borrar.
 *
 * Nueva edición = agregar una entrada a EDITIONS + clase de acento en index.css.
 */

export type EditionIdea = { src: string; title: string; tip: string }

export type Edition = {
  id: "nieve" | "ddm"
  /** Nombre corto de la edición (ribbon, sellos). */
  name: string
  /** Ocasión (breadcrumb, eyebrows). */
  occasion: string
  collectionHandle: string
  /** URL pública de la landing (la que se comparte y va en el menú). */
  path: string
  /** URL canónica para SEO. */
  canonicalPath: string
  navLabel: string
  eyebrow: string
  title: string
  heroTagline: string
  heroImage: string
  heroAlt: string
  home: { titleLead: string; titleEm: string; titleTail: string; intro: string }
  notice: string
  inspiration: { eyebrow: string; titleLead: string; titleEm: string; intro: string; ideas: EditionIdea[] }
  /** Clase que fija --edition-accent (index.css). */
  accentClass: string
  /** Clase de papel para la PDP (index.css), se pone en <html>. */
  pdpThemeClass: string
  /** slug de edición → slug base cuyo contenido hereda (orden = merchandising). */
  products: Record<string, string>
  /** Productos que la owner cree con otro slug pero misma familia. */
  slugPrefixes: string[]
  headlines: Record<string, string>
  /**
   * Aromas en el selector de la PDP: ids de SEASONAL_SCENTS que van primero
   * (con etiqueta "Temporada") + ids regulares que se ocultan para dejar sitio.
   */
  scents: { seasonal: string[]; hide: string[] }
}

const MSG =
  "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de"

/** Sufijo del slug → producto base (para slugs que no estén en `products`). */
const BASE_BY_SUFFIX: [string, string][] = [
  ["vaso-de-vidrio", "kit-vaso-de-vidrio"],
  ["cuenco-dunaru", "vela-rellenable-cuenco-dunaru"],
  ["cuenco-eclipse", "kit-vaso-de-concreto"],
  ["cuenco-alba", "vela-rellenable-cuenco-eclipse-copy-ppsiy"],
  ["bowl-ambar", "vela-rellenable-bowl-ambar"],
  ["500-g", "perlas-originales-500-g"],
  ["1-kg", "reserva-1-kg"],
]

export const EDITIONS: Edition[] = [
  {
    id: "nieve",
    name: "Nieve",
    occasion: "Navidad",
    collectionHandle: "navidad",
    path: "/navidad",
    canonicalPath: "/navidad",
    navLabel: "Navidad",
    eyebrow: "Edición limitada · Navidad",
    title: "NIEVE",
    heroTagline: "Una luz para regalar. Piezas contadas, solo esta temporada.",
    heroImage:
      "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5429b9c7-5990-4341-bdf9-33a4d52a8c44/nieve-banner.webp",
    heroAlt: "Ramas de pino con escarcha y luces cálidas para la edición Nieve de Navidad",
    home: {
      titleLead: "NIEVE.",
      titleEm: "Una luz",
      titleTail: "PARA REGALAR",
      intro:
        "La calma de la nieve en Cera Duna, para tu mesa de Navidad o para regalar. Piezas contadas, solo esta temporada.",
    },
    notice: "Se hace solo para Navidad. Cuando se agote, se acaba.",
    inspiration: {
      eyebrow: "Inspiración · Navidad",
      titleLead: "IDEAS PARA",
      titleEm: "regalar",
      intro: "Formas de llevar la luz de la temporada a tu casa. Toca una foto para verla completa.",
      ideas: [
        { src: `${MSG}/1795038283050-yuqxeisjjd.webp`, title: "Una aldea nevada", tip: "Casitas y pinos sobre Cera Duna blanca, con varias mechas encendidas entre ellos." },
        { src: `${MSG}/1795038283050-w6zybbbc4dd.webp`, title: "Listo para regalar", tip: "Un cuenco con tres mechas junto a los regalos. Llega listo para encender." },
        { src: `${MSG}/1795038283050-et53jlvbbf.webp`, title: "La isla de la cocina", tip: "Un cuenco amplio, un vaso pequeño y dos casitas junto a un ramo de nochebuenas." },
        { src: `${MSG}/1795038283050-7fohsz8y38l.webp`, title: "Mesa de Nochebuena", tip: "Vasos altos de vidrio con cera, ramas de pino, piñas y naranja seca para la cena." },
        { src: `${MSG}/1795038283050-dhe9t85y9ge.webp`, title: "Dibuja en la cera", tip: "Con un molde y un poco de canela formas una galleta de jengibre sobre la superficie." },
        { src: `${MSG}/1795038283050-zjoe0ial8g.webp`, title: "Un bosque de luz", tip: "Extiende la cera como nieve y acomoda pinitos, piñas y mechas a distintas alturas." },
      ],
    },
    accentClass: "edition-nieve",
    pdpThemeClass: "theme-nieve",
    // Slugs reales creados por la owner (2026-11-18). Orden = merchandising.
    products: {
      "casita-de-navidad-cuenco-dunaru": "vela-rellenable-cuenco-dunaru",
      // Aldea, Alba y Eclipse heredan reseñas y aromas del Cuenco Dunaru (pedido owner 2026-11-18).
      // Las secciones de la PDP son propias: NIEVE_STORY en ProductStorySections.
      "aldea-de-navidad-centro-de-madera": "vela-rellenable-cuenco-dunaru",
      "pino-de-invierno-cuenco-alba": "vela-rellenable-cuenco-dunaru",
      "refugio-de-invierno-cuenco-eclipse": "vela-rellenable-cuenco-dunaru",
      "nochebuena-de-navidad-bowl-mbar": "vela-rellenable-bowl-ambar",
      // Misma PDP que Cera Duna · 500 g (secciones, incluye, reseñas, FAQ). Sin selector de color.
      "cera-duna-nieve-500-g": "perlas-originales-500-g",
    },
    slugPrefixes: ["vela-rellenable-nieve-", "cera-duna-nieve-"],
    headlines: {
      "casita-de-navidad-cuenco-dunaru":
        "Una casita nevada en el centro de tu mesa. Cuando se acabe la cera, la vuelves a llenar.",
      "aldea-de-navidad-centro-de-madera":
        "Un pueblito nevado con varias mechas encendidas. El centro de mesa de tu Navidad.",
      "pino-de-invierno-cuenco-alba":
        "Un pino de vela entre la nieve y tres mechas encendidas. Cerámica artesanal que se queda en casa.",
      "refugio-de-invierno-cuenco-eclipse":
        "Cerámica de tonos fríos, un pino de vela y tres mechas: luz cálida para las noches de diciembre.",
      "nochebuena-de-navidad-bowl-mbar":
        "Vidrio ámbar, cera blanca y una nochebuena. La luz más cálida de la temporada.",
      "cera-duna-nieve-500-g":
        "Cera color Nieve para el recipiente que ya tienes. Hasta 120 horas de luz esta Navidad.",
    },
    scents: { seasonal: ["pino-navideno", "manzana-canela"], hide: ["higo-matcha", "costa-mineral"] },
  },
  {
    id: "ddm",
    name: "Cempasúchil",
    occasion: "Día de Muertos",
    collectionHandle: "dia-de-muertos",
    path: "/dia-de-muertos",
    canonicalPath: "/categorias/dia-de-muertos",
    navLabel: "Día de Muertos",
    eyebrow: "Edición limitada · Día de Muertos",
    title: "CEMPASÚCHIL",
    heroTagline: "Una luz para recordar. Piezas contadas, solo esta temporada.",
    heroImage: `${MSG}/1791586723101-uqttcs5raf.webp`,
    heroAlt: "Altar de Día de Muertos con velas de Cera Duna y flores de cempasúchil",
    home: {
      titleLead: "CEMPASÚCHIL.",
      titleEm: "Una luz",
      titleTail: "PARA RECORDAR",
      intro:
        "El naranja de la flor que guía el camino en la ofrenda, ahora en Cera Duna. Piezas contadas, solo esta temporada.",
    },
    notice: "Se hace solo para Día de Muertos. Cuando se agote, se acaba.",
    inspiration: {
      eyebrow: "Inspiración · Día de Muertos",
      titleLead: "IDEAS PARA",
      titleEm: "tu altar",
      intro: "Seis formas de llevar la luz de la temporada a tu casa. Toca una foto para verla completa.",
      ideas: [
        { src: `${MSG}/1791586723101-uqttcs5raf.webp`, title: "Un campo de luz", tip: "Extiende la cera sobre una charola amplia y enciende varias mechas entre flores de cempasúchil." },
        { src: `${MSG}/1791586723101-beyoys9qmbm.webp`, title: "Camino de ofrenda", tip: "Un sendero de cera al centro de la mesa, con barro, fruta de temporada y semillas." },
        { src: `${MSG}/1791586723101-m6tb2khuzlr.webp`, title: "Mesa para recibir", tip: "Vasos altos de vidrio con cera, cempasúchil alrededor, fruta y luz baja para la cena." },
        { src: `${MSG}/1791586723101-1fvs134xdv6.webp`, title: "Altar en la cocina", tip: "Un cuenco con varias mechas, calaveritas de barro y un ramo naranja. Pequeño y lleno de sentido." },
        { src: `${MSG}/1791586723101-b7696bizhwg.webp`, title: "Sobre la credenza", tip: "Calabazas, flores sueltas y una vela en cada extremo. Simple, cálido y fácil de armar." },
        { src: `${MSG}/1791586723101-bcdckoare7.webp`, title: "Un río de cera", tip: "La misma credenza, ahora con Cera Duna como camino y mechas entre las calabazas." },
      ],
    },
    accentClass: "edition-ddm",
    pdpThemeClass: "theme-ddm",
    products: {
      "vela-rellenable-cempasuchil-vaso-de-vidrio": "kit-vaso-de-vidrio",
      "vela-rellenable-cempasuchil-cuenco-dunaru": "vela-rellenable-cuenco-dunaru",
      // ⚠️ Slugs "-copy-" generados al duplicar en el Dashboard.
      "vela-rellenable-cempasuchil-cuenco-dunaru-copy-da2k8": "kit-vaso-de-concreto", // Cuenco Eclipse
      "vela-rellenable-cempasuchil-cuenco-dunaru-copy-ksihd": "vela-rellenable-cuenco-eclipse-copy-ppsiy", // Cuenco Alba
      "vela-rellenable-cempasuchil-bowl-ambar": "vela-rellenable-bowl-ambar",
      "cera-duna-cempasuchil-500-g": "perlas-originales-500-g",
      "cera-duna-cempasuchil-1-kg": "reserva-1-kg",
    },
    slugPrefixes: [],
    headlines: {
      "vela-rellenable-cempasuchil-vaso-de-vidrio":
        "El naranja del cempasúchil en una vela lista para tu ofrenda. Cuando se acabe, la vuelves a llenar.",
      "vela-rellenable-cempasuchil-cuenco-dunaru":
        "Una luz generosa para el centro de tu altar, en el color de la flor que guía el camino.",
      "vela-rellenable-cempasuchil-cuenco-dunaru-copy-da2k8":
        "Cerámica oscura y cera cempasúchil: el naranja de la ofrenda resalta todavía más.",
      "vela-rellenable-cempasuchil-cuenco-dunaru-copy-ksihd":
        "Cerámica artesanal y cera cempasúchil para iluminar tu ofrenda. Cuando se acabe, la vuelves a llenar.",
      "vela-rellenable-cempasuchil-bowl-ambar":
        "Vidrio ámbar y cera cempasúchil: una vela que brilla en tonos de fuego sobre tu altar.",
      "cera-duna-cempasuchil-500-g":
        "El color del cempasúchil para el recipiente que ya tienes. Edición limitada de temporada.",
      "cera-duna-cempasuchil-1-kg":
        "Cera cempasúchil para llenar varios recipientes de tu altar. Edición limitada de temporada.",
    },
    scents: { seasonal: ["cempasuchil"], hide: ["costa-mineral"] },
  },
]

const stripCopy = (slug: string) => slug.replace(/-copy-[a-z0-9]+$/, "")

export const editionForSlug = (slug?: string | null): Edition | null => {
  if (!slug) return null
  return (
    EDITIONS.find(
      (e) => slug in e.products || e.slugPrefixes.some((p) => slug.startsWith(p)),
    ) ?? null
  )
}

export const editionForHandle = (handle?: string | null): Edition | null =>
  (handle && EDITIONS.find((e) => e.collectionHandle === handle)) || null

export const editionForPath = (path?: string | null): Edition | null =>
  (path && EDITIONS.find((e) => e.path === path)) || null

export const isEditionSlug = (slug?: string | null): boolean => !!editionForSlug(slug)

/** Slug cuyo contenido de PDP se debe usar (el base si es de edición). */
export const contentSlug = (slug: string): string => {
  const edition = editionForSlug(slug)
  if (!edition) return slug
  if (edition.products[slug]) return edition.products[slug]
  const clean = stripCopy(slug)
  return BASE_BY_SUFFIX.find(([suffix]) => clean.endsWith(suffix))?.[1] ?? slug
}

/** Posición de merchandising dentro de su edición. */
export const editionRank = (edition: Edition, slug: string): number => {
  const explicit = Object.keys(edition.products).indexOf(slug)
  if (explicit >= 0) return explicit
  const clean = stripCopy(slug)
  const bySuffix = BASE_BY_SUFFIX.findIndex(([suffix]) => clean.endsWith(suffix))
  return 100 + (bySuffix >= 0 ? bySuffix : 50)
}

export const editionHeadline = (slug: string): string | undefined =>
  editionForSlug(slug)?.headlines[slug]

/** Todos los slugs explícitos de todas las ediciones. */
export const ALL_EDITION_SLUGS: string[] = EDITIONS.flatMap((e) => Object.keys(e.products))

/** Productos ACTIVOS de una edición, ordenados (home + landing). */
export async function fetchEditionProducts<T extends { slug: string }>(
  edition: Edition,
  columns = "*",
): Promise<T[]> {
  const filters = [
    `slug.in.(${Object.keys(edition.products).join(",")})`,
    ...edition.slugPrefixes.map((p) => `slug.like.${p}%`),
  ].join(",")
  const { data, error } = await supabase
    .from("products")
    .select(columns)
    .eq("store_id", STORE_ID)
    .eq("status", "active")
    .or(filters)
  if (error || !data) return []
  return [...(data as unknown as T[])].sort(
    (a, b) => editionRank(edition, a.slug) - editionRank(edition, b.slug),
  )
}