import SeoPillarPage from "@/app/components/seo/SeoPillarPage";
import { buildSeoMetadata } from "@/lib/seo/metadata";

export const metadata = buildSeoMetadata({
  title: "Psicólogo para depresión en Manizales",
  description:
    "Acompañamiento psicológico en Manizales y online para adultos con ánimo bajo persistente, pérdida de interés, vacío o desconexión.",
  path: "/depresion-manizales",
});

export default function DepresionManizalesPage() {
  return (
    <SeoPillarPage
      eyebrow="Acompañamiento psicológico"
      title="Psicólogo para depresión en Manizales"
      lead="Psicoterapia para adultos que atraviesan ánimo bajo persistente, pérdida de interés, sensación de vacío, desconexión o dificultades para sostener actividades cotidianas."
      canonicalPath="/depresion-manizales"
      highlights={["Manizales", "Adultos", "Presencial y online", "Terapias contextuales"]}
      sections={[
        {
          heading: "Cuando el ánimo bajo empieza a limitar la vida",
          paragraphs: [
            "La depresión puede expresarse de formas distintas. Algunas personas describen tristeza persistente; otras sienten más apatía, agotamiento, pérdida de interés, dificultad para iniciar actividades o una sensación de desconexión de aquello que antes era importante.",
            "El proceso terapéutico parte de comprender cómo estos patrones aparecen en la historia y el contexto de cada persona, sin reducir la experiencia a una única explicación.",
          ],
        },
        {
          heading: "¿Qué puede trabajarse en psicoterapia?",
          paragraphs: [
            "El trabajo puede orientarse a recuperar contacto con actividades significativas, revisar patrones de aislamiento o evitación y desarrollar una relación más flexible con pensamientos y emociones difíciles.",
          ],
          bullets: [
            "Reconocer ciclos de aislamiento, inactividad y pérdida de refuerzo.",
            "Trabajar rumiación, autocrítica y patrones de evitación.",
            "Reconectar acciones concretas con valores y áreas importantes de la vida.",
            "Fortalecer habilidades de regulación emocional y autocuidado.",
          ],
        },
        {
          heading: "Valoración individual y seguridad",
          paragraphs: [
            "No toda tristeza constituye depresión y no todos los cuadros requieren el mismo tipo de intervención. Una valoración individual permite revisar intensidad, duración, funcionamiento, factores médicos y otras condiciones que pueden estar influyendo.",
            "Si aparecen pensamientos de hacerse daño o de no querer vivir, se requiere atención inmediata mediante servicios de emergencia o redes de apoyo disponibles en el lugar donde se encuentre la persona.",
          ],
        },
      ]}
      relatedLinks={[
        {
          href: "/motivos-de-consulta",
          label: "Motivos de consulta",
          description: "Revisa otras áreas de acompañamiento psicológico.",
        },
        {
          href: "/ansiedad-manizales",
          label: "Ansiedad en Manizales",
          description: "Explora el acompañamiento para preocupación, alerta y evitación.",
        },
        {
          href: "/psicoterapia-online",
          label: "Psicoterapia online",
          description: "Conoce la modalidad de atención a distancia.",
        },
      ]}
    />
  );
}
