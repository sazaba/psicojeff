"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Importamos Framer Motion
import logoImg from "@/public/Logo.webp"; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. CONTROL DEL SCROLL DE LA BARRA
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. BLOQUEO DE SCROLL EN EL BODY (CRÍTICO PARA MÓVIL)
  // Esto evita que la página de fondo se mueva cuando el menú está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Problemas", href: "#problemas" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Enfoque", href: "#proceso" },
  ];

  // Variantes para la animación del menú móvil
  const menuVars = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const linkVars = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({ 
        opacity: 1, 
        y: 0, 
        transition: { delay: 0.1 + (i * 0.1) } // Efecto cascada
    })
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b ${
        isScrolled
          ? "bg-[#fffcf8]/90 backdrop-blur-md border-teal-100/50 shadow-sm py-3" 
          : "bg-transparent border-transparent py-5 md:py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="relative z-[101] flex items-center gap-3 group">
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

        {/* MENU DESKTOP (Sin cambios) */}
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

        {/* MOBILE TOGGLE (Hamburguesa) */}
        <button
          className="md:hidden relative z-[101] p-2 text-stone-700 hover:text-teal-700 transition-colors active:scale-95"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X size={28} />
                </motion.div>
            ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu size={28} />
                </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* MOBILE MENU FULL SCREEN (OPTIMIZADO) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-[#fffcf8] z-[100] flex flex-col items-center justify-center space-y-8 md:hidden h-[100dvh]" // h-[100dvh] evita problemas en safari móvil
          >
             {/* Fondo decorativo sutil dentro del menú */}
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-teal-100/50 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-orange-50/50 rounded-full blur-[80px]"></div>
             </div>

            {navLinks.map((link, i) => (
              <motion.div key={link.name} custom={i} variants={linkVars}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-serif text-stone-800 hover:text-teal-600 transition-colors tracking-tight font-medium"
                  >
                    {link.name}
                  </Link>
              </motion.div>
            ))}
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-8"
            >
                <Link
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-10 py-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg shadow-xl shadow-teal-600/20 transition-transform active:scale-95 flex items-center gap-2"
                >
                Agendar Sesión
                <ArrowRight size={20} />
                </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}