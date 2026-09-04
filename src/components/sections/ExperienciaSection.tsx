import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import workerImg from "@/assets/hero-worker-master.webp";

const easing = [0.22, 1, 0.36, 1];

const precisionList = [
  {
    num: "01",
    title: "CADA AJUSTE",
    desc: "Tolerancia cero.",
  },
  {
    num: "02",
    title: "CADA NIVELACIÓN",
    desc: "Alineación perfecta.",
  },
  {
    num: "03",
    title: "CADA ENCUENTRO",
    desc: "Transiciones limpias.",
  },
  {
    num: "04",
    title: "CADA ACABADO",
    desc: "Remates impecables.",
  },
];

export default function ExperienciaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      id="experiencia"
      className="relative bg-[#F4F2ED] text-[#111111] py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-b border-black/[0.06]"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* ─── Editorial Grid: Left Photo (~46%) + Right Storytelling (~54%) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-stretch">
          
          {/* ════════ LEFT COLUMN: Pure Architectural Photo with Integrated 30+ Lockup ════════ */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: easing }}
              className="relative w-full h-full min-h-[440px] sm:min-h-[540px] lg:min-h-[620px] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.08)] bg-[#E8E5DF]"
            >
              <img
                src={workerImg}
                alt="Montador profesional de Cubikos ajustando mueble de cocina a medida"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />

              {/* Elegant Subtle Warm Shadow Gradient for Badge Legibility */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, transparent 40%, rgba(0,0,0,0.2) 100%)",
                }}
              />

              {/* 30+ AÑOS Integrated Badge in Top-Left of Photography */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25, ease: easing }}
                className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10 flex flex-col"
              >
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-[#D6A634] leading-none font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(3.8rem, 6.5vw, 5.5rem)",
                    }}
                  >
                    30+
                  </span>
                </div>
                <span className="font-sans font-bold text-[12px] sm:text-[13px] tracking-[0.24em] text-white uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] mt-0.5">
                  AÑOS DE OFICIO
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* ════════ RIGHT COLUMN: Editorial Storytelling, Verdict & Clean List ════════ */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-between py-2 lg:py-4">
            <div>
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15, ease: easing }}
                className="flex items-center gap-3 mb-4 sm:mb-5"
              >
                <span className="w-5 h-[2px] bg-[#D6A634]" />
                <span className="text-[12px] sm:text-[13px] font-sans font-bold tracking-[0.22em] text-[#D6A634] uppercase">
                  EL VALOR DEL ENFOQUE
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.25, ease: easing }}
                className="text-[#111111] font-normal leading-[1.05] tracking-[-0.025em]"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.35rem, 4vw, 3.8rem)",
                }}
              >
                Tres décadas perfeccionando{" "}
                <span className="italic text-[#111111] font-medium underline decoration-[#D6A634] decoration-2 underline-offset-4">
                  un único oficio.
                </span>
              </motion.h2>

              {/* Short, Impactful Copy */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.38, ease: easing }}
                className="mt-6 sm:mt-7 space-y-3 text-[16px] sm:text-[17px] text-[#555555] leading-[1.62] max-w-xl font-normal"
              >
                <p>
                  Mientras otros amplían servicios, nosotros llevamos más de 30 años perfeccionando una sola especialidad: el montaje de cocinas.
                </p>
                <p className="text-[15px] text-[#777777]">
                  Más de 10.000 instalaciones perfeccionando cada detalle.
                </p>
              </motion.div>

              {/* Authority Verdict Statement */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.48, ease: easing }}
                className="mt-8 sm:mt-9 pl-4 border-l-[3px] border-[#D6A634]"
              >
                <p className="font-sans font-black text-[18px] sm:text-[21px] lg:text-[23px] text-[#111111] uppercase tracking-[0.04em] leading-snug">
                  MONTAR COCINAS CON PRECISIÓN ABSOLUTA.
                </p>
              </motion.div>
            </div>

            {/* ─── 4 Principles Editorial List (Without Cards) ─── */}
            <div className="mt-10 sm:mt-12 pt-7 border-t border-black/10">
              <div className="grid grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-6 sm:gap-y-8">
                {precisionList.map((item, idx) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.55 + idx * 0.08, ease: easing }}
                    className="flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[12px] sm:text-[13px] font-bold text-[#D6A634] tracking-wider">
                        {item.num}
                      </span>
                      <span className="font-sans font-bold text-[13px] sm:text-[14px] text-[#111111] uppercase tracking-[0.08em]">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[13px] sm:text-[14px] text-[#666666] font-normal pl-6">
                      {item.desc}
                    </span>
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

