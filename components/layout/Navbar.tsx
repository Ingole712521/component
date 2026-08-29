"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Components", href: "/docs" },
  { name: "Showcase", href: "/#showcase" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="page-container">
        <div
          className={`mt-5 transition-all duration-500 ${
            scrolled
              ? "glass-panel rounded-2xl py-3 px-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              : "py-4 px-2 border border-transparent"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-white/10 group-hover:border-accent/40 transition-colors shadow-[0_0_24px_rgba(124,107,240,0.2)]">
                <Image
                  src="/Profile_with_background.png"
                  alt="Animioui UI"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="leading-none">
                <span className="block text-lg font-extrabold tracking-tight text-white group-hover:text-accent-secondary transition-colors">
                  Animioui
                </span>
                <span className="block text-[10px] uppercase tracking-[0.28em] text-[var(--muted)] mt-0.5">
                  UI Library
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] p-1 backdrop-blur-md">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-[var(--muted)] hover:text-white rounded-full hover:bg-white/8 transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Link
                href="https://github.com/Ingole712521/component"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-[var(--muted)] hover:text-white rounded-xl border border-white/8 hover:border-white/15 hover:bg-white/5 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link href="/docs" className="btn-primary !py-2.5 !px-5 !text-sm !rounded-xl">
                Browse docs
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <button
              type="button"
              className="md:hidden p-2.5 text-white rounded-xl border border-white/10"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="absolute top-[5.5rem] left-4 right-4 glass-panel p-6 rounded-2xl md:hidden border-white/10"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-base font-medium text-[var(--muted)] hover:text-white rounded-xl hover:bg-white/5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/8 my-3" />
              <Link
                href="/docs"
                className="btn-primary w-full !rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                Browse docs
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
