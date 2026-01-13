"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
// Asegúrate de que esta ruta sea correcta. Si está en 'public', usa la ruta string directamente en src="/Logo.webp"
// Si está en assets, usa el import. Asumiré que moviste la imagen a assets para usar el import.
import logoImg from "@/public/Logo.webp"; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Problemas", href: "#problemas" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Enfoque", href: "#proceso" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-[#f0fdfa]/90 backdrop-blur-md border-teal-100/50 shadow-sm py-3" // SCROLL: Pastel Menta Suave
          : "bg-transparent border-transparent py-6" // TOP: Transparente
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
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
            {/* Texto oscuro siempre visible */}
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
                {/* Línea decorativa verde salvia */}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
              </Link>
            ))}
          </div>
          
          {/* Botón CTA */}
          <Link
            href="#contacto"
            className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#14b8a6] hover:bg-[#0f766e] text-white text-sm font-semibold transition-all duration-300 shadow-md shadow-teal-100 hover:shadow-lg hover:-translate-y-0.5"
          >
             Solicitar Información
            <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden relative z-50 p-2 text-stone-700 hover:text-teal-700 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU (FONDO CLARO CORREGIDO) */}
      <div
        className={`fixed inset-0 bg-[#fffcf8]/98 backdrop-blur-3xl z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-serif text-stone-700 hover:text-teal-700 transition-colors tracking-wide"
          >
            {link.name}
          </Link>
        ))}
        
        <Link
          href="#contacto"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-8 px-10 py-4 rounded-xl bg-[#14b8a6] text-white font-bold shadow-xl shadow-teal-100"
        >
          Agendar Sesión
        </Link>
      </div>
    </nav>
  );
}