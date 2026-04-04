"use client";

import React, { useEffect, useMemo, useRef } from "react";

export type SmartWrapTextBox = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export interface SmartWrapTextProps {
  text?: string;
  className?: string;
  style?: React.CSSProperties;
  canvasWidth?: number;
  canvasHeight?: number;
  font?: string;
  lineHeight?: number;
  padding?: number;
  textColor?: string;
  boxStrokeColor?: string;
  boxGap?: number;
  initialBox?: Partial<SmartWrapTextBox>;
  clampBoxToCanvas?: boolean;
  backgroundColor?: string;
  containerPadding?: number | string;

  /** Anything you want inside the wrap region: image, video, SVG, custom UI. */
  children?: React.ReactNode;
  /** Used when `children` is omitted. Defaults to `/Profile_with_background.png`. */
  defaultMediaSrc?: string;
  mediaAlt?: string;
  /** `object-fit` for the default `<img>` (and a sensible default for your own tags via `boxContentClassName`). */
  mediaFit?: React.CSSProperties["objectFit"];
  /** Classes on the draggable box (e.g. rounded corners, ring, shadow). */
  boxClassName?: string;
  boxStyle?: React.CSSProperties;
  /** Classes on an inner wrapper around media (overflow clip, flex center). */
  boxContentClassName?: string;
  /** Draw the debug rectangle on the canvas (usually off when showing media). */
  showBoxOutline?: boolean;
}

const DEFAULT_TEXT =
  "Understanding the paper pattern is essential for effective preparation. Students are advised to utilize the initial reading time to analyze the paper and identify questions they can attempt confidently. It is generally recommended to begin with stronger areas to build confidence. Proper time management is crucial, as each question carries significant weight.";

const DEFAULT_BOX: SmartWrapTextBox = { x: 220, y: 48, width: 100, height: 100 };

const DEFAULT_MEDIA = "/Profile_with_background.png";

