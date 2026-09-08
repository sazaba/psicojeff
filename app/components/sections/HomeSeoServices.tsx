import Link from "next/link";

const pathways = [
  {
    href: "/psicoterapia-online",
    title: "Psicoterapia online",
    description:
      "Acompañamiento psicológico para adultos que necesitan flexibilidad geográfica y una atención estructurada.",
  },
  {
    href: "/ansiedad-manizales",
    title: "Ansiedad en Manizales",
    description:
      "Un espacio para trabajar preocupación, alerta constante y patrones que interfieren con la vida cotidiana.",
  },
  {
    href: "/estres-burnout-manizales",
    title: "Estrés laboral y burnout",
    description:
      "Acompañamiento para comprender la relación entre exigencia, trabajo, agotamiento y bienestar emocional.",
  },
  {
    href: "/insomnio-manizales",
    title: "Insomnio y bienestar emocional",
    description:
      "Abordaje psicológico de los factores emocionales, cognitivos y conductuales que pueden acompañar el mal descanso.",
  },
  {
    href: "/terapias-contextuales-act",
    title: "Terapias contextuales y ACT",
    description:
      "Conoce el enfoque basado en Terapia de Aceptación y Compromiso y otras terapias de tercera generación.",
  },
  {
    href: "/sobre-jefferson-bastidas",
    title: "Perfil profesional",
    description:
      "Formación, experiencia y enfoque clínico de Jefferson Bastidas Mejía, psicólogo en Manizales.",
  },
];

export default function HomeSeoServices() {
  return (
    <section id="servicios" className="py-20 md:py-24 px-6 bg-white border-y border-stone-100">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <span className="block text-teal-600 font-bold tracking-widest text-xs uppercase mb-4">
            Rutas de acompañamiento
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
            Encuentra el tipo de acompañamiento que estás buscando
          </h2>
          <p className="mt-5 text-stone-600 text-lg leading-relaxed">
            Explora páginas específicas sobre modalidad de atención, motivos de consulta y el enfoque terapéutico para entender mejor qué opción puede ajustarse a tu momento actual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pathways.map((pathway) => (
            <Link
              key={pathway.href}
              href={pathway.href}
              className="group rounded-3xl border border-stone-200 bg-[#fffcf8] p-7 hover:border-teal-300 hover:shadow-lg transition-all"
            >
              <h3 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-teal-700 transition-colors">
                {pathway.title}
              </h3>
              <p className="mt-4 text-stone-600 leading-7">
                {pathway.description}
              </p>
              <span className="mt-6 inline-flex text-sm font-bold text-teal-700">
                Conocer más →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
