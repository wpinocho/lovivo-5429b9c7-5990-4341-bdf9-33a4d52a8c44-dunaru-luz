import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Flame, RotateCcw, Layers, Clock, ChevronDown, MessageCircle, Check } from 'lucide-react';
import { FloatingCart } from '@/components/FloatingCart';
import { DunaruNewsletterForm } from '@/components/DunaruNewsletterForm';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { useState } from 'react';

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

// ─── Static product data matching real slugs ───────────────────────────────
const PRODUCTS = [
  {
    slug: 'perlas-originales-500-g',
    title: 'Perlas Originales 500 g',
    subtitle: 'Para el recipiente que ya tienes',
    price: '$599',
    shipping: '+$99 envío',
    badge: null,
    img: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5429b9c7-5990-4341-bdf9-33a4d52a8c44/perlas-originales-marfil.webp',
  },
  {
    slug: 'kit-vaso-de-vidrio',
    title: 'Kit Vaso de Vidrio',
    subtitle: 'Todo listo para encender hoy',
    price: '$899',
    shipping: 'Envío gratis',
    badge: 'Más elegido',
    img: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5429b9c7-5990-4341-bdf9-33a4d52a8c44/kit-vaso-vidrio.webp',
  },
  {
    slug: 'kit-vaso-de-concreto',
    title: 'Kit Vaso de Concreto',
    subtitle: 'El regalo con más presencia',
    price: '$1,099',
    shipping: 'Envío gratis',
    badge: 'Premio regalo',
    img: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5429b9c7-5990-4341-bdf9-33a4d52a8c44/kit-concreto.webp',
  },
  {
    slug: 'reserva-1-kg',
    title: 'Reserva 1 kg',
    subtitle: 'El doble de duración',
    price: '$999',
    shipping: 'Envío gratis',
    badge: null,
    img: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5429b9c7-5990-4341-bdf9-33a4d52a8c44/reserva-1kg.webp',
  },
];

const BUNDLES = [
  {
    slug: 'd-o-de-tonos',
    title: 'Dúo de Tonos',
    subtitle: '2 bolsas 500 g · 60 mechas',
    price: '$1,099',
    compare: '$1,398',
    badge: 'Más elegido',
    badgeClass: 'badge-mas-elegido',
    img: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5429b9c7-5990-4341-bdf9-33a4d52a8c44/duo-tonos.webp',
  },
  {
    slug: 'tr-o-de-tonos',
    title: 'Trío de Tonos',
    subtitle: '3 bolsas 500 g · 60 mechas',
    price: '$1,499',
    compare: '$1,797',
    badge: 'Mejor valor',
    badgeClass: 'badge-mejor-valor',
    img: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5429b9c7-5990-4341-bdf9-33a4d52a8c44/trio-tonos.webp',
  },
];

const STEPS = [
  {
    n: '01',
    title: 'Vierte',
    desc: 'Llena tu recipiente favorito con las perlas. Cualquier vaso, bowl o copa de mínimo 10 cm de diámetro.',
    icon: '🫙',
  },
  {
    n: '02',
    title: 'Inserta',
    desc: 'Coloca una mecha de algodón en el centro. Sin instrumentos, sin temperatura, sin riesgo.',
    icon: '🕯️',
  },
  {
    n: '03',
    title: 'Enciende',
    desc: 'Prende la mecha. Tu vela ya está lista. Hasta 120 horas de luz con una bolsa de 500 g.',
    icon: '🔥',
  },
  {
    n: '04',
    title: 'Renueva',
    desc: 'Cuando la mecha se consume, agrega una nueva. Las perlas se reutilizan. Tu recipiente también.',
    icon: '♻️',
  },
];

