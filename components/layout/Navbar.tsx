"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Docs", href: "/docs" },
  { name: "Components", href: "/docs/components/button" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Contact", href: "/contact" },
];

function isLinkActive(pathname: string, href: string) {
  if (href === "/docs") return pathname === "/docs";
  if (href.startsWith("/docs/")) return pathname.startsWith(href);
  if (href.startsWith("/#")) return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 border-b border-white/8 bg-[var(--background)]/90 backdrop-blur-md">
      <div className="page-container-wide h-full flex items-center justify-between gap-6">
        <Link href="/" className="text-sm font-medium text-white tracking-tight shrink-0">
          Animioui
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`nav-link ${isLinkActive(pathname, link.href) ? "nav-link-active" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link
            href="https://github.com/Ingole712521/component"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </Link>
          <Link href="/docs" className="btn-primary">
            Get started
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden btn-ghost"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-16 inset-x-0 border-b border-white/8 bg-[var(--background)] px-5 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-2 py-3 rounded-md text-sm ${
                  isLinkActive(pathname, link.href)
                    ? "text-white bg-white/5"
                    : "text-[var(--muted)]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-white/8 my-2" />
            <Link href="/docs" className="btn-primary w-full mt-1">
              Get started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
