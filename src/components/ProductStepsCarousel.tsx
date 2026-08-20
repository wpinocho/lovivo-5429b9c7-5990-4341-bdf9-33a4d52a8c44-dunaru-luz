import { useEffect, useState, type ReactNode } from "react"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

export interface Step {
  title: string
  text: string
  image: string
}

interface ProductStepsCarouselProps {
  steps: Step[]
  title?: string
  /** Eyebrow opcional encima del título */
  eyebrow?: string
  /** id para anclas (#como-funciona) */
  id?: string
  /**
   * `true` (default) = full-bleed dentro de un contenedor ya paddeado (PDP).
   * `false` = sección propia de ancho completo (landing).
   */
  bleed?: boolean
  /** Clase de fondo de la sección */
  background?: string
  /** Slot opcional debajo del carrusel (CTA) */
  footer?: ReactNode
}

/**
 * Carrusel navegable de "Crea tu vela en 4 pasos".
 * Móvil: 1 paso a la vez con peek. Desktop: los 4 visibles.
 */
export const ProductStepsCarousel = ({
  steps,
  title = "Crea tu vela en 4 pasos",
  eyebrow,
  id,
  bleed = true,
  background = "bg-dunaru-arena",
  footer,
}: ProductStepsCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)
  const [snaps, setSnaps] = useState<number[]>([])

  useEffect(() => {
    if (!api) return
    setSnaps(api.scrollSnapList())
    setSelected(api.selectedScrollSnap())
    const onSelect = () => setSelected(api.selectedScrollSnap())
    api.on("select", onSelect)
    api.on("reInit", () => {
      setSnaps(api.scrollSnapList())
      setSelected(api.selectedScrollSnap())
    })
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <section
      id={id}
      className={cn(
        background,
        "py-12 lg:py-16",
        bleed && "-mx-4 px-4 md:-mx-6 md:px-6"
      )}
    >
      <div
        className={cn(
          "mx-auto",
          bleed ? "max-w-[1400px]" : "max-w-7xl px-4 sm:px-6 lg:px-8"
        )}
      >
        {eyebrow && (
          <p className="font-body text-xs font-semibold tracking-[0.22em] uppercase text-dunaru-terracota mb-3 text-center">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-center text-dunaru-carbon">
          {title}
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4 mb-9">
          <span className="h-px w-10 bg-dunaru-terracota/50" />
          <span className="h-1 w-1 rotate-45 bg-dunaru-periwinkle" />
          <span className="h-px w-10 bg-dunaru-terracota/50" />
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", containScroll: "trimSnaps" }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {steps.map((step, i) => (
              <CarouselItem
                key={i}
                className="pl-4 basis-[80%] sm:basis-1/2 lg:basis-1/4"
              >
                <div className="group space-y-4">
                  <div className="relative aspect-square overflow-hidden bg-dunaru-marfil">
                    <img
                      src={step.image}
                      alt={`Paso ${i + 1}: ${step.title} · vela perlada dunaru`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <span className="absolute top-0 left-0 h-9 w-9 bg-dunaru-terracota text-dunaru-marfil flex items-center justify-center font-display text-lg leading-none transition-colors duration-500 group-hover:bg-[hsl(var(--dunaru-periwinkle-deep))]">
                      {i + 1}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="h-px w-5 bg-dunaru-periwinkle transition-all duration-500 group-hover:w-8 group-hover:bg-dunaru-terracota" />
                      <h3 className="font-display text-lg leading-none text-dunaru-carbon">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-dunaru-carbon/70 leading-snug">
                      {step.text}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden lg:flex -left-4 rounded-none border-dunaru-terracota/40 bg-transparent text-dunaru-terracota hover:bg-dunaru-terracota hover:text-dunaru-marfil hover:border-dunaru-terracota" />
          <CarouselNext className="hidden lg:flex -right-4 rounded-none border-dunaru-terracota/40 bg-transparent text-dunaru-terracota hover:bg-dunaru-terracota hover:text-dunaru-marfil hover:border-dunaru-terracota" />
        </Carousel>

        {snaps.length > 1 && (
          <div className="flex justify-center gap-2 mt-6 lg:hidden">
            {snaps.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir al paso ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "h-1 transition-all duration-500",
                  i === selected
                    ? "w-8 bg-dunaru-terracota"
                    : "w-4 bg-dunaru-periwinkle/45 hover:bg-dunaru-periwinkle"
                )}
              />
            ))}
          </div>
        )}

        {footer && <div className="mt-8 text-center">{footer}</div>}
      </div>
    </section>
  )
}