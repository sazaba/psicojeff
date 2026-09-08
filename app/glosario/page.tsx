import Link from "next/link";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/sections/Footer";
import { buildSeoMetadata, SITE_URL } from "@/lib/seo/metadata";
import { glossaryTerms } from "@/lib/seo/glossary";

export const metadata = buildSeoMetadata({
  title: "Glosario de psicología y terapias contextuales",
  description:
    "Glosario educativo sobre ACT, DBT, flexibilidad psicológica, ansiedad, regulación emocional, burnout, insomnio y otros conceptos de psicología.",
  path: "/glosario",
});

const groupedTerms = glossaryTerms.reduce<Record<string, typeof glossaryTerms>>((acc, term) => {
  if (!acc[term.category]) acc[term.category] = [];
  acc[term.category].push(term);
  return acc;
}, {});

export default function GlossaryIndexPage() {
  const pageUrl = `${SITE_URL}/glosario`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTermSet",
        "@id": `${pageUrl}#set`,
        name: "Glosario de psicología y terapias contextuales",
        url: pageUrl,
        description:
          "Definiciones educativas de conceptos utilizados en psicología, terapias contextuales, bienestar emocional, trabajo y sueño.",
        inLanguage: "es-CO",
        hasDefinedTerm: glossaryTerms.map((term) => ({
          "@type": "DefinedTerm",
          "@id": `${SITE_URL}/glosario/${term.slug}#term`,
          name: term.term,
          description: term.shortDefinition,
          url: `${SITE_URL}/glosario/${term.slug}`,
        })),
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
          <div className="max-w-6xl mx-auto">
            <nav aria-label="Migas de pan" className="text-sm text-stone-500 mb-8">
              <Link href="/" className="hover:text-teal-700 transition-colors">
                Inicio
              </Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span aria-current="page" className="text-stone-700">Glosario</span>
            </nav>

            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-teal-700 mb-5">
              Biblioteca de conceptos
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight text-stone-900 max-w-4xl">
              Glosario de psicología y terapias contextuales
            </h1>
            <p className="mt-7 text-lg md:text-xl leading-relaxed text-stone-600 max-w-3xl">
              Definiciones claras para comprender conceptos que aparecen en psicoterapia, salud mental, trabajo y sueño. El objetivo es ayudarte a orientarte, no reemplazar una valoración profesional.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/terapias-contextuales-act"
                className="rounded-full border border-teal-200 bg-white px-5 py-2.5 text-sm font-bold text-teal-800 hover:border-teal-400 transition-colors"
              >
                Explorar ACT y terapias contextuales
              </Link>
              <Link
                href="/blog"
                className="rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-bold text-stone-700 hover:border-teal-300 hover:text-teal-700 transition-colors"
              >
                Ver artículos del blog
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {Object.entries(groupedTerms).map(([category, terms]) => (
              <section key={category} aria-labelledby={`categoria-${category}`}>
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                    Categoría
                  </span>
                  <h2
                    id={`categoria-${category}`}
                    className="font-serif text-3xl md:text-4xl text-stone-900 mt-2"
                  >
                    {category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {terms
                    .slice()
                    .sort((a, b) => a.term.localeCompare(b.term, "es"))
                    .map((term) => (
                      <Link
                        key={term.slug}
                        href={`/glosario/${term.slug}`}
                        className="group rounded-2xl bg-white border border-stone-200 p-6 hover:border-teal-300 hover:shadow-md transition-all"
                      >
                        <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-teal-700 transition-colors">
                          {term.term}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-stone-500">
                          {term.shortDefinition}
                        </p>
                        <span className="mt-5 inline-block text-sm font-bold text-teal-700">
                          Ver definición →
                        </span>
                      </Link>
                    ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="py-16 px-6 bg-stone-50 border-y border-stone-200/70">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-stone-900">Cómo usar este glosario</h2>
            <p className="mt-5 text-stone-600 leading-8">
              Cada término incluye una definición breve, una explicación contextual y enlaces hacia conceptos y páginas relacionadas. Los contenidos son educativos y no deben utilizarse para autodiagnóstico.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
