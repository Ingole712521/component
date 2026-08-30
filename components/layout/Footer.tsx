import Link from "next/link";

const links = [
  { label: "Docs", href: "/docs" },
  { label: "GitHub", href: "https://github.com/Ingole712521/component", external: true },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="border-t border-violet-500/10 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="page-container py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400" />
            Animioui UI
          </p>
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} · Built by{" "}
            <a
              href="https://nehalingole.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-300 transition-colors"
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
