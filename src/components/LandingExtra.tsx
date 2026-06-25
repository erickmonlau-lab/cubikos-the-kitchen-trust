import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FadeUp, Ico, RevealMask, LogoCubikos } from "./LandingUI";
import heroImg from "@/assets/hero-kitchen.jpg";
import gal1 from "@/assets/gallery-1.jpg";
import gal2 from "@/assets/gallery-2.jpg";
import gal3 from "@/assets/gallery-3.jpg";
import gal4 from "@/assets/gallery-4.jpg";
import gal5 from "@/assets/gallery-5.jpg";
import gal6 from "@/assets/gallery-6.jpg";

const details = [
  { 
    src: gal1, 
    title: "Alineación perfecta de frentes", 
    subtitle: "Planimetría e integración de electrodomésticos", 
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/3] lg:aspect-auto" 
  },
  { 
    src: gal2, 
    title: "Tolerancia < 1mm", 
    subtitle: "Unión de encimeras", 
    span: "lg:col-span-1 lg:row-span-1",
    aspect: "aspect-square" 
  },
  { 
    src: gal4, 
    title: "Nivelación láser", 
    subtitle: "Ajuste de módulos base", 
    span: "lg:col-span-1 lg:row-span-1",
    aspect: "aspect-square" 
  },
  { 
    src: gal5, 
    title: "Mecanizados exactos", 
    subtitle: "Encastres al milímetro", 
    span: "lg:col-span-1 lg:row-span-1",
    aspect: "aspect-square" 
  },
  { 
    src: gal6, 
    title: "Remates invisibles", 
    subtitle: "Sellado y terminaciones perimetrales", 
    span: "lg:col-span-2 lg:row-span-1",
    aspect: "aspect-[21/9] lg:aspect-auto" 
  },
];

