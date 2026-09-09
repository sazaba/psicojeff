import SeoPillarPage from "@/app/components/seo/SeoPillarPage";
import { buildSeoMetadata } from "@/lib/seo/metadata";

export const metadata = buildSeoMetadata({
  title: "Psicólogo para ansiedad en Manizales",
  description:
    "Acompañamiento psicológico en Manizales para adultos que viven preocupación intensa, alerta constante o dificultades para relacionarse con la ansiedad.",
  path: "/ansiedad-manizales",
});

export default function AnsiedadManizalesPage() {
  return (
    <SeoPillarPage
      eyebrow="Acompañamiento psicológico"
      title="Psicólogo para ansiedad en Manizales"
      lead="Un espacio de psicoterapia para adultos que sienten que la preocupación, la anticipación o la alerta constante están ocupando demasiado espacio en su vida diaria."
      canonicalPath="/ansiedad-manizales"
      highlights={["Manizales", "Adultos", "Presencial y online", "Terapias contextuales"]}
      sections={[
        {
          heading: "Cuando la ansiedad empieza a dirigir tus decisiones",
          paragraphs: [
            "La ansiedad puede sentirse como preocupación permanente, necesidad de anticiparlo todo, tensión, evitación o dificultad para desconectarse de escenarios que todavía no han ocurrido. En terapia, el punto de partida no es pelear con cada pensamiento, sino comprender qué función está cumpliendo ese patrón y cómo está afectando la vida cotidiana.",
            "El proceso busca que la persona pueda responder de manera más flexible a pensamientos y emociones difíciles, sin que estos determinen automáticamente lo que hace o deja de hacer.",
          ],
        },
        {
          heading: "¿Qué se trabaja en psicoterapia?",
          paragraphs: [
            "Desde las terapias contextuales se observa la relación entre pensamientos, emociones, conductas y contexto. Esto permite identificar ciclos que mantienen la preocupación o la evitación y construir respuestas más útiles para la vida que la persona quiere desarrollar.",
          ],
          bullets: [
            "Reconocer patrones de evitación y reacción automática.",
            "Desarrollar mayor tolerancia a la incertidumbre y al malestar emocional.",
            "Fortalecer habilidades de regulación emocional y presencia.",
            "Conectar decisiones concretas con valores y objetivos personales.",
          ],
        },
        {
          heading: "Atención en Manizales y modalidad online",
          paragraphs: [
            "Jefferson Bastidas atiende presencialmente en el Centro Médico Santa Elena, Avenida Paralela #49-46, Manizales. También existe modalidad online para quienes necesitan mayor flexibilidad.",
            "Las sesiones tienen una duración aproximada de 60 a 90 minutos, de acuerdo con la información de atención publicada en el sitio.",
          ],
        },
      ]}
      relatedLinks={[
        {
          href: "/terapias-contextuales-act",
          label: "Terapias contextuales y ACT",
          description: "Conoce el enfoque utilizado para trabajar la relación con pensamientos y emociones.",
        },
        {
          href: "/insomnio-manizales",
          label: "Insomnio y bienestar emocional",
          description: "Explora la relación entre descanso, activación mental y patrones psicológicos.",
        },
        {
          href: "/psicoterapia-online",
          label: "Psicoterapia online",
          description: "Una alternativa para continuar el proceso desde fuera de Manizales.",
        },
      ]}
    />
  );
}
