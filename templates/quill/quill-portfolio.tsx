import { Newsreader, Source_Sans_3 } from "next/font/google";
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

const pieces = [
  {
    kicker: "Campus",
    title: "The canteen closed at 8. The stories did not.",
    body: "A night desk at St. Xavier's, three hotplates, and the students who keep the late edition alive after the official kitchen shuts.",
  },
  {
    kicker: "City",
    title: "Who waits at CST after the last local.",
    body: "Porters, exam kids, and a stationmaster who still writes delay notes by hand. Reported over four nights in June.",
  },
  {
    kicker: "Essay",
    title: "A monsoon that arrived in the inbox first.",
    body: "Weather alerts, hostel WhatsApp groups, and why the forecast now feels like a rumor with a timestamp.",
  },
];

export function QuillPortfolio() {
  return (
    <div className={`${styles.root} ${quillSans.className}`}>
      <header className={styles.sky}>
        <p className={styles.mark}>The Xavier desk</p>
        <h1 className={quillSerif.className}>Farah Qureshi</h1>
        <p className={styles.lede}>
          Journalism student. I report campus and city stories that still have
          names attached. Looking for a summer desk or reporting internship.
        </p>
      </header>

      <main className={styles.folio}>
        {pieces.map((piece) => (
          <article key={piece.title} className={styles.piece}>
            <p className={styles.kicker}>{piece.kicker}</p>
            <h2 className={quillSerif.className}>{piece.title}</h2>
            <p>{piece.body}</p>
          </article>
        ))}
        <a className={styles.mail} href="mailto:farah.qureshi@example.edu">
          farah.qureshi@example.edu
        </a>
      </main>
    </div>
  );
}
