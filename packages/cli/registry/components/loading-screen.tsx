"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type LoadingPhase = "loading" | "split" | "rotate" | "close" | "expand";

export type LoadingScreenProgressLabel = React.ReactNode | ((progress: number) => React.ReactNode);

export interface LoadingScreenProps {
  isOpen?: boolean;
  resetOnOpen?: boolean;
  onFinish?: () => void;

  // Sizing
  panelWidth?: number | string;
  panelHeight?: number | string;
  panelRadius?: number | string;

  // Colors
  backdropColor?: string;
  panelColor?: string;
  fillColor?: string;
  splitFillColor?: string;
  expandColor?: string;
  textColor?: string;

  // Progress
  progressFrom?: number;
  progressTo?: number;
  progressStep?: number;
  progressIntervalMs?: number;
  showProgressText?: boolean;
  progressLabel?: LoadingScreenProgressLabel;
  progressLabelClassName?: string;

  // Timing (relative to when progress reaches progressTo)
  splitAfterMs?: number;
  rotateAfterMs?: number;
  closeAfterMs?: number;
  expandAfterMs?: number;
  finishAfterMs?: number;

  // Animation durations
  progressFillTransitionMs?: number;
  clipTransitionMs?: number;
  rotateDurationMs?: number;
  closeDurationMs?: number;
  expandDurationMs?: number;

  // Motion details
  splitInsetPercent?: number; // 0..100
  rotateAngleDeg?: number; // negative rotates "left" like the original
  rotateEasing?: string; // CSS easing
  closeEasing?: string; // CSS easing
  expandEasing?: string; // CSS easing

  // Reduced motion
  reduceMotion?: boolean;
  reducedMotionFinishAfterMs?: number;

  // Styling hooks
  className?: string;
  panelClassName?: string;
  overlayClassName?: string;
}

function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mql.matches);

    update();
    // eslint-disable-next-line deprecation/deprecation
    if (typeof mql.addEventListener === "function") mql.addEventListener("change", update);
    // eslint-disable-next-line deprecation/deprecation
    else if (typeof mql.addListener === "function") mql.addListener(update);

    return () => {
      // eslint-disable-next-line deprecation/deprecation
      if (typeof mql.removeEventListener === "function") mql.removeEventListener("change", update);
      // eslint-disable-next-line deprecation/deprecation
      else if (typeof mql.removeListener === "function") mql.removeListener(update);
    };
  }, []);

  return prefersReducedMotion;
}

