import Link from "next/link";
import styles from "./home-world.module.css";

export function HomeFooter() {
  return (
    <footer className={styles.footer}>
      <p>Animioui</p>
      <nav className={styles.footerNav} aria-label="Footer">
        <Link href="/templates">Templates</Link>
        <Link href="/how-it-works">How it works</Link>
      </nav>
      <p>Student portfolio templates</p>
    </footer>
  );
}
