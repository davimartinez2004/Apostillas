import { ServiceItem, StepItem, TestimonialItem, FaqItem, TrackingRecord, PrizeItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'apostilla-colombia',
    code: 'CO',
    badge: 'Cancillería',
    badgeType: 'cancilleria',
    title: 'Apostillas Colombia',
    subtitle: '(Rápido y al punto)',
    countryFlag: '🇨🇴',
    features: [
      'Antecedentes judiciales',
      'Partidas de nacimiento y matrimonio',
      'Títulos y actas universitarias'
    ],
    startingPrice: '$85.000 COP',
    turnaroundTime: '24 a 48 horas'
  },
  {
    id: 'apostilla-venezuela',
    code: 'VE',
    badge: 'SAREN & GTU',
    badgeType: 'saren',
    title: 'Apostillas Venezuela',
    subtitle: '(Saren, GTU y MPPRE sin enredos)',
    countryFlag: '🇻🇪',
    features: [
      'Legalización GTU de carreras',
      'Partidas de nacimiento Saren',
      'Antecedentes penales MPPRE'
    ],
    startingPrice: '$45 USD',
    turnaroundTime: '3 a 5 días hábiles'
  },
  {
    id: 'apostilla-internacional',
    code: '🌐',
    badge: 'La Haya 1961',
    badgeType: 'lahaya',
    title: 'Apostillas Internacionales',
    subtitle: '(USA, España, Chile y más)',
    countryFlag: '🌍',
    features: [
      'Secretarías de Estado USA 🇺🇸',
      'Legalizaciones para España 🇪🇸',
      'Poderes especiales remotos'
    ],
    startingPrice: '$75 USD',
    turnaroundTime: '2 a 4 días hábiles'
  },
  {
    id: 'citas-pasaporte',
    code: '🛂',
    badge: 'Citas VIP',
    badgeType: 'vip',
    title: 'Citas de Pasaporte',
    subtitle: '(Te conseguimos la tuya)',
    countryFlag: '✈️',
    features: [
      'Monitoreo diario de cupos',
      'Citas Cancillería & Consulados',
      'Recuperación de usuarios Saime'
    ],
    startingPrice: '$35 USD',
    turnaroundTime: 'Asignación exprés'
  }
];

export const STEPS_DATA: StepItem[] = [
  {
    number: 1,
    badgeColor: 'border-[#ff2d78] text-[#ff2d78] bg-[#ff2d78]/10',
    icon: '📸',
    title: 'Nos mandas foto o PDF 📸',
    description: 'Tomas foto clara con tu cel o subes el archivo en nuestro formulario o directo por WhatsApp. ¡Así de simple!'
  },
  {
    number: 2,
    badgeColor: 'border-[#00ffcc] text-[#00ffcc] bg-[#00ffcc]/10',
    icon: '🪄',
    title: 'Nosotros hacemos la magia legal 🪄',
    description: 'Revisamos que todo esté perfecto y gestionamos ante la Cancillería o entidad oficial sin que muevas un solo dedo.'
  },
  {
    number: 3,
    badgeColor: 'border-[#ffe04a] text-[#ffe04a] bg-[#ffe04a]/10',
    icon: '📬',
    title: 'Recibes tu documento sellado 📬',
    description: 'Te llega tu apostilla con código QR directo a tu correo y WhatsApp, lista para viajar y presentar donde quieras ✈️.'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'mariana',
    name: 'Mariana V.',
    initials: 'MV',
    avatarBg: 'bg-[#ff2d78]/20 text-[#ff2d78] border border-[#ff2d78]/30',
    location: 'Desde España 🇪🇸',
    countryCode: 'ES',
    rating: 5,
    text: '“Estaba súper varada en Madrid necesitando apostillar mi título y partida de nacimiento de Caracas. Los chicos me resolvieron todo en días y con su QR oficial. ¡Los mejores!”',
    service: 'Apostilla Universitaria y Partida'
  },
  {
    id: 'julian',
    name: 'Julián G.',
    initials: 'JG',
    avatarBg: 'bg-[#00ffcc]/20 text-[#00ffcc] border border-[#00ffcc]/30',
    location: 'Desde Miami, EE.UU. 🇺🇸',
    countryCode: 'US',
    rating: 5,
    text: '“Llevaba semanas trasnochando para la cita del pasaporte colombiano y nada. Les escribí por WhatsApp, fueron súper panas y en pocos días ya tenía mi cita asignada.”',
    service: 'Cita Pasaporte Bogotá'
  },
  {
    id: 'camila',
    name: 'Camila L.',
    initials: 'CL',
    avatarBg: 'bg-[#ffe04a]/20 text-[#ffe04a] border border-[#ffe04a]/30',
    location: 'Desde Santiago, Chile 🇨🇱',
    countryCode: 'CL',
    rating: 5,
    text: '“Pagué por PSE sin ningún problema, me enviaron factura legal y mis antecedentes judiciales apostillados llegaron limpios a mi correo. Cero complicaciones.”',
    service: 'Antecedentes Judiciales Colombia'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿De verdad no tengo que viajar ni hacer filas?',
    answer: 'Totalmente verídico. Todo el trámite es 100% digital bajo los protocolos de la Convención de La Haya y los sistemas electrónicos de las Cancillerías (Colombia, Venezuela, EE.UU., etc.). Solo envías el documento escaneado o en foto nítida y nosotros radicamos, validamos la firma y te enviamos la apostilla con QR oficial.'
  },
  {
    id: 'faq-2',
    question: '¿Los sellos son válidos en embajadas y universidades?',
    answer: 'Sí, tienen validez jurídica internacional plena. Cada apostilla cuenta con un código alfanumérico único y un código QR que enlaza de manera instantánea y pública a la base de datos oficial del Ministerio de Relaciones Exteriores o entidad emisora para que cualquier cónsul, funcionario o decano lo certifique.'
  },
  {
    id: 'faq-3',
    question: '¿Cómo y cuándo pago mi trámite?',
    answer: 'Manejamos tarifas transparentes y pagos seguros con PSE, transferencias en Colombia (Bancolombia, Nequi, Daviplata), Zelle (USA), Bizum (España), tarjetas internacionales y PayPal. Se te entrega soporte fiscal y factura con comprobante antes de la radicación final.'
  },
  {
    id: 'faq-4',
    question: '¿Cuánto tiempo tarda en salir mi apostilla?',
    answer: 'En Colombia el tiempo promedio es de 24 a 48 horas hábiles. En Venezuela (SAREN / GTU / MPPRE) varía de 3 a 7 días hábiles según la disponibilidad del sistema. Disponemos de servicio Exprés de urgencia en caso de que tengas vuelo próximo.'
  },
  {
    id: 'faq-5',
    question: '¿Mis documentos y datos están protegidos?',
    answer: 'Cumplimos con la Ley 1581 de Protección de Datos Personales (Habeas Data) y estándares de confidencialidad consular. Tus archivos se cifran y únicamente se utilizan para la gestión del trámite solicitado.'
  }
];

