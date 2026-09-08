import Link from "next/link";

const pathways = [
  { href: "/psicoterapia-online", label: "Psicoterapia online" },
  { href: "/ansiedad-manizales", label: "Ansiedad" },
  { href: "/estres-burnout-manizales", label: "Estrés y burnout" },
  { href: "/insomnio-manizales", label: "Insomnio" },
  { href: "/terapias-contextuales-act", label: "Terapias contextuales y ACT" },
  { href: "/sobre-jefferson-bastidas", label: "Perfil profesional" },
];

export default function HomeSeoServices() {
  return (
    <section id="servicios" className="px-6 py-12 md:py-14 bg-white border-y border-stone-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-12">
        <div className="lg:max-w-md shrink-0">
          <span className="block text-teal-600 font-bold tracking-widest text-xs uppercase mb-3">
            Explora según lo que necesitas
          </span>
          <h2 className="text-2xl md:text-3xl font-serif text-stone-900 leading-tight">
            Información útil sin repetir el recorrido visual
          </h2>
          <p className="mt-3 text-stone-600 leading-7">
            Accede directamente a modalidad de atención, motivos de consulta, enfoque terapéutico y perfil profesional.
          </p>
        </div>

        <nav aria-label="Rutas de acompañamiento" className="flex flex-wrap gap-3">
          {pathways.map((pathway) => (
            <Link
              key={pathway.href}
              href={pathway.href}
              className="inline-flex items-center rounded-full border border-stone-200 bg-[#fffcf8] px-5 py-3 text-sm font-semibold text-stone-700 hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50/50 transition-colors"
            >
              {pathway.label}
              <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
