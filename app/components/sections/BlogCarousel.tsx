"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, Clock, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  createdAt: string;
  isFeatured: boolean;
}

// --- COMPONENTE SKELETON (Para evitar saltos de pantalla) ---
// Muestra unas cajas grises pulsantes mientras cargan los datos reales
const CarouselSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3].map((i) => (
      <div key={i} className={`h-[500px] rounded-2xl bg-stone-100 animate-pulse border border-stone-200 ${i === 3 ? 'hidden lg:block' : ''} ${i === 2 ? 'hidden md:block' : ''}`}>
        <div className="h-64 bg-stone-200 rounded-t-2xl" />
        <div className="p-6 space-y-4">
          <div className="h-4 bg-stone-200 rounded w-1/3" />
          <div className="h-8 bg-stone-200 rounded w-3/4" />
          <div className="h-20 bg-stone-200 rounded w-full" />
        </div>
      </div>
    ))}
  </div>
);

export default function BlogCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [posts, setPosts] = useState<Post[]>([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController(); // Para cancelar petición si el usuario sale rápido

    fetch('/api/posts/list', { signal: controller.signal })
      .then(res => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
            setPosts(data);
        }
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
            console.error("Error al cargar posts:", err);
            setLoading(false);
        }
      });

      return () => controller.abort();
  }, []);

  const formatDate = (dateString: string) => {
    try {
        return new Date(dateString).toLocaleDateString('es-CO', {
            day: '2-digit', month: 'short', year: 'numeric'
        });
    } catch (e) {
        return "";
    }
  };

  // Si no hay posts y ya cargó, no mostramos nada (pero evitamos el error)
  if (!loading && posts.length === 0) return null;

  return (
    <section 
        className="py-24 bg-stone-50 relative w-full"
        // Optimización: content-visibility ayuda al navegador a no renderizarlo si está lejos del viewport
        style={{ contentVisibility: 'auto' }} 
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6">
        
        {/* CABECERA DE LA SECCIÓN */}
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

        {/* CONTENIDO PRINCIPAL: SKELETON O CARRUSEL */}
        <div className="w-full overflow-hidden min-h-[500px]"> {/* min-h evita colapso */}
            
            {loading ? (
                <CarouselSkeleton />
            ) : (
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
                {posts.map((post: Post) => {
                    
                    let tags: string[] = [];
                    try {
                        if (post.category && post.category.startsWith("[")) {
                            tags = JSON.parse(post.category);
                        } else {
                            tags = [post.category || "General"];
                        }
                    } catch (e) {
                        tags = ["General"];
                    }

                    const visibleTags = tags.slice(0, 2); 

                    return (
                        <SwiperSlide key={post.id} className="h-auto">
                        <article className={`group h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border relative top-0 hover:-top-2 ${post.isFeatured ? 'border-amber-200 ring-1 ring-amber-100' : 'border-stone-100'}`}>
                            
                            <div className="relative h-64 overflow-hidden bg-stone-200">
                                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500 z-10"></div>
                                
                                {post.image ? (
                                    <Image 
                                        src={post.image} 
                                        alt={post.title} 
                                        fill 
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        // OPTIMIZACIÓN: Sizes ajustados para que móvil descargue imágenes pequeñas
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-stone-400 font-serif italic">Sin Imagen</div>
                                )}

                                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2 max-w-[80%]">
                                    {visibleTags.map((tag, index) => (
                                        <span key={index} className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-700 shadow-sm border border-white/50">
                                            {tag}
                                        </span>
                                    ))}
                                    {tags.length > 2 && (
                                        <span className="bg-stone-800/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                                            +{tags.length - 2}
                                        </span>
                                    )}
                                </div>

                                {post.isFeatured && (
                                     <span className="absolute top-4 right-4 z-20 bg-amber-400 text-white p-1.5 rounded-full shadow-md" title="Artículo Destacado">
                                        <Star size={12} fill="currentColor" />
                                     </span>
                                )}
                            </div>

                            <div className="flex flex-col flex-1 p-6 md:p-8">
                                <div className="flex items-center gap-4 text-xs text-stone-400 mb-4 font-medium">
                                    <div className="flex items-center gap-1">
                                    <Calendar size={14} />
                                    {formatDate(post.createdAt)}
                                    </div>
                                    <div className="flex items-center gap-1">
                                    <Clock size={14} />
                                    {post.readTime || "5 min"}
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
                    );
                })}
                </Swiper>
            )}
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