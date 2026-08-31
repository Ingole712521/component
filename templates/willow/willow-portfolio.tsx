import { notes, student } from "./constants";
import styles from "./willow.module.css";

export function WillowPortfolio() {
  return (
    <div className={styles.root}>
      <header className={styles.mast}>
        <p className={styles.mark}>{student.mark}</p>
        <h1>{student.name}</h1>
        <p className={styles.program}>{student.program}</p>
        <p className={styles.lede}>{student.lede}</p>
      </header>
      <main className={styles.page}>
        {notes.map((note) => (
          <article key={note.title}>
            <h2>{note.title}</h2>
            <p className={styles.meta}>{note.meta}</p>
            <p>{note.body}</p>
          </article>
        ))}
        <a href={`mailto:${student.email}`}>{student.email}</a>
      </main>
    </div>
  );
}
