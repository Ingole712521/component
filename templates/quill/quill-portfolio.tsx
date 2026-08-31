import { Newsreader, Source_Sans_3 } from "next/font/google";
import { pieces, student } from "./constants";
import styles from "./quill.module.css";

const quillSerif = Newsreader({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const quillSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
});

export function QuillPortfolio() {
  return (
    <div className={`${styles.root} ${quillSans.className}`}>
      <header className={styles.sky}>
        <p className={styles.mark}>{student.mark}</p>
        <h1 className={quillSerif.className}>{student.name}</h1>
        <p className={styles.lede}>{student.lede}</p>
      </header>

      <main className={styles.folio}>
        {pieces.map((piece) => (
          <article key={piece.title} className={styles.piece}>
            <p className={styles.kicker}>{piece.kicker}</p>
            <h2 className={quillSerif.className}>{piece.title}</h2>
            <p>{piece.body}</p>
          </article>
        ))}
        <a className={styles.mail} href={`mailto:${student.email}`}>
          {student.email}
        </a>
      </main>
    </div>
  );
}
