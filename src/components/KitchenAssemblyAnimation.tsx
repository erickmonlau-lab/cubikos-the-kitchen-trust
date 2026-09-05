import React, { memo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const KitchenAssemblyAnimation = memo(() => {
  const { lang } = useLanguage();
  const currentLang = (lang || 'ES').toLowerCase();
  const [stage, setStage] = useState(0);

  // Progressive loop of real kitchen assembly
  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 5);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const stages = [
    {
      num: '01',
      title: currentLang === 'ca' ? 'Nivell de mòduls' : currentLang === 'en' ? 'Base leveling' : 'Nivelación base',
      badge: '0.0 mm',
      pillClass: 'bg-[#D6A634] text-[#0A0A09] border-[#F5D580] shadow-[#D6A634]/30',
      barBorder: 'border-[#D6A634]/40 bg-[#D6A634]/10',
      badgeColor: 'text-[#F5D580]'
    },
    {
      num: '02',
      title: currentLang === 'ca' ? 'Calaixos & gola' : currentLang === 'en' ? 'Drawers & gola' : 'Cajones y gola',
      badge: 'SOFT-CLOSE',
      pillClass: 'bg-[#38BDF8] text-[#082F49] border-[#7DD3FC] shadow-[#38BDF8]/30',
      barBorder: 'border-[#38BDF8]/40 bg-[#38BDF8]/10',
      badgeColor: 'text-[#38BDF8]'
    },
    {
      num: '03',
      title: currentLang === 'ca' ? 'Encimera porcelànica' : currentLang === 'en' ? 'Stone countertop' : 'Encimera piedra',
      badge: 'SEAMLESS',
      pillClass: 'bg-[#F59E0B] text-[#451A03] border-[#FCD34D] shadow-[#F59E0B]/30',
      barBorder: 'border-[#F59E0B]/40 bg-[#F59E0B]/10',
      badgeColor: 'text-[#FCD34D]'
    },
    {
      num: '04',
      title: currentLang === 'ca' ? 'Ancoratge mobles alts' : currentLang === 'en' ? 'Wall cabinets' : 'Muebles altos',
      badge: 'ANCLAJE',
      pillClass: 'bg-[#A855F7] text-[#2E1065] border-[#D8B4FE] shadow-[#A855F7]/30',
      barBorder: 'border-[#A855F7]/40 bg-[#A855F7]/10',
      badgeColor: 'text-[#D8B4FE]'
    },
    {
      num: '05',
      title: currentLang === 'ca' ? 'Tolerància 0.0mm' : currentLang === 'en' ? 'Tolerance 0.0mm' : 'Tolerancia 0.0mm',
      badge: 'APROBADO',
      pillClass: 'bg-[#10B981] text-[#022C22] border-[#6EE7B7] shadow-[#10B981]/30',
      barBorder: 'border-[#10B981]/40 bg-[#10B981]/10',
      badgeColor: 'text-[#6EE7B7]'
    }
  ];

  return (
    <div 
      className="relative flex flex-col items-center select-none cursor-pointer group w-full max-w-[250px]"
      onClick={() => setStage((prev) => (prev + 1) % 5)}
      title="Haz clic para avanzar fase"
    >
      {/* Botón Principal de Fase: Compacto, texto de una sola línea sin saltos feos */}
      <div className="h-10 mb-2 flex items-center justify-center w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 5, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.92 }}
            transition={{ duration: 0.2 }}
            className={`w-full py-1.5 px-3 rounded-full text-center text-xs font-mono font-bold tracking-tight shadow-lg border flex items-center justify-center gap-2 whitespace-nowrap ${stages[stage].pillClass}`}
          >
            <span className="w-2 h-2 rounded-full bg-current opacity-80 animate-ping shrink-0" />
            <span className="truncate">{stage + 1}. {stages[stage].title}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Barra Técnica Unificada: Con color vivo dinámico y fondo destacado */}
      <div className={`w-full flex items-center justify-between border rounded-lg px-2.5 py-1 mb-2 shadow-md transition-all duration-300 ${stages[stage].barBorder}`}>
        <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-white">
          <span className="text-white/60 text-[9px] uppercase tracking-wider">PASO</span>
          <span className="text-[#D6A634]">{stages[stage].num}</span>
        </div>
        <div className="h-3 w-[1px] bg-white/20" />
        <div className={`flex items-center gap-1 text-[10px] font-mono font-bold ${stages[stage].badgeColor}`}>
          <CheckCircle2 className="w-3 h-3 shrink-0" />
          <span>{stages[stage].badge}</span>
        </div>
      </div>

      {/* SVG Stage */}
      <div className="relative w-full aspect-[260/215] flex items-center justify-center">
        <svg viewBox="0 0 260 215" className="w-full h-full overflow-visible drop-shadow-2xl">
          <defs>
            <linearGradient id="kitWallBack" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E1E1C" />
              <stop offset="100%" stopColor="#141413" />
            </linearGradient>
            <linearGradient id="carcassDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2A2A27" />
              <stop offset="100%" stopColor="#171716" />
            </linearGradient>
            <linearGradient id="stoneSlab" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFF4E0" />
              <stop offset="45%" stopColor="#E5B842" />
              <stop offset="100%" stopColor="#9C771B" />
            </linearGradient>
            <linearGradient id="highUnitGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2D2D2A" />
              <stop offset="100%" stopColor="#1C1C1A" />
            </linearGradient>
          </defs>

          {/* Wall Tiles / Splashback Background */}
          <rect x="18" y="18" width="138" height="160" rx="4" fill="url(#kitWallBack)" stroke="#2B2B28" strokeWidth="1" />
          {/* Tile Grid Lines */}
          <line x1="18" y1="65" x2="156" y2="65" stroke="#2D2D2A" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="18" y1="108" x2="156" y2="108" stroke="#2D2D2A" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="64" y1="18" x2="64" y2="178" stroke="#2D2D2A" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="110" y1="18" x2="110" y2="178" stroke="#2D2D2A" strokeWidth="0.8" strokeDasharray="3 3" />

          {/* Floor Shadow */}
          <ellipse cx="128" cy="190" rx="100" ry="14" fill="#000" fillOpacity="0.6" />

          {/* ============================================================== */}
          {/* 1. WALL CABINETS (Appears in Stage >= 3) */}
          {/* ============================================================== */}
          {stage >= 3 && (
            <motion.g
              initial={{ opacity: 0, y: -22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Upper Cabinet 1 */}
              <rect x="25" y="26" width="46" height="42" rx="2" fill="url(#highUnitGrad)" stroke="#44443F" strokeWidth="1" />
              <line x1="25" y1="64" x2="71" y2="64" stroke="#D6A634" strokeWidth="1.5" strokeOpacity="0.7" />
              <line x1="26" y1="69" x2="70" y2="69" stroke="#FDE047" strokeWidth="2.5" strokeOpacity="0.9" />

              {/* Upper Cabinet 2 */}
              <rect x="75" y="26" width="46" height="42" rx="2" fill="url(#highUnitGrad)" stroke="#44443F" strokeWidth="1" />
              <line x1="75" y1="64" x2="121" y2="64" stroke="#D6A634" strokeWidth="1.5" strokeOpacity="0.7" />
              <line x1="76" y1="69" x2="120" y2="69" stroke="#FDE047" strokeWidth="2.5" strokeOpacity="0.9" />

              {/* Extractor Hood */}
              <rect x="125" y="30" width="24" height="36" rx="2" fill="#141413" stroke="#383834" strokeWidth="1" />
              <line x1="127" y1="62" x2="147" y2="62" stroke="#D6A634" strokeWidth="1.5" />
            </motion.g>
          )}

          {/* ============================================================== */}
          {/* 2. BASE CARCASS STRUCTURE */}
          {/* ============================================================== */}
          <g transform="translate(22, 108)">
            {/* Plinth */}
            <rect x="2" y="65" width="128" height="8" rx="1" fill="#111110" stroke="#2A2A26" strokeWidth="1" />

            {/* Base Cabinet 1: Sink module */}
            <rect x="2" y="12" width="41" height="53" rx="1" fill="url(#carcassDark)" stroke="#3F3F3B" strokeWidth="1" />
            
            {/* Base Cabinet 2: Drawers & Cutlery module */}
            <rect x="45" y="12" width="41" height="53" rx="1" fill="url(#carcassDark)" stroke="#3F3F3B" strokeWidth="1" />

            {/* Base Cabinet 3: Column / Oven module */}
            <rect x="88" y="12" width="41" height="53" rx="1" fill="url(#carcassDark)" stroke="#3F3F3B" strokeWidth="1" />

            {/* Stage 0: Active Laser Sweep across base */}
            {stage === 0 && (
              <motion.g
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <line x1="-5" y1="12" x2="135" y2="12" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 3" />
                <circle cx="66" cy="12" r="3.5" fill="#EF4444" />
                <rect x="52" y="3" width="28" height="8" rx="2" fill="#EF4444" />
                <text x="66" y="9.5" fill="#FFF" fontSize="5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">0.0mm</text>
              </motion.g>
            )}

            {/* ============================================================== */}
            {/* 3. FRONTS, DRAWERS & GOLA PROFILE (Stages >= 1) */}
            {/* ============================================================== */}
            {stage >= 1 && (
              <motion.g
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
              >
                {/* Module 1 door with gold handleless profile */}
                <rect x="4" y="14" width="37" height="49" rx="1" fill="#20201E" stroke="#D6A634" strokeWidth="0.8" strokeOpacity="0.8" />
                <line x1="4" y1="17" x2="41" y2="17" stroke="#D6A634" strokeWidth="2" />

                {/* Module 2: 3 Soft-close drawers */}
                <rect x="47" y="14" width="37" height="15" rx="1" fill="#222220" stroke="#444" strokeWidth="0.8" />
                <line x1="47" y1="17" x2="84" y2="17" stroke="#D6A634" strokeWidth="2" />
                <rect x="47" y="31" width="37" height="15" rx="1" fill="#222220" stroke="#444" strokeWidth="0.8" />
                <line x1="47" y1="34" x2="84" y2="34" stroke="#D6A634" strokeWidth="1.2" strokeOpacity="0.9" />
                <rect x="47" y="48" width="37" height="15" rx="1" fill="#222220" stroke="#444" strokeWidth="0.8" />
                <line x1="47" y1="51" x2="84" y2="51" stroke="#D6A634" strokeWidth="1.2" strokeOpacity="0.9" />

                {/* Module 3: Integrated Dark Glass Oven & Cooktop base */}
                <rect x="90" y="14" width="37" height="34" rx="1" fill="#0C0C0B" stroke="#D6A634" strokeWidth="0.8" strokeOpacity="0.6" />
                <line x1="95" y1="21" x2="123" y2="21" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="108" cy="32" r="7.5" fill="none" stroke="#D6A634" strokeWidth="1" strokeDasharray="3 2" />
                <rect x="90" y="50" width="37" height="13" rx="1" fill="#20201E" stroke="#3F3F3B" strokeWidth="0.8" />
              </motion.g>
            )}

            {/* ============================================================== */}
            {/* 4. SOLID STONE COUNTERTOP & FAUCET (Stages >= 2) */}
            {/* ============================================================== */}
            {stage >= 2 && (
              <motion.g
                initial={{ opacity: 0, y: -16, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45 }}
              >
                {/* Monolithic Porcelain Countertop Slab */}
                <rect x="-2" y="5" width="136" height="8" rx="2" fill="url(#stoneSlab)" stroke="#FFF" strokeWidth="0.8" strokeOpacity="0.6" />
                <line x1="-1" y1="12" x2="133" y2="12" stroke="#684D0D" strokeWidth="1" />

                {/* Flush Induction Cooktop (above oven module) */}
                <rect x="93" y="3" width="32" height="3" rx="1" fill="#0A0A09" stroke="#D6A634" strokeWidth="0.8" />
                
                {/* Black & Gold Design Kitchen Faucet */}
                <path d="M22 5 L22 -14 Q22 -20 15 -20 Q11 -20 11 -15" fill="none" stroke="#D6A634" strokeWidth="2.5" strokeLinecap="round" />
                <rect x="18" y="2" width="8" height="4" rx="1" fill="#262624" />
                <circle cx="11" cy="-12" r="1.2" fill="#38BDF8" />
              </motion.g>
            )}

            {/* Stage 4: Verified 0.0mm Stamp - Crisp, high-contrast, perfectly visible */}
            {stage === 4 && (
              <motion.g
                initial={{ scale: 0, rotate: -20, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: 'spring', damping: 14, stiffness: 220 }}
                transform="translate(42, -10)"
              >
                {/* Badge Outer Shadow & Golden Ring */}
                <circle cx="26" cy="26" r="24" fill="#0A0A09" stroke="#D6A634" strokeWidth="2.5" />
                <circle cx="26" cy="26" r="21" fill="none" stroke="#D6A634" strokeWidth="1" strokeDasharray="3 2" />
                {/* Thick Bold Green Checkmark */}
                <path d="M17 25 L23 32 L35 18" fill="none" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                {/* High-contrast solid pill tag for 0.0 mm */}
                <rect x="11" y="36" width="30" height="9" rx="3" fill="#D6A634" />
                <text x="26" y="43" fill="#0A0A09" fontSize="6.5" fontFamily="monospace" fontWeight="900" textAnchor="middle">0.0 mm</text>
              </motion.g>
            )}
          </g>

          {/* ============================================================== */}
          {/* 5. CUBIKOS MASTER FITTER PERSON (WITH DYNAMIC ACTIVE ARMS & LADDER) */}
          {/* ============================================================== */}
          <g transform={`translate(168, ${stage === 3 ? 24 : 58})`}>
            {/* Person Shadow (Only on ground stages) */}
            {stage !== 3 && (
              <ellipse cx="38" cy="132" rx="18" ry="5" fill="#000" fillOpacity="0.45" />
            )}

            {/* Escalera técnica de aluminio (en stage 3 se coloca debajo de sus botas) */}
            {stage === 3 && (
              <g transform="translate(18, 126)">
                {/* Sombra de la escalera en el suelo */}
                <ellipse cx="20" cy="42" rx="24" ry="4" fill="#000" fillOpacity="0.5" />
                {/* Patas de la escalera de aluminio */}
                <line x1="8" y1="2" x2="0" y2="42" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
                <line x1="28" y1="2" x2="38" y2="42" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
                {/* Peldaños de apoyo */}
                <line x1="6" y1="14" x2="30" y2="14" stroke="#CBD5E1" strokeWidth="2.5" />
                <line x1="4" y1="26" x2="33" y2="26" stroke="#CBD5E1" strokeWidth="2.5" />
                {/* Plataforma superior donde apoyan las botas del montador */}
                <rect x="5" y="-1" width="28" height="6" rx="2" fill="#D6A634" stroke="#B45309" strokeWidth="1" />
              </g>
            )}

            {/* Legs with technical work pants */}
            <rect x="29" y="98" width="7.5" height="28" rx="3.5" fill="#1E293B" />
            <rect x="40" y="98" width="7.5" height="28" rx="3.5" fill="#1E293B" />
            {/* Safety Work Boots */}
            <rect x="27" y="122" width="11" height="6.5" rx="3" fill="#451A03" />
            <rect x="40" y="122" width="11" height="6.5" rx="3" fill="#451A03" />

            {/* Torso & CUBIKOS Uniform */}
            <rect x="24" y="58" width="28" height="42" rx="9" fill="#171715" stroke="#333" strokeWidth="1" />
            {/* Gold suspenders */}
            <line x1="30" y1="58" x2="30" y2="96" stroke="#D6A634" strokeWidth="2" />
            <line x1="46" y1="58" x2="46" y2="96" stroke="#D6A634" strokeWidth="2" />
            <rect x="35" y="80" width="6" height="5" rx="1.5" fill="#D6A634" />

            {/* Head */}
            <circle cx="38" cy="40" r="14" fill="#FCD34D" />
            
            {/* Glasses */}
            <rect x="29" y="34" width="7.5" height="7.5" rx="2" fill="none" stroke="#D6A634" strokeWidth="1.2" />
            <rect x="39" y="34" width="7.5" height="7.5" rx="2" fill="none" stroke="#D6A634" strokeWidth="1.2" />
            <line x1="36.5" y1="38" x2="39" y2="38" stroke="#D6A634" strokeWidth="1.2" />

            {/* Eyes */}
            <circle cx="33" cy="38" r="2" fill="#0F172A" />
            <circle cx="43" cy="38" r="2" fill="#0F172A" />
            <circle cx="34" cy="37" r="0.6" fill="#FFF" />
            <circle cx="44" cy="37" r="0.6" fill="#FFF" />

            {/* Smile */}
            <path d="M34 45 Q38 48 42 45" fill="none" stroke="#9A3412" strokeWidth="1.2" strokeLinecap="round" />

            {/* Hair */}
            <path d="M24 38 C24 26 31 23 38 23 C45 23 52 26 52 38 C48 32 42 29 38 29 C33 29 28 32 24 38 Z" fill="#334155" />

            {/* ========================================================== */}
            {/* RIGHT ARM & LEFT ARM: ADAPTS SPECIALLY FOR EACH STAGE */}
            {/* ========================================================== */}

            {/* FASE 0: Nivelando módulos base con medidor láser */}
            {stage === 0 && (
              <g>
                {/* Right hand holding clipboard */}
                <path d="M51 64 Q58 74 54 86" fill="none" stroke="#171715" strokeWidth="5.5" strokeLinecap="round" />
                <circle cx="54" cy="86" r="3.2" fill="#FCD34D" />
                <rect x="52" y="80" width="8" height="12" rx="1.5" fill="#333" stroke="#D6A634" strokeWidth="0.8" />

                {/* Left arm extending laser level tool directly into the module */}
                <motion.g
                  animate={{ rotate: [-4, 4, -4], x: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  style={{ transformOrigin: "26px 64px" }}
                >
                  <path d="M26 64 Q8 68 -12 66" fill="none" stroke="#171715" strokeWidth="5.5" strokeLinecap="round" />
                  <circle cx="-12" cy="66" r="3.2" fill="#FCD34D" />
                  {/* Digital laser leveler box */}
                  <rect x="-24" y="60" width="14" height="11" rx="2" fill="#EF4444" stroke="#111" strokeWidth="1" />
                  <circle cx="-20" cy="65" r="2" fill="#FFF" />
                  {/* Laser beam shooting forward */}
                  <motion.line
                    x1="-24" y1="65" x2="-45" y2="65"
                    stroke="#EF4444"
                    strokeWidth="2"
                    strokeDasharray="2 2"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 0.6 }}
                  />
                </motion.g>
              </g>
            )}

            {/* FASE 1: Montando y encajando un auténtico cajón con guías metálicas */}
            {stage === 1 && (
              <g>
                {/* Both arms holding an actual 3D modular drawer and sliding it into the carcass */}
                <motion.g
                  animate={{ x: [6, -14, 6] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  {/* Right arm reaching and gripping right edge of drawer */}
                  <path d="M50 64 Q36 76 8 72" fill="none" stroke="#171715" strokeWidth="5.5" strokeLinecap="round" />
                  <circle cx="8" cy="72" r="3.2" fill="#FCD34D" />

                  {/* Left arm reaching and gripping left edge of drawer */}
                  <path d="M26 64 Q12 74 -10 68" fill="none" stroke="#171715" strokeWidth="5.5" strokeLinecap="round" />
                  <circle cx="-10" cy="68" r="3.2" fill="#FCD34D" />

                  {/* Realistic 3D Drawer Box (Isometric top & front) */}
                  <g transform="translate(-40, 52)">
                    {/* Metal side runner / guía metálica */}
                    <line x1="0" y1="22" x2="36" y2="22" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                    {/* Drawer Front */}
                    <rect x="0" y="10" width="38" height="18" rx="1.5" fill="#262624" stroke="#D6A634" strokeWidth="1.2" />
                    {/* Integrated J-Pull / Gola groove */}
                    <line x1="1" y1="13" x2="37" y2="13" stroke="#D6A634" strokeWidth="2" />
                    {/* Soft-close inner runner sparkle */}
                    <circle cx="3" cy="22" r="1.5" fill="#38BDF8" />
                  </g>
                </motion.g>
              </g>
            )}

            {/* FASE 2: Asentando la encimera de piedra con cuidado */}
            {stage === 2 && (
              <g>
                {/* Both arms holding and lowering the countertop stone slab */}
                <motion.g
                  animate={{ y: [-6, 3, -6] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  {/* Right arm down holding slab edge */}
                  <path d="M50 64 Q40 76 12 60" fill="none" stroke="#171715" strokeWidth="5.5" strokeLinecap="round" />
                  <circle cx="12" cy="60" r="3.2" fill="#FCD34D" />

                  {/* Left arm down holding slab edge */}
                  <path d="M26 64 Q12 66 -8 56" fill="none" stroke="#171715" strokeWidth="5.5" strokeLinecap="round" />
                  <circle cx="-8" cy="56" r="3.2" fill="#FCD34D" />

                  {/* Stone slab piece being positioned */}
                  <polygon points="-28,52 18,52 14,57 -32,57" fill="url(#stoneSlab)" stroke="#FFF" strokeWidth="0.8" />
                  {/* Sparkles of perfect fit */}
                  <motion.circle
                    cx="-10" cy="54" r="1.5" fill="#FFF"
                    animate={{ scale: [0.5, 1.8, 0.5], opacity: [0.2, 1, 0.2] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                  />
                </motion.g>
              </g>
            )}

            {/* FASE 3: En lo alto de la escalera taladrando y anclando el mueble alto */}
            {stage === 3 && (
              <g>
                {/* Mano derecha apoyada en el costado del mueble alto */}
                <path d="M50 64 Q30 54 2 46" fill="none" stroke="#171715" strokeWidth="5.5" strokeLinecap="round" />
                <circle cx="2" cy="46" r="3.2" fill="#FCD34D" />

                {/* Brazo izquierdo natural a la altura del hombro taladrando en el anclaje */}
                <motion.g
                  animate={{ x: [-2, 2, -2] }}
                  transition={{ repeat: Infinity, duration: 0.2, ease: "easeInOut" }}
                >
                  <path d="M26 64 Q8 58 -10 50" fill="none" stroke="#171715" strokeWidth="5.5" strokeLinecap="round" />
                  <circle cx="-10" cy="50" r="3.2" fill="#FCD34D" />

                  {/* Taladro atornillador profesional tocando el anclaje del mueble alto */}
                  <g transform="translate(-24, 40) rotate(5)">
                    <rect x="0" y="5" width="13" height="6" rx="2" fill="#D6A634" />
                    <rect x="5" y="11" width="4.5" height="7" rx="1.5" fill="#111" />
                    {/* Broca tocando el anclaje del mueble */}
                    <line x1="0" y1="8" x2="-8" y2="8" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="-8" cy="8" r="1.5" fill="#38BDF8" />
                    {/* Chispas de apriete técnico */}
                    <motion.circle
                      cx="-9"
                      cy="8"
                      r="2"
                      fill="#FDE047"
                      animate={{ opacity: [0, 1, 0], scale: [0.6, 2.2, 0.6] }}
                      transition={{ repeat: Infinity, duration: 0.18 }}
                    />
                  </g>
                </motion.g>
              </g>
            )}

            {/* FASE 4: Celebrando con DOS PULGARES ARRIBA y destellos */}
            {stage === 4 && (
              <g>
                {/* Right arm thumbs UP */}
                <motion.g
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                >
                  <path d="M50 64 Q62 50 56 36" fill="none" stroke="#171715" strokeWidth="5.5" strokeLinecap="round" />
                  <circle cx="56" cy="36" r="3.5" fill="#FCD34D" />
                  <line x1="56" y1="36" x2="56" y2="30" stroke="#FCD34D" strokeWidth="3" strokeLinecap="round" />
                </motion.g>

                {/* Left arm thumbs UP */}
                <motion.g
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                >
                  <path d="M26 64 Q12 50 18 36" fill="none" stroke="#171715" strokeWidth="5.5" strokeLinecap="round" />
                  <circle cx="18" cy="36" r="3.5" fill="#FCD34D" />
                  <line x1="18" y1="36" x2="18" y2="30" stroke="#FCD34D" strokeWidth="3" strokeLinecap="round" />
                </motion.g>

                {/* Celebration Sparkles around head */}
                <motion.g
                  animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.6, 1, 0.6] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  <polygon points="38,12 40,16 44,18 40,20 38,24 36,20 32,18 36,16" fill="#F59E0B" />
                  <polygon points="12,20 13,23 16,24 13,25 12,28 11,25 8,24 11,23" fill="#D6A634" />
                </motion.g>
              </g>
            )}
          </g>
        </svg>
      </div>

      {/* Mini Interactive Footnote */}
      <span className="text-[10px] font-mono tracking-widest uppercase mt-1.5 px-2 py-0.5 rounded-full bg-[#D6A634]/10 border border-[#D6A634]/30 text-[#D6A634] font-semibold group-hover:bg-[#D6A634]/20 group-hover:border-[#D6A634]/50 transition-all text-center">
        {currentLang === 'ca' ? 'PROBANT MUNTATGE CUBIKOS · FASE ' + (stage + 1) + '/5' : currentLang === 'en' ? 'CUBIKOS FITTING SEQUENCE · STEP ' + (stage + 1) + '/5' : 'MONTAJE DE PRECISIÓN CUBIKOS · PASO ' + (stage + 1) + '/5'}
      </span>
    </div>
  );
});