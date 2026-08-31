import { items, student } from "./constants";
import styles from "./flint.module.css";

export function FlintPortfolio() {
  return (
    <div className={styles.root}>
      <main className={styles.page}>
        <p className={styles.chip}>{student.chip}</p>
        <h1>{student.name}</h1>
        <p className={styles.lede}>{student.lede}</p>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.title}>
              <h2>{item.title}</h2>
              <p className={styles.meta}>{item.meta}</p>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
        <a href={`mailto:${student.email}`}>{student.email}</a>
      </main>
    </div>
  );
}
