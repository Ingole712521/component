/**
 * Personalize this template here.
 * Change names, copy, links, and lists. The React file only reads these values.
 */
import type { CinematicContent } from "../cinematic/types";

export const content: CinematicContent = {
  scene: {
    src: "/templates/scenes/scene-flint.png",
    alt: "Painted cool morning river through a city",
  },
  initials: "AS",
  mark: "Ananya",
  email: "ananya.shah@example.edu",
  nav: [
    { href: "#work", label: "Notes" },
    { href: "#work", label: "Clinic" },
    { href: "mailto:ananya.shah@example.edu", label: "Contact" },
  ],
  headline: ["Campus money work,", "kept readable."],
  standfirst: "Holdings, what changed, and what we will not buy again.",
  lede: "B.A. Economics at SRCC. A research or markets internship for summer 2027, with a society one-pager, a GST clinic, and municipal budget tables already written.",
  primary: { href: "#work", label: "See the work" },
  secondary: { href: "mailto:ananya.shah@example.edu", label: "Write to me" },
  stats: [
    { value: "3 notes", label: "Fund, GST clinic, budget lab" },
    { value: "SRCC", label: "B.A. Economics" },
    { value: "Summer 2027", label: "Research or markets internship" },
    { value: "Ten vendors", label: "First GST return, with a checklist" },
  ],
  workHeading: "Selected work",
  work: [
    {
      title: "Campus fund note",
      meta: "2026 · finance society",
      body: "A monthly one-pager on the society’s paper portfolio. Holdings, what changed, and what we will not buy again.",
    },
    {
      title: "GST filing clinic",
      meta: "2025 · volunteer desk",
      body: "Helped ten student vendors file their first return. The work was the checklist, not a lecture.",
    },
    {
      title: "Budget lab, public accounts",
      meta: "2025 · coursework",
      body: "Read three municipal budget annexes and wrote what the tables actually say about school capex.",
    },
  ],
};
