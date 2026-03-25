import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;

export default defineConfig({
  name: "grox-media-blog",
  title: "Grox Media Blog",
  projectId: projectId || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
