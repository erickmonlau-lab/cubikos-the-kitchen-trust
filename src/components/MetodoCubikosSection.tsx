import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import gal4 from "@/assets/gallery-4.webp";

interface MetodoData {
  eyebrow: string;
  heroPre: string;
  heroZero: string;
  heroPost: string;
  intro: string;
  mantra: string[];
  etapasLabel: string;
  closingLead: string;
  closingSub: string;
  brandSign: string;
  brandTag: string;
  stages: {
    num: string;
    keyword: string;
    title: string;
    shortDesc: string;
    longDesc: string;
    standardLabel: string;
    standardValue: string;
  }[];
}

const contentByLang: Record<"ES" | "CA" | "EN", MetodoData> = {
  ES: {
    eyebrow: "EL MÉTODO CUBIKOS",
    heroPre: "El Método CUBIKOS:",
    heroZero: "Tolerancia Cero",
    heroPost: "en Obra.",
    intro: "Cada cocina se instala siguiendo un proceso preciso, desarrollado durante más de 30 años de oficio.",
    mantra: ["Medimos", "Nivelamos", "Ajustamos", "Perfeccionamos"],
    etapasLabel: "4 ETAPAS DE PRECISIÓN",
    closingLead: "El resultado no se improvisa.",
    closingSub: "Se construye paso a paso.",
    brandSign: "CUBIKOS",
    brandTag: "TOLERANCIA CERO EN OBRA",
    stages: [
      {
        num: "01",
        keyword: "AUDITAR",
        title: "Auditoría de Planos y Replanteo Láser",
        shortDesc: "Verificamos la realidad de la obra antes de comenzar el montaje.",
        longDesc:
          "No empezamos montando muebles. Llegamos a la obra con niveles láser de precisión para contrastar la realidad geométrica de las paredes, techos y solera con el proyecto de cocina. Verificamos escuadras, tomas de agua, desagües y enchufes antes de tocar un solo módulo.",
        standardLabel: "ESTÁNDAR TÉCNICO",
        standardValue: "Control de desplomes y verificación de cota cero.",
      },
      {
        num: "02",
        keyword: "ANCLAR",
        title: "Anclaje Estructural de Cascos y Nivelación Base",
        shortDesc: "La durabilidad de una cocina empieza desde una base inamovible.",
        longDesc:
          "La durabilidad de una cocina depende enteramente de su base. Fijamos las guías de sustentación y ensamblamos los módulos bajos con calzado milimétrico. Si una base tiene 1 milímetro de desviación, al final de una bancada de 4 metros se traduce en puertas que chocan o encimeras partidas.",
        standardLabel: "ESTÁNDAR TÉCNICO",
        standardValue: "Anclajes mecánicos y químicos según tipología de muro.",
      },
      {
        num: "03",
        keyword: "AJUSTAR",
        title: "Ajuste Fino de Guías, Cajones y Bisagras",
        shortDesc: "El resultado final depende de ajustes milimétricos imperceptibles.",
        longDesc:
          "Regulación tridimensional de cada bisagra y corredera de cajón. Exigimos una holgura regular de 2mm uniforme en todas las juntas de frentes. Mecanismos con freno hidráulico calibrados para que el cierre sea amortiguado, silencioso y sin fricciones.",
        standardLabel: "ESTÁNDAR TÉCNICO",
        standardValue: "Calibración según estándares Blum, Grass y Hettich.",
      },
      {
        num: "04",
        keyword: "INTEGRAR",
        title: "Integración de Electrodomésticos y Mecanizados",
        shortDesc: "Todo debe quedar integrado, estanco y perfectamente alineado.",
        longDesc:
          "Encastre perfecto de placas de cocción, hornos, campanas de extracción y lavavajillas integrables. Ajustamos paneles de ocultación para que queden a ras de gola, garantizando ventilación trasera adecuada para evitar sobrecalentamientos del motor.",
        standardLabel: "ESTÁNDAR TÉCNICO",
        standardValue: "Encastres enrasados y conductos de ventilación verificados.",
      },
    ],
  },
  CA: {
    eyebrow: "EL MÈTODE CUBIKOS",
    heroPre: "El Mètode CUBIKOS:",
    heroZero: "Tolerància Zero",
    heroPost: "en Obra.",
    intro: "Cada cuina s'instal·la seguint un procés precís, desenvolupat durant més de 30 anys d'ofici.",
    mantra: ["Mesurem", "Anivellem", "Ajustem", "Perfeccionem"],
    etapasLabel: "4 ETAPES DE PRECISIÓ",
    closingLead: "El resultat no s'improvisa.",
    closingSub: "Es construeix pas a pas.",
    brandSign: "CUBIKOS",
    brandTag: "TOLERÀNCIA ZERO EN OBRA",
    stages: [
      {
        num: "01",
        keyword: "AUDITAR",
        title: "Auditoria de Plànols i Replanteig Làser",
        shortDesc: "Verifiquem la realitat de l'obra abans de començar el muntatge.",
        longDesc:
          "No comencem muntant mobles. Arribem a l'obra amb nivells làser de precisió per contrastar la realitat geomètrica de les parets, sostres i solera amb el projecte de cuina. Verifiquem escaires, preses d'aigua, desguassos i endolls abans de tocar cap mòdul.",
        standardLabel: "ESTÀNDARD TÈCNIC",
        standardValue: "Control de desploms i verificació de cota zero.",
      },
      {
        num: "02",
        keyword: "ANCORAR",
        title: "Ancoratge Estructural de Cascos i Anivellament Base",
        shortDesc: "La durabilitat d'una cuina comença des d'una base inamovible.",
        longDesc:
          "La durabilitat d'una cuina depèn enterament de la seva base. Fixem les guies de sustentació i assemblem els mòduls baixos amb calçat mil·limètric. Si una base té 1 mil·límetre de desviació, al final d'una bancada de 4 metres es tradueix en portes que xoquen o taulells esquerdats.",
        standardLabel: "ESTÀNDARD TÈCNIC",
        standardValue: "Ancoratges mecànics i químics segons tipologia de mur.",
      },
      {
        num: "03",
        keyword: "AJUSTAR",
        title: "Ajust Fi de Guies, Calaixos i Frontisses",
        shortDesc: "El resultat final depèn d'ajustos mil·limètrics imperceptibles.",
        longDesc:
          "Regulació tridimensional de cada frontissa i corredissa de calaix. Exigim una folgança regular de 2mm uniforme a totes les juntes de fronts. Mecanismes amb fre hidràulic calibrats perquè el tancament sigui amortit, silenciós i sense friccions.",
        standardLabel: "ESTÀNDARD TÈCNIC",
        standardValue: "Calibratge segons estàndards Blum, Grass i Hettich.",
      },
      {
        num: "04",
        keyword: "INTEGRAR",
        title: "Integració d'Electrodomèstics i Mecanitzats",
        shortDesc: "Tot ha de quedar integrat, estanc i perfectament alineat.",
        longDesc:
          "Encast perfecte de plaques de cocció, forns, campanes d'extracció i rentavaixelles integrables. Ajustem panells d'ocultació perquè quedin arran de gola, garantint ventilació posterior adequada per evitar sobreescalfaments del motor.",
        standardLabel: "ESTÀNDARD TÈCNIC",
        standardValue: "Encastats enrasats i conductes de ventilació verificats.",
      },
    ],
  },
  EN: {
    eyebrow: "THE CUBIKOS METHOD",
    heroPre: "The CUBIKOS Method:",
    heroZero: "Zero Tolerance",
    heroPost: "on Site.",
    intro: "Every kitchen is installed following a proprietary process honed across more than 30 years of master craft.",
    mantra: ["We measure", "We level", "We calibrate", "We perfect"],
    etapasLabel: "4 STAGES OF PRECISION",
    closingLead: "Perfection is never improvised.",
    closingSub: "It is engineered step by step.",
    brandSign: "CUBIKOS",
    brandTag: "ZERO TOLERANCE ON SITE",
    stages: [
      {
        num: "01",
        keyword: "AUDIT",
        title: "Blueprint Audit & 3D Laser Survey",
        shortDesc: "We assess the physical site before assembly begins.",
        longDesc:
          "We never start by hanging cabinets. We enter the site with precision lasers to cross-examine wall plumb, floor levels, and squareness against architectural blueprints. Plumbing, power feeds, and waste runs are verified before touching a single carcass.",
        standardLabel: "TECHNICAL STANDARD",
        standardValue: "Plumb deviation control & benchmark datum check.",
      },
      {
        num: "02",
        keyword: "ANCHOR",
        title: "Structural Carcass Anchoring & Base Leveling",
        shortDesc: "Long-term kitchen durability begins with an immovable base.",
        longDesc:
          "The longevity of a kitchen relies entirely on its sub-base. We secure heavy-duty hanging rails and level base cabinets with millimeter shimming. A 1mm deviation at the start compounds into misaligned reveals and strained stone worktops across 4 meters.",
        standardLabel: "TECHNICAL STANDARD",
        standardValue: "Chemical and mechanical anchoring by wall type.",
      },
      {
        num: "03",
        keyword: "CALIBRATE",
        title: "Fine Hardware, Drawer & Hinge Adjustment",
        shortDesc: "The final tactile experience relies on sub-millimeter calibration.",
        longDesc:
          "Three-dimensional calibration of every hinge and soft-close runner. We enforce a uniform 2mm reveal gap across all frontal transitions. Hydraulic dampening is fine-tuned for whisper-quiet, frictionless gliding.",
        standardLabel: "TECHNICAL STANDARD",
        standardValue: "Calibrated to Blum, Grass, and Hettich tolerances.",
      },
      {
        num: "04",
        keyword: "INTEGRATE",
        title: "Appliance Integration & Precision Machining",
        shortDesc: "Seamless flush integration, airtight seals and proper thermals.",
        longDesc:
          "Flush fitting of induction hobs, ovens, extraction hoods and concealed dishwashers. Cladding panels are calibrated flush with recessed gola profiles, ensuring thermal convection channels prevent motor wear.",
        standardLabel: "TECHNICAL STANDARD",
        standardValue: "Flush-mount tolerance & certified airflow channels.",
      },
    ],
  },
};

