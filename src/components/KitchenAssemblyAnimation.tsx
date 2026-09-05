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
      label: currentLang === 'ca' ? '1. Nivelant mòduls base 📐' : currentLang === 'en' ? '1. Leveling base units 📐' : '1. Nivelando módulos base 📐',
      color: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
      action: 'screwing'
    },
    {
      label: currentLang === 'ca' ? '2. Muntant calaixos & gola 🗄️' : currentLang === 'en' ? '2. Fitting drawers & gola 🗄️' : '2. Montando cajones & gola 🗄️',
      color: 'bg-sky-500/10 border-sky-500/30 text-sky-300',
      action: 'fitting'
    },
    {
      label: currentLang === 'ca' ? '3. Col·locant encimera pedra ✨' : currentLang === 'en' ? '3. Installing stone countertop ✨' : '3. Colocando encimera piedra ✨',
      color: 'bg-[#D6A634]/15 border-[#D6A634]/40 text-[#F5EBD7]',
      action: 'placing'
    },
    {
      label: currentLang === 'ca' ? '4. Ancorant mobles alts 🔨' : currentLang === 'en' ? '4. Hanging wall cabinets 🔨' : '4. Anclando muebles altos 🔨',
      color: 'bg-purple-500/10 border-purple-500/30 text-purple-300',
      action: 'drilling'
    },
    {
      label: currentLang === 'ca' ? '5. ¡Tolerància 0.0mm llesta! ✅' : currentLang === 'en' ? '5. 0.0mm tolerance verified! ✅' : '5. ¡Tolerancia 0.0mm lista! ✅',
      color: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300',
      action: 'celebrating'
    }
  ];

  return (
    <div 
      className="relative flex flex-col items-center justify-center select-none cursor-pointer group"
      onClick={() => setStage((prev) => (prev + 1) % 5)}
      title="Haz clic para avanzar fase"
    >
      {/* Floating Status Pill Header */}
      <div className="h-8 mb-2 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.9 }}
            transition={{ duration: 0.22 }}
            className={`px-3 py-1 rounded-full border text-[11px] font-mono font-medium shadow-md backdrop-blur-md flex items-center gap-1.5 ${stages[stage].color}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D6A634] animate-ping" />
            <span>{stages[stage].label}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Chips */}
      <div className="absolute -left-2 top-11 px-2 py-0.5 rounded bg-[#171715] border border-white/10 text-[#D6A634] text-[9px] font-mono shadow">
        <span>PAS 0{stage + 1}</span>
      </div>
      <div className="absolute -right-3 top-11 px-2 py-0.5 rounded bg-[#171715] border border-white/10 text-emerald-400 text-[9px] font-mono shadow flex items-center gap-1">
        <CheckCircle2 className="w-2.5 h-2.5" />
        <span>0.0mm</span>
      </div>

      {/* SVG Stage */}
      <div className="relative w-56 h-48 flex items-center justify-center">
        <svg viewBox="0 0 250 210" className="w-full h-full overflow-visible drop-shadow-2xl">
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
              <stop offset="0%" stopColor="#EDE3D2" />
              <stop offset="50%" stopColor="#D6A634" />
              <stop offset="100%" stopColor="#9C771B" />
            </linearGradient>
            <linearGradient id="highUnitGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2D2D2A" />
              <stop offset="100%" stopColor="#1C1C1A" />
            </linearGradient>
          </defs>

          {/* Wall Tiles / Splashback Background */}
          <rect x="20" y="20" width="135" height="155" rx="4" fill="url(#kitWallBack)" stroke="#262624" strokeWidth="1" />
          {/* Subtle Tile Grid Lines */}
          <line x1="20" y1="65" x2="155" y2="65" stroke="#2B2B28" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="20" y1="105" x2="155" y2="105" stroke="#2B2B28" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="65" y1="20" x2="65" y2="175" stroke="#2B2B28" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="110" y1="20" x2="110" y2="175" stroke="#2B2B28" strokeWidth="0.8" strokeDasharray="3 3" />

          {/* Floor Shadow */}
          <ellipse cx="125" cy="188" rx="95" ry="14" fill="#000" fillOpacity="0.5" />

          {/* ============================================================== */}
          {/* 1. WALL CABINETS (Appears in Stage 3 and 4) */}
          {/* ============================================================== */}
          {stage >= 3 && (
            <motion.g
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Upper Cabinet 1 */}
              <rect x="28" y="28" width="46" height="42" rx="2" fill="url(#highUnitGrad)" stroke="#3E3E3A" strokeWidth="1" />
              <line x1="28" y1="66" x2="74" y2="66" stroke="#D6A634" strokeWidth="1.5" strokeOpacity="0.6" />
              {/* Under-cabinet warm LED */}
              <line x1="29" y1="71" x2="73" y2="71" stroke="#FDE047" strokeWidth="2" strokeOpacity="0.8" />

              {/* Upper Cabinet 2 */}
              <rect x="78" y="28" width="46" height="42" rx="2" fill="url(#highUnitGrad)" stroke="#3E3E3A" strokeWidth="1" />
              <line x1="78" y1="66" x2="124" y2="66" stroke="#D6A634" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="79" y1="71" x2="123" y2="71" stroke="#FDE047" strokeWidth="2" strokeOpacity="0.8" />

              {/* Built-in Extractor Hood Detail */}
              <rect x="127" y="32" width="22" height="34" rx="2" fill="#141413" stroke="#333" strokeWidth="1" />
              <line x1="129" y1="63" x2="147" y2="63" stroke="#D6A634" strokeWidth="1" />
            </motion.g>
          )}

          {/* ============================================================== */}
          {/* 2. BASE CARCASS STRUCTURE (Always visible, animated in stage 0) */}
          {/* ============================================================== */}
          <g transform="translate(25, 105)">
            {/* Plinth / Zócalo técnico */}
            <rect x="2" y="65" width="124" height="8" rx="1" fill="#111110" stroke="#222" strokeWidth="1" />

            {/* Base Cabinet 1: Sink module */}
            <rect x="2" y="12" width="40" height="53" rx="1" fill="url(#carcassDark)" stroke="#3A3A36" strokeWidth="1" />
            
            {/* Base Cabinet 2: Drawers & Cutlery module */}
            <rect x="44" y="12" width="40" height="53" rx="1" fill="url(#carcassDark)" stroke="#3A3A36" strokeWidth="1" />

            {/* Base Cabinet 3: Column / Oven module */}
            <rect x="86" y="12" width="40" height="53" rx="1" fill="url(#carcassDark)" stroke="#3A3A36" strokeWidth="1" />

            {/* Stage 0: Laser Leveling on Carcass */}
            {stage === 0 && (
              <motion.g
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              >
                <line x1="-5" y1="12" x2="135" y2="12" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="65" cy="12" r="3" fill="#EF4444" />
              </motion.g>
            )}

            {/* ============================================================== */}
            {/* 3. FRONTS, DRAWERS & GOLA PROFILE (Stages >= 1) */}
            {/* ============================================================== */}
            {stage >= 1 && (
              <motion.g
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
              >
                {/* Module 1 door with gold handleless profile */}
                <rect x="4" y="14" width="36" height="49" rx="1" fill="#20201E" stroke="#D6A634" strokeWidth="0.8" strokeOpacity="0.6" />
                <line x1="4" y1="17" x2="40" y2="17" stroke="#D6A634" strokeWidth="1.5" />

                {/* Module 2: 3 Soft-close drawers */}
                <rect x="46" y="14" width="36" height="15" rx="1" fill="#222220" stroke="#444" strokeWidth="0.8" />
                <line x1="46" y1="17" x2="82" y2="17" stroke="#D6A634" strokeWidth="1.5" />
                <rect x="46" y="31" width="36" height="15" rx="1" fill="#222220" stroke="#444" strokeWidth="0.8" />
                <line x1="46" y1="34" x2="82" y2="34" stroke="#D6A634" strokeWidth="1" strokeOpacity="0.8" />
                <rect x="46" y="48" width="36" height="15" rx="1" fill="#222220" stroke="#444" strokeWidth="0.8" />
                <line x1="46" y1="51" x2="82" y2="51" stroke="#D6A634" strokeWidth="1" strokeOpacity="0.8" />

                {/* Module 3: Integrated Dark Glass Oven & Cooktop base */}
                <rect x="88" y="14" width="36" height="34" rx="1" fill="#0C0C0B" stroke="#D6A634" strokeWidth="0.8" strokeOpacity="0.5" />
                <line x1="93" y1="21" x2="119" y2="21" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="106" cy="32" r="7" fill="none" stroke="#D6A634" strokeWidth="1" strokeDasharray="3 2" />
                {/* Lower drawer under oven */}
                <rect x="88" y="50" width="36" height="13" rx="1" fill="#20201E" stroke="#3A3A36" strokeWidth="0.8" />
              </motion.g>
            )}

            {/* ============================================================== */}
            {/* 4. SOLID STONE COUNTERTOP & FAUCET (Stages >= 2) */}
            {/* ============================================================== */}
            {stage >= 2 && (
              <motion.g
                initial={{ opacity: 0, y: -15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45 }}
              >
                {/* Monolithic Porcelain Countertop Slab */}
                <rect x="-2" y="6" width="132" height="7" rx="1.5" fill="url(#stoneSlab)" stroke="#FFF" strokeWidth="0.6" strokeOpacity="0.4" />
                <line x1="-1" y1="12" x2="129" y2="12" stroke="#684D0D" strokeWidth="1" />

                {/* Flush Induction Cooktop (above oven module) */}
                <rect x="91" y="4" width="30" height="3" rx="1" fill="#0A0A09" stroke="#D6A634" strokeWidth="0.6" />
                
                {/* Black & Gold Design Kitchen Faucet (above sink module) */}
                <path d="M22 6 L22 -12 Q22 -18 16 -18 Q12 -18 12 -14" fill="none" stroke="#D6A634" strokeWidth="2.2" strokeLinecap="round" />
                <rect x="18" y="3" width="7" height="3.5" rx="1" fill="#262624" />
                {/* Faucet drop of water sparkle */}
                <circle cx="12" cy="-10" r="1" fill="#38BDF8" />
              </motion.g>
            )}

            {/* Stage 4: Verified 0.0mm Stamp */}
            {stage === 4 && (
              <motion.g
                initial={{ scale: 0, rotate: -20, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: 'spring', damping: 12, stiffness: 200 }}
                transform="translate(45, -5)"
              >
                <circle cx="20" cy="20" r="16" fill="#141412" stroke="#D6A634" strokeWidth="1.5" />
                <path d="M14 20 L18 24 L26 15" fill="none" stroke="#D6A634" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <text x="20" y="31" fill="#FFF" fontSize="4.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">0.0 mm</text>
              </motion.g>
            )}
          </g>

          {/* ============================================================== */}
          {/* 5. CUBIKOS MASTER FITTER PERSON (Interactive right side) */}
          {/* ============================================================== */}
          <g transform="translate(162, 58)">
            {/* Person Shadow */}
            <ellipse cx="38" cy="130" rx="18" ry="4.5" fill="#000" fillOpacity="0.4" />

            {/* Legs with technical work pants */}
            <rect x="29" y="98" width="7.5" height="28" rx="3.5" fill="#1E293B" />
            <rect x="40" y="98" width="7.5" height="28" rx="3.5" fill="#1E293B" />
            {/* Safety Work Boots */}
            <rect x="27" y="122" width="11" height="6.5" rx="3" fill="#451A03" />
            <rect x="40" y="122" width="11" height="6.5" rx="3" fill="#451A03" />

            {/* Torso & CUBIKOS Uniform */}
            <rect x="24" y="58" width="28" height="42" rx="9" fill="#171715" stroke="#333" strokeWidth="1" />
            {/* Harness / Gold suspenders */}
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

            {/* Smile / Concentrated look */}
            <path d="M34 45 Q38 48 42 45" fill="none" stroke="#9A3412" strokeWidth="1.2" strokeLinecap="round" />

            {/* Modern Hair */}
            <path d="M24 38 C24 26 31 23 38 23 C45 23 52 26 52 38 C48 32 42 29 38 29 C33 29 28 32 24 38 Z" fill="#334155" />

            {/* Right Arm (Resting on side or clipboard) */}
            <path d="M51 64 Q61 76 54 88" fill="none" stroke="#171715" strokeWidth="5.5" strokeLinecap="round" />
            <circle cx="54" cy="88" r="3.2" fill="#FCD34D" />

            {/* Left Arm: Actively working according to stage! */}
            {stage === 4 ? (
              /* Thumbs up celebrating */
              <g>
                <path d="M25 64 Q12 60 14 44" fill="none" stroke="#171715" strokeWidth="5.5" strokeLinecap="round" />
                <circle cx="14" cy="44" r="3.5" fill="#FCD34D" />
                <Sparkles className="w-3 h-3 text-[#D6A634]" />
                <line x1="14" y1="44" x2="14" y2="39" stroke="#FCD34D" strokeWidth="2.5" strokeLinecap="round" />
              </g>
            ) : (
              /* Drilling / Screwing / Adjusting towards the kitchen */
              <motion.g
                animate={{ 
                  rotate: stage === 0 ? [-5, 5, -5] : stage === 3 ? [-10, 10, -10] : [-8, 2, -8],
                  y: stage === 3 ? -18 : 0 // reaches up when hanging top units!
                }}
                transition={{ repeat: Infinity, duration: stage === 0 ? 0.8 : stage === 3 ? 0.5 : 1.1, ease: "easeInOut" }}
                style={{ transformOrigin: "26px 64px" }}
              >
                <path d="M26 64 Q10 70 -4 67" fill="none" stroke="#171715" strokeWidth="5.5" strokeLinecap="round" />
                <circle cx="-4" cy="67" r="3.2" fill="#FCD34D" />

                {/* Cordless Drill Tool with Bit and Sparks */}
                <g transform="translate(-16, 56) rotate(12)">
                  <rect x="0" y="5" width="12" height="6" rx="2" fill="#D6A634" />
                  <rect x="5" y="11" width="4.5" height="7" rx="1.5" fill="#111" />
                  <line x1="0" y1="8" x2="-6" y2="8" stroke="#E2E8F0" strokeWidth="1.8" strokeLinecap="round" />

                  {/* Drilling sparkles */}
                  <motion.circle
                    cx="-8"
                    cy="8"
                    r="1.8"
                    fill="#FDE047"
                    animate={{ opacity: [0, 1, 0], scale: [0.6, 1.8, 0.6] }}
                    transition={{ repeat: Infinity, duration: 0.3 }}
                  />
                </g>
              </motion.g>
            )}
          </g>
        </svg>
      </div>

      {/* Mini Interactive Footnote */}
      <span className="text-[10px] font-mono tracking-widest text-[#8C8C88] uppercase mt-1 group-hover:text-[#D6A634] transition-colors">
        {currentLang === 'ca' ? 'PROBANT MUNTATGE CUBIKOS · FASE ' + (stage + 1) + '/5' : currentLang === 'en' ? 'CUBIKOS FITTING SEQUENCE · STEP ' + (stage + 1) + '/5' : 'MONTAJE DE PRECISIÓN CUBIKOS · PASO ' + (stage + 1) + '/5'}
      </span>
    </div>
  );
});