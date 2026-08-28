import { ChevronRight } from "lucide-react";

type DocPageHeaderProps = {
  section: string;
  title: string;
  description?: string;
};

export function DocPageHeader({ section, title, description }: DocPageHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-accent text-sm font-medium">
        <span>{section}</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-white">{title}</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">{title}</h1>
      {description ? <p className="text-zinc-400 max-w-xl">{description}</p> : null}
    </div>
  );
}
