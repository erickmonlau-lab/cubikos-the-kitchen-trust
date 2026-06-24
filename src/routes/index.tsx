import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import heroImg from "@/assets/hero-kitchen.jpg";
import gal1 from "@/assets/gallery-1.jpg";
import gal2 from "@/assets/gallery-2.jpg";
import gal3 from "@/assets/gallery-3.jpg";
import gal4 from "@/assets/gallery-4.jpg";
import gal5 from "@/assets/gallery-5.jpg";
import gal6 from "@/assets/gallery-6.jpg";
import ctaImg from "@/assets/cta-kitchen.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cubikos · Montaje profesional de cocinas en Cataluña" },
      {
        name: "description",
        content:
          "Más de 30 años montando cocinas en toda Cataluña. Especialistas en instalación profesional para particulares. Solicita presupuesto.",
      },
      { property: "og:title", content: "Cubikos · Montaje profesional de cocinas en Cataluña" },
      {
        property: "og:description",
        content:
          "Especialistas en montaje de cocinas. 30+ años de experiencia, miles de proyectos en toda Cataluña.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Cubikos",
          description:
            "Especialistas en montaje profesional de cocinas para particulares en toda Cataluña. Más de 30 años de experiencia.",
          areaServed: "Cataluña",
          telephone: "+34 000 000 000",
          priceRange: "€€",
        }),
      },
    ],
  }),
  component: Landing,
});

/* ───────────── helpers ───────────── */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Counter({ to, suffix = "", duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      }
    }, { threshold: 0.4 });
    io.observe(node);
    return () => io.disconnect();
  }, [to, duration]);
  return (
    <span ref={ref}>
      {val.toLocaleString("es-ES")}
      {suffix}
    </span>
  );
}

/* ───────────── icons (inline, minimal) ───────────── */

const Ico = {
  Star: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M12 2l2.95 6.6 7.05.7-5.3 4.8 1.6 7-6.3-3.7-6.3 3.7 1.6-7-5.3-4.8 7.05-.7L12 2z" />
    </svg>
  ),
  Check: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  ),
  Arrow: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  Phone: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" />
    </svg>
  ),
  Menu: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  Close: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden {...p}>
      <path d="M6 6l12 12M18 6l-6 12" />
    </svg>
  ),
  Plus: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  WhatsApp: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M20.52 3.48A11.78 11.78 0 0012.06 0C5.46 0 .12 5.34.12 11.94c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.94 11.94 0 005.79 1.47h.01c6.6 0 11.94-5.34 11.94-11.94 0-3.19-1.24-6.19-3.49-8.41zM12.07 21.8h-.01a9.86 9.86 0 01-5.03-1.38l-.36-.21-3.72.98 1-3.62-.23-.37a9.83 9.83 0 01-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.13 1.03 7 2.9a9.84 9.84 0 012.9 7c-.01 5.46-4.45 9.84-9.94 9.84zm5.43-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01a1.1 1.1 0 00-.8.37c-.27.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
    </svg>
  ),
};

/* ───────────── data ───────────── */

