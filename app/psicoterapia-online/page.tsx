import SeoPillarPage from "@/app/components/seo/SeoPillarPage";
import Headerpsicojeff from "@/app/assets/Headerpsicojeff.webp";
import { buildSeoMetadata } from "@/lib/seo/metadata";

export const metadata = buildSeoMetadata({
  title: "Psicoterapia online en el Eje Cafetero y el exterior",
  description:
    "Psicoterapia online para adultos del Eje Cafetero y personas de la región residentes en el exterior. Acompañamiento en español con Jefferson Bastidas.",
  path: "/psicoterapia-online",
});

export default function PsicoterapiaOnlinePage() {
  return (
    <SeoPillarPage
      heroImage={{ src: Headerpsicojeff, alt: "Retrato del psicólogo Jefferson Bastidas Mejía" }}
      eyebrow="Modalidad online · Eje Cafetero"
      title="Psicoterapia online en el Eje Cafetero y el exterior"
      lead="Atención psicológica online para personas adultas de Caldas, Risaralda y Quindío, y para quienes emigraron desde el Eje Cafetero y desean conversar en español con un profesional que comprende el contexto de su región."
      canonicalPath="/psicoterapia-online"
      areaServed="Eje Cafetero (Caldas, Risaralda y Quindío) y personas de la región residentes en el exterior"
      highlights={[
        "Caldas, Risaralda y Quindío",
        "Personas del Eje Cafetero en el exterior",
        "Adultos",
        "ACT y terapias contextuales",
      ]}
      sections={[
        {
          heading: "¿En qué consiste la psicoterapia online?",
          paragraphs: [
            "Las sesiones se desarrollan por videollamada desde un lugar privado elegido por el consultante. El proceso parte de una evaluación individual y permite trabajar objetivos terapéuticos concretos, sin que la distancia sea necesariamente una barrera para solicitar acompañamiento.",
            "Jefferson Bastidas Mejía integra Terapia de Aceptación y Compromiso (ACT), Terapia Dialéctico Conductual (DBT) y otros recursos de las terapias contextuales de tercera generación para el trabajo con adultos.",
          ],
        },
        {
          heading: "Atención online para adultos del Eje Cafetero",
          paragraphs: [
            "Esta modalidad puede ser útil para quienes viven en municipios de Caldas, Risaralda o Quindío y tienen dificultades para asistir a una consulta presencial por razones de distancia, trabajo o disponibilidad.",
            "Aunque el consultorio presencial de Jefferson está en Manizales, las personas de otras localidades pueden consultar por la modalidad virtual. La atención se organiza de acuerdo con las necesidades del caso y con los horarios disponibles.",
          ],
          bullets: [
            "Personas adultas con jornadas de trabajo, estudio o responsabilidades familiares exigentes.",
            "Consultantes interesados en abordar ansiedad, desánimo, estrés o cambios vitales.",
            "Personas que prefieren desarrollar su proceso desde un espacio conocido y privado.",
          ],
        },
        {
          heading: "Psicoterapia en español para personas del Eje Cafetero que emigraron",
          paragraphs: [
            "Emigrar puede traer cambios en el sentido de pertenencia, las relaciones familiares, la estabilidad laboral y las rutinas. Hablar con un profesional que conoce el contexto cultural colombiano puede facilitar la exploración de estas experiencias sin perder de vista la historia personal.",
            "El acompañamiento puede abordar adaptación, soledad, incertidumbre o estrés, siempre desde una evaluación individual. Antes de iniciar se revisa la pertinencia de la atención a distancia y las condiciones profesionales y normativas aplicables en el país de residencia del consultante.",
          ],
          bullets: [
            "Adultos de la región residentes fuera de Colombia que prefieren expresarse en español.",
            "Personas que atraviesan cambios migratorios o dificultades de adaptación.",
            "Consultantes que desean explorar opciones de continuidad terapéutica tras mudarse.",
          ],
        },
        {
          heading: "¿Qué se trabaja durante el proceso?",
          paragraphs: [
            "Además de conversar sobre las dificultades del presente, la terapia busca identificar patrones de pensamiento, emoción y conducta en situaciones específicas, desarrollar respuestas más flexibles y orientar acciones hacia lo que cada persona considera importante.",
            "Los objetivos y la frecuencia de las sesiones se acuerdan según la valoración y las circunstancias individuales. No existe un proceso único que se aplique de la misma manera a todas las personas.",
          ],
        },
        {
          heading: "¿Cómo solicitar información?",
          paragraphs: [
            "Puedes escribir para consultar disponibilidad, modalidad y pasos para iniciar. Si resides en Pereira y buscas específicamente atención online en esa ciudad, también encontrarás una página con información dedicada a este servicio entre los enlaces relacionados.",
          ],
        },
      ]}
      relatedLinks={[
        {
          href: "/psicologo-online-pereira",
          label: "Psicólogo online en Pereira",
          description: "Conoce la atención de psicoterapia virtual dirigida a personas adultas que viven en Pereira.",
        },
        {
          href: "/motivos-de-consulta",
          label: "Motivos de consulta",
          description: "Explora ansiedad, depresión, estrés y burnout, entre otros temas posibles de consulta.",
        },
        {
          href: "/terapias-contextuales-act",
          label: "Terapias contextuales y ACT",
          description: "Conoce el enfoque terapéutico que orienta el trabajo clínico.",
        },
        {
          href: "/sobre-jefferson-bastidas",
          label: "Sobre Jefferson Bastidas",
          description: "Revisa su perfil, formación y trayectoria profesional.",
        },
      ]}
    />
  );
}
