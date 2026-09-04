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

  return (
    <section
      ref={sectionRef}
      id="experiencia"
      className="relative bg-[#090908] text-[#FAF8F5] py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-b border-white/[0.08]"
    >
      {/* Background Architectural Grid & Subtle Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #FAF8F5 1px, transparent 1px),
            linear-gradient(to bottom, #FAF8F5 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#D6A634]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* ─── Main Two-Column Layout ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          
          {/* ════════ LEFT COLUMN: Pure Architectural Photo with Integrated 30+ ════════ */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: easing }}
              className="relative w-full h-[420px] sm:h-[500px] lg:h-[580px] rounded-[22px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-[#141413]"
            >
              <img
                src={workerImg}
                alt="Montador profesional de Cubikos ajustando mueble de cocina"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />

              {/* Gradient overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

              {/* Integrated 30+ Badge */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10">
                <span
                  className="block text-[#D6A634] leading-[0.9] font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(4.2rem, 7vw, 6rem)",
                  }}
                >
                  30+
                </span>
                <span className="block font-sans font-black text-[13px] sm:text-[14px] tracking-[0.25em] text-white uppercase mt-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                  AÑOS DE OFICIO
                </span>
              </div>

              {/* Bottom Subtle Photo Caption */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="text-[12px] sm:text-[13px] font-mono tracking-[0.16em] uppercase text-[#D6A634] font-semibold">
                  PRECISIÓN MILIMÉTRICA EN OBRA
                </span>
              </div>
            </motion.div>
          </div>

          {/* ════════ RIGHT COLUMN: Large Typography, Short Punchy Copy & 4 Points ════════ */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center py-2 lg:py-4">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: easing }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-6 h-[2.5px] bg-[#D6A634]" />
              <span className="text-[13px] sm:text-[14px] font-sans font-bold tracking-[0.22em] text-[#D6A634] uppercase">
                EL VALOR DEL ENFOQUE
              </span>
            </motion.div>

            {/* Headline with Large Font */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: easing }}
              className="text-white font-normal leading-[1.04] tracking-[-0.025em]"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.6rem, 4.4vw, 4.2rem)",
              }}
            >
              Tres décadas perfeccionando{" "}
              <span className="italic text-[#D6A634] font-medium">
                un único oficio.
              </span>
            </motion.h2>

            {/* Clear, Legible Short Narrative (No walls of text) */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.32, ease: easing }}
              className="mt-6 text-[17px] sm:text-[19px] lg:text-[20px] text-[#D0CCC3] leading-[1.6] max-w-xl font-normal"
            >
              Mientras otros amplían servicios a reformas y decenas de gremios, nosotros llevamos más de treinta años dedicados a una sola misión:
            </motion.p>

            {/* Big Verdict Statement */}
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.42, ease: easing }}
              className="mt-6 py-2 pl-5 border-l-[3.5px] border-[#D6A634]"
            >
              <p className="font-sans font-black text-[20px] sm:text-[24px] lg:text-[26px] text-white uppercase tracking-[0.03em] leading-tight">
                MONTAR COCINAS CON PRECISIÓN ABSOLUTA.
              </p>
            </motion.div>

            {/* ─── 4 Clean Editorial Principles (Bigger text, no card clutter) ─── */}
            <div className="mt-10 sm:mt-12 pt-7 border-t border-white/15">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7 sm:gap-y-8">
                {[
                  { num: "01", title: "CADA AJUSTE", desc: "Tolerancia cero en frentes y herrajes." },
                  { num: "02", title: "CADA NIVELACIÓN", desc: "Alineación láser milimétrica." },
                  { num: "03", title: "CADA ENCUENTRO", desc: "Transiciones limpias con paredes y techos." },
                  { num: "04", title: "CADA ACABADO", desc: "Remates de ebanistería impecables." },
                ].map((item, idx) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + idx * 0.08, ease: easing }}
                    className="flex items-start gap-4"
                  >
                    <span className="font-mono text-[14px] sm:text-[15px] font-bold text-[#D6A634] tracking-wider pt-0.5 shrink-0">
                      {item.num}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-sans font-bold text-[15px] sm:text-[16px] text-white uppercase tracking-[0.08em] leading-snug">
                        {item.title}
                      </span>
                      <span className="text-[14px] sm:text-[15px] text-[#A6A29A] font-normal mt-1 leading-snug">
                        {item.desc}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

