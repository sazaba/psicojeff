"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";

// Importaciones de Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// --- DATOS CON NUEVAS IMÁGENES DE PRUEBA (UNSPLASH STABLE) ---
const blogPosts = [
  {
    id: 1,
    title: "El cuerpo lleva la cuenta: Trauma y somatización",
    excerpt: "Cuando la terapia verbal no es suficiente. Exploramos cómo el sistema nervioso almacena experiencias traumáticas y las rutas para liberarlas.",
    category: "Trauma",
    date: "12 Ene, 2026",
    readTime: "5 min",
    // Nueva imagen: Textura orgánica oscura
    image: "https://images.unsplash.com/photo-1618588507085-c79565432917?q=80&w=2070&auto=format&fit=crop", 
  },
  {
    id: 2,
    title: "Más allá de la ansiedad funcional",
    excerpt: "El alto rendimiento a menudo enmascara un sistema nervioso desregulado. Identifica los síntomas silenciosos del burnout ejecutivo.",
    category: "Ansiedad",
    date: "08 Ene, 2026",
    readTime: "4 min",
    // Nueva imagen: Estrés urbano/movimiento
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "La arquitectura del apego en la adultez",
    excerpt: "Cómo nuestros primeros vínculos definen nuestras relaciones de pareja actuales y la estrategia clínica para reestructurar la seguridad emocional.",
    category: "Relaciones",
    date: "28 Dic, 2025",
    readTime: "7 min",
    // Nueva imagen: Conexión humana sutil
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Integración emocional: Cuando pensar no basta",
    excerpt: "El límite de la racionalización en psicoterapia. Por qué entender el 'por qué' no siempre elimina el síntoma.",
    category: "Metodología",
    date: "15 Dic, 2025",
    readTime: "6 min",
    // Nueva imagen: Equilibrio y estructura zen
    image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Neurobiología de la regulación emocional",
    excerpt: "Una mirada científica a cómo funciona tu ventana de tolerancia y herramientas prácticas para ampliarla.",
    category: "Neurociencia",
    date: "10 Dic, 2025",
    readTime: "8 min",
    // Nueva imagen: Redes abstractas / cerebro
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2032&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Duelo no resuelto y enfermedades psicosomáticas",
    excerpt: "El impacto inmunológico de la tristeza contenida. Abordaje integrativo para procesos de pérdida estancados.",
    category: "Psicosomática",
    date: "01 Dic, 2025",
    readTime: "5 min",
    // Nueva imagen: Naturaleza melancólica
    image: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function BlogCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6">
        
        {/* --- HEADER DE LA SECCIÓN --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-2 block">
              Recursos y Reflexiones
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 leading-tight">
              Artículos sobre psicología y bienestar integral
            </h2>
          </div>

          {/* Botones de navegación personalizados */}
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

        {/* --- CARRUSEL SWIPER --- */}
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
          loop={true}
          // Autoplay opcional para que se mueva solo
          // autoplay={{ delay: 5000, disableOnInteraction: false }} 
          className="!pb-12" 
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.id} className="h-auto">
              <article className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100 relative top-0 hover:-top-2">
                
                {/* IMAGEN CARD */}
                <div className="relative h-64 overflow-hidden bg-stone-200">
                   {/* Overlay degradado al hacer hover */}
                   <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500 z-10"></div>
                   
                   {/* Imagen Real */}
                   <Image 
                     src={post.image} 
                     alt={post.title} 
                     fill 
                     className="object-cover transition-transform duration-1000 group-hover:scale-110"
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                   />

                   {/* Badge de Categoría Flotante */}
                   <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-700 shadow-sm border border-white/50">
                     {post.category}
                   </span>
                </div>

                {/* CONTENIDO CARD */}
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  {/* Meta data */}
                  <div className="flex items-center gap-4 text-xs text-stone-400 mb-4 font-medium">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-serif font-bold text-stone-800 mb-3 group-hover:text-teal-700 transition-colors line-clamp-2 leading-snug">
                    <Link href={`/blog/${post.id}`} className="focus:outline-none">
                        <span className="absolute inset-0 z-0"></span>
                        {post.title}
                    </Link>
                  </h3>

                  {/* Extracto */}
                  <p className="text-stone-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Link 'Leer más' */}
                  <div className="flex items-center text-teal-600 font-bold text-sm group/link z-10 relative pointer-events-none">
                    Leer artículo
                    <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- LINK AL BLOG COMPLETO --- */}
        <div className="mt-8 text-center md:hidden">
            <Link href="/blog" className="inline-block px-6 py-3 border border-stone-300 rounded-full text-stone-600 font-semibold hover:bg-stone-800 hover:text-white transition-colors">
                Ver todos los artículos
            </Link>
        </div>

      </div>
    </section>
  );
}