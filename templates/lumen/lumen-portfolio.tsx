import Image from "next/image";
import { Outfit } from "next/font/google";
import { links, student, work } from "./constants";
import styles from "./lumen.module.css";

const lumenSans = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export function LumenPortfolio() {
  return (
    <div className={`${styles.root} ${lumenSans.className}`}>
      <header className={styles.top}>
        <p className={styles.word}>{student.name}</p>
        <a className={styles.mail} href={`mailto:${student.email}`}>
          {student.email}
        </a>
      </header>

      <section className={styles.hero}>
        <h1>{student.headline}</h1>
        <p className={styles.lede}>{student.lede}</p>
      </section>

      <section className={styles.work} aria-label="Selected work">
        {work.map((piece) => (
          <article key={piece.title} className={styles.piece}>
            <div className={styles.frame}>
              <Image
                src={piece.src}
                alt={piece.alt}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </div>
            <p className={styles.caption}>
              {piece.title}
              <span>{piece.year}</span>
            </p>
          </article>
        ))}
      </section>

      <section className={styles.about}>
        <p>{student.about}</p>
        <div className={styles.links}>
          {links.map((link) => (
            <a key={link.href} href={link.href} rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
