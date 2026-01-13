"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import logoImg from "@/public/Logo.webp";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. DETECTOR DE SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. CORRECCIÓN CRÍTICA: BLOQUEO DE SCROLL EN BODY
  // Esto evita que la página de atrás se mueva cuando el menú está abierto en iPhone/Android.
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Problemas", href: "#problemas" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Enfoque", href: "#proceso" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled || isMobileMenuOpen // Si hay scroll O el menú está abierto
            ? "bg-[#f0fdfa]/90 backdrop-blur-md border-teal-100/50 shadow-sm py-3"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between h-full">
          
          {/* LOGO */}
          <Link href="/" className="relative z-50 flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src={logoImg} 
                alt="Logo Jefferson Bastidas" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            
            <div className="leading-tight hidden sm:block">
              <span className="block text-stone-700 font-bold tracking-wide text-sm md:text-base group-hover:text-teal-700 transition-colors font-serif">
                Jefferson Bastidas
              </span>
              <span className="block text-xs text-stone-500 font-medium tracking-wider font-sans">
                Psicólogo
              </span>
            </div>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold text-stone-600 hover:text-teal-700 transition-colors relative group tracking-wide font-sans"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </Link>
              ))}
            </div>
            
            <Link
              href="#contacto"
              className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#14b8a6] hover:bg-[#0f766e] text-white text-sm font-semibold transition-all duration-300 shadow-md shadow-teal-100 hover:shadow-lg hover:-translate-y-0.5"
            >
              Solicitar Información
              <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* MOBILE TOGGLE (BOTÓN HAMBURGUESA) */}
          <button
            aria-label="Toggle Menu"
            className="md:hidden relative z-50 p-2 -mr-2 text-stone-700 hover:text-teal-700 transition-colors active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* -------------------------------------------------------
        MOBILE MENU FULL SCREEN OPTIMIZADO
        -------------------------------------------------------
        1. fixed inset-0 z-40: Se coloca detrás del navbar (que es z-50).
        2. h-[100dvh]: Usa Dynamic Viewport Height para iOS (ignora la barra de navegación).
        3. pt-24: Padding top para que los enlaces no queden tapados por el logo.
      */}
      <div
        className={`fixed inset-0 z-40 bg-[#fffcf8]/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 md:hidden h-[100dvh] supports-[height:100dvh]:h-screen
        ${isMobileMenuOpen 
            ? "opacity-100 visible translate-y-0" 
            : "opacity-0 invisible -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 p-4 w-full">
            {navLinks.map((link, i) => (
            <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl font-serif text-stone-700 hover:text-teal-700 transition-all duration-500 transform
                ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                style={{ transitionDelay: `${i * 100}ms` }} // Efecto cascada sutil
            >
                {link.name}
            </Link>
            ))}
            
            <div 
                className={`mt-8 transition-all duration-700 delay-300 transform
                ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
                <Link
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex px-10 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold shadow-xl shadow-teal-500/20 active:scale-95 transition-transform"
                >
                Agendar Sesión
                </Link>
            </div>
        </div>
      </div>
    </>
  );
}