import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { prisma } from "@/lib/prisma";
import ShareButton from "@/app/components/ui/ShareButton"; 

// OBLIGATORIO: Fuerza a Next.js a no usar caché antigua
export const dynamic = "force-dynamic";

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

  // Limpieza del HTML
  const cleanContent = post.content
    .replace(/&nbsp;/g, ' ')
    .replace(/\u00a0/g, ' ')
    .replace(/href=(["'])www\./g, 'href=$1https://www.')
    .replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ');

  let tags: string[] = [];
  try {
    if (post.category.startsWith("[")) {
        tags = JSON.parse(post.category);
    } else {
        tags = [post.category];
    }
  } catch (e) {
    tags = [post.category];
  }

  return (
    <article className="min-h-screen bg-white pb-24 font-sans text-stone-900">
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[55vh] min-h-[450px] bg-stone-900">
        {post.image && (
            <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover opacity-50"
            priority
            />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pb-16 md:pb-24">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors text-xs font-bold uppercase tracking-widest">
                    <ArrowLeft size={16} className="mr-2" />
                    Volver a la bitácora
                </Link>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex gap-2 flex-wrap">
                        {tags.map((tag, i) => (
                            <span key={i} className="bg-teal-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider shadow-sm">
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

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="container mx-auto px-4 md:px-8 -mt-12 relative z-10 max-w-5xl">
        <div className="bg-white rounded-t-3xl md:rounded-3xl shadow-2xl p-8 md:p-16 border border-stone-100 relative">
            
            {post.excerpt && (
                <div className="text-xl text-stone-600 font-serif italic mb-12 pb-8 border-b border-stone-100 leading-relaxed">
                    {post.excerpt}
                </div>
            )}
            
            <div 
                className="safe-content relative z-20" 
                dangerouslySetInnerHTML={{ __html: cleanContent }} 
            />

            <div className="mt-20 pt-10 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-6 relative z-20">
                <div className="flex items-center gap-2 text-stone-500 font-bold text-sm">
                    <Calendar size={18} className="text-teal-600"/>
                    <span>Publicado el {formattedDate}</span>
                </div>
                <ShareButton />
            </div>
        </div>
      </div>

      <style>{`
        /* Configuración base */
        .safe-content {
            font-family: 'Lato', system-ui, sans-serif;
            font-size: 1.125rem;
            line-height: 1.8;
            color: #44403c;
            width: 100%;
        }

        .safe-content * {
            word-break: normal !important;
            overflow-wrap: break-word !important;
            white-space: normal !important; 
        }

        /* --- 1. SOLUCIÓN A LA DOBLE NUMERACIÓN --- */
        /* Eliminamos el estilo por defecto de TODAS las listas y sus items */
        .safe-content ul, 
        .safe-content ol,
        .safe-content li {
            list-style: none !important;
            list-style-type: none !important;
            margin: 0;
            padding: 0;
        }

        /* --- 2. CONFIGURACIÓN DE ESPACIADOS Y SANGRÍAS --- */
        
        /* Margen vertical entre listas */
        .safe-content ul, .safe-content ol {
            margin-bottom: 1.5rem;
        }

        /* Configuración de cada ITEM de lista */
        .safe-content li {
            position: relative; 
            margin-bottom: 0.5rem;
            padding-left: 2.5rem !important; /* Espacio base para el icono/número */
            text-align: justify !important;
        }

        /* INDENTACIÓN (Niveles anidados) 
           Se suma al padding-left base (2.5rem) */
        .safe-content .ql-indent-1 { padding-left: 5.5rem !important; } /* 2.5 + 3 */
        .safe-content .ql-indent-2 { padding-left: 8.5rem !important; } /* 2.5 + 6 */
        .safe-content .ql-indent-3 { padding-left: 11.5rem !important; }

        /* --- 3. ESTILOS VISUALES DE VIÑETAS --- */

        /* PUNTOS (UL) */
        .safe-content ul > li::before {
            content: '•';
            position: absolute;
            left: 1rem; /* Posición dentro del padding */
            top: 0;
            color: #0d9488;
            font-size: 1.5em;
            line-height: 1.8rem;
            font-weight: bold;
        }
        
        /* Subniveles de puntos (Círculo vacío) */
        .safe-content li.ql-indent-1::before {
            content: '◦' !important;
            font-weight: 900;
        }

        /* NÚMEROS (OL) */
        .safe-content ol {
            counter-reset: list-counter;
        }
        
        .safe-content ol > li {
            counter-increment: list-counter;
        }

        .safe-content ol > li::before {
            content: counter(list-counter) ".";
            position: absolute;
            left: 0.5rem; /* Ajustado para que no se salga */
            top: 0;
            width: 1.5rem;
            text-align: right; /* Alineado a la derecha junto al texto */
            color: #0d9488;
            font-weight: 800;
            font-size: 1rem;
        }

        /* NÚMEROS ANIDADOS (a. b. c.) 
           Esto arregla que salga 1. 2. 3. en subniveles */
        .safe-content ol li ol {
            counter-reset: sub-list-counter;
            margin-top: 0.2rem;
        }
        .safe-content ol li ol > li {
            counter-increment: sub-list-counter;
        }
        .safe-content ol li ol > li::before {
            content: counter(sub-list-counter, lower-alpha) "."; /* a. b. c. */
        }

        /* --- 4. TIPOGRAFÍA Y ESPACIADOS GENERALES --- */
        
        /* Párrafos: Evita huecos gigantes pero respeta saltos de línea */
        .safe-content p { 
            margin-bottom: 1.5rem;
            min-height: 1.5rem; /* Para que <p><br></p> ocupe espacio visual */
            text-align: justify !important;
        }

        .safe-content h1, .safe-content h2, .safe-content h3 {
            font-family: 'Playfair Display', serif;
            font-weight: 800;
            color: #1c1917;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            line-height: 1.25;
            text-align: left !important;
        }
        
        .safe-content h2 { font-size: 2rem; }
        .safe-content h3 { font-size: 1.5rem; }

        .safe-content blockquote {
            border-left: 4px solid #34d399;
            background: #ecfdf5;
            padding: 1.5rem 2rem;
            margin: 2.5rem 0;
            font-family: 'Playfair Display', serif;
            font-size: 1.4rem;
            font-style: italic;
            color: #065f46;
            border-radius: 0 0.5rem 0.5rem 0;
        }

        .safe-content img {
            max-width: 100%;
            height: auto;
            border-radius: 0.75rem;
            margin: 2rem 0;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .safe-content a {
            color: #0d9488 !important;
            text-decoration: underline !important;
            font-weight: 800;
        }
        
        .safe-content a:hover {
            color: #0f766e !important;
            background-color: #f0fdfa;
        }

        .safe-content strong, .safe-content b {
            font-weight: 800;
            color: #1c1917;
        }

        /* Alineaciones de Quill */
        .safe-content .ql-align-center { text-align: center !important; }
        .safe-content .ql-align-right { text-align: right !important; }
        .safe-content .ql-align-justify { text-align: justify !important; }
      `}</style>
    </article>
  );
}