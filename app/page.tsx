import { prisma } from "@/lib/prisma"; // 1. Importamos Prisma
import Navbar from "@/app/components/ui/Navbar";
import Hero from "@/app/components/sections/Hero"; 
import PainPoints from "@/app/components/sections/PainPoints"; 
import ProfessionalProfile from "@/app/components/sections/ProfessionalProfile"; 
import ValueProposition from "@/app/components/sections/ValueProposition"; 
import TargetAudience from "@/app/components/sections/TargetAudience";
import Transformation from "./components/sections/Transformation";
import Location from "./components/sections/Location";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/Faq";
import Footer from "@/app/components/sections/Footer";
import BlogCarousel from "./components/sections/BlogCarousel";

// 2. Importante para que el cambio de número se vea al instante
export const dynamic = 'force-dynamic';

// 3. Función auxiliar para obtener el dato de forma segura
async function getReviewCount() {
  try {
    const config = await prisma.siteConfig.findFirst();
    // Si existe configuración usa el número, si no, usa 88 por defecto
    return config?.reviewCount ?? 88;
  } catch (error) {
    console.error("Error cargando reseñas:", error);
    return 88; // Fallback en caso de error de conexión
  }
}

// 4. Convertimos el componente en async
export default async function Home() {
  // 5. Obtenemos el dato antes de renderizar
  const reviewCount = await getReviewCount();

  return (
    <div className="relative flex flex-col gap-0 scroll-smooth"> 
      <Navbar />
      
      <main className="flex-1">
        {/* ID: inicio */}
        <section id="inicio">
          <Hero />
        </section>

        {/* ID: motivos */}
        <section id="motivos">
          <PainPoints />
        </section>

        <section>
           <TargetAudience/>
        </section>

        {/* ID: sobre-mi */}
        <section id="sobre-mi">
          <ProfessionalProfile/>
        </section>

        {/* ID: diferencial */}
        <section id="diferencial">
          <ValueProposition/>
        </section>

        {/* ID: proceso */}
        <section id="proceso">
          <Transformation/>
        </section>

        {/* ID: ubicacion */}
        <section id="ubicacion">
          <Location/>
        </section>

        <section id="testimonios">
          {/* 6. Pasamos el dato real al componente */}
          <Testimonials dbReviewCount={reviewCount} />
        </section>
        
        <section id="faq">
          <FAQ/>
        </section>

        <section id="blog">
          <BlogCarousel />
        </section>

      </main>
    
      {/* ID: contacto */}
      <section id="contacto">
        <Footer />
      </section>
    </div>
  );
}