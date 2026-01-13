"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Gem, Clock, Sparkles, Zap } from "lucide-react";

// --- DATOS DE LA PROPUESTA DE VALOR ---
const features = [
  {
    id: 1,
    icon: <Target className="w-8 h-8 text-teal-400" />,
    title: "Psicología de Precisión",
    subtitle: 'Del "¿Por qué?" al "¿Cómo?"',
    text: "Comprender tu historia no basta para transformarla. Mientras otros se pierden en interpretaciones filosóficas del pasado, yo te entrego herramientas de cambio. Menos discurso teórico, más estrategia para destrabar tu presente.",
    gradient: "from-teal-900/40 to-stone-900"
  },
  {
    id: 2,
    icon: <Gem className="w-8 h-8 text-purple-400" />,
    title: "Modelo Boutique",
    subtitle: "Psicoterapia artesanal, no masiva.",
    text: "Atiendo un máximo de 4 pacientes por día. Esto no es una fábrica de citas; es un espacio de alta dedicación. Garantizo estar completamente presente, sin el desgaste del sistema tradicional.",
    gradient: "from-purple-900/40 to-stone-900"
  },
  {
    id: 3,
    icon: <Clock className="w-8 h-8 text-amber-400" />,
    title: "Tiempo Real",
    subtitle: "Sesiones de 60 a 90 minutos.",
    text: "Aquí no hay prisas. No trabajo con sesiones 'exprés'. Cada encuentro tiene el tiempo necesario para generar una inmersión profunda y un avance verdadero.",
    gradient: "from-amber-900/40 to-stone-900"
  },
  {
    id: 4,
    icon: <Sparkles className="w-8 h-8 text-cyan-400" />,
    title: "Síntesis Integral",
    subtitle: "Ciencia + Valores + Espiritualidad",
    text: "Fusiono la evidencia científica de las Terapias de Tercera Generación (ACT & DBT) con una visión humanista y espiritual. No vienes solo a ser escuchado; vienes a ser entrenado.",
    gradient: "from-cyan-900/40 to-stone-900"
  }
];

export default function ValueProposition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
        ref={containerRef} 
        className="relative bg-stone-950 text-stone-200 py-20 md:py-0 overflow-hidden"
    >
      
      {/* Fondo Animado "Nebula" */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-900/20 via-stone-950 to-stone-950 pointer-events-none" />
      <motion.div 
         animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none"
      />

      {/* CAMBIO AQUÍ: 
         1. max-w-6xl (Antes 7xl) -> Para que no sea tan ancho.
         2. md:gap-16 -> Para controlar el espacio entre columnas.
      */}
      <div className="max-w-6xl mx-auto px-6 md:flex md:gap-16 md:min-h-[250vh]"> 
        
        {/* --- COLUMNA IZQUIERDA (STICKY) --- 
            CAMBIO AQUÍ: md:w-5/12 (Aprox 42%) -> Le damos menos ancho al texto para que no empuje tanto las cartas.
        */}
        <div className="md:w-5/12 md:h-screen md:sticky md:top-0 flex flex-col justify-center py-12 md:py-0 z-10">
            
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-3 mb-6">
                    <span className="h-[1px] w-12 bg-teal-500"></span>
                    <span className="text-teal-400 font-bold tracking-[0.2em] text-xs uppercase">
                        Diferenciación
                    </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8">
                    No te ofrezco una <span className="text-stone-500 line-through decoration-teal-500/50">consulta psicológica</span>.
                    <br />
                    Te ofrezco una <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-400">inmersión en tu salud mental</span>.
                </h2>

                <p className="text-lg md:text-xl text-stone-400 max-w-md leading-relaxed mb-8">
                    En 20 años he confirmado una verdad: entender tu historia no es suficiente. Necesitas estrategias concretas para destrabar tu presente.
                </p>

                {/* Badge Disruptivo */}
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    <Zap className="text-yellow-400 fill-yellow-400" size={20} />
                    <span className="text-sm font-bold text-white tracking-wide">
                        Entrenamiento, no solo escucha.
                    </span>
                </div>
            </motion.div>
        </div>

        {/* --- COLUMNA DERECHA (SCROLLABLE CARDS) --- 
            CAMBIO AQUÍ: md:w-7/12 (Aprox 58%) -> Le damos más ancho a la zona de cartas, jalándolas a la izquierda.
        */}
        <div className="md:w-7/12 flex flex-col justify-center gap-6 md:gap-32 py-12 md:py-32">
            
            {features.map((item, index) => (
                <Card key={item.id} item={item} index={index} />
            ))}

        </div>
      </div>
    </section>
  );
}

// --- SUBCOMPONENTE CARD (Para aislar animaciones) ---
function Card({ item, index }: { item: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }} // Se activa antes de llegar al centro
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative"
        >
            {/* Glow Effect detrás de la tarjeta */}
            <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700`} />
            
            {/* Tarjeta Principal Glassmorphism Oscuro */}
            <div className="relative p-8 md:p-10 rounded-3xl bg-stone-900/80 backdrop-blur-xl border border-white/10 hover:border-teal-500/30 transition-colors duration-500">
                
                {/* Icono Flotante */}
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">
                    {item.title}
                </h3>
                
                <p className="text-teal-400 font-medium text-sm uppercase tracking-wider mb-6">
                    {item.subtitle}
                </p>

                <p className="text-stone-400 leading-relaxed text-base md:text-lg">
                    {item.text}
                </p>

                {/* Decoración esquina */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/20 group-hover:bg-teal-400 transition-colors" />
            </div>
        </motion.div>
    );
}