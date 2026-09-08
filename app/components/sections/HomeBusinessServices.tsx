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
    <section className="px-6 py-20 md:py-24 bg-[#f4f1eb]" aria-labelledby="servicios-empresas">
      <div className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden bg-stone-950 text-white shadow-2xl shadow-stone-300/40">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-8 md:p-12 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden">
            <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" aria-hidden="true" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-teal-300 font-bold tracking-[0.18em] text-xs uppercase mb-5">
                <Building2 size={16} />
                Servicios para empresas
              </span>
              <h2 id="servicios-empresas" className="text-3xl md:text-5xl font-serif leading-[1.08] max-w-xl">
                Gestión del riesgo psicosocial y bienestar emocional en el trabajo
              </h2>
              <p className="mt-6 text-stone-300 text-lg leading-8 max-w-xl">
                Acompañamiento para organizaciones que necesitan evaluar factores de riesgo psicosocial, fortalecer acciones de prevención y desarrollar capacidades de cuidado emocional en sus equipos.
              </p>
              <p className="mt-5 text-sm leading-7 text-stone-400 max-w-xl">
                El servicio se estructura con referencia a la Resolución 2646 de 2008 y la Resolución 2764 de 2022, dentro del alcance aplicable a la gestión de los factores de riesgo psicosocial en Colombia.
              </p>

              <Link
                href="/riesgo-psicosocial-empresas"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-teal-400 px-6 py-3.5 font-bold text-stone-950 hover:bg-teal-300 transition-colors"
              >
                Ver servicio para empresas
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          <div className="p-5 md:p-7 lg:p-8 bg-[#132b28]">
            <div className="h-full rounded-[1.6rem] border border-white/10 bg-white/[0.03] overflow-hidden">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="grid grid-cols-[auto_1fr] gap-5 p-6 md:p-7 border-b border-white/10 last:border-b-0"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-teal-300/10 text-teal-300 flex items-center justify-center border border-teal-200/10">
                      <Icon size={23} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-white">{service.title}</h3>
                      <p className="mt-2 text-stone-300/80 leading-7">{service.text}</p>
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
