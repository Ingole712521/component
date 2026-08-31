import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { TemplateEntry } from "@/templates";
import { LivePreviewFrame } from "./live-preview-frame";
import styles from "./home-world.module.css";

export function TemplateCardGrid({
  templates,
  featuredFirst = false,
}: {
  templates: TemplateEntry[];
  featuredFirst?: boolean;
}) {
  if (templates.length === 0) {
    return (
      <p className={styles.stageMeta}>
        No templates in this category yet.
      </p>
    );
  }

  return (
    <div className={featuredFirst ? styles.galleryGrid : styles.catalogGrid}>
        {templates.map((template, index) => {
          const featured = featuredFirst && index === 0;
          const { Component } = template;
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
                View
                <ArrowUpRight size={14} weight="bold" />
              </span>
            </div>
            <Link
              href={`/templates/${template.slug}`}
              className={styles.cardLink}
            >
              <span className="sr-only">View {template.name}</span>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
