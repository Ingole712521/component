import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "../_components/site-shell";
import { SkyBand } from "../_components/sky-band";
import { TemplateCardGrid } from "../_components/template-card-grid";
import styles from "../_components/home-world.module.css";
import {
  TEMPLATE_CATEGORIES,
  getTemplatesByCategory,
  isTemplateCategory,
} from "@/templates";

type TemplatesPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export const metadata: Metadata = {
  title: "Templates",
  description:
    "Browse live student portfolio templates by field, then open a full preview.",
};

export default async function TemplatesPage({
  searchParams,
}: TemplatesPageProps) {
  const { category } = await searchParams;
  const active =
    category && isTemplateCategory(category) ? category : undefined;
  const list = getTemplatesByCategory(active);

  return (
    <SiteShell>
      <main id="main-content">
        <SkyBand
          compact
          headingId="templates-heading"
          title="Every layout is a live site."
          lede="Filter by field, open a template page, then preview it full screen."
          actions={
            <Link href="/how-it-works" className={styles.btnSecondary}>
              How it works
            </Link>
          }
        />
        <section className={styles.catalog} aria-labelledby="templates-heading">
          <div className={styles.filters} role="navigation" aria-label="Fields">
            <Link
              href="/templates"
              className={`${styles.filter} ${!active ? styles.filterActive : ""}`}
            >
              All
            </Link>
            {TEMPLATE_CATEGORIES.map((item) => (
              <Link
                key={item}
                href={`/templates?category=${encodeURIComponent(item)}`}
                className={`${styles.filter} ${active === item ? styles.filterActive : ""}`}
              >
                {item}
              </Link>
            ))}
          </div>
          <TemplateCardGrid templates={list} />
          {active ? (
            <p className={styles.catalogNote}>
              Showing {list.length} {active.toLowerCase()}{" "}
              {list.length === 1 ? "template" : "templates"}.
              <Link href="/templates"> See all</Link>
            </p>
          ) : null}
        </section>
      </main>
    </SiteShell>
  );
}
