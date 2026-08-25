import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, MessageCircle } from 'lucide-react';
import { FloatingCart } from '@/components/FloatingCart';
import { ProductStepsCarousel } from '@/components/ProductStepsCarousel';
import { DunaruNewsletterForm } from '@/components/DunaruNewsletterForm';
import { CasaRealSection } from '@/components/CasaRealSection';
import { BrandStorySection } from '@/components/BrandStorySection';
import { RitualSection } from '@/components/RitualSection';
import { Reveal } from '@/components/Reveal';
import { Reviews } from '@/components/Reviews';
import { ScentsSection } from '@/components/ScentsSection';
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

// Una sola rejilla de compra. Sustituye a los antiguos bloques
// "¿Cómo quieres empezar?" + "Quiero decorar más" + "Combina tonos",
// que mostraban los mismos SKUs tres veces.
const SHOP_CARDS: { slug: string; tag: string; badge?: string }[] = [
  { slug: 'kit-vaso-de-vidrio', tag: 'Todo incluido', badge: 'Más elegido' },
  { slug: 'perlas-originales-500-g', tag: 'Ya tengo recipiente' },
  { slug: 'kit-vaso-de-concreto', tag: 'Para regalar' },
  { slug: 'd-o-de-tonos', tag: '2 tonos · 1 kg' },
  { slug: 'tr-o-de-tonos', tag: '3 tonos · 1.5 kg' },
  { slug: 'reserva-1-kg', tag: 'Rinde el doble' },
];

// Credenciales de marca, no specs. Las specs (120 h, 30 mechas, cualquier
// recipiente) ya viven en PDP_BENEFITS y en las tarjetas de producto.
const BENEFITS = ['Cera vegetal, sin parafina', 'Rellenable para siempre', 'Hecha en México', 'Envío gratis + 30 días'];

