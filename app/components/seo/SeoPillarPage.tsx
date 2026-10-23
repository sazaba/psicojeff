import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/sections/Footer";
import HomeOnlineCities from "@/app/components/sections/HomeOnlineCities";
import OnlineConsultationCta from "@/app/components/seo/OnlineConsultationCta";
import orbitStyles from "@/app/components/sections/HeroOrbit.module.css";
import { AUTHOR_NAME, SITE_URL } from "@/lib/seo/metadata";
import { getGlossaryTerm } from "@/lib/seo/glossary";

export interface SeoSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface SeoRelatedLink {
  href: string;
  label: string;
  description: string;
}

interface SeoPillarPageProps {
  eyebrow: string;
  title: string;
  lead: string;
  canonicalPath: string;
  highlights: string[];
  sections: SeoSection[];
  relatedLinks: SeoRelatedLink[];
  schemaType?: "Service" | "ProfilePage";
  areaServed?: string;
  areaServedType?: "Country" | "AdministrativeArea";
  heroImage?: { src: StaticImageData; alt: string };
  showOnlineCities?: boolean;
}

const pillarGlossaryMap: Record<string, string[]> = {
  "/psicoterapia-online": [
    "flexibilidad-psicologica",
    "regulacion-emocional",
    "ansiedad",
    "mindfulness",
  ],
  "/ansiedad-manizales": [
    "ansiedad",
    "evitacion-experiencial",
    "rumiacion",
    "regulacion-emocional",
  ],
  "/depresion-manizales": [
    "depresion",
    "rumiacion",
    "regulacion-emocional",
    "insomnio",
  ],
  "/estres-burnout-manizales": [
    "estres-laboral",
    "burnout",
    "regulacion-emocional",
    "insomnio",
  ],
  "/insomnio-manizales": [
    "insomnio",
    "rumiacion",
    "ansiedad",
    "estres-laboral",
  ],
  "/terapias-contextuales-act": [
    "terapia-de-aceptacion-y-compromiso-act",
    "flexibilidad-psicologica",
    "defusion-cognitiva",
    "accion-comprometida",
  ],
  "/terapia-dialectico-conductual-dbt": [
    "terapia-dialectico-conductual-dbt",
    "regulacion-emocional",
    "tolerancia-al-malestar",
    "efectividad-interpersonal",
  ],
  "/sobre-jefferson-bastidas": [
    "terapias-contextuales",
    "terapias-de-tercera-generacion",
    "terapia-de-aceptacion-y-compromiso-act",
    "terapia-dialectico-conductual-dbt",
  ],
};

