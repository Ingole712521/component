"use client";

import { ChevronRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import DocsSidebar from "../../DocsSidebar";
import SmartWrapText from "@/components/ui/SmartWrapText";

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
      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
    </button>
  );
}

const usageCode = `import SmartWrapText from "@/components/ui/SmartWrapText";

// Default: shows /Profile_with_background.png in the box (square-friendly defaults).
export default function Page() {
  return (
    <SmartWrapText
      text="Your paragraph here. Words wrap around the draggable box."
      canvasWidth={700}
      canvasHeight={300}
      font="18px system-ui, sans-serif"
      textColor="#e4e4e7"
      initialBox={{ x: 220, y: 48, width: 100, height: 100 }}
      boxClassName="rounded-xl"
      mediaAlt="Profile"
      mediaFit="cover"
    />
  );
}

// Custom media: pass children (image, video, etc.)
/*
<SmartWrapText initialBox={{ x: 180, y: 40, width: 160, height: 90 }} boxClassName="rounded-lg overflow-hidden">
  <video
    className="h-full w-full object-cover"
    src="/your-clip.mp4"
    muted
    loop
    playsInline
    autoPlay
  />
</SmartWrapText>
*/`;

export default function SmartWrapTextPage() {
  return (
    <div className="h-screen overflow-hidden bg-black text-zinc-400 font-sans">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex gap-12 h-full pt-24">
          <DocsSidebar />

          <main className="flex-1 min-w-0 h-full overflow-y-auto py-4 pr-2">
            <div className="pb-24 space-y-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                  <span>Components</span>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white">Smart Wrap Text</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Smart Wrap Text</h1>
                <p className="text-zinc-400 max-w-xl">
                  Canvas text wraps around a draggable <span className="text-zinc-300">HTML</span> region. Put an image,
                  video, or any markup in the box. If you do not pass <code className="text-zinc-300">children</code>,
                  it uses <code className="text-zinc-300">/Profile_with_background.png</code> by default. Tune{" "}
                  <code className="text-zinc-300">initialBox</code>, <code className="text-zinc-300">boxClassName</code>,{" "}
                  <code className="text-zinc-300">mediaFit</code>, and canvas size to match your asset.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Installation</h2>
                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <CopyButton code="npx @nehal712521/inprogress add smart-wrap-text" />
                  <div className="p-4 font-mono text-sm">
                    <span className="text-emerald-400">$ </span>
                    <span className="text-white">npx </span>
                    <span className="text-accent">@nehal712521/inprogress</span>
                    <span className="text-white"> add </span>
                    <span className="text-yellow-300">smart-wrap-text</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Preview</h2>
                <p className="text-sm text-zinc-500">
                  Drag the profile image; text reflows around it. Optional framing (radius, ring, shadow) goes on{" "}
                  <code className="text-zinc-400">boxClassName</code>.
                </p>
                <div className="rounded-2xl border border-white/8 bg-zinc-950 p-4 overflow-x-auto">
                  <SmartWrapText
                    textColor="#e4e4e7"
                    backgroundColor="#09090b"
                    className="rounded-lg"
                    initialBox={{ x: 220, y: 48, width: 100, height: 100 }}
                    boxClassName="rounded-xl"
                    mediaAlt="Profile avatar"
                    mediaFit="cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Usage</h2>
                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <CopyButton code={usageCode} />
                  <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                    <code>{usageCode}</code>
                  </pre>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
