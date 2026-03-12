"use client";

import React from "react";

type StatusVariant = "processing" | "success" | "error";

interface PaymentStatusPillProps {
  /** Main status text shown in the middle */
  label?: string;
  /** Amount text shown on the right, e.g. "$100.00" */
  amount?: string;
  /** Visual state of the pill */
  variant?: StatusVariant;
  /** Optional small caption under the label */
  caption?: string;
  /** Make the pill full‑width instead of auto */
  fullWidth?: boolean;
  /** Custom className to tweak layout/colors */
  className?: string;
  /** Show shimmer effect for processing state */
  shimmer?: boolean;
  /** Custom spinner component */
  customSpinner?: React.ReactNode;
  /** Hide spinner completely */
  hideSpinner?: boolean;
  /** Custom styles for different parts */
  customStyles?: {
    container?: string;
    label?: string;
    amount?: string;
    caption?: string;
    spinner?: string;
  };
  /** Click handler */
  onClick?: () => void;
  /** Additional props */
  [key: string]: any;
}

// Animation keyframes as a style tag (injected once)
const animationStyles = `
  @keyframes shimmer {
    100% { transform: translateX(100%); }
  }
  @keyframes scaleIn {
    0% { transform: scale(0); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes drawCheck {
    0% { stroke-dasharray: 50; stroke-dashoffset: 50; }
    100% { stroke-dasharray: 50; stroke-dashoffset: 0; }
  }
  @keyframes drawX {
    0% { stroke-dasharray: 30; stroke-dashoffset: 30; }
    100% { stroke-dasharray: 30; stroke-dashoffset: 0; }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-shimmer { animation: shimmer 2s infinite; }
  .animate-spin-slow { animation: spin 3s linear infinite; }
  .animate-spin { animation: spin 1s linear infinite; }
  .animate-ping { animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; }
  @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }
  .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
`;

// Color configuration
const variantColors: Record<
  StatusVariant,
  {
    primary: string;
    secondary: string;
    light: string;
    dark: string;
    ring: string;
    text: string;
    bg: string;
    gradient: string;
  }
> = {
  processing: {
    primary: "#38bdf8", // sky-400
    secondary: "#0284c7", // sky-600
    light: "#7dd3fc", // sky-300
    dark: "#0369a1", // sky-700
    ring: "rgba(56, 189, 248, 0.3)",
    text: "text-sky-400",
    bg: "bg-sky-500/10",
    gradient: "from-sky-400 to-sky-600",
  },
  success: {
    primary: "#22c55e", // emerald-500
    secondary: "#16a34a", // emerald-600
    light: "#4ade80", // emerald-400
    dark: "#15803d", // emerald-700
    ring: "rgba(34, 197, 94, 0.3)",
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    gradient: "from-emerald-400 to-emerald-600",
  },
  error: {
    primary: "#fb7185", // rose-400
    secondary: "#e11d48", // rose-600
    light: "#fda4af", // rose-300
    dark: "#9f1239", // rose-800
    ring: "rgba(251, 113, 133, 0.3)",
    text: "text-rose-400",
    bg: "bg-rose-500/10",
    gradient: "from-rose-400 to-rose-600",
  },
};

