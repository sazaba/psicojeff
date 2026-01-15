// app/blog/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/app/data/posts"; // Importamos los datos centralizados

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-stone-50 pb-20 pt-32">
      <div className="container mx-auto px-6">
        
        {/* Header con botón de volver */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-stone-500 hover:text-teal-600 transition-colors mb-6 group">
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4">
            Bitácora Terapéutica
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl">
            Un espacio de reflexión sobre psicología integral, trauma y bienestar emocional.
          </p>
        </div>

        {/* Grid de Artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-700">
                    {post.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex gap-4 text-xs text-stone-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
                <h2 className="text-xl font-serif font-bold text-stone-800 mb-3 line-clamp-2 group-hover:text-teal-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-stone-500 text-sm line-clamp-3 mb-4 flex-1">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.id}`} className="flex items-center text-teal-600 font-bold text-sm group/btn mt-auto">
                    Leer artículo completo
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}