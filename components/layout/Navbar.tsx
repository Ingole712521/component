"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Docs", href: "/docs", match: "/docs" },
  { name: "Components", href: "/docs/components/button", match: "/docs/components" },
  { name: "Pricing", href: "/#pricing", match: null },
  { name: "Contact", href: "/contact", match: "/contact" },
];

function isLinkActive(pathname: string, href: string, match: string | null) {
  if (href.startsWith("/#")) return false;
  if (match === "/docs") return pathname === "/docs";
  if (match) return pathname === match || pathname.startsWith(`${match}/`);
  return pathname === href;
}

export default function Navbar() {
  const pathname = usePathname();
  const isDocs = pathname?.startsWith("/docs") ?? false;
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

  const links = (
    <>
      {navLinks.map((link) => {
        const active = isLinkActive(pathname, link.href, link.match);
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`nav-link ${active ? "nav-link-active" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );

  return (
    <div
      className={
        isDocs
          ? "fixed top-0 inset-x-0 z-50"
          : "fixed top-4 inset-x-0 z-50 px-4 flex justify-center"
      }
    >
      <header
        className={
          isDocs
            ? "h-16 border-b border-[var(--color-border)] bg-[var(--background)]"
            : "island-nav h-14 w-full max-w-5xl"
        }
      >
        <div className={`${isDocs ? "page-container-wide" : "px-4 sm:px-5"} h-full flex items-center justify-between gap-6`}>
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" aria-hidden />
            <span className="text-sm font-semibold tracking-tight">Animioui</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
            {links}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              href="https://github.com/Ingole712521/component"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              aria-label="GitHub repository"
            >
              <Github className="w-4 h-4" />
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden btn-ghost"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
            className={`${
              isDocs
                ? "absolute top-16 inset-x-0 border-b border-[var(--color-border)] bg-[var(--background)]"
                : "absolute top-[4.25rem] inset-x-4 rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--background)]"
            } px-5 py-4 md:hidden`}
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((link) => {
                const active = isLinkActive(pathname, link.href, link.match);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-2 py-3 rounded-xl text-sm ${
                      active
                        ? "text-[var(--foreground)] bg-[var(--color-surface-elevated)]"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <hr className="border-[var(--color-border)] my-2" />
              <a
                href="https://github.com/Ingole712521/component"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full mt-1"
              >
                GitHub
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
