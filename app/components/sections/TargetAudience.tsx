import Link from "next/link";

const cards = [
  {
    title: "Adultos en etapa productiva",
    description:
      "Acompañamiento dirigido a personas adultas que trabajan, estudian o atraviesan exigencias propias de una etapa vital activa.",
    primary: true,
  },
  {
    title: "Desborde emocional",
    description:
      "Cuando las emociones se sienten difíciles de regular, aparece alerta constante o cuesta recuperar estabilidad.",
  },
  {
    title: "Búsqueda de sentido",
    description:
      "Cuando no basta con aliviar el malestar y necesitas comprender qué es importante para ti y cómo volver a avanzar.",
  },
  {
    title: "Espacio profesional",
    description:
      "Para quienes buscan un entorno confidencial, estructurado y personalizado para trabajar sobre patrones concretos.",
  },
  {
    title: "Cambio sostenible",
    description:
      "Cuando has probado distintas estrategias, pero todavía necesitas una forma más clara de organizar lo que estás viviendo.",
  },
];

function CardIcon({ index, primary }: { index: number; primary?: boolean }) {
  const stroke = primary ? "currentColor" : "currentColor";

  if (index === 0) {
    return (
      <svg viewBox="0 0 64 48" className="w-full h-full" fill="none" stroke={stroke} strokeWidth="2" aria-hidden="true">
        <path d="M8 40h48" opacity=".35" />
        <rect x="10" y="28" width="10" height="12" rx="2" />
        <rect x="27" y="20" width="10" height="20" rx="2" />
        <rect x="44" y="10" width="10" height="30" rx="2" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 64 48" className="w-full h-full" fill="none" stroke={stroke} strokeWidth="2" aria-hidden="true">
        <path d="M5 25c8-18 14 17 22-2s15 10 32 1" />
        <path d="M40 34h19" opacity=".45" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg viewBox="0 0 64 48" className="w-full h-full" fill="none" stroke={stroke} strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="36" r="4" />
        <circle cx="32" cy="12" r="4" />
        <circle cx="52" cy="36" r="4" />
        <path d="M15 33 29 16m6 0 14 17" />
      </svg>
    );
  }

  if (index === 3) {
    return (
      <svg viewBox="0 0 64 48" className="w-full h-full" fill="none" stroke={stroke} strokeWidth="2" aria-hidden="true">
        <path d="M17 24a15 15 0 0 1 30 0" />
        <path d="M10 24a22 22 0 0 1 44 0" opacity=".45" />
        <path d="M32 40V13" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 48" className="w-full h-full" fill="none" stroke={stroke} strokeWidth="2" aria-hidden="true">
      <path d="M7 34h17c12 0 12-20 30-20" />
      <path d="m48 8 6 6-6 6" />
      <path d="M42 5v37" strokeDasharray="4 4" opacity=".35" />
    </svg>
  );
}

export default function TargetAudience() {
  return (
    <section className="py-20 md:py-24 bg-[#fffcf8] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 max-w-2xl">
          <span className="block text-teal-600 font-bold tracking-widest text-xs uppercase mb-4">
            Perfil del consultante
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-800 leading-tight">
            ¿Es este espacio para ti?
          </h2>
          <p className="mt-5 text-stone-600 leading-7">
            Estos son algunos de los contextos en los que una consulta psicológica puede convertirse en un espacio de trabajo útil y estructurado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className={`rounded-3xl p-7 md:p-8 min-h-[245px] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 ${
                card.primary
                  ? "md:col-span-2 bg-teal-900 text-white shadow-xl shadow-teal-900/15"
                  : "bg-white border border-stone-100 text-stone-800 shadow-sm"
              }`}
            >
              <div className={`w-16 h-12 ${card.primary ? "text-teal-200" : "text-teal-600"}`}>
                <CardIcon index={index} primary={card.primary} />
              </div>
              <div className="mt-8">
                <h3 className={`text-xl font-bold font-serif mb-3 ${card.primary ? "text-white" : "text-stone-800"}`}>
                  {card.title}
                </h3>
                <p className={`text-sm leading-relaxed ${card.primary ? "text-teal-100" : "text-stone-600"}`}>
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 md:mt-14 p-8 md:p-10 rounded-3xl flex flex-col items-center text-center border border-teal-100 bg-gradient-to-b from-white to-teal-50/40 shadow-sm">
          <div className="max-w-xl">
            <h3 className="text-xl md:text-2xl font-serif text-teal-900 mb-3">
              ¿Te identificas con alguno de estos escenarios?
            </h3>
            <p className="text-stone-600 text-sm md:text-base mb-7 leading-relaxed">
              Puedes conocer primero los motivos de consulta, la modalidad online y el enfoque terapéutico antes de decidir si quieres solicitar información.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/ansiedad-manizales"
                className="rounded-full bg-teal-600 px-6 py-3 font-bold text-white hover:bg-teal-700 transition-colors"
              >
                Ver motivos de consulta
              </Link>
              <Link
                href="/terapias-contextuales-act"
                className="rounded-full border border-stone-200 bg-white px-6 py-3 font-bold text-stone-700 hover:border-teal-300 hover:text-teal-700 transition-colors"
              >
                Conocer el enfoque
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
