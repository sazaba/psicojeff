"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Flame,
  Moon,
  Orbit,
  UserRound,
  Video,
  Waves,
  Sparkles,
} from "lucide-react";

const pathways = [
  {
    href: "/psicoterapia-online",
    label: "Psicoterapia online",
    eyebrow: "Atención a distancia",
    description: "Un espacio para conversar desde el Eje Cafetero o el exterior.",
    icon: Video,
  },
  {
    href: "/motivos-de-consulta",
    label: "Motivos de consulta",
    eyebrow: "Lo que estás viviendo",
    description: "Ansiedad, depresión, estrés y otros motivos para buscar apoyo.",
    icon: Waves,
  },
  {
    href: "/estres-burnout-manizales",
    label: "Estrés y burnout",
    eyebrow: "Bienestar y trabajo",
    description: "Explora el agotamiento y las exigencias de la vida cotidiana.",
    icon: Flame,
  },
  {
    href: "/insomnio-manizales",
    label: "Insomnio",
    eyebrow: "Descanso y bienestar",
    description: "Conoce el abordaje de las dificultades para descansar.",
    icon: Moon,
  },
  {
    href: "/terapias-contextuales-act",
    label: "Terapias contextuales",
    eyebrow: "Enfoque terapéutico",
    description: "Descubre ACT y el trabajo con lo que es importante para ti.",
    icon: Orbit,
  },
  {
    href: "/sobre-jefferson-bastidas",
    label: "Perfil profesional",
    eyebrow: "Conoce a Jefferson",
    description: "Formación, trayectoria y la manera de orientar sus procesos.",
    icon: UserRound,
  },
];

export default function HomeSeoServices() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-heading"
      className="relative isolate overflow-hidden border-y border-stone-200/70 bg-[#f7f8f6] px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-20 -z-10 h-96 w-96 rounded-full bg-teal-100/60 blur-[100px]"
      />
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate grid items-center gap-7 overflow-hidden rounded-[2rem] border border-white/90 bg-gradient-to-br from-white via-[#f0fbf8] to-[#ecf8f7] px-6 py-9 shadow-[0_22px_90px_-58px_rgba(15,23,42,0.35)] sm:rounded-[2.8rem] sm:px-10 sm:py-12 lg:grid-cols-[1.35fr_0.65fr] lg:px-14 lg:py-14">
          <div className="relative z-10 max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              <Sparkles size={16} aria-hidden="true" />
              Explora tu camino
            </p>
            <h2
              id="servicios-heading"
              className="mt-5 font-serif text-[clamp(2rem,4.4vw,3.65rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-stone-950"
            >
              Un espacio para lo que estás viviendo
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
              Encuentra información sobre los motivos de consulta, el enfoque
              terapéutico y las modalidades de atención de Jefferson Bastidas.
            </p>
          </div>

          <div
            className="pointer-events-none relative mx-auto hidden h-52 w-full max-w-[260px] items-center justify-center lg:flex"
            aria-hidden="true"
          >
            <div className="absolute h-48 w-48 rounded-full bg-teal-200/50 blur-3xl" />
            <motion.svg
              viewBox="0 0 260 220"
              className="relative h-full w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="130" cy="110" r="93" stroke="#99ded2" strokeOpacity=".55" />
              <circle cx="130" cy="110" r="72" stroke="#7bcbbd" strokeOpacity=".45" />
              <circle cx="130" cy="110" r="48" stroke="#0d9488" strokeOpacity=".22" />
              <motion.circle
                cx="130"
                cy="110"
                r="27"
                fill="#99f6e4"
                fillOpacity=".8"
                animate={reduceMotion ? undefined : { scale: [1, 1.09, 1], opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "130px 110px" }}
              />
              <circle cx="130" cy="110" r="12" fill="#0d9488" fillOpacity=".7" />
              <motion.circle
                cx="222"
                cy="110"
                r="5"
                fill="#0f766e"
                animate={reduceMotion ? undefined : { opacity: [0.45, 1, 0.45] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-7 lg:grid-cols-3 lg:gap-5">
          {pathways.map((pathway, index) => {
            const Icon = pathway.icon;
            return (
              <motion.div
                key={pathway.href}
                className="h-full min-w-0"
                initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.5, delay: index * 0.045, ease: "easeOut" }}
              >
                <Link
                  href={pathway.href}
                  className="group relative flex h-full min-h-[220px] min-w-0 flex-col overflow-hidden rounded-[1.7rem] border border-white/90 bg-white/95 p-6 shadow-[0_20px_65px_-45px_rgba(15,23,42,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_24px_75px_-40px_rgba(15,118,110,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none sm:min-h-[238px] sm:p-7"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-teal-50/80 blur-3xl transition-transform duration-500 group-hover:scale-125 motion-reduce:transform-none"
                  />
                  <div className="relative flex items-start justify-between gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-teal-100 bg-gradient-to-br from-[#edfaf7] to-white text-teal-800">
                      <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white text-teal-800 transition duration-300 group-hover:border-teal-700 group-hover:bg-teal-700 group-hover:text-white">
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </span>
                  </div>
                  <div className="relative mt-7">
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-teal-700">
                      {pathway.eyebrow}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-semibold leading-snug tracking-[-0.025em] text-stone-950 group-hover:text-teal-900">
                      {pathway.label}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-stone-600">
                      {pathway.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