export default function SeoPillarPage({
  eyebrow,
  title,
  lead,
  canonicalPath,
  highlights,
  sections,
  relatedLinks,
  schemaType = "Service",
  areaServed = "Manizales, Caldas, Colombia",
  areaServedType = "AdministrativeArea",
  heroImage,
  showOnlineCities = false,
}: SeoPillarPageProps) {
  const pageUrl = `${SITE_URL}${canonicalPath}`;
  const personId = `${SITE_URL}/#person`;
  const showHeroOrbit = canonicalPath === "/psicoterapia-online";
  const glossaryLinks = (pillarGlossaryMap[canonicalPath] || [])
    .map((slug) => getGlossaryTerm(slug))
    .filter((value): value is NonNullable<typeof value> => Boolean(value));

  const primaryEntity =
    schemaType === "ProfilePage"
      ? {
          "@type": "ProfilePage",
          "@id": `${pageUrl}#profile-page`,
          url: pageUrl,
          name: title,
          description: lead,
          inLanguage: "es-CO",
          mainEntity: {
            "@type": "Person",
            "@id": personId,
            name: AUTHOR_NAME,
            jobTitle: "Psicólogo",
            url: SITE_URL,
            knowsAbout: [
              "Terapia de Aceptación y Compromiso (ACT)",
              "Terapia Dialéctico Conductual (DBT)",
              "Terapias Contextuales de Tercera Generación",
              "Psicología Clínica Basada en la Evidencia",
            ],
          },
        }
      : {
          "@type": "Service",
          "@id": `${pageUrl}#service`,
          url: pageUrl,
          name: title,
          description: lead,
          provider: {
            "@type": "Person",
            "@id": personId,
            name: AUTHOR_NAME,
            jobTitle: "Psicólogo",
            url: SITE_URL,
          },
          areaServed: {
            "@type": areaServedType,
            name: areaServed,
          },
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: pageUrl,
          },
        };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      primaryEntity,
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
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
            name: title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#fffcf8] text-stone-700">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main>
        <section className="pt-36 md:pt-40 pb-20 px-6 border-b border-stone-200/70 bg-gradient-to-b from-teal-50/60 to-[#fffcf8]">
          <div className="max-w-5xl mx-auto">
            <nav aria-label="Migas de pan" className="text-sm text-stone-500 mb-8">
              <Link href="/" className="hover:text-teal-700 transition-colors">
                Inicio
              </Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span aria-current="page" className="text-stone-700">
                {title}
              </span>
            </nav>

            <div className={heroImage ? "grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] items-center gap-10 lg:gap-12" : ""}>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-teal-700 mb-5">
                  {eyebrow}
                </span>
                <h1 className={`font-serif text-4xl ${heroImage ? "md:text-5xl" : "md:text-6xl"} font-semibold leading-tight text-stone-900 max-w-4xl`}>
                  {title}
                </h1>
                <p className="mt-7 text-lg md:text-xl leading-relaxed text-stone-600 max-w-3xl">
                  {lead}
                </p>

                <div className="mt-10 flex flex-wrap gap-3" aria-label="Aspectos clave">
                  {highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-800 shadow-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {heroImage && (
                <div className="mx-auto w-full max-w-[340px] lg:max-w-[360px]">
                  <div className="relative isolate w-full">
                    <div
                      className="absolute inset-x-5 top-8 bottom-12 rounded-full bg-teal-100/50 blur-3xl"
                      aria-hidden="true"
                    />
                    {showHeroOrbit && (
                      <div className={orbitStyles.orbitStage} aria-hidden="true">
                        <span className={orbitStyles.orbitAura} />
                        <span className={orbitStyles.orbitOuter}>
                          <span className={orbitStyles.orbitDotOuter} />
                          <span className={orbitStyles.orbitDotSecondary} />
                        </span>
                        <span className={orbitStyles.orbitInner}>
                          <span className={orbitStyles.orbitDotInner} />
                        </span>
                      </div>
                    )}
                    <Image
                      src={heroImage.src}
                      alt={heroImage.alt}
                      className="relative z-10 h-auto w-full object-contain drop-shadow-xl [mask-image:linear-gradient(to_bottom,black_88%,transparent_100%)]"
                      priority
                      placeholder="blur"
                      sizes="(max-width: 1024px) 340px, 360px"
                    />
                  </div>
                  {showHeroOrbit && (
                    <p className="relative z-10 mt-4 w-full px-4 text-center font-serif text-lg font-semibold italic leading-relaxed text-teal-800 md:text-xl">
                      Impactar vidas a través del bienestar mental con significado y propósito
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {canonicalPath === "/psicoterapia-online" && <OnlineConsultationCta />}
        {showOnlineCities && <HomeOnlineCities showExploreLink={false} />}

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-12 lg:gap-16 items-start">
            <article className="space-y-14">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-5 leading-tight">
                    {section.heading}
                  </h2>
                  <div className="space-y-4 text-base md:text-lg leading-8 text-stone-600">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-6 space-y-3 text-stone-600">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 leading-7">
                          <span className="mt-2 h-2 w-2 rounded-full bg-teal-500 shrink-0" aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </article>

            <aside className="lg:sticky lg:top-28 rounded-3xl border border-teal-100 bg-white p-7 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700 mb-3">
                Orientación inicial
              </p>
              <h2 className="font-serif text-2xl text-stone-900 mb-4">
                {canonicalPath === "/psicoterapia-online"
                  ? "¿Quieres consultar por una primera sesión online?"
                  : "¿Quieres saber si este enfoque encaja contigo?"}
              </h2>
              <p className="text-stone-600 leading-7 mb-6">
                {canonicalPath === "/psicoterapia-online"
                  ? "Atención para adultos en Colombia. Tarifa publicada: $100.000 COP por sesión de 60 a 90 minutos. Consulta horarios y confirma las condiciones antes de agendar."
                  : "Puedes solicitar información sobre modalidad, disponibilidad y el proceso de atención antes de agendar."}
              </p>
              <a
                href="https://wa.link/2x3i8s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center rounded-full bg-teal-600 px-6 py-3.5 font-bold text-white hover:bg-teal-700 transition-colors"
              >
                Consultar disponibilidad por WhatsApp
              </a>
              <Link
                href="/blog"
                className="mt-4 inline-flex w-full justify-center rounded-full border border-stone-200 px-6 py-3.5 font-semibold text-stone-700 hover:border-teal-300 hover:text-teal-700 transition-colors"
              >
                Explorar artículos
              </Link>
              <Link
                href="/glosario"
                className="mt-3 inline-flex w-full justify-center rounded-full border border-stone-200 px-6 py-3.5 font-semibold text-stone-700 hover:border-teal-300 hover:text-teal-700 transition-colors"
              >
                Consultar glosario
              </Link>
            </aside>
          </div>
        </section>

        {glossaryLinks.length > 0 && (
          <section className="py-16 px-6 bg-white border-y border-stone-200/70">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-2xl mb-9">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                  Conceptos clave
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-3">
                  Profundiza en el glosario
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {glossaryLinks.map((term) => (
                  <Link
                    key={term.slug}
                    href={`/glosario/${term.slug}`}
                    className="group rounded-2xl border border-stone-200 p-5 hover:border-teal-300 hover:shadow-sm transition-all"
                  >
                    <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-teal-700 transition-colors">
                      {term.term}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-stone-500 line-clamp-3">
                      {term.shortDefinition}
                    </p>
                    <span className="mt-4 inline-block text-sm font-bold text-teal-700">
                      Ver definición →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-20 px-6 bg-stone-50 border-b border-stone-200/70">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                Continúa explorando
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-3">
                Contenidos y servicios relacionados
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-2xl bg-white border border-stone-200 p-6 hover:border-teal-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-teal-700 transition-colors">
                    {link.label}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-stone-500">
                    {link.description}
                  </p>
                  <span className="mt-5 inline-block text-sm font-bold text-teal-700">
                    Ver página →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
