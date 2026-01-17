// components/ui/ShareButton.tsx
"use client";

import { useState } from "react";
import { Share2, Check, Copy } from "lucide-react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      // Copiar la URL actual al portapapeles
      await navigator.clipboard.writeText(window.location.href);
      
      // Activar estado de éxito
      setCopied(true);

      // Resetear después de 2 segundos
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar", err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleShare}
        disabled={copied}
        className={`
            relative overflow-hidden w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-full transition-all duration-300 font-bold text-sm tracking-wide shadow-sm group
            ${copied 
                ? "bg-teal-600 text-white cursor-default scale-105" 
                : "bg-stone-100 hover:bg-stone-900 text-stone-600 hover:text-white"
            }
        `}
      >
        <div className="relative z-10 flex items-center gap-2">
            {copied ? (
                <>
                    <Check size={18} className="animate-in zoom-in duration-300" />
                    <span>¡Enlace copiado!</span>
                </>
            ) : (
                <>
                    <Share2 size={18} className="group-hover:scale-110 transition-transform" />
                    <span>Compartir artículo</span>
                </>
            )}
        </div>
      </button>

      {/* TOOLTIP FLOTANTE PREMIUM (Opcional, añade un extra visual) */}
      <div className={`
        absolute left-1/2 -translate-x-1/2 -top-12 whitespace-nowrap px-3 py-1.5 bg-stone-900 text-white text-xs font-bold rounded-lg shadow-xl
        transition-all duration-300 pointer-events-none
        ${copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
      `}>
        Copiado al portapapeles
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-stone-900 rotate-45"></div>
      </div>
    </div>
  );
}