// app/blog/[id]/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { prisma } from "@/lib/prisma";

// Importante: Importamos los estilos de Quill para que las listas y sangrías se vean bien
import "react-quill-new/dist/quill.snow.css"; 

// Generar rutas estáticas para SEO
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
    <article className="min-h-screen bg-white pb-24 pt-32">
      
      {/* Hero / Cabecera */}
      <div className="w-full h-[40vh] md:h-[50vh] relative mb-12 bg-stone-900">
        {post.image && (
            <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover opacity-60"
            priority
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end">
            <div className="container mx-auto px-6 pb-12">
                <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                    <ArrowLeft size={20} className="mr-2" />
                    Volver a los artículos
                </Link>
                
                {/* Metadatos (Categoría y Tiempo) */}
                <div className="flex flex-wrap gap-4 text-white text-sm font-medium mb-4">
                    <span className="bg-teal-600 px-3 py-1 rounded-full shadow-sm">
                        {post.category}
                    </span>
                    {/* Corrección: Aseguramos visibilidad con text-white y backdrop */}
                    <span className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white">
                        <Clock size={14} /> 
                        {post.readTime || "Lectura rápida"}
                    </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-serif font-bold text-white max-w-4xl leading-tight drop-shadow-lg">
                    {post.title}
                </h1>
            </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Columna Principal */}
        <div className="lg:col-span-8 lg:col-start-3">
            
            {/* CLASES PROSE PREMIUM:
                - prose-lg: Texto grande y legible.
                - prose-stone: Paleta de colores elegante.
                - prose-headings: Títulos con fuente serif.
                - prose-img: Imágenes redondeadas y con sombra.
                - [&_.ql-align-*]: TRUCO CLAVE para que funcionen las alineaciones del editor.
            */}
            <div className="prose prose-lg prose-stone max-w-none 
                prose-headings:font-serif prose-headings:font-bold prose-headings:text-stone-800
                prose-p:text-stone-700 prose-p:leading-relaxed
                prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                prose-blockquote:border-l-teal-500 prose-blockquote:bg-stone-50 prose-blockquote:py-2 prose-blockquote:pr-4
                
                [&_.ql-align-center]:text-center 
                [&_.ql-align-right]:text-right 
                [&_.ql-align-justify]:text-justify"
            >
                
                {/* Resumen destacado */}
                {post.excerpt && (
                    <p className="lead text-xl text-stone-600 font-serif italic mb-8 border-l-4 border-teal-500 pl-4 bg-stone-50/50 py-2">
                        {post.excerpt}
                    </p>
                )}
                
                {/* Renderizado de HTML del Editor */}
                <div 
                    dangerouslySetInnerHTML={{ __html: post.content }} 
                />

            </div>

            {/* Footer del Artículo */}
            <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 text-stone-500 font-medium">
                    <Calendar size={18} className="text-teal-600"/>
                    <span>Publicado el {formattedDate}</span>
                </div>
                <button className="flex items-center gap-2 px-6 py-2 bg-stone-100 hover:bg-teal-50 text-stone-600 hover:text-teal-600 rounded-full transition-all font-bold text-sm">
                    <Share2 size={18} />
                    Compartir artículo
                </button>
            </div>
        </div>

      </div>
    </article>
  );
}