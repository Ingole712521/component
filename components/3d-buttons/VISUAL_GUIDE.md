# 🎨 3D Button Library - Visual Guide

## Quick Reference Card

```
┌─────────────────────────────────────────────────────────────┐
│                    3D BUTTON LIBRARY                        │
│                  components/3d-buttons/                     │
└─────────────────────────────────────────────────────────────┘

THREE COMPONENT FAMILIES:
═══════════════════════════════════════════════════════════════

1️⃣ Motion3DButton (CSS-based)
   ─────────────────────────────
   Variants: lift | press | slide | flip | glow
   Colors:   blue | purple | green | orange | red
   Sizes:    sm | md | lg
   
   Best for: Lightweight, no-dependency implementations

2️⃣ GSAP3DButton (GSAP-powered)
   ─────────────────────────────
   Variants: cube | neon | isometric | extruded
   Colors:   blue | purple | green | orange | red
   Sizes:    sm | md | lg
   
   Best for: Advanced animations, smooth transitions

3️⃣ FramerMotion3DButton (Framer Motion)
   ───────────────────────────────────────
   Variants: spring | depth | rotate
   Colors:   blue | purple | green | orange | red
   Sizes:    sm | md | lg
   
   Best for: Spring physics, bouncy interactions

═══════════════════════════════════════════════════════════════
QUICK START CODE:
═══════════════════════════════════════════════════════════════

import { 
  Motion3DButton, 
  GSAP3DButton, 
  FramerMotion3DButton 
} from "@/components/3d-buttons";

// Simple usage
<Motion3DButton variant="lift" color="blue" size="md">
  Click Me
</Motion3DButton>

<GSAP3DButton variant="cube" color="purple" size="lg">
  Hover Me
</GSAP3DButton>

<FramerMotion3DButton variant="spring" color="green" size="md">
  Try Me
</FramerMotion3DButton>

═══════════════════════════════════════════════════════════════
VARIANT VISUAL GUIDE:
═══════════════════════════════════════════════════════════════

Motion3D Variants:
──────────────────
lift      → Rises up on hover (like floating)
press     → Presses down on click (tactile feel)
slide     → Light slides across surface (sleek)
flip      → Flips in 3D space (dramatic)
glow      → Pulsing glow effect (attention-grabbing)

GSAP3D Variants:
────────────────
cube        → 3D cube rotation (geometric)
neon        → Glowing neon border (retro-futuristic)
isometric   → Isometric angle view (technical)
extruded    → Deep 3D extrusion (substantial)

FramerMotion3D Variants:
────────────────────────
spring  → Bouncy spring animation (playful)
depth   → Moves in Z-axis (dimensional)
rotate  → Rotates in 3D space (dynamic)

═══════════════════════════════════════════════════════════════
COLOR PALETTE:
═══════════════════════════════════════════════════════════════

blue    → Blue to Cyan gradient      (Professional, Trust)
purple  → Purple to Pink gradient    (Creative, Premium)
green   → Green to Emerald gradient  (Success, Growth)
orange  → Orange to Red gradient     (Energy, Action)
red     → Red to Rose gradient       (Urgency, Danger)

═══════════════════════════════════════════════════════════════
SIZE COMPARISON:
═══════════════════════════════════════════════════════════════

sm → px-4 py-2 text-sm  → Small buttons, inline actions
md → px-6 py-3 text-base → Standard buttons, forms
lg → px-8 py-4 text-lg  → Large CTAs, hero sections

═══════════════════════════════════════════════════════════════
COMMON USE CASES:
═══════════════════════════════════════════════════════════════

🎯 Call-to-Action (CTA)
   → Motion3DButton, variant="lift", color="green", size="lg"
   
✅ Form Submission
   → FramerMotion3DButton, variant="spring", color="blue"
   
✨ Special Features
   → GSAP3DButton, variant="neon", color="purple"
   
⚠️  Danger Actions
   → Motion3DButton, variant="press", color="red"
   
📱 Mobile UI
   → Use size="sm" or "md" for touch targets
   
💼 Professional UI
   → Motion3DButton, variant="lift", color="blue"

═══════════════════════════════════════════════════════════════
FILE STRUCTURE:
═══════════════════════════════════════════════════════════════

components/3d-buttons/
├── index.ts                 ← Import from here
├── types.ts                 ← TypeScript definitions
├── styles.module.css        ← All CSS styles
├── Motion3DButton.tsx       ← CSS-based component
├── GSAP3DButton.tsx         ← GSAP component
├── FramerMotion3DButton.tsx ← Framer Motion component
├── Showcase.tsx             ← Demo page
├── quick-start.tsx          ← Quick examples
├── README.md                ← Full documentation
├── USAGE_EXAMPLES.md        ← Usage patterns
└── SUMMARY.md               ← This summary

═══════════════════════════════════════════════════════════════
PERFORMANCE TIPS:
═══════════════════════════════════════════════════════════════

⚡ Motion3D (CSS)     → Fastest, lightest weight
⚡ GSAP3D            → Requires GSAP library (installed)
⚡ FramerMotion3D    → Requires Framer Motion (installed)

All use hardware-accelerated transforms for 60fps animations

═══════════════════════════════════════════════════════════════
ACCESSIBILITY:
═══════════════════════════════════════════════════════════════

✓ Keyboard navigation supported
✓ Disabled state styling
✓ Focus states included
✓ ARIA labels can be added
✓ Semantic HTML button element

═══════════════════════════════════════════════════════════════
BROWSER SUPPORT:
═══════════════════════════════════════════════════════════════

✓ Chrome/Edge (latest)
✓ Firefox (latest)
✓ Safari (latest)
✗ IE11 (not supported)

Requires: CSS 3D Transforms support

═══════════════════════════════════════════════════════════════
DOCUMENTATION LINKS:
═══════════════════════════════════════════════════════════════

📖 README.md          → Complete API reference
💡 USAGE_EXAMPLES.md → Real-world patterns
🚀 quick-start.tsx    → Copy-paste code
🎪 Showcase.tsx       → Visual demo page
📋 SUMMARY.md         → Quick reference

═══════════════════════════════════════════════════════════════

Ready to build stunning 3D interfaces! 🎉

═══════════════════════════════════════════════════════════════
