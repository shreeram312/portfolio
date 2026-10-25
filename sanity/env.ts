export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-08-23";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";

/**
 * True when the Sanity env vars are present. When false the site renders
 * local fallback content instead of crashing (handy for local dev without .env).
 */
export const isSanityConfigured = Boolean(projectId && dataset);
