"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import styles from "./home-world.module.css";

const links = [
  { href: "/templates", label: "Templates" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/preview/atlas", label: "Atlas" },
];

export function HomeNav() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className={styles.navDock}>
        <nav className={styles.pill} aria-label="Primary">
          <Link href="/" className={styles.brand}>
            <span className={styles.brandMark} aria-hidden>
              <PaperPlaneTilt size={13} weight="fill" />
            </span>
            Animioui
          </Link>
          <div className={styles.desktopLinks}>
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </div>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className={styles.burger} aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>
        </nav>
      </div>
      {open ? (
        <div className={styles.overlay} id={menuId}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}
