"use client";

import { useId, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { getFeaturedTemplates, type TemplateEntry } from "@/templates";
import { LivePreviewFrame } from "./live-preview-frame";
import styles from "./home-world.module.css";

export function TemplateStage() {
  const templates = getFeaturedTemplates();
  const [active, setActive] = useState(0);
  const tablistId = useId();
  const current = templates[active] ?? templates[0];

  if (!current) {
    return (
      <p className={styles.stageMeta}>
        No templates yet. Add a folder under templates and register it.
      </p>
    );
  }

  return (
    <section className={styles.stage} aria-labelledby={`${tablistId}-label`}>
      <h2 id={`${tablistId}-label`} className="sr-only">
        Live template preview
      </h2>
      <div className={styles.tabs} role="tablist" aria-label="Template layouts">
        {templates.map((template, index) => {
          const selected = index === active;
          return (
            <button
              key={template.slug}
              type="button"
              className={`${styles.tab} ${selected ? styles.tabActive : ""}`}
              role="tab"
              aria-selected={selected}
              aria-controls={`${tablistId}-panel`}
              id={`${tablistId}-${template.slug}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => onTabKey(event, index, templates, setActive)}
            >
              {template.category}
            </button>
          );
        })}
      </div>
      <div
        className={styles.well}
        role="tabpanel"
        id={`${tablistId}-panel`}
        aria-labelledby={`${tablistId}-${current.slug}`}
      >
        <LivePreviewFrame
          className={styles.preview}
          label={`${current.name} live preview`}
        >
          <current.Component />
        </LivePreviewFrame>
        <div className={styles.stageBar}>
          <div>
            <p className={styles.stageName}>{current.name}</p>
            <p className={styles.stageMeta}>
              {current.studentName} · {current.studentProgram}
            </p>
          </div>
          <div className={styles.stageActions}>
            <Link href={`/preview/${current.slug}`} className={styles.stageLink}>
              Open full preview
              <ArrowRight size={14} weight="bold" />
            </Link>
            <a
              href={`/api/download/${current.slug}`}
              className={styles.stageLink}
            >
              Download source
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function onTabKey(
  event: KeyboardEvent<HTMLButtonElement>,
  index: number,
  items: TemplateEntry[],
  setActive: (index: number) => void,
) {
  const last = items.length - 1;
  if (last < 0) return;

  let next = index;
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    next = index === last ? 0 : index + 1;
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    next = index === 0 ? last : index - 1;
  } else if (event.key === "Home") {
    next = 0;
  } else if (event.key === "End") {
    next = last;
  } else {
    return;
  }

  event.preventDefault();
  setActive(next);
  const target = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>(
    '[role="tab"]',
  )[next];
  target?.focus();
}
