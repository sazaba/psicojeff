import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, RefreshCw } from "lucide-react";
import { prisma } from "@/lib/prisma";
import ShareButton from "@/app/components/ui/ShareButton";
import AuthorTrustCard from "@/app/components/seo/AuthorTrustCard";
import RelatedPosts from "@/app/components/seo/RelatedPosts";
import imageJeff from "@/app/assets/Jeffseo.webp";
import { findGlossaryTermsInText } from "@/lib/seo/glossary";

const siteUrl = "https://psicologojeffersonbastidas.com";
const authorUrl = `${siteUrl}/sobre-jefferson-bastidas`;

export const revalidate = 3600;

type Params = Promise<{ slug: string }>;

function parseTags(category: string): string[] {
  try {
    if (category.startsWith("[")) {
      const parsed = JSON.parse(category);
      return Array.isArray(parsed) ? parsed : [category];
    }
  } catch {
    return [category];
  }

  return [category];
}

function cleanDescription(value: string) {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);
}

function absoluteImageUrl(value?: string | null) {
  if (!value) return `${siteUrl}${imageJeff.src}`;
  if (/^https?:\/\//i.test(value)) return value;
  return `${siteUrl}${value.startsWith("/") ? value : `/${value}`}`;
}

export async function generateStaticParams() {
  const posts = await prisma.post.findMany({
    where: { slug: { not: null } },
    select: { slug: true },
  });

  return posts
    .filter((post) => Boolean(post.slug))
    .map((post) => ({ slug: post.slug as string }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post) {
    return {
      title: "Artículo no encontrado",
      robots: { index: false, follow: false },
    };
  }

  const description = cleanDescription(post.excerpt || post.content);
  const canonicalPath = `/blog/${post.slug}`;
  const image = absoluteImageUrl(post.image);

  return {
    title: post.title,
    description,
    authors: [{ name: "Jefferson Bastidas Mejía", url: "/sobre-jefferson-bastidas" }],
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: post.title,
      description,
      url: canonicalPath,
      siteName: "Jefferson Bastidas Psicólogo",
      locale: "es_CO",
      type: "article",
      publishedTime: post.createdAt.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      authors: [authorUrl],
      images: [
        {
          url: image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;

  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post) return notFound();

  const dateFormatter = new Intl.DateTimeFormat("es-CO", {
    dateStyle: "long",
  });
  const formattedDate = dateFormatter.format(post.createdAt);
  const formattedUpdatedDate = dateFormatter.format(post.updatedAt);
  const hasMeaningfulUpdate =
    post.updatedAt.getTime() - post.createdAt.getTime() > 24 * 60 * 60 * 1000;

  const cleanContent = post.content
    .replace(/&nbsp;/g, " ")
    .replace(/\u00a0/g, " ")
    .replace(/href=(["'])www\./g, 'href=$1https://www.')
    .replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ');

  const tags = parseTags(post.category);
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;
  const description = cleanDescription(post.excerpt || post.content);
  const image = absoluteImageUrl(post.image);
  const glossaryMatches = findGlossaryTermsInText(
    `${post.title} ${post.excerpt || ""} ${post.content}`,
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#article`,
        headline: post.title,
        description,
        image: [image],
        datePublished: post.createdAt.toISOString(),
        dateModified: post.updatedAt.toISOString(),
        inLanguage: "es-CO",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        isPartOf: {
          "@type": "Blog",
          "@id": `${siteUrl}/blog#blog`,
          url: `${siteUrl}/blog`,
          name: "Bitácora Terapéutica",
        },
        author: {
          "@type": "Person",
          "@id": `${siteUrl}/#person`,
          name: "Jefferson Bastidas Mejía",
          url: authorUrl,
          jobTitle: "Psicólogo",
        },
        publisher: {
          "@type": "Person",
          "@id": `${siteUrl}/#person`,
          name: "Jefferson Bastidas Mejía",
          url: authorUrl,
        },
        about: tags.map((tag) => ({
          "@type": "Thing",
          name: tag,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${siteUrl}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <article className="min-h-screen bg-white pb-24 font-sans text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="relative w-full h-[55vh] min-h-[450px] bg-stone-900">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pb-16 md:pb-24">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <Link
              href="/blog"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors text-xs font-bold uppercase tracking-widest"
            >
              <ArrowLeft size={16} className="mr-2" />
              Volver a la bitácora
            </Link>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex gap-2 flex-wrap">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-teal-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="flex items-center gap-2 text-stone-300 text-xs font-bold uppercase tracking-wider border-l border-stone-500 pl-4">
                <Clock size={14} className="text-teal-400" />
                {post.readTime || "Lectura rápida"}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-tight drop-shadow-xl max-w-4xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 -mt-12 relative z-10 max-w-5xl">
        <div className="bg-white rounded-t-3xl md:rounded-3xl shadow-2xl p-8 md:p-16 border border-stone-100 relative">
          {post.excerpt && (
            <div className="text-xl text-stone-600 font-serif italic mb-10 pb-6 border-b border-stone-100 leading-relaxed">
              {post.excerpt}
            </div>
          )}

          <div className="mb-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-500">
            <Link href="/sobre-jefferson-bastidas" className="font-bold text-stone-700 hover:text-teal-700">
              Por Jefferson Bastidas Mejía, Psicólogo
            </Link>
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-teal-600" />
              Publicado el {formattedDate}
            </span>
            {hasMeaningfulUpdate && (
              <span className="flex items-center gap-2">
                <RefreshCw size={15} className="text-teal-600" />
                Actualizado el {formattedUpdatedDate}
              </span>
            )}
          </div>

          <div className="safe-content relative z-20" dangerouslySetInnerHTML={{ __html: cleanContent }} />

          {glossaryMatches.length > 0 && (
            <section className="mt-14 rounded-3xl border border-teal-100 bg-teal-50/40 p-7 md:p-8">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                Conceptos relacionados
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-stone-900 mt-2">
                Amplía estos términos en el glosario
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {glossaryMatches.map((term) => (
                  <Link
                    key={term.slug}
                    href={`/glosario/${term.slug}`}
                    className="rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-bold text-teal-800 hover:border-teal-400 transition-colors"
                  >
                    {term.term}
                  </Link>
                ))}
              </div>
              <Link
                href="/glosario"
                className="mt-6 inline-flex text-sm font-bold text-teal-700 hover:text-teal-800 transition-colors"
              >
                Ver glosario completo →
              </Link>
            </section>
          )}

          <div className="mt-14">
            <AuthorTrustCard />
          </div>

          <RelatedPosts currentPostId={post.id} currentTags={tags} />

          <div className="mt-14 rounded-2xl border border-stone-200 bg-stone-50 p-5 text-sm leading-6 text-stone-500">
            <strong className="text-stone-700">Nota editorial:</strong> este contenido tiene fines educativos y no sustituye una valoración psicológica individual. Si el artículo se actualiza, la fecha de modificación se refleja en los metadatos y, cuando corresponde, también de forma visible en esta página.
          </div>

          <div className="mt-12 pt-8 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-6 relative z-20">
            <Link
              href="/sobre-jefferson-bastidas"
              className="text-sm font-bold text-teal-700 hover:text-teal-800"
            >
              Conocer al autor →
            </Link>
            <ShareButton />
          </div>
        </div>
      </div>

      <style>{`
        .safe-content {
            font-family: 'Lato', system-ui, sans-serif;
            font-size: 1.125rem;
            line-height: 1.7;
            color: #44403c;
            width: 100%;
        }

        .safe-content * {
            word-break: normal !important;
            overflow-wrap: break-word !important;
            white-space: normal !important;
        }

        .safe-content p {
            margin-bottom: 1rem !important;
            min-height: 1.2rem;
        }

        .safe-content ul, .safe-content ol {
            margin-bottom: 1rem;
            margin-top: 0.5rem;
        }

        .safe-content .ql-indent-1 { padding-left: 3rem !important; }
        .safe-content .ql-indent-2 { padding-left: 6rem !important; }
        .safe-content .ql-indent-3 { padding-left: 9rem !important; }

        .safe-content ul,
        .safe-content ol,
        .safe-content li {
            list-style: none !important;
            margin-left: 0;
        }

        .safe-content li {
            position: relative;
            margin-bottom: 0.35rem;
            padding-left: 2rem !important;
        }

        .safe-content li.ql-indent-1 { padding-left: 5rem !important; }
        .safe-content li.ql-indent-2 { padding-left: 8rem !important; }

        .safe-content ol { counter-reset: list-counter; }
        .safe-content ol > li { counter-increment: list-counter; }

        .safe-content ol > li::before {
            content: counter(list-counter) ".";
            position: absolute; left: 0; top: 0; width: 1.5rem; text-align: right;
            color: #0d9488; font-weight: 800; font-size: 1rem;
        }

        .safe-content ol li ol { counter-reset: sub-list-counter; }
        .safe-content ol li ol > li { counter-increment: sub-list-counter; }
        .safe-content ol li ol > li::before {
            content: counter(sub-list-counter, decimal) ".";
        }

        .safe-content li:has(> ol), .safe-content li:has(> ul) {
            padding-left: 0 !important; margin-bottom: 0 !important;
        }
        .safe-content li:has(> ol)::before, .safe-content li:has(> ul)::before {
            content: none !important; counter-increment: none !important;
        }

        .safe-content ul > li::before {
            content: '•';
            position: absolute; left: 0.5rem; top: 0;
            color: #0d9488; font-size: 1.5em; line-height: 1.6rem; font-weight: bold;
        }
        .safe-content li.ql-indent-1::before { content: '◦' !important; font-weight: 900; }

        .safe-content h1, .safe-content h2, .safe-content h3 {
            font-family: 'Playfair Display', serif; font-weight: 800; color: #1c1917;
            margin-top: 2.2rem; margin-bottom: 0.75rem; line-height: 1.2; text-align: left !important;
        }

        .safe-content blockquote {
            border-left: 4px solid #34d399; background: #ecfdf5;
            padding: 0.8rem 1.5rem; margin: 1.5rem 0; font-style: italic; color: #065f46;
        }

        .safe-content img {
            max-width: 100%; height: auto; border-radius: 0.75rem; margin: 1.5rem 0;
        }

        .safe-content a {
            color: #0d9488 !important; text-decoration: underline !important; font-weight: 800;
        }

        .safe-content strong, .safe-content b {
            font-weight: 800; color: #1c1917;
        }

        .safe-content .ql-align-center { text-align: center !important; }
        .safe-content .ql-align-right { text-align: right !important; }
        .safe-content .ql-align-justify { text-align: justify !important; }
      `}</style>
    </article>
  );
}
