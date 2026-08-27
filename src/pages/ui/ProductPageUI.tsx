import { useEffect, useMemo, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { EcommerceTemplate } from "@/templates/EcommerceTemplate"
import {
  ShoppingCart,
  ArrowLeft,
  Plus,
  Minus,
  Truck,
  ShieldCheck,
  ChevronRight,
  Star,
  MessageCircle,
  Check,
  CreditCard,
  Lock,
} from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import { createCheckoutFromCart } from "@/lib/checkout"
import { getIncludes } from "@/lib/pdp-includes"
import { useCheckoutState } from "@/hooks/useCheckoutState"
import { STORE_ID } from "@/lib/config"
import { useToast } from "@/hooks/use-toast"
import { trackAddToCart, tracking } from "@/lib/tracking-utils"
import type { CartItem } from "@/contexts/CartContext"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import type { SellingPlan } from "@/lib/supabase"
import { BOGOLabel } from "@/components/ui/BOGOLabel"
import { intervalLabel } from "@/lib/subscription-utils"
import ProductExpressCheckout from "@/components/ProductExpressCheckout"
import { ProductQuantityTiers } from "@/components/ProductQuantityTiers"
import {
  ProductScentSelector,
  type ScentSelection,
} from "@/components/ProductScentSelector"
import {
  supportsScentAddon,
  getScentImageByVariantName,
  SCENT_OPTION_NAME,
  SCENTS,
} from "@/lib/scents"
import { usePriceRules } from "@/hooks/usePriceRules"
import { calcVolumeDiscount } from "@/lib/price-rule-utils"
import { getReviewStats } from "@/data/reviews"
import { ProductStorySections } from "@/components/ProductStorySections"
import { DeliveryEstimate, PdpSocialProof } from "@/components/PdpTrust"

// Slugs que usan el selector "Lleva más y ahorra" en lugar del stepper + add-ons
const TIER_SELECTOR_SLUGS = ["perlas-originales-500-g"]

// Productos que NO llevan cera: en ellos "Color" sí se refiere al recipiente.
const CONTAINER_ONLY_SLUGS = [
  "bowl-negro",
  "vaso-extra-transparente",
  "pack-30-mechas",
]

/**
 * Etiqueta visible del selector de variantes.
 * En los kits, "Color" se leía como el color del recipiente (sobre todo en el
 * bowl de cerámica). Aquí lo desambiguamos: el color que se elige es el de la cera.
 */
const optionLabel = (name: string, slug?: string) => {
  const normalized = name.trim().toLowerCase()
  const isColor = normalized === "color" || normalized === "colores"
  if (isColor && slug && !CONTAINER_ONLY_SLUGS.includes(slug)) {
    return "Color de la cera"
  }
  return name
}

/**
 * Promesa de una línea que aparece DEBAJO del título, arriba del fold en móvil.
 * Responde "¿qué es esto y por qué me importa?" antes de que el usuario scrollee.
 */
const PDP_HEADLINE: Record<string, string> = {
  "kit-vaso-de-vidrio":
    "Enciende tu primera vela hoy. Cuando se acabe, la vuelves a llenar — no la tiras.",
  "kit-vaso-de-concreto":
    "El objeto de diseño que nunca se acaba: se rellena, no se tira.",
  "vela-bowl-de-acero":
    "Acero pulido que refleja la llama y la duplica sobre la mesa. Llega lista para encender.",
  "bowl-espejo-de-acero":
    "Solo el recipiente: acero pulido tipo espejo para rellenar con tu Cera Duna.",
  "perlas-originales-500-g":
    "Convierte cualquier recipiente que ya tienes en una vela. Hasta 120 horas de luz.",
  "reserva-1-kg":
    "Un kilo de Cera Duna: hasta 240 horas de luz para rellenar todas tus velas.",
  "d-o-de-tonos":
    "Dos tonos para combinar. Un kilo de cera para crear las velas que quieras.",
  "tr-o-de-tonos":
    "Tres tonos, kilo y medio de cera. Crea, combina y rellena sin límite.",
}

/**
 * Beneficios del producto, arriba del selector de variantes.
 * Copy orientado a "qué gano yo", no a lista de contenido de caja.
 */
const PDP_BENEFITS: Record<string, string[]> = {
  "kit-vaso-de-vidrio": [
    "Incluye: vaso de vidrio + 500 g de Cera Duna + 30 mechas de algodón",
    "Cuando se acaba la rellenas, no la tiras: el mismo vaso te dura años",
    "Hasta 120 horas de luz cálida con los 500 g que vienen incluidos",
  ],
  "kit-vaso-de-concreto": [
    "Incluye: bowl de cerámica + 500 g de Cera Duna + 30 mechas de algodón",
    "Bowl de cerámica negra mate hecho a mano: se ve bien encendido y apagado",
    "Se rellena infinitas veces: compras una vez y sigue dando luz",
  ],
  "vela-bowl-de-acero": [
    "Incluye: bowl de acero espejo + 500 g de Cera Duna + 30 mechas de algodón",
    "El acero pulido refleja la llama: una luz que se multiplica sobre la mesa",
    "Se rellena infinitas veces: compras una vez y sigue dando luz",
  ],
  "bowl-espejo-de-acero": [
    "Bowl de acero pulido tipo espejo, resistente al calor",
    "Solo el recipiente: la cera y las mechas se piden aparte",
    "Ideal como segunda vela para otro rincón de la casa",
  ],
  "perlas-originales-500-g": [
    "Convierte el vaso o bowl que ya tienes en una vela de diseño",
    "Hasta 120 horas de luz por bolsa: cada 100 g dan cerca de 24 horas",
    "Sin cera pegada: se vacía, se limpia y empieza de cero",
  ],
  "reserva-1-kg": [
    "1 kg de Cera Duna: hasta 240 horas de luz, el mejor precio por gramo",
    "Rinde para varias velas encendidas al mismo tiempo",
    "60 mechas incluidas: rellenas cuando quieras, sin comprar nada más",
  ],
  "d-o-de-tonos": [
    "Dos tonos para combinar en el mismo recipiente o en dos velas distintas",
    "1 kg de cera en total: hasta 240 horas de luz",
    "60 mechas incluidas y mejor precio que comprarlas por separado",
  ],
  "tr-o-de-tonos": [
    "Los tres tonos de la colección: Marfil, Champagne y Ónix",
    "1.5 kg de cera: hasta 360 horas de luz para toda la casa",
    "90 mechas incluidas y el mejor precio por gramo del catálogo",
  ],
}
import { useCart } from "@/contexts/CartContext"
import type { Product } from "@/lib/supabase"
import { SEO } from "@/components/SEO"
import { useSettings } from "@/contexts/SettingsContext"
import { productJsonLd, breadcrumbJsonLd, plainText } from "@/lib/seo/jsonld"

/**
 * EDITABLE UI COMPONENT - ProductPageUI (Premium Redesign)
 *
 * Layout asimétrico 7/5, galería con thumbnails verticales (desktop),
 * tipografía editorial, highlights con íconos, acordeones de detalle,
 * sticky info column en desktop. Lógica intacta — solo presentación.
 */

interface ProductPageUIProps {
  logic: {
    product: any
    loading: boolean
    notFound: boolean
    selected: Record<string, string>
    quantity: number
    matchingVariant: any
    currentPrice: number
    currentCompareAt: number | null
    currentImage: string | null
    inStock: boolean
    handleOptionSelect: (optionName: string, value: string) => void
    handleQuantityChange: (quantity: number) => void
    handleAddToCart: () => void
    handleNavigateBack: () => void
    isOptionValueAvailable: (optionName: string, value: string) => boolean
    [key: string]: any
  }
}

export const ProductPageUI = ({ logic }: ProductPageUIProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [expressAvailable, setExpressAvailable] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)
  const [scentSelection, setScentSelection] = useState<ScentSelection | null>(
    null
  )
  const [isBuyingNowWithScent, setIsBuyingNowWithScent] = useState(false)
  const { addItem, clearCart } = useCart()
  const navigate = useNavigate()
  const { toast } = useToast()
  const { saveCheckoutState } = useCheckoutState()
  const { currencyCode: checkoutCurrency } = useSettings()
  const { getVolumeRulesForProduct } = usePriceRules()
  const { ref: ctaRef, inView: ctaInView, entry } = useInView({ threshold: 0 })
  // Solo mostramos la barra sticky cuando el usuario YA pasó (scrolleó por encima) del CTA,
  // no cuando el CTA todavía está debajo del fold al cargar la página.
  const scrolledPastCta = !ctaInView && (entry?.boundingClientRect.top ?? 0) < 0

  /**
   * Agrega el producto principal y, si el usuario eligió aroma, una unidad de
   * la esencia como LÍNEA SEPARADA del carrito.
   * MVP: 1 frasco por acción, sin multiplicar por la cantidad de cera.
   */
  const handleAddToCartWithAddOns = () => {
    logic.handleAddToCart()
    if (logic.canAddToCart && scentSelection) {
      addItem(scentSelection.product, scentSelection.variant)
    }
  }

  /**
   * "Comprar ahora" con aroma.
   *
   * Sin aroma: usamos el flujo nativo de HeadlessProduct.
   * Con aroma: replicamos ese mismo flujo (orden directa + /pagar) pero
   * construyendo la orden con DOS líneas — el producto principal y una unidad
   * de la esencia. Nunca pasa por el carrito.
   */
  const handleBuyNowWithScent = async () => {
    if (!scentSelection) {
      logic.handleBuyNow()
      return
    }

    const product = logic.product
    if (!product || isBuyingNowWithScent) return

    const variants = product.variants
    const hasVariants = Array.isArray(variants) && variants.length > 0
    const variantToAdd = hasVariants ? logic.matchingVariant : undefined

    if (hasVariants && !variantToAdd) {
      toast({
        title: "Selecciona opciones",
        description: "Elige una variante disponible.",
      })
      return
    }

    const quantity = logic.quantity || 1
    const sellingPlan = logic.selectedPlan || undefined

    setIsBuyingNowWithScent(true)
    try {
      const buyNowItems: CartItem[] = [
        {
          key: `${product.id}:${variantToAdd?.id || ""}:${sellingPlan?.id || ""}`,
          type: "product",
          product,
          variant: variantToAdd,
          sellingPlan,
          quantity,
        },
        {
          key: `${scentSelection.product.id}:${scentSelection.variant?.id || ""}:`,
          type: "product",
          product: scentSelection.product,
          variant: scentSelection.variant,
          quantity: 1,
        },
      ]

      const order = await createCheckoutFromCart(
        buyNowItems,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        checkoutCurrency
      )

      saveCheckoutState({
        order_id: order.order_id,
        checkout_token: order.checkout_token,
        store_id: STORE_ID,
        order: order.order,
      })

      clearCart()

      const totalValue =
        logic.currentPrice * quantity + scentSelection.price

      try {
        sessionStorage.setItem(
          "checkout_cart",
          JSON.stringify({ items: buyNowItems, total: totalValue })
        )
        sessionStorage.setItem("checkout_order", JSON.stringify(order))
        sessionStorage.setItem("checkout_order_id", String(order.order_id))
      } catch (e) {
        console.error("Error saving to sessionStorage:", e)
      }

      trackAddToCart({
        products: [
          tracking.createTrackingProduct({
            id: product.id,
            title: product.title,
            price: logic.currentPrice,
            category: "product",
            variant: variantToAdd,
          }),
          tracking.createTrackingProduct({
            id: scentSelection.product.id,
            title: scentSelection.product.title,
            price: scentSelection.price,
            category: "product",
            variant: scentSelection.variant,
          }),
        ],
        value: totalValue,
        currency: tracking.getCurrencyFromSettings(checkoutCurrency),
        num_items: quantity + 1,
      })

      navigate("/pagar")
    } catch (error) {
      console.error("Error en Comprar ahora con aroma:", error)
      toast({
        title: "Error al procesar",
        description: "No se pudo crear la orden. Intenta de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsBuyingNowWithScent(false)
    }
  }

  /**
   * La esencia elegida, en formato de línea de carrito. Se la pasamos al pago
   * express (Apple Pay / Google Pay) para que la orden del wallet incluya
   * producto principal + aroma, igual que "Comprar ahora".
   */
  const scentExtraItems = useMemo<CartItem[]>(() => {
    if (!scentSelection) return []
    return [
      {
        key: `${scentSelection.product.id}:${scentSelection.variant?.id || ""}:`,
        type: "product",
        product: scentSelection.product,
        variant: scentSelection.variant,
        quantity: 1,
      },
    ]
  }, [scentSelection])

  /**
   * Galería con la foto del color al frente.
   *
   * Varios productos comparten la MISMA primera foto entre todas sus variantes
   * (el packshot genérico), así que al cambiar de color la imagen principal no
   * se movía. Aquí detectamos la primera foto EXCLUSIVA de la variante elegida
   * (la que ninguna otra variante usa) y la ponemos al frente de la galería.
   *
   * Fallback de aromas: el producto de esencias tiene una foto por aroma en el
   * arreglo general del producto pero NINGUNA imagen asignada a sus variantes.
   * Como el flat-lay de cada aroma sí vive en src/lib/scents.ts, lo usamos para
   * subir al frente la foto del aroma elegido.
   */
  const galleryImages = useMemo<string[]>(() => {
    const images: string[] = logic.displayImages || []
    const variants = logic.product?.variants
    const variant = logic.matchingVariant

    if (!variant) return images

    const moveToFront = (url?: string | null) =>
      url && images.includes(url) && images[0] !== url
        ? [url, ...images.filter((img) => img !== url)]
        : null

    // 1) Foto exclusiva de la variante (color de cera, recipiente, etc.)
    const variantImages: string[] = variant.image_urls || []
    if (Array.isArray(variants) && variants.length >= 2 && variantImages.length > 0) {
      const exclusive = variantImages.find(
        (url) =>
          !variants.some(
            (other: any) =>
              other?.id !== variant.id &&
              Array.isArray(other?.image_urls) &&
              other.image_urls.includes(url)
          )
      )
      if (exclusive) {
        if (images[0] === exclusive) return images
        return moveToFront(exclusive) || [exclusive, ...images]
      }
    }

    // 2) Fallback por nombre de aroma
    const scentName =
      (variant as any)?.options?.[SCENT_OPTION_NAME] || (variant as any)?.title
    return moveToFront(getScentImageByVariantName(scentName)) || images
  }, [logic.displayImages, logic.matchingVariant, logic.product])

  const displayImage =
    selectedImage ||
    galleryImages[0] ||
    logic.currentImage ||
    "/placeholder.svg"

  /**
   * Miniatura por valor de opción (aroma, color, etc.).
   *
   * En móvil la foto principal queda arriba y el selector abajo: la clienta
   * tenía que bajar a elegir y volver a subir para ver la foto. Cuando TODOS
   * los valores de una opción tienen imagen propia, el selector se dibuja con
   * miniaturas para que elegir y ver ocurran al mismo tiempo.
   */
  const optionValueImages = useMemo<Record<string, Record<string, string>>>(() => {
    const map: Record<string, Record<string, string>> = {}
    const options: any[] = logic.product?.options || []
    const variants: any[] = logic.product?.variants || []

    for (const opt of options) {
      const values: string[] = opt?.values || []
      if (values.length === 0) continue
      const per: Record<string, string> = {}

      for (const value of values) {
        // 1) Aroma: la foto vive en src/lib/scents.ts
        if (opt.name === SCENT_OPTION_NAME) {
          const scentImg = getScentImageByVariantName(value)
          if (scentImg) {
            per[value] = scentImg
            continue
          }
        }

        // 2) Foto exclusiva de las variantes con ese valor
        const own = variants.filter((v) => v?.options?.[opt.name] === value)
        const others = variants.filter((v) => v?.options?.[opt.name] !== value)
        const candidate = own
          .flatMap((v) => (Array.isArray(v?.image_urls) ? v.image_urls : []))
          .find(
            (url: string) =>
              !others.some(
                (o) =>
                  Array.isArray(o?.image_urls) && o.image_urls.includes(url)
              )
          )
        if (candidate) per[value] = candidate
      }

      if (Object.keys(per).length === values.length) map[opt.name] = per
    }

    return map
  }, [logic.product])

  // Al cambiar de color volvemos a la foto de esa variante (desktop y móvil)
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null)
  const [carouselIndex, setCarouselIndex] = useState(0)

  /**
   * Opción "deslizable": la primera opción cuyos valores TODOS tienen foto.
   * En móvil el carrusel deja de ser una galería pasiva y se convierte en el
   * selector: deslizas, se elige ese valor y debajo aparece su nombre y su
   * descripción. Así elegir y ver ocurren en el mismo gesto.
   */
  const sliderOption = useMemo(() => {
    const options: any[] = logic.product?.options || []
    const opt = options.find(
      (o) => o?.name && optionValueImages[o.name] && (o.values || []).length > 1
    )
    return opt
      ? { name: String(opt.name), values: (opt.values || []) as string[] }
      : null
  }, [logic.product, optionValueImages])

  /**
   * true cuando TODAS las opciones del producto ya se eligen deslizando el
   * carrusel (p. ej. productos con una sola opción tipo Aroma o Color).
   * En ese caso ocultamos el bloque de opciones completo en móvil para no
   * dejar un contenedor vacío que sigue ocupando espacio vertical.
   */
  const allOptionsAreSlider = useMemo(() => {
    const options: any[] = logic.product?.options || []
    return (
      options.length > 0 &&
      !!sliderOption &&
      options.every((o) => o?.name === sliderOption.name)
    )
  }, [logic.product, sliderOption])

  /**
   * Slides del carrusel móvil: primero una por valor de la opción (en orden
   * estable, nunca reordenado al cambiar de variante) y después el resto de
   * fotos del producto, que no cambian la selección.
   */
  const mobileSlides = useMemo(() => {
    type Slide = {
      image: string
      value?: string
      subtitle?: string
      description?: string
    }

    if (!sliderOption) return galleryImages.map((image) => ({ image } as Slide))

    const byValue = optionValueImages[sliderOption.name] || {}
    const used = new Set(sliderOption.values.map((v) => byValue[v]))

    const slides: Slide[] = sliderOption.values.map((value) => {
      const scent = SCENTS.find(
        (s) => s.name.toLowerCase() === value.trim().toLowerCase()
      )
      return {
        image: byValue[value],
        value,
        subtitle: scent?.profile,
        description: scent?.description,
      }
    })

    const base: string[] = Array.isArray((logic.product as any)?.images)
      ? (logic.product as any).images
      : logic.displayImages || []
    for (const img of base) if (img && !used.has(img)) slides.push({ image: img })

    return slides
  }, [sliderOption, optionValueImages, galleryImages, logic.product, logic.displayImages])

  /** Índice del slide que corresponde al valor seleccionado. */
  const activeSlideIndex = useMemo(() => {
    if (!sliderOption) return 0
    const value = logic.selected?.[sliderOption.name]
    const i = mobileSlides.findIndex((s) => s.value === value)
    return i >= 0 ? i : 0
  }, [sliderOption, logic.selected, mobileSlides])

  // Deslizar → seleccionar
  useEffect(() => {
    if (!carouselApi) return
    const onSelect = () => {
      const idx = carouselApi.selectedScrollSnap()
      setCarouselIndex(idx)
      const slide = mobileSlides[idx]
      if (
        sliderOption &&
        slide?.value &&
        logic.selected?.[sliderOption.name] !== slide.value
      ) {
        logic.handleOptionSelect(sliderOption.name, slide.value)
      }
    }
    carouselApi.on("select", onSelect)
    return () => {
      carouselApi.off("select", onSelect)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carouselApi, mobileSlides, sliderOption, logic.selected])

  // Elegir desde otro lado (chips de desktop, ?variante=) → mover el carrusel
  useEffect(() => {
    if (!carouselApi || !sliderOption) return
    if (carouselApi.selectedScrollSnap() !== activeSlideIndex) {
      carouselApi.scrollTo(activeSlideIndex)
    }
  }, [carouselApi, activeSlideIndex, sliderOption])

  useEffect(() => {
    setSelectedImage(null)
    if (!sliderOption) carouselApi?.scrollTo(0)
  }, [logic.matchingVariant, carouselApi, sliderOption])

  /**
   * Preselección de variante desde la URL: /productos/slug?variante=Marfil
   * La usa la sección "Elige tu tono" de la home para que el cliente aterrice
   * en la PDP con el tono que tocó ya elegido, sin un clic extra.
   */
  const { search } = useLocation()
  const appliedVariantRef = useRef<string | null>(null)

  useEffect(() => {
    const wanted = new URLSearchParams(search).get("variante")
    if (!wanted) return
    const options = logic.product?.options
    if (!Array.isArray(options) || options.length === 0) return

    const key = `${logic.product?.id}:${wanted}`
    if (appliedVariantRef.current === key) return

    const target = wanted.trim().toLowerCase()
    for (const opt of options) {
      const value = (opt.values || []).find(
        (v: string) => String(v).trim().toLowerCase() === target
      )
      if (!value) continue
      appliedVariantRef.current = key
      if (logic.selected?.[opt.name] !== value) {
        logic.handleOptionSelect(opt.name, value)
      }
      break
    }
  }, [search, logic.product?.id])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (logic.loading) {
    return (
      <EcommerceTemplate>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <Skeleton className="aspect-[4/5] rounded-lg lg:col-span-7" />
          <div className="space-y-4 lg:col-span-5">
            <Skeleton className="h-3 w-32" />
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-14 w-full" />
            <Skeleton className="h-14 w-full" />
          </div>
        </div>
      </EcommerceTemplate>
    )
  }

  if (logic.notFound) {
    return (
      <EcommerceTemplate>
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold mb-4">Producto no encontrado</h1>
          <p className="text-muted-foreground mb-8">
            El producto que buscas no existe o ha sido eliminado.
          </p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>
        </div>
      </EcommerceTemplate>
    )
  }

  if (!logic.product) return null

  const discountPct =
    logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice
      ? Math.round(
          ((logic.currentCompareAt - logic.currentPrice) /
            logic.currentCompareAt) *
            100
        )
      : 0

  const vendor = logic.product.vendor || logic.product.product_type
  const stickyStats = getReviewStats()
  const StickyRating = stickyStats.count > 0 ? (
    <span className="flex items-center gap-1 shrink-0">
      <Star className="h-3.5 w-3.5 fill-dunaru-champagne text-dunaru-champagne" strokeWidth={1.5} />
      <span className="text-xs font-medium text-foreground/70">
        {stickyStats.average} ({stickyStats.count})
      </span>
    </span>
  ) : null
  const useTierSelector =
    logic.product?.slug && TIER_SELECTOR_SLUGS.includes(logic.product.slug)

  /**
   * Total real que verá la clienta al pagar: precio unitario (ya con el
   * descuento por volumen de la price rule, si existe) x cantidad, más la
   * esencia si eligió aroma. Se pinta en el CTA de "Comprar ahora" en TODOS
   * los productos, incluidos los que usan el selector de tiers.
   */
  const ctaQuantity = logic.quantity || 1
  const ctaUnitPrice =
    calcVolumeDiscount(
      logic.currentPrice || 0,
      ctaQuantity,
      getVolumeRulesForProduct(logic.product.id)
    )?.discountedPrice ?? (logic.currentPrice || 0)
  const ctaTotal = ctaUnitPrice * ctaQuantity + (scentSelection?.price || 0)

  const headline = logic.product?.slug
    ? PDP_HEADLINE[logic.product.slug]
    : undefined
  const benefits = (logic.product?.slug && PDP_BENEFITS[logic.product.slug]) || []
  /** "Qué incluye": componente + beneficio, driven por slug. */
  const productIncludes = getIncludes(logic.product?.slug)

  // Rating compacto reutilizable (móvil arriba del fold)
  const InlineRating =
    stickyStats.count > 0 ? (
      <a href="#resenas" className="flex items-center gap-2 w-fit group">
        <span className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-3.5 w-3.5",
                i < Math.round(stickyStats.average)
                  ? "fill-dunaru-champagne text-dunaru-champagne"
                  : "text-dunaru-champagne/30"
              )}
              strokeWidth={1.5}
            />
          ))}
        </span>
        <span className="text-xs font-medium text-foreground/70 underline-offset-4 group-hover:underline">
          {stickyStats.average} ({stickyStats.count} opiniones)
        </span>
      </a>
    ) : null

  const { storeName, currencyCode } = useSettings()
  /* En móvil, si el carrusel es el selector, el precio vive junto al nombre
     del valor activo (aroma/color) y NO se repite en la columna de info. */
  const priceInSlide = !!sliderOption && mobileSlides.length > 1
  const product = logic.product
  const seoTitle = product.title
  const seoDescription = plainText(product.description, 160) || `Compra ${product.title} en ${storeName}.`
  const seoImage = product.images?.[0]
  const productSchema = productJsonLd(product, {
    storeName,
    currencyCode,
    inStock: !!logic.inStock,
    price: logic.currentPrice,
  })
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Inicio', path: '/' },
    { name: 'Productos', path: '/' },
    { name: product.title, path: `/productos/${product.slug}` },
  ])

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonicalPath={`/productos/${product.slug}`}
        ogImage={seoImage}
        ogType="product"
        storeName={storeName}
        jsonLd={[productSchema, breadcrumbs]}
      />
    <EcommerceTemplate hideFloatingCartOnMobile>
      <div className="max-w-[1400px] mx-auto -mt-4 md:mt-0 pb-24 md:pb-0">
        {/* Breadcrumbs */}
        <nav
          aria-label="Migas de pan"
          className="mb-6 hidden md:flex items-center gap-1.5 text-xs text-muted-foreground"
        >
          <Link to="/" className="hover:text-foreground transition-colors">
            Inicio
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link
            to="/"
            className="hover:text-foreground transition-colors"
          >
            Productos
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground/80 truncate max-w-[280px]">
            {logic.product.title}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12">
          {/* ========== GALLERY (lg:col-span-7, sticky on desktop) ========== */}
          <div className="lg:col-span-7 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)]">
            {/* Móvil/tablet: título + promesa ARRIBA de la foto (arriba del fold) */}
            <div className="lg:hidden mb-4 space-y-2">
              {vendor && (
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  {vendor}
                </p>
              )}
              <div className="flex items-start justify-between gap-3">
                <h1 className="text-2xl sm:text-3xl font-light tracking-tight leading-[1.15]">
                  {logic.product.title}
                </h1>
                {!priceInSlide && (
                  <span className="shrink-0 pt-1 text-xl font-semibold tracking-tight">
                    {logic.formatMoney(logic.currentPrice)}
                  </span>
                )}
              </div>
              {headline && (
                <p className="text-sm text-foreground/75 leading-snug max-w-md">
                  {headline}
                </p>
              )}
              {InlineRating}
            </div>

            {/* Desktop: main image + horizontal thumbnails below */}
            <div className="hidden md:block">
              {/* Main image */}
              <div
                className="relative w-full aspect-[4/5] lg:max-h-[75vh] rounded-lg overflow-hidden bg-muted/30 cursor-zoom-in group"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
              >
                <img
                  src={displayImage}
                  alt={logic.product.title}
                  className={cn(
                    "w-full h-full object-contain transition-transform duration-500 ease-out",
                    isZoomed ? "scale-110" : "scale-100"
                  )}
                />
                {discountPct > 0 && (
                  <Badge className="absolute top-4 left-4 bg-foreground text-background hover:bg-foreground/90">
                    -{discountPct}%
                  </Badge>
                )}
              </div>

              {/* Horizontal thumbnails below main image (scrollable row) */}
              {galleryImages.length > 1 && (
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2 -mb-2 snap-x scroll-smooth thumbnails-scroll">
                  {galleryImages.map((img: string, index: number) => {
                    const isActive = displayImage === img
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(img)}
                        className={cn(
                          "shrink-0 snap-start w-20 h-20 rounded-md overflow-hidden border-2 transition-all bg-muted/30",
                          isActive
                            ? "border-foreground"
                            : "border-transparent hover:border-muted-foreground/40"
                        )}
                        aria-label={`Ver imagen ${index + 1}`}
                      >
                        <img
                          src={img}
                          alt={`${logic.product.title} miniatura ${index + 1}`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-contain"
                        />
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Mobile: carousel — en productos con foto por variante ES el selector */}
            {mobileSlides.length > 1 ? (
              <div className="md:hidden">
                <Carousel
                  className="w-full"
                  opts={{ align: "start" }}
                  setApi={setCarouselApi}
                >
                  <CarouselContent className="-ml-2">
                    {mobileSlides.map((slide, index: number) => (
                      <CarouselItem key={index} className="basis-[95%] pl-2">
                        <div className="relative aspect-[4/5] max-h-[50vh] rounded-lg overflow-hidden bg-muted/30">
                          <img
                            src={slide.image}
                            alt={
                              slide.value
                                ? `${logic.product.title} · ${slide.value}`
                                : `${logic.product.title} ${index + 1}`
                            }
                            loading={index === 0 ? "eager" : "lazy"}
                            decoding="async"
                            className="w-full h-full object-cover"
                          />
                          {discountPct > 0 && index === 0 && (
                            <Badge className="absolute top-3 left-3 bg-foreground text-background">
                              -{discountPct}%
                            </Badge>
                          )}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>

                {/* Puntos de posición */}
                <div className="flex items-center gap-1.5 mt-2.5">
                  {mobileSlides.map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "h-1 rounded-full transition-all duration-300",
                        i === carouselIndex
                          ? "w-5 bg-foreground"
                          : "w-1.5 bg-foreground/25"
                      )}
                    />
                  ))}
                </div>

                {/* Ficha del slide activo: nombre + descripción que cambian al deslizar */}
                {sliderOption &&
                  (() => {
                    const slide = mobileSlides[carouselIndex]
                    if (!slide?.value) return null
                    return (
                      <div className="mt-2.5">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.14em] text-dunaru-oliva-claro font-medium">
                            <Check className="h-3 w-3" strokeWidth={3} />
                            {optionLabel(sliderOption.name, logic.product?.slug)}{" "}
                            elegido
                          </span>
                          <span className="text-[11px] text-muted-foreground">
                            {carouselIndex + 1}/{sliderOption.values.length}
                          </span>
                        </div>
                        <div className="mt-1 flex items-baseline justify-between gap-3">
                          <p className="text-2xl font-light tracking-tight leading-tight">
                            {slide.value}
                          </p>
                          <span className="shrink-0 flex items-baseline gap-2">
                            <span className="text-xl font-semibold tracking-tight">
                              {logic.formatMoney(logic.currentPrice)}
                            </span>
                            {logic.currentCompareAt &&
                              logic.currentCompareAt > logic.currentPrice && (
                                <span className="text-xs text-muted-foreground line-through">
                                  {logic.formatMoney(logic.currentCompareAt)}
                                </span>
                              )}
                          </span>
                        </div>
                        {slide.subtitle && (
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {slide.subtitle}
                          </p>
                        )}
                        {slide.description && (
                          <p className="mt-1.5 text-sm text-foreground/80 leading-snug">
                            {slide.description}
                          </p>
                        )}
                        <p className="mt-1.5 text-[11px] text-muted-foreground">
                          Desliza para ver los demás
                        </p>
                      </div>
                    )
                  })()}
              </div>
            ) : (
              <div className="md:hidden relative aspect-[4/5] max-h-[50vh] rounded-lg overflow-hidden bg-muted/30">
                <img
                  src={displayImage}
                  alt={logic.product.title}
                  className="w-full h-full object-cover"
                />
                {discountPct > 0 && (
                  <Badge className="absolute top-3 left-3 bg-foreground text-background">
                    -{discountPct}%
                  </Badge>
                )}
              </div>
            )}
          </div>

          {/* ========== INFO COLUMN (lg:col-span-5, scrolls while gallery sticks) ========== */}
          <div className="lg:col-span-5 space-y-4 lg:space-y-6">
            {/* Title block */}
            <div className="space-y-3">
              {vendor && (
                <p className="hidden lg:block text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  {vendor}
                </p>
              )}
              {/* El <h1> vive en el bloque de arriba (mobile-first). Aquí solo la versión desktop. */}
              <p className="hidden lg:block text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1]">
                {logic.product.title}
              </p>

              {/* Price block — oculto en móvil si ya va junto al valor activo */}
              <div
                className={cn(
                  "items-baseline gap-3 pt-2",
                  priceInSlide ? "hidden lg:flex" : "flex"
                )}
              >
                <span className="text-3xl font-semibold tracking-tight">
                  {logic.formatMoney(logic.currentPrice)}
                </span>
                {logic.currentCompareAt &&
                  logic.currentCompareAt > logic.currentPrice && (
                    <>
                      <span className="text-base text-muted-foreground line-through">
                        {logic.formatMoney(logic.currentCompareAt)}
                      </span>
                      {discountPct > 0 && (
                        <span className="text-sm font-medium text-primary">
                          Ahorra {discountPct}%
                        </span>
                      )}
                    </>
                  )}
              </div>


              {/* Mini rating — prueba social arriba del fold */}
              {(() => {
                const stats = getReviewStats()
                if (stats.count === 0) return null
                return (
                  <a
                    href="#resenas"
                    className="hidden lg:flex items-center gap-2 pt-1 w-fit group"
                  >
                    <span className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < Math.round(stats.average)
                              ? "fill-dunaru-champagne text-dunaru-champagne"
                              : "text-dunaru-champagne/30"
                          )}
                          strokeWidth={1.5}
                        />
                      ))}
                    </span>
                    <span className="text-sm font-medium text-foreground/80 underline-offset-4 group-hover:underline">
                      {stats.average} ({stats.count} opiniones)
                    </span>
                  </a>
                )
              })()}

              {/* Promo badges — el descuento por volumen ya se explica en el
                  selector "Lleva más y ahorra", así que aquí no lo repetimos. */}
              {logic.product?.id && (
                <div className="flex flex-wrap gap-2 pt-1">
                  <BOGOLabel productId={logic.product.id} />
                </div>
              )}
            </div>

            {/* Beneficios del producto — el argumento de compra, arriba del selector */}
            {benefits.length > 0 && (
              <ul className="space-y-2.5 pb-4 lg:pb-6 border-b border-border/60">
                {benefits.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-foreground/85 leading-snug"
                  >
                    <span className="mt-px h-[18px] w-[18px] rounded-full bg-dunaru-champagne/15 border border-dunaru-champagne/40 flex items-center justify-center shrink-0">
                      <Check
                        className="h-2.5 w-2.5 text-dunaru-champagne"
                        strokeWidth={3.5}
                      />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Selling Plan Selector */}
            {logic.sellingPlans && logic.sellingPlans.length > 0 && (
              <div className="space-y-3">
                <Label className="text-sm font-medium uppercase tracking-wider">
                  Tipo de compra
                </Label>
                <div className="space-y-2">
                  <label
                    className={cn(
                      "flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all",
                      !logic.selectedPlan
                        ? "border-foreground bg-foreground/5"
                        : "border-border hover:border-muted-foreground/40"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="selling-plan"
                        checked={!logic.selectedPlan}
                        onChange={() => logic.setSelectedPlan(null)}
                        className="w-4 h-4 text-primary"
                      />
                      <span className="font-medium">Compra única</span>
                    </div>
                    <span className="font-semibold">
                      {logic.formatMoney(logic.currentPrice)}
                    </span>
                  </label>

                  {logic.sellingPlans.map((plan: SellingPlan) => {
                    const subPrice =
                      logic.subscriptionPrice &&
                      logic.selectedPlan?.id === plan.id
                        ? logic.subscriptionPrice
                        : plan.discount_type === "percentage" &&
                          plan.discount_value
                        ? logic.currentPrice *
                          (1 - plan.discount_value / 100)
                        : plan.discount_type === "fixed" && plan.discount_value
                        ? Math.max(
                            0,
                            logic.currentPrice - plan.discount_value
                          )
                        : logic.currentPrice

                    return (
                      <label
                        key={plan.id}
                        className={cn(
                          "flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all",
                          logic.selectedPlan?.id === plan.id
                            ? "border-foreground bg-foreground/5"
                            : "border-border hover:border-muted-foreground/40"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="selling-plan"
                            checked={logic.selectedPlan?.id === plan.id}
                            onChange={() => logic.setSelectedPlan(plan)}
                            className="w-4 h-4 text-primary"
                          />
                          <div>
                            <span className="font-medium">{plan.name}</span>
                            {plan.discount_value &&
                              plan.discount_value > 0 && (
                                <span className="ml-2 text-xs text-primary font-medium">
                                  -{plan.discount_value}
                                  {plan.discount_type === "percentage"
                                    ? "%"
                                    : ""}
                                </span>
                              )}
                          </div>
                        </div>
                        <span className="font-semibold">
                          {logic.formatMoney(subPrice)}/
                          {intervalLabel(plan.interval, plan.interval_count)}
                        </span>
                      </label>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Product Options */}
            {logic.product.options && logic.product.options.length > 0 && (
              <div
                className={cn(
                  "space-y-5",
                  allOptionsAreSlider && "hidden md:block"
                )}
              >
                {logic.product.options.map((option: any) => (
                  <div
                    key={option.name}
                    className={cn(
                      "space-y-2.5",
                      /* En móvil esta opción ya se elige deslizando el carrusel */
                      sliderOption?.name === option.name && "hidden md:block"
                    )}
                  >
                    <div className="flex items-baseline justify-between">
                      <Label className="text-sm font-medium uppercase tracking-wider">
                        {optionLabel(option.name, logic.product?.slug)}
                      </Label>
                      {logic.selected[option.name] && (
                        <span className="text-sm text-muted-foreground">
                          {logic.selected[option.name]}
                        </span>
                      )}
                    </div>
                    {optionValueImages[option.name] ? (
                      /* Con miniatura: elegir y ver la foto al mismo tiempo */
                      <div className="grid grid-cols-3 gap-2">
                        {option.values.map((value: string) => {
                          const isSelected =
                            logic.selected[option.name] === value
                          const isAvailable = logic.isOptionValueAvailable(
                            option.name,
                            value
                          )
                          const thumb = optionValueImages[option.name][value]

                          return (
                            <button
                              key={value}
                              type="button"
                              disabled={!isAvailable}
                              onClick={() =>
                                logic.handleOptionSelect(option.name, value)
                              }
                              className={cn(
                                "group overflow-hidden rounded-md border text-left transition-all",
                                isSelected
                                  ? "border-dunaru-oliva-claro ring-1 ring-dunaru-oliva-claro"
                                  : "border-border hover:border-dunaru-periwinkle",
                                !isAvailable && "opacity-40 cursor-not-allowed"
                              )}
                            >
                              <span className="block aspect-square overflow-hidden bg-muted/30">
                                <img
                                  src={thumb}
                                  alt={`${option.name} ${value}`}
                                  loading="lazy"
                                  decoding="async"
                                  className="w-full h-full object-cover"
                                />
                              </span>
                              <span
                                className={cn(
                                  "block px-1.5 py-1.5 text-[11px] font-medium leading-tight",
                                  isSelected
                                    ? "bg-dunaru-oliva-claro text-dunaru-marfil"
                                    : "bg-background text-foreground/85",
                                  !isAvailable && "line-through"
                                )}
                              >
                                {value}
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {option.values.map((value: string) => {
                          const isSelected =
                            logic.selected[option.name] === value
                          const isAvailable = logic.isOptionValueAvailable(
                            option.name,
                            value
                          )

                          return (
                            <button
                              key={value}
                              type="button"
                              disabled={!isAvailable}
                              onClick={() =>
                                logic.handleOptionSelect(option.name, value)
                              }
                              className={cn(
                                "min-w-[3rem] px-4 h-11 rounded-md border text-sm font-medium transition-all",
                                isSelected
                                  ? "border-dunaru-oliva-claro bg-dunaru-oliva-claro text-dunaru-marfil"
                                  : "border-border bg-background hover:border-dunaru-periwinkle hover:bg-dunaru-periwinkle/10 hover:text-[hsl(var(--dunaru-periwinkle-deep))]",
                                !isAvailable &&
                                  "opacity-40 cursor-not-allowed line-through"
                              )}
                            >
                              {value}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Aroma opcional — solo en productos con cera perlada */}
            {logic.inStock && supportsScentAddon(logic.product?.slug) && (
              <ProductScentSelector
                productSlug={logic.product.slug}
                formatMoney={logic.formatMoney}
                onSelectionChange={setScentSelection}
              />
            )}

            {useTierSelector ? (
              /* Selector "Lleva más y ahorra" — reemplaza stepper + add-ons */
              <ProductQuantityTiers
                productId={logic.product.id}
                basePrice={logic.currentPrice}
                quantity={logic.quantity}
                onQuantityChange={logic.handleQuantityChange}
                formatMoney={logic.formatMoney}
              />
            ) : (
              <>
                {/* Quantity stepper — compacto, en línea */}
                <div className="flex items-center gap-4">
                  <Label className="text-sm font-medium text-foreground/80">
                    Cantidad
                  </Label>
                  <div className="inline-flex items-center rounded-lg bg-muted/50 border border-border/70 p-0.5">
                    <button
                      type="button"
                      onClick={() =>
                        logic.handleQuantityChange(
                          Math.max(1, logic.quantity - 1)
                        )
                      }
                      disabled={logic.quantity <= 1}
                      className="w-9 h-9 rounded-md flex items-center justify-center text-foreground/70 hover:bg-background hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                      aria-label="Disminuir cantidad"
                    >
                      <Minus className="h-3.5 w-3.5" strokeWidth={2.25} />
                    </button>
                    <span className="w-9 text-center text-sm font-semibold tabular-nums">
                      {logic.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        logic.handleQuantityChange(logic.quantity + 1)
                      }
                      className="w-9 h-9 rounded-md flex items-center justify-center text-foreground/70 hover:bg-background hover:text-foreground transition-colors"
                      aria-label="Aumentar cantidad"
                    >
                      <Plus className="h-3.5 w-3.5" strokeWidth={2.25} />
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Disponibilidad + fecha concreta de entrega */}
            {logic.inStock && <DeliveryEstimate />}

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-col gap-2.5">
              {logic.inStock &&
                logic.canAddToCart &&
                !logic.selectedPlan && (
                  <>
                    <ProductExpressCheckout
                      product={logic.product}
                      variant={logic.matchingVariant}
                      sellingPlan={logic.selectedPlan}
                      quantity={logic.quantity}
                      unitPrice={logic.currentPrice}
                      extraItems={scentExtraItems}
                      onAvailabilityChange={setExpressAvailable}
                    />
                    {expressAvailable && (
                      <div className="flex items-center gap-3 py-1">
                        <Separator className="flex-1" />
                        <span className="text-xs text-muted-foreground uppercase tracking-widest">
                          o
                        </span>
                        <Separator className="flex-1" />
                      </div>
                    )}
                  </>
                )}

              {logic.inStock && (
                <Button
                  onClick={handleBuyNowWithScent}
                  disabled={isBuyingNowWithScent || logic.isBuyingNow}
                  className="w-full h-12 text-[15px] font-semibold rounded-lg shadow-sm"
                  size="lg"
                >
                  {isBuyingNowWithScent || logic.isBuyingNow
                    ? "Procesando..."
                    : "Comprar ahora"}
                  {!isBuyingNowWithScent && !logic.isBuyingNow && (
                    <span className="font-normal opacity-80">
                      {" · "}
                      {logic.formatMoney(ctaTotal)}
                    </span>
                  )}
                </Button>
              )}

              <Button
                onClick={handleAddToCartWithAddOns}
                disabled={!logic.inStock}
                variant={logic.inStock ? "outline" : "default"}
                className="w-full h-11 text-sm font-medium rounded-lg border-border/80 bg-transparent text-foreground/90 hover:border-dunaru-periwinkle hover:bg-dunaru-periwinkle/10 hover:text-[hsl(var(--dunaru-periwinkle-deep))]"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                {logic.inStock
                  ? logic.selectedPlan
                    ? `Suscribirse — ${logic.formatMoney(
                        logic.subscriptionPrice || logic.currentPrice
                      )}/${intervalLabel(
                        logic.selectedPlan.interval,
                        logic.selectedPlan.interval_count
                      )}`
                    : "Agregar al carrito"
                  : "Agotado"}
              </Button>

              {!logic.inStock && (
                <Badge variant="secondary" className="w-fit">
                  Agotado
                </Badge>
              )}

              {/* Badges de confianza — una sola vez, debajo de los botones */}
              {logic.inStock && (
                <>
                  <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                    <Lock className="h-3 w-3 shrink-0" strokeWidth={2} />
                    Pago seguro · Compra protegida
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-3 mt-1 border-t border-border/60">
                    {[
                      { icon: Truck, title: "Envío gratis", sub: "A todo México" },
                      { icon: ShieldCheck, title: "30 días", sub: "De garantía" },
                      { icon: CreditCard, title: "6 meses", sub: "Sin intereses" },
                    ].map(({ icon: Icon, title, sub }) => (
                      <div
                        key={title}
                        className="flex flex-col items-center text-center gap-1.5"
                      >
                        <span className="h-9 w-9 rounded-full bg-dunaru-champagne/12 border border-dunaru-champagne/35 flex items-center justify-center text-dunaru-ambar shrink-0">
                          <Icon className="h-4 w-4" strokeWidth={1.75} />
                        </span>
                        <span className="text-xs font-medium text-foreground/90 leading-none">
                          {title}
                        </span>
                        <span className="text-[11px] text-muted-foreground leading-none">
                          {sub}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Prueba social con fotos reales de clientas */}
                  <div className="pt-2">
                    <PdpSocialProof slug={logic.product?.slug} />
                  </div>
                </>
              )}

              {/* Leyenda WhatsApp — asesoría antes de comprar */}
              <a
                href={`https://wa.me/525531215386?text=${encodeURIComponent(
                  `Hola, tengo una duda sobre ${logic.product.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 pt-1 text-sm text-muted-foreground hover:text-[hsl(var(--dunaru-periwinkle-deep))] transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-dunaru-ambar shrink-0" strokeWidth={1.75} />
                <span>
                  ¿Tienes dudas?{" "}
                  <span className="font-medium text-foreground underline underline-offset-4 decoration-dunaru-champagne group-hover:text-[hsl(var(--dunaru-periwinkle-deep))] group-hover:decoration-[hsl(var(--dunaru-periwinkle-deep))]">
                    Escríbenos por WhatsApp
                  </span>
                </span>
              </a>
            </div>

            {/* Detail accordions */}
            <Accordion
              type="single"
              collapsible
              className="border-t border-border/60"
            >
              {productIncludes && (
                <AccordionItem value="includes">
                  <AccordionTrigger className="text-sm font-medium uppercase tracking-wider">
                    Qué incluye
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3.5">
                      {productIncludes.map((inc, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-dunaru-terracota"
                            strokeWidth={2.5}
                          />
                          <div className="min-w-0">
                            <p className="text-sm font-medium leading-snug text-foreground">
                              {inc.item}
                            </p>
                            <p className="mt-0.5 text-sm leading-snug text-muted-foreground">
                              {inc.benefit}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )}

              {logic.product.description && (
                <AccordionItem value="description">
                  <AccordionTrigger className="text-sm font-medium uppercase tracking-wider">
                    Más detalles
                  </AccordionTrigger>
                  <AccordionContent>
                    <div
                      className="text-muted-foreground prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: logic.product.description,
                      }}
                    />
                  </AccordionContent>
                </AccordionItem>
              )}

              <AccordionItem value="shipping">
                <AccordionTrigger className="text-sm font-medium uppercase tracking-wider">
                  Envío y garantía
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>
                    Envío gratis a todo México, sin mínimo de compra. Tiempo
                    estimado de entrega: 2 a 5 días hábiles.
                  </p>
                  <p>
                    Cuentas con 30 días para solicitar tu devolución sin
                    costo adicional.
                  </p>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>
        </div>

        {/* Editorial story sections (driven by slug) */}
        {logic.product?.slug && (
          <ProductStorySections slug={logic.product.slug} />
        )}
      </div>

      {/* Sticky Add to Cart Bar */}
      {logic.inStock && (
        <div
          className={cn(
            "fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t shadow-lg transition-transform duration-300 ease-out pb-[env(safe-area-inset-bottom)]",
            // Solo aparece cuando el usuario ya scrolleó por encima del CTA inline.
            scrolledPastCta ? "translate-y-0" : "translate-y-full"
          )}
        >
          <div className="max-w-7xl mx-auto px-4 py-3">
            {/* Desktop */}
            <div className="hidden md:flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-12 rounded-md overflow-hidden bg-muted/30 shrink-0">
                  <img
                    src={displayImage}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-medium truncate text-sm">
                    {logic.product.title}
                  </h3>
                  <div className="flex items-center gap-2.5">
                    <span className="font-semibold text-base">
                      {logic.formatMoney(logic.currentPrice)}
                    </span>
                    {StickyRating}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Button onClick={handleBuyNowWithScent} size="default">
                  Comprar ahora
                </Button>
                <Button
                  onClick={handleAddToCartWithAddOns}
                  variant="outline"
                  size="default"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Agregar al carrito
                </Button>
              </div>
            </div>
            {/* Mobile */}
            <div className="md:hidden space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-md overflow-hidden bg-muted/30 shrink-0">
                  <img
                    src={displayImage}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 flex-1 min-w-0">
                  <div className="min-w-0">
                    <h3 className="font-medium text-sm truncate">
                      {logic.product.title}
                    </h3>
                    {StickyRating}
                  </div>
                  <span className="font-semibold shrink-0 text-sm">
                    {logic.formatMoney(logic.currentPrice)}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={handleBuyNowWithScent}
                  disabled={isBuyingNowWithScent || logic.isBuyingNow}
                  size="sm"
                  className="flex-1"
                >
                  {isBuyingNowWithScent || logic.isBuyingNow
                    ? "Procesando..."
                    : "Comprar ahora"}
                </Button>
                <Button
                  onClick={handleAddToCartWithAddOns}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  <ShoppingCart className="mr-1 h-3.5 w-3.5" />
                  Agregar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </EcommerceTemplate>
    </>
  )
}