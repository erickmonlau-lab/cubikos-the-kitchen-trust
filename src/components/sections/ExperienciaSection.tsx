import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import workerImg from "@/assets/hero-worker-master.webp";

const easing = [0.22, 1, 0.36, 1];

const precisionPillars = [
  {
    num: "01",
    label: "CADA AJUSTE",
    detail: "Tolerancia cero en bisagras y frentes.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#D6A634]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
        <circle cx="9" cy="7" r="2" fill="#0B0B0B" />
        <circle cx="15" cy="12" r="2" fill="#0B0B0B" />
        <circle cx="11" cy="17" r="2" fill="#0B0B0B" />
      </svg>
    ),
  },
  {
    num: "02",
    label: "CADA NIVELACIÓN",
    detail: "Alineación láser continua en módulos e islas.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#D6A634]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="3" x2="12" y2="7" strokeLinecap="round" />
        <line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round" />
        <line x1="3" y1="12" x2="7" y2="12" strokeLinecap="round" />
        <line x1="17" y1="12" x2="21" y2="12" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" fill="#D6A634" stroke="none" />
      </svg>
    ),
  },
  {
    num: "03",
    label: "CADA ENCUENTRO",
    detail: "Transiciones limpias con paredes y techos desplomados.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#D6A634]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4v16h16" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 14l10-10" strokeDasharray="2 2" />
        <rect x="9" y="9" width="7" height="7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "04",
    label: "CADA ACABADO",
    detail: "Remates de ebanistería y sellados invisibles.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#D6A634]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ExperienciaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const numOpacity = useTransform(scrollYProgress, [0, 0.35, 0.8], [0.3, 1, 0.4]);

  return (
    <section
      ref={sectionRef}
      id="experiencia"
      className="relative bg-[#090908] text-[#FAF8F5] py-24 sm:py-32 lg:py-40 overflow-hidden border-t border-b border-white/[0.07]"
    >
      {/* Background Architectural Grid & Subtle Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #FAF8F5 1px, transparent 1px),
            linear-gradient(to bottom, #FAF8F5 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#D6A634]/[0.035] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top Editorial Eyebrow & Technical Ruler Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-10 sm:pb-14 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#D6A634]" />
            <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.25em] text-[#D6A634] uppercase font-semibold">
              OFICIO ARTESANAL &bull; DÉCADAS DE ESPECIALIZACIÓN
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono text-white/40">
            <span>COORD. 41.3851° N, 2.1734° E</span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="hidden md:inline">REF: ARCHITECTURAL MILLWORK</span>
          </div>
        </div>

        {/* ─── Main 2/3 + 1/3 Editorial Split ─── */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ════════ LEFT COLUMN (2/3 width on desktop: 7 cols) — Photo & Visual Authority ════════ */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Massive Graphic "30+ AÑOS" Lockup */}
            <div className="relative flex flex-wrap items-baseline gap-x-4 sm:gap-x-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.9, ease: easing }}
                className="font-serif text-[5.5rem] sm:text-[7.5rem] md:text-[9rem] lg:text-[10rem] leading-[0.88] tracking-[-0.03em] font-normal text-[#D6A634]"
                style={{ opacity: numOpacity }}
              >
                30+
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: easing }}
                className="flex flex-col justify-end pb-3 sm:pb-5"
              >
                <span className="font-display font-black text-[24px] sm:text-[32px] md:text-[38px] leading-tight text-white tracking-tight uppercase">
                  AÑOS DE OFICIO
                </span>
                <span className="text-[13px] sm:text-[14px] font-sans font-medium text-[#A6A29A] tracking-wider uppercase mt-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D6A634]" />
                  Un solo estándar: la perfección
                </span>
              </motion.div>
            </div>

            {/* Main Immersive Photography with Technical Craftsmanship Overlays */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.1, delay: 0.3, ease: easing }}
              className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] rounded-[18px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group"
            >
              <motion.img
                style={{ y: photoY }}
                src={workerImg}
                alt="Maestro montador de Cubikos instalando estructura de cocina de alta gama con precisión"
                loading="lazy"
                className="w-full h-[115%] object-cover object-center transition-transform duration-1000 group-hover:scale-[1.02]"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090908] via-transparent to-black/25 pointer-events-none" />

              {/* Technical Calibration Overlay Elements */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6A634] animate-pulse" />
                <span>AJUSTE MILIMÉTRICO EN OBRA</span>
              </div>

              {/* Technical crosshair at bottom right */}
              <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-[8px] bg-[#090908]/90 backdrop-blur-md border border-white/15 text-white shadow-xl">
                <div className="w-7 h-7 rounded-[4px] bg-[#D6A634]/10 border border-[#D6A634]/30 flex items-center justify-center text-[#D6A634]">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold uppercase tracking-wider font-sans leading-none">Nivelación 0.0°</span>
                  <span className="text-[10px] text-[#A6A29A] font-mono mt-0.5">Control de plomada digital</span>
                </div>
              </div>

              {/* Bottom Quote on Photo */}
              <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 max-w-sm">
                <p className="text-[13px] sm:text-[14px] text-white/90 font-serif italic leading-snug drop-shadow-md">
                  &ldquo;El montaje no es el último paso de la cocina. Es el que decide si todo lo anterior ha valido la pena.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>

          {/* ════════ RIGHT COLUMN (1/3 width on desktop: 5 cols) — Storytelling & The 4 Pillars ════════ */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2 lg:pt-4">
            
            {/* Editorial Headline */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.25, ease: easing }}
              >
                <span className="text-[12px] font-mono uppercase tracking-[0.2em] text-[#D6A634] font-semibold block mb-2">
                  EL VALOR DEL ENFOQUE
                </span>
                <h2
                  className="text-white font-normal leading-[1.06] tracking-[-0.02em]"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.2rem, 3.4vw, 3.5rem)',
                  }}
                >
                  Tres décadas perfeccionando{" "}
                  <span className="italic text-[#D6A634]">un único oficio.</span>
                </h2>
              </motion.div>

              {/* Narrative Editorial Copy */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.38, ease: easing }}
                className="mt-6 space-y-4 text-[15px] sm:text-[16px] text-[#C8C4BB] leading-[1.65] font-normal"
              >
                <p>
                  Mientras otras empresas dispersan su atención entre reformas generales, coordinación de gremios y decenas de servicios distintos, en Cubikos hemos dedicado más de treinta años a una sola especialidad:
                </p>
                <div className="py-2 border-l-2 border-[#D6A634] pl-4 my-3">
                  <p className="font-display font-bold text-[18px] sm:text-[20px] text-white tracking-tight uppercase leading-snug">
                    Montar cocinas con precisión absoluta.
                  </p>
                </div>
                <p className="text-[14px] text-[#9E9A92]">
                  Un oficio refinado tras más de 10.000 instalaciones por toda Cataluña, donde cada unión y cada ángulo responde a un método perfeccionado.
                </p>
              </motion.div>
            </div>

            {/* ─── The 4 Precision Pillars (Microblocks 01 to 04) ─── */}
            <div className="mt-10 sm:mt-12 pt-8 border-t border-white/10">
              <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-white/50 mb-5 font-semibold">
                SISTEMA DE CALIDAD MILIMÉTRICA
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {precisionPillars.map((pillar, idx) => (
                  <motion.div
                    key={pillar.num}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.45 + idx * 0.1, ease: easing }}
                    className="p-4 rounded-[10px] bg-white/[0.03] border border-white/[0.08] hover:border-[#D6A634]/40 hover:bg-white/[0.05] transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[12px] font-bold text-[#D6A634] tracking-wider">
                        {pillar.num}
                      </span>
                      <div className="w-6 h-6 rounded-[4px] bg-white/[0.04] flex items-center justify-center group-hover:scale-110 transition-transform">
                        {pillar.icon}
                      </div>
                    </div>
                    <div className="text-[13px] font-sans font-bold text-white uppercase tracking-wider">
                      {pillar.label}
                    </div>
                    <p className="text-[11.5px] text-[#A6A29A] mt-1 leading-snug font-normal">
                      {pillar.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technical Stamp Bottom Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-8 pt-4 flex items-center justify-between text-[11px] font-mono text-white/40"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6A634]" />
                <span>CALIBRACIÓN CERTIFICADA CUBIKOS</span>
              </div>
              <span>100% GARANTÍA DE ENCUENTRO</span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

