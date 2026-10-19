import SeoPillarPage from "@/app/components/seo/SeoPillarPage";
import { buildSeoMetadata } from "@/lib/seo/metadata";

export const metadata = buildSeoMetadata({
  title: "Jefferson Bastidas | Psicólogo en Manizales y online",
  description:
    "Conoce la formación y enfoque de Jefferson Bastidas, psicólogo en Manizales. Psicoterapia presencial y atención virtual para adultos en toda Colombia.",
  path: "/sobre-jefferson-bastidas",
});

export default function SobreJeffersonBastidasPage() {
  return (
    <SeoPillarPage
      eyebrow="Perfil profesional"
      title="Jefferson Bastidas Mejía, psicólogo en Manizales"
      lead="Psicólogo egresado de la Universidad de Manizales, con 21 años de experiencia laboral específica y continua y formación complementaria en salud ocupacional, psicología clínica basada en la evidencia y terapias de tercera generación. Ofrece atención presencial en Manizales y psicoterapia online para adultos en Colombia."
      canonicalPath="/sobre-jefferson-bastidas"
      schemaType="ProfilePage"
      highlights={["21 años de experiencia laboral específica y continua", "Universidad de Manizales", "Especialista en Salud Ocupacional", "ACT y DBT"]}
      sections={[
        {
          heading: "Formación y trayectoria",
          paragraphs: [
            "Jefferson Bastidas es psicólogo egresado de la Universidad de Manizales. Su trayectoria profesional combina experiencia clínica y una mirada del bienestar que también considera el contexto laboral y social de cada persona.",
            "Es Especialista en Salud Ocupacional de la Universidad Libre y ha complementado su formación con estudios en psicología clínica basada en la evidencia, terapias complementarias y terapias contextuales de tercera generación.",
          ],
          bullets: [
            "Diplomado en Psicología Clínica Basada en la Evidencia - Universidad Javeriana.",
            "Diplomado en Terapias Complementarias - Universidad del Rosario.",
            "Diplomado en Abordaje de Problemáticas Clínicas desde Terapias de Tercera Generación - Universidad de la Sabana.",
          ],
        },
        {
          heading: "Un enfoque dirigido a adultos en etapa productiva",
          paragraphs: [
            "La práctica está especialmente orientada a adultos que trabajan, estudian o se encuentran en una etapa vital donde necesitan recuperar claridad, regulación emocional y dirección frente a decisiones importantes.",
            "El proceso busca ir más allá de una conversación general sobre el malestar. Se exploran patrones concretos de pensamiento, emoción y conducta, y se construyen herramientas que puedan trasladarse a la vida cotidiana.",
          ],
        },
        {
          heading: "Terapias contextuales y atención personalizada",
          paragraphs: [
            "El trabajo clínico se apoya en Terapia de Aceptación y Compromiso (ACT), Terapia Dialéctico Conductual (DBT) y otras terapias contextuales de tercera generación.",
            "La propuesta de atención limita el número de pacientes diarios para favorecer una práctica personalizada. Las sesiones publicadas en el sitio tienen una duración aproximada de 60 a 90 minutos y pueden realizarse de manera presencial en Manizales o en modalidad online.",
          ],
        },
        {
          heading: "¿Dónde atiende? Manizales presencial y Colombia online",
          paragraphs: [
            "La atención presencial se presta en el Centro Médico Santa Elena, Avenida Paralela #49-46, Manizales. Esta es la única sede presencial anunciada en el sitio.",
            "Para personas adultas que se encuentran en Bogotá, Medellín, Pereira, Armenia, el Eje Cafetero u otras ciudades de Colombia, la atención se ofrece por videollamada. Antes de comenzar se confirma la disponibilidad y si esta modalidad es pertinente para el motivo de consulta.",
          ],
        },
        {
          heading: "¿Qué puedes consultar antes de comenzar un proceso?",
          paragraphs: [
            "Puedes solicitar información sobre la modalidad de atención, la disponibilidad, la duración de las sesiones y las condiciones económicas vigentes. No es necesario conocer de antemano un diagnóstico para plantear tus dudas sobre el proceso.",
            "El acompañamiento parte de comprender la situación individual y acordar objetivos de trabajo. Los recursos de ACT y DBT se emplean cuando resultan pertinentes, sin ofrecer respuestas universales ni prometer resultados idénticos para todas las personas.",
          ],
        },
        {
          heading: "¿Cómo elegir entre consulta presencial y virtual?",
          paragraphs: [
            "Si vives en Manizales, puedes preguntar por las dos modalidades. Si estás en otra ciudad de Colombia, el servicio que se anuncia es exclusivamente online. En ambos casos se revisa si las condiciones de atención son adecuadas para tus necesidades.",
            "Si resides en el exterior, es necesario verificar previamente las condiciones profesionales y normativas aplicables al país desde el que deseas conectarte.",
          ],
        },
      ]}
      relatedLinks={[
        {
          href: "/terapias-contextuales-act",
          label: "Terapias contextuales y ACT",
          description: "Profundiza en el enfoque terapéutico utilizado en consulta.",
        },
        {
          href: "/psicoterapia-online",
          label: "Psicoterapia online",
          description: "Conoce la modalidad de atención para quienes requieren flexibilidad geográfica.",
        },
        {
          href: "/terapia-dialectico-conductual-dbt",
          label: "Herramientas de DBT y regulación emocional",
          description: "Conoce qué habilidades se integran al enfoque contextual y cómo se diferencian de un programa DBT integral.",
        },
        {
          href: "/motivos-de-consulta",
          label: "Motivos de consulta",
          description: "Explora ansiedad, depresión, estrés y burnout, entre otras situaciones por las que consultar.",
        },
        {
          href: "/blog",
          label: "Bitácora terapéutica",
          description: "Explora artículos de psicología, bienestar emocional y salud mental.",
        },
      ]}
    />
  );
}
