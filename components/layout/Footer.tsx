import Link from "next/link";

const links = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/docs/components/button" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "GitHub", href: "https://github.com/Ingole712521/component", external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-8">
      <div className="page-container-wide py-14 grid gap-10 sm:grid-cols-[1.2fr_1fr] items-start">
        <div>
          <p className="text-lg font-semibold tracking-tight mb-2">Animioui</p>
          <p className="body-sm max-w-sm">
            Copy-paste motion components for Next.js. Source you keep.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 sm:justify-end" aria-label="Footer">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
      <div className="page-container-wide py-5 border-t border-[var(--color-border)]">
        <p className="text-xs text-[var(--muted)]">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://nehalingole.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            Nehal Ingole
          </a>
        </p>
      </div>
    </footer>
  );
}
