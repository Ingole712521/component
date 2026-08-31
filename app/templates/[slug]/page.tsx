import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { DownloadSource } from "../../_components/download-source";
import { SiteShell } from "../../_components/site-shell";
import { SkyBand } from "../../_components/sky-band";
import { TemplateCardGrid } from "../../_components/template-card-grid";
import { TemplatePreviewWell } from "../../_components/template-preview-well";
import styles from "../../_components/home-world.module.css";
import {
  getRelatedTemplates,
  getTemplate,
  getTemplateSlugs,
} from "@/templates";

type TemplateSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getTemplateSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: TemplateSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplate(slug);

  if (!template) {
    return { title: "Template" };
  }

  return {
    title: template.name,
    description: template.tagline,
  };
}

export default async function TemplateSlugPage({
  params,
}: TemplateSlugPageProps) {
  const { slug } = await params;
  const template = getTemplate(slug);

  if (!template) {
    notFound();
  }

  const related = getRelatedTemplates(slug);

  return (
    <SiteShell>
      <main id="main-content">
        <SkyBand
          compact
          headingId="template-heading"
          title={template.name}
          lede={`${template.tagline} Built around ${template.studentName}, ${template.studentProgram}.`}
          actions={
            <>
              <Link
                href={`/preview/${template.slug}`}
                className={styles.btnPrimary}
              >
                Open full preview
                <span className={styles.btnIcon} aria-hidden>
                  <ArrowRight size={14} weight="bold" />
                </span>
              </Link>
              <DownloadSource
                slug={template.slug}
                className={styles.btnSecondary}
              />
            </>
          }
        />
        <section className={styles.detailStage}>
          <TemplatePreviewWell template={template} />
        </section>
        {related.length > 0 ? (
          <section
            className={styles.catalog}
            aria-labelledby="related-heading"
          >
            <h2 id="related-heading" className={styles.galleryTitle}>
              Other layouts
            </h2>
            <TemplateCardGrid templates={related} />
          </section>
        ) : null}
      </main>
    </SiteShell>
  );
}
