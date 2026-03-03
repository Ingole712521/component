"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Menu, X, Rocket } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Components", href: "#features" },
    { name: "Documentation", href: "/docs" },
    { name: "Showcase", href: "#showcase" },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4">
      <div
        className={`max-w-5xl mx-auto transition-all duration-300 ${scrolled
          ? "glass-panel rounded-2xl py-3 px-6 shadow-2xl border-white/10"
          : "bg-transparent py-5 px-6 border-transparent"
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group text-decoration-none">
            <div className="w-10 h-10 relative overflow-hidden rounded-xl shadow-[0_0_20px_rgba(14,165,233,0.3)] group-hover:scale-110 transition-transform">
              <Image
                src="/Profile_with_background.png"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-black tracking-tighter text-white">In Progress</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-zinc-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://github.com/Ingole712521/component.git"
              className="p-2 text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="/get-started"
              className="px-5 py-2.5 bg-white text-black text-sm font-black rounded-xl hover:bg-zinc-200 transition-all active:scale-95 shadow-lg shadow-white/5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 glass-panel p-6 rounded-3xl md:hidden z-50 border-white/10"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-zinc-400"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/5" />
              <div className="flex flex-col gap-4">
                <Link
                  href="https://github.com/Ingole712521/component.git"
                  className="flex items-center gap-3 text-white font-bold"
                >
                  <Github className="w-5 h-5" /> GitHub
                </Link>
                <Link
                  href="/get-started"
                  className="w-full py-4 bg-white text-black text-center font-black rounded-2xl"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
