"use client";

import React from "react";
import {
  SiUnity,
  SiFlutter,
  SiThreedotjs,
  SiBlender,
  SiFigma,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type TechMarqueeItem = {
  name: string;
  icon: React.ReactNode;
  color: string;
  glow: string;
};

const defaultTechItems: TechMarqueeItem[] = [
  {
    name: "VS Code",
    icon: <VscVscode className="text-blue-400 text-3xl" />,
    color: "text-blue-400",
    glow: "group-hover:shadow-blue-500/25",
  },
  {
    name: "Unity",
    icon: <SiUnity className="text-white text-3xl" />,
    color: "text-white",
    glow: "group-hover:shadow-white/20",
  },
  {
    name: "Flutter",
    icon: <SiFlutter className="text-cyan-400 text-3xl" />,
    color: "text-cyan-400",
    glow: "group-hover:shadow-cyan-400/25",
  },
  {
    name: "React",
    icon: <SiReact className="text-cyan-300 text-3xl" />,
    color: "text-cyan-300",
    glow: "group-hover:shadow-cyan-300/25",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white text-3xl" />,
    color: "text-white",
    glow: "group-hover:shadow-white/20",
  },
  {
    name: "Three.js",
    icon: <SiThreedotjs className="text-white text-3xl" />,
    color: "text-white",
    glow: "group-hover:shadow-white/20",
  },
  {
    name: "Blender",
    icon: <SiBlender className="text-orange-400 text-3xl" />,
    color: "text-orange-400",
    glow: "group-hover:shadow-orange-400/25",
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-pink-400 text-3xl" />,
    color: "text-pink-400",
    glow: "group-hover:shadow-pink-400/25",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400 text-3xl" />,
    color: "text-green-400",
    glow: "group-hover:shadow-green-400/25",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-lime-400 text-3xl" />,
    color: "text-lime-400",
    glow: "group-hover:shadow-lime-400/25",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400 text-3xl" />,
    color: "text-sky-400",
    glow: "group-hover:shadow-sky-400/25",
  },
];

interface TechMarqueeProps {
  /** Override the default tech cards */
  items?: TechMarqueeItem[];
  className?: string;
  title?: string;
  subtitle?: string;
  /** Duration in seconds for the top row loop */
  topDuration?: number;
  /** Duration in seconds for the bottom row loop */
  bottomDuration?: number;
  /** Show only a single marquee row */
  rows?: 1 | 2;
  /** Extra classes applied to each card */
  cardClassName?: string;
}

export function TechMarquee({
  items = defaultTechItems,
  className = "",
  title = "We Work on",
  subtitle = "A sneak peek into our services",
  topDuration,
  bottomDuration,
  rows = 2,
}: TechMarqueeProps) {
  const rowItems = [...items, ...items, ...items];
  const rowItemsReverse = [...items].reverse();

  return (
    <section
      className={cn(
        "py-24 md:py-32 bg-black overflow-hidden relative",
        className
      )}
    >
      {/* Soft background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] bg-sky-500/8 blur-[140px] rounded-full" />
        <div className="absolute top-10 left-[-80px] w-64 h-64 bg-purple-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-[-120px] w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
          {title}
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="relative flex flex-col gap-10 pointer-events-auto">
        {/* Edge gradients */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        {/* Top row */}
        <div className="flex overflow-hidden transform skew-y-1">
          <div
            className="flex animate-marquee gap-6 md:gap-8 min-w-full"
            style={topDuration ? { animationDuration: `${topDuration}s` } : {}}
          >
            {rowItems.map((item, idx) => (
              <TechCard key={`row1-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Bottom row (optional) */}
        {rows !== 1 && (
          <div className="flex overflow-hidden transform -skew-y-1">
            <div
              className="flex animate-marquee-reverse gap-6 md:gap-8 min-w-full"
              style={
                bottomDuration
                  ? { animationDuration: `${bottomDuration}s` }
                  : {}
              }
            >
              {[...rowItemsReverse, ...items, ...items].map((item, idx) => (
                <TechCard  key={`row2-${idx}`} item={item} reverse />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function TechCard({
  item,
  reverse = false,
}: {
  item: TechMarqueeItem;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "group flex items-center gap-3 bg-white/[0.03] border border-white/10 px-4 md:px-6 py-2 md:py-2.5 rounded-lg backdrop-blur-md transition-all duration-500 hover:bg-white/[0.08] hover:scale-105 hover:border-white/20 min-w-[160px] md:min-w-[180px] shadow-lg",
        "shadow-black/40",
        item.glow
      )}
    >
      <div
        className={cn(
          "w-8 h-8 flex items-center justify-center transform transition-transform duration-500",
          reverse ? "group-hover:-rotate-12" : "group-hover:rotate-12"
        )}
      >
        {item.icon}
      </div>
      <span
        className={cn(
          "text-sm md:text-base font-semibold tracking-tight opacity-70 group-hover:opacity-100 transition-opacity",
          item.color
        )}
      >
        {item.name}
      </span>
    </div>
  );
}

