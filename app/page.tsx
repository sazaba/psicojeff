import Navbar from "@/app/components/ui/Navbar"; // Asegúrate que el Navbar también sea glassmorphism
import Hero from "@/app/components/sections/Hero"; 
import PainPoints from "@/app/components/sections/PainPoints"; // Antes "Motivos"
import ProfessionalProfile from "@/app/components/sections/ProfessionalProfile"; // Antes "SobreMi"
import ValueProposition from "@/app/components/sections/ValueProposition"; // Antes "Servicios" (Ahora diferenciación)
import ProcessAndLocation from "@/app/components/sections/ProcessAndLocation"; // Antes "ComoTrabajo"
import FinalActions from "@/app/components/sections/FinalActions"; // Combina Agenda, FAQ y Contacto
import Footer from "@/app/components/sections/Footer";
import TargetAudience from "@/app/components/sections/TargetAudience";
import Transformation from "./components/sections/Transformation";
import Location from "./components/sections/Location";

export default function Home() {
  return (
    <div className="relative flex flex-col gap-0"> 
      {/* El Navbar debería ser fixed/sticky */}
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <TargetAudience/>
        <ProfessionalProfile/>
        <ValueProposition/>
        <Transformation/>
        <Location/>
      </main>
      <Footer />
    </div>
  );
}


  /* 
        <ProfessionalProfile />
        <ValueProposition />
        <ProcessAndLocation />
        <FinalActions /> */