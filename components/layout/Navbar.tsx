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
    { name: "Components", href: "#features", emoji: "🧩" },
    { name: "Documentation", href: "/docs", emoji: "📚" },
    { name: "Showcase", href: "#showcase", emoji: "✨" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="page-container">
        <div
          className={`mt-6 transition-all duration-300 ${
            scrolled
              ? "glass-panel rounded-2xl py-3 px-6 shadow-2xl border-white/10"
              : "bg-transparent py-5 px-6 border-transparent"
          }`}
        >
          <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group text-decoration-none">
            <div className="w-10 h-10 relative overflow-hidden rounded-xl shadow-[0_0_20px_rgba(14,165,233,0.3)] group-hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300 border border-white/10 group-hover:border-accent/50">
              <Image
                src="/Profile_with_background.png"
                alt="Logo"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <span className="text-xl font-black tracking-tighter text-white group-hover:text-accent transition-colors duration-300">Progress</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner shadow-white/5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative flex items-center justify-center px-4 py-2 text-sm font-bold text-zinc-400 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <span>{link.name}</span>
                  <span className="w-0 overflow-hidden opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 ease-out flex items-center justify-center">
                    {link.emoji}
                  </span>
                </span>
                {/* Active glow effect */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://github.com/Ingole712521/component.git"
              className="p-2.5 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="/docs"
              className="group flex items-center gap-2 px-6 py-2.5 bg-white text-black text-sm font-black rounded-full hover:bg-zinc-200 transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <span>Get Started</span>
              <Rocket className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
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
                  href="/docs"
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
