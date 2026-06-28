import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?inline";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#d8a843" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Cubikos" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "author", content: "CUBIKOS" },
      { name: "geo.region", content: "ES-CT" },
      { name: "geo.placename", content: "Barcelona" },
      {
        name: "keywords",
        content:
          "montaje cocinas barcelona, instalación cocinas cataluña, montadores cocinas profesionales, montaje muebles cocina, instalación cocina premium barcelona, montadores ikea barcelona",
      },
      { property: "og:locale", content: "es_ES" },
      { property: "og:url", content: "https://cubikos.es/" },
      { name: "twitter:title", content: "CUBIKOS | Montaje Profesional de Cocinas en Cataluña" },
      {
        name: "twitter:description",
        content:
          "30 años y 10.000 cocinas instaladas con precisión milimétrica. El mejor montaje de cocinas de Cataluña. Solicita presupuesto sin compromiso.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://cubikos.es/" },
      { rel: "alternate", hrefLang: "es", href: "https://cubikos.es/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://cubikos.es/" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://images.unsplash.com" },
      { rel: "preload", as: "image", href: "/assets/hero-kitchen.webp", fetchPriority: "high" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
        <style dangerouslySetInnerHTML={{ __html: appCss }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
              "@id": "https://cubikos.es/#business",
              name: "CUBIKOS",
              alternateName: "Cubikos Kitchen Trust",
              description:
                "Especialistas en montaje profesional de cocinas en Cataluña. Más de 30 años y 10.000 instalaciones con precisión milimétrica.",
              url: "https://cubikos.es",
              telephone: "+34666871144",
              email: "cubikos25@gmail.com",
              foundingDate: "1994",
              priceRange: "€€€",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Barcelona",
                addressRegion: "Cataluña",
                addressCountry: "ES",
              },
              areaServed: [
                { "@type": "State", name: "Cataluña" },
                { "@type": "City", name: "Barcelona" },
                { "@type": "City", name: "Tarragona" },
                { "@type": "City", name: "Girona" },
                { "@type": "City", name: "Lleida" },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "47",
                bestRating: "5",
              },
              sameAs: ["https://www.instagram.com/raphael_gs68"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Montáis cualquier tipo de cocina?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Montamos cocinas de todos los fabricantes y estilos: IKEA, Santos, Leicht, Porcelanosa, Dica y cualquier marca personalizada. Nuestros técnicos están formados para trabajar con cualquier sistema de fijación y material.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Gestionáis los imprevistos de obra?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutamente. La gestión de imprevistos es parte de nuestro método. Antes del montaje realizamos una auditoría técnica del espacio para anticipar cualquier problema: desplomes, tuberías mal situadas, faltas de medida. Nuestro equipo resuelve in situ.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuánto tarda un montaje premium?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Una cocina estándar entre 1 y 3 días. Proyectos de gran formato o con isla central pueden requerir hasta 5 días. Siempre damos un calendario cerrado antes de empezar y lo cumplimos.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { LazyMotion, domAnimation } from "framer-motion";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LazyMotion features={domAnimation}>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </LazyMotion>
    </QueryClientProvider>
  );
}
