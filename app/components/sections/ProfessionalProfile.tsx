import Image from "next/image";
import Link from "next/link";
import profesionalpsicojeff from "@/app/assets/profesionalpsicojeff.webp";
import ProfessionalCredentialsClient, {
  type CredentialItem,
} from "@/app/components/sections/ProfessionalCredentialsClient";

const credentials: CredentialItem[] = [
  {
    icon: "evidence",
    title: "Evidencia Científica",
    institution: "Universidad Javeriana",
    text: "Diplomado en Psicología Clínica Basada en la Evidencia. Formación orientada a integrar criterio clínico y evidencia disponible.",
    tone: "bg-teal-50 text-teal-800",
    pdfUrl: "/diplomas/diplomado-javeriana.pdf",
  },
  {
    icon: "holistic",
    title: "Visión Integral",
    institution: "Universidad del Rosario",
    text: "Diplomado en Terapias Complementarias, integrado dentro de un marco profesional y contextual del bienestar.",
    tone: "bg-stone-50 text-stone-700",
    pdfUrl: "/diplomas/diplomado-rosario.pdf",
  },
  {
    icon: "contextual",
    title: "Terapias Contextuales",
    institution: "Universidad de la Sabana",
    text: "Diplomado en abordaje de problemáticas clínicas desde terapias de tercera generación.",
    tone: "bg-blue-50 text-blue-800",
    pdfUrl: "/diplomas/diplomado-sabana.pdf",
  },
];

export default function ProfessionalProfile() {
  return (
    <section id="sobre-mi" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <div className="relative w-full max-w-md mx-auto lg:max-w-full">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] group shadow-xl">
            <Image
              src={profesionalpsicojeff}
              alt="Jefferson Bastidas Mejía, psicólogo en Manizales"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 560px"
              quality={82}
              placeholder="blur"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent opacity-50 pointer-events-none" />
          </div>
        </div>

        <div className="mt-12 lg:mt-0">
          <span className="inline-block py-1 px-3 rounded-full bg-teal-50 border border-teal-100 text-teal-700 font-bold tracking-widest text-[10px] uppercase mb-4">
            Perfil Profesional
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-2">
            Jefferson Bastidas Mejía
          </h2>
          <p className="text-lg md:text-xl text-stone-500 font-sans font-light mb-8 flex items-center gap-2">
            <span className="w-8 h-px bg-teal-500 inline-block" aria-hidden="true" />
            Psicólogo & Especialista en Salud Ocupacional
          </p>

          <div className="prose prose-stone text-stone-600 mb-10 leading-relaxed text-sm md:text-base">
            <p className="mb-4">
              Egresado de la <strong>Universidad de Manizales</strong>, con dos décadas de experiencia laboral continua y formación complementaria en psicología clínica basada en evidencia, terapias complementarias y terapias contextuales.
            </p>
            <p>
              Como Especialista en Salud Ocupacional de la <strong>Universidad Libre</strong>, integra también la relación entre bienestar psicológico, vida productiva, entorno laboral y contexto social.
            </p>
          </div>

          <ProfessionalCredentialsClient credentials={credentials} />

          <div className="mt-8">
            <Link
              href="/sobre-jefferson-bastidas"
              className="inline-flex items-center font-bold text-teal-700 hover:text-teal-800 transition-colors"
            >
              Ver perfil profesional completo →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
