import SeoPillarPage from "@/app/components/seo/SeoPillarPage";
import { buildSeoMetadata } from "@/lib/seo/metadata";

export const metadata = buildSeoMetadata({
  title: "Psicólogo para insomnio en Manizales",
  description:
    "Acompañamiento psicológico en Manizales para adultos con dificultades de sueño asociadas a preocupación, activación mental o estrés persistente.",
  path: "/insomnio-manizales",
});

export default function InsomnioManizalesPage() {
  return (
    <SeoPillarPage
      eyebrow="Sueño y bienestar emocional"
      title="Psicólogo para insomnio en Manizales"
      lead="Un espacio de psicoterapia para adultos que tienen dificultades para conciliar o mantener el sueño cuando la preocupación, el estrés o la activación mental se vuelven parte del problema."
      canonicalPath="/insomnio-manizales"
      highlights={["Manizales", "Adultos", "Presencial y online", "Bienestar emocional"]}
      sections={[
        {
          heading: "Cuando dormir se convierte en una lucha",
          paragraphs: [
            "Las dificultades de sueño no siempre dependen de una sola causa. En algunas personas, la preocupación por no dormir, la anticipación del día siguiente, el estrés sostenido o ciertos hábitos terminan creando un ciclo en el que el propio intento de controlar el sueño aumenta la activación.",
            "La psicoterapia puede ayudar a comprender esos patrones psicológicos y conductuales, especialmente cuando el mal descanso aparece junto con ansiedad, tensión laboral o dificultades para desconectarse mentalmente.",
          ],
        },
        {
          heading: "¿Qué puede trabajarse en el proceso?",
          paragraphs: [
            "El enfoque se centra en identificar la relación entre pensamientos, emociones, conductas y contexto, sin prometer que toda dificultad de sueño tenga una causa exclusivamente psicológica.",
          ],
          bullets: [
            "Preocupación anticipatoria relacionada con el momento de dormir.",
            "Rutinas y conductas que pueden mantener la activación nocturna.",
            "Estrés, rumiación y dificultad para cerrar la jornada mentalmente.",
            "Habilidades para relacionarse de otra manera con pensamientos y sensaciones incómodas.",
          ],
        },
        {
          heading: "Cuándo conviene considerar otras evaluaciones",
          paragraphs: [
            "Si existen síntomas físicos importantes, sospecha de un trastorno respiratorio del sueño, uso de medicamentos o cualquier otra condición médica relevante, la valoración psicológica no sustituye la evaluación por el profesional de salud correspondiente.",
            "La psicoterapia puede formar parte de un abordaje más amplio cuando los factores emocionales y conductuales también están afectando el descanso.",
          ],
        },
      ]}
      relatedLinks={[
        {
          href: "/ansiedad-manizales",
          label: "Ansiedad en Manizales",
          description: "Explora cómo se trabaja la preocupación y la activación emocional persistente.",
        },
        {
          href: "/estres-burnout-manizales",
          label: "Estrés laboral y burnout",
          description: "Conoce el abordaje del agotamiento y la sobrecarga vinculada al trabajo.",
        },
        {
          href: "/psicoterapia-online",
          label: "Psicoterapia online",
          description: "Revisa la modalidad de atención para quienes necesitan mayor flexibilidad.",
        },
      ]}
    />
  );
}
