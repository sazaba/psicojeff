"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 1. DEFINIMOS LA INTERFAZ PARA EVITAR EL ERROR "ANY"
interface Post {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  createdAt: string; // La API devuelve la fecha como string
}

export default function BlogCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [posts, setPosts] = useState<Post[]>([]); // Usamos la interfaz aquí
  const [loading, setLoading] = useState(true);

  // 2. PEDIMOS LOS DATOS A LA BASE DE DATOS (API)
  useEffect(() => {
    fetch('/api/posts/list')
      .then(res => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al cargar posts:", err);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-CO', {
        day: '2-digit', month: 'short', year: 'numeric'
    });
  };

  // Si está cargando o no hay posts, no mostramos nada (o podrías poner un esqueleto de carga)
  if (loading) return null; 
  if (posts.length === 0) return null;

  return (
    <section 
        className="py-24 bg-stone-50 relative w-full"
        style={{ maxWidth: '100vw', overflow: 'hidden' }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-2 block">
              Recursos y Reflexiones
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 leading-tight">
              Artículos sobre psicología y bienestar integral
            </h2>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-300 active:scale-95"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-300 active:scale-95"
              aria-label="Siguiente"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="w-full overflow-hidden">
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
            }}
            spaceBetween={32}
            slidesPerView={1}
            speed={800} 
            breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            loop={posts.length > 3}
            className="!pb-12 w-full" 
            >
            {/* 3. AQUÍ USAMOS LA VARIABLE 'post' YA TIPADA */}
            {posts.map((post: Post) => (
                <SwiperSlide key={post.id} className="h-auto">
                <article className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100 relative top-0 hover:-top-2">
                    
                    <div className="relative h-64 overflow-hidden bg-stone-200">
                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500 z-10"></div>
                    {post.image ? (
                        <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-stone-400 font-serif italic">Sin Imagen</div>
                    )}
                    <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-700 shadow-sm border border-white/50">
                        {post.category}
                    </span>
                    </div>

                    <div className="flex flex-col flex-1 p-6 md:p-8">
                    <div className="flex items-center gap-4 text-xs text-stone-400 mb-4 font-medium">
                        <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(post.createdAt)}
                        </div>
                        <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                        </div>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-stone-800 mb-3 group-hover:text-teal-700 transition-colors line-clamp-2 leading-snug">
                        <Link href={`/blog/${post.id}`} className="focus:outline-none">
                            <span className="absolute inset-0 z-0"></span>
                            {post.title}
                        </Link>
                    </h3>

                    <p className="text-stone-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center text-teal-600 font-bold text-sm group/link z-10 relative pointer-events-none">
                        Leer artículo
                        <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                    </div>
                </article>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>

        <div className="mt-8 text-center">
            <Link href="/blog" className="inline-block px-8 py-3 border border-stone-300 rounded-full text-stone-600 font-semibold hover:bg-stone-800 hover:text-white transition-colors">
                Ver todos los artículos
            </Link>
        </div>

      </div>
    </section>
  );
}