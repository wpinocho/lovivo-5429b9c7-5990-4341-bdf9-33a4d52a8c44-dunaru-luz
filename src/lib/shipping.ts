import { usePriceRules } from '@/hooks/usePriceRules'
import type { FreeShippingConditions } from '@/lib/supabase'

/**
 * Política de envío dunaru (2026-11-24):
 * envío gratis a todo México desde $499 (= Cera Duna 500 g, protege la recompra).
 * Pedidos menores pagan la tarifa configurada en Dashboard ($99).
 *
 * La fuente de verdad es la price rule `free_shipping` (min_subtotal) en DB.
 * Esta constante es el respaldo y la cifra que usa el copy estático.
 * ⚠️ Si la owner cambia el mínimo en Dashboard, actualizar esta constante.
 */
export const FREE_SHIPPING_MIN = 499

/** Copy reutilizable (sin guion largo). */
export const FREE_SHIPPING_COPY = {
  short: 'Envío gratis desde $499',
  long: 'Envío gratis a todo México desde $499',
  sub: 'A todo México desde $499',
} as const

/** Umbral activo: lee la regla free_shipping de DB, con respaldo a la constante. */
export const useFreeShippingThreshold = (): { minSubtotal: number; loading: boolean } => {
  const { getFreeShippingRules, loading } = usePriceRules()
  const rule = getFreeShippingRules()[0]
  const min = (rule?.conditions as FreeShippingConditions | undefined)?.min_subtotal
  return { minSubtotal: typeof min === 'number' ? min : FREE_SHIPPING_MIN, loading }
}