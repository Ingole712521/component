import Link from "next/link";
import { templates } from "@/templates";
import { TemplateCardGrid } from "./template-card-grid";
import styles from "./home-world.module.css";

export function HomeGallery() {
  return (
    <section className={styles.gallery} id="templates">
      <h2 className={styles.galleryTitle}>Templates</h2>
      <TemplateCardGrid templates={templates} featuredFirst />
      <p className={styles.galleryMore}>
        <Link href="/templates" className={styles.stageLink}>
          See all templates
        </Link>
      </p>
    </section>
  );
}

