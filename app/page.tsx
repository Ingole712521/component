import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { HomeGallery } from "./_components/home-gallery";
import { SiteShell } from "./_components/site-shell";
import { TemplateStage } from "./_components/template-stage";
import styles from "./_components/home-world.module.css";

export const metadata: Metadata = {
  title: "Student portfolio templates",
  description:
    "Ready-made student portfolio templates you can preview and make your own.",
};

export default function HomePage() {
  return (
    <SiteShell>
      <main id="main-content">
        <section className={styles.hero} aria-labelledby="home-heading">
          <div className={styles.heroMedia}>
            <Image
              src="/animioui-sky-hero.png"
              alt="Painted morning sky with paper airplanes over a mountain ridge"
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className={styles.heroScrim} aria-hidden />
          <div className={styles.heroCopy}>
            <p className={styles.chip}>
              Live templates you can open as real sites
            </p>
            <h1 id="home-heading" className={styles.headline}>
              Student portfolios, already designed.
            </h1>
            <p className={styles.lede}>
              Pick a layout built for internships, campus applications, and
              first jobs.
            </p>
            <div className={styles.actions}>
              <a href="/templates" className={styles.btnPrimary}>
                Browse templates
                <span className={styles.btnIcon} aria-hidden>
                  <ArrowRight size={14} weight="bold" />
                </span>
              </a>
              <a href="/preview/atlas" className={styles.btnSecondary}>
                Preview Atlas
              </a>
            </div>
          </div>
          <TemplateStage />
        </section>
        <HomeGallery />
      </main>
    </SiteShell>
  );
}
