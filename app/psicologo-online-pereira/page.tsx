import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  BriefcaseBusiness,
  CalendarCheck2,
  CheckCircle2,
  ChevronDown,
  CloudRain,
  Flame,
  HeartHandshake,
  LockKeyhole,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Video,
} from "lucide-react";
import Headerpsicojeff from "@/app/assets/Headerpsicojeff.webp";
import Jeffseo from "@/app/assets/Jeffseo.webp";
import { AUTHOR_NAME, buildSeoMetadata, SITE_URL } from "@/lib/seo/metadata";

const contactUrl = "https://wa.link/2x3i8s";
const googleReviewsUrl = "https://share.google/5gs2judHeh0di1b4W";
const pageUrl = SITE_URL + "/psicologo-online-pereira";

export const metadata = buildSeoMetadata({
  title: "Psicólogo online en Pereira | Psicoterapia para adultos",
  description:
    "Psicoterapia online para adultos en Pereira con Jefferson Bastidas. Atención para ansiedad, depresión, estrés y burnout. Conoce el proceso y solicita información.",
  path: "/psicologo-online-pereira",
});

const concerns = [
  {
    title: "Ansiedad y preocupación",
    description:
      "Cuando la mente anticipa escenarios difíciles, cuesta desconectarse o la preocupación ocupa demasiado espacio en el día.",
    Icon: Brain,
  },
  {
    title: "Depresión y desánimo",
    description:
      "Cuando hay tristeza persistente, desconexión, cansancio emocional o pérdida de interés en actividades importantes.",
    Icon: CloudRain,
  },
  {
    title: "Estrés cotidiano o laboral",
    description:
      "Cuando las exigencias del trabajo, el estudio o la vida personal se acumulan y resulta difícil recuperar el equilibrio.",
    Icon: BriefcaseBusiness,
  },
  {
    title: "Agotamiento y burnout",
    description:
      "Cuando el cansancio, la irritabilidad o la sensación de desgaste se vuelven frecuentes y afectan tu vida diaria.",
    Icon: Flame,
  },
];

const benefits = [
  {
    title: "Un espacio para comprender lo que te ocurre",
    description:
      "Explorarás las dificultades desde tu historia, tus relaciones y las situaciones que estás viviendo, sin fórmulas iguales para todos.",
    Icon: HeartHandshake,
  },
  {
    title: "Herramientas conectadas con tu día a día",
    description:
      "El trabajo busca reconocer patrones y ensayar respuestas más flexibles ante pensamientos, emociones y decisiones difíciles.",
    Icon: Sparkles,
  },
  {
    title: "Atención desde Pereira, sin desplazamientos",
    description:
      "Puedes realizar las sesiones por videollamada desde un lugar privado, sin viajar a Manizales para recibir atención online.",
    Icon: Video,
  },
];

const steps = [
  {
    number: "01",
    title: "Escribe y resuelve tus dudas",
    description:
      "Consulta por WhatsApp la disponibilidad, el valor y las condiciones de la atención antes de agendar.",
  },
  {
    number: "02",
    title: "Acordamos la primera sesión",
    description:
      "Se revisa si la modalidad online es apropiada para tu situación y se coordina el encuentro.",
  },
  {
    number: "03",
    title: "Comienza un proceso a tu medida",
    description:
      "En las sesiones se explora tu motivo de consulta y se establecen objetivos de trabajo según tus necesidades.",
  },
];

const reviews = [
  {
    name: "Johana Fernández Restrepo",
    text: "Excelente su trabajo 👌 trabajando no solo la mente sino también las emociones y lo que esto genera en el cuerpo, ayudando a llegar a un propósito de vida.",
  },
  {
    name: "Gladis Toro L",
    text: "Excelente profesional, sus técnicas son maravillosas, me ayudó mucho durante todo mi proceso. Lo recomiendo.",
  },
  {
    name: "Edwin Gaviria Cárdenas",
    text: "Una experiencia grata y útil para mi bienestar integral con el profesional Jefferson!",
  },
];

