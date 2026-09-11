import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import imageJeff from "@/app/assets/Jeffseo.webp";

const siteUrl = "https://psicologojeffersonbastidas.com";

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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jefferson Bastidas Mejía | Psicólogo en Manizales y Online",
    template: "%s | Jefferson Bastidas Mejía",
  },
  description:
    "Psicólogo en Manizales y online. Psicoterapia basada en terapias contextuales de tercera generación y Terapia de Aceptación y Compromiso (ACT).",
  authors: [{ name: "Jefferson Bastidas Mejía" }],
  creator: "Jefferson Bastidas Mejía",
  openGraph: {
    siteName: "Jefferson Bastidas Psicólogo",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: imageJeff.src,
        width: 800,
        height: 800,
        alt: "Psicólogo Jefferson Bastidas Mejía",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [imageJeff.src],
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
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    shortcut: "/favicon.png",
    apple: [
      {
        url: "/favicon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CO" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${lato.variable} min-h-screen antialiased text-stone-700 overflow-x-hidden relative`}
      >
        <div
          className="fixed inset-0 z-[-1] pointer-events-none opacity-60"
          style={{
            background: `
              radial-gradient(circle at 15% 10%, #ccfbf1 0%, transparent 40%),
              radial-gradient(circle at 85% 90%, #fce7f3 0%, transparent 40%),
              #fffcf8
            `,
          }}
        />

        {children}
      </body>
    </html>
  );
}
