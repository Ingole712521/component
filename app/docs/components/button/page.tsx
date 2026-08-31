"use client";

import { CopyButton } from "../../_components/copy-button";
import { DocPageHeader } from "../../_components/doc-page-header";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function ButtonPage() {
  return (
    <div className="doc-stack">
      <DocPageHeader
        section="Components"
        title="Button"
        description="An animated button with shimmer, glow, pulse, and ripple variants."
      />

      <section className="space-y-4">
        <h2 className="doc-h2">Installation</h2>
        <div className="relative doc-code">
          <CopyButton code="npx @nehal712521/inprogress add button" />
          <span className="text-[var(--color-accent-muted)]">$</span> npx @nehal712521/inprogress add button
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="doc-h2">Preview</h2>
        <div className="doc-panel p-8 flex flex-wrap items-center justify-center gap-4">
          <AnimatedButton variant="shimmer">Shimmer</AnimatedButton>
          <AnimatedButton variant="glow">Glow</AnimatedButton>
          <AnimatedButton variant="pulse">Pulse</AnimatedButton>
          <AnimatedButton variant="ripple">Ripple</AnimatedButton>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="doc-h2">Usage</h2>
        <div className="relative doc-code">
          <CopyButton
            code={`import AnimatedButton from "@/components/ui/AnimatedButton";

<AnimatedButton variant="shimmer">Click me</AnimatedButton>`}
          />
          <pre className="text-[13px] text-[var(--muted)] overflow-x-auto">
            <code>{`import AnimatedButton from "@/components/ui/AnimatedButton";

<AnimatedButton variant="shimmer">Click me</AnimatedButton>`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}
