/**
 * navigation — Fuente única de verdad del menú principal de dunaru.
 *
 * PRINCIPIO: todo item del menú apunta a una RUTA REAL. Nada de anclas a la
 * home, porque desde una PDP expulsan al usuario del embudo.
 *
 * Los `label` de aquí son etiquetas CORTAS de navegación, a propósito
 * desacopladas del título del producto en la DB (el owner repriza y renombra
 * desde el Dashboard). Así el menú nunca queda desincronizado.
 */

export type NavItem = {
  label: string
  to: string
  /** Micro-descripción que se muestra bajo la etiqueta en el mega menú. */
  desc?: string
  /** Etiqueta de refuerzo comercial (ej. "Más vendido"). */
  tag?: string
}

export type NavColumn = {
  id: string
  title: string
  items: NavItem[]
}

/** Columnas del mega menú "Tienda". Orden = orden de merchandising. */
export const SHOP_COLUMNS: NavColumn[] = [
  {
    id: "velas",
    title: "Velas rellenables",
    items: [
      {
        label: "Vaso de Vidrio",
        to: "/productos/kit-vaso-de-vidrio",
        desc: "El clásico transparente",
        tag: "Más vendido",
      },
      {
        label: "Bowl de Cerámica",
        to: "/productos/kit-vaso-de-concreto",
        desc: "Pieza artesanal mate",
      },
      {
        label: "Bowl de Acero",
        to: "/productos/vela-bowl-de-acero",
        desc: "Acero espejo que refleja la llama",
        tag: "Nuevo",
      },
    ],
  },
  {
    id: "cera",
    title: "Cera Duna",
    items: [
      { label: "500 g", to: "/productos/perlas-originales-500-g", desc: "Rellena una vela" },
      { label: "1 kg", to: "/productos/reserva-1-kg", desc: "Para quien ya no la suelta" },
      { label: "Dúo de Tonos", to: "/productos/d-o-de-tonos", desc: "Dos colores, 1 kg" },
      { label: "Trío de Tonos", to: "/productos/tr-o-de-tonos", desc: "Tres colores, 1.5 kg" },
    ],
  },
  {
    id: "accesorios",
    title: "Accesorios",
    items: [
      { label: "Vaso de Vidrio", to: "/productos/vaso-extra-transparente", desc: "Recipiente extra" },
      { label: "Bowl Artesanal", to: "/productos/bowl-negro", desc: "Cerámica negra mate" },
      { label: "Bowl Espejo de Acero", to: "/productos/bowl-espejo-de-acero", desc: "Acero pulido, solo el recipiente", tag: "Nuevo" },
      { label: "30 Mechas de Algodón", to: "/productos/pack-30-mechas", desc: "Repuesto" },
    ],
  },
]

/** Tarjeta destacada del mega menú: empuja el add-on de mayor margen. */
export const SHOP_FEATURED = {
  eyebrow: "Dale aroma",
  title: "Seis esencias dunaru",
  body: "La Cera Duna nace neutra. Tú decides a qué huele tu casa: un frasco de 10 ml perfuma 500 g.",
  cta: "Ver las esencias",
  to: "/productos/esencia-para-vela-10-ml",
}

/** Link de cierre del mega menú. */
export const SHOP_ALL: NavItem = { label: "Ver todo el catálogo", to: "/categorias/todos" }

/**
 * Items de primer nivel que NO son la tienda.
 * Todos son rutas reales: funcionan igual desde la home que desde una PDP.
 */
export const PRIMARY_LINKS: NavItem[] = [
  { label: "Aromas", to: "/productos/esencia-para-vela-10-ml" },
  { label: "Cómo funciona", to: "/como-funciona" },
]

/** Links utilitarios: viven en el menú móvil y en el footer, no en la barra. */
export const UTILITY_LINKS: NavItem[] = [
  { label: "Rastrear pedido", to: "/orders/track" },
  { label: "Envíos y garantía", to: "/devoluciones" },
]