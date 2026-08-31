import { Newsreader, IBM_Plex_Sans } from "next/font/google";
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

const boards = [
  {
    code: "01",
    title: "Hostel courtyard shade",
    body: "A timber pergola for the CEPT hostel court. Morning sun stays, afternoon glare drops, and bikes still park along the west wall.",
  },
  {
    code: "02",
    title: "Canal edge studio",
    body: "A 1:100 model for a drawing studio on the Sabarmati edge. The north light is the brief. The flood line is the constraint.",
  },
  {
    code: "03",
    title: "Market stall kit",
    body: "A knockdown stall for the Sunday craft market. Two people can raise it in twelve minutes without a drill.",
  },
];

export function HarborPortfolio() {
  return (
    <div className={`${styles.root} ${harborSans.className}`}>
      <div className={styles.sky} aria-hidden />
      <div className={styles.page}>
        <header className={styles.mast}>
          <p className={styles.mark}>LN · B.Arch</p>
          <h1 className={harborSerif.className}>Leela Nair</h1>
          <p className={styles.program}>Architecture, CEPT Ahmedabad</p>
          <p className={styles.lede}>
            I draw buildings that have to live with heat, dust, and a tight
            budget. Open to a studio internship in housing or public work.
          </p>
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

        <a className={styles.mail} href="mailto:leela.nair@example.edu">
          leela.nair@example.edu
        </a>
      </div>
    </div>
  );
}
