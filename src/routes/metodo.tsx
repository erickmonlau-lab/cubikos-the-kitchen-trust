import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "../components/LandingUI";
import { Footer } from "../components/LandingExtra";
import { motion } from "framer-motion";
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

const fases = [
  {
    num: "01",
    titulo: "Auditoría de Planos y Replanteo Láser",
    descripcion:
      "No empezamos montando muebles. Llegamos a la obra con niveles láser de precisión para contrastar la realidad geométrica de las paredes, techos y solera con el proyecto de cocina. Verificamos escuadras, tomas de agua, desagües y enchufes antes de tocar un solo módulo.",
    detalle: "Control de desplomes y verificación de cota cero.",
  },
  {
    num: "02",
    titulo: "Anclaje Estructural de Cascos y Nivelación Base",
    descripcion:
      "La durabilidad de una cocina depende enteramente de su base. Fijamos las guías de sustentación y ensamblamos los módulos bajos con calzado milimétrico. Si una base tiene 1 milímetro de desviación, al final de una bancada de 4 metros se traduce en puertas que chocan o encimeras partidas.",
    detalle: "Anclajes mecánicos y químicos según tipología de muro.",
  },
  {
    num: "03",
    titulo: "Ajuste Fino de Guías, Cajones y Bisagras",
    descripcion:
      "Regulación tridimensional de cada bisagra y corredera de cajón. Exigimos una holgura regular de 2mm uniforme en todas las juntas de frentes. Mecanismos con freno hidráulico calibrados para que el cierre sea amortiguado, silencioso y sin fricciones.",
    detalle: "Calibración según estándares Blum, Grass y Hettich.",
  },
  {
    num: "04",
    titulo: "Integración de Electrodomésticos y Mecanizados",
    descripcion:
      "Encastre perfecto de placas de cocción, hornos, campanas de extracción y lavavajillas integrables. Ajustamos paneles de ocultación para que queden a ras de gola, garantizando ventilación trasera adecuada para evitar sobrecalentamientos del motor.",
    detalle: "Encastres enrasados y conductos de ventilación verificados.",
  },
  {
    num: "05",
    titulo: "Remates de Ebanistería, Sellados y Entrega Exhaustiva",
    descripcion:
      "Ajustamos golas, zócalos con sellado estanco, tapetas de ajuste a pared cepilladas a mano para seguir cualquier imperfección del yeso y limpieza técnica completa de virutas interiores. Entregamos la cocina lista para usar.",
    detalle: "Auditoría final de 28 puntos de control de calidad.",
  },
];

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

        {/* Hero Section */}
        <section className="container-x max-w-[1400px] mb-20 sm:mb-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-[#D6A634]" />
              <span className="text-[13px] font-sans font-bold tracking-[0.25em] text-[#D6A634] uppercase">
                INGENIERÍA & OFICIO ARTESANAL
              </span>
            </div>
            <h1
              className="text-white font-normal leading-[1.05] tracking-tight mb-8"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.8rem, 5vw, 5.5rem)",
              }}
            >
              El Método CUBIKOS: <br />
              <span className="italic text-[#D6A634]">Tolerancia Cero</span> en Obra.
            </h1>
            <p className="text-[18px] sm:text-[21px] text-[#C4BFB6] leading-relaxed font-light">
              Un mueble de lujo de 30.000€ montado con negligencia es una cocina mediocre. Un mueble estándar instalado con rigor milimétrico se convierte en una obra arquitectónica impecable. Nuestro método garantiza que el resultado final supere cualquier expectativa.
            </p>
          </div>
        </section>

        {/* Fases Grid */}
        <section className="container-x max-w-[1400px] mb-24">
          <div className="space-y-8">
            {fases.map((f, index) => (
              <motion.div
                key={f.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#141413] border border-white/10 rounded-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-[#D6A634]/40 transition-colors"
              >
                <div className="lg:col-span-2">
                  <span className="font-mono text-4xl sm:text-5xl font-black text-[#D6A634]">
                    {f.num}
                  </span>
                </div>
                <div className="lg:col-span-6">
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                    {f.titulo}
                  </h2>
                  <p className="text-[#C0BCB4] text-base sm:text-lg leading-relaxed font-normal">
                    {f.descripcion}
                  </p>
                </div>
                <div className="lg:col-span-4 self-stretch flex flex-col justify-center">
                  <div className="relative rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 backdrop-blur-sm group-hover:border-[#D6A634]/30 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-[#D6A634] inline-block shadow-[0_0_8px_rgba(214,166,52,0.6)]" />
                      <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#D6A634] uppercase">
                        Estándar Técnico
                      </span>
                    </div>
                    <p className="text-[14px] leading-relaxed text-[#DCD8CF] font-normal">
                      {f.detalle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

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
