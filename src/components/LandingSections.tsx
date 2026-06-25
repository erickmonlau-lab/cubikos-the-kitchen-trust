import { FadeUp, Ico, RevealMask, Counter } from "./LandingUI";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { PhoneCall, FileSearch, Ruler, Hammer, CheckCircle, User } from "lucide-react";

const easing = [0.22, 1, 0.36, 1];

const PremiumFade = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
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

const PremiumScale = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
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

const Odometer = ({ value, className = "" }: { value: string, className?: string }) => {
  return (
    <div className={`flex items-baseline ${className}`}>
      {value.split('').map((char, i) => {
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
          <div key={i} className="relative inline-block overflow-hidden" style={{ height: '1em' }}>
            <span className="invisible px-[2px]">{num}</span>
            <motion.div
              initial={{ y: 0 }}
              whileInView={{ y: `calc(-100% * ${targetIndex} / 11)` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute top-0 left-0 flex flex-col"
              style={{ height: '1100%' }}
            >
              {[0,1,2,3,4,5,6,7,8,9,0].map((n, idx) => (
                <span key={idx} className="flex items-center justify-center leading-none px-[2px]" style={{ height: `${100/11}%` }}>{n}</span>
              ))}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export function Experiencia() {
  return (
    <section id="experiencia" className="relative bg-[#050505] text-[#FAFAF8] py-32 md:py-48 overflow-hidden z-10">
      {/* Noise Texture & Glow */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-screen pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
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
                Especialistas exclusivamente<br/>en montaje de cocinas.
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
            
            <PremiumFade delay={0.3} className="mt-12 space-y-6 text-xl md:text-[22px] text-[#EDEBE8] font-medium leading-relaxed max-w-3xl">
              <p>
                Mientras otras empresas reparten su atención entre reformas, coordinación de gremios y decenas de servicios distintos, Cubikos ha dedicado más de treinta años a una sola misión:
              </p>
              <p className="font-bold text-[#FAFAF8]">
                Montar cocinas con precisión absoluta.
              </p>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0">
          <PremiumFade delay={0.0} className="flex flex-col items-center md:items-start px-4 md:px-8 border-r border-[#E5E0D8] py-4">
            <div className="font-display font-black text-[clamp(3rem,6vw,5rem)] text-brand leading-none">
              <Counter to={30} duration={1.5} suffix="+" />
            </div>
            <div className="mt-4 text-[#888] text-[11px] font-bold uppercase tracking-widest text-center md:text-left">
              Años de experiencia
            </div>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.0 }}
              style={{ originX: 0 }}
              className="h-[2px] w-[40px] bg-brand mt-5"
            />
          </PremiumFade>

          <PremiumFade delay={0.15} className="flex flex-col items-center md:items-start px-4 md:px-8 md:border-r border-[#E5E0D8] py-4">
            <div className="font-display font-black text-[clamp(3rem,6vw,5rem)] text-brand leading-none">
              <Counter to={10000} duration={2} suffix="+" />
            </div>
            <div className="mt-4 text-[#888] text-[11px] font-bold uppercase tracking-widest text-center md:text-left">
              Cocinas montadas
            </div>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ originX: 0 }}
              className="h-[2px] w-[40px] bg-brand mt-5"
            />
          </PremiumFade>

          <PremiumFade delay={0.3} className="flex flex-col items-center md:items-start px-4 md:px-8 border-r border-[#E5E0D8] py-4">
            <div className="font-display font-black text-[clamp(3rem,6vw,5rem)] text-brand leading-none">
              <Counter to={5} duration={1} suffix="/5" />
            </div>
            <div className="mt-4 text-[#888] text-[11px] font-bold uppercase tracking-widest text-center md:text-left">
              Valoración
            </div>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ originX: 0 }}
              className="h-[2px] w-[40px] bg-brand mt-5"
            />
          </PremiumFade>

          <PremiumFade delay={0.45} className="flex flex-col items-center md:items-start px-4 md:px-8 py-4">
            <div className="font-display font-black text-[clamp(3rem,6vw,5rem)] text-brand leading-none">
              <Counter to={100} duration={1.5} suffix="%" />
            </div>
            <div className="mt-4 text-[#888] text-[11px] font-bold uppercase tracking-widest text-center md:text-left">
              Garantía
            </div>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10%" }}
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
  { n: "01", t: "CONTACTO", d: "Valoración inicial del proyecto.", icon: PhoneCall },
  { n: "02", t: "REVISIÓN", d: "Auditoría de planos y materiales.", icon: FileSearch },
  { n: "03", t: "PLANIFICACIÓN", d: "Coordinación milimétrica.", icon: Ruler },
  { n: "04", t: "MONTAJE", d: "Ejecución precisa y limpia.", icon: Hammer },
  { n: "05", t: "ENTREGA", d: "Repaso final exhaustivo.", icon: CheckCircle },
];

const KitchenAssembly = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12 md:mt-24 mb-16 lg:mb-24 relative px-4 lg:px-0">
      <svg viewBox="100 0 640 400" className="w-full h-auto drop-shadow-xl overflow-visible">
         {/* Floor */}
         <motion.rect x="70" y="360" width="700" height="12" fill="#E5E7EB" rx="6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ originX: "420px" }}
         />
         
         {/* Accent Wall / Backsplash */}
         <motion.rect x="130" y="60" width="580" height="300" fill="#FBBF24" rx="8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
         />
         
         {/* Tile detail on the backsplash */}
         <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 0.1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.8 }}>
           <path d="M 130 200 H 550 M 130 220 H 550 M 130 180 H 550 M 130 160 H 550" stroke="#FFF" strokeWidth="2" strokeDasharray="20 20" />
         </motion.g>
         
         {/* Toe Kick (Zócalo) */}
         <motion.rect x="150" y="350" width="410" height="10" fill="#1F2937"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
         />

         {/* Base Cabinets */}
         {/* Left */}
         <motion.g initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", delay: 0.5, bounce: 0.4 }}>
           <rect x="150" y="240" width="130" height="120" fill="#FFFFFF" />
           <line x1="215" y1="240" x2="215" y2="360" stroke="#E5E7EB" strokeWidth="2" />
           {/* Minimal Edge Pulls */}
           <rect x="170" y="242" width="20" height="3" fill="#374151" rx="1" />
           <rect x="240" y="242" width="20" height="3" fill="#374151" rx="1" />
         </motion.g>

         {/* Right */}
         <motion.g initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", delay: 0.6, bounce: 0.4 }}>
           <rect x="430" y="240" width="130" height="120" fill="#FFFFFF" />
           <line x1="495" y1="240" x2="495" y2="360" stroke="#E5E7EB" strokeWidth="2" />
           <rect x="450" y="242" width="20" height="3" fill="#374151" rx="1" />
           <rect x="520" y="242" width="20" height="3" fill="#374151" rx="1" />
         </motion.g>
         
         {/* Oven Unit (Middle) */}
         <motion.g initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", delay: 0.7, bounce: 0.4 }}>
           <rect x="280" y="240" width="150" height="120" fill="#FFFFFF" />
           <rect x="295" y="270" width="120" height="70" fill="#020617" rx="8" />
           {/* Glass Glare */}
           <path d="M 295 300 L 330 270 H 350 L 305 310 Z" fill="#FFF" opacity="0.1" />
           <rect x="295" y="250" width="120" height="15" fill="#374151" rx="4" />
           <circle cx="310" cy="257.5" r="3" fill="#F8FAFC" />
           <circle cx="325" cy="257.5" r="3" fill="#F8FAFC" />
           <circle cx="400" cy="257.5" r="3" fill="#F8FAFC" />
         </motion.g>

         {/* Countertop (Wood Butcher Block) */}
         <motion.g initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }} style={{ originX: "350px" }}>
           <rect x="140" y="230" width="420" height="10" fill="#D4A373" rx="2" />
           <rect x="140" y="240" width="420" height="3" fill="#C08D5D" />
         </motion.g>

         {/* Sink */}
         <motion.g initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", delay: 1.2, bounce: 0.5 }}>
           <rect x="460" y="230" width="70" height="8" fill="#94A3B8" />
           {/* Shorter faucet so it doesn't hit the upper cabinet */}
           <path d="M 495 230 V 205 Q 495 190 475 195 V 210" stroke="#CBD5E1" fill="none" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
           <rect x="505" y="222" width="8" height="8" fill="#CBD5E1" rx="2" />
         </motion.g>

         {/* Fridge (with gap and shading) */}
         <motion.g initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", delay: 1.4, bounce: 0.3 }}>
           <rect x="570" y="80" width="120" height="280" fill="#E5E7EB" rx="6" />
           {/* Shading for depth */}
           <rect x="570" y="80" width="12" height="280" fill="#000" opacity="0.05" rx="6" />
           <line x1="570" y1="230" x2="690" y2="230" stroke="#D1D5DB" strokeWidth="4" />
           <rect x="585" y="150" width="4" height="60" fill="#9CA3AF" rx="2" />
           <rect x="585" y="245" width="4" height="40" fill="#9CA3AF" rx="2" />
         </motion.g>

         {/* Range Hood (Chimney Style) */}
         <motion.g initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", delay: 1.6, bounce: 0.4 }}>
           <rect x="340" y="60" width="30" height="80" fill="#D1D5DB" />
           <rect x="320" y="140" width="70" height="10" fill="#9CA3AF" rx="2" />
           {/* Glare */}
           <path d="M 330 140 L 340 100 H 370 L 380 140 Z" fill="#FFF" opacity="0.2" />
         </motion.g>

         {/* Upper Cabinets Left */}
         <motion.g initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ type: "spring", delay: 1.8, bounce: 0.3 }}>
           <rect x="150" y="80" width="130" height="90" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="4" />
           <line x1="215" y1="80" x2="215" y2="170" stroke="#E5E7EB" strokeWidth="4" />
           {/* Bottom edge pulls */}
           <rect x="170" y="165" width="20" height="3" fill="#374151" rx="1" />
           <rect x="240" y="165" width="20" height="3" fill="#374151" rx="1" />
         </motion.g>

         {/* Upper Cabinets Right */}
         <motion.g initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ type: "spring", delay: 1.9, bounce: 0.3 }}>
           <rect x="430" y="80" width="130" height="90" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="4" />
           <line x1="495" y1="80" x2="495" y2="170" stroke="#E5E7EB" strokeWidth="4" />
           <rect x="450" y="165" width="20" height="3" fill="#374151" rx="1" />
           <rect x="520" y="165" width="20" height="3" fill="#374151" rx="1" />
         </motion.g>

         {/* Wine Rack (Botellero) - Assembled step by step */}
         <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 2.1 }}>
            {/* Frame drops in */}
            <motion.rect x="370" y="80" width="50" height="90" fill="#3E2723" rx="2" 
               initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", delay: 2.1 }} 
            />
            {/* Horizontal Shelves drawing in */}
            <motion.path d="M 370 102 H 420 M 370 124 H 420 M 370 146 H 420" stroke="#5D4037" strokeWidth="2" 
               initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 2.4 }}
            />
            {/* Vertical Dividers drawing in */}
            <motion.path d="M 386 80 V 170 M 403 80 V 170" stroke="#5D4037" strokeWidth="2" 
               initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 2.7 }}
            />
            
            {/* Wine Bottles popping into slots */}
            <motion.g initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", delay: 3.0, bounce: 0.6 }} style={{ originX: "378px", originY: "100px" }}>
               {/* Bottle 1: Top Left slot */}
               <rect x="375" y="85" width="6" height="15" fill="#1B5E20" rx="2" />
               <rect x="376" y="83" width="4" height="4" fill="#1B5E20" />
               <rect x="376.5" y="82" width="3" height="2" fill="#D4AF37" />
            </motion.g>
            
            <motion.g initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", delay: 3.2, bounce: 0.6 }} style={{ originX: "411px", originY: "122px" }}>
               {/* Bottle 2: 2nd row, right slot */}
               <rect x="408" y="107" width="6" height="15" fill="#4A148C" rx="2" />
               <rect x="409" y="105" width="4" height="4" fill="#4A148C" />
               <rect x="409.5" y="104" width="3" height="2" fill="#D4AF37" />
            </motion.g>
            
            <motion.g initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", delay: 3.4, bounce: 0.6 }} style={{ originX: "394px", originY: "166px" }}>
               {/* Bottle 3: Bottom center slot */}
               <rect x="391" y="151" width="6" height="15" fill="#B71C1C" rx="2" />
               <rect x="392" y="149" width="4" height="4" fill="#B71C1C" />
               <rect x="392.5" y="148" width="3" height="2" fill="#D4AF37" />
            </motion.g>
         </motion.g>

      </svg>
    </div>
  );
};

