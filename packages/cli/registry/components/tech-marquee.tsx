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

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
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
    icon: <VscVscode className="text-blue-400 text-2xl" />,
    color: "text-blue-400",
    glow: "group-hover:shadow-blue-500/25",
  },
  {
    name: "Unity",
    icon: <SiUnity className="text-white text-2xl" />,
    color: "text-white",
    glow: "group-hover:shadow-white/20",
  },
  {
    name: "Flutter",
    icon: <SiFlutter className="text-cyan-400 text-2xl" />,
    color: "text-cyan-400",
    glow: "group-hover:shadow-cyan-400/25",
  },
  {
    name: "React",
    icon: <SiReact className="text-cyan-300 text-2xl" />,
    color: "text-cyan-300",
    glow: "group-hover:shadow-cyan-300/25",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white text-2xl" />,
    color: "text-white",
    glow: "group-hover:shadow-white/20",
  },
  {
    name: "Three.js",
    icon: <SiThreedotjs className="text-white text-2xl" />,
    color: "text-white",
    glow: "group-hover:shadow-white/20",
  },
  {
    name: "Blender",
    icon: <SiBlender className="text-orange-400 text-2xl" />,
    color: "text-orange-400",
    glow: "group-hover:shadow-orange-400/25",
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-pink-400 text-2xl" />,
    color: "text-pink-400",
    glow: "group-hover:shadow-pink-400/25",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400 text-2xl" />,
    color: "text-green-400",
    glow: "group-hover:shadow-green-400/25",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-lime-400 text-2xl" />,
    color: "text-lime-400",
    glow: "group-hover:shadow-lime-400/25",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400 text-2xl" />,
    color: "text-sky-400",
    glow: "group-hover:shadow-sky-400/25",
  },
];

interface TechMarqueeProps {
  items?: TechMarqueeItem[];
  className?: string;
  title?: string;
  subtitle?: string;
}

export function TechMarquee({
  items = defaultTechItems,
  className = "",
  title = "We Work on",
  subtitle = "A sneak peek into our services",
}: TechMarqueeProps) {
  const rowItems = [...items, ...items];
  const rowItemsReverse = [...items].reverse().concat([...items].reverse());

  return (
    <section
      className={cn(
        "py-16 md:py-20 bg-black overflow-hidden relative",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-sky-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 uppercase tracking-tight">
          {title}
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="relative flex flex-col gap-6 pointer-events-auto">
        <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        {/* Top row */}
        <div className="flex overflow-hidden transform skew-y-1">
          <div className="flex animate-marquee gap-4 md:gap-6 w-max">
            {rowItems.map((item, idx) => (
              <TechCard key={`row1-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex overflow-hidden transform -skew-y-1">
          <div className="flex animate-marquee-reverse gap-4 md:gap-6 w-max">
            {rowItemsReverse.map((item, idx) => (
              <TechCard key={`row2-${idx}`} item={item} reverse />
            ))}
          </div>
        </div>
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
        "group flex items-center gap-3 bg-white/[0.03] border border-white/10 px-4 md:px-5 py-2 md:py-2.5 rounded-lg backdrop-blur-md transition-all duration-500 hover:bg-white/[0.08] hover:scale-105 hover:border-white/20 min-w-[150px] md:min-w-[170px] shadow-lg",
        "shadow-black/40",
        item.glow
      )}
    >
      <div
        className={cn(
          "w-7 h-7 flex items-center justify-center transform transition-transform duration-500",
          reverse ? "group-hover:-rotate-12" : "group-hover:rotate-12"
        )}
      >
        {item.icon}
      </div>
      <span
        className={cn(
          "text-xs md:text-sm font-semibold tracking-tight opacity-70 group-hover:opacity-100 transition-opacity",
          item.color
        )}
      >
        {item.name}
      </span>
    </div>
  );
}

