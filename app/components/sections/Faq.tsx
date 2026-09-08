import {
  BrainCircuit,
  Clock,
  MapPin,
  Sparkles,
  SunMedium,
  Target,
  UserCheck,
  Wallet,
} from "lucide-react";

const faqData = [
  {
    id: "profesional",
    question: "¿Quién es el profesional a cargo y cuál es su experiencia?",
    answerText:
      "El servicio es liderado por Jefferson Bastidas Mejía, psicólogo egresado de la Universidad de Manizales, con 20 años de experiencia laboral continua y formación complementaria en salud ocupacional, psicología clínica basada en evidencia, terapias complementarias y terapias de tercera generación.",
    icon: UserCheck,
    answer: (
      <>
        <p>
          El servicio es liderado por <strong>Jefferson Bastidas Mejía</strong>, psicólogo egresado de la Universidad de Manizales, con <strong>20 años de experiencia laboral continua</strong>.
        </p>
        <ul className="mt-4 list-disc pl-5 space-y-2">
          <li>Especialista en Salud Ocupacional — Universidad Libre.</li>
          <li>Diplomado en Psicología Clínica Basada en la Evidencia — Universidad Javeriana.</li>
          <li>Diplomado en Terapias Complementarias — Universidad del Rosario.</li>
          <li>Diplomado en problemáticas clínicas desde terapias de tercera generación — Universidad de la Sabana.</li>
        </ul>
      </>
    ),
  },
  {
    id: "diferencia",
    question: "¿Qué hace diferente este enfoque terapéutico?",
    answerText:
      "El proceso busca comprender cómo funcionan actualmente pensamientos, emociones y conductas, y trabajar con estrategias concretas y contextualizadas. La atención es personalizada y no se plantea como una consulta masiva.",
    icon: Sparkles,
    answer: (
      <p>
        El proceso busca comprender <strong>cómo funcionan actualmente</strong> pensamientos, emociones, conductas y contextos, para trabajar con estrategias concretas y personalizadas. La atención se plantea como un proceso individual, no como una consulta masiva.
      </p>
    ),
  },
  {
    id: "metodologia",
    question: "¿Qué metodologías se utilizan en las sesiones?",
    answerText:
      "El trabajo integra terapias contextuales de tercera generación, incluyendo Terapia de Aceptación y Compromiso (ACT) y recursos de Terapia Dialéctico Conductual (DBT), junto con la formación clínica del profesional.",
    icon: BrainCircuit,
    answer: (
      <>
        <p>El trabajo integra herramientas provenientes de las <strong>terapias contextuales de tercera generación</strong>, entre ellas:</p>
        <ul className="mt-4 list-disc pl-5 space-y-2">
          <li>Terapia de Aceptación y Compromiso (ACT).</li>
          <li>Recursos de Terapia Dialéctico Conductual (DBT).</li>
        </ul>
        <p className="mt-4">La selección de estrategias depende de la comprensión del caso y de los objetivos del proceso.</p>
      </>
    ),
  },
  {
    id: "publico",
    question: "¿A quién va dirigido este servicio?",
    answerText:
      "Está dirigido principalmente a personas adultas en etapa productiva que trabajan, estudian o atraviesan demandas importantes de la vida personal, laboral o académica.",
    icon: Target,
    answer: (
      <p>
        Está dirigido principalmente a <strong>personas adultas en etapa productiva</strong> que trabajan, estudian o atraviesan demandas importantes de la vida personal, laboral o académica.
      </p>
    ),
  },
  {
    id: "duracion",
    question: "¿Cuánto dura cada sesión?",
    answerText:
      "Cada encuentro tiene una duración aproximada de 60 a 90 minutos. La frecuencia se define según las necesidades y características del proceso.",
    icon: Clock,
    answer: (
      <p>
        Cada encuentro tiene una duración aproximada de <strong>60 a 90 minutos</strong>. La frecuencia se define según las necesidades y características del proceso.
      </p>
    ),
  },
  {
    id: "ubicacion",
    question: "¿Dónde se realiza la atención?",
    answerText:
      "La atención presencial está disponible en Manizales en la Sede Centro, Cra. 22 #24-24, y en el Centro Médico Santa Elena, Avenida Paralela #49-46. También existe modalidad online.",
    icon: MapPin,
    answer: (
      <>
        <p>La atención presencial está disponible en Manizales en dos ubicaciones:</p>
        <ul className="mt-4 space-y-2">
          <li><strong>Sede Centro:</strong> Cra. 22 #24-24.</li>
          <li><strong>Centro Médico Santa Elena:</strong> Avenida Paralela #49-46.</li>
        </ul>
        <p className="mt-4">También está disponible la <strong>modalidad online</strong>.</p>
      </>
    ),
  },
  {
    id: "costo",
    question: "¿Cuál es el valor de la consulta?",
    answerText:
      "La consulta tiene un valor de 100.000 COP para residentes en Colombia y 30 USD o EUR para residentes en el exterior. La información puede confirmarse antes de agendar.",
    icon: Wallet,
    answer: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-stone-200 bg-white p-4 text-center">
          <p className="text-xs uppercase tracking-wide text-stone-500">Residentes en Colombia</p>
          <p className="mt-1 text-2xl font-bold text-stone-800">$100.000 COP</p>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white p-4 text-center">
          <p className="text-xs uppercase tracking-wide text-stone-500">Residentes en el exterior</p>
          <p className="mt-1 text-2xl font-bold text-stone-800">$30 USD/EUR</p>
        </div>
      </div>
    ),
  },
  {
    id: "resultados",
    question: "¿Qué puedo esperar del proceso?",
    answerText:
      "El proceso busca favorecer claridad, regulación emocional y acciones más coherentes con los valores personales. Los resultados varían entre personas y no pueden garantizarse de antemano.",
    icon: SunMedium,
    answer: (
      <p>
        El proceso busca favorecer <strong>claridad, regulación emocional y acciones más coherentes con los valores personales</strong>. La evolución depende de múltiples factores y los resultados no pueden garantizarse de antemano.
      </p>
    ),
  },
];

