import { ChevronRight } from "lucide-react";

type DocPageHeaderProps = {
  section: string;
  title: string;
  description?: string;
};

export function DocPageHeader({ section, title, description }: DocPageHeaderProps) {
  return (
    <header className="space-y-3 pb-2 border-b border-white/8">
      <div className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
        <span>{section}</span>
        <ChevronRight className="w-3 h-3" />
        <span className="text-white">{title}</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white">{title}</h1>
      {description ? <p className="text-[var(--muted)] text-base max-w-2xl">{description}</p> : null}
    </header>
  );
}
