"use client";

import dynamic from "next/dynamic";
import { Home, Mail, Settings, User } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FlipCard } from "@/components/ui/flip-card";
import { GradientText } from "@/components/ui/gradient-text";

const AnimatedButton = dynamic(() => import("@/components/ui/AnimatedButton"), {
  ssr: false,
  loading: () => <div className="h-10 w-28 rounded-full bg-[var(--color-surface)]" aria-hidden />,
});

const dockItems = [
  { icon: <Home className="w-5 h-5" />, label: "Home" },
  { icon: <User className="w-5 h-5" />, label: "Profile" },
  { icon: <Mail className="w-5 h-5" />, label: "Messages" },
  { icon: <Settings className="w-5 h-5" />, label: "Settings" },
];

export default function HeroStage() {
  const reduce = useReducedMotion();

  return (
    <div className="shell">
      <div className="shell-inner overflow-hidden min-h-[22rem] md:min-h-[26rem] p-5 md:p-6 flex flex-col">
        <div className="flex items-center justify-between mb-5">
          <p className="text-xs text-[var(--muted)]">Live components</p>
          <p className="text-[11px] font-mono text-[var(--muted)]">preview</p>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-5 items-center">
          <div className="space-y-5 min-w-0">
            <GradientText
              className="text-2xl sm:text-3xl font-semibold leading-[1.15] pb-1"
              animate={!reduce}
              colors={["#8eadd4", "#4a72b8", "#c5d4ea", "#8eadd4"]}
            >
              Motion you can own
            </GradientText>
            <div className="flex flex-wrap items-center gap-3">
              <AnimatedButton variant="shimmer" size="md">
                Shimmer
              </AnimatedButton>
              <AnimatedButton variant="glow" size="md">
                Glow
              </AnimatedButton>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[#0c0d10] px-3 py-2.5 font-mono text-[12px] text-[var(--muted)] overflow-x-auto">
              <span className="text-[var(--color-accent-muted)]">$</span> npx @nehal712521/inprogress add button
            </div>
          </div>

          <FlipCard
            width="148px"
            height="188px"
            front={
              <div className="h-full w-full bg-[var(--color-surface)] p-4 flex flex-col justify-end">
                <p className="text-[11px] text-[var(--muted)]">Flip card</p>
                <p className="text-sm font-semibold">Front</p>
              </div>
            }
            back={
              <div className="h-full w-full bg-[var(--color-accent)] p-4 flex flex-col justify-end text-white">
                <p className="text-[11px] text-white/70">Flip card</p>
                <p className="text-sm font-semibold">Back</p>
              </div>
            }
          />
        </div>

        <div className="mt-6 flex justify-center pb-1">
          <FloatingDock items={dockItems} placement="inline" />
        </div>
      </div>
    </div>
  );
}
