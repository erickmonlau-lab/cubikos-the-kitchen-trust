import { useEffect, useState, useRef, MouseEvent, TouchEvent } from "react";
import { motion, useInView } from "framer-motion";
import heroImg from "@/assets/hero-worker-hq.webp";
import gal3 from "@/assets/gallery-3.webp"; // Error habitual
import gal1 from "@/assets/gallery-1.webp"; // Método Cubikos

/* ───────────── icons ───────────── */
export const Ico = {
  Star: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M12 2l2.95 6.6 7.05.7-5.3 4.8 1.6 7-6.3-3.7-6.3 3.7 1.6-7-5.3-4.8 7.05-.7L12 2z" />
    </svg>
  ),
  Check: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  ),
  Close: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden {...p}>
      <path d="M6 6l12 12M18 6l-6 12" />
    </svg>
  ),
  Arrow: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  Menu: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  Plus: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  Drag: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
      <path d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
    </svg>
  )
};

export const LogoCubikos = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative font-display font-black tracking-normal" style={{ fontSize: '1.4em', lineHeight: 1, letterSpacing: '0.05em' }}>
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
    <svg viewBox="0 0 32 36" className="h-[1.6em] w-auto" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
      <polygon points="16,2 30,10 30,26 16,34 2,26 2,10" fill="none" />
      <polyline points="2,10 16,18 30,10" fill="none" />
      <line x1="16" y1="18" x2="16" y2="34" fill="none" />
    </svg>
  </div>
);

