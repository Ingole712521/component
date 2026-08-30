"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-16 transition-all duration-300 ${
        scrolled
          ? "border-b border-violet-500/15 bg-[var(--background)]/80 backdrop-blur-xl shadow-[0_8px_32px_-12px_rgba(139,92,246,0.2)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="page-container-wide h-full flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <span className="w-2 h-2 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 group-hover:scale-125 transition-transform" />
          <span className="text-sm font-semibold text-white tracking-tight">Animioui</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`nav-link relative ${isLinkActive(pathname, link.href) ? "nav-link-active" : ""}`}
            >
              {link.name}
              {isLinkActive(pathname, link.href) && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-violet-400 to-cyan-400"
                />
              )}
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 inset-x-0 border-b border-violet-500/15 bg-[var(--background)]/95 backdrop-blur-xl px-5 py-4"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-2 py-3 rounded-lg text-sm transition-colors ${
                      isLinkActive(pathname, link.href)
                        ? "text-white bg-violet-500/10 border border-violet-500/20"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <hr className="border-white/8 my-2" />
              <Link href="/docs" className="btn-primary w-full mt-1">
                Get started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
