"use client";

import { ChevronRight, Home, User, Settings, Mail } from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { motion } from "framer-motion";
import { CopyButton } from "../../_components/copy-button";
import { DocPageHeader } from "../../_components/doc-page-header";
import { Reveal } from "@/components/motion/Reveal";

const dockItems = [
  { icon: <Home className="w-5 h-5" />, label: "Home" },
  { icon: <User className="w-5 h-5" />, label: "Profile" },
  { icon: <Mail className="w-5 h-5" />, label: "Messages" },
  { icon: <Settings className="w-5 h-5" />, label: "Settings" },
];

const loopItems = [
  "Jam",
  "Stripe",
  "Betterstack",
  "Intercom",
  "GitHub",
  "Notion",
  "Granola",
  "Glean",
  "Attio",
  "Incident.io",
  "PostHog",
  "Sentry",
  "Amplitude",
];

export default function FloatingDockPage() {
  return (
    <div className="doc-stack">
      <Reveal>
        <DocPageHeader
          section="Animations"
          title="Floating Dock"
          description="A macOS-style floating dock with hover animations and tooltips."
        />
      </Reveal>

      <Reveal delay={0.08}>
        <section className="space-y-4">
          <h2 className="doc-h2">Installation</h2>
          <div className="relative doc-code border-violet-500/15">
            <CopyButton code="npx @nehal712521/inprogress add floating-dock" />
            <span className="text-cyan-400">$</span> npx @nehal712521/inprogress add floating-dock
          </div>
          <p className="text-sm text-[var(--muted)]">
            Requires: <code className="text-violet-300 font-mono text-xs">framer-motion</code>
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.12}>
        <section className="space-y-4">
          <h2 className="doc-h2">Preview</h2>
          <div className="doc-panel p-8 h-64 relative overflow-hidden border-violet-500/15">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_60%)]" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-20 w-40 bg-linear-to-r from-[var(--background)] via-[var(--background)]/70 to-transparent z-20" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-20 w-40 bg-linear-to-l from-[var(--background)] via-[var(--background)]/70 to-transparent z-20" />
            <div className="relative z-10 h-full flex items-center justify-center overflow-hidden">
              <motion.div
                className="flex w-max gap-3"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              >
                {[...loopItems, ...loopItems].map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="shrink-0 w-44 rounded-xl border border-violet-500/20 bg-violet-500/[0.06] backdrop-blur-sm px-3 py-2 text-center text-sm text-white/90"
                  >
                    {item}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.16}>
        <section className="space-y-4">
          <h2 className="doc-h2">Original dock variant</h2>
          <div className="doc-panel p-8 h-64 relative overflow-hidden border-cyan-500/15">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.1),transparent_55%)]" />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
              <FloatingDock items={dockItems} />
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
