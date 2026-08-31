import type { CSSProperties } from "react";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { courses, nav, projects, student } from "./constants";
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
          <p className={styles.mark}>{student.mark}</p>
          <h1 className={styles.name}>{student.name}</h1>
          <p className={styles.program}>
            {student.programLines[0]}
            <br />
            {student.programLines[1]}
          </p>
          <p className={styles.bio}>{student.bio}</p>
          <nav className={styles.railNav} aria-label="On this page">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className={styles.mail} href={`mailto:${student.email}`}>
            {student.email}
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
