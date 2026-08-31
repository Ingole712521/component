import { briefs, student } from "./constants";
import styles from "./meridian.module.css";

export function MeridianPortfolio() {
  return (
    <div className={styles.root}>
      <div className={styles.sky} aria-hidden />
      <div className={styles.wrap}>
        <header className={styles.head}>
          <p>{student.mark}</p>
          <h1>{student.name}</h1>
          <p className={styles.school}>{student.school}</p>
          <p className={styles.lede}>{student.lede}</p>
        </header>
        <main>
          {briefs.map((brief) => (
            <article key={brief.title} className={styles.brief}>
              <h2>{brief.title}</h2>
              <p className={styles.meta}>{brief.meta}</p>
              <p>{brief.body}</p>
            </article>
          ))}
          <a href={`mailto:${student.email}`}>{student.email}</a>
        </main>
      </div>
    </div>
  );
}
