"use client";

import React from "react";
import { MapPin, Clock, ArrowUpRight, Video } from "lucide-react";

export default function ProcessAndLocation() {
  return (
    <section id="proceso" className="py-24 px-6 bg-[#fffcf8] relative overflow-hidden">
      
      {/* CORRECCIÓN 1: 'pointer-events-none' asegura que el fondo no bloquee clics */}
      <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-t from-teal-50/50 to-transparent -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- SECCIÓN 1: PROCESO --- */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-bold tracking-widest text-xs uppercase mb-3 block">
                Metodología
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-800 font-medium">
                Tu ruta de navegación
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Evaluación", 
                text: "Primera sesión para mapear la situación y definir si soy el profesional adecuado para ti." 
              },
              { 
                step: "02", 
                title: "Estrategia", 
                text: "Diseñamos el plan de intervención personalizado basado en el modelo PIAP." 
              },
              { 
                step: "03", 
                title: "Profundización", 
                text: "Sesiones semanales o quincenales enfocadas en objetivos medibles." 
              }
            ].map((item, i) => (
              <div key={i} className="relative p-8 rounded-3xl border border-stone-100 bg-white shadow-sm hover:shadow-md transition-shadow group">
                <span className="absolute -top-6 left-8 text-6xl font-serif font-bold text-teal-50 opacity-80 group-hover:text-teal-100 transition-colors pointer-events-none">
                    {item.step}
                </span>
                <div className="relative z-10 pt-4">
                    <h3 className="text-xl font-bold text-teal-800 mb-3">{item.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECCIÓN 2: UBICACIÓN Y AGENDAMIENTO --- */}
        <div id="ubicacion">
             <div className="text-center mb-12">
                <h3 className="text-3xl font-serif text-stone-800 mb-4">Agenda tu sesión</h3>
                <p className="text-stone-500 max-w-xl mx-auto">
                    Elige la modalidad o sede que mejor se adapte a tu rutina. Al hacer clic, te comunicarás directamente conmigo por WhatsApp.
                </p>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* 1. SEDE CENTRO */}
                <div className="p-8 rounded-3xl bg-white border border-stone-100 shadow-sm flex flex-col justify-between hover:border-teal-200 transition-colors relative z-10">
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 mb-6">
                            <MapPin size={24} />
                        </div>
                        <h4 className="text-xl font-bold text-stone-800 mb-2">Sede Centro</h4>
                        <p className="text-stone-500 text-sm mb-4">Cra 22 # 24-24, Manizales</p>
                        
                        <div className="flex items-center gap-2 text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1.5 rounded-full w-fit mb-6">
                            <Clock size={14} />
                            MAÑANAS (Hasta 2:00 PM)
                        </div>
                    </div>
                    
                    {/* CORRECCIÓN: z-20 y relative para forzar prioridad de clic */}
                    <a 
                        href="https://wa.link/2x3i8s" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative z-20 w-full py-3 rounded-xl border border-stone-200 hover:border-teal-500 hover:text-teal-700 text-stone-600 font-semibold text-sm transition-all flex items-center justify-center gap-2 group cursor-pointer"
                    >
                        Agendar en Centro
                        <ArrowUpRight size={16} className="text-stone-400 group-hover:text-teal-600" />
                    </a>
                </div>

                {/* 2. SEDE AV. SANTANDER (Destacada) */}
                <div className="p-8 rounded-3xl bg-stone-900 text-white shadow-xl shadow-stone-900/10 flex flex-col justify-between relative overflow-hidden group z-10">
                    
                    {/* CORRECCIÓN: pointer-events-none para que la luz no tape el botón */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500 rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none" />
                    
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-teal-200 mb-6 backdrop-blur-sm">
                            <MapPin size={24} />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Sede Av. Santander</h4>
                        <p className="text-stone-400 text-sm mb-4">Edificio Cristóbal Colón</p>
                        
                        <div className="flex items-center gap-2 text-xs font-bold text-indigo-200 bg-indigo-900/50 border border-indigo-500/30 px-3 py-1.5 rounded-full w-fit mb-6">
                            <Clock size={14} />
                            TARDES (Hasta 8:00 PM)
                        </div>
                    </div>

                    {/* CORRECCIÓN: z-20 para asegurar clicabilidad */}
                    <a 
                        href="https://wa.link/2x3i8s" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative z-20 w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                        Agendar en Av. Santander
                        <ArrowUpRight size={16} />
                    </a>
                </div>

                {/* 3. VIRTUAL */}
                <div className="p-8 rounded-3xl bg-white border border-stone-100 shadow-sm flex flex-col justify-between hover:border-teal-200 transition-colors relative z-10">
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                            <Video size={24} />
                        </div>
                        <h4 className="text-xl font-bold text-stone-800 mb-2">Consulta Online</h4>
                        <p className="text-stone-500 text-sm mb-4">Desde cualquier lugar del mundo</p>
                        
                        <div className="flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full w-fit mb-6">
                            <Clock size={14} />
                            HORARIO FLEXIBLE
                        </div>
                    </div>

                    <a 
                        href="https://wa.link/2x3i8s" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative z-20 w-full py-3 rounded-xl border border-stone-200 hover:border-blue-400 hover:text-blue-600 text-stone-600 font-semibold text-sm transition-all flex items-center justify-center gap-2 group cursor-pointer"
                    >
                        Agendar Online
                        <ArrowUpRight size={16} className="text-stone-400 group-hover:text-blue-600" />
                    </a>
                </div>

             </div>
        </div>

      </div>
    </section>
  );
}

