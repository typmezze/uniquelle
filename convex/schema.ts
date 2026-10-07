import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { barberValidator, serviceValidator, statusValidator } from "./lib/catalog.ts";

export default defineSchema({
  users: defineTable({
    tokenIdentifier: v.string(),
    name: v.optional(v.string()),
    email: v.optional(v.string()),
  }).index("by_token", ["tokenIdentifier"]),

  bookings: defineTable({
    customerName: v.string(),
    email: v.string(),
    phone: v.string(),
    service: serviceValidator,
    barber: barberValidator,
    date: v.string(), // YYYY-MM-DD, shop-local calendar day
    time: v.string(), // HH:mm
    status: statusValidator,
    price: v.number(),
  })
    .index("by_barber_and_date", ["barber", "date"])
    .index("by_date", ["date"])
    .index("by_status_and_date", ["status", "date"]),
});
