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
  github: {
    href: "https://github.com/advait-rao",
    label: "GitHub",
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Briefs" },
    { href: "#writing", label: "Numbers" },
    { href: "#github", label: "GitHub" },
    { href: "#contact", label: "Contact" },
  ],
  headline: ["Short policy notes,", "with the numbers attached."],
  standfirst: "The conclusion is dull on purpose when the table says so.",
  lede: "MA Economics at the Delhi School of Economics. A research assistant role for 2027, with procurement windows, bus fares, and scholarship forms already counted.",
  primary: { href: "#projects", label: "See the work" },
  secondary: { href: "#contact", label: "Write to me" },
  stats: [
    { value: "3 briefs", label: "Farm prices, bus fares, scholarships" },
    { value: "DSE", label: "MA Economics" },
    { value: "2027", label: "Research assistant search" },
    { value: "The form", label: "Not the amount, was the drop-off" },
  ],
  about: {
    heading: "About",
    name: "Advait Rao",
    program: "MA Economics, Delhi School of Economics",
    bio: "I write short policy notes with the numbers attached. If the table is dull, the conclusion stays dull. Recent briefs: a late procurement window in Punjab, a Delhi bus fare freeze, and a college where the scholarship form, not the amount, was the drop-off.",
    facts: [
      { label: "Campus", value: "Delhi School of Economics" },
      { label: "Focus", value: "Applied policy notes" },
      { label: "Looking", value: "Research assistant, 2027" },
      { label: "Based", value: "Delhi" },
    ],
  },
  projectsHeading: "Briefs",
  projects: [
    {
      year: "2026",
      title: "MSP and the July procurement window",
      body: "A four-page brief on why late procurement in Punjab still misses small holders.",
      stack: ["Stata", "procurement data", "brief"],
    },
    {
      year: "2025",
      title: "Bus fare freeze, Delhi 2025",
      body: "Mapped who rides AC versus non-AC after the freeze. The freeze holds for short trips, not for the edge of the city.",
      stack: ["R", "DTC ridership", "maps"],
    },
    {
      year: "2025",
      title: "Scholarship take-up, one college",
      body: "Counted how many eligible students never filed. The form, not the amount, was the drop-off.",
      stack: ["survey", "Excel", "admin data"],
    },
  ],
  writingHeading: "Numbers attached",
  writing: [
    {
      date: "Apr 2026",
      title: "Late windows miss small holders",
      lede: "The MSP note is four pages because the table did not need a fifth. July is late if you cannot wait on the mandi.",
    },
    {
      date: "Dec 2025",
      title: "The freeze and the edge of the city",
      lede: "Short AC trips still look cheap. The last bus out of the edge does not. That is the freeze, not a slogan.",
    },
    {
      date: "Aug 2025",
      title: "Eligible, and still not filed",
      lede: "The scholarship amount was fine. The form was not. Take-up is a paperwork problem until someone counts the blanks.",
    },
  ],
  linksHeading: "Elsewhere",
  links: [
    { href: "https://github.com/advait-rao/briefs", label: "Briefs repo" },
    { href: "https://advaitrao.example.edu", label: "Working papers" },
  ],
  contact: {
    heading: "Contact",
    note: "Looking for a research assistant role in 2027. Briefs are four pages unless the table needs more.",
  },
};
