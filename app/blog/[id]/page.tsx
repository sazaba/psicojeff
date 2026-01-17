import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag, Share2, BookOpen } from "lucide-react";
import { prisma } from "@/lib/prisma";

// NO importamos CSS de Quill. Vamos a estilizar "a mano" para control total.

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
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(post.createdAt);

  return (
    <article className="min-h-screen bg-[#fffcf8] text-stone-900 font-sans selection:bg-teal-100 selection:text-teal-900">
      
      {/* --- BARRA DE NAVEGACIÓN FLOTANTE --- */}
      <nav className="sticky top-0 z-50 w-full bg-[#fffcf8]/90 backdrop-blur-sm border-b border-stone-100 py-4">
        <div className="container mx-auto px-4 max-w-3xl flex justify-between items-center">
            <Link 
              href="/blog" 
              className="group flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors text-sm font-bold uppercase tracking-widest"
            >
              <div className="p-2 rounded-full group-hover:bg-stone-100 transition-all">
                  <ArrowLeft size={18} />
              </div>
              <span className="hidden sm:inline">Volver</span>
            </Link>

            <div className="flex items-center gap-3">
                <button className="p-2 text-stone-400 hover:text-teal-600 transition-colors rounded-full hover:bg-teal-50" title="Compartir">
                    <Share2 size={20} />
                </button>
            </div>
        </div>
      </nav>

      {/* --- CABECERA EDITORIAL --- */}
      <header className="container mx-auto px-4 max-w-3xl pt-12 pb-10 text-center">
        
        {/* Metadatos Superiores */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-xs font-bold uppercase tracking-widest text-stone-400">
            <span className="text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                {post.category}
            </span>
            <span>•</span>
            <span>{formattedDate}</span>
        </div>

        {/* Título Principal (Estilo Serif Grande) */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-stone-900 mb-8 leading-tight text-balance">
            {post.title}
        </h1>

        {/* Resumen / Bajada (Lead) */}
        {post.excerpt && (
            <p className="text-xl md:text-2xl text-stone-500 font-serif italic leading-relaxed text-balance mb-8">
                {post.excerpt}
            </p>
        )}

        {/* Autor y Tiempo de Lectura */}
        <div className="flex items-center justify-center gap-6 border-t border-b border-stone-100 py-6">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-stone-200 overflow-hidden relative">
                    {/* Placeholder de avatar si no tienes foto de autor */}
                    <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-serif font-bold">J</div>
                </div>
                <div className="text-left">
                    <p className="text-xs font-bold text-stone-900 uppercase tracking-wider">Jefferson B.</p>
                    <p className="text-[10px] text-stone-400 font-medium">Psicólogo Clínico</p>
                </div>
            </div>
            <div className="h-8 w-px bg-stone-100"></div>
            <div className="flex items-center gap-2 text-stone-400 text-sm font-medium">
                <BookOpen size={16} />
                <span>{post.readTime || "5 min lectura"}</span>
            </div>
        </div>

      </header>

      {/* --- IMAGEN DESTACADA (WIDE) --- */}
      {post.image && (
          <div className="container mx-auto px-4 max-w-5xl mb-16">
            <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-2xl shadow-stone-200">
                <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover"
                    priority
                />
            </div>
             <p className="text-center text-stone-400 text-xs mt-4 italic">Imagen con fines ilustrativos</p>
          </div>
      )}

      {/* --- CUERPO DEL CONTENIDO (LIMPIO) --- */}
      <main className="container mx-auto px-4 max-w-[720px] pb-24">
        
        {/* CLASE 'premium-content':
            Aquí ocurre la magia. Hemos eliminado cualquier rastro de justificación forzada.
        */}
        <div 
            className="premium-content"
            dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* Final del Artículo */}
        <div className="mt-16 pt-10 border-t-2 border-stone-100 text-center">
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">¿Te ha servido esta reflexión?</h3>
            <p className="text-stone-500 mb-8">La psicología es un camino de autodescubrimiento constante.</p>
            <Link 
                href="/blog" 
                className="inline-block bg-stone-900 text-white px-8 py-4 rounded-full font-bold hover:bg-teal-600 transition-all shadow-lg hover:shadow-teal-200/50"
            >
                Leer más artículos
            </Link>
        </div>

      </main>

      {/* --- ESTILOS CSS INYECTADOS (NO TOCAR) --- */}
      <style>{`
        /* Configuración Tipográfica Premium */
        .premium-content {
            font-family: 'Lato', ui-sans-serif, system-ui, -apple-system, sans-serif; /* Tu fuente Sans */
            font-size: 1.25rem; /* 20px - Letra grande estilo Medium.com */
            line-height: 1.9;   /* Mucho aire entre líneas */
            color: #292524;     /* Stone-800: Negro suave, no puro */
            
            /* --- EL FIX DEFINITIVO ANTICORTE --- */
            text-align: left;              /* Alineación izquierda: La más legible en pantallas */
            word-break: normal;            /* Comportamiento estándar */
            overflow-wrap: break-word;     /* Evita desbordamientos solo si es necesario */
            hyphens: none;                 /* Sin guiones automáticos */
        }

        /* Títulos dentro del post */
        .premium-content h1, 
        .premium-content h2, 
        .premium-content h3 {
            font-family: 'Playfair Display', Georgia, serif; /* Tu fuente Serif */
            color: #1c1917;
            font-weight: 800;
            margin-top: 3.5rem;   /* Mucho espacio antes de un nuevo tema */
            margin-bottom: 1.5rem;
            line-height: 1.25;
            letter-spacing: -0.02em; /* Kerning apretado para títulos elegantes */
        }
        
        .premium-content h2 { font-size: 2rem; }
        .premium-content h3 { font-size: 1.6rem; }

        /* Párrafos */
        .premium-content p {
            margin-bottom: 2rem; /* Párrafos bien separados */
        }

        /* Citas Destacadas (Blockquotes) */
        .premium-content blockquote {
            border-left: none; /* Quitamos el borde típico */
            position: relative;
            padding: 2rem 3rem;
            margin: 3rem 0;
            font-family: 'Playfair Display', serif;
            font-size: 1.5rem;
            font-style: italic;
            color: #0d9488; /* Teal */
            background: transparent;
            text-align: center; /* Citas centradas y grandes */
            line-height: 1.4;
        }
        
        /* Decoración de comillas para el blockquote */
        .premium-content blockquote::before {
            content: "“";
            display: block;
            font-size: 4rem;
            line-height: 1;
            color: #ccfbf1; /* Teal muy claro */
            margin-bottom: -2rem;
        }

        /* Listas */
        .premium-content ul, .premium-content ol {
            margin-bottom: 2rem;
            padding-left: 1.5rem;
        }
        .premium-content li {
            margin-bottom: 0.75rem;
            padding-left: 0.5rem;
            position: relative;
        }
        /* Bullet points personalizados */
        .premium-content ul li::marker {
            color: #0d9488;
        }

        /* Imágenes dentro del contenido */
        .premium-content img {
            width: 100%;
            height: auto;
            border-radius: 1rem;
            margin: 3rem 0;
            box-shadow: 0 10px 40px -10px rgba(0,0,0,0.1); /* Sombra suave elegante */
        }

        /* Enlaces */
        .premium-content a {
            color: #0d9488;
            text-decoration: none;
            border-bottom: 2px solid #99f6e4;
            transition: all 0.2s;
            font-weight: 700;
        }
        .premium-content a:hover {
            background-color: #ccfbf1;
            color: #0f766e;
        }

        /* Negrillas */
        .premium-content strong, .premium-content b {
            font-weight: 700;
            color: #000;
        }

        /* SOBRESCRITURA DE ALINEACIONES DEL EDITOR */
        /* Si el editor guardó 'justify', lo ignoramos y forzamos izquierda por diseño */
        .premium-content .ql-align-justify { text-align: left !important; }
        .premium-content .ql-align-center { text-align: center !important; }
        .premium-content .ql-align-right { text-align: right !important; }

      `}</style>
    </article>
  );
}