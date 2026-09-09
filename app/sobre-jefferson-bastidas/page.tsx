import SeoPillarPage from "@/app/components/seo/SeoPillarPage";
import { buildSeoMetadata } from "@/lib/seo/metadata";

export const metadata = buildSeoMetadata({
  title: "Jefferson Bastidas Mejía, psicólogo en Manizales",
  description:
    "Conoce la formación, experiencia y enfoque profesional de Jefferson Bastidas Mejía, psicólogo en Manizales con atención presencial y online.",
  path: "/sobre-jefferson-bastidas",
});

export default function SobreJeffersonBastidasPage() {
  return (
    <SeoPillarPage
      eyebrow="Perfil profesional"
      title="Jefferson Bastidas Mejía, psicólogo en Manizales"
      lead="Psicólogo egresado de la Universidad de Manizales, con dos décadas de experiencia laboral continua y formación complementaria en salud ocupacional, psicología clínica basada en la evidencia y terapias de tercera generación."
      canonicalPath="/sobre-jefferson-bastidas"
      schemaType="ProfilePage"
      highlights={["20 años de experiencia", "Universidad de Manizales", "Especialista en Salud Ocupacional", "ACT y DBT"]}
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
          heading: "Dónde atiende en Manizales",
          paragraphs: [
            "La atención presencial se presta en el Centro Médico Santa Elena, Avenida Paralela #49-46, Manizales. La modalidad online está disponible como alternativa para personas que no pueden desplazarse al consultorio.",
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
          href: "/blog",
          label: "Bitácora terapéutica",
          description: "Explora artículos de psicología, bienestar emocional y salud mental.",
        },
      ]}
    />
  );
}
