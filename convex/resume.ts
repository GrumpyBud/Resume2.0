import { mutation, query } from "./_generated/server";
import { resumeProfile } from "../shared/resume-content";

export const getProfile = query({
  args: {},
  handler: async (ctx) => {
    const row = await ctx.db
      .query("resumeProfiles")
      .withIndex("by_slug", (q) => q.eq("slug", resumeProfile.slug))
      .unique();

    return row?.payload ?? resumeProfile;
  },
});

export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    const now = Date.now();
    const existing = await ctx.db
      .query("resumeProfiles")
      .withIndex("by_slug", (q) => q.eq("slug", resumeProfile.slug))
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, {
        payload: resumeProfile,
        updatedAt: now,
      });

      return { status: "updated", slug: resumeProfile.slug };
    }

    await ctx.db.insert("resumeProfiles", {
      slug: resumeProfile.slug,
      payload: resumeProfile,
      updatedAt: now,
    });

    return { status: "created", slug: resumeProfile.slug };
  },
});
