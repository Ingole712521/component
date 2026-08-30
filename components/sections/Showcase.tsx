"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const items = [
  { title: "GSAP Button", href: "/docs/components/gsap-button", tag: "Motion", color: "bg-violet-500/15 text-violet-300" },
  { title: "Page Transition", href: "/docs/components/page-transition", tag: "Navigation", color: "bg-cyan-500/15 text-cyan-300" },
  { title: "Glass Navbar", href: "/docs/components/navbar-glass", tag: "Layout", color: "bg-indigo-500/15 text-indigo-300" },
];

export default function Showcase() {
  return (
    <section id="showcase" className="border-b border-white/8 scroll-mt-24">
      <div className="page-container py-20 md:py-28">
        <Reveal className="mb-10">
          <p className="section-label mb-3">Showcase</p>
          <h2 className="section-heading">Popular components</h2>
        </Reveal>

        <ul className="space-y-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <li>
                <Link href={item.href} className="block">
                  <motion.div
                    className="card-glass flex items-center justify-between px-5 py-4 group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-xs px-2.5 py-1 rounded-full ${item.color}`}>
                        {item.tag}
                      </span>
                      <p className="text-base font-medium text-white group-hover:text-violet-200 transition-colors">
                        {item.title}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[var(--muted)] group-hover:text-violet-300 transition-colors" />
                  </motion.div>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
