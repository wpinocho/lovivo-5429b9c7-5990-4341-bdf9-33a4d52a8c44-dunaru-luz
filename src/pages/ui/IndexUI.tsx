import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Flame, RotateCcw, Layers, Clock, ChevronDown, MessageCircle, Check } from 'lucide-react';
import { FloatingCart } from '@/components/FloatingCart';
import { DunaruNewsletterForm } from '@/components/DunaruNewsletterForm';
import { CasaRealSection } from '@/components/CasaRealSection';
import { BrandStorySection } from '@/components/BrandStorySection';
import { Reviews } from '@/components/Reviews';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { formatMoney } from '@/lib/money';
import { useMemo, useState } from 'react';

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

// ─── Catálogo ───────────────────────────────────────────────────────────────
// Títulos, precios y precios tachados vienen SIEMPRE de la base de datos
// (Dashboard). Los valores de abajo solo se usan como respaldo mientras carga.
const STORE_CURRENCY = 'MXN';

interface CatalogEntry {
  slug: string;
  title: string;
  price: string;
  compare: string | null;
  img: string;
}

const IMG = 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/products/';

const CATALOG_FALLBACK: Record<string, { title: string; price: number; compare?: number; img: string }> = {
  'perlas-originales-500-g': { title: 'Recarga para vela rellenable — 500 g + 30 mechas', price: 499, compare: 599, img: `${IMG}x3azemqdof.webp` },
  'reserva-1-kg': { title: 'Recarga para vela rellenable — 1 Kg + 60 mechas', price: 799, compare: 999, img: `${IMG}vjtp9uzft8.webp` },
  'kit-vaso-de-vidrio': { title: 'Kit Vela Rellenable · Vaso de Vidrio', price: 799, compare: 899, img: `${IMG}21sy3747vik.webp` },
  'kit-vaso-de-concreto': { title: 'Kit Vela Rellenable · Bowl de Cerámica', price: 999, compare: 1199, img: `${IMG}c47q4wicqvv.webp` },
  'd-o-de-tonos': { title: 'Dúo de Tonos · 1 kg de Cera Perlada', price: 1099, compare: 1398, img: `${IMG}yuq5htx9eol.webp` },
  'tr-o-de-tonos': { title: 'Trío de Tonos · 1.5 kg de Cera Perlada', price: 1399, compare: 1499, img: `${IMG}bfh3fau5iyv.webp` },
};

const buildCatalog = (products: UseIndexLogicReturn['products']): Record<string, CatalogEntry> => {
  const entries: Record<string, CatalogEntry> = {};

  Object.entries(CATALOG_FALLBACK).forEach(([slug, f]) => {
    entries[slug] = {
      slug,
      title: f.title,
      price: formatMoney(f.price, STORE_CURRENCY),
      compare: f.compare && f.compare > f.price ? formatMoney(f.compare, STORE_CURRENCY) : null,
      img: f.img,
    };
  });

  products.forEach((raw) => {
    const p = raw as any;
    if (!p?.slug || !entries[p.slug]) return;
    const price = Number(p.price) || 0;
    const compare = Number(p.compare_at_price) || 0;
    entries[p.slug] = {
      slug: p.slug,
      title: p.title || entries[p.slug].title,
      price: formatMoney(price, STORE_CURRENCY),
      compare: compare > price ? formatMoney(compare, STORE_CURRENCY) : null,
      img: Array.isArray(p.images) && p.images[0] ? p.images[0] : entries[p.slug].img,
    };
  });

  return entries;
};

const BUNDLE_META: { slug: string; subtitle: string; badge: string; badgeClass: string }[] = [
  { slug: 'd-o-de-tonos', subtitle: '2 bolsas de 500 g · 60 mechas', badge: 'Más elegido', badgeClass: 'badge-mas-elegido' },
  { slug: 'tr-o-de-tonos', subtitle: '3 bolsas de 500 g · 60 mechas', badge: 'Mejor valor', badgeClass: 'badge-mejor-valor' },
];

const VOLUME_META: { slug: string; badge?: string; badgeClass?: string }[] = [
  { slug: 'reserva-1-kg' },
  { slug: 'd-o-de-tonos', badge: 'Más elegido', badgeClass: 'badge-mas-elegido' },
  { slug: 'tr-o-de-tonos', badge: 'Mejor valor', badgeClass: 'badge-mejor-valor' },
];

