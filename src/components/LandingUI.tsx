import { memo, useEffect, useState, useRef, MouseEvent, TouchEvent, type SVGProps, type ReactNode } from "react";
import { m as motion, useInView } from "framer-motion";
import heroImg from "@/assets/hero-worker-hq.webp";
import gal3 from "@/assets/gallery-3.webp"; // Error habitual
import gal1 from "@/assets/gallery-1.webp"; // Método Cubikos

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ icons â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export const Ico = {
  Star: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M12 2l2.95 6.6 7.05.7-5.3 4.8 1.6 7-6.3-3.7-6.3 3.7 1.6-7-5.3-4.8 7.05-.7L12 2z" />
    </svg>
  ),
  Check: (p: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...p}
    >
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  ),
  Close: (p: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
      {...p}
    >
      <path d="M6 6l12 12M18 6l-6 12" />
    </svg>
  ),
  Arrow: (p: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...p}
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  Menu: (p: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden
      {...p}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  Plus: (p: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden
      {...p}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  Drag: (p: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...p}
    >
      <path d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
    </svg>
  ),
};

export const LogoCubikos = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div
      className="relative font-display font-black tracking-normal"
      style={{ fontSize: "1.4em", lineHeight: 1, letterSpacing: "0.05em" }}
    >
      C
      <span className="relative inline-block">
        U
        <span className="absolute left-[5%] right-[5%] bottom-[-0.15em] h-[0.08em] bg-current" />
      </span>
      BIK
      <span className="relative inline-block">
        O
        <span className="absolute left-[5%] right-[5%] bottom-[-0.15em] h-[0.08em] bg-current" />
      </span>
      S
    </div>
    <svg
      viewBox="0 0 32 36"
      className="h-[1.6em] w-auto"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <polygon points="16,2 30,10 30,26 16,34 2,26 2,10" fill="none" />
      <polyline points="2,10 16,18 30,10" fill="none" />
      <line x1="16" y1="18" x2="16" y2="34" fill="none" />
    </svg>
  </div>
);

