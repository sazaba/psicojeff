export type CityKey = "pereira" | "armenia" | "medellin" | "bogota";

export interface CityLandingConfig {
  key: CityKey;
  name: string;
  department: string;
  path: string;
  description: string;
  heroSubtitle: string;
  heroLead: string;
  contextualIntro: string;
  contextTitle: string;
  contextLead: string;
  situations: { title: string; description: string }[];
  localQuestions: { question: string; answer: string }[];
  finalLead: string;
}

export const cityLandings: Record<CityKey, CityLandingConfig> = {
  pereira: {
    key: "pereira",
    name: "Pereira",
    department: "Risaralda",
    path: "/psicologo-online-pereira",
    description: "Psicólogo online para adultos en Pereira, Risaralda. Psicoterapia por videollamada para ansiedad, depresión, estrés y burnout con Jefferson Bastidas Mejía.",
    heroSubtitle: "Psicoterapia para adultos, desde donde estés en Pereira.",
    heroLead: "Si vives en Pereira y las preocupaciones, el desánimo o el agotamiento están ocupando demasiado espacio en tu día, puedes explorar un proceso de psicoterapia por videollamada con Jefferson Bastidas Mejía sin trasladarte a Manizales.",
    contextualIntro: "Pereira es parte del Eje Cafetero, donde muchas personas combinan responsabilidades familiares, estudios y trabajo. La atención virtual permite consultar desde un espacio privado sin añadir un desplazamiento intermunicipal.",
    contextTitle: "Psicoterapia online para la vida cotidiana en Pereira",
    contextLead: "Un proceso terapéutico puede integrarse a tu rutina sin tener que convertir cada sesión en un viaje a otra ciudad.",
    situations: [
      { title: "Sin viajar a Manizales", description: "La atención a residentes de Pereira se realiza online. El consultorio presencial de Jefferson está en Manizales, pero no necesitas desplazarte allí para explorar la modalidad virtual." },
      { title: "Un espacio compatible con tu rutina", description: "Puedes preguntar por horarios disponibles y preparar un lugar privado desde Pereira para conectarte con tranquilidad." },
      { title: "Una mirada que conoce el Eje Cafetero", description: "El acompañamiento parte de tu propia historia y contexto, sin presuponer que todos los habitantes de la región viven las mismas situaciones." },
    ],
    localQuestions: [
      { question: "¿Tengo que desplazarme de Pereira a Manizales?", answer: "No. Para residentes de Pereira el servicio que se ofrece es exclusivamente online, mediante videollamadas acordadas previamente." },
      { question: "¿Atiendes también a personas de otros municipios de Risaralda?", answer: "La modalidad virtual permite consultar desde distintos lugares. Puedes comunicarte para confirmar la pertinencia del acompañamiento y las condiciones de conexión desde tu ubicación." },
    ],
    finalLead: "Si estás en Pereira, puedes solicitar información sobre la psicoterapia online, consultar la disponibilidad y decidir con calma cuál es tu siguiente paso.",
  },
  armenia: {
    key: "armenia",
    name: "Armenia",
    department: "Quindío",
    path: "/psicologo-online-armenia",
    description: "Psicoterapia online para adultos en Armenia, Quindío. Atención por videollamada con Jefferson Bastidas para ansiedad, desánimo, estrés y burnout.",
    heroSubtitle: "Un espacio de psicoterapia online, sin salir de Armenia.",
    heroLead: "Si resides en Armenia y estás atravesando ansiedad, desánimo, estrés o desgaste emocional, puedes solicitar psicoterapia online para adultos con Jefferson Bastidas Mejía, desde un lugar privado en el Quindío.",
    contextualIntro: "Para algunas personas de Armenia y del Quindío, acceder a una consulta presencial fuera de su municipio supone reorganizar transportes, horarios o responsabilidades. La videollamada puede facilitar el primer contacto sin ese desplazamiento.",
    contextTitle: "Atención psicológica virtual desde Armenia y el Quindío",
    contextLead: "La distancia entre municipios no tiene por qué ser un obstáculo para informarte sobre un proceso terapéutico.",
    situations: [
      { title: "Desde la capital del Quindío", description: "Puedes conversar desde un entorno privado en Armenia, sin trasladarte a Manizales para conocer el enfoque y los pasos de la modalidad online." },
      { title: "Si trabajas, estudias o cuidas de alguien", description: "Preguntar por disponibilidad y coordinar una sesión virtual puede ayudarte a organizar el acompañamiento dentro de tu propia rutina." },
      { title: "Un proceso ajustado a tu situación", description: "El trabajo no depende de vivir en una ciudad determinada, sino de comprender lo que estás atravesando y valorar qué modalidad de atención es adecuada." },
    ],
    localQuestions: [
      { question: "¿La atención para Armenia es presencial?", answer: "No. La oferta para Armenia es exclusivamente por videollamada. La única consulta presencial anunciada en la web se encuentra en Manizales." },
      { question: "¿Puedo conectarme desde otro municipio del Quindío?", answer: "Puedes consultar por la modalidad online desde el Quindío. Antes de comenzar, se revisan las condiciones de conexión y la pertinencia del servicio para tu caso." },
    ],
    finalLead: "Si vives en Armenia o en el Quindío, puedes escribir para saber cómo se realiza la consulta psicológica online y resolver dudas antes de agendar.",
  },
  medellin: {
    key: "medellin",
    name: "Medellín",
    department: "Antioquia",
    path: "/psicologo-online-medellin",
    description: "Psicólogo online para adultos en Medellín. Psicoterapia por videollamada para ansiedad, depresión, estrés y agotamiento con Jefferson Bastidas Mejía.",
    heroSubtitle: "Psicoterapia online para adultos en Medellín.",
    heroLead: "Si vives en Medellín y buscas un espacio para abordar la ansiedad, el estado de ánimo, el estrés o el burnout, puedes conocer la atención psicológica virtual con Jefferson Bastidas Mejía, sin necesidad de desplazarte a otra ciudad.",
    contextualIntro: "Una agenda entre trabajo, estudios, familia y desplazamientos puede dificultar reservar tiempo para uno mismo. Para residentes de Medellín, la psicoterapia online ofrece una alternativa de consulta desde un lugar privado con conexión a internet.",
    contextTitle: "Un proceso de psicoterapia que puedes iniciar desde Medellín",
    contextLead: "Buscar apoyo psicológico no debería implicar añadir más traslados a tu semana.",
    situations: [
      { title: "Cuando la agenda está llena", description: "La modalidad virtual permite preguntar por horarios y coordinar encuentros sin sumar el viaje a un consultorio de otra ciudad." },
      { title: "Cuando el trabajo sigue después de la jornada", description: "El estrés y el burnout pueden abordarse como experiencias que afectan varias áreas de la vida, siempre desde una valoración individual." },
      { title: "Cuando buscas acompañamiento fuera de tu círculo", description: "Puedes conocer el enfoque de un psicólogo que atiende online sin suponer que tener un consultorio en Medellín sea requisito para recibir atención virtual." },
    ],
    localQuestions: [
      { question: "¿Jefferson tiene consultorio físico en Medellín?", answer: "No. La atención dirigida a residentes de Medellín es exclusivamente online. El consultorio presencial anunciado en esta web se encuentra en Manizales." },
      { question: "¿Puedo acceder a psicoterapia virtual desde el Valle de Aburrá?", answer: "La consulta es por videollamada. Puedes solicitar información desde Medellín u otras localidades y confirmar la pertinencia y disponibilidad del servicio antes de agendar." },
    ],
    finalLead: "Si vives en Medellín y necesitas aclarar dudas sobre psicoterapia online, puedes escribir y consultar la disponibilidad sin compromiso de agendar.",
  },
  bogota: {
    key: "bogota",
    name: "Bogotá",
    department: "Bogotá D. C.",
    path: "/psicologo-online-bogota",
    description: "Psicoterapia online para adultos en Bogotá. Sesiones por videollamada con Jefferson Bastidas para ansiedad, depresión, estrés laboral y burnout.",
    heroSubtitle: "Atención psicológica online para adultos en Bogotá.",
    heroLead: "Si tu día en Bogotá está marcado por preocupaciones constantes, desánimo, estrés o agotamiento, puedes explorar la psicoterapia online con Jefferson Bastidas Mejía desde un espacio privado, sin depender de un traslado a un consultorio.",
    contextualIntro: "Para algunas personas en Bogotá, los trayectos, las jornadas laborales y las responsabilidades personales hacen difícil encontrar tiempo para una consulta presencial. La modalidad online puede facilitar el acceso a una conversación profesional, con condiciones acordadas previamente.",
    contextTitle: "Psicoterapia virtual para organizar un espacio propio en Bogotá",
    contextLead: "Entre responsabilidades y desplazamientos, reservar un momento para tu bienestar puede requerir una alternativa más flexible.",
    situations: [
      { title: "Menos tiempo en traslados", description: "Al conectarte desde Bogotá por videollamada, no necesitas viajar a Manizales ni agregar un desplazamiento a tus actividades." },
      { title: "Para hablar del estrés que no termina", description: "Puedes explorar cómo la sobrecarga, la preocupación y las exigencias laborales se relacionan con tus decisiones y bienestar cotidiano." },
      { title: "Con privacidad y objetivos claros", description: "La atención parte de valorar tu situación y acordar condiciones y objetivos del proceso, no de aplicar soluciones idénticas a todos." },
    ],
    localQuestions: [
      { question: "¿La terapia para residentes de Bogotá es completamente online?", answer: "Sí. La atención ofrecida para Bogotá se realiza mediante videollamada. No se anuncia una sede de atención presencial en la ciudad." },
      { question: "¿Qué necesito para recibir psicoterapia desde Bogotá?", answer: "Necesitas conexión estable, un dispositivo con cámara y micrófono y un espacio donde puedas hablar con privacidad. Puedes consultar horarios y detalles antes de agendar." },
    ],
    finalLead: "Desde Bogotá puedes consultar cómo funciona el acompañamiento online, confirmar la disponibilidad y decidir si deseas empezar un proceso.",
  },
};

export const onlineCityOrder: CityKey[] = ["pereira", "armenia", "medellin", "bogota"];
