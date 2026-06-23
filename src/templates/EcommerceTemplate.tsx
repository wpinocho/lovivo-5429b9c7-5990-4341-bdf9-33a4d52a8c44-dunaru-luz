import { ReactNode, useState, useEffect } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Package, MessageCircle } from 'lucide-react'
import { useCartUISafe } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'
import { useCollections } from '@/hooks/useCollections'
import { ScrollLink } from '@/components/ScrollLink'

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
  hideFloatingCartOnMobile?: boolean
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default',
  hideFloatingCartOnMobile = false
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

  // Top bar
  const topBar = (
    <div className="bg-dunaru-carbon text-dunaru-marfil text-xs font-body font-medium py-2 px-4 text-center overflow-hidden">
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <span>Envío gratis desde $899</span>
        <span className="opacity-40">·</span>
        <span>Hasta 6 meses sin intereses con Mercado Pago</span>
        <span className="opacity-40 hidden sm:inline">·</span>
        <span className="hidden sm:inline">Entregas en 2–5 días hábiles</span>
      </div>
    </div>
  )

  const header = (
    <div className={headerClassName}>
      {topBar}
      <div className={`transition-all duration-300 ${scrolled ? 'py-3' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <BrandLogoLeft />

            {/* Navigation — desktop */}
            <nav className="hidden md:flex items-center gap-8 font-body text-sm font-medium">
              <ScrollLink
                to="/#como-funciona"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Cómo funciona
              </ScrollLink>
              <ScrollLink
                to="/#tonos"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Tonos
              </ScrollLink>
              <ScrollLink
                to="/#faq"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Preguntas
              </ScrollLink>
              <ScrollLink
                to="/#comprar"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Comprar
              </ScrollLink>
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
              {[
                { to: '/#como-funciona', label: 'Cómo funciona' },
                { to: '/#tonos', label: 'Elige tu tono' },
                { to: '/#faq', label: 'Preguntas frecuentes' },
                { to: '/#comprar', label: 'Comprar ahora' },
              ].map(({ to, label }) => (
                <ScrollLink
                  key={to}
                  to={to}
                  className="text-foreground/70 hover:text-foreground py-1 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </ScrollLink>
              ))}
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
          <span>Pagos seguros con</span>
          <span className="font-semibold">Mercado Pago</span>
          <span className="opacity-40">·</span>
          <span>Hasta 6 meses sin intereses</span>
          <span className="opacity-40">·</span>
          <span>VISA · Mastercard · OXXO · Transferencia</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-display text-2xl tracking-wide">dunaru</span>
            <p className="mt-3 text-sm text-dunaru-marfil/60 leading-relaxed font-body">
              Luz de diseño que cambia contigo. Velas perladas recargables, hechas para el hogar mexicano contemporáneo.
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
                { to: '/products/perlas-originales-500-g', label: 'Perlas Originales' },
                { to: '/products/kit-vaso-de-vidrio', label: 'Kit Vaso de Vidrio' },
                { to: '/products/kit-vaso-de-concreto', label: 'Kit de Concreto' },
                { to: '/products/reserva-1-kg', label: 'Reserva 1 kg' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} className="block text-dunaru-marfil/70 hover:text-dunaru-marfil transition-colors py-0.5">
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
                { to: '/#faq', label: 'Preguntas frecuentes' },
                { to: '/#como-funciona', label: 'Cómo funciona' },
                { to: '/terminos-y-condiciones', label: 'Envíos y cambios' },
                { to: '/aviso-de-privacidad', label: 'Aviso de privacidad' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} className="block text-dunaru-marfil/70 hover:text-dunaru-marfil transition-colors py-0.5">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-body font-semibold text-xs uppercase tracking-widest text-dunaru-marfil/50 mb-4">Contacto</h4>
            <a
              href="https://wa.me/5215500000000?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20dunaru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-body text-dunaru-marfil/70 hover:text-dunaru-marfil transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <p className="mt-2 text-xs text-dunaru-marfil/40 font-body">Lun–Vie 9–18 h (Tiempo del Centro)</p>
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
      >
        {children}
      </PageTemplate>
      {showCart && <FloatingCart hideOnMobile={hideFloatingCartOnMobile} />}
    </>
  )
}