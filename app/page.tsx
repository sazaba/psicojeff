import { prisma } from "@/lib/prisma";
import Navbar from "@/app/components/ui/Navbar";
import Hero from "@/app/components/sections/Hero"; 
import Footer from "@/app/components/sections/Footer";
import dynamic from "next/dynamic"; 

// --- OPTIMIZACIÓN DE CARGA (LAZY LOADING) ---
const PainPoints = dynamic(() => import("@/app/components/sections/PainPoints"));
const ProfessionalProfile = dynamic(() => import("@/app/components/sections/ProfessionalProfile"));
const ValueProposition = dynamic(() => import("@/app/components/sections/ValueProposition"));
const TargetAudience = dynamic(() => import("@/app/components/sections/TargetAudience"));
const Transformation = dynamic(() => import("@/app/components/sections/Transformation"));

const Testimonials = dynamic(() => import("@/app/components/sections/Testimonials"));
const FAQ = dynamic(() => import("@/app/components/sections/Faq"));
const BlogCarousel = dynamic(() => import("@/app/components/sections/BlogCarousel"));

// CORRECCIÓN AQUÍ: Quitamos 'ssr: false'
const Location = dynamic(() => import("@/app/components/sections/Location"), {
  loading: () => <div className="h-96 w-full bg-stone-50 animate-pulse rounded-3xl" />
  // Ya no ponemos ssr: false, porque Location.tsx ya es "use client" internamente
});

// --- OPTIMIZACIÓN DE SERVIDOR (SSR) ---
// Dejamos esto en 0 para que veas el cambio del contador de reseñas INMEDIATAMENTE
export const revalidate = 0; 

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

  return (
    <div className="relative flex flex-col gap-0 scroll-smooth"> 
      <Navbar />
      
      <main className="flex-1">
        <section id="inicio">
          <Hero />
        </section>

        <section id="motivos">
          <PainPoints />
        </section>

        <section>
           <TargetAudience/>
        </section>

        <section id="sobre-mi">
          <ProfessionalProfile/>
        </section>

        <section id="diferencial">
          <ValueProposition/>
        </section>

        <section id="proceso">
          <Transformation/>
        </section>

        <section id="ubicacion">
          <Location/>
        </section>

        <section id="testimonios">
          <Testimonials dbReviewCount={reviewCount} />
        </section>
        
        <section id="faq">
          <FAQ/>
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