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
  github: {
    href: "https://github.com/kavya-reddy",
    label: "GitHub",
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#writing", label: "Notes" },
    { href: "#github", label: "GitHub" },
    { href: "#contact", label: "Contact" },
  ],
  headline: ["Campus tools,", "already in use."],
  standfirst: "I build what the lab needs next.",
  lede: "Computer science at BITS Pilani. A summer internship in systems or product engineering, with work that already runs on campus.",
  primary: { href: "#projects", label: "See the work" },
  secondary: { href: "#contact", label: "Write to me" },
  stats: [
    { value: "3 tools", label: "Still used in campus labs" },
    { value: "BITS Pilani", label: "B.Tech Computer Science" },
    { value: "Summer 2026", label: "Internship search this year" },
    { value: "Queueboard", label: "Cut wait time at the GPU cluster" },
  ],
  about: {
    heading: "About",
    name: "Kavya Reddy",
    program: "B.Tech Computer Science, BITS Pilani",
    bio: "I write software for rooms that already have a queue: the GPU lab, hostel wifi that drops mid-class, first-year OS labs that drown in logs. The brief is usually a WhatsApp thread. The test is whether someone still opens the tool after I leave.",
    facts: [
      { label: "Campus", value: "BITS Pilani" },
      { label: "Focus", value: "Systems and campus products" },
      { label: "Looking", value: "Summer 2026 internship" },
      { label: "Based", value: "Pilani, Rajasthan" },
    ],
  },
  projectsHeading: "Projects",
  projects: [
    {
      year: "2026",
      title: "Queueboard",
      body: "A lab booking board that cut wait time at the campus GPU cluster. Students claim a slot, see who is next, and get a ping when a machine frees up.",
      stack: ["Next.js", "Postgres", "Redis"],
    },
    {
      year: "2025",
      title: "Meshnote",
      body: "Shared lecture notes that stay in sync offline. Built for hostel wifi that drops mid-class.",
      stack: ["React Native", "SQLite", "CRDTs"],
    },
    {
      year: "2025",
      title: "Tracekit",
      body: "A tiny tracer for student OS labs. You step one syscall at a time instead of reading a 400-line log.",
      stack: ["C", "Python", "WASM"],
    },
  ],
  writingHeading: "Notes from the lab",
  writing: [
    {
      date: "Mar 2026",
      title: "The queue still needed a human ping",
      lede: "Redis knew which GPU was free. Students still waited until someone shouted across the room. The last 10% of Queueboard was a text, not a dashboard.",
    },
    {
      date: "Nov 2025",
      title: "CRDTs on a hostel that loses wifi twice a lecture",
      lede: "Meshnote does not try to be clever when the network returns. It replays the edits in the order the phones actually saved them.",
    },
    {
      date: "Aug 2025",
      title: "First-years and a 400-line syscall dump",
      lede: "Tracekit exists because I watched a lab section scroll past the one line that mattered. One step at a time is slower, and they finish.",
    },
  ],
  linksHeading: "Elsewhere",
  links: [
    { href: "https://github.com/kavya-reddy/queueboard", label: "Queueboard source" },
    { href: "https://linkedin.com/in/kavya-reddy", label: "LinkedIn" },
  ],
  contact: {
    heading: "Contact",
    note: "Open to systems or product engineering internships for summer 2026. I reply the same day during term.",
  },
};
