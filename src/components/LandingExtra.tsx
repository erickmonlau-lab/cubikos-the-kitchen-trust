import { memo, useState, useCallback, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { m as motion } from "framer-motion";
import { FadeUp, Ico, RevealMask, LogoCubikos } from "./LandingUI";
import heroImg from "@/assets/hero-tio.webp";
import gal1 from "@/assets/gallery-1.webp";
import gal2 from "@/assets/gallery-2.webp";
import gal3 from "@/assets/gallery-3.webp";
import gal4 from "@/assets/gallery-4.webp";
import gal5 from "@/assets/gallery-5.webp";
import gal6 from "@/assets/gallery-6.webp";

const details = [
  {
    src: gal1,
    title: "Alineación perfecta de frentes",
    subtitle: "Planimetría e integración de electrodomésticos",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/3] lg:aspect-auto",
  },
  {
    src: gal2,
    title: "Tolerancia < 1mm",
    subtitle: "Unión de encimeras",
    span: "lg:col-span-1 lg:row-span-1",
    aspect: "aspect-square",
  },
  {
    src: gal4,
    title: "Nivelación láser",
    subtitle: "Ajuste de módulos base",
    span: "lg:col-span-1 lg:row-span-1",
    aspect: "aspect-square",
  },
  {
    src: gal5,
    title: "Mecanizados exactos",
    subtitle: "Encastres al milímetro",
    span: "lg:col-span-1 lg:row-span-1",
    aspect: "aspect-square",
  },
  {
    src: gal6,
    title: "Remates invisibles",
    subtitle: "Sellado y terminaciones perimetrales",
    span: "lg:col-span-2 lg:row-span-1",
    aspect: "aspect-[21/9] lg:aspect-auto",
  },
];

