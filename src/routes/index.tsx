import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-kitchen.webp";
import { Header, Hero, Diferenciadora } from "../components/LandingUI";
import { Experiencia, Proceso, Testimonios } from "../components/LandingSections";
import { Proyectos, FAQ, CTAFinal, Footer } from "../components/LandingExtra";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CUBIKOS | Montaje Profesional de Cocinas" },
      {
        name: "description",
        content:
          "Más de 30 años instalando cocinas en toda Cataluña con precisión milimétrica y acabados impecables. El montaje decide el resultado final.",
      },
      { property: "og:title", content: "CUBIKOS | Montaje Profesional de Cocinas" },
      {
        property: "og:description",
        content:
          "El nivel de detalle de un ebanista. La capacidad de resolución de un ingeniero. Montadores expertos en Cataluña.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "CUBIKOS",
          description: "Especialistas en montaje profesional de cocinas para particulares en toda Cataluña.",
          areaServed: "Cataluña",
          telephone: "+34 000 000 000",
          priceRange: "€€€",
        }),
      }
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="font-sans antialiased bg-background text-ink">
      <Header />
      <main>
        <Hero />
        <Diferenciadora />
        <Experiencia />
        <Proceso />
        <Proyectos />
        <Testimonios />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}
