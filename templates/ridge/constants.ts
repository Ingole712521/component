/**
 * Personalize this template here.
 * Change names, copy, links, and lists. The React file only reads these values.
 */
import type { CinematicContent } from "../cinematic/types";

export const content: CinematicContent = {
  scene: {
    src: "/templates/scenes/scene-ridge.png",
    alt: "Painted peach dawn over a quiet campus ridge",
  },
  initials: "IM",
  mark: "Isha",
  email: "isha.menon@example.edu",
  nav: [
    { href: "#work", label: "Tools" },
    { href: "#work", label: "Product" },
    { href: "mailto:isha.menon@example.edu", label: "Contact" },
  ],
  headline: ["Campus tools", "that stay small on purpose."],
  standfirst: "One job per product. No extra pages.",
  lede: "A product internship for summer 2027. Laundry queues, laser-cutter hours, and elective clashes, each built to do one thing.",
  primary: { href: "#work", label: "See the work" },
  secondary: { href: "mailto:isha.menon@example.edu", label: "Write to me" },
  stats: [
    { value: "3 tools", label: "Laundry, studio hours, electives" },
    { value: "IDC", label: "Workshop and campus product" },
    { value: "Summer 2027", label: "Product internship search" },
    { value: "Hostel 6", label: "Built after three weeks of WhatsApp spam" },
  ],
  workHeading: "Selected work",
  work: [
    {
      title: "Laundry board",
      meta: "2026 · campus product",
      body: "A hostel machine queue with one job: tell you when a dryer is free.",
    },
    {
      title: "Studio hours",
      meta: "2025 · IDC workshop",
      body: "Booking for the laser cutter. Students see the next open slot, not a calendar they have to decode.",
    },
    {
      title: "Course cart",
      meta: "2025 · elective week",
      body: "A short list for picking electives with clash warnings. No dashboard.",
    },
  ],
};
