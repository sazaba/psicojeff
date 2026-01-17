import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { prisma } from "@/lib/prisma";

// Mantenemos estilos base de Quill
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
    <article className="min-h-screen bg-white pb-24">
      
      {/* --- HERO SECTION RESTAURADO --- */}
      <div className="relative w-full h-[50vh] min-h-[400px] bg-stone-900">
        {post.image && (
            <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover opacity-50"
            priority
            />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pb-12 md:pb-20">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                
                <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors text-sm font-medium tracking-wide">
                    <ArrowLeft size={18} className="mr-2" />
                    VOLVER A LA BITÁCORA
                </Link>
                
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-sm">
                        {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-md text-xs font-bold shadow-sm">
                        <Clock size={14} className="text-teal-400" /> 
                        {post.readTime || "Lectura rápida"}
                    </span>
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white max-w-5xl leading-tight drop-shadow-xl">
                    {post.title}
                </h1>
            </div>
        </div>
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="container mx-auto px-4 md:px-6 -mt-10 relative z-10 max-w-4xl">
        <div className="bg-white rounded-t-3xl md:rounded-3xl shadow-xl p-6 md:p-12 lg:p-16 w-full border border-stone-100">
            
            {post.excerpt && (
                <div className="text-lg md:text-xl text-stone-600 font-serif italic mb-10 pb-10 border-b border-stone-200 leading-relaxed">
                    {post.excerpt}
                </div>
            )}
            
            {/* CONTENEDOR DEL TEXTO 
                Usamos la clase 'safe-render' definida abajo en <style>
            */}
            <div className="ql-snow">
                <div 
                    className="ql-editor !h-auto !p-0 !overflow-visible safe-render"
                    dangerouslySetInnerHTML={{ __html: post.content }} 
                />
            </div>

            {/* Footer del Artículo */}
            <div className="mt-20 pt-8 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 text-stone-500 font-medium text-sm">
                    <Calendar size={18} className="text-teal-600"/>
                    <span>Publicado el {formattedDate}</span>
                </div>
                
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-stone-100 hover:bg-stone-800 text-stone-600 hover:text-white rounded-full transition-all font-bold text-sm tracking-wide">
                    <Share2 size={18} />
                    Compartir artículo
                </button>
            </div>
        </div>
      </div>

      {/* --- CSS CORRRECTIVO --- */}
      <style>{`
        /* Configuración segura para renderizar texto */
        .safe-render {
            font-family: var(--font-sans, sans-serif);
            font-size: 1.125rem;
            line-height: 1.8;
            color: #44403c;
            
            /* REGLA DE ORO ANTICORTE: */
            word-break: normal !important;   /* Prohibe cortar palabras arbitrariamente */
            overflow-wrap: break-word;       /* Solo corta si la palabra es más larga que la pantalla */
            white-space: normal !important;  /* Evita que saltos de línea extraños rompan el flujo */
        }

        /* Títulos */
        .safe-render h1, .safe-render h2, .safe-render h3 {
            font-family: var(--font-serif, serif);
            font-weight: 700;
            color: #1c1917;
            margin-top: 2.5rem;
            margin-bottom: 1.25rem;
            line-height: 1.3;
        }
        .safe-render h2 { font-size: 1.8rem; }
        .safe-render h3 { font-size: 1.5rem; }

        /* Párrafos */
        .safe-render p {
            margin-bottom: 1.5rem;
        }

        /* CORRECCIÓN DE JUSTIFICACIÓN (Vital para tus imágenes) */
        /* Si el texto está justificado, usa inter-word para expandir espacios, NO romper letras */
        .safe-render .ql-align-justify {
            text-align: justify;
            text-justify: inter-word; 
        }
        .safe-render .ql-align-center { text-align: center; }
        .safe-render .ql-align-right { text-align: right; }

        /* Listas y Citas */
        .safe-render ul, .safe-render ol { padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .safe-render li { margin-bottom: 0.5rem; padding-left: 0.5rem; }
        
        .safe-render blockquote {
            border-left: 4px solid #0d9488;
            background: #f5f5f4;
            padding: 1.5rem;
            margin: 2rem 0;
            font-style: italic;
            border-radius: 0 0.5rem 0.5rem 0;
        }

        /* Imágenes responsivas */
        .safe-render img {
            max-width: 100%;
            height: auto;
            border-radius: 0.75rem;
            margin: 2rem auto;
            display: block;
        }
      `}</style>
    </article>
  );
}