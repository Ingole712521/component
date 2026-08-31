"use client";

import { Home, Mail, Settings, User } from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { CopyButton } from "../../_components/copy-button";
import { DocPageHeader } from "../../_components/doc-page-header";

const dockItems = [
  { icon: <Home className="w-5 h-5" />, label: "Home" },
  { icon: <User className="w-5 h-5" />, label: "Profile" },
  { icon: <Mail className="w-5 h-5" />, label: "Messages" },
  { icon: <Settings className="w-5 h-5" />, label: "Settings" },
];

export default function FloatingDockPage() {
  return (
    <div className="doc-stack">
      <DocPageHeader
        section="Motion"
        title="Floating Dock"
        description="A macOS-style dock with hover magnification and tooltips. Use it as a fixed app dock, or inline in a preview."
      />

      <section className="space-y-4">
        <h2 className="doc-h2">Installation</h2>
        <div className="relative doc-code">
          <CopyButton code="npx @nehal712521/inprogress add floating-dock" />
          <span className="text-[var(--color-accent-muted)]">$</span> npx @nehal712521/inprogress add floating-dock
        </div>
        <p className="text-sm text-[var(--muted)]">
          Requires: <code className="font-mono text-xs text-[var(--color-accent-secondary)]">framer-motion</code>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="doc-h2">Preview</h2>
        <div className="doc-panel p-8 h-64 relative overflow-hidden flex items-end justify-center pb-10">
          <FloatingDock items={dockItems} placement="inline" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="doc-h2">Usage</h2>
        <div className="relative doc-code">
          <CopyButton
            code={`import { FloatingDock } from "@/components/ui/floating-dock";

<FloatingDock items={items} />`}
          />
          <pre className="text-[13px] text-[var(--muted)] overflow-x-auto">
            <code>{`import { FloatingDock } from "@/components/ui/floating-dock";

<FloatingDock items={items} />`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}