const questions = [
  {
    question: "¿La psicoterapia online puede ser una buena opción para mí?",
    answer:
      "Puede ser una alternativa para muchas personas adultas. Antes de comenzar se valora tu motivo de consulta y si la modalidad virtual es adecuada para tu situación particular. Ningún proceso tiene resultados garantizados.",
  },
  {
    question: "Nunca he ido a terapia. ¿Tengo que saber qué decir?",
    answer:
      "No necesitas tener todo claro antes de la primera sesión. Puedes empezar contando qué te preocupa y qué te gustaría comprender o cambiar; los objetivos se van construyendo durante el proceso.",
  },
  {
    question: "¿Qué necesito para conectarme desde Pereira?",
    answer:
      "Un dispositivo con cámara y micrófono, conexión estable a internet y un lugar donde puedas hablar con tranquilidad y privacidad. Las condiciones específicas de conexión se acuerdan antes del encuentro.",
  },
  {
    question: "¿Cuánto cuesta y cuánto dura una sesión?",
    answer:
      "El valor publicado actualmente en este sitio para residentes en Colombia es de $100.000 COP. La duración informada es de aproximadamente 60 a 90 minutos; confirma la tarifa, la duración y la disponibilidad vigentes antes de agendar.",
  },
  {
    question: "¿Cómo se maneja la privacidad de lo que hablamos?",
    answer:
      "La atención se plantea como un espacio profesional y confidencial, sujeto a los límites y deberes aplicables. Es importante disponer de un lugar privado durante la videollamada y consultar antes de iniciar cualquier inquietud sobre el manejo de la información.",
  },
  {
    question: "¿Existe un consultorio presencial en Pereira?",
    answer:
      "La atención ofrecida a pacientes de Pereira es exclusivamente online. El consultorio presencial informado en el sitio se encuentra en Manizales.",
  },
  {
    question: "¿Puedo consultar por ansiedad, depresión, estrés o burnout?",
    answer:
      "Sí, son algunos de los motivos que pueden explorarse durante una valoración individual. La pertinencia del proceso y el enfoque de trabajo se determinan según las circunstancias de cada persona.",
  },
];

function ContactButton({
  children = "Consultar disponibilidad",
  light = false,
  className = "",
}: {
  children?: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <a
      href={contactUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center text-sm font-bold shadow-md transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 " +
        (light
          ? "bg-white text-teal-900 hover:bg-teal-50 "
          : "bg-teal-700 text-white hover:bg-teal-800 ") +
        className
      }
    >
      <MessageCircle size={18} aria-hidden="true" />
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
      {children}
    </p>
  );
}

export default function PsicologoOnlinePereiraPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": pageUrl + "#service",
        name: "Psicoterapia online para adultos en Pereira",
        description:
          "Atención psicológica por videollamada para personas adultas residentes en Pereira, Risaralda.",
        url: pageUrl,
        provider: {
          "@type": "Person",
          "@id": SITE_URL + "/#person",
          name: AUTHOR_NAME,
          jobTitle: "Psicólogo",
          url: SITE_URL,
        },
        areaServed: { "@type": "City", name: "Pereira", containedInPlace: { "@type": "AdministrativeArea", name: "Risaralda" } },
        availableChannel: { "@type": "ServiceChannel", serviceUrl: pageUrl },
      },
      {
        "@type": "BreadcrumbList",
        "@id": pageUrl + "#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Psicólogo online en Pereira",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#fffcf8] font-sans text-stone-700">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="sticky top-0 z-50 border-b border-teal-100/80 bg-[#fffcf8]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Volver al inicio de Jefferson Bastidas">
            <Image src="/Logo.webp" alt="" width={48} height={48} className="h-11 w-11 object-contain" />
            <span className="flex flex-col">
              <span className="font-serif text-lg font-semibold leading-tight text-stone-900">Jefferson Bastidas</span>
              <span className="text-xs text-stone-500">Psicólogo · Atención online</span>
            </span>
          </Link>
          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-teal-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 sm:px-6"
          >
            <MessageCircle size={16} aria-hidden="true" />
            <span className="hidden sm:inline">Solicitar información</span>
            <span className="sm:hidden">Consultar</span>
          </a>
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-teal-50 via-white to-[#fffcf8] px-5 pb-16 pt-12 sm:px-8 md:pb-24 md:pt-20">
          <div className="absolute right-[-10%] top-10 -z-10 h-[450px] w-[450px] rounded-full bg-teal-100/60 blur-[110px]" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:gap-14">
            <div>
              <nav aria-label="Migas de pan" className="mb-8 text-xs text-stone-500">
                <Link href="/" className="hover:text-teal-700">Inicio</Link>
                <span className="mx-2" aria-hidden="true">/</span>
                <span aria-current="page">Psicólogo online en Pereira</span>
              </nav>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-teal-800">
                <MapPin size={15} aria-hidden="true" />
                Para adultos en Pereira, Risaralda
              </div>
              <h1 className="max-w-3xl font-serif text-[2.55rem] font-semibold leading-[1.12] tracking-tight text-stone-950 sm:text-5xl lg:text-[3.75rem]">
                Psicólogo online en Pereira
                <span className="mt-3 block text-teal-700">Un espacio para trabajar en tu bienestar emocional</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-600">
                ¿La ansiedad, el desánimo o el estrés están ocupando demasiado espacio en tu vida?
                Conoce un proceso de psicoterapia para adultos con Jefferson Bastidas Mejía,
                desde Pereira y por videollamada, sin desplazamientos.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ContactButton className="w-full sm:w-auto">Consultar por WhatsApp</ContactButton>
                <a href="#como-funciona" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3.5 text-sm font-bold text-stone-800 transition hover:border-teal-400 hover:text-teal-800">
                  Cómo funciona <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-stone-600">
                <span className="inline-flex items-center gap-2"><Video size={17} className="text-teal-700" /> Modalidad 100 % online</span>
                <span className="inline-flex items-center gap-2"><ShieldCheck size={17} className="text-teal-700" /> Atención individual</span>
                <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-teal-700" /> Terapias contextuales ACT/DBT</span>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[440px]">
              <div className="absolute inset-x-6 inset-y-10 -z-10 rounded-full bg-teal-100 blur-3xl" aria-hidden="true" />
              <Image
                src={Headerpsicojeff}
                alt="Jefferson Bastidas Mejía, psicólogo que ofrece psicoterapia online a personas adultas de Pereira"
                priority
                placeholder="blur"
                sizes="(max-width: 1024px) 85vw, 440px"
                className="mx-auto h-auto w-full object-contain drop-shadow-xl [mask-image:linear-gradient(to_bottom,black_87%,transparent_100%)]"
              />
              <div className="relative -mt-4 rounded-2xl border border-white bg-white/90 px-5 py-4 text-center shadow-lg shadow-teal-900/5 backdrop-blur-sm">
                <p className="font-serif text-xl font-semibold text-stone-900">Jefferson Bastidas Mejía</p>
                <p className="mt-1 text-sm text-stone-600">Psicólogo · Especialista en Salud Ocupacional</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-teal-100 bg-white px-5 py-10 sm:px-8" aria-label="Aspectos del servicio">
          <div className="mx-auto grid max-w-6xl gap-6 text-center sm:grid-cols-3">
            <p className="flex items-center justify-center gap-2 text-sm font-semibold text-stone-700"><Video size={19} className="text-teal-700" /> Atención por videollamada</p>
            <p className="flex items-center justify-center gap-2 text-sm font-semibold text-stone-700"><CalendarCheck2 size={19} className="text-teal-700" /> Horarios acordados previamente</p>
            <p className="flex items-center justify-center gap-2 text-sm font-semibold text-stone-700"><LockKeyhole size={19} className="text-teal-700" /> Conversación desde un espacio privado</p>
          </div>
        </section>

        <section id="motivos" className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <SectionLabel>Reconoce lo que estás viviendo</SectionLabel>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-stone-950 sm:text-4xl md:text-5xl">No necesitas tener todas las respuestas para pedir acompañamiento</h2>
              <p className="mt-5 text-lg leading-8 text-stone-600">Estos son algunos de los motivos de consulta que pueden explorarse en psicoterapia.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {concerns.map(({ title, description, Icon }) => (
                <article key={title} className="rounded-3xl border border-stone-200/80 bg-white p-7 shadow-sm transition hover:border-teal-200 hover:shadow-md md:p-9">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700"><Icon size={24} aria-hidden="true" /></span>
                  <h3 className="font-serif text-2xl font-semibold text-stone-900">{title}</h3>
                  <p className="mt-3 leading-7 text-stone-600">{description}</p>
                </article>
              ))}
            </div>
            <div className="mt-9 text-center">
              <p className="mb-4 text-sm text-stone-600">Cada situación es diferente y merece una valoración individual.</p>
              <ContactButton>Resolver mis dudas</ContactButton>
            </div>
          </div>
        </section>

        <section className="border-y border-teal-100 bg-[#effaf7] px-5 py-20 sm:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <SectionLabel>¿Qué puede aportar el proceso?</SectionLabel>
              <h2 className="font-serif text-3xl font-semibold text-stone-950 sm:text-4xl md:text-5xl">Un acompañamiento con sentido, claridad y herramientas para tu vida</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map(({ title, description, Icon }) => (
                <article key={title} className="rounded-3xl border border-teal-100 bg-white p-7 shadow-sm">
                  <Icon size={29} className="mb-6 text-teal-700" aria-hidden="true" />
                  <h3 className="font-serif text-2xl font-semibold leading-snug text-stone-900">{title}</h3>
                  <p className="mt-4 leading-7 text-stone-600">{description}</p>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-stone-600">Los objetivos y resultados dependen de la evaluación y de las circunstancias de cada persona; no se prometen cambios iguales para todos.</p>
          </div>
        </section>

        <section id="profesional" className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative mx-auto w-full max-w-sm rounded-[2.5rem] border border-teal-100 bg-teal-50 p-8 shadow-sm">
              <Image src={Jeffseo} alt="Fotografía profesional de Jefferson Bastidas Mejía" placeholder="blur" sizes="(max-width: 1024px) 80vw, 390px" className="h-auto w-full rounded-2xl object-contain" />
            </div>
            <div>
              <SectionLabel>Conoce al profesional</SectionLabel>
              <h2 className="font-serif text-3xl font-semibold text-stone-950 sm:text-4xl md:text-5xl">Una atención profesional, cercana y orientada a tu contexto</h2>
              <p className="mt-6 text-lg leading-8 text-stone-600">
                Jefferson Bastidas Mejía es psicólogo egresado de la Universidad de Manizales y Especialista en Salud Ocupacional de la Universidad Libre. Cuenta con formación complementaria en psicología clínica basada en evidencia y terapias de tercera generación.
              </p>
              <p className="mt-5 leading-8 text-stone-600">
                Su enfoque integra Terapia de Aceptación y Compromiso (ACT), recursos de Terapia Dialéctico Conductual (DBT) y una comprensión de las experiencias humanas en su contexto. El proceso se adapta al motivo de consulta y a los objetivos de cada persona.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full border border-teal-200 px-4 py-2 text-sm font-semibold text-teal-800">ACT y DBT</span>
                <span className="rounded-full border border-teal-200 px-4 py-2 text-sm font-semibold text-teal-800">Psicología basada en evidencia</span>
                <span className="rounded-full border border-teal-200 px-4 py-2 text-sm font-semibold text-teal-800">Atención para adultos</span>
              </div>
              <Link href="/sobre-jefferson-bastidas" className="mt-8 inline-flex items-center gap-2 font-bold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950">
                Conoce su formación y trayectoria <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="scroll-mt-24 border-y border-stone-200 bg-white px-5 py-20 sm:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <SectionLabel>Empezar es más sencillo de lo que parece</SectionLabel>
              <h2 className="font-serif text-3xl font-semibold text-stone-950 sm:text-4xl md:text-5xl">¿Cómo comenzar tu psicoterapia online desde Pereira?</h2>
              <p className="mt-5 text-lg leading-8 text-stone-600">Sin formularios extensos. Puedes preguntar primero y decidir después.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((step) => (
                <article key={step.number} className="relative rounded-3xl border border-stone-200 bg-[#fffcf8] p-8">
                  <span className="font-serif text-5xl font-semibold text-teal-600/35">{step.number}</span>
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-stone-900">{step.title}</h3>
                  <p className="mt-4 leading-7 text-stone-600">{step.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center"><ContactButton>Preguntar por la primera sesión</ContactButton></div>
          </div>
        </section>

        <section id="opiniones" className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <SectionLabel>Opiniones que ya aparecen en PsicoJeff</SectionLabel>
              <h2 className="font-serif text-3xl font-semibold text-stone-950 sm:text-4xl md:text-5xl">Conoce algunas experiencias compartidas públicamente</h2>
              <p className="mt-5 leading-7 text-stone-600">Estas reseñas están publicadas en la web general del profesional. No se presentan como opiniones de consultantes de Pereira ni implican que todas las personas obtendrán los mismos resultados.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {reviews.map((review) => (
                <figure key={review.name} className="flex h-full flex-col rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">
                  <div className="mb-5 flex gap-1 text-amber-500" aria-label="Cinco estrellas">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={18} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="flex-1 leading-7 text-stone-700">“{review.text}”</blockquote>
                  <figcaption className="mt-7 border-t border-stone-100 pt-5 text-sm font-bold text-stone-900">{review.name}</figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950">
                Ver más reseñas en Google <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="preguntas" className="scroll-mt-24 border-y border-teal-100 bg-[#effaf7] px-5 py-20 sm:px-8 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>Resolvamos tus dudas</SectionLabel>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-stone-950 sm:text-4xl md:text-5xl">Preguntas frecuentes antes de empezar</h2>
              <p className="mt-5 max-w-md leading-7 text-stone-600">Es razonable querer entender cómo funciona la atención, qué necesitas y cuánto cuesta antes de tomar una decisión.</p>
              <div className="mt-8 hidden lg:block"><ContactButton>Hacer una consulta</ContactButton></div>
            </div>
            <div className="space-y-3">
              {questions.map((item) => (
                <details key={item.question} className="group rounded-2xl border border-teal-100 bg-white px-5 py-4 shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-1 font-semibold text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <ChevronDown size={19} className="shrink-0 text-teal-700 transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="pb-2 pt-4 leading-7 text-stone-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="px-5 py-20 sm:px-8 md:py-28">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-teal-900 px-7 py-14 text-center text-white shadow-xl shadow-teal-950/15 sm:px-14 md:py-20">
            <div className="absolute -right-16 -top-28 h-72 w-72 rounded-full bg-teal-500/25 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-teal-300/15 blur-3xl" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-200">Tu siguiente paso</p>
              <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">Puedes empezar haciendo una pregunta</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-teal-50/90">Si vives en Pereira y quieres saber si la psicoterapia online puede encajar contigo, escribe para consultar disponibilidad y resolver tus dudas. No tienes que decidirlo todo hoy.</p>
              <div className="mt-9"><ContactButton light>Escribir por WhatsApp</ContactButton></div>
              <p className="mt-5 text-sm text-teal-100/80">Atención online para Pereira. Consulta presencial únicamente en Manizales.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white px-5 py-9 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center text-sm text-stone-600 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Jefferson Bastidas Mejía · Psicoterapia para adultos</p>
          <nav aria-label="Enlaces legales y del sitio" className="flex flex-wrap justify-center gap-5">
            <Link href="/" className="hover:text-teal-700">Inicio</Link>
            <Link href="/psicoterapia-online" className="hover:text-teal-700">Eje Cafetero y exterior</Link>
            <Link href="/privacidad" className="hover:text-teal-700">Privacidad</Link>
            <Link href="/terminos" className="hover:text-teal-700">Términos</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
