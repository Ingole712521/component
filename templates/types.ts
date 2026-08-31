import type { ComponentType } from "react";

export const TEMPLATE_CATEGORIES = [
  "Engineering",
  "Design",
  "Campus",
  "Data",
  "Architecture",
  "Writing",
  "Product",
  "Health",
  "Policy",
  "Finance",
] as const;

export type TemplateCategory = (typeof TEMPLATE_CATEGORIES)[number];

export type TemplateMeta = {
  slug: string;
  name: string;
  category: TemplateCategory;
  tagline: string;
  studentName: string;
  studentProgram: string;
  featured?: boolean;
};

export type TemplateEntry = TemplateMeta & {
  Component: ComponentType;
};

export function isTemplateCategory(value: string): value is TemplateCategory {
  return TEMPLATE_CATEGORIES.some((category) => category === value);
}
