"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowRightCircle } from "lucide-react";

// --- CONFIGURACIÓN DE ACTIVACIÓN PARA MÓVIL ---
// amount: 0.1 -> Se activa apenas se ve el 10% del icono (Super sensible para móvil)
// once: true -> Evita parpadeos, se dibuja y se queda ahí.
const drawConfig = { once: true, amount: 0.1 };

// --- SVG ANIMADOS CON FIX DE VIEWPORT ---

const ProductivityIcon = () => (
  <svg viewBox="0 0 100 60" className="w-full h-full text-teal-100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ overflow: "visible" }}>
    <motion.line 
        x1="10" y1="50" x2="90" y2="50" 
        className="opacity-30" 
        viewport={drawConfig}
    />
    <motion.rect 
        x="10" y="35" width="15" height="15" rx="2" 
        initial={{ y: -10, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        viewport={drawConfig}
        transition={{ duration: 0.5 }} 
    />
    <motion.rect 
        x="35" y="25" width="15" height="25" rx="2" 
        initial={{ y: -10, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        viewport={drawConfig}
        transition={{ duration: 0.5, delay: 0.2 }} 
    />
    <motion.rect 
        x="60" y="15" width="15" height="35" rx="2" 
        initial={{ y: -10, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        viewport={drawConfig}
        transition={{ duration: 0.5, delay: 0.4 }} 
    />
    <motion.path 
        d="M85 40 L 85 20 L 90 25 M 85 20 L 80 25" 
        initial={{ pathLength: 0, opacity: 0 }} 
        whileInView={{ pathLength: 1, opacity: 1 }} 
        viewport={drawConfig}
        transition={{ delay: 0.8, duration: 0.8 }} 
        className="text-white" 
    />
  </svg>
);

const ChaosToCalmIcon = () => (
  <svg viewBox="0 0 100 60" className="w-full h-full text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ overflow: "visible" }}>
    <motion.path 
        d="M5 30 Q 15 5, 25 30 T 45 30 T 65 30 L 95 30" 
        initial={{ pathLength: 0, opacity: 0 }} 
        whileInView={{ pathLength: 1, opacity: 1 }} 
        viewport={drawConfig}
        transition={{ duration: 2 }} 
    />
    <motion.circle 
        cx="95" cy="30" r="3" 
        fill="currentColor" 
        initial={{ scale: 0 }} 
        whileInView={{ scale: 1 }} 
        viewport={drawConfig}
        transition={{ delay: 1.5 }} 
    />
  </svg>
);

const ConnectingDotsIcon = () => (
  <svg viewBox="0 0 100 60" className="w-full h-full text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" style={{ overflow: "visible" }}>
    <motion.path 
        d="M20 50 L 50 20 L 80 50" 
        initial={{ pathLength: 0, opacity: 0 }} 
        whileInView={{ pathLength: 1, opacity: 1 }} 
        viewport={drawConfig}
        transition={{ duration: 1.5 }} 
    />
    <motion.circle cx="20" cy="50" r="4" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={drawConfig} transition={{ delay: 0.2 }} className="fill-teal-100" />
    <motion.circle cx="50" cy="20" r="4" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={drawConfig} transition={{ delay: 0.8 }} className="fill-teal-100" />
    <motion.circle cx="80" cy="50" r="4" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={drawConfig} transition={{ delay: 1.5 }} className="fill-teal-600" />
  </svg>
);

const SafeSpaceIcon = () => (
  <svg viewBox="0 0 100 60" className="w-full h-full text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" style={{ overflow: "visible" }}>
    <motion.path d="M30 30 A 20 20 0 0 1 70 30" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={drawConfig} transition={{ duration: 1 }} />
    <motion.path d="M20 30 A 30 30 0 0 1 80 30" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={drawConfig} transition={{ duration: 1, delay: 0.3 }} className="opacity-60" />
    <motion.path d="M50 45 L 50 15" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={drawConfig} transition={{ duration: 0.5, delay: 1 }} />
  </svg>
);

const BreakthroughIcon = () => (
  <svg viewBox="0 0 100 60" className="w-full h-full text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" style={{ overflow: "visible" }}>
    <motion.line x1="80" y1="10" x2="80" y2="50" strokeDasharray="4 4" className="opacity-50" />
    <motion.path d="M10 30 L 40 30 C 60 30, 60 10, 90 10" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={drawConfig} transition={{ duration: 1.5, ease: "circOut" }} />
    <motion.path d="M85 15 L 90 10 L 85 5" initial={{ opacity: 0, x: -5 }} whileInView={{ opacity: 1, x: 0 }} viewport={drawConfig} transition={{ delay: 1.4 }} />
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
                    {card.isPrimary && <span className="px-3 py-1 rounded-full bg-teal-800 text-teal-100 text-xs font-bold uppercase">Requisito</span>}
                </div>
                <div>
                    <h3 className={`text-xl font-bold font-serif mb-3 ${card.titleColor}`}>{card.title}</h3>
                    <p className={`text-sm leading-relaxed ${card.textColor}`}>{card.desc}</p>
                </div>
             </div>
          ))}
        </div>


        {/* --- LAYOUT MÓVIL (CORREGIDO: INDICADOR + SLIDER) --- */}
        <div className="md:hidden flex flex-col gap-8">
            
            {/* 1. TARJETA INSIGNIA */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={drawConfig}
                className={`p-8 rounded-3xl relative overflow-hidden ${primaryCard.bg}`}
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-16 h-12 text-teal-200">{primaryCard.icon}</div>
                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider border border-white/10">
                            Filtro N.1
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
                
                {/* Indicador de scroll */}
                <div className="flex justify-end px-2">
                    <div className="flex items-center gap-2 text-teal-600/70 text-xs font-bold uppercase tracking-widest animate-pulse">
                        <span>Desliza</span>
                        <ArrowRight size={14} />
                    </div>
                </div>

                {/* Contenedor Scroll */}
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 hide-scrollbar">
                    {secondaryCards.map((card, i) => (
                        <div 
                            key={card.id} 
                            className={`flex-none w-[85vw] sm:w-[300px] snap-center p-6 rounded-2xl border ${card.bg} flex flex-col justify-between min-h-[220px] shadow-sm`}
                        >
                            <div className="w-14 h-14 mb-4 opacity-80">{card.icon}</div>
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

        {/* CTA FINAL */}
        <motion.div 
            className="mt-6 md:mt-8 bg-stone-900 rounded-3xl p-8 relative overflow-hidden flex flex-col items-center text-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={drawConfig}
        >
             <div className="relative z-10 max-w-xl">
                <p className="text-stone-300 font-sans text-sm md:text-base mb-4">
                  Si te reconoces en estos puntos, mi consultorio está diseñado para ti.
                </p>
                <button className="text-white font-bold text-lg flex items-center justify-center gap-2 hover:gap-4 transition-all group w-full md:w-auto">
                    Solicitar Evaluación Inicial
                    <ArrowRightCircle className="text-teal-500 group-hover:text-teal-400 transition-colors" />
                </button>
             </div>
        </motion.div>

      </div>
    </section>
  );
}