const navItems = [
  { label: "Inicio", href: "#top" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Contacto", href: "#contacto" },
];

const problems = [
  { t: "Malos acabados", d: "Detalles imperfectos que se ven cada día." },
  { t: "Puertas desalineadas", d: "Holguras, juntas abiertas, cierres irregulares." },
  { t: "Errores de instalación", d: "Encimeras mal niveladas, fugas, daños evitables." },
  { t: "Retrasos imprevistos", d: "Plazos que se alargan y bloquean tu cocina." },
  { t: "Falta de coordinación", d: "Gremios que no se entienden y trabajo descoordinado." },
  { t: "Costes inesperados", d: "Trabajos rehechos que disparan el presupuesto final." },
];

const solutions = [
  { t: "Montaje profesional", d: "Equipo especializado en cocinas, nada más.", img: gal3 },
  { t: "Planificación", d: "Plazos claros, materiales coordinados, cero sorpresas.", img: gal1 },
  { t: "Acabados perfectos", d: "Juntas mínimas, alineación milimétrica, detalles cuidados.", img: gal2 },
  { t: "Control de calidad", d: "Revisión final pieza a pieza antes de la entrega.", img: gal6 },
];

const differentials = [
  { t: "Más de 30 años de experiencia", d: "Tres décadas resolviendo cualquier montaje." },
  { t: "100% especializados en cocinas", d: "No hacemos otra cosa. Hacemos esta perfecta." },
  { t: "Cientos de miles de proyectos", d: "Cada cocina suma. La tuya entra en buenas manos." },
  { t: "Cobertura en toda Cataluña", d: "Estemos donde estemos, llegamos." },
  { t: "Acabados profesionales", d: "Lo que diferencia una cocina buena de una excelente." },
  { t: "Compromiso total", d: "No nos vamos hasta que todo queda exactamente bien." },
];

const steps = [
  { n: "01", t: "Contacto", d: "Cuéntanos tu proyecto en un par de minutos." },
  { n: "02", t: "Valoración", d: "Revisamos planos, fotos y materiales." },
  { n: "03", t: "Planificación", d: "Fechas, equipo y coordinación cerradas." },
  { n: "04", t: "Montaje", d: "Instalación profesional, sin sorpresas." },
  { n: "05", t: "Entrega", d: "Repaso final y cocina lista para usar." },
];

const gallery = [
  { src: gal1, alt: "Cocina blanca con isla de mármol", span: "row-span-2" },
  { src: gal4, alt: "Cocina abierta con grandes ventanales" },
  { src: gal2, alt: "Detalle de armarios negros con tiradores dorados" },
  { src: gal6, alt: "Cocina minimalista en tonos cálidos", span: "row-span-2" },
  { src: gal3, alt: "Detalle de instalación de bisagra" },
  { src: gal5, alt: "Detalle interior de cajón con cubertería" },
];

const testimonials = [
  { name: "Marta Sala", city: "Sant Cugat", q: "Todo el proceso fue impecable. Cumplieron fechas, fueron limpios y los acabados son perfectos." },
  { name: "Jordi Vidal", city: "Barcelona", q: "Profesionales de principio a fin. Se nota muchísimo la experiencia en cada detalle." },
  { name: "Núria Camps", city: "Girona", q: "Volveríamos a confiar en ellos sin ninguna duda. Trato cercano y resultado excelente." },
  { name: "Albert Roca", city: "Terrassa", q: "El resultado superó nuestras expectativas. Una cocina espectacular y montaje perfecto." },
  { name: "Laia Puig", city: "Sabadell", q: "Recomendados al 100%. Coordinación, puntualidad y un acabado de auténtico nivel." },
  { name: "Marc Esteve", city: "Tarragona", q: "Resolvieron temas que otros habían dejado mal. Profesionales de verdad." },
  { name: "Helena Mas", city: "Lleida", q: "Atención personalizada en todo momento. Nos sentimos muy bien acompañados." },
  { name: "Pau Ferrer", city: "Mataró", q: "Calidad altísima. La diferencia respecto a un montador genérico es enorme." },
];

const faqs = [
  { q: "¿Trabajáis en toda Cataluña?", a: "Sí. Cubrimos las cuatro provincias y nos desplazamos a cualquier población de Cataluña." },
  { q: "¿Montáis cualquier tipo de cocina?", a: "Trabajamos con todo tipo de cocinas: de marca, de tienda especializada, importadas o de diseño a medida." },
  { q: "¿Cómo puedo solicitar presupuesto?", a: "Puedes hacerlo desde el formulario de esta página, por teléfono o por WhatsApp. Respondemos en menos de 24 h." },
  { q: "¿Cuánto tarda un montaje?", a: "Depende del tipo de cocina, pero la mayoría se completan en pocos días. Te damos un plazo concreto antes de empezar." },
  { q: "¿Puedo enviar fotografías?", a: "Sí. El formulario permite adjuntar fotos para que podamos valorar tu proyecto con precisión." },
  { q: "¿Trabajáis para particulares?", a: "Sí. Estamos especializados precisamente en particulares que necesitan un montaje profesional para su cocina." },
  { q: "¿Realizáis visitas previas?", a: "Cuando el proyecto lo requiere, sí. En muchos casos podemos valorar todo con fotos y planos sin desplazamiento." },
];

/* ───────────── components ───────────── */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-2 text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-ink text-[var(--color-background)] font-display text-sm font-semibold">
            C
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">Cubikos</span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((i) => (
            <a key={i.href} href={i.href} className="text-sm text-ink-soft transition-colors hover:text-ink">
              {i.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a href="#contacto" className="btn-primary h-11 px-5 text-sm">
            Solicitar presupuesto
          </a>
        </div>
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink lg:hidden"
        >
          {open ? <Ico.Close className="h-5 w-5" /> : <Ico.Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass-nav">
          <div className="container-x flex flex-col gap-1 py-4">
            {navItems.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-ink"
              >
                {i.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Solicitar presupuesto
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-white">
      <img
        src={heroImg}
        alt="Profesionales de Cubikos montando una cocina premium"
        className="absolute inset-0 h-full w-full object-cover opacity-90"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70" />
      <div className="relative z-10 container-x flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:pb-24">
        <div data-reveal className="reveal max-w-3xl">
          <span className="eyebrow-light">Cubikos · Cataluña</span>
          <h1 className="headline-xl mt-5 text-white">
            Especialistas en montaje de cocinas en&nbsp;Cataluña.
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/80 md:text-lg">
            Más de 30 años ayudando a particulares a instalar su cocina con precisión, experiencia y total tranquilidad.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contacto" className="btn-light">
              Solicitar presupuesto <Ico.Arrow className="h-4 w-4" />
            </a>
            <a href="#proyectos" className="btn-outline-light">Ver proyectos</a>
          </div>
        </div>
        <div data-reveal className="reveal mt-12 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/15 pt-8 text-sm text-white/75 sm:grid-cols-3 lg:grid-cols-6">
          <div className="flex items-center gap-2">
            <div className="flex text-white">
              {Array.from({ length: 5 }).map((_, i) => (
                <Ico.Star key={i} className="h-3.5 w-3.5" />
              ))}
            </div>
            <span>Valoración 5/5</span>
          </div>
          <div>30+ años de experiencia</div>
          <div>Miles de proyectos</div>
          <div>Servicio en toda Cataluña</div>
          <div>Montaje profesional</div>
          <div>Atención personalizada</div>
        </div>
      </div>
    </section>
  );
}

function Authority() {
  useReveal();
  return (
    <section className="bg-background py-28 md:py-36">
      <div className="container-x grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <span data-reveal className="reveal eyebrow">Nuestra historia</span>
          <h2 data-reveal className="reveal headline-lg mt-5">
            Tres décadas montando cocinas sin dejar nada al azar.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7 space-y-6 text-lg leading-relaxed text-ink-soft">
          <p data-reveal className="reveal">
            Llevamos más de treinta años en una sola cosa: que las cocinas queden perfectas. Hemos visto montar de todo,
            en pisos antiguos y obra nueva, en casas pequeñas y grandes reformas.
          </p>
          <p data-reveal className="reveal">
            Esa experiencia se nota. En la forma de planificar, en cómo coordinamos materiales y plazos, en el cuidado
            con el que tratamos cada acabado. Y, sobre todo, en la tranquilidad que damos a quien nos confía algo tan
            importante.
          </p>
          <p data-reveal className="reveal text-ink">
            Cuando trabajamos en tu cocina, sabes que está en manos de un equipo que sabe exactamente lo que hace.
          </p>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section id="servicios" className="bg-surface py-28 md:py-36">
      <div className="container-x">
        <div className="max-w-2xl">
          <span data-reveal className="reveal eyebrow">El problema</span>
          <h2 data-reveal className="reveal headline-lg mt-5">
            El montaje es la parte más importante de una cocina.
          </h2>
          <p data-reveal className="reveal mt-6 text-lg text-ink-soft">
            Puedes comprar una cocina espectacular. Pero si el montaje falla, todo falla. Estos son los riesgos reales
            que vemos cada semana:
          </p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <div key={p.t} data-reveal className="reveal bg-background p-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[oklch(0.55_0.2_27)]" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p data-reveal className="reveal mt-12 max-w-2xl text-lg text-ink">
          Por eso es tan importante contar con profesionales especializados.
        </p>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section className="bg-background py-28 md:py-36">
      <div className="container-x">
        <div className="max-w-3xl">
          <span data-reveal className="reveal eyebrow">La solución</span>
          <h2 data-reveal className="reveal headline-lg mt-5">
            Nos ocupamos de que todo quede exactamente como debe quedar.
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {solutions.map((s, i) => (
            <article
              key={s.t}
              data-reveal
              className={`reveal tile flex flex-col overflow-hidden ${i % 2 === 1 ? "md:translate-y-12" : ""}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.t} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="font-display text-xl font-semibold text-ink">{s.t}</h3>
                <p className="mt-2 text-ink-soft">{s.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentiators() {
  return (
    <section className="bg-surface py-28 md:py-36">
      <div className="container-x">
        <div className="max-w-3xl">
          <span data-reveal className="reveal eyebrow">Por qué Cubikos</span>
          <h2 data-reveal className="reveal headline-lg mt-5">
            ¿Por qué tantas personas confían en Cubikos?
          </h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((d, i) => (
            <div
              key={d.t}
              data-reveal
              className="reveal group relative overflow-hidden rounded-2xl border border-line bg-background p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_oklch(0_0_0/0.25)]"
            >
              <div className="font-display text-sm text-ink-soft">0{i + 1}</div>
              <h3 className="mt-6 font-display text-xl font-semibold leading-tight text-ink">{d.t}</h3>
              <p className="mt-3 text-ink-soft">{d.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { v: 30, s: "+", l: "Años de experiencia" },
    { v: 100000, s: "+", l: "Proyectos realizados" },
    { v: 100, s: "%", l: "Cobertura Cataluña" },
    { v: 5000, s: "+", l: "Clientes satisfechos" },
  ];
  return (
    <section className="bg-ink py-28 text-white md:py-36">
      <div className="container-x">
        <div data-reveal className="reveal max-w-2xl">
          <span className="eyebrow-light">En cifras</span>
          <h2 className="headline-lg mt-5 text-white">Una trayectoria que se demuestra.</h2>
        </div>
        <div className="mt-16 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.l} data-reveal className="reveal">
              <div className="num-display">
                <Counter to={it.v} suffix={it.s} />
              </div>
              <div className="mt-3 text-sm uppercase tracking-[0.18em] text-white/65">{it.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proceso" className="bg-background py-28 md:py-36">
      <div className="container-x">
        <div className="max-w-3xl">
          <span data-reveal className="reveal eyebrow">Nuestro proceso</span>
          <h2 data-reveal className="reveal headline-lg mt-5">
            Así conseguimos que tu cocina quede perfecta.
          </h2>
        </div>
        <div className="mt-20 relative">
          <div className="absolute left-3.5 top-0 hidden h-full w-px bg-line md:left-0 md:top-7 md:h-px md:w-full" aria-hidden />
          <ol className="grid gap-12 md:grid-cols-5 md:gap-6">
            {steps.map((s) => (
              <li key={s.n} data-reveal className="reveal relative pl-12 md:pl-0 md:pt-16">
                <div className="absolute left-0 top-0 grid h-7 w-7 place-items-center rounded-full bg-ink text-xs font-medium text-white md:left-0 md:-translate-y-1/2">
                  {s.n.slice(1)}
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="proyectos" className="bg-surface py-28 md:py-36">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span data-reveal className="reveal eyebrow">Proyectos</span>
            <h2 data-reveal className="reveal headline-lg mt-5">Cocinas que hablan por sí solas.</h2>
          </div>
          <a href="#contacto" className="btn-ghost hidden md:inline-flex">
            Pedir mi presupuesto <Ico.Arrow className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-14 grid auto-rows-[16rem] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[14rem] lg:auto-rows-[16rem]">
          {gallery.map((g, i) => (
            <figure
              key={i}
              data-reveal
              className={`reveal tile ${g.span ?? ""} ${i === 0 ? "col-span-2" : ""}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Emotional() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-28 text-white md:py-40">
      <div className="container-x grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <span data-reveal className="reveal eyebrow-light">Tranquilidad</span>
          <h2 data-reveal className="reveal headline-lg mt-5 text-white">
            Tu cocina es una inversión importante.
          </h2>
        </div>
        <div className="md:col-span-5 space-y-6 text-lg leading-relaxed text-white/75">
          <p data-reveal className="reveal">
            Cuando inviertes miles de euros en una cocina, el montaje no puede dejarse al azar.
          </p>
          <p data-reveal className="reveal">Necesitas experiencia. Necesitas precisión. Necesitas tranquilidad.</p>
          <p data-reveal className="reveal text-white">Eso es exactamente lo que ofrecemos.</p>
          <div data-reveal className="reveal pt-4">
            <a href="#contacto" className="btn-light">
              Solicitar presupuesto <Ico.Arrow className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="opiniones" className="bg-background py-28 md:py-36">
      <div className="container-x">
        <div className="max-w-2xl">
          <span data-reveal className="reveal eyebrow">Opiniones</span>
          <h2 data-reveal className="reveal headline-lg mt-5">
            La experiencia de quienes ya confiaron en nosotros.
          </h2>
        </div>
        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              data-reveal
              className="reveal rounded-2xl border border-line bg-background p-7"
            >
              <div className="flex text-ink">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Ico.Star key={i} className="h-3.5 w-3.5" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-ink">"{t.q}"</blockquote>
              <figcaption className="mt-5 text-sm text-ink-soft">
                <span className="font-medium text-ink">{t.name}</span> · {t.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    "30 años de experiencia",
    "Especialistas en cocinas",
    "Cobertura en toda Cataluña",
    "Atención personalizada",
    "Resultados profesionales",
  ];
  return (
    <section className="bg-surface py-20">
      <div className="container-x">
        <div className="max-w-2xl">
          <span data-reveal className="reveal eyebrow">Confianza</span>
          <h2 data-reveal className="reveal headline-md mt-5">
            La tranquilidad de saber que está en buenas manos.
          </h2>
        </div>
        <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((i) => (
            <li key={i} data-reveal className="reveal flex items-start gap-3 text-sm text-ink">
              <Ico.Check className="mt-0.5 h-4 w-4 text-[var(--color-brand-soft)]" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background py-28 md:py-36">
      <div className="container-x grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <span data-reveal className="reveal eyebrow">Preguntas frecuentes</span>
          <h2 data-reveal className="reveal headline-lg mt-5">Todo lo que sueles preguntarnos.</h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <ul className="divide-y divide-line border-y border-line">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg font-medium text-ink">{f.q}</span>
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-ink transition-transform duration-300 ${isOpen ? "rotate-45 bg-ink text-[var(--color-background)]" : ""}`}>
                      <Ico.Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{ maxHeight: isOpen ? 240 : 0, opacity: isOpen ? 1 : 0 }}
                  >
                    <p className="pb-6 pr-12 text-ink-soft">{f.a}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={ctaImg}
        alt="Cocina premium al atardecer"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
      <div className="relative z-10 container-x py-32 text-white md:py-48">
        <div data-reveal className="reveal max-w-3xl">
          <span className="eyebrow-light">Empieza ahora</span>
          <h2 className="headline-xl mt-5 text-white">¿Necesitas montar tu cocina?</h2>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Solicita presupuesto y recibe asesoramiento profesional para tu proyecto. Sin compromiso.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#contacto" className="btn-light h-14 px-8 text-base">
              Solicitar presupuesto <Ico.Arrow className="h-4 w-4" />
            </a>
            <a href="tel:+34000000000" className="btn-outline-light h-14 px-7 text-base">
              <Ico.Phone className="h-4 w-4" /> Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section id="contacto" className="bg-surface py-28 md:py-36">
      <div className="container-x grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <span data-reveal className="reveal eyebrow">Presupuesto</span>
          <h2 data-reveal className="reveal headline-lg mt-5">
            Cuéntanos tu proyecto.
          </h2>
          <p data-reveal className="reveal mt-6 text-lg text-ink-soft">
            Te responderemos en menos de 24 horas con una valoración honesta y profesional.
          </p>
          <ul className="mt-10 space-y-4 text-ink">
            <li className="flex items-center gap-3"><Ico.Check className="h-4 w-4 text-[var(--color-brand-soft)]" /> Atención personalizada</li>
            <li className="flex items-center gap-3"><Ico.Check className="h-4 w-4 text-[var(--color-brand-soft)]" /> Sin compromiso</li>
            <li className="flex items-center gap-3"><Ico.Check className="h-4 w-4 text-[var(--color-brand-soft)]" /> Servicio en toda Cataluña</li>
          </ul>
        </div>
        <div data-reveal className="reveal md:col-span-7">
          {sent ? (
            <div className="rounded-3xl border border-line bg-background p-10 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-ink text-white">
                <Ico.Check className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-ink">Solicitud recibida</h3>
              <p className="mt-3 text-ink-soft">
                Gracias por confiar en Cubikos. Te contactaremos en menos de 24 horas.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-background p-6 md:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nombre" name="name" required />
                <Field label="Teléfono" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Ciudad" name="city" required />
                <div className="sm:col-span-2">
                  <Label>Tipo de proyecto</Label>
                  <select required defaultValue="" className="mt-2 h-12 w-full rounded-xl border border-line bg-background px-3 text-ink outline-none transition focus:border-ink">
                    <option value="" disabled>Selecciona una opción</option>
                    <option>Cocina nueva</option>
                    <option>Sustitución de cocina existente</option>
                    <option>Reforma integral</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <Label>Mensaje</Label>
                  <textarea rows={4} className="mt-2 w-full rounded-xl border border-line bg-background p-3 text-ink outline-none transition focus:border-ink" />
                </div>
                <div className="sm:col-span-2">
                  <Label>Adjuntar fotografías (opcional)</Label>
                  <label className="mt-2 flex h-24 cursor-pointer items-center justify-center rounded-xl border border-dashed border-line text-sm text-ink-soft hover:bg-surface">
                    <input type="file" multiple accept="image/*" className="sr-only" />
                    <span>Arrastra archivos o haz clic para subir</span>
                  </label>
                </div>
                <label className="sm:col-span-2 flex items-start gap-3 text-sm text-ink-soft">
                  <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-line" />
                  <span>Acepto la política de privacidad y el tratamiento de mis datos.</span>
                </label>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Quiero mi presupuesto <Ico.Arrow className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">{children}</label>;
}
function Field({
  label, name, type = "text", required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 h-12 w-full rounded-xl border border-line bg-background px-3 text-ink outline-none transition focus:border-ink"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-background pt-20">
      <div className="container-x">
        <div className="grid gap-12 border-t border-line pt-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-ink text-[var(--color-background)] font-display text-sm font-semibold">C</span>
              <span className="font-display text-lg font-semibold tracking-tight text-ink">Cubikos</span>
            </div>
            <p className="mt-5 max-w-md text-ink-soft">
              Especialistas en montaje profesional de cocinas para particulares. Más de 30 años haciendo que las cocinas
              queden perfectas en toda Cataluña.
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-7">
            <div className="text-xs uppercase tracking-[0.18em] text-ink-soft">Navegación</div>
            <ul className="mt-4 space-y-3 text-ink">
              {navItems.map((i) => (
                <li key={i.href}><a href={i.href} className="hover:text-ink-soft">{i.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.18em] text-ink-soft">Contacto</div>
            <ul className="mt-4 space-y-3 text-ink">
              <li><a href="tel:+34000000000" className="hover:text-ink-soft">+34 000 000 000</a></li>
              <li><a href="mailto:hola@cubikos.com" className="hover:text-ink-soft">hola@cubikos.com</a></li>
              <li className="text-ink-soft">Servicio en toda Cataluña</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line py-8 text-sm text-ink-soft">
          <div>© {new Date().getFullYear()} Cubikos. Todos los derechos reservados.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink">Aviso legal</a>
            <a href="#" className="hover:text-ink">Privacidad</a>
            <a href="#" className="hover:text-ink">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <>
      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="flex items-center gap-2">
          <a href="tel:+34000000000" className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line text-ink">
            <Ico.Phone className="h-5 w-5" />
          </a>
          <a href="#contacto" className="btn-primary h-12 flex-1">
            Solicitar presupuesto
          </a>
        </div>
      </div>
      {/* WhatsApp */}
      <a
        href="https://wa.me/34000000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        className="fixed bottom-24 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-10px_oklch(0_0_0/0.4)] transition-transform hover:scale-105 lg:bottom-6 lg:right-6"
      >
        <Ico.WhatsApp className="h-7 w-7" />
      </a>
    </>
  );
}

/* ───────────── page ───────────── */

function Landing() {
  useReveal();
  return (
    <div className="bg-background text-ink">
      <Header />
      <main>
        <Hero />
        <Authority />
        <Problem />
        <Solution />
        <Differentiators />
        <Stats />
        <Process />
        <Gallery />
        <Emotional />
        <Testimonials />
        <TrustStrip />
        <FAQ />
        <FinalCta />
        <ContactForm />
      </main>
      <Footer />
      <FloatingActions />
      <div className="h-20 lg:hidden" aria-hidden />
    </div>
  );
}
