export default function ProcessAndLocation() {
  return (
    <section id="proceso" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Proceso */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Tu ruta de navegación</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Evaluación", text: "Primera sesión para mapear la situación y definir si soy el profesional adecuado para ti." },
              { step: "02", title: "Estrategia", text: "Diseñamos el plan de intervención personalizado basado en el modelo PIAP." },
              { step: "03", title: "Profundización", text: "Sesiones semanales o quincenales enfocadas en objetivos medibles." }
            ].map((item, i) => (
              <div key={i} className="relative p-6 rounded-2xl border border-white/5 bg-slate-900/50 text-center">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl font-bold text-white/5">{item.step}</span>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-4">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ubicación (Glass Panel Wide) */}
        <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Modalidad y Ubicación</h3>
            <p className="text-slate-400 mb-6">Atención flexible adaptada a tu estilo de vida.</p>
            <div className="space-y-2 text-slate-300">
              <p>📍 <strong>Presencial:</strong> Consultorio Privado en Manizales, Caldas.</p>
              <p>💻 <strong>Virtual:</strong> Videollamada segura (Google Meet / Zoom).</p>
            </div>
          </div>
          {/* Aquí podrías integrar un iFrame de Google Maps con opacidad ajustada */}
          <div className="w-full md:w-1/3 h-40 bg-slate-800 rounded-xl border border-white/10 flex items-center justify-center text-xs text-slate-600">
            [Mapa de Manizales]
          </div>
        </div>

      </div>
    </section>
  );
}