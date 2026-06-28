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
import dynamic from "next/dynamic"; 
import imageJeff from "@/app/assets/Jeffseo.webp";

// SOLO usar lazy loading para componentes de cliente (use client) que contengan librerías pesadas.
// Asumo que estos tres requieren JS pesado (Swiper, Leaflet, etc.). Si son estáticos, impórtalos normalmente.
const BlogCarousel = dynamic(() => import("@/app/components/sections/BlogCarousel"));
const Testimonials = dynamic(() => import("@/app/components/sections/Testimonials"));
const Location = dynamic(() => import("@/app/components/sections/Location"), {
  loading: () => <div className="h-96 w-full bg-stone-50 animate-pulse rounded-3xl" />
});

// OPTIMIZACIÓN: Revalidar cada 24 horas (86400 segundos). 
// La página se servirá instantáneamente desde la caché estática, acelerando el TTFB.
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Jefferson Bastidas Mejía",
    "jobTitle": "Psicólogo Clínico",
    "image": `https://psicologojeffersonbastidas.com${imageJeff.src}`,
    "url": "https://psicologojeffersonbastidas.com",
    "priceRange": "$100.000 COP",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Sede Centro",
        "addressLocality": "Manizales",
        "addressRegion": "Caldas",
        "addressCountry": "CO"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Avenida Santander con 55A (Edificio Cristóbal Colón)",
        "addressLocality": "Manizales",
        "addressRegion": "Caldas",
        "addressCountry": "CO"
      }
    ],
    "description": "Psicoterapia presencial en Manizales y online. Especialista en terapias contextuales de tercera generación.",
    "knowsAbout": [
      "Protocolo Integrativo de Alta Precisión (PIAP)", 
      "Terapia de Aceptación y Compromiso (ACT)",
      "Terapias de Tercera Generación"
    ]
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