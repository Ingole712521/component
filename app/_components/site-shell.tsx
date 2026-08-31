import type { ReactNode } from "react";
import { HomeFooter } from "./home-footer";
import { HomeNav } from "./home-nav";
import styles from "./home-world.module.css";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className={styles.world}>
      <HomeNav />
      {children}
      <HomeFooter />
    </div>
  );
}
