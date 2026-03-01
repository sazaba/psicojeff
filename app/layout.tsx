import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google"; 
import "./globals.css";
import { Providers } from "./providers";

// --- IMPORTACIÓN DE IMÁGENES ---
import iconImage from "./icon.webp"; 
import imageJeff from "@/app/assets/Jeffseo.webp";

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
  title: {
    default: "Jefferson Bastidas Mejía | Psicólogo en Manizales y Online",
    template: "%s | Jefferson Bastidas Mejía",
  },
  
  description: "Psicólogo en Manizales y online. Psicoterapia basada en terapias contextuales de tercera generación y Terapia de Aceptación y Compromiso (ACT).",
  
  alternates: {
    canonical: 'https://psicologojeffersonbastidas.com',
  },
  
  keywords: [
    "Psicólogo Manizales",
    "Psicólogo Pereira",
    "Psicólogo Medellin",
    "Psicólogo Sabaneta",
    "Psicólogo Envigado",
    "Psicólogo Nueva York",
    "Psicólogo New York",
    "Psicólogo ",
    "Psicoterapia Online",
    "Jefferson Bastidas Mejía",
    "Salud Mental Colombia",
    "Psicólogo Latino Nueva York", 
    "Tratamiento Ansiedad Manizales",
    "Consulta psicológica virtual",
    "Salud mental Manizales",
    "Psicología Manizales",
    "Psicólogo Eje Cafetero"
  ],

  authors: [{ name: "Jefferson Bastidas Mejía" }],
  creator: "Jefferson Bastidas Mejía",

  openGraph: {
    title: "Jefferson Bastidas | Psicólogo en Manizales y Online",
    description: "Psicoterapia presencial en Manizales y online mediante terapias contextuales de tercera generación y Terapia de Aceptación y Compromiso.",
    url: "https://psicologojeffersonbastidas.com",
    siteName: "Jefferson Bastidas Psicólogo",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: `https://psicologojeffersonbastidas.com${imageJeff.src}`, 
        width: 800,
        height: 800,
        alt: 'Psicólogo Jefferson Bastidas Mejía',
      },
    ],
  },

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
            
            {/* FONDO DE LUCES PASTEL - Optimizado para GPU */}
            <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden opacity-60">
                <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full bg-[#ccfbf1] blur-[100px] transform-gpu will-change-transform"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-[#fce7f3] blur-[100px] transform-gpu will-change-transform"></div>
            </div>
            
            {children}
            
        </Providers>
      </body>
    </html>
  );
}