export default function LoadingScreen({
  isOpen = true,
  resetOnOpen = true,
  onFinish,

  panelWidth = 320,
  panelHeight = 70,
  panelRadius = 2,

  backdropColor = "#000000",
  panelColor = "#374151",
  fillColor = "#ffffff",
  splitFillColor,
  expandColor = "#ffffff",
  textColor = "#ffffff",

  progressFrom = 0,
  progressTo = 100,
  progressStep = 1,
  progressIntervalMs = 25,
  showProgressText = true,
  progressLabel,
  progressLabelClassName = "mt-24 text-lg tracking-wide",

  splitAfterMs = 150,
  rotateAfterMs = 650,
  closeAfterMs = 2650,
  expandAfterMs = 3200,
  finishAfterMs = 3800,

  progressFillTransitionMs = 75,
  clipTransitionMs = 500,
  rotateDurationMs = 700,
  closeDurationMs = 500,
  expandDurationMs = 600,

  splitInsetPercent = 50,
  rotateAngleDeg = -90,
  rotateEasing = "cubic-bezier(0.7, 0, 0.3, 1)",
  closeEasing = "ease",
  expandEasing = "ease-out",

  reduceMotion,
  reducedMotionFinishAfterMs = 250,

  className = "",
  panelClassName = "",
  overlayClassName = "",
}: LoadingScreenProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldReduceMotion = reduceMotion ?? prefersReducedMotion;

  const [progress, setProgress] = useState(progressFrom);
  const [phase, setPhase] = useState<LoadingPhase>("loading");

  const runIdRef = useRef(0);
  const scheduledRef = useRef(false);
  const finishCalledRef = useRef(false);

  const timeoutsRef = useRef<number[]>([]);
  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
  };

  const progressPercent = useMemo(() => {
    const from = progressFrom;
    const to = progressTo;
    if (to === from) return 100;
    const pct = ((progress - from) / (to - from)) * 100;
    if (!Number.isFinite(pct)) return 0;
    return Math.max(0, Math.min(100, pct));
  }, [progress, progressFrom, progressTo]);

  useEffect(() => {
    if (!isOpen) return;

    runIdRef.current += 1;
    const runId = runIdRef.current;

    scheduledRef.current = false;
    finishCalledRef.current = false;
    clearAllTimeouts();

    if (resetOnOpen) {
      setProgress(progressFrom);
      setPhase("loading");
    }

    if (shouldReduceMotion) {
      setProgress(progressTo);
      setPhase("expand");
      const t = window.setTimeout(() => {
        if (runIdRef.current !== runId) return;
        if (finishCalledRef.current) return;
        finishCalledRef.current = true;
        onFinish?.();
      }, reducedMotionFinishAfterMs);
      timeoutsRef.current.push(t);
      return () => clearAllTimeouts();
    }

    let cancelled = false;
    const intervalId = window.setInterval(() => {
      if (cancelled) return;
      setProgress((prev) => {
        const next = prev + progressStep;
        if (next >= progressTo) return progressTo;
        return next;
      });
    }, progressIntervalMs);

    return () => {
      cancelled = true;
      clearInterval(intervalId);
      clearAllTimeouts();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isOpen,
    resetOnOpen,
    progressFrom,
    progressTo,
    progressStep,
    progressIntervalMs,
    shouldReduceMotion,
    reducedMotionFinishAfterMs,
    onFinish,
  ]);

  useEffect(() => {
    if (!isOpen) return;
    if (shouldReduceMotion) return;
    if (progress < progressTo) return;
    if (scheduledRef.current) return;

    scheduledRef.current = true;
    const runId = runIdRef.current;

    timeoutsRef.current.push(
      window.setTimeout(() => {
        if (runIdRef.current !== runId) return;
        setPhase("split");
      }, splitAfterMs)
    );

    timeoutsRef.current.push(
      window.setTimeout(() => {
        if (runIdRef.current !== runId) return;
        setPhase("rotate");
      }, rotateAfterMs)
    );

    timeoutsRef.current.push(
      window.setTimeout(() => {
        if (runIdRef.current !== runId) return;
        setPhase("close");
      }, closeAfterMs)
    );

    timeoutsRef.current.push(
      window.setTimeout(() => {
        if (runIdRef.current !== runId) return;
        setPhase("expand");
      }, expandAfterMs)
    );

    timeoutsRef.current.push(
      window.setTimeout(() => {
        if (runIdRef.current !== runId) return;
        if (finishCalledRef.current) return;
        finishCalledRef.current = true;
        onFinish?.();
      }, finishAfterMs)
    );

    return () => {};
  }, [
    isOpen,
    shouldReduceMotion,
    progress,
    progressTo,
    splitAfterMs,
    rotateAfterMs,
    closeAfterMs,
    expandAfterMs,
    finishAfterMs,
    onFinish,
  ]);

  if (!isOpen) return null;

  const resolvedSplitFill = splitFillColor ?? fillColor;
  const resolvedPanelRadius = typeof panelRadius === "number" ? `${panelRadius}px` : panelRadius;
  const resolvedPanelWidth = typeof panelWidth === "number" ? `${panelWidth}px` : panelWidth;
  const resolvedPanelHeight = typeof panelHeight === "number" ? `${panelHeight}px` : panelHeight;

  const splitInset = Math.max(0, Math.min(100, splitInsetPercent));
  const resolvedRotateAngle = typeof rotateAngleDeg === "number" ? `${rotateAngleDeg}deg` : rotateAngleDeg;

  const resolvedProgressLabel: React.ReactNode = useMemo(() => {
    if (phase !== "loading") return null;
    const p = Math.round(progressPercent);
    if (typeof progressLabel === "function") return progressLabel(p);
    if (progressLabel !== undefined) return progressLabel;
    return `${p}%`;
  }, [phase, progressLabel, progressPercent]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center overflow-hidden ${className}`}
      role="status"
      aria-live="polite"
      style={
        {
          backgroundColor: backdropColor,
          zIndex: 50,
          ["--ls-panel-radius" as any]: resolvedPanelRadius,
          ["--ls-fill-color" as any]: fillColor,
          ["--ls-split-fill-color" as any]: resolvedSplitFill,
          ["--ls-expand-color" as any]: expandColor,
          ["--ls-text-color" as any]: textColor,
          ["--ls-split-percent" as any]: `${splitInset}%`,
          ["--ls-progress-fill-transition" as any]: `${progressFillTransitionMs}ms`,
          ["--ls-clip-transition" as any]: `${clipTransitionMs}ms`,
          ["--ls-rotate-duration" as any]: `${rotateDurationMs}ms`,
          ["--ls-close-duration" as any]: `${closeDurationMs}ms`,
          ["--ls-expand-duration" as any]: `${expandDurationMs}ms`,
          ["--ls-rotate-angle" as any]: resolvedRotateAngle,
          ["--ls-rotate-easing" as any]: rotateEasing,
          ["--ls-close-easing" as any]: closeEasing,
          ["--ls-expand-easing" as any]: expandEasing,
        } as React.CSSProperties
      }
    >
      <style>{`
        .ls-clip-full {
          clip-path: inset(0 0 0 0);
        }
        .ls-clip-left {
          clip-path: inset(0 var(--ls-split-percent) 0 0);
        }
        .ls-clip-right {
          clip-path: inset(0 0 0 var(--ls-split-percent));
        }

        .ls-pane {
          position: absolute;
          inset: 0;
          background: var(--ls-split-fill-color);
          transition: clip-path var(--ls-clip-transition) ease-in-out;
        }

        .ls-rotate-left {
          transform-origin: right bottom;
          animation: ls-hingeRotate var(--ls-rotate-duration) var(--ls-rotate-easing) forwards;
        }

        @keyframes ls-hingeRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(var(--ls-rotate-angle)); }
        }

        .ls-close-left {
          transform-origin: right bottom;
          animation: ls-collapseLeft var(--ls-close-duration) var(--ls-close-easing) forwards;
        }
        .ls-close-right {
          transform-origin: left bottom;
          animation: ls-collapseRight var(--ls-close-duration) var(--ls-close-easing) forwards;
        }

        @keyframes ls-collapseLeft {
          from { transform: rotate(var(--ls-rotate-angle)) scaleY(1); }
          to { transform: rotate(var(--ls-rotate-angle)) scaleY(0); }
        }

        @keyframes ls-collapseRight {
          from { transform: scaleX(1); }
          to { transform: scaleX(0); }
        }

        @keyframes ls-expandScreen {
          from {
            transform: scale(0.2);
            opacity: 0.5;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .ls-animate-expand {
          position: fixed;
          inset: 0;
          background: var(--ls-expand-color);
          z-index: 50;
          animation: ls-expandScreen var(--ls-expand-duration) var(--ls-expand-easing) forwards;
        }

        .ls-panel {
          border-radius: var(--ls-panel-radius);
        }

        .ls-progress-fill {
          background: var(--ls-fill-color);
          transition: width var(--ls-progress-fill-transition) ease;
        }
      `}</style>

      <div className="relative overflow-hidden" style={{ width: resolvedPanelWidth, height: resolvedPanelHeight }}>
        {/* LOADING */}
        {phase === "loading" && (
          <div
            className={`relative w-full h-full overflow-hidden ls-panel ${panelClassName}`}
            style={{ backgroundColor: panelColor }}
          >
            <div className="absolute top-0 left-0 h-full ls-progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>
        )}

        {/* ANIMATION */}
        {phase !== "loading" && phase !== "expand" && (
          <>
            {/* LEFT */}
            <div
              className={`ls-pane ${
                phase === "split" ? "ls-clip-left" : "ls-clip-full"
              } ${phase === "rotate" ? "ls-rotate-left" : ""} ${phase === "close" ? "ls-close-left" : ""}`}
            />

            {/* RIGHT */}
            <div
              className={`ls-pane ${
                phase === "split" ? "ls-clip-right" : "ls-clip-full"
              } ${phase === "close" ? "ls-close-right" : ""}`}
            />
          </>
        )}
      </div>

      {/* TEXT */}
      {phase === "loading" && showProgressText && (
        <div className={`absolute ${progressLabelClassName}`} style={{ color: textColor }}>
          {resolvedProgressLabel}
        </div>
      )}

      {phase === "expand" && <div className={`ls-animate-expand ${overlayClassName}`} />}
    </div>
  );
}

