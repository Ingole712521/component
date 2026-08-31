import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { TemplateEntry } from "@/templates";
import { LivePreviewFrame } from "./live-preview-frame";

export function TemplateCard({
  template,
  featured = false,
}: {
  template: TemplateEntry;
  featured?: boolean;
}) {
  const { Component } = template;
  const heightClass = featured
    ? "h-[300px] sm:h-[380px] lg:h-[460px]"
    : "h-[260px] sm:h-[300px] lg:h-[340px]";

  return (
    <article className="surface-panel-hover relative overflow-hidden">
      <LivePreviewFrame
        className={heightClass}
        label={`${template.name} live preview`}
      >
        <Component />
      </LivePreviewFrame>
      <div className="flex items-end justify-between gap-4 px-5 py-4">
        <div>
          <p className="type-meta text-(--muted) mb-1">{template.category}</p>
          <h2 className="type-ui">{template.name}</h2>
          <p className="body-sm mt-1 max-w-[42ch]">{template.tagline}</p>
        </div>
        <span className="btn-ghost shrink-0 text-(--foreground)">
          Preview
          <ArrowUpRight size={16} weight="bold" />
        </span>
      </div>
      <Link href={`/preview/${template.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">Preview {template.name}</span>
      </Link>
    </article>
  );
}
