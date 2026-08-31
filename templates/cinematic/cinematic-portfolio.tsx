import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { CinematicContent } from "./types";
import styles from "./cinematic.module.css";

export function CinematicPortfolio({ content }: { content: CinematicContent }) {
  return (
    <div className={styles.root}>
      <div className={styles.scene}>
        <Image
          src={content.scene.src}
          alt={content.scene.alt}
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className={styles.scrim} aria-hidden />
      <div className={styles.stage}>
        <header className={styles.nav}>
          <a href="#top" className={styles.brand}>
            <span className={styles.badge} aria-hidden>
              {content.initials}
            </span>
            {content.mark}
          </a>
          <nav className={styles.links} aria-label="On this page">
            {content.nav.map((item) => (
              <a key={item.href} href={item.href} className={styles.link}>
                {item.label}
              </a>
            ))}
          </nav>
          <a href={`mailto:${content.email}`} className={styles.login}>
            Email
          </a>
        </header>
        <div className={styles.hero} id="top">
          <div className={styles.copy}>
            <h1 className={styles.headline}>
              <span className={styles.line}>{content.headline[0]}</span>
              <span className={styles.line}>{content.headline[1]}</span>
            </h1>
            <p className={styles.standfirst}>{content.standfirst}</p>
          </div>
          <div className={styles.aside}>
            <p className={styles.lede}>{content.lede}</p>
            <div className={styles.actions}>
              <a href={content.primary.href} className={styles.primary}>
                {content.primary.label}
              </a>
              <a href={content.secondary.href} className={styles.secondary}>
                {content.secondary.label}
                <ArrowRight size={14} weight="bold" />
              </a>
            </div>
          </div>
        </div>
        <dl className={styles.stats}>
          {content.stats.map((stat) => (
            <div key={stat.value}>
              <dt className={styles.statValue}>{stat.value}</dt>
              <dd className={styles.statLabel}>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <section className={styles.work} id="work" aria-labelledby="work-heading">
        <h2 className={styles.workTitle} id="work-heading">
          {content.workHeading}
        </h2>
        <div className={styles.list}>
          {content.work.map((item) => (
            <article key={item.title} className={styles.item}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemMeta}>{item.meta}</p>
              <p className={styles.itemBody}>{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
