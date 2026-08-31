/**
 * Personalize this template here.
 * Change names, copy, links, and lists. The React file only reads these values.
 */
import type { CinematicContent } from "../cinematic/types";

export const content: CinematicContent = {
  scene: {
    src: "/templates/scenes/scene-atlas.png",
    alt: "Painted coastal road and bridge at sunset",
  },
  initials: "KR",
  mark: "Kavya",
  email: "kavya.reddy@example.edu",
  nav: [
    { href: "#work", label: "Work" },
    { href: "#work", label: "Projects" },
    { href: "mailto:kavya.reddy@example.edu", label: "Contact" },
  ],
  headline: ["Campus tools,", "already in use."],
  standfirst: "I build what the lab needs next.",
  lede: "Computer science at BITS Pilani. A summer internship in systems or product engineering, with work that already runs on campus.",
  primary: { href: "#work", label: "See the work" },
  secondary: { href: "mailto:kavya.reddy@example.edu", label: "Write to me" },
  stats: [
    { value: "3 tools", label: "Still used in campus labs" },
    { value: "BITS Pilani", label: "B.Tech Computer Science" },
    { value: "Summer 2026", label: "Internship search this year" },
    { value: "Queueboard", label: "Cut wait time at the GPU cluster" },
  ],
  workHeading: "Selected work",
  work: [
    {
      title: "Queueboard",
      meta: "2026 · Next.js, Postgres, Redis",
      body: "A lab booking board that cut wait time at the campus GPU cluster. Students claim a slot, see who is next, and get a ping when a machine frees up.",
    },
    {
      title: "Meshnote",
      meta: "2025 · React Native, SQLite, CRDTs",
      body: "Shared lecture notes that stay in sync offline. Built for hostel wifi that drops mid-class.",
    },
    {
      title: "Tracekit",
      meta: "2025 · C, Python, WASM",
      body: "A tiny tracer for student OS labs. You step one syscall at a time instead of reading a 400-line log.",
    },
  ],
};