export function Proyectos() {
  return (
    <section id="proyectos" className="bg-[#111111] text-[#FAFAF8] py-12 md:py-20">
      <div className="container-x mb-8 md:mb-12">
        <FadeUp>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-brand" />
            <span className="text-[12px] sm:text-[13px] font-mono font-bold tracking-[0.25em] uppercase text-brand">
              PORTFOLIO • CASOS REALES
            </span>
          </div>
          <h2 className="font-display font-black text-[clamp(36px,5.5vw,64px)] leading-[1] tracking-tighter text-[#FAFAF8] text-balance">
            Casos de estudio<span className="text-brand">.</span>
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-[#EDEBE8] font-normal leading-relaxed text-balance max-w-2xl">
            La excelencia no se demuestra en un plano general, sino en la perfección de cada
            detalle, unión y remate.
          </p>
        </FadeUp>
      </div>

      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:auto-rows-[350px]">
          {details.map((g, i) => (
            <FadeUp
              key={i}
              delay={i * 0.1}
              className={`group relative overflow-hidden bg-[#1a1a1a] ${g.span} ${g.aspect || ""}`}
            >
              <img
                loading="lazy"
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
                  <h3 className="font-display text-2xl md:text-3xl font-black text-white">
                    {g.title}
                  </h3>
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
  {
    q: "¿Trabajáis en toda Cataluña?",
    a: "Sí. Cubrimos las cuatro provincias y nos desplazamos a cualquier población de Cataluña con nuestro propio equipo.",
  },
  {
    q: "¿Montáis cualquier tipo de cocina?",
    a: "Instalamos firmas italianas de lujo, mobiliario de estudios de interiorismo, proyectos a medida y firmas comerciales de gama alta.",
  },
  {
    q: "¿Gestionáis los imprevistos de obra?",
    a: "Nuestra fase de revisión previa y auditoría de planos minimiza imprevistos. Si surgen desviaciones en obra, tenemos la capacidad técnica para resolverlas in situ.",
  },
  {
    q: "¿Cuánto tarda un montaje premium?",
    a: "Depende de la Planimetría y el volumen, pero la excelencia requiere tiempo. Un montaje estándar de alta gama dura entre 3 y 5 días. La revisión final es innegociable.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-surface py-28 md:py-40">
      <div className="container-x grid md:grid-cols-12 gap-12 lg:gap-16">
        <div className="md:col-span-5">
          <FadeUp>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2.5px] bg-brand" />
              <span className="text-[13px] sm:text-[15px] font-mono font-bold tracking-[0.25em] uppercase text-brand">
                PREGUNTAS FRECUENTES
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-ink leading-[1.02] tracking-tight">
              FAQ<span className="text-brand">.</span>
            </h2>
            <p className="mt-6 text-xl sm:text-2xl text-ink-soft font-normal leading-relaxed">
              Claridad absoluta antes de iniciar cualquier montaje.
            </p>
          </FadeUp>
        </div>
        <div className="md:col-span-7">
          <ul className="border-t border-ink">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b border-line">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-8 text-left hover:text-brand transition-colors duration-300 group"
                  >
                    <span className="font-display text-2xl md:text-3xl font-black text-ink group-hover:text-brand transition-colors">
                      {f.q}
                    </span>
                    <span
                      className={`flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isOpen ? "rotate-45" : ""}`}
                    >
                      <Ico.Plus className="h-8 w-8 text-ink group-hover:text-brand" />
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                    style={{ maxHeight: isOpen ? 400 : 0, opacity: isOpen ? 1 : 0 }}
                  >
                    <p className="pb-12 pr-12 text-xl font-medium text-ink-soft leading-relaxed max-w-3xl">
                      {f.a}
                    </p>
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
  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  }, []);

  return (
    <section
      id="contacto"
      className="relative bg-[#0E0E0D] border-t border-white/10 flex items-center py-16 md:py-24 overflow-hidden"
    >
      <div className="container-x relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          {/* Columna Izquierda (60%) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-brand" />
                <span className="font-display font-black text-sm uppercase tracking-widest text-brand">
                  Valoración técnica
                </span>
              </div>

              <h2 className="font-display font-black text-[clamp(4rem,7vw,7rem)] leading-[0.95] text-white tracking-tighter text-balance max-w-2xl">
                INICIEMOS TU PROYECTO
              </h2>

              <p className="mt-8 text-xl md:text-2xl font-medium text-[#EDEBE8] max-w-[550px] leading-relaxed">
                Solicita una Valoración técnica sin compromiso y descubre cómo podemos materializar
                tu proyecto.
              </p>
            </motion.div>

            {/* Beneficios */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
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
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {sent ? (
                <div className="bg-[rgba(20,20,20,0.92)] backdrop-blur-[20px] border border-white/15 rounded-[24px] p-12 text-center text-white shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
                  <Ico.Check className="h-16 w-16 text-brand mx-auto mb-8" />
                  <h3 className="font-display text-3xl font-black uppercase tracking-widest">
                    Recibido
                  </h3>
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
                      <label className="text-xs font-bold uppercase tracking-widest text-[#EDEBE8] block mb-2">
                        Nombre
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-transparent border-b border-white/20 py-2 text-xl font-medium text-white focus:outline-none focus:border-white hover:border-white transition-all duration-300 focus:-translate-y-[2px]"
                      />
                    </div>
                    <div className="group relative">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#EDEBE8] block mb-2">
                        Teléfono / Email
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-transparent border-b border-white/20 py-2 text-xl font-medium text-white focus:outline-none focus:border-white hover:border-white transition-all duration-300 focus:-translate-y-[2px]"
                      />
                    </div>
                    <div className="group relative">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#EDEBE8] block mb-2">
                        ¿Qué tipo de cocina necesitas montar?
                      </label>
                      <select
                        required
                        className="w-full bg-transparent border-b border-white/20 py-2 text-xl font-medium text-white focus:outline-none focus:border-white hover:border-white transition-all duration-300 focus:-translate-y-[2px] cursor-pointer appearance-none"
                      >
                        <option value="" disabled selected className="bg-[#111] text-white/50">
                          Selecciona una opción
                        </option>
                        <option value="ikea" className="bg-[#111] text-white">
                          IKEA
                        </option>
                        <option value="bauhaus" className="bg-[#111] text-white">
                          Bauhaus
                        </option>
                        <option value="santos" className="bg-[#111] text-white">
                          Santos
                        </option>
                        <option value="amedida" className="bg-[#111] text-white">
                          A medida
                        </option>
                        <option value="otros" className="bg-[#111] text-white">
                          Otros
                        </option>
                      </select>
                      <div className="absolute right-0 top-9 pointer-events-none text-white/50">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="group relative">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#EDEBE8] block mb-2">
                        Detalles de la Obra (Opcional)
                      </label>
                      <textarea
                        rows={2}
                        className="w-full bg-transparent border-b border-white/20 py-2 text-xl font-medium text-white focus:outline-none focus:border-white hover:border-white transition-all duration-300 focus:-translate-y-[2px] resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="group relative overflow-hidden flex items-center justify-center w-full h-16 bg-brand text-[#111111] font-black text-[15px] md:text-[16px] uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-[0_10px_40px_rgba(216,168,67,0.35)] hover:shadow-[0_20px_60px_rgba(216,168,67,0.6)] hover:-translate-y-1 hover:bg-[#e2b54f]"
                    >
                      <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:translate-x-[150%] transition-transform duration-[1.2s] ease-in-out" />
                      <span className="relative z-10">
                        Solicitar Valoración
                      </span>
                    </button>

                    <div className="flex items-center justify-center gap-2 text-xs text-[#D1CFCC] opacity-80 pt-2">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
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

export const Footer = memo(() => {
  return (
    <footer className="bg-[#0A0A09] text-[#E5E1D8] pt-16 pb-12 border-t border-white/10">
      <div className="container-x">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Col 1: Marca & Contacto directo */}
          <div className="lg:col-span-4 flex flex-col">
            <Link to="/" className="inline-block mb-6">
              <LogoCubikos className="text-[24px] text-white" />
            </Link>
            <p className="text-[14px] text-[#A6A29A] leading-relaxed mb-6 max-w-sm font-normal">
              Especialistas en montaje e instalación técnica de mobiliario de cocina de gama media-alta y lujo. Tolerancia cero en obra.
            </p>
            <div className="space-y-2 text-[14px] text-[#C4BFB6]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#777] block mb-1">Contacto</span>
                {/* TODO: dominio definitivo y correo corporativo */}
                <a href="mailto:cubikos25@gmail.com" className="hover:text-brand transition-colors">
                  cubikos25@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <span className="text-xs uppercase tracking-widest text-[#777] block mb-1">Horario</span>
                <p className="text-[#A6A29A]">Lunes a Viernes de 8:00 a 19:00</p>
              </div>
              <div className="pt-3">
                <a
                  href="https://wa.me/34666871144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-bold text-[18px] hover:text-brand transition-colors"
                >
                  <span>+34 666 87 11 44</span>
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-brand px-2 py-0.5 rounded bg-brand/10 border border-brand/20">
                    WhatsApp
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Empresa */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-sans font-bold text-[15px] text-white tracking-wide mb-6">
              Empresa
            </h4>
            <ul className="space-y-3.5 text-[14px] text-[#A6A29A]">
              <li>
                <Link to="/sobre-cubikos" className="hover:text-white transition-colors">
                  Presentación y oficio
                </Link>
              </li>
              <li>
                <Link to="/metodo" className="hover:text-white transition-colors">
                  El Método CUBIKOS
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-white transition-colors">
                  Especialidades técnicas
                </Link>
              </li>
              <li>
                <Link to="/proyectos" className="hover:text-white transition-colors">
                  Casos de estudio
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-white transition-colors">
                  Solicitud de presupuesto
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div className="lg:col-span-2">
            <h4 className="font-sans font-bold text-[15px] text-white tracking-wide mb-6">
              Legal
            </h4>
            <ul className="space-y-3.5 text-[14px] text-[#A6A29A]">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Aviso Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Política de Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/raphael_gs68?igsh=MzdhdGxwamZwNGY1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  Instagram
                  <span className="text-xs text-brand">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Cobertura geográfica Cataluña */}
          <div className="lg:col-span-3">
            <h4 className="font-sans font-bold text-[15px] text-white tracking-wide mb-6">
              Trabajamos en toda Cataluña
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#A6A29A]">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                <span>Montaje de cocinas en Barcelona y Vallès</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                <span>Montaje de cocinas en Maresme y Sitges</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                <span>Montaje de cocinas en Girona y Costa Brava</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                <span>Montaje de cocinas en Tarragona</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                <span>Montaje de cocinas en Lleida</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-[#777] font-medium gap-4">
          <div>
            &copy; {new Date().getFullYear()} CUBIKOS. Todos los derechos reservados.
          </div>
          <div className="text-right text-[#666]">
            Precisión milimétrica y excelencia en instalación de mobiliario.
          </div>
        </div>
      </div>
    </footer>
  );
});