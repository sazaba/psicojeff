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
      className="relative overflow-hidden border-y border-stone-100/80 bg-[#f7f8f6] px-4 py-16 sm:px-6 md:px-8 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(20,184,166,0.10),transparent_32%),radial-gradient(circle_at_88%_100%,rgba(13,148,136,0.08),transparent_30%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-stone-200/80 bg-white/80 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-teal-700 shadow-sm backdrop-blur-xl">
              Acompañamiento
            </span>
            <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-[1.03] tracking-[-0.025em] text-stone-950 sm:text-4xl md:text-5xl">
              Encuentra el espacio que mejor conecta contigo
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-stone-500 sm:text-base">
            Explora las principales rutas de acompañamiento, el enfoque terapéutico y el perfil profesional.
          </p>
        </div>

        <nav
          aria-label="Rutas de acompañamiento psicológico"
          className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {pathways.map((pathway, index) => (
            <Link
              key={pathway.href}
              href={pathway.href}
              className="group relative min-h-[220px] overflow-hidden rounded-[1.8rem] border border-white/90 bg-white/72 p-6 shadow-[0_18px_60px_-36px_rgba(15,23,42,0.38)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-200/80 hover:bg-white/92 hover:shadow-[0_26px_70px_-34px_rgba(13,148,136,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 sm:p-7"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.10),transparent_34%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex min-w-9 items-center justify-center rounded-full border border-stone-200/80 bg-white/85 px-3 py-1.5 text-[0.68rem] font-bold tracking-[0.14em] text-stone-400 shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    aria-hidden="true"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-stone-200/90 bg-white/90 text-lg text-stone-700 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-teal-600 group-hover:bg-teal-600 group-hover:text-white"
                  >
                    →
                  </span>
                </div>

                <div className="mt-auto pt-10">
                  <h3 className="font-serif text-[1.7rem] leading-[1.05] tracking-[-0.02em] text-stone-900 transition-colors duration-300 group-hover:text-teal-800 sm:text-[1.9rem]">
                    {pathway.label}
                  </h3>
                  <p className="mt-3 max-w-[34ch] text-sm leading-6 text-stone-500 sm:text-[0.96rem] sm:leading-7">
                    {pathway.detail}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-stone-500 transition-colors duration-300 group-hover:text-teal-700">
                    <span>Explorar</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
