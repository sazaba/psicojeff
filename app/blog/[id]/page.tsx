import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { prisma } from "@/lib/prisma";
import ShareButton from "@/app/components/ui/ShareButton"; 

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

  // Limpieza y formateo del contenido HTML
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

        /* --- SOLUCIÓN DEFINITIVA A VIÑETAS DUPLICADAS --- */
        
        /* 1. Reset TOTAL de listas: Elimina la viñeta del navegador */
        .safe-content ul, .safe-content ol {
            padding-left: 0 !important;
            margin-bottom: 2rem;
            list-style: none !important; 
        }

        /* 2. Configuración del item de lista (base) */
        .safe-content li {
            position: relative; 
            margin-bottom: 0.5rem;
            padding-left: 2rem !important; /* Espacio reservado para nuestro marcador */
            text-align: justify !important;
            text-justify: inter-word !important;
        }

        /* 3. Marcador personalizado para UL (Punto Teal) */
        .safe-content ul > li::before {
            content: '•';
            position: absolute;
            left: 0.5rem; /* Ajuste fino de posición */
            top: 0;
            color: #0d9488; 
            font-size: 1.5em; 
            line-height: 1.8rem;
            font-weight: bold;
        }

        /* 4. Marcador personalizado para OL (Números) usando contadores CSS */
        .safe-content ol {
            counter-reset: item; 
        }
        
        .safe-content ol > li::before {
            content: counter(item) "."; 
            counter-increment: item;
            position: absolute;
            left: 0;
            top: 0;
            color: #0d9488;
            font-weight: 800;
            width: 1.5rem; 
            text-align: right; /* Alinea los números a la derecha (ej: 9. y 10.) */
        }

        /* --- SANGRÍAS (ReactQuill Indents) --- */
        /* Ajustamos el margen izquierdo para respetar los niveles de indentación */
        .safe-content .ql-indent-1 { margin-left: 2rem !important; }
        .safe-content .ql-indent-2 { margin-left: 4rem !important; }
        .safe-content .ql-indent-3 { margin-left: 6rem !important; }

        /* --- PÁRRAFOS --- */
        .safe-content p { 
            margin-bottom: 1.5rem;
            text-align: justify !important;
            text-justify: inter-word !important;
        }

        /* Alineación Específica */
        .safe-content .ql-align-center { text-align: center !important; }
        .safe-content .ql-align-right { text-align: right !important; }

        /* Tipografía de Títulos */
        .safe-content h1, .safe-content h2, .safe-content h3 {
            font-family: 'Playfair Display', serif;
            font-weight: 800;
            color: #1c1917;
            margin-top: 3rem;
            margin-bottom: 1.5rem;
            line-height: 1.25;
            text-align: left !important;
        }
        .safe-content h2 { font-size: 2rem; }
        .safe-content h3 { font-size: 1.5rem; }

        /* Citas (Blockquotes) */
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

        /* Imágenes dentro del contenido */
        .safe-content img {
            max-width: 100%;
            height: auto;
            border-radius: 0.75rem;
            margin: 2.5rem 0;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        /* Enlaces dentro del contenido */
        .safe-content a {
            color: #34d399 !important;
            text-decoration: underline !important;
            text-decoration-color: #34d399 !important;
            text-underline-offset: 4px;
            font-weight: 800;
            cursor: pointer !important;
            position: relative;
            z-index: 50;
            transition: all 0.2s ease;
        }
        
        .safe-content a:hover {
            color: #10b981 !important;
            text-decoration-color: #10b981 !important;
            background-color: #ecfdf5;
        }

        .safe-content strong, .safe-content b {
            font-weight: 800;
            color: #1c1917;
        }
      `}</style>
    </article>
  );
}