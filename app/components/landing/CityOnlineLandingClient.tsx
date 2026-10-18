"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Brain, BriefcaseBusiness, CheckCircle2,
  ChevronDown, CloudRain, Flame, HeartHandshake, LockKeyhole, MapPin,
  MessageCircle, ShieldCheck, Sparkles, Star, Video, Waves,
} from "lucide-react";
import Headerpsicojeff from "@/app/assets/Headerpsicojeff.webp";
import Jeffseo from "@/app/assets/Jeffseo.webp";
import { reviews } from "@/app/components/sections/Testimonials";
import type { CityLandingConfig } from "@/lib/seo/onlineCityLandings";
import { cityLandings, onlineCityOrder } from "@/lib/seo/onlineCityLandings";

const contactUrl = "https://wa.link/2x3i8s";
const reviewUrl = "https://share.google/5gs2judHeh0di1b4W";

const concerns = [
  { title: "Ansiedad y preocupación", text: "Tu mente anticipa escenarios difíciles, el descanso se interrumpe o la tensión parece acompañarte todo el día.", Icon: Brain },
  { title: "Depresión y desánimo", text: "Las actividades que antes te importaban pesan más, aparece tristeza o te cuesta sentir conexión con tu día a día.", Icon: CloudRain },
  { title: "Estrés y sobrecarga", text: "Las responsabilidades no se detienen y sientes que tienes cada vez menos espacio para descansar y cuidar de ti.", Icon: BriefcaseBusiness },
  { title: "Agotamiento y burnout", text: "El cansancio emocional, la irritabilidad o la desconexión con tu trabajo están afectando cómo te sientes.", Icon: Flame },
];

const benefits = [
  { title: "Un espacio para entender lo que te pasa", text: "Explorar tus experiencias y emociones con una mirada profesional, sin juicios ni respuestas idénticas para todos.", Icon: HeartHandshake },
  { title: "Herramientas para la vida cotidiana", text: "Trabajar estrategias relacionadas con pensamientos, emociones, comportamientos y decisiones significativas.", Icon: Sparkles },
  { title: "Atención desde Pereira, sin desplazarte", text: "Acceder a sesiones por videollamada desde un espacio privado, con horarios acordados previamente.", Icon: Video },
];

const process = [
  { no: "01", title: "Conversamos primero", text: "Escribe para conocer disponibilidad, tarifa y condiciones, y resolver tus dudas antes de agendar." },
  { no: "02", title: "Coordinamos el encuentro", text: "Se revisa si la modalidad online resulta pertinente para tu situación y se acuerda la primera sesión." },
  { no: "03", title: "Trabajamos en tus objetivos", text: "El proceso se desarrolla a partir de tu contexto, tus necesidades y objetivos construidos conjuntamente." },
];

const questions = [
  { q: "¿La psicoterapia online puede ser útil para mí?", a: "Puede ser una alternativa adecuada para muchas personas adultas. Antes de iniciar se revisa tu motivo de consulta y si la modalidad virtual es pertinente para tu situación particular." },
  { q: "Nunca he asistido a terapia. ¿Qué debo decir?", a: "No necesitas tenerlo todo claro. Puedes comenzar describiendo lo que estás viviendo y lo que te gustaría comprender o cambiar. Los objetivos se van aclarando durante el proceso." },
  { q: "¿Cómo se mantiene la privacidad de una videollamada?", a: "El proceso se desarrolla bajo deberes profesionales de confidencialidad y sus límites aplicables. Necesitarás un lugar donde puedas conversar sin interrupciones; consulta antes de iniciar las condiciones de conexión y manejo de información." },
  { q: "¿Cuánto cuesta y cuánto dura la consulta?", a: "La web principal informa actualmente una tarifa de $100.000 COP para residentes en Colombia y encuentros de aproximadamente 60 a 90 minutos. Confirma antes de agendar el valor y la duración vigentes." },
  { q: "¿Se pueden abordar ansiedad, depresión, estrés o burnout?", a: "Son algunos de los motivos de consulta que pueden explorarse en el proceso. Cada situación requiere una valoración individual para definir la pertinencia y los objetivos del acompañamiento." },
];

