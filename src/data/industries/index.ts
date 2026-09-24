import type { IndustryBundle } from "./types";
import { wellnessBundles } from "./wellness";
import { hospitalityPropertyBundles } from "./hospitality-property";
import { homeServiceBundles } from "./home-services";
import { autoEventsBundles } from "./auto-events";
import { professionalBundles } from "./professional";

export const industryBundles: IndustryBundle[] = [
  ...wellnessBundles,
  ...hospitalityPropertyBundles,
  ...homeServiceBundles,
  ...autoEventsBundles,
  ...professionalBundles,
];
