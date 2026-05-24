import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  ...authTables,
  resumeProfiles: defineTable({
    slug: v.string(),
    payload: v.any(),
    updatedAt: v.number(),
  }).index("by_slug", ["slug"]),
});
