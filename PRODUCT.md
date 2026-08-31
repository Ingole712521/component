# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: students preparing internships, campus placements, and first-job applications. They need a portfolio they can preview, pick, and personalize rather than design from scratch.

Secondary: recruiters and faculty who open a student's live template during review.

## Product Purpose

Animioui is a gallery of ready-made student portfolio templates. Success is a student finding a layout that fits their field, previewing it as a real site, and making it their own.

## Positioning

Templates are live, full-page sites you can open and inspect, not static mock thumbnails. Each template is written for a student situation (engineering projects, design studio work, mixed campus CV) rather than a generic agency portfolio.

## Operating Context

Students browse on laptop and phone, compare templates side by side, then open a full preview. Templates: Atlas (engineering), Lumen (design), Keel (campus), Nimbus (data), Harbor (architecture), Quill (writing), Ridge (product), Willow (health), Meridian (policy), Flint (finance). Catalog at `/templates` and `/templates/[slug]`. Full previews live at `/preview/[slug]`. The homepage is the marketing and selection surface.

## Capabilities and Constraints

Confirmed: home gallery, templates catalog, slug pages, live in-page preview frame, full-page preview route, ten templates with named student examples.

Do not invent: pricing, paid plans, customer logos, testimonials, download counts, or a working "make your own" editor. Personalization is promised as the next step, not shipped.

Undecided: how students export or fork a template after they pick one.

## Brand Commitments

Name: Animioui. Voice: plain, student-facing, no startup hype. Existing identity in code is daylight: Bricolage Grotesque, ink on mist, painted-sky homepage.

Binding visual constraint from this request: restage the homepage in the cinematic marketing language of the supplied reference (painted-sky first viewport, floating pill navigation, centered offer, live product demonstration below). The reference is a craft bar, not a brand clone. Do not use Voicelet naming, copy, or product claims.

## Evidence on Hand

Real: Atlas, Lumen, Keel, Nimbus, Harbor, Quill, Ridge, Willow, Meridian, and Flint templates with student names, programs, and taglines in `templates/`. Live preview and full preview already work.

Absent: customer quotes, company logos, usage metrics, pricing. Future work must not fabricate them.

## Product Principles

- Show the template as a real page, not a fake screenshot.
- Speak to students in concrete application language, not platform jargon.
- Keep preview and pick as the only conversion actions until export exists.
- Treat the three templates as the proof. Do not pad with invented social proof.
- Accessibility is a floor: skip link, keyboard focus, readable contrast, reduced motion.

## Accessibility & Inclusion

No product-specific legal standard was set. Keep skip-to-content, visible focus, and `prefers-reduced-motion` as the working floor. Copy stays in sentence case and avoids exclusive jargon.