export const PRIZES_DATA: PrizeItem[] = [
  {
    id: 1,
    label: '15% OFF',
    color: '#ff2d78',
    textColor: '#ffffff',
    discountCode: 'RULETA15',
    type: 'discount',
    message: '¡Felicidades! Ganaste 15% de descuento en tu próxima apostilla.'
  },
  {
    id: 2,
    label: 'ENVÍO EXPRESS ⚡',
    color: '#00ffcc',
    textColor: '#0a0a12',
    discountCode: 'EXPRESSVIP',
    type: 'bonus',
    message: '¡Prioridad máxima! Tu trámite pasa a la fila de entrega en 24h sin costo extra.'
  },
  {
    id: 3,
    label: '10% OFF',
    color: '#383854',
    textColor: '#ffffff',
    discountCode: 'PANAS10',
    type: 'discount',
    message: '¡Ganaste 10% de descuento directo en cualquier trámite consular!'
  },
  {
    id: 4,
    label: 'ASESORÍA VIP 🦄',
    color: '#ffe04a',
    textColor: '#0a0a12',
    discountCode: 'VIPPANAS',
    type: 'freebie',
    message: '¡Revisión de documentos gratuita 1 a 1 por videollamada o WhatsApp!'
  },
  {
    id: 5,
    label: '20% OFF 🚀',
    color: '#ff2d78',
    textColor: '#ffffff',
    discountCode: 'SUPER20',
    type: 'discount',
    message: '¡Premio mayor! 20% de descuento en trámites para toda tu familia.'
  },
  {
    id: 6,
    label: 'BONO $10 USD',
    color: '#00e5ff',
    textColor: '#0a0a12',
    discountCode: 'BONO10',
    type: 'bonus',
    message: '¡Cupón de $10 USD aplicable a cualquier trámite internacional o pasaporte!'
  }
];

export const DEMO_TRACKING: Record<string, TrackingRecord> = {
  'GT-2026-SR': {
    code: 'GT-2026-SR',
    clientName: 'SANTIAGO ROJAS M.',
    country: 'Colombia 🇨🇴',
    serviceType: 'Apostilla de Título y Partida',
    documentType: 'Partida de Nacimiento + Título Profesional',
    status: 'apostillado',
    statusText: 'LISTO PARA VIAJAR ✈️',
    updatedAt: 'Hace 12 minutos',
    qrVerified: true,
    steps: [
      { title: 'Recepción & Verificación', description: 'Documentos recibidos en alta resolución y validados.', completed: true, date: '10 Sep - 09:30 AM' },
      { title: 'Radicación Consular', description: 'Ingresado al sistema oficial de Cancillería.', completed: true, date: '10 Sep - 11:15 AM' },
      { title: 'Firma y Sello de La Haya', description: 'Aprobado con firma electrónica certificada.', completed: true, date: '10 Sep - 02:45 PM' },
      { title: 'Entrega Digital', description: 'Enviado con QR y descargable en PDF.', completed: true, date: '10 Sep - 03:20 PM' }
    ]
  },
  'GT-VEN-4102': {
    code: 'GT-VEN-4102',
    clientName: 'MARIANA VALENCIA P.',
    country: 'Venezuela 🇻🇪',
    serviceType: 'Legalización SAREN + Apostilla MPPRE',
    documentType: 'Acta de Grado Universitaria',
    status: 'en_cancilleria',
    statusText: 'EN PROCESO CANCILLERÍA ⏳',
    updatedAt: 'Hace 1 hora',
    qrVerified: true,
    steps: [
      { title: 'Cotejo y Digitalización', description: 'Validación de firmas y sellos húmedos.', completed: true, date: '08 Sep' },
      { title: 'Validación GTU Universitaria', description: 'Aprobado por el Ministerio de Educación.', completed: true, date: '09 Sep' },
      { title: 'Generación Apostilla MPPRE', description: 'En turno de sellado digital.', completed: false },
      { title: 'Emisión con Código de Validación', description: 'Pendiente entrega.', completed: false }
    ]
  }
};
