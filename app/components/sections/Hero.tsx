import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Building2 } from "lucide-react";
import Headerpsicojeff from "@/app/assets/Headerpsicojeff.webp";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 md:pt-20 overflow-hidden w-full">
      <div className="absolute top-1/2 right-0 md:right-20 -translate-y-1/2 w-[80vw] md:w-[600px] h-[600px] bg-teal-50/40 rounded-full blur-[120px] -z-10 pointer-events-none transform-gpu" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative order-last md:order-first flex justify-center md:justify-end">
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-teal-200/30 rounded-full blur-[60px] -z-10 transform-gpu" />

            <div className="relative w-full max-w-[500px]">
              <Image
                src={Headerpsicojeff}
                alt="Psicólogo Jefferson Bastidas - Terapia Online y Presencial"
                className="w-full h-auto object-contain drop-shadow-2xl z-10 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
                priority
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              />
            </div>
          </div>

          <div className="text-center md:text-left z-10 relative">
            <div className="inline-block mb-8 mt-4 md:mt-0 px-5 py-2 rounded-full border border-teal-100 bg-white/50 backdrop-blur-sm">
              <span className="text-xs md:text-sm font-bold text-teal-700 tracking-widest uppercase font-sans">
                Psicólogo en Manizales y Online
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-stone-800 mb-8 leading-[1.1] font-serif">
              Psicólogo en Manizales y <br className="hidden lg:block" />
              <span className="relative inline-block text-teal-700/90 italic mt-2 md:mt-0">
                psicoterapia online para adultos
                <svg
                  className="absolute w-full h-3 md:h-4 -bottom-1 left-0 text-teal-200 -z-10 opacity-70"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-sans font-medium">
              Un espacio terapéutico de alta precisión para trabajar bienestar mental con significado, propósito y herramientas aplicables a tu vida cotidiana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <a
                href="https://wa.link/2x3i8s"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg transition-all hover:-translate-y-1 shadow-lg shadow-teal-600/20 w-full sm:w-auto text-center cursor-pointer"
              >
                Solicitar Información
              </a>

              <a
                href="#servicios"
                className="cursor-pointer px-8 py-4 rounded-full border border-stone-300 hover:border-teal-400 bg-transparent text-stone-600 hover:text-teal-700 font-medium transition-all w-full sm:w-auto text-center"
              >
                Explorar acompañamiento
              </a>
            </div>

            <div className="mt-6 flex justify-center md:justify-start">
              <Link
                href="/riesgo-psicosocial-empresas"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-stone-200/90 bg-white/70 px-4 py-3 text-sm font-semibold text-stone-600 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-teal-300 hover:bg-white hover:text-teal-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60"
              >
                <Building2 size={17} className="shrink-0 text-teal-700" />
                <span className="text-left">
                  ¿Representas una empresa? <span className="font-bold text-stone-800 group-hover:text-teal-800">Ver servicios de riesgo psicosocial</span>
                </span>
                <ArrowUpRight size={16} className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
