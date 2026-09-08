"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import logoImg from "@/public/Logo.webp";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsScrolled(currentScrollY > 20);

          if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
            if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
              setIsVisible(false);
            } else {
              setIsVisible(true);
            }
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Inicio", href: "/#inicio" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Perfil", href: "/sobre-jefferson-bastidas" },
    { name: "Ubicación", href: "/#ubicacion" },
    { name: "Blog", href: "/blog" },
  ];

  const handleNavigation = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 transform-gpu will-change-transform ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled || isMobileMenuOpen
            ? "bg-[#f0fdfa]/95 backdrop-blur-md border-b border-teal-100/50 shadow-sm py-3"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
          <Link
            href="/"
            onClick={handleNavigation}
            className="relative z-50 flex items-center gap-3 group shrink-0"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={logoImg}
                alt="Jefferson Bastidas Psicólogo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 48px, 64px"
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

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <div className="flex items-center gap-5 lg:gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleNavigation}
                  className="text-sm font-bold text-stone-600 hover:text-teal-700 transition-colors relative group tracking-wide font-sans"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
                </Link>
              ))}
            </div>

            <a
              href="https://wa.link/2x3i8s"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#14b8a6] hover:bg-[#0f766e] text-white text-sm font-semibold transition-all duration-300 shadow-md shadow-teal-100 hover:shadow-lg hover:-translate-y-0.5"
            >
              Solicitar Información
              <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <button
            aria-label="Abrir o cerrar menú"
            className="md:hidden relative z-50 p-1 text-stone-700 hover:text-teal-700 transition-colors active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#fffcf8]/98 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 md:hidden h-[100dvh] w-full transform-gpu will-change-transform ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 p-4 w-full">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={handleNavigation}
              className={`text-3xl font-serif text-stone-700 hover:text-teal-700 transition-all duration-500 transform ${
                isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {link.name}
            </Link>
          ))}

          <div
            className={`mt-8 transition-all duration-700 delay-300 transform ${
              isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <a
              href="https://wa.link/2x3i8s"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavigation}
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
