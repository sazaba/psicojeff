import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "Escríbeme",
    description: "Consulta horarios y condiciones por WhatsApp.",
  },
  {
    number: "2",
    title: "Valoremos la modalidad",
    description: "Revisamos si la atención online se ajusta a tu situación.",
  },
  {
    number: "3",
    title: "Coordinemos la sesión",
    description: "Acordamos el primer encuentro si decides comenzar.",
  },
];

export default function OnlineConsultationCta() {
  return (
    <section
      aria-labelledby="consulta-online-inicio"
      className="border-b border-teal-100/80 bg-[#f7faf8] px-4 py-14 sm:px-6 md:py-16"
    >
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#d6ece6] bg-[#f4fbf9] p-4 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.15)] sm:p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center lg:gap-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-800">
              Primer contacto · Psicoterapia online
            </p>
            <h2
              id="consulta-online-inicio"
              className="mt-3 font-serif text-3xl font-semibold leading-tight text-stone-900 md:text-4xl"
            >
              Conoce cómo empezar tu proceso
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-700">
              Atiendo a personas adultas por videollamada desde distintas ciudades de
              Colombia. Antes de iniciar podemos revisar tu motivo de consulta, las
              condiciones de atención y si esta modalidad es adecuada para ti.
            </p>

            <ol className="mt-7 grid gap-4 sm:grid-cols-3">
              {steps.map(({ number, title, description }) => (
                <li
                  key={number}
                  className="rounded-2xl border border-teal-100 bg-white/95 p-4 shadow-sm"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white">
                    {number}
                  </span>
                  <h3 className="mt-3 font-semibold text-stone-900">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-stone-700">
                    {description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <aside
            aria-label="Precio y condiciones de psicoterapia online"
            className="min-w-0 rounded-[1.75rem] border border-[#cbe5dd] bg-[#edf8f5] p-5 text-stone-900 shadow-sm sm:p-6 md:p-7"
          >
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-teal-800">
              Información para residentes en Colombia
            </p>

            <p className="mt-5 font-serif text-[clamp(1.8rem,6.5vw,2.5rem)] font-bold leading-tight tracking-tight text-[#123b3b]">
              $100.000 COP
            </p>
            <p className="mt-2 text-base font-medium text-stone-700">
              Tarifa publicada por sesión
            </p>

            <div className="mt-6 border-t border-[#c6e3da] pt-6">
              <p className="text-xl font-bold leading-snug text-[#123b3b]">
                60 a 90 minutos
              </p>
              <p className="mt-3 text-base leading-7 text-stone-700">
                Sesión individual para adultos, por videollamada. Confirma la
                tarifa vigente y disponibilidad antes de agendar.
              </p>
            </div>

            <a
              href="https://wa.link/2x3i8s"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#5eead4] px-5 py-3 text-center text-base font-bold leading-6 text-[#123b3b] transition-colors hover:bg-[#42d8c1] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-300"
            >
              Consultar disponibilidad por WhatsApp
            </a>
            <p className="mt-4 text-center text-sm leading-6 text-stone-700">
              Solicitar información no te compromete a iniciar un proceso.
            </p>
            <Link
              href="/sobre-jefferson-bastidas"
              className="mt-5 block text-center text-base font-semibold leading-6 text-teal-800 underline underline-offset-4 hover:text-teal-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              Conoce mi formación y trayectoria
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
