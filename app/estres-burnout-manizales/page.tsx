import SeoPillarPage from "@/app/components/seo/SeoPillarPage";
import { buildSeoMetadata } from "@/lib/seo/metadata";

export const metadata = buildSeoMetadata({
  title: "Estrés laboral y burnout en Manizales",
  description:
    "Acompañamiento psicológico en Manizales para adultos que viven agotamiento, sobrecarga, tensión laboral o señales compatibles con burnout.",
  path: "/estres-burnout-manizales",
});

export default function EstresBurnoutManizalesPage() {
  return (
    <SeoPillarPage
      eyebrow="Salud mental y trabajo"
      title="Estrés laboral y burnout en Manizales"
      lead="Acompañamiento psicológico para adultos que sienten que las exigencias del trabajo, la sobrecarga o el agotamiento están interfiriendo con su bienestar y su capacidad de sostener una vida equilibrada."
      canonicalPath="/estres-burnout-manizales"
      highlights={["Manizales", "Adultos", "Salud mental y trabajo", "Especialista en Salud Ocupacional"]}
      sections={[
        {
          heading: "Cuando el trabajo consume más recursos de los que devuelve",
          paragraphs: [
            "El estrés laboral puede expresarse como cansancio persistente, irritabilidad, dificultad para desconectarse, sensación de exigencia constante o pérdida de sentido frente a lo que antes era manejable. Cuando estos patrones se mantienen, pueden afectar el sueño, las relaciones y la capacidad de tomar decisiones con claridad.",
            "La psicoterapia permite observar no solo la cantidad de trabajo, sino también la manera en que la persona se relaciona con las demandas, los límites, la autoexigencia y las expectativas que rodean su desempeño.",
          ],
        },
        {
          heading: "Un enfoque que integra contexto laboral y salud mental",
          paragraphs: [
            "Jefferson Bastidas es psicólogo y Especialista en Salud Ocupacional. Esa formación permite incorporar al proceso una lectura del entorno laboral sin reducir el problema a una explicación exclusivamente individual.",
            "El trabajo clínico se apoya además en terapias contextuales de tercera generación para identificar patrones rígidos y construir respuestas más alineadas con los valores y prioridades reales de la persona.",
          ],
          bullets: [
            "Identificación de patrones de sobrecarga y autoexigencia.",
            "Clarificación de límites, prioridades y valores personales.",
            "Herramientas para responder al malestar sin actuar únicamente desde la urgencia.",
            "Revisión de hábitos y decisiones que afectan la recuperación fuera del trabajo.",
          ],
        },
        {
          heading: "Atención presencial y online",
          paragraphs: [
            "El proceso puede realizarse de forma presencial en Manizales o mediante psicoterapia online. La modalidad permite adaptar la atención a personas con jornadas laborales exigentes, desplazamientos frecuentes o residencia fuera de la ciudad.",
          ],
        },
      ]}
      relatedLinks={[
        {
          href: "/ansiedad-manizales",
          label: "Ansiedad en Manizales",
          description: "Explora el acompañamiento para preocupación, alerta constante y desborde emocional.",
        },
        {
          href: "/insomnio-manizales",
          label: "Insomnio y bienestar emocional",
          description: "Conoce cómo pueden abordarse factores psicológicos asociados al descanso.",
        },
        {
          href: "/sobre-jefferson-bastidas",
          label: "Perfil profesional",
          description: "Revisa la formación en psicología y salud ocupacional de Jefferson Bastidas.",
        },
      ]}
    />
  );
}
