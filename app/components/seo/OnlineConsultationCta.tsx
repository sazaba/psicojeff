import Link from "next/link";

export default function OnlineConsultationCta() {
  return (
    <section
      aria-labelledby="consulta-online-inicio"
      className="border-b border-teal-100 bg-white px-6 py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-teal-100 bg-teal-50/60 p-6 shadow-sm md:p-10">
        <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-center">
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
              Atiendo a personas adultas por videollamada desde distintas ciudades de Colombia.
              Antes de iniciar podemos revisar tu motivo de consulta, las condiciones de atención
              y si esta modalidad es adecuada para ti.
            </p>
            <ol className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                ["1", "Escríbeme", "Consulta horarios y condiciones por WhatsApp."],
                ["2", "Valoremos la modalidad", "Revisamos si la atención online se ajusta a tu situación."],
                ["3", "Coordinemos la sesión", "Acordamos el primer encuentro si decides comenzar."],
              ].map(([number, title, description]) => (
                <li key={number} className="rounded-2xl border border-teal-100 bg-white p-4">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-800 text-sm font-bold text-white">
                    {number}
                  </span>
                  <h3 className="mt-3 font-semibold text-stone-900">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-stone-600">{description}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside className="rounded-2xl bg-stone-900 p-6 text-white md:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-teal-300">
              Información para residentes en Colombia
            </p>
            <p className="mt-4 font-serif text-4xl font-semibold">$100.000 COP</p>
            <p className="mt-1 text-sm text-stone-300">Tarifa publicada por sesión</p>
            <div className="mt-5 border-t border-stone-700 pt-5">
              <p className="font-semibold">60 a 90 minutos</p>
              <p className="mt-1 text-sm leading-6 text-stone-300">
                Sesión individual para adultos, por videollamada. Confirma la tarifa
                vigente y disponibilidad antes de agendar.
              </p>
            </div>
            <a
              href="https://wa.link/2x3i8s"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-teal-500 px-5 py-3 text-center text-sm font-bold text-stone-950 transition hover:bg-teal-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-200"
            >
              Consultar disponibilidad por WhatsApp
            </a>
            <p className="mt-3 text-center text-xs leading-5 text-stone-300">
              Solicitar información no te compromete a iniciar un proceso.
            </p>
            <Link
              href="/sobre-jefferson-bastidas"
              className="mt-4 block text-center text-sm font-semibold text-teal-200 underline underline-offset-4 hover:text-white"
            >
              Conoce mi formación y trayectoria
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
