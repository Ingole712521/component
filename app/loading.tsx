import styles from "./_components/home-world.module.css";

export default function Loading() {
  return (
    <div className={styles.world}>
      <main id="main-content">
        <section className={styles.hero} aria-hidden>
          <div className={styles.heroScrim} />
        </section>
      </main>
    </div>
  );
}