export default function MetodoCubikosSection() {
  const { lang } = useLanguage();
  const d = contentByLang[lang] || contentByLang.ES;
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section
      id="metodo"
      className="relative bg-[#080808] text-[#FAF8F5] py-24 sm:py-32 lg:py-40 overflow-hidden border-t border-b border-white/[0.08]"
    >
      {/* Architectural Grid & Subtle Radial Ambient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #FAF8F5 1px, transparent 1px),
            linear-gradient(to bottom, #FAF8F5 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-[650px] h-[650px] bg-[#D6A634]/[0.025] rounded-full blur-[160px] pointer-events-none" />

      {/* Abstract Ghost Blueprint Background (Faint Technical Geometry) */}
      <div className="absolute -left-20 top-24 w-[750px] h-[750px] pointer-events-none opacity-[0.035] select-none">
        <svg viewBox="0 0 600 600" className="w-full h-full stroke-white" fill="none">
          <line x1="50" y1="80" x2="550" y2="80" strokeWidth="1" strokeDasharray="6 4" />
          <line x1="80" y1="50" x2="80" y2="550" strokeWidth="1" strokeDasharray="6 4" />
          
          <rect x="120" y="160" width="180" height="240" strokeWidth="1.2" />
          <rect x="300" y="160" width="180" height="240" strokeWidth="1.2" />
          <line x1="120" y1="280" x2="480" y2="280" strokeWidth="0.8" />
          <line x1="210" y1="160" x2="210" y2="400" strokeWidth="0.8" />
          <line x1="390" y1="160" x2="390" y2="400" strokeWidth="0.8" />

          <line x1="120" y1="135" x2="480" y2="135" strokeWidth="1" />
          <line x1="120" y1="125" x2="120" y2="145" strokeWidth="1.5" />
          <line x1="480" y1="125" x2="480" y2="145" strokeWidth="1.5" />
          <circle cx="300" cy="135" r="3" fill="#D6A634" />
          
          <path d="M 300 260 V 300 M 280 280 H 320" stroke="#D6A634" strokeWidth="1.5" />
          <circle cx="300" cy="280" r="16" stroke="#D6A634" strokeWidth="0.8" strokeDasharray="2 3" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Main 40% / 60% Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* LEFT COLUMN (~40%): Sticky Editorial Header & Blueprint Accent */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col justify-between">
            <div>
              {/* Eyebrow badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-[#D6A634]" />
                <span className="text-[13px] sm:text-[14px] font-sans font-bold tracking-[0.25em] text-[#D6A634] uppercase">
                  {d.eyebrow}
                </span>
              </div>

              {/* Editorial Chapter Headline */}
              <h2
                className="text-white font-normal leading-[1.08] tracking-tight mb-8"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.4rem, 4.2vw, 4.2rem)",
                }}
              >
                {d.heroPre} <br />
                <span className="italic text-[#D6A634] font-medium">
                  {d.heroZero}
                </span>{" "}
                {d.heroPost}
              </h2>

              {/* Compact Narrative */}
              <p className="text-[17px] sm:text-[19px] text-[#C0BCB4] leading-[1.65] font-light max-w-lg mb-8">
                {d.intro}
              </p>

              {/* Mantra Phrase with Gold Dots */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] sm:text-[15px] font-mono uppercase tracking-[0.14em] text-white/90 mb-10">
                {d.mantra.map((word, i) => (
                  <React.Fragment key={word}>
                    <span className="font-semibold text-white">{word}</span>
                    {i < d.mantra.length - 1 && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D6A634] inline-block shadow-[0_0_8px_rgba(214,166,52,0.8)]" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Progress Tracker Pill: 01 ─────── 04 */}
              <div className="inline-flex items-center gap-4 px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.1] text-xs font-mono text-[#A6A29A] mb-8">
                <span className="text-[#D6A634] font-bold">01</span>
                <div className="w-24 sm:w-32 h-[2px] bg-white/15 relative overflow-hidden rounded-full">
                  <motion.div
                    className="absolute top-0 bottom-0 left-0 bg-[#D6A634]"
                    animate={{ width: `${((activeStage + 1) / 4) * 100}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
                <span className="text-white/60">04</span>
                <span className="text-white/40 border-l border-white/10 pl-3 uppercase tracking-wider text-[11px]">
                  {d.etapasLabel}
                </span>
              </div>
            </div>

            {/* Floating Real Secondary Photography (Subtle & Conceptual) */}
            <div className="hidden lg:flex items-center gap-4 mt-6 pt-6 border-t border-white/[0.08]">
              <div className="relative w-20 h-20 rounded-[14px] overflow-hidden border border-[#D6A634]/30 shrink-0 shadow-lg bg-[#141413]">
                <img
                  src={gal4}
                  alt="Detalle técnico de calibración y nivelación láser"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#D6A634] font-semibold">
                  TOLERANCIA VERIFICADA
                </span>
                <span className="text-[13px] text-[#A6A29A] leading-tight mt-0.5">
                  Calibración tridimensional bajo cota cero en cada instalación.
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (~60%): The 4 Connected Precision Stages */}
          <div className="lg:col-span-7 relative pl-0 sm:pl-4">
            
            {/* Continuous Vertical Connecting Progress Line */}
            <div className="absolute left-[23px] sm:left-[35px] top-6 bottom-10 w-[2px] bg-white/[0.1] hidden sm:block">
              <motion.div
                className="w-full bg-[#D6A634] shadow-[0_0_12px_rgba(214,166,52,0.9)]"
                animate={{
                  height: `${(activeStage / 3) * 100}%`,
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />
            </div>

            {/* Stages Flow */}
            <div className="space-y-6 sm:space-y-8">
              {d.stages.map((stage, index) => {
                const isActive = activeStage === index;

                return (
                  <div
                    key={stage.num}
                    onMouseEnter={() => setActiveStage(index)}
                    onClick={() => setActiveStage(index)}
                    className={`relative rounded-[20px] transition-all duration-400 cursor-pointer select-none group ${
                      isActive
                        ? "bg-white/[0.035] border border-[#D6A634]/35 shadow-[0_16px_48px_rgba(0,0,0,0.6)]"
                        : "bg-transparent border border-transparent opacity-60 hover:opacity-90 hover:bg-white/[0.015]"
                    }`}
                  >
                    <div className="p-6 sm:p-9 flex items-start gap-6 sm:gap-9">
                      
                      {/* Node Indicator on Vertical Line */}
                      <div className="relative shrink-0 flex flex-col items-center pt-1">
                        <motion.div
                          animate={{
                            scale: isActive ? 1.25 : 1,
                            borderColor: isActive ? "#D6A634" : "rgba(255,255,255,0.2)",
                            backgroundColor: isActive ? "#D6A634" : "#090908",
                          }}
                          transition={{ duration: 0.3 }}
                          className="w-4 h-4 rounded-full border-2 z-20 flex items-center justify-center"
                        >
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#090908]" />
                          )}
                        </motion.div>

                        {/* Large Serif Number */}
                        <motion.span
                          animate={{
                            color: isActive ? "#D6A634" : "#4A4742",
                            scale: isActive ? 1.05 : 1,
                          }}
                          transition={{ duration: 0.3 }}
                          className="font-mono text-3xl sm:text-4xl font-light tracking-tight mt-4 select-none"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          {stage.num}
                        </motion.span>
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 min-w-0 pt-0.5">
                        
                        {/* 4 Main Keyword Pillars */}
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className={`text-[20px] sm:text-[23px] font-sans font-black tracking-[0.22em] uppercase transition-colors duration-300 ${
                              isActive ? "text-[#D6A634]" : "text-white/70"
                            }`}
                          >
                            {stage.keyword}
                          </span>
                          {isActive && (
                            <motion.span
                              layoutId="goldLine"
                              className="h-[2px] w-8 bg-[#D6A634] hidden sm:inline-block"
                            />
                          )}
                        </div>

                        {/* Full Stage Title */}
                        <h3
                          className={`text-[20px] sm:text-[25px] font-bold tracking-tight leading-snug transition-transform duration-300 ${
                            isActive
                              ? "text-white translate-x-1 sm:translate-x-2"
                              : "text-[#C0BCB4]"
                          }`}
                        >
                          {stage.title}
                        </h3>

                        {/* Short Immediate Concept */}
                        <p className="mt-2 text-[15px] sm:text-[17px] text-[#A6A29A] font-normal leading-relaxed">
                          {stage.shortDesc}
                        </p>

                        {/* Smooth Expandable In-Depth Description */}
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="mt-5 pt-5 border-t border-white/[0.08] space-y-4">
                                <p className="text-[15px] sm:text-[16.5px] text-[#DCD8CF] leading-[1.68] font-light">
                                  {stage.longDesc}
                                </p>

                                {/* Technical Standard as refined Microcopy */}
                                <div className="flex items-center gap-3 pt-2 text-[12px] sm:text-[13px] font-mono text-[#A6A29A]">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#D6A634] shrink-0" />
                                  <span className="text-[#D6A634] font-bold tracking-wider uppercase">
                                    {stage.standardLabel}:
                                  </span>
                                  <span className="text-[#DCD8CF]">{stage.standardValue}</span>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Closing Statement */}
            <div className="mt-14 sm:mt-16 pt-10 border-t border-white/[0.12] flex flex-col sm:flex-row sm:items-end justify-between gap-6 pl-4 sm:pl-12">
              <div>
                <p
                  className="text-white font-normal text-[22px] sm:text-[27px] leading-tight tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {d.closingLead} <br />
                  <span className="italic text-[#D6A634]">{d.closingSub}</span>
                </p>
              </div>

              <div className="flex flex-col sm:items-end">
                <span className="text-xs font-mono font-bold tracking-[0.28em] text-white uppercase">
                  {d.brandSign}
                </span>
                <span className="text-[11px] font-mono tracking-[0.18em] text-[#D6A634] uppercase mt-0.5">
                  {d.brandTag}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
