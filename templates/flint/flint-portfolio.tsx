import styles from "./flint.module.css";

const items = [
  {
    title: "Campus fund note",
    meta: "2026 · finance society",
    body: "A monthly one-pager on the society’s paper portfolio. Holdings, what changed, and what we will not buy again.",
  },
  {
    title: "GST filing clinic",
    meta: "2025 · volunteer desk",
    body: "Helped ten student vendors file their first return. The work was the checklist, not a lecture.",
  },
  {
    title: "Budget lab, public accounts",
    meta: "2025 · coursework",
    body: "Read three municipal budget annexes and wrote what the tables actually say about school capex.",
  },
];

export function FlintPortfolio() {
  return (
    <div className={styles.root}>
      <main className={styles.page}>
        <p className={styles.chip}>Finance · SRCC</p>
        <h1>Ananya Shah</h1>
        <p className={styles.lede}>
          B.A. Economics. I keep campus money work readable. Open to a
          research or markets internship for summer 2027.
        </p>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.title}>
              <h2>{item.title}</h2>
              <p className={styles.meta}>{item.meta}</p>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
        <a href="mailto:ananya.shah@example.edu">ananya.shah@example.edu</a>
      </main>
    </div>
  );
}