function Contact({ children, light = false, className = "" }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <a href={contactUrl} target="_blank" rel="noopener noreferrer"
      className={"inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center text-sm font-bold shadow-[0_12px_30px_-14px_rgba(15,118,110,0.65)] transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 " + (light ? "bg-white text-teal-900 hover:bg-teal-50 " : "bg-teal-700 text-white hover:bg-teal-800 ") + className}>
      <MessageCircle size={18} aria-hidden="true" />{children}<ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}

function Eyebrow({ children, inverted = false }: { children: ReactNode; inverted?: boolean }) {
  return <p className={"mb-4 text-xs font-bold uppercase tracking-[0.18em] " + (inverted ? "text-teal-200" : "text-teal-700")}>{children}</p>;
}

function Entrance({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.13 }} transition={{ duration: 0.55, ease: "easeOut" }}>{children}</motion.div>;
}

function AnimatedSignal() {
  const reduced = useReducedMotion();
  return (
    <div className="pointer-events-none absolute -right-3 top-10 z-20 hidden rounded-3xl border border-white/90 bg-white/85 p-4 shadow-xl backdrop-blur-xl lg:block" aria-hidden="true">
      <motion.svg viewBox="0 0 110 48" width="110" height="48" fill="none">
        <path d="M3 26H17" stroke="#99f6e4" strokeWidth="4" strokeLinecap="round" />
        <motion.path d="M17 26C25 26 25 9 34 9S43 39 53 39S63 14 72 14S84 26 107 26" stroke="#0f766e" strokeWidth="4" strokeLinecap="round" initial={reduced ? false : { pathLength: 0.12 }} animate={reduced ? undefined : { pathLength: [0.12, 1, 0.12] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} />
        <motion.circle cx="72" cy="14" r="4" fill="#14b8a6" animate={reduced ? undefined : { scale: [1, 1.45, 1], opacity: [0.65, 1, 0.65] }} transition={{ duration: 2.5, repeat: Infinity }} />
      </motion.svg>
      <p className="mt-1 text-xs font-semibold text-stone-700">Conexión y acompañamiento</p>
    </div>
  );
}

export default function CityOnlineLandingClient({ city }: { city: CityLandingConfig }) {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#faf9f6] pb-24 text-stone-700 sm:pb-0">
      <header className="sticky top-0 z-40 border-b border-white/80 bg-[#faf9f6]/90 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 md:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Volver al inicio de Jefferson Bastidas">
            <Image src="/Logo.webp" alt="" width={46} height={46} className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12" />
            <span className="min-w-0">
              <span className="block truncate font-serif text-lg font-semibold leading-tight text-stone-950">Jefferson Bastidas</span>
              <span className="block truncate text-[11px] text-stone-500">Psicólogo · Atención online</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-stone-600 lg:flex" aria-label="Secciones de la página">
            <a href="#motivos" className="transition hover:text-teal-700">Motivos</a>
            <a href="#contexto" className="transition hover:text-teal-700">Tu ciudad</a>
            <a href="#testimonios" className="transition hover:text-teal-700">Reseñas</a>
            <a href="#preguntas" className="transition hover:text-teal-700">Preguntas</a>
          </nav>
          <Contact className="hidden sm:inline-flex">Solicitar información</Contact>
          <a href={contactUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-teal-700 px-4 text-xs font-bold text-white sm:hidden"><MessageCircle size={16} aria-hidden="true" /> Consultar</a>
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden px-5 pb-20 pt-10 sm:pt-14 md:px-8 md:pb-28 md:pt-20">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_18%_20%,rgba(153,246,228,0.43),transparent_38%),radial-gradient(ellipse_at_88%_20%,rgba(186,230,253,0.38),transparent_39%)]" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <Entrance>
              <nav className="mb-7 text-xs text-stone-500" aria-label="Ruta de navegación">
                <Link href="/" className="hover:text-teal-700">Inicio</Link><span className="mx-2">/</span>Psicoterapia online en {city.name}
              </nav>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/85 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-teal-800 shadow-sm"><MapPin size={14} aria-hidden="true" /> {city.name}, {city.department} · 100 % online</div>
              <h1 className="max-w-3xl font-serif text-[clamp(2.3rem,5.1vw,4.35rem)] font-semibold leading-[1.09] tracking-[-0.035em] text-stone-950">
                Psicólogo online en {city.name}
                <span className="mt-3 block bg-gradient-to-r from-teal-700 via-teal-600 to-sky-700 bg-clip-text text-transparent">{city.heroSubtitle}</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
                {city.heroLead}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Contact>Consultar por WhatsApp</Contact>
                <a href="#proceso" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-stone-300 bg-white/90 px-6 py-3 text-sm font-bold text-stone-800 transition hover:border-teal-400 hover:text-teal-800">Cómo funciona <ArrowRight size={17} aria-hidden="true" /></a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-stone-600 sm:text-sm">
                <span className="flex items-center gap-2"><Video size={17} className="text-teal-700" /> Sesiones por videollamada</span>
                <span className="flex items-center gap-2"><ShieldCheck size={17} className="text-teal-700" /> Atención individual</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-teal-700" /> ACT y DBT</span>
              </div>
            </Entrance>
            <Entrance className="relative mx-auto w-full max-w-[510px]">
              <AnimatedSignal />
              <div className="relative rounded-[2.5rem] border border-white/90 bg-white/60 p-4 shadow-[0_35px_100px_-48px_rgba(15,23,42,0.35)] backdrop-blur-2xl sm:rounded-[2.75rem] sm:p-8">
                <div className="absolute inset-x-8 top-12 h-56 rounded-full bg-teal-100/70 blur-3xl" aria-hidden="true" />
                <Image src={Headerpsicojeff} alt={`Jefferson Bastidas, psicólogo que atiende por videollamada a personas de ${city.name}`} className="relative z-10 mx-auto h-auto w-full object-contain [mask-image:linear-gradient(to_bottom,black_86%,transparent_100%)]" priority placeholder="blur" sizes="(max-width: 1024px) 88vw, 510px" />
                <div className="relative z-10 -mt-3 flex min-w-0 items-center gap-3 rounded-[1.6rem] border border-white/95 bg-white/90 p-3 shadow-lg backdrop-blur-xl sm:p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700"><Waves size={23} aria-hidden="true" /></div>
                  <div>
                    <p className="font-serif text-base font-semibold text-stone-900 sm:text-lg">Jefferson Bastidas Mejía</p>
                    <p className="text-xs leading-5 text-stone-600">Psicólogo · Especialista en Salud Ocupacional</p>
                  </div>
                </div>
              </div>
            </Entrance>
          </div>
        </section>

        <section className="border-y border-white bg-white/80 px-5 py-8 md:px-8">
          <div className="mx-auto grid max-w-6xl gap-5 text-center text-sm font-semibold text-stone-700 md:grid-cols-3">
            <p className="flex items-center justify-center gap-2"><Video size={19} className="text-teal-700" /> Modalidad virtual para {city.name}</p>
            <p className="flex items-center justify-center gap-2"><LockKeyhole size={19} className="text-teal-700" /> Conversación desde un lugar privado</p>
            <p className="flex items-center justify-center gap-2"><HeartHandshake size={19} className="text-teal-700" /> Acompañamiento para adultos</p>
          </div>
        </section>

        <section id="motivos" className="scroll-mt-28 px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <Entrance className="mx-auto mb-12 max-w-3xl text-center">
              <Eyebrow>¿Te identificas con esto?</Eyebrow>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-stone-950 md:text-5xl">A veces seguimos adelante, aunque por dentro algo nos está costando</h2>
              <p className="mt-5 text-base leading-8 text-stone-600">No necesitas saber exactamente cómo describir lo que te pasa para iniciar una conversación.</p>
            </Entrance>
            <div className="grid gap-5 md:grid-cols-2">
              {concerns.map(({ title, text, Icon }) => (
                <Entrance key={title}>
                  <article className="group h-full rounded-[2rem] border border-white/95 bg-white/90 p-7 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-9">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 text-teal-700"><Icon size={25} aria-hidden="true" /></div>
                    <h3 className="mt-6 font-serif text-2xl font-semibold text-stone-900">{title}</h3>
                    <p className="mt-3 leading-7 text-stone-600">{text}</p>
                  </article>
                </Entrance>
              ))}
            </div>
          </div>
        </section>

        <section id="contexto" className="scroll-mt-28 px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <Entrance className="mx-auto max-w-3xl">
              <Eyebrow>Psicoterapia online en {city.name}</Eyebrow>
              <h2 className="font-serif text-3xl font-semibold leading-[1.14] tracking-tight text-stone-950 sm:text-4xl md:text-5xl">{city.contextTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-stone-600">{city.contextLead}</p>
              <p className="mt-4 text-base leading-8 text-stone-600">{city.contextualIntro}</p>
            </Entrance>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {city.situations.map((item, index) => (
                <Entrance key={item.title}>
                  <article className="group relative h-full overflow-hidden rounded-[2rem] border border-white bg-white/85 p-7 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.26)] backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none sm:p-8">
                    <div className="absolute right-[-25px] top-[-25px] h-28 w-28 rounded-full bg-teal-100/60 blur-2xl transition-transform duration-500 group-hover:scale-150 motion-reduce:transition-none" aria-hidden="true" />
                    <div className="relative mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-100 bg-teal-50 font-serif text-xl font-semibold text-teal-800">0{index + 1}</div>
                    <h3 className="relative font-serif text-2xl font-semibold text-stone-900">{item.title}</h3>
                    <p className="relative mt-4 leading-7 text-stone-600">{item.description}</p>
                  </article>
                </Entrance>
              ))}
            </div>
            <div className="mt-10 flex justify-center"><Contact>Consultar atención desde {city.name}</Contact></div>
          </div>
        </section>

        <section className="border-y border-teal-100 bg-[#ecf7f5] px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <Entrance className="mx-auto mb-12 max-w-3xl text-center">
              <Eyebrow>¿Qué puede aportarte el proceso?</Eyebrow>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-stone-950 md:text-5xl">Una atención con sentido, claridad y herramientas para tu vida</h2>
            </Entrance>
            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map(({ title, text, Icon }) => (
                <Entrance key={title}>
                  <article className="h-full rounded-[2rem] border border-white/90 bg-white/90 p-7 shadow-sm md:p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700"><Icon size={24} aria-hidden="true" /></div>
                    <h3 className="mt-6 font-serif text-2xl font-semibold leading-snug text-stone-950">{title}</h3>
                    <p className="mt-4 leading-7 text-stone-600">{text}</p>
                  </article>
                </Entrance>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-stone-600">Los objetivos y resultados dependen de una valoración individual. No se prometen cambios idénticos para todas las personas.</p>
          </div>
        </section>

        <section id="profesional" className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <Entrance className="mx-auto w-full max-w-sm">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/95 bg-white/85 p-6 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.3)]">
                <Image src={Jeffseo} alt="Fotografía profesional de Jefferson Bastidas Mejía" className="h-auto w-full rounded-2xl object-contain" placeholder="blur" sizes="(max-width: 1024px) 85vw, 390px" />
              </div>
            </Entrance>
            <Entrance>
              <Eyebrow>Conoce a tu psicólogo</Eyebrow>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-stone-950 md:text-5xl">Una mirada profesional, humana y conectada con tu contexto</h2>
              <p className="mt-6 text-lg leading-8 text-stone-600">Jefferson Bastidas Mejía es psicólogo egresado de la Universidad de Manizales y Especialista en Salud Ocupacional de la Universidad Libre. Cuenta con formación complementaria en psicología clínica basada en la evidencia y terapias contextuales de tercera generación.</p>
              <p className="mt-5 leading-8 text-stone-600">Su enfoque integra Terapia de Aceptación y Compromiso (ACT) y recursos de Terapia Dialéctico Conductual (DBT). El trabajo se orienta a comprender los desafíos personales y desarrollar acciones coherentes con los objetivos de cada persona.</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Psicología basada en evidencia", "ACT y DBT", "Adultos", "Bienestar emocional y trabajo"].map((value) => (
                  <span key={value} className="rounded-full border border-teal-100 bg-white px-4 py-2 text-xs font-semibold text-teal-800">{value}</span>
                ))}
              </div>
              <Link href="/sobre-jefferson-bastidas" className="mt-7 inline-flex items-center gap-2 font-bold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950">Ver perfil y formación profesional <ArrowRight size={17} aria-hidden="true" /></Link>
            </Entrance>
          </div>
        </section>

        <section id="proceso" className="border-y border-white bg-white/80 px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <Entrance className="mx-auto mb-12 max-w-3xl text-center">
              <Eyebrow>Cómo funciona</Eyebrow>
              <h2 className="font-serif text-3xl font-semibold text-stone-950 md:text-5xl">Dar el primer paso puede ser más sencillo de lo que imaginas</h2>
            </Entrance>
            <div className="grid gap-6 md:grid-cols-3">
              {process.map((item) => (
                <Entrance key={item.no}>
                  <article className="h-full rounded-[2rem] border border-stone-100 bg-[#faf9f6] p-8">
                    <p className="font-serif text-5xl font-semibold text-teal-600/35">{item.no}</p>
                    <h3 className="mt-5 font-serif text-2xl font-semibold text-stone-900">{item.title}</h3>
                    <p className="mt-4 leading-7 text-stone-600">{item.text}</p>
                  </article>
                </Entrance>
              ))}
            </div>
            <div className="mt-10 text-center"><Contact>Consultar disponibilidad</Contact></div>
          </div>
        </section>

        <section id="testimonios" className="scroll-mt-28 px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <Entrance className="mx-auto mb-12 max-w-3xl text-center">
              <Eyebrow>Opiniones compartidas públicamente</Eyebrow>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-stone-950 md:text-5xl">Lo que otras personas han compartido sobre Jefferson</h2>
              <p className="mt-5 text-sm leading-7 text-stone-600">Estas seis reseñas son las mismas publicadas en la página principal de Manizales. No se presentan como experiencias de pacientes de {city.name} ni garantizan resultados similares.</p>
            </Entrance>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {reviews.map((review) => (
                <Entrance key={review.id}>
                  <figure className="flex h-full flex-col rounded-[2rem] border border-white bg-white/95 p-7 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.3)]">
                    <div className="mb-5 flex items-center gap-1 text-amber-500" aria-label="Cinco estrellas">
                      {Array.from({ length: review.rating }).map((_, i) => <Star key={i} size={17} fill="currentColor" aria-hidden="true" />)}
                    </div>
                    <blockquote className="flex-1 text-[15px] leading-7 text-stone-700">“{review.text}”</blockquote>
                    <figcaption className="mt-7 flex items-center gap-3 border-t border-stone-100 pt-5">
                      <span className={"flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white " + review.color}>{review.name.charAt(0)}</span>
                      <div><p className="text-sm font-bold text-stone-900">{review.name}</p><p className="text-xs text-stone-500">Reseña publicada en Google</p></div>
                    </figcaption>
                  </figure>
                </Entrance>
              ))}
            </div>
            <div className="mt-9 text-center">
              <a href={reviewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950">Ver reseñas en Google <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section id="preguntas" className="scroll-mt-28 border-y border-teal-100 bg-[#ecf7f5] px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <Entrance>
              <Eyebrow>Resolvamos tus dudas</Eyebrow>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-stone-950 md:text-5xl">Preguntas que pueden surgir antes de comenzar</h2>
              <p className="mt-5 leading-8 text-stone-600">No necesitas tener todo decidido. Saber cómo se desarrolla una sesión, qué implica la modalidad online y cómo se maneja la privacidad también forma parte del primer paso.</p>
              <div className="mt-8 hidden lg:block"><Contact>Hacer una consulta</Contact></div>
            </Entrance>
            <div className="space-y-3">
              {[...questions, ...city.localQuestions.map((item) => ({ q: item.question, a: item.answer }))].map((item) => (
                <details key={item.q} className="group rounded-2xl border border-white/95 bg-white/90 px-6 py-5 shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 [&::-webkit-details-marker]:hidden">{item.q}<ChevronDown size={19} className="shrink-0 text-teal-700 transition-transform group-open:rotate-180" aria-hidden="true" /></summary>
                  <p className="pt-4 leading-7 text-stone-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="px-5 py-20 md:px-8 md:py-28">
          <Entrance className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.7rem] bg-gradient-to-br from-teal-800 via-[#145765] to-slate-900 px-7 py-16 text-center text-white shadow-[0_35px_100px_-38px_rgba(15,23,42,0.5)] md:px-14 md:py-20">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl">
              <Eyebrow inverted>Tu siguiente paso</Eyebrow>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-white md:text-5xl">Puedes empezar con una sola pregunta</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/95">{city.finalLead} Sin compromisos antes de conocer el servicio.</p>
              <div className="mt-9"><Contact light>Escribir por WhatsApp</Contact></div>
              <p className="mt-6 text-xs text-teal-50/90">Atención online para {city.name} · Consulta presencial únicamente en Manizales</p>
            </div>
          </Entrance>
        </section>
        <section aria-labelledby="otras-ciudades-title" className="px-5 pb-16 md:px-8 md:pb-24">
          <div className="mx-auto max-w-6xl border-t border-stone-200 pt-9">
            <h2 id="otras-ciudades-title" className="font-serif text-xl font-semibold text-stone-900">Atención online en otras ciudades</h2>
            <p className="mt-2 text-sm text-stone-600">La consulta sigue siendo virtual, independientemente de la ciudad de residencia.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {onlineCityOrder.filter((key) => key !== city.key).map((key) => (
                <Link key={key} href={cityLandings[key].path} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-teal-100 bg-white px-4 py-2 text-sm font-semibold text-teal-800 transition hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-sm motion-reduce:transform-none">
                  Psicólogo online en {cityLandings[key].name} <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center text-sm text-stone-600 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Jefferson Bastidas Mejía · Psicoterapia para adultos</p>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-3" aria-label="Enlaces legales">
            <Link href="/" className="hover:text-teal-700">Inicio</Link><Link href="/psicoterapia-online" className="hover:text-teal-700">Eje Cafetero y exterior</Link><Link href="/privacidad" className="hover:text-teal-700">Privacidad</Link><Link href="/terminos" className="hover:text-teal-700">Términos</Link>
          </nav>
        </div>
      </footer>
      <div className="fixed bottom-0 inset-x-0 z-40 border-t border-white/90 bg-white/95 px-4 py-3 shadow-[0_-10px_40px_-25px_rgba(15,23,42,0.4)] backdrop-blur-lg sm:hidden">
        <Contact className="w-full">Consultar por WhatsApp</Contact>
      </div>
    </div>
  );
}
