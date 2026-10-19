import SeoPillarPage from "@/app/components/seo/SeoPillarPage";
import { buildSeoMetadata } from "@/lib/seo/metadata";

export const metadata = buildSeoMetadata({
  title: "Terapia Dialéctico Conductual (DBT) | Habilidades y enfoque",
  description:
    "Conoce qué es DBT y sus habilidades de regulación emocional, mindfulness y tolerancia al malestar. Recursos integrados en psicoterapia online y presencial en Manizales.",
  path: "/terapia-dialectico-conductual-dbt",
});

export default function TerapiaDialecticoConductualDbtPage() {
  return (
    <SeoPillarPage
      eyebrow="Enfoque terapéutico"
      title="Terapia Dialéctico Conductual (DBT): habilidades y regulación emocional"
      lead="Un enfoque conductual que integra aceptación y cambio, con habilidades estructuradas para responder de forma más efectiva ante emociones intensas, impulsos y situaciones interpersonales exigentes."
      canonicalPath="/terapia-dialectico-conductual-dbt"
      areaServed="Colombia"
      areaServedType="Country"
      highlights={["DBT", "Regulación emocional", "Mindfulness", "Aceptación y cambio"]}
      sections={[
        {
          heading: "¿Qué es la Terapia Dialéctico Conductual?",
          paragraphs: [
            "La Terapia Dialéctico Conductual, conocida como DBT por sus siglas en inglés, es un enfoque psicoterapéutico que combina principios conductuales con estrategias de aceptación. La perspectiva dialéctica busca integrar elementos que pueden parecer opuestos: reconocer la realidad actual y, al mismo tiempo, trabajar activamente por cambios posibles.",
            "DBT es un modelo clínico amplio. Sus habilidades pueden incorporarse dentro de distintos procesos terapéuticos, pero el tratamiento DBT completo tiene una estructura específica y no debe reducirse a una lista de ejercicios.",
          ],
        },
        {
          heading: "Áreas de habilidades asociadas a DBT",
          paragraphs: [
            "El entrenamiento en habilidades suele organizarse en cuatro áreas principales que ayudan a ampliar opciones de respuesta cuando la intensidad emocional o los impulsos dificultan actuar de acuerdo con objetivos de largo plazo.",
          ],
          bullets: [
            "Mindfulness: observar y participar en la experiencia presente con mayor conciencia.",
            "Regulación emocional: comprender emociones y modificar respuestas cuando hacerlo resulta útil.",
            "Tolerancia al malestar: atravesar momentos difíciles sin empeorar la situación mediante respuestas impulsivas.",
            "Efectividad interpersonal: pedir, negociar, establecer límites y cuidar el autorrespeto en las relaciones.",
          ],
        },
        {
          heading: "Aceptación y cambio en el proceso terapéutico",
          paragraphs: [
            "Una característica central de DBT es evitar que aceptación y cambio se presenten como alternativas incompatibles. Una experiencia puede ser comprensible dentro de su contexto y, al mismo tiempo, ciertas conductas pueden necesitar modificarse.",
            "Esta lógica puede ser útil cuando aparecen patrones de reactividad, dificultades de regulación emocional o conflictos interpersonales. La selección de herramientas depende de una valoración individual y de las necesidades de cada persona.",
          ],
        },
        {
          heading: "Cómo se integra en el trabajo de Jefferson Bastidas",
          paragraphs: [
            "Jefferson Bastidas integra herramientas de DBT dentro de un enfoque contextual junto con Terapia de Aceptación y Compromiso (ACT) y otros recursos basados en evidencia.",
            "El uso de habilidades DBT se adapta al contexto clínico. Cuando existen crisis recurrentes, conductas de riesgo o necesidades de atención de mayor intensidad, es importante valorar el nivel de tratamiento y los apoyos requeridos.",
          ],
        },
        {
          heading: "¿Aprender habilidades DBT es lo mismo que realizar el tratamiento DBT completo?",
          paragraphs: [
            "No. El tratamiento DBT integral es un programa clínico estructurado con componentes específicos. Aprender o practicar habilidades de DBT dentro de otro proceso psicoterapéutico no significa necesariamente que se esté ofreciendo ese programa completo.",
            "En el trabajo de Jefferson se describen recursos y habilidades DBT integrados a un enfoque contextual. La modalidad y el nivel de atención pertinentes se revisan caso por caso.",
          ],
        },
        {
          heading: "¿En qué situaciones pueden utilizarse estas habilidades?",
          paragraphs: [
            "Las habilidades de atención plena, regulación emocional, tolerancia al malestar y efectividad interpersonal pueden explorarse cuando una persona tiene dificultades para responder a emociones intensas, manejar tensiones en sus relaciones o actuar de manera coherente con sus objetivos.",
            "Su utilización requiere comprender el contexto y las necesidades de cada consultante. Las herramientas educativas no sustituyen una valoración individual ni la atención más intensiva que pueda ser necesaria.",
          ],
        },
        {
          heading: "Atención online en Colombia y presencial en Manizales",
          paragraphs: [
            "Jefferson ofrece psicoterapia por videollamada a personas adultas de Colombia, incluidas Bogotá, Medellín, Pereira, Armenia y el Eje Cafetero. La consulta presencial anunciada en el sitio se encuentra únicamente en Manizales.",
            "Puedes conocer cómo se desarrolla el proceso virtual, consultar disponibilidad y preguntar por la pertinencia de los recursos de DBT dentro de tu acompañamiento, sin asumir que una sesión equivale a un programa DBT integral.",
          ],
        },
      ]}
      relatedLinks={[
        {
          href: "/psicoterapia-online",
          label: "Psicoterapia online para adultos en Colombia",
          description: "Conoce cómo solicitar atención virtual y cuándo es pertinente este formato.",
        },
        {
          href: "/terapias-contextuales-act",
          label: "Terapia de Aceptación y Compromiso (ACT)",
          description: "Conoce otro enfoque contextual centrado en flexibilidad psicológica, valores y acción.",
        },
        {
          href: "/ansiedad-manizales",
          label: "Ansiedad en Manizales",
          description: "Explora el acompañamiento para preocupación, alerta y patrones de evitación.",
        },
        {
          href: "/sobre-jefferson-bastidas",
          label: "Perfil profesional",
          description: "Revisa la formación y trayectoria de Jefferson Bastidas Mejía.",
        },
      ]}
    />
  );
}
