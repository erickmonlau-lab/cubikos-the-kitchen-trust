import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "../components/LandingUI";
import { Footer } from "../components/LandingExtra";
import { motion, AnimatePresence } from "framer-motion";
import { PROYECTOS_DATA, type Proyecto } from "../data/proyectos";
import { ChevronLeft, X, ZoomIn, CheckCircle2, Ruler, Clock, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/proyectos_/$slug")({
  loader: ({ params }) => {
    const proyecto = PROYECTOS_DATA.find((p) => p.slug === params.slug);
    if (!proyecto) {
      throw notFound();
    }
    return { proyecto };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.proyecto;
    return {
      meta: [
        { title: `${p?.titulo || "Proyecto"} | Casos de Estudio CUBIKOS` },
        {
          name: "description",
          content: `${p?.subtitulo}. Desafío técnico y solución aplicada en ${p?.ubicacion}. Montaje de cocinas de precisión CUBIKOS.`,
        },
        { property: "og:title", content: `${p?.titulo} — CUBIKOS` },
        { property: "og:description", content: p?.descripcion },
        { property: "og:image", content: p?.imagenPrincipal },
      ],
    };
  },
  component: ProyectoDetallePage,
});

function ProyectoDetallePage() {
  const { proyecto } = Route.useLoaderData();
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // Proyectos recomendados (excluyendo el actual)
  const relacionados = PROYECTOS_DATA.filter((p) => p.slug !== proyecto.slug).slice(0, 2);

  return (
    <div className="bg-[#090908] text-[#FAF8F5] min-h-screen selection:bg-[#D6A634] selection:text-black">
      <Header />

      <main className="pt-32 sm:pt-40 pb-24">
        {/* Navigation Breadcrumb */}
        <div className="container-x max-w-[1300px] mb-8">
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A6A29A] hover:text-[#D6A634] transition-colors"
          >
            <ChevronLeft size={16} />
            <span>Volver a la galería de proyectos</span>
          </Link>
        </div>

        {/* Hero Header */}
        <section className="container-x max-w-[1300px] mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#1A1A18] border border-white/10 text-xs font-mono text-[#D6A634] font-bold">
              {proyecto.categoriaLabel}
            </span>
            <span className="text-xs font-mono text-[#8E8A82] flex items-center gap-1.5">
              <MapPin size={13} className="text-[#D6A634]" />
              {proyecto.ubicacion}
            </span>
          </div>

          <h1
            className="text-white font-normal leading-[1.05] tracking-tight mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.5rem, 4.5vw, 4.2rem)",
            }}
          >
            {proyecto.titulo}
          </h1>

          <p className="text-lg sm:text-xl text-[#C4BFB6] max-w-3xl leading-relaxed font-light">
            {proyecto.subtitulo}
          </p>
        </section>

        {/* Main Photo with Lightbox trigger */}
        <section className="container-x max-w-[1300px] mb-16">
          <div
            onClick={() => setLightboxImg(proyecto.imagenPrincipal)}
            className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-3xl overflow-hidden border border-white/10 cursor-zoom-in group shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <img
              src={proyecto.imagenPrincipal}
              alt={proyecto.titulo}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors pointer-events-none" />
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs font-mono flex items-center gap-2 text-white/90 border border-white/15">
              <ZoomIn size={14} className="text-[#D6A634]" />
              <span>Ampliar fotografía</span>
            </div>
          </div>
        </section>

        {/* Technical Data Grid */}
        <section className="container-x max-w-[1300px] mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 bg-[#121211] border border-white/10 rounded-2xl">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#8E8A82] block mb-1">
                Tolerancia admitida
              </span>
              <span className="text-xl sm:text-2xl font-display font-black text-[#D6A634]">
                {proyecto.tolerancia}
              </span>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#8E8A82] block mb-1">
                Plazo de ejecución
              </span>
              <span className="text-lg sm:text-xl font-bold text-white">
                {proyecto.plazo}
              </span>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#8E8A82] block mb-1">
                Localización
              </span>
              <span className="text-base sm:text-lg font-medium text-white">
                {proyecto.ubicacion.split(",")[0]}
              </span>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#8E8A82] block mb-1">
                Garantía técnica
              </span>
              <span className="text-base sm:text-lg font-bold text-white">
                Certificada in situ
              </span>
            </div>
          </div>
        </section>

        {/* Breakdown: Challenge vs Solution */}
        <section className="container-x max-w-[1300px] mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Challenge */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#141413] border border-white/10">
              <div className="flex items-center gap-2.5 mb-4 text-[#D6A634]">
                <Ruler size={20} />
                <span className="text-xs font-mono uppercase tracking-widest font-bold">
                  Desafío Técnico en Obra
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Condicionantes de partida
              </h3>
              <p className="text-base sm:text-lg text-[#C4BFB6] leading-relaxed font-light">
                {proyecto.desafioTecnico}
              </p>
            </div>

            {/* Solution */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#141413] border border-[#D6A634]/30 shadow-[0_10px_30px_rgba(214,166,52,0.05)]">
              <div className="flex items-center gap-2.5 mb-4 text-[#D6A634]">
                <CheckCircle2 size={20} />
                <span className="text-xs font-mono uppercase tracking-widest font-bold">
                  Solución Aplicada por CUBIKOS
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Resolución milimétrica
              </h3>
              <p className="text-base sm:text-lg text-[#EDEBE8] leading-relaxed font-light">
                {proyecto.solucionAplicada}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Thumbnails */}
        {proyecto.galeria && proyecto.galeria.length > 0 && (
          <section className="container-x max-w-[1300px] mb-24">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#D6A634] font-bold mb-6">
              Detalles del Proyecto ({proyecto.galeria.length} tomas)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {proyecto.galeria.map((imgSrc, i) => (
                <div
                  key={i}
                  onClick={() => setLightboxImg(imgSrc)}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 cursor-zoom-in group shadow-lg"
                >
                  <img
                    src={imgSrc}
                    alt={`Detalle ${i + 1} de ${proyecto.titulo}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors pointer-events-none" />
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={14} className="text-white" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Projects */}
        {relacionados.length > 0 && (
          <section className="container-x max-w-[1300px] mb-24 pt-16 border-t border-white/10">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Proyectos Similares
              </h3>
              <Link
                to="/proyectos"
                className="text-xs font-mono uppercase tracking-widest text-[#D6A634] hover:underline"
              >
                Ver todos →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relacionados.map((rel) => (
                <Link
                  key={rel.slug}
                  to="/proyectos_/$slug"
                  params={{ slug: rel.slug }}
                  className="group bg-[#121211] border border-white/10 rounded-2xl overflow-hidden hover:border-[#D6A634]/50 transition-colors flex flex-col sm:flex-row"
                >
                  <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden">
                    <img
                      src={rel.imagenPrincipal}
                      alt={rel.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#D6A634] block mb-1">
                        {rel.categoriaLabel}
                      </span>
                      <h4 className="font-bold text-lg text-white group-hover:text-[#D6A634] transition-colors mb-2">
                        {rel.titulo}
                      </h4>
                      <p className="text-xs text-[#A6A29A] line-clamp-2 leading-relaxed">
                        {rel.subtitulo}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#D6A634] uppercase tracking-wider pt-4">
                      Ver caso de estudio →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Direct CTA */}
        <section className="container-x max-w-[1300px]">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#181816] to-[#0E0E0D] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#D6A634] font-bold block mb-2">
                ¿TIENES UN PROYECTO SIMILAR?
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                Solicita una valoración técnica sin compromiso
              </h3>
              <p className="text-sm sm:text-base text-[#A6A29A] max-w-xl">
                Revisamos tus planos y memoria de obra para darte una estimación cerrada en tiempos y costes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
              <a
                href="https://wa.me/34666871144?text=Hola,%20me%20interesa%20un%20montaje%20similar%20al%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 h-12 rounded-full bg-[#D6A634] hover:bg-[#e2b747] text-[#0E0E0D] font-bold text-xs uppercase tracking-wider flex items-center justify-center transition-all shadow-md"
              >
                Consultar por WhatsApp
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Cerrar vista ampliada"
            >
              <X size={24} />
            </button>
            <img
              src={lightboxImg}
              alt="Vista ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-xl border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
