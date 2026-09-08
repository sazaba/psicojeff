import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/sections/Footer";
import { buildSeoMetadata, SITE_URL } from "@/lib/seo/metadata";

export const metadata = buildSeoMetadata({
  title: "Batería de riesgo psicosocial para empresas",
  description:
    "Aplicación de batería de riesgo psicosocial, capacitación y bienestar emocional para empresas, con referencia a las Resoluciones 2646 de 2008 y 2764 de 2022.",
  path: "/riesgo-psicosocial-empresas",
});

const serviceItems = [
  {
    icon: ClipboardCheck,
    title: "Aplicación de la batería de riesgo psicosocial",
    text: "Acompañamiento profesional para organizar, aplicar y analizar la evaluación de factores de riesgo psicosocial en la población trabajadora, de acuerdo con el alcance definido para la organización.",
  },
  {
    icon: HeartPulse,
    title: "Promoción y prevención",
    text: "Orientación para convertir los resultados en acciones comprensibles de promoción, prevención e intervención, priorizando los factores que requieren seguimiento dentro del SG-SST.",
  },
  {
    icon: GraduationCap,
    title: "Capacitaciones para empresas",
    text: "Espacios formativos en riesgo psicosocial, manejo del estrés, bienestar emocional, autocuidado, relaciones de trabajo y herramientas prácticas para equipos y líderes.",
  },
];

const steps = [
  "Definición del alcance, población y condiciones de aplicación.",
  "Planeación de la jornada y comunicación a los trabajadores.",
  "Aplicación de los instrumentos que correspondan.",
  "Procesamiento e interpretación de los resultados.",
  "Presentación de hallazgos y prioridades de gestión.",
  "Orientación sobre acciones de promoción, prevención o intervención.",
];

const faqs = [
  {
    question: "¿Qué es la batería de riesgo psicosocial?",
    answer:
      "Es un conjunto de instrumentos adoptados como referente técnico para evaluar factores de riesgo psicosocial en el trabajo. Su aplicación permite identificar condiciones que requieren gestión preventiva y seguimiento dentro de la organización.",
  },
  {
    question: "¿Qué relación tiene con la Resolución 2646 de 2008?",
    answer:
      "La Resolución 2646 de 2008 establece disposiciones y responsabilidades para la identificación, evaluación, prevención, intervención y monitoreo permanente de la exposición a factores de riesgo psicosocial en el trabajo.",
  },
  {
    question: "¿Qué establece la Resolución 2764 de 2022?",
    answer:
      "La Resolución 2764 de 2022 adopta la Batería de Instrumentos para la Evaluación de Factores de Riesgo Psicosocial, la guía técnica general y protocolos específicos como referentes técnicos para la gestión de estos factores.",
  },
  {
    question: "¿También se realizan capacitaciones para empresas?",
    answer:
      "Sí. El servicio puede complementarse con capacitaciones y espacios formativos en riesgo psicosocial, prevención, manejo del estrés, bienestar emocional, autocuidado y habilidades aplicables al entorno laboral.",
  },
];

