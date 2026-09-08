import Link from "next/link";
import { ArrowUpRight, Building2, ClipboardCheck, GraduationCap, HeartPulse } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Batería de riesgo psicosocial",
    text: "Aplicación y acompañamiento técnico para la evaluación de factores de riesgo psicosocial en el trabajo.",
  },
  {
    icon: GraduationCap,
    title: "Capacitaciones para equipos",
    text: "Espacios formativos sobre riesgo psicosocial, prevención, autocuidado, manejo del estrés y bienestar emocional.",
  },
  {
    icon: HeartPulse,
    title: "Promoción y prevención",
    text: "Acciones orientadas a fortalecer prácticas de cuidado y gestión psicosocial dentro de las organizaciones.",
  },
];

export default function HomeBusinessServices() {
  return (
    <section
      className="relative overflow-hidden bg-[#f4f1eb] px-4 py-16 sm:px-6 sm:py-20 md:py-24"
      aria-labelledby="servicios-empresas"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_85%_0%,rgba(13,148,136,0.12),transparent_45%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] border border-stone-800/70 bg-[linear-gradient(145deg,#11100f_0%,#171513_100%)] text-white shadow-[0_30px_90px_-42px_rgba(28,25,23,0.75)] sm:rounded-[2rem]">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-w-0 overflow-hidden border-b border-white/10 p-6 sm:p-8 md:p-10 lg:border-b-0 lg:border-r lg:p-14">
            <div
              className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-teal-200 sm:text-xs sm:tracking-[0.18em]">
                <Building2 size={16} className="shrink-0" />
                Servicios para empresas
              </span>

              <h2
                id="servicios-empresas"
                className="mt-5 max-w-xl break-words font-serif text-[2rem] leading-[1.08] text-white sm:text-4xl md:text-5xl"
              >
                Gestión del riesgo psicosocial y bienestar emocional en el trabajo
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-stone-200 sm:mt-6 sm:text-lg sm:leading-8">
                Acompañamiento para organizaciones que necesitan evaluar factores de riesgo psicosocial, fortalecer acciones de prevención y desarrollar capacidades de cuidado emocional en sus equipos.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-stone-400 sm:mt-5">
                El servicio se estructura con referencia a la Resolución 2646 de 2008 y la Resolución 2764 de 2022, dentro del alcance aplicable a la gestión de los factores de riesgo psicosocial en Colombia.
              </p>

              <Link
                href="/riesgo-psicosocial-empresas"
                className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-teal-300 px-5 py-3.5 text-center text-sm font-bold text-stone-950 shadow-lg shadow-teal-950/20 transition-all hover:-translate-y-0.5 hover:bg-teal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 sm:mt-8 sm:w-auto sm:px-6 sm:text-base"
              >
                Ver servicio para empresas
                <ArrowUpRight size={18} className="shrink-0" />
              </Link>
            </div>
          </div>

          <div className="min-w-0 bg-[linear-gradient(145deg,#173d38_0%,#102c29_100%)] p-3 sm:p-5 md:p-7 lg:p-8">
            <div className="h-full overflow-hidden rounded-[1.35rem] border border-white/15 bg-white/[0.035] shadow-inner sm:rounded-[1.6rem]">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="grid min-w-0 grid-cols-[auto_1fr] gap-4 border-b border-white/10 p-5 last:border-b-0 sm:gap-5 sm:p-6 md:p-7"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-teal-100/15 bg-teal-200/10 text-teal-200 sm:h-12 sm:w-12">
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="break-words font-serif text-xl leading-tight text-white sm:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-stone-200 sm:text-base sm:leading-7">
                        {service.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
