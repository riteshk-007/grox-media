export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
};

export function isSanityConfigured(): boolean {
  return Boolean(sanityConfig.projectId && sanityConfig.projectId.length > 0);
}
