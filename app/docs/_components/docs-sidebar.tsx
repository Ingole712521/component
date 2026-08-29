"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarSections } from "../_config/sidebar";

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block w-64 shrink-0 h-[calc(100vh-7rem)] overflow-y-auto pr-4 border-r border-white/6 custom-scrollbar">
      <div className="mb-6 px-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--muted)]">Documentation</p>
      </div>
      <div className="space-y-8 pb-16">
        {sidebarSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-[10px] font-semibold text-white/50 mb-3 tracking-[0.2em] uppercase px-2">
              {section.title}
            </h3>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = item.href === pathname;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`group flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-all ${
                        isActive
                          ? "bg-accent/15 text-accent-secondary font-medium border border-accent/25"
                          : "text-[var(--muted)] hover:text-white hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="text-[9px] bg-accent-secondary/10 text-accent-secondary px-1.5 py-0.5 rounded-md border border-accent-secondary/20 font-bold uppercase tracking-wide">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
