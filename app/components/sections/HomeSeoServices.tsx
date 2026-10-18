"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Flame,
  Moon,
  Orbit,
  Sparkles,
  UserRound,
  Video,
  Waves,
} from "lucide-react";

const pathways = [
  {
    href: "/psicoterapia-online",
    label: "Psicoterapia online",
    eyebrow: "Atención a distancia",
    description: "Conoce el acompañamiento virtual para adultos.",
    icon: Video,
    position: "xl:col-start-1 xl:row-start-1",
  },
  {
    href: "/motivos-de-consulta",
    label: "Motivos de consulta",
    eyebrow: "Lo que estás viviendo",
    description: "Ansiedad, depresión, estrés y otras inquietudes.",
    icon: Waves,
    position: "xl:col-start-3 xl:row-start-1",
  },
  {
    href: "/estres-burnout-manizales",
    label: "Estrés y burnout",
    eyebrow: "Bienestar y trabajo",
    description: "Explora la sobrecarga y el agotamiento emocional.",
    icon: Flame,
    position: "xl:col-start-1 xl:row-start-2",
  },
  {
    href: "/insomnio-manizales",
    label: "Insomnio",
    eyebrow: "Descanso y bienestar",
    description: "Comprende las dificultades para descansar.",
    icon: Moon,
    position: "xl:col-start-3 xl:row-start-2",
  },
  {
    href: "/terapias-contextuales-act",
    label: "Terapias contextuales",
    eyebrow: "Enfoque terapéutico",
    description: "Conoce ACT y las terapias de tercera generación.",
    icon: Orbit,
    position: "xl:col-start-1 xl:row-start-3",
  },
  {
    href: "/sobre-jefferson-bastidas",
    label: "Perfil profesional",
    eyebrow: "Conoce a Jefferson",
    description: "Descubre su formación, trayectoria y enfoque.",
    icon: UserRound,
    position: "xl:col-start-3 xl:row-start-3",
  },
] as const;