export function Proyectos() {
  return (
    <section id="proyectos" className="bg-[#111111] text-[#FAFAF8] py-16 md:py-48">
      <div className="container-x mb-12 md:mb-24">
        <FadeUp>
          <h2 className="font-display font-black text-[clamp(48px,8vw,80px)] leading-[0.95] tracking-tighter text-[#FAFAF8] text-balance">
            Casos de estudio.
          </h2>
          <p className="mt-6 md:mt-8 text-lg md:text-2xl text-[#EDEBE8] font-medium leading-relaxed text-balance max-w-2xl">
            La excelencia no se demuestra en un plano general, sino en la perfección de cada detalle, unión y remate.
          </p>
        </FadeUp>
      </div>
      
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:auto-rows-[350px]">
          {details.map((g, i) => (
            <FadeUp
              key={i}
              delay={i * 0.1}
              className={`group relative overflow-hidden bg-[#1a1a1a] ${g.span} ${g.aspect || ''}`}
            >
              <img
                src={g.src}
                alt={g.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              />
              
              {/* Permanent Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 pointer-events-none">
                <div className="border-l-2 border-brand pl-6 transform transition-transform duration-500 ease-out group-hover:translate-x-2">
                  <h3 className="font-display text-2xl md:text-3xl font-black text-white">{g.title}</h3>
                  <p className="mt-2 text-lg font-medium text-[#D1CFCC]">{g.subtitle}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "¿Trabajáis en toda Cataluña?", a: "Sí. Cubrimos las cuatro provincias y nos desplazamos a cualquier población de Cataluña con nuestro propio equipo." },
  { q: "¿Montáis cualquier tipo de cocina?", a: "Instalamos firmas italianas de lujo, mobiliario de estudios de interiorismo, proyectos a medida y firmas comerciales de gama alta." },
  { q: "¿Gestionáis los imprevistos de obra?", a: "Nuestra fase de revisión previa y auditoría de planos minimiza imprevistos. Si surgen desviaciones en obra, tenemos la capacidad técnica para resolverlas in situ." },
  { q: "¿Cuánto tarda un montaje premium?", a: "Depende de la planimetría y el volumen, pero la excelencia requiere tiempo. Un montaje estándar de alta gama dura entre 3 y 5 días. La revisión final es innegociable." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-surface py-32 md:py-48">
      <div className="container-x grid md:grid-cols-12 gap-16">
        <div className="md:col-span-4">
          <FadeUp>
            <span className="eyebrow">FAQ</span>
            <h2 className="headline-lg mt-4">Claridad absoluta.</h2>
          </FadeUp>
        </div>
        <div className="md:col-span-8">
          <ul className="border-t border-ink">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b border-line">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-8 text-left hover:text-brand transition-colors duration-300 group"
                  >
                    <span className="font-display text-2xl md:text-3xl font-black text-ink group-hover:text-brand transition-colors">{f.q}</span>
                    <span className={`flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isOpen ? "rotate-45" : ""}`}>
                      <Ico.Plus className="h-8 w-8 text-ink group-hover:text-brand" />
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                    style={{ maxHeight: isOpen ? 400 : 0, opacity: isOpen ? 1 : 0 }}
                  >
                    <p className="pb-12 pr-12 text-xl font-medium text-ink-soft leading-relaxed max-w-3xl">{f.a}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function CTAFinal() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="relative min-h-[100svh] bg-ink flex items-center py-24 overflow-hidden">
      {/* Background Image with Parallax & Overlay */}
      <div className="absolute inset-0 z-0 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${heroImg})` }} />
      <div className="absolute inset-0 z-0 bg-black/75" />

      <div className="container-x relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Columna Izquierda (60%) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-brand" />
                <span className="font-display font-black text-sm uppercase tracking-widest text-brand">Valoración Técnica</span>
              </div>
              
              <h2 className="font-display font-black text-[clamp(4rem,7vw,7rem)] leading-[0.95] text-white tracking-tighter text-balance max-w-2xl">
                INICIEMOS TU PROYECTO
              </h2>
              
              <p className="mt-8 text-xl md:text-2xl font-medium text-[#EDEBE8] max-w-[550px] leading-relaxed">
                Solicita una valoración técnica sin compromiso y descubre cómo podemos materializar tu proyecto.
              </p>
            </motion.div>

            {/* Beneficios */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-16 flex flex-col sm:flex-row gap-8 lg:gap-12"
            >
              <div className="flex items-start gap-4">
                <Ico.Check className="w-6 h-6 text-brand shrink-0" />
                <div>
                  <div className="font-bold text-white text-lg">Sin compromiso</div>
                  <div className="text-sm text-white/70 mt-1">Respuesta en 24-48h</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Ico.Check className="w-6 h-6 text-brand shrink-0" />
                <div>
                  <div className="font-bold text-white text-lg">Confidencial</div>
                  <div className="text-sm text-white/70 mt-1">Tus datos protegidos</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Ico.Check className="w-6 h-6 text-brand shrink-0" />
                <div>
                  <div className="font-bold text-white text-lg">Experiencia</div>
                  <div className="text-sm text-white/70 mt-1">Más de 10 años</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Columna Derecha Formulario (40%) */}
          <div className="lg:col-span-5 lg:col-start-8">
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {sent ? (
                <div className="bg-[rgba(20,20,20,0.92)] backdrop-blur-[20px] border border-white/15 rounded-[24px] p-12 text-center text-white shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
                  <Ico.Check className="h-16 w-16 text-brand mx-auto mb-8" />
                  <h3 className="font-display text-3xl font-black uppercase tracking-widest">Recibido</h3>
                  <p className="mt-6 text-lg font-medium text-[#EDEBE8]">
                    Nuestro equipo técnico revisará tu solicitud y te contactará en breve.
                  </p>
                </div>
              ) : (
                <form 
                  onSubmit={onSubmit} 
                  className="bg-[rgba(20,20,20,0.92)] backdrop-blur-[20px] border border-white/15 rounded-[24px] p-8 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.4)]"
                >
                  <div className="space-y-10">
                    <div className="group relative">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#EDEBE8] block mb-2">Nombre</label>
                      <input 
                        required 
                        type="text" 
                        className="w-full bg-transparent border-b border-white/20 py-2 text-xl font-medium text-white focus:outline-none focus:border-white hover:border-white transition-all duration-300 focus:-translate-y-[2px]" 
                      />
                    </div>
                    <div className="group relative">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#EDEBE8] block mb-2">Teléfono / Email</label>
                      <input 
                        required 
                        type="text" 
                        className="w-full bg-transparent border-b border-white/20 py-2 text-xl font-medium text-white focus:outline-none focus:border-white hover:border-white transition-all duration-300 focus:-translate-y-[2px]" 
                      />
                    </div>
                    <div className="group relative">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#EDEBE8] block mb-2">Detalles de la Obra (Opcional)</label>
                      <textarea 
                        rows={2} 
                        className="w-full bg-transparent border-b border-white/20 py-2 text-xl font-medium text-white focus:outline-none focus:border-white hover:border-white transition-all duration-300 focus:-translate-y-[2px] resize-none" 
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="group flex items-center justify-center gap-4 w-full h-16 bg-white hover:bg-[#f5f5f5] text-ink font-bold text-lg rounded-none transition-colors duration-300"
                    >
                      Solicitar Valoración
                      <Ico.Arrow className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                    
                    <div className="flex items-center justify-center gap-2 text-xs text-[#D1CFCC] opacity-80 pt-2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      Tu información está protegida y nunca será compartida.
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#FAFAF8] pt-24 pb-12 border-t border-white/10">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* Col 1: Brand & Desc */}
          <div className="md:col-span-5 lg:col-span-4">
            <LogoCubikos className="text-[24px] text-brand mb-8" />
            <p className="text-lg text-[#D1CFCC] max-w-sm font-medium leading-relaxed">
              Especialistas en montaje de mobiliario de cocina. Desde proyectos a medida hasta grandes firmas comerciales. Precisión técnica en toda Cataluña.
            </p>
          </div>
          
          {/* Col 2: Nav */}
          <div className="md:col-span-3 lg:col-start-7 lg:col-span-2">
            <h4 className="font-display font-black tracking-widest uppercase text-xs mb-8 text-[#777]">Explorar</h4>
            <ul className="space-y-4 text-[#EDEBE8] font-bold text-sm tracking-widest uppercase">
              <li><a href="#metodo" className="hover:text-brand transition-colors">Método</a></li>
              <li><a href="#experiencia" className="hover:text-brand transition-colors">Experiencia</a></li>
              <li><a href="#proyectos" className="hover:text-brand transition-colors">Proyectos</a></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-display font-black tracking-widest uppercase text-xs mb-8 text-[#777]">Contacto</h4>
            <ul className="space-y-4 text-[#EDEBE8] font-medium text-lg">
              <li><a href="mailto:cubikos25@gmail.com" className="hover:text-brand transition-colors">cubikos25@gmail.com</a></li>
              <li><a href="https://wa.me/34666871144" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">+34 666 87 11 44 <span className="text-xs text-[#777] ml-2 uppercase tracking-widest">(WhatsApp)</span></a></li>
              <li className="text-[#D1CFCC] text-sm font-bold tracking-widest uppercase pt-2">Cataluña, España</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs font-bold uppercase tracking-widest text-[#777]">
          <div className="order-2 md:order-1 mt-6 md:mt-0">
            &copy; {new Date().getFullYear()} CUBIKOS. Todos los derechos reservados.
          </div>
          <div className="order-1 md:order-2 flex flex-wrap justify-center gap-8">
            <a href="https://www.instagram.com/raphael_gs68?igsh=MzdhdGxwamZwNGY1" target="_blank" rel="noopener noreferrer" className="hover:text-[#FAFAF8] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#FAFAF8] transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-[#FAFAF8] transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
