import Link from "next/link";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/sections/Footer";
import { buildSeoMetadata } from "@/lib/seo/metadata";

export const metadata = buildSeoMetadata({
  title: "Términos de uso",
  description:
    "Condiciones generales de uso del sitio, alcance del contenido educativo y canales de contacto de Jefferson Bastidas Mejía.",
  path: "/terminos",
});

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#fffcf8] text-stone-700">
      <Navbar />
      <main className="pt-36 md:pt-40 pb-24 px-6">
        <article className="max-w-4xl mx-auto">
          <Link href="/" className="text-sm font-bold text-teal-700 hover:text-teal-800">
            ← Volver al inicio
          </Link>
          <h1 className="mt-6 font-serif text-4xl md:text-6xl text-stone-900">
            Términos de uso
          </h1>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            Estas condiciones describen el alcance general de la información publicada en el sitio y el uso de sus recursos informativos.
          </p>

          <div className="mt-12 space-y-10 text-stone-600 leading-8">
            <section>
              <h2 className="font-serif text-3xl text-stone-900 mb-4">Contenido educativo</h2>
              <p>
                Los artículos, definiciones del glosario y páginas informativas tienen fines educativos y de orientación general. No constituyen por sí mismos una valoración psicológica, diagnóstico, tratamiento ni recomendación clínica individual.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-stone-900 mb-4">Atención profesional</h2>
              <p>
                El inicio, alcance y frecuencia de un proceso terapéutico se determinan de forma individual. La información del sitio no permite garantizar resultados específicos, ya que cada proceso depende de múltiples factores personales y contextuales.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-stone-900 mb-4">Situaciones urgentes</h2>
              <p>
                Este sitio y sus canales informativos no funcionan como un servicio de emergencias. Ante una situación de riesgo inmediato o una urgencia de salud, busca los servicios de emergencia o atención sanitaria disponibles en tu ubicación.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-stone-900 mb-4">Enlaces externos</h2>
              <p>
                Algunos enlaces dirigen a plataformas de terceros, como WhatsApp o servicios de mapas. Su funcionamiento, disponibilidad y condiciones dependen de cada proveedor externo.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-stone-900 mb-4">Propiedad del contenido</h2>
              <p>
                Los textos originales, elementos de identidad y materiales publicados en el sitio pertenecen a sus respectivos titulares. El contenido puede consultarse para uso personal e informativo sin atribuirle finalidades distintas a las expresadas en cada página.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-stone-900 mb-4">Actualizaciones</h2>
              <p>
                El contenido y estas condiciones pueden actualizarse cuando cambien los servicios, la estructura del sitio o la información profesional publicada.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