export default function HomeSeoServices() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = pathways[activeIndex];

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-heading"
      className="relative isolate overflow-hidden border-y border-stone-200/70 bg-[#f7faf8] px-4 py-16 sm:px-7 sm:py-20 lg:px-8 lg:py-24"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 -z-10 h-[380px] w-[380px] rounded-full bg-teal-100/65 blur-[95px]"
        animate={reduceMotion ? undefined : { x: [0, 42, 0], y: [0, 26, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-sky-100/65 blur-[100px]"
        animate={reduceMotion ? undefined : { x: [0, -32, 0], y: [0, -26, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200/80 bg-white/75 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-teal-800 shadow-sm backdrop-blur-xl">
              <Sparkles size={15} aria-hidden="true" />
              Explora tu camino
            </span>
            <h2
              id="servicios-heading"
              className="mt-6 font-serif text-[clamp(2.2rem,4.4vw,3.9rem)] font-semibold leading-[1.12] tracking-[-0.035em] text-stone-950"
            >
              Descubre un espacio para ti
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
              Acércate a los motivos de consulta, la psicoterapia online y los
              enfoques que pueden acompañarte. Elige lo que necesitas explorar.
            </p>
          </motion.div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[2.2rem] border border-white/95 bg-white/55 p-4 shadow-[0_40px_110px_-65px_rgba(15,23,42,0.3)] backdrop-blur-xl sm:p-7 xl:mt-12 xl:rounded-[3rem] xl:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(153,246,228,0.28),transparent_40%),radial-gradient(circle_at_14%_22%,rgba(255,255,255,0.8),transparent_38%),radial-gradient(circle_at_87%_86%,rgba(191,219,254,0.22),transparent_38%)]"
          />

          <div className="relative grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(235px,300px)_minmax(0,1fr)] xl:grid-rows-3 xl:gap-x-7 xl:gap-y-7">
            <div className="relative order-first col-span-full flex min-h-[310px] min-w-0 items-center justify-center overflow-hidden sm:min-h-[335px] xl:order-none xl:col-span-1 xl:col-start-2 xl:row-start-1 xl:row-span-3 xl:min-h-0" aria-label="Explorador interactivo de servicios">
              <div className="relative flex h-[min(76vw,282px)] w-[min(76vw,282px)] shrink-0 items-center justify-center sm:h-[310px] sm:w-[310px] xl:h-[292px] xl:w-[292px]">
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-teal-200/55 blur-[45px]"
                  animate={reduceMotion ? undefined : { scale: [0.85, 1.14, 0.85], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                <div aria-hidden="true" className="absolute inset-[6%] rounded-full border border-teal-200/80" />
                <div aria-hidden="true" className="absolute inset-[18%] rounded-full border border-teal-300/65" />
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-[6%] rounded-full"
                  animate={reduceMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                >
                  <span className="absolute left-1/2 top-[-5px] h-3 w-3 -translate-x-1/2 rounded-full bg-teal-500 shadow-[0_0_20px_rgba(20,184,166,0.8)]" />
                  <span className="absolute bottom-[17%] right-[1.8%] h-2 w-2 rounded-full bg-cyan-400/80" />
                </motion.div>
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-[18%] rounded-full"
                  animate={reduceMotion ? undefined : { rotate: -360 }}
                  transition={{ duration: 23, repeat: Infinity, ease: "linear" }}
                >
                  <span className="absolute bottom-[-4px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-teal-400 shadow-[0_0_18px_rgba(20,184,166,0.6)]" />
                </motion.div>
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-[27%] rounded-full border border-white/90 bg-[radial-gradient(circle_at_35%_30%,#ffffff,#d2faf0_58%,#a9e7da)] shadow-[0_20px_65px_-25px_rgba(13,148,136,0.56)]"
                  animate={reduceMotion ? undefined : { scale: [1, 1.055, 1] }}
                  transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="relative z-10 flex w-[198px] flex-col items-center text-center sm:w-[214px]">
                  <motion.span
                    aria-hidden="true"
                    className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/90 bg-white/85 text-teal-800 shadow-sm"
                    animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Orbit size={22} strokeWidth={1.6} />
                  </motion.span>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-teal-800">Explora los servicios</p>
                  <div className="mt-2 flex h-[52px] items-center justify-center">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.p
                        key={active.href}
                        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                        transition={{ duration: reduceMotion ? 0 : 0.25 }}
                        className="font-serif text-lg font-semibold leading-tight text-stone-950"
                      >
                        {active.label}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  <Link
                    href={active.href}
                    aria-label={"Ver " + active.label}
                    className="mt-2 inline-flex min-h-10 items-center gap-2 rounded-full border border-teal-300/80 bg-white/90 px-4 py-2 text-xs font-bold text-teal-900 shadow-sm transition hover:border-teal-700 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
                  >
                    Conocer más <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((current) => (current + 1) % pathways.length)}
                    className="mt-2 inline-flex min-h-9 items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-teal-900 transition hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
                    aria-label="Mostrar otro servicio"
                  >
                    Otro servicio <ArrowRight size={13} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            {pathways.map((pathway, index) => {
              const Icon = pathway.icon;
              const selected = activeIndex === index;

              return (
                <motion.div
                  key={pathway.href}
                  className={"min-w-0 " + pathway.position}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                >
                  <motion.div
                    className="h-full"
                    animate={reduceMotion ? undefined : { y: [0, index % 2 === 0 ? -4 : 4, 0] }}
                    transition={{ duration: 5.5 + index * 0.7, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Link
                      href={pathway.href}
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      className={
                        "group relative flex h-full min-h-[163px] min-w-0 flex-col justify-between overflow-hidden rounded-[1.65rem] border px-5 py-5 shadow-[0_20px_55px_-38px_rgba(15,23,42,0.45)] backdrop-blur-2xl transition-[background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_-35px_rgba(15,118,110,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none sm:min-h-[175px] sm:px-6 sm:py-5 xl:min-h-[154px] " +
                        (selected
                          ? "border-teal-300 bg-teal-50/90"
                          : "border-white/95 bg-white/80 hover:border-teal-200 hover:bg-white/95")
                      }
                    >
                      <div aria-hidden="true" className="pointer-events-none absolute -right-9 -top-10 h-28 w-28 rounded-full bg-teal-100/75 blur-2xl" />
                      <div className="relative flex items-center justify-between gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white bg-white/90 text-teal-800 shadow-sm">
                          <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                        </span>
                        <ArrowUpRight
                          size={19}
                          className="text-teal-700 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="relative mt-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-teal-800">{pathway.eyebrow}</p>
                        <h3 className="mt-1 font-serif text-[1.3rem] font-semibold leading-tight tracking-[-0.02em] text-stone-950 sm:text-[1.42rem]">
                          {pathway.label}
                        </h3>
                        <p className="mt-2 text-xs leading-5 text-stone-600 sm:text-[13px]">{pathway.description}</p>
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
          <p className="relative mt-6 text-center text-xs leading-6 text-stone-500">
            Explora cada tarjeta o utiliza el núcleo central para descubrir otras opciones.
          </p>
        </div>
      </div>
    </section>
  );
}
