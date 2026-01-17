import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { prisma } from "@/lib/prisma";

// Mantenemos la importación SOLO para que las clases internas (como colores o indentaciones) existan,
// pero anularemos su estructura estructural en el CSS de abajo.
import "react-quill-new/dist/quill.snow.css"; 

type Params = Promise<{ id: string }>;

export async function generateStaticParams() {
  const posts = await prisma.post.findMany({ select: { id: true } });
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { id } = await params;
  const postId = parseInt(id);

  if (isNaN(postId)) return notFound();

  const post = await prisma.post.findUnique({
    where: { id: postId }
  });

  if (!post) return notFound();

  const formattedDate = new Intl.DateTimeFormat('es-CO', {
    dateStyle: 'long'
  }).format(post.createdAt);

  return (
    <article className="min-h-screen bg-[#fafaf9] text-stone-800">
      
      {/* --- HEADER / HERO --- */}
      <header className="relative w-full bg-stone-900 pt-32 pb-20 px-4 md:px-8">
        {/* Imagen de Fondo Oscurecida */}
        {post.image && (
          <>
             <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              className="object-cover opacity-30 mix-blend-overlay"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 to-[#fafaf9]" />
          </>
        )}

        <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Botón Volver */}
            <Link 
                href="/blog" 
                className="inline-flex items-center text-teal-500 hover:text-teal-400 mb-8 font-bold text-sm tracking-widest uppercase transition-colors"
            >
                <ArrowLeft size={16} className="mr-2" />
                Volver
            </Link>

            {/* Metadatos */}
            <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm font-medium text-stone-400">
                <span className="flex items-center gap-1">
                    <Tag size={14} className="text-teal-500"/>
                    {post.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-stone-600 self-center"></span>
                <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-teal-500"/>
                    {formattedDate}
                </span>
                <span className="w-1 h-1 rounded-full bg-stone-600 self-center"></span>
                <span className="text-stone-300">
                    {post.readTime || "Lectura rápida"}
                </span>
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                {post.title}
            </h1>
            
            {/* Excerpt / Subtítulo */}
            {post.excerpt && (
                <p className="text-lg md:text-xl text-stone-600 font-serif italic leading-relaxed max-w-2xl mx-auto">
                    {post.excerpt}
                </p>
            )}
        </div>
      </header>

      {/* --- CUERPO DEL ARTÍCULO --- */}
      <main className="container mx-auto px-4 md:px-6 pb-24 max-w-3xl">
        
        {/* Renderizado de contenido HTML */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">
            {/* AQUÍ ESTÁ LA MAGIA: 
               Usamos una clase propia 'article-body' en lugar de ql-editor 
               para tener control total de los cortes de línea.
            */}
            <div 
                className="article-body"
                dangerouslySetInnerHTML={{ __html: post.content }} 
            />
        </div>

        {/* Footer del Post */}
        <div className="mt-12 flex justify-center">
             <Link href="/blog" className="text-stone-400 hover:text-teal-600 transition-colors text-sm font-bold flex items-center gap-2">
                <ArrowLeft size={16}/> Leer otros artículos
             </Link>
        </div>

      </main>

      {/* --- ESTILOS CRÍTICOS (Scoped) --- */}
      <style>{`
        /* Configuración del contenedor de texto */
        .article-body {
            font-family: var(--font-sans, sans-serif); /* Usa tu fuente global */
            font-size: 1.125rem; /* 18px */
            line-height: 1.8;
            color: #44403c;
            
            /* REGLAS ANTI-CORTE (Vitales) */
            word-wrap: break-word;      /* Soporte legacy */
            overflow-wrap: break-word;  /* Estándar moderno: solo rompe si la palabra es eterna */
            word-break: normal;         /* IMPORTANTE: Prohibe romper palabras normales (biología) */
            white-space: normal;        /* IMPORTANTE: Ignora los saltos de línea extraños del editor */
            hyphens: none;              /* Evita guiones automáticos al final de línea */
        }

        /* Títulos dentro del post */
        .article-body h1, .article-body h2, .article-body h3 {
            font-family: var(--font-serif, serif);
            font-weight: 700;
            color: #1c1917;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            line-height: 1.2;
        }
        .article-body h2 { font-size: 1.8rem; border-bottom: 2px solid #f5f5f4; pb-2; }
        .article-body h3 { font-size: 1.5rem; }

        /* Párrafos */
        .article-body p {
            margin-bottom: 1.5rem;
        }
        
        /* Solución para 'Enter' vacíos (br) */
        .article-body p:empty { display: none; } /* Oculta párrafos vacíos accidentales */
        .article-body p:has(br):empty { height: 1.5rem; display: block; } /* Respeta saltos intencionales */

        /* Listas */
        .article-body ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .article-body ol { list-style-type: decimal; padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .article-body li { margin-bottom: 0.5rem; padding-left: 0.5rem; }

        /* Citas (Blockquotes) */
        .article-body blockquote {
            border-left: 4px solid #14b8a6; /* teal-500 */
            background: #f0fdfa; /* teal-50 */
            padding: 1.5rem;
            margin: 2rem 0;
            font-style: italic;
            border-radius: 0 0.5rem 0.5rem 0;
            color: #0f766e;
        }

        /* Imágenes */
        .article-body img {
            max-width: 100%;
            height: auto;
            border-radius: 0.75rem;
            margin: 2rem auto;
            display: block;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        /* MANEJO MANUAL DE CLASES DE QUILL (Sin usar su CSS corrupto) */
        
        /* Alineación Justificada: El culpable habitual */
        .article-body .ql-align-justify {
            text-align: justify;
            text-justify: inter-word; /* Mejora la distribución */
        }
        
        .article-body .ql-align-center { text-align: center; }
        .article-body .ql-align-right { text-align: right; }
        
        /* Tamaños de fuente de Quill */
        .article-body .ql-size-small { font-size: 0.875em; }
        .article-body .ql-size-large { font-size: 1.25em; }
        .article-body .ql-size-huge { font-size: 1.5em; }
        
        /* Videos */
        .article-body iframe {
            width: 100%;
            border-radius: 0.5rem;
            aspect-ratio: 16 / 9;
            margin: 2rem 0;
        }
      `}</style>
    </article>
  );
}