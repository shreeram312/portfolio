import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, isSanityConfigured, projectId } from "../env";

// https://www.sanity.io/docs/image-url
export const urlFor = (source: SanityImageSource) => {
  if (!isSanityConfigured) {
    throw new Error("Sanity is not configured (missing NEXT_PUBLIC_SANITY_* env vars)");
  }
  return createImageUrlBuilder({ projectId, dataset }).image(source);
};
