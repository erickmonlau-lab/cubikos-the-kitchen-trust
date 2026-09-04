import { memo, useEffect, useState, useRef, MouseEvent, TouchEvent, type SVGProps, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import heroImg from "@/assets/hero-tio.webp";
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
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0E0E0D]/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.6)] h-[68px]"
          : "bg-[#0E0E0D] border-b border-transparent h-[76px]"
      }`}
    >
      <div className="max-w-[1440px] mx-auto h-full px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="text-white transition-opacity hover:opacity-90 duration-200 shrink-0">
          <LogoCubikos className="text-[20px] md:text-[23px]" />
        </a>

        {/* Centered Navigation */}
        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-[13px] font-medium tracking-[0.06em] text-white/80 transition-colors duration-200 hover:text-[#D6A634]"
            >
              {i.label}
            </a>
          ))}
        </nav>

        {/* Header Right CTA */}
        <div className="hidden lg:block shrink-0">
          <a
            href="#contacto"
            className="group inline-flex items-center justify-center gap-2 px-6 h-10 rounded-[6px] font-bold text-[12px] uppercase tracking-[0.14em] transition-all duration-300 bg-[#D6A634] text-[#111110] shadow-[0_2px_14px_rgba(214,166,52,0.3)] hover:shadow-[0_4px_22px_rgba(214,166,52,0.5)] hover:bg-[#e0b240] hover:-translate-y-0.5"
          >
            <span>SOLICITAR PRESUPUESTO</span>
            <span className="font-bold transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
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
            className="mt-6 flex items-center justify-center gap-2 h-12 rounded-[6px] bg-[#D6A634] text-[#111110] font-bold text-xs uppercase tracking-[0.16em] shadow-[0_4px_16px_rgba(214,166,52,0.3)] hover:bg-[#c4972c] transition-colors"
          >
            <span>SOLICITAR PRESUPUESTO</span>
            <span>→</span>
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
      className="relative w-full h-screen min-h-[640px] max-h-[1050px] overflow-hidden bg-[#0E0E0D] flex flex-col justify-between"
    >
      {/* Header spacer */}
      <div className="w-full h-[76px] shrink-0" />

      {/* ─── Hero Two-Column Container ─── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex-1 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 min-h-0 py-2 lg:py-4">

        {/* ─── LEFT COLUMN (45% width) ─── */}
        <div className="w-full lg:w-[46%] xl:w-[45%] flex flex-col justify-center min-h-0 my-auto">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-3 lg:mb-4"
          >
            <span className="w-7 h-[2.5px] bg-[#D6A634] shrink-0" />
            <span className="text-[13px] sm:text-[14px] uppercase tracking-[0.2em] font-bold text-[#D6A634]">
              MONTAJE PROFESIONAL DE COCINAS
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[1.02] tracking-[-0.02em] font-normal"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.35rem, 4.3vw, 4.4rem)',
            }}
          >
            <span className="block">Una cocina perfecta</span>
            <span className="block">empieza con un</span>
            <span className="block">
              montaje perfecto<span className="text-[#D6A634]">.</span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3.5 lg:mt-4 text-[14px] sm:text-[15px] lg:text-[16px] text-[#C8C4BB] leading-[1.58] max-w-[500px] font-normal"
          >
            Más de 30 años instalando cocinas en Cataluña con{" "}
            <span className="text-white font-semibold">precisión milimétrica</span> y{" "}
            <span className="text-white font-semibold">acabados impecables</span>. El montaje decide
            el resultado final de tu cocina.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 lg:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2.5 px-7 h-[46px] rounded-[6px] bg-[#D6A634] text-[#111110] font-sans font-bold text-[13px] uppercase tracking-[0.12em] transition-all duration-300 shadow-[0_4px_18px_rgba(214,166,52,0.32)] hover:bg-[#e2b747] hover:shadow-[0_6px_26px_rgba(214,166,52,0.48)] hover:-translate-y-[1px]"
            >
              <span>SOLICITAR PRESUPUESTO</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">→</span>
            </a>
            <a
              href="#proyectos"
              className="group inline-flex items-center justify-center gap-2.5 px-6 h-[46px] rounded-[6px] border border-white/35 bg-black/20 text-white font-sans font-semibold text-[13px] uppercase tracking-[0.12em] transition-all duration-300 hover:bg-white/[0.08] hover:border-white/70 hover:-translate-y-[1px]"
            >
              <span>VER PROYECTOS</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">→</span>
            </a>
          </motion.div>

          {/* Horizontal Stats Row with Linear Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.68, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 lg:mt-7 pt-5 border-t border-white/15 grid grid-cols-3 gap-3 sm:gap-4 items-start w-full max-w-[520px]"
          >
            {/* Stat 1 */}
            <div className="flex flex-col pr-2">
              <svg className="w-4 h-4 text-[#D6A634] mb-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span
                className="text-[22px] sm:text-[26px] lg:text-[28px] leading-none text-white font-normal tracking-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                +30 años
              </span>
              <span className="mt-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#908C84] font-semibold font-sans">
                DE EXPERIENCIA
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col px-2 sm:px-3 border-l border-white/15">
              <svg className="w-4 h-4 text-[#D6A634] mb-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
              <span
                className="text-[22px] sm:text-[26px] lg:text-[28px] leading-none text-white font-normal tracking-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                500+
              </span>
              <span className="mt-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#908C84] font-semibold font-sans">
                COCINAS MONTADAS
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col pl-2 sm:pl-3 border-l border-white/15">
              <svg className="w-4 h-4 text-[#D6A634] mb-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span
                className="text-[22px] sm:text-[26px] lg:text-[28px] leading-none text-white font-normal tracking-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Cataluña
              </span>
              <span className="mt-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#908C84] font-semibold font-sans">
                COBERTURA TOTAL
              </span>
            </div>
          </motion.div>
        </div>

        {/* ─── RIGHT COLUMN (54–55% width) — High-end Contained Photography ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full lg:w-[54%] xl:w-[55%] h-[40vh] sm:h-[46vh] lg:h-[calc(100vh-140px)] max-h-[820px] rounded-[24px] overflow-hidden shrink-0 shadow-[0_12px_44px_rgba(0,0,0,0.7)]"
        >
          <img
            src={heroImg}
            alt="Raphael, montador profesional de Cubikos, ajustando armarios de cocina de lujo"
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover object-[58%_18%]"
          />

          {/* Subtle warm architectural gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(14,14,13,0.15) 0%, transparent 40%, rgba(14,14,13,0.45) 100%)",
            }}
          />

          {/* Floating UI Badge — Bottom Left of Image */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 z-20 flex items-center gap-3.5 px-5 py-3.5 rounded-[14px] bg-[#0E0E0D]/90 backdrop-blur-md border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.7)]"
          >
            <div className="w-10 h-10 rounded-full bg-[#D6A634]/15 border border-[#D6A634]/35 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#D6A634]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="22" y1="12" x2="18" y2="12" />
                <line x1="6" y1="12" x2="2" y2="12" />
                <line x1="12" y1="6" x2="12" y2="2" />
                <line x1="12" y1="22" x2="12" y2="18" />
              </svg>
            </div>
            <div className="flex flex-col pr-1">
              <span className="text-[13px] sm:text-[14px] font-bold text-white uppercase tracking-[0.14em] leading-tight">
                PRECISIÓN MILIMÉTRICA
              </span>
              <span className="text-[12.5px] sm:text-[13px] text-[#D8D4CC] font-normal leading-tight mt-1">
                Acabados impecables garantizados
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Bottom Micro-Copy Bar ─── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 pb-3.5 pt-1 shrink-0 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2.5 text-[13px] sm:text-[14px] uppercase tracking-[0.18em] font-sans font-medium text-white/70">
          <span className="font-bold text-white/90">CUBIKOS</span>
          <span className="text-[#D6A634]">•</span>
          <span>30+ AÑOS DE OFICIO</span>
        </div>
        <div className="flex items-center gap-2 text-[13px] sm:text-[14px] uppercase tracking-[0.18em] font-sans font-medium text-white/70">
          <span>SCROLL</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="text-[#D6A634] inline-block font-sans font-bold text-[16px]"
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