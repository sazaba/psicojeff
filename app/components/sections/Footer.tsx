"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Acerca de Mí", href: "#sobre-mi" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <footer className="bg-[#0c0a09] text-[#e7e5e4] pt-16 pb-8 overflow-hidden border-t border-stone-800 relative">
      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-between h-full">
        
        {/* --- TOP: NAVEGACIÓN MINIMALISTA --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 md:mb-24">
          
          {/* Ubicación Sutil */}
          <div className="text-xs font-medium tracking-widest uppercase text-stone-500">
            Manizales, Colombia
          </div>

          {/* Enlaces de Navegación */}
          <nav className="flex flex-wrap gap-8 md:gap-12">
            {links.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="group flex items-center gap-1 text-sm font-bold uppercase tracking-widest text-stone-400 hover:text-white transition-colors duration-300"
              >
                {link.name}
                <ArrowUpRight 
                  size={14} 
                  className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-teal-500"
                />
              </Link>
            ))}
          </nav>
        </div>

        {/* --- MIDDLE: STATEMENT TYPOGRAPHY (WOW FACTOR) --- */}
        <div className="relative border-b border-stone-800/50 pb-4 mb-6">
          <h2 className="text-[11vw] leading-[0.85] font-serif font-black text-stone-200 tracking-tighter mix-blend-overlay opacity-90 select-none">
            JEFFERSON <br />
            <span className="text-stone-600">BASTIDAS.</span>
          </h2>
        </div>

        {/* --- BOTTOM: LEGAL --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-stone-600 font-medium uppercase tracking-widest">
          <p>
            &copy; {currentYear} Protocolo Integrativo de Alta Precisión.
          </p>
          <p>
            Psicología Clínica &middot; Salud Mental
          </p>
        </div>
      </div>
    </footer>
  );
}