import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import faqBlueprint from "@/assets/faq-blueprint.png";

interface MetodoData {
  eyebrow: string;
  heroPre: string;
  heroZero: string;
  heroPost: string;
  intro: string;
  mantra: string[];
  closingQuoteLead: string;
  closingQuoteSub: string;
  badgeTitle: string;
  badgeDesc: string;
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
    mantra: ["MEDIMOS", "NIVELAMOS", "AJUSTAMOS", "PERFECCIONAMOS"],
    closingQuoteLead: "El resultado no se improvisa.",
    closingQuoteSub: "Se construye paso a paso.",
    badgeTitle: "Tolerancia verificada en cada fase",
    badgeDesc: "Control dimensional bajo estándar milimétrico.",
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
        shortDesc: "Encastre perfecto y sellados invisibles para un resultado impecable.",
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
    mantra: ["MESUREM", "ANIVELLEM", "AJUSTEM", "PERFECCIONEM"],
    closingQuoteLead: "El resultat no s'improvisa.",
    closingQuoteSub: "Es construeix pas a pas.",
    badgeTitle: "Tolerància verificada a cada fase",
    badgeDesc: "Control dimensional sota estàndard mil·limètric.",
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
        shortDesc: "Encast perfecte i segellats invisibles per a un resultat impecable.",
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
    mantra: ["WE MEASURE", "WE LEVEL", "WE CALIBRATE", "WE PERFECT"],
    closingQuoteLead: "Perfection is never improvised.",
    closingQuoteSub: "It is engineered step by step.",
    badgeTitle: "Tolerance verified at every phase",
    badgeDesc: "Dimensional control under certified millimeter standard.",
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
        shortDesc: "Seamless flush integration and invisible seals for an impeccable result.",
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
      className="relative bg-[#FAF8F5] text-[#141413] py-12 sm:py-16 lg:py-20 overflow-hidden border-t border-b border-[#E5E0D8]"
    >
      <div className="relative z-10 w-full max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* ─── Main 40% / 60% Layout ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start">
          
          {/* ════════ LEFT COLUMN (~42%): Sticky Editorial Header & Blueprint ════════ */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col justify-between">
            <div>
              {/* Eyebrow with gold horizontal accent line */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-[#D6A634]" />
                <span className="text-[13px] sm:text-[14px] font-sans font-bold tracking-[0.22em] text-[#D6A634] uppercase">
                  {d.eyebrow}
                </span>
              </div>

              {/* Editorial Chapter Headline */}
              <h2
                className="text-[#141413] font-normal leading-[1.06] tracking-tight mb-8"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 3.2vw, 3.2rem)",
                }}
              >
                {d.heroPre} <br />
                <span className="italic text-[#D6A634] font-medium font-serif">
                  {d.heroZero}
                </span>{" "}
                {d.heroPost}
              </h2>

              {/* Compact Narrative */}
              <p className="text-[15px] sm:text-[16px] text-[#55524B] leading-[1.55] font-normal max-w-md mb-4 sm:mb-5">
                {d.intro}
              </p>

