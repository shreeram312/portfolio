import { defineField, defineType } from "sanity";

/** A project card on the home page. */
export const shreeram = defineType({
  name: "shreeram",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "One short line shown under the title, e.g. “AI compliance copilot for InfoSec teams.”",
    }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "stack",
      title: "Tech stack",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description: "Rendered as chips on the card, e.g. Next.js, PostgreSQL, Stripe",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "live",
      options: {
        layout: "radio",
        direction: "horizontal",
        list: [
          { title: "Live", value: "live" },
          { title: "Building", value: "building" },
          { title: "Archived", value: "archived" },
        ],
      },
    }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers show first. Leave empty to sort by creation date.",
    }),
    defineField({ name: "githubUrl", title: "GitHub URL", type: "url" }),
    defineField({ name: "projectUrl", title: "Project URL", type: "url" }),
  ],
  preview: {
    select: { title: "title", subtitle: "tagline", media: "image" },
  },
});
