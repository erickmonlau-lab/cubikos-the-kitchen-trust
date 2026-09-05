import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { Ruler, Sparkles, CheckCircle2, Play, Pause, RotateCcw, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const KitchenAssemblyAnimation = memo(() => {
  const { lang } = useLanguage();
  const currentLang = (lang || 'ES').toLowerCase();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const steps = [
    {
      id: 'laser',
      title: currentLang === 'ca' ? '01. Replanteig Láser 3D' : currentLang === 'en' ? '01. 3D Laser Alignment' : '01. Replanteo Láser 3D',
      desc: currentLang === 'ca' ? 'Tolerància 0,0 mm en parets i ploms abans de descarregar el mobiliari.' : currentLang === 'en' ? '0.0mm tolerance on walls and leveling before unloading.' : 'Tolerancia 0,0 mm en paredes y plomos antes de descargar el mobiliario.',
      tag: 'NIVEL 0.00 mm',
      status: currentLang === 'ca' ? 'CALIBRAT' : currentLang === 'en' ? 'CALIBRATED' : 'CALIBRADO'
    },
    {
      id: 'carcass',
      title: currentLang === 'ca' ? '02. Nivelació de Cascos' : currentLang === 'en' ? '02. Carcass Leveling' : '02. Nivelación de Cascos',
      desc: currentLang === 'ca' ? 'Mòduls estructurals hidròfugs i reforç d’ancoratge a paret.' : currentLang === 'en' ? 'Moisture-resistant structural modules & wall-lock anchors.' : 'Módulos estructurales hidrófugos y anclajes milimétricos a pared.',
      tag: 'ESTRUCTURA',
      status: currentLang === 'ca' ? 'ENGARZAT' : currentLang === 'en' ? 'LOCKED' : 'ENGARZADO'
    },
    {
      id: 'countertop',
      title: currentLang === 'ca' ? '03. Illa i Bancada Porcellànica' : currentLang === 'en' ? '03. Island & Porcelain Countertop' : '03. Isla y Encimera Porcelánica',
      desc: currentLang === 'ca' ? 'Assentament mil·limètric sense juntes visibles ni tensions tèrmiques.' : currentLang === 'en' ? 'Monolithic stone fit with seamless joins and zero stress.' : 'Asentamiento milimétrico sin juntas visibles ni tensiones mecánicas.',
      tag: 'SEAMLESS',
      status: currentLang === 'ca' ? 'AJUSTAT' : currentLang === 'en' ? 'FITTED' : 'AJUSTADO'
    },
    {
      id: 'doors',
      title: currentLang === 'ca' ? '04. Frontals & Sistema Soft-Close' : currentLang === 'en' ? '04. Fronts & Soft-Close Hardware' : '04. Frentes & Herrajes Soft-Close',
      desc: currentLang === 'ca' ? 'Continuïtat de veta, perfils Gola i tancament amortit silenciós.' : currentLang === 'en' ? 'Grain continuity, handleless Gola profiles & soft-close glide.' : 'Continuidad de veta, perfil Gola y cierre amortiguado silencioso.',
      tag: 'PRECISIÓN',
      status: currentLang === 'ca' ? 'SINCRONITZAT' : currentLang === 'en' ? 'SYNCED' : 'SINCRONIZADO'
    },
    {
      id: 'certified',
      title: currentLang === 'ca' ? '05. Lliurament CUBIKOS Certified' : currentLang === 'en' ? '05. CUBIKOS Certified Delivery' : '05. Entrega CUBIKOS Certified',
      desc: currentLang === 'ca' ? 'Protocol de 47 punts de control i segell de garantia oficial.' : currentLang === 'en' ? '47-point critical checklist inspection & official warranty seal.' : 'Protocolo de 47 puntos de control y sello de garantía oficial.',
      tag: 'CERTIFICADO',
      status: currentLang === 'ca' ? 'APROVAT' : currentLang === 'en' ? 'APPROVED' : 'APROBADO'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  return (
    <div className="w-full bg-[#111110] border border-[#D6A634]/25 rounded-2xl overflow-hidden shadow-2xl my-10 relative">
      {/* Header Bar */}
      <div className="px-6 py-4 border-b border-white/5 bg-[#171715]/85 backdrop-blur-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#D6A634] animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-[#D6A634] uppercase font-semibold">
            {currentLang === 'ca' ? 'CUBIKOS // SEQÜÈNCIA DE MUNTATGE DE PRECISIÓ' : currentLang === 'en' ? 'CUBIKOS // PRECISION ASSEMBLY SEQUENCE' : 'CUBIKOS // SECUENCIA DE MONTAJE DE PRECISIÓN'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-xs font-mono transition-all"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#D6A634]" /> : <Play className="w-3.5 h-3.5 text-[#D6A634]" />}
            <span>{isPlaying ? 'PAUSA' : 'AUTO'}</span>
          </button>
          <button
            onClick={() => setCurrentStep(0)}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all"
            title="Reiniciar"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Visualizer Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
        {/* Left: Interactive Blueprint / Isometric Assembly SVG */}
        <div className="lg:col-span-8 relative bg-gradient-to-b from-[#141413] via-[#0E0E0D] to-[#0A0A09] p-6 flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
          {/* Blueprint Grid Lines */}
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, #D6A634 1px, transparent 1px), linear-gradient(to bottom, #D6A634 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Ambient Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-[#D6A634]/10 blur-3xl pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          {/* Isometric Assembly Stage */}
          <div className="relative w-full max-w-[560px] aspect-[16/10] flex items-center justify-center">
            <svg viewBox="0 0 600 380" className="w-full h-full drop-shadow-2xl select-none">
              <defs>
                <linearGradient id="carcassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2D2D2A" />
                  <stop offset="100%" stopColor="#1A1A18" />
                </linearGradient>
                <linearGradient id="countertopGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F5EBD7" />
                  <stop offset="40%" stopColor="#E5C778" />
                  <stop offset="100%" stopColor="#C49520" />
                </linearGradient>
                <linearGradient id="doorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#252523" />
                  <stop offset="100%" stopColor="#131312" />
                </linearGradient>
              </defs>

              {/* Floor Guideline Plane */}
              <polygon points="60,260 300,160 540,260 300,360" fill="#161615" stroke="#2B2B27" strokeWidth="1.5" />

              {/* Laser Leveling Beam (Step 0+) */}
              {currentStep >= 0 && (
                <g>
                  <line x1="40" y1="220" x2="560" y2="220" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle cx="300" cy="220" r="4" fill="#EF4444" />
                  <g transform="translate(315, 212)">
                    <rect width="82" height="18" rx="4" fill="#EF4444" fillOpacity="0.25" stroke="#EF4444" strokeWidth="1" />
                    <text x="41" y="13" fill="#FECACA" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">NIVEL 0.0mm</text>
                  </g>
                </g>
              )}

              {/* Carcasses Layer (Step 1+) */}
              {currentStep >= 1 && (
                <g>
                  {/* Module 1 (Left Back) */}
                  <polygon points="120,200 200,160 200,240 120,280" fill="url(#carcassGrad)" stroke="#454540" strokeWidth="1.5" />
                  <polygon points="120,200 200,160 280,200 200,240" fill="#353531" stroke="#454540" strokeWidth="1.5" />

                  {/* Module 2 (Middle) */}
                  <polygon points="200,240 280,200 280,280 200,320" fill="url(#carcassGrad)" stroke="#454540" strokeWidth="1.5" />
                  <polygon points="200,240 280,200 360,240 280,280" fill="#3A3A36" stroke="#454540" strokeWidth="1.5" />

                  {/* Module 3 (Right) */}
                  <polygon points="280,280 360,240 360,320 280,360" fill="url(#carcassGrad)" stroke="#454540" strokeWidth="1.5" />
                  <polygon points="280,280 360,240 440,280 360,320" fill="#353531" stroke="#454540" strokeWidth="1.5" />

                  {/* High Wall Units (Floating) */}
                  <polygon points="200,100 280,60 360,100 280,140" fill="#2A2A27" stroke="#D6A634" strokeWidth="1" strokeOpacity="0.4" />
                  <polygon points="200,100 280,140 280,190 200,150" fill="#1D1D1B" stroke="#454540" strokeWidth="1" />
                  <polygon points="280,140 360,100 360,150 280,190" fill="#242422" stroke="#454540" strokeWidth="1" />
                </g>
              )}

              {/* Countertop Layer (Step 2+) */}
              {currentStep >= 2 && (
                <g>
                  {/* Island Monolith Countertop */}
                  <polygon 
                    points="180,225 320,155 460,225 320,295" 
                    fill="url(#countertopGrad)" 
                    stroke="#FFF2CC" 
                    strokeWidth="1.5"
                    fillOpacity="0.96"
                  />
                  <polygon points="180,225 320,295 320,310 180,240" fill="#8C6D1F" stroke="#695115" strokeWidth="1" />
                  <polygon points="320,295 460,225 460,240 320,310" fill="#A48024" stroke="#695115" strokeWidth="1" />

                  {/* Induction Flush cooktop indicator */}
                  <polygon points="280,220 340,190 380,210 320,240" fill="#0D0D0C" stroke="#D6A634" strokeWidth="1" fillOpacity="0.85" />
                </g>
              )}

              {/* Doors, Drawer Fronts & LED Underglow (Step 3+) */}
              {currentStep >= 3 && (
                <g>
                  {/* Front Panels Soft-Close */}
                  <polygon points="186,244 246,214 246,274 186,304" fill="url(#doorGrad)" stroke="#D6A634" strokeWidth="1" strokeOpacity="0.75" />
                  <polygon points="250,212 316,179 316,239 250,272" fill="url(#doorGrad)" stroke="#D6A634" strokeWidth="1" strokeOpacity="0.75" />
                  
                  {/* Architectural Linear Gola Profile (Gold Line) */}
                  <line x1="186" y1="242" x2="316" y2="177" stroke="#D6A634" strokeWidth="2.5" />
                  <line x1="186" y1="306" x2="316" y2="241" stroke="#D6A634" strokeWidth="1" strokeOpacity="0.6" />

                  {/* Warm LED Underglow */}
                  <line x1="180" y1="310" x2="320" y2="240" stroke="#FFE082" strokeWidth="4" strokeOpacity="0.7" />
                </g>
              )}

              {/* CUBIKOS Certified Quality Seal (Step 4) */}
              {currentStep === 4 && (
                <g transform="translate(390, 80)">
                  <circle cx="50" cy="50" r="42" fill="#1A170F" stroke="#D6A634" strokeWidth="2" />
                  <circle cx="50" cy="50" r="37" fill="none" stroke="#D6A634" strokeWidth="1" strokeDasharray="3 3" />
                  <path d="M38 51 L47 60 L64 42" fill="none" stroke="#D6A634" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <text x="50" y="28" fill="#D6A634" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1.5" textAnchor="middle">CUBIKOS</text>
                  <text x="50" y="74" fill="#FFFFFF" fontSize="6.5" fontFamily="sans-serif" fontWeight="600" letterSpacing="1" textAnchor="middle">PASSED 0.0mm</text>
                </g>
              )}
            </svg>
          </div>

          {/* Bottom Live Measurement readout */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between pointer-events-none text-[11px] font-mono text-[#8C8C88]">
            <div className="flex items-center gap-2">
              <Ruler className="w-3.5 h-3.5 text-[#D6A634]" />
              <span>AJUSTE ESTRUCTURAL CUBIKOS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/40">ESTADO:</span>
              <span className="text-[#D6A634] font-semibold">{steps[currentStep].tag}</span>
            </div>
          </div>
        </div>

        {/* Right: Step Sequence Controller & Explanations */}
        <div className="lg:col-span-4 p-5 md:p-6 flex flex-col justify-between bg-[#141413]/60">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-[#D6A634] uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentLang === 'ca' ? 'FASES D’EXECUCIÓ' : currentLang === 'en' ? 'EXECUTION PHASES' : 'FASES DE EJECUCIÓN'}</span>
            </div>

            <div className="space-y-2">
              {steps.map((step, idx) => {
                const isActive = currentStep === idx;
                const isPast = currentStep > idx;

                return (
                  <button
                    key={step.id}
                    onClick={() => {
                      setCurrentStep(idx);
                      setIsPlaying(false);
                    }}
                    className={`w-full text-left p-3 rounded-xl transition-all border ${
                      isActive
                        ? 'bg-[#D6A634]/10 border-[#D6A634]/50 shadow-lg shadow-[#D6A634]/5'
                        : isPast
                        ? 'bg-white/[0.02] border-white/5 hover:border-white/20'
                        : 'bg-transparent border-transparent hover:bg-white/[0.02] opacity-40 hover:opacity-70'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-semibold ${isActive ? 'text-[#D6A634]' : 'text-white'}`}>
                        {step.title}
                      </span>
                      {isPast ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D6A634]" />
                      ) : isActive ? (
                        <span className="inline-block w-2 h-2 rounded-full bg-[#D6A634] animate-ping" />
                      ) : null}
                    </div>
                    <p className="text-[11px] text-[#A3A39E] leading-relaxed line-clamp-2">
                      {step.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Quality Guarantee Badge */}
          <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#D6A634]/10 text-[#D6A634]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-[11px] leading-tight">
              <p className="text-white font-medium">
                {currentLang === 'ca' ? 'Compromís de muntatge propi' : currentLang === 'en' ? 'In-house certified fitters' : 'Compromiso de montaje propio'}
              </p>
              <p className="text-[#8C8C88]">
                {currentLang === 'ca' ? 'Sense subcontractes. Control directe.' : currentLang === 'en' ? 'Zero subcontracting. Direct control.' : 'Sin subcontratas. Control directo.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});