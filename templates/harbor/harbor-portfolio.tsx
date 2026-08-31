import { Newsreader, IBM_Plex_Sans } from "next/font/google";
import { boards, student } from "./constants";
import styles from "./harbor.module.css";

const harborSerif = Newsreader({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const harborSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export function HarborPortfolio() {
  return (
    <div className={`${styles.root} ${harborSans.className}`}>
      <div className={styles.sky} aria-hidden />
      <div className={styles.page}>
        <header className={styles.mast}>
          <p className={styles.mark}>{student.mark}</p>
          <h1 className={harborSerif.className}>{student.name}</h1>
          <p className={styles.program}>{student.program}</p>
          <p className={styles.lede}>{student.lede}</p>
        </header>

        <section aria-label="Studio boards">
          {boards.map((board) => (
            <article key={board.code} className={styles.board}>
              <p className={styles.code}>{board.code}</p>
              <div>
                <h2 className={harborSerif.className}>{board.title}</h2>
                <p>{board.body}</p>
              </div>
            </article>
          ))}
        </section>

        <a className={styles.mail} href={`mailto:${student.email}`}>
          {student.email}
        </a>
      </div>
    </div>
  );
}
