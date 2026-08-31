---
name: Animioui
description: Student portfolio templates you can preview as real sites.
colors:
  ink: "#111318"
  ink-hover: "#1c1f27"
  muted: "#3d4654"
  paper: "#ffffff"
  mist: "#eef1f4"
  sky-deep: "#3d8fd4"
  cloud-peach: "#f4c9b0"
  selection: "#b7d4ea"
  preview-frame: "#d8dbe2"
  line: "rgba(17, 19, 24, 0.1)"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 4.8vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.028em"
  title:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 2.8vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.024em"
  body:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.011em"
  ui:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.016em"
  meta:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "-0.016em"
  sky:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 500
    lineHeight: 1.65
    letterSpacing: "0.008em"
rounded:
  pill: "999px"
  stage: "1.75rem"
  card: "1.15rem"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "88px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "6px 6px 6px 18px"
    height: "46px"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
    height: "46px"
  nav-pill:
    backgroundColor: "rgba(255, 255, 255, 0.55)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "52px"
---

## Overview

Animioui's marketing homepage is a daylight scene: a painted placement-morning sky, a frosted glass pill for navigation, and live student templates as the product. The first viewport must show the offer and a real template, not a fake screenshot. Atlas, Lumen, and Keel keep their own interior design systems on `/preview/[slug]`.

## Colors

Ink (`#111318`) is the only action color. Paper and mist are the ground after the sky. Muted text is a blue-gray drawn from the sky, never a neutral CSS gray. White type on the painting uses a light text-shadow so it stays readable on clouds. Do not introduce a second accent, dark-mode inversion, or purple glow.

## Typography

Bricolage Grotesque is the only marketing face. Five roles, no nearby sizes:

- **Display** (`--text-display`, 700): the sky headline.
- **Title** (`--text-title`, 600): overlay links and the gallery heading.
- **Body** (`--text-body`, 400): reading copy at 45–75ch, leading 1.6.
- **UI** (`--text-ui`, 600): nav, buttons, tabs, names, actions.
- **Meta** (`--text-meta`, 500): kickers, captions, footer, labels.

White copy on the painting uses the same body size one step heavier (500), leading 1.65, and `--track-sky` (`0.008em`) so it holds against clouds. Tracking never goes past `-0.04em`. JetBrains Mono is reserved for template interiors that already use it, not for the marketing chrome.

## Layout

The homepage is a column: sticky centered pill nav, full-bleed sky hero, live template stage inside the first viewport, then an asymmetric gallery. Do not return to a left-copy / right-preview split on this surface. Mobile stacks to one column with a hamburger that morphs to an X.

## Elevation & Depth

Sky is the atmosphere. Frosted pills sit in it with inset highlights and a sky-tinted shadow. The template stage is a paper well with a soft offset shadow, not a 1px gray border plus halo. Templates stack by overlap and a tab cross-fade, not drop-shadow cards.

## Shapes

Pills for navigation, tabs, and buttons. Large squircles for the stage (`1.75rem`) and gallery cards (`1.15rem`). Do not mix sharp rectangles into the marketing chrome.

## Components

- **Nav pill:** Floating, not edge-glued. Logo with paper-plane mark, four links on desktop, morphing menu on small screens.
- **Primary button:** Ink fill, nested circular arrow. Scale to `0.97` on press.
- **Secondary button:** Paper fill on the sky.
- **Template stage:** Category tabs (Engineering, Design, Campus) switch a live scaled page. Footer names the student and offers "Open full preview".
- **Gallery cards:** Live preview crop, name, tagline, whole-card link to preview.

## Do's and Don'ts

- Do show Atlas, Lumen, or Keel as a live page.
- Do keep conversion to preview and pick. Do not invent pricing, logos, or testimonials.
- Don't clone Voicelet copy, discounts, or survey widgets.
- Don't gray-on-white body text; tint muted copy from the sky.
- Don't animate the templates themselves. Motion belongs to entrance, tabs, and press feedback.
- Don't use Inter, gradient text, or equal three-up feature cards on this surface.
