import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BatteryLow,
  CloudRain,
  Flame,
  ShieldAlert,
} from "lucide-react";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/sections/Footer";
import { buildSeoMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildSeoMetadata({
  title: "Motivos de consulta psicológica en Manizales",
  description:
    "Acompañamiento psicológico para adultos en Manizales y online por ansiedad, depresión, estrés y síndrome de burnout.",
  path: "/motivos-de-consulta",
});

const motivos = [
  {
    href: "/ansiedad-manizales",
    title: "Ansiedad",
    text: "Preocupación persistente, alerta, anticipación o evitación.",
    icon: ShieldAlert,
  },
  {
    href: "/depresion-manizales",
    title: "Depresión",
    text: "Ánimo bajo, pérdida de interés, vacío o desconexión.",
    icon: CloudRain,
  },
  {
    href: "/estres-burnout-manizales",
    title: "Estrés",
    text: "Sobrecarga, tensión sostenida y dificultad para recuperarse.",
    icon: BatteryLow,
  },
  {
    href: "/estres-burnout-manizales",
    title: "Síndrome de burnout",
    text: "Agotamiento relacionado con el trabajo y pérdida de recursos.",
    icon: Flame,
  },
];

export default function MotivosDeConsultaPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-stone-800">
      <Navbar />

      <main>
        <section className="px-6 pb-14 pt-36 md:pb-18 md:pt-40">
          <div className="mx-auto max-w-6xl">
            <nav aria-label="Migas de pan" className="mb-8 text-sm text-stone-500">
              <Link href="/" className="transition-colors hover:text-teal-700">Inicio</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span aria-current="page" className="text-stone-700">Motivos de consulta</span>
            </nav>

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700">
              Motivos de consulta
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[0.98] tracking-[-0.035em] text-stone-950 sm:text-5xl md:text-6xl">
              Acompañamiento psicológico según lo que estás viviendo
            </h1>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
            {motivos.map((motivo) => {
              const Icon = motivo.icon;
              return (
                <Link
                  key={motivo.title}
                  href={motivo.href}
                  className="group relative overflow-hidden rounded-[2rem] border border-white bg-white/80 p-7 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.38)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_28px_70px_-38px_rgba(13,148,136,0.28)] md:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-950 text-white">
                      <Icon size={20} strokeWidth={1.7} />
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-500 transition-all group-hover:border-stone-950 group-hover:bg-stone-950 group-hover:text-white">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>

                  <h2 className="mt-14 font-serif text-3xl tracking-[-0.025em] text-stone-950">
                    {motivo.title}
                  </h2>
                  <p className="mt-3 max-w-md leading-7 text-stone-500">{motivo.text}</p>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
