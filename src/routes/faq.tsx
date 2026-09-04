import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header, Ico } from "../components/LandingUI";
import { Footer } from "../components/LandingExtra";
import heroKitchen from "@/assets/hero-tio.webp";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Preguntas Frecuentes sobre Montaje de Cocinas | CUBIKOS FAQ" },
      {
        name: "description",
        content:
          "Respuestas claras y técnicas: tiempos de instalación (3-5 días), compatibilidad de marcas (Santos, IKEA, Bulthaup), cobertura en Cataluña y garantías.",
      },
      { property: "og:title", content: "FAQ Técnico de Montaje de Cocinas — CUBIKOS" },
      { property: "og:image", content: heroKitchen },
    ],
  }),
  component: FAQPage,
});

const faqsDetalladas = [
  {
    pregunta: "¿Trabajáis en toda Cataluña o solo en Barcelona?",
    respuesta:
      "Cubrimos las cuatro provincias catalanas: Barcelona, Girona, Tarragona y Lleida. Nos desplazamos regularmente a localidades del Vallès (Sant Cugat, Sabadell, Terrassa), Maresme (Mataró, Alella, Sant Andreu de Llavaneres), Baix Llobregat, Garraf (Sitges) y áreas de la Costa Brava y el Empordà con nuestro propio equipo técnico y herramientas especializadas.",
    categoria: "Cobertura y Logística",
  },
  {
    pregunta: "¿Montáis cualquier tipo de cocina o solo marcas de lujo?",
    respuesta:
      "Instalamos todo tipo de mobiliario de calidad: desde firmas de alta gama (Santos, Bulthaup, Siematic, Porcelanosa, Dica, Modulnova) hasta proyectos de ebanistería a medida diseñados por interioristas y arquitectos. También montamos sistemas modulares técnicos como IKEA Metod combinado con frentes de diseño personalizado.",
    categoria: "Compatibilidad",
  },
  {
    pregunta: "¿Cuánto tiempo dura el montaje de una cocina?",
    respuesta:
      "Depende de la complejidad geométrica y del volumen de módulos. Una cocina lineal estándar suele requerir de 2 a 3 días. Una cocina con isla central, golas corridas continuas, panelado de electrodomésticos y remates de ebanistería suele requerir entre 3 y 5 días de trabajo exhaustivo. Nunca apresuramos el ajuste fino por cumplir horas.",
    categoria: "Plazos",
  },
  {
    pregunta: "¿Qué ocurre si las paredes de la obra están desaplomadas o torcidas?",
    respuesta:
      "Es la situación habitual en la inmensa mayoría de las reformas y viviendas históricas de Cataluña. Nuestro método incluye una auditoría geométrica inicial y contamos con la maquinaria y habilidad de ebanistería para mecanizar tapetas de compensación in situ, calzar módulos estructuralmente y garantizar que los frentes queden a plomo perfecto sin importar la irregularidad del tabique.",
    categoria: "Técnica",
  },
  {
    pregunta: "¿Incluye la instalación de los electrodomésticos?",
    respuesta:
      "Sí. Realizamos el encastre físico, nivelación y fijación de placas de inducción, hornos, microondas, campanas extractoras decorativas e integrables, y panelado frontal de lavavajillas y frigoríficos, asegurando los conductos y holguras de ventilación exigidos por cada fabricante.",
    categoria: "Electrodomésticos",
  },
  {
    pregunta: "¿Cómo se solicita un presupuesto y cuánto tardáis en responder?",
    respuesta:
      "Puedes enviarnos los planos del fabricante, el diseño 3D o las medidas aproximadas de la cocina a través de nuestro formulario web o por WhatsApp al +34 666 87 11 44. Analizamos la viabilidad técnica y te entregamos una valoración cerrada y sin compromiso en un plazo de 24 a 48 horas.",
    categoria: "Contratación",
  },
];

function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-[#090908] text-[#FAF8F5] min-h-screen selection:bg-[#D6A634] selection:text-black">
      <Header />

      <main className="pt-32 sm:pt-40 pb-24">
        {/* Back Link */}
        <div className="container-x max-w-[1200px] mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A6A29A] hover:text-[#D6A634] transition-colors group"
          >
            <span className="text-[#D6A634] font-bold transition-transform group-hover:-translate-x-1">←</span>
            <span>Volver a la página principal</span>
          </Link>
        </div>

        <section className="container-x max-w-[1200px] mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-[#D6A634]" />
            <span className="text-[13px] font-sans font-bold tracking-[0.25em] text-[#D6A634] uppercase">
              RESPUESTAS DIRECTAS
            </span>
          </div>
          <h1
            className="text-white font-normal leading-[1.05] tracking-tight mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.8rem, 5vw, 5.5rem)",
            }}
          >
            Preguntas Frecuentes: <br />
            <span className="italic text-[#D6A634]">Claridad Absoluta.</span>
          </h1>
          <p className="text-[18px] sm:text-[21px] text-[#C4BFB6] max-w-2xl font-light">
            Todo lo que necesitas saber sobre nuestros estándares, tiempos de montaje, compatibilidad con estudios de diseño y cobertura en Cataluña.
          </p>
        </section>

        {/* Acordeón de FAQs */}
        <section className="container-x max-w-[1200px] mb-24">
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {faqsDetalladas.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-6 sm:py-8">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-start justify-between gap-6 text-left group"
                  >
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#D6A634] font-bold block mb-2">
                        {faq.categoria}
                      </span>
                      <span className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#D6A634] transition-colors">
                        {faq.pregunta}
                      </span>
                    </div>
                    <span
                      className={`text-[#D6A634] text-2xl font-bold transition-transform duration-300 shrink-0 mt-1 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pt-2 text-[#C0BCB4] text-base sm:text-lg leading-relaxed max-w-4xl font-normal">
                      {faq.respuesta}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="container-x max-w-[1200px]">
          <div className="bg-[#141413] border border-white/10 rounded-3xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
              ¿Tienes una duda técnica específica sobre tu obra?
            </h3>
            <p className="text-[#A6A29A] text-base max-w-xl mx-auto mb-6">
              Escríbenos directamente por WhatsApp con fotos o planos de la cocina y te asesoramos al instante.
            </p>
            <a
              href="https://wa.me/34666871144?text=Hola,%20tengo%20una%20duda%20tecnica%20sobre%20el%20montaje%20de%20mi%20cocina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 h-12 rounded-full bg-[#0F8E47] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0c7a3c] transition-colors"
            >
              <span>Preguntar por WhatsApp</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
