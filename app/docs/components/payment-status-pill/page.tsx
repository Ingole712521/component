"use client";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import DocsSidebar from "../../DocsSidebar";
import { PaymentStatusPill } from "@/components/ui/payment-status-pill";

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
    >
      {copied ? (
        <Check className="w-4 h-4 text-emerald-400" />
      ) : (
        <Copy className="w-4 h-4 text-zinc-400" />
      )}
    </button>
  );
}

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
  const [variant, setVariant] = useState<"processing" | "success" | "error">(
    "processing"
  );

  return (
    <div className="h-screen overflow-hidden bg-black text-zinc-400 font-sans">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex gap-12 h-full pt-24">
          {/* Sidebar */}
          <DocsSidebar />

          {/* Main Content */}
          <main className="flex-1 min-w-0 h-full overflow-y-auto py-4 pr-2">
            <div className="pb-24 space-y-12">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                  <span>Components</span>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white">Payment Status</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                  Payment Status Pill
                </h1>
                <p className="text-zinc-400 max-w-xl">
                  A compact, glassy pill for showing payment or transaction
                  status with a subtle spinner, label, and amount.
                </p>
              </div>

              {/* Installation */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Installation</h2>
                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <CopyButton code={installCode} />
                  <div className="p-4 font-mono text-sm">
                    <span className="text-emerald-400">$ </span>
                    <span className="text-white">npx </span>
                    <span className="text-accent">
                      @nehal712521/inprogress
                    </span>
                    <span className="text-white"> add </span>
                    <span className="text-yellow-300">
                      payment-status-pill
                    </span>
                  </div>
                </div>
              </section>

              {/* Preview */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Preview</h2>
                <p className="text-sm text-zinc-400">
                  Switch between states to see how the pill adapts its glow and
                  accent color.
                </p>

                <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8 space-y-6">
                  <div className="flex gap-3 text-xs sm:text-sm">
                    {(["processing", "success", "error"] as const).map((v) => (
                      <button
                        key={v}
                        onClick={() => setVariant(v)}
                        className={`px-3 py-1.5 rounded-full border text-xs sm:text-sm transition-all ${variant === v
                            ? "border-accent bg-accent/10 text-accent"
                            : "border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300"
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
                          ? "We’re confirming things with your bank"
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

              {/* Usage */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Usage</h2>
                <p className="text-sm text-zinc-400">
                  Use the <code>variant</code>, <code>label</code>,{" "}
                  <code>caption</code>, and <code>amount</code> props to adapt
                  the pill to your checkout or billing flows.
                </p>
                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <CopyButton code={usageCode} />
                  <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                    <code>{usageCode}</code>
                  </pre>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

