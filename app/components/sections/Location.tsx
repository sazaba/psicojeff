"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";

// --- DATOS DE LAS SEDES ---
const locations = [
  {
    id: "centro",
    name: "Sede Centro",
    address: "Cra. 22 # 24-24",
    landmark: "Corazón de la ciudad",
    schedule: "Mañanas: hasta las 2:00 p.m.",
    description: "Ideal si te mueves por el centro histórico o administrativo. Un espacio diseñado para hacer una pausa productiva en tu día.",
    mapSrc: "https://maps.google.com/maps?q=Cra.+22+%23+24-24,+Manizales,+Caldas&t=&z=17&ie=UTF8&iwloc=&output=embed",
    color: "from-teal-600 to-teal-800"
  },
  {
    id: "santander",
    name: "Sede Av. Santander",
    address: "Av. Santander #55a 35",
    landmark: "Edificio Cristóbal Colón",
    schedule: "Tarde Noche: hasta las 8:00 p.m.",
    description: "Perfecta para cerrar tu jornada laboral o de estudio. Ubicación estratégica con fácil acceso y ambiente tranquilo.",
    mapSrc: "https://maps.google.com/maps?q=Av.+Santander+%2355a+35,+Manizales,+Caldas&t=&z=17&ie=UTF8&iwloc=&output=embed",
    color: "from-indigo-600 to-indigo-800"
  }
];

export default function Location() {
  const [activeTab, setActiveTab] = useState("centro");
  const activeLocation = locations.find((l) => l.id === activeTab) || locations[0];

  return (
    // CAMBIO: Se eliminó bg-stone-50 para que sea transparente y use el global
    <section className="py-24 px-6 relative overflow-hidden">
      
      {/* CAMBIO: Se eliminó el div del "Fondo Decorativo" para que no tape el fondo global */}

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 min-h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-stone-200">
        
        {/* --- COLUMNA IZQUIERDA: INFORMACIÓN Y SELECTOR --- */}
        <div className="bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
            
            <div className="mb-10">
                <span className="text-teal-600 font-bold tracking-widest text-xs uppercase mb-4 block">
                    Logística Simplificada
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-stone-800 leading-tight mb-4">
                    Terapia a tu ritmo: <br/> Elige dónde y cuándo
                </h2>
                <p className="text-stone-500 font-light">
                    Mi objetivo es que la logística sea una preocupación menos. Elige la sede que mejor se adapte a tu rutina.
                </p>
            </div>

            {/* Selector de Pestañas (Tabs) */}
            <div className="flex space-x-1 bg-stone-100 p-1 rounded-xl mb-8 w-fit">
                {locations.map((loc) => (
                    <button
                        key={loc.id}
                        onClick={() => setActiveTab(loc.id)}
                        className={`relative px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 z-10 ${
                            activeTab === loc.id 
                            ? "text-stone-800 shadow-sm" 
                            : "text-stone-400 hover:text-stone-600"
                        }`}
                    >
                        {activeTab === loc.id && (
                            <motion.div
                                layoutId="activeTabBg"
                                className="absolute inset-0 bg-white rounded-lg shadow-sm"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                style={{ zIndex: -1 }}
                            />
                        )}
                        {loc.name}
                    </button>
                ))}
            </div>

            {/* Detalles de la Sede Activa */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeLocation.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                >
                    <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${activeLocation.color} text-white shadow-lg`}>
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-stone-800">{activeLocation.address}</h3>
                            <p className="text-teal-600 font-medium text-sm">{activeLocation.landmark}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-stone-100 text-stone-500">
                            <Clock size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-stone-800">Horario Disponible</h3>
                            <p className="text-stone-500 text-sm">{activeLocation.schedule}</p>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-stone-100">
                        <p className="text-stone-600 italic">
                            "{activeLocation.description}"
                        </p>
                    </div>

                    {/* Botón CTA Contextual */}
                    <button className="group flex items-center gap-2 text-stone-800 font-bold hover:text-teal-700 transition-colors mt-4">
                        <span>Agendar en {activeLocation.name}</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </AnimatePresence>

        </div>

        {/* --- COLUMNA DERECHA: MAPA ORIGINAL --- */}
        <div className="relative h-[400px] lg:h-auto bg-stone-100 overflow-hidden">
            
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeLocation.id}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* IFRAME SIN FILTROS: Color Original de Google Maps */}
                    <iframe
                        src={activeLocation.mapSrc}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="opacity-100 transition-opacity duration-700"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Overlay sutil solo en los bordes para integración */}
            <div className="absolute inset-0 pointer-events-none border-[12px] border-white/50 lg:border-white/0" />
            
            {/* Badge Flotante sobre el mapa */}
            <motion.div 
                key={activeLocation.id + "-badge"}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-xl border border-stone-200 flex items-center gap-3 z-10"
            >
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-bold text-stone-700 uppercase tracking-wider">Ubicación Exacta</span>
            </motion.div>

        </div>

      </div>
    </section>
  );
}