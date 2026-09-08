import SeoPillarPage from "@/app/components/seo/SeoPillarPage";
import { buildSeoMetadata } from "@/lib/seo/metadata";

export const metadata = buildSeoMetadata({
  title: "Psicoterapia online para adultos",
  description:
    "Psicoterapia online para adultos y colombianos residentes en el exterior, en español, con Jefferson Bastidas Mejía y enfoque contextual.",
  path: "/psicoterapia-online",
});

export default function PsicoterapiaOnlinePage() {
  return (
    <SeoPillarPage
      eyebrow="Modalidad online"
      title="Psicoterapia online para adultos"
      lead="Una modalidad pensada para personas adultas que necesitan flexibilidad geográfica sin renunciar a un proceso terapéutico estructurado, profundo y orientado a objetivos de vida."
      canonicalPath="/psicoterapia-online"
      areaServed="Atención online para adultos en Colombia y colombianos residentes en el exterior"
      highlights={["Atención online", "Adultos", "Sesiones de 60 a 90 minutos", "ACT y terapias contextuales"]}
      sections={[
        {
          heading: "¿Cómo es la psicoterapia online?",
          paragraphs: [
            "La consulta online mantiene el foco clínico del proceso presencial y permite desarrollar las sesiones desde un entorno privado elegido por el consultante. El trabajo se organiza alrededor de objetivos claros, patrones de comportamiento y herramientas que puedan aplicarse en la vida cotidiana.",
            "El enfoque de Jefferson Bastidas integra Terapia de Aceptación y Compromiso (ACT), Terapia Dialéctico Conductual (DBT) y otras terapias contextuales de tercera generación, con una atención especialmente dirigida a personas adultas en etapa productiva.",
          ],
        },
        {
          heading: "Psicoterapia online para colombianos en el exterior",
          paragraphs: [
            "Para una persona colombiana que vive fuera del país, hacer terapia en español con un profesional colombiano puede facilitar la comunicación de matices culturales, familiares y personales que forman parte de su historia. Esta modalidad puede ser especialmente útil cuando se busca acompañamiento psicológico sin depender de la ubicación física en Colombia.",
            "En el lenguaje cotidiano, muchas personas buscan este servicio como terapia online, psicólogo online, psicólogo virtual o consulta psicológica virtual. En este sitio esos términos se refieren a una atención psicológica realizada por videollamada, con objetivos terapéuticos definidos y un encuadre profesional.",
          ],
          bullets: [
            "Colombianos residentes en otros países que prefieren realizar el proceso terapéutico en español.",
            "Personas que atraviesan adaptación migratoria, cambios de vida, distancia familiar, soledad o presión laboral.",
            "Adultos que desean trabajar con un profesional colombiano y mantener continuidad aunque vivan fuera del país.",
          ],
        },
        {
          heading: "¿Para quién puede ser útil esta modalidad?",
          paragraphs: [
            "La psicoterapia online puede ser una alternativa práctica cuando la distancia, los viajes, los horarios o la rutina dificultan asistir de manera presencial a un consultorio en Manizales.",
            "Antes de iniciar se confirma la viabilidad de la atención según las necesidades del caso y las condiciones aplicables en el lugar de residencia de la persona consultante.",
          ],
          bullets: [
            "Personas que viven fuera de Manizales o fuera de Colombia.",
            "Adultos que necesitan integrar la terapia con jornadas laborales o académicas exigentes.",
            "Personas que prefieren realizar el proceso desde un espacio privado y conocido.",
            "Consultantes que buscan continuidad cuando cambian temporalmente de ciudad o país.",
          ],
        },
        {
          heading: "Un proceso orientado a significado, valores y acción",
          paragraphs: [
            "El objetivo no es limitar la sesión a hablar de lo que ocurrió durante la semana. El proceso busca identificar cómo funcionan los pensamientos, emociones y conductas en contextos concretos, y desarrollar respuestas más flexibles frente a ellos.",
            "La meta terapéutica se conecta con una idea central del enfoque de Jefferson: avanzar hacia una vida con mayor claridad, presencia y dirección, incluso cuando aparecen emociones difíciles.",
          ],
        },
      ]}
      relatedLinks={[
        {
          href: "/terapias-contextuales-act",
          label: "Terapias contextuales y ACT",
          description: "Conoce el enfoque terapéutico que orienta buena parte del trabajo clínico.",
        },
        {
          href: "/ansiedad-manizales",
          label: "Ansiedad en Manizales",
          description: "Explora cómo se aborda la preocupación, la alerta y el desborde emocional.",
        },
        {
          href: "/sobre-jefferson-bastidas",
          label: "Sobre Jefferson Bastidas",
          description: "Revisa formación, experiencia y trayectoria profesional.",
        },
      ]}
    />
  );
}
