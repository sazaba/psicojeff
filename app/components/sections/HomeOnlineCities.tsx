import Link from "next/link";
import { ArrowUpRight, MapPin, Video } from "lucide-react";
import { cityLandings, onlineCityOrder } from "@/lib/seo/onlineCityLandings";

export default function HomeOnlineCities() {
  return (
    <section id="ciudades-online" aria-labelledby="online-cities-heading" className="relative isolate overflow-hidden border-y border-teal-100/80 bg-gradient-to-b from-[#f6fcf9] via-white to-[#fffdfa] px-5 py-16 sm:px-8 sm:py-20">
      <div className="pointer-events-none absolute -left-24 top-12 -z-10 h-56 w-56 rounded-full bg-teal-100/50 blur-3xl" aria-hidden="true" />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-800 shadow-sm">
            <Video size={15} aria-hidden="true" />
            Psicoterapia 100 % online
          </span>
          <h2 id="online-cities-heading" className="mt-6 font-serif text-3xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
            Atención psicológica online por ciudad
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
            Si vives en Pereira, Armenia, Medellín o Bogotá, conoce cómo funciona la psicoterapia online para adultos y consulta disponibilidad sin desplazarte a Manizales.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {onlineCityOrder.map((key) => {
            const city = cityLandings[key];
            return (
              <Link
                key={key}
                href={city.path}
                aria-label={`Conocer psicoterapia online en ${city.name}`}
                className="group relative flex min-h-[162px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-teal-100 bg-white/95 p-6 shadow-[0_16px_46px_-34px_rgba(15,23,42,0.32)] transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-[0_22px_54px_-30px_rgba(15,118,110,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
              >
                <div className="pointer-events-none absolute -right-8 -top-12 h-36 w-36 rounded-full bg-teal-50 opacity-70 blur-2xl transition group-hover:bg-teal-100 motion-reduce:transition-none" aria-hidden="true" />
                <div className="relative flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                    <MapPin size={21} aria-hidden="true" />
                  </span>
                  <ArrowUpRight size={20} className="text-teal-700 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" aria-hidden="true" />
                </div>
                <div className="relative mt-5">
                  <h3 className="font-serif text-[1.55rem] font-semibold leading-tight text-stone-900 group-hover:text-teal-800">
                    {city.name}
                  </h3>
                  <p className="mt-1 text-sm text-stone-500">{city.department} · Atención por videollamada</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-teal-800">
                    Ver psicoterapia online <ArrowUpRight size={15} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <p className="mx-auto mt-7 max-w-2xl text-center text-xs leading-6 text-stone-500">
          La atención en estas ciudades es exclusivamente online. El consultorio presencial se encuentra en Manizales.
        </p>
      </div>
    </section>
  );
}
