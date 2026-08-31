import { student, work } from "./constants";
import styles from "./ridge.module.css";

export function RidgePortfolio() {
  return (
    <div className={styles.root}>
      <header className={styles.sky}>
        <p className={styles.chip}>{student.chip}</p>
        <h1>{student.name}</h1>
        <p className={styles.lede}>{student.lede}</p>
      </header>
      <main className={styles.sheet}>
        <h2>Selected work</h2>
        {work.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p className={styles.meta}>{item.meta}</p>
            <p>{item.body}</p>
          </article>
        ))}
        <a href={`mailto:${student.email}`}>{student.email}</a>
      </main>
    </div>
  );
}
