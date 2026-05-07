export const initialReports = [
  {
    id: 'RPT-101',
    category: 'Reparación de baches y pavimentación',
    location: 'Av. Vallarta 1180',
    date: '19 abr 2026',
    status: 'Pendiente',
    urgency: 'Alta',
    description: 'Bache profundo que obliga a invadir el carril contiguo.',
  },
  {
    id: 'RPT-102',
    category: 'Luminarias apagadas o en mal estado',
    location: 'Calle Morelos 244',
    date: '18 abr 2026',
    status: 'En revisión',
    urgency: 'Media',
    description: 'Poste apagado desde hace dos noches en zona peatonal.',
  },
  {
    id: 'RPT-103',
    category: 'Fugas de agua',
    location: 'Av. México 620',
    date: '17 abr 2026',
    status: 'Atendido',
    urgency: 'Alta',
    description: 'Se observa fuga continua sobre la banqueta y charcos grandes.',
  },
  {
    id: 'RPT-104',
    category: 'Recolección en vía pública',
    location: 'Niños Héroes y Marsella',
    date: '15 abr 2026',
    status: 'Pendiente',
    urgency: 'Baja',
    description: 'Basura acumulada junto al cruce peatonal desde hace varios días.',
  },
];

export const initialPins = [
  { id: 'pin-1', category: 'Baches', top: '22%', left: '30%', color: '#f97316' },
  { id: 'pin-2', category: 'Luminarias', top: '32%', left: '62%', color: '#f59e0b' },
  { id: 'pin-3', category: 'Fugas de agua', top: '44%', left: '47%', color: '#0ea5e9' },
  { id: 'pin-4', category: 'Vía pública', top: '58%', left: '28%', color: '#64748b' },
  { id: 'pin-5', category: 'Basura domiciliaria', top: '69%', left: '70%', color: '#8b5cf6' },
  { id: 'pin-6', category: 'Parques y jardines', top: '77%', left: '40%', color: '#15803d' },
];

export const pinDropSlots = [
  { top: '24%', left: '58%' },
  { top: '39%', left: '24%' },
  { top: '51%', left: '72%' },
  { top: '64%', left: '49%' },
  { top: '76%', left: '33%' },
];
