import { Fraunces, IBM_Plex_Sans } from "next/font/google";
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

const studies = [
  {
    title: "Monsoon delay model",
    meta: "2026 · R · campus buses",
    body: "Predicted late arrivals on four ISI shuttle routes from rainfall and gate congestion. The ops team used the Friday forecast to shift two morning trips.",
  },
  {
    title: "Lab occupancy heat",
    meta: "2025 · Python · computer lab",
    body: "A week of badge swipes turned into a heatmap so students could see which rooms were actually free after 9pm.",
  },
  {
    title: "Survey bias note",
    meta: "2025 · Stata · methods",
    body: "Wrote the missing-data section for a hostel food survey. Dropped the rows we could not defend instead of filling them in.",
  },
];

export function NimbusPortfolio() {
  return (
    <div className={`${styles.root} ${nimbusSans.className}`}>
      <header className={styles.sky}>
        <p className={styles.mark}>KS · 2026</p>
        <h1 className={nimbusDisplay.className}>Kabir Sen</h1>
        <p className={styles.program}>
          M.Stat, Indian Statistical Institute, Kolkata
        </p>
        <p className={styles.lede}>
          I turn campus data into notes other students can use. Looking for a
          summer role in applied statistics or research engineering.
        </p>
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
        <a className={styles.mail} href="mailto:kabir.sen@example.edu">
          kabir.sen@example.edu
        </a>
      </main>
    </div>
  );
}
