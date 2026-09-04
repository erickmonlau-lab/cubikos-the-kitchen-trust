import gal1 from "@/assets/gallery-1.webp";
import gal2 from "@/assets/gallery-2.webp";
import gal4 from "@/assets/gallery-4.webp";
import gal5 from "@/assets/gallery-5.webp";
import showcase1 from "@/assets/showcase-1.webp";
import showcase2 from "@/assets/showcase-2.webp";
import showcase3 from "@/assets/showcase-3.webp";

export interface Servicio {
  slug: string;
  titulo: string;
  subtitulo: string;
  metaTitle: string;
  metaDescription: string;
  descripcionLarga: string;
  imagen: string;
  puntosClave: string[];
  protocoloFases: { fase: string; titulo: string; desc: string }[];
  toleranciaGarantizada: string;
  marcasCompatibles: string[];
  faqs: { q: string; a: string }[];
  proyectosRelacionadosSlugs: string[];
}

export const SERVICIOS_DATA: Record<string, Servicio> = {
  "montaje-cocinas-alta-gama": {
    slug: "montaje-cocinas-alta-gama",
    titulo: "Montaje de Cocinas de Gama Media-Alta y Lujo",
    subtitulo: "Protocolo de instalación milimétrica para firmas de diseño, estudios de arquitectura e interioristas.",
    metaTitle: "Montaje de Cocinas de Alta Gama en Cataluña | CUBIKOS",
    metaDescription: "Instalación técnica certificada de cocinas de lujo y gama media-alta en Barcelona y Cataluña. Tolerancia < 0.5mm y 30+ años de oficio.",
    descripcionLarga:
      "Una cocina de alta gama no se compra montada; su valor final depende por completo de la ejecución en obra. Nuestro equipo domina las tolerancias micrométricas exigidas por las firmas más prestigiosas del mercado internacional, garantizando una planimetría absoluta y transiciones imperceptibles.",
    imagen: showcase2,
    puntosClave: [
      "Calibración láser de módulos base con nivelación a cota cero.",
      "Ajuste fino de golas continuas, zócalos retranqueados y copetes perimetrales.",
      "Regulación de bisagras y guías con amortiguación integrada para holguras constantes de 2mm.",
      "Coordinación técnica con marmolistas e instaladores de encimera.",
    ],
    protocoloFases: [
      { fase: "01", titulo: "Comprobación de Escuadras y Paramentos", desc: "Auditoría previa de desplomes en tabiques y verificación de puntos de agua y electricidad antes de fijar anclajes." },
      { fase: "02", titulo: "Estructura Base y Aplomado Láser", desc: "Montaje y nivelación micrométrica de los módulos bajos asegurando un plano de carga uniforme para la encimera." },
      { fase: "03", titulo: "Módulos Altos y Columnas", desc: "Fijación con herrajes de alta resistencia y alineación continua de frentes verticales sin descuadres." },
      { fase: "04", titulo: "Mecanizados e Integración", desc: "Aperturas precisas para pasos de suministros y preinstalación de electrodomésticos enrasados." },
      { fase: "05", titulo: "Entrega y Verificación Final", desc: "Comprobación exhaustiva de apertura, cierre suave y limpieza técnica antes de la entrega al cliente." },
    ],
    toleranciaGarantizada: "< 0.5 mm en plano continuo",
    marcasCompatibles: ["Santos", "Bulthaup", "Dica", "Porcelanosa", "Siematic", "Boffi", "IKEA Metod (personalizado)", "Mueble a medida"],
    faqs: [
      {
        q: "¿Cuánto tiempo lleva el montaje de una cocina de alta gama?",
        a: "Para una cocina estándar de gama alta el proceso suele requerir entre 3 y 5 jornadas laborables completas, priorizando el ajuste milimétrico y la verificación estructural.",
      },
      {
        q: "¿Qué ocurre si las paredes de mi vivienda no están a 90 grados?",
        a: "Es la situación habitual en el 80% de las reformas. Aplicamos soluciones de compensación en los costados y tapetas de ajuste a medida para que el mobiliario quede geométricamente recto sin forzar las estructuras.",
      },
    ],
    proyectosRelacionadosSlugs: ["cocina-isla-sarria", "frentes-negro-mate-eixample"],
  },
  "islas-y-columnas": {
    slug: "islas-y-columnas",
    titulo: "Instalación de Islas, Penínsulas y Frentes de Columna",
    subtitulo: "Anclaje estructural sólido, golas continuas y alineación vertical rigurosa de suelo a techo.",
    metaTitle: "Instalación de Islas de Cocina y Columnas | CUBIKOS",
    metaDescription: "Montaje especializado de islas centrales, penínsulas y baterías de columnas suelo a techo en Barcelona y Cataluña. Estabilidad y alineación.",
    descripcionLarga:
      "Las islas y las baterías de columnas son los elementos arquitectónicos más imponentes de la cocina contemporánea. Exigen una fijación a solera de máxima rigidez y una simetría vertical implacable para que los frentes de 2.40m o más mantengan una separación exacta en toda su altura.",
    imagen: showcase3,
    puntosClave: [
      "Fijación perimetral reforzada a pavimento sin dañar conductos ni suelo radiante.",
      "Golas y tiradores ocultos en línea recta continua a través de múltiples frentes.",
      "Ventilación forzada reglamentaria para columnas con electrodomésticos empotrados.",
      "Remates de techo adaptados a molduras clásicas o foseados de pladur con iluminación indirecta.",
    ],
    protocoloFases: [
      { fase: "01", titulo: "Trazado en Suelo y Detección Térmica", desc: "Marcaje de ejes y verificación de pasos para garantizar pasos cómodos mínimos de 90 a 110cm alrededor de la isla." },
      { fase: "02", titulo: "Anclaje Estructural de la Isla", desc: "Fijación de bases y contrapesos para garantizar una plataforma rígida capaz de soportar encimeras de piedra o porcelánico pesado." },
      { fase: "03", titulo: "Ensamble de Columnas en Batería", desc: "Unión de módulos mediante tornillería oculta y aplomado simultáneo para evitar desviaciones acumulativas." },
      { fase: "04", titulo: "Canales de Aireación", desc: "Instalación de zócalos ventilados y chimeneas de extracción para columnas de frigoríficos y hornos." },
      { fase: "05", titulo: "Calibración de Frentes de Gran Formato", desc: "Ajuste de bisagras reforzadas en puertas altas para compensar dilataciones térmicas." },
    ],
    toleranciaGarantizada: "< 0.8 mm en frentes verticales de 240cm",
    marcasCompatibles: ["Modulnova", "Poliform", "Santos", "Schmidt", "Mobalpa", "Diseño personalizado"],
    faqs: [
      {
        q: "¿Se puede instalar una isla con suelo radiante?",
        a: "Sí. Utilizamos técnicas de fijación perimetral por adhesivos polímeros estructurales de alto impacto combinados con anclajes en zonas libres previamente mapeadas, sin taladrar conductos.",
      },
      {
        q: "¿Cómo se asegura la ventilación de los frigoríficos integrables en columna?",
        a: "Ejecutamos conductos de tiro directo en zócalo y techo del mueble respetando el caudal mínimo exigido por los fabricantes (generalmente 200 cm²) para no perder la garantía del aparato.",
      },
    ],
    proyectosRelacionadosSlugs: ["cocina-isla-sarria", "columna-hornos-emporda"],
  },
  "botelleros-a-medida": {
    slug: "botelleros-a-medida",
    titulo: "Botelleros Técnicos y Ebanistería Integrada",
    subtitulo: "Ajuste artesanal in situ, estanterías retroiluminadas y soluciones a medida para huecos difíciles.",
    metaTitle: "Botelleros de Cocina a Medida y Ebanistería | CUBIKOS",
    metaDescription: "Montaje y adaptación de botelleros, estanterías iluminadas y remates de ebanistería a medida en cocinas de diseño en Cataluña.",
    descripcionLarga:
      "Cuando los módulos estándar no resuelven la transición entre la cocina y la arquitectura existente, interviene nuestra experiencia de ebanistería. Integramos botelleros a medida, nichos retroiluminados y remates de ajuste exacto que elevan la cocina al rango de pieza única.",
    imagen: showcase1,
    puntosClave: [
      "Mecanizado y ranurado in situ con fresadora de precisión para tiras LED disimuladas.",
      "Acabados en maderas nobles, lacados a juego y perfiles metálicos en oro viejo o negro mate.",
      "Solución de esquinas y mochetas de obra con aprovechamiento total del espacio.",
      "Uniones invisibles con galletas o espigas para ensambles indestructibles.",
    ],
    protocoloFases: [
      { fase: "01", titulo: "Toma de Plantillas In Situ", desc: "Copiado exacto del contorno de pared o mocheta para salvar irregularidades sin juntas toscas." },
      { fase: "02", titulo: "Corte y Fresado Técnico", desc: "Mecanizado de baldas y divisiones con cortes limpios a 45° o 90° sin astillar melaminas ni chapas finas." },
      { fase: "03", titulo: "Preinstalación de Iluminación", desc: "Canalización de cables y difusores enrasados para que la luz sea protagonista sin ver el punto de luz." },
      { fase: "04", titulo: "Ensamblado y Retranqueo", desc: "Ajuste milimétrico entre los muebles colindantes con tornillería totalmente invisible." },
      { fase: "05", titulo: "Sellado Técnico Monocomponente", desc: "Terminación perimetral con sellador elástico del tono exacto del mobiliario." },
    ],
    toleranciaGarantizada: "Tolerancia Cero en ensambles visibles",
    marcasCompatibles: ["Ebanistería propia", "Mobiliario a medida", "Integraciones sobre firmas comerciales"],
    faqs: [
      {
        q: "¿Podéis adaptar un botellero a una mocheta o columna de hormigón existente?",
        a: "Es una de nuestras especialidades más demandadas. Mecanizamos los costados a plantilla para abrazar la columna existente e integrar el botellero como si siempre hubiese estado ahí.",
      },
      {
        q: "¿Los botelleros aguantan el peso de botellas llenas en todas las alturas?",
        a: "Absolutamente. Todos los estantes van rigidizados y apoyados sobre herrajes mecánicos de carga, nunca sobre simples clavillos o adhesivos ligeros.",
      },
    ],
    proyectosRelacionadosSlugs: ["botellero-iluminado-sant-cugat"],
  },
  "electrodomesticos-integrados": {
    slug: "electrodomesticos-integrados",
    titulo: "Integración y Encastre de Electrodomésticos",
    subtitulo: "Encastres enrasados a encimera, puertas paneladas con golas continuas y extracción silenciosa.",
    metaTitle: "Encastre e Integración de Electrodomésticos de Cocina | CUBIKOS",
    metaDescription: "Instalación y panelado de lavavajillas, placas enrasadas, campanas integradas y frigoríficos en cocinas de gama alta en Cataluña.",
    descripcionLarga:
      "Un electrodoméstico mal alineado arruina la estética de una cocina de 30.000 euros. Nos encargamos de la nivelación, fijación y panelado de todos los equipos de cocción, refrigeración y lavado, respetando escrupulosamente los planos técnicos de cada fabricante.",
    imagen: gal4,
    puntosClave: [
      "Panelado de lavavajillas con compensación de zócalo mediante bisagras deslizantes (sliding hinge).",
      "Encastre enrasado (flush mount) de placas de inducción sobre encimeras porcelánicas o de granito.",
      "Ajuste y centrado milimétrico de hornos combinados y calientaplatos en batería horizontal o vertical.",
      "Campanas extractoras integradas en mueble alto con sellado estanco y reducción de vibraciones.",
    ],
    protocoloFases: [
      { fase: "01", titulo: "Verificación de Cotas y Tomas", desc: "Comprobación de acometidas eléctricas, tomas de agua y desagües según las fichas técnicas del fabricante." },
      { fase: "02", titulo: "Preparación del Cajeado", desc: "Aislamiento térmico y sellado de cantos interiores con aluminio para proteger los muebles de condensaciones." },
      { fase: "03", titulo: "Fijación y Nivelación Interna", desc: "Calzado del electrodoméstico hasta lograr la altura exacta de la línea de gola y frentes vecinos." },
      { fase: "04", titulo: "Panelado Frontal de Precisión", desc: "Atornillado y regulación tridimensional del panel decorativo para mantener una fuga uniforme." },
      { fase: "05", titulo: "Prueba Operativa y Fugas", desc: "Verificación de apertura suave, alineación de gomas y estanqueidad perimetral." },
    ],
    toleranciaGarantizada: "< 0.5 mm en frentes panelados",
    marcasCompatibles: ["Miele", "Gaggenau", "Neff", "Bosch Serie 8", "Siemens studioLine", "Bora", "Pando", "Smeg"],
    faqs: [
      {
        q: "¿Hacéis las conexiones de fontanería y electricidad de los electrodomésticos?",
        a: "Conectamos los aparatos a las tomas ya preparadas y homologadas en obra. No realizamos modificaciones pesadas de acometidas de gas ni cuadros eléctricos principales.",
      },
      {
        q: "¿Podéis instalar campanas integradas en placas tipo Bora o similares?",
        a: "Sí, montamos y canalizamos sistemas de extracción de encimera tanto en recirculación con filtros de carbón cerámico como en salida directa al exterior.",
      },
    ],
    proyectosRelacionadosSlugs: ["columna-hornos-emporda", "cocina-isla-sarria"],
  },
};
