import { prisma } from "@/lib/prisma";
import Navbar from "@/app/components/ui/Navbar";
import Hero from "@/app/components/sections/Hero"; // El Hero SE MANTIENE estático porque es lo primero que se ve
import dynamic from "next/dynamic"; // Importamos dynamic
import Footer from "@/app/components/sections/Footer";

// --- OPTIMIZACIÓN DE CARGA (LAZY LOADING) ---
// Cargamos estos componentes solo cuando el navegador los necesita.
// ssr: true ayuda al SEO, pero difiere la carga del JS pesado.
// Para el mapa (Location), si usa window, usaremos ssr: false más adelante.

const PainPoints = dynamic(() => import("@/app/components/sections/PainPoints"));
const ProfessionalProfile = dynamic(() => import("@/app/components/sections/ProfessionalProfile"));
const ValueProposition = dynamic(() => import("@/app/components/sections/ValueProposition"));
const TargetAudience = dynamic(() => import("@/app/components/sections/TargetAudience"));
const Transformation = dynamic(() => import("./components/sections/Transformation"));

const Testimonials = dynamic(() => import("./components/sections/Testimonials"));
const FAQ = dynamic(() => import("./components/sections/Faq"));
const BlogCarousel = dynamic(() => import("./components/sections/BlogCarousel"));

// Location suele ser muy pesado (mapas). Le bajamos la prioridad de carga al máximo.
const Location = dynamic(() => import("./components/sections/Location"), {
  loading: () => <div className="h-96 bg-stone-50 animate-pulse" />, // Placeholder mientras carga
});

// --- OPTIMIZACIÓN DE SERVIDOR (ISR) ---
// Reemplazamos 'force-dynamic'.
// Esto genera la página estática y la actualiza cada 3600 segundos (1 hora).
// Velocidad inmediata para el usuario, datos frescos cada hora.
export const revalidate = 3600; 

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