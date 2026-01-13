"use client";
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "¿Cuánto dura cada sesión?", a: "Las sesiones tienen una duración aproximada de 50 a 60 minutos." },
  { q: "¿Aceptas seguros médicos?", a: "Trabajo de manera particular para garantizar la privacidad y la calidad del modelo boutique, pero puedo emitir facturas para reembolso si tu póliza lo permite." },
  { q: "¿Cuál es la frecuencia recomendada?", a: "Inicialmente suelo recomendar frecuencia semanal para estabilizar, y luego espaciamos según avances." }
];

export default function FinalActions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 pb-32" id="faq">
      <div className="max-w-3xl mx-auto">
        
        {/* FAQ Accordion */}
        <h2 className="text-3xl font-serif text-stone-800 mb-12 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-4 mb-24">
          {faqs.map((faq, i) => (
            // CAMBIO: Estilo claro (Borde suave, fondo blanco translúcido)
            <div key={i} className="rounded-2xl border border-stone-200 bg-white/60 backdrop-blur-sm overflow-hidden transition-all hover:border-teal-200 hover:shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-5 text-left text-stone-700 font-medium hover:bg-white/40 transition-colors font-sans"
              >
                <span className="text-lg">{faq.q}</span>
                {/* Iconos en Teal */}
                {openIndex === i ? <Minus size={20} className="text-teal-500 shrink-0"/> : <Plus size={20} className="text-teal-500 shrink-0"/>}
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-5 pt-0 text-stone-600 leading-relaxed font-sans">
                    {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA FINAL */}
        {/* CAMBIO: Fondo degradado claro (Teal muy suave a Blanco) y sintaxis v3 (bg-gradient) */}
        <div 
            id="contacto" 
            className="text-center p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-b from-teal-50 to-white border border-teal-100 shadow-2xl shadow-teal-900/5 relative overflow-hidden"
        >
          {/* Decoración superior */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200"></div>

          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-6">¿Listo para iniciar tu proceso?</h2>
          <p className="text-stone-600 mb-10 max-w-lg mx-auto font-sans text-lg">
            Agenda tu espacio. Recuerda que a partir de 2026 la inversión por sesión es de $100.000 COP.
          </p>
          
          <button className="w-full md:w-auto px-10 py-5 rounded-full bg-[#14b8a6] hover:bg-[#0f766e] text-white font-bold text-lg transition-all shadow-lg shadow-teal-100 hover:shadow-teal-200 transform hover:-translate-y-1">
            Agendar mi Cita Ahora
          </button>
          <p className="mt-6 text-sm text-stone-500 font-sans">Respuesta en menos de 24 horas hábiles.</p>
        </div>

      </div>
    </section>
  );
}