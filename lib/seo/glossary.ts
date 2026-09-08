export interface GlossaryPillarLink {
  href: string;
  label: string;
}

export interface GlossaryTerm {
  slug: string;
  term: string;
  category: string;
  shortDefinition: string;
  aliases: string[];
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  relatedSlugs: string[];
  pillarLinks: GlossaryPillarLink[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "terapia-de-aceptacion-y-compromiso-act",
    term: "Terapia de Aceptación y Compromiso (ACT)",
    category: "Terapias contextuales",
    shortDefinition:
      "Enfoque psicoterapéutico contextual orientado a aumentar la flexibilidad psicológica y favorecer acciones coherentes con los valores personales.",
    aliases: ["ACT", "Terapia de Aceptación y Compromiso", "acceptance and commitment therapy"],
    sections: [
      {
        heading: "¿Qué es ACT?",
        paragraphs: [
          "La Terapia de Aceptación y Compromiso, conocida como ACT por sus siglas en inglés, es un enfoque de las terapias contextuales. Su objetivo no es eliminar a toda costa pensamientos o emociones difíciles, sino ayudar a que la persona pueda relacionarse con ellos de una manera más flexible mientras avanza hacia lo que considera importante.",
          "En ACT se trabaja con procesos como aceptación, defusión cognitiva, atención al momento presente, perspectiva del yo, clarificación de valores y acción comprometida. Estos procesos se entienden como habilidades que pueden entrenarse y combinarse según las necesidades de cada persona.",
        ],
      },
      {
        heading: "¿Qué busca cambiar?",
        paragraphs: [
          "ACT pone el foco en la relación que una persona tiene con su experiencia interna. Cuando la lucha constante contra pensamientos, emociones o sensaciones termina reduciendo la vida, el trabajo terapéutico puede orientarse a ampliar el repertorio de respuestas disponibles.",
          "La meta práctica es que la conducta no quede dirigida únicamente por el malestar del momento. En su lugar, se busca que las decisiones también puedan estar guiadas por valores, contexto y consecuencias a largo plazo.",
        ],
      },
      {
        heading: "ACT no significa resignarse",
        paragraphs: [
          "Aceptación, dentro de ACT, no equivale a aprobar situaciones dañinas ni a abandonar la posibilidad de cambio. Se refiere a disminuir luchas internas poco útiles cuando estas impiden actuar con eficacia.",
          "La intervención siempre debe adaptarse al caso concreto. En problemas de salud mental, crisis o síntomas persistentes, una explicación educativa no sustituye una valoración profesional individual.",
        ],
      },
    ],
    relatedSlugs: ["flexibilidad-psicologica", "aceptacion-psicologica", "defusion-cognitiva", "valores"],
    pillarLinks: [{ href: "/terapias-contextuales-act", label: "Terapias contextuales y ACT" }],
  },
  {
    slug: "terapias-contextuales",
    term: "Terapias contextuales",
    category: "Terapias contextuales",
    shortDefinition:
      "Familia de enfoques psicológicos que analizan la conducta y la experiencia teniendo en cuenta la función que cumplen dentro de un contexto específico.",
    aliases: ["terapias contextuales", "psicoterapia contextual", "enfoque contextual"],
    sections: [
      {
        heading: "¿Qué significa enfoque contextual?",
        paragraphs: [
          "Las terapias contextuales parten de la idea de que una conducta, un pensamiento o una emoción no puede entenderse solo por su forma. También importa cuándo ocurre, qué función cumple, qué la precede y qué consecuencias tiene en la vida de la persona.",
          "Por eso, dos experiencias aparentemente iguales pueden requerir intervenciones distintas. El análisis se centra en cómo los patrones se mantienen y en qué alternativas pueden ampliar la capacidad de respuesta.",
        ],
      },
      {
        heading: "¿Qué enfoques forman parte de esta familia?",
        paragraphs: [
          "Dentro de esta familia suelen ubicarse modelos como ACT, DBT y otras intervenciones contemporáneas que integran procesos de aceptación, atención plena, regulación emocional y cambio conductual.",
          "Aunque comparten ciertos principios, no son técnicas idénticas ni deben aplicarse de la misma manera en todas las personas. La formulación clínica orienta qué herramientas son pertinentes.",
        ],
      },
      {
        heading: "Importancia del contexto",
        paragraphs: [
          "El contexto incluye factores personales, relacionales, laborales, culturales y situacionales. Comprenderlos ayuda a evitar explicaciones demasiado simples y permite conectar el trabajo terapéutico con la vida cotidiana.",
          "Una intervención contextual busca que los cambios sean funcionales y sostenibles para esa persona concreta, no que se limite a cumplir una regla genérica.",
        ],
      },
    ],
    relatedSlugs: ["terapia-de-aceptacion-y-compromiso-act", "terapias-de-tercera-generacion", "flexibilidad-psicologica", "terapia-dialectico-conductual-dbt"],
    pillarLinks: [{ href: "/terapias-contextuales-act", label: "Terapias contextuales y ACT" }],
  },
  {
    slug: "terapias-de-tercera-generacion",
    term: "Terapias de tercera generación",
    category: "Terapias contextuales",
    shortDefinition:
      "Denominación amplia utilizada para enfoques contemporáneos que incorporan procesos como aceptación, mindfulness, valores y regulación emocional.",
    aliases: ["terapias de tercera generación", "tercera ola", "third wave"],
    sections: [
      {
        heading: "¿A qué se refiere el término?",
        paragraphs: [
          "La expresión terapias de tercera generación se utiliza para agrupar distintos desarrollos contemporáneos de la psicoterapia conductual y cognitivo-conductual. No describe una única terapia, sino una familia de modelos con énfasis en procesos psicológicos y contexto.",
          "Entre sus temas frecuentes aparecen la aceptación de experiencias internas, la atención plena, la relación con los pensamientos, la regulación emocional y la orientación de la conducta hacia valores personales.",
        ],
      },
      {
        heading: "No es una etiqueta de superioridad",
        paragraphs: [
          "Hablar de primera, segunda o tercera generación describe una evolución histórica de enfoques y preguntas clínicas. No significa automáticamente que una intervención más reciente sea adecuada para todos los problemas o todas las personas.",
          "La elección de un enfoque debe depender de la situación, los objetivos terapéuticos y una valoración profesional, no solo de la popularidad de una etiqueta.",
        ],
      },
      {
        heading: "Relación con ACT y DBT",
        paragraphs: [
          "ACT y DBT suelen mencionarse dentro de este grupo porque incorporan estrategias de aceptación y cambio, aunque tienen modelos y procedimientos propios.",
          "Conocer esta diferencia ayuda a entender que términos como mindfulness, aceptación o regulación emocional pueden aparecer en varios enfoques sin significar exactamente lo mismo en todos ellos.",
        ],
      },
    ],
    relatedSlugs: ["terapias-contextuales", "terapia-de-aceptacion-y-compromiso-act", "terapia-dialectico-conductual-dbt", "mindfulness"],
    pillarLinks: [{ href: "/terapias-contextuales-act", label: "Terapias contextuales y ACT" }],
  },
  {
    slug: "flexibilidad-psicologica",
    term: "Flexibilidad psicológica",
    category: "Procesos psicológicos",
    shortDefinition:
      "Capacidad de adaptarse al contexto, permanecer en contacto con la experiencia presente y actuar de acuerdo con valores incluso cuando hay malestar.",
    aliases: ["flexibilidad psicológica", "psychological flexibility"],
    sections: [
      {
        heading: "¿Qué es la flexibilidad psicológica?",
        paragraphs: [
          "La flexibilidad psicológica describe la capacidad de responder de manera adaptable a lo que ocurre, en lugar de quedar atrapado en una única forma de pensar, sentir o actuar. Incluye reconocer la experiencia interna sin que esta determine automáticamente la conducta.",
          "En ACT se considera un proceso central porque permite sostener acciones significativas incluso en presencia de emociones intensas, incertidumbre o pensamientos difíciles.",
        ],
      },
      {
        heading: "Flexibilidad no significa estar bien todo el tiempo",
        paragraphs: [
          "Ser flexible psicológicamente no implica sentirse tranquilo, optimista o motivado de manera permanente. Una persona puede experimentar miedo, tristeza o frustración y, aun así, elegir conductas coherentes con lo que valora.",
          "La flexibilidad se observa en la variedad y pertinencia de las respuestas, no en la ausencia de malestar.",
        ],
      },
      {
        heading: "¿Cómo puede entrenarse?",
        paragraphs: [
          "Puede trabajarse mediante habilidades de atención al presente, aceptación, defusión, clarificación de valores y planificación de acciones concretas. La práctica se adapta a las dificultades y contextos reales de la persona.",
          "Cuando el malestar interfiere de forma importante con el sueño, el trabajo, las relaciones o el autocuidado, conviene valorar el caso de manera individual.",
        ],
      },
    ],
    relatedSlugs: ["terapia-de-aceptacion-y-compromiso-act", "defusion-cognitiva", "aceptacion-psicologica", "valores"],
    pillarLinks: [{ href: "/terapias-contextuales-act", label: "Terapias contextuales y ACT" }],
  },
  {
    slug: "aceptacion-psicologica",
    term: "Aceptación psicológica",
    category: "Procesos psicológicos",
    shortDefinition:
      "Disposición a permitir la presencia de pensamientos, emociones y sensaciones sin convertir su eliminación inmediata en la condición para poder actuar.",
    aliases: ["aceptación psicológica", "aceptación emocional", "aceptacion psicologica"],
    sections: [
      {
        heading: "¿Qué significa aceptar una experiencia interna?",
        paragraphs: [
          "La aceptación psicológica consiste en abrir espacio a una experiencia interna tal como aparece, especialmente cuando intentar controlarla de forma rígida está aumentando el problema. No exige que la experiencia guste ni que se considere deseable.",
          "En psicoterapia, la aceptación se trabaja como una alternativa a luchas internas repetitivas que consumen energía y reducen la capacidad de responder al entorno.",
        ],
      },
      {
        heading: "Aceptar no es tolerar cualquier situación externa",
        paragraphs: [
          "Aceptar una emoción no significa permanecer en una relación dañina, soportar abuso, dejar de poner límites o renunciar a modificar condiciones injustas. La aceptación psicológica se refiere principalmente a la relación con la experiencia interna.",
          "De hecho, reconocer con claridad lo que se siente puede facilitar decisiones más firmes y coherentes con los propios valores.",
        ],
      },
      {
        heading: "¿Cuándo puede ser útil?",
        paragraphs: [
          "Puede ser útil cuando la evitación o el control excesivo de emociones, recuerdos o sensaciones termina restringiendo actividades importantes. El objetivo es recuperar margen de acción, no forzar la exposición a situaciones para las que la persona no está preparada.",
          "La forma de trabajar aceptación debe ajustarse a la historia, seguridad y necesidades de cada caso.",
        ],
      },
    ],
    relatedSlugs: ["evitacion-experiencial", "flexibilidad-psicologica", "defusion-cognitiva", "terapia-de-aceptacion-y-compromiso-act"],
    pillarLinks: [{ href: "/terapias-contextuales-act", label: "Terapias contextuales y ACT" }],
  },
  {
    slug: "defusion-cognitiva",
    term: "Defusión cognitiva",
    category: "Procesos psicológicos",
    shortDefinition:
      "Proceso de observar los pensamientos como eventos mentales, reduciendo la tendencia a tratarlos automáticamente como hechos, órdenes o verdades absolutas.",
    aliases: ["defusión cognitiva", "defusion cognitiva", "cognitive defusion"],
    sections: [
      {
        heading: "¿Qué es la defusión cognitiva?",
        paragraphs: [
          "La defusión cognitiva es un proceso utilizado especialmente en ACT para cambiar la manera en que una persona se relaciona con sus pensamientos. En lugar de discutir si cada pensamiento es verdadero o falso, se aprende a reconocerlo como una actividad de la mente.",
          "Esta distancia funcional puede reducir el impacto automático de frases internas como “no puedo”, “todo saldrá mal” o “debo sentirme seguro antes de actuar”.",
        ],
      },
      {
        heading: "No se trata de dejar la mente en blanco",
        paragraphs: [
          "La defusión no busca detener el pensamiento ni reemplazar cada idea negativa por una positiva. Los pensamientos pueden seguir presentes; lo que cambia es el grado en que dirigen la conducta.",
          "Esto permite evaluar con más calma si actuar siguiendo un pensamiento ayuda o aleja de lo importante en ese momento.",
        ],
      },
      {
        heading: "¿Cómo se trabaja?",
        paragraphs: [
          "Puede entrenarse con ejercicios de observación, lenguaje, repetición, perspectiva y atención al presente. La técnica específica es menos importante que la función: crear espacio entre pensar algo y tener que obedecerlo.",
          "Cuando los pensamientos son persistentes, intrusivos o generan un deterioro marcado, es importante una valoración profesional para entender el contexto completo.",
        ],
      },
    ],
    relatedSlugs: ["terapia-de-aceptacion-y-compromiso-act", "flexibilidad-psicologica", "rumiacion", "mindfulness"],
    pillarLinks: [{ href: "/terapias-contextuales-act", label: "Terapias contextuales y ACT" }],
  },
  {
    slug: "evitacion-experiencial",
    term: "Evitación experiencial",
    category: "Procesos psicológicos",
    shortDefinition:
      "Patrón en el que una persona intenta evitar, suprimir o controlar experiencias internas difíciles incluso cuando ese esfuerzo termina limitando su vida.",
    aliases: ["evitación experiencial", "evitacion experiencial", "experiential avoidance"],
    sections: [
      {
        heading: "¿Qué es la evitación experiencial?",
        paragraphs: [
          "La evitación experiencial aparece cuando escapar de pensamientos, emociones, recuerdos o sensaciones se vuelve una prioridad tan intensa que empieza a organizar la vida. Evitar algo incómodo puede ser útil a corto plazo, pero puede convertirse en un problema si se generaliza.",
          "Por ejemplo, una persona puede dejar de participar en actividades importantes porque teme sentir ansiedad, vergüenza o incertidumbre. El alivio inmediato refuerza la evitación, aunque el costo a largo plazo aumente.",
        ],
      },
      {
        heading: "Evitar no siempre es malo",
        paragraphs: [
          "La evitación es una respuesta humana normal y en ocasiones protectora. El problema no es evitar en sí mismo, sino la rigidez y el costo que esa estrategia tiene en el contexto concreto.",
          "El análisis terapéutico busca distinguir cuándo alejarse protege y cuándo reduce progresivamente la autonomía o el contacto con actividades valiosas.",
        ],
      },
      {
        heading: "Relación con la aceptación",
        paragraphs: [
          "En enfoques contextuales puede trabajarse aumentando la disposición a experimentar ciertas sensaciones o emociones mientras se realizan acciones elegidas. Esto se hace de forma gradual y con objetivos claros.",
          "No se trata de exponerse indiscriminadamente al malestar, sino de recuperar opciones de conducta que se habían reducido por la necesidad de controlar la experiencia interna.",
        ],
      },
    ],
    relatedSlugs: ["aceptacion-psicologica", "flexibilidad-psicologica", "ansiedad", "terapia-de-aceptacion-y-compromiso-act"],
    pillarLinks: [
      { href: "/terapias-contextuales-act", label: "Terapias contextuales y ACT" },
      { href: "/ansiedad-manizales", label: "Ansiedad en Manizales" },
    ],
  },
  {
    slug: "valores",
    term: "Valores en psicoterapia",
    category: "Procesos psicológicos",
    shortDefinition:
      "Direcciones de vida elegidas que orientan cómo una persona quiere actuar y relacionarse, más allá de metas puntuales o estados emocionales pasajeros.",
    aliases: ["valores personales", "valores en psicoterapia", "acción valiosa", "acciones valiosas"],
    sections: [
      {
        heading: "¿Qué son los valores?",
        paragraphs: [
          "En ACT, los valores describen cualidades de acción que una persona considera importantes en áreas como relaciones, trabajo, aprendizaje, salud, comunidad o autocuidado. Funcionan como una dirección, no como una tarea que pueda completarse definitivamente.",
          "Por ejemplo, “ser una persona presente con mi familia” puede orientar muchas decisiones distintas a lo largo del tiempo.",
        ],
      },
      {
        heading: "Valores y metas no son lo mismo",
        paragraphs: [
          "Una meta es un resultado concreto que puede alcanzarse, como terminar un curso o enviar una solicitud de empleo. Un valor describe cómo se quiere actuar durante el proceso, por ejemplo con curiosidad, responsabilidad o compromiso.",
          "Conectar metas y valores ayuda a que el cambio no dependa únicamente de la motivación del momento.",
        ],
      },
      {
        heading: "¿Por qué son relevantes en terapia?",
        paragraphs: [
          "Cuando una persona lleva mucho tiempo centrada en controlar síntomas, puede perder claridad sobre aquello hacia lo que quiere avanzar. Explorar valores ayuda a recuperar una dirección concreta para la conducta.",
          "Los valores no se imponen desde la terapia. Se clarifican a partir de lo que la propia persona considera significativo dentro de su contexto y posibilidades.",
        ],
      },
    ],
    relatedSlugs: ["terapia-de-aceptacion-y-compromiso-act", "flexibilidad-psicologica", "aceptacion-psicologica", "mindfulness"],
    pillarLinks: [{ href: "/terapias-contextuales-act", label: "Terapias contextuales y ACT" }],
  },
  {
    slug: "mindfulness",
    term: "Mindfulness o atención plena",
    category: "Procesos psicológicos",
    shortDefinition:
      "Práctica de prestar atención de manera intencional a la experiencia presente, observando pensamientos, emociones y sensaciones con mayor apertura.",
    aliases: ["mindfulness", "atención plena", "atencion plena"],
    sections: [
      {
        heading: "¿Qué es mindfulness?",
        paragraphs: [
          "Mindfulness suele traducirse como atención plena. Se refiere a entrenar la capacidad de notar lo que está ocurriendo en el momento presente sin quedar inmediatamente absorbido por juicios, recuerdos o anticipaciones.",
          "Puede aplicarse a la respiración, sensaciones corporales, sonidos, emociones, pensamientos o actividades cotidianas. En psicoterapia se utiliza como una habilidad, no necesariamente como una práctica espiritual.",
        ],
      },
      {
        heading: "No busca dejar de pensar",
        paragraphs: [
          "La práctica no consiste en vaciar la mente. La aparición de pensamientos forma parte del ejercicio; el entrenamiento está en reconocerlos y volver de manera flexible al foco elegido.",
          "Tampoco tiene como requisito producir relajación. A veces, prestar atención al presente permite notar malestar que antes se evitaba, por lo que la práctica debe ajustarse a cada persona.",
        ],
      },
      {
        heading: "Uso dentro de terapias contextuales",
        paragraphs: [
          "En ACT y DBT, distintas habilidades de atención plena apoyan procesos como defusión, regulación emocional y observación de impulsos. Su función depende del modelo y del objetivo clínico.",
          "Si una práctica aumenta de forma intensa el malestar o activa recuerdos difíciles, conviene adaptarla o realizarla con acompañamiento profesional.",
        ],
      },
    ],
    relatedSlugs: ["defusion-cognitiva", "regulacion-emocional", "terapia-dialectico-conductual-dbt", "terapia-de-aceptacion-y-compromiso-act"],
    pillarLinks: [{ href: "/terapias-contextuales-act", label: "Terapias contextuales y ACT" }],
  },
  {
    slug: "regulacion-emocional",
    term: "Regulación emocional",
    category: "Procesos psicológicos",
    shortDefinition:
      "Conjunto de procesos mediante los cuales una persona reconoce, comprende y modula sus respuestas emocionales de acuerdo con el contexto y sus objetivos.",
    aliases: ["regulación emocional", "regulacion emocional", "gestión emocional", "gestion emocional"],
    sections: [
      {
        heading: "¿Qué es regular una emoción?",
        paragraphs: [
          "Regular emociones no significa dejar de sentirlas. Implica identificar lo que ocurre, comprender qué información aporta la emoción y elegir cómo responder sin quedar completamente dirigido por el impulso del momento.",
          "La regulación incluye procesos corporales, cognitivos, conductuales y relacionales. Por eso no existe una única técnica que funcione en todas las situaciones.",
        ],
      },
      {
        heading: "Regulación no es control total",
        paragraphs: [
          "Intentar controlar cada emoción puede convertirse en otra fuente de malestar. Algunas respuestas emocionales necesitan ser toleradas y atravesadas; otras pueden requerir cambios en el entorno, límites, descanso o solución de problemas.",
          "Una regulación flexible combina aceptación y cambio según la función de la emoción y las condiciones del contexto.",
        ],
      },
      {
        heading: "¿Qué habilidades pueden ayudar?",
        paragraphs: [
          "Entre las habilidades posibles están reconocer señales tempranas, nombrar emociones, observar impulsos, regular activación fisiológica, revisar interpretaciones y actuar de acuerdo con objetivos de largo plazo.",
          "Cuando la intensidad emocional produce conductas de riesgo, deterioro marcado o crisis frecuentes, es recomendable buscar valoración profesional.",
        ],
      },
    ],
    relatedSlugs: ["terapia-dialectico-conductual-dbt", "mindfulness", "flexibilidad-psicologica", "ansiedad"],
    pillarLinks: [
      { href: "/ansiedad-manizales", label: "Ansiedad en Manizales" },
      { href: "/terapias-contextuales-act", label: "Terapias contextuales y ACT" },
    ],
  },
  {
    slug: "terapia-dialectico-conductual-dbt",
    term: "Terapia Dialéctico Conductual (DBT)",
    category: "Terapias contextuales",
    shortDefinition:
      "Enfoque psicoterapéutico que combina estrategias de aceptación y cambio, con entrenamiento estructurado en habilidades como mindfulness y regulación emocional.",
    aliases: ["DBT", "Terapia Dialéctico Conductual", "terapia dialectica conductual", "dialectical behavior therapy"],
    sections: [
      {
        heading: "¿Qué es DBT?",
        paragraphs: [
          "La Terapia Dialéctico Conductual, conocida como DBT, es un modelo que integra principios conductuales con estrategias de aceptación. Su nombre hace referencia a la búsqueda de equilibrio entre posiciones que pueden parecer opuestas, especialmente aceptar la experiencia actual y trabajar activamente por el cambio.",
          "DBT incluye un marco clínico amplio y no debe reducirse a una colección de ejercicios aislados.",
        ],
      },
      {
        heading: "Habilidades asociadas a DBT",
        paragraphs: [
          "El entrenamiento en habilidades suele organizarse alrededor de mindfulness, regulación emocional, tolerancia al malestar y efectividad interpersonal. Estas áreas ayudan a desarrollar respuestas más deliberadas en situaciones emocionalmente exigentes.",
          "El modo en que se utilizan depende de la formulación del caso y del nivel de atención que la persona necesita.",
        ],
      },
      {
        heading: "DBT y otras terapias contextuales",
        paragraphs: [
          "DBT comparte con otros enfoques contextuales el interés por la función de la conducta y por combinar aceptación con cambio, aunque mantiene una estructura y procedimientos propios.",
          "Si una persona presenta crisis recurrentes, conductas de riesgo o dificultades emocionales intensas, la decisión sobre el tipo de tratamiento requiere una valoración profesional completa.",
        ],
      },
    ],
    relatedSlugs: ["regulacion-emocional", "mindfulness", "terapias-contextuales", "terapias-de-tercera-generacion"],
    pillarLinks: [{ href: "/terapias-contextuales-act", label: "Terapias contextuales y ACT" }],
  },
  {
    slug: "ansiedad",
    term: "Ansiedad",
    category: "Motivos de consulta",
    shortDefinition:
      "Respuesta de activación y anticipación ante amenazas, incertidumbre o demandas percibidas, que puede ser adaptativa o convertirse en una fuente importante de interferencia.",
    aliases: ["ansiedad", "ansioso", "ansiosa", "preocupación intensa", "preocupacion intensa"],
    sections: [
      {
        heading: "¿Qué es la ansiedad?",
        paragraphs: [
          "La ansiedad es una respuesta humana que prepara al organismo para afrontar posibles amenazas o situaciones inciertas. Puede incluir cambios corporales, pensamientos de anticipación, aumento de vigilancia y deseos de evitar aquello que se percibe como peligroso.",
          "En niveles manejables puede cumplir una función útil. El problema aparece cuando la intensidad, frecuencia o duración resulta desproporcionada o empieza a interferir de forma significativa con la vida cotidiana.",
        ],
      },
      {
        heading: "¿Cómo puede manifestarse?",
        paragraphs: [
          "Puede aparecer como preocupación persistente, tensión muscular, inquietud, dificultad para concentrarse, molestias físicas, alteraciones del sueño o evitación. La combinación concreta varía entre personas y no permite establecer un diagnóstico por sí sola.",
          "También es importante descartar factores médicos, sustancias, medicamentos y otras condiciones cuando los síntomas son nuevos, intensos o atípicos.",
        ],
      },
      {
        heading: "¿Cuándo buscar apoyo?",
        paragraphs: [
          "Puede ser útil consultar cuando la ansiedad limita actividades importantes, genera evitación creciente, interfiere con el descanso o las relaciones, o produce un sufrimiento difícil de manejar por cuenta propia.",
          "Una valoración profesional permite diferenciar patrones, identificar factores que mantienen el problema y definir objetivos de intervención adecuados.",
        ],
      },
    ],
    relatedSlugs: ["evitacion-experiencial", "regulacion-emocional", "rumiacion", "insomnio"],
    pillarLinks: [
      { href: "/ansiedad-manizales", label: "Ansiedad en Manizales" },
      { href: "/psicoterapia-online", label: "Psicoterapia online" },
    ],
  },
  {
    slug: "rumiacion",
    term: "Rumiación",
    category: "Procesos psicológicos",
    shortDefinition:
      "Patrón repetitivo de pensamiento centrado en problemas, causas o consecuencias del malestar sin avanzar necesariamente hacia una solución efectiva.",
    aliases: ["rumiación", "rumiacion", "pensamientos repetitivos", "darle vueltas"],
    sections: [
      {
        heading: "¿Qué es la rumiación?",
        paragraphs: [
          "La rumiación es un estilo de pensamiento repetitivo en el que la mente vuelve una y otra vez sobre un problema, una emoción o un evento. Puede dar la sensación de estar intentando comprender o resolver algo, pero muchas veces no produce nuevas acciones ni información útil.",
          "Este patrón puede consumir atención, prolongar el malestar y dificultar la conexión con tareas o relaciones presentes.",
        ],
      },
      {
        heading: "Rumiación y solución de problemas",
        paragraphs: [
          "Pensar en un problema no es necesariamente rumiar. La solución de problemas tiende a generar opciones, decisiones y pasos concretos; la rumiación suele repetir preguntas o conclusiones sin movimiento conductual claro.",
          "Distinguir ambos procesos ayuda a decidir cuándo seguir analizando y cuándo conviene cambiar de estrategia.",
        ],
      },
      {
        heading: "¿Qué puede ayudar?",
        paragraphs: [
          "Puede trabajarse observando el inicio del ciclo, cambiando el foco atencional, practicando defusión, estableciendo momentos concretos para resolver problemas y retomando actividades valiosas.",
          "Si los pensamientos repetitivos se acompañan de deterioro importante del ánimo, ansiedad intensa o alteraciones significativas del sueño, conviene realizar una valoración profesional.",
        ],
      },
    ],
    relatedSlugs: ["defusion-cognitiva", "ansiedad", "mindfulness", "insomnio"],
    pillarLinks: [
      { href: "/ansiedad-manizales", label: "Ansiedad en Manizales" },
      { href: "/terapias-contextuales-act", label: "Terapias contextuales y ACT" },
    ],
  },
  {
    slug: "burnout",
    term: "Burnout o desgaste ocupacional",
    category: "Trabajo y bienestar",
    shortDefinition:
      "Término utilizado para describir un patrón de agotamiento asociado de manera específica al contexto laboral y a demandas ocupacionales sostenidas.",
    aliases: ["burnout", "desgaste ocupacional", "agotamiento laboral", "síndrome de burnout", "sindrome de burnout"],
    sections: [
      {
        heading: "¿Qué se entiende por burnout?",
        paragraphs: [
          "Burnout se utiliza para describir un patrón de agotamiento relacionado con el trabajo que puede incluir cansancio persistente, distanciamiento o cinismo frente a la actividad laboral y sensación de menor eficacia.",
          "No todo cansancio laboral es burnout. Es importante revisar duración, intensidad, condiciones de trabajo, descanso, salud física, estado emocional y otros factores que pueden producir síntomas similares.",
        ],
      },
      {
        heading: "Factores que pueden influir",
        paragraphs: [
          "Las cargas sostenidas, bajo control sobre el trabajo, conflictos de rol, límites difusos, falta de recuperación y tensiones interpersonales pueden contribuir al desgaste. La experiencia depende también de recursos personales, apoyo y contexto organizacional.",
          "Por eso, abordar burnout no debería reducirse únicamente a pedirle a la persona que tolere mejor condiciones que requieren cambios reales.",
        ],
      },
      {
        heading: "¿Cuándo conviene consultar?",
        paragraphs: [
          "Es recomendable buscar orientación cuando el agotamiento se mantiene pese al descanso, afecta otras áreas de la vida, se acompaña de cambios intensos del ánimo o del sueño, o dificulta sostener las actividades diarias.",
          "Una valoración puede ayudar a diferenciar desgaste laboral de otras condiciones y a definir intervenciones personales, relacionales u organizacionales según corresponda.",
        ],
      },
    ],
    relatedSlugs: ["estres-laboral", "insomnio", "regulacion-emocional", "ansiedad"],
    pillarLinks: [
      { href: "/estres-burnout-manizales", label: "Estrés y burnout en Manizales" },
      { href: "/psicoterapia-online", label: "Psicoterapia online" },
    ],
  },
  {
    slug: "estres-laboral",
    term: "Estrés laboral",
    category: "Trabajo y bienestar",
    shortDefinition:
      "Respuesta de activación que puede aparecer cuando las demandas del trabajo son percibidas como superiores a los recursos disponibles para afrontarlas.",
    aliases: ["estrés laboral", "estres laboral", "estrés en el trabajo", "estres en el trabajo"],
    sections: [
      {
        heading: "¿Qué es el estrés laboral?",
        paragraphs: [
          "El estrés laboral aparece cuando las demandas, incertidumbres o conflictos del trabajo generan una activación sostenida que resulta difícil de recuperar. Una dosis temporal de estrés puede movilizar recursos, pero la exposición prolongada puede afectar descanso, concentración, irritabilidad y bienestar general.",
          "La experiencia de estrés depende tanto de las exigencias objetivas como de la percepción de control, apoyo, claridad de rol y posibilidades de recuperación.",
        ],
      },
      {
        heading: "No todo depende de la persona",
        paragraphs: [
          "Las estrategias individuales son solo una parte del abordaje. Cargas excesivas, horarios, liderazgo, violencia laboral, falta de recursos o conflictos organizacionales pueden requerir cambios en el entorno y no deben interpretarse únicamente como una falla de afrontamiento personal.",
          "Una mirada contextual ayuda a identificar qué elementos pueden modificarse a nivel individual y cuáles necesitan respuestas organizacionales.",
        ],
      },
      {
        heading: "Señales para prestar atención",
        paragraphs: [
          "Dificultad persistente para desconectarse del trabajo, alteraciones de sueño, tensión, irritabilidad, preocupación anticipatoria o reducción marcada del rendimiento pueden indicar que el estrés está teniendo un impacto relevante.",
          "Cuando los síntomas se mantienen o se intensifican, una valoración profesional puede ayudar a diferenciar causas y priorizar acciones.",
        ],
      },
    ],
    relatedSlugs: ["burnout", "insomnio", "ansiedad", "regulacion-emocional"],
    pillarLinks: [{ href: "/estres-burnout-manizales", label: "Estrés y burnout en Manizales" }],
  },
  {
    slug: "insomnio",
    term: "Insomnio",
    category: "Sueño y bienestar",
    shortDefinition:
      "Dificultad persistente para iniciar o mantener el sueño, o despertar antes de lo deseado, acompañada de consecuencias durante el día.",
    aliases: ["insomnio", "dificultad para dormir", "problemas de sueño", "no puedo dormir"],
    sections: [
      {
        heading: "¿Qué es el insomnio?",
        paragraphs: [
          "El insomnio se refiere a dificultades repetidas para conciliar el sueño, mantenerlo o volver a dormir después de despertarse, especialmente cuando esto afecta el funcionamiento diurno. Una noche aislada de mal sueño no equivale a un problema de insomnio.",
          "El sueño puede alterarse por estrés, hábitos, horarios, dolor, sustancias, medicamentos, condiciones médicas o dificultades psicológicas, entre otros factores.",
        ],
      },
      {
        heading: "El esfuerzo por dormir puede mantener el problema",
        paragraphs: [
          "Cuando dormir se convierte en una tarea que debe lograrse a toda costa, puede aumentar la vigilancia, la frustración y la anticipación negativa antes de acostarse. Esto puede crear un ciclo en el que la preocupación por dormir interfiere con el propio descanso.",
          "Trabajar la relación con esos pensamientos y ajustar conductas relacionadas con el sueño puede formar parte de un abordaje psicológico, según el caso.",
        ],
      },
      {
        heading: "¿Cuándo buscar valoración?",
        paragraphs: [
          "Conviene consultar si el problema se mantiene, afecta significativamente el día, aparece junto con ronquidos intensos, pausas respiratorias, movimientos inusuales, dolor, consumo de sustancias o cambios importantes del estado de ánimo.",
          "Una evaluación adecuada permite determinar si se necesita intervención psicológica, médica o una combinación de ambas.",
        ],
      },
    ],
    relatedSlugs: ["ansiedad", "rumiacion", "estres-laboral", "burnout"],
    pillarLinks: [
      { href: "/insomnio-manizales", label: "Insomnio en Manizales" },
      { href: "/psicoterapia-online", label: "Psicoterapia online" },
    ],
  },
];

export const glossaryTermMap = new Map(glossaryTerms.map((term) => [term.slug, term]));

export function getGlossaryTerm(slug: string) {
  return glossaryTermMap.get(slug);
}

export function findGlossaryTermsInText(value: string, limit = 6) {
  const normalized = value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .toLocaleLowerCase("es");

  return glossaryTerms
    .filter((term) =>
      term.aliases.some((alias) => normalized.includes(alias.toLocaleLowerCase("es"))),
    )
    .slice(0, limit);
}
