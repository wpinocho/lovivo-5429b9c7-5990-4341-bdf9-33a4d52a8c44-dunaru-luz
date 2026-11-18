import { contentSlug } from "@/lib/seasonal"

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

/** Navidad · Nieve: datos confirmados por la owner 2026-11-18. */
const NAVIDAD_CERA = {
  item: "500 g de Cera Duna color Nieve",
  benefit: "Cera 100% vegetal y biodegradable. Cuando se acabe, la vuelves a llenar.",
}

const NAVIDAD_CERA_1KG = {
  item: "1 kg de Cera Duna color Nieve",
  benefit: "Cera 100% vegetal y biodegradable, suficiente para cubrir toda la batea.",
}

const NAVIDAD_MECHAS = MECHAS_30

export const PDP_INCLUDES: Record<string, IncludeItem[]> = {
  // ❄️ Edición Navidad (slugs exactos, ganan sobre el contenido heredado)
  "casita-de-navidad-cuenco-dunaru": [
    { item: "Cuenco Dunaru de cerámica, 20 cm de diámetro y 6 cm de alto", benefit: "Admite varias mechas a la vez. Se lava y vuelve a empezar." },
    { item: "Casita de vela con mecha y pino nevado decorativo", benefit: "La casita también se enciende. El pino decora la escena." },
    NAVIDAD_CERA,
    NAVIDAD_MECHAS,
    ENVIO,
  ],
  "aldea-de-navidad-centro-de-madera": [
    { item: "Batea de madera natural, 43 × 30 cm y 4 cm de profundidad", benefit: "Amplia y baja, pensada para varias mechas encendidas a la vez." },
    { item: "3 casitas de vela y 3 pinos nevados decorativos", benefit: "Las casitas se encienden. Arma tu pueblito a tu gusto." },
    { item: "2 nochebuenas de cera", benefit: "El rojo de la Navidad sobre la nieve. También son velas." },
    NAVIDAD_CERA_1KG,
    NAVIDAD_MECHAS,
    ENVIO,
  ],
  "pino-de-invierno-cuenco-alba": [
    { item: "Cuenco Alba de cerámica, 15 cm de diámetro y 4 cm de alto", benefit: "Pieza de diseño que se queda en casa. Se lava y vuelve a empezar." },
    { item: "Pino de vela con mecha", benefit: "El pino también se enciende, junto a las mechas en la cera." },
    NAVIDAD_CERA,
    NAVIDAD_MECHAS,
    ENVIO,
  ],
  "refugio-de-invierno-cuenco-eclipse": [
    { item: "Cuenco Eclipse de cerámica, 15 cm de diámetro y 4 cm de alto", benefit: "Esmalte en tonos fríos. Se lava y vuelve a empezar." },
    { item: "Pino de vela con mecha", benefit: "El pino también se enciende, junto a las mechas en la cera." },
    NAVIDAD_CERA,
    NAVIDAD_MECHAS,
    ENVIO,
  ],
  "nochebuena-de-navidad-bowl-mbar": [
    { item: "Bowl Ámbar de vidrio con borde ondulado", benefit: "Se ilumina desde adentro con la llama. Se lava y vuelve a empezar." },
    { item: "Nochebuena de vela con mecha", benefit: "El rojo de la temporada sobre la cera blanca. También se enciende." },
    NAVIDAD_CERA,
    NAVIDAD_MECHAS,
    ENVIO,
  ],

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

  "vela-rellenable-cuenco-dunaru": [
    {
      item: "Cuenco Dunaru de cerámica, 20 cm de diámetro",
      benefit: "Admite varias mechas a la vez. Se lava y vuelve a empezar.",
    },
    CERA_500,
    MECHAS_30,
    ENVIO,
  ],

  // Vela Rellenable · Cuenco Alba (slug generado al duplicar en el Dashboard)
  "vela-rellenable-cuenco-eclipse-copy-ppsiy": [
    {
      item: "Cuenco Alba de cerámica artesanal",
      benefit: "Pieza de diseño que se queda en la casa. Se lava y vuelve a empezar.",
    },
    CERA_500,
    MECHAS_30,
    ENVIO,
  ],

  "vela-rellenable-bowl-ambar": [
    {
      item: "Bowl Ámbar de vidrio con borde ondulado",
      benefit: "Se ilumina desde adentro con la llama. Se lava y vuelve a empezar.",
    },
    CERA_500,
    MECHAS_30,
    ENVIO,
  ],

  "bowl-ambar": [
    {
      item: "Bowl de vidrio color ámbar con borde ondulado",
      benefit: "Una pieza que se ve bien encendida y apagada. Se rellena las veces que quieras.",
    },
    {
      item: "Solo el recipiente",
      benefit: "La cera y las mechas se piden aparte, para encenderlo cuando quieras.",
    },
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
      item: "El aroma que elijas, de seis disponibles",
      benefit: "Cada frasco lleva un solo aroma. Eliges cuál arriba, antes de agregarlo.",
    },
    ENVIO,
  ],
}

export function getIncludes(slug?: string): IncludeItem[] | undefined {
  if (!slug) return undefined
  return PDP_INCLUDES[slug] ?? PDP_INCLUDES[contentSlug(slug)]
}