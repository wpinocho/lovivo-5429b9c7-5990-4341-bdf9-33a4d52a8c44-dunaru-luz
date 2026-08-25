import { ReactNode, useState, useEffect } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Package, MessageCircle, ChevronDown, Truck, Heart } from 'lucide-react'
import { useCartUISafe } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'
import { useCollections } from '@/hooks/useCollections'
import { ScrollLink } from '@/components/ScrollLink'

const PRODUCT_CATEGORIES = [
  { to: '/categorias/todos', label: 'Todos los productos' },
  { to: '/categorias/kits', label: 'Kits' },
  { to: '/categorias/accesorios', label: 'Accesorios' },
  { to: '/categorias/recipientes', label: 'Recipientes' },
]


interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
  hideFloatingCartOnMobile?: boolean
  /** El header flota encima del hero (sin franja blanca entre menú e imagen) */
  headerOverlay?: boolean
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default',
  hideFloatingCartOnMobile = false,
  headerOverlay = false
}: EcommerceTemplateProps) => {
  const cartUI = useCartUISafe()
  const openCart = cartUI?.openCart ?? (() => {})
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Top bar fijo: envío gratis (objeción #1) + prueba social
  const topBar = (
    <div className="bg-dunaru-carbon text-dunaru-marfil font-body py-2 px-3">
      <div className="flex items-center justify-center gap-2.5 sm:gap-5 text-[11px] sm:text-xs font-medium">
        <span className="flex items-center gap-1.5 whitespace-nowrap">
          <Truck className="h-3.5 w-3.5 text-dunaru-champagne shrink-0" strokeWidth={1.75} />
          Envío gratis a todo México
        </span>
        <span className="h-3 w-px bg-dunaru-marfil/25 shrink-0" />
        <span className="flex items-center gap-1.5 whitespace-nowrap">
          <Heart className="h-3 w-3 text-dunaru-ambar fill-dunaru-ambar shrink-0" />
          <span>
            <span className="font-semibold">+200 clientes</span> felices
          </span>
        </span>
      </div>
    </div>
  )

  const header = (
    <div className={headerClassName}>
      {topBar}
      <div
        className={`transition-all duration-300 ${scrolled ? 'py-3' : 'py-4'} ${
          headerOverlay
            ? scrolled || mobileMenuOpen
              ? 'bg-background/95 backdrop-blur border-b border-border'
              : 'bg-background/55 backdrop-blur-md'
            : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <BrandLogoLeft />

            {/* Navigation — desktop */}
            <nav className="hidden md:flex items-center gap-8 font-body text-sm font-medium">
              {/* Productos — dropdown de categorías */}
              <div className="relative group">
                <button
                  type="button"
                  className="nav-link flex items-center gap-1 text-foreground/60"
                >
                  Productos
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 focus-within:opacity-100 focus-within:visible transition-all duration-200 z-50">
                  <div className="min-w-[200px] border border-border bg-background shadow-lg p-2">
                    {PRODUCT_CATEGORIES.map(({ to, label }) => (
                      <Link
                        key={to}
                        to={to}
                        className="nav-item block px-3 py-2 text-sm text-foreground/70"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <ScrollLink
                to="/#como-funciona"
                className="nav-link text-foreground/60"
              >
                Cómo funciona
              </ScrollLink>
              <ScrollLink
                to="/#tonos"
                className="nav-link text-foreground/60"
              >
                Tonos
              </ScrollLink>
              <ScrollLink
                to="/#faq"
                className="nav-link text-foreground/60"
              >
                Preguntas
              </ScrollLink>
              <ScrollLink
                to="/#comprar"
                className="nav-link text-foreground/60"
              >
                Comprar
              </ScrollLink>
              <Link
                to="/orders/track"
                className="nav-link text-foreground/60"
              >
                Rastrear pedido
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <ProfileMenu />
              {showCart && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={openCart}
                  className="relative hover:bg-muted"
                  aria-label="Ver carrito"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-dunaru-champagne text-dunaru-carbon text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center font-body">
                      {totalItems > 9 ? '9+' : totalItems}
                    </span>
                  )}
                </Button>
              )}
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-muted"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menú"
              >
                <div className="flex flex-col gap-1 w-5">
                  <span className={`h-0.5 bg-foreground transition-all duration-200 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                  <span className={`h-0.5 bg-foreground transition-all duration-200 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`h-0.5 bg-foreground transition-all duration-200 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                </div>
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden pt-4 pb-2 border-t border-border mt-3 flex flex-col gap-3 font-body text-sm font-medium animate-fade-in">
              <div className="pb-1">
                <span className="block text-xs uppercase tracking-widest text-foreground/40 mb-2">Productos</span>
                <div className="flex flex-col gap-2 pl-1">
                  {PRODUCT_CATEGORIES.map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      className="nav-link-mobile text-foreground/70"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
              {[
                { to: '/#como-funciona', label: 'Cómo funciona' },
                { to: '/#tonos', label: 'Elige tu tono' },
                { to: '/#faq', label: 'Preguntas frecuentes' },
                { to: '/#comprar', label: 'Comprar ahora' },
              ].map(({ to, label }) => (
                <ScrollLink
                  key={to}
                  to={to}
                  className="nav-link-mobile text-foreground/70 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </ScrollLink>
              ))}
              <Link
                to="/orders/track"
                className="nav-link-mobile text-foreground/70 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Rastrear pedido
              </Link>
            </nav>
          )}

          {pageTitle && (
            <div className="mt-6">
              <h1 className="font-display text-3xl text-foreground">{pageTitle}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-dunaru-carbon text-dunaru-marfil ${footerClassName ?? ''}`}>
      {/* MSI bar */}
      <div className="border-b border-white/10 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 text-sm font-body opacity-80">
          <span>Pagos 100% seguros</span>
          <span className="opacity-40">·</span>
          <span>Hasta 6 meses sin intereses</span>
          <span className="opacity-40">·</span>
          <span>VISA · Mastercard · AMEX</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-display text-2xl tracking-wide">dunaru</span>
            <p className="mt-3 text-sm text-dunaru-marfil/60 leading-relaxed font-body">
              Luz de diseño que cambia contigo. Velas perladas rellenables, hechas para el hogar mexicano contemporáneo.
            </p>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>

          {/* Comprar */}
          <div>
            <h4 className="font-body font-semibold text-xs uppercase tracking-widest text-dunaru-marfil/50 mb-4">Comprar</h4>
            <div className="space-y-2 text-sm font-body">
              {[
                { to: '/productos/kit-vaso-de-vidrio', label: 'Vela · Vaso de Vidrio' },
                { to: '/productos/kit-vaso-de-concreto', label: 'Vela · Bowl de Cerámica' },
                { to: '/productos/perlas-originales-500-g', label: 'Cera Duna · 500 g' },
                { to: '/productos/reserva-1-kg', label: 'Cera Duna · 1 kg' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} className="nav-link-dark block text-dunaru-marfil/70 py-0.5">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Ayuda */}
          <div>
            <h4 className="font-body font-semibold text-xs uppercase tracking-widest text-dunaru-marfil/50 mb-4">Ayuda</h4>
            <div className="space-y-2 text-sm font-body">
              {[
                { to: '/orders/track', label: 'Rastrear pedido' },
                { to: '/#faq', label: 'Preguntas frecuentes' },
                { to: '/#como-funciona', label: 'Cómo funciona' },
                { to: '/devoluciones', label: 'Garantía y devoluciones' },
                { to: '/terminos-y-condiciones', label: 'Términos y condiciones' },
                { to: '/aviso-de-privacidad', label: 'Aviso de privacidad' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} className="nav-link-dark block text-dunaru-marfil/70 py-0.5">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-body font-semibold text-xs uppercase tracking-widest text-dunaru-marfil/50 mb-4">Contacto</h4>
            <a
              href="https://wa.me/525531215386?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20dunaru"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-body text-dunaru-marfil/80 hover:text-dunaru-marfil transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-dunaru-champagne" strokeWidth={1.75} />
              <span>
                ¿Tienes dudas?{" "}
                <span className="font-medium text-dunaru-marfil underline underline-offset-4 decoration-dunaru-champagne">
                  Escríbenos por WhatsApp
                </span>
              </span>
            </a>
            <p className="mt-2 text-xs text-dunaru-marfil/40 font-body">+52 55 3121 5386 · Lun–Vie 9–18 h</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-body text-dunaru-marfil/40">
          <p>© 2025 dunaru. Todos los derechos reservados.</p>
          <p>Marca mexicana · Ciudad de México</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate
        header={header}
        footer={footer}
        className={className}
        layout={layout}
        headerOverlay={headerOverlay}
      >
        {children}
      </PageTemplate>
      {showCart && <FloatingCart hideOnMobile={hideFloatingCartOnMobile} />}
    </>
  )
}