export default function RiesgoPsicosocialEmpresasPage() {
  const pageUrl = `${SITE_URL}/riesgo-psicosocial-empresas`;
  const personId = `${SITE_URL}/#person`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Batería de riesgo psicosocial para empresas",
        description:
          "Aplicación de batería de riesgo psicosocial, capacitación y bienestar emocional para empresas en Colombia.",
        inLanguage: "es-CO",
        about: {
          "@type": "Thing",
          name: "Gestión de factores de riesgo psicosocial en el trabajo",
        },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Aplicación de batería de riesgo psicosocial y capacitación para empresas",
        serviceType: [
          "Aplicación de batería de riesgo psicosocial",
          "Capacitación en riesgo psicosocial",
          "Bienestar emocional para empresas",
        ],
        provider: {
          "@type": "Person",
          "@id": personId,
          name: "Jefferson Bastidas Mejía",
          jobTitle: "Psicólogo y especialista en Salud Ocupacional",
          url: `${SITE_URL}/sobre-jefferson-bastidas`,
        },
        areaServed: {
          "@type": "Country",
          name: "Colombia",
        },
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Empresas y organizaciones",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Riesgo psicosocial para empresas",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#fffcf8] text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />

      <main>
        <section className="px-6 pt-16 md:pt-24 pb-20 md:pb-28 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.12),_transparent_38%),linear-gradient(180deg,#fffcf8_0%,#f5f2ec_100%)]">
          <div className="max-w-7xl mx-auto">
            <nav aria-label="Breadcrumb" className="text-sm text-stone-500 mb-10">
              <Link href="/" className="hover:text-teal-700 transition-colors">Inicio</Link>
              <span className="mx-2">/</span>
              <span>Riesgo psicosocial para empresas</span>
            </nav>

            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 text-teal-700 font-bold tracking-[0.18em] text-xs uppercase mb-5">
                  <Building2 size={17} />
                  Servicios para empresas
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[0.98] tracking-tight">
                  Batería de riesgo psicosocial y bienestar para empresas
                </h1>
                <p className="mt-7 text-lg md:text-xl leading-8 text-stone-600 max-w-3xl">
                  Acompañamiento profesional para organizaciones que necesitan evaluar factores de riesgo psicosocial, fortalecer su gestión preventiva y desarrollar acciones de bienestar emocional con sus equipos de trabajo.
                </p>
                <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-stone-700">
                  <span className="rounded-full border border-stone-200 bg-white px-4 py-2">Batería de riesgo psicosocial</span>
                  <span className="rounded-full border border-stone-200 bg-white px-4 py-2">Capacitaciones</span>
                  <span className="rounded-full border border-stone-200 bg-white px-4 py-2">Bienestar emocional</span>
                  <span className="rounded-full border border-stone-200 bg-white px-4 py-2">SG-SST</span>
                </div>
              </div>

              <div className="rounded-[2rem] bg-[#124c46] text-white p-8 md:p-10 shadow-2xl shadow-teal-900/10">
                <ShieldCheck size={34} className="text-teal-200" />
                <h2 className="mt-6 text-3xl font-serif">Marco técnico y normativo</h2>
                <p className="mt-4 text-teal-50/80 leading-7">
                  El servicio toma como referencia la Resolución 2646 de 2008, que establece responsabilidades frente a la identificación, evaluación, prevención, intervención y monitoreo de los factores de riesgo psicosocial en el trabajo.
                </p>
                <p className="mt-4 text-teal-50/80 leading-7">
                  La Resolución 2764 de 2022 adopta la batería de instrumentos, la guía técnica general y protocolos específicos para la gestión de estos factores en la población trabajadora.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-[0.18em] font-bold text-teal-700">Qué incluye</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-serif leading-tight">Una gestión que no termina con aplicar un cuestionario</h2>
              <p className="mt-5 text-lg leading-8 text-stone-600">
                La evaluación es un punto de partida. El valor para la organización está en comprender los hallazgos, priorizar necesidades y convertir la información en decisiones preventivas que puedan integrarse al Sistema de Gestión de Seguridad y Salud en el Trabajo.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {serviceItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-[1.75rem] border border-stone-200 bg-[#fffcf8] p-7 md:p-8">
                    <div className="h-12 w-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center">
                      <Icon size={23} />
                    </div>
                    <h3 className="mt-6 text-2xl font-serif">{item.title}</h3>
                    <p className="mt-3 text-stone-600 leading-7">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-24 bg-[#f4f1eb]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16">
            <div>
              <span className="text-xs uppercase tracking-[0.18em] font-bold text-teal-700">Proceso de trabajo</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-serif leading-tight">De la evaluación a una lectura útil para la empresa</h2>
              <p className="mt-5 text-stone-600 text-lg leading-8">
                Cada organización tiene una realidad distinta. Por eso el alcance se define antes de iniciar, considerando población, condiciones de trabajo, necesidades de comunicación y objetivos de la evaluación.
              </p>
            </div>

            <ol className="rounded-[2rem] border border-stone-200 bg-white overflow-hidden">
              {steps.map((step, index) => (
                <li key={step} className="grid grid-cols-[auto_1fr] gap-5 p-6 md:p-7 border-b border-stone-100 last:border-b-0">
                  <span className="h-9 w-9 rounded-full bg-[#124c46] text-white flex items-center justify-center text-sm font-bold">{index + 1}</span>
                  <p className="text-stone-700 leading-7 pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-6 py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="text-xs uppercase tracking-[0.18em] font-bold text-teal-700">Capacitación y bienestar</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-serif leading-tight">Capacitaciones en riesgo psicosocial y bienestar emocional</h2>
              <p className="mt-5 text-lg leading-8 text-stone-600">
                Las capacitaciones pueden desarrollarse como complemento de una evaluación o como actividades independientes de promoción y prevención. El contenido se ajusta al tipo de población y a las necesidades de la organización.
              </p>
              <ul className="mt-7 space-y-4">
                {[
                  "Comprensión de los factores de riesgo psicosocial en el trabajo.",
                  "Manejo del estrés y recuperación frente a la sobrecarga.",
                  "Bienestar emocional y autocuidado en contextos laborales.",
                  "Herramientas para líderes y equipos frente a demandas psicosociales.",
                  "Promoción de prácticas de trabajo más saludables.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-700 leading-7">
                    <CheckCircle2 size={20} className="text-teal-700 mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] bg-stone-950 text-white p-8 md:p-10">
              <h3 className="text-3xl font-serif">Experiencia profesional aplicada al entorno laboral</h3>
              <p className="mt-5 text-stone-300 leading-8">
                El servicio es liderado por Jefferson Bastidas Mejía, psicólogo y especialista en Salud Ocupacional, con experiencia profesional y formación complementaria en psicología clínica basada en la evidencia y terapias de tercera generación.
              </p>
              <Link
                href="/sobre-jefferson-bastidas"
                className="mt-7 inline-flex items-center gap-2 text-teal-300 font-bold hover:text-teal-200 transition-colors"
              >
                Conocer perfil profesional <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-24 bg-[#fffcf8]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-[0.18em] font-bold text-teal-700">Preguntas frecuentes</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-serif">Antes de solicitar el servicio</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-stone-200 bg-white p-6 md:p-7 open:border-teal-200">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                    <h3 className="font-serif text-xl md:text-2xl">{faq.question}</h3>
                    <span className="text-2xl text-stone-400 group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-5 pt-5 border-t border-stone-100 text-stone-600 leading-8">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 bg-[#fffcf8]">
          <div className="max-w-5xl mx-auto rounded-[2rem] bg-[#124c46] text-white p-8 md:p-12 text-center">
            <span className="text-teal-200 text-xs font-bold uppercase tracking-[0.18em]">Para empresas y organizaciones</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-serif">Conversemos sobre el alcance que necesita tu organización</h2>
            <p className="mt-5 text-teal-50/80 text-lg leading-8 max-w-2xl mx-auto">
              Puedes solicitar información sobre aplicación de batería de riesgo psicosocial, capacitaciones o actividades de bienestar emocional para equipos de trabajo.
            </p>
            <a
              href="https://wa.link/2x3i8s"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-bold text-[#124c46] hover:bg-teal-50 transition-colors"
            >
              Solicitar información <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
