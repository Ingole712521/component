import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import type { TemplateMeta } from "@/templates";

export function PreviewChrome({ template }: { template: TemplateMeta }) {
  return (
    <div className="sticky top-0 z-20 flex h-14 items-center justify-between gap-4 border-b border-(--color-border) bg-(--background) px-4 sm:px-6">
      <Link href="/#templates" className="nav-link inline-flex items-center gap-2">
        <ArrowLeft size={16} weight="bold" />
        Templates
      </Link>
      <p className="type-ui truncate">
        {template.name}
        <span className="type-meta text-(--muted)">
          {" "}
          {template.studentName}
        </span>
      </p>
      <span className="type-meta text-(--muted) hidden sm:inline">
        Live preview
      </span>
    </div>
  );
}
