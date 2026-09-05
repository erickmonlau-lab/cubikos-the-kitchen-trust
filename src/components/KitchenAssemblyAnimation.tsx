import React, { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Hammer, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const KitchenAssemblyAnimation = memo(() => {
  const { lang } = useLanguage();
  const currentLang = (lang || 'ES').toLowerCase();
  const [activeBubble, setActiveBubble] = useState(0);

  const bubbles = [
    {
      text: currentLang === 'ca' ? 'Ajustant a 0.0mm 📐' : currentLang === 'en' ? 'Tuning to 0.0mm 📐' : 'Ajustando a 0.0mm 📐',
      color: 'bg-[#D6A634]/15 border-[#D6A634]/40 text-[#F5EBD7]'
    },
    {
      text: currentLang === 'ca' ? 'Cascs nivelats! 🔨' : currentLang === 'en' ? 'Carcass leveled! 🔨' : '¡Cascos nivelados! 🔨',
      color: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-200'
    },
    {
      text: currentLang === 'ca' ? 'Bancada enrasada ✨' : currentLang === 'en' ? 'Seamless stone fit ✨' : 'Encimera enrasada ✨',
      color: 'bg-amber-500/15 border-amber-500/40 text-amber-200'
    },
    {
      text: currentLang === 'ca' ? 'Soft-close llest! 🚪' : currentLang === 'en' ? 'Soft-close ready! 🚪' : '¡Soft-close listo! 🚪',
      color: 'bg-sky-500/15 border-sky-500/40 text-sky-200'
    }
  ];

  return (
    <div 
      className="relative flex flex-col items-center justify-center select-none group cursor-pointer"
      onClick={() => setActiveBubble((prev) => (prev + 1) % bubbles.length)}
      title="CUBIKOS Master Fitter"
    >
      {/* Floating Dynamic Dialogue Cloud / Badge (similar to reference) */}
      <div className="h-9 mb-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBubble}
            initial={{ opacity: 0, y: 5, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.85 }}
            transition={{ duration: 0.25 }}
            className={`px-3 py-1 rounded-full border text-[11px] font-mono tracking-tight font-medium shadow-lg backdrop-blur-md flex items-center gap-1.5 ${bubbles[activeBubble].color}`}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D6A634] animate-ping" />
            <span>{bubbles[activeBubble].text}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Miniature Tool Chips around the character */}
      <motion.div 
        animate={{ y: [0, -4, 0] }} 
        transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
        className="absolute -left-1 top-12 px-2 py-0.5 rounded-md bg-[#181816] border border-[#D6A634]/30 text-[#D6A634] text-[9px] font-mono shadow-md flex items-center gap-1"
      >
        <span>0.0mm</span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 4, 0] }} 
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut", delay: 0.5 }}
        className="absolute -right-2 top-10 px-2 py-0.5 rounded-md bg-[#181816] border border-emerald-500/30 text-emerald-400 text-[9px] font-mono shadow-md flex items-center gap-1"
      >
        <CheckCircle2 className="w-2.5 h-2.5" />
        <span>OK</span>
      </motion.div>

      {/* Isometric Stage with Miniature Kitchen Module & Character */}
      <div className="relative w-44 h-40 flex items-center justify-center">
        <svg viewBox="0 0 200 180" className="w-full h-full overflow-visible drop-shadow-xl">
          <defs>
            <linearGradient id="charShirt" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2A2A26" />
              <stop offset="100%" stopColor="#171715" />
            </linearGradient>
            <linearGradient id="charPants" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id="cabinetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2F2F2B" />
              <stop offset="100%" stopColor="#1B1B19" />
            </linearGradient>
            <linearGradient id="counterGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F5EBD7" />
              <stop offset="40%" stopColor="#D6A634" />
              <stop offset="100%" stopColor="#B3861B" />
            </linearGradient>
          </defs>

          {/* Floor Shadow */}
          <ellipse cx="100" cy="160" rx="65" ry="12" fill="#000000" fillOpacity="0.45" />

          {/* Miniature Kitchen Island being assembled (Left side) */}
          <g transform="translate(18, 55)">
            {/* Base Cabinet Carcass */}
            <polygon points="10,40 50,22 90,40 50,58" fill="url(#cabinetGrad)" stroke="#454540" strokeWidth="1" />
            <polygon points="10,40 50,58 50,88 10,70" fill="#20201E" stroke="#3A3A36" strokeWidth="1" />
            <polygon points="50,58 90,40 90,70 50,88" fill="#171716" stroke="#3A3A36" strokeWidth="1" />

            {/* Gola Profile Line */}
            <line x1="10" y1="47" x2="50" y2="65" stroke="#D6A634" strokeWidth="1.5" strokeOpacity="0.8" />
            <line x1="50" y1="65" x2="90" y2="47" stroke="#D6A634" strokeWidth="1.5" strokeOpacity="0.8" />

            {/* Countertop Stone Slab Floating / Assembling */}
            <motion.g
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
            >
              <polygon points="8,35 50,16 92,35 50,54" fill="url(#counterGold)" stroke="#FFF" strokeWidth="0.8" strokeOpacity="0.5" />
              <polygon points="8,35 50,54 50,59 8,40" fill="#9A751E" stroke="#684D0D" strokeWidth="0.5" />
              <polygon points="50,54 92,35 92,40 50,59" fill="#B38822" stroke="#684D0D" strokeWidth="0.5" />

              {/* Laser Line across Countertop */}
              <line x1="20" y1="36" x2="80" y2="36" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 2" />
            </motion.g>

            {/* Level bubble indicator */}
            <g transform="translate(42, 6)">
              <rect width="16" height="6" rx="3" fill="#D6A634" fillOpacity="0.2" stroke="#D6A634" strokeWidth="0.7" />
              <circle cx="50" cy="9" r="1.5" fill="#EF4444" />
            </g>
          </g>

          {/* Miniature Character (Assembler / Montador de Cocina) Right Side */}
          <g transform="translate(95, 30)">
            {/* Character Shadow */}
            <ellipse cx="45" cy="132" rx="20" ry="5" fill="#000000" fillOpacity="0.4" />

            {/* Legs & Shoes */}
            <rect x="36" y="100" width="7" height="28" rx="3.5" fill="url(#charPants)" />
            <rect x="47" y="100" width="7" height="28" rx="3.5" fill="url(#charPants)" />
            <rect x="34" y="125" width="11" height="6" rx="3" fill="#3E2723" />
            <rect x="47" y="125" width="11" height="6" rx="3" fill="#3E2723" />

            {/* Torso / Body with CUBIKOS Technical Uniform */}
            <rect x="30" y="58" width="30" height="44" rx="10" fill="url(#charShirt)" stroke="#353530" strokeWidth="1" />
            
            {/* Tool Vest / Braces with Gold Detail */}
            <path d="M36 58 L36 96" stroke="#D6A634" strokeWidth="2" strokeOpacity="0.8" />
            <path d="M54 58 L54 96" stroke="#D6A634" strokeWidth="2" strokeOpacity="0.8" />
            <rect x="42" y="80" width="6" height="5" rx="1.5" fill="#D6A634" />

            {/* Character Head */}
            <circle cx="45" cy="40" r="14" fill="#FBD38D" />

            {/* Eyes (Friendly, cartoon style) */}
            <circle cx="41" cy="38" r="2.2" fill="#1A202C" />
            <circle cx="49" cy="38" r="2.2" fill="#1A202C" />
            <circle cx="42" cy="37" r="0.7" fill="#FFFFFF" />
            <circle cx="50" cy="37" r="0.7" fill="#FFFFFF" />

            {/* Glasses (Like in reference) */}
            <rect x="37" y="34" width="7" height="7" rx="2" fill="none" stroke="#D6A634" strokeWidth="1.2" />
            <rect x="46" y="34" width="7" height="7" rx="2" fill="none" stroke="#D6A634" strokeWidth="1.2" />
            <line x1="44" y1="37" x2="46" y2="37" stroke="#D6A634" strokeWidth="1.2" />

            {/* Smile */}
            <path d="M42 45 Q45 48 48 45" fill="none" stroke="#C05621" strokeWidth="1" strokeLinecap="round" />

            {/* Hair / Modern Cut */}
            <path d="M31 38 C31 27 38 24 45 24 C52 24 59 27 59 38 C55 33 48 30 45 30 C40 30 35 33 31 38 Z" fill="#2D3748" />

            {/* Right Arm (Resting on hip or holding tape) */}
            <path d="M58 64 Q68 76 62 88" fill="none" stroke="#2A2A26" strokeWidth="6" strokeLinecap="round" />
            <circle cx="62" cy="88" r="3.5" fill="#FBD38D" />

            {/* Left Arm (Active: Installing / Screwing with animated motion) */}
            <motion.g
              animate={{ rotate: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              style={{ transformOrigin: "32px 64px" }}
            >
              {/* Arm reaching towards the cabinet */}
              <path d="M32 64 Q18 70 8 66" fill="none" stroke="#2A2A26" strokeWidth="6" strokeLinecap="round" />
              <circle cx="8" cy="66" r="3.5" fill="#FBD38D" />

              {/* Cordless Drill / Screwdriver Tool in Hand */}
              <g transform="translate(-1, 56) rotate(15)">
                <rect x="0" y="4" width="10" height="5" rx="1.5" fill="#D6A634" />
                <rect x="4" y="9" width="3.5" height="7" rx="1" fill="#171715" />
                <line x1="0" y1="6.5" x2="-4" y2="6.5" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />
                {/* Tiny spark while drilling */}
                <motion.circle
                  cx="-5"
                  cy="6.5"
                  r="1.5"
                  fill="#F6E05E"
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                />
              </g>
            </motion.g>
          </g>
        </svg>
      </div>

      {/* Mini Caption */}
      <span className="text-[10px] font-mono tracking-wider text-[#8C8C88] uppercase mt-1 group-hover:text-[#D6A634] transition-colors">
        {currentLang === 'ca' ? 'Muntatge CUBIKOS' : currentLang === 'en' ? 'CUBIKOS Assembly' : 'Montaje CUBIKOS'}
      </span>
    </div>
  );
});