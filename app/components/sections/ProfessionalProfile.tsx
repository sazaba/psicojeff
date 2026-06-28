"use client";

import React, { useState, useEffect, ReactNode } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, BrainCircuit, HeartHandshake, Maximize2, X } from "lucide-react";

import profesionalpsicojeff from "@/app/assets/profesionalpsicojeff.webp"; 

interface Credential {
  icon: ReactNode;
  title: string;
  institution: string;
  text: string;
  color: string;
  pdfUrl: string;
}

const credentials: Credential[] = [
  {
    icon: <BrainCircuit size={32} />,
    title: "Evidencia Científica",
    institution: "Universidad Javeriana",
    text: "Diplomado en Psicología Clínica Basada en la Evidencia. Métodos con eficacia probada.",
    color: "bg-teal-50 text-teal-800",
    pdfUrl: "/diplomas/diplomado-javeriana.pdf"
  },
  {
    icon: <HeartHandshake size={32} />,
    title: "Visión Holística",
    institution: "Universidad del Rosario",
    text: "Diplomado en Terapias Complementarias. Abordo tu sanación desde la totalidad del ser.",
    color: "bg-stone-50 text-stone-700",
    pdfUrl: "/diplomas/diplomado-rosario.pdf"
  },
  {
    icon: <BookOpen size={32} />,
    title: "Terapias Contextuales",
    institution: "Universidad de la Sabana",
    text: "Diplomado en abordaje de problemáticas clínicas desde terapias de tercera generación.",
    color: "bg-blue-50 text-blue-800",
    pdfUrl: "/diplomas/diplomado-sabana.pdf"
  }
];

export default function ProfessionalProfile() {
  const [selectedPdf, setSelectedPdf] = useState<Credential | null>(null);

  useEffect(() => {
    if (selectedPdf) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedPdf]);

  // Bloqueo agresivo de teclado a nivel global cuando el modal está abierto
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPdf) {
        if ((e.ctrlKey || e.metaKey) && ['p', 's', 'c'].includes(e.key.toLowerCase())) {
          e.preventDefault();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, [selectedPdf]);

  // Prevenir arrastrar y soltar a nivel de documento
  useEffect(() => {
    const handleDrag = (e: DragEvent) => e.preventDefault();
    document.addEventListener('dragstart', handleDrag);
    return () => document.removeEventListener('dragstart', handleDrag);
  }, []);

  return (
    <section 
        id="sobre-mi" 
        className="py-24 px-6 bg-white relative overflow-hidden select-none"
        style={{ WebkitTouchCallout: 'none', WebkitUserSelect: 'none' }}
    >
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        <div className="relative w-full max-w-md mx-auto lg:max-w-full">
            <motion.div 
                className="relative rounded-2xl overflow-hidden aspect-[4/5] group transform-gpu shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.8 }}
            >
                <Image 
                    src={profesionalpsicojeff} 
                    alt="Perfil Profesional"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={100}
                    priority={false} 
                    placeholder="blur"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent opacity-60 pointer-events-none transition-opacity duration-500 group-hover:opacity-40" />
            </motion.div>
        </div>

        <div className="mt-12 lg:mt-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="inline-block py-1 px-3 rounded-full bg-teal-50 border border-teal-100 text-teal-700 font-bold tracking-widest text-[10px] uppercase mb-4 pointer-events-none">
                    Perfil Profesional
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-2 pointer-events-none">
                    Jefferson Bastidas
                </h2>
                <h3 className="text-lg md:text-xl text-stone-500 font-sans font-light mb-8 flex items-center gap-2 pointer-events-none">
                    <span className="w-8 h-[1px] bg-teal-500 inline-block"></span>
                    Psicólogo & Especialista SST
                </h3>
            </motion.div>

            <motion.div 
                className="prose prose-stone text-stone-600 mb-10 leading-relaxed text-sm md:text-base pointer-events-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <p className="mb-4">
                    Egresado de la <strong>Universidad de Manizales</strong>, he dedicado dos décadas a perfeccionar un modelo que une la rigurosidad científica con la calidez humana.
                </p>
                <p>
                    Como Especialista en Salud Ocupacional (<strong>Universidad Libre</strong>), entiendo que tu bienestar no ocurre en el vacío, sino en interacción constante con tu entorno laboral y social.
                </p>
            </motion.div>

            <div className="flex flex-col gap-4 md:gap-6">
                {credentials.map((cred, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setSelectedPdf(cred)}
                        className={`w-full text-left p-6 md:p-8 rounded-2xl ${cred.color} bg-white relative overflow-hidden group hover:shadow-lg transition-all duration-300 transform-gpu hover:-translate-y-1 cursor-pointer border border-transparent hover:border-current/10`}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (index * 0.1) }}
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-current opacity-20 group-hover:w-3 transition-all duration-300 pointer-events-none" />
                        
                        <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-center md:items-start text-center md:text-left pl-0 md:pl-3 relative z-10 pointer-events-none">
                            
                            <div className="mt-1 opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 flex-shrink-0">
                                {cred.icon}
                            </div>
                            
                            <div className="w-full relative pr-6">
                                <div className="flex flex-col items-center md:items-start gap-1.5">
                                    <h4 className="font-bold text-stone-800 text-base md:text-lg">
                                        {cred.title}
                                    </h4>
                                    <span className="inline-block text-[10px] md:text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-white font-semibold text-stone-500 w-fit shadow-sm">
                                        {cred.institution}
                                    </span>
                                </div>
                                <p className="text-stone-500 text-sm md:text-base mt-3 md:mt-2 leading-relaxed">
                                    {cred.text}
                                </p>
                                
                                <Maximize2 
                                    className="absolute top-0 right-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 text-current" 
                                    size={18} 
                                />
                            </div>
                        </div>
                    </motion.button>
                ))}
            </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedPdf && (
            <motion.div 
                className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ WebkitTouchCallout: 'none', WebkitUserSelect: 'none' }}
                onContextMenu={(e) => e.preventDefault()}
            >
                <div 
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => setSelectedPdf(null)}
                />

                <motion.div 
                    className="relative w-full max-w-4xl h-[85vh] bg-stone-50 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col cursor-default"
                    initial={{ y: 50, scale: 0.95, opacity: 0 }}
                    animate={{ y: 0, scale: 1, opacity: 1 }}
                    exit={{ y: 20, scale: 0.95, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-sm border-b border-stone-200 z-20 pointer-events-auto">
                        <div className="flex flex-col">
                            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                                {selectedPdf.institution}
                            </span>
                            <h3 className="font-serif text-lg text-stone-800">
                                {selectedPdf.title}
                            </h3>
                        </div>
                        
                        <div className="flex items-center gap-2">
                            <button 
                                onClick={() => setSelectedPdf(null)}
                                className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 w-full bg-stone-200 relative overflow-hidden">
                        {/* Se eliminó la capa z-50 para permitir la interacción del usuario y habilitar el scroll nativo dentro del iframe */}
                        <iframe 
                            src={`${selectedPdf.pdfUrl}#toolbar=0&navpanes=0`} 
                            className="absolute inset-0 w-full h-full border-none"
                            title={`Diploma de ${selectedPdf.institution}`}
                            onContextMenu={(e) => e.preventDefault()}
                            tabIndex={-1}
                        />
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}