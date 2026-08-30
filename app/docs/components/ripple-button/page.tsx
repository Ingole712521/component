"use client";

import { CopyButton } from "../../_components/copy-button";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import { RippleButton } from "@/components/ui/ripple-button";

export default function RippleButtonPage() {
    const [clickCount, setClickCount] = useState(0);
    const [showVariants, setShowVariants] = useState(false);
    const installCode = "npx @nehal712521/inprogress add ripple-button";
    const usageCode = `import { RippleButton } from "@/components/ui/ripple-button";

export default function Page() {
    return (
        <RippleButton 
            buttonColor="#18181b" 
            textColor="#ffffff" 
            rippleColor="rgba(255, 255, 255, 0.3)"
        >
            Click Me
        </RippleButton>
    );
}`;

    return (
      <div className="doc-stack">
      {/* Header */}
                                  <div className="space-y-4">
                                      <div className="flex items-center gap-2 text-accent-secondary text-sm font-medium">
                                          <span>Components</span>
                                          <ChevronRight className="w-4 h-4" />
                                          <span className="text-white">Ripple Button</span>
                                      </div>
                                      <h1 className="text-4xl font-bold text-white tracking-tight">Ripple Button</h1>
                                      <p className="text-zinc-400 text-lg">A highly customizable button featuring a concentric waveform click animation and standard React pointer interactions.</p>
                                  </div>

                                  {/* Installation */}
                                  <div className="space-y-4">
                                      <h2 className="text-xl font-semibold text-white">Installation</h2>
                                      <div className="relative bg-zinc-900 rounded-lg border border-zinc-800 p-4 font-mono text-sm text-zinc-300">
                                          <CopyButton code={installCode} />
                                          <span className="text-zinc-500">$</span> {installCode}
                                      </div>
                                  </div>

                                  {/* Preview */}
                                  <div className="space-y-4">
                                      <h2 className="text-xl font-semibold text-white">Preview</h2>
                                      <div className="relative bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden min-h-[300px] flex items-center justify-center flex-col gap-6">
                                          <p className="text-zinc-500 text-sm absolute top-4">Click button to see ripple effect (Clicks: {clickCount})</p>

                                          <div className="flex gap-4 flex-wrap justify-center">
                                              {/* Default */}
                                              <RippleButton
                                                  onClick={() => {
                                                      setClickCount((c) => c + 1);
                                                      setShowVariants(true);
                                                  }}
                                              >
                                                  Default Dark
                                              </RippleButton>

                                              {showVariants && (
                                                  <>
                                                      {/* Custom Blue */}
                                                      <RippleButton
                                                          buttonColor="#3b82f6"
                                                          textColor="white"
                                                          rippleColor="rgba(255, 255, 255, 0.4)"
                                                          onClick={() => setClickCount((c) => c + 1)}
                                                      >
                                                          Blue Theme
                                                      </RippleButton>

                                                      {/* Custom Light */}
                                                      <RippleButton
                                                          buttonColor="#e4e4e7"
                                                          textColor="#18181b"
                                                          rippleColor="rgba(0, 0, 0, 0.2)"
                                                          onClick={() => setClickCount((c) => c + 1)}
                                                      >
                                                          Light Theme
                                                      </RippleButton>
                                                  </>
                                              )}
                                          </div>
                                      </div>
                                  </div>

                                  {/* Usage */}
                                  <div className="space-y-4">
                                      <h2 className="text-xl font-semibold text-white">Usage</h2>
                                      <div className="relative bg-zinc-900 rounded-lg border border-zinc-800 p-4 font-mono text-sm text-zinc-300 overflow-x-auto">
                                          <CopyButton code={usageCode} />
                                          <pre className="text-sm">{usageCode}</pre>
                                      </div>
                                  </div>

                                  {/* Props */}
                                  <div className="space-y-4">
                                      <h2 className="text-xl font-semibold text-white">Props</h2>
                                      <div className="bg-zinc-900/50 rounded-lg border border-zinc-800 overflow-hidden">
                                          <table className="w-full text-sm">
                                              <thead className="bg-zinc-800/50">
                                                  <tr>
                                                      <th className="px-4 py-3 text-left text-white font-medium">Prop</th>
                                                      <th className="px-4 py-3 text-left text-white font-medium">Type</th>
                                                      <th className="px-4 py-3 text-left text-white font-medium">Default</th>
                                                      <th className="px-4 py-3 text-left text-white font-medium">Description</th>
                                                  </tr>
                                              </thead>
                                              <tbody className="divide-y divide-zinc-800">
                                                  <tr><td className="px-4 py-3 text-accent-secondary">buttonColor</td><td className="px-4 py-3 text-zinc-400">string</td><td className="px-4 py-3 text-zinc-500">&quot;#18181b&quot;</td><td className="px-4 py-3 text-zinc-400">Controls the background color.</td></tr>
                                                  <tr><td className="px-4 py-3 text-accent-secondary">textColor</td><td className="px-4 py-3 text-zinc-400">string</td><td className="px-4 py-3 text-zinc-500">&quot;#ffffff&quot;</td><td className="px-4 py-3 text-zinc-400">Controls the text color.</td></tr>
                                                  <tr><td className="px-4 py-3 text-accent-secondary">rippleColor</td><td className="px-4 py-3 text-zinc-400">string</td><td className="px-4 py-3 text-zinc-500">&quot;rgba(255, 255, 255, 0.3)&quot;</td><td className="px-4 py-3 text-zinc-400">Controls the concentric rings color.</td></tr>
                                                  <tr><td className="px-4 py-3 text-zinc-500">...props</td><td className="px-4 py-3 text-zinc-400">ButtonHTMLAttributes</td><td className="px-4 py-3 text-zinc-500">-</td><td className="px-4 py-3 text-zinc-400">Accepts standard HTML button props like onClick.</td></tr>
                                              </tbody>
                                          </table>
                                      </div>
                                  </div>
      </div>
    );
  }
