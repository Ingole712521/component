"use client";

import { SiFramer, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

const stack = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Framer Motion", Icon: SiFramer },
];

export default function LogoStrip() {
  return (
    <section className="border-b border-white/8 py-10">
      <div className="page-container-wide">
        <p className="text-center text-xs text-[var(--muted)] mb-6">
          Built for modern React stacks
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {stack.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex items-center gap-2 text-[var(--muted)] hover:text-white transition-colors duration-200"
            >
              <Icon className="w-5 h-5" aria-hidden />
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
