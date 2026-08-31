import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";

export function DownloadSource({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  return (
    <a
      href={`/api/download/${slug}`}
      className={className}
      download={`animioui-${slug}.zip`}
    >
      Download source
      <DownloadSimple size={14} weight="bold" />
    </a>
  );
}
