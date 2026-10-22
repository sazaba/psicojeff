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
    number: "01",
    category: "Evaluación",
    title: "Batería de riesgo psicosocial",
    text: "Aplicación y acompañamiento técnico para organizar, evaluar y analizar los factores de riesgo psicosocial en el trabajo, según el alcance acordado con la organización.",
    detail: "Hallazgos que ayudan a identificar prioridades de gestión.",
  },
  {
    icon: GraduationCap,
    number: "02",
    category: "Formación",
    title: "Capacitaciones para equipos",
    text: "Espacios formativos para equipos y líderes sobre riesgo psicosocial, prevención, autocuidado, manejo del estrés y bienestar emocional en el entorno laboral.",
    detail: "Contenidos ajustados a las necesidades de cada equipo.",
  },
  {
    icon: HeartPulse,
    number: "03",
    category: "Promoción y prevención",
    title: "Promoción y prevención",
    text: "Acciones orientadas a fortalecer prácticas de cuidado, prevención y gestión psicosocial en las organizaciones, articuladas con los hallazgos de la evaluación cuando corresponda.",
    detail: "Orientación para dar continuidad al cuidado y al seguimiento.",
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
        <section className="px-5 sm:px-6 pt-16 md:pt-24 pb-20 md:pb-28 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.12),_transparent_38%),linear-gradient(180deg,#fffcf8_0%,#f5f2ec_100%)]">
          <div className="max-w-7xl mx-auto">
            <nav aria-label="Breadcrumb" className="text-sm text-stone-500 mb-10">
              <Link href="/" className="hover:text-teal-700 transition-colors">Inicio</Link>
              <span className="mx-2">/</span>
              <span>Riesgo psicosocial para empresas</span>
            </nav>

            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
              <div className="min-w-0">
                <span className="inline-flex items-center gap-2 text-teal-700 font-bold tracking-[0.18em] text-xs uppercase mb-5">
                  <Building2 size={17} />
                  Servicios para empresas
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[0.98] tracking-tight break-words">
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

              <div className="rounded-[1.75rem] md:rounded-[2rem] bg-[linear-gradient(145deg,#155e56_0%,#0f4f49_100%)] text-white p-6 sm:p-8 md:p-10 shadow-2xl shadow-teal-900/10 ring-1 ring-white/10">
                <ShieldCheck size={34} className="text-teal-200" />
                <h2 className="mt-6 text-2xl sm:text-3xl font-serif text-white leading-tight">Marco técnico y normativo</h2>
                <p className="mt-4 text-stone-100/90 leading-7 md:leading-8">
                  El servicio toma como referencia la Resolución 2646 de 2008, que establece responsabilidades frente a la identificación, evaluación, prevención, intervención y monitoreo de los factores de riesgo psicosocial en el trabajo.
                </p>
                <p className="mt-4 text-stone-100/90 leading-7 md:leading-8">
                  La Resolución 2764 de 2022 adopta la batería de instrumentos, la guía técnica general y protocolos específicos para la gestión de estos factores en la población trabajadora.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="servicios-empresas" className="px-5 sm:px-6 py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-[0.18em] font-bold text-teal-700">Servicios para empresas</span>
              <h2 id="servicios-empresas" className="mt-4 text-3xl md:text-5xl font-serif leading-tight">
                Evaluar, formar y prevenir: tres líneas de acompañamiento
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-600">
                La batería de riesgo psicosocial, las capacitaciones y las acciones de promoción y prevención pueden desarrollarse de manera independiente o complementaria, según las necesidades de la organización. Cuando se articulan, los hallazgos orientan las prioridades y las acciones de cuidado.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-[1.75rem] bg-[linear-gradient(145deg,#173d38_0%,#102c29_100%)] p-4 shadow-[0_30px_80px_-50px_rgba(13,55,50,0.65)] sm:p-6 md:rounded-[2rem] md:p-8">
              <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
                {serviceItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="flex h-full flex-col rounded-[1.4rem] border border-white/15 bg-white/[0.045] p-6 sm:p-7">
                      <div className="flex items-center justify-between gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-teal-200/20 bg-teal-200/10 text-teal-200">
                          <Icon size={23} aria-hidden="true" />
                        </span>
                        <span className="text-sm font-bold tracking-widest text-teal-200/75">{item.number}</span>
                      </div>
                      <p className="mt-7 text-xs font-bold uppercase tracking-[0.15em] !text-teal-200">{item.category}</p>
                      <h3 className="mt-2 font-serif text-2xl leading-tight !text-white">{item.title}</h3>
                      <p className="mt-4 text-base leading-7 !text-stone-100">{item.text}</p>
                      <p className="mt-auto border-t border-white/15 pt-5 text-sm leading-6 !text-teal-100 sm:mt-8">
                        {item.detail}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-6 py-20 md:py-24 bg-[#f4f1eb]">
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

        <section className="px-5 sm:px-6 py-20 md:py-24 bg-white">
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

            <div className="rounded-[1.75rem] md:rounded-[2rem] bg-[linear-gradient(145deg,#11100f_0%,#070706_100%)] text-white p-6 sm:p-8 md:p-10 ring-1 ring-white/10 shadow-xl shadow-stone-300/20">
              <h3 className="text-2xl sm:text-3xl font-serif text-white leading-tight">Experiencia profesional aplicada al entorno laboral</h3>
              <p className="mt-5 text-stone-200 leading-8">
                El servicio es liderado por Jefferson Bastidas Mejía, psicólogo y especialista en Salud Ocupacional, con experiencia profesional y formación complementaria en psicología clínica basada en la evidencia y terapias de tercera generación.
              </p>
              <Link
                href="/sobre-jefferson-bastidas"
                className="mt-7 inline-flex items-center gap-2 text-teal-300 font-bold hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70 rounded-md"
              >
                Conocer perfil profesional <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-6 py-20 md:py-24 bg-[#fffcf8]">
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

        <section className="px-5 sm:px-6 pb-24 bg-[#fffcf8]">
          <div className="max-w-5xl mx-auto rounded-[1.75rem] md:rounded-[2rem] bg-[linear-gradient(145deg,#155e56_0%,#0f4f49_100%)] text-white p-7 sm:p-9 md:p-12 text-center ring-1 ring-white/10 shadow-2xl shadow-teal-900/10">
            <span className="text-teal-100 text-xs font-bold uppercase tracking-[0.18em]">Para empresas y organizaciones</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight max-w-3xl mx-auto">
              Conversemos sobre el alcance que necesita tu organización
            </h2>
            <p className="mt-5 text-stone-100/90 text-base sm:text-lg leading-8 max-w-2xl mx-auto">
              Puedes solicitar información sobre aplicación de batería de riesgo psicosocial, capacitaciones o actividades de bienestar emocional para equipos de trabajo.
            </p>
            <a
              href="https://wa.link/2x3i8s"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 font-bold text-[#124c46] hover:bg-teal-50 transition-all hover:-translate-y-0.5 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
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
