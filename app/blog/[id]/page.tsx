// app/blog/[id]/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { prisma } from "@/lib/prisma";

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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
            <div className="container mx-auto px-6 pb-12">
                <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                    <ArrowLeft size={20} className="mr-2" />
                    Volver a los artículos
                </Link>
                <div className="flex gap-4 text-white/90 text-sm font-medium mb-4">
                    <span className="bg-teal-600 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                        <Clock size={14} /> {post.readTime}
                    </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">
                    {post.title}
                </h1>
            </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Columna Principal */}
        <div className="lg:col-span-8 lg:col-start-3">
            {/* Clases 'prose' de Tailwind Typography hacen que el HTML se vea bien automáticamente */}
            <div className="prose prose-lg prose-stone max-w-none">
                
                <p className="lead text-xl text-stone-600 font-serif italic mb-8 border-l-4 border-teal-500 pl-4">
                    {post.excerpt}
                </p>
                
                {/* AQUÍ ESTÁ EL CAMBIO CLAVE:
                   Usamos dangerouslySetInnerHTML para renderizar el HTML que viene del editor.
                   Tailwind Typography ('prose') se encargará de darle estilo a las listas, negritas, etc.
                */}
                <div 
                    className="text-stone-800 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content }} 
                />

            </div>

            {/* Footer del Artículo */}
            <div className="mt-12 pt-8 border-t border-stone-100 flex justify-between items-center">
                <div className="flex items-center gap-2 text-stone-500">
                    <Calendar size={18} />
                    <span>Publicado el {formattedDate}</span>
                </div>
                <button className="flex items-center gap-2 text-stone-600 hover:text-teal-600 transition-colors font-medium">
                    <Share2 size={18} />
                    Compartir
                </button>
            </div>
        </div>

      </div>
    </article>
  );
}