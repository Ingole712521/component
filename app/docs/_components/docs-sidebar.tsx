"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarSections } from "../_config/sidebar";

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="hidden lg:block w-52 shrink-0 sticky top-16 h-[calc(100vh-var(--header-height))] overflow-y-auto py-8 pr-4 border-r border-white/8 custom-scrollbar">
        <div className="space-y-8">
          {sidebarSections.map((section) => (
            <div key={section.title}>
              <p className="section-label mb-3 px-2">{section.title}</p>
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive =
                    item.href === pathname ||
                    (item.href !== "/docs" && pathname === item.href);
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`block px-2 py-1.5 text-sm rounded-md transition-colors ${
                          isActive
                            ? "text-white bg-white/5"
                            : "text-[var(--muted)] hover:text-white"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
