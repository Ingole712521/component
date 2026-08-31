import type { CSSProperties } from "react";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import styles from "./atlas.module.css";

const atlasSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const atlasMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const projects = [
  {
    year: "2026",
    title: "Queueboard",
    body: "A lab booking board that cut wait time at the campus GPU cluster. Students claim a slot, see who is next, and get a ping when a machine frees up.",
    stack: ["Next.js", "Postgres", "Redis"],
  },
  {
    year: "2025",
    title: "Meshnote",
    body: "Shared lecture notes that stay in sync offline. Built for hostel wifi that drops mid-class.",
    stack: ["React Native", "SQLite", "CRDTs"],
  },
  {
    year: "2025",
    title: "Tracekit",
    body: "A tiny tracer for student OS labs. You step one syscall at a time instead of reading a 400-line log.",
    stack: ["C", "Python", "WASM"],
  },
];

const courses = [
  { name: "Operating Systems", detail: "Prof. Iyer · A" },
  { name: "Networks", detail: "Prof. Banerjee · A-" },
  { name: "Compilers", detail: "Prof. Shah · A" },
  { name: "Distributed Systems", detail: "Prof. Menon · in progress" },
];

export function AtlasPortfolio() {
  return (
    <div
      className={`${styles.root} ${atlasSans.className}`}
      style={
        {
          "--atlas-sans": atlasSans.style.fontFamily,
          "--atlas-mono": atlasMono.style.fontFamily,
        } as CSSProperties
      }
    >
      <div className={styles.shell}>
        <aside className={styles.rail}>
          <p className={styles.mark}>KR / 2026</p>
          <h1 className={styles.name}>Kavya Reddy</h1>
          <p className={styles.program}>
            B.Tech Computer Science
            <br />
            BITS Pilani
          </p>
          <p className={styles.bio}>
            I build tools that make campus labs less chaotic. Looking for a
            summer internship in systems or product engineering.
          </p>
          <nav className={styles.railNav} aria-label="On this page">
            <a href="#projects">Projects</a>
            <a href="#courses">Coursework</a>
          </nav>
          <a className={styles.mail} href="mailto:kavya.reddy@example.edu">
            kavya.reddy@example.edu
          </a>
        </aside>

        <main className={styles.main}>
          <section id="projects">
            <h2 className={styles.sectionTitle}>Selected projects</h2>
            {projects.map((project) => (
              <article key={project.title} className={styles.project}>
                <p className={styles.year}>{project.year}</p>
                <div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectBody}>{project.body}</p>
                  <div className={styles.stack}>
                    {project.stack.map((item) => (
                      <span key={item} className={styles.chip}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section id="courses">
            <h2 className={styles.sectionTitle}>Coursework</h2>
            <div className={styles.courses}>
              {courses.map((course) => (
                <p key={course.name} className={styles.course}>
                  {course.name}
                  <span>{course.detail}</span>
                </p>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
