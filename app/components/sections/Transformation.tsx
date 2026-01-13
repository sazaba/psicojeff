"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Focus, Anchor, Waves, ArrowRight, Sparkles } from "lucide-react";

// --- IMPORT DE IMAGEN ---
import handshake from "@/app/assets/handshake.webp"; 

// --- CORRECCIÓN DE TIPADO 1: SVG TRANSITION ---
const svgTransition = {
  duration: 4,
  ease: "easeInOut" as const, 
  repeat: Infinity,
  repeatType: "reverse" as const
};

// --- ICONOS SVG PERSONALIZADOS (Animados) ---
const FocusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
     <motion.circle cx="12" cy="12" r="10" animate={{ scale: [1, 0.9, 1], opacity: [0.5, 1, 0.5] }} transition={svgTransition} />
     <motion.circle cx="12" cy="12" r="4" animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }} transition={svgTransition} />
  </svg>
);

const CenterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
     <motion.path d="M12 2v20" animate={{ pathLength: [0.6, 1, 0.6] }} transition={svgTransition} />
     <motion.path d="M2 12h20" animate={{ pathLength: [0.6, 1, 0.6] }} transition={svgTransition} />
     <motion.rect x="9" y="9" width="6" height="6" rx="1" animate={{ rotate: [0, 90, 0] }} transition={{ ...svgTransition, duration: 8 }} />
  </svg>
);

const CalmIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
     <motion.path d="M2 12c.6.5 1.7 1 2.5 1s2.5-.5 3.5-1c1-.5 2.6-.5 3.5 0s2 1 2.5 1c.5 0 1.5-.5 2.5-1s2-1 3.5-.5" animate={{ y: [0, -2, 0] }} transition={svgTransition} />
     <motion.path d="M2 16c.6.5 1.7 1 2.5 1s2.5-.5 3.5-1c1-.5 2.6-.5 3.5 0s2 1 2.5 1c.5 0 1.5-.5 2.5-1s2-1 3.5-.5" animate={{ y: [0, -2, 0] }} transition={{ ...svgTransition, delay: 0.5 }} />
  </svg>
);


// --- DATOS DE LOS PILARES ---
const pillars = [
  {
    id: "focus",
    title: "Enfocarte",
    subtitle: "Claridad & Valores",
    icon: <FocusIcon />,
    description: "Dejamos de lado las distracciones y preocupaciones que te alejan de tus objetivos. Logras claridad sobre tu norte y cómo avanzar en función de tus valores.",
    color: "bg-teal-900/40 border-teal-800 text-teal-100", 
    gradient: "from-teal-900 to-stone-900"
  },
  {
    id: "center",
    title: "Centrarte",
    subtitle: "Presencia & Gestión",
    icon: <CenterIcon />,
    description: "Desarrollamos herramientas para gestionar tus emociones y pensamientos sin que te controlen. Aprendes a no perderte en la reactividad o el caos interno.",
    color: "bg-purple-900/40 border-purple-800 text-purple-100",
    gradient: "from-purple-900 to-stone-900"
  },
  {
    id: "calm",
    title: "Tranquilizarte",
    subtitle: "Estabilidad & Confianza",
    icon: <CalmIcon />,
    description: "Logrando una sensación de estabilidad que te permita tomar mejores decisiones y actuar con confianza real, no desde el miedo o la urgencia.",
    color: "bg-cyan-900/40 border-cyan-800 text-cyan-100",
    gradient: "from-cyan-900 to-stone-900"
  }
];

// --- ANIMACIÓN DE FONDO ---
const nebulaAnimation = {
  scale: [1, 1.1, 1],
  opacity: [0.2, 0.4, 0.2],
  transition: { 
    duration: 10, 
    repeat: Infinity, 
    ease: "easeInOut" as const 
  }
};