export function PaymentStatusPill({
  label = "Processing payment...",
  amount = "$100.00",
  variant = "processing",
  caption,
  fullWidth = false,
  className = "",
  shimmer = true,
  customSpinner,
  hideSpinner = false,
  customStyles = {},
  onClick,
  ...props
}: PaymentStatusPillProps) {
  const colors = variantColors[variant];

  const containerClasses = [
    "relative group",
    fullWidth ? "w-full" : "inline-block",
    onClick ? "cursor-pointer" : "",
    customStyles.container || "",
  ].join(" ");

  const pillClasses = [
    "relative",
    "flex items-center justify-between gap-4 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full",
    "border border-white/10",
    "backdrop-blur-2xl",
    "bg-zinc-900/90",
    "ring-1 ring-white/10",
    "shadow-2xl",
    "text-sm sm:text-base text-zinc-100",
    "overflow-hidden",
    "transition-all duration-300 ease-out",
    "hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl",
    "active:scale-[0.99]",
    fullWidth ? "w-full" : "w-auto",
    className,
  ].join(" ");

  const labelClasses = [
    "font-medium truncate",
    customStyles.label || "",
  ].join(" ");

  const captionClasses = [
    "text-[11px] sm:text-xs text-zinc-400/80 truncate",
    customStyles.caption || "",
  ].join(" ");

  const amountClasses = [
    "text-xs sm:text-sm font-semibold tracking-tight",
    "bg-gradient-to-r",
    colors.gradient,
    "bg-clip-text text-transparent",
    "drop-shadow-sm",
    customStyles.amount || "",
  ].join(" ");

  return (
    <>
      {/* Inject animations once */}
      <style>{animationStyles}</style>

      <div className={containerClasses} onClick={onClick} {...props}>
        {/* Outer glow on hover */}
        <div
          className={[
            "absolute -inset-0.5 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition duration-1000",
            "bg-gradient-to-r",
            colors.gradient,
          ].join(" ")}
          style={{ opacity: 0, transition: "opacity 1000ms" }}
        />

        {/* Main pill */}
        <div className={pillClasses}>
          {/* Shimmer effect for processing */}
          {shimmer && variant === "processing" && (
            <div className="absolute inset-0 -translate-x-full animate-shimmer">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
            </div>
          )}

          {/* Inner glow */}
          <div
            className={["absolute inset-0 opacity-20", colors.bg].join(" ")}
          />

          {/* Left section */}
          <div className="flex items-center gap-3 min-w-0 relative z-10">
            {/* Spinner */}
            {!hideSpinner && (
              <div className={customStyles.spinner || ""}>
                {customSpinner || <StatusSpinner variant={variant} />}
              </div>
            )}

            {/* Text content */}
            <div className="flex flex-col min-w-0">
              <span className={labelClasses}>{label}</span>
              {caption && <span className={captionClasses}>{caption}</span>}
            </div>
          </div>

          {/* Right section - amount */}
          <div className="flex items-center gap-2 shrink-0 relative z-10">
            {/* Status dot for success/error */}
            {variant !== "processing" && (
              <div className="relative">
                <div
                  className={[
                    "w-1.5 h-1.5 rounded-full",
                    `bg-${variant === "success" ? "emerald" : "rose"}-400`,
                    variant === "success" ? "animate-pulse" : "",
                  ].join(" ")}
                />
                <div
                  className={[
                    "absolute inset-0 w-1.5 h-1.5 rounded-full",
                    `bg-${variant === "success" ? "emerald" : "rose"}-400`,
                    "animate-ping opacity-20",
                  ].join(" ")}
                />
              </div>
            )}

            <span className={amountClasses}>{amount}</span>
          </div>
        </div>
      </div>
    </>
  );
}

// Default spinner component
function StatusSpinner({ variant }: { variant: StatusVariant }) {
  const colors = variantColors[variant];

  if (variant === "processing") {
    return (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 animate-spin"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {/* Background circle */}
        <circle
          className="opacity-20"
          cx="12"
          cy="12"
          r="9"
          stroke={colors.secondary}
          strokeWidth="2"
          fill="none"
        />

        {/* Gradient spinner */}
        <defs>
          <linearGradient id={`spinner-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.primary} />
            <stop offset="100%" stopColor={colors.secondary} />
          </linearGradient>
        </defs>

        <path
          d="M21 12a9 9 0 0 0-9-9"
          stroke={`url(#spinner-${variant})`}
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    );
  }

  // Success/Error icons
  return (
    <div className="relative w-5 h-5 sm:w-6 sm:h-6">
      <svg
        className="absolute inset-0"
        style={{ animation: "scaleIn 0.2s ease-out" }}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        {variant === "success" ? (
          <path
            d="M20 6L9 17L4 12"
            stroke={colors.primary}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 50,
              strokeDashoffset: 0,
              animation: "drawCheck 0.3s ease-out",
            }}
          />
        ) : (
          <>
            <path
              d="M18 6L6 18"
              stroke={colors.primary}
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                strokeDasharray: 30,
                strokeDashoffset: 0,
                animation: "drawX 0.3s ease-out",
              }}
            />
            <path
              d="M6 6L18 18"
              stroke={colors.primary}
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                strokeDasharray: 30,
                strokeDashoffset: 0,
                animation: "drawX 0.3s ease-out 0.1s",
              }}
            />
          </>
        )}
      </svg>
    </div>
  );
}
