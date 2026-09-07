import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { STORE_ID } from '@/lib/config'

/**
 * useActiveProductSlugs — fuente única de "qué productos existen hoy".
 *
 * El menú, el footer y la rejilla de la home tienen listas curadas de slugs
 * (orden de merchandising decidido a mano). Esas listas NO deben mostrar un
 * producto que la owner archivó desde el Dashboard.
 *
 * Este hook devuelve el set de slugs con status = 'active'. Si el producto se
 * desarchiva, vuelve a aparecer solo, sin tocar código.
 *
 * Devuelve `null` mientras carga: en ese caso NO se filtra nada, para evitar
 * que el menú parpadee vacío en el primer render.
 */

let cache: Set<string> | null = null
let inflight: Promise<Set<string>> | null = null

const loadActiveSlugs = async (): Promise<Set<string>> => {
  if (cache) return cache
  if (!inflight) {
    inflight = (async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('slug')
          .eq('status', 'active')
          .eq('store_id', STORE_ID)

        if (error) throw error

        const set = new Set<string>(
          (data || []).map((row: { slug?: string }) => row?.slug).filter(Boolean) as string[],
        )
        // Si la consulta viene vacía por un fallo silencioso, no ocultamos nada.
        if (set.size === 0) return new Set<string>()
        cache = set
        return set
      } catch (err) {
        console.error('Error fetching active product slugs:', err)
        inflight = null
        return new Set<string>()
      }
    })()
  }
  return inflight
}

export const useActiveProductSlugs = (): Set<string> | null => {
  const [slugs, setSlugs] = useState<Set<string> | null>(cache)

  useEffect(() => {
    let alive = true
    loadActiveSlugs().then((set) => {
      if (alive && set.size > 0) setSlugs(set)
    })
    return () => {
      alive = false
    }
  }, [])

  return slugs
}

/** Extrae el slug de una ruta tipo `/productos/kit-vaso-de-vidrio?variante=Ónix`. */
export const slugFromPath = (path: string): string | null => {
  const match = path.match(/^\/productos\/([^/?#]+)/)
  return match ? decodeURIComponent(match[1]) : null
}

/**
 * Quita de una lista de links los que apuntan a un producto archivado.
 * Los links que no son de producto (colecciones, páginas) nunca se tocan.
 */
export const filterActiveLinks = <T extends { to: string }>(
  items: T[],
  slugs: Set<string> | null,
): T[] => {
  if (!slugs || slugs.size === 0) return items
  return items.filter((item) => {
    const slug = slugFromPath(item.to)
    return !slug || slugs.has(slug)
  })
}