export default function SmartWrapText({
  text = DEFAULT_TEXT,
  className = "",
  style,
  canvasWidth = 700,
  canvasHeight = 300,
  font = "18px Arial",
  lineHeight = 26,
  padding = 20,
  textColor = "#ffffff",
  boxStrokeColor = "#ffffff",
  boxGap = 10,
  initialBox,
  clampBoxToCanvas = true,
  backgroundColor = "#111111",
  containerPadding = 20,
  children,
  defaultMediaSrc = DEFAULT_MEDIA,
  mediaAlt = "",
  mediaFit = "cover",
  boxClassName = "",
  boxStyle,
  boxContentClassName = "h-full w-full",
  showBoxOutline = false,
}: SmartWrapTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<SmartWrapTextBox>({ ...DEFAULT_BOX, ...initialBox });
  const draggingRef = useRef(false);
  const dragOffsetRef = useRef({ dx: 0, dy: 0 });
  const rafRef = useRef(0);

  const mergedInitial = useMemo(
    () => ({ ...DEFAULT_BOX, ...initialBox }),
    [initialBox?.x, initialBox?.y, initialBox?.width, initialBox?.height]
  );

  useEffect(() => {
    boxRef.current = { ...mergedInitial };
  }, [mergedInitial]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const overlay = overlayRef.current;
    if (!canvas || !overlay) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    canvas.width = Math.round(canvasWidth * dpr);
    canvas.height = Math.round(canvasHeight * dpr);
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.font = font;

    type Word = { text: string; width: number };
    const words: Word[] = text.split(/\s+/).filter(Boolean).map((w) => ({
      text: w,
      width: ctx.measureText(w + " ").width,
    }));

    const clampBox = (b: SmartWrapTextBox): SmartWrapTextBox => {
      if (!clampBoxToCanvas) return b;
      const maxX = Math.max(0, canvasWidth - b.width);
      const maxY = Math.max(0, canvasHeight - b.height);
      return {
        ...b,
        x: Math.min(maxX, Math.max(0, b.x)),
        y: Math.min(maxY, Math.max(0, b.y)),
      };
    };

    const syncOverlayDom = (box: SmartWrapTextBox) => {
      const el = overlayRef.current;
      if (!el) return;
      el.style.left = `${box.x}px`;
      el.style.top = `${box.y}px`;
      el.style.width = `${box.width}px`;
      el.style.height = `${box.height}px`;
    };

    const draw = () => {
      const box = clampBox(boxRef.current);
      boxRef.current = box;
      syncOverlayDom(box);

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      if (showBoxOutline) {
        ctx.strokeStyle = boxStrokeColor;
        ctx.strokeRect(box.x, box.y, box.width, box.height);
      }

      let x = padding;
      let y = padding + lineHeight;

      words.forEach((word) => {
        const nextX = x + word.width;
        const overlapsY = y > box.y && y < box.y + box.height;

        if (overlapsY) {
          if (x < box.x && nextX > box.x) {
            x = box.x + box.width + boxGap;
          }
          if (x >= box.x && x < box.x + box.width) {
            x = box.x + box.width + boxGap;
          }
        }

        if (nextX > canvasWidth - padding) {
          x = padding;
          y += lineHeight;
        }

        ctx.fillStyle = textColor;
        ctx.fillText(word.text, x, y);
        x += word.width;
      });
    };

    const clientToCanvas = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const sx = rect.width > 0 ? canvasWidth / rect.width : 1;
      const sy = rect.height > 0 ? canvasHeight / rect.height : 1;
      return {
        x: (clientX - rect.left) * sx,
        y: (clientY - rect.top) * sy,
      };
    };

    const handlePointerDown = (e: PointerEvent) => {
      const { x: mx, y: my } = clientToCanvas(e.clientX, e.clientY);
      const box = boxRef.current;
      if (mx > box.x && mx < box.x + box.width && my > box.y && my < box.y + box.height) {
        draggingRef.current = true;
        dragOffsetRef.current = { dx: mx - box.x, dy: my - box.y };
        overlay.setPointerCapture(e.pointerId);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      const { x: mx, y: my } = clientToCanvas(e.clientX, e.clientY);
      let nx = mx - dragOffsetRef.current.dx;
      let ny = my - dragOffsetRef.current.dy;
      const b = boxRef.current;
      if (clampBoxToCanvas) {
        nx = Math.min(Math.max(0, nx), canvasWidth - b.width);
        ny = Math.min(Math.max(0, ny), canvasHeight - b.height);
      }
      boxRef.current = { ...b, x: nx, y: ny };
    };

    const handlePointerUp = (e: PointerEvent) => {
      draggingRef.current = false;
      try {
        if (overlay.hasPointerCapture(e.pointerId)) overlay.releasePointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
    };

    const loop = () => {
      draw();
      rafRef.current = requestAnimationFrame(loop);
    };

    overlay.addEventListener("pointerdown", handlePointerDown);
    overlay.addEventListener("pointermove", handlePointerMove);
    overlay.addEventListener("pointerup", handlePointerUp);
    overlay.addEventListener("pointercancel", handlePointerUp);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      overlay.removeEventListener("pointerdown", handlePointerDown);
      overlay.removeEventListener("pointermove", handlePointerMove);
      overlay.removeEventListener("pointerup", handlePointerUp);
      overlay.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [
    text,
    canvasWidth,
    canvasHeight,
    font,
    lineHeight,
    padding,
    textColor,
    boxStrokeColor,
    boxGap,
    clampBoxToCanvas,
    showBoxOutline,
  ]);

  const boxShellStyle: React.CSSProperties = {
    position: "absolute",
    left: mergedInitial.x,
    top: mergedInitial.y,
    width: mergedInitial.width,
    height: mergedInitial.height,
    cursor: "grab",
    touchAction: "none",
    boxSizing: "border-box",
    outline: "none",
    border: "none",
    boxShadow: "none",
    ...boxStyle,
  };

  const defaultMedia = (
    <img
      src={defaultMediaSrc}
      alt={mediaAlt}
      draggable={false}
      className="h-full w-full select-none"
      style={{ objectFit: mediaFit, pointerEvents: "none" }}
    />
  );

  return (
    <div
      className={className}
      style={{ background: backgroundColor, padding: containerPadding, ...style }}
    >
      <div className="relative inline-block" style={{ width: canvasWidth, height: canvasHeight }}>
        <canvas ref={canvasRef} className="pointer-events-none block" />
        <div
          ref={overlayRef}
          className={`absolute z-10 overflow-hidden ${boxClassName}`}
          style={boxShellStyle}
        >
          <div className={boxContentClassName}>{children ?? defaultMedia}</div>
        </div>
      </div>
    </div>
  );
}
