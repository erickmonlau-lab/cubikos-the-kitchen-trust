import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "../components/LandingUI";
import { Footer } from "../components/LandingExtra";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIAS_PROYECTOS, PROYECTOS_DATA, type Proyecto } from "../data/proyectos";
import heroKitchen from "@/assets/hero-tio.webp";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Galería de Proyectos | CUBIKOS Montaje de Cocinas en Cataluña" },
      {
        name: "description",
        content:
          "Explora nuestros proyectos reales de montaje de cocinas en Cataluña: islas de gran formato, botelleros de ebanistería, columnas y encastres de alta precisión.",
      },
      { property: "og:title", content: "Galería de Proyectos de Cocina — CUBIKOS" },
      { property: "og:image", content: heroKitchen },
    ],
  }),
  component: ProyectosPage,
});

function ProyectosPage() {
  const [categoriaActiva, setCategoriaActiva] = useState<string>("todos");

  const proyectosFiltrados =
    categoriaActiva === "todos"
      ? PROYECTOS_DATA
      : PROYECTOS_DATA.filter((p) => p.categoria === categoriaActiva);

  return (
    <div className="bg-[#090908] text-[#FAF8F5] min-h-screen selection:bg-[#D6A634] selection:text-black">
      <Header />

      <main className="pt-32 sm:pt-40 pb-24">
        {/* Header */}
        <section className="container-x max-w-[1400px] mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-[#D6A634]" />
            <span className="text-[13px] font-sans font-bold tracking-[0.25em] text-[#D6A634] uppercase">
              OBRAS REALES EN CATALUÑA
            </span>
          </div>
          <h1
            className="text-white font-normal leading-[1.05] tracking-tight mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.8rem, 5vw, 5.5rem)",
            }}
          >
            Galería de Proyectos: <br />
            <span className="italic text-[#D6A634]">El Detalle Hace la Obra.</span>
          </h1>
          <p className="text-[18px] sm:text-[21px] text-[#C4BFB6] max-w-2xl font-light">
            Cada montaje es un ejercicio de resolución matemática y respeto por los materiales. Descubre cómo resolvemos tolerancias, uniones de ingletes y transiciones complejas.
          </p>
        </section>

        {/* Categorías Filter */}
        <section className="container-x max-w-[1400px] mb-12">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
            {CATEGORIAS_PROYECTOS.map((cat) => {
              const activa = categoriaActiva === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategoriaActiva(cat.id)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                    activa
                      ? "bg-[#D6A634] text-[#090908] border-[#D6A634] shadow-[0_4px_16px_rgba(214,166,52,0.3)]"
                      : "bg-[#141413] text-[#A6A29A] border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Proyectos Grid */}
        <section className="container-x max-w-[1400px] mb-24">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {proyectosFiltrados.map((item) => (
                <motion.article
                  key={item.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#141413] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#D6A634]/50 transition-all duration-300 flex flex-col"
                >
                  {/* Photo with badges */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                    <img
                      src={item.imagenPrincipal}
                      alt={item.titulo}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-mono text-[#D6A634] font-bold">
                      {item.categoriaLabel}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-mono text-white/90 pointer-events-none">
                      <span>{item.ubicacion}</span>
                      <span className="text-[#D6A634] font-bold">{item.tolerancia}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                    <div>
                      <h2 className="text-xl font-display font-bold text-white mb-2 group-hover:text-[#D6A634] transition-colors">
                        {item.titulo}
                      </h2>
                      <p className="text-sm text-[#A6A29A] line-clamp-2 leading-relaxed mb-4">
                        {item.subtitulo}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D6A634]">
                      <span>Ver ficha técnica</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1 font-bold">
                        →
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="container-x max-w-[1400px]">
          <div className="bg-[#141413] border border-white/10 rounded-3xl p-10 sm:p-14 text-center">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
              ¿Quieres este nivel de acabado para tu cocina?
            </h3>
            <p className="text-[#A6A29A] text-base max-w-xl mx-auto mb-6">
              Envíanos los planos de tu cocina o render de interiorismo para auditar las tolerancias y darte un presupuesto exacto.
            </p>
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 px-8 h-12 rounded-full bg-[#D6A634] text-[#090908] font-bold text-xs uppercase tracking-wider hover:bg-[#e2b747] transition-colors"
            >
              <span>Pedir Presupuesto Directo</span>
              <span>→</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
