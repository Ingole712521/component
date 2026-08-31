import Image from "next/image";
import { Outfit } from "next/font/google";
import styles from "./lumen.module.css";

const lumenSans = Outfit({
  subsets: ["latin"],
  display: "swap",
});

const work = [
  {
    title: "Hostel night market",
    year: "2026",
    src: "https://picsum.photos/seed/lumen-market/1200/1500",
    alt: "Warm night stall lights reflecting on wet pavement",
  },
  {
    title: "Type for monsoon",
    year: "2025",
    src: "https://picsum.photos/seed/lumen-type/900/1100",
    alt: "Close crop of printed type on damp paper",
  },
  {
    title: "Studio chairs",
    year: "2025",
    src: "https://picsum.photos/seed/lumen-chairs/900/1100",
    alt: "Empty studio with stacked chairs and a high window",
  },
];

export function LumenPortfolio() {
  return (
    <div className={`${styles.root} ${lumenSans.className}`}>
      <header className={styles.top}>
        <p className={styles.word}>Rhea Kapoor</p>
        <a className={styles.mail} href="mailto:rhea.kapoor@example.edu">
          rhea.kapoor@example.edu
        </a>
      </header>

      <section className={styles.hero}>
        <h1>Pictures, type, and the rooms they live in.</h1>
        <p className={styles.lede}>
          Communication design student at NID Ahmedabad. Looking for a studio
          internship in editorial and identity work.
        </p>
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
        <p>
          I shoot first, then design around what the photo already knows. Recent
          work covers a hostel night market, a monsoon type specimen, and a
          furniture study for the campus workshop.
        </p>
        <div className={styles.links}>
          <a href="https://www.are.na" rel="noreferrer">
            Are.na
          </a>
          <a href="https://www.instagram.com" rel="noreferrer">
            Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
