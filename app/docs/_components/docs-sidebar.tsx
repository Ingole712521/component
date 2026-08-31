"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { sidebarSections } from "../_config/sidebar";

function isItemActive(pathname: string, href: string) {
  if (href === "/docs" || href.startsWith("/docs#")) {
    return pathname === "/docs";
  }
  return pathname === href;
}

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="space-y-8">
      {sidebarSections.map((section) => (
        <div key={section.title}>
          <p className="text-[11px] font-medium text-[var(--muted)] mb-2 px-2">
            {section.title}
          </p>
          <ul className="space-y-0.5">
            {section.items.map((item) => {
              const active = isItemActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    aria-current={active ? "page" : undefined}
                    className={`block px-2 py-1.5 text-sm rounded-[var(--radius-control)] transition-colors duration-200 ${
                      active
                        ? "text-[var(--foreground)] bg-[var(--color-surface-elevated)]"
                        : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--color-surface)]"
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
  );
}

export default function DocsSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="lg:hidden py-4 border-b border-[var(--color-border)] mb-6 -mx-5 px-5 sm:-mx-6 sm:px-6">
        <button
          type="button"
          className="btn-secondary text-sm"
          onClick={() => setOpen(true)}
          aria-expanded={open}
        >
          <Menu className="w-4 h-4" />
          Browse components
        </button>
      </div>

      <aside className="hidden lg:block w-56 shrink-0 sticky top-16 h-[calc(100vh-var(--header-height))] overflow-y-auto py-10 pr-5 border-r border-[var(--color-border)] custom-scrollbar">
        <SidebarNav />
      </aside>

      {open ? (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Close component menu"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[min(20rem,88vw)] bg-[var(--background)] border-r border-[var(--color-border)] p-5 overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm font-semibold">Components</p>
              <button
                type="button"
                className="btn-ghost"
                onClick={() => setOpen(false)}
                aria-label="Close component menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <SidebarNav onNavigate={() => setOpen(false)} />
          </div>
        </div>
      ) : null}
    </>
  );
}
