import SeoPillarPage from "@/app/components/seo/SeoPillarPage";
import Headerpsicojeff from "@/app/assets/Headerpsicojeff.webp";
import { buildSeoMetadata } from "@/lib/seo/metadata";

export const metadata = buildSeoMetadata({
  title: "Psicólogo online en Pereira | Psicoterapia para adultos",
  description:
    "Psicoterapia online para adultos en Pereira, Risaralda. Atención con Jefferson Bastidas para ansiedad, depresión, estrés y burnout desde terapias contextuales.",
  path: "/psicologo-online-pereira",
});

export default function PsicologoOnlinePereiraPage() {
  return (
    <SeoPillarPage
      heroImage={{
        src: Headerpsicojeff,
        alt: "Retrato del psicólogo Jefferson Bastidas Mejía",
      }}
      eyebrow="Atención psicológica online en Pereira"
      title="Psicólogo online en Pereira: psicoterapia para adultos"
      lead="Si resides en Pereira, puedes acceder a un proceso de psicoterapia online con Jefferson Bastidas Mejía sin desplazarte a otra ciudad. La atención dirigida a Pereira se realiza exclusivamente por videollamada, en un espacio privado y con objetivos terapéuticos acordados."
      canonicalPath="/psicologo-online-pereira"
      areaServed="Pereira, Risaralda, Colombia (atención exclusivamente online)"
      highlights={[
        "Personas adultas en Pereira",
        "Sesiones por videollamada",
        "ACT y terapias contextuales",
        "Ansiedad, depresión, estrés y burnout",
      ]}
      sections={[
        {
          heading: "Psicoterapia online para personas que viven en Pereira",
          paragraphs: [
            "La modalidad online permite iniciar o continuar un proceso psicológico desde Pereira, sin necesidad de asistir a un consultorio presencial. Antes de comenzar, se acuerdan las condiciones de la atención, la disponibilidad y un espacio adecuado para conversar con privacidad.",
            "El servicio está dirigido a personas adultas que desean comprender sus experiencias emocionales, reconocer patrones de conducta y trabajar en cambios que tengan sentido para su vida cotidiana.",
          ],
        },
        {
          heading: "Motivos de consulta que podemos explorar",
          paragraphs: [
            "Cada proceso requiere una evaluación individual. Entre los temas que pueden abordarse se encuentran la ansiedad, el estado de ánimo bajo, el estrés sostenido y las dificultades relacionadas con el agotamiento laboral o burnout.",
            "La psicoterapia no se limita a un síntoma o una etiqueta: también puede abordar transiciones personales, relaciones, exigencias del trabajo y decisiones que generan malestar.",
          ],
          bullets: [
            "Ansiedad, preocupación constante y dificultades para manejar situaciones inciertas.",
            "Depresión, desánimo y pérdida de interés en actividades importantes.",
            "Estrés personal o laboral y sensación de sobrecarga.",
            "Síndrome de burnout y dificultades para establecer límites saludables.",
          ],
        },
        {
          heading: "¿Cómo se desarrolla una consulta psicológica online?",
          paragraphs: [
            "El primer paso es solicitar información sobre el proceso y la disponibilidad. A partir de una conversación inicial se valora si la atención online resulta apropiada para las necesidades de la persona.",
            "Las sesiones se realizan por videollamada, con acuerdos de confidencialidad, objetivos de trabajo y seguimiento según el desarrollo del proceso. No es necesario trasladarse de Pereira a Manizales para recibir esta modalidad de atención.",
          ],
        },
        {
          heading: "Un enfoque basado en terapias contextuales",
          paragraphs: [
            "Jefferson Bastidas Mejía orienta su trabajo desde terapias contextuales de tercera generación, incluyendo Terapia de Aceptación y Compromiso (ACT) y recursos de Terapia Dialéctico Conductual (DBT).",
            "El trabajo busca reconocer la relación entre pensamientos, emociones, acciones y contexto, y construir respuestas más flexibles frente a situaciones difíciles, de acuerdo con los objetivos personales del consultante.",
          ],
        },
        {
          heading: "¿La psicoterapia para Pereira es presencial u online?",
          paragraphs: [
            "La atención ofrecida a pacientes de Pereira es exclusivamente online. No se anuncia una sede de atención presencial en esta ciudad. El servicio se presta mediante sesiones virtuales previamente acordadas.",
          ],
        },
        {
          heading: "¿Cómo solicitar información o iniciar el proceso?",
          paragraphs: [
            "Puedes comunicarte para preguntar por el enfoque de atención, los horarios disponibles y los pasos para iniciar. La orientación inicial permite resolver dudas antes de decidir si deseas agendar una sesión.",
          ],
        },
      ]}
      relatedLinks={[
        {
          href: "/psicoterapia-online",
          label: "Psicoterapia online en el Eje Cafetero",
          description: "Conoce la modalidad virtual para la región y personas residentes en el exterior.",
        },
        {
          href: "/motivos-de-consulta",
          label: "Motivos de consulta",
          description: "Explora los temas que pueden abordarse en un proceso psicoterapéutico.",
        },
        {
          href: "/sobre-jefferson-bastidas",
          label: "Perfil profesional de Jefferson Bastidas",
          description: "Consulta su trayectoria y enfoque clínico.",
        },
      ]}
    />
  );
}
