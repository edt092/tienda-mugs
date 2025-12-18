import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Hoy es un Día Fenomenal',
    slug: 'hoy-es-un-dia-fenomenal',
    tagline: 'Comienza cada día con mentalidad positiva',
    description: 'Cada mañana es una nueva oportunidad para reprogramar tu mente hacia el éxito. Esta taza no es solo un recipiente para tu café, es tu compañera diaria en la construcción de una mentalidad ganadora.',
    price: 29.99,
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
    price: 29.99,
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
    price: 29.99,
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
    price: 39.99,
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
    price: 39.99,
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
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}
