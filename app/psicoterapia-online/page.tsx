import SeoPillarPage from "@/app/components/seo/SeoPillarPage";
import { buildSeoMetadata } from "@/lib/seo/metadata";

export const metadata = buildSeoMetadata({
  title: "Psicoterapia online para adultos | Eje Cafetero",
  description:
    "Psicoterapia online para adultos de Manizales, Pereira, Armenia y el Eje Cafetero, incluidas personas de la región que emigraron al exterior. Atención en español.",
  path: "/psicoterapia-online",
});

export default function PsicoterapiaOnlinePage() {
  return (
    <SeoPillarPage
      eyebrow="Modalidad online"
      title="Psicoterapia online para adultos"
      lead="Psicoterapia online en español para personas adultas de Manizales, Pereira, Armenia y otras localidades del Eje Cafetero. También para quienes han emigrado desde la región y buscan un acompañamiento que comprenda su contexto cultural y sus objetivos de vida."
      canonicalPath="/psicoterapia-online"
      areaServed="Eje Cafetero (Caldas, Risaralda y Quindío) y personas de la región residentes en el exterior"
      highlights={["Manizales, Pereira y Armenia", "Eje Cafetero en el exterior", "Adultos", "ACT y terapias contextuales"]}
      sections={[
        {
          heading: "¿Cómo es la psicoterapia online?",
          paragraphs: [
            "La consulta online mantiene el foco clínico del proceso presencial y permite desarrollar las sesiones desde un entorno privado elegido por el consultante. El trabajo se organiza alrededor de objetivos claros, patrones de comportamiento y herramientas que puedan aplicarse en la vida cotidiana.",
            "El enfoque de Jefferson Bastidas integra Terapia de Aceptación y Compromiso (ACT), Terapia Dialéctico Conductual (DBT) y otras terapias contextuales de tercera generación, con una atención especialmente dirigida a personas adultas en etapa productiva.",
          ],
        },
        {
          heading: "Psicoterapia online en Manizales, Pereira, Armenia y el Eje Cafetero",
          paragraphs: [
            "La atención online está dirigida a personas adultas de Manizales, Pereira, Armenia y otros municipios de Caldas, Risaralda y Quindío. Si la distancia, el trabajo o los desplazamientos dificultan asistir a un consultorio, esta modalidad permite explorar un proceso terapéutico desde un espacio privado y con horarios acordados.",
            "Vivir en el Eje Cafetero no significa tener que desplazarse hasta Manizales para conocer el enfoque de Jefferson Bastidas. La modalidad online busca mantener un proceso estructurado, con objetivos claros y herramientas para la vida cotidiana.",
          ],
          bullets: [
            "Personas de Caldas, Risaralda y Quindío que buscan psicoterapia online para adultos.",
            "Consultantes que necesitan compatibilizar el acompañamiento con sus actividades laborales, familiares o académicas.",
            "Personas que desean trabajar ansiedad, estrés, desánimo o cambios vitales desde un enfoque contextual.",
          ],
        },
        {
          heading: "Psicoterapia online para personas del Eje Cafetero que emigraron al exterior",
          paragraphs: [
            "Mudarse a otro país puede implicar cambios en las relaciones, el trabajo, el sentido de pertenencia y la forma de vivir la distancia con la familia. Para quienes salieron de Manizales, Pereira, Armenia o de otros lugares del Eje Cafetero, conversar en español con un psicólogo colombiano puede ayudar a expresar experiencias y referencias culturales que siguen siendo importantes incluso lejos de casa.",
            "El acompañamiento online ofrece un espacio para explorar procesos de adaptación, soledad, incertidumbre o presión laboral sin perder de vista la historia personal y los vínculos con la región de origen. Antes de iniciar, se revisa la pertinencia de esta modalidad y las condiciones aplicables en el país de residencia.",
          ],
          bullets: [
            "Adultos del Eje Cafetero residentes en el exterior que prefieren hablar de su experiencia en español.",
            "Personas que atraviesan cambios migratorios, nostalgia, distancia familiar o adaptación a nuevas rutinas.",
            "Colombianos que buscan continuidad terapéutica al cambiar de ciudad o país.",
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
