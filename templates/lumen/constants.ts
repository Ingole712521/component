/**
 * Personalize this template here.
 * Change names, copy, links, and lists. The React file only reads these values.
 */
import type { CinematicContent } from "../cinematic/types";

export const content: CinematicContent = {
  scene: {
    src: "/templates/scenes/scene-lumen.png",
    alt: "Painted night city from a bridge, with a street lamp and stars",
  },
  initials: "RK",
  mark: "Rhea",
  email: "rhea.kapoor@example.edu",
  nav: [
    { href: "#work", label: "Pictures" },
    { href: "#work", label: "Type" },
    { href: "mailto:rhea.kapoor@example.edu", label: "Contact" },
  ],
  headline: ["Pictures, type,", "and the rooms they live in."],
  standfirst: "I shoot first, then design around what the photo already knows.",
  lede: "Communication design at NID Ahmedabad. A studio internship in editorial and identity work, with a hostel night market, a monsoon type specimen, and a furniture study already on the table.",
  primary: { href: "#work", label: "See the work" },
  secondary: { href: "mailto:rhea.kapoor@example.edu", label: "Write to me" },
  stats: [
    { value: "3 studies", label: "Night market, type, studio chairs" },
    { value: "NID Ahmedabad", label: "Communication design" },
    { value: "Studio intern", label: "Editorial and identity search" },
    { value: "2026", label: "Hostel night market, still in print" },
  ],
  workHeading: "Selected work",
  work: [
    {
      title: "Hostel night market",
      meta: "2026 · photograph and print",
      body: "Warm stall lights on wet pavement. Shot on campus, then set as a night-market poster the hostel still puts up.",
    },
    {
      title: "Type for monsoon",
      meta: "2025 · specimen",
      body: "A type study printed on damp paper, so the letterforms have to survive the weather they describe.",
    },
    {
      title: "Studio chairs",
      meta: "2025 · furniture study",
      body: "Empty studio, stacked chairs, one high window. A furniture note for the campus workshop.",
    },
  ],
};
