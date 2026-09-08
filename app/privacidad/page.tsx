import Link from "next/link";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/sections/Footer";
import { buildSeoMetadata } from "@/lib/seo/metadata";

export const metadata = buildSeoMetadata({
  title: "Aviso de privacidad",
  description:
    "Información general sobre privacidad, contacto, servicios de terceros y tratamiento de información en el sitio de Jefferson Bastidas Mejía.",
  path: "/privacidad",
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#fffcf8] text-stone-700">
      <Navbar />
      <main className="pt-36 md:pt-40 pb-24 px-6">
        <article className="max-w-4xl mx-auto">
          <Link href="/" className="text-sm font-bold text-teal-700 hover:text-teal-800">
            ← Volver al inicio
          </Link>
          <h1 className="mt-6 font-serif text-4xl md:text-6xl text-stone-900">
            Aviso de privacidad
          </h1>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            Este aviso explica de forma general cómo funciona la privacidad en este sitio web y qué ocurre cuando una persona decide contactar al profesional por los canales disponibles.
          </p>

          <div className="mt-12 space-y-10 text-stone-600 leading-8">
            <section>
              <h2 className="font-serif text-3xl text-stone-900 mb-4">Navegación del sitio</h2>
              <p>
                La lectura de la página principal, el blog, el glosario y las páginas informativas no requiere crear una cuenta pública. El área administrativa del sitio es privada y está separada de la experiencia de los visitantes.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-stone-900 mb-4">Contacto y datos que decides compartir</h2>
              <p>
                Cuando utilizas un enlace de contacto, como WhatsApp, la información que envías se comparte voluntariamente a través de ese servicio externo. Evita enviar información clínica sensible si todavía no existe un canal de atención acordado para ello.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-stone-900 mb-4">Servicios de terceros</h2>
              <p>
                Este sitio puede enlazar a servicios externos, por ejemplo WhatsApp, mapas o plataformas donde se alojan imágenes y otros recursos. Cada servicio externo gestiona sus propias condiciones y políticas de privacidad.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-stone-900 mb-4">Contenido del blog y glosario</h2>
              <p>
                El contenido educativo publicado no solicita ni necesita información personal para ser consultado. La información de salud mental disponible en el sitio es general y no reemplaza una valoración profesional individual.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-stone-900 mb-4">Consultas sobre privacidad</h2>
              <p>
                Si necesitas aclarar cómo se utiliza un dato que hayas compartido directamente durante un proceso de contacto, puedes comunicarte por los canales de atención indicados en el sitio.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
