import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { prisma } from "@/lib/prisma";

// 1. IMPORTANTE: Importamos los estilos de Quill para que las clases (ql-align, ql-size) funcionen nativamente.
import "react-quill-new/dist/quill.snow.css"; 

// Definición de tipos para Next.js 15+ (Params as Promise)
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
      
      {/* --- HERO SECTION (Diseño Inmersivo) --- */}
      <div className="relative w-full h-[55vh] min-h-[450px] bg-stone-900 overflow-hidden">
        {post.image && (
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover opacity-60"
            priority
          />
        )}
        
        {/* Gradiente de legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 flex flex-col justify-end pb-12 md:pb-16">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            
            <Link 
              href="/blog" 
              className="inline-flex items-center text-white/80 hover:text-teal-400 mb-6 transition-colors text-sm font-bold tracking-widest uppercase"
            >
              <ArrowLeft size={16} className="mr-2" />
              Volver a la bitácora
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-teal-600 text-white px-3 py-1 rounded text-xs font-black uppercase tracking-wider shadow-sm">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded text-xs font-bold shadow-sm">
                <Clock size={14} className="text-teal-400" /> 
                {post.readTime || "Lectura rápida"}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight drop-shadow-2xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="container mx-auto px-4 md:px-6 -mt-12 relative z-10 max-w-5xl">
        <div className="bg-white rounded-t-3xl md:rounded-3xl shadow-2xl p-6 md:p-12 lg:p-14 border border-stone-100">
          
          {post.excerpt && (
            <div className="text-lg md:text-xl text-stone-600 font-serif italic mb-10 pb-8 border-b border-stone-100 leading-relaxed">
              {post.excerpt}
            </div>
          )}

          {/* --- SOLUCIÓN DE RENDERIZADO --- 
            Usamos 'ql-snow' (tema) y 'ql-editor' (contenedor) para simular el entorno del editor.
            Sobrescribimos estilos conflictivos con Tailwind para asegurar que no tenga scroll interno.
          */}
          <div className="ql-snow">
            <div 
              className="ql-editor !h-auto !p-0 !overflow-visible prose-custom-render"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </div>

          {/* --- FOOTER DEL POST --- */}
          <div className="mt-16 pt-8 border-t border-stone-100 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-stone-500 font-medium text-sm">
              <Calendar size={18} className="text-teal-600"/>
              <span>Publicado el {formattedDate}</span>
            </div>
            
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-stone-100 hover:bg-stone-900 text-stone-700 hover:text-white rounded-full transition-all font-bold text-sm tracking-wide">
              <Share2 size={18} />
              Compartir reflexión
            </button>
          </div>

        </div>
      </div>

      {/* --- ESTILOS CSS INLINE PARA ESTE COMPONENTE --- 
         Esto asegura la corrección tipográfica sin depender del archivo global css.
         Anulamos el comportamiento por defecto de ql-editor para que parezca una página web.
      */}
      <style>{`
        /* Configuración base de tipografía */
        .prose-custom-render {
          font-family: 'Georgia', serif; /* O tu fuente serif preferida */
          font-size: 1.125rem; /* 18px */
          line-height: 1.8;
          color: #292524; /* stone-800 */
        }

        /* Títulos dentro del contenido */
        .prose-custom-render h1, 
        .prose-custom-render h2, 
        .prose-custom-render h3 {
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.3;
          color: #1c1917; /* stone-900 */
        }
        
        .prose-custom-render h2 { font-size: 1.8rem; }
        .prose-custom-render h3 { font-size: 1.5rem; }

        /* Párrafos y espaciado */
        .prose-custom-render p {
          margin-bottom: 1.5rem;
          /* LA CLAVE: Evitar rotura de palabras forzada */
          word-break: break-word; 
          overflow-wrap: break-word;
          hyphens: none; /* Evita guiones automáticos si no los quieres */
        }

        /* Listas (Quill usa clases ql-indent, pero aquí aseguramos el base) */
        .prose-custom-render ul, .prose-custom-render ol {
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .prose-custom-render li {
          margin-bottom: 0.5rem;
          padding-left: 0.5rem;
        }

        /* Blockquotes */
        .prose-custom-render blockquote {
          border-left: 4px solid #0d9488; /* teal-600 */
          padding-left: 1rem;
          font-style: italic;
          color: #57534e; /* stone-600 */
          background: #fafaf9; /* stone-50 */
          padding: 1.5rem;
          border-radius: 0 0.5rem 0.5rem 0;
          margin-bottom: 2rem;
        }

        /* Imágenes */
        .prose-custom-render img {
          border-radius: 0.75rem;
          margin: 2rem 0;
          width: 100%;
          height: auto;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        /* Enlaces */
        .prose-custom-render a {
          color: #0d9488;
          text-decoration: underline;
          text-underline-offset: 2px;
          font-weight: 600;
        }

        /* FIX ESPECÍFICO PARA JUSTIFICACIÓN */
        /* Si usas texto justificado en el editor, esto asegura que se respete pero no rompa palabras */
        .ql-align-justify {
          text-align: justify;
          text-justify: inter-word;
        }
        .ql-align-center { text-align: center; }
        .ql-align-right { text-align: right; }
      `}</style>
    </article>
  );
}