import { Source_Sans_3 } from "next/font/google";
import styles from "./keel.module.css";

const keelSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
});

const education = [
  {
    title: "Ashoka University",
    meta: "B.Sc. Life Sciences · 2023 to 2027",
    body: "Coursework in ecology, biostatistics, and science writing. Thesis on urban wetland birds in the NCR.",
  },
  {
    title: "Delhi Public School, R.K. Puram",
    meta: "Class XII · 2023",
    body: "Biology, chemistry, mathematics. School nature club lead.",
  },
];

const experience = [
  {
    title: "Field intern, Wetland Watch",
    meta: "Jun to Aug 2025 · Delhi",
    body: "Surveyed 11 water bodies, wrote weekly notes for the public site, and trained two junior volunteers.",
  },
  {
    title: "Teaching assistant, Biostats I",
    meta: "Spring 2026 · Ashoka",
    body: "Ran the Friday problem set hour. Built a one-page cheat sheet the class still uses.",
  },
];

const clubs = [
  "Birding circle",
  "Science writing desk",
  "Campus farm shift",
  "Debate union",
];

export function KeelPortfolio() {
  return (
    <div className={`${styles.root} ${keelSans.className}`}>
      <div className={styles.page}>
        <header className={styles.mast}>
          <h1>Aisha Rahman</h1>
          <p className={styles.degree}>Life Sciences, Ashoka University</p>
          <p className={styles.intro}>
            I study living systems and write about them so non-scientists can
            follow. Open to research internships and science communication
            roles for summer 2027.
          </p>
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
          <a href="mailto:aisha.rahman@example.edu">aisha.rahman@example.edu</a>
          <a href="https://orcid.org" rel="noreferrer">
            ORCID
          </a>
        </footer>
      </div>
    </div>
  );
}
