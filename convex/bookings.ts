import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import type { ServiceId } from "./lib/catalog.ts";
import {
  BARBER_SERVICES,
  SENIOR_SERVICES,
  SERVICE_PRICES,
  SLOT_TIMES,
  isSeniorSlotAllowed,
  barberValidator,
  serviceValidator,
  statusValidator,
} from "./lib/catalog.ts";

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function badRequest(message: string): never {
  throw new ConvexError({ message, code: "BAD_REQUEST" });
}

// The salon is in Arlöv (Sweden), so "today" and "now" are evaluated in Stockholm time.
function stockholmNow() {
  const parts = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Stockholm",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return { date: `${get("year")}-${get("month")}-${get("day")}`, time: `${get("hour")}:${get("minute")}` };
}

function isValidSlot(date: string, time: string, service: ServiceId): boolean {
  if (!(SLOT_TIMES as readonly string[]).includes(time)) return false;
  if (SENIOR_SERVICES.includes(service)) {
    const weekday = new Date(`${date}T12:00:00Z`).getUTCDay();
    return isSeniorSlotAllowed(weekday, time);
  }
  return true;
}

/** Public: which times are already taken for a barber on a given day (no personal data). */
export const takenSlots = query({
  args: { barber: barberValidator, date: v.string() },
  handler: async (ctx, args) => {
    if (!DATE_RE.test(args.date)) return [];
    const bookings = await ctx.db
      .query("bookings")
      .withIndex("by_barber_and_date", (q) => q.eq("barber", args.barber).eq("date", args.date))
      .take(50);
    return bookings.filter((b) => b.status !== "cancelled").map((b) => b.time);
  },
});

/** Public: customers book without signing in. */
export const create = mutation({
  args: {
    customerName: v.string(),
    email: v.string(),
    phone: v.string(),
    service: serviceValidator,
    barber: barberValidator,
    date: v.string(),
    time: v.string(),
  },
  handler: async (ctx, args) => {
    const customerName = args.customerName.trim();
    const email = args.email.trim().toLowerCase();
    const phone = args.phone.trim();

    if (customerName.length < 2 || customerName.length > 100) badRequest("Ange ett giltigt namn");
    if (!EMAIL_RE.test(email) || email.length > 200) badRequest("Ange en giltig e-postadress");
    if (phone.replace(/\D/g, "").length < 7 || phone.length > 30) badRequest("Ange ett giltigt telefonnummer");
    if (!DATE_RE.test(args.date)) badRequest("Ogiltigt datum");
    if (!isValidSlot(args.date, args.time, args.service)) badRequest("Den valda tiden är inte tillgänglig");
    if (!BARBER_SERVICES[args.barber].includes(args.service)) {
      badRequest("Frisören erbjuder inte den valda tjänsten");
    }

    const now = stockholmNow();
    if (args.date < now.date || (args.date === now.date && args.time <= now.time)) {
      badRequest("Den valda tiden har redan passerat");
    }

    const sameDay = await ctx.db
      .query("bookings")
      .withIndex("by_barber_and_date", (q) => q.eq("barber", args.barber).eq("date", args.date))
      .take(50);
    if (sameDay.some((b) => b.time === args.time && b.status !== "cancelled")) {
      throw new ConvexError({ message: "Tiden blev precis bokad av någon annan. Välj en annan tid.", code: "CONFLICT" });
    }

    return await ctx.db.insert("bookings", {
      customerName,
      email,
      phone,
      service: args.service,
      barber: args.barber,
      date: args.date,
      time: args.time,
      status: "confirmed",
      price: SERVICE_PRICES[args.service],
    });
  },
});

