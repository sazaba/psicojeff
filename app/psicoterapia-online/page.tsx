import SeoPillarPage from "@/app/components/seo/SeoPillarPage";
import Headerpsicojeff from "@/app/assets/Headerpsicojeff.webp";
import { buildSeoMetadata } from "@/lib/seo/metadata";

export const metadata = buildSeoMetadata({
  title: "Psicólogo online en Colombia | Psicoterapia virtual para adultos",
  description:
    "Psicólogo online en Colombia: psicoterapia virtual para adultos con Jefferson Bastidas. Atención desde Bogotá, Medellín, Pereira, Armenia y el Eje Cafetero.",
  path: "/psicoterapia-online",
});

export default function PsicoterapiaOnlinePage() {
  return (
    <SeoPillarPage
      heroImage={{
        src: Headerpsicojeff,
        alt: "Jefferson Bastidas Mejía, psicólogo que ofrece psicoterapia online para adultos",
      }}
      eyebrow="Psicoterapia virtual · Atención en Colombia"
      title="Psicólogo online en Colombia: psicoterapia virtual para adultos"
      lead="Atención psicológica por videollamada con Jefferson Bastidas Mejía para personas adultas en Colombia. Puedes consultar desde Bogotá, Medellín, Pereira, Armenia, el Eje Cafetero u otras ciudades. En Manizales también se ofrece consulta presencial."
      canonicalPath="/psicoterapia-online"
      areaServed="Colombia"
      areaServedType="Country"
      showOnlineCities
      highlights={[
        "Atención virtual desde cualquier ciudad de Colombia",
        "Ansiedad, depresión, estrés y burnout",
        "ACT y terapias contextuales",
        "Consulta presencial en Manizales",
      ]}
      sections={[
        {
          heading: "¿Cómo funciona una consulta con un psicólogo online?",
          paragraphs: [
            "La psicoterapia online se realiza por videollamada, en un espacio privado elegido por la persona consultante. No necesitas desplazarte a Manizales para solicitar información o valorar el inicio de un proceso virtual.",
            "Antes de comenzar puedes consultar la disponibilidad, el valor de la sesión y las condiciones de atención. En el primer acercamiento se revisa el motivo de consulta y si la modalidad a distancia es apropiada para tus necesidades. Los objetivos del proceso se construyen a partir de esa valoración individual.",
          ],
        },
        {
          heading: "¿En qué situaciones puedes buscar psicoterapia virtual?",
          paragraphs: [
            "No es necesario llegar con un diagnóstico ni tener una explicación completa de lo que ocurre. La conversación inicial permite explorar tus dificultades, el contexto en el que aparecen y los cambios que deseas trabajar.",
            "Entre los motivos de consulta que pueden abordarse están:",
          ],
          bullets: [
            "Ansiedad, preocupación persistente y dificultades para manejar situaciones de incertidumbre.",
            "Depresión, desánimo y pérdida de interés por actividades importantes.",
            "Estrés laboral, sobrecarga cotidiana y agotamiento o síndrome de burnout.",
            "Dificultades de regulación emocional, cambios vitales y decisiones significativas.",
          ],
        },
        {
          heading: "¿Qué enfoque utiliza Jefferson Bastidas en psicoterapia?",
          paragraphs: [
            "Jefferson trabaja desde las terapias contextuales, incluyendo la Terapia de Aceptación y Compromiso (ACT) y recursos de la Terapia Dialéctico Conductual (DBT). El proceso busca comprender cómo se relacionan tus pensamientos, emociones, acciones y circunstancias, sin aplicar una respuesta idéntica a todas las personas.",
            "ACT permite explorar la relación con las experiencias difíciles, la flexibilidad psicológica y las acciones orientadas hacia lo que cada persona considera valioso. Las herramientas de DBT pueden incorporarse cuando resulta pertinente trabajar habilidades de regulación emocional y tolerancia al malestar. La elección de estrategias depende de la evaluación clínica.",
          ],
        },
        {
          heading: "Psicólogo virtual en Bogotá, Medellín, Pereira, Armenia y otras ciudades",
          paragraphs: [
            "El servicio de psicoterapia online está dirigido a personas adultas que se encuentran en distintas ciudades de Colombia. Si buscas un psicólogo virtual en Bogotá, Medellín, Armenia o Pereira, puedes informarte sobre el mismo proceso de acompañamiento por videollamada.",
            "La ubicación no cambia el enfoque clínico ni obliga a crear tratamientos distintos para cada ciudad. La atención para estas localidades es exclusivamente virtual: Jefferson no anuncia consultorios presenciales en Bogotá, Medellín, Pereira ni Armenia. La disponibilidad y la pertinencia de cada consulta se confirman antes de agendar.",
          ],
        },
        {
          heading: "Psicoterapia online en el Eje Cafetero: Caldas, Risaralda y Quindío",
          paragraphs: [
            "Jefferson ofrece psicoterapia online para adultos del Eje Cafetero, incluidas personas que viven en Pereira, Armenia, Manizales y otros municipios de Caldas, Risaralda y Quindío. La videollamada permite solicitar acompañamiento sin desplazamientos intermunicipales.",
            "El vínculo con esta región forma parte de la identidad profesional del sitio, pero cada proceso se orienta por la historia particular de quien consulta. Vivir en una ciudad u otra no determina automáticamente el motivo de consulta ni las necesidades terapéuticas.",
          ],
        },
        {
          heading: "Psicólogo en Manizales: atención presencial y online",
          paragraphs: [
            "Si te encuentras en Manizales, también puedes consultar por la atención psicológica presencial. Esta es la única ciudad en la que el sitio anuncia consultorio físico; para el resto de Colombia se ofrece la modalidad virtual.",
            "Si buscas psicólogo en Manizales, la página principal del sitio contiene la información sobre la consulta local. Si prefieres conectarte por videollamada, puedes preguntar por la modalidad online y valorar cuál opción es pertinente para ti.",
          ],
        },
        {
          heading: "Psicoterapia en español para personas del Eje Cafetero que emigraron",
          paragraphs: [
            "Quienes han emigrado desde el Eje Cafetero pueden atravesar cambios en sus relaciones, rutinas, sentido de pertenencia y adaptación. Para algunas personas, hablar en español con un profesional familiarizado con su contexto cultural es un aspecto importante al buscar acompañamiento.",
            "Si resides fuera de Colombia, puedes consultar si es posible recibir atención virtual en tu caso. Antes de iniciar es necesario revisar las condiciones profesionales y normativas aplicables según el país en el que te encuentres; la disponibilidad internacional no se presume.",
          ],
        },
        {
          heading: "¿Qué necesitas para una sesión de terapia online?",
          paragraphs: [
            "Necesitas un dispositivo con cámara y micrófono, conexión estable a internet y un lugar privado en el que puedas conversar sin interrupciones. Las condiciones de confidencialidad, el manejo de información y los límites de la atención se aclaran antes de comenzar.",
            "No todas las situaciones clínicas son adecuadas para una modalidad exclusivamente virtual. La pertinencia del servicio se evalúa de forma individual y, cuando corresponda, se orienta sobre otras alternativas de atención.",
          ],
        },
        {
          heading: "¿Cuánto cuesta la psicoterapia online y cómo puedo comenzar?",
          paragraphs: [
            "Puedes escribir para confirmar la tarifa vigente, la duración de las sesiones, los horarios disponibles y cómo se realiza el primer encuentro. No es necesario comprometerte a iniciar un proceso para solicitar esta información.",
            "Si deseas recibir orientación inicial, utiliza el botón «Solicitar información». También puedes consultar el perfil profesional de Jefferson y los contenidos sobre motivos de consulta antes de tomar una decisión.",
          ],
        },
      ]}
      relatedLinks={[
        {
          href: "/motivos-de-consulta",
          label: "Motivos de consulta",
          description: "Información sobre ansiedad, depresión, estrés y burnout, entre otras razones para buscar acompañamiento.",
        },
        {
          href: "/terapias-contextuales-act",
          label: "Terapias contextuales y ACT",
          description: "Conoce el enfoque clínico que orienta el trabajo terapéutico.",
        },
        {
          href: "/terapia-dialectico-conductual-dbt",
          label: "Recursos de terapia DBT",
          description: "Explora las habilidades y herramientas de regulación emocional vinculadas a DBT.",
        },
        {
          href: "/sobre-jefferson-bastidas",
          label: "Sobre Jefferson Bastidas",
          description: "Consulta su perfil, formación y trayectoria profesional.",
        },
      ]}
    />
  );
}