export default function Transformation() {
  const [activePillar, setActivePillar] = useState<string | null>("center");

  return (
    <section className="relative py-24 px-6 bg-stone-950 overflow-hidden text-stone-200">
      
      {/* FONDO ANIMADO DARK MODE */}
      <div className="absolute inset-0 pointer-events-none">
          <motion.div 
             animate={nebulaAnimation}
             className="absolute top-0 left-0 w-[600px] h-[600px] bg-teal-900/20 rounded-full blur-[120px]"
          />
          <motion.div 
             animate={nebulaAnimation}
             transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: 5 
             }}
             className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]"
          />
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* --- COLUMNA 1: INTRO + IMAGEN --- */}
        <div className="flex flex-col gap-10">
            
            {/* Cabecera Texto */}
            <div>
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6"
                >
                    <Sparkles size={16} className="text-teal-400" />
                    <span className="text-teal-400 font-bold tracking-[0.2em] text-xs uppercase">
                        Resultados Tangibles
                    </span>
                </motion.div>
                
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight"
                >
                    Calma <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-400">Vitalizada</span>
                </motion.h2>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-stone-400 text-lg leading-relaxed max-w-lg"
                >
                    Cuando mis pacientes describen cómo se sienten después de cada sesión, tres palabras se repiten: <span className="text-white font-medium italic">enfocados, centrados y tranquilos.</span>
                </motion.p>
            </div>

            {/* --- IMAGEN HANDSHAKE CON FONDO PASTEL TIERRA --- */}
           {/* --- IMAGEN HANDSHAKE CON FONDO TIERRA (CORREGIDO PARA MAYOR CONTRASTE) --- */}
            <motion.div 
                className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 group aspect-video lg:aspect-[4/3] bg-gradient-to-br from-[#E8DCCA] via-[#D6C0B0] to-[#BFA08E]" // <--- CAMBIO CLAVE: Tonos Mocha/Arcilla suaves
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Image 
                    src={handshake} 
                    alt="Alianza Terapéutica"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-100" // Eliminé 'mix-blend' para que la foto se vea nítida y natural sobre el color
                />
                
                {/* Overlay Gradiente Oscuro en la base (Más fuerte para asegurar lectura del texto) */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/10 to-transparent" />
                
                {/* Texto sobre imagen */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                    <p className="text-white font-serif text-xl md:text-2xl leading-snug drop-shadow-md">
                        "No es solo alivio momentáneo. Es arquitectura interna para la vida."
                    </p>
                </div>
            </motion.div>

        </div>

        {/* --- COLUMNA 2: ACORDEÓN INTERACTIVO --- */}
        <div className="flex flex-col gap-4 h-auto lg:h-[600px]">
            
            {pillars.map((pillar) => {
                const isActive = activePillar === pillar.id;
                
                return (
                    <motion.div
                        key={pillar.id}
                        layout 
                        onClick={() => setActivePillar(isActive ? null : pillar.id)}
                        onHoverStart={() => setActivePillar(pillar.id)}
                        className={`relative rounded-3xl overflow-hidden cursor-pointer border transition-all duration-500 ease-out
                            ${isActive 
                                ? `flex-[3] ${pillar.color} shadow-lg shadow-teal-900/10` 
                                : 'flex-[1] bg-stone-900/50 border-stone-800 hover:bg-stone-800/80'}
                            flex flex-col
                        `}
                        style={{ willChange: "flex-grow" }}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 transition-opacity duration-500 ${isActive ? 'opacity-20' : ''}`} />

                        <div className="relative z-10 p-6 md:p-8 flex flex-row lg:flex-row items-center gap-6 h-full">
                             
                             <div className="flex items-center gap-4 min-w-max">
                                 <div className={`p-3 rounded-2xl bg-white/10 backdrop-blur-md transition-transform duration-500 ${isActive ? 'scale-110 text-white' : 'scale-100 text-stone-500'}`}>
                                     {pillar.icon}
                                 </div>
                                 
                                 <h3 className={`font-serif text-xl md:text-2xl transition-colors duration-300
                                     ${isActive ? 'text-white' : 'text-stone-500'}
                                 `}>
                                     {pillar.title}
                                 </h3>
                             </div>

                             {!isActive && (
                                 <div className="ml-auto text-stone-600">
                                     <ArrowRight size={20} />
                                 </div>
                             )}

                            <AnimatePresence mode="wait">
                                {isActive && (
                                    <motion.div 
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ duration: 0.4, delay: 0.1 }}
                                        className="hidden lg:block pl-6 border-l border-white/10 ml-4"
                                    >
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">
                                            {pillar.subtitle}
                                        </h4>
                                        <p className="text-lg text-stone-200 leading-relaxed font-light">
                                            {pillar.description}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        
                        <AnimatePresence>
                             {isActive && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="lg:hidden px-6 pb-6 pt-0"
                                >
                                     <p className="text-stone-300 leading-relaxed text-sm">
                                        {pillar.description}
                                    </p>
                                </motion.div>
                             )}
                        </AnimatePresence>

                    </motion.div>
                );
            })}
        </div>

      </div>
    </section>
  );
}