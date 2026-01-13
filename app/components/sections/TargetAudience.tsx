"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowRightCircle } from "lucide-react";

// --- CONFIGURACIÓN DE ANIMACIÓN PERPETUA ---
// duration: 2.5s (lento y suave)
// repeat: Infinity (nunca para)
// repeatType: "reverse" (va y vuelve, efecto respiración)
const perpetualTransition = {
  duration: 2.5,
  ease: "easeInOut",
  repeat: Infinity,
  repeatType: "reverse",
} as const;

// --- SVG ANIMADOS (MODO PERPETUO) ---

const ProductivityIcon = () => (
  <svg viewBox="0 0 100 60" className="w-full h-full text-teal-100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ overflow: "visible" }}>
    <motion.line 
        x1="10" y1="50" x2="90" y2="50" 
        className="opacity-30" 
    />
    {/* Bloques flotando secuencialmente */}
    <motion.rect 
        x="10" y="35" width="15" height="15" rx="2" 
        animate={{ y: [0, -4, 0], opacity: [0.6, 1, 0.6] }}
        transition={perpetualTransition} 
    />
    <motion.rect 
        x="35" y="25" width="15" height="25" rx="2" 
        animate={{ y: [0, -4, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ ...perpetualTransition, delay: 0.3 }} 
    />
    <motion.rect 
        x="60" y="15" width="15" height="35" rx="2" 
        animate={{ y: [0, -4, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ ...perpetualTransition, delay: 0.6 }} 
    />
    {/* Flecha pulsando hacia adelante */}
    <motion.path 
        d="M85 40 L 85 20 L 90 25 M 85 20 L 80 25" 
        animate={{ x: [0, 3, 0], opacity: [0.7, 1, 0.7] }} 
        transition={{ ...perpetualTransition, duration: 1.5 }} 
        className="text-white" 
    />
  </svg>
);

const ChaosToCalmIcon = () => (
  <svg viewBox="0 0 100 60" className="w-full h-full text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ overflow: "visible" }}>
    {/* La línea respira suavemente dibujándose y desdibujándose un poco */}
    <motion.path 
        d="M5 30 Q 15 5, 25 30 T 45 30 T 65 30 L 95 30" 
        animate={{ pathLength: [0.8, 1, 0.8], opacity: [0.7, 1, 0.7] }} 
        transition={perpetualTransition} 
    />
    {/* El punto final pulsa de tamaño */}
    <motion.circle 
        cx="95" cy="30" r="3" 
        fill="currentColor" 
        animate={{ scale: [0.8, 1.2, 0.8] }} 
        transition={perpetualTransition} 
    />
  </svg>
);

const ConnectingDotsIcon = () => (
  <svg viewBox="0 0 100 60" className="w-full h-full text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" style={{ overflow: "visible" }}>
    <motion.path 
        d="M20 50 L 50 20 L 80 50" 
        animate={{ opacity: [0.4, 1, 0.4] }} 
        transition={perpetualTransition} 
    />
    {/* Los puntos se encienden en secuencia */}
    <motion.circle cx="20" cy="50" r="4" animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.6, 1, 0.6] }} transition={perpetualTransition} className="fill-teal-100" />
    <motion.circle cx="50" cy="20" r="4" animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.6, 1, 0.6] }} transition={{ ...perpetualTransition, delay: 0.5 }} className="fill-teal-100" />
    <motion.circle cx="80" cy="50" r="4" animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.6, 1, 0.6] }} transition={{ ...perpetualTransition, delay: 1 }} className="fill-teal-600" />
  </svg>
);

