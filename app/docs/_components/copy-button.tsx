"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="absolute top-3 right-3 p-1.5 rounded-md border border-[var(--color-border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--color-surface)] transition-colors"
      aria-label={copied ? "Copied" : "Copy code"}
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}
