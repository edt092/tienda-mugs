import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Hoy es un Día Fenomenal',
    slug: 'hoy-es-un-dia-fenomenal',
    tagline: 'Comienza cada día con mentalidad positiva',
    description: 'Cada mañana es una nueva oportunidad para reprogramar tu mente hacia el éxito. Esta taza no es solo un recipiente para tu café, es tu compañera diaria en la construcción de una mentalidad ganadora.',
    price: 14.49,
    image: '/img/productos/hoy-es-un-dia-fenomenal/hoy-es-un-dia-fenomenal-1.png',
    images: [
      '/img/productos/hoy-es-un-dia-fenomenal/hoy-es-un-dia-fenomenal-1.png',
      '/img/productos/hoy-es-un-dia-fenomenal/hoy-es-un-dia-fenomenal-2.png',
      '/img/productos/hoy-es-un-dia-fenomenal/hoy-es-un-dia-fenomenal-3.png',
      '/img/productos/hoy-es-un-dia-fenomenal/hoy-es-un-dia-fenomenal-4.png',
      '/img/productos/hoy-es-un-dia-fenomenal/hoy-es-un-dia-fenomenal-5.png',
      '/img/productos/hoy-es-un-dia-fenomenal/hoy-es-un-dia-fenomenal-6.png',
      '/img/productos/hoy-es-un-dia-fenomenal/hoy-es-un-dia-fenomenal-7.png',
    ],
    category: 'mentalidad',
    psychologicalBenefits: [
      'Activa el sistema de recompensa cerebral desde las primeras horas del día',
      'Reduce los niveles de cortisol (hormona del estrés) mediante afirmaciones positivas',
      'Crea un ancla mental que asocia tu rutina matutina con optimismo',
      'Fortalece las conexiones neuronales relacionadas con el pensamiento positivo'
    ],
    neuroscience: {
      title: 'El Poder de la Repetición Visual en tu Cerebro',
      description: 'Estudios en neuroplasticidad demuestran que la exposición repetida a mensajes positivos durante tu ritual matutino activa la corteza prefrontal, responsable de la toma de decisiones optimistas. Cada vez que lees "Hoy es un día fenomenal", tu cerebro libera dopamina, el neurotransmisor de la motivación, preparándote mentalmente para enfrentar desafíos con una actitud resiliente.'
    },
    dailyImpact: 'Al leer esta afirmación cada mañana durante 21 días, creas un nuevo patrón neuronal. Tu mente subconsciente comienza a buscar evidencia que respalde esta creencia, activando el Sesgo de Confirmación a tu favor.',
    mentalBenefits: [
      'Priming Mental Positivo: Preparas tu mente para detectar oportunidades',
      'Activación del Sistema Reticular: Tu cerebro filtra información relevante para cumplir esta profecía',
      'Reducción de Pensamientos Intrusivos Negativos en un 40% (estudios de psicología cognitiva)',
      'Mejora del Estado de Ánimo General y aumento de la productividad matutina'
    ]
  },
  {
    id: '2',
    name: 'La Calma es mi Reino',
    slug: 'la-calma-es-mi-reino',
    tagline: 'Mantén la calma en cualquier situación',
    description: 'En un mundo de caos constante, la calma no es debilidad: es tu estrategia de poder. Esta taza te recuerda cada día que controlar tu estado interno es la clave para dominar tu realidad externa.',
    price: 14.49,
    image: '/img/productos/la-calma-es-mi-reino/la-calma-es-mi-reino-1.png',
    images: [
      '/img/productos/la-calma-es-mi-reino/la-calma-es-mi-reino-1.png',
      '/img/productos/la-calma-es-mi-reino/la-calma-es-mi-reino-2.png',
      '/img/productos/la-calma-es-mi-reino/la-calma-es-mi-reino-3.png',
      '/img/productos/la-calma-es-mi-reino/la-calma-es-mi-reino-4.png',
      '/img/productos/la-calma-es-mi-reino/la-calma-es-mi-reino-5.png',
      '/img/productos/la-calma-es-mi-reino/la-calma-es-mi-reino-6.png',
      '/img/productos/la-calma-es-mi-reino/la-calma-es-mi-reino-7.png',
    ],
    category: 'mentalidad',
    psychologicalBenefits: [
      'Activa el Sistema Nervioso Parasimpático, reduciendo la respuesta de lucha o huida',
      'Disminuye la producción de cortisol en situaciones de alta presión',
      'Fortalece la conexión entre la amígdala (emociones) y la corteza prefrontal (razón)',
      'Desarrolla la capacidad de respuesta consciente vs reacción automática'
    ],
    neuroscience: {
      title: 'La Neurociencia del Control Emocional',
      description: 'La investigación en neurociencia afectiva revela que la simple lectura de afirmaciones de calma activa las ondas cerebrales Alpha (8-12 Hz), el mismo estado mental de meditadores experimentados. Al declarar "La calma es mi reino", estás enviando señales a tu amígdala para reducir la hipervigilancia, permitiendo que tu corteza prefrontal tome decisiones más estratégicas y menos impulsivas.'
    },
    dailyImpact: 'Después de 30 días de exposición diaria a este mensaje, tu cerebro crea un "atajo neuronal" hacia la calma. En momentos de estrés, tu mente automáticamente buscará este estado como respuesta predeterminada.',
    mentalBenefits: [
      'Reducción del 50% en Respuestas Reactivas según estudios de regulación emocional',
      'Aumento de Claridad Mental en toma de decisiones bajo presión',
      'Mejora de la Inteligencia Emocional y liderazgo consciente',
      'Activación del Modo de "Respuesta vs Reacción" ante desafíos'
    ]
  },
  {
    id: '3',
    name: 'Soy un Multimillonario',
    slug: 'soy-un-multimillonario',
    tagline: 'Mentalidad de abundancia y éxito',
    description: 'La riqueza comienza en la mente. Esta afirmación diaria reprograma tu relación con el dinero, eliminando bloqueos mentales de escasez y activando tu Activador Reticular (SAR) para detectar oportunidades de abundancia.',
    price: 14.49,
    image: '/img/productos/soy-un-multimillonario/soy-un-multimillonario.png',
    images: [
      '/img/productos/soy-un-multimillonario/soy-un-multimillonario.png',
      '/img/productos/soy-un-multimillonario/soy-un-multimillonario-1.png',
      '/img/productos/soy-un-multimillonario/soy-un-multimillonario-2.png',
      '/img/productos/soy-un-multimillonario/soy-un-multimillonario-3.png',
    ],
    category: 'mentalidad',
    psychologicalBenefits: [
      'Elimina creencias limitantes sobre el dinero arraigadas en el subconsciente',
      'Activa el Sistema de Activación Reticular (SAR) para detectar oportunidades financieras',
      'Reduce la ansiedad financiera reprogramando tu relación con la abundancia',
      'Fortalece la autoeficacia y confianza en tu capacidad de generar riqueza'
    ],
    neuroscience: {
      title: 'Reprogramación Mental de Abundancia',
      description: 'Los neurocientíficos han descubierto que tu cerebro no distingue entre una afirmación repetida y una realidad experimentada. Cuando declaras "Soy un multimillonario" consistentemente, activas las mismas redes neuronales que se activarían si ya lo fueras. Esto desencadena el fenómeno de "Embodied Cognition": tu cerebro comienza a tomar decisiones, crear hábitos y detectar oportunidades desde la identidad de una persona abundante.'
    },
    dailyImpact: 'La repetición diaria de esta afirmación durante 66 días (tiempo promedio para formar un hábito según estudios UCL) reconfigura tu identidad financiera. Tu mente subconsciente empieza a rechazar comportamientos de escasez y buscar activamente estrategias de abundancia.',
    mentalBenefits: [
      'Activación del Locus de Control Interno: Tú creas tu realidad financiera',
      'Eliminación de Sabotaje Financiero Subconsciente',
      'Aumento de Toma de Riesgos Calculados y pensamiento empresarial',
      'Desarrollo de Visión de Abundancia: Detectas oportunidades donde otros ven problemas'
    ]
  },
  {
    id: '4',
    name: 'Born to Win',
    slug: 'tumbler-negro-born-to-win',
    tagline: 'Naciste para ganar',
    description: 'Este tumbler de acero inoxidable es más que un simple recipiente para tus bebidas. Es un recordatorio constante de que naciste con el potencial de ganar. Mantén tus bebidas frías por 24 horas o calientes por 12 horas, mientras llevas contigo el mensaje que refuerza tu mentalidad ganadora.',
    price: 24.49,
    image: '/img/productos/tumblers/tumbler-negro/tumbler-negro-born-to-win.png',
    images: [
      '/img/productos/tumblers/tumbler-negro/tumbler-negro-born-to-win.png',
      '/img/productos/tumblers/tumbler-negro/tumbler-negro-born-to-win-2.png',
      '/img/productos/tumblers/tumbler-negro/tumbler-negro-born-to-win-3.png',
      '/img/productos/tumblers/tumbler-negro/tumbler-negro-born-to-win-4.png',
    ],
    category: 'tumblers',
    psychologicalBenefits: [
      'Refuerza la creencia fundamental de que el éxito es tu destino natural',
      'Activa el pensamiento de ganador en cada momento del día',
      'Elimina el síndrome del impostor recordándote tu propósito innato',
      'Fortalece la identidad de alto rendimiento mediante repetición visual constante'
    ],
    neuroscience: {
      title: 'La Ciencia de la Identidad Ganadora',
      description: 'Las investigaciones en neurociencia muestran que la exposición repetida a afirmaciones de identidad ("Soy" en lugar de "Quiero ser") activa las mismas áreas cerebrales que se activan cuando vivimos esa identidad. Al ver "Born to Win" múltiples veces al día, tu cerebro comienza a operar desde la certeza de que ganar es tu estado natural, no una meta distante. Esto activa el córtex prefrontal para tomar decisiones desde la mentalidad de alguien que ya es un ganador.'
    },
    dailyImpact: 'Llevar este tumbler contigo es como tener un coach mental portátil. Cada vez que tomas un sorbo, refuerzas la creencia de que naciste para ganar. Después de 21 días, esta afirmación se convierte en parte de tu diálogo interno automático.',
    mentalBenefits: [
      'Activación del Estado Mental de "Ya Soy" vs "Algún Día Seré"',
      'Incremento de Autoconfianza en situaciones desafiantes',
      'Reducción de Dudas y Autosabotaje mediante identidad positiva',
      'Desarrollo de Mentalidad de Ganador: Tu éxito es inevitable, no opcional'
    ]
  },
  {
    id: '5',
    name: 'Gracias',
    slug: 'tumbler-gracias',
    tagline: 'La gratitud como estilo de vida',
    description: 'Este tumbler de acero inoxidable es tu recordatorio diario del poder transformador de la gratitud. Cada vez que lo uses, activarás una de las emociones más poderosas para reprogramar tu cerebro hacia la abundancia. Mantén tus bebidas frías por 24 horas o calientes por 12 horas, mientras cultivas el hábito que la neurociencia confirma como clave para el bienestar y el éxito.',
    price: 24.49,
    image: '/img/productos/tumblers/tumbler-gracias/tumbler-gracias-1.png',
    images: [
      '/img/productos/tumblers/tumbler-gracias/tumbler-gracias-1.png',
      '/img/productos/tumblers/tumbler-gracias/tumbler-gracias-2.png',
    ],
    category: 'tumblers',
    psychologicalBenefits: [
      'Activa la liberación de dopamina y serotonina, neurotransmisores del bienestar',
      'Reduce significativamente los niveles de cortisol (hormona del estrés)',
      'Fortalece la resiliencia mental ante adversidades y desafíos',
      'Mejora la calidad del sueño y reduce síntomas de ansiedad y depresión'
    ],
    neuroscience: {
      title: 'La Neurociencia de la Gratitud',
      description: 'Estudios de neuroimagen revelan que practicar la gratitud activa la corteza prefrontal medial y el córtex cingulado anterior, áreas asociadas con la toma de decisiones y la regulación emocional. Cuando expresas gratitud, tu cerebro libera dopamina y serotonina, creando un "circuito de recompensa" que te motiva a buscar más experiencias positivas. La gratitud literalmente reconfigura tu cerebro para enfocarse en la abundancia en lugar de la escasez.'
    },
    dailyImpact: 'Al ver la palabra "Gracias" múltiples veces al día, activas automáticamente tu Sistema de Activación Reticular (SAR) para detectar cosas por las cuales estar agradecido. Después de 21 días de práctica consistente, tu cerebro desarrolla un "sesgo de gratitud" que transforma tu experiencia de vida.',
    mentalBenefits: [
      'Aumento del 25% en niveles generales de felicidad (estudios UC Berkeley)',
      'Mejora de Relaciones Interpersonales mediante empatía y apreciación',
      'Incremento de Resiliencia Mental ante situaciones adversas',
      'Activación del Modo Abundancia: Enfoque en lo que tienes vs lo que te falta'
    ]
  },
  {
    id: '6',
    name: 'Kit Nacido Para Ganar',
    slug: 'kit-nacido-para-ganar',
    tagline: 'El regalo perfecto para impulsar el éxito',
    description: 'Este exclusivo kit de regalo viene presentado en una elegante caja lista para obsequiar. El regalo perfecto para esa persona especial que quieres impulsar hacia el éxito. Incluye: Tumbler negro con el mensaje "Nacido Para Ganar", soporte de teléfono de bamboo con bloc de notas amarillas (13cm x 8cm), bolígrafo ejecutivo blanco con azul con base circular y cordón elástico (tinta azul), y libreta de pasta dura color negro mate. Todo lo que necesitas para organizar tus ideas y mantener tu enfoque en el éxito. Envío gratis en Quito incluido.',
    price: 39.99,
    image: '/img/productos/tumblers/tumbler-negro/tumbler-negro-born-to-win-combo-1.png',
    images: [
      '/img/productos/tumblers/tumbler-negro/tumbler-negro-born-to-win-combo-1.png',
      '/img/productos/tumblers/tumbler-negro/tumbler-negro-born-to-win-combo-2.png',
    ],
    category: 'tumblers',
    psychologicalBenefits: [
      'Refuerza la identidad de ganador con cada uso de los artículos del kit',
      'El acto de escribir a mano activa la corteza prefrontal y mejora la retención de metas',
      'El soporte de teléfono reduce distracciones y promueve el enfoque consciente',
      'La organización física del espacio de trabajo reduce la ansiedad y aumenta la claridad mental'
    ],
    neuroscience: {
      title: 'El Sistema de Productividad Consciente',
      description: 'Los estudios en neurociencia demuestran que escribir metas a mano activa el Sistema de Activación Reticular (SAR), programando tu cerebro para detectar oportunidades alineadas con tus objetivos. Cada componente de este kit está diseñado para crear un ritual de éxito: el tumbler te recuerda tu identidad ganadora, la libreta captura tus ideas de alto impacto, y el soporte de teléfono te mantiene conectado sin perder el enfoque. Juntos, crean un ecosistema de productividad que refuerza tu mentalidad de logro.'
    },
    dailyImpact: 'Al usar este kit diariamente, estableces un ritual de éxito que combina hidratación consciente, planificación estratégica y organización mental. En 30 días, estos hábitos se convierten en tu sistema automático de alto rendimiento.',
    mentalBenefits: [
      'Creación de Rituales de Éxito: Cada mañana comienza con intención y propósito',
      'Activación de la Escritura Manual: Mejora la memoria y el compromiso con tus metas',
      'Reducción del Desorden Mental: Un espacio organizado refleja una mente clara',
      'Identidad de Ganador Reforzada: Múltiples puntos de contacto con mensajes positivos'
    ]
  },
  {
    id: '7',
    name: 'Kit Gratitude',
    slug: 'kit-gratitude',
    tagline: 'Regala el poder de la gratitud',
    description: 'Este exclusivo kit de regalo viene presentado en una elegante caja lista para obsequiar. El regalo perfecto para agradecer a esa persona especial. Incluye: Tumbler negro con el mensaje "GRATITUDE.", soporte de teléfono de bamboo con bloc de notas amarillas (13cm x 8cm), bolígrafo ejecutivo blanco con azul con base circular y cordón elástico (tinta azul), y libreta de pasta dura color negro mate. Un kit completo para cultivar la gratitud diaria y la productividad consciente. Envío gratis en Quito incluido.',
    price: 39.99,
    image: '/img/productos/tumblers/tumbler-gracias/tumbler-gracias-regalo-1.png',
    images: [
      '/img/productos/tumblers/tumbler-gracias/tumbler-gracias-regalo-1.png',
      '/img/productos/tumblers/tumbler-gracias/tumbler-gracias-regalo-2.png',
    ],
    category: 'tumblers',
    psychologicalBenefits: [
      'La gratitud activa el sistema de recompensa cerebral liberando dopamina y serotonina',
      'El acto de escribir gratitudes a mano fortalece las conexiones neuronales positivas',
      'El soporte de teléfono promueve pausas conscientes para reflexionar y agradecer',
      'La organización del espacio de trabajo crea un ambiente propicio para el bienestar mental'
    ],
    neuroscience: {
      title: 'El Kit de la Gratitud Consciente',
      description: 'Investigaciones en neurociencia positiva demuestran que practicar la gratitud de forma consistente reconfigura literalmente el cerebro. Escribir en la libreta tres cosas por las que estás agradecido activa la corteza prefrontal medial, mientras que ver el mensaje "GRATITUDE." en tu tumbler refuerza este hábito transformador. El soporte de bamboo te invita a pausar y reflexionar, creando un ritual completo de bienestar que mejora tu salud mental y tu perspectiva de vida.'
    },
    dailyImpact: 'Al usar este kit diariamente, estableces un ritual de gratitud que combina hidratación consciente, escritura reflexiva y organización mental. En 21 días, tu cerebro desarrolla un "sesgo de gratitud" que te permite ver oportunidades y bendiciones donde antes solo veías problemas.',
    mentalBenefits: [
      'Aumento del 25% en Felicidad General: Respaldado por estudios de UC Berkeley',
      'Reducción del Estrés: La gratitud disminuye los niveles de cortisol',
      'Mejora del Sueño: Escribir gratitudes antes de dormir mejora la calidad del descanso',
      'Fortalecimiento de Relaciones: La gratitud expresada mejora los vínculos interpersonales'
    ]
  },
  {
    id: '8',
    name: 'Kit Día Fenomenal',
    slug: 'kit-dia-fenomenal',
    tagline: 'Celebra cada día con estilo',
    description: 'Este exclusivo kit de regalo viene presentado en una elegante caja lista para obsequiar. El regalo perfecto para celebrar a esa persona especial. Incluye: Taza negra con el mensaje "Hoy es un Día Fenomenal", botella de vino espumante Brut (375ml), y deliciosos chocolates gourmet. Un kit completo para brindar por los días fenomenales y cultivar la mentalidad positiva. Envío gratis en Quito incluido.',
    price: 24.49,
    image: '/img/productos/hoy-es-un-dia-fenomenal/hoy-es-un-dia-fenomenal-regalo.png',
    images: [
      '/img/productos/hoy-es-un-dia-fenomenal/hoy-es-un-dia-fenomenal-regalo.png',
      '/img/productos/hoy-es-un-dia-fenomenal/hoy-es-un-dia-fenomenal-regalo-2.png',
    ],
    category: 'mentalidad',
    psychologicalBenefits: [
      'El acto de regalar activa el sistema de recompensa cerebral tanto en quien da como en quien recibe',
      'Los rituales de celebración fortalecen las conexiones neuronales asociadas con la gratitud',
      'La combinación de mensaje positivo y experiencia sensorial crea anclas emocionales duraderas',
      'Compartir momentos especiales reduce el cortisol y aumenta la oxitocina'
    ],
    neuroscience: {
      title: 'La Ciencia de Celebrar los Días Fenomenales',
      description: 'Los neurocientíficos han demostrado que celebrar pequeños logros y momentos especiales activa el sistema de recompensa dopaminérgico, creando un ciclo positivo de motivación. Al combinar un mensaje de afirmación positiva con una experiencia de celebración, tu cerebro asocia el optimismo con sensaciones placenteras, reforzando la mentalidad de que cada día puede ser fenomenal.'
    },
    dailyImpact: 'Al usar esta taza cada mañana y recordar el momento especial en que la recibiste, activas un ancla emocional positiva. Tu cerebro asocia la afirmación "Hoy es un día fenomenal" con sentimientos de aprecio y celebración, potenciando su efecto transformador.',
    mentalBenefits: [
      'Creación de Memorias Positivas: Los regalos significativos generan recuerdos duraderos',
      'Activación del Vínculo Social: Fortalecer relaciones mejora el bienestar general',
      'Ritual de Celebración: Brindar por los logros refuerza la mentalidad de abundancia',
      'Ancla Emocional: Cada uso de la taza reactiva sentimientos positivos'
    ]
  },
  {
    id: '9',
    name: 'Kit La Calma es mi Reino',
    slug: 'kit-la-calma-es-mi-reino',
    tagline: 'Regala paz y serenidad',
    description: 'Este exclusivo kit de regalo viene presentado en una elegante caja lista para obsequiar. El regalo perfecto para esa persona especial que merece un momento de paz. Incluye: Taza negra con el mensaje "La Calma es mi Reino", botella de vino espumante Brut (375ml), y deliciosos chocolates gourmet. Un kit completo para celebrar la serenidad y cultivar el equilibrio interior. Envío gratis en Quito incluido.',
    price: 24.49,
    image: '/img/productos/la-calma-es-mi-reino/la-calma-es-mi-reino-regalo.png',
    images: [
      '/img/productos/la-calma-es-mi-reino/la-calma-es-mi-reino-regalo.png',
      '/img/productos/la-calma-es-mi-reino/la-calma-es-mi-reino-regalo-1.png',
    ],
    category: 'mentalidad',
    psychologicalBenefits: [
      'El acto de regalar activa el sistema de recompensa cerebral y fortalece vínculos',
      'El mensaje de calma asociado con la celebración crea anclas emocionales positivas',
      'El ritual de brindar en tranquilidad activa el sistema nervioso parasimpático',
      'Compartir momentos de paz reduce el cortisol y aumenta la sensación de bienestar'
    ],
    neuroscience: {
      title: 'La Ciencia de Regalar Serenidad',
      description: 'Los neurocientíficos han demostrado que el acto de regalar activa las mismas áreas cerebrales de recompensa que recibir un regalo. Al combinar un mensaje de calma con una experiencia de celebración tranquila, el cerebro crea asociaciones positivas entre la serenidad y el placer, reforzando la capacidad de encontrar paz en cualquier momento.'
    },
    dailyImpact: 'Al usar esta taza cada mañana, activas el recuerdo del momento especial en que la recibiste. Tu cerebro asocia la afirmación "La calma es mi reino" con sentimientos de aprecio y conexión, potenciando tu capacidad de mantener la serenidad.',
    mentalBenefits: [
      'Creación de Memorias de Paz: Los regalos significativos generan recuerdos de tranquilidad',
      'Activación del Vínculo Social: Fortalecer relaciones desde la calma mejora el bienestar',
      'Ritual de Serenidad: Brindar en paz refuerza la mentalidad de equilibrio',
      'Ancla de Calma: Cada uso de la taza reactiva la sensación de serenidad'
    ]
  },
  {
    id: '10',
    name: 'Kit Soy un Multimillonario',
    slug: 'kit-soy-un-multimillonario',
    tagline: 'Regala mentalidad de abundancia',
    description: 'Este exclusivo kit de regalo viene presentado en una elegante caja lista para obsequiar. El regalo perfecto para esa persona especial que merece activar su mentalidad de abundancia. Incluye: Taza negra con el mensaje "Soy un Multimillonario", botella de vino espumante Brut (375ml), y deliciosos chocolates gourmet. Un kit completo para brindar por la prosperidad y cultivar la mentalidad de riqueza. Envío gratis en Quito incluido.',
    price: 24.49,
    image: '/img/productos/soy-un-multimillonario/soy-un-multimillonario-regalo.png',
    images: [
      '/img/productos/soy-un-multimillonario/soy-un-multimillonario-regalo.png',
      '/img/productos/soy-un-multimillonario/soy-un-multimillonario-regalo-1.png',
    ],
    category: 'mentalidad',
    psychologicalBenefits: [
      'El acto de regalar activa el sistema de recompensa cerebral asociado con la abundancia',
      'Celebrar con intención de prosperidad refuerza las creencias de riqueza',
      'El mensaje de abundancia combinado con la celebración crea anclas emocionales de éxito',
      'Compartir momentos de prosperidad activa el mindset de multimillonario'
    ],
    neuroscience: {
      title: 'La Ciencia de Celebrar la Abundancia',
      description: 'Los neurocientíficos han demostrado que celebrar logros y visualizar la prosperidad activa el Sistema de Activación Reticular (SAR), programando el cerebro para detectar oportunidades de abundancia. Al combinar un mensaje de riqueza con una experiencia de celebración, el cerebro asocia la mentalidad millonaria con sensaciones placenteras, reforzando comportamientos de éxito financiero.'
    },
    dailyImpact: 'Al usar esta taza cada mañana, activas el recuerdo del brindis por tu prosperidad. Tu cerebro asocia la afirmación "Soy un multimillonario" con celebración y abundancia, potenciando tu capacidad de atraer riqueza.',
    mentalBenefits: [
      'Creación de Memorias de Prosperidad: Los regalos significativos generan recuerdos de abundancia',
      'Activación del Mindset Millonario: Celebrar la riqueza refuerza la identidad próspera',
      'Ritual de Abundancia: Brindar por la prosperidad programa el subconsciente',
      'Ancla de Riqueza: Cada uso de la taza reactiva la mentalidad de multimillonario'
    ]
  },
  // Productos de Etsy - Diseños personalizados
  {
    id: '11',
    name: 'Taza Divertida para el Jefe',
    slug: 'taza-divertida-para-el-jefe',
    tagline: 'Nombres personalizados de los miembros del equipo',
    description: 'Una taza perfecta para regalar a ese jefe con sentido del humor. Personalizable con los nombres de los miembros del equipo. Ideal para la oficina, regalos de cumpleaños o cualquier ocasión especial. Impresión de sublimación de alta calidad que no se desvanece. Apta para lavavajillas y microondas.',
    price: 14.99,
    image: '/img/productos/etsy/taza-divertida-para-el-jefe-nombres-personalizados-de-los-mi-1.jpg',
    images: [
      '/img/productos/etsy/taza-divertida-para-el-jefe-nombres-personalizados-de-los-mi-1.jpg',
      '/img/productos/etsy/taza-divertida-para-el-jefe-nombres-personalizados-de-los-mi-2.jpg',
      '/img/productos/etsy/taza-divertida-para-el-jefe-nombres-personalizados-de-los-mi-3.jpg',
      '/img/productos/etsy/taza-divertida-para-el-jefe-nombres-personalizados-de-los-mi-4.jpg',
      '/img/productos/etsy/taza-divertida-para-el-jefe-nombres-personalizados-de-los-mi-5.jpg',
    ],
    category: 'diseños',
    psychologicalBenefits: [
      'Fortalece los vínculos del equipo mediante el humor compartido',
      'Reduce el estrés laboral con un toque de diversión',
      'Crea un ambiente de trabajo más relajado y productivo',
      'Refuerza la identidad del equipo con un regalo personalizado'
    ],
    neuroscience: {
      title: 'El Poder del Humor en el Trabajo',
      description: 'Los estudios demuestran que el humor en el lugar de trabajo activa los centros de recompensa del cerebro, liberando dopamina y reduciendo los niveles de cortisol. Una taza divertida crea micro-momentos de alegría que mejoran la productividad y las relaciones laborales.'
    },
    dailyImpact: 'Cada vez que tu jefe use esta taza, recordará a su equipo y sonreirá, creando un ancla emocional positiva que fortalece la cultura laboral.',
    mentalBenefits: [
      'Mejora del clima laboral mediante el humor',
      'Fortalecimiento de la identidad del equipo',
      'Reducción del estrés con momentos de risa',
      'Creación de memorias positivas en el trabajo'
    ]
  },
  {
    id: '12',
    name: 'Taza Mágica Navideña',
    slug: 'taza-magica-navidena',
    tagline: 'Esta es mi taza mágica navideña',
    description: 'Dale un toque festivo a tus mañanas con esta taza mágica navideña. Perfecta para los amantes del chocolate caliente, el café o el té en la época más mágica del año. Diseño exclusivo de alta calidad con impresión sublimada resistente. El regalo perfecto para Navidad.',
    price: 14.99,
    image: '/img/productos/etsy/esta-es-mi-taza-magica-navidena-png-diseno-digital-taza-navi-1.jpg',
    images: [
      '/img/productos/etsy/esta-es-mi-taza-magica-navidena-png-diseno-digital-taza-navi-1.jpg',
      '/img/productos/etsy/esta-es-mi-taza-magica-navidena-png-diseno-digital-taza-navi-2.jpg',
      '/img/productos/etsy/esta-es-mi-taza-magica-navidena-png-diseno-digital-taza-navi-3.jpg',
      '/img/productos/etsy/esta-es-mi-taza-magica-navidena-png-diseno-digital-taza-navi-4.jpg',
      '/img/productos/etsy/esta-es-mi-taza-magica-navidena-png-diseno-digital-taza-navi-5.jpg',
    ],
    category: 'diseños',
    psychologicalBenefits: [
      'Activa la nostalgia positiva asociada con las fiestas',
      'Crea un ritual reconfortante durante la temporada navideña',
      'Aumenta la sensación de bienestar y calidez',
      'Fortalece los vínculos familiares mediante tradiciones compartidas'
    ],
    neuroscience: {
      title: 'La Magia de la Navidad en tu Cerebro',
      description: 'La temporada navideña activa memorias emocionales positivas almacenadas en el hipocampo. Una taza navideña se convierte en un disparador de estas memorias, liberando oxitocina y creando sensaciones de calidez y pertenencia.'
    },
    dailyImpact: 'Cada mañana de diciembre, esta taza te transporta al espíritu navideño, haciendo que cada momento sea mágico.',
    mentalBenefits: [
      'Activación de memorias navideñas positivas',
      'Creación de nuevas tradiciones familiares',
      'Aumento de la sensación de magia y esperanza',
      'Fortalecimiento del espíritu festivo'
    ]
  },
  {
    id: '13',
    name: 'Taza Personalizada para Mascotas',
    slug: 'taza-personalizada-mascotas',
    tagline: 'Con foto y nombre de tu mascota',
    description: 'Inmortaliza a tu mascota favorita en una taza de cerámica de alta calidad. Envíanos la foto de tu perro, gato o cualquier mascota y la convertiremos en un hermoso diseño. El regalo perfecto para los amantes de los animales. Personalización incluida. Impresión de sublimación resistente.',
    price: 18.99,
    image: '/img/productos/etsy/taza-personalizada-para-mascotas-con-foto-y-nombre-de-mascot-1.jpg',
    images: [
      '/img/productos/etsy/taza-personalizada-para-mascotas-con-foto-y-nombre-de-mascot-1.jpg',
      '/img/productos/etsy/taza-personalizada-para-mascotas-con-foto-y-nombre-de-mascot-2.jpg',
      '/img/productos/etsy/taza-personalizada-para-mascotas-con-foto-y-nombre-de-mascot-3.jpg',
      '/img/productos/etsy/taza-personalizada-para-mascotas-con-foto-y-nombre-de-mascot-4.jpg',
      '/img/productos/etsy/taza-personalizada-para-mascotas-con-foto-y-nombre-de-mascot-5.jpg',
    ],
    category: 'diseños',
    psychologicalBenefits: [
      'Fortalece el vínculo emocional con tu mascota',
      'Reduce el estrés mediante la conexión con animales',
      'Crea un recordatorio constante del amor incondicional',
      'Activa la liberación de oxitocina al ver a tu mascota'
    ],
    neuroscience: {
      title: 'El Poder Terapéutico de las Mascotas',
      description: 'Los estudios demuestran que ver imágenes de nuestras mascotas activa las mismas áreas cerebrales que se activan con los vínculos humanos. Esto libera oxitocina y reduce el cortisol, mejorando nuestro bienestar emocional.'
    },
    dailyImpact: 'Cada mañana, al ver a tu mascota en la taza, activas un momento de amor y gratitud que mejora tu estado de ánimo para todo el día.',
    mentalBenefits: [
      'Reducción del estrés mediante conexión emocional',
      'Aumento de la felicidad al ver a tu mascota',
      'Creación de un recordatorio de amor incondicional',
      'Fortalecimiento del vínculo humano-animal'
    ]
  },
  {
    id: '14',
    name: 'Taza Personalizada con tu Nombre',
    slug: 'taza-personalizada-nombre',
    tagline: 'Tu nombre, tu estilo',
    description: 'Taza de cerámica personalizada con el nombre que elijas. Diseño elegante y moderno perfecto para uso diario en casa o en la oficina. Impresión de sublimación de alta calidad que garantiza durabilidad. Apta para lavavajillas y microondas. El regalo personalizado perfecto.',
    price: 15.99,
    image: '/img/productos/etsy/taza-personalizada-taza-con-nombre-personalizado-taza-con-no-1.jpg',
    images: [
      '/img/productos/etsy/taza-personalizada-taza-con-nombre-personalizado-taza-con-no-1.jpg',
      '/img/productos/etsy/taza-personalizada-taza-con-nombre-personalizado-taza-con-no-2.jpg',
      '/img/productos/etsy/taza-personalizada-taza-con-nombre-personalizado-taza-con-no-3.jpg',
      '/img/productos/etsy/taza-personalizada-taza-con-nombre-personalizado-taza-con-no-4.jpg',
      '/img/productos/etsy/taza-personalizada-taza-con-nombre-personalizado-taza-con-no-5.jpg',
    ],
    category: 'diseños',
    psychologicalBenefits: [
      'Refuerza la identidad personal de forma positiva',
      'Crea un sentido de pertenencia y propiedad',
      'Activa el reconocimiento personal cada mañana',
      'Fortalece la autoestima mediante la personalización'
    ],
    neuroscience: {
      title: 'El Poder de tu Nombre',
      description: 'Escuchar o ver nuestro propio nombre activa áreas específicas del cerebro relacionadas con la identidad y el autoconcepto. Una taza con tu nombre es un recordatorio constante de tu unicidad y valor.'
    },
    dailyImpact: 'Cada vez que uses tu taza personalizada, refuerzas tu identidad positiva y creas un momento de autoafirmación.',
    mentalBenefits: [
      'Fortalecimiento de la identidad personal',
      'Aumento de la autoestima',
      'Creación de un objeto único y especial',
      'Sentido de pertenencia y propiedad'
    ]
  },
  {
    id: '15',
    name: 'Taza Navideña con Pollo Divertido',
    slug: 'taza-navidena-pollo-divertido',
    tagline: 'F-CAW-F - Humor navideño',
    description: 'Celebra la Navidad con estilo y humor con esta taza personalizada con diseño de pollo festivo. Perfecta para quienes aprecian el humor único. Ideal para disfrutar de tu chocolate caliente o café durante las fiestas. El regalo divertido para Navidad.',
    price: 16.99,
    image: '/img/productos/etsy/taza-navidena-personalizada-f-caw-f-taza-de-cafe-con-pollo-d-1.jpg',
    images: [
      '/img/productos/etsy/taza-navidena-personalizada-f-caw-f-taza-de-cafe-con-pollo-d-1.jpg',
      '/img/productos/etsy/taza-navidena-personalizada-f-caw-f-taza-de-cafe-con-pollo-d-2.jpg',
      '/img/productos/etsy/taza-navidena-personalizada-f-caw-f-taza-de-cafe-con-pollo-d-3.jpg',
      '/img/productos/etsy/taza-navidena-personalizada-f-caw-f-taza-de-cafe-con-pollo-d-4.jpg',
      '/img/productos/etsy/taza-navidena-personalizada-f-caw-f-taza-de-cafe-con-pollo-d-5.jpg',
    ],
    category: 'diseños',
    psychologicalBenefits: [
      'El humor reduce el estrés navideño',
      'Crea momentos de alegría y risa',
      'Diferénciate con un regalo único y memorable',
      'Activa la liberación de endorfinas mediante la risa'
    ],
    neuroscience: {
      title: 'El Humor Como Medicina',
      description: 'La risa activa múltiples áreas del cerebro y libera endorfinas, los analgésicos naturales del cuerpo. Un diseño divertido en tu taza te garantiza micro-dosis de felicidad cada mañana.'
    },
    dailyImpact: 'Empieza cada día de diciembre con una sonrisa. El humor de esta taza te acompaña en cada sorbo.',
    mentalBenefits: [
      'Reducción del estrés mediante el humor',
      'Aumento de endorfinas y bienestar',
      'Creación de memorias divertidas',
      'Mejora del estado de ánimo matutino'
    ]
  },
  {
    id: '16',
    name: 'Pack Diseños Gaming Fortnite',
    slug: 'pack-disenos-gaming-fortnite',
    tagline: '7 diseños exclusivos para gamers',
    description: 'Pack completo de 7 diseños para sublimación con temática gaming. Incluye múltiples diseños exclusivos listos para imprimir en tazas. Archivos de alta resolución (300 DPI) perfectos para impresión profesional. Ideal para gamers y fanáticos de los videojuegos. Perfecto para emprendedores.',
    price: 24.99,
    image: '/img/productos/etsy/paquete-de-tazas-de-sublimacion-fort-gaming-con-7-disenos-en-1.jpg',
    images: [
      '/img/productos/etsy/paquete-de-tazas-de-sublimacion-fort-gaming-con-7-disenos-en-1.jpg',
      '/img/productos/etsy/paquete-de-tazas-de-sublimacion-fort-gaming-con-7-disenos-en-2.jpg',
      '/img/productos/etsy/paquete-de-tazas-de-sublimacion-fort-gaming-con-7-disenos-en-3.jpg',
      '/img/productos/etsy/paquete-de-tazas-de-sublimacion-fort-gaming-con-7-disenos-en-4.jpg',
      '/img/productos/etsy/paquete-de-tazas-de-sublimacion-fort-gaming-con-7-disenos-en-5.jpg',
    ],
    category: 'diseños',
    psychologicalBenefits: [
      'Conecta con la pasión por los videojuegos',
      'Refuerza la identidad gamer',
      'Crea un sentido de comunidad con otros jugadores',
      'Activa memorias positivas de experiencias de juego'
    ],
    neuroscience: {
      title: 'El Cerebro Gamer',
      description: 'Los videojuegos activan los centros de recompensa del cerebro de manera similar a otras actividades placenteras. Una taza con diseño gaming te conecta con esas experiencias positivas, mejorando tu estado de ánimo.'
    },
    dailyImpact: 'Cada mañana, tu taza gamer te recuerda tus victorias y te motiva para nuevos desafíos, tanto virtuales como reales.',
    mentalBenefits: [
      'Conexión con la comunidad gamer',
      'Refuerzo de la identidad personal',
      'Motivación mediante recuerdos de logros',
      'Expresión de pasiones personales'
    ]
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}
