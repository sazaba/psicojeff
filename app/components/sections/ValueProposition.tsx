import { CheckCircle2 } from 'lucide-react';

export default function ValueProposition() {
  return (
    <section className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Diferenciación */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">¿Por qué es diferente este espacio?</h2>
            <div className="space-y-6">
              {[
                { title: "Modelo Boutique Artesanal", text: "Solo atiendo un máximo de 4 pacientes al día. Tu proceso recibe mi atención plena, sin el desgaste del volumen masivo." },
                { title: "Protocolo PIAP", text: "Utilizo una metodología propia de Alta Precisión que integra lo mejor de la psicología clínica y herramientas complementarias." },
                { title: "Objetividad Radical", text: "No busco adularte. Busco ser un espejo limpio y constructivo para que avances realmente." }
              ].map((item, i) => (
                <div key={i} className="pl-6 border-l-2 border-cyan-500/30">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-slate-400 text-sm mt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Beneficios (Glass Card) */}
          <div className="p-8 rounded-3xl border border-white/10 bg-linear-to-b from-white/10 to-transparent backdrop-blur-xl shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Lo que logramos juntos</h2>
            <ul className="space-y-4">
              {[
                "Mayor claridad mental y reducción del ruido interno.",
                "Herramientas prácticas para gestionar crisis de ansiedad.",
                "Restauración de ciclos de sueño y descanso.",
                "Comprensión profunda de tus patrones de conducta.",
                "Autonomía emocional real (el objetivo es que no me necesites)."
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyan-400 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-200">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}