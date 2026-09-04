import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "../components/LandingUI";
import { Footer } from "../components/LandingExtra";
import { SERVICIOS_DATA } from "../data/servicios";
import { PROYECTOS_DATA } from "../data/proyectos";
import { ChevronLeft, CheckCircle2, ShieldCheck, Ruler, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/servicios_/$slug")({
  loader: ({ params }) => {
    const servicio = SERVICIOS_DATA[params.slug];
    if (!servicio) {
      throw notFound();
    }
    return { servicio };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.servicio;
    return {
      meta: [
        { title: s?.metaTitle || "Servicio Técnico | CUBIKOS" },
        { name: "description", content: s?.metaDescription },
        { property: "og:title", content: s?.metaTitle },
        { property: "og:description", content: s?.metaDescription },
        { property: "og:image", content: s?.imagen },
      ],
    };
  },
  component: ServicioDetallePage,
});

function ServicioDetallePage() {
  const { servicio } = Route.useLoaderData();

  // Obtener proyectos relacionados
  const proyectosRelacionados = PROYECTOS_DATA.filter((p) =>
    servicio.proyectosRelacionadosSlugs.includes(p.slug)
  );

  return (
    <div className="bg-[#090908] text-[#FAF8F5] min-h-screen selection:bg-[#D6A634] selection:text-black">
      <Header />

      <main className="pt-32 sm:pt-40 pb-24">
        {/* Navigation Breadcrumb */}
        <div className="container-x max-w-[1300px] mb-8">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A6A29A] hover:text-[#D6A634] transition-colors"
          >
            <ChevronLeft size={16} />
            <span>Volver a especialidades</span>
          </Link>
        </div>

        {/* Hero Header */}
        <section className="container-x max-w-[1300px] mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#D6A634]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#D6A634] uppercase font-bold">
              ESPECIALIDAD TÉCNICA
            </span>
          </div>

          <h1
            className="text-white font-normal leading-[1.05] tracking-tight mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.5rem, 4.5vw, 4.2rem)",
            }}
          >
            {servicio.titulo}
          </h1>

          <p className="text-lg sm:text-xl text-[#C4BFB6] max-w-3xl leading-relaxed font-light mb-8">
            {servicio.subtitulo}
          </p>

          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <img
              src={servicio.imagen}
              alt={servicio.titulo}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap justify-between items-end gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8E8A82] block mb-1">
                  Garantía de tolerancia
                </span>
                <span className="text-xl sm:text-2xl font-bold font-display text-[#D6A634]">
                  {servicio.toleranciaGarantizada}
                </span>
              </div>
              <a
                href="#contacto-servicio"
                className="px-6 h-11 rounded-full bg-[#D6A634] hover:bg-[#e2b747] text-[#0E0E0D] font-bold text-xs uppercase tracking-wider flex items-center justify-center transition-all shadow-md"
              >
                Solicitar presupuesto
              </a>
            </div>
          </div>
        </section>

        {/* Detailed Explanation */}
        <section className="container-x max-w-[1300px] mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
                El rigor del oficio aplicado a cada pieza
              </h2>
              <p className="text-base sm:text-lg text-[#C4BFB6] leading-relaxed font-light mb-6">
                {servicio.descripcionLarga}
              </p>
              <div className="space-y-4 pt-4">
                {servicio.puntosClave.map((punto, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#D6A634] shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-[#EDEBE8] leading-relaxed">
                      {punto}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-2xl bg-[#121211] border border-white/10">
              <div className="flex items-center gap-2 mb-6 text-[#D6A634]">
                <ShieldCheck size={20} />
                <span className="text-xs font-mono uppercase tracking-widest font-bold">
                  Firmas y Sistemas Compatibles
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#A6A29A] leading-relaxed mb-6 font-light">
                Nuestro personal cuenta con formación técnica específica en los sistemas de herrajes y fijación de los principales fabricantes europeos:
              </p>
              <div className="flex flex-wrap gap-2">
                {servicio.marcasCompatibles.map((m, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-[#181816] border border-white/10 text-xs font-medium text-white/90"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Protocol in 5 phases */}
        <section className="container-x max-w-[1300px] mb-20 pt-16 border-t border-white/10">
          <div className="flex items-center gap-2 mb-4 text-[#D6A634]">
            <Ruler size={18} />
            <span className="text-xs font-mono uppercase tracking-widest font-bold">
              Protocolo Específico de Montaje
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-10">
            Fases de ejecución sin margen de improvisación
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {servicio.protocoloFases.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#141413] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-black text-[#D6A634] block mb-3">
                    {f.fase}
                  </span>
                  <h3 className="font-bold text-base text-white mb-2 leading-snug">
                    {f.titulo}
                  </h3>
                  <p className="text-xs text-[#A6A29A] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Specific FAQs */}
        {servicio.faqs && servicio.faqs.length > 0 && (
          <section className="container-x max-w-[1300px] mb-20 pt-16 border-t border-white/10">
            <div className="flex items-center gap-2 mb-4 text-[#D6A634]">
              <HelpCircle size={18} />
              <span className="text-xs font-mono uppercase tracking-widest font-bold">
                Preguntas Frecuentes
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
              Dudas habituales sobre esta especialidad
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicio.faqs.map((faq, i) => (
                <div key={i} className="p-7 rounded-2xl bg-[#121211] border border-white/10">
                  <h3 className="font-bold text-lg text-white mb-3 leading-snug">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-[#C4BFB6] leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Projects */}
        {proyectosRelacionados.length > 0 && (
          <section className="container-x max-w-[1300px] mb-20 pt-16 border-t border-white/10">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Proyectos reales con este servicio
              </h2>
              <Link
                to="/proyectos"
                className="text-xs font-mono uppercase tracking-widest text-[#D6A634] hover:underline"
              >
                Ver toda la galería →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {proyectosRelacionados.map((p) => (
                <Link
                  key={p.slug}
                  to="/proyectos_/$slug"
                  params={{ slug: p.slug }}
                  className="group bg-[#121211] border border-white/10 rounded-2xl overflow-hidden hover:border-[#D6A634]/50 transition-colors"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={p.imagenPrincipal}
                      alt={p.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D6A634] block mb-1">
                      {p.ubicacion}
                    </span>
                    <h3 className="font-bold text-lg text-white group-hover:text-[#D6A634] transition-colors mb-1">
                      {p.titulo}
                    </h3>
                    <p className="text-xs text-[#A6A29A] line-clamp-2">
                      {p.subtitulo}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA section */}
        <section id="contacto-servicio" className="container-x max-w-[1300px]">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#181816] to-[#0E0E0D] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#D6A634] font-bold block mb-2">
                VALORACIÓN TÉCNICA
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                ¿Necesitas este servicio para tu cocina?
              </h3>
              <p className="text-sm sm:text-base text-[#A6A29A] max-w-xl">
                Contáctanos con las medidas o planos preliminares. Te daremos una respuesta técnica en 24-48 horas.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
              <a
                href={`https://wa.me/34666871144?text=Hola,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(servicio.titulo)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 h-12 rounded-full bg-[#D6A634] hover:bg-[#e2b747] text-[#0E0E0D] font-bold text-xs uppercase tracking-wider flex items-center justify-center transition-all shadow-md"
              >
                WhatsApp Directo
              </a>
              <Link
                to="/contacto"
                className="px-6 h-12 rounded-full border border-white/20 hover:border-white/50 text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center transition-all"
              >
                Enviar formulario
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
