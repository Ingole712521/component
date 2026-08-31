import styles from "./ridge.module.css";

const work = [
  {
    title: "Laundry board",
    meta: "2026 · campus product",
    body: "A hostel machine queue with one job: tell you when a dryer is free. Built after three weeks of WhatsApp spam in Hostel 6.",
  },
  {
    title: "Studio hours",
    meta: "2025 · IDC workshop",
    body: "Booking for the laser cutter. Students see the next open slot, not a calendar they have to decode.",
  },
  {
    title: "Course cart",
    meta: "2025 · elective week",
    body: "A short list for picking electives with clash warnings. No dashboard. No extra pages.",
  },
];

export function RidgePortfolio() {
  return (
    <div className={styles.root}>
      <header className={styles.sky}>
        <p className={styles.chip}>Product intern, summer 2027</p>
        <h1>Isha Menon</h1>
        <p className={styles.lede}>
          I design campus tools that stay small on purpose. Looking for a
          product internship.
        </p>
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
        <a href="mailto:isha.menon@example.edu">isha.menon@example.edu</a>
      </main>
    </div>
  );
}