const TONOS = [
  {
    name: 'Marfil',
    hex: '#F2EBDD',
    slug: 'perlas-originales-500-g',
    mood: 'Luz de mañana. Mesa despejada. Inicio de día.',
    scene: 'Mesa de madera clara con vaso de vidrio y perlas blancas encendidas, luz solar matutina, plantas verdes de fondo',
    img: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5429b9c7-5990-4341-bdf9-33a4d52a8c44/kit-vaso-vidrio.webp',
  },
  {
    name: 'Champagne',
    hex: '#E2CCA3',
    slug: 'perlas-originales-500-g',
    mood: 'Cena entre amigos. Mesa de madera y vino.',
    scene: 'Mesa de cena con mantel de lino, vela champagne encendida, copas de vino, luz cálida de tarde',
    img: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5429b9c7-5990-4341-bdf9-33a4d52a8c44/reserva-1kg.webp',
  },
  {
    name: 'Ónix',
    hex: '#1F1D1B',
    slug: 'kit-vaso-de-concreto',
    mood: 'Noche en terraza. Contraste y presencia.',
    scene: 'Bowl de concreto con perlas ónix negras encendidas en terraza nocturna con luces de ciudad de fondo',
    img: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5429b9c7-5990-4341-bdf9-33a4d52a8c44/kit-concreto.webp',
  },
];

const FAQ_ITEMS = [
  { q: '¿Qué incluye cada bolsa?', a: '500 g de perlas de cera perlada + 30 mechas de algodón. Los kits incluyen además el recipiente (vidrio o concreto).' },
  { q: '¿Qué recipiente puedo usar?', a: 'Cualquier recipiente resistente al calor de mínimo 10 cm de diámetro y 5 cm de alto. Vasos, bowls, copas, jarras — lo que ya tienes en casa.' },
  { q: '¿Cuántas mechas incluye?', a: '30 mechas por bolsa de 500 g. Los bundles Dúo y Trío incluyen 60 mechas.' },
  { q: '¿Cuánto dura una bolsa?', a: 'Aproximadamente 120 horas de luz por bolsa de 500 g, dependiendo del tamaño de tu recipiente.' },
  { q: '¿Qué pasa al encenderla?', a: 'La mecha se consume lentamente. Las perlas no se "derriten" como una vela tradicional — solo rodean la llama. Al terminar la mecha, agregas una nueva.' },
  { q: '¿Es seguro?', a: 'Sí. La vela se apaga si se vuelca porque la mecha pierde contacto. Úsala siempre sobre una superficie plana y estable, nunca sin supervisión cerca de telas o materiales inflamables.' },
  { q: '¿Cómo llega?', a: 'Enviamos desde CDMX con paquetería estándar. Entregas en 2–5 días hábiles en todo México. Envío gratis en pedidos desde $899.' },
  { q: '¿Puedo pagar a meses?', a: 'Sí. Aceptamos hasta 6 meses sin intereses con Mercado Pago (VISA, Mastercard participantes). El banco puede aplicar condiciones propias.' },
];

