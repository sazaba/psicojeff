"use client";

import { useState } from "react";
import { Star, Save, Loader2, Check } from "lucide-react";
import { useRouter } from "next/navigation";

interface ReviewWidgetProps {
  initialCount: number;
}

export default function ReviewWidget({ initialCount }: ReviewWidgetProps) {
  // CAMBIO 1: Inicializamos como string para poder manejar el campo vacío
  const [count, setCount] = useState(initialCount.toString());
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const router = useRouter();

  // Helper para obtener el valor numérico real (si está vacío es 0 o el valor que prefieras)
  const currentNumber = count === "" ? 0 : Number(count);

  const handleSave = async () => {
    // Evitar guardar si está vacío
    if (count === "") return;

    setLoading(true);
    setSaved(false);

    try {
      const res = await fetch("/api/review-count", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        // CAMBIO 2: Convertimos a número antes de enviar a la API
        body: JSON.stringify({ newCount: Number(count) }),
      });

      if (res.ok) {
        setSaved(true);
        router.refresh();
        setTimeout(() => setSaved(false), 3000);
      }
    } catch (error) {
      console.error("Error al guardar", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col justify-between h-full relative overflow-hidden">
      
      {/* Header del Widget */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="w-14 h-14 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500 shadow-inner">
          <Star size={28} fill="currentColor" className="text-yellow-400" />
        </div>
        
        {saved && (
          <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full flex items-center gap-1 animate-in fade-in slide-in-from-top-2">
            <Check size={12} /> Guardado
          </span>
        )}
      </div>

      <div className="relative z-10">
        <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-2">Total Reseñas (Google)</p>
        
        <div className="flex items-center gap-3">
          <input 
            type="number" 
            value={count}
            // CAMBIO 3: Guardamos el valor directo (string) sin forzar Number()
            onChange={(e) => setCount(e.target.value)}
            className="text-3xl font-serif font-bold text-stone-800 bg-stone-50 border border-transparent hover:border-stone-200 focus:border-teal-500 focus:ring-0 rounded-lg w-32 px-2 py-1 transition-all outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          
          <button
            onClick={handleSave}
            // CAMBIO 4: Lógica ajustada para comparar string vs numero y evitar guardar vacíos
            disabled={loading || count === "" || currentNumber === initialCount}
            className={`p-3 rounded-xl transition-all ${
              count !== "" && currentNumber !== initialCount 
                ? "bg-stone-900 text-white hover:bg-teal-600 shadow-lg translate-y-0" 
                : "bg-stone-100 text-stone-300 cursor-not-allowed"
            }`}
            title="Guardar cambios"
          >
            {loading ? <Loader2 size={20} className="animate-spin" /> : <Save size={20} />}
          </button>
        </div>
        
        <p className="text-xs text-stone-400 mt-2">
          Edita el número y pulsa el botón para actualizar en la web.
        </p>
      </div>

      <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-yellow-100/50 rounded-full blur-2xl pointer-events-none"></div>
    </div>
  );
}