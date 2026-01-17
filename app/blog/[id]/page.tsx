import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2, Tag } from "lucide-react";
import { prisma } from "@/lib/prisma";

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

  // --- EL FIX MÁGICO ---
  // Limpiamos los espacios "pegajosos" (&nbsp;) antes de renderizar.
  // Esto permite que el navegador sepa dónde cortar la línea correctamente.
  const cleanContent = post.content
    .replace(/&nbsp;/g, ' ')
    .replace(/\u00a0/g, ' ');

  return (
    <article className="min-h-screen bg-white pb-24 font-sans text-stone-900">
      
      {/* --- HERO SECTION (DISEÑO ORIGINAL) --- */}
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
        
        {/* Gradiente y Contenido del Header */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pb-16 md:pb-24">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                
                <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors text-xs font-bold uppercase tracking-widest">
                    <ArrowLeft size={16} className="mr-2" />
                    Volver a la bitácora
                </Link>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider shadow-sm">
                        {post.category}
                    </span>
                    <span className="flex items-center gap-2 text-stone-300 text-xs font-bold uppercase tracking-wider">
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

      {/* --- CONTENIDO PRINCIPAL (TARJETA SUPERPUESTA) --- */}
      <div className="container mx-auto px-4 md:px-8 -mt-12 relative z-10 max-w-5xl">
        <div className="bg-white rounded-t-3xl md:rounded-3xl shadow-2xl p-8 md:p-16 border border-stone-100">
            
            {post.excerpt && (
                <div className="text-xl text-stone-600 font-serif italic mb-12 pb-8 border-b border-stone-100 leading-relaxed">
                    {post.excerpt}
                </div>
            )}
            
            {/* Renderizamos 'cleanContent' (el texto limpio).
               Usamos la clase 'safe-content' para los estilos.
            */}
            <div 
                className="safe-content"
                dangerouslySetInnerHTML={{ __html: cleanContent }} 
            />

            {/* Footer del Artículo */}
            <div className="mt-20 pt-10 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 text-stone-500 font-bold text-sm">
                    <Calendar size={18} className="text-teal-600"/>
                    <span>Publicado el {formattedDate}</span>
                </div>
                
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-stone-100 hover:bg-stone-900 text-stone-600 hover:text-white rounded-full transition-all font-bold text-sm tracking-wide shadow-sm">
                    <Share2 size={18} />
                    Compartir artículo
                </button>
            </div>
        </div>
      </div>

      {/* --- ESTILOS CSS DEL ARTÍCULO --- */}
      <style>{`
        /* Configuración base para el contenido */
        .safe-content {
            font-family: 'Lato', system-ui, sans-serif; /* Tu fuente sans */
            font-size: 1.125rem; /* 18px */
            line-height: 1.8;
            color: #44403c; /* Stone-700 */
            width: 100%;
        }

        /* REGLAS DE SEGURIDAD (Protegen contra texto cortado) */
        .safe-content * {
            word-break: normal !important;
            overflow-wrap: break-word !important;
            white-space: normal !important; 
            text-align: left !important; /* Alineación izquierda es más segura para web */
        }

        /* Títulos */
        .safe-content h1, .safe-content h2, .safe-content h3 {
            font-family: 'Playfair Display', serif; /* Tu fuente serif */
            font-weight: 800;
            color: #1c1917;
            margin-top: 3rem;
            margin-bottom: 1.5rem;
            line-height: 1.25;
        }
        .safe-content h2 { font-size: 2rem; }
        .safe-content h3 { font-size: 1.5rem; }

        /* Párrafos */
        .safe-content p {
            margin-bottom: 1.5rem;
        }

        /* Listas */
        .safe-content ul, .safe-content ol {
            margin-bottom: 2rem;
            padding-left: 1.5rem;
        }
        .safe-content li {
            margin-bottom: 0.5rem;
            padding-left: 0.5rem;
        }
        .safe-content ul li::marker { color: #0d9488; }

        /* Citas (Blockquotes) */
        .safe-content blockquote {
            border-left: 4px solid #0d9488;
            background: #fafaf9;
            padding: 1.5rem 2rem;
            margin: 2.5rem 0;
            font-family: 'Playfair Display', serif;
            font-size: 1.4rem;
            font-style: italic;
            color: #57534e;
            border-radius: 0 0.5rem 0.5rem 0;
        }

        /* Imágenes */
        .safe-content img {
            max-width: 100%;
            height: auto;
            border-radius: 0.75rem;
            margin: 2.5rem 0;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        /* Enlaces */
        .safe-content a {
            color: #0d9488;
            text-decoration: underline;
            text-underline-offset: 3px;
            font-weight: 700;
            transition: color 0.2s;
        }
        .safe-content a:hover {
            color: #0f766e;
            background-color: #ccfbf1;
        }

        /* Negritas */
        .safe-content strong, .safe-content b {
            font-weight: 800;
            color: #1c1917;
        }
      `}</style>
    </article>
  );
}