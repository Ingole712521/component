import type { ReactNode } from "react";
import Image from "next/image";
import styles from "./home-world.module.css";

export function SkyBand({
  headingId,
  title,
  lede,
  chip,
  actions,
  compact = false,
}: {
  headingId: string;
  title: string;
  lede: string;
  chip?: string;
  actions?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section
      className={compact ? styles.band : styles.hero}
      aria-labelledby={headingId}
    >
      <div className={styles.heroMedia}>
        <Image
          src="/animioui-sky-hero.png"
          alt="Painted morning sky with paper airplanes over a mountain ridge"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className={styles.heroScrim} aria-hidden />
      <div className={styles.heroCopy}>
        {chip ? <p className={styles.chip}>{chip}</p> : null}
        <h1 id={headingId} className={styles.headline}>
          {title}
        </h1>
        <p className={styles.lede}>{lede}</p>
        {actions ? <div className={styles.actions}>{actions}</div> : null}
      </div>
    </section>
  );
}
