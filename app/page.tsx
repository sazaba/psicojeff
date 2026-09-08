import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import Navbar from "@/app/components/ui/Navbar";
import Hero from "@/app/components/sections/Hero";
import PainPoints from "@/app/components/sections/PainPoints";
import ProfessionalProfile from "@/app/components/sections/ProfessionalProfile";
import ValueProposition from "@/app/components/sections/ValueProposition";
import TargetAudience from "@/app/components/sections/TargetAudience";
import Transformation from "@/app/components/sections/Transformation";
import FAQ from "@/app/components/sections/Faq";
import Footer from "@/app/components/sections/Footer";
import LocationSeoSummary from "@/app/components/sections/LocationSeoSummary";
import dynamic from "next/dynamic";
import imageJeff from "@/app/assets/Jeffseo.webp";

const siteUrl = "https://psicologojeffersonbastidas.com";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jefferson Bastidas | Psicólogo en Manizales y Online",
    description:
      "Psicoterapia presencial en Manizales y online mediante terapias contextuales de tercera generación y Terapia de Aceptación y Compromiso.",
    url: "/",
    siteName: "Jefferson Bastidas Psicólogo",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: imageJeff.src,
        width: 800,
        height: 800,
        alt: "Psicólogo Jefferson Bastidas Mejía",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jefferson Bastidas | Psicólogo en Manizales y Online",
    description:
      "Psicoterapia presencial en Manizales y online mediante terapias contextuales de tercera generación.",
    images: [imageJeff.src],
  },
};

const BlogCarousel = dynamic(() => import("@/app/components/sections/BlogCarousel"));
const Testimonials = dynamic(() => import("@/app/components/sections/Testimonials"));
const Location = dynamic(() => import("@/app/components/sections/Location"), {
  loading: () => <div className="h-96 w-full bg-stone-50 animate-pulse rounded-3xl" />,
});

export const revalidate = 86400;

async function getReviewCount() {
  try {
    const config = await prisma.siteConfig.findFirst();
    return config?.reviewCount ?? 88;
  } catch (error) {
    console.error("Error cargando reseñas:", error);
    return 88;
  }
}

export default async function Home() {
  const reviewCount = await getReviewCount();

  const personId = `${siteUrl}/#person`;
  const websiteId = `${siteUrl}/#website`;
  const centroId = `${siteUrl}/#sede-centro`;
  const santaElenaId = `${siteUrl}/#sede-santa-elena`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Jefferson Bastidas Mejía",
        jobTitle: "Psicólogo",
        image: `${siteUrl}${imageJeff.src}`,
        url: siteUrl,
        knowsAbout: [
          "Terapia de Aceptación y Compromiso (ACT)",
          "Terapia Dialéctico Conductual (DBT)",
          "Terapias Contextuales de Tercera Generación",
          "Psicología Clínica Basada en la Evidencia",
        ],
        worksFor: [{ "@id": centroId }, { "@id": santaElenaId }],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: "Jefferson Bastidas Psicólogo",
        inLanguage: "es-CO",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfessionalService",
        "@id": centroId,
        name: "Consulta psicológica Jefferson Bastidas Mejía - Sede Centro",
        url: siteUrl,
        image: `${siteUrl}${imageJeff.src}`,
        priceRange: "$100.000 COP",
        founder: { "@id": personId },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Cra. 22 # 24-24",
          addressLocality: "Manizales",
          addressRegion: "Caldas",
          addressCountry: "CO",
        },
        areaServed: {
          "@type": "City",
          name: "Manizales",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": santaElenaId,
        name: "Consulta psicológica Jefferson Bastidas Mejía - Centro Médico Santa Elena",
        url: siteUrl,
        image: `${siteUrl}${imageJeff.src}`,
        priceRange: "$100.000 COP",
        founder: { "@id": personId },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Avenida Paralela # 49-46",
          addressLocality: "Manizales",
          addressRegion: "Caldas",
          addressCountry: "CO",
        },
        areaServed: {
          "@type": "City",
          name: "Manizales",
        },
      },
    ],
  };

  return (
    <div className="relative flex flex-col gap-0 scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="flex-1">
        <section id="inicio">
          <Hero />
        </section>

        <section id="motivos">
          <PainPoints />
        </section>

        <section>
          <TargetAudience />
        </section>

        <section id="sobre-mi">
          <ProfessionalProfile />
        </section>

        <section id="diferencial">
          <ValueProposition />
        </section>

        <section id="proceso">
          <Transformation />
        </section>

        <section id="ubicacion">
          <LocationSeoSummary />
          <Location />
        </section>

        <section id="testimonios">
          <Testimonials dbReviewCount={reviewCount} />
        </section>

        <section id="faq">
          <FAQ />
        </section>

        <section id="blog">
          <BlogCarousel />
        </section>
      </main>

      <section id="contacto">
        <Footer />
      </section>
    </div>
  );
}
