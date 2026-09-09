"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Loader2, MapPin, Navigation } from "lucide-react";

const LOCATION = {
  name: "Centro Médico Santa Elena",
  address: "Avenida Paralela # 49-46",
  description:
    "Atención presencial en un punto de fácil acceso en Manizales, con un espacio pensado para acompañar el proceso terapéutico con privacidad y tranquilidad.",
  mapSrc:
    "https://maps.google.com/maps?q=Centro+Medico+Santa+Elena,+Avenida+Paralela+%2349-46,+Manizales,+Caldas&z=17&output=embed",
  mapsUrl: "https://maps.app.goo.gl/ogSuojssZWGu4KhW9",
};

export default function Location() {
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden bg-[#fffcf8]"
      aria-labelledby="ubicacion-santa-elena"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[560px] rounded-3xl overflow-hidden shadow-2xl shadow-stone-200 bg-white">
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <span className="text-teal-600 font-bold tracking-widest text-xs uppercase mb-4 block">
            Atención presencial en Manizales
          </span>

          <h2 id="ubicacion-santa-elena" className="text-3xl md:text-5xl font-serif text-stone-800 leading-tight mb-10">
            Centro Médico Santa Elena
          </h2>

          <div className="space-y-7">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-teal-600 to-teal-800 text-white shadow-lg">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-800">{LOCATION.address}</h3>
                <p className="text-teal-600 font-medium text-sm">Manizales, Caldas, Colombia</p>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-100">
              <p className="text-stone-600 italic">“{LOCATION.description}”</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-2">
              <a
                href="https://wa.link/2x3i8s"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-stone-800 font-bold hover:text-teal-700 transition-colors w-fit"
              >
                <span>Solicitar información</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={LOCATION.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-teal-700 font-bold hover:text-teal-900 transition-colors w-fit"
              >
                <Navigation size={18} />
                <span>Cómo llegar</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] lg:h-auto bg-stone-100 overflow-hidden flex items-center justify-center">
          {shouldLoadMap ? (
            <iframe
              src={LOCATION.mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de ${LOCATION.name}`}
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-stone-200">
              <div className="flex flex-col items-center gap-2 text-stone-400">
                <Loader2 className="animate-spin" />
                <span className="text-xs">Cargando mapa...</span>
              </div>
            </div>
          )}

          <a
            href={LOCATION.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-xl border border-stone-200 flex items-center gap-3 z-30 hover:bg-white hover:scale-[1.02] transition-all"
          >
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-bold text-stone-700 uppercase tracking-wider">Ubicación exacta</span>
            <Navigation size={15} className="text-teal-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