const AnimatedStepIcon = ({ Icon, index }: { Icon: any, index: number }) => (
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
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-brand" />
            <span className="text-[12px] font-semibold tracking-[0.3em] uppercase text-brand">Metodología</span>
          </div>
          <h2 className="font-display font-black text-[clamp(64px,6vw,96px)] leading-[0.95] text-ink max-w-[900px] text-balance">
            Precisión en cada fase.
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
                      <span className="font-display text-sm font-black text-brand">{s.n} {s.t}</span>
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

import usr from "@/assets/gallery-5.webp"; // Placeholder for client photo

export function Testimonios() {
  return (
    <section id="opiniones" className="bg-background py-32 md:py-48 overflow-hidden">
      <div className="container-x">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          
          {/* Client Photo & Stars */}
          <FadeUp className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-8 shadow-premium">
              <img src={usr} alt="Cliente Cubikos" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-2 text-ink mb-12">
              {Array.from({ length: 5 }).map((_, i) => (
                <Ico.Star key={i} className="h-6 w-6 md:h-8 md:w-8" />
              ))}
            </div>
          </FadeUp>

          {/* Massive Quote */}
          <FadeUp delay={0.2} className="relative">
            <span className="absolute -top-12 -left-8 text-8xl md:text-[12rem] font-display font-black text-line opacity-30 leading-none">"</span>
            <blockquote className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-ink leading-tight tracking-tighter text-balance">
              Impecable.<br/>
              Cumplieron fechas,<br/>
              fueron extremadamente limpios<br/>
              y los acabados son perfectos.
            </blockquote>
          </FadeUp>

          {/* Author */}
          <FadeUp delay={0.4} className="mt-16">
            <div className="font-display font-black text-2xl tracking-widest uppercase text-ink">
              Marta Sala
            </div>
            <div className="mt-2 text-lg font-bold text-ink-soft">
              Barcelona
            </div>
          </FadeUp>
          
        </div>
      </div>
    </section>
  );
}
