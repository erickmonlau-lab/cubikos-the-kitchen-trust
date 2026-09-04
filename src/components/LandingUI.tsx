import { memo, useEffect, useState, useRef, MouseEvent, TouchEvent, type SVGProps, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import heroImg from "@/assets/hero-premium.webp";
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
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111110]/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] h-[70px]"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent border-b border-transparent h-[86px]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto h-full px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        <a href="#top" className="text-white transition-opacity hover:opacity-90 duration-200">
          <LogoCubikos className="text-[22px] md:text-[26px]" />
        </a>
        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-[15px] font-medium tracking-[0.03em] text-white/90 transition-colors duration-200 hover:text-[#D6A634]"
            >
              {i.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-7 h-11 rounded-full font-bold text-[13px] uppercase tracking-[0.12em] transition-all duration-300 bg-[#D6A634] text-[#111110] shadow-[0_2px_14px_rgba(214,166,52,0.3)] hover:shadow-[0_4px_22px_rgba(214,166,52,0.5)] hover:bg-[#e0b240] hover:-translate-y-0.5"
          >
            <span>Solicitar presupuesto</span>
          </a>
        </div>
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center lg:hidden text-white"
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
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90] lg:hidden"
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
      className="relative w-full h-screen min-h-[700px] max-h-[1100px] overflow-hidden bg-[#0E0E0D] flex flex-col"
    >
      {/* ─── Background Photography ─── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <img
          src={heroImg}
          alt="Montador profesional ajustando armarios de cocina premium con iluminación cálida"
          fetchPriority="high"
          loading="eager"
          className="w-full h-full object-cover object-[65%_center] sm:object-[55%_center] lg:object-[50%_center]"
          style={{ imageRendering: 'auto' }}
        />

        {/* Desktop: Strong left-side gradient for text legibility, fully transparent on right to show kitchen */}
        <div
          className="hidden md:block absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(14,14,13,0.94) 0%, rgba(14,14,13,0.88) 22%, rgba(14,14,13,0.72) 40%, rgba(14,14,13,0.35) 58%, rgba(14,14,13,0.08) 75%, transparent 100%)",
          }}
        />

        {/* Mobile: Vertical gradient for readability */}
        <div
          className="md:hidden absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,14,13,0.92) 0%, rgba(14,14,13,0.80) 50%, rgba(14,14,13,0.45) 80%, rgba(14,14,13,0.25) 100%)",
          }}
        />

        {/* Subtle bottom vignette for footer text */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(14,14,13,0.55) 0%, transparent 20%, transparent 85%, rgba(14,14,13,0.20) 100%)",
          }}
        />
      </motion.div>

      {/* Header spacer */}
      <div className="w-full h-[86px] shrink-0" />

      {/* ─── Main Content ─── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex items-center">
        <div className="w-full max-w-[680px] lg:max-w-[720px] flex flex-col">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-5 sm:mb-6"
          >
            <span className="w-8 h-[2px] bg-[#D6A634]" />
            <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.22em] font-semibold text-[#D6A634]">
              Montaje profesional de cocinas
            </span>
          </motion.div>

          {/* Headline — Editorial Serif, Maximum Presence */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[1.02] tracking-[-0.02em] font-normal"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.75rem, 5.2vw, 5.5rem)',
            }}
          >
            <span className="block">Una cocina perfecta</span>
            <span className="block">empieza con un</span>
            <span className="block">
              montaje perfecto<span className="text-[#D6A634]">.</span>
            </span>
          </motion.h1>

          {/* Description — Clear, Legible, Premium */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 sm:mt-6 text-[17px] sm:text-[18px] md:text-[19px] text-[#D8D4CC] leading-[1.7] max-w-[560px] font-normal"
          >
            Más de 30 años instalando cocinas en Cataluña con{" "}
            <span className="text-white font-medium">precisión milimétrica</span> y{" "}
            <span className="text-white font-medium">acabados impecables</span>. El montaje decide
            el resultado final de tu cocina.
          </motion.p>

          {/* CTAs — Larger, Impactful */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-3 px-9 h-[52px] rounded-[4px] bg-[#D6A634] text-[#111110] font-sans font-bold text-[14px] uppercase tracking-[0.12em] transition-all duration-300 shadow-[0_4px_20px_rgba(214,166,52,0.30)] hover:bg-[#e2b747] hover:shadow-[0_6px_28px_rgba(214,166,52,0.45)] hover:-translate-y-[1px]"
            >
              <span>Solicitar presupuesto</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">→</span>
            </a>
            <a
              href="#proyectos"
              className="group inline-flex items-center justify-center gap-3 px-8 h-[52px] rounded-[4px] border border-white/40 bg-black/20 backdrop-blur-sm text-white font-sans font-medium text-[14px] uppercase tracking-[0.12em] transition-all duration-300 hover:bg-white/[0.08] hover:border-white/70 hover:-translate-y-[1px]"
            >
              <span>Ver proyectos</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">→</span>
            </a>
          </motion.div>

          {/* Trust Stats — Prominent Values with Architectural Dividers */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 sm:mt-12 pt-7 border-t border-white/20 flex items-center gap-7 sm:gap-10"
          >
            {/* Metric 1 */}
            <div className="flex flex-col">
              <span
                className="text-[28px] sm:text-[32px] md:text-[34px] leading-none text-white font-normal tracking-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                +30 años
              </span>
              <span className="mt-2 text-[12px] sm:text-[13px] uppercase tracking-[0.14em] text-[#B8B4AB] font-medium font-sans">
                De experiencia
              </span>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-10 bg-white/20" />

            {/* Metric 2 */}
            <div className="flex flex-col">
              <span
                className="text-[28px] sm:text-[32px] md:text-[34px] leading-none text-white font-normal tracking-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Cataluña
              </span>
              <span className="mt-2 text-[12px] sm:text-[13px] uppercase tracking-[0.14em] text-[#B8B4AB] font-medium font-sans">
                Cobertura total
              </span>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-10 bg-white/20" />

            {/* Metric 3 */}
            <div className="flex flex-col">
              <span
                className="text-[28px] sm:text-[32px] md:text-[34px] leading-none text-white font-normal tracking-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                500+
              </span>
              <span className="mt-2 text-[12px] sm:text-[13px] uppercase tracking-[0.14em] text-[#B8B4AB] font-medium font-sans">
                Cocinas montadas
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Bottom Micro-copy & Scroll Indicator ─── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pb-7 pt-3 shrink-0 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] font-mono text-white/60">
          <span className="font-semibold text-white/80">Cubikos</span>
          <span>•</span>
          <span>30+ Años de oficio</span>
        </div>
        <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] font-mono text-white/60">
          <span>Scroll</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="text-[#D6A634] inline-block font-sans font-bold text-[14px]"
          >
            ↓
          </motion.span>
        </div>
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