import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    departure: v.string(),
    arrival: v.string(),
    date: v.string(),
    passengers: v.number(),
    type: v.union(v.literal("one-way"), v.literal("round-trip")),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("bookings", {
      ...args,
      status: "pending",
    });
    return id;
  },
});

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("bookings").order("desc").take(100);
  },
});