const SafeSpaceIcon = () => (
  <svg viewBox="0 0 100 60" className="w-full h-full text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" style={{ overflow: "visible" }}>
    {/* Los círculos protectores expanden y contraen como una respiración */}
    <motion.path d="M30 30 A 20 20 0 0 1 70 30" animate={{ scale: [0.98, 1.02, 0.98] }} style={{ originX: "50%", originY: "50%" }} transition={perpetualTransition} />
    <motion.path d="M20 30 A 30 30 0 0 1 80 30" animate={{ scale: [0.98, 1.02, 0.98], opacity: [0.4, 0.7, 0.4] }} style={{ originX: "50%", originY: "50%" }} transition={{ ...perpetualTransition, delay: 0.2 }} className="opacity-60" />
    <motion.path d="M50 45 L 50 15" animate={{ height: [100, 110, 100] }} transition={perpetualTransition} />
  </svg>
);

const BreakthroughIcon = () => (
  <svg viewBox="0 0 100 60" className="w-full h-full text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" style={{ overflow: "visible" }}>
    <motion.line x1="80" y1="10" x2="80" y2="50" strokeDasharray="4 4" className="opacity-50" />
    <motion.path d="M10 30 L 40 30 C 60 30, 60 10, 90 10" animate={{ pathLength: [0.9, 1, 0.9] }} transition={perpetualTransition} />
    {/* La flecha intenta romper la barrera constantemente */}
    <motion.path d="M85 15 L 90 10 L 85 5" animate={{ x: [0, 5, 0] }} transition={{ ...perpetualTransition, duration: 1 }} />
  </svg>
);

// --- COMPONENTE PRINCIPAL ---

