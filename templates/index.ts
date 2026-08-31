/**
 * All student portfolio templates live in this folder.
 * To add one: create templates/<slug>/ with meta + component, then register it here.
 * Previews are served at /preview/<slug> and catalog pages at /templates/<slug>.
 */
import { AtlasPortfolio } from "./atlas/atlas-portfolio";
import { atlasMeta } from "./atlas/meta";
import { FlintPortfolio } from "./flint/flint-portfolio";
import { flintMeta } from "./flint/meta";
import { HarborPortfolio } from "./harbor/harbor-portfolio";
import { harborMeta } from "./harbor/meta";
import { KeelPortfolio } from "./keel/keel-portfolio";
import { keelMeta } from "./keel/meta";
import { LumenPortfolio } from "./lumen/lumen-portfolio";
import { lumenMeta } from "./lumen/meta";
import { MeridianPortfolio } from "./meridian/meridian-portfolio";
import { meridianMeta } from "./meridian/meta";
import { NimbusPortfolio } from "./nimbus/nimbus-portfolio";
import { nimbusMeta } from "./nimbus/meta";
import { QuillPortfolio } from "./quill/quill-portfolio";
import { quillMeta } from "./quill/meta";
import { RidgePortfolio } from "./ridge/ridge-portfolio";
import { ridgeMeta } from "./ridge/meta";
import { WillowPortfolio } from "./willow/willow-portfolio";
import { willowMeta } from "./willow/meta";
import {
  isTemplateCategory,
  type TemplateEntry,
} from "./types";

export type { TemplateCategory, TemplateEntry, TemplateMeta } from "./types";
export { TEMPLATE_CATEGORIES, isTemplateCategory } from "./types";

export const templates: TemplateEntry[] = [
  { ...atlasMeta, Component: AtlasPortfolio },
  { ...lumenMeta, Component: LumenPortfolio },
  { ...keelMeta, Component: KeelPortfolio },
  { ...nimbusMeta, Component: NimbusPortfolio },
  { ...harborMeta, Component: HarborPortfolio },
  { ...quillMeta, Component: QuillPortfolio },
  { ...ridgeMeta, Component: RidgePortfolio },
  { ...willowMeta, Component: WillowPortfolio },
  { ...meridianMeta, Component: MeridianPortfolio },
  { ...flintMeta, Component: FlintPortfolio },
];

export function getTemplate(slug: string): TemplateEntry | undefined {
  return templates.find((template) => template.slug === slug);
}

export function getTemplateSlugs(): string[] {
  return templates.map((template) => template.slug);
}

export function getFeaturedTemplates(): TemplateEntry[] {
  const featured = templates.filter((template) => template.featured);
  return featured.length > 0 ? featured : templates.slice(0, 3);
}

export function getTemplatesByCategory(category?: string): TemplateEntry[] {
  if (!category || !isTemplateCategory(category)) {
    return templates;
  }
  return templates.filter((template) => template.category === category);
}

export function getRelatedTemplates(slug: string, limit = 2): TemplateEntry[] {
  const current = getTemplate(slug);
  if (!current) return templates.slice(0, limit);

  const sameCategory = templates.filter(
    (template) =>
      template.slug !== slug && template.category === current.category,
  );
  const rest = templates.filter(
    (template) =>
      template.slug !== slug && template.category !== current.category,
  );
  return [...sameCategory, ...rest].slice(0, limit);
}
