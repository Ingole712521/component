import type { ReactNode } from "react";
import styles from "./live-preview-frame.module.css";

export function LivePreviewFrame({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className: string;
  label: string;
}) {
  return (
    <div
      className={`${styles.frame} ${className}`}
      aria-hidden
      data-preview={label}
    >
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
