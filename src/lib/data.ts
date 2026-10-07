import { SERVICE_IDS } from "@/convex/lib/catalog.ts";
import type { ServiceId, BarberId, BookingStatus } from "@/convex/lib/catalog.ts";

export type { ServiceId, BarberId, BookingStatus };
export { SLOT_TIMES, SENIOR_SERVICES, isSeniorSlotAllowed } from "@/convex/lib/catalog.ts";

export const SALON = {
  name: "Uniquelle Salong",
  street: "Lundavägen 65",
  postal: "232 34 Arlöv",
  mapsUrl: "https://maps.google.com/?q=Lundavägen+65,+232+34+Arlöv",
  bokadirektUrl: "https://www.bokadirekt.se/places/uniquelle-salong-55995",
  hours: "Alla dagar 08:00 – 21:00",
  rating: "4.9",
  reviews: 61,
} as const;

export type Service = {
  id: ServiceId;
  name: string;
  price: number;
  fromPrice?: boolean; // price is a starting price ("från")
  duration?: number; // minutes, when stated
  description: string;
};

export type Barber = {
  id: BarberId;
  name: string;
  image: string;
  specialties: string[];
  experience: string;
  bio: string;
  services: ServiceId[];
};

export const SERVICES: Service[] = [
  { id: "mens-cut", name: "Klippning herr", price: 350, duration: 30, description: "Klippning anpassad efter ditt hår och dina önskemål." },
  { id: "womens-cut", name: "Klipp dam", price: 450, fromPrice: true, duration: 45, description: "Personlig damklippning med fokus på form och stil." },
  { id: "xl-cut", name: "Klippning XL", price: 520, fromPrice: true, description: "Klippning för långt eller tjockt hår." },
  { id: "coloring", name: "Hårfärgning", price: 800, duration: 90, description: "Färgning av kort hår, en färg." },
  { id: "blonde-highlights", name: "Slingor blond", price: 1800, fromPrice: true, description: "Folieslingor och toning för en kall blond nyans." },
  { id: "senior-mens-cut", name: "Pensionär klippning herr", price: 250, description: "Gäller måndag–fredag kl. 09–14." },
  { id: "senior-womens-cut", name: "Pensionär klipp dam", price: 320, description: "Gäller måndag–fredag kl. 09–14." },
];

export const BARBERS: Barber[] = [
  {
    id: "kamilla",
    name: "Kamilla",
    image: "https://images.unsplash.com/photo-1629397685944-7073f5589754?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=450",
    specialties: ["Kalla blonda nyanser", "Hårfärgning", "Klippning"],
    experience: "25 år",
    bio: "Jag har arbetat som frisör i 25 år och älskar mitt yrke! Jag brinner särskilt för kalla blonda nyanser – men skapar självklart alla typer av fantastiska hårfärger och frisyrer. Hos mig får du en personlig upplevelse och ett resultat anpassat just för dig!",
    services: [...SERVICE_IDS],
  },
];

export function getServiceById(id: ServiceId): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}

export function getBarberById(id: BarberId): Barber | undefined {
  return BARBERS.find((b) => b.id === id);
}

export function formatPrice(price: number, fromPrice = false): string {
  return `${fromPrice ? "från " : ""}${price} kr`;
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h} tim ${m} min` : `${h} tim`;
}

export const STATUS_LABELS: Record<BookingStatus, string> = {
  confirmed: "Bekräftad",
  pending: "Väntande",
  cancelled: "Avbokad",
  completed: "Genomförd",
};
