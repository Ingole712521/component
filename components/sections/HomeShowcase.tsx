"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const components = [
  {
    name: "Floating Dock",
    href: "/docs/components/floating-dock",
    tag: "Navigation",
    seed: "animioui-dock",
  },
  {
    name: "Flip Card",
    href: "/docs/components/flip-card",
    tag: "Cards",
    seed: "animioui-flip",
  },
  {
    name: "Text Reveal",
    href: "/docs/components/text-reveal",
    tag: "Typography",
    seed: "animioui-text",
  },
  {
    name: "Page Transition",
    href: "/docs/components/page-transition",
    tag: "Motion",
    seed: "animioui-transition",
  },
  {
    name: "Spotlight Card",
    href: "/docs/components/spotlight-card",
    tag: "Cards",
    seed: "animioui-spotlight",
  },
  {
    name: "3D Buttons",
    href: "/docs/components/3d-buttons",
    tag: "Buttons",
    seed: "animioui-3d",
  },
];

export default function HomeShowcase() {
  return (
    <section className="border-b border-white/8">
      <div className="page-container-wide py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <h2 className="display-lg mb-4">Browse the component library</h2>
            <p className="body-lg">
              Interactive docs for every component. Copy the source, tweak the motion, ship it.
            </p>
          </div>
          <Link href="/docs/components/button" className="btn-secondary shrink-0 self-start md:self-auto">
            All components
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {components.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <Link href={item.href} className="group block surface-panel-hover overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                  <Image
                    src={`https://picsum.photos/seed/${item.seed}/800/500`}
                    alt=""
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.03] transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  <span className="absolute top-3 left-3 text-[11px] font-medium px-2 py-0.5 rounded-md bg-zinc-950/80 border border-white/10 text-zinc-300">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5 flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {item.name}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-[var(--muted)] group-hover:text-blue-400 transition-colors shrink-0" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
