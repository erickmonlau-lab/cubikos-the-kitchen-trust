import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/LandingUI";
import { Footer } from "../components/LandingExtra";
import heroWorker from "@/assets/hero-worker-master.webp";
import { motion } from "framer-motion";

export const Route = createFileRoute("/sobre-cubikos")({
  head: () => ({
    meta: [
      { title: "Sobre CUBIKOS | Más de 30 Años de Oficio en Montaje de Cocinas" },
      {
        name: "description",
        content:
          "Conoce la historia, filosofía y equipo de CUBIKOS: tres décadas dedicadas exclusivamente al ensamblaje e instalación de cocinas en Cataluña.",
      },
      { property: "og:title", content: "Historia y Oficio — CUBIKOS Cocinas" },
      { property: "og:image", content: heroWorker },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="bg-[#090908] text-[#FAF8F5] min-h-screen selection:bg-[#D6A634] selection:text-black">
      <Header />

      <main className="pt-32 sm:pt-40 pb-24">
        {/* Intro */}
        <section className="container-x max-w-[1400px] mb-20 sm:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-[#D6A634]" />
                <span className="text-[13px] font-sans font-bold tracking-[0.25em] text-[#D6A634] uppercase">
                  HISTORIA & ENFOQUE
                </span>
              </div>
              <h1
                className="text-white font-normal leading-[1.05] tracking-tight mb-8"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.8rem, 5vw, 5.5rem)",
                }}
              >
                Tres décadas. <br />
                Un solo oficio. <br />
                <span className="italic text-[#D6A634]">Cero dispersión.</span>
              </h1>
              <p className="text-[18px] sm:text-[20px] text-[#C4BFB6] leading-relaxed mb-6 font-light">
                A principios de los años 90 entendimos una verdad incómoda del sector: la mayoría de los problemas de una cocina nueva no provienen de la fábrica ni del diseño, sino de las manos que la instalan.
              </p>
              <p className="text-[18px] sm:text-[20px] text-[#C4BFB6] leading-relaxed mb-8 font-light">
                Mientras el mercado empujaba a las empresas a hacer un poco de todo (reformas integrales, electricidad, falsos techos, albañilería), nosotros tomamos el camino opuesto: especializarnos únicamente en montar cocinas con precisión de ebanista y rigor de ingeniero.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[480px] sm:h-[580px]">
                <img
                  src={heroWorker}
                  alt="Maestro montador de CUBIKOS"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#D6A634] font-bold block mb-1">
                    OFICIO ARTESANAL
                  </span>
                  <span className="text-sm font-medium text-white/90">
                    Control milimétrico in situ en cada enclave
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cifras Factuales */}
        <section className="container-x max-w-[1400px] mb-24">
          <div className="bg-[#141413] border border-white/10 rounded-3xl p-10 sm:p-14 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="pt-4 sm:pt-0">
              <span className="font-display font-black text-5xl sm:text-6xl text-[#D6A634] block mb-2">
                30+
              </span>
              <span className="text-xs uppercase tracking-widest text-[#A6A29A] font-bold">
                Años de experiencia continua
              </span>
            </div>
            <div className="pt-8 sm:pt-0">
              <span className="font-display font-black text-5xl sm:text-6xl text-[#D6A634] block mb-2">
                500+
              </span>
              <span className="text-xs uppercase tracking-widest text-[#A6A29A] font-bold">
                Cocinas instaladas en Cataluña
              </span>
            </div>
            <div className="pt-8 sm:pt-0">
              <span className="font-display font-black text-5xl sm:text-6xl text-[#D6A634] block mb-2">
                0.0°
              </span>
              <span className="text-xs uppercase tracking-widest text-[#A6A29A] font-bold">
                Tolerancia de nivelación admitida
              </span>
            </div>
          </div>
        </section>

        {/* Qué Hacemos y Qué NO Hacemos */}
        <section className="container-x max-w-[1400px] mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#141413] border border-emerald-500/20 rounded-2xl p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <h2 className="font-display text-2xl font-bold text-white">
                  Lo que SÍ hacemos en CUBIKOS
                </h2>
              </div>
              <ul className="space-y-4 text-sm sm:text-base text-[#EDEBE8]/90">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Montaje de cocinas de gama media-alta, lujo y ebanistería a medida.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Ajuste fino milimétrico de bisagras, frentes y correderas de cajón.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Resolución técnica de descuadres de paredes y techos en obra.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Instalación estructural de islas complejas y baterías de columnas.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#141413] border border-red-500/20 rounded-2xl p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <h2 className="font-display text-2xl font-bold text-white">
                  Lo que NO hacemos
                </h2>
              </div>
              <ul className="space-y-4 text-sm sm:text-base text-[#EDEBE8]/90">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>No hacemos reformas generales integrales de viviendas ni baños.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>No vendemos muebles propios de catálogo genérico de tienda.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>No subcontratamos el montaje a cuadrillas desconocidas o temporales.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>No dejamos una cocina sin someterla a la auditoría técnica final.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
