import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { CinematicContent } from "./types";

export function CinematicPortfolio({ content }: { content: CinematicContent }) {
  return (
    <div className="cine-root">
      <div className="cine-scene">
        <Image
          src={content.scene.src}
          alt={content.scene.alt}
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="cine-scrim" aria-hidden />
      <div className="cine-stage">
        <header className="cine-nav">
          <a href="#top" className="cine-brand">
            <span className="cine-badge" aria-hidden>
              {content.initials}
            </span>
            {content.mark}
          </a>
          <nav className="cine-links" aria-label="On this page">
            {content.nav.map((item) => (
              <a key={item.href} href={item.href} className="cine-link">
                {item.label}
              </a>
            ))}
          </nav>
          <a href={`mailto:${content.email}`} className="cine-login">
            Email
          </a>
        </header>
        <div className="cine-hero" id="top">
          <div className="cine-copy">
            <h1 className="cine-headline">
              <span className="cine-line">{content.headline[0]}</span>
              <span className="cine-line">{content.headline[1]}</span>
            </h1>
            <p className="cine-standfirst">{content.standfirst}</p>
          </div>
          <div className="cine-aside">
            <p className="cine-lede">{content.lede}</p>
            <div className="cine-actions">
              <a href={content.primary.href} className="cine-primary">
                {content.primary.label}
              </a>
              <a href={content.secondary.href} className="cine-secondary">
                {content.secondary.label}
                <ArrowRight size={14} weight="bold" />
              </a>
            </div>
          </div>
        </div>
        <dl className="cine-stats">
          {content.stats.map((stat) => (
            <div key={stat.value}>
              <dt className="cine-stat-value">{stat.value}</dt>
              <dd className="cine-stat-label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <section className="cine-work" id="work" aria-labelledby="work-heading">
        <h2 className="cine-work-title" id="work-heading">
          {content.workHeading}
        </h2>
        <div className="cine-list">
          {content.work.map((item) => (
            <article key={item.title} className="cine-item">
              <h3 className="cine-item-title">{item.title}</h3>
              <p className="cine-item-meta">{item.meta}</p>
              <p className="cine-item-body">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
