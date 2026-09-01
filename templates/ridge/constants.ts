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
  github: {
    href: "https://github.com/isha-menon",
    label: "GitHub",
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Tools" },
    { href: "#writing", label: "Product" },
    { href: "#github", label: "GitHub" },
    { href: "#contact", label: "Contact" },
  ],
  headline: ["Campus tools", "that stay small on purpose."],
  standfirst: "One job per product. No extra pages.",
  lede: "A product internship for summer 2027. Laundry queues, laser-cutter hours, and elective clashes, each built to do one thing.",
  primary: { href: "#projects", label: "See the work" },
  secondary: { href: "#contact", label: "Write to me" },
  stats: [
    { value: "3 tools", label: "Laundry, studio hours, electives" },
    { value: "IDC", label: "Workshop and campus product" },
    { value: "Summer 2027", label: "Product internship search" },
    { value: "Hostel 6", label: "Built after three weeks of WhatsApp spam" },
  ],
  about: {
    heading: "About",
    name: "Isha Menon",
    program: "Industrial Design Centre, IIT Bombay",
    bio: "I ship campus tools that stay small on purpose. One job each: tell you when a dryer is free, show the next laser-cutter slot, warn if two electives clash. No dashboard. The test is whether Hostel 6 stops spamming the group chat.",
    facts: [
      { label: "Campus", value: "IDC, IIT Bombay" },
      { label: "Focus", value: "Campus product" },
      { label: "Looking", value: "Product internship, 2027" },
      { label: "Based", value: "Mumbai" },
    ],
  },
  projectsHeading: "Tools",
  projects: [
    {
      year: "2026",
      title: "Laundry board",
      body: "A hostel machine queue with one job: tell you when a dryer is free.",
      stack: ["Next.js", "Supabase", "WhatsApp"],
    },
    {
      year: "2025",
      title: "Studio hours",
      body: "Booking for the laser cutter. Students see the next open slot, not a calendar they have to decode.",
      stack: ["React", "SQLite", "campus SSO"],
    },
    {
      year: "2025",
      title: "Course cart",
      body: "A short list for picking electives with clash warnings. No dashboard.",
      stack: ["TypeScript", "timetable CSV", "ICS"],
    },
  ],
  writingHeading: "Product notes",
  writing: [
    {
      date: "Feb 2026",
      title: "Hostel 6 stopped pinging the group",
      lede: "The laundry board has one screen. If it needed a second, the WhatsApp thread would have won again.",
    },
    {
      date: "Oct 2025",
      title: "The next slot, not a calendar",
      lede: "Studio hours failed as a week view. It worked as a sentence: the cutter is free at 4:20.",
    },
    {
      date: "Jul 2025",
      title: "Clash warnings without a portal",
      lede: "Course cart does not log you into the academic system. It reads a CSV and tells you the two papers overlap.",
    },
  ],
  linksHeading: "Elsewhere",
  links: [
    { href: "https://github.com/isha-menon/laundry-board", label: "Laundry board" },
    { href: "https://isha.example.edu", label: "Product notes" },
  ],
  contact: {
    heading: "Contact",
    note: "Looking for a product internship for summer 2027. Demos are short. I will not send a slide deck if a link will do.",
  },
};
