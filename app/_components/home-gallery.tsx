import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { templates } from "@/templates";
import { LivePreviewFrame } from "./live-preview-frame";
import styles from "./home-world.module.css";

export function HomeGallery() {
  if (templates.length === 0) {
    return (
      <section className={styles.gallery} id="templates">
        <h2 className={styles.galleryTitle}>Templates</h2>
        <p className={styles.stageMeta}>
          No templates yet. Add a folder under templates and register it.
        </p>
      </section>
    );
  }

  return (
    <section className={styles.gallery} id="templates">
      <h2 className={styles.galleryTitle}>Templates</h2>
      <div className={styles.galleryGrid}>
        {templates.map((template, index) => {
          const { Component } = template;
          const featured = index === 0;
          return (
            <article
              key={template.slug}
              className={`${styles.card} ${featured ? styles.cardFeatured : ""}`}
            >
              <LivePreviewFrame
                className={styles.cardPreview}
                label={`${template.name} live preview`}
              >
                <Component />
              </LivePreviewFrame>
              <div className={styles.cardBody}>
                <div>
                  <p className={styles.cardKicker}>{template.category}</p>
                  <h3 className={styles.cardName}>{template.name}</h3>
                  <p className={styles.cardTag}>{template.tagline}</p>
                </div>
                <span className={styles.cardGo}>
                  Preview
                  <ArrowUpRight size={14} weight="bold" />
                </span>
              </div>
              <Link
                href={`/preview/${template.slug}`}
                className={styles.cardLink}
              >
                <span className="sr-only">Preview {template.name}</span>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