export default function FAQ() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answerText,
      },
    })),
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold tracking-widest text-xs uppercase mb-3 block">
            Resuelve tus dudas
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 leading-tight mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-stone-500 text-lg font-light max-w-2xl mx-auto">
            Información práctica sobre el profesional, las sesiones, la modalidad de atención y el enfoque terapéutico.
          </p>
        </div>

        <div className="grid gap-4">
          {faqData.map((item) => {
            const Icon = item.icon;

            return (
              <details
                key={item.id}
                className="group rounded-2xl border border-stone-200 bg-white shadow-sm open:border-teal-200 open:shadow-md"
              >
                <summary className="cursor-pointer list-none p-6 md:p-8 flex items-center gap-5 [&::-webkit-details-marker]:hidden">
                  <span className="shrink-0 w-11 h-11 rounded-xl bg-stone-100 text-teal-700 flex items-center justify-center">
                    <Icon size={22} />
                  </span>
                  <h3 className="flex-1 font-serif text-lg md:text-xl font-medium text-stone-800 text-left">
                    {item.question}
                  </h3>
                  <span className="text-2xl text-stone-400 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <div className="px-6 pb-8 md:px-24 md:pb-10 text-stone-600 leading-7 md:leading-8 border-t border-stone-100 pt-6">
                  {item.answer}
                </div>
              </details>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <p className="text-stone-500 mb-4">¿Tienes una pregunta específica antes de agendar?</p>
          <a
            href="https://wa.link/2x3i8s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-stone-800 text-white font-bold hover:bg-stone-700 transition-colors shadow-lg"
          >
            Solicitar información
          </a>
        </div>
      </div>
    </section>
  );
}