export const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const RevealMask = ({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export function Counter({
  to,
  suffix = "",
  duration = 2,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        setVal(Math.floor(ease * to));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setVal(to);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {val.toLocaleString("es-ES")}
      {suffix}
    </span>
  );
}

const navItems = [
  { label: "Método", href: "#metodo" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Contacto", href: "#contacto" },
];

export const Header = memo(() => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F7F5]/98 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)] h-[72px]"
          : "bg-[#F7F7F5] h-[78px]"
      } border-b border-[#E7E5E0]`}
    >
      <div className="max-w-[1360px] mx-auto h-full px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        <a href="#top" className="text-[#181714] transition-opacity hover:opacity-85 duration-200">
          <LogoCubikos className="text-[21px] md:text-[24px]" />
        </a>
        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-[14px] font-medium tracking-[0.02em] text-[#181714] transition-colors duration-200 hover:text-[#C9982E]"
            >
              {i.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-6 h-10 rounded-full font-bold text-[12px] uppercase tracking-[0.14em] transition-all duration-300 bg-[#D6A634] text-[#111110] shadow-[0_2px_12px_rgba(214,166,52,0.25)] hover:shadow-[0_4px_18px_rgba(214,166,52,0.4)] hover:bg-[#c4972c] hover:-translate-y-0.5"
          >
            <span>Solicitar presupuesto</span>
          </a>
        </div>
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center lg:hidden text-[#181714]"
        >
          {open ? <Ico.Close className="h-6 w-6" /> : <Ico.Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Sliding Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: open ? "0%" : "100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 right-0 h-full w-[82%] max-w-sm bg-[#121211] text-[#F5F1E8] z-[100] p-6 flex flex-col shadow-2xl lg:hidden"
      >
        <div className="flex justify-between items-center pb-6 border-b border-white/10 mb-8">
          <span className="text-[#D6A634] font-black text-lg tracking-widest uppercase">Cubikos</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="text-white hover:text-[#D6A634] transition-colors p-2"
          >
            <Ico.Close className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col gap-6">
          {navItems.map((i) => (
            <a
              key={i.href}
              href={i.href}
              onClick={() => setOpen(false)}
              className="text-white/90 font-medium text-base border-b border-white/5 pb-3 hover:text-[#D6A634] transition-colors"
            >
              {i.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-6 flex items-center justify-center h-12 rounded-[4px] bg-[#D6A634] text-[#111110] font-bold text-xs uppercase tracking-[0.16em] shadow-[0_4px_16px_rgba(214,166,52,0.3)] hover:bg-[#c4972c] transition-colors"
          >
            Solicitar presupuesto
          </a>
        </div>
      </motion.div>
    </header>
  );
});

export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-[#0F0F0E] pt-[78px] min-h-[720px] lg:h-[780px] max-h-[860px] flex items-center"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={heroImg}
          alt="Montaje artesanal de cocina con precisión milimétrica"
          fetchPriority="high"
          loading="eager"
          className="w-full h-full object-cover object-[70%_center] lg:object-[64%_center] contrast-[1.08] saturate-[1.02]"
        />

        {/* Desktop Editorial Gradient: Solid deep black on text column, smooth ramp across middle, delicate veil on craftsman */}
        <div
          className="hidden md:block absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #0F0F0E 0%, #0F0F0E 34%, rgba(15,15,14,0.95) 44%, rgba(15,15,14,0.78) 58%, rgba(15,15,14,0.30) 78%, rgba(15,15,14,0.08) 100%)",
          }}
        />

        {/* Mobile Gradient: Vertical protection for headline readability */}
        <div
          className="md:hidden absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,15,14,0.96) 0%, rgba(15,15,14,0.90) 65%, rgba(15,15,14,0.55) 100%)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 py-10 lg:py-0">
        <div className="w-full max-w-[580px] lg:max-w-[620px] flex flex-col justify-center">
          {/* Micro-label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-[#D6A634]" />
            <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#D6A634]">
              Montaje profesional de cocinas
            </span>
          </div>

          {/* Headline in Serif Cormorant Garamond */}
          <h1
            className="text-[42px] sm:text-[50px] md:text-[58px] lg:text-[62px] leading-[1.06] tracking-[-0.015em] text-[#FAF8F5] font-normal"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            <span className="block">Una cocina perfecta</span>
            <span className="block">empieza con un</span>
            <span className="block">
              montaje perfecto<span className="text-[#D6A634]">.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-[15px] sm:text-[16px] md:text-[17px] text-[#C2BEB5] leading-[1.65] max-w-[500px] font-normal">
            Más de 30 años instalando cocinas en Cataluña con{" "}
            <span className="text-[#FAF8F5] font-medium">precisión milimétrica</span> y{" "}
            <span className="text-[#FAF8F5] font-medium">acabados impecables</span>. El montaje decide
            el resultado final de tu cocina.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-[4px] bg-[#D6A634] text-[#111110] font-sans font-bold text-[13px] uppercase tracking-[0.14em] transition-all duration-200 shadow-[0_4px_16px_rgba(214,166,52,0.30)] hover:bg-[#e0b240] hover:shadow-[0_6px_22px_rgba(214,166,52,0.45)] hover:-translate-y-0.5"
            >
              <span>Solicitar presupuesto</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
            </a>
            <a
              href="#proyectos"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[4px] border border-[#FAF8F5]/40 bg-black/20 backdrop-blur-sm text-[#FAF8F5] font-sans font-semibold text-[13px] uppercase tracking-[0.14em] transition-all duration-200 hover:border-[#FAF8F5]/90 hover:bg-white/10 hover:-translate-y-0.5"
            >
              <span>Ver proyectos</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
            </a>
          </div>

          {/* Trust Block (Horizontal Metrics) */}
          <div className="mt-10 pt-7 border-t border-white/15 flex items-center gap-6 sm:gap-10">
            {/* Metric 1 */}
            <div className="flex flex-col">
              <span
                className="text-[28px] sm:text-[32px] leading-none text-[#FAF8F5] font-medium"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                +30 años
              </span>
              <span className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-[#9E9A91] font-semibold font-sans">
                De experiencia
              </span>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-10 bg-white/20" />

            {/* Metric 2 */}
            <div className="flex flex-col">
              <span
                className="text-[28px] sm:text-[32px] leading-none text-[#FAF8F5] font-medium"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Cataluña
              </span>
              <span className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-[#9E9A91] font-semibold font-sans">
                Cobertura total
              </span>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-10 bg-white/20" />

            {/* Metric 3 */}
            <div className="flex flex-col">
              <span
                className="text-[28px] sm:text-[32px] leading-none text-[#FAF8F5] font-medium"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                500+
              </span>
              <span className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-[#9E9A91] font-semibold font-sans">
                Cocinas montadas
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Corner Signature - Bottom Left */}
      <div className="hidden lg:flex absolute bottom-5 left-12 items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#858077] font-mono pointer-events-none z-10">
        <span>Cubikos</span>
        <span>•</span>
        <span>30+ Años de oficio</span>
      </div>

      {/* Subtle Scroll Hint - Bottom Right */}
      <div className="hidden lg:flex absolute bottom-5 right-12 items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#858077] font-mono pointer-events-none z-10">
        <span>Scroll</span>
        <span className="text-[#D6A634]">↓</span>
      </div>
    </section>
  );
}

export function Diferenciadora() {
  const [sliderPos, setSliderPos] = useState(50);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (clientX: number) => {
      const rect = el.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = (x / rect.width) * 100;
      setSliderPos(percent);
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX);
      const rect = el.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleTouchMove = (e: TouchEvent) => {
      handleMove(e.touches[0].clientX);
      const rect = el.getBoundingClientRect();
      setMousePos({ x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      isDragging.current = false;
    };
    const handleMouseDown = () => (isDragging.current = true);
    const handleMouseUp = () => (isDragging.current = false);

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("touchmove", handleTouchMove, { passive: true });
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mouseup", handleMouseUp);
    el.addEventListener("touchend", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mouseup", handleMouseUp);
      el.removeEventListener("touchend", handleMouseLeave);
    };
  }, []);

  return (
    <section id="metodo" className="bg-background text-ink py-32 md:py-48">
      <div className="container-x">
        {/* Massive Headline */}
        <div className="max-w-5xl mb-24 text-center md:text-left">
          <RevealMask>
            <span className="eyebrow text-ink-soft">El montaje decide el resultado final</span>
            <h2 className="font-display font-black text-[3.5rem] md:text-[5.5rem] leading-[0.95] tracking-tighter mt-6 text-balance">
              Una cocina de 25.000€ puede parecer de 5.000€ si el montaje falla.
            </h2>
          </RevealMask>
        </div>

        {/* Before/After Interactive Slider */}
        <div className="max-w-6xl mx-auto">
          {/* Top Labels */}
          <div className="flex justify-between items-center mb-6 px-4 md:px-0">
            <div className="font-display font-black text-lg md:text-2xl uppercase tracking-widest text-ink flex items-center gap-2">
              <Ico.Close className="h-5 w-5 text-red-500" /> Error Habitual
            </div>
            <div className="font-display font-black text-lg md:text-2xl uppercase tracking-widest text-brand flex items-center gap-2">
              <Ico.Check className="h-5 w-5 text-brand" /> Método Cubikos
            </div>
          </div>

          {/* Slider Container */}
          <div
            ref={containerRef}
            className="relative w-full aspect-square md:aspect-[21/9] bg-[#E8E6E1] overflow-hidden cursor-none select-none touch-none shadow-premium"
          >
            {/* Custom SVG Crosshair Cursor */}
            <motion.div
              className="absolute pointer-events-none z-50 flex items-center justify-center"
              style={{ left: mousePos.x, top: mousePos.y, x: "-50%", y: "-50%" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovering ? 1 : 0 }}
              transition={{ duration: 0.15 }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                stroke="#F39C12"
                strokeWidth="1.5"
              >
                <line x1="16" y1="0" x2="16" y2="32" />
                <line x1="0" y1="16" x2="32" y2="16" />
                <circle cx="16" cy="16" r="4" fill="#F39C12" stroke="none" />
              </svg>
            </motion.div>

            {/* UNDER IMAGE (After / Perfect) */}
            <img
              src={gal1}
              alt="Método Cubikos perfecto"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* OVER IMAGE (Before / Error) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src={gal3}
                alt="Ejemplo de mala ejecución"
                className="absolute inset-0 w-full h-full object-cover grayscale pointer-events-none"
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] pointer-events-none"
              style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-ink">
                <Ico.Drag className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Bottom Info Grid */}
          <div className="grid grid-cols-2 mt-8 md:mt-12 gap-8 px-4 md:px-0">
            <div className="text-left">
              <ul className="space-y-4 font-medium text-lg md:text-xl text-ink-soft">
                <li className="flex items-start gap-3">
                  <span className="text-ink mt-1">•</span> Puertas torcidas
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ink mt-1">•</span> Holguras visibles
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ink mt-1">•</span> Desniveles
                </li>
              </ul>
            </div>
            <div className="text-right">
              <ul className="space-y-4 font-medium text-lg md:text-xl text-ink inline-block text-left">
                <li className="flex items-start gap-3">
                  <span className="text-brand mt-1">•</span> Ajuste láser
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand mt-1">•</span> Nivelación perfecta
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand mt-1">•</span> Acabados premium
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}