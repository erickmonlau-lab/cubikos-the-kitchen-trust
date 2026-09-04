import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/LandingUI";
import { Footer } from "../components/LandingExtra";
import { motion } from "framer-motion";
import heroKitchen from "@/assets/hero-kitchen.webp";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios de Montaje Técnico de Cocinas | CUBIKOS Cataluña" },
      {
        name: "description",
        content:
          "Especialidades exclusivas de montaje: cocinas de alta gama, islas monumentales, botelleros ebanizados a medida, columnas y electrodomésticos enrasados.",
      },
      { property: "og:title", content: "Especialidades y Servicios de Montaje — CUBIKOS" },
      { property: "og:image", content: heroKitchen },
    ],
  }),
  component: ServiciosPage,
});

const servicios = [
  {
    id: "montaje-cocinas-alta-gama",
    titulo: "Montaje de Cocinas de Gama Media-Alta y Lujo",
    tagline: "Santos, Bulthaup, Porcelanosa, Siematic, Modulnova y firmas a medida.",
    descripcion:
      "Instalación milimétrica con verificación continua de aplomado y nivel. Nos adaptamos a los herrajes y sistemas de suspensión más exigentes del mercado europeo.",
    aspectos: [
      "Aplomado de módulos con láser 3D continuo",
      "Calibración de bisagras y frentes con tolerancia < 0.5mm",
      "Sellado estanco y protección anti-humedad en zonas críticas",
    ],
  },
  {
    id: "islas-y-columnas",
    titulo: "Islas Centrales, Penínsulas y Baterías de Columnas",
    tagline: "Estructuras complejas con instalaciones de agua, gas y electricidad.",
    descripcion:
      "El montaje de una isla no admite desviaciones. Fijamos estructuras al forjado, alineamos golas corridas y coordinamos el paso limpio de suministros para encimeras de gran peso.",
    aspectos: [
      "Fijación estructural reforzada al pavimento",
      "Golas corridas continuas sin saltos de cota",
      "Coordinación de pasos de extracción de superficie (Bora, Novy)",
    ],
  },
  {
    id: "botelleros-a-medida",
    titulo: "Botelleros y Piezas de Ebanistería a Medida",
    tagline: "Detalles artesanales donde no cabe el mueble estándar.",
    descripcion:
      "Fabricación y ensamble in situ de módulos botelleros, estantes retroiluminados, tapetas de cierre cepilladas a mano y soluciones a medida para vigas o muros irregulares.",
    aspectos: [
      "Ajuste manual con garlopa y cepillo de precisión",
      "Integración de canales para iluminación LED indirecta",
      "Maderas nobles, lacados especiales y remates invisibles",
    ],
  },
  {
    id: "electrodomesticos-integrados",
    titulo: "Encastre e Integración de Electrodomésticos",
    tagline: "Frigoríficos panelados, hornos en columna y lavavajillas integrables.",
    descripcion:
      "Aseguramos la ventilación requerida por el fabricante para evitar averías térmicas. Alineamos paneles de puerta a ras del resto de frentes de la cocina.",
    aspectos: [
      "Verificación de caudales de aire de refrigeración",
      "Fijación y enrase de paneles de ocultación",
      "Prueba de estanqueidad y cierre hidráulico",
    ],
  },
];

function ServiciosPage() {
  return (
    <div className="bg-[#090908] text-[#FAF8F5] min-h-screen selection:bg-[#D6A634] selection:text-black">
      <Header />

      <main className="pt-32 sm:pt-40 pb-24">
        {/* Header */}
        <section className="container-x max-w-[1400px] mb-16 sm:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-[#D6A634]" />
            <span className="text-[13px] font-sans font-bold tracking-[0.25em] text-[#D6A634] uppercase">
              ESPECIALIZACIÓN PURA
            </span>
          </div>
          <h1
            className="text-white font-normal leading-[1.05] tracking-tight mb-8 max-w-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.8rem, 5vw, 5.5rem)",
            }}
          >
            Nuestras Especialidades: <br />
            <span className="italic text-[#D6A634]">Un Solo Oficio</span> Hecho a la Perfección.
          </h1>
          <p className="text-[18px] sm:text-[21px] text-[#C4BFB6] max-w-3xl font-light leading-relaxed">
            No hacemos reformas integrales, ni fontanería general, ni pintura. Nos concentramos exclusivamente en el ensamblaje de cocinas de alta exigencia donde cada unión decide la vida útil del mueble.
          </p>
        </section>

        {/* Listado de Servicios */}
        <section className="container-x max-w-[1400px] mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicios.map((s, index) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#141413] border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#D6A634]/40 transition-colors"
              >
                <div>
                  <span className="text-xs font-mono text-[#D6A634] uppercase tracking-widest font-bold block mb-3">
                    0{index + 1} • SERVICIO TÉCNICO
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                    {s.titulo}
                  </h2>
                  <p className="text-sm font-medium text-[#D6A634] mb-4">{s.tagline}</p>
                  <p className="text-[#A6A29A] text-base leading-relaxed mb-6">
                    {s.descripcion}
                  </p>

                  <div className="pt-4 border-t border-white/10 space-y-2">
                    {s.aspectos.map((asp, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#EDEBE8]">
                        <span className="text-[#D6A634] font-bold">✓</span>
                        <span>{asp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/5">
                  <a
                    href="/#contacto"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D6A634] hover:text-white transition-colors"
                  >
                    <span>Consultar para tu cocina</span>
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom Callout */}
        <section className="container-x max-w-[1400px]">
          <div className="bg-[#141413] border border-white/10 rounded-3xl p-10 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-left">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                ¿Eres arquitecto o interiorista en Cataluña?
              </h3>
              <p className="text-[#A6A29A] text-base">
                Colaboramos habitualmente con estudios como su equipo de montaje de confianza para obra. Cero quejas de cliente final.
              </p>
            </div>
            <a
              href="https://wa.me/34666871144?text=Hola,%20soy%20arquitecto/interiorista%20y%20me%20gustaria%20conocer%20vuestra%20disponibilidad%20para%20proyectos"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 h-12 rounded-full bg-[#0F8E47] hover:bg-[#0c7a3c] text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shrink-0 transition-colors"
            >
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
