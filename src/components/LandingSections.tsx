import React from "react";
import { FadeUp, Ico, RevealMask, Counter } from "./LandingUI";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { PhoneCall, FileSearch, Ruler, Hammer, CheckCircle, User } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../i18n/translations";

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
  const { lang } = useLanguage();
  const t = useTranslation(lang);

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
                {lang === "EN" ? (
                  <>
                    Specialists exclusively
                    <br />
                    in kitchen assembly.
                  </>
                ) : lang === "CA" ? (
                  <>
                    Especialistes exclusivament
                    <br />
                    en muntatge de cuines.
                  </>
                ) : (
                  <>
                    Especialistas exclusivamente
                    <br />
                    en montaje de cocinas.
                  </>
                )}
              </p>
            </PremiumFade>
          </div>

          {/* DERECHA */}
          <div className="lg:col-span-7 lg:pl-12 flex flex-col justify-center pt-4 lg:pt-12">
            <PremiumFade delay={0.1}>
              <h2 className="font-display font-bold text-[40px] md:text-[56px] leading-[1.1] text-[#FAFAF8] text-balance">
                {lang === "EN"
                  ? "Three decades perfecting a single craft."
                  : lang === "CA"
                  ? "Tres dècades perfeccionant un únic ofici."
                  : "Tres décadas perfeccionando un único oficio."}
              </h2>
            </PremiumFade>

            <PremiumFade
              delay={0.3}
              className="mt-12 space-y-6 text-xl md:text-[22px] text-[#EDEBE8] font-medium leading-relaxed max-w-3xl"
            >
              <p>
                {lang === "EN"
                  ? "While other companies spread their focus across general reforms, multiple trades and dozens of scattered services, Cubikos has dedicated over thirty years to one single mission:"
                  : lang === "CA"
                  ? "Mentre altres empreses reparteixen la seva atenció entre reformes generals i dotzenes de serveis diferents, Cubikos ha dedicat més de trenta anys a una sola missió:"
                  : "Mientras otras empresas reparten su atención entre reformas, coordinación de gremios y decenas de servicios distintos, Cubikos ha dedicado más de treinta años a una sola misión:"}
              </p>
              <p className="font-bold text-[#FAFAF8]">
                {lang === "EN"
                  ? "Fitting kitchens with absolute precision."
                  : lang === "CA"
                  ? "Muntar cuines amb precisió absoluta."
                  : "Montar cocinas con precisión absoluta."}
              </p>
              <div>
                <p>{lang === "EN" ? "Every adjustment." : lang === "CA" ? "Cada ajust." : "Cada ajuste."}</p>
                <p>{lang === "EN" ? "Every leveling." : lang === "CA" ? "Cada anivellament." : "Cada nivelación."}</p>
                <p>{lang === "EN" ? "Every joint." : lang === "CA" ? "Cada trobada." : "Cada encuentro."}</p>
                <p>{lang === "EN" ? "Every finish." : lang === "CA" ? "Cada acabat." : "Cada acabado."}</p>
              </div>
              <p className="text-brand font-bold pt-4">
                {lang === "EN"
                  ? "Perfected across more than 500 installations."
                  : lang === "CA"
                  ? "Perfeccionats després de més de 500 instal·lacions."
                  : "Perfeccionados tras más de 500 instalaciones."}
              </p>
            </PremiumFade>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsGrid() {
  const { lang } = useLanguage();

  const labels = {
    ES: {
      stat1: "Años de experiencia",
      stat2: "Cocinas montadas",
      stat3: "Cobertura Cataluña",
      stat4: "Garantía de ajuste",
    },
    CA: {
      stat1: "Anys d'experiència",
      stat2: "Cuines muntades",
      stat3: "Cobertura Catalunya",
      stat4: "Garantia d'ajust",
    },
    EN: {
      stat1: "Years of experience",
      stat2: "Kitchens installed",
      stat3: "Catalonia coverage",
      stat4: "Fit guarantee",
    },
  }[lang];

  return (
    <section className="bg-[#FAFAF8] py-16 md:py-24 border-b border-[#E5E0D8]">
      <div className="container-x">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E0D8]">
          <PremiumFade
            delay={0.0}
            className="flex flex-col items-center md:items-start px-6 lg:px-8 py-6 min-w-0 overflow-visible"
          >
            <div className="font-display font-black text-[clamp(2.5rem,3.8vw,4.5rem)] xl:text-[5rem] tracking-tight text-brand leading-none whitespace-nowrap">
              <Counter to={30} duration={1.5} suffix="+" />
            </div>
            <div className="mt-4 text-[#1A1A1A] text-[15px] sm:text-[16px] md:text-[17px] font-black uppercase tracking-[0.08em] text-center md:text-left leading-tight">
              {labels.stat1}
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
            className="flex flex-col items-center md:items-start px-6 lg:px-8 py-6 min-w-0 overflow-visible pt-8 sm:pt-6"
          >
            <div className="font-display font-black text-[clamp(2.5rem,3.8vw,4.5rem)] xl:text-[5rem] tracking-tight text-brand leading-none whitespace-nowrap">
              <Counter to={500} duration={1.5} suffix="+" />
            </div>
            <div className="mt-4 text-[#1A1A1A] text-[15px] sm:text-[16px] md:text-[17px] font-black uppercase tracking-[0.08em] text-center md:text-left leading-tight">
              {labels.stat2}
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
            className="flex flex-col items-center md:items-start px-6 lg:px-8 py-6 min-w-0 overflow-visible pt-8 sm:pt-6"
          >
            <div className="font-display font-black text-[clamp(2.5rem,3.8vw,4.5rem)] xl:text-[5rem] tracking-tight text-brand leading-none whitespace-nowrap">
              <Counter to={100} duration={1.5} suffix="%" />
            </div>
            <div className="mt-4 text-[#1A1A1A] text-[15px] sm:text-[16px] md:text-[17px] font-black uppercase tracking-[0.08em] text-center md:text-left leading-tight">
              {labels.stat3}
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
            className="flex flex-col items-center md:items-start px-6 lg:px-8 py-6 min-w-0 overflow-visible pt-8 sm:pt-6"
          >
            <div className="font-display font-black text-[clamp(2.5rem,3.8vw,4.5rem)] xl:text-[5rem] tracking-tight text-brand leading-none whitespace-nowrap">
              <Counter to={100} duration={1.5} suffix="%" />
            </div>
            <div className="mt-4 text-[#1A1A1A] text-[15px] sm:text-[16px] md:text-[17px] font-black uppercase tracking-[0.08em] text-center md:text-left leading-tight">
              {labels.stat4}
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

const KitchenAssembly = () => {
  return (
    <div className="w-full max-w-xl mx-auto my-3 md:my-5 relative px-4 sm:px-0">
      <svg viewBox="100 0 640 400" className="w-full h-auto drop-shadow-lg overflow-visible">
        {/* Floor */}
        <motion.rect
          x="70"
          y="360"
          width="700"
          height="12"
          fill="#E5E7EB"
          rx="6"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ originX: "420px" }}
        />

        {/* Accent Wall / Backsplash */}
        <motion.rect
          x="130"
          y="60"
          width="580"
          height="300"
          fill="#FBBF24"
          rx="8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Tile detail on the backsplash */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <path
            d="M 130 200 H 550 M 130 220 H 550 M 130 180 H 550 M 130 160 H 550"
            stroke="#FFF"
            strokeWidth="2"
            strokeDasharray="20 20"
          />
        </motion.g>

        {/* Toe Kick (Zócalo) */}
        <motion.rect
          x="150"
          y="350"
          width="410"
          height="10"
          fill="#1F2937"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        />

        {/* Base Cabinets */}
        {/* Left */}
        <motion.g
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.5, bounce: 0.4 }}
        >
          <rect x="150" y="240" width="130" height="120" fill="#FFFFFF" />
          <line x1="215" y1="240" x2="215" y2="360" stroke="#E5E7EB" strokeWidth="2" />
          <rect x="170" y="242" width="20" height="3" fill="#374151" rx="1" />
          <rect x="240" y="242" width="20" height="3" fill="#374151" rx="1" />
        </motion.g>

        {/* Right */}
        <motion.g
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.6, bounce: 0.4 }}
        >
          <rect x="430" y="240" width="130" height="120" fill="#FFFFFF" />
          <line x1="495" y1="240" x2="495" y2="360" stroke="#E5E7EB" strokeWidth="2" />
          <rect x="450" y="242" width="20" height="3" fill="#374151" rx="1" />
          <rect x="520" y="242" width="20" height="3" fill="#374151" rx="1" />
        </motion.g>

        {/* Oven Unit (Middle) */}
        <motion.g
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.7, bounce: 0.4 }}
        >
          <rect x="280" y="240" width="150" height="120" fill="#FFFFFF" />
          <rect x="295" y="270" width="120" height="70" fill="#020617" rx="8" />
          <path d="M 295 300 L 330 270 H 350 L 305 310 Z" fill="#FFF" opacity="0.1" />
          <rect x="295" y="250" width="120" height="15" fill="#374151" rx="4" />
          <circle cx="310" cy="257.5" r="3" fill="#F8FAFC" />
          <circle cx="325" cy="257.5" r="3" fill="#F8FAFC" />
          <circle cx="400" cy="257.5" r="3" fill="#F8FAFC" />
        </motion.g>

        {/* Countertop (Wood Butcher Block) */}
        <motion.g
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
          style={{ originX: "350px" }}
        >
          <rect x="140" y="230" width="420" height="10" fill="#D4A373" rx="2" />
          <rect x="140" y="240" width="420" height="3" fill="#C08D5D" />
        </motion.g>

        {/* Sink */}
        <motion.g
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 1.2, bounce: 0.5 }}
        >
          <rect x="460" y="230" width="70" height="8" fill="#94A3B8" />
          <path
            d="M 495 230 V 205 Q 495 190 475 195 V 210"
            stroke="#CBD5E1"
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="505" y="222" width="8" height="8" fill="#CBD5E1" rx="2" />
        </motion.g>

        {/* Fridge (with gap and shading) */}
        <motion.g
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 1.4, bounce: 0.3 }}
        >
          <rect x="570" y="80" width="120" height="280" fill="#E5E7EB" rx="6" />
          <rect x="570" y="80" width="12" height="280" fill="#000" opacity="0.05" rx="6" />
          <line x1="570" y1="230" x2="690" y2="230" stroke="#D1D5DB" strokeWidth="4" />
          <rect x="585" y="150" width="4" height="60" fill="#9CA3AF" rx="2" />
          <rect x="585" y="245" width="4" height="40" fill="#9CA3AF" rx="2" />
        </motion.g>

        {/* Range Hood (Chimney Style) */}
        <motion.g
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 1.6, bounce: 0.4 }}
        >
          <rect x="340" y="60" width="30" height="80" fill="#D1D5DB" />
          <rect x="320" y="140" width="70" height="10" fill="#9CA3AF" rx="2" />
          <path d="M 330 140 L 340 100 H 370 L 380 140 Z" fill="#FFF" opacity="0.2" />
        </motion.g>

        {/* Upper Cabinets Left */}
        <motion.g
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 1.8, bounce: 0.3 }}
        >
          <rect
            x="150"
            y="80"
            width="130"
            height="90"
            fill="#FFFFFF"
            stroke="#E5E7EB"
            strokeWidth="4"
          />
          <line x1="215" y1="80" x2="215" y2="170" stroke="#E5E7EB" strokeWidth="4" />
          <rect x="170" y="165" width="20" height="3" fill="#374151" rx="1" />
          <rect x="240" y="165" width="20" height="3" fill="#374151" rx="1" />
        </motion.g>

        {/* Upper Cabinets Right */}
        <motion.g
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 1.9, bounce: 0.3 }}
        >
          <rect
            x="430"
            y="80"
            width="90"
            height="90"
            fill="#FFFFFF"
            stroke="#E5E7EB"
            strokeWidth="4"
          />
          <line x1="475" y1="80" x2="475" y2="170" stroke="#E5E7EB" strokeWidth="4" />
          <rect x="445" y="165" width="20" height="3" fill="#374151" rx="1" />
          <rect x="485" y="165" width="20" height="3" fill="#374151" rx="1" />
        </motion.g>

        {/* Wine Rack (Botellero) - Cleanly integrated at the end of the cabinet run */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.1 }}
        >
          <motion.rect
            x="525"
            y="80"
            width="40"
            height="90"
            fill="#261C14"
            stroke="#D6A634"
            strokeWidth="1.5"
            rx="3"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 2.1 }}
          />
          <motion.path
            d="M 525 102 H 565 M 525 124 H 565 M 525 146 H 565"
            stroke="#D6A634"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 2.4 }}
          />
          <motion.path
            d="M 545 80 V 170"
            stroke="#D6A634"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 2.7 }}
          />

          {/* Wine Bottles popping into slots */}
          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 3.0, bounce: 0.6 }}
            style={{ originX: "535px", originY: "100px" }}
          >
            <rect x="531" y="86" width="7" height="13" fill="#1B5E20" rx="2" />
            <rect x="533" y="83" width="3" height="4" fill="#1B5E20" />
            <rect x="533" y="82" width="3" height="2" fill="#D6A634" />
          </motion.g>

          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 3.2, bounce: 0.6 }}
            style={{ originX: "555px", originY: "122px" }}
          >
            <rect x="551" y="108" width="7" height="13" fill="#4A148C" rx="2" />
            <rect x="553" y="105" width="3" height="4" fill="#4A148C" />
            <rect x="553" y="104" width="3" height="2" fill="#D6A634" />
          </motion.g>

          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 3.4, bounce: 0.6 }}
            style={{ originX: "535px", originY: "155px" }}
          >
            <rect x="531" y="130" width="7" height="13" fill="#881337" rx="2" />
            <rect x="533" y="127" width="3" height="4" fill="#881337" />
            <rect x="533" y="126" width="3" height="2" fill="#D6A634" />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
};

