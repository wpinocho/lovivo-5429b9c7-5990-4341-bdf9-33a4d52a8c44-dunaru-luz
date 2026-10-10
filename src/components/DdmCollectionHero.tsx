/**
 * DdmCollectionHero — banner de /categorias/dia-de-muertos (temporal).
 * Compacto a propósito: en móvil deja ver los productos casi de inmediato.
 * Foto: idea de altar de la owner ("Un campo de luz").
 */

const HERO_IMG =
  "https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1791586723101-uqttcs5raf.webp"

export const DdmCollectionHero = () => (
  <header className="relative overflow-hidden bg-dunaru-onix">
    <img
      src={HERO_IMG}
      alt="Altar de Día de Muertos con velas de Cera Duna y flores de cempasúchil"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
    {/* Velo oscuro para que el texto se lea siempre */}
    <div
      className="absolute inset-0 bg-gradient-to-t from-dunaru-onix via-dunaru-onix/70 to-dunaru-onix/30"
      aria-hidden
    />
    <div className="relative mx-auto flex min-h-[210px] max-w-7xl flex-col items-center justify-end px-4 pb-6 pt-14 text-center sm:min-h-[300px] sm:px-6 sm:pb-10 lg:min-h-[380px] lg:px-8 lg:pb-12">
      <p className="font-body text-[10px] uppercase tracking-[0.26em] text-dunaru-cempasuchil sm:text-[11px]">
        Edición limitada · Día de Muertos
      </p>
      <h1 className="lockup mt-2 text-3xl text-dunaru-marfil sm:mt-3 sm:text-5xl lg:text-6xl">
        CEMPASÚCHIL
      </h1>
      <span className="mt-3 block h-px w-12 bg-dunaru-cempasuchil/70" aria-hidden />
      <p className="mt-3 max-w-md font-body text-xs leading-relaxed text-dunaru-marfil/75 sm:text-sm">
        Una luz para recordar. Piezas contadas, solo esta temporada.
      </p>
    </div>
  </header>
)