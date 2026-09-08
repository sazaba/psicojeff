import Link from "next/link";

const pathways = [
  {
    href: "/psicoterapia-online",
    label: "Psicoterapia online",
    detail: "Si estás fuera de Manizales o necesitas más flexibilidad.",
  },
  {
    href: "/ansiedad-manizales",
    label: "Ansiedad",
    detail: "Preocupación constante, alerta, sobrepensar o dificultad para desconectarte.",
  },
  {
    href: "/estres-burnout-manizales",
    label: "Estrés y burnout",
    detail: "Agotamiento, presión, irritabilidad o sensación de estar funcionando en automático.",
  },
  {
    href: "/insomnio-manizales",
    label: "Insomnio",
    detail: "Dormir mal, rumiar de noche o levantarte sin sentir descanso.",
  },
  {
    href: "/terapias-contextuales-act",
    label: "Terapias contextuales y ACT",
    detail: "Conoce el enfoque clínico que orienta buena parte del proceso terapéutico.",
  },
  {
    href: "/sobre-jefferson-bastidas",
    label: "Perfil profesional",
    detail: "Formación, experiencia y trayectoria de Jefferson Bastidas Mejía.",
  },
];

export default function HomeSeoServices() {
  return (
    <section id="servicios" className="px-6 py-16 md:py-20 bg-white border-y border-stone-100">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-[2rem] border border-stone-200 bg-[#fffcf8] shadow-sm">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative p-8 md:p-12 lg:p-14">
            <div className="absolute left-0 top-12 h-20 w-1 rounded-r-full bg-teal-600" aria-hidden="true" />
            <span className="block text-teal-700 font-bold tracking-[0.18em] text-xs uppercase mb-4">
              Empieza por lo que hoy te está pesando
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-[1.05] max-w-xl">
              No necesitas tenerlo todo claro para empezar a buscar ayuda
            </h2>
            <p className="mt-6 text-stone-600 text-lg leading-8 max-w-xl">
              Tal vez lo llamas ansiedad, agotamiento, insomnio o simplemente sentir que algo ya no está funcionando como antes. Puedes empezar por la opción que más se parece a lo que estás viviendo hoy.
            </p>
          </div>

          <nav
            aria-label="Rutas de acompañamiento psicológico"
            className="bg-[#124c46] p-4 md:p-6 lg:p-8"
          >
            <div className="rounded-[1.5rem] border border-white/10 overflow-hidden">
              {pathways.map((pathway, index) => (
                <Link
                  key={pathway.href}
                  href={pathway.href}
                  className="group grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center px-6 py-5 md:px-7 border-b border-white/10 last:border-b-0 hover:bg-white/[0.06] transition-colors"
                >
                  <div>
                    <span className="text-white font-serif text-xl md:text-2xl group-hover:text-teal-100 transition-colors">
                      {pathway.label}
                    </span>
                    <p className="mt-1.5 text-sm leading-6 text-teal-50/70 max-w-xl">
                      {pathway.detail}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white group-hover:bg-white group-hover:text-[#124c46] transition-all"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
