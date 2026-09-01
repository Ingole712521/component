/**
 * Personalize this template here.
 * Change names, copy, links, and lists. The React file only reads these values.
 */
import type { CinematicContent } from "../cinematic/types";

export const content: CinematicContent = {
  scene: {
    src: "/templates/scenes/scene-quill.png",
    alt: "Painted monsoon city rooftops at dusk",
  },
  initials: "FQ",
  mark: "Farah",
  email: "farah.qureshi@example.edu",
  github: {
    href: "https://github.com/farah-qureshi",
    label: "GitHub",
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Campus" },
    { href: "#writing", label: "City" },
    { href: "#github", label: "Links" },
    { href: "#contact", label: "Contact" },
  ],
  headline: ["Campus and city stories", "that still have names attached."],
  standfirst: "I report. I keep the people in the sentences.",
  lede: "Journalism at St. Xavier's. A summer desk or reporting internship, with a night canteen, CST after the last local, and a monsoon that arrived in the inbox first.",
  primary: { href: "#projects", label: "See the work" },
  secondary: { href: "#contact", label: "Write to me" },
  stats: [
    { value: "3 pieces", label: "Campus, city, and a monsoon essay" },
    { value: "Xavier's", label: "Journalism desk" },
    { value: "Summer desk", label: "Reporting internship search" },
    { value: "Four nights", label: "CST after the last local" },
  ],
  about: {
    heading: "About",
    name: "Farah Qureshi",
    program: "Journalism, St. Xavier's College, Mumbai",
    bio: "I report campus and city stories that still have names attached. Recent work: the night canteen after the kitchen closes, CST after the last local, and a monsoon that showed up in the inbox before it hit the street.",
    facts: [
      { label: "Campus", value: "St. Xavier's, Mumbai" },
      { label: "Focus", value: "Campus and city reporting" },
      { label: "Looking", value: "Summer desk internship" },
      { label: "Based", value: "Mumbai" },
    ],
  },
  projectsHeading: "Reported work",
  projects: [
    {
      year: "2026",
      title: "The canteen closed at 8. The stories did not.",
      body: "Three hotplates, and the students who keep the late edition alive after the official kitchen shuts.",
      stack: ["night desk", "audio", "campus paper"],
    },
    {
      year: "2025",
      title: "Who waits at CST after the last local.",
      body: "Porters, exam kids, and a stationmaster who still writes delay notes by hand.",
      stack: ["four nights", "field notes", "city desk"],
    },
    {
      year: "2025",
      title: "A monsoon that arrived in the inbox first.",
      body: "Weather alerts, hostel WhatsApp groups, and why the forecast now feels like a rumor with a timestamp.",
      stack: ["essay", "alerts", "WhatsApp logs"],
    },
  ],
  writingHeading: "From the notebook",
  writing: [
    {
      date: "Jun 2026",
      title: "Hotplates after the kitchen shuts",
      lede: "The late edition is not a romance. It is three students, a gas leak that was not, and a page that still has to close.",
    },
    {
      date: "Jun 2025",
      title: "Delay notes in the stationmaster's hand",
      lede: "CST after the last local is a waiting room with no chairs. The people who stay have somewhere they still need to be.",
    },
    {
      date: "Jul 2025",
      title: "The forecast as a rumor with a timestamp",
      lede: "Hostel groups get the rain before the street does. The story is who believes the alert, and who still carries a spare pair of chappals.",
    },
  ],
  linksHeading: "Elsewhere",
  links: [
    { href: "https://thexavierite.example.edu/author/farah", label: "The Xavierite" },
    { href: "https://farahqureshi.example.edu", label: "Clips" },
  ],
  contact: {
    heading: "Contact",
    note: "Looking for a summer desk or reporting internship. Clips go out as a single PDF.",
  },
};
