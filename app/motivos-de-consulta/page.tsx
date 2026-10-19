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
  title: "Motivos de consulta | Ansiedad, depresión, estrés y burnout",
  description:
    "Conoce los motivos de consulta psicológica: ansiedad, depresión, estrés y burnout. Psicoterapia online para adultos en Colombia y presencial en Manizales.",
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
            <p className="mt-7 max-w-3xl text-base leading-8 text-stone-600 md:text-lg">
              La ansiedad, la depresión, el estrés y el agotamiento laboral pueden
              manifestarse de distintas maneras. Conoce estos motivos de consulta
              y explora si la psicoterapia puede ser pertinente para tu situación.
              Jefferson ofrece atención virtual para adultos en Colombia y
              atención presencial y virtual en Manizales.
            </p>
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
          <div className="mx-auto mt-12 max-w-6xl rounded-[2rem] border border-teal-100 bg-white p-7 shadow-sm md:p-10">
            <div className="grid gap-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">Atención por videollamada</p>
                <h2 className="mt-3 font-serif text-2xl text-stone-950 md:text-3xl">
                  Psicoterapia online para adultos en toda Colombia
                </h2>
                <p className="mt-3 max-w-2xl leading-7 text-stone-600">
                  Si buscas acompañamiento psicológico virtual desde Bogotá, Medellín,
                  Pereira, Armenia, el Eje Cafetero o cualquier otra ciudad de Colombia,
                  conoce cómo funciona la modalidad online y cómo solicitar información.
                  El consultorio presencial se encuentra únicamente en Manizales.
                </p>
              </div>
              <Link
                href="/psicoterapia-online"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-200"
              >
                Conocer psicoterapia online <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
