import { FadeUp, Ico, RevealMask, Counter } from "./LandingUI";
import useEmblaCarousel from "embla-carousel-react";
import { m as motion } from "framer-motion";
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
    viewport={{ once: true, amount: 0.15 }}
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
    viewport={{ once: true, amount: 0.15 }}
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
              viewport={{ once: true, amount: 0.15 }}
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
              viewport={{ once: true, amount: 0.15 }}
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
                Tres dÃ©cadas perfeccionando un Ãºnico oficio.
              </h2>
            </PremiumFade>

            <PremiumFade
              delay={0.3}
              className="mt-12 space-y-6 text-xl md:text-[22px] text-[#EDEBE8] font-medium leading-relaxed max-w-3xl"
            >
              <p>
                Mientras otras empresas reparten su atenciÃ³n entre reformas, coordinaciÃ³n de gremios
                y decenas de servicios distintos, Cubikos ha dedicado mÃ¡s de treinta aÃ±os a una sola
                misiÃ³n:
              </p>
              <p className="font-bold text-[#FAFAF8]">Montar cocinas con precisiÃ³n absoluta.</p>
              <div>
                <p>Cada ajuste.</p>
                <p>Cada nivelaciÃ³n.</p>
                <p>Cada encuentro.</p>
                <p>Cada acabado.</p>
              </div>
              <p className="text-brand font-bold pt-4">
                Perfeccionados tras mÃ¡s de 10.000 instalaciones.
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0">
          <PremiumFade
            delay={0.0}
            className="flex flex-col items-center md:items-start px-4 md:px-8 border-r border-[#E5E0D8] py-4"
          >
            <div className="font-display font-black text-[clamp(2.5rem,3.5vw,4.5rem)] xl:text-[5rem] tracking-tighter text-brand leading-none">
              <Counter to={30} duration={1.5} suffix="+" />
            </div>
            <div className="mt-4 text-[#888] text-[11px] font-bold uppercase tracking-widest text-center md:text-left">
              AÃ±os de experiencia
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.0 }}
              style={{ originX: 0 }}
              className="h-[2px] w-[40px] bg-brand mt-5"
            />
          </PremiumFade>

          <PremiumFade
            delay={0.15}
            className="flex flex-col items-center md:items-start px-4 md:px-8 md:border-r border-[#E5E0D8] py-4"
          >
            <div className="font-display font-black text-[clamp(2.5rem,3.5vw,4.5rem)] xl:text-[5rem] tracking-tighter text-brand leading-none">
              <Counter to={10000} duration={2} suffix="+" />
            </div>
            <div className="mt-4 text-[#888] text-[11px] font-bold uppercase tracking-widest text-center md:text-left">
              Cocinas montadas
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ originX: 0 }}
              className="h-[2px] w-[40px] bg-brand mt-5"
            />
          </PremiumFade>

          <PremiumFade
            delay={0.3}
            className="flex flex-col items-center md:items-start px-4 md:px-8 border-r border-[#E5E0D8] py-4"
          >
            <div className="font-display font-black text-[clamp(2.5rem,3.5vw,4.5rem)] xl:text-[5rem] tracking-tighter text-brand leading-none">
              <Counter to={5} duration={1} suffix="/5" />
            </div>
            <div className="mt-4 text-[#888] text-[11px] font-bold uppercase tracking-widest text-center md:text-left">
              ValoraciÃ³n
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ originX: 0 }}
              className="h-[2px] w-[40px] bg-brand mt-5"
            />
          </PremiumFade>

          <PremiumFade
            delay={0.45}
            className="flex flex-col items-center md:items-start px-4 md:px-8 py-4"
          >
            <div className="font-display font-black text-[clamp(2.5rem,3.5vw,4.5rem)] xl:text-[5rem] tracking-tighter text-brand leading-none">
              <Counter to={100} duration={1.5} suffix="%" />
            </div>
            <div className="mt-4 text-[#888] text-[11px] font-bold uppercase tracking-widest text-center md:text-left">
              GarantÃ­a
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              style={{ originX: 0 }}
              className="h-[2px] w-[40px] bg-brand mt-5"
            />
          </PremiumFade>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "CONTACTO", d: "ValoraciÃ³n inicial del proyecto.", icon: PhoneCall },
  { n: "02", t: "REVISIÃ“N", d: "AuditorÃ­a de planos y materiales.", icon: FileSearch },
  { n: "03", t: "PLANIFICACIÃ“N", d: "CoordinaciÃ³n milimÃ©trica.", icon: Ruler },
  { n: "04", t: "MONTAJE", d: "EjecuciÃ³n precisa y limpia.", icon: Hammer },
  { n: "05", t: "ENTREGA", d: "Repaso final exhaustivo.", icon: CheckCircle },
];

