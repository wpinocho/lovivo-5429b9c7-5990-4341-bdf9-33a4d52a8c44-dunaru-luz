import { useEffect, useState } from "react"
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
}

/**
 * Carrusel navegable de "Crea tu vela en 4 pasos".
 * Móvil: 1 paso a la vez con peek. Desktop: los 4 visibles.
 */
export const ProductStepsCarousel = ({
  steps,
  title = "Crea tu vela en 4 pasos",
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
    <section className="bg-dunaru-arena py-12 lg:py-16 -mx-4 px-4 md:-mx-6 md:px-6">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-8">
          {title}
        </h2>

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
                <div className="space-y-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-background/60">
                    <img
                      src={step.image}
                      alt={`Paso ${i + 1}: ${step.title} · vela perlada dunaru`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 h-8 w-8 rounded-full bg-foreground text-background flex items-center justify-center font-display text-lg">
                      {i + 1}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-medium text-base">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-snug">
                      {step.text}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden lg:flex -left-4" />
          <CarouselNext className="hidden lg:flex -right-4" />
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
                  "h-1.5 rounded-full transition-all",
                  i === selected
                    ? "w-6 bg-foreground"
                    : "w-1.5 bg-foreground/25"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