export default function TargetAudience() {
  const cards = [
    {
      id: 0,
      title: "Adultos en Etapa Productiva",
      desc: "Trabajo exclusivamente con personas que trabajan, estudian, o que por su momento vital deberían estar haciéndolo.",
      icon: <ProductivityIcon />,
      bg: "bg-teal-900 text-white shadow-xl shadow-teal-900/20", 
      iconColor: "text-teal-200",
      textColor: "text-teal-100",
      titleColor: "text-white",
      isPrimary: true
    },
    {
      id: 1,
      title: "Desborde Emocional",
      desc: "Sientes que tus emociones te gobiernan, vives en alerta o con una opresión constante.",
      icon: <ChaosToCalmIcon />,
      bg: "bg-white border border-stone-100",
      iconColor: "text-teal-600",
      textColor: "text-stone-600",
      titleColor: "text-stone-800",
      isPrimary: false
    },
    {
      id: 2,
      title: "Búsqueda de Sentido",
      desc: "No quieres solo aliviar síntomas; quieres entender la raíz profunda de lo que te pasa.",
      icon: <ConnectingDotsIcon />,
      bg: "bg-white border border-stone-100",
      iconColor: "text-teal-600",
      textColor: "text-stone-600",
      titleColor: "text-stone-800",
      isPrimary: false
    },
    {
      id: 3,
      title: "Espacio Profesional",
      desc: "Buscas un entorno seguro, confidencial y de alta precisión clínica.",
      icon: <SafeSpaceIcon />,
      bg: "bg-white border border-stone-100",
      iconColor: "text-teal-600",
      textColor: "text-stone-600",
      titleColor: "text-stone-800",
      isPrimary: false
    },
    {
      id: 4,
      title: "Resiliencia Activa",
      desc: "Has intentado otras soluciones, pero sientes que sigues en el mismo punto.",
      icon: <BreakthroughIcon />,
      bg: "bg-stone-50 border border-stone-100",
      iconColor: "text-teal-600",
      textColor: "text-stone-600",
      titleColor: "text-stone-800",
      isPrimary: false
    }
  ];

  const primaryCard = cards[0];
  const secondaryCards = cards.slice(1);

  return (
    <section className="py-20 md:py-24 bg-[#fffcf8] relative overflow-hidden">
      
      {/* Fondo Decorativo */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent -z-10" />
      
      <div className="max-w-6xl mx-auto px-6">
        
        {/* CABECERA */}
        <div className="mb-12 max-w-2xl">
          <span className="block text-teal-600 font-bold tracking-widest text-xs uppercase mb-4">
            Perfil del Consultante
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-800 leading-tight">
            ¿Es este espacio para ti?
          </h2>
        </div>

        {/* --- LAYOUT ESCRITORIO (BENTO GRID) --- */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {cards.map((card) => (
             <div key={card.id} className={`p-8 rounded-3xl relative group ${card.bg} ${card.isPrimary ? 'col-span-2' : 'col-span-1'} min-h-[300px] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-lg`}>
                <div className="flex justify-between items-start">
                    <div className="w-20 h-16">{card.icon}</div>
                    {card.isPrimary && <span className="px-3 py-1 rounded-full bg-teal-800 text-teal-100 text-xs font-bold uppercase">Filtro</span>}
                </div>
                <div>
                    <h3 className={`text-xl font-bold font-serif mb-3 ${card.titleColor}`}>{card.title}</h3>
                    <p className={`text-sm leading-relaxed ${card.textColor}`}>{card.desc}</p>
                </div>
             </div>
          ))}
        </div>


        {/* --- LAYOUT MÓVIL (INDICADOR + SLIDER) --- */}
        <div className="md:hidden flex flex-col gap-8">
            
            {/* 1. TARJETA INSIGNIA */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-8 rounded-3xl relative overflow-hidden ${primaryCard.bg}`}
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-16 h-12 text-teal-200">{primaryCard.icon}</div>
                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider border border-white/10">
                            Filtro
                        </span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-3">
                        {primaryCard.title}
                    </h3>
                    <p className="text-teal-100 text-sm leading-relaxed opacity-90">
                        {primaryCard.desc}
                    </p>
                </div>
            </motion.div>

            {/* 2. SLIDER HORIZONTAL */}
            <div className="flex flex-col gap-3">
                <div className="flex justify-end px-2">
                    <div className="flex items-center gap-2 text-teal-600/70 text-xs font-bold uppercase tracking-widest animate-pulse">
                        <span>Desliza</span>
                        <ArrowRight size={14} />
                    </div>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 hide-scrollbar">
                    {secondaryCards.map((card, i) => (
                        <div 
                            key={card.id} 
                            className={`flex-none w-[85vw] sm:w-[300px] snap-center p-6 rounded-2xl border ${card.bg} flex flex-col justify-between min-h-[220px] shadow-sm`}
                        >
                            {/* CONTENEDOR DE ICONO MÓVIL */}
                            <div className="w-14 h-14 mb-4 opacity-100 text-teal-600">
                                {card.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold font-serif text-stone-800 mb-2">{card.title}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                    <div className="w-2 flex-none" />
                </div>
            </div>

        </div>

        {/* CTA FINAL - DISEÑO SUTIL & PREMIUM */}
        <motion.div 
            className="mt-8 md:mt-16 p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col items-center text-center border border-teal-100 bg-gradient-to-b from-white to-teal-50/40 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
             {/* Decoración superior sutil */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-teal-300/30 to-transparent" />

             <div className="relative z-10 max-w-xl">
                <h3 className="text-xl md:text-2xl font-serif text-teal-900 mb-3">
                    ¿Te resuena lo que lees?
                </h3>
                <p className="text-stone-600 font-sans text-sm md:text-base mb-8 leading-relaxed">
                  Si identificas estos patrones en tu vida actual, mi consultorio está diseñado específicamente para abordarlos con precisión clínica.
                </p>
                
                <button className="px-8 py-3.5 rounded-full bg-teal-700 hover:bg-teal-800 text-white font-bold text-base transition-all shadow-lg shadow-teal-900/10 flex items-center justify-center gap-3 group mx-auto hover:-translate-y-0.5">
                    Solicitar Evaluación Inicial
                    <ArrowRightCircle className="text-teal-200 group-hover:text-white transition-colors" size={20} />
                </button>
             </div>
        </motion.div>

      </div>
    </section>
  );
}