const STEPS = [
  {
    n: '01',
    title: 'Vierte',
    desc: 'Llena tu recipiente favorito con las perlas. Cualquier vaso, bowl o copa de mínimo 10 cm de diámetro.',
    img: '/paso-vierte.webp',
  },
  {
    n: '02',
    title: 'Inserta',
    desc: 'Coloca una mecha de algodón en el centro. Sin instrumentos, sin temperatura, sin riesgo.',
    img: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1785521743155-htw95tvbi4b.webp',
  },
  {
    n: '03',
    title: 'Enciende',
    desc: 'Prende la mecha. Tu vela ya está lista. Hasta 120 horas de luz con una bolsa de 500 g.',
    img: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1785521743156-3qeskqe43gv.webp',
  },
  {
    n: '04',
    title: 'Renueva',
    desc: 'Cuando la mecha se consume, agrega una nueva. Las perlas se reutilizan. Tu recipiente también.',
    img: '/paso-renueva.webp',
  },
];

const TONOS = [
  {
    name: 'Marfil',
    hex: '#F2EBDD',
    slug: 'perlas-originales-500-g',
    mood: 'Luz de mañana. Mesa despejada. Inicio de día.',
    scene: 'Mesa de madera clara con vaso de vidrio y perlas blancas encendidas, luz solar matutina, plantas verdes de fondo',
    img: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/products/x3azemqdof.webp',
  },
  {
    name: 'Champagne',
    hex: '#E2CCA3',
    slug: 'perlas-originales-500-g',
    mood: 'Cena entre amigos. Mesa de madera y vino.',
    scene: 'Mesa de cena con mantel de lino, vela champagne encendida, copas de vino, luz cálida de tarde',
    img: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/products/ndawzidqt2a.webp',
  },
  {
    name: 'Ónix',
    hex: '#1F1D1B',
    slug: 'perlas-originales-500-g',
    mood: 'Noche en terraza. Contraste y presencia.',
    scene: 'Bowl de concreto con perlas ónix negras encendidas en terraza nocturna con luces de ciudad de fondo',
    img: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/products/57db85v1ixx.webp',
  },
];

