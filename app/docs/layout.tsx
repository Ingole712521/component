import DocsSidebar from "./_components/docs-sidebar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="page-container-wide flex items-start gap-8 lg:gap-12">
      <DocsSidebar />
      <div className="flex-1 min-w-0 py-8 lg:py-12 pb-20">{children}</div>
    </div>
  );
}
