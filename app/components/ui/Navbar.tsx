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

  // 2. BLOQUEO DE SCROLL EN BODY
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  // --- ENLACES ---
  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Acerca de Mí", href: "#sobre-mi" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Blog", href: "#blog" }, 
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); 
    
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const headerOffset = 80; 
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled || isMobileMenuOpen 
            ? "bg-[#f0fdfa]/90 backdrop-blur-md border-teal-100/50 shadow-sm py-3"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        {/* CORRECCIÓN: Se elimina 'max-w-[100vw]' que causa el scroll horizontal. 
            Se usa 'w-full max-w-7xl' para contención segura sin desbordamiento. */}
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
          
          {/* LOGO */}
          <Link href="#inicio" onClick={(e) => handleScrollToSection(e, "#inicio")} className="relative z-50 flex items-center gap-3 group shrink-0">
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
            <div className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="text-sm font-bold text-stone-600 hover:text-teal-700 transition-colors relative group tracking-wide font-sans cursor-pointer"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </a>
              ))}
            </div>
            
            <a
              href="#contacto"
              onClick={(e) => handleScrollToSection(e, "#contacto")}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#14b8a6] hover:bg-[#0f766e] text-white text-sm font-semibold transition-all duration-300 shadow-md shadow-teal-100 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              Solicitar Información
              <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            aria-label="Toggle Menu"
            className="md:hidden relative z-50 p-1 text-stone-700 hover:text-teal-700 transition-colors active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-[#fffcf8]/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 md:hidden h-[100dvh] supports-[height:100dvh]:h-screen w-full
        ${isMobileMenuOpen 
            ? "opacity-100 visible translate-y-0" 
            : "opacity-0 invisible -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 p-4 w-full">
            {navLinks.map((link, i) => (
            <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className={`text-3xl font-serif text-stone-700 hover:text-teal-700 transition-all duration-500 transform
                ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
            >
                {link.name}
            </a>
            ))}
            
            <div 
                className={`mt-8 transition-all duration-700 delay-300 transform
                ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
                <a
                href="#contacto"
                onClick={(e) => handleScrollToSection(e, "#contacto")}
                className="inline-flex px-10 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold shadow-xl shadow-teal-500/20 active:scale-95 transition-transform"
                >
                Agendar Sesión
                </a>
            </div>
        </div>
      </div>
    </>
  );
}