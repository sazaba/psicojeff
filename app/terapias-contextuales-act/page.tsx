import SeoPillarPage from "@/app/components/seo/SeoPillarPage";
import { buildSeoMetadata } from "@/lib/seo/metadata";

export const metadata = buildSeoMetadata({
  title: "Terapia de Aceptación y Compromiso (ACT) en Manizales",
  description:
    "Conoce el enfoque de Terapia de Aceptación y Compromiso (ACT) y terapias contextuales utilizado por Jefferson Bastidas en Manizales y online.",
  path: "/terapias-contextuales-act",
});

export default function TerapiasContextualesActPage() {
  return (
    <SeoPillarPage
      eyebrow="Enfoque terapéutico"
      title="Terapia de Aceptación y Compromiso (ACT) en Manizales y online"
      lead="Un enfoque de terapia contextual orientado a desarrollar mayor flexibilidad psicológica, relacionarse de otra manera con pensamientos y emociones difíciles y avanzar hacia acciones conectadas con lo que realmente importa."
      canonicalPath="/terapias-contextuales-act"
      areaServed="Manizales y atención online"
      highlights={["ACT", "Terapias de tercera generación", "Flexibilidad psicológica", "Valores y acción"]}
      sections={[
        {
          heading: "¿Qué es la Terapia de Aceptación y Compromiso?",
          paragraphs: [
            "La Terapia de Aceptación y Compromiso, conocida como ACT por sus siglas en inglés, forma parte de las terapias contextuales de tercera generación. Su foco no está en eliminar cada pensamiento incómodo, sino en cambiar la manera en que la persona se relaciona con su experiencia interna y ampliar su capacidad para actuar con sentido.",
            "En este enfoque, el malestar psicológico se observa dentro del contexto en el que aparece: qué hace la persona cuando siente miedo, tristeza, culpa o ansiedad, qué evita, qué persigue y cómo esas respuestas afectan su vida a largo plazo.",
          ],
        },
        {
          heading: "Flexibilidad psicológica como objetivo central",
          paragraphs: [
            "ACT busca fortalecer la capacidad de estar presente, abrir espacio a experiencias internas difíciles y elegir conductas guiadas por valores en lugar de responder únicamente desde la evitación, la urgencia o el miedo.",
          ],
          bullets: [
            "Observar pensamientos sin asumir que todos deben obedecerse o discutirse.",
            "Desarrollar disposición para experimentar emociones difíciles cuando vale la pena hacerlo.",
            "Clarificar valores personales y traducirlos en acciones concretas.",
            "Construir respuestas más flexibles frente a situaciones que antes generaban bloqueo o evitación.",
          ],
        },
        {
          heading: "Cómo se integra en el trabajo de Jefferson Bastidas",
          paragraphs: [
            "Jefferson Bastidas combina ACT con otras terapias contextuales de tercera generación, incluyendo herramientas de Terapia Dialéctico Conductual (DBT), dentro de un proceso orientado a adultos en etapa productiva.",
            "La terapia se adapta a la historia, necesidades y contexto de cada consultante. El uso de un enfoque específico no reemplaza la valoración individual de lo que ocurre en cada caso.",
          ],
        },
      ]}
      relatedLinks={[
        {
          href: "/psicoterapia-online",
          label: "Psicoterapia online",
          description: "Conoce cómo se desarrolla este enfoque cuando la atención se realiza a distancia.",
        },
        {
          href: "/ansiedad-manizales",
          label: "Ansiedad en Manizales",
          description: "Explora una de las áreas donde la flexibilidad psicológica puede ser especialmente relevante.",
        },
        {
          href: "/sobre-jefferson-bastidas",
          label: "Sobre Jefferson Bastidas",
          description: "Revisa su formación y trayectoria profesional.",
        },
      ]}
    />
  );
}
