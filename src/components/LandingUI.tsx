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
  const [lang, setLang] = useState<"ES" | "CA" | "EN">("ES");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3.5 sm:pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
      <div
        className={`max-w-[1380px] mx-auto h-[64px] sm:h-[68px] px-4 sm:px-6 lg:px-7 rounded-full flex items-center justify-between pointer-events-auto transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-[0_12px_36px_rgba(0,0,0,0.35)] border border-black/5"
            : "bg-[#FAF8F5] shadow-[0_8px_30px_rgba(0,0,0,0.22)] border border-black/5"
        }`}
      >
        {/* Left: Brand Logo */}
        <a
          href="#top"
          className="flex items-center text-[#111111] hover:opacity-85 transition-opacity shrink-0"
        >
          <LogoCubikos className="text-[20px] sm:text-[22px]" />
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
          {navItems.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-[14px] font-medium text-[#2B2927] hover:text-[#D6A634] transition-colors duration-200"
            >
              {i.label}
            </a>
          ))}
        </nav>

        {/* Right: Language Selector + WhatsApp Pill */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Language Pill Switcher */}
          <div className="flex items-center h-10 px-2 rounded-full bg-[#ECE8E1]/80 border border-black/5 text-[11px] font-bold text-[#55524E]">
            {(["ES", "CA", "EN"] as const).map((l, idx) => (
              <div key={l} className="flex items-center">
                <button
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                    lang === l
                      ? "bg-white text-[#111111] shadow-[0_1px_4px_rgba(0,0,0,0.12)] font-black"
                      : "hover:text-[#111111]"
                  }`}
                >
                  {l}
                </button>
                {idx < 2 && <span className="text-[#C4BFB6] mx-0.5 font-normal">|</span>}
              </div>
            ))}
          </div>

          {/* WhatsApp Pill Button */}
          <a
            href="https://wa.me/34666871144?text=Hola,%20me%20interesa%20solicitar%20un%20presupuesto%20para%20montaje%20de%20cocina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-[#0F8E47] hover:bg-[#0c7a3c] text-white text-[13px] font-semibold tracking-wide shadow-[0_2px_10px_rgba(15,142,71,0.3)] hover:shadow-[0_4px_14px_rgba(15,142,71,0.45)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center lg:hidden text-[#111111] hover:text-[#D6A634] transition-colors"
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
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90] lg:hidden pointer-events-auto"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Sliding Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: open ? "0%" : "100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 right-0 h-full w-[82%] max-w-sm bg-[#121211] text-[#F5F1E8] z-[100] p-6 flex flex-col shadow-2xl lg:hidden pointer-events-auto"
      >
        <div className="flex justify-between items-center pb-6 border-b border-white/10 mb-8">
          <LogoCubikos className="text-[20px] text-white" />
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
            href="https://wa.me/34666871144"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 flex items-center justify-center gap-2 h-12 rounded-full bg-[#0F8E47] text-white font-bold text-xs uppercase tracking-[0.14em] shadow-[0_4px_16px_rgba(15,142,71,0.4)]"
          >
            <span>Contactar por WhatsApp</span>
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
      className="relative w-full min-h-[100svh] lg:min-h-screen bg-[#0E0E0D] text-white flex flex-col justify-between pt-20 sm:pt-24 pb-3"
    >
      {/* ─── Hero Two-Column Container ─── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14 py-2 lg:py-4">

        {/* ─── LEFT COLUMN (46% width) ─── */}
        <div className="w-full lg:w-[48%] xl:w-[46%] flex flex-col justify-center shrink-0">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
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
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[1.04] tracking-[-0.02em] font-normal"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4.3vw, 4.4rem)',
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
            transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-[14px] sm:text-[15px] lg:text-[16px] text-[#C8C4BB] leading-[1.58] max-w-[500px] font-normal"
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
            transition={{ duration: 0.7, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
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

        {/* ─── RIGHT COLUMN (High-end Contained Photography) ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full lg:w-[50%] xl:w-[52%] h-[400px] sm:h-[460px] lg:h-[calc(100vh-170px)] min-h-[380px] lg:min-h-[480px] max-h-[720px] rounded-[24px] overflow-hidden shrink-0 shadow-[0_16px_50px_rgba(0,0,0,0.6)]"
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

          {/* Floating Architectural Badge — Bottom Left of Image */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 z-20 flex items-stretch gap-4 px-5 py-3.5 rounded-[8px] bg-[#0E0E0D]/92 backdrop-blur-md border border-white/15 shadow-[0_16px_36px_rgba(0,0,0,0.85)]"
          >
            {/* Architectural accent marker */}
            <div className="w-[3px] bg-[#D6A634] rounded-full my-0.5 shrink-0" />

            <div className="flex items-center gap-3.5">
              {/* Cubikos Geometric Precision Icon */}
              <div className="w-9 h-9 rounded-[6px] bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-[#D6A634]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Caliper / Square Gauge precision symbol */}
                  <path d="M4 20h16M4 20V4l6 6v10M10 14h10M10 8h6M10 20h4" />
                </svg>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] sm:text-[14px] font-bold text-white uppercase tracking-[0.12em] font-sans">
                    PRECISIÓN MILIMÉTRICA
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D6A634]" />
                </div>
                <span className="text-[12px] sm:text-[12.5px] text-[#A6A29A] font-medium tracking-[0.02em] mt-0.5">
                  Acabados de ebanistería y montaje certificado
                </span>
              </div>
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
    <section id="metodo" className="bg-background text-ink py-16 md:py-24">
      <div className="container-x">
        {/* Massive Headline */}
        <div className="max-w-5xl mb-12 md:mb-16 text-center md:text-left">
          <span className="eyebrow text-ink-soft">El montaje decide el resultado final</span>
          <h2 className="font-display font-black text-[2.8rem] sm:text-[3.5rem] md:text-[4.75rem] leading-[0.98] tracking-tighter mt-4 text-balance">
            Una cocina de 25.000€ puede parecer de 5.000€ si el montaje falla.
          </h2>
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

export function CintasKinetic() {
  const tape1 = [
    "PRECISIÓN MILIMÉTRICA",
    "MONTAJE PROFESIONAL",
    "30+ AÑOS DE OFICIO",
    "EBANISTERÍA A MEDIDA",
    "AJUSTE LÁSER EN OBRA",
    "10.000+ COCINAS INSTALADAS",
    "CATALUÑA",
    "TOLERANCIA CERO",
    "ACABADOS IMPECABLES",
  ];

  const tape2 = [
    "GARANTÍA TOTAL",
    "ISLAS Y COLUMNAS",
    "ESPECIALISTAS EXCLUSIVOS",
    "ENCLAVES PERFECTOS",
    "INGENIERÍA & OFICIO",
    "CUBIKOS.ES",
    "CALIBRACIÓN CERTIFICADA",
    "MÁXIMA DURABILIDAD",
  ];

  return (
    <div className="relative w-full py-10 sm:py-14 overflow-hidden bg-[#090908] select-none pointer-events-none">
      {/* Tape 1: Gold ribbon slightly angled (-1.6deg) */}
      <div className="relative -rotate-[1.8deg] scale-105 z-10 py-3 sm:py-3.5 bg-[#D6A634] text-[#0E0E0D] shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
        <div className="animate-marquee-left flex items-center whitespace-nowrap">
          {[...tape1, ...tape1, ...tape1, ...tape1].map((text, i) => (
            <div key={i} className="flex items-center">
              <span className="font-display font-black text-[14px] sm:text-[17px] md:text-[19px] tracking-[0.14em] uppercase px-4 sm:px-6">
                {text}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#0E0E0D]/80 shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Tape 2: Dark ribbon crossing in opposite angle (+1.8deg) */}
      <div className="relative rotate-[1.6deg] scale-105 -mt-3 sm:-mt-4 z-20 py-3 sm:py-3.5 bg-[#141413] border-y border-[#D6A634]/40 text-white shadow-[0_14px_40px_rgba(0,0,0,0.8)]">
        <div className="animate-marquee-right flex items-center whitespace-nowrap">
          {[...tape2, ...tape2, ...tape2, ...tape2].map((text, i) => (
            <div key={i} className="flex items-center">
              <span className="font-display font-black text-[14px] sm:text-[17px] md:text-[19px] tracking-[0.14em] uppercase px-4 sm:px-6 text-white/95">
                {text}
              </span>
              <span className="text-[#D6A634] font-bold text-sm sm:text-base shrink-0">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}