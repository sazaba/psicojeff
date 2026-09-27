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
} from "lucide-react";

const pathways = [
  {
    href: "/psicoterapia-online",
    label: "Psicoterapia online",
    icon: Video,
    desktop: "left-[6%] top-[13%]",
    mobile: "col-span-2",
  },
  {
    href: "/motivos-de-consulta",
    label: "Motivos de consulta",
    icon: Waves,
    desktop: "right-[8%] top-[10%]",
    mobile: "",
  },
  {
    href: "/estres-burnout-manizales",
    label: "Estrés y burnout",
    icon: Flame,
    desktop: "left-[3%] bottom-[19%]",
    mobile: "",
  },
  {
    href: "/insomnio-manizales",
    label: "Insomnio",
    icon: Moon,
    desktop: "right-[4%] bottom-[18%]",
    mobile: "",
  },
  {
    href: "/terapias-contextuales-act",
    label: "Terapias contextuales",
    icon: Orbit,
    desktop: "left-[31%] bottom-[6%]",
    mobile: "col-span-2",
  },
  {
    href: "/sobre-jefferson-bastidas",
    label: "Perfil profesional",
    icon: UserRound,
    desktop: "right-[29%] top-[5%]",
    mobile: "col-span-2",
  },
];

export default function HomeSeoServices() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="servicios"
      className="relative overflow-hidden border-y border-stone-200/60 bg-[#f6f6f4] px-4 py-12 sm:px-6 md:px-8 md:py-20"
    >
      <h2 className="sr-only">Áreas de atención psicológica</h2>

      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/90 bg-white/55 shadow-[0_35px_100px_-55px_rgba(15,23,42,0.38)] backdrop-blur-3xl md:min-h-[640px] md:rounded-[3rem]">
          <motion.div
            aria-hidden="true"
            className="absolute left-[18%] top-[12%] h-72 w-72 rounded-full bg-teal-200/45 blur-[90px]"
            animate={
              reduceMotion
                ? undefined
                : { x: [0, 36, -10, 0], y: [0, 18, 36, 0], scale: [1, 1.08, 0.96, 1] }
            }
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute bottom-[10%] right-[16%] h-80 w-80 rounded-full bg-cyan-100/70 blur-[105px]"
            animate={
              reduceMotion
                ? undefined
                : { x: [0, -32, 10, 0], y: [0, -18, -30, 0], scale: [1, 0.95, 1.07, 1] }
            }
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(255,255,255,0.18)_42%,rgba(15,118,110,0.035))]"
          />

          <div className="relative grid grid-cols-2 gap-3 p-4 sm:gap-4 sm:p-6 md:hidden">
            {pathways.map((pathway, index) => {
              const Icon = pathway.icon;

              return (
                <motion.div
                  key={pathway.href}
                  className={pathway.mobile}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.045 }}
                >
                  <Link
                    href={pathway.href}
                    className="group block rounded-[1.6rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60"
                  >
                    <motion.div
                      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                      className="flex min-h-[150px] flex-col justify-between rounded-[1.6rem] border border-white/95 bg-white/72 p-5 shadow-[0_18px_45px_-34px_rgba(15,23,42,0.55)] backdrop-blur-2xl"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-stone-950 text-white shadow-sm">
                          <Icon size={18} strokeWidth={1.7} />
                        </span>
                        <ArrowUpRight size={18} className="text-stone-400" />
                      </div>
                      <span className="font-serif text-xl leading-tight tracking-[-0.02em] text-stone-950">
                        {pathway.label}
                      </span>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="relative hidden min-h-[640px] md:block">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone-200/70"
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[235px] w-[235px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone-200/60"
            />

            <motion.div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/90 bg-white/65 shadow-[0_22px_70px_-36px_rgba(13,148,136,0.55)] backdrop-blur-3xl"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      boxShadow: [
                        "0 22px 70px -36px rgba(13,148,136,0.35)",
                        "0 24px 90px -30px rgba(13,148,136,0.52)",
                        "0 22px 70px -36px rgba(13,148,136,0.35)",
                      ],
                    }
              }
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-4 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.98),rgba(204,251,241,0.72)_42%,rgba(94,234,212,0.32)_72%,rgba(255,255,255,0.42))]" />
              <motion.div
                className="absolute inset-[30%] rounded-full bg-teal-500/80 blur-[1px]"
                animate={reduceMotion ? undefined : { scale: [1, 1.14, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {pathways.map((pathway, index) => {
              const Icon = pathway.icon;

              return (
                <motion.div
                  key={pathway.href}
                  className={"absolute " + pathway.desktop}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 14 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={pathway.href}
                    className="group block rounded-[1.65rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
                  >
                    <motion.div
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              y: -7,
                              scale: 1.025,
                              boxShadow: "0 28px 70px -34px rgba(15,23,42,0.34)",
                            }
                      }
                      transition={{ type: "spring", stiffness: 300, damping: 24 }}
                      className="relative min-w-[230px] overflow-hidden rounded-[1.65rem] border border-white/95 bg-white/74 px-5 py-4 shadow-[0_20px_54px_-38px_rgba(15,23,42,0.48)] backdrop-blur-2xl lg:min-w-[255px]"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.8),rgba(255,255,255,0.12)_58%,rgba(20,184,166,0.06))]"
                      />
                      <div className="relative flex items-center gap-4">
                        <motion.span
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-stone-950 text-white shadow-[0_10px_24px_-14px_rgba(15,23,42,0.7)]"
                          whileHover={reduceMotion ? undefined : { rotate: index % 2 === 0 ? -5 : 5 }}
                        >
                          <Icon size={19} strokeWidth={1.7} />
                        </motion.span>

                        <span className="min-w-0 flex-1 font-serif text-[1.2rem] leading-tight tracking-[-0.02em] text-stone-950 lg:text-[1.32rem]">
                          {pathway.label}
                        </span>

                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-stone-200/80 bg-white/70 text-stone-500 transition-all duration-300 group-hover:border-stone-950 group-hover:bg-stone-950 group-hover:text-white">
                          <ArrowUpRight
                            size={15}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
