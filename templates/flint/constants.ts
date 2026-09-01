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
  github: {
    href: "https://github.com/ananya-shah",
    label: "GitHub",
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Notes" },
    { href: "#writing", label: "Clinic" },
    { href: "#github", label: "GitHub" },
    { href: "#contact", label: "Contact" },
  ],
  headline: ["Campus money work,", "kept readable."],
  standfirst: "Holdings, what changed, and what we will not buy again.",
  lede: "B.A. Economics at SRCC. A research or markets internship for summer 2027, with a society one-pager, a GST clinic, and municipal budget tables already written.",
  primary: { href: "#projects", label: "See the work" },
  secondary: { href: "#contact", label: "Write to me" },
  stats: [
    { value: "3 notes", label: "Fund, GST clinic, budget lab" },
    { value: "SRCC", label: "B.A. Economics" },
    { value: "Summer 2027", label: "Research or markets internship" },
    { value: "Ten vendors", label: "First GST return, with a checklist" },
  ],
  about: {
    heading: "About",
    name: "Ananya Shah",
    program: "B.A. Economics, SRCC",
    bio: "I keep campus money work readable: a society one-pager on holdings, a GST clinic with a checklist, municipal budget tables that say what they say about school capex. No extra adjectives. The file has to stand up in a meeting.",
    facts: [
      { label: "Campus", value: "SRCC, Delhi" },
      { label: "Focus", value: "Markets and public accounts" },
      { label: "Looking", value: "Research or markets, 2027" },
      { label: "Based", value: "Delhi" },
    ],
  },
  projectsHeading: "Notes",
  projects: [
    {
      year: "2026",
      title: "Campus fund note",
      body: "A monthly one-pager on the society's paper portfolio. Holdings, what changed, and what we will not buy again.",
      stack: ["Excel", "Bloomberg campus", "one-pager"],
    },
    {
      year: "2025",
      title: "GST filing clinic",
      body: "Helped ten student vendors file their first return. The work was the checklist, not a lecture.",
      stack: ["GST portal", "checklist", "desk"],
    },
    {
      year: "2025",
      title: "Budget lab, public accounts",
      body: "Read three municipal budget annexes and wrote what the tables actually say about school capex.",
      stack: ["budget annexes", "Python", "tables"],
    },
  ],
  writingHeading: "Clinic notes",
  writing: [
    {
      date: "Feb 2026",
      title: "What we will not buy again",
      lede: "The society one-pager has three lines that matter. The third is the one people skip, and the one that stops a repeat.",
    },
    {
      date: "Nov 2025",
      title: "A checklist, not a lecture",
      lede: "Ten student vendors did not need a GST seminar. They needed the order of clicks for a first return.",
    },
    {
      date: "Sep 2025",
      title: "School capex in the annex",
      lede: "The municipal tables bury the school line. Once you pull it, the speech about education spending gets quieter.",
    },
  ],
  linksHeading: "Elsewhere",
  links: [
    { href: "https://github.com/ananya-shah/budget-lab", label: "Budget lab" },
    { href: "https://linkedin.com/in/ananya-shah", label: "LinkedIn" },
  ],
  contact: {
    heading: "Contact",
    note: "Looking for a research or markets internship for summer 2027. One-pagers first. Spreadsheets if you ask.",
  },
};
