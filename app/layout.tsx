import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google"; 
import "./globals.css";
import { Providers } from "./providers";

// --- OPCIÓN B: IMPORTACIÓN EXPLÍCITA DEL ICONO ---
// Esto asegura que Next.js reconozca la ruta del archivo, incluso al compilar.
// Como layout.tsx y icon.webp están en la misma carpeta 'app', usamos ruta relativa:
import iconImage from "./icon.webp"; 

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

// --- SEO OPTIMIZADO PARA MANIZALES, COLOMBIA Y EXTERIOR ---
export const metadata: Metadata = {
  // Título: Incluye Nombre + Profesión + Ubicación Principal + Modalidad
  title: {
    default: "Jefferson Bastidas Mejía | Psicólogo en Manizales y Online",
    template: "%s | Jefferson Bastidas Mejía",
  },
  // Descripción: Ataca dolores (ansiedad), método (PIAP) y ubicaciones (Manizales, Pereira, NY)
  description: "Psicólogo en Manizales y Online",
  
  // Palabras clave: Cruciales para que Google entienda tu alcance geográfico y temático
  keywords: [
    "Psicólogo Manizales",
    "Psicólogo Pereira",
     "Psicólogo Medellin",
      "Psicólogo Sabaneta",
       "Psicólogo Envigado",
        "Psicólogo Itagui",
         "Psicólogo Nueva York",
          "Psicólogo New York",
           "Psicólogo ",
    "Psicoterapia Online",
    "Jefferson Bastidas Mejía",
    "Salud Mental Colombia",
    "Psicólogo Latino Nueva York", // Clave para mercado en USA
    "Tratamiento Ansiedad Manizales",
    "Psicología Clínica Basada en Evidencia",
    "PIAP Arquitectura de la Sanación",
    "Consulta psicológica virtual"
  ],

  // Autores y Creador
  authors: [{ name: "Jefferson Bastidas Mejía" }],
  creator: "Jefferson Bastidas Mejía",

  // Open Graph: Para que se vea bonito cuando compartes el link en WhatsApp/Facebook
  openGraph: {
    title: "Jefferson Bastidas | Psicólogo en Manizales y Online",
    description: "Recupera tu calma vitalizada. Terapia presencial en Manizales y Online para todo el mundo.",
    url: "https://psicologojeffersonbastidas.com", // (Reemplaza con tu dominio real cuando lo tengas)
    siteName: "Jefferson Bastidas Psicólogo",
    locale: "es_CO",
    type: "website",
  },

  // Robots: Permite que Google te indexe
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // --- CONFIGURACIÓN DE ICONOS EXPLÍCITA ---
  // Usamos .src porque al importar la imagen, Next devuelve un objeto.
  icons: {
    icon: iconImage.src, 
    apple: iconImage.src,
  },

};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${lato.variable} min-h-screen antialiased bg-[#fffcf8] text-stone-700 overflow-x-hidden`}
      >
        <Providers>
            
            {/* FONDO DE LUCES PASTEL */}
            <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden opacity-60">
                  <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full bg-[#ccfbf1] blur-[100px]"></div>
                  <div className="absolute bottom-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-[#fce7f3] blur-[100px]"></div>
            </div>
            
            {children}
            
        </Providers>
      </body>
    </html>
  );
}