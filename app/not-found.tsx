import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/sections/Footer";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fffcf8] text-stone-700">
      <Navbar />
      <main className="px-6 pt-40 pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            Error 404
          </span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl font-semibold text-stone-900">
            Esta página no está disponible
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            El enlace puede haber cambiado o la dirección puede estar incompleta. Puedes volver al inicio o continuar explorando los contenidos del sitio.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/"
              className="rounded-full bg-teal-600 px-7 py-3.5 font-bold text-white hover:bg-teal-700 transition-colors"
            >
              Volver al inicio
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-stone-300 bg-white px-7 py-3.5 font-bold text-stone-700 hover:border-teal-300 hover:text-teal-700 transition-colors"
            >
              Ver artículos
            </Link>
            <Link
              href="/glosario"
              className="rounded-full border border-stone-300 bg-white px-7 py-3.5 font-bold text-stone-700 hover:border-teal-300 hover:text-teal-700 transition-colors"
            >
              Ir al glosario
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
