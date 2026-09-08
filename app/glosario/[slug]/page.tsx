import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/sections/Footer";
import { AUTHOR_NAME, SITE_URL, buildSeoMetadata } from "@/lib/seo/metadata";
import { getGlossaryTerm, glossaryTerms } from "@/lib/seo/glossary";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return glossaryTerms.map((term) => ({ slug: term.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);

  if (!term) {
    return {
      title: "Término no encontrado",
      robots: { index: false, follow: false },
    };
  }

  return buildSeoMetadata({
    title: `${term.term}: qué es y cómo se entiende en psicología`,
    description: term.shortDefinition,
    path: `/glosario/${term.slug}`,
  });
}

export default async function GlossaryTermPage({ params }: { params: Params }) {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);

  if (!term) return notFound();

  const pageUrl = `${SITE_URL}/glosario/${term.slug}`;
  const relatedTerms = term.relatedSlugs
    .map((relatedSlug) => getGlossaryTerm(relatedSlug))
    .filter((value): value is NonNullable<typeof value> => Boolean(value));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTerm",
        "@id": `${pageUrl}#term`,
        name: term.term,
        description: term.shortDefinition,
        url: pageUrl,
        inLanguage: "es-CO",
        inDefinedTermSet: {
          "@type": "DefinedTermSet",
          "@id": `${SITE_URL}/glosario#set`,
          name: "Glosario de psicología y terapias contextuales",
          url: `${SITE_URL}/glosario`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: term.term,
        description: term.shortDefinition,
        inLanguage: "es-CO",
        mainEntity: { "@id": `${pageUrl}#term` },
        author: {
          "@type": "Person",
          "@id": `${SITE_URL}/#person`,
          name: AUTHOR_NAME,
          jobTitle: "Psicólogo",
          url: `${SITE_URL}/sobre-jefferson-bastidas`,
        },
      },
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
            name: "Glosario",
            item: `${SITE_URL}/glosario`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: term.term,
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
        <section className="pt-36 md:pt-40 pb-20 px-6 bg-gradient-to-b from-teal-50/70 to-[#fffcf8] border-b border-stone-200/70">
          <div className="max-w-5xl mx-auto">
            <nav aria-label="Migas de pan" className="text-sm text-stone-500 mb-8">
              <Link href="/" className="hover:text-teal-700 transition-colors">Inicio</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link href="/glosario" className="hover:text-teal-700 transition-colors">Glosario</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span aria-current="page" className="text-stone-700">{term.term}</span>
            </nav>

            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-teal-700 mb-5">
              {term.category}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight text-stone-900 max-w-4xl">
              {term.term}
            </h1>
            <p className="mt-7 text-lg md:text-xl leading-relaxed text-stone-600 max-w-3xl">
              {term.shortDefinition}
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-12 lg:gap-16 items-start">
            <article className="space-y-14">
              {term.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-5 leading-tight">
                    {section.heading}
                  </h2>
                  <div className="space-y-4 text-base md:text-lg leading-8 text-stone-600">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}

              <section className="rounded-3xl border border-amber-200 bg-amber-50/70 p-7 md:p-8">
                <h2 className="font-serif text-2xl text-stone-900">Nota educativa</h2>
                <p className="mt-3 leading-7 text-stone-600">
                  Esta definición tiene fines educativos. Un término psicológico aislado no permite establecer diagnósticos ni sustituye una valoración clínica individual.
                </p>
              </section>
            </article>

            <aside className="lg:sticky lg:top-28 space-y-6">
              <div className="rounded-3xl border border-teal-100 bg-white p-7 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700 mb-3">
                  Autoría profesional
                </p>
                <h2 className="font-serif text-2xl text-stone-900">Jefferson Bastidas Mejía</h2>
                <p className="mt-3 text-stone-600 leading-7">
                  Psicólogo. Este contenido forma parte del glosario educativo del sitio y está conectado con las páginas de psicoterapia y la bitácora terapéutica.
                </p>
                <Link
                  href="/sobre-jefferson-bastidas"
                  className="mt-5 inline-flex font-bold text-teal-700 hover:text-teal-800 transition-colors"
                >
                  Ver perfil profesional →
                </Link>
              </div>

              {term.pillarLinks.length > 0 && (
                <div className="rounded-3xl border border-stone-200 bg-stone-50 p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-stone-500 mb-4">
                    Páginas relacionadas
                  </p>
                  <div className="space-y-3">
                    {term.pillarLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-xl bg-white border border-stone-200 px-4 py-3 font-semibold text-stone-700 hover:border-teal-300 hover:text-teal-700 transition-colors"
                      >
                        {link.label} →
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </section>

        <section className="py-20 px-6 bg-stone-50 border-y border-stone-200/70">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">Red semántica</span>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-3">Conceptos relacionados</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedTerms.map((related) => (
                <Link
                  key={related.slug}
                  href={`/glosario/${related.slug}`}
                  className="group rounded-2xl bg-white border border-stone-200 p-6 hover:border-teal-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-teal-700 transition-colors">
                    {related.term}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-stone-500 line-clamp-4">
                    {related.shortDefinition}
                  </p>
                  <span className="mt-5 inline-block text-sm font-bold text-teal-700">Ver término →</span>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/glosario"
                className="rounded-full bg-teal-600 px-6 py-3 font-bold text-white hover:bg-teal-700 transition-colors"
              >
                Volver al glosario
              </Link>
              <Link
                href="/blog"
                className="rounded-full border border-stone-300 bg-white px-6 py-3 font-bold text-stone-700 hover:border-teal-300 hover:text-teal-700 transition-colors"
              >
                Explorar artículos
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
