"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarItems } from "./sidebarConfig";

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block w-64 shrink-0 h-[calc(100vh-7rem)] overflow-y-auto pr-4 border-r border-white/5 custom-scrollbar">
      <div className="space-y-8 pb-16">
        {sidebarItems.map((section) => (
          <div key={section.title}>
            <h3 className="text-[10px] font-semibold text-white mb-4 tracking-widest uppercase opacity-50">
              {section.title}
            </h3>
            <ul className="space-y-1.5">
              {section.items.map((item) => {
                const isActive = item.href === pathname;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`group flex items-center justify-between px-3 py-1.5 rounded-lg text-sm transition-all ${
                        isActive
                          ? "bg-accent/10 text-accent font-medium border border-accent/20 shadow-[0_0_16px_rgba(14,165,233,0.1)]"
                          : "hover:text-white hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.version && (
                        <span className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded border border-white/10 text-zinc-500">
                          {item.version}
                        </span>
                      )}
                      {item.badge && (
                        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20 font-bold">
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
