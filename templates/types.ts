import type { ComponentType } from "react";

export type TemplateCategory = "Engineering" | "Design" | "Campus";

export type TemplateMeta = {
  slug: string;
  name: string;
  category: TemplateCategory;
  tagline: string;
  studentName: string;
  studentProgram: string;
};

export type TemplateEntry = TemplateMeta & {
  Component: ComponentType;
};
