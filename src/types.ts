export interface ServiceItem {
  id: string;
  code: string;
  badge: string;
  badgeType: 'cancilleria' | 'saren' | 'lahaya' | 'vip';
  title: string;
  subtitle: string;
  countryFlag: string;
  features: string[];
  startingPrice?: string;
  turnaroundTime: string;
}

export interface StepItem {
  number: number;
  badgeColor: string;
  icon: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  location: string;
  countryCode: string;
  rating: number;
  text: string;
  service: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TrackingRecord {
  code: string;
  clientName: string;
  country: string;
  serviceType: string;
  documentType: string;
  status: 'en_revision' | 'en_cancilleria' | 'apostillado' | 'entregado';
  statusText: string;
  updatedAt: string;
  qrVerified: boolean;
  steps: {
    title: string;
    description: string;
    completed: boolean;
    date?: string;
  }[];
}

export interface PrizeItem {
  id: number;
  label: string;
  color: string;
  textColor: string;
  discountCode: string;
  type: 'discount' | 'bonus' | 'freebie';
  message: string;
}
