import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback, type FormEvent } from "react";
import { Header, Ico } from "../components/LandingUI";
import { Footer } from "../components/LandingExtra";
import heroKitchen from "@/assets/hero-kitchen.webp";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto y Presupuesto | CUBIKOS Montaje de Cocinas Cataluña" },
      {
        name: "description",
        content:
          "Solicita una valoración técnica sin compromiso para el montaje de tu cocina en Barcelona, Girona, Tarragona o Lleida. Respuesta en 24-48 horas.",
      },
      { property: "og:title", content: "Contacto y Solicitud Técnica — CUBIKOS" },
      { property: "og:image", content: heroKitchen },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  }, []);

  return (
    <div className="bg-[#090908] text-[#FAF8F5] min-h-screen selection:bg-[#D6A634] selection:text-black">
      <Header />

      <main className="pt-32 sm:pt-40 pb-24">
        <section className="container-x max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Info Left */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-[2px] bg-[#D6A634]" />
                  <span className="text-[13px] font-sans font-bold tracking-[0.25em] text-[#D6A634] uppercase">
                    ATENCIÓN TÉCNICA
                  </span>
                </div>
                <h1
                  className="text-white font-normal leading-[1.05] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2.8rem, 4.5vw, 5rem)",
                  }}
                >
                  Iniciemos tu proyecto <br />
                  <span className="italic text-[#D6A634]">con precisión.</span>
                </h1>
                <p className="text-[17px] sm:text-[19px] text-[#C4BFB6] leading-relaxed mb-10 font-light">
                  Analizamos los planos y la memoria técnica de tu cocina para entregarte una estimación cerrada en tiempos y coste, sin sorpresas en obra.
                </p>

                <div className="space-y-6 pt-6 border-t border-white/10">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#D6A634] font-bold block mb-1">
                      WHATSAPP DIRECTO
                    </span>
                    <a
                      href="https://wa.me/34666871144"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-white hover:text-[#D6A634] transition-colors"
                    >
                      +34 666 87 11 44
                    </a>
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#D6A634] font-bold block mb-1">
                      EMAIL PROFESIONAL
                    </span>
                    <a
                      href="mailto:hola@cubikos.es"
                      className="text-xl font-bold text-white hover:text-[#D6A634] transition-colors"
                    >
                      hola@cubikos.es
                    </a>
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#D6A634] font-bold block mb-1">
                      ÁREA DE ACTUACIÓN
                    </span>
                    <p className="text-base text-[#EDEBE8]">
                      Barcelona, Girona, Tarragona, Lleida y toda Cataluña.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Right */}
            <div className="lg:col-span-7">
              {sent ? (
                <div className="bg-[#141413] border border-white/15 rounded-3xl p-12 sm:p-16 text-center text-white">
                  <Ico.Check className="h-16 w-16 text-[#D6A634] mx-auto mb-6" />
                  <h2 className="font-display text-3xl font-bold mb-4">
                    Solicitud Recibida Correctamente
                  </h2>
                  <p className="text-lg text-[#C0BCB4] max-w-md mx-auto">
                    Nuestro equipo técnico revisará los detalles de tu cocina y te contactará en un plazo máximo de 24-48 horas.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="bg-[#141413] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-[#C0BCB4] block mb-2">
                        Nombre completo *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Ej. Marc Rovira"
                        className="w-full bg-[#090908] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#D6A634] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-[#C0BCB4] block mb-2">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+34 600 000 000"
                        className="w-full bg-[#090908] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#D6A634] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-[#C0BCB4] block mb-2">
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full bg-[#090908] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#D6A634] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-[#C0BCB4] block mb-2">
                        Población de la obra *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Ej. Sant Cugat, Barcelona, Sitges..."
                        className="w-full bg-[#090908] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#D6A634] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-[#C0BCB4] block mb-2">
                      Tipo de cocina / Marca *
                    </label>
                    <select
                      required
                      className="w-full bg-[#090908] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D6A634] transition-colors cursor-pointer"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="santos">Santos / Porcelanosa / Bulthaup</option>
                      <option value="alta-gama">Otra firma de alta gama / italiana</option>
                      <option value="a-medida">Carpintería / Ebanistería a medida</option>
                      <option value="ikea-diseno">IKEA Metod con frentes personalizados</option>
                      <option value="otra">Otra tipología</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-[#C0BCB4] block mb-2">
                      Detalles de la obra o necesidades especiales (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Indica medidas aproximadas, si lleva isla, fechas previstas de entrada a obra o cualquier reto geométrico..."
                      className="w-full bg-[#090908] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#D6A634] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-14 rounded-full bg-[#D6A634] hover:bg-[#e2b747] text-[#090908] font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_4px_20px_rgba(214,166,52,0.3)] hover:-translate-y-0.5"
                  >
                    Solicitar Valoración Técnica Sin Compromiso
                  </button>

                  <p className="text-[11px] text-center text-[#888]">
                    Tus datos se emplean única y exclusivamente para valorar el proyecto de tu cocina. No hacemos spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
