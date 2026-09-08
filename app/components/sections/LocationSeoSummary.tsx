export default function LocationSeoSummary() {
  return (
    <section className="px-6 pt-20 pb-0 bg-[#fffcf8]" aria-labelledby="sedes-manizales">
      <div className="max-w-7xl mx-auto rounded-3xl border border-stone-200 bg-white/80 p-6 md:p-8 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-2">
          Atención presencial y online
        </p>
        <h2 id="sedes-manizales" className="text-2xl md:text-3xl font-serif text-stone-800 mb-5">
          Sedes de atención psicológica en Manizales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-stone-600">
          <address className="not-italic rounded-2xl bg-stone-50 p-4 border border-stone-100">
            <strong className="block text-stone-800 mb-1">Sede Centro</strong>
            Cra. 22 # 24-24, Manizales, Caldas, Colombia
          </address>
          <address className="not-italic rounded-2xl bg-stone-50 p-4 border border-stone-100">
            <strong className="block text-stone-800 mb-1">Centro Médico Santa Elena</strong>
            Avenida Paralela # 49-46, Manizales, Caldas, Colombia
          </address>
        </div>
        <p className="text-sm text-stone-500 mt-4">
          También está disponible la consulta psicológica online para personas que requieren mayor flexibilidad geográfica.
        </p>
      </div>
    </section>
  );
}
