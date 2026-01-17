import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { prisma } from "@/lib/prisma";

// No importamos estilos de Quill aquí para evitar conflictos.
// Controlaremos todo manualmente.

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
      
      {/* --- HERO SECTION --- */}
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
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">
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

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight drop-shadow-xl">
                    {post.title}
                </h1>
            </div>
        </div>
      </div>

      {/* --- CONTENEDOR PRINCIPAL --- */}
      {/* AUMENTÉ max-w-4xl a max-w-5xl para dar más aire horizontal, como pediste revisar el ancho */}
      <div className="container mx-auto px-4 md:px-8 -mt-10 relative z-10 max-w-5xl">
        <div className="bg-white rounded-t-3xl md:rounded-3xl shadow-xl p-8 md:p-16 border border-stone-100">
            
            {post.excerpt && (
                <div className="text-xl text-stone-600 font-serif italic mb-12 pb-8 border-b border-stone-200 leading-relaxed">
                    {post.excerpt}
                </div>
            )}
            
            {/* CONTENEDOR DEL TEXTO (Renderizado)
                Usamos la clase 'blog-content' definida abajo.
                Eliminé todas las clases de Quill (ql-editor, etc) para evitar estilos ocultos.
            */}
            <div 
                className="blog-content w-full"
                dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            {/* Footer */}
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

      {/* --- CSS CORRRECTIVO NUCLEAR --- */}
      <style>{`
        .blog-content {
            /* Base */
            font-family: var(--font-sans, sans-serif);
            font-size: 1.125rem; /* 18px */
            line-height: 1.8;
            color: #44403c;
            width: 100%;
        }

        /* REGLA MAESTRA ANTICORTE
           Aplicamos esto a TODO (*) dentro del contenido para sobreescribir cualquier 
           estilo inline que venga del editor.
        */
        .blog-content, 
        .blog-content * {
            word-break: normal !important;      /* Prohibido romper palabras arbitrariamente */
            overflow-wrap: break-word !important; /* Solo romper si la palabra es más larga que la línea completa */
            white-space: normal !important;     /* Ignorar pre-wrap del editor */
            hyphens: none !important;           /* Sin guiones automáticos */
        }

        /* Títulos */
        .blog-content h1, .blog-content h2, .blog-content h3 {
            font-family: var(--font-serif, serif);
            font-weight: 700;
            color: #1c1917;
            margin-top: 2.5rem;
            margin-bottom: 1.25rem;
            line-height: 1.3;
        }
        .blog-content h2 { font-size: 1.8rem; }
        .blog-content h3 { font-size: 1.5rem; }

        /* Párrafos */
        .blog-content p {
            margin-bottom: 1.5rem;
        }

        /* MANEJO DE JUSTIFICACIÓN
           Si el editor mandó texto justificado (ql-align-justify), 
           esto asegura que se distribuya por espacios y NO rompiendo letras.
        */
        .blog-content .ql-align-justify {
            text-align: justify;
            text-justify: inter-word; 
        }
        .blog-content .ql-align-center { text-align: center; }
        .blog-content .ql-align-right { text-align: right; }

        /* Listas */
        .blog-content ul { 
            list-style-type: disc; 
            padding-left: 1.5rem; 
            margin-bottom: 1.5rem; 
        }
        .blog-content ol { 
            list-style-type: decimal; 
            padding-left: 1.5rem; 
            margin-bottom: 1.5rem; 
        }
        .blog-content li { 
            margin-bottom: 0.5rem; 
        }

        /* Citas */
        .blog-content blockquote {
            border-left: 4px solid #0d9488;
            background: #f5f5f4;
            padding: 1.5rem;
            margin: 2rem 0;
            font-style: italic;
        }

        /* Imágenes */
        .blog-content img {
            max-width: 100%;
            height: auto;
            border-radius: 0.5rem;
            margin: 2rem auto;
            display: block;
        }
      `}</style>
    </article>
  );
}