import { v } from "convex/values";

// Shared between backend validation and the frontend booking flow.
export const SERVICE_IDS = [
  "mens-cut",
  "womens-cut",
  "senior-mens-cut",
  "senior-womens-cut",
  "xl-cut",
  "blonde-highlights",
  "coloring",
] as const;
export const BARBER_IDS = ["kamilla"] as const;
export const BOOKING_STATUSES = ["confirmed", "pending", "cancelled", "completed"] as const;

export type ServiceId = (typeof SERVICE_IDS)[number];
export type BarberId = (typeof BARBER_IDS)[number];
export type BookingStatus = (typeof BOOKING_STATUSES)[number];

// Open every day 08:00-21:00; last start leaves room for a full appointment.
export const SLOT_TIMES = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
] as const;

// Senior discount services are only offered Monday-Friday 09:00-14:00.
export const SENIOR_SERVICES: readonly ServiceId[] = ["senior-mens-cut", "senior-womens-cut"];
export const SENIOR_FIRST_SLOT = "09:00";
export const SENIOR_LAST_SLOT = "13:30";

export function isSeniorSlotAllowed(weekday: number, time: string): boolean {
  return weekday >= 1 && weekday <= 5 && time >= SENIOR_FIRST_SLOT && time <= SENIOR_LAST_SLOT;
}

export const BARBER_SERVICES: Record<BarberId, readonly ServiceId[]> = {
  kamilla: [...SERVICE_IDS],
};

// "Från"-priced services are stored at their starting price.
export const SERVICE_PRICES: Record<ServiceId, number> = {
  "mens-cut": 350,
  "womens-cut": 450,
  "senior-mens-cut": 250,
  "senior-womens-cut": 320,
  "xl-cut": 520,
  "blonde-highlights": 1800,
  coloring: 800,
};

export const serviceValidator = v.union(...SERVICE_IDS.map((id) => v.literal(id)));
export const barberValidator = v.union(...BARBER_IDS.map((id) => v.literal(id)));
export const statusValidator = v.union(...BOOKING_STATUSES.map((s) => v.literal(s)));
