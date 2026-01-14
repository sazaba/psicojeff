"use client";

import React from "react";
import Image from "next/image"; // <--- Importante para la imagen
import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";

// --- 1. AQUÍ PONES EL IMPORT DE TU LOGO ---
// Asegúrate de guardar la imagen 'google.png' en esa carpeta
import google from "@/app/assets/logo.svg"; 

// --- DATOS REALES ---
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
    <section className="py-24 bg-white relative overflow-hidden border-t border-stone-100">
      
      {/* --- HEADER NUEVO: ESTILO SELLO DE AUTORIDAD --- */}
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col items-center">
        
        {/* Enlace que envuelve todo el sello */}
        <a 
            href="https://share.google/5gs2judHeh0di1b4W" // Tu link real
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer text-center"
        >
           

            {/* 2. ESTRELLAS (CORREGIDO EL ERROR DE WEIGHT) */}
            <div className="flex gap-1.5 my-1">
                {[...Array(5)].map((_, i) => (
                    <Star 
                        key={i} 
                        size={32} 
                        // Eliminamos 'weight="fill"' porque daba error. 
                        // El relleno ya lo hace la clase 'fill-[#FFB400]'
                        className="text-[#FFB400] fill-[#FFB400]" 
                    />
                ))}
            </div>

            {/* 3. TEXTO DE RESEÑAS */}
            <p className="text-stone-600 text-base md:text-lg mt-1">
                A base de <strong className="text-stone-900">88 reseñas</strong>
            </p>

            {/* 4. LOGO DE GOOGLE (Imagen Importada) */}
            <div className="mt-3 relative w-24 h-8 md:w-28 md:h-10">
                <Image 
                    src={google} 
                    alt="Google Logo" 
                    fill
                    className="object-contain" 
                />
            </div>
        </a>

      </div>

      {/* --- MARQUEE INFINITO --- */}
      <div className="relative w-full overflow-hidden">
        
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div 
            className="flex gap-6 w-max px-6"
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ 
                duration: 50, 
                ease: "linear", 
                repeat: Infinity 
            }}
            whileHover={{ animationPlayState: "paused" }} 
        >
            {infiniteReviews.map((review, index) => (
                <div 
                    key={`${review.id}-${index}`} 
                    className="w-[320px] md:w-[400px] flex-shrink-0 bg-white p-8 rounded-2xl border border-stone-100 relative group hover:shadow-xl hover:border-teal-100 transition-all duration-300 shadow-sm flex flex-col"
                >
                    <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-100 transition-opacity">
                         <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <CheckCircle2 size={14} className="text-blue-500 ml-1" />
                    </div>

                    <p className="text-stone-600 leading-relaxed mb-8 font-medium text-sm md:text-base min-h-[80px]">
                        "{review.text}"
                    </p>

                    <div className="flex items-center gap-3 mt-auto border-t border-stone-50 pt-4">
                        <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-sm`}>
                            {review.name.charAt(0)}
                        </div>
                        <div>
                            <p className="text-sm font-bold text-stone-800 leading-tight">{review.name}</p>
                            <p className="text-xs text-stone-400 mt-0.5">{review.date}</p>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
      </div>

    </section>
  );
}