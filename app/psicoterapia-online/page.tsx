import SeoPillarPage from "@/app/components/seo/SeoPillarPage";
import Headerpsicojeff from "@/app/assets/Headerpsicojeff.webp";
import { buildSeoMetadata } from "@/lib/seo/metadata";
import { cityLandings, onlineCityOrder } from "@/lib/seo/onlineCityLandings";

export const metadata = buildSeoMetadata({
  title: "Psicoterapia online para adultos en Colombia y el exterior",
  description:
    "Psicoterapia online para adultos en Pereira, Armenia, Medellín y Bogotá, y para personas del Eje Cafetero residentes en el exterior. Jefferson Bastidas.",
  path: "/psicoterapia-online",
});

export default function PsicoterapiaOnlinePage() {
  return (
    <SeoPillarPage
      heroImage={{
        src: Headerpsicojeff,
        alt: "Jefferson Bastidas Mejía, psicólogo que ofrece psicoterapia online para adultos",
      }}
      eyebrow="Modalidad online · Colombia y exterior"
      title="Psicoterapia online para adultos en Colombia y el exterior"
      lead="Atención psicológica por videollamada para personas adultas de Pereira, Armenia, Medellín, Bogotá y otras localidades de Colombia. También para quienes han emigrado desde el Eje Cafetero y buscan acompañamiento en español que tenga en cuenta su contexto cultural."
      canonicalPath="/psicoterapia-online"
      areaServed="Pereira (Risaralda), Armenia (Quindío), Medellín (Antioquia), Bogotá D. C., Eje Cafetero y personas de la región residentes en el exterior"
      showOnlineCities
      highlights={[
        "Pereira y Armenia",
        "Medellín y Bogotá",
        "Personas del Eje Cafetero en el exterior",
        "Adultos · ACT y terapias contextuales",
      ]}
      sections={[
        {
          heading: "¿En qué consiste la psicoterapia online?",
          paragraphs: [
            "Las sesiones se desarrollan por videollamada desde un lugar privado elegido por la persona consultante. El proceso parte de una evaluación individual y permite trabajar objetivos terapéuticos concretos, sin que la distancia sea necesariamente una barrera para solicitar acompañamiento.",
            "Jefferson Bastidas Mejía integra Terapia de Aceptación y Compromiso (ACT), recursos de Terapia Dialéctico Conductual (DBT) y otras herramientas de las terapias contextuales de tercera generación para el trabajo con adultos.",
          ],
        },
        {
          heading: "Psicoterapia online en Pereira, Armenia, Medellín y Bogotá",
          paragraphs: [
            "La atención para estas cuatro ciudades se ofrece exclusivamente por videollamada. No se anuncian consultorios presenciales en Pereira, Armenia, Medellín ni Bogotá: la consulta presencial informada en este sitio se encuentra en Manizales.",
            "Cada ciudad cuenta con una página específica donde puedes revisar cómo se desarrolla el servicio, los motivos de consulta y las preguntas frecuentes. Puedes acceder a ellas desde las tarjetas de ciudades que aparecen arriba.",
          ],
          bullets: [
            "Pereira, Risaralda: acompañamiento online desde el Eje Cafetero sin desplazarte a Manizales.",
            "Armenia, Quindío: sesiones virtuales que puedes consultar desde un lugar privado.",
            "Medellín, Antioquia: información sobre psicoterapia online para ansiedad, desánimo, estrés y burnout.",
            "Bogotá D. C.: atención por videollamada para adultos que desean explorar un proceso terapéutico.",
          ],
        },
        {
          heading: "Atención online para adultos del Eje Cafetero",
          paragraphs: [
            "Esta modalidad puede ser útil para quienes viven en municipios de Caldas, Risaralda o Quindío y tienen dificultades para asistir a una consulta presencial por razones de distancia, trabajo o disponibilidad.",
            "Aunque el consultorio presencial de Jefferson está en Manizales, las personas de otras localidades pueden solicitar información sobre la atención virtual. Los horarios y la pertinencia del proceso se revisan de acuerdo con las necesidades individuales.",
          ],
          bullets: [
            "Personas adultas con jornadas de trabajo, estudio o responsabilidades familiares exigentes.",
            "Consultantes interesados en abordar ansiedad, depresión, estrés o cambios vitales.",
            "Personas que prefieren conversar desde un espacio conocido y privado.",
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
            "Selecciona tu ciudad en las tarjetas de esta página para conocer las características de la atención online en Pereira, Armenia, Medellín o Bogotá. Si vives en otra localidad o fuera de Colombia, también puedes escribir para consultar disponibilidad y comprobar si esta modalidad es pertinente para tu situación.",
          ],
        },
      ]}
      relatedLinks={[
        ...onlineCityOrder.map((key) => ({
          href: cityLandings[key].path,
          label: `Psicólogo online en ${cityLandings[key].name}`,
          description: `Conoce la psicoterapia online para adultos en ${cityLandings[key].name}, ${cityLandings[key].department}.`,
        })),
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
