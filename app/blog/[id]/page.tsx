import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2, Tag, User } from "lucide-react";
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

  // --- LA CURA: LIMPIEZA DE DATOS ---
  // Reemplazamos todos los &nbsp; (espacios pegajosos) por espacios normales " ".
  // También limpiamos el carácter unicode \u00a0 que a veces se cuela.
  const cleanContent = post.content
    .replace(/&nbsp;/g, ' ')
    .replace(/\u00a0/g, ' ');

  return (
    <article className="min-h-screen bg-white text-stone-900 font-sans selection:bg-teal-100 selection:text-teal-900 pb-24">
      
      {/* --- HERO HEADER (Estilo Revista Amplio) --- */}
      <div className="w-full bg-stone-50 border-b border-stone-100 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
            
            <Link 
              href="/blog" 
              className="inline-flex items-center text-stone-400 hover:text-teal-600 mb-10 transition-colors text-xs font-bold uppercase tracking-[0.2em]"
            >
              <ArrowLeft size={14} className="mr-2" />
              Volver a la bitácora
            </Link>

            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                <span className="bg-teal-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    {post.category}
                </span>
                <span className="text-stone-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <Clock size={14} />
                    {post.readTime || "Lectura rápida"}
                </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-stone-900 mb-8 leading-[1.1] tracking-tight text-balance">
                {post.title}
            </h1>

            {post.excerpt && (
                <p className="text-xl md:text-2xl text-stone-500 font-serif italic max-w-3xl mx-auto leading-relaxed">
                    {post.excerpt}
                </p>
            )}

            {/* Autor */}
            <div className="mt-10 flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-stone-700 flex items-center justify-center text-white font-serif font-bold">
                    JB
                </div>
                <div className="text-left leading-tight">
                    <p className="text-sm font-bold text-stone-900">Jefferson Bastidas</p>
                    <p className="text-xs text-stone-500">Psicólogo Clínico</p>
                </div>
            </div>
        </div>
      </div>

      {/* --- IMAGEN DESTACADA --- */}
      {post.image && (
          <div className="container mx-auto px-4 md:px-8 max-w-6xl -mt-12 mb-20 relative z-10">
            <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover"
                    priority
                />
            </div>
          </div>
      )}

      {/* --- CONTENIDO PRINCIPAL --- */}
      {/* Aumenté el ancho a max-w-4xl (aprox 900px) como pediste para que no se sienta apretado */}
      <main className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        {/* Renderizamos el contenido YA LIMPIO (cleanContent) */}
        <div 
            className="prose-premium"
            dangerouslySetInnerHTML={{ __html: cleanContent }} 
        />

        {/* Footer del Post */}
        <div className="mt-24 border-t border-stone-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-stone-400 text-sm font-medium flex items-center gap-2">
                <Calendar size={16} /> Publicado el {formattedDate}
            </p>
            <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-full font-bold text-sm hover:bg-teal-600 transition-all shadow-lg hover:shadow-teal-200">
                    <Share2 size={16} /> Compartir artículo
                </button>
            </div>
        </div>

      </main>

      {/* --- ESTILOS CSS REFACTORIZADOS --- */}
      <style>{`
        /* Configuración de Tipografía Premium */
        .prose-premium {
            font-family: 'Lato', system-ui, sans-serif;
            font-size: 1.25rem; /* 20px */
            line-height: 1.8;
            color: #333;
            width: 100%;
        }

        /* SEGURIDAD ANTICORTE DE PALABRAS */
        .prose-premium * {
            word-break: normal !important;      /* Nunca romper palabras a la fuerza */
            overflow-wrap: break-word !important; /* Solo si es inevitable */
            white-space: normal !important;     /* Respetar espacios normales */
            text-align: left !important;        /* Forzar izquierda para evitar ríos en justificado */
        }

        /* Encabezados */
        .prose-premium h1, .prose-premium h2, .prose-premium h3 {
            font-family: 'Playfair Display', serif;
            font-weight: 800;
            color: #1c1917;
            margin-top: 3.5rem;
            margin-bottom: 1.5rem;
            line-height: 1.2;
        }
        .prose-premium h2 { font-size: 2.2rem; }
        .prose-premium h3 { font-size: 1.75rem; }

        /* Párrafos */
        .prose-premium p {
            margin-bottom: 2rem;
        }

        /* Listas */
        .prose-premium ul, .prose-premium ol {
            margin-bottom: 2rem;
            padding-left: 1.5rem;
        }
        .prose-premium li {
            margin-bottom: 0.75rem;
            padding-left: 0.5rem;
        }
        .prose-premium ul li::marker { color: #0d9488; }

        /* Blockquotes / Citas */
        .prose-premium blockquote {
            border-left: 4px solid #0d9488;
            background: #f0fdfa; /* Teal muy suave */
            padding: 2rem;
            margin: 3rem 0;
            font-family: 'Playfair Display', serif;
            font-size: 1.5rem;
            font-style: italic;
            color: #115e59;
            border-radius: 0 1rem 1rem 0;
        }

        /* Imágenes */
        .prose-premium img {
            width: 100%;
            height: auto;
            border-radius: 1rem;
            margin: 3rem 0;
            box-shadow: 0 10px 30px -10px rgba(0,0,0,0.15);
        }

        /* Links */
        .prose-premium a {
            color: #0d9488;
            font-weight: 700;
            text-decoration: underline;
            text-decoration-thickness: 2px;
            text-underline-offset: 4px;
            transition: all 0.2s;
        }
        .prose-premium a:hover {
            color: #0f766e;
            background: #ccfbf1;
        }

        /* Negrillas */
        .prose-premium strong, .prose-premium b {
            font-weight: 800;
            color: #000;
        }
      `}</style>
    </article>
  );
}