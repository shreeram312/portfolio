import { createClient, type SanityClient } from "next-sanity";

import { apiVersion, dataset, isSanityConfigured, projectId } from "../env";

export const client: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
    })
  : null;
