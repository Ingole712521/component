import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { TemplateEntry } from "@/templates";
import { DownloadSource } from "./download-source";
import { LivePreviewFrame } from "./live-preview-frame";
import styles from "./home-world.module.css";

export function TemplatePreviewWell({ template }: { template: TemplateEntry }) {
  const { Component } = template;

  return (
    <div className={styles.well}>
      <LivePreviewFrame
        className={styles.preview}
        label={`${template.name} live preview`}
      >
        <Component />
      </LivePreviewFrame>
      <div className={styles.stageBar}>
        <div>
          <p className={styles.stageName}>{template.name}</p>
          <p className={styles.stageMeta}>
            {template.studentName} · {template.studentProgram}
          </p>
        </div>
        <div className={styles.stageActions}>
          <Link href={`/preview/${template.slug}`} className={styles.stageLink}>
            Open full preview
            <ArrowRight size={14} weight="bold" />
          </Link>
          <DownloadSource slug={template.slug} className={styles.stageLink} />
        </div>
      </div>
    </div>
  );
}
