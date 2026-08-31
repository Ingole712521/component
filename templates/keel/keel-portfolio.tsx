import { Source_Sans_3 } from "next/font/google";
import { clubs, education, experience, student } from "./constants";
import styles from "./keel.module.css";

const keelSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
});

export function KeelPortfolio() {
  return (
    <div className={`${styles.root} ${keelSans.className}`}>
      <div className={styles.page}>
        <header className={styles.mast}>
          <h1>{student.name}</h1>
          <p className={styles.degree}>{student.degree}</p>
          <p className={styles.intro}>{student.intro}</p>
        </header>

        <div className={styles.grid}>
          <section>
            <h2 className={styles.kicker}>Education</h2>
            {education.map((item) => (
              <article key={item.title} className={styles.item}>
                <h3>{item.title}</h3>
                <p className={styles.meta}>{item.meta}</p>
                <p>{item.body}</p>
              </article>
            ))}
          </section>

          <section>
            <h2 className={styles.kicker}>Experience</h2>
            {experience.map((item) => (
              <article key={item.title} className={styles.item}>
                <h3>{item.title}</h3>
                <p className={styles.meta}>{item.meta}</p>
                <p>{item.body}</p>
              </article>
            ))}
          </section>
        </div>

        <section>
          <h2 className={styles.kicker}>On campus</h2>
          <div className={styles.clubs}>
            {clubs.map((club) => (
              <span key={club} className={styles.club}>
                {club}
              </span>
            ))}
          </div>
        </section>

        <footer className={styles.foot}>
          <a href={`mailto:${student.email}`}>{student.email}</a>
          <a href={student.orcid} rel="noreferrer">
            ORCID
          </a>
        </footer>
      </div>
    </div>
  );
}