const KitchenAssembly = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-12 md:mt-24 mb-16 lg:mb-24 relative px-4 lg:px-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-[4px] border-white"
      >
        <img loading="lazy" 
          src={showcase3} 
          alt="Cocina terminada con precisión milimétrica" 
          loading="lazy"
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000 ease-out" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </motion.div>
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
    <section id="proceso" className="bg-[#FAFAF8] py-[120px] overflow-hidden">
      <div className="mx-auto w-[90%] max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-brand" />
            <span className="text-[12px] font-semibold tracking-[0.3em] uppercase text-brand">
              MetodologÃ­a
            </span>
          </div>
          <h2 className="font-display font-black text-[clamp(64px,6vw,96px)] leading-[0.95] text-ink max-w-[900px] text-balance">
            PrecisiÃ³n en cada fase.
          </h2>
        </motion.div>

        <KitchenAssembly />

        <div className="mt-[40px] relative">
          {/* Timeline central line */}
          <div className="absolute top-[10px] left-0 w-full h-[2px] bg-[#DADADA] hidden lg:block" />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
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
    <section id="opiniones" className="bg-background py-32 md:py-48 overflow-hidden">
      <div className="container-x">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          {/* Client Photo & Stars */}
          <FadeUp className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-8 shadow-premium flex items-center justify-center bg-[#d8a843] text-[#111]">
              <span className="font-display font-black text-4xl md:text-5xl tracking-widest">MS</span>
            </div>
            <div className="flex gap-2 text-ink mb-12">
              {Array.from({ length: 5 }).map((_, i) => (
                <Ico.Star key={i} className="h-6 w-6 md:h-8 md:w-8" />
              ))}
            </div>
          </FadeUp>

          {/* Massive Quote */}
          <FadeUp delay={0.2} className="relative">
            <span className="absolute -top-12 -left-8 text-8xl md:text-[12rem] font-display font-black text-line opacity-30 leading-none">
              "
            </span>
            <blockquote className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-ink leading-tight tracking-tighter text-balance">
              Impecable.
              <br />
              Cumplieron fechas,
              <br />
              fueron extremadamente limpios
              <br />y los acabados son perfectos.
            </blockquote>
          </FadeUp>

          {/* Author */}
          <FadeUp delay={0.4} className="mt-16">
            <div className="font-display font-black text-2xl tracking-widest uppercase text-ink">
              Marta Sala
            </div>
            <div className="mt-2 text-lg font-bold text-ink-soft">Barcelona</div>
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
              <h2 className="font-display font-black text-[clamp(2rem,8vw,4rem)] tracking-tight leading-tight mb-8 text-[#FAFAF8] text-balance">
                El Arte del Ensamblaje
              </h2>
              <p className="text-[#EDEBE8]/80 text-lg md:text-xl leading-relaxed mb-6 font-light">
                Un botellero a medida no admite márgenes de error. Cada balda y cada separador debe
                encajar con tolerancias milimétricas para garantizar la estabilidad y una estética
                perfecta.
              </p>
              <p className="text-[#EDEBE8]/80 text-lg md:text-xl leading-relaxed font-light">
                Es en estos pequeÃ±os detalles donde la verdadera calidad de un montaje sale a
                relucir. No instalamos cocinas; construimos mobiliario de precisiÃ³n.
              </p>
            </PremiumFade>
          </div>

          <div className="relative aspect-[4/5] md:aspect-square lg:aspect-square w-full rounded-2xl flex items-center justify-center overflow-visible">
            {/* Main Photo (Wine Rack) */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1, ease: easing }}
              className="absolute left-0 bottom-0 w-[70%] h-[80%] rounded-2xl overflow-hidden shadow-2xl z-10 border-[6px] border-[#0D0D0D]"
            >
              <img loading="lazy"
                src={showcase1}
                alt="Montaje de estanterÃ­a iluminada"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Top Right Photo (Island) */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: -40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1, delay: 0.2, ease: easing }}
              className="absolute right-0 top-0 w-[55%] h-[50%] rounded-2xl overflow-hidden shadow-xl z-20 border-[6px] border-[#0D0D0D]"
            >
              <img loading="lazy"
                src={showcase2}
                alt="Isla de cocina premium"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Bottom Right Photo (Pantry) */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1, delay: 0.4, ease: easing }}
              className="absolute right-12 bottom-8 w-[40%] h-[40%] rounded-2xl overflow-hidden shadow-xl z-30 border-[6px] border-[#0D0D0D]"
            >
              <img loading="lazy"
                src={showcase3}
                alt="Detalle de montaje en columna"
                className="w-full h-full object-cover object-left-top"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