const AnimatedStepIcon = ({ Icon, index }: { Icon: React.ElementType; index: number }) => (
  <div className="flex items-center text-brand ml-2.5 opacity-90">
    <motion.div
      animate={{ rotate: [-10, 15, -10], scale: [1, 1.1, 1], y: [0, -2, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.2, ease: "easeInOut" }}
    >
      <Icon size={18} strokeWidth={2.5} />
    </motion.div>
  </div>
);

export function Proceso() {
  const { lang } = useLanguage();
  const t = useTranslation(lang);

  const stepsData = [
    { n: "01", t: t.metodo.step1, d: t.metodo.step1d, icon: PhoneCall },
    { n: "02", t: t.metodo.step2, d: t.metodo.step2d, icon: FileSearch },
    { n: "03", t: t.metodo.step3, d: t.metodo.step3d, icon: Ruler },
    { n: "04", t: t.metodo.step4, d: t.metodo.step4d, icon: Hammer },
    { n: "05", t: t.metodo.step5, d: t.metodo.step5d, icon: CheckCircle },
  ];

  return (
    <section id="proceso" className="bg-[#FAFAF8] py-10 sm:py-14 overflow-hidden border-b border-[#E5E0D8]">
      <div className="mx-auto w-[90%] max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3.5 mb-3">
            <div className="h-[3px] w-12 bg-brand shrink-0" />
            <span className="text-[14px] sm:text-[16px] font-mono font-black tracking-[0.28em] uppercase text-brand">
              {t.metodo.timelineEyebrow}
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.02] text-ink max-w-[900px] text-balance tracking-tight">
            {t.metodo.timelineTitle.replace(".", "")}<span className="text-brand">.</span>
          </h2>
        </motion.div>

        <KitchenAssembly />

        <div className="mt-4 sm:mt-6 relative">
          {/* Timeline central line */}
          <div className="absolute top-[10px] left-0 w-full h-[2px] bg-[#DADADA] hidden lg:block" />

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-4">
            {stepsData.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative pt-0 lg:pt-0"
              >
                {/* Timeline Point */}
                <div className="hidden lg:flex absolute top-[11px] left-6 -translate-y-1/2 w-[18px] h-[18px] rounded-full bg-white border-[3.5px] border-brand z-10" />

                {/* Timeline Line Mobile */}
                <div className="absolute left-[24px] top-[36px] bottom-[-24px] w-[2px] bg-[#DADADA] lg:hidden" />

                <div className="bg-white p-4 sm:p-5 rounded-[14px] shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-transform duration-500 ease-out mt-5 lg:mt-8 relative z-10 ml-12 lg:ml-0 flex flex-col justify-between h-[calc(100%-1rem)] lg:h-auto border border-[#EBE8E3]">
                  {/* Point for mobile, inside card area */}
                  <div className="lg:hidden absolute left-[-48px] top-[20px] w-[18px] h-[18px] rounded-full bg-brand border-[3.5px] border-white shadow-[0_0_0_1px_rgba(218,218,218,1)] z-10" />

                  <div>
                    <div className="flex items-center mb-1.5">
                      <span className="font-display text-[13px] sm:text-sm font-black text-brand tracking-wide">
                        {s.n} {s.t}
                      </span>
                      <AnimatedStepIcon Icon={s.icon} index={i} />
                    </div>
                    <p className="text-[14px] sm:text-[15px] font-medium text-ink-soft leading-snug">{s.d}</p>
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
  const { lang } = useLanguage();
  const t = useTranslation(lang);

  return (
    <section id="opiniones" className="bg-[#FAF8F5] py-24 sm:py-36 border-t border-b border-[#E5E0D8] overflow-hidden">
      <div className="container-x">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <FadeUp className="flex flex-col items-center">
            <div className="flex items-center gap-3.5 mb-5">
              <span className="w-14 h-[3px] bg-brand shrink-0" />
              <span className="text-[16px] sm:text-[18px] font-mono font-black tracking-[0.28em] uppercase text-brand">
                {t.opiniones.eyebrow}
              </span>
              <span className="w-14 h-[3px] bg-brand shrink-0" />
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink tracking-tight leading-[1.04] mb-8 text-balance">
              {t.opiniones.title.replace(".", "")}<span className="text-brand">.</span>
            </h2>

            <p className="text-xl sm:text-2xl text-ink-soft max-w-3xl leading-relaxed mb-10 font-normal">
              {t.opiniones.desc}
            </p>

            <div className="flex flex-col items-center gap-4">
              <a
                href={`https://wa.me/34666871144?text=${encodeURIComponent(
                  lang === "EN"
                    ? "Hello, I installed my kitchen with CUBIKOS and I would like to share my feedback"
                    : lang === "CA"
                    ? "Hola, he muntat la meva cuina amb CUBIKOS i vull compartir la meva opinió"
                    : "Hola, he montado mi cocina con CUBIKOS y quiero compartir mi opinion"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 h-[50px] rounded-full bg-[#111111] hover:bg-brand hover:text-[#111111] text-white font-sans font-bold text-xs uppercase tracking-[0.14em] transition-all duration-300 shadow-lg"
              >
                <span>{t.opiniones.btn}</span>
                <span className="font-bold">→</span>
              </a>
              <div className="flex items-center gap-2 mt-2 px-4 py-2 rounded-full bg-[#EDEBE8]/60 border border-[#D1CFCC]/50 text-sm sm:text-base font-semibold text-[#444] tracking-wide">
                <span className="w-2 h-2 rounded-full bg-brand shrink-0" />
                <span>{t.opiniones.badge}</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

export function BotelleroShowcase() {
  const { lang } = useLanguage();
  const t = useTranslation(lang);

  return (
    <section className="relative bg-[#0D0D0D] text-[#FAFAF8] py-24 md:py-40 overflow-hidden z-20">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col justify-center">
            <PremiumFade delay={0}>
              <div className="flex items-center gap-3.5 mb-4">
                <span className="w-12 h-[3px] bg-brand shrink-0" />
                <span className="text-[15px] sm:text-[17px] font-mono font-black tracking-[0.28em] uppercase text-brand">
                  {t.showcase.eyebrow}
                </span>
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.04] mb-8 text-[#FAFAF8]">
                {t.showcase.title.replace(".", "")}<span className="text-brand">.</span>
              </h2>
              <p className="text-[#EDEBE8]/80 text-lg md:text-xl leading-relaxed mb-6 font-light">
                {t.showcase.p1}
              </p>
              <p className="text-[#EDEBE8]/80 text-lg md:text-xl leading-relaxed font-light">
                {t.showcase.p2}
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
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap justify-between items-end gap-2 pointer-events-none">
                <span className="font-sans text-sm sm:text-base uppercase tracking-[0.16em] text-[#D6A634] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {t.showcase.img1Title}
                </span>
                <span className="text-white/90 text-xs sm:text-sm font-sans font-semibold tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] bg-black/40 px-2.5 py-1 rounded border border-white/10">
                  {t.showcase.img1Sub}
                </span>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 pointer-events-none">
                  <span className="text-sm sm:text-base font-sans tracking-[0.14em] text-white uppercase font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {t.showcase.img2Title}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 pointer-events-none">
                  <span className="text-sm sm:text-base font-sans tracking-[0.14em] text-white uppercase font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {t.showcase.img3Title}
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
