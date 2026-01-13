"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- CONFIGURACIÓN DE ACTIVACIÓN (CRÍTICO PARA MÓVIL) ---
// amount: 0.2 -> Se activa cuando solo el 20% del elemento es visible.
// once: true -> Se anima una vez y se queda visible (evita parpadeos al hacer scroll).
const drawViewportConfig = { once: true, amount: 0.2 };

// --- CONFIGURACIÓN DE ICONOS ANIMADOS ---
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-16 h-16 mb-6 relative flex items-center justify-center">
    {/* Fondo del icono: Animación de respiración optimizada */}
    <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-teal-100 rounded-full" 
        style={{ willChange: "transform, opacity" }} // Mejora rendimiento en móvil
    />
    {/* SVG */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8 text-teal-700 relative z-10"
      style={{ overflow: 'visible' }}
    >
      {children}
    </svg>
  </div>
);

// --- DEFINICIÓN DE LOS TRAZOS SVG (Motion Paths) ---

const ShieldAlertIcon = () => (
  <IconWrapper>
    <motion.path
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={drawViewportConfig}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    <motion.path
      d="M12 8v4"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={drawViewportConfig}
      transition={{ duration: 0.5, delay: 1 }}
    />
    <motion.path
      d="M12 16h.01"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={drawViewportConfig}
      transition={{ duration: 0.3, delay: 1.2 }}
    />
  </IconWrapper>
);

const HeartbeatBatteryIcon = () => (
  <IconWrapper>
    <motion.path
      d="M22 12h-4l-3 9L9 3l-3 9H2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={drawViewportConfig}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
  </IconWrapper>
);

const MoonThoughtsIcon = () => (
  <IconWrapper>
    <motion.path
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={drawViewportConfig}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  </IconWrapper>
);

const CloudRainIcon = () => (
  <IconWrapper>
    <motion.path
      d="M20 16.2A4.5 4.5 0 0 0 21 12a4.5 4.5 0 0 0-3.6-4.4 6 6 0 0 0-11 1.1 5 5 0 1 0 9 10.1"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={drawViewportConfig}
      transition={{ duration: 1.5 }}
    />
    {/* Gotas */}
    {[0.5, 0.7, 0.9].map((delay, i) => (
       <motion.path
         key={i}
         d={`M${8 + i*4} 19v2`}
         initial={{ opacity: 0, y: -2 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={drawViewportConfig}
         transition={{ duration: 0.5, delay: 1 + delay, repeat: Infinity, repeatType: "reverse" }}
       />
    ))}
  </IconWrapper>
);

const LightningBoltIcon = () => (
  <IconWrapper>
    <motion.path
      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={drawViewportConfig}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    />
  </IconWrapper>
);

const BrainIcon = () => (
  <IconWrapper>
    <motion.path
      d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 2.96-3.08A2.5 2.5 0 0 1 9.5 2z"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={drawViewportConfig}
      transition={{ duration: 1.8 }}
    />
    <motion.path
      d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-2.96-3.08A2.5 2.5 0 0 0 14.5 2z"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={drawViewportConfig}
      transition={{ duration: 1.8 }}
    />
  </IconWrapper>
);

// --- DATOS ---
const painPoints = [
  {
    icon: ShieldAlertIcon,
    title: "Ansiedad y Pánico",
    desc: "Esa sensación de alerta permanente, miedos repentinos o una opresión en el pecho que aparece sin aviso previo.",
  },
  {
    icon: HeartbeatBatteryIcon,
    title: "Estrés Crónico",
    desc: "Vives en modo supervivencia. El agotamiento físico y mental no desaparece ni siquiera después de intentar descansar.",
  },
  {
    icon: MoonThoughtsIcon,
    title: "Insomnio y Rumiación",
    desc: "La mente no se apaga de noche. Das vueltas a los mismos pensamientos una y otra vez, impidiendo un sueño reparador.",
  },
  {
    icon: CloudRainIcon,
    title: "Depresión y Vacío",
    desc: "Falta de vitalidad, sensación de desconexión con lo que antes disfrutabas o una tristeza profunda que cuesta explicar.",
  },
  {
    icon: LightningBoltIcon,
    title: "Irritabilidad y Reactividad",
    desc: "Sientes que tienes la mecha corta. Pequeñas cosas te detonan emociones intensas o frustración difícil de controlar.",
  },
  {
    icon: BrainIcon,
    title: "Atención Dispersa",
    desc: "Te cuesta enfocarte, sientes una neblina mental constante o saltas de una tarea a otra sin lograr concretar.",
  },
];

// --- VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 60, damping: 20 },
  },
};

export default function PainPoints() {
  return (
    <section className="py-24 px-4 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* CABECERA */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
       

          <motion.h2
            className="text-3xl md:text-5xl font-medium font-serif text-stone-800 mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ¿Te identificas con esto?
          </motion.h2>
          
          <motion.p
            className="text-base md:text-xl text-stone-600 font-sans font-light leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            No estás "roto". Simplemente, tu sistema nervioso está respondiendo a
            un entorno complejo. <br className="hidden md:block" />
            <span className="text-teal-700 font-medium italic font-serif relative inline-block mt-2">
               Validemos lo que sientes.
               <svg className="absolute w-full h-2 -bottom-1 left-0 text-teal-300 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
               </svg>
            </span>
          </motion.p>
        </div>

        {/* GRID DE TARJETAS */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Margen seguro para activación móvil
        >
          {painPoints.map((item, index) => (
            <motion.div
              key={index}
              className="group relative p-6 md:p-8 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300"
              variants={cardVariants}
            >
              {/* Icono animado */}
              <div className="relative transform group-hover:scale-105 transition-transform duration-500 origin-left">
                 <item.icon />
              </div>

              {/* Texto */}
              <h3 className="text-xl font-bold font-serif text-stone-800 mb-3 group-hover:text-teal-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed font-sans">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}