import SeoPillarPage from "@/app/components/seo/SeoPillarPage";
import { buildSeoMetadata } from "@/lib/seo/metadata";

export const metadata = buildSeoMetadata({
  title: "Terapia de Aceptación y Compromiso (ACT) | Manizales y online",
  description:
    "Conoce ACT, flexibilidad psicológica, valores y acción. Psicoterapia virtual para adultos en Colombia y consulta presencial en Manizales con Jefferson Bastidas.",
  path: "/terapias-contextuales-act",
});

export default function TerapiasContextualesActPage() {
  return (
    <SeoPillarPage
      eyebrow="Enfoque terapéutico"
      title="Terapia de Aceptación y Compromiso (ACT): flexibilidad psicológica y valores"
      lead="Un enfoque de terapia contextual orientado a desarrollar mayor flexibilidad psicológica, relacionarse de otra manera con pensamientos y emociones difíciles y avanzar hacia acciones conectadas con lo que realmente importa."
      canonicalPath="/terapias-contextuales-act"
      areaServed="Colombia"
      areaServedType="Country"
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
        {
          heading: "¿Aceptar significa resignarse a lo que ocurre?",
          paragraphs: [
            "En ACT, aceptación no significa aprobar una situación injusta, renunciar a cambiarla ni soportar pasivamente el sufrimiento. Se refiere a desarrollar disposición para entrar en contacto con pensamientos y emociones difíciles cuando luchar contra ellos termina alejando a la persona de lo que le importa.",
            "El trabajo puede incluir ejercicios para observar pensamientos, reconocer patrones de evitación y elegir conductas útiles en un contexto concreto. No existe una técnica que funcione de la misma forma para todas las personas.",
          ],
        },
        {
          heading: "ACT en la vida cotidiana: ansiedad, estrés y cambios importantes",
          paragraphs: [
            "La preocupación persistente, las exigencias del trabajo y las transiciones personales pueden llevar a organizar el día alrededor del intento de no sentir malestar. Un proceso inspirado en ACT puede ayudar a observar esa relación con la experiencia interna y a recuperar espacio para decisiones importantes.",
            "La pertinencia de esta aproximación se establece mediante valoración clínica. No se garantiza la eliminación de síntomas ni se sustituye la atención que pueda requerirse en situaciones de mayor complejidad.",
          ],
        },
        {
          heading: "¿Se puede trabajar este enfoque en psicoterapia online?",
          paragraphs: [
            "Los principios y ejercicios de ACT pueden formar parte de un proceso de psicoterapia por videollamada cuando la modalidad es apropiada. Jefferson ofrece atención virtual a adultos en Colombia y consulta presencial en Manizales.",
            "Si estás en Bogotá, Medellín, Pereira, Armenia o cualquier otra ciudad, puedes consultar por la modalidad online, su disponibilidad y las condiciones de atención antes de comenzar.",
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
          label: "Ansiedad: motivos de consulta",
          description: "Explora cómo la preocupación y la evitación pueden influir en la vida cotidiana; la atención presencial está en Manizales.",
        },
        {
          href: "/terapia-dialectico-conductual-dbt",
          label: "Terapia Dialéctico Conductual (DBT)",
          description: "Conoce el enfoque de aceptación y cambio y sus principales áreas de habilidades.",
        },
      ]}
    />
  );
}
