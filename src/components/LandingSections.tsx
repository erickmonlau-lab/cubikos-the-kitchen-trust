import React from "react";
import { FadeUp, Ico, RevealMask, Counter } from "./LandingUI";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { PhoneCall, FileSearch, Ruler, Hammer, CheckCircle, User } from "lucide-react";

import showcase1 from "@/assets/showcase-1.webp";
import showcase2 from "@/assets/showcase-2.webp";
import showcase3 from "@/assets/showcase-3.webp";

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

const PremiumFade = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.8, delay, ease: easing }}
    className={className}
  >
    {children}
  </motion.div>
);

const PremiumScale = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.8, delay, ease: easing }}
    className={className}
  >
    {children}
  </motion.div>
);

const Odometer = ({ value, className = "" }: { value: string; className?: string }) => {
  return (
    <div className={`flex items-baseline ${className}`}>
      {value.split("").map((char, i) => {
        if (isNaN(parseInt(char))) {
          return (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {char}
            </motion.span>
          );
        }
        const num = parseInt(char);
        const targetIndex = num === 0 ? 10 : num;
        return (
          <div key={i} className="relative inline-block overflow-hidden" style={{ height: "1em" }}>
            <span className="invisible px-[2px]">{num}</span>
            <motion.div
              initial={{ y: 0 }}
              whileInView={{ y: `calc(-100% * ${targetIndex} / 11)` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute top-0 left-0 flex flex-col"
              style={{ height: "1100%" }}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n, idx) => (
                <span
                  key={idx}
                  className="flex items-center justify-center leading-none px-[2px]"
                  style={{ height: `${100 / 11}%` }}
                >
                  {n}
                </span>
              ))}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export function Experiencia() {
  return (
    <section
      id="experiencia"
      className="relative bg-[#050505] text-[#FAFAF8] py-32 md:py-48 overflow-hidden z-10"
    >
      {/* Noise Texture & Glow */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      ></div>

      <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] bg-brand/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12">
          {/* IZQUIERDA */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <PremiumScale>
              <div className="font-display font-black leading-none tracking-tighter text-brand text-[8rem] sm:text-[11rem] md:text-[14rem] lg:text-[15rem]">
                <Odometer value="30+" />
              </div>
            </PremiumScale>
            <PremiumFade delay={0.2} className="mt-8">
              <p className="font-sans text-[22px] font-medium text-[#FAFAF8] max-w-sm leading-snug">
                Especialistas exclusivamente
                <br />
                en montaje de cocinas.
              </p>
            </PremiumFade>
          </div>

          {/* DERECHA */}
          <div className="lg:col-span-7 lg:pl-12 flex flex-col justify-center pt-4 lg:pt-12">
            <PremiumFade delay={0.1}>
              <h2 className="font-display font-bold text-[40px] md:text-[56px] leading-[1.1] text-[#FAFAF8] text-balance">
                Tres décadas perfeccionando un único oficio.
              </h2>
            </PremiumFade>

            <PremiumFade
              delay={0.3}
              className="mt-12 space-y-6 text-xl md:text-[22px] text-[#EDEBE8] font-medium leading-relaxed max-w-3xl"
            >
              <p>
                Mientras otras empresas reparten su atención entre reformas, coordinación de gremios
                y decenas de servicios distintos, Cubikos ha dedicado más de treinta años a una sola
                misión:
              </p>
              <p className="font-bold text-[#FAFAF8]">Montar cocinas con precisión absoluta.</p>
              <div>
                <p>Cada ajuste.</p>
                <p>Cada nivelación.</p>
                <p>Cada encuentro.</p>
                <p>Cada acabado.</p>
              </div>
              <p className="text-brand font-bold pt-4">
                Perfeccionados tras más de 10.000 instalaciones.
              </p>
            </PremiumFade>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsGrid() {
  return (
    <section className="bg-[#FAFAF8] py-16 md:py-24 border-b border-[#E5E0D8]">
      <div className="container-x">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E0D8]">
          <PremiumFade
            delay={0.0}
            className="flex flex-col items-center md:items-start px-4 md:px-6 lg:px-8 py-4 min-w-0 overflow-visible"
          >
            <div className="font-display font-black text-[clamp(2.8rem,4vw,5rem)] xl:text-[5.5rem] tracking-tighter text-brand leading-none whitespace-nowrap">
              <Counter to={30} duration={1.5} suffix="+" />
            </div>
            <div className="mt-4 text-[#1A1A1A] text-[15px] sm:text-[16px] md:text-[18px] font-black uppercase tracking-[0.08em] text-center md:text-left leading-tight">
              Años de experiencia
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.0 }}
              style={{ originX: 0 }}
              className="h-[3px] w-[50px] bg-brand mt-4"
            />
          </PremiumFade>

          <PremiumFade
            delay={0.15}
            className="flex flex-col items-center md:items-start px-4 md:px-6 lg:px-8 py-4 min-w-0 overflow-visible pt-8 sm:pt-4"
          >
            <div className="font-display font-black text-[clamp(2.8rem,4vw,5rem)] xl:text-[5.5rem] tracking-tighter text-brand leading-none whitespace-nowrap">
              <Counter to={10000} duration={2} suffix="+" />
            </div>
            <div className="mt-4 text-[#1A1A1A] text-[15px] sm:text-[16px] md:text-[18px] font-black uppercase tracking-[0.08em] text-center md:text-left leading-tight">
              Cocinas montadas
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ originX: 0 }}
              className="h-[3px] w-[50px] bg-brand mt-4"
            />
          </PremiumFade>

          <PremiumFade
            delay={0.3}
            className="flex flex-col items-center md:items-start px-4 md:px-6 lg:px-8 py-4 min-w-0 overflow-visible pt-8 sm:pt-4"
          >
            <div className="font-display font-black text-[clamp(2.8rem,4vw,5rem)] xl:text-[5.5rem] tracking-tighter text-brand leading-none whitespace-nowrap">
              <Counter to={5} duration={1} suffix="/5" />
            </div>
            <div className="mt-4 text-[#1A1A1A] text-[15px] sm:text-[16px] md:text-[18px] font-black uppercase tracking-[0.08em] text-center md:text-left leading-tight">
              Valoración
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ originX: 0 }}
              className="h-[3px] w-[50px] bg-brand mt-4"
            />
          </PremiumFade>

          <PremiumFade
            delay={0.45}
            className="flex flex-col items-center md:items-start px-4 md:px-6 lg:px-8 py-4 min-w-0 overflow-visible pt-8 sm:pt-4"
          >
            <div className="font-display font-black text-[clamp(2.8rem,4vw,5rem)] xl:text-[5.5rem] tracking-tighter text-brand leading-none whitespace-nowrap">
              <Counter to={100} duration={1.5} suffix="%" />
            </div>
            <div className="mt-4 text-[#1A1A1A] text-[15px] sm:text-[16px] md:text-[18px] font-black uppercase tracking-[0.08em] text-center md:text-left leading-tight">
              Garantía
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.45 }}
              style={{ originX: 0 }}
              className="h-[3px] w-[50px] bg-brand mt-4"
            />
          </PremiumFade>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "CONTACTO", d: "Valoración inicial del proyecto.", icon: PhoneCall },
  { n: "02", t: "REVISIÓN", d: "Auditoría de planos y materiales.", icon: FileSearch },
  { n: "03", t: "PLANIFICACIÓN", d: "Coordinación milimétrica.", icon: Ruler },
  { n: "04", t: "MONTAJE", d: "Ejecución precisa y limpia.", icon: Hammer },
  { n: "05", t: "ENTREGA", d: "Repaso final exhaustivo.", icon: CheckCircle },
];

