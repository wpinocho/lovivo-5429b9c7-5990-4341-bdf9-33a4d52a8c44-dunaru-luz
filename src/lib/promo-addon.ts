/**
 * PROMO ADD-ON DE TEMPORADA (Buen Fin, Hot Sale, Black Friday…)
 *
 * Un producto APARTE y OCULTO con precio especial que solo se puede comprar
 * junto a una vela rellenable (kit). Reutilizable: para la siguiente promo
 * solo cambia `slug`, `label`, `endsAt` y `kitSlugs`.
 *
 * Interruptores de apagado:
 *  1. Archivar el producto add-on en el Dashboard.
 *  2. La fecha `endsAt` (se apaga sola).
 *
 * NUNCA hardcodear precios: el precio sale del producto add-on y el "antes"
 * del producto base (Cera Duna · 500 g).
 */
import type { CartItem, CartProductItem } from "@/contexts/CartContext"

export const PROMO_ADDON = {
  slug: "cera-duna-500-g-buen-fin",
  baseSlug: "perlas-originales-500-g",
  label: "Precio Buen Fin",
  /** Nombre corto de la línea en el carrito (sin "· Precio Buen Fin"). */
  cartTitle: "Cera Duna · 500 g + 30 mechas",
  /** Sticker flotante sobre la foto (PDP + tarjetas de catálogo) */
  badgeImage:
    "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5429b9c7-5990-4341-bdf9-33a4d52a8c44/buen-fin-badge.webp",
  badgeAlt: "Buen Fin: 50% off en tu 2da recarga, del 13 al 17 de noviembre",
  /** 17 nov 2026 23:59 hora CDMX */
  endsAt: "2026-11-18T06:00:00Z",
  kitSlugs: [
    "kit-vaso-de-vidrio",
    "kit-vaso-de-concreto", // Cuenco Eclipse
    "vela-rellenable-cuenco-eclipse-copy-ppsiy", // Cuenco Alba
    "vela-rellenable-cuenco-dunaru",
    "vela-rellenable-bowl-ambar",
  ],
}

export const PROMO_LOCK_MESSAGE =
  "La cera a precio Buen Fin va con una vela rellenable."
export const PROMO_ENDED_MESSAGE = "La promoción Buen Fin terminó."

export const isPromoLive = (now: Date = new Date()) =>
  now.getTime() < new Date(PROMO_ADDON.endsAt).getTime()

export const isPromoAddonSlug = (slug?: string | null) =>
  !!slug && slug === PROMO_ADDON.slug

export const isPromoKitSlug = (slug?: string | null) =>
  !!slug && PROMO_ADDON.kitSlugs.includes(slug)

const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim()
    .toLowerCase()

/** Valor de la opción Color/Colores de una variante (o null). */
export const getColorValue = (variant: any): string | null => {
  const opts = variant?.options
  if (!opts || typeof opts !== "object") return null
  const key = Object.keys(opts).find((k) => {
    const n = normalize(k)
    return n === "color" || n === "colores"
  })
  return key ? String(opts[key]) : null
}

/** Busca la variante del add-on con el mismo color (sin importar acentos). */
export const matchColorVariant = <T>(
  variants: T[],
  colorName: string | null | undefined
): T | undefined => {
  if (!colorName) return undefined
  const target = normalize(colorName)
  return variants.find((v) => {
    const c = getColorValue(v)
    return c ? normalize(c) === target : false
  })
}

/**
 * CANDADO: el add-on nunca puede superar al número de kits en el carrito.
 * Recorta empezando por la última línea agregada. Si la promo terminó, lo quita.
 * Devuelve los items ajustados y qué pasó (para avisar a la clienta).
 */
export const enforcePromoAddonLimit = (
  items: CartItem[]
): { items: CartItem[]; changed: false | "lock" | "ended" } => {
  const isAddon = (i: CartItem) =>
    i.type === "product" && isPromoAddonSlug((i as CartProductItem).product?.slug)
  if (!items.some(isAddon)) return { items, changed: false }

  if (!isPromoLive()) {
    return { items: items.filter((i) => !isAddon(i)), changed: "ended" }
  }

  let allowed = items.reduce(
    (sum, i) =>
      i.type === "product" && isPromoKitSlug((i as CartProductItem).product?.slug)
        ? sum + i.quantity
        : sum,
    0
  )
  const addonTotal = items.reduce((s, i) => (isAddon(i) ? s + i.quantity : s), 0)
  if (addonTotal <= allowed) return { items, changed: false }

  // Repartir lo permitido de la primera línea a la última
  const next: CartItem[] = []
  for (const i of items) {
    if (!isAddon(i)) {
      next.push(i)
      continue
    }
    const qty = Math.min(i.quantity, allowed)
    allowed -= qty
    if (qty > 0) next.push({ ...i, quantity: qty })
  }
  return { items: next, changed: "lock" }
}

/**
 * Color sugerido para la siguiente bolsa en el carrito: el de la última vela
 * de la promo que todavía no tiene su bolsa del mismo color.
 */
export const suggestPromoAddonColor = (items: CartItem[]): string | null => {
  const lines = items.filter((i) => i.type === "product") as CartProductItem[]
  const kits = lines.filter((i) => isPromoKitSlug(i.product?.slug))
  if (!kits.length) return null
  const addonByColor: Record<string, number> = {}
  lines
    .filter((i) => isPromoAddonSlug(i.product?.slug))
    .forEach((i) => {
      const c = normalize(getColorValue(i.variant) || "")
      addonByColor[c] = (addonByColor[c] || 0) + i.quantity
    })
  for (const kit of [...kits].reverse()) {
    const color = getColorValue(kit.variant)
    if (!color) continue
    const c = normalize(color)
    const covered = addonByColor[c] || 0
    if (covered < kit.quantity) return color
    addonByColor[c] = covered - kit.quantity
  }
  return getColorValue(kits[kits.length - 1].variant)
}

/** Cuántos add-ons más caben en el carrito (para deshabilitar el "+"). */
export const promoAddonRoom = (items: CartItem[]) => {
  const kits = items.reduce(
    (s, i) =>
      i.type === "product" && isPromoKitSlug((i as CartProductItem).product?.slug)
        ? s + i.quantity
        : s,
    0
  )
  const addons = items.reduce(
    (s, i) =>
      i.type === "product" && isPromoAddonSlug((i as CartProductItem).product?.slug)
        ? s + i.quantity
        : s,
    0
  )
  return kits - addons
}