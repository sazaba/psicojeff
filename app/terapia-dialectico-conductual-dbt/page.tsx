import SeoPillarPage from "@/app/components/seo/SeoPillarPage";
import { buildSeoMetadata } from "@/lib/seo/metadata";

export const metadata = buildSeoMetadata({
  title: "Terapia Dialéctico Conductual (DBT) en Manizales",
  description:
    "Conoce la Terapia Dialéctico Conductual (DBT), su equilibrio entre aceptación y cambio y habilidades como regulación emocional, mindfulness y tolerancia al malestar.",
  path: "/terapia-dialectico-conductual-dbt",
});

export default function TerapiaDialecticoConductualDbtPage() {
  return (
    <SeoPillarPage
      eyebrow="Enfoque terapéutico"
      title="Terapia Dialéctico Conductual (DBT) en Manizales y online"
      lead="Un enfoque conductual que integra aceptación y cambio, con habilidades estructuradas para responder de forma más efectiva ante emociones intensas, impulsos y situaciones interpersonales exigentes."
      canonicalPath="/terapia-dialectico-conductual-dbt"
      areaServed="Manizales y atención online"
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
      ]}
      relatedLinks={[
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
