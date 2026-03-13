"use client";

import React from "react";

type StatusVariant = "processing" | "success" | "error";

interface PaymentStatusPillProps {
  label?: string;
  amount?: string;
  variant?: StatusVariant;
  caption?: string;
  fullWidth?: boolean;
  className?: string;
}

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
  .animate-spin { animation: spin 1s linear infinite; }
`;

const variantColors: Record<
  StatusVariant,
  {
    primary: string;
    secondary: string;
    gradient: string;
  }
> = {
  processing: {
    primary: "#38bdf8",
    secondary: "#0284c7",
    gradient: "from-sky-400 to-sky-600",
  },
  success: {
    primary: "#22c55e",
    secondary: "#16a34a",
    gradient: "from-emerald-400 to-emerald-600",
  },
  error: {
    primary: "#fb7185",
    secondary: "#e11d48",
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
}: PaymentStatusPillProps) {
  const colors = variantColors[variant];

  return (
    <>
      <style>{animationStyles}</style>
      <div
        className={[
          "relative group",
          fullWidth ? "w-full" : "inline-block",
          className,
        ].join(" ")}
      >
        <div className="absolute -inset-0.5 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition duration-1000 bg-linear-to-r from-sky-400/40 to-sky-600/40" />
        <div className="relative flex items-center justify-between gap-4 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full border border-white/10 backdrop-blur-2xl bg-zinc-900/90 ring-1 ring-white/10 shadow-2xl text-sm sm:text-base text-zinc-100 overflow-hidden">
          {variant === "processing" && (
            <div className="absolute inset-0 -translate-x-full animate-shimmer">
              <div className="w-1/2 h-full bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-12" />
            </div>
          )}

          <div className="flex items-center gap-3 min-w-0 relative z-10">
            <StatusSpinner variant={variant} />
            <div className="flex flex-col min-w-0">
              <span className="font-medium truncate">{label}</span>
              {caption && (
                <span className="text-[11px] sm:text-xs text-zinc-400/80 truncate">
                  {caption}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 relative z-10">
            <span className="text-xs sm:text-sm font-semibold tracking-tight bg-gradient-to-r bg-clip-text text-transparent drop-shadow-sm">
              <span className={`bg-gradient-to-r ${colors.gradient} bg-clip-text`}>
                {amount}
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function StatusSpinner({ variant }: { variant: StatusVariant }) {
  const colors = variantColors[variant];

  if (variant === "processing") {
    return (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 animate-spin"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-20"
          cx="12"
          cy="12"
          r="9"
          stroke={colors.secondary}
          strokeWidth="2"
          fill="none"
        />
        <defs>
          <linearGradient id="spinner-processing" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.primary} />
            <stop offset="100%" stopColor={colors.secondary} />
          </linearGradient>
        </defs>
        <path
          d="M21 12a9 9 0 0 0-9-9"
          stroke="url(#spinner-processing)"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    );
  }

  return (
    <div className="relative w-5 h-5 sm:w-6 sm:h-6">
      <svg
        className="absolute inset-0"
        style={{ animation: "scaleIn 0.8s ease-out" }}
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
              animation: "drawCheck 0.9s ease-out",
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
                animation: "drawX 0.9s ease-out",
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
                animation: "drawX 0.9s ease-out 0.9s",
              }}
            />
          </>
        )}
      </svg>
    </div>
  );
}

