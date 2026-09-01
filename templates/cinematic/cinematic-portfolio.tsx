import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { CinematicContent } from "./types";

export function CinematicPortfolio({ content }: { content: CinematicContent }) {
  return (
    <div className="cine-root">
      <div className="cine-stage">
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
            <div key={`${stat.value}-${stat.label}`}>
              <dt className="cine-stat-value">{stat.value}</dt>
              <dd className="cine-stat-label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section className="cine-about" id="about" aria-labelledby="about-heading">
        <div className="cine-about-grid">
          <h2 className="cine-about-heading" id="about-heading">
            {content.about.heading}
          </h2>
          <div>
            <p className="cine-about-name">{content.about.name}</p>
            <p className="cine-about-program">{content.about.program}</p>
            <p className="cine-about-bio">{content.about.bio}</p>
          </div>
          <dl className="cine-facts">
            {content.about.facts.map((fact) => (
              <div key={fact.label} className="cine-fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="cine-projects" id="projects" aria-labelledby="projects-heading">
        <h2 className="cine-ink-heading" id="projects-heading">
          {content.projectsHeading}
        </h2>
        <div className="cine-project-list">
          {content.projects.map((project, index) => (
            <article
              key={project.title}
              className={
                index === 0 ? "cine-project cine-project-lead" : "cine-project"
              }
            >
              <p className="cine-project-year">{project.year}</p>
              <h3 className="cine-project-title">{project.title}</h3>
              <p className="cine-project-body">{project.body}</p>
              <ul className="cine-stack" aria-label="Tech stack">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="cine-writing" id="writing" aria-labelledby="writing-heading">
        <h2 className="cine-writing-heading" id="writing-heading">
          {content.writingHeading}
        </h2>
        <ol className="cine-notes">
          {content.writing.map((note) => (
            <li key={note.title} className="cine-note">
              <p className="cine-note-date">{note.date}</p>
              <h3 className="cine-note-title">{note.title}</h3>
              <p className="cine-note-lede">{note.lede}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="cine-elsewhere" id="github" aria-labelledby="links-heading">
        <h2 className="cine-elsewhere-heading" id="links-heading">
          {content.linksHeading}
        </h2>
        <ul className="cine-outlinks">
          <li>
            <a
              href={content.github.href}
              className="cine-outlink"
              target="_blank"
              rel="noreferrer"
            >
              {content.github.label}
              <ArrowUpRight size={16} weight="bold" />
            </a>
          </li>
          {content.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="cine-outlink"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
                <ArrowUpRight size={16} weight="bold" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="cine-contact" id="contact" aria-labelledby="contact-heading">
        <h2 className="cine-contact-heading" id="contact-heading">
          {content.contact.heading}
        </h2>
        <a href={`mailto:${content.email}`} className="cine-mail">
          {content.email}
        </a>
        <p className="cine-contact-note">{content.contact.note}</p>
      </section>
    </div>
  );
}
