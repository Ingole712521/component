import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import { student, studies } from "./constants";
import styles from "./nimbus.module.css";

const nimbusDisplay = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const nimbusSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export function NimbusPortfolio() {
  return (
    <div className={`${styles.root} ${nimbusSans.className}`}>
      <header className={styles.sky}>
        <p className={styles.mark}>{student.mark}</p>
        <h1 className={nimbusDisplay.className}>{student.name}</h1>
        <p className={styles.program}>{student.program}</p>
        <p className={styles.lede}>{student.lede}</p>
      </header>

      <main className={styles.sheet}>
        <section>
          <h2 className={styles.section}>Selected studies</h2>
          {studies.map((study) => (
            <article key={study.title} className={styles.study}>
              <h3 className={nimbusDisplay.className}>{study.title}</h3>
              <p className={styles.meta}>{study.meta}</p>
              <p>{study.body}</p>
            </article>
          ))}
        </section>
        <a className={styles.mail} href={`mailto:${student.email}`}>
          {student.email}
        </a>
      </main>
    </div>
  );
}