              {/* Mantra Phrase with Gold Dots */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11.5px] sm:text-[12.5px] font-mono tracking-[0.14em] uppercase text-[#141413] font-bold mb-5 sm:mb-6">
                {d.mantra.map((word, i) => (
                  <React.Fragment key={word}>
                    <span>{word}</span>
                    {i < d.mantra.length - 1 && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D6A634] inline-block shadow-sm" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Architectural Blueprint Illustration from User Reference */}
            <div className="relative w-full max-w-[340px] mt-1 p-1.5 rounded-[16px] bg-white/40 border border-[#E5E0D8]/80 shadow-[0_8px_24px_rgba(0,0,0,0.03)] hover:shadow-md hover:bg-white/70 transition-all duration-500">
              <img
                src={faqBlueprint}
                alt="Plano técnico y alzado arquitectónico de cocina CUBIKOS"
                loading="lazy"
                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* ════════ RIGHT COLUMN (~58%): The 4 Connected Precision Stages with Accordion Plus Buttons ════════ */}
          <div className="lg:col-span-7 relative">
            <div className="space-y-0">
              {d.stages.map((stage, index) => {
                const isActive = activeStage === index;
                const isLast = index === d.stages.length - 1;

                return (
                  <div
                    key={stage.num}
                    onClick={() => setActiveStage(index)}
                    onMouseEnter={() => setActiveStage(index)}
                    className="group cursor-pointer select-none py-3.5 sm:py-4 border-b border-[#E8E4DC] last:border-b-0 transition-colors"
                  >
                    <div className="flex items-start gap-4 sm:gap-7">
                      
                      {/* Left: Number + Vertical Connecting Line */}
                      <div className="relative shrink-0 flex items-start gap-3 sm:gap-4 pt-1">
                        {/* Huge Serif Number */}
                        <span
                          className="font-serif text-[32px] sm:text-[38px] lg:text-[42px] leading-none font-normal select-none transition-all duration-300"
                          style={{
                            fontFamily: "var(--font-serif)",
                            color: isActive ? "#D6A634" : "#B8B3A8",
                            transform: isActive ? "scale(1.04)" : "scale(1)",
                          }}
                        >
                          {stage.num}
                        </span>

                        {/* Node and Connecting Animated Line between Stages */}
                        <div className="relative flex flex-col items-center pt-2 sm:pt-3 w-4">
                          {/* Circle Node on line */}
                          <div
                            className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 z-10 ${
                              isActive
                                ? "border-[#D6A634] bg-[#D6A634] shadow-[0_0_8px_rgba(214,166,52,0.8)] scale-110"
                                : "border-[#D6A634]/70 bg-white"
                            }`}
                          />

                          {/* Line going down to next item */}
                          {!isLast && (
                            <div className="w-[1.5px] h-14 sm:h-16 bg-[#E2DDD3] relative overflow-hidden mt-1">
                              <motion.div
                                className="w-full bg-[#D6A634] shadow-[0_0_8px_rgba(214,166,52,0.8)]"
                                animate={{
                                  height: isActive ? "100%" : activeStage > index ? "100%" : "0%",
                                }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Middle: Content Area */}
                      <div className="flex-1 min-w-0 pl-1 sm:pl-2">
                        {/* Keyword Label */}
                        <span
                          className={`block text-[12px] sm:text-[13px] font-mono font-bold tracking-[0.24em] uppercase transition-colors duration-300 ${
                            isActive ? "text-[#D6A634]" : "text-[#7A766E]"
                          }`}
                        >
                          {stage.keyword}
                        </span>

                        {/* Title */}
                        <h3
                          className={`text-[17px] sm:text-[19px] lg:text-[20px] font-bold tracking-tight leading-snug mt-1 transition-all duration-300 ${
                            isActive ? "text-[#141413] translate-x-1" : "text-[#2A2825]"
                          }`}
                        >
                          {stage.title}
                        </h3>

                        {/* Short Description */}
                        <p className="mt-1.5 text-[13.5px] sm:text-[14.5px] text-[#6A665E] font-normal leading-relaxed">
                          {stage.shortDesc}
                        </p>

                        {/* Expandable Technical Detail */}
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="mt-4 pt-4 border-t border-[#E8E4DC]/80 space-y-3">
                                <p className="text-[14.5px] sm:text-[15.5px] text-[#4A4742] leading-[1.65] font-normal">
                                  {stage.longDesc}
                                </p>
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE8DE]/70 text-[12px] font-mono text-[#2E2C28] border border-[#DDD7CA]">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#D6A634]" />
                                  <span className="font-bold text-[#D6A634]">{stage.standardLabel}:</span>
                                  <span>{stage.standardValue}</span>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Right: Modern Minimal Toggle Plus / Minus */}
                      <div className="shrink-0 pt-2 pl-2">
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                            isActive
                              ? "bg-white border-[#D6A634] text-[#D6A634] shadow-sm rotate-45"
                              : "bg-transparent border-transparent text-[#2A2825] group-hover:bg-white group-hover:border-[#E0DAD0]"
                          }`}
                        >
                          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ════════ Bottom Closing Bar (From User Screenshot) ════════ */}
        <div className="mt-8 sm:mt-10 py-4 px-6 sm:px-8 border border-[#E5E0D8] rounded-[16px] bg-white/60 border shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            {/* Left Quote */}
            <div className="flex items-start gap-4 max-w-xl">
              <span
                className="text-[#D6A634] text-3xl sm:text-4xl leading-none font-serif select-none"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                “
              </span>
              <div>
                <p
                  className="text-[#141413] text-[16px] sm:text-[19px] font-normal leading-tight tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {d.closingQuoteLead} <br />
                  Se construye <span className="italic text-[#D6A634] font-medium font-serif">{d.closingQuoteSub.replace("Se construye ", "")}</span>
                </p>
              </div>
            </div>

            {/* Right Badge: Tolerancia verificada */}
            <div className="flex items-center gap-4 lg:pl-8 lg:border-l border-[#E2DDD3]">
              <div className="w-9 h-9 rounded-[10px] bg-white border border-[#D6A634]/60 flex items-center justify-center shrink-0 shadow-sm text-[#D6A634]">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] sm:text-[15px] font-bold text-[#141413] tracking-tight font-sans">
                  {d.badgeTitle}
                </span>
                <span className="text-[12.5px] sm:text-[13px] text-[#6E6A62] font-normal mt-0.5">
                  {d.badgeDesc}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
