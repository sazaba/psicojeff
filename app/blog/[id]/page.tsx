// app/blog/[id]/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";
import { blogPosts } from "@/app/data/posts";

// Esta función es necesaria en Next.js App Router para generar páginas estáticas (mejora SEO y velocidad)
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  // NOTA: En Next.js 15 'params' podría necesitar 'await', en 14 no es obligatorio pero es buena práctica tratarlo con cuidado.
  // Buscamos el post correspondiente al ID de la URL
  const { id } = await params; // Si usas Next 15, mantén el await. Si te da error, quítalo.
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    notFound(); // Si no existe el ID (ej: /blog/999), muestra página 404
  }

  return (
    <article className="min-h-screen bg-white pb-24 pt-32">
      
      {/* Hero / Cabecera del Artículo */}
      <div className="w-full h-[40vh] md:h-[50vh] relative mb-12">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill 
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="container mx-auto px-6 pb-12">
                <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                    <ArrowLeft size={20} className="mr-2" />
                    Volver a los artículos
                </Link>
                <div className="flex gap-4 text-white/80 text-sm font-medium mb-4">
                    <span className="bg-teal-600/90 px-3 py-1 rounded-full text-white backdrop-blur-sm">{post.category}</span>
                    <span className="flex items-center gap-1 backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full"><Clock size={14} /> {post.readTime}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">
                    {post.title}
                </h1>
            </div>
        </div>
      </div>

      {/* Contenido del Artículo */}
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Columna Principal (Texto) */}
        <div className="lg:col-span-8 lg:col-start-3">
            <div className="prose prose-lg prose-stone max-w-none">
                <p className="lead text-xl text-stone-600 font-serif italic mb-8 border-l-4 border-teal-500 pl-4">
                    {post.excerpt}
                </p>
                
                {/* Aquí renderizamos el contenido. Como es texto plano por ahora, lo ponemos en un párrafo.
                    Cuando tengas el CMS, esto será HTML inyectado. */}
                <div className="text-stone-800 leading-relaxed whitespace-pre-line">
                    {post.content || "Contenido completo del artículo en construcción..."}
                    <br /><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h3>Un subtítulo importante</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

            {/* Footer del Artículo */}
            <div className="mt-12 pt-8 border-t border-stone-100 flex justify-between items-center">
                <div className="flex items-center gap-2 text-stone-500">
                    <Calendar size={18} />
                    <span>Publicado el {post.date}</span>
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