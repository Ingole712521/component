/**
 * All student portfolio templates live in this folder.
 * To add one: create a folder with meta + component, then register it here.
 */
import { AtlasPortfolio } from "./atlas/atlas-portfolio";
import { atlasMeta } from "./atlas/meta";
import { KeelPortfolio } from "./keel/keel-portfolio";
import { keelMeta } from "./keel/meta";
import { LumenPortfolio } from "./lumen/lumen-portfolio";
import { lumenMeta } from "./lumen/meta";
import type { TemplateEntry } from "./types";

export type { TemplateCategory, TemplateEntry, TemplateMeta } from "./types";

export const templates: TemplateEntry[] = [
  { ...atlasMeta, Component: AtlasPortfolio },
  { ...lumenMeta, Component: LumenPortfolio },
  { ...keelMeta, Component: KeelPortfolio },
];

export function getTemplate(slug: string): TemplateEntry | undefined {
  return templates.find((template) => template.slug === slug);
}

export function getTemplateSlugs(): string[] {
  return templates.map((template) => template.slug);
}
