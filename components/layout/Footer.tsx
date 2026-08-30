import Link from "next/link";

const links = [
  { label: "Docs", href: "/docs" },
  { label: "GitHub", href: "https://github.com/Ingole712521/component", external: true },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="page-container py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-sm font-medium text-white mb-1">Animioui UI</p>
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} · Built by{" "}
            <a
              href="https://nehalingole.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Nehal Ingole
            </a>
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--muted)] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-[var(--muted)] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </footer>
  );
}
