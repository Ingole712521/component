"use client";

import { useState } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { Carousel, CardSlide } from "@/components/ui/carousel";
import { sidebarItems } from "../../sidebarConfig";

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

const demoSlides = [
  {
    id: 1,
    content: (
      <CardSlide
        title="Mountain Adventure"
        description="Explore the highest peaks and breathtaking views"
        gradient="from-emerald-600 to-teal-800"
      />
    ),
  },
  {
    id: 2,
    content: (
      <CardSlide
        title="Ocean Escape"
        description="Dive into crystal clear waters and discover marine life"
        gradient="from-blue-600 to-indigo-800"
      />
    ),
  },
  {
    id: 3,
    content: (
      <CardSlide
        title="Desert Wanderer"
        description="Experience the magic of golden sand dunes"
        gradient="from-orange-500 to-red-700"
      />
    ),
  },
  {
    id: 4,
    content: (
      <CardSlide
        title="Forest Retreat"
        description="Find peace among ancient trees and wildlife"
        gradient="from-green-600 to-emerald-900"
      />
    ),
  },
  {
    id: 5,
    content: (
      <CardSlide
        title="City Lights"
        description="Explore vibrant nightlife and urban culture"
        gradient="from-purple-600 to-pink-700"
      />
    ),
  },
];

const usageCode = `import { Carousel, CardSlide } from "@/components/ui/carousel";

const slides = [
  {
    id: 1,
    content: (
      <CardSlide
        title="Mountain Adventure"
        description="Explore the highest peaks"
        gradient="from-emerald-600 to-teal-800"
      />
    ),
  },
  {
    id: 2,
    content: (
      <CardSlide
        title="Ocean Escape"
        description="Dive into crystal clear waters"
        gradient="from-blue-600 to-indigo-800"
      />
    ),
  },
  // Add more slides...
];

export default function MyPage() {
  return (
    <Carousel
      items={slides}
      slideWidth={300}
      slideHeight={400}
      showArrows={true}
      showDots={true}
      autoPlay={false}
    />
  );
}`;

const customSlideCode = `import { Carousel } from "@/components/ui/carousel";

// Custom slide content
const customSlides = [
  {
    id: 1,
    content: (
      <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Custom Card</h2>
        <p className="text-white/80">Any content works here!</p>
      </div>
    ),
  },
  // More custom slides...
];

<Carousel
  items={customSlides}
  slideWidth={350}
  slideHeight={250}
  gap={30}
/>`;

const autoPlayCode = `<Carousel
  items={slides}
  autoPlay={true}
  autoPlayInterval={3000} // 3 seconds
  showArrows={true}
  showDots={true}
/>`;

