"use client";

import { useState } from "react";
import { CopyButton } from "../../_components/copy-button";
import { DocPageHeader } from "../../_components/doc-page-header";
import { PaymentStatusPill } from "@/components/ui/payment-status-pill";

const installCode = "npx @nehal712521/inprogress add payment-status-pill";

const usageCode = `import { PaymentStatusPill } from "@/components/ui/payment-status-pill";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <PaymentStatusPill
        label="Processing payment..."
        caption="This usually takes a few seconds"
        amount="$100.00"
        variant="processing"
      />
    </main>
  );
}`;

export default function PaymentStatusPillDocsPage() {
  const [variant, setVariant] = useState<"processing" | "success" | "error">("processing");

  return (
    <div className="doc-stack">
      <DocPageHeader
        section="Components"
        title="Payment Status Pill"
        description="A compact pill for showing payment or transaction status with a spinner, label, and amount."
      />

      <section className="space-y-4">
        <h2 className="doc-h2">Installation</h2>
        <div className="relative doc-code">
          <CopyButton code={installCode} />
          <span className="text-white/40">$</span> {installCode.replace("npx ", "")}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="doc-h2">Preview</h2>
        <p className="text-sm text-[var(--muted)]">
          Switch between states to see how the pill adapts.
        </p>
        <div className="doc-panel p-8 space-y-6">
          <div className="flex flex-wrap gap-2">
            {(["processing", "success", "error"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setVariant(v)}
                className={`px-3 py-1.5 rounded-full border text-xs transition-colors ${
                  variant === v
                    ? "border-white bg-white/10 text-white"
                    : "border-white/10 text-[var(--muted)] hover:text-white"
                }`}
              >
                {v[0].toUpperCase() + v.slice(1)}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <PaymentStatusPill
              label={
                variant === "processing"
                  ? "Processing payment..."
                  : variant === "success"
                    ? "Payment successful"
                    : "Payment failed"
              }
              caption={
                variant === "processing"
                  ? "We're confirming things with your bank"
                  : variant === "success"
                    ? "Funds have been captured"
                    : "Please try again or use a different card"
              }
              amount="$100.00"
              variant={variant}
              fullWidth={false}
            />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="doc-h2">Usage</h2>
        <div className="relative doc-code whitespace-pre-wrap">
          <CopyButton code={usageCode} />
          {usageCode}
        </div>
      </section>
    </div>
  );
}