const FAQ_ITEMS = [
  { q: '¿Qué incluye cada bolsa?', a: '500 g de perlas de cera perlada + 30 mechas de algodón. Los kits incluyen además el recipiente (vaso de vidrio o bowl de cerámica).' },
  { q: '¿Qué recipiente puedo usar?', a: 'Cualquier recipiente resistente al calor de mínimo 10 cm de diámetro y 5 cm de alto. Vasos, bowls, copas o jarras: lo que ya tienes en casa.' },
  { q: '¿Cuántas mechas incluye?', a: '30 mechas por bolsa de 500 g. Los bundles Dúo y Trío incluyen 60 mechas.' },
  { q: '¿Cuánto dura una bolsa?', a: 'Aproximadamente 120 horas de luz por bolsa de 500 g, dependiendo del tamaño de tu recipiente.' },
  { q: '¿Qué pasa al encenderla?', a: 'La mecha se consume lentamente. Las perlas no se "derriten" como una vela tradicional, solo rodean la llama. Al terminar la mecha, agregas una nueva.' },
  { q: '¿Es seguro?', a: 'Sí. La vela se apaga si se vuelca porque la mecha pierde contacto. Úsala siempre sobre una superficie plana y estable, nunca sin supervisión cerca de telas o materiales inflamables.' },
  { q: '¿Cómo llega?', a: 'Enviamos desde CDMX con paquetería estándar. Entregas en 2–5 días hábiles. Envío gratis a todo México, sin monto mínimo.' },
  { q: '¿Puedo pagar a meses?', a: 'Sí. Aceptamos hasta 6 meses sin intereses con tarjetas participantes (VISA y Mastercard). El banco puede aplicar condiciones propias.' },
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
  const catalog = useMemo(() => buildCatalog(logic.products), [logic.products]);
  const perlas = catalog['perlas-originales-500-g'];
  const kitVidrio = catalog['kit-vaso-de-vidrio'];
  const kitCeramica = catalog['kit-vaso-de-concreto'];

  return (
    <EcommerceTemplate showCart={true} layout="full-width" headerOverlay>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-dunaru-carbon">
        {/* Background image */}
        <div className="absolute inset-0">
          {/* Mobile: dedicated vertical composition (product visible, text space on top) */}
          <img
            src="/hero-dunaru-mobile.webp"
            alt="Vela perlada dunaru encendida junto a la bolsa de perladas en un interior cálido"
            className="w-full h-full object-cover object-top md:hidden"
            fetchPriority="high"
          />
          {/* Desktop: horizontal composition */}
          <img
            src="/hero-dunaru.webp"
            alt="Mesa con vela perlada dunaru encendida en interior mexicano contemporáneo"
            className="hidden md:block w-full h-full object-cover object-center"
            fetchPriority="high"
          />
          {/* Gradient overlay — desktop: dark on the left for text */}
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-dunaru-carbon/75 via-dunaru-carbon/40 to-transparent" />
          {/* Gradient overlay — mobile: dark on top for text */}
          <div className="absolute inset-0 md:hidden bg-gradient-to-b from-dunaru-carbon/90 via-dunaru-carbon/40 to-dunaru-carbon/5" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-28 md:pb-20">
          <div className="max-w-xl">
            <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-dunaru-champagne mb-6 sm:mb-7 animate-fade-up">
              Velas perladas rellenables
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-dunaru-marfil mb-7 sm:mb-8 animate-fade-up delay-100">
              Crea una vela nueva en el recipiente que ya amas.
            </h1>
            <p className="font-body text-base sm:text-lg text-dunaru-marfil/75 mb-10 sm:mb-12 leading-relaxed animate-fade-up delay-200">
              Sin derretir, sin riesgo, sin comprar una vela nueva. Solo vierte las perlas, inserta una mecha y enciende.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Link to="/productos/perlas-originales-500-g">
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
            <div className="mt-10 sm:mt-12 flex items-center gap-3 animate-fade-up delay-400">
              <span className="badge-msi">Hasta 6 MSI</span>
              <span className="font-body text-xs text-dunaru-marfil/50">· Envío gratis a todo México</span>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={i} className="group">
                <div className="relative aspect-square overflow-hidden rounded-sm mb-4">
                  <img
                    src={step.img}
                    alt={`Paso ${step.n}: ${step.title} — vela perlada dunaru`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 font-body text-xs font-bold tracking-widest text-dunaru-onix bg-dunaru-marfil/90 backdrop-blur-sm rounded-full h-8 w-8 flex items-center justify-center">
                    {step.n}
                  </span>
                </div>
                <h3 className="font-display text-xl text-foreground mb-1.5">{step.title}</h3>
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
            <Link to="/productos/perlas-originales-500-g" className="group block h-full">
              <div className="relative flex flex-col h-full overflow-hidden rounded-sm bg-background border border-border hover:border-dunaru-champagne/50 transition-all duration-300 hover:shadow-lg">
                <div className="flex-1 min-h-[260px] overflow-hidden">
                  <img
                    src={perlas.img}
                    alt={perlas.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="font-body text-xs font-semibold tracking-widest text-dunaru-champagne uppercase mb-1">Ya tengo un recipiente que amo</p>
                  <h3 className="font-display text-2xl text-foreground mb-2">{perlas.title}</h3>
                  <p className="font-body text-sm text-foreground/60 mb-4">Solo las perlas y las mechas. Pon la vela en tu vaso favorito hoy.</p>
                  <div className="flex items-center justify-between">
                    <span className="font-body font-bold text-xl text-foreground">
                      {perlas.price}
                      {perlas.compare && <span className="ml-2 text-sm font-normal text-foreground/40 line-through">{perlas.compare}</span>}
                      <span className="ml-2 text-sm font-normal text-foreground/50">envío gratis</span>
                    </span>
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
                        src={kitVidrio.img}
                        alt={kitVidrio.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[160px]"
                      />
                    </div>
                    <div className="p-5 flex flex-col justify-center">
                      <p className="font-body text-xs font-semibold tracking-widest text-dunaru-champagne uppercase mb-1">Quiero algo listo</p>
                      <h3 className="font-display text-xl text-dunaru-marfil mb-2">{kitVidrio.title}</h3>
                      <p className="font-body text-xs text-dunaru-marfil/60 mb-3">Vaso + perlas + mechas. Listo para usar o regalar.</p>
                      <span className="font-body font-bold text-lg text-dunaru-marfil">
                        {kitVidrio.price}
                        {kitVidrio.compare && <span className="ml-1.5 text-xs font-normal text-dunaru-marfil/40 line-through">{kitVidrio.compare}</span>}
                        <span className="ml-1.5 text-xs font-normal text-dunaru-marfil/50">envío gratis</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/productos/kit-vaso-de-concreto" className="group block">
                <div className="relative overflow-hidden rounded-sm bg-background border border-border hover:border-dunaru-champagne/50 transition-all duration-300 hover:shadow-lg">
                  <div className="grid grid-cols-2">
                    <div className="overflow-hidden">
                      <img
                        src={kitCeramica.img}
                        alt={kitCeramica.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[140px]"
                      />
                    </div>
                    <div className="p-5 flex flex-col justify-center">
                      <p className="font-body text-xs font-semibold tracking-widest text-dunaru-champagne uppercase mb-1">Para regalar</p>
                      <h3 className="font-display text-xl text-foreground mb-2">{kitCeramica.title}</h3>
                      <p className="font-body text-xs text-foreground/60 mb-3">Bowl de cerámica + perlas. Llega listo para regalar.</p>
                      <span className="font-body font-bold text-lg text-foreground">
                        {kitCeramica.price}
                        {kitCeramica.compare && <span className="ml-1.5 text-xs font-normal text-foreground/40 line-through">{kitCeramica.compare}</span>}
                        <span className="ml-1.5 text-xs font-normal text-foreground/50">envío gratis</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Volume path */}
          <div className="mt-4 p-5 sm:p-6 bg-background/60 rounded-sm border border-border">
            <p className="font-body text-xs font-semibold tracking-widest text-dunaru-champagne uppercase mb-5 text-center">Quiero decorar más o llenar varios recipientes</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {VOLUME_META.map(({ slug, badge, badgeClass }) => {
                const p = catalog[slug];
                return (
                  <Link
                    key={slug}
                    to={`/productos/${slug}`}
                    className="group relative flex h-full flex-col justify-between rounded-sm border border-border bg-background p-5 pt-6 hover:border-dunaru-champagne/60 hover:shadow-md transition-all"
                  >
                    {badge && (
                      <span className={`absolute -top-2.5 left-4 ${badgeClass}`}>{badge}</span>
                    )}
                    <h3 className="font-body text-sm font-medium leading-snug text-foreground">{p.title}</h3>
                    <div className="mt-5 flex items-end justify-between gap-2">
                      <div className="flex items-baseline gap-2">
                        <span className="font-body text-lg font-bold text-foreground">{p.price}</span>
                        {p.compare && (
                          <span className="font-body text-xs text-foreground/40 line-through">{p.compare}</span>
                        )}
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-foreground/35 group-hover:text-dunaru-champagne transition-colors" />
                    </div>
                  </Link>
                );
              })}
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

      {/* ── ASÍ SE VE EN UNA CASA REAL ───────────────────────────────────── */}
      <CasaRealSection />

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
            {BUNDLE_META.map((meta) => {
              const bundle = { ...catalog[meta.slug], ...meta };
              return (
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
                        {bundle.compare && (
                          <span className="font-body text-sm text-foreground/40 line-through">{bundle.compare}</span>
                        )}
                      </div>
                      <span className="font-body text-xs text-dunaru-marfil bg-dunaru-onix rounded-sm px-2 py-1">Envío gratis</span>
                    </div>
                  </div>
                </div>
              </Link>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link to="/productos/reserva-1-kg">
              <Button variant="outline" className="font-body font-medium rounded-sm border-foreground/30 hover:border-foreground text-foreground transition-colors">
                Ver también: recarga de 1 kg · {catalog['reserva-1-kg'].price}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── HISTORIA DE MARCA + HECHO EN MÉXICO + GARANTÍA ────────────────── */}
      <BrandStorySection />

      {/* ── RESEÑAS (HONESTO — MARCA NUEVA) ──────────────────────────────── */}
      <Reviews />

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
            href="https://wa.me/525531215386?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20dunaru"
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