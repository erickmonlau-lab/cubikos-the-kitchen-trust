import gal1 from "@/assets/gallery-1.webp";
import gal2 from "@/assets/gallery-2.webp";
import gal3 from "@/assets/gallery-3.webp";
import gal4 from "@/assets/gallery-4.webp";
import gal5 from "@/assets/gallery-5.webp";
import gal6 from "@/assets/gallery-6.webp";
import showcase1 from "@/assets/showcase-1.webp";
import showcase2 from "@/assets/showcase-2.webp";
import showcase3 from "@/assets/showcase-3.webp";
import heroWorker from "@/assets/hero-worker-master.webp";

export interface Proyecto {
  slug: string;
  titulo: string;
  subtitulo: string;
  categoria: "cocinas-completas" | "islas" | "botelleros" | "columnas" | "ebanisteria";
  categoriaLabel: string;
  ubicacion: string;
  tolerancia: string;
  plazo: string;
  descripcion: string;
  desafioTecnico: string;
  solucionAplicada: string;
  imagenPrincipal: string;
  galeria: string[];
  destacado?: boolean;
}

export const CATEGORIAS_PROYECTOS = [
  { id: "todos", label: "Todos los proyectos" },
  { id: "cocinas-completas", label: "Cocinas completas" },
  { id: "islas", label: "Islas y penínsulas" },
  { id: "botelleros", label: "Botelleros a medida" },
  { id: "columnas", label: "Columnas y despensas" },
  { id: "ebanisteria", label: "Remates y ebanistería" },
] as const;

export const PROYECTOS_DATA: Proyecto[] = [
  {
    slug: "cocina-isla-sarria",
    titulo: "Residencia Sarrià — Cocina Minimalista en Isla",
    subtitulo: "Alineación continua de golas e integración invisible",
    categoria: "islas",
    categoriaLabel: "Islas y penínsulas",
    ubicacion: "Sarrià-Sant Gervasi, Barcelona",
    tolerancia: "< 0.5 mm",
    plazo: "4 días de montaje",
    descripcion:
      "Instalación de cocina de alta gama con isla central de 3.60m en acabado mate sedoso, gola continua mecanizada e integración de placa de inducción enrasada.",
    desafioTecnico:
      "Desplome perimetral en solera de 8mm entre los extremos del espacio de la isla, lo cual amenazaba el plano continuo de la encimera porcelánica de gran formato.",
    solucionAplicada:
      "Calibración mediante estación láser rotativa y calzado estructural regulable micrométrico, logrando una cota cero absoluta en los 3600mm lineales.",
    imagenPrincipal: showcase2,
    galeria: [showcase2, gal1, gal2],
    destacado: true,
  },
  {
    slug: "botellero-iluminado-sant-cugat",
    titulo: "Ático Sant Cugat — Botellero Técnico de Ebanistería",
    subtitulo: "Encastre a medida en roble ahumado con perfil LED oculto",
    categoria: "botelleros",
    categoriaLabel: "Botelleros a medida",
    ubicacion: "Sant Cugat del Vallès",
    tolerancia: "Tolerancia Cero",
    plazo: "2 días de montaje",
    descripcion:
      "Construcción y acople de módulo botellero vertical encastrado entre columna de frío y pared de carga con ranurado fresado para tiras LED invisibles.",
    desafioTecnico:
      "La pared de obra presentaba una concavidad central que imposibilitaba un encuentro limpio mediante moldura convencional sin verse falso.",
    solucionAplicada:
      "Cajeado artesanal in situ mediante cepillo de precisión e integración de tapeta compensadora retranqueada con sellado perimetral invisible al tono.",
    imagenPrincipal: showcase1,
    galeria: [showcase1, gal4, gal5],
    destacado: true,
  },
  {
    slug: "columna-hornos-emporda",
    titulo: "Masia Baix Empordà — Frente de Columnas y Despensa",
    subtitulo: "Simetría estricta en tres niveles de integración de frío y hornos",
    categoria: "columnas",
    categoriaLabel: "Columnas y despensas",
    ubicacion: "Begur, Baix Empordà",
    tolerancia: "< 0.8 mm",
    plazo: "3 días de montaje",
    descripcion:
      "Ensamble y plomada de batería de 4 columnas suelo a techo con frentes alistonados, frigorífico integrable y hornos empotrados a línea perfecta.",
    desafioTecnico:
      "Vigas vistas centenarias con caída diferencial de 25mm en el techo sobre la coronación superior del mobiliario.",
    solucionAplicada:
      "Fabricación y ajuste de copete de remate superior copiado a plantilla contra las irregularidades de la madera rústica sin holguras visibles.",
    imagenPrincipal: showcase3,
    galeria: [showcase3, gal6, gal1],
    destacado: true,
  },
  {
    slug: "frentes-negro-mate-eixample",
    titulo: "Eixample Dret — Precisión en Líneas y Encuentros",
    subtitulo: "Regulación de bisagras amortiguadas con tolerancia de 0.5mm en calle central",
    categoria: "cocinas-completas",
    categoriaLabel: "Cocinas completas",
    ubicacion: "Barcelona Ciudad",
    tolerancia: "< 0.5 mm",
    plazo: "4 días de montaje",
    descripcion:
      "Montaje integral de cocina lineal de 5 metros con frentes anti-huella en negro carbón y encimera de cuarzo técnico.",
    desafioTecnico:
      "Espacio muy estrecho con pasos de tuberías vistos que obligaron a retranquear cascos manteniendo la capacidad interior y la estabilidad.",
    solucionAplicada:
      "Refuerzos de anclaje químico en muros de ladrillo macizo y mecanizados limpios con aspiración forzada para evitar cualquier daño a las molduras originales del inmueble.",
    imagenPrincipal: gal1,
    galeria: [gal1, gal2, gal4],
    destacado: false,
  },
  {
    slug: "encimera-porcelanica-sitges",
    titulo: "Villa Sitges — Ajuste Perimetral y Acabados de Ebanistería",
    subtitulo: "Enlace perfecto de golas y encimeras de gran formato",
    categoria: "ebanisteria",
    categoriaLabel: "Remates y ebanistería",
    ubicacion: "Sitges, Garraf",
    tolerancia: "< 0.3 mm",
    plazo: "5 días de montaje",
    descripcion:
      "Montaje de cocina abierta con península y detalles de ebanistería arquitectónica que enlazan con el pavimento continuo de microcemento.",
    desafioTecnico:
      "Exigencia de tolerancia cero en el encuentro entre el zócalo técnico lacado y el pavimento continuo sin juntas visibles.",
    solucionAplicada:
      "Micro-regulación de patas telescópicas de alta carga y fijación perimetral con juntas de estanqueidad de polímero neutro resistente a humedad.",
    imagenPrincipal: gal6,
    galeria: [gal6, gal5, showcase2],
    destacado: false,
  },
];
