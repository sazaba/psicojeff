import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { prisma } from "@/lib/prisma";

// Estilos de Quill obligatorios
import "react-quill-new/dist/quill.snow.css"; 

export async function generateStaticParams() {
  const posts = await prisma.post.findMany({ select: { id: true } });
  return posts.map((post: { id: number }) => ({
    id: post.id.toString(),
  }));
}

type Params = Promise<{ id: string }>;

export default async function BlogPostPage({ params }: { params: Params }) {
  const { id } = await params;
  const postId = parseInt(id);

  if (isNaN(postId)) return notFound();

  const post = await prisma.post.findUnique({
    where: { id: postId }
  });

  if (!post) {
    return notFound();
  }

  const formattedDate = new Intl.DateTimeFormat('es-CO', {
    dateStyle: 'long'
  }).format(post.createdAt);

  return (
    <article className="min-h-screen bg-white pb-24 pt-0 md:pt-0">
      
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
            {/* Contenedor del título más ancho también */}
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                
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

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white max-w-5xl leading-tight drop-shadow-xl break-words hyphens-none">
                    {post.title}
                </h1>
            </div>
        </div>
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="container mx-auto px-4 md:px-6 -mt-10 relative z-10 max-w-7xl">
        {/* CAMBIO 1: max-w-7xl para darle mucho aire y que no se sienta apretado */}
        <div className="bg-white rounded-t-3xl md:rounded-3xl shadow-xl p-6 md:p-12 lg:p-16 w-full border border-stone-100">
            
            {/* CLASES MAESTRAS:
               - w-full: Ocupa todo el ancho disponible.
               - break-words: Obliga al texto a bajar si no cabe (vital para móviles).
               - hyphens-none: PROHIBIDO poner guiones automáticos (adiós a "pá-nico").
               - whitespace-normal: Asegura que el texto fluya naturalmente.
            */}
            <div className="prose prose-lg prose-stone max-w-none w-full break-words hyphens-none whitespace-normal
                
                /* Títulos */
                prose-headings:font-serif prose-headings:font-bold prose-headings:text-stone-800 prose-headings:mt-12 prose-headings:mb-6
                
                /* Párrafos y Texto General */
                prose-p:text-stone-700 prose-p:leading-8 prose-p:text-base md:prose-p:text-lg
                [&_p]:mb-6 /* Espacio base entre párrafos */
                
                /* --- SOLUCIÓN DE SALTOS DE LÍNEA (ENTERS VACÍOS) --- */
                /* Si un párrafo tiene un <br> dentro (es un Enter vacío), dale altura visible */
                [&_p:has(br)]:h-8 
                
                /* Negritas */
                prose-strong:font-black prose-strong:text-stone-900 
                [&_b]:font-black [&_b]:text-stone-900
                
                /* Listas */
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:marker:text-teal-600
                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:marker:text-teal-600
                [&_li]:pl-2 [&_li]:mb-3
                
                /* Enlaces e Imágenes */
                prose-a:text-teal-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-xl prose-img:shadow-lg prose-img:w-full prose-img:my-10
                
                /* Citas */
                prose-blockquote:border-l-4 prose-blockquote:border-teal-500 prose-blockquote:bg-stone-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic prose-blockquote:rounded-r-lg
                
                /* Alineaciones del Editor (Vitales para Justificar/Centrar) */
                [&_.ql-align-center]:text-center 
                [&_.ql-align-right]:text-right 
                [&_.ql-align-justify]:text-justify [&_.ql-align-justify]:break-words"
            >
                
                {post.excerpt && (
                    <div className="text-lg md:text-xl text-stone-600 font-serif italic mb-10 pb-10 border-b border-stone-200 leading-relaxed">
                        {post.excerpt}
                    </div>
                )}
                
                {/* Contenido HTML Inyectado */}
                <div 
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
    </article>
  );
}