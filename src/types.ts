export type EventType = 'corporate' | 'wedding' | 'party' | 'taco';

export interface CateringCompany {
  id: string;
  name: string;
  categories: string[]; // e.g. ['corporate', 'weddings', 'tacos', 'film', 'charcuterie']
  area: string;
  tags: string[];
  url?: string;
  phone?: string;
  rating?: number;
  reviewCount?: number;
  priceLevel?: '$' | '$$' | '$$$' | '$$$$';
  description?: string;
  isClaimable?: boolean;
}

export interface TacoProvider {
  id: string;
  name: string;
  category: ('mobile' | 'truck' | 'event')[];
  area: string;
  description: string;
  url: string;
  specialty?: string;
  minGuests?: number;
  startingPrice?: string;
}

export interface QuoteCalculation {
  eventType: string;
  ratePerGuest: number;
  guests: number;
  totalPrice: number;
  addonsTotal: number;
  grandTotal: number;
}