export default function CarouselPage() {
  return (
    <div className="h-screen overflow-hidden bg-black text-zinc-400 font-sans">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex gap-12 h-full pt-24">
          <aside className="hidden lg:block w-64 shrink-0 h-full overflow-y-auto pr-4 border-r border-white/5 custom-scrollbar">
            <div className="space-y-8 pb-16">
              {sidebarItems.map((section) => (
                <div key={section.title}>
                  <h3 className="text-[10px] font-semibold text-white mb-4 tracking-widest uppercase opacity-50">
                    {section.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {section.items.map((item) => {
                      const isActive =
                        item.href === "/docs/components/carousel";
                      return (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className={`group flex items-center justify-between px-3 py-1.5 rounded-lg text-sm transition-all ${
                              isActive
                                ? "bg-accent/10 text-accent font-medium border border-accent/20 shadow-[0_0_16px_rgba(14,165,233,0.1)]"
                                : "hover:text-white hover:bg-white/5 border border-transparent"
                            }`}
                          >
                            <span>{item.name}</span>
                            {item.badge && (
                              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20 font-bold">
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          <main className="flex-1 min-w-0 h-full overflow-y-auto py-4 pr-2 custom-scrollbar">
            <div className="pb-24 space-y-12">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                  <span>Animations</span>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white">Carousel</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                  Carousel
                </h1>
                <p className="text-zinc-400 max-w-2xl">
                  A smooth, draggable carousel with infinite looping, spring
                  animations, and responsive design. Built with Framer Motion
                  for fluid interactions and Tabler Icons for navigation.
                </p>
              </div>

              {/* Installation */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Installation</h2>
                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <CopyButton code="npx @nehal712521/inprogress add carousel" />
                  <div className="p-4 font-mono text-sm">
                    <span className="text-emerald-400">$ </span>
                    <span className="text-white">npx </span>
                    <span className="text-accent">@nehal712521/inprogress</span>
                    <span className="text-white"> add </span>
                    <span className="text-yellow-300">carousel</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-500">
                  Requires:{" "}
                  <code className="text-accent bg-accent/10 px-1.5 py-0.5 rounded">
                    framer-motion
                  </code>{" "}
                  <code className="text-accent bg-accent/10 px-1.5 py-0.5 rounded ml-2">
                    lucide-react
                  </code>
                </p>
              </div>

              {/* Preview */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Preview</h2>
                <div className="rounded-2xl border border-white/8 bg-zinc-950 p-8 overflow-hidden">
                  <Carousel
                    items={demoSlides}
                    slideWidth={280}
                    slideHeight={350}
                    showArrows={true}
                    showDots={true}
                    gap={20}
                  />
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Infinite Looping",
                      desc: "Seamlessly cycles from last slide back to first",
                    },
                    {
                      title: "Drag & Swipe",
                      desc: "Touch and mouse drag support with velocity detection",
                    },
                    {
                      title: "Spring Animations",
                      desc: "Smooth Framer Motion spring transitions",
                    },
                    {
                      title: "Responsive Design",
                      desc: "Adapts to mobile, tablet, and desktop layouts",
                    },
                    {
                      title: "Navigation Arrows",
                      desc: "Clean prev/next buttons with hover effects",
                    },
                    {
                      title: "Pagination Dots",
                      desc: "Active slide indicator with direct navigation",
                    },
                    {
                      title: "Scale Transform",
                      desc: "Active slide enlarges while others shrink",
                    },
                    {
                      title: "Keyboard Support",
                      desc: "Navigate with arrow keys for accessibility",
                    },
                  ].map((feature) => (
                    <div
                      key={feature.title}
                      className="p-4 rounded-xl border border-white/8 bg-white/2"
                    >
                      <h3 className="text-white font-medium mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-zinc-500">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Usage */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Usage</h2>
                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <CopyButton code={usageCode} />
                  <pre className="p-4 font-mono text-sm text-zinc-300 overflow-x-auto">
                    <code>{usageCode}</code>
                  </pre>
                </div>
              </div>

              {/* Custom Slides */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Custom Slides</h2>
                <p className="text-zinc-400">
                  You can use any React content as slides. The carousel
                  automatically handles sizing based on your{" "}
                  <code className="text-accent bg-accent/10 px-1.5 py-0.5 rounded">
                    slideWidth
                  </code>{" "}
                  and{" "}
                  <code className="text-accent bg-accent/10 px-1.5 py-0.5 rounded">
                    slideHeight
                  </code>{" "}
                  props.
                </p>
                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <CopyButton code={customSlideCode} />
                  <pre className="p-4 font-mono text-sm text-zinc-300 overflow-x-auto">
                    <code>{customSlideCode}</code>
                  </pre>
                </div>
              </div>

              {/* Auto Play */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Auto Play</h2>
                <p className="text-zinc-400">
                  Enable automatic slide advancement with customizable
                  intervals. Auto-play pauses while dragging.
                </p>
                <div className="relative rounded-2xl border border-white/8 bg-zinc-950 overflow-hidden">
                  <CopyButton code={autoPlayCode} />
                  <pre className="p-4 font-mono text-sm text-zinc-300 overflow-x-auto">
                    <code>{autoPlayCode}</code>
                  </pre>
                </div>
              </div>

              {/* Props */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Props</h2>
                <div className="rounded-2xl border border-white/8 overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="text-left p-4 text-white font-medium">
                          Prop
                        </th>
                        <th className="text-left p-4 text-white font-medium">
                          Type
                        </th>
                        <th className="text-left p-4 text-white font-medium">
                          Default
                        </th>
                        <th className="text-left p-4 text-white font-medium">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        {
                          prop: "items",
                          type: "CarouselItem[]",
                          default: "required",
                          desc: "Array of items with id and content",
                        },
                        {
                          prop: "slideWidth",
                          type: "number",
                          default: "300",
                          desc: "Width of each slide in pixels",
                        },
                        {
                          prop: "slideHeight",
                          type: "number",
                          default: "400",
                          desc: "Height of each slide in pixels",
                        },
                        {
                          prop: "gap",
                          type: "number",
                          default: "20",
                          desc: "Gap between slides in pixels",
                        },
                        {
                          prop: "showArrows",
                          type: "boolean",
                          default: "true",
                          desc: "Show navigation arrows",
                        },
                        {
                          prop: "showDots",
                          type: "boolean",
                          default: "true",
                          desc: "Show pagination dots",
                        },
                        {
                          prop: "autoPlay",
                          type: "boolean",
                          default: "false",
                          desc: "Enable auto-play",
                        },
                        {
                          prop: "autoPlayInterval",
                          type: "number",
                          default: "5000",
                          desc: "Auto-play interval in ms",
                        },
                        {
                          prop: "className",
                          type: "string",
                          default: '""',
                          desc: "Additional CSS classes",
                        },
                      ].map((row) => (
                        <tr key={row.prop}>
                          <td className="p-4 font-mono text-accent">
                            {row.prop}
                          </td>
                          <td className="p-4 font-mono text-yellow-300">
                            {row.type}
                          </td>
                          <td className="p-4 text-zinc-500">{row.default}</td>
                          <td className="p-4 text-zinc-400">{row.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Helper Components */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  Helper Components
                </h2>
                <p className="text-zinc-400">
                  The carousel comes with pre-built slide components for common
                  use cases:
                </p>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-white/8 bg-white/2">
                    <h3 className="text-white font-medium mb-2">
                      <code className="text-accent">CardSlide</code>
                    </h3>
                    <p className="text-sm text-zinc-500 mb-2">
                      A gradient card with title, description, and optional
                      background image.
                    </p>
                    <code className="text-xs text-zinc-400 font-mono">
                      Props: title, description?, image?, gradient?, className?
                    </code>
                  </div>
                  <div className="p-4 rounded-xl border border-white/8 bg-white/2">
                    <h3 className="text-white font-medium mb-2">
                      <code className="text-accent">ImageSlide</code>
                    </h3>
                    <p className="text-sm text-zinc-500 mb-2">
                      A full-bleed image slide with optional gradient overlay.
                    </p>
                    <code className="text-xs text-zinc-400 font-mono">
                      Props: src, alt, overlay?
                    </code>
                  </div>
                  <div className="p-4 rounded-xl border border-white/8 bg-white/2">
                    <h3 className="text-white font-medium mb-2">
                      <code className="text-accent">CarouselSlide</code>
                    </h3>
                    <p className="text-sm text-zinc-500 mb-2">
                      The base slide wrapper with scale and shadow animations.
                      Used internally but can be composed manually.
                    </p>
                    <code className="text-xs text-zinc-400 font-mono">
                      Props: children, isActive?, className?
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
