"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
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
    detail: "Sesiones por videollamada.",
    icon: Video,
    className: "xl:col-span-6 xl:row-span-2 xl:min-h-[356px]",
    glow: "from-teal-200/70 via-cyan-100/20 to-transparent",
    accent: "bg-teal-500",
  },
  {
    href: "/ansiedad-manizales",
    label: "Ansiedad",
    detail: "Alerta y preocupación.",
    icon: Waves,
    className: "xl:col-span-3 xl:min-h-[170px]",
    glow: "from-cyan-100/80 via-white/20 to-transparent",
    accent: "bg-cyan-500",
  },
  {
    href: "/estres-burnout-manizales",
    label: "Estrés y burnout",
    detail: "Sobrecarga y agotamiento.",
    icon: Flame,
    className: "xl:col-span-3 xl:min-h-[170px]",
    glow: "from-amber-100/80 via-white/20 to-transparent",
    accent: "bg-amber-400",
  },
  {
    href: "/insomnio-manizales",
    label: "Insomnio",
    detail: "Sueño y rumiación.",
    icon: Moon,
    className: "xl:col-span-4 xl:min-h-[210px]",
    glow: "from-indigo-100/70 via-white/20 to-transparent",
    accent: "bg-indigo-400",
  },
  {
    href: "/terapias-contextuales-act",
    label: "Terapias contextuales",
    detail: "Enfoque ACT.",
    icon: Orbit,
    className: "xl:col-span-4 xl:min-h-[210px]",
    glow: "from-teal-100/80 via-white/20 to-transparent",
    accent: "bg-teal-500",
  },
  {
    href: "/sobre-jefferson-bastidas",
    label: "Perfil profesional",
    detail: "Formación y experiencia.",
    icon: UserRound,
    className: "xl:col-span-4 xl:min-h-[210px]",
    glow: "from-stone-200/80 via-white/20 to-transparent",
    accent: "bg-stone-500",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HomeSeoServices() {
  return (
    <section
      id="servicios"
      className="relative isolate overflow-hidden border-y border-stone-200/60 bg-[#f5f5f3] px-4 py-16 sm:px-6 md:px-8 md:py-24"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-40 h-[420px] w-[420px] rounded-full bg-teal-200/35 blur-[110px]"
        animate={{ x: [0, 36, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 right-[-8rem] h-[460px] w-[460px] rounded-full bg-cyan-100/70 blur-[120px]"
        animate={{ x: [0, -28, 0], y: [0, -16, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-9 md:mb-12"
        >
          <span className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-teal-700">
            Consulta
          </span>
          <h2 className="mt-3 font-serif text-3xl leading-none tracking-[-0.035em] text-stone-950 sm:text-4xl md:text-5xl">
            Áreas de atención
          </h2>
        </motion.div>

        <motion.nav
          aria-label="Áreas de atención psicológica"
          className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-12 xl:auto-rows-fr"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {pathways.map((pathway, index) => {
            const Icon = pathway.icon;
            const featured = index === 0;

            return (
              <motion.div
                key={pathway.href}
                variants={cardVariants}
                className={pathway.className}
              >
                <Link
                  href={pathway.href}
                  className="group block h-full rounded-[2rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f5f5f3]"
                >
                  <motion.article
                    whileHover={{ y: -5, scale: 1.006 }}
                    transition={{ type: "spring", stiffness: 300, damping: 26 }}
                    className="relative flex h-full min-h-[190px] overflow-hidden rounded-[2rem] border border-white/90 bg-white/78 p-6 shadow-[0_18px_60px_-40px_rgba(28,25,23,0.35)] backdrop-blur-2xl sm:p-7"
                  >
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 bg-gradient-to-br ${pathway.glow} opacity-55 transition-opacity duration-500 group-hover:opacity-100`}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-[1px] rounded-[1.95rem] ring-1 ring-inset ring-black/[0.025]"
                    />

                    <motion.div
                      aria-hidden="true"
                      className="absolute -right-14 -top-16 h-44 w-44 rounded-full border border-white/80 bg-white/35 shadow-[inset_0_0_50px_rgba(255,255,255,0.7)] backdrop-blur-xl"
                      animate={{ rotate: [0, 8, 0], scale: [1, 1.04, 1] }}
                      transition={{
                        duration: 8 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <div className="relative z-10 flex w-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <motion.div
                          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white bg-white/75 text-stone-800 shadow-[0_8px_24px_-14px_rgba(28,25,23,0.45)] backdrop-blur-xl"
                          whileHover={{ rotate: featured ? -4 : 4, scale: 1.06 }}
                          transition={{ type: "spring", stiffness: 320, damping: 20 }}
                        >
                          <Icon size={20} strokeWidth={1.7} />
                        </motion.div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200/80 bg-white/65 text-stone-600 shadow-sm backdrop-blur-xl transition-all duration-300 group-hover:border-stone-900 group-hover:bg-stone-950 group-hover:text-white">
                          <ArrowUpRight
                            size={18}
                            strokeWidth={1.7}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </div>
                      </div>

                      <div className={featured ? "mt-auto pt-20" : "mt-auto pt-12"}>
                        <div className="mb-4 flex items-center gap-2">
                          <span className={`h-1.5 w-1.5 rounded-full ${pathway.accent}`} />
                          <span className="text-[0.68rem] font-bold uppercase tracking-[0.17em] text-stone-400">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <h3
                          className={
                            featured
                              ? "max-w-lg font-serif text-[2.35rem] leading-[0.98] tracking-[-0.04em] text-stone-950 sm:text-[2.8rem] lg:text-[3.25rem]"
                              : "font-serif text-[1.75rem] leading-[1.02] tracking-[-0.03em] text-stone-950 sm:text-[1.95rem]"
                          }
                        >
                          {pathway.label}
                        </h3>

                        <p className="mt-3 text-sm font-medium tracking-[-0.01em] text-stone-500 sm:text-[0.96rem]">
                          {pathway.detail}
                        </p>
                      </div>
                    </div>

                    <motion.div
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-teal-500 via-cyan-400 to-transparent"
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </motion.article>
                </Link>
              </motion.div>
            );
          })}
        </motion.nav>
      </div>
    </section>
  );
}
