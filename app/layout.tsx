import type { Metadata } from "next";
import Script from "next/script";
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
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "48x48",
      },
    ],
    shortcut: "/favicon.ico",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PBZSHVMWMC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PBZSHVMWMC', {
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });

            // Delegate clicks so links added during client-side navigation are covered.
            document.addEventListener('click', function(event) {
              if (!(event.target instanceof Element)) return;
              var link = event.target.closest('a[href]');
              if (!link) return;
              var destination;
              try { destination = new URL(link.href); } catch { return; }
              var hosts = ['wa.link', 'wa.me', 'api.whatsapp.com', 'web.whatsapp.com'];
              if (destination.protocol !== 'https:' || !hosts.includes(destination.hostname)) return;
              var path = window.location.pathname;
              if (path === '/admin' || path.startsWith('/admin/') || path === '/login') return;

              // Never send the WhatsApp URL, phone number, or message text.
              gtag('event', 'whatsapp_click', {
                send_to: 'G-PBZSHVMWMC',
                contact_method: 'whatsapp',
                page_path: window.location.pathname,
                page_location: window.location.origin + window.location.pathname,
                transport_type: 'beacon'
              });
            }, true);
          `}
        </Script>
      </body>
    </html>
  );
}
