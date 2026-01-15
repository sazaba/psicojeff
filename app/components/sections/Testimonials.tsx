"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, CheckCircle2, ArrowRight } from "lucide-react"; // Añadí ArrowRight para el botón
import google from "@/app/assets/logo.svg";

// --- TUS DATOS (Sin cambios) ---
const reviews = [
  {
    id: 1,
    name: "Johana Fernández Restrepo",
    date: "Hace 2 semanas",
    text: "Excelente su trabajo 👌 trabajando no solo la mente sino también las emociones y lo que esto genera en el cuerpo, ayudando a llegar a un propósito de vida.",
    rating: 5,
    color: "bg-red-500"
  },
  {
    id: 2,
    name: "Pilar Gutierrez Tabares",
    date: "Hace 3 meses",
    text: "En varias ocasiones que he requerido los servicios profesionales del Dr. Jefferson, mis clientes han quedado satisfechos con los resultados de su trabajo.",
    rating: 5,
    color: "bg-green-600"
  },
  {
    id: 3,
    name: "Gladis Toro L",
    date: "Hace 2 meses",
    text: "Excelente profesional, sus técnicas son maravillosas, me ayudó mucho durante todo mi proceso. Lo recomiendo.",
    rating: 5,
    color: "bg-purple-600"
  },
  {
    id: 4,
    name: "Edwin Gaviria Cárdenas",
    date: "Hace 2 meses",
    text: "Una experiencia grata y útil para mi bienestar integral con el profesional Jefferson!",
    rating: 5,
    color: "bg-orange-500"
  },
  {
    id: 5,
    name: "Mauricio",
    date: "Hace 3 semanas",
    text: "Un servicio que puede ayudar a mejorar tu vida para el presente y futuro. Gracias.",
    rating: 5,
    color: "bg-blue-500"
  },
  {
    id: 6,
    name: "Nathaly Gil",
    date: "Hace 3 meses",
    text: "Súper recomendado, muy buen profesional.",
    rating: 5,
    color: "bg-pink-600"
  }
];

const infiniteReviews = [...reviews, ...reviews];

export default function Testimonials() {
  return (
    // CAMBIO 1: bg-transparent para ver el fondo global y bordes sutiles
    <section className="py-24 relative w-full overflow-hidden border-t border-white/20 bg-transparent">
      
      {/* Luz ambiental sutil detrás del mockup (opcional, para resaltar el cristal) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 mb-20 flex flex-col items-center relative z-10">
        
        {/* --- MOCKUP PREMIUM TIPO "WIDGET" --- */}
        <div className="relative group">
            {/* Efecto de borde brillante (Glow) detrás */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-[32px] blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
            
            <div className="relative bg-white/60 backdrop-blur-xl border border-white/60 p-8 md:p-10 rounded-[30px] shadow-[0_8px_32px_rgba(0,0,0,0.05)] flex flex-col items-center text-center max-w-md mx-auto">
                
                {/* Logo Google Flotante */}
                <div className="mb-4 relative w-24 h-8">
                    <Image src={google} alt="Google Logo" fill className="object-contain" />
                </div>

                <div className="flex flex-col items-center gap-2 mb-6">
                    <span className="text-5xl md:text-6xl font-serif font-bold text-stone-800 tracking-tighter">
                        Excelente
                    </span>
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={28} className="text-[#FFB400] fill-[#FFB400] drop-shadow-sm" />
                        ))}
                    </div>
                    <p className="text-stone-600 font-medium mt-1">
                        Basado en <strong className="text-stone-900 underline decoration-stone-300 underline-offset-4">88 reseñas</strong> verificadas
                    </p>
                </div>

                {/* NUEVO BOTÓN INTEGRADO EN EL MOCKUP */}
                <a 
                    href="https://share.google/5gs2judHeh0di1b4W" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white text-sm font-semibold py-3.5 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                    Ver reseñas en Google
                    <ArrowRight size={16} />
                </a>
            </div>
        </div>
      </div>

      {/* --- CARRUSEL INFINITO --- */}
      <div className="w-full max-w-full overflow-hidden">
        <div 
            className="relative w-full overflow-hidden"
            style={{
                // Máscara suave para que las tarjetas desaparezcan elegantemente
                maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
            }}
        >
            <motion.div 
                className="flex gap-5 md:gap-8 w-max px-4 py-4"
                animate={{ x: ["0%", "-50%"] }} 
                transition={{ 
                    duration: 60, 
                    ease: "linear", 
                    repeat: Infinity 
                }}
                whileHover={{ animationPlayState: "paused" }} 
            >
                {infiniteReviews.map((review, index) => (
                    <div 
                        key={`${review.id}-${index}`} 
                        // CAMBIO: Fondo semitransparente (glass) para las tarjetas también
                        className="w-[280px] sm:w-[320px] md:w-[400px] flex-shrink-0 bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/50 relative group hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col"
                    >
                        {/* Icono Google decorativo */}
                        <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0">
                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.5 12.28c0-.86-.07-1.7-.22-2.5H12v4.86h6.47c-.28 1.48-1.12 2.73-2.4 3.58v3h3.86c2.26-2.09 3.57-5.17 3.57-8.94z" fill="#4285F4"/>
                                <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.3v3.12C3.32 21.43 7.37 24 12 24z" fill="#34A853"/>
                                <path d="M5.27 14.28c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28V6.6H1.3A11.97 11.97 0 000 12c0 1.93.47 3.76 1.3 5.4l3.97-3.12z" fill="#FBBC05"/>
                                <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.32 2.57 1.3 6.6l3.97 3.12c.95-2.85 3.6-4.96 6.73-4.96z" fill="#EA4335"/>
                            </svg>
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex gap-0.5">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <CheckCircle2 size={14} className="text-blue-500 ml-1 opacity-60" />
                        </div>

                        <p className="text-stone-700 leading-relaxed mb-8 font-medium text-sm md:text-[15px] min-h-[80px]">
                            "{review.text}"
                        </p>

                        <div className="flex items-center gap-3 mt-auto border-t border-stone-200/50 pt-4">
                            <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-sm ring-2 ring-white`}>
                                {review.name.charAt(0)}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-stone-800 leading-tight line-clamp-1">{review.name}</p>
                                <p className="text-xs text-stone-400 mt-0.5">{review.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
}