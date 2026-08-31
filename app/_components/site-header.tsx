import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-(--color-border) bg-(--background)/80 backdrop-blur-md">
      <div className="page-container-wide flex h-16 items-center justify-between">
        <Link href="/" className="type-ui">
          Animioui
        </Link>
        <a href="#templates" className="nav-link">
          Templates
        </a>
      </div>
    </header>
  );
}