export const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const RevealMask = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
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

  return <span ref={ref}>{val.toLocaleString("es-ES")}{suffix}</span>;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Método", href: "#metodo" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Opiniones", href: "#opiniones" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] py-5" : "bg-transparent py-8"}`}>
      <div className="container-x flex items-center justify-between">
        <a href="#top" className="text-brand transition-transform hover:scale-105 duration-300">
          <LogoCubikos className="text-[22px] md:text-[26px]" />
        </a>
        <nav className="hidden items-center gap-14 lg:flex">
          {navItems.map((i) => (
            <a 
              key={i.href} 
              href={i.href} 
              className={`group relative text-[17px] font-medium tracking-wide transition-colors ${scrolled ? "text-ink hover:text-brand" : "text-white hover:text-white"}`}
            >
              {i.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a 
            href="#contacto" 
            className={`group relative overflow-hidden flex items-center justify-center px-8 h-12 rounded-full font-bold text-[13px] uppercase tracking-[0.15em] transition-all duration-300 ${
              scrolled 
                ? "bg-gradient-to-r from-[#FFDE00] to-[#F39C12] text-ink shadow-[0_5px_20px_rgba(243,156,18,0.4)] hover:shadow-[0_10px_30px_rgba(243,156,18,0.6)] hover:-translate-y-0.5" 
                : "bg-white text-ink shadow-lg hover:shadow-2xl hover:-translate-y-0.5"
            }`}
          >
            <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
            <span className="relative z-10">Solicitar presupuesto</span>
          </a>
        </div>
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
          className={`grid h-12 w-12 place-items-center lg:hidden ${scrolled ? "text-ink" : "text-white"}`}
        >
          {open ? <Ico.Close className="h-8 w-8" /> : <Ico.Menu className="h-8 w-8" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {open && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="lg:hidden bg-background absolute top-full w-full left-0 border-b border-line pb-6"
        >
          <div className="container-x flex flex-col gap-2 pt-4">
            {navItems.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="py-4 text-xl font-bold text-ink border-b border-line/50"
              >
                {i.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="btn-primary mt-6 w-full">
              Solicitar presupuesto
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

const AnimatedScrew = ({ className, delay }: { className?: string, delay: number }) => (
  <motion.div 
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: [0, 1.6, 1], opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4, times: [0, 0.6, 1], ease: ["easeOut", "backOut"] }}
    className={`absolute w-3 h-3 rounded-full bg-gradient-to-br from-neutral-300 to-neutral-500 border border-neutral-600 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_2px_4px_rgba(0,0,0,0.4)] flex items-center justify-center z-10 ${className}`}
  >
    <div className="w-1.5 h-[1.5px] bg-neutral-700/80 rotate-45 rounded-full" />
    <div className="absolute w-1.5 h-[1.5px] bg-neutral-700/80 -rotate-45 rounded-full" />
  </motion.div>
);

const HammerHit = ({ className, delay }: { className: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, rotate: -45, x: -30, y: -30 }}
    whileInView={{ 
      opacity: [0, 1, 1, 0],
      rotate: [-45, -60, 20, 20],
      x: [-30, -40, 0, 10],
      y: [-30, -40, 0, 20],
    }}
    viewport={{ once: true }}
    transition={{ 
      duration: 0.6, 
      delay: delay - 0.25, 
      times: [0, 0.4, 0.6, 1], 
      ease: "easeInOut"
    }}
    className={`absolute z-30 pointer-events-none ${className}`}
  >
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-ink drop-shadow-2xl fill-white/90">
      <path d="m15 12-8.373 8.373a1 1 0 1 1-1.414-1.414L13.586 10.586"/>
      <path d="m18 11.5-4.5-4.5"/>
      <path d="M14 6h3l5 5v3h-3l-5-5Z"/>
    </svg>
  </motion.div>
);

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-ink pt-32 pb-24 md:py-0">
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <svg className="hidden">
          <filter id="crisp-sharpen">
            <feConvolveMatrix order="3" preserveAlpha="true" kernelMatrix="0 -1 0 -1 5 -1 0 -1 0" />
          </filter>
        </svg>
        <img
          src={heroImg}
          alt="Montador profesional ajustando cocina premium"
          className="absolute inset-0 w-full h-full object-cover object-[85%_center] sm:object-[65%_center] md:object-[55%_center] contrast-[1.10] saturate-[1.05]"
          style={{ filter: 'url(#crisp-sharpen)' }}
        />
        {/* Subtle Radial Atmosphere for Text Legibility (No solid blocks) */}
        <div 
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.45)_0%,transparent_65%)] md:bg-[radial-gradient(circle_at_25%_50%,rgba(0,0,0,0.55)_0%,transparent_50%)]" 
        />
        {/* Mobile Dedicated Text Protection Layer */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/90 via-black/40 to-transparent md:hidden" />
      </motion.div>
      
      <div className="relative z-10 w-full h-full flex flex-col justify-center container-x mt-8 md:mt-0">
        <div className="w-full max-w-[480px]">
          <RevealMask>
            <h1 className="font-display font-black text-[clamp(2.5rem,8vw,3.5rem)] md:text-[clamp(3.5rem,5vw,4.5rem)] text-white tracking-tighter leading-[1.05]">
              <span className="block">Una cocina</span>
              <span className="block">perfecta</span>
              <span className="block text-white/90">empieza con un</span>
              <span className="block">montaje perfecto<span className="text-brand">.</span></span>
            </h1>
          </RevealMask>
          
          <FadeUp delay={0.2} className="mt-8 md:mt-10 max-w-[440px]">
            <p className="text-lg md:text-[20px] text-white/95 font-medium tracking-wide leading-relaxed text-balance antialiased drop-shadow-sm">
              Más de 30 años instalando cocinas en toda Cataluña con precisión milimétrica y acabados impecables.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.4} className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
            <a href="#contacto" className="group relative overflow-hidden w-full sm:w-auto flex items-center justify-center px-10 h-16 rounded-full bg-gradient-to-r from-[#FFDE00] to-[#F39C12] text-ink font-black text-[14px] md:text-[16px] uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_10px_40px_rgba(243,156,18,0.5)] hover:shadow-[0_20px_60px_rgba(243,156,18,0.8)] hover:-translate-y-1">
              <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:translate-x-[150%] transition-transform duration-[1.2s] ease-in-out" />
              <span className="relative z-10 drop-shadow-sm">Solicitar presupuesto</span>
            </a>
            <a href="#proyectos" className="group relative overflow-hidden w-full sm:w-auto flex items-center justify-center px-10 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/30 text-white font-bold text-[14px] md:text-[15px] uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-white hover:text-ink hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)] hover:-translate-y-1">
              <span className="relative z-10">Ver proyectos</span>
            </a>
          </FadeUp>
        </div>
        
        {/* Architectural Wood Panel Trust Bar */}
        <FadeUp delay={0.6} className="mt-16 md:mt-24 w-full max-w-[900px]">
          <div 
            className="relative rounded-3xl p-8 md:px-14 md:py-12 shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/20"
            style={{
              backgroundImage: "url('/wood-panel.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Subtle inner shadow for depth, letting the natural wood color shine */}
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_50px_rgba(0,0,0,0.2)] pointer-events-none" />
            
            {/* Skeuomorphic Screws with Hammer Animation */}
            <HammerHit className="top-0 left-0" delay={1.0} />
            <AnimatedScrew className="top-4 left-4 -rotate-12" delay={1.0} />
            
            <HammerHit className="top-0 right-0" delay={1.2} />
            <AnimatedScrew className="top-4 right-4 rotate-45" delay={1.2} />
            
            <HammerHit className="bottom-0 left-0" delay={1.4} />
            <AnimatedScrew className="bottom-4 left-4 rotate-90" delay={1.4} />
            
            <HammerHit className="bottom-0 right-0" delay={1.6} />
            <AnimatedScrew className="bottom-4 right-4 -rotate-45" delay={1.6} />
            
            <div className="relative z-10 grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-4 px-2 py-2">
              <div className="group flex flex-col items-center text-center bg-white/95 backdrop-blur-sm rounded-lg p-5 md:p-6 shadow-md border border-white/50 cursor-default transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl">
                <span className="text-[32px] md:text-[44px] font-black text-ink leading-none tracking-tighter">30+</span>
                <span className="relative inline-block mt-2">
                  <span className="absolute bottom-[-2px] -left-1 -right-1 h-[4px] bg-yellow-400 group-hover:h-full group-hover:bottom-0 transition-all duration-300 rounded-sm" />
                  <span className="relative z-10 text-[11px] md:text-[13px] font-bold text-ink uppercase tracking-[0.2em]">Años</span>
                </span>
              </div>
              
              <div className="group flex flex-col items-center text-center bg-white/95 backdrop-blur-sm rounded-lg p-5 md:p-6 shadow-md border border-white/50 cursor-default transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl">
                <span className="text-[32px] md:text-[44px] font-black text-ink leading-none tracking-tighter">500+</span>
                <span className="relative inline-block mt-2">
                  <span className="absolute bottom-[-2px] -left-1 -right-1 h-[4px] bg-yellow-400 group-hover:h-full group-hover:bottom-0 transition-all duration-300 rounded-sm" />
                  <span className="relative z-10 text-[11px] md:text-[13px] font-bold text-ink uppercase tracking-[0.2em]">Cocinas</span>
                </span>
              </div>
              
              <div className="group flex flex-col items-center text-center bg-white/95 backdrop-blur-sm rounded-lg p-5 md:p-6 shadow-md border border-white/50 cursor-default transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl">
                <span className="text-[26px] md:text-[34px] font-black text-ink leading-none tracking-tight pt-1 md:pt-2">Cataluña</span>
                <span className="relative inline-block mt-2">
                  <span className="absolute bottom-[-2px] -left-1 -right-1 h-[4px] bg-yellow-400 group-hover:h-full group-hover:bottom-0 transition-all duration-300 rounded-sm" />
                  <span className="relative z-10 text-[11px] md:text-[13px] font-bold text-ink uppercase tracking-[0.2em]">Cobertura</span>
                </span>
              </div>
              
              <div className="group flex flex-col items-center text-center bg-white/95 backdrop-blur-sm rounded-lg p-5 md:p-6 shadow-md border border-white/50 cursor-default transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl">
                <span className="text-[26px] md:text-[34px] font-black text-ink leading-none tracking-tight pt-1 md:pt-2">Garantía</span>
                <span className="relative inline-block mt-2">
                  <span className="absolute bottom-[-2px] -left-1 -right-1 h-[4px] bg-yellow-400 group-hover:h-full group-hover:bottom-0 transition-all duration-300 rounded-sm" />
                  <span className="relative z-10 text-[11px] md:text-[13px] font-bold text-ink uppercase tracking-[0.2em]">Profesional</span>
                </span>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export function Diferenciadora() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  const onMouseMove = (e: MouseEvent) => {
    handleMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

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
            className="relative w-full aspect-square md:aspect-[21/9] bg-[#E8E6E1] overflow-hidden cursor-crosshair select-none touch-none shadow-premium"
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
            onMouseDown={() => isDragging.current = true}
            onMouseUp={() => isDragging.current = false}
            onMouseLeave={() => isDragging.current = false}
          >
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
              style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
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
                <li className="flex items-start gap-3"><span className="text-ink mt-1">•</span> Puertas torcidas</li>
                <li className="flex items-start gap-3"><span className="text-ink mt-1">•</span> Holguras visibles</li>
                <li className="flex items-start gap-3"><span className="text-ink mt-1">•</span> Desniveles</li>
              </ul>
            </div>
            <div className="text-right">
              <ul className="space-y-4 font-medium text-lg md:text-xl text-ink inline-block text-left">
                <li className="flex items-start gap-3"><span className="text-brand mt-1">•</span> Ajuste láser</li>
                <li className="flex items-start gap-3"><span className="text-brand mt-1">•</span> Nivelación perfecta</li>
                <li className="flex items-start gap-3"><span className="text-brand mt-1">•</span> Acabados premium</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
