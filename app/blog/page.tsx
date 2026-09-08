import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, ArrowRight, Star } from "lucide-react";
import { prisma } from "@/lib/prisma";
import imageJeff from "@/app/assets/Jeffseo.webp";

interface BlogPost {
  id: number;
  slug: string | null;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  readTime: string;
  createdAt: Date;
  updatedAt: Date;
  isFeatured: boolean;
}

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog de Psicología y Salud Mental",
  description:
    "Artículos de Jefferson Bastidas Mejía sobre psicología, ansiedad, estrés, bienestar emocional, terapias contextuales y salud mental.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog de Psicología y Salud Mental | Jefferson Bastidas",
    description:
      "Reflexiones y recursos sobre psicología, ansiedad, estrés, bienestar emocional y terapias contextuales.",
    url: "/blog",
    siteName: "Jefferson Bastidas Psicólogo",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: imageJeff.src,
        width: 800,
        height: 800,
        alt: "Jefferson Bastidas Mejía - Psicólogo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Psicología y Salud Mental | Jefferson Bastidas",
    description:
      "Artículos sobre psicología, ansiedad, estrés, bienestar emocional y terapias contextuales.",
    images: [imageJeff.src],
  },
};

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
};

export default async function BlogIndex() {
  const posts = await prisma.post.findMany({
    where: {
      slug: { not: null },
    },
    orderBy: [
      { isFeatured: "desc" },
      { createdAt: "desc" },
    ],
  });

  return (
    <main className="min-h-screen bg-stone-50 pb-20 pt-32">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-stone-500 hover:text-teal-600 transition-colors mb-6 group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4">
            Bitácora Terapéutica
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl">
            Un espacio de reflexión sobre psicología integral, trauma y bienestar emocional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: BlogPost) => {
            if (!post.slug) return null;

            let tags: string[] = [];
            try {
              if (post.category.startsWith("[")) {
                tags = JSON.parse(post.category);
              } else {
                tags = [post.category];
              }
            } catch {
              tags = ["General"];
            }

            const visibleTags = tags.slice(0, 2);

            return (
              <article
                key={post.id}
                className={`group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border ${
                  post.isFeatured ? "border-amber-200 ring-1 ring-amber-100" : "border-stone-100"
                }`}
              >
                <div className="relative h-56 overflow-hidden bg-stone-200">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-stone-400 bg-stone-100 font-serif italic">
                      Sin Imagen
                    </div>
                  )}

                  <div className="absolute top-4 left-4 flex flex-wrap gap-2 max-w-[80%] z-20">
                    {visibleTags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-700 shadow-sm border border-white/50"
                      >
                        {tag}
                      </span>
                    ))}

                    {tags.length > 2 && (
                      <span className="bg-stone-800/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-white shadow-sm border border-white/20">
                        +{tags.length - 2}
                      </span>
                    )}
                  </div>

                  {post.isFeatured && (
                    <span
                      className="absolute top-4 right-4 z-20 bg-amber-400 text-white p-1.5 rounded-full shadow-md"
                      title="Artículo destacado"
                    >
                      <Star size={12} fill="currentColor" />
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex gap-4 text-xs text-stone-400 mb-3 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {formatDate(post.createdAt)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-serif font-bold text-stone-800 mb-3 line-clamp-2 group-hover:text-teal-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-stone-500 text-sm line-clamp-3 mb-4 flex-1 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link href={`/blog/${post.slug}`} className="flex items-center text-teal-700 font-bold text-sm">
                    Leer artículo completo
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </article>
            );
          })}

          {posts.length === 0 && (
            <div className="col-span-full text-center py-20 bg-white rounded-2xl border border-dashed border-stone-300">
              <p className="text-stone-500 font-serif italic text-lg">
                Aún no hay artículos publicados en la bitácora.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
