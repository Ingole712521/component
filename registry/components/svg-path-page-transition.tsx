"use client";

/**
 * SVG Path Page Transition (Vertical)
 *
 * Inspired by Codrops Sketch 021 — SVG Path Page Transition (Vertical):
 * https://github.com/codrops/codrops-sketches/tree/main/021-svg-path-page-transition-vertical
 */

import {
  useCallback,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import gsap from "gsap";
import styles from "./svg-path-page-transition.module.css";

/** Source sketch this component is based on */
export const SVG_PATH_PAGE_TRANSITION_INSPIRATION = {
  name: "Codrops Sketch 021: SVG Path Page Transition (Vertical)",
  href: "https://github.com/codrops/codrops-sketches/tree/main/021-svg-path-page-transition-vertical",
  archiveHref: "https://tympanus.net/codrops/sketches",
} as const;

/** SVG path keyframes — edit at https://yqnn.github.io/svg-path-editor/ */
export const SVG_PATH_TRANSITION_PATHS = {
  step1: {
    unfilled: "M 0 100 V 100 Q 50 100 100 100 V 100 z",
    inBetween: {
      curve1: "M 0 100 V 50 Q 50 0 100 50 V 100 z",
      curve2: "M 0 100 V 50 Q 50 100 100 50 V 100 z",
    },
    filled: "M 0 100 V 0 Q 50 0 100 0 V 100 z",
  },
  step2: {
    filled: "M 0 0 V 100 Q 50 100 100 100 V 0 z",
    inBetween: {
      curve1: "M 0 0 V 50 Q 50 0 100 50 V 0 z",
      curve2: "M 0 0 V 50 Q 50 100 100 50 V 0 z",
    },
    unfilled: "M 0 0 V 0 Q 50 0 100 0 V 0 z",
  },
} as const;

export interface SvgPathPageTransitionProps {
  /** Header title shown above the views */
  title?: string;
  /** Show “Inspired by Codrops” link in the frame (default: true) */
  showInspiration?: boolean;
  /** Link to the original sketch repository */
  inspirationHref?: string;
  /** Codrops sketches archive link */
  archiveHref?: string;
  /** Label for the inspiration link */
  inspirationLabel?: string;
  openLabel?: string;
  backLabel?: string;
  /** Content for the first (default) view */
  view1?: ReactNode;
  /** Content for the second view revealed after transition */
  view2?: ReactNode;
  className?: string;
  colors?: {
    text?: string;
    view1Bg?: string;
    view2Bg?: string;
    link?: string;
    linkHover?: string;
    button?: string;
    buttonHover?: string;
  };
}

export function SvgPathPageTransition({
  title = "SVG Path Page Transition (Vertical)",
  showInspiration = true,
  inspirationHref = SVG_PATH_PAGE_TRANSITION_INSPIRATION.href,
  archiveHref = SVG_PATH_PAGE_TRANSITION_INSPIRATION.archiveHref,
  inspirationLabel = "Inspired by Codrops · Sketch 021",
  openLabel = "Open",
  backLabel = "Back",
  view1,
  view2,
  className = "",
  colors,
}: SvgPathPageTransitionProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const overlayPathRef = useRef<SVGPathElement>(null);
  const view2Ref = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const pageRef = useRef(1);

  const switchPages = useCallback(() => {
    const frame = frameRef.current;
    const landingEl = view2Ref.current;
    if (!frame || !landingEl) return;

    if (pageRef.current === 2) {
      frame.classList.add(styles.frameViewOpen);
      landingEl.classList.add(styles.viewOpen);
    } else {
      frame.classList.remove(styles.frameViewOpen);
      landingEl.classList.remove(styles.viewOpen);
    }
  }, []);

  const reveal = useCallback(() => {
    const overlayPath = overlayPathRef.current;
    if (!overlayPath || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    pageRef.current = 2;

    const { step1, step2 } = SVG_PATH_TRANSITION_PATHS;

    gsap
      .timeline({
        onComplete: () => {
          isAnimatingRef.current = false;
        },
      })
      .set(overlayPath, { attr: { d: step1.unfilled } })
      .to(overlayPath, {
        duration: 0.8,
        ease: "power4.in",
        attr: { d: step1.inBetween.curve1 },
      }, 0)
      .to(overlayPath, {
        duration: 0.2,
        ease: "power1",
        attr: { d: step1.filled },
        onComplete: switchPages,
      })
      .set(overlayPath, { attr: { d: step2.filled } })
      .to(overlayPath, {
        duration: 0.2,
        ease: "sine.in",
        attr: { d: step2.inBetween.curve1 },
      })
      .to(overlayPath, {
        duration: 1,
        ease: "power4",
        attr: { d: step2.unfilled },
      });
  }, [switchPages]);

  const unreveal = useCallback(() => {
    const overlayPath = overlayPathRef.current;
    if (!overlayPath || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    pageRef.current = 1;

    const { step1, step2 } = SVG_PATH_TRANSITION_PATHS;

    gsap
      .timeline({
        onComplete: () => {
          isAnimatingRef.current = false;
        },
      })
      .set(overlayPath, { attr: { d: step2.unfilled } })
      .to(overlayPath, {
        duration: 0.8,
        ease: "power4.in",
        attr: { d: step2.inBetween.curve2 },
      }, 0)
      .to(overlayPath, {
        duration: 0.2,
        ease: "power1",
        attr: { d: step2.filled },
        onComplete: switchPages,
      })
      .set(overlayPath, { attr: { d: step1.filled } })
      .to(overlayPath, {
        duration: 0.2,
        ease: "sine.in",
        attr: { d: step1.inBetween.curve2 },
      })
      .to(overlayPath, {
        duration: 1,
        ease: "power4",
        attr: { d: step1.unfilled },
      });
  }, [switchPages]);

  const cssVars = colors
    ? ({
        "--spt-color-text": colors.text,
        "--spt-color-bg-view-1": colors.view1Bg,
        "--spt-color-bg-view-2": colors.view2Bg,
        "--spt-color-link": colors.link,
        "--spt-color-link-hover": colors.linkHover,
        "--spt-color-button": colors.button,
        "--spt-color-button-hover": colors.buttonHover,
      } as CSSProperties)
    : undefined;

  return (
    <div
      className={`${styles.root} ${className}`.trim()}
      style={cssVars}
    >
      <main className={styles.main}>
        <div ref={frameRef} className={styles.frame}>
          <h1 className={styles.frameTitle}>{title}</h1>
          {showInspiration ? (
            <nav className={styles.frameLinks} aria-label="Credits">
              <a
                href={inspirationHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {inspirationLabel}
              </a>
              {archiveHref ? (
                <a href={archiveHref} target="_blank" rel="noopener noreferrer">
                  Codrops Sketches
                </a>
              ) : null}
            </nav>
          ) : null}
        </div>

        <div className={styles.view}>
          {view1}
          <button
            type="button"
            className={`${styles.unbutton} ${styles.button} ${styles.buttonOpen}`}
            aria-label="Open other view"
            onClick={reveal}
          >
            {openLabel}
          </button>
        </div>

        <div ref={view2Ref} className={`${styles.view} ${styles.view2}`}>
          {view2}
          <button
            type="button"
            className={`${styles.unbutton} ${styles.button}`}
            aria-label="Close current view"
            onClick={unreveal}
          >
            {backLabel}
          </button>
        </div>

        <svg
          className={styles.overlay}
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            ref={overlayPathRef}
            className="overlay__path"
            vectorEffect="non-scaling-stroke"
            d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
          />
        </svg>
      </main>
    </div>
  );
}
