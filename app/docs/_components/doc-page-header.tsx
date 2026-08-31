import { ChevronRight } from "lucide-react";

type DocPageHeaderProps = {
  section: string;
  title: string;
  description?: string;
};

export function DocPageHeader({ section, title, description }: DocPageHeaderProps) {
  return (
    <header className="space-y-3 pb-6 border-b border-[var(--color-border)]">
      <nav className="flex items-center gap-1.5 text-xs text-[var(--muted)]" aria-label="Breadcrumb">
        <span>{section}</span>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--foreground)]">{title}</span>
      </nav>
      <h1 className="text-3xl md:text-[2.15rem] font-semibold tracking-tight">{title}</h1>
      {description ? (
        <p className="text-[var(--muted)] text-base max-w-[62ch] leading-relaxed">{description}</p>
      ) : null}
    </header>
  );
}