const STEPS = [
  {
    title: 'Vierte',
    text: 'Llena tu recipiente favorito con las perlas. Cualquier vaso, bowl o copa de mínimo 10 cm.',
    image: '/paso-vierte.webp',
  },
  {
    title: 'Inserta',
    text: 'Coloca una mecha de algodón en el centro. Sin instrumentos, sin temperatura, sin riesgo.',
    image: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1785521743155-htw95tvbi4b.webp',
  },
  {
    title: 'Enciende',
    text: 'Prende la mecha. Tu vela ya está lista. Hasta 120 horas de luz con una bolsa de 500 g.',
    image: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/58337cbc-5a9f-4862-810a-1470616566de/1785521743156-3qeskqe43gv.webp',
  },
  {
    title: 'Renueva',
    text: 'Cuando la mecha se consume, agrega una nueva. Las perlas se reutilizan. Tu recipiente también.',
    image: '/paso-renueva.webp',
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
  { q: '¿Qué incluye cada bolsa?', a: '500 g de Cera Duna vegetal + 30 mechas de algodón. Los kits incluyen además el recipiente (vaso de vidrio o bowl de cerámica).' },
  { q: '¿Las velas tienen aroma?', a: 'La cera nace neutra, sin perfume de fábrica. Al comprar puedes agregar una de nuestras seis esencias de 10 ml y elegir el aroma de tu casa: unas gotas antes de encender y listo. Un frasco perfuma 500 g de cera. Si prefieres luz sin olor, también funciona perfecto: cambias de aroma cuando quieras, sin cambiar de vela.' },
  { q: '¿Qué es la Cera Duna?', a: 'Es nuestra cera vegetal en gránulos finos, libre de parafina. No se derrite en bloque: rodea la mecha, da luz limpia y después se vuelve a usar. Por eso la vela se rellena en vez de tirarse.' },
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

  return (
    <EcommerceTemplate showCart={true} layout="full-width" headerOverlay>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-dunaru-tabaco">
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
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-dunaru-tabaco/90 via-dunaru-tabaco/55 to-dunaru-tabaco/10" />
          {/* Gradient overlay — mobile: dark on top for text */}
          <div className="absolute inset-0 md:hidden bg-gradient-to-b from-dunaru-tabaco/95 via-dunaru-tabaco/50 to-dunaru-tabaco/20" />
          {/* Material: vidrio ámbar · calidez y profundidad de fuego */}
          <div className="absolute inset-0 texture-ambar" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-28 md:pb-20">
          <div className="max-w-xl">
            <p className="eyebrow eyebrow-light mb-6 sm:mb-7 animate-fade-up">
              Cera vegetal rellenable · Hecha en México
            </p>
            <h1 className="lockup text-4xl sm:text-5xl md:text-6xl leading-[1.12] text-dunaru-marfil mb-7 sm:mb-8 animate-fade-up delay-100">
              CREA LUZ <em className="text-dunaru-ambar">en el</em> RECIPIENTE QUE YA AMAS
            </h1>
            <p className="font-body text-base sm:text-lg text-dunaru-marfil/70 mb-10 sm:mb-12 leading-relaxed animate-fade-up delay-200 max-w-md">
              Cera Duna vegetal en gránulos finos. Viertes, insertas una mecha y enciendes. El aroma lo eliges tú.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up delay-300">
              <Link to="/productos/kit-vaso-de-vidrio">
                <Button size="lg" className="w-full sm:w-auto bg-dunaru-marfil text-dunaru-terracota hover:bg-dunaru-terracota hover:text-dunaru-marfil font-body font-semibold uppercase tracking-[0.12em] text-xs px-9 py-4 h-auto shadow-none border-0 transition-editorial">
                  Comprar ahora
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Button>
              </Link>
              <a href="#como-funciona">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-dunaru-marfil/35 text-dunaru-marfil hover:bg-dunaru-marfil/10 hover:text-dunaru-marfil font-body font-medium uppercase tracking-[0.12em] text-xs px-9 py-4 h-auto bg-transparent transition-editorial">
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
      <section className="bg-dunaru-arena texture-travertino border-b border-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 divide-x divide-foreground/10">
            {BENEFITS.map((text, i) => (
              <div key={i} className="flex items-center justify-center py-5 px-1.5 sm:px-4 text-center">
                <span className="font-body text-[9px] sm:text-[11px] uppercase leading-tight tracking-[0.16em] sm:tracking-[0.2em] text-foreground/70">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ─────────────────────────────────────────────────── */}
      <ProductStepsCarousel
        id="como-funciona"
        eyebrow="Simple desde el primer día"
        title="Crea tu vela en 4 pasos"
        steps={STEPS}
        bleed={false}
        background="bg-background"
        footer={
          <Link to="/productos/kit-vaso-de-vidrio">
            <Button variant="outline" className="font-body font-medium uppercase tracking-[0.12em] text-xs px-8 h-11 rounded-none border-dunaru-terracota/45 bg-transparent text-dunaru-terracota hover:bg-dunaru-terracota hover:text-dunaru-marfil hover:border-dunaru-terracota transition-editorial">
              Ver el kit completo
            </Button>
          </Link>
        }
      />

      {/* ── INTENCIÓN DE COMPRA ───────────────────────────────────────────── */}
      <section id="comprar" className="section-pad-sm bg-dunaru-arena texture-arena">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10 sm:mb-14">
            <p className="eyebrow mb-4">Empieza por aquí</p>
            <h2 className="lockup text-3xl sm:text-4xl text-foreground">
              ELIGE <em>tu</em> VELA
            </h2>
            <p className="font-body text-sm text-foreground/55 max-w-sm mx-auto mt-4">
              Envío gratis a todo México, sin mínimo. Hasta 6 meses sin intereses. 30 días de garantía.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-14">
            {SHOP_CARDS.map(({ slug, tag, badge }, i) => {
              const p = catalog[slug];
              if (!p) return null;
              return (
                <Reveal key={slug} delay={(i % 3) * 90}>
                  <Link to={`/productos/${slug}`} className="group flex h-full flex-col">
                    <div className="relative aspect-[4/5] overflow-hidden bg-dunaru-marfil">
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-editorial group-hover:scale-[1.04]"
                      />
                      {badge && (
                        <span className="absolute top-3 left-3 font-body text-[10px] uppercase tracking-[0.2em] text-dunaru-marfil drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                          {badge}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col pt-4">
                      <span className="eyebrow mb-2">{tag}</span>
                      <h3 className="font-body text-sm leading-snug text-foreground mb-2">{p.title}</h3>
                      <div className="mt-auto flex items-baseline gap-2">
                        <span className="font-body text-sm text-foreground">{p.price}</span>
                        {p.compare && (
                          <span className="font-body text-[11px] text-foreground/35 line-through">{p.compare}</span>
                        )}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <p className="text-center font-body text-xs text-foreground/50 mt-6">
            ¿No sabes cuál?{' '}
            <a
              href="https://wa.me/525531215386?text=Hola%2C%20no%20s%C3%A9%20cu%C3%A1l%20vela%20elegir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dunaru-champagne font-medium hover:underline"
            >
              Te ayudamos por WhatsApp
            </a>
          </p>
        </div>
      </section>

      {/* ── ELIGE TU TONO ─────────────────────────────────────────────────── */}
      <RitualSection />

      <Reviews />

      {/* ── AROMAS ────────────────────────────────────────────── */}
      <ScentsSection />

      {/* Elige tu tono (carrusel) */}
      <section id="tonos" className="section-pad-sm bg-background texture-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10 sm:mb-14">
            <p className="eyebrow mb-4">Tres tonos, tres ambientes</p>
            <h2 className="lockup text-3xl sm:text-4xl text-foreground">
              ELIGE <em>tu</em> TONO
            </h2>
          </Reveal>

          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:mx-0 md:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {TONOS.map((tono) => (
              <Link key={tono.name} to={`/productos/${tono.slug}`} className="group block shrink-0 w-[70%] sm:w-[45%] md:w-auto snap-start">
                <div className="relative overflow-hidden">
                  <div className="aspect-[3/4] overflow-hidden bg-dunaru-tabaco">
                    <img
                      src={tono.img}
                      alt={`Dunaru tono ${tono.name}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-editorial"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dunaru-tabaco via-dunaru-tabaco/25 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span
                        className="w-3 h-3 rounded-full border border-dunaru-marfil/30 shrink-0"
                        style={{ backgroundColor: tono.hex }}
                      />
                      <span className="lockup text-lg text-dunaru-marfil">{tono.name}</span>
                    </div>
                    <p className="font-body text-xs leading-relaxed text-dunaru-marfil/65">{tono.mood}</p>
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
      {/* Sección "Por qué no es una vela normal" eliminada: repetía la tira de
          beneficios del inicio y la historia de marca de más abajo. */}

      {/* ── BUNDLES ───────────────────────────────────────────────────────── */}
      {/* Sección "Combina tonos" eliminada: Dúo, Trío y Reserva 1 kg ya viven
          en la rejilla "Elige tu vela", arriba. */}

      {/* ── HISTORIA DE MARCA + HECHO EN MÉXICO + GARANTÍA ────────────────── */}
      <BrandStorySection />

      {/* ── RESEÑAS (HONESTO — MARCA NUEVA) ──────────────────────────────── */}
      {/* (movido arriba: ahora va justo antes de "Elige tu tono") */}

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section id="faq" className="section-pad bg-background texture-grain">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="lockup text-2xl sm:text-3xl text-foreground">
              PREGUNTAS <em>frecuentes</em>
            </h2>
          </Reveal>
          <div className="divide-y divide-border border-t border-border">
            {FAQ_ITEMS.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CIERRE — NEWSLETTER + WHATSAPP ───────────────────────────────── */}
      <section className="section-pad-sm bg-dunaru-tabaco texture-ambar">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow eyebrow-light mb-4">Boletín dunaru</p>
          <h2 className="lockup text-2xl sm:text-3xl text-dunaru-marfil mb-4">
            ALGO NUEVO <em>viene</em>
          </h2>
          <p className="font-body text-sm text-dunaru-marfil/60 mb-8 leading-relaxed">
            Nuevos tonos, ediciones especiales y consejos para sacarle más a tu vela. Sé la primera en saber.
          </p>
          <DunaruNewsletterForm />

          <div className="hairline-metal my-6" />

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