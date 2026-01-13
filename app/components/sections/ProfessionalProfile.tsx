"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, BookOpen, BrainCircuit, HeartHandshake, Quote, CheckCircle2 } from "lucide-react";

// --- IMPORT DE LA IMAGEN ---
import profesionalpsicojeff from "@/app/assets/profesionalpsicojeff.webp"; 

// --- DATOS DEL PERFIL ---
const credentials = [
  {
    icon: <BrainCircuit size={24} />,
    title: "Evidencia Científica",
    institution: "Universidad Javeriana",
    text: "Diplomado en Psicología Clínica Basada en la Evidencia. Métodos con eficacia probada.",
    color: "bg-teal-50 border-teal-100 text-teal-800"
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "Visión Holística",
    institution: "Universidad del Rosario",
    text: "Diplomado en Terapias Complementarias. Abordo tu sanación desde la totalidad del ser.",
    color: "bg-stone-50 border-stone-100 text-stone-700"
  },
  {
    icon: <BookOpen size={24} />,
    title: "Metodología PBE",
    institution: "ACT & DBT",
    text: "Terapia de Aceptación y Compromiso + Dialéctico Conductual. Respaldadas por meta-análisis.",
    color: "bg-blue-50 border-blue-100 text-blue-800"
  }
];

// --- CORRECCIÓN FINAL DEL TIPADO ---
// Quitamos el 'as const' general y lo aplicamos SOLO a "easeInOut".
// Esto mantiene el array 'y' editable (number[]) y arregla el error de readonly.
const floatAnimation = {
  y: [-10, 10, -10],
  transition: { 
    duration: 6, 
    repeat: Infinity, 
    ease: "easeInOut" as const // <--- Aquí es donde debe ir
  }
};

export default function ProfessionalProfile() {
  return (
    <section id="sobre-mi" className="py-24 px-6 bg-white relative overflow-hidden">
      
      {/* Fondo Abstracto "Noise" muy sutil */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* --- COLUMNA 1: DISEÑO DE IMAGEN "DISRUPTIVO" --- */}
        <div className="relative w-full max-w-md mx-auto lg:max-w-full">
            
            {/* 1. CAPA DE FONDO (Bloque Sólido Oscuro - Anchor) */}
            <div className="absolute top-10 -left-10 w-full h-full bg-stone-900 rounded-3xl -z-20 opacity-10 transform -rotate-3 scale-105" />

            {/* 2. CAPA DE ACENTO (Marco delineado Teal - Offset) */}
            <motion.div 
                animate={{ rotate: [3, 0, 3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-full h-full border-2 border-teal-500/30 rounded-3xl -z-10"
            />

            {/* 3. CONTENEDOR PRINCIPAL DE LA FOTO (Masking & Effects) */}
            <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-stone-900/20 aspect-[4/5] group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* LA IMAGEN */}
                <Image 
                    src={profesionalpsicojeff} 
                    alt="Psicólogo Jefferson Bastidas"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                />
                
                {/* Overlay Gradiente "Cinemático" (Mejora fotos no transparentes) */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-60" />
                
                {/* Efecto de Brillo en el borde (Glass Border) */}
                <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none" />
            </motion.div>

            {/* 4. ELEMENTOS FLOTANTES (Rompen la caja rectangular) */}
            
            {/* Badge Flotante 1: Experiencia */}
            <motion.div 
                className="absolute -bottom-8 -right-4 z-20 bg-white p-6 rounded-2xl shadow-xl shadow-stone-900/10 border border-stone-100 max-w-[180px]"
                animate={floatAnimation}
            >
                <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 bg-teal-100/50 rounded-lg text-teal-700">
                        <Award size={20} />
                    </div>
                    <span className="text-4xl font-bold text-stone-800 font-serif">20</span>
                </div>
                <p className="text-stone-500 text-xs font-bold uppercase tracking-wider leading-tight">
                    Años de<br/>Trayectoria
                </p>
            </motion.div>

            {/* Badge Flotante 2: Verificado */}
            <motion.div 
                 className="absolute top-8 -left-8 z-20 bg-stone-900/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg border border-stone-700 flex items-center gap-3"
                 initial={{ x: -20, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.5 }}
            >
                <CheckCircle2 size={18} className="text-teal-400" />
                <div className="text-left">
                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Colegio Colombiano</p>
                    <p className="text-xs font-bold text-white tracking-wide">TP #143530</p>
                </div>
            </motion.div>
        </div>


        {/* --- COLUMNA 2: NARRATIVA Y CREDENCIALES --- */}
        <div className="mt-12 lg:mt-0">
            
            {/* Encabezado */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="inline-block py-1 px-3 rounded-full bg-teal-50 border border-teal-100 text-teal-700 font-bold tracking-widest text-[10px] uppercase mb-4">
                    Perfil Profesional
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-2">
                    Jefferson Bastidas
                </h2>
                <h3 className="text-lg md:text-xl text-stone-500 font-sans font-light mb-8 flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-teal-500 inline-block"></span>
                    Psicólogo & Especialista SST
                </h3>
            </motion.div>

            {/* Texto Principal */}
            <motion.div 
                className="prose prose-stone text-stone-600 mb-10 leading-relaxed text-sm md:text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <p className="mb-4">
                    Egresado de la <strong>Universidad de Manizales</strong>, he dedicado dos décadas a perfeccionar un modelo que une la rigurosidad científica con la calidez humana.
                </p>
                <p>
                    Como Especialista en Gerencia y Control de Riesgos (<strong>Universidad Libre</strong>), entiendo que tu bienestar no ocurre en el vacío, sino en interacción constante con tu entorno laboral y social.
                </p>
            </motion.div>

            {/* Grid de Credenciales Interactivas */}
            <div className="flex flex-col gap-3">
                {credentials.map((cred, index) => (
                    <motion.div
                        key={index}
                        className={`p-4 rounded-xl border ${cred.color} bg-white relative overflow-hidden group hover:shadow-md transition-all duration-300`}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (index * 0.1) }}
                    >
                        {/* Efecto Hover Barra Lateral */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-current opacity-20 group-hover:w-2 transition-all duration-300" />
                        
                        <div className="flex gap-4 items-start pl-2">
                            <div className="mt-1 opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300">
                                {cred.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-stone-800 text-sm flex flex-wrap items-center gap-2">
                                    {cred.title}
                                    <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-stone-100 font-semibold text-stone-400">
                                        {cred.institution}
                                    </span>
                                </h4>
                                <p className="text-stone-500 text-xs mt-1 leading-relaxed">
                                    {cred.text}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Cita Final */}
            <motion.div 
                className="mt-10 relative bg-stone-50 p-6 rounded-2xl border border-stone-100"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
            >
                <Quote className="absolute -top-3 -left-2 text-teal-500 bg-white p-1 rounded-full shadow-sm" size={32} fill="currentColor" />
                <p className="text-stone-600 italic font-serif text-sm md:text-base pl-2">
                    "Mi compromiso es ofrecerte un espacio donde la ciencia y la empatía se encuentran. No se trata solo de curar síntomas, sino de construir una vida que valga la pena vivir."
                </p>
            </motion.div>

        </div>

      </div>
    </section>
  );
}