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

export default function Home() {
  return (
    <div className="relative flex flex-col gap-0 scroll-smooth"> 
      <Navbar />
      
      <main className="flex-1">
        {/* ID: inicio */}
        <section id="inicio">
          <Hero />
        </section>

        {/* ID: motivos (Antes Problemas) */}
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

        {/* ID: diferencial (Tu propuesta de valor) */}
        <section id="diferencial">
          <ValueProposition/>
        </section>

        {/* ID: proceso (Transformación) */}
        <section id="proceso">
          <Transformation/>
        </section>

        {/* ID: ubicacion */}
        <section id="ubicacion">
          <Location/>
        </section>

        {/* <section id="testimonios">
          <Testimonials/>
        </section> */}
        
        <section id="faq">
          <FAQ/>
        </section>

<section id="blog">
  <BlogCarousel />
</section>

      </main>
    

      {/* ID: contacto (Para el botón del navbar y footer) */}
      <section id="contacto">
        <Footer />
      </section>
    </div>
  );
}