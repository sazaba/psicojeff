"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UserCheck, 
  Sparkles, 
  BrainCircuit, 
  Target, 
  Clock, 
  MapPin, 
  Wallet, 
  SunMedium, 
  Plus, 
  Minus 
} from "lucide-react";

// --- DATOS BASADOS EN EL DOCUMENTO APORTADO (Hardcoded) ---
const faqData = [
  {
    id: "profesional",
    question: "¿Quién es el profesional a cargo y cuál es su experiencia?",
    icon: <UserCheck size={24} />,
    answer: (
      <>
        El servicio es liderado por <strong>Jefferson Bastidas</strong>, psicólogo egresado de la Universidad de Manizales con <span className="text-teal-700 font-bold">20 años de experiencia laboral continua</span>.
        <br /><br />
        Su formación especializada incluye:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-stone-600">
          <li>Especialista en <strong>Salud Ocupacional</strong> (Universidad Libre).</li>
          <li>Diplomado en <strong>Psicología Clínica Basada en la Evidencia</strong> (Universidad Javeriana).</li>
          <li>Diplomado en <strong>Terapias Complementarias</strong> (Universidad del Rosario).</li>
        </ul>
      </>
    )
  },
  {
    id: "diferencia",
    question: "¿Qué hace que este enfoque sea diferente a otros?",
    icon: <Sparkles size={24} />,
    answer: (
      <>
        A diferencia de los enfoques tradicionales centrados solo en la narrativa del pasado, mi propuesta es de <strong>Psicología de Precisión</strong>: pasando del <em>"¿Por qué?"</em> al <strong>"¿Cómo?"</strong>.
        <br /><br />
        <div className="bg-stone-50 p-4 rounded-lg border-l-4 border-teal-500 my-3">
            <strong>Psicoterapia "Artesanal" y "Boutique":</strong> No es una consulta masiva. Solo atiendo un máximo de <strong>4 pacientes al día</strong> para garantizar una inmersión profunda y personalizada.
        </div>
        No vienes solo a ser escuchado, sino a ser <strong>entrenado</strong> con mapas claros y estrategias concretas.
      </>
    )
  },
  {
    id: "metodologia",
    question: "¿Qué metodologías se utilizan en las sesiones?",
    icon: <BrainCircuit size={24} />,
    answer: (
      <>
        El trabajo se fundamenta en las <strong>Terapias Contextuales de Tercera Generación</strong>, específicamente:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-stone-600">
          <li><strong>Terapia de Aceptación y Compromiso (ACT).</strong></li>
          <li><strong>Terapia Dialéctico Conductual (DBT).</strong></li>
        </ul>
        <p className="mt-2">
            Estos métodos cuentan con el mayor respaldo científico (meta-análisis) y se integran con <strong>Terapias Complementarias</strong> para unificar ciencia, valores y espiritualidad.
        </p>
      </>
    )
  },
  {
    id: "publico",
    question: "¿A quién va dirigido este servicio?",
    icon: <Target size={24} />,
    answer: (
      <>
        El servicio está diseñado para <strong>personas adultas en etapa productiva</strong> (que trabajan, estudian o deberían estar haciéndolo).
        <br /><br />
        Es ideal para quienes sienten que su mente está dispersa, que las emociones los abruman o que les cuesta avanzar hacia lo que es importante para ellos.
      </>
    )
  },
  {
    id: "duracion",
    question: "¿Cuánto dura cada sesión y qué frecuencia tienen?",
    icon: <Clock size={24} />,
    answer: (
      <>
        Aquí no trabajamos con sesiones "exprés". Cada encuentro es una <strong>inmersión en tu salud mental</strong> y dura entre <strong>60 y 90 minutos</strong>.
        <br /><br />
        Este tiempo permite generar un impacto real y un avance verdadero desde las primeras sesiones.
      </>
    )
  },
  // --- CORRECCIÓN RESPONSIVE AQUÍ ---
  {
    id: "ubicacion",
    question: "¿Dónde se encuentran las sedes y qué horarios manejan?",
    icon: <MapPin size={24} />,
    answer: (
      <>
        Contamos con dos sedes estratégicas en Manizales para tu comodidad:
        <ul className="space-y-4 mt-3">
            {/* CORRECCIÓN: 'flex-col' en móvil para apilar, 'sm:flex-row' en PC para alinear */}
            <li className="flex flex-col sm:flex-row items-start gap-1 sm:gap-2">
                <span className="shrink-0 w-fit bg-teal-100 text-teal-800 text-xs font-bold px-2 py-0.5 rounded sm:mt-0.5">MAÑANA</span>
                <span><strong>Sede Centro:</strong> (Cra 22 # 24-24). Atención hasta las 2:00 p.m.</span>
            </li>
            <li className="flex flex-col sm:flex-row items-start gap-1 sm:gap-2">
                <span className="shrink-0 w-fit bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-0.5 rounded sm:mt-0.5">TARDE</span>
                <span><strong>Sede Av. Santander:</strong> (Edificio Cristóbal Colón). Atención hasta las 8:00 p.m.</span>
            </li>
        </ul>
        <p className="mt-3 text-sm text-stone-500">
            <strong>Consulta Online:</strong> También disponible para mayor flexibilidad.
        </p>
      </>
    )
  },
  {
    id: "costo",
    question: "¿Cuál es el costo de la consulta?",
    icon: <Wallet size={24} />,
    answer: (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="bg-white border border-stone-200 p-4 rounded-xl text-center shadow-sm">
                <p className="text-xs text-stone-500 uppercase tracking-wide">Residentes Colombia</p>
                <p className="text-2xl font-bold text-stone-800">$100.000 COP</p>
            </div>
            <div className="bg-white border border-stone-200 p-4 rounded-xl text-center shadow-sm">
                <p className="text-xs text-stone-500 uppercase tracking-wide">Residentes Exterior</p>
                <p className="text-2xl font-bold text-stone-800">$30 USD/EUR</p>
            </div>
        </div>
        <p className="text-center text-xs text-stone-500 mt-2 italic">
            Pregunta por las promociones en paquetes de sesiones.
        </p>
      </>
    )
  },
  {
    id: "resultados",
    question: "¿Qué resultados puedo esperar del proceso?",
    icon: <SunMedium size={24} />,
    answer: (
      <>
        El objetivo final es alcanzar una <strong>"Calma Vitalizada"</strong>. Al trabajar juntos, podrás:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-stone-600">
          <li><strong>Enfocarte:</strong> Claridad sobre lo que realmente importa en tu vida.</li>
          <li><strong>Centrarte:</strong> Gestionar tus emociones y pensamientos sin que te controlen.</li>
          <li><strong>Tranquilizarte:</strong> Obtener una estabilidad que te permita tomar mejores decisiones y actuar con confianza.</li>
        </ul>
      </>
    )
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold tracking-widest text-xs uppercase mb-3 block">
            Resuelve tus dudas
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 leading-tight mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-stone-500 text-lg font-light max-w-2xl mx-auto">
            Entiendo que iniciar un proceso terapéutico genera preguntas. Aquí tienes respuestas claras y directas, sin letra pequeña.
          </p>
        </div>

        {/* --- GRID DE PREGUNTAS --- */}
        <div className="grid gap-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <motion.div 
                key={item.id}
                layout
                onClick={() => toggleFAQ(item.id)}
                className={`group cursor-pointer rounded-2xl border transition-all duration-500 overflow-hidden relative
                  ${isOpen 
                    ? "bg-white border-teal-500/30 shadow-xl shadow-teal-900/5" 
                    : "bg-white/60 hover:bg-white border-white/50 hover:border-stone-200 hover:shadow-lg shadow-sm backdrop-blur-md"
                  }
                `}
              >
                {/* Header de la Tarjeta */}
                <div className="p-6 md:p-8 flex items-center gap-6">
                  
                  {/* Icono Lateral */}
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 
                    ${isOpen ? "bg-teal-50 text-teal-700" : "bg-stone-100 text-stone-400 group-hover:bg-stone-200 group-hover:text-stone-600"}`}>
                    {item.icon}
                  </div>

                  {/* Pregunta */}
                  <div className="flex-grow">
                    <h3 className={`font-serif text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? "text-teal-800" : "text-stone-700 group-hover:text-stone-900"}`}>
                      {item.question}
                    </h3>
                  </div>

                  {/* Botón +/- */}
                  <div className={`shrink-0 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}>
                    {isOpen ? (
                        <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center">
                             <Minus size={16} />
                        </div>
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-stone-100 text-stone-400 group-hover:bg-stone-200 flex items-center justify-center">
                             <Plus size={16} />
                        </div>
                    )}
                  </div>
                </div>

                {/* Respuesta Desplegable */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-8 md:px-24 md:pb-10 text-stone-600 leading-relaxed text-base md:text-lg border-t border-stone-100/50 pt-6 mx-2">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Decoración Sutil Activa */}
                {isOpen && (
                    <motion.div 
                        layoutId="active-glow"
                        className="absolute inset-0 border-2 border-teal-500/20 rounded-2xl pointer-events-none" 
                    />
                )}

              </motion.div>
            );
          })}
        </div>

        {/* --- CTA FINAL DISCRETO --- */}
        <div className="mt-16 text-center">
            <p className="text-stone-500 mb-4">¿Tienes alguna otra pregunta específica?</p>
            {/* CAMBIO: Se reemplazó <button> por <a> con el enlace de Walink */}
            <a 
                href="https://wa.link/2x3i8s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full bg-stone-800 text-white font-bold hover:bg-stone-700 transition-colors shadow-lg hover:shadow-xl cursor-pointer"
            >
                Contáctame Directamente
            </a>
        </div>

      </div>
    </section>
  );
}