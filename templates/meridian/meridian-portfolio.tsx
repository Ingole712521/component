import styles from "./meridian.module.css";

const briefs = [
  {
    title: "MSP and the July procurement window",
    meta: "2026 · farm prices note",
    body: "A four-page brief on why late procurement in Punjab still misses small holders. Written for a class, sent to a TA who asked for the tables.",
  },
  {
    title: "Bus fare freeze, Delhi 2025",
    meta: "2025 · urban policy",
    body: "Mapped who rides AC versus non-AC after the freeze. The conclusion is dull on purpose: the freeze holds for short trips, not for the edge of the city.",
  },
  {
    title: "Scholarship take-up, one college",
    meta: "2025 · education",
    body: "Counted how many eligible students never filed. The form, not the amount, was the drop-off.",
  },
];

export function MeridianPortfolio() {
  return (
    <div className={styles.root}>
      <div className={styles.sky} aria-hidden />
      <div className={styles.wrap}>
        <header className={styles.head}>
          <p>AR · 2026</p>
          <h1>Advait Rao</h1>
          <p className={styles.school}>
            MA Economics, Delhi School of Economics
          </p>
          <p className={styles.lede}>
            I write short policy notes with the numbers attached. Looking for a
            research assistant role for 2027.
          </p>
        </header>
        <main>
          {briefs.map((brief) => (
            <article key={brief.title} className={styles.brief}>
              <h2>{brief.title}</h2>
              <p className={styles.meta}>{brief.meta}</p>
              <p>{brief.body}</p>
            </article>
          ))}
          <a href="mailto:advait.rao@example.edu">advait.rao@example.edu</a>
        </main>
      </div>
    </div>
  );
}
