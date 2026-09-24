import type { Industry, LocationKey } from "../industryPages";
import type { LocalDepth } from "../industryLocalDepth";
import type { IndustryExtras } from "../industryExtras";

type Faq = { question: string; answer: string };

/**
 * Everything one industry needs for its Gurgaon and Dwarka pages, kept
 * together so new industries can be added as a single self-contained entry.
 */
export type IndustryBundle = {
  industry: Industry;
  extras: IndustryExtras;
  local: Record<LocationKey, { intro: string; faq: Faq; depth: LocalDepth }>;
};