// ─── FAQ Accordion ───────────────────────────────────────────────────────────
const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left font-body font-medium text-foreground hover:text-dunaru-champagne transition-colors"
      >
        <span>{q}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 mt-0.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <p className="pb-5 text-sm font-body text-foreground/65 leading-relaxed pr-8">
          {a}
        </p>
      )}
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
export const IndexUI = ({ logic }: IndexUIProps) => {
  return (
    <EcommerceTemplate showCart={true} layout="full-width">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-dunaru-carbon">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/hero-dunaru.webp"
            alt="Mesa con vela perlada dunaru encendida en interior mexicano contemporáneo"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-dunaru-carbon/75 via-dunaru-carbon/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-dunaru-carbon/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-xl">
            <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-dunaru-champagne mb-5 animate-fade-up">
              Velas perladas recargables
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-dunaru-marfil mb-6 animate-fade-up delay-100">
              Crea una vela nueva en el recipiente que ya amas.
            </h1>
            <p className="font-body text-base sm:text-lg text-dunaru-marfil/75 mb-8 leading-relaxed animate-fade-up delay-200">
              Sin derretir, sin riesgo, sin comprar una vela nueva. Solo vierte las perlas, inserta una mecha y enciende.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up delay-300">
              <Link to="/productos/kit-vaso-de-vidrio">
                <Button size="lg" className="w-full sm:w-auto bg-dunaru-marfil text-dunaru-onix hover:bg-dunaru-arena font-body font-semibold px-8 py-4 text-base rounded-sm shadow-none border-0 transition-colors">
                  Comprar ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="#como-funciona">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-dunaru-marfil/40 text-dunaru-marfil hover:bg-dunaru-marfil/10 font-body font-medium px-8 py-4 text-base rounded-sm bg-transparent transition-colors">
                  Ver cómo funciona
                </Button>
              </a>
            </div>

            {/* Social proof mini */}
            <div className="mt-8 flex items-center gap-3 animate-fade-up delay-400">
              <span className="badge-msi">Hasta 6 MSI</span>
              <span className="font-body text-xs text-dunaru-marfil/50">· Envío gratis desde $899</span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-50">
          <ChevronDown className="h-5 w-5 text-dunaru-marfil" />
        </div>
      </section>

      {/* ── BENEFICIOS ────────────────────────────────────────────────────── */}
      <section className="bg-dunaru-arena border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { icon: <Clock className="h-4 w-4" />, text: 'Hasta 120 h de luz' },
              { icon: <Flame className="h-4 w-4" />, text: '30 mechas incluidas' },
              { icon: <Layers className="h-4 w-4" />, text: 'En cualquier recipiente' },
              { icon: <RotateCcw className="h-4 w-4" />, text: 'Renueva cuando quieras' },
            ].map(({ icon, text }, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center gap-2 py-5 px-4 sm:px-6 text-center sm:text-left">
                <span className="text-dunaru-champagne shrink-0">{icon}</span>
                <span className="font-body text-xs sm:text-sm font-medium text-foreground/80">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ─────────────────────────────────────────────────── */}
      <section id="como-funciona" className="section-pad bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-dunaru-champagne mb-3">
              Simple desde el primer día
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground">Cómo funciona</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {STEPS.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-dunaru-arena flex items-center justify-center text-2xl mb-4 group-hover:scale-105 transition-transform duration-200">
                  {step.icon}
                </div>
                <span className="font-body text-xs font-bold tracking-widest text-dunaru-champagne mb-1">{step.n}</span>
                <h3 className="font-display text-xl text-foreground mb-2">{step.title}</h3>
                <p className="font-body text-sm text-foreground/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/productos/perlas-originales-500-g">
              <Button variant="outline" className="font-body font-medium rounded-sm border-foreground/30 hover:border-foreground text-foreground transition-colors">
                Ver el producto completo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTENCIÓN DE COMPRA ───────────────────────────────────────────── */}
      <section id="comprar" className="section-pad-sm bg-dunaru-arena">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl text-foreground">¿Cómo quieres empezar?</h2>
          </div>

          {/* Two main paths */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {/* Path A */}
            <Link to="/productos/perlas-originales-500-g" className="group block">
              <div className="relative overflow-hidden rounded-sm bg-background border border-border hover:border-dunaru-champagne/50 transition-all duration-300 hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5429b9c7-5990-4341-bdf9-33a4d52a8c44/perlas-originales-marfil.webp"
                    alt="Perlas Originales dunaru"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="font-body text-xs font-semibold tracking-widest text-dunaru-champagne uppercase mb-1">Ya tengo un recipiente que amo</p>
                  <h3 className="font-display text-2xl text-foreground mb-2">Perlas Originales 500 g</h3>
                  <p className="font-body text-sm text-foreground/60 mb-4">Solo las perlas y las mechas. Pon la vela en tu vaso favorito hoy.</p>
                  <div className="flex items-center justify-between">
                    <span className="font-body font-bold text-xl text-foreground">$599 <span className="text-sm font-normal text-foreground/50">+$99 envío</span></span>
                    <span className="font-body text-sm text-dunaru-champagne font-medium flex items-center gap-1">Ver producto <ArrowRight className="h-3.5 w-3.5" /></span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Path B */}
            <div className="flex flex-col gap-5">
              <Link to="/productos/kit-vaso-de-vidrio" className="group block flex-1">
                <div className="relative overflow-hidden rounded-sm bg-dunaru-onix border border-dunaru-onix hover:border-dunaru-champagne/50 transition-all duration-300 hover:shadow-lg h-full">
                  <div className="absolute top-4 left-4 badge-mas-elegido z-10">Más elegido</div>
                  <div className="grid grid-cols-2 h-full">
                    <div className="overflow-hidden">
                      <img
                        src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5429b9c7-5990-4341-bdf9-33a4d52a8c44/kit-vaso-vidrio.webp"
                        alt="Kit Vaso de Vidrio dunaru"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[160px]"
                      />
                    </div>
                    <div className="p-5 flex flex-col justify-center">
                      <p className="font-body text-xs font-semibold tracking-widest text-dunaru-champagne uppercase mb-1">Quiero algo listo</p>
                      <h3 className="font-display text-xl text-dunaru-marfil mb-2">Kit Vaso de Vidrio</h3>
                      <p className="font-body text-xs text-dunaru-marfil/60 mb-3">Vaso + perlas + mechas. Listo para usar o regalar.</p>
                      <span className="font-body font-bold text-lg text-dunaru-marfil">$899 <span className="text-xs font-normal text-dunaru-marfil/50">envío gratis</span></span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/productos/kit-vaso-de-concreto" className="group block">
                <div className="relative overflow-hidden rounded-sm bg-background border border-border hover:border-dunaru-champagne/50 transition-all duration-300 hover:shadow-lg">
                  <div className="grid grid-cols-2">
                    <div className="overflow-hidden">
                      <img
                        src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5429b9c7-5990-4341-bdf9-33a4d52a8c44/kit-concreto.webp"
                        alt="Kit Concreto dunaru"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[140px]"
                      />
                    </div>
                    <div className="p-5 flex flex-col justify-center">
                      <p className="font-body text-xs font-semibold tracking-widest text-dunaru-champagne uppercase mb-1">Para regalar</p>
                      <h3 className="font-display text-xl text-foreground mb-2">Kit de Concreto</h3>
                      <p className="font-body text-xs text-foreground/60 mb-3">Bowl de diseño + perlas. Llega listo para regalar.</p>
                      <span className="font-body font-bold text-lg text-foreground">$1,099 <span className="text-xs font-normal text-foreground/50">envío gratis</span></span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Volume path */}
          <div className="mt-4 p-5 bg-background/60 rounded-sm border border-border">
            <p className="font-body text-xs font-semibold tracking-widest text-dunaru-champagne uppercase mb-3 text-center">Quiero decorar más o llenar varios recipientes</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { slug: 'reserva-1-kg', label: 'Reserva 1 kg', price: '$999' },
                { slug: 'd-o-de-tonos', label: 'Dúo de Tonos', price: '$1,099', badge: 'Más elegido' },
                { slug: 'tr-o-de-tonos', label: 'Trío de Tonos', price: '$1,499', badge: 'Mejor valor' },
              ].map(({ slug, label, price, badge }) => (
                <Link
                  key={slug}
                  to={`/productos/${slug}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-sm border border-border hover:border-dunaru-champagne/50 bg-background hover:bg-dunaru-arena/50 transition-all font-body text-sm"
                >
                  <span className="font-medium text-foreground">{label}</span>
                  <span className="font-bold text-foreground">{price}</span>
                  {badge && <span className={badge === 'Mejor valor' ? 'badge-mejor-valor' : 'badge-mas-elegido'}>{badge}</span>}
                  <ArrowRight className="h-3.5 w-3.5 text-foreground/40" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ELIGE TU TONO ─────────────────────────────────────────────────── */}
      <section id="tonos" className="section-pad bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-dunaru-champagne mb-3">Tres tonos, tres ambientes</p>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground">Elige tu tono</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TONOS.map((tono) => (
              <Link key={tono.name} to={`/productos/${tono.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-sm">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={tono.img}
                      alt={`Dunaru tono ${tono.name}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="w-4 h-4 rounded-full border border-white/30 shrink-0"
                        style={{ backgroundColor: tono.hex }}
                      />
                      <span className="font-display text-xl text-white">{tono.name}</span>
                    </div>
                    <p className="font-body text-xs text-white/70">{tono.mood}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ NO ES UNA VELA NORMAL ────────────────────────────────── */}
      <section className="section-pad-sm bg-dunaru-onix">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl text-dunaru-marfil">Por qué no es una vela normal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'No tiras tus recipientes favoritos',
                desc: 'Pones las perlas en el vaso que ya tienes y amas. Sin comprar una nueva pieza de decoración que no encaja.',
              },
              {
                title: 'Se renueva, no se reemplaza',
                desc: 'Cuando se consume la mecha, agregas una nueva. Las perlas duran. Tu inversión también.',
              },
              {
                title: 'Cambia según tu espacio o tu momento',
                desc: 'Marfil para el día, Champagne para la cena, Ónix para la noche. El mismo recipiente, otra emoción.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-dunaru-champagne/20 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-dunaru-champagne" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-dunaru-marfil mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-dunaru-marfil/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUNDLES ───────────────────────────────────────────────────────── */}
      <section className="section-pad bg-dunaru-arena">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-dunaru-champagne mb-3">Más colores, más valor</p>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground">Combina tonos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {BUNDLES.map((bundle) => (
              <Link key={bundle.slug} to={`/productos/${bundle.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-sm bg-background border border-border hover:border-dunaru-champagne/50 hover:shadow-lg transition-all duration-300">
                  <div className="absolute top-4 left-4 z-10">
                    <span className={bundle.badgeClass}>{bundle.badge}</span>
                  </div>
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={bundle.img}
                      alt={bundle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-2xl text-foreground mb-0.5">{bundle.title}</h3>
                    <p className="font-body text-sm text-foreground/55 mb-3">{bundle.subtitle}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="font-body font-bold text-xl text-foreground">{bundle.price}</span>
                        <span className="font-body text-sm text-foreground/40 line-through">{bundle.compare}</span>
                      </div>
                      <span className="font-body text-xs text-dunaru-marfil bg-dunaru-onix rounded-sm px-2 py-1">Envío gratis</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/productos/reserva-1-kg">
              <Button variant="outline" className="font-body font-medium rounded-sm border-foreground/30 hover:border-foreground text-foreground transition-colors">
                Ver también: Reserva 1 kg — $999
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section id="faq" className="section-pad bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-foreground">Preguntas frecuentes</h2>
          </div>
          <div className="divide-y divide-border border-t border-border">
            {FAQ_ITEMS.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CIERRE — NEWSLETTER + WHATSAPP ───────────────────────────────── */}
      <section className="section-pad-sm bg-dunaru-carbon">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl text-dunaru-marfil mb-3">Algo nuevo viene.</h2>
          <p className="font-body text-sm text-dunaru-marfil/60 mb-8 leading-relaxed">
            Nuevos tonos, ediciones especiales y consejos para sacarle más a tu vela. Sé la primera en saber.
          </p>
          <DunaruNewsletterForm />

          <div className="divider-warm opacity-20 my-6" />

          <a
            href="https://wa.me/5215500000000?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20dunaru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm text-dunaru-marfil/60 hover:text-dunaru-marfil transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            ¿Tienes dudas? Escríbenos por WhatsApp
          </a>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};