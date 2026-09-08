import Image from "next/image";
import Link from "next/link";
import imageJeff from "@/app/assets/Jeffseo.webp";

interface AuthorTrustCardProps {
  compact?: boolean;
}

export default function AuthorTrustCard({ compact = false }: AuthorTrustCardProps) {
  return (
    <aside
      className={`rounded-3xl border border-stone-200 bg-stone-50/70 ${
        compact ? "p-6" : "p-7 md:p-8"
      }`}
      aria-label="Sobre el autor"
    >
      <div className="flex flex-col sm:flex-row gap-5 items-start">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-stone-200">
          <Image
            src={imageJeff}
            alt="Jefferson Bastidas Mejía, psicólogo"
            fill
            className="object-cover"
            sizes="80px"
            quality={75}
          />
        </div>

        <div className="min-w-0">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
            Autor y profesional responsable
          </span>
          <h2 className="mt-2 font-serif text-2xl text-stone-900">
            Jefferson Bastidas Mejía
          </h2>
          <p className="mt-2 text-sm md:text-base leading-7 text-stone-600">
            Psicólogo egresado de la Universidad de Manizales, Especialista en Salud Ocupacional y con 20 años de experiencia laboral continua. Cuenta con formación complementaria en psicología clínica basada en evidencia, terapias complementarias y terapias contextuales de tercera generación.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold">
            <Link
              href="/sobre-jefferson-bastidas"
              className="text-teal-700 hover:text-teal-800 transition-colors"
            >
              Ver perfil y formación →
            </Link>
            <Link
              href="/terapias-contextuales-act"
              className="text-stone-600 hover:text-teal-700 transition-colors"
            >
              Conocer el enfoque
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
