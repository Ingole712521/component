import DocsSidebar from "./_components/docs-sidebar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="page-container-wide flex gap-8 lg:gap-12 min-h-[calc(100vh-var(--header-height))]">
      <DocsSidebar />
      <div className="flex-1 min-w-0 py-8 lg:py-12 pb-20">{children}</div>
    </div>
  );
}
