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

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] border border-stone-200/90 shadow-[0_24px_70px_-36px_rgba(28,25,23,0.30)] sm:rounded-[2rem]">
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
    </section>
  );
}
