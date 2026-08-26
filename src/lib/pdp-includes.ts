/**
 * PDP_INCLUDES — "Qué incluye" por slug.
 *
 * Cada componente de la caja + el beneficio que da, en una línea.
 * Regla: solo datos verificados (ver .lovivo/plan.md). Nada de "guía impresa"
 * ni especificaciones que no estén confirmadas por la owner.
 */

export interface IncludeItem {
  /** Qué viene en la caja. */
  item: string
  /** Por qué importa. Una línea, sin adjetivos de relleno. */
  benefit: string
}

const CERA_500 = {
  item: "500 g de Cera Duna",
  benefit: "Cera 100% vegetal y biodegradable. Hasta 120 horas de luz.",
}

const MECHAS_30 = {
  item: "30 mechas de algodón",
  benefit: "Cambias la mecha, no la vela. Una por recarga.",
}

const ENVIO = {
  item: "Envío gratis y 30 días de garantía",
  benefit: "Llega en 2 a 5 días hábiles. Si no te convence, lo devuelves sin costo.",
}

export const PDP_INCLUDES: Record<string, IncludeItem[]> = {
  "perlas-originales-500-g": [
    CERA_500,
    MECHAS_30,
    {
      item: "El recipiente lo pones tú",
      benefit: "Cualquier vaso o bowl resistente al calor que ya tengas en casa.",
    },
    ENVIO,
  ],

  "reserva-1-kg": [
    {
      item: "1 kg de Cera Duna",
      benefit: "Hasta 240 horas de luz y el mejor precio por gramo del catálogo.",
    },
    {
      item: "60 mechas de algodón",
      benefit: "Reserva para todo el año sin volver a pedir.",
    },
    ENVIO,
  ],

  "kit-vaso-de-vidrio": [
    {
      item: "Vaso de vidrio resistente al calor",
      benefit: "Se rellena por años. Se lava con agua tibia y vuelve a empezar.",
    },
    CERA_500,
    MECHAS_30,
    ENVIO,
  ],

  "kit-vaso-de-concreto": [
    {
      item: "Bowl de cerámica negra mate, hecho a mano",
      benefit: "Pieza de diseño que se queda en la casa, no se tira con la cera.",
    },
    CERA_500,
    MECHAS_30,
    ENVIO,
  ],

  "vela-bowl-de-acero": [
    {
      item: "Bowl de acero pulido tipo espejo",
      benefit: "Refleja la llama y la duplica sobre la mesa. Se limpia y vuelve a empezar.",
    },
    CERA_500,
    MECHAS_30,
    ENVIO,
  ],

  "d-o-de-tonos": [
    {
      item: "Dos bolsas de 500 g de Cera Duna, en tonos distintos",
      benefit: "1 kg en total. Mezclas los tonos o alternas según el rincón.",
    },
    {
      item: "60 mechas de algodón",
      benefit: "30 por bolsa. Una mecha por recarga.",
    },
    ENVIO,
  ],

  "tr-o-de-tonos": [
    {
      item: "Tres bolsas de 500 g de Cera Duna, en tres tonos",
      benefit: "1.5 kg en total. Hasta 360 horas de luz.",
    },
    {
      item: "90 mechas de algodón",
      benefit: "30 por bolsa. Te alcanzan para más de un año.",
    },
    ENVIO,
  ],

  "bowl-negro": [
    {
      item: "Bowl de cerámica negra mate, hecho a mano",
      benefit: "Resiste el calor y se rellena las veces que quieras.",
    },
    {
      item: "Solo el recipiente",
      benefit: "La cera y las mechas se piden aparte, para rellenarlo cuando quieras.",
    },
    ENVIO,
  ],

  "vaso-extra-transparente": [
    {
      item: "Vaso de vidrio transparente resistente al calor",
      benefit: "Deja ver el tono de la cera y la llama. Se rellena sin fin.",
    },
    {
      item: "Solo el recipiente",
      benefit: "Ideal como segunda vela para otro cuarto de la casa.",
    },
    ENVIO,
  ],

  "bowl-espejo-de-acero": [
    {
      item: "Bowl de acero pulido tipo espejo",
      benefit: "Resiste el calor y se rellena las veces que quieras.",
    },
    {
      item: "Solo el recipiente",
      benefit: "La cera y las mechas se piden aparte, para encenderlo cuando quieras.",
    },
    ENVIO,
  ],

  "pack-30-mechas": [
    {
      item: "30 mechas de algodón",
      benefit: "Suficientes para 30 recargas. Repuesto puro.",
    },
    ENVIO,
  ],

  "esencia-para-vela-10-ml": [
    {
      item: "Frasco de 10 ml de esencia concentrada",
      benefit: "Un frasco perfuma 500 g de Cera Duna.",
    },
    {
      item: "Seis aromas para elegir",
      benefit: "Cambias de aroma cuando quieras, sin cambiar de vela.",
    },
    ENVIO,
  ],
}

export function getIncludes(slug?: string): IncludeItem[] | undefined {
  if (!slug) return undefined
  return PDP_INCLUDES[slug]
}