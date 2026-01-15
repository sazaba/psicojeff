"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react"; // <--- 1. Importamos hooks de sesión
import { MapPin, Lock, LayoutDashboard, LogOut } from "lucide-react"; // <--- 2. Importamos iconos nuevos

export default function Footer() {
  const { data: session } = useSession(); // <--- 3. Obtenemos la sesión actual
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Acerca de Mí", href: "#sobre-mi" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <footer className="w-full bg-[#0c0a09] text-[#e7e5e4] pt-24 pb-12 overflow-hidden border-t border-stone-800 relative">
      
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- GRID PRINCIPAL --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* COLUMNA 1: IDENTIDAD */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white mb-2">
                Jefferson <br /> Bastidas
              </h2>
              <p className="text-stone-500 text-lg md:text-xl font-light mt-4 max-w-sm leading-relaxed">
                Psicoterapia de alta precisión para recuperar tu equilibrio vital
              </p>
            </div>
          </div>

          {/* COLUMNA 2: NAVEGACIÓN */}
          <div className="md:col-span-3 md:pl-8">
            <h3 className="text-xs font-bold text-teal-500 uppercase tracking-widest mb-8">
              Explorar
            </h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="group flex items-center gap-2 text-stone-400 hover:text-white transition-colors duration-300 text-lg"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-teal-500 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: CONTACTO & UBICACIÓN */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold text-teal-500 uppercase tracking-widest mb-8">
              Contacto
            </h3>
            <div className="space-y-6">
              
              {/* Dirección */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-stone-900 rounded-lg border border-stone-800 text-teal-500">
                   <MapPin size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Consultorio Privado</p>
                  <p className="text-stone-500 text-sm mt-1">
                    Manizales, Caldas<br />Colombia
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-stone-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600 font-medium">
          <p>
            &copy; {currentYear} Jefferson Bastidas Mejía. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-stone-400 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="hover:text-stone-400 transition-colors">
              Términos de Servicio
            </Link>
            
            {/* --- ZONA DE ACCESO ADMINISTRATIVO --- */}
            {session ? (
                // OPCIÓN A: SI HAY SESIÓN (Logueado)
                <div className="flex items-center gap-2 border-l border-stone-800 pl-4 ml-2">
                    {/* Botón ir al Dashboard */}
                    <Link 
                        href="/admin" 
                        className="text-stone-500 hover:text-teal-500 transition-colors p-2"
                        title="Ir al Panel Administrativo"
                    >
                        <LayoutDashboard size={14} />
                    </Link>
                    
                    {/* Botón Cerrar Sesión */}
                    <button 
                        onClick={() => signOut({ callbackUrl: "/" })}
                        className="text-stone-500 hover:text-red-500 transition-colors p-2"
                        title="Cerrar Sesión"
                    >
                        <LogOut size={14} />
                    </button>
                </div>
            ) : (
                // OPCIÓN B: NO HAY SESIÓN (Candado original)
                <Link 
                    href="/login" 
                    className="text-stone-800 hover:text-teal-600 transition-colors duration-300 p-2"
                    aria-label="Admin Login"
                    title="Acceso Privado"
                >
                    <Lock size={14} />
                </Link>
            )}

          </div>
        </div>
      </div>
      
      {/* Elemento Decorativo Gigante */}
      <div className="absolute -bottom-20 right-0 translate-x-1/3 text-[12rem] font-serif font-black text-stone-800/20 pointer-events-none select-none leading-none opacity-10 whitespace-nowrap">
        JB
      </div>
    </footer>
  );
}