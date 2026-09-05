import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "../components/LandingUI";
import { Footer } from "../components/LandingExtra";
import MetodoCubikosSection from "../components/MetodoCubikosSection";
import heroKitchen from "@/assets/hero-tio.webp";

export const Route = createFileRoute("/metodo")({
  head: () => ({
    meta: [
      { title: "El Método CUBIKOS | Protocolo de Montaje de Cocinas con Tolerancia Cero" },
      {
        name: "description",
        content:
          "Descubre nuestro protocolo técnico de 5 fases en Cataluña: replanteo láser 3D, aplomado de cascos, calibración milimétrica y entrega innegociable.",
      },
      { property: "og:title", content: "El Método CUBIKOS — Protocolo de Precisión Milimétrica" },
      { property: "og:image", content: heroKitchen },
    ],
  }),
  component: MetodoPage,
});


function MetodoPage() {
  return (
    <div className="bg-[#090908] text-[#FAF8F5] min-h-screen selection:bg-[#D6A634] selection:text-black">
      <Header />

      <main className="pt-32 sm:pt-40 pb-24">
        {/* Back Link */}
        <div className="container-x max-w-[1400px] mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A6A29A] hover:text-[#D6A634] transition-colors group"
          >
            <span className="text-[#D6A634] font-bold transition-transform group-hover:-translate-x-1">←</span>
            <span>Volver a la página principal</span>
          </Link>
        </div>

        {/* New Architectural Editorial 4 Stages System */}
        <MetodoCubikosSection />


        {/* CTA Banner */}
        <section className="container-x max-w-[1400px]">
          <div className="bg-gradient-to-r from-[#181816] to-[#121211] border border-[#D6A634]/30 rounded-3xl p-10 sm:p-16 text-center flex flex-col items-center">
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              ¿Tienes un proyecto de cocina entre manos?
            </h3>
            <p className="text-[#C0BCB4] text-lg max-w-2xl mb-8">
              Arquitectos, estudios de diseño y propietarios particulares confían en CUBIKOS para garantizar que cada milímetro se ejecute según planos.
            </p>
            <a
              href="/#contacto"
              className="inline-flex items-center gap-3 px-8 h-14 rounded-full bg-[#D6A634] text-[#090908] font-bold text-sm uppercase tracking-wider hover:bg-[#e2b747] transition-colors"
            >
              <span>Solicitar Valoración Técnica</span>
              <span>→</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
