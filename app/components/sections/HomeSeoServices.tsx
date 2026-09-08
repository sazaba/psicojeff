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
    <section
      id="servicios"
      className="relative overflow-hidden border-y border-stone-100 bg-white px-4 py-14 sm:px-6 sm:py-16 md:py-20"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_15%_0%,rgba(20,184,166,0.10),transparent_48%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] border border-stone-200/90 bg-[#fffcf8] shadow-[0_24px_70px_-36px_rgba(28,25,23,0.30)] sm:rounded-[2rem]">
        <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
          <div className="relative min-w-0 p-6 sm:p-8 md:p-10 lg:p-14">
            <div
              className="absolute left-0 top-10 h-20 w-1 rounded-r-full bg-teal-600 sm:top-12"
              aria-hidden="true"
            />

            <span className="block text-[0.7rem] font-bold uppercase tracking-[0.16em] text-teal-800 sm:text-xs sm:tracking-[0.18em]">
              Empieza por lo que hoy te está pesando
            </span>

            <h2 className="mt-4 max-w-xl font-serif text-[2rem] leading-[1.08] text-stone-950 sm:text-4xl md:text-5xl">
              No necesitas tenerlo todo claro para empezar a buscar ayuda
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-stone-700 sm:mt-6 sm:text-lg sm:leading-8">
              Tal vez lo llamas ansiedad, agotamiento, insomnio o simplemente sentir que algo ya no está funcionando como antes. Puedes empezar por la opción que más se parece a lo que estás viviendo hoy.
            </p>
          </div>

          <nav
            aria-label="Rutas de acompañamiento psicológico"
            className="min-w-0 bg-[linear-gradient(145deg,#123f3a_0%,#0d312e_100%)] p-3 sm:p-5 md:p-6 lg:p-8"
          >
            <div className="h-full overflow-hidden rounded-[1.35rem] border border-white/15 bg-white/[0.025] shadow-inner sm:rounded-[1.5rem]">
              {pathways.map((pathway) => (
                <Link
                  key={pathway.href}
                  href={pathway.href}
                  className="group grid min-w-0 gap-3 border-b border-white/10 px-5 py-5 transition-all last:border-b-0 hover:bg-white/[0.08] focus-visible:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-300 sm:grid-cols-[1fr_auto] sm:items-center sm:px-6 md:px-7"
                >
                  <div className="min-w-0">
                    <span className="block break-words font-serif text-xl leading-tight text-white transition-colors group-hover:text-teal-100 sm:text-2xl">
                      {pathway.label}
                    </span>
                    <p className="mt-1.5 max-w-xl text-sm leading-6 text-stone-200 sm:text-[0.95rem]">
                      {pathway.detail}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-all group-hover:border-white group-hover:bg-white group-hover:text-[#123f3a] sm:h-10 sm:w-10"
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
