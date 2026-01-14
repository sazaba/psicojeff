import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google"; 
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const lato = Lato({ 
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jefferson Bastidas Mejía | Psicólogo Clínico",
  description: "Psicoterapia Integrativa de Alta Precisión (PIAP).",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        // Nota: overflow-x-hidden ya está en globals.css, pero dejarlo aquí refuerza la seguridad.
        className={`${playfair.variable} ${lato.variable} min-h-screen antialiased bg-[#fffcf8] text-stone-700 overflow-x-hidden`}
      >
        {/* FONDO DE LUCES PASTEL */}
        {/* Tu configuración fixed inset-0 es correcta y segura. */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden opacity-60">
             <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full bg-[#ccfbf1] blur-[100px]"></div>
             <div className="absolute bottom-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-[#fce7f3] blur-[100px]"></div>
        </div>
        
        {children}
      </body>
    </html>
  );
}