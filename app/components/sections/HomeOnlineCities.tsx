import Link from "next/link";
import { ArrowRight, MapPin, Video } from "lucide-react";
import { cityLandings, onlineCityOrder } from "@/lib/seo/onlineCityLandings";

type HomeOnlineCitiesProps = {
  showExploreLink?: boolean;
};

export default function HomeOnlineCities({ showExploreLink = true }: HomeOnlineCitiesProps) {
  return (
    <section id="ciudades-online" aria-labelledby="online-cities-heading" className="relative isolate overflow-hidden border-y border-teal-100/80 bg-gradient-to-b from-[#f6fcf9] via-white to-[#fffdfa] px-5 py-16 sm:px-8 sm:py-20">
      <div className="pointer-events-none absolute -left-24 top-12 -z-10 h-56 w-56 rounded-full bg-teal-100/50 blur-3xl" aria-hidden="true" />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-800 shadow-sm">
            <Video size={15} aria-hidden="true" /> Psicoterapia 100 % online
          </span>
          <h2 id="online-cities-heading" className="mt-6 font-serif text-3xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
            Psicoterapia virtual desde tu ciudad
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
            Atención online para adultos en Pereira, Armenia, Medellín, Bogotá y otras ciudades de Colombia. El consultorio presencial de Jefferson está en Manizales.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {onlineCityOrder.map((key) => {
            const city = cityLandings[key];
            return (
              <div
                key={key}
                className="relative flex min-h-[158px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-teal-100 bg-white/95 p-6 shadow-[0_16px_46px_-34px_rgba(15,23,42,0.32)]"
              >
                <div className="pointer-events-none absolute -right-8 -top-12 h-36 w-36 rounded-full bg-teal-50 opacity-70 blur-2xl" aria-hidden="true" />
                <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                  <MapPin size={21} aria-hidden="true" />
                </span>
                <div className="relative mt-5">
                  <h3 className="font-serif text-[1.55rem] font-semibold leading-tight text-stone-900">
                    {city.name}
                  </h3>
                  <p className="mt-1 text-sm text-stone-500">{city.department} · Atención por videollamada</p>
                  <p className="mt-3 text-xs font-semibold text-teal-800">Disponible en modalidad virtual</p>
                </div>
              </div>
            );
          })}
        </div>
        {showExploreLink ? (
          <div className="mt-9 flex justify-center">
            <Link
              href="/psicoterapia-online"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-center text-sm font-bold text-white shadow-sm transition hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-200"
            >
              Conoce la psicoterapia online en Colombia <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        ) : (
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-7 text-stone-600">
            La modalidad online se ofrece desde estas y otras ciudades de Colombia. Los horarios, condiciones y pertinencia del acompañamiento se revisan de manera individual.
          </p>
        )}
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-6 text-stone-500">
          Manizales: atención presencial y online. Otras ciudades: atención exclusivamente virtual.
        </p>
      </div>
    </section>
  );
}
