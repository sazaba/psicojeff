"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- CONFIGURACIÓN DE ACTIVACIÓN ---
const drawViewportConfig = { once: true, amount: 0.2 };

// --- CONFIGURACIÓN DE ICONOS ANIMADOS ---
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-16 h-16 mb-6 relative flex items-center justify-center">
    {/* Fondo del icono */}
    <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-teal-100 rounded-full" 
        style={{ willChange: "transform, opacity" }} 
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

// --- ICONOS RESTAURADOS ---
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

// --- NUEVOS ICONOS ---
const BriefcaseIcon = () => (
  <IconWrapper>
    <motion.rect
      x="2" y="7" width="20" height="14" rx="2" ry="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={drawViewportConfig}
      transition={{ duration: 1.5 }}
    />
    <motion.path
      d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={drawViewportConfig}
      transition={{ duration: 1.5, delay: 0.2 }}
    />
  </IconWrapper>
);

const FlameIcon = () => (
  <IconWrapper>
    <motion.path
      d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.3a1 1 0 0 1 .9.8z"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={drawViewportConfig}
      transition={{ duration: 1.8 }}
    />
  </IconWrapper>
);

const WaveIcon = () => (
  <IconWrapper>
    <motion.path
      d="M2 12c.5-5 2-9 4-9s4 9 7 9c3 0 2-7 5-7s4 6 4 12"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={drawViewportConfig}
      transition={{ duration: 1.8, ease: "easeInOut" }}
    />
  </IconWrapper>
);

// --- DATOS COMPLETOS (9 ITEMS) ---
const painPoints = [
  // ORIGINALES (1-6)
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
  // NUEVOS (7-9)
  {
    icon: BriefcaseIcon,
    title: "Estrés Laboral",
    desc: "Sientes que las demandas del trabajo superan tus recursos. La presión, los plazos y la carga mental no terminan al salir de la oficina.",
  },
  {
    icon: FlameIcon,
    title: "Síndrome de Burnout",
    desc: "Más que cansancio, es un agotamiento emocional profundo. Te sientes 'quemado', cínico respecto a tu labor y sin sensación de logro.",
  },
  {
    icon: WaveIcon,
    title: "Desregulación Emocional",
    desc: "Tus emociones toman el control rápidamente. Reaccionas con una intensidad desproporcionada y te cuesta mucho tiempo volver a la calma.",
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
    <section className="py-24 px-4 md:px-6 relative z-10 overflow-hidden w-full">
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
          viewport={{ once: true, amount: 0.1 }}
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