const KitchenAssembly = () => {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 md:my-10 relative px-4 sm:px-0">
      <div className="relative rounded-2xl overflow-hidden bg-[#0A0A09] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6 sm:p-8">
        {/* CAD Blueprint Grid Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 text-[11px] font-mono tracking-widest text-[#8E8A82] uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D6A634]" />
            <span className="text-white font-bold">PLANO TÉCNICO CAD 01</span>
          </div>
          <span>ESCALA 1:20 • TOLERANCIA 0.0°</span>
        </div>

        <svg viewBox="100 20 640 370" className="w-full h-auto drop-shadow-md overflow-visible">
          {/* Blueprint Technical Grid Background */}
          <defs>
            <pattern id="cadGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(214,166,52,0.06)" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect x="70" y="40" width="700" height="340" fill="url(#cadGrid)" />

          {/* Level Axis Datum Line */}
          <motion.g
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <line x1="90" y1="360" x2="750" y2="360" stroke="#D6A634" strokeWidth="1.2" strokeDasharray="6 4" opacity="0.6" />
            <text x="755" y="364" fill="#D6A634" fontSize="10" fontFamily="monospace" opacity="0.8">0.00m</text>
          </motion.g>

          {/* Plinth / Zócalo */}
          <motion.rect
            x="150"
            y="350"
            width="410"
            height="10"
            fill="#181816"
            stroke="#D6A634"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          />

          {/* Base Cabinets (Left + Right + Oven) */}
          <motion.g
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.4 }}
          >
            {/* Left Module */}
            <rect x="150" y="240" width="130" height="110" fill="#141413" stroke="#D6A634" strokeWidth="1.2" />
            <line x1="215" y1="240" x2="215" y2="350" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <line x1="170" y1="245" x2="190" y2="245" stroke="#D6A634" strokeWidth="2" strokeLinecap="round" />
            <line x1="240" y1="245" x2="260" y2="245" stroke="#D6A634" strokeWidth="2" strokeLinecap="round" />

            {/* Middle Oven Module */}
            <rect x="280" y="240" width="150" height="110" fill="#0D0D0C" stroke="#D6A634" strokeWidth="1.2" />
            <rect x="295" y="260" width="120" height="75" fill="#161615" stroke="rgba(214,166,52,0.5)" strokeWidth="1" rx="4" />
            <line x1="295" y1="250" x2="415" y2="250" stroke="#8E8A82" strokeWidth="2" />
            <circle cx="310" cy="250" r="2.5" fill="#D6A634" />
            <circle cx="400" cy="250" r="2.5" fill="#D6A634" />

            {/* Right Module */}
            <rect x="430" y="240" width="130" height="110" fill="#141413" stroke="#D6A634" strokeWidth="1.2" />
            <line x1="495" y1="240" x2="495" y2="350" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <line x1="450" y1="245" x2="470" y2="245" stroke="#D6A634" strokeWidth="2" strokeLinecap="round" />
            <line x1="520" y1="245" x2="540" y2="245" stroke="#D6A634" strokeWidth="2" strokeLinecap="round" />
          </motion.g>

          {/* High-End Ceramic Countertop */}
          <motion.g
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{ originX: "350px" }}
          >
            <rect x="140" y="228" width="425" height="12" fill="#22201D" stroke="#D6A634" strokeWidth="1.4" rx="2" />
            <line x1="145" y1="234" x2="560" y2="234" stroke="rgba(214,166,52,0.4)" strokeWidth="0.8" />
          </motion.g>

          {/* Under-mount Sink & Minimalist Tap */}
          <motion.g
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <rect x="460" y="230" width="70" height="6" fill="#0D0D0C" stroke="#D6A634" strokeWidth="1" />
            <path d="M 495 228 V 195 Q 495 185 478 188 V 202" fill="none" stroke="#D6A634" strokeWidth="2.5" strokeLinecap="round" />
          </motion.g>

          {/* Tall Column / Fridge Integration */}
          <motion.g
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
          >
            <rect x="575" y="80" width="115" height="280" fill="#141413" stroke="#D6A634" strokeWidth="1.2" rx="4" />
            <line x1="575" y1="228" x2="690" y2="228" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <line x1="588" y1="130" x2="588" y2="180" stroke="#D6A634" strokeWidth="2" strokeLinecap="round" />
            <line x1="588" y1="245" x2="588" y2="285" stroke="#D6A634" strokeWidth="2" strokeLinecap="round" />
          </motion.g>

          {/* Chimney Extractor Hood */}
          <motion.g
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3 }}
          >
            <rect x="340" y="60" width="30" height="80" fill="#141413" stroke="#D6A634" strokeWidth="1" />
            <polygon points="315,150 395,150 370,140 340,140" fill="#1C1B19" stroke="#D6A634" strokeWidth="1" />
            <line x1="330" y1="150" x2="380" y2="150" stroke="#D6A634" strokeWidth="2" strokeLinecap="round" />
          </motion.g>

          {/* Upper Cabinets Left */}
          <motion.g
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
          >
            <rect x="150" y="80" width="130" height="90" fill="#141413" stroke="#D6A634" strokeWidth="1.2" />
            <line x1="215" y1="80" x2="215" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <line x1="170" y1="165" x2="190" y2="165" stroke="#D6A634" strokeWidth="2" strokeLinecap="round" />
            <line x1="240" y1="165" x2="260" y2="165" stroke="#D6A634" strokeWidth="2" strokeLinecap="round" />
          </motion.g>

          {/* Upper Cabinets Right */}
          <motion.g
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6 }}
          >
            <rect x="430" y="80" width="90" height="90" fill="#141413" stroke="#D6A634" strokeWidth="1.2" />
            <line x1="475" y1="80" x2="475" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <line x1="445" y1="165" x2="465" y2="165" stroke="#D6A634" strokeWidth="2" strokeLinecap="round" />
            <line x1="485" y1="165" x2="505" y2="165" stroke="#D6A634" strokeWidth="2" strokeLinecap="round" />
          </motion.g>

          {/* Architectural Wine Column (Botellero) */}
          <motion.g
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8 }}
          >
            <rect x="525" y="80" width="40" height="90" fill="#1C1B19" stroke="#D6A634" strokeWidth="1.2" rx="2" />
            <line x1="525" y1="102" x2="565" y2="102" stroke="#D6A634" strokeWidth="0.8" />
            <line x1="525" y1="124" x2="565" y2="124" stroke="#D6A634" strokeWidth="0.8" />
            <line x1="525" y1="146" x2="565" y2="146" stroke="#D6A634" strokeWidth="0.8" />
            <line x1="545" y1="80" x2="545" y2="170" stroke="#D6A634" strokeWidth="0.8" />
            <circle cx="535" cy="92" r="4" fill="#D6A634" opacity="0.9" />
            <circle cx="555" cy="114" r="4" fill="#D6A634" opacity="0.9" />
            <circle cx="535" cy="136" r="4" fill="#D6A634" opacity="0.9" />
          </motion.g>
        </svg>
      </div>
    </div>
  );
};

