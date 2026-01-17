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

  // --- LOGICA DE LIMPIEZA Y REPARACIÓN DE HTML ---
  const cleanContent = post.content
    // 1. Arreglar espacios
    .replace(/&nbsp;/g, ' ')
    .replace(/\u00a0/g, ' ')
    // 2. Arreglar URLs sin protocolo (www -> https://www)
    .replace(/href=(["'])www\./g, 'href=$1https://www.')
    // 3. OBLIGATORIO: Forzar que los links abran en nueva pestaña
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
      {/* z-10 asegura que esta tarjeta flote SOBRE el hero, pero bajo elementos modales */}
      <div className="container mx-auto px-4 md:px-8 -mt-12 relative z-10 max-w-5xl">
        <div className="bg-white rounded-t-3xl md:rounded-3xl shadow-2xl p-8 md:p-16 border border-stone-100 relative">
            
            {post.excerpt && (
                <div className="text-xl text-stone-600 font-serif italic mb-12 pb-8 border-b border-stone-100 leading-relaxed">
                    {post.excerpt}
                </div>
            )}
            
            {/* Contenedor del HTML seguro */}
            <div 
                className="safe-content relative z-20" 
                dangerouslySetInnerHTML={{ __html: cleanContent }} 
            />

            {/* Footer del Artículo */}
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
            /* SE ELIMINÓ text-align: left !important PARA PERMITIR JUSTIFICACIÓN */
        }

        /* CLASES NECESARIAS PARA EL EDITOR QUILL */
        .safe-content .ql-align-justify {
            text-align: justify;
            text-justify: inter-word;
        }
        .safe-content .ql-align-center {
            text-align: center;
        }
        .safe-content .ql-align-right {
            text-align: right;
        }

        .safe-content h1, .safe-content h2, .safe-content h3 {
            font-family: 'Playfair Display', serif;
            font-weight: 800;
            color: #1c1917;
            margin-top: 3rem;
            margin-bottom: 1.5rem;
            line-height: 1.25;
        }
        .safe-content h2 { font-size: 2rem; }
        .safe-content h3 { font-size: 1.5rem; }

        .safe-content p { margin-bottom: 1.5rem; }

        .safe-content ul, .safe-content ol {
            margin-bottom: 2rem;
            padding-left: 1.5rem;
        }
        .safe-content li {
            margin-bottom: 0.5rem;
            padding-left: 0.5rem;
        }
        .safe-content ul li::marker { color: #0d9488; }

        .safe-content blockquote {
            border-left: 4px solid #34d399; /* Verde pastel en borde */
            background: #ecfdf5; /* Fondo muy suave verde */
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
            margin: 2.5rem 0;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        /* --- ESTILOS DEL ENLACE VERDE PASTEL --- */
        .safe-content a {
            color: #34d399 !important; /* Verde Pastel (Emerald-400) */
            text-decoration: underline !important;
            text-decoration-color: #34d399 !important;
            text-underline-offset: 4px;
            font-weight: 800;
            cursor: pointer !important; /* Forzar cursor de mano */
            position: relative;
            z-index: 50; /* Forzar capa superior para asegurar el clic */
            transition: all 0.2s ease;
        }
        
        .safe-content a:hover {
            color: #10b981 !important; /* Un poco más oscuro al pasar el mouse */
            text-decoration-color: #10b981 !important;
            background-color: #ecfdf5; /* Fondo sutil al hover */
        }

        .safe-content strong, .safe-content b {
            font-weight: 800;
            color: #1c1917;
        }
      `}</style>
    </article>
  );
}