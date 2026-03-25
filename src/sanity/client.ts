import { createClient } from "next-sanity";
import { isSanityConfigured, sanityConfig } from "./config";

export const sanityClient = createClient({
  projectId: sanityConfig.projectId || "missing",
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  useCdn: sanityConfig.useCdn,
});

export function getSanityClient() {
  if (!isSanityConfigured()) return null;
  return sanityClient;
}
