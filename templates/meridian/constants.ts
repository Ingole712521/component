/**
 * Personalize this template here.
 * Change names, copy, links, and lists. The React file only reads these values.
 */
import type { CinematicContent } from "../cinematic/types";

export const content: CinematicContent = {
  scene: {
    src: "/templates/scenes/scene-meridian.png",
    alt: "Painted late afternoon lawn and distant civic buildings",
  },
  initials: "AR",
  mark: "Advait",
  email: "advait.rao@example.edu",
  nav: [
    { href: "#work", label: "Briefs" },
    { href: "#work", label: "Numbers" },
    { href: "mailto:advait.rao@example.edu", label: "Contact" },
  ],
  headline: ["Short policy notes,", "with the numbers attached."],
  standfirst: "The conclusion is dull on purpose when the table says so.",
  lede: "MA Economics at the Delhi School of Economics. A research assistant role for 2027, with procurement windows, bus fares, and scholarship forms already counted.",
  primary: { href: "#work", label: "See the work" },
  secondary: { href: "mailto:advait.rao@example.edu", label: "Write to me" },
  stats: [
    { value: "3 briefs", label: "Farm prices, bus fares, scholarships" },
    { value: "DSE", label: "MA Economics" },
    { value: "2027", label: "Research assistant search" },
    { value: "The form", label: "Not the amount, was the drop-off" },
  ],
  workHeading: "Selected work",
  work: [
    {
      title: "MSP and the July procurement window",
      meta: "2026 · farm prices note",
      body: "A four-page brief on why late procurement in Punjab still misses small holders.",
    },
    {
      title: "Bus fare freeze, Delhi 2025",
      meta: "2025 · urban policy",
      body: "Mapped who rides AC versus non-AC after the freeze. The freeze holds for short trips, not for the edge of the city.",
    },
    {
      title: "Scholarship take-up, one college",
      meta: "2025 · education",
      body: "Counted how many eligible students never filed. The form, not the amount, was the drop-off.",
    },
  ],
};
