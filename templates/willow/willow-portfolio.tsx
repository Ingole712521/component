import styles from "./willow.module.css";

const notes = [
  {
    title: "OPD wait study",
    meta: "2026 · community medicine",
    body: "Timed 86 morning patients. The bottleneck was the token window, not the doctor. Wrote a one-page note the unit still keeps at the desk.",
  },
  {
    title: "Anemia camp, two villages",
    meta: "2025 · field posting",
    body: "Helped run screening with the PHC nurse. Recorded who came back for iron, and who did not, without padding the count.",
  },
  {
    title: "Case write-up, rheumatic fever",
    meta: "2025 · paediatrics",
    body: "A clear timeline for the ward file. No extra adjectives. The consultant used it in the Friday round.",
  },
];

export function WillowPortfolio() {
  return (
    <div className={styles.root}>
      <header className={styles.mast}>
        <p className={styles.mark}>TJ · MBBS</p>
        <h1>Tara Joseph</h1>
        <p className={styles.program}>Christian Medical College, Vellore</p>
        <p className={styles.lede}>
          I write clinical work so the next person on the ward can pick it up.
          Open to a research or public health internship.
        </p>
      </header>
      <main className={styles.page}>
        {notes.map((note) => (
          <article key={note.title}>
            <h2>{note.title}</h2>
            <p className={styles.meta}>{note.meta}</p>
            <p>{note.body}</p>
          </article>
        ))}
        <a href="mailto:tara.joseph@example.edu">tara.joseph@example.edu</a>
      </main>
    </div>
  );
}
