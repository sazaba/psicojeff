import Link from "next/link";
import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // CAMBIO: Fondo Stone Oscuro (#1c1917) en lugar de Slate
    <footer className="relative bg-[#1c1917] pt-20 pb-10 overflow-hidden">
      
      {/* Separador Superior de Luz */}
      {/* CORRECCIÓN: bg-gradient-to-r (v3) */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
      
      {/* Luz de fondo ambiental */}
      {/* CORRECCIÓN: w-[500px] o w-96 para medidas estándar v3 */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-teal-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Marca */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 font-bold text-sm">
                JB
              </div>
              <span className="text-xl font-bold text-stone-100">Jefferson Bastidas</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Psicoterapia Integrativa de Alta Precisión (PIAP). Un enfoque clínico, humano y eficiente para recuperar tu equilibrio emocional.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:bg-teal-600 hover:border-teal-500 transition-all group">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:bg-pink-600 hover:border-pink-500 transition-all group">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-serif">Navegación</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-stone-400 hover:text-teal-400 text-sm transition-colors">Inicio</Link></li>
              <li><Link href="#sobre-mi" className="text-stone-400 hover:text-teal-400 text-sm transition-colors">Perfil Profesional</Link></li>
              <li><Link href="#proceso" className="text-stone-400 hover:text-teal-400 text-sm transition-colors">Cómo trabajamos</Link></li>
              <li><Link href="#blog" className="text-stone-400 hover:text-teal-400 text-sm transition-colors">Artículos (Blog)</Link></li>
            </ul>
          </div>

          {/* Columna 3: Especialidades */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-serif">Enfoques</h4>
            <ul className="space-y-3">
              <li className="text-stone-400 text-sm">Ansiedad y Estrés</li>
              <li className="text-stone-400 text-sm">Depresión y Estado de Ánimo</li>
              <li className="text-stone-400 text-sm">Gestión Emocional (DBT)</li>
              <li className="text-stone-400 text-sm">Terapia de Aceptación (ACT)</li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-serif">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-teal-500 shrink-0 mt-1" size={18} />
                <span className="text-stone-400 text-sm">Manizales, Colombia<br/>Atención Presencial y Virtual</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-teal-500 shrink-0" size={18} />
                <span className="text-stone-400 text-sm">contacto@jeffersonbastidas.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>&copy; {currentYear} Jefferson Bastidas Mejía. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-stone-300 transition-colors">Política de Privacidad</Link>
            <Link href="#" className="hover:text-stone-300 transition-colors">Términos de Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}