const AnimatedStepIcon = ({ Icon, index }: { Icon: React.ElementType; index: number }) => (
  <div className="flex items-center text-brand ml-3 opacity-90">
    <motion.div
      animate={{ rotate: [-10, 15, -10], scale: [1, 1.1, 1], y: [0, -2, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.2, ease: "easeInOut" }}
    >
      <Icon size={20} strokeWidth={2.5} />
    </motion.div>
  </div>
);

export function Proceso() {
  return (
    <section id="proceso" className="bg-[#FAFAF8] py-14 sm:py-20 overflow-hidden border-b border-[#E5E0D8]">
      <div className="mx-auto w-[90%] max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-brand" />
            <span className="text-[12px] font-bold tracking-[0.25em] uppercase text-brand">
              Metodología
            </span>
          </div>
          <h2 className="font-display font-black text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.05] text-ink max-w-[800px] text-balance">
            Precisión en cada fase.
          </h2>
        </motion.div>

        <KitchenAssembly />

        <div className="mt-8 sm:mt-12 relative">
          {/* Timeline central line */}
          <div className="absolute top-[10px] left-0 w-full h-[2px] bg-[#DADADA] hidden lg:block" />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative pt-0 lg:pt-0"
              >
                {/* Timeline Point */}
                <div className="hidden lg:flex absolute top-[11px] left-6 -translate-y-1/2 w-[20px] h-[20px] rounded-full bg-white border-[4px] border-brand z-10" />

                {/* Timeline Line Mobile */}
                <div className="absolute left-[24px] top-[40px] bottom-[-32px] w-[2px] bg-[#DADADA] lg:hidden" />

                <div className="bg-white p-[24px] rounded-[16px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-500 ease-out mt-8 lg:mt-12 relative z-10 ml-12 lg:ml-0 flex flex-col justify-between h-[calc(100%-2rem)] lg:h-auto">
                  {/* Point for mobile, inside card area */}
                  <div className="lg:hidden absolute left-[-48px] top-[24px] w-[20px] h-[20px] rounded-full bg-brand border-[4px] border-white shadow-[0_0_0_1px_rgba(218,218,218,1)] z-10" />

                  <div>
                    <div className="flex items-center mb-2">
                      <span className="font-display text-sm font-black text-brand">
                        {s.n} {s.t}
                      </span>
                      <AnimatedStepIcon Icon={s.icon} index={i} />
                    </div>
                    <p className="text-lg font-medium text-ink-soft leading-snug">{s.d}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonios() {
  return (
    <section id="opiniones" className="bg-[#FAF8F5] py-20 sm:py-28 border-t border-b border-[#E5E0D8] overflow-hidden">
      <div className="container-x">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <FadeUp className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-brand" />
              <span className="text-[12px] font-bold tracking-[0.25em] uppercase text-brand">
                Opiniones y Valoraciones
              </span>
              <span className="w-8 h-[2px] bg-brand" />
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight mb-6">
              Tu satisfacción es nuestro mejor aval
            </h2>

            <p className="text-lg sm:text-xl text-ink-soft max-w-2xl leading-relaxed mb-8 font-medium">
              En CUBIKOS cada montaje se entrega con tolerancia milimétrica y revisión exhaustiva. Si ya has trabajado con nosotros en Cataluña, comparte tu experiencia.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://wa.me/34666871144?text=Hola,%20quiero%20compartir%20mi%20opinion%20sobre%20el%20montaje%20de%20mi%20cocina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 h-[50px] rounded-full bg-[#111111] hover:bg-brand hover:text-[#111111] text-white font-sans font-bold text-xs uppercase tracking-[0.14em] transition-all duration-300 shadow-lg"
              >
                <span>Dejar una reseña en Google</span>
                <span className="font-bold">→</span>
              </a>
              <span className="text-xs font-semibold text-[#888] uppercase tracking-wider">
                Valoración media 5.0 / 5.0 ★
              </span>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

export function BotelleroShowcase() {
  return (
    <section className="relative bg-[#0D0D0D] text-[#FAFAF8] py-24 md:py-40 overflow-hidden z-20">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col justify-center">
            <PremiumFade delay={0}>
              <div className="text-brand font-bold uppercase tracking-widest text-sm mb-4">
                La firma de un artesano
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-8 text-[#FAFAF8]">
                El Arte del Ensamblaje
              </h2>
              <p className="text-[#EDEBE8]/80 text-lg md:text-xl leading-relaxed mb-6 font-light">
                Un botellero a medida no admite márgenes de error. Cada balda y cada separador debe
                encajar con tolerancias milimétricas para garantizar la estabilidad y una estética
                perfecta.
              </p>
              <p className="text-[#EDEBE8]/80 text-lg md:text-xl leading-relaxed font-light">
                Es en estos pequeños detalles donde la verdadera calidad de un montaje sale a
                relucir. No instalamos cocinas; construimos mobiliario de precisión.
              </p>
            </PremiumFade>
          </div>

          {/* Architectural Editorial Gallery Layout */}
          <div className="grid grid-cols-12 gap-4 sm:gap-6 w-full">
            {/* Primary Feature Photo (60% width) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: easing }}
              className="col-span-12 sm:col-span-7 h-[340px] sm:h-[460px] rounded-2xl overflow-hidden relative shadow-2xl border border-white/10 group"
            >
              <img
                src={showcase1}
                alt="Montaje de estantería iluminada a medida"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end pointer-events-none">
                <span className="font-mono text-xs uppercase tracking-widest text-[#D6A634] font-bold">
                  PRECISIÓN MILIMÉTRICA
                </span>
                <span className="text-white/80 text-xs font-mono">TOLERANCIA &lt; 0.5MM</span>
              </div>
            </motion.div>

            {/* Secondary Stack (40% width) */}
            <div className="col-span-12 sm:col-span-5 flex flex-col gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.15, ease: easing }}
                className="h-[160px] sm:h-[218px] rounded-2xl overflow-hidden relative shadow-xl border border-white/10 group"
              >
                <img
                  src={showcase2}
                  alt="Isla de cocina y encimeras"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 pointer-events-none">
                  <span className="text-[11px] font-mono tracking-wider text-white uppercase font-bold">
                    ISLAS Y ENCUENTROS
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.3, ease: easing }}
                className="h-[160px] sm:h-[218px] rounded-2xl overflow-hidden relative shadow-xl border border-white/10 group"
              >
                <img
                  src={showcase3}
                  alt="Detalle de montaje en columna"
                  loading="lazy"
                  className="w-full h-full object-cover object-left-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 pointer-events-none">
                  <span className="text-[11px] font-mono tracking-wider text-white uppercase font-bold">
                    AJUSTES EN COLUMNA
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
