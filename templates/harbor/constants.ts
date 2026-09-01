/**
 * Personalize this template here.
 * Change names, copy, links, and lists. The React file only reads these values.
 */
import type { CinematicContent } from "../cinematic/types";

export const content: CinematicContent = {
  scene: {
    src: "/templates/scenes/scene-harbor.png",
    alt: "Painted mountain road and bridge in golden hour light",
  },
  initials: "LN",
  mark: "Leela",
  email: "leela.nair@example.edu",
  github: {
    href: "https://github.com/leela-nair",
    label: "GitHub",
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Boards" },
    { href: "#writing", label: "Studio" },
    { href: "#github", label: "Links" },
    { href: "#contact", label: "Contact" },
  ],
  headline: ["Buildings that live", "with heat, dust, and a budget."],
  standfirst: "The north light is the brief. The flood line is the constraint.",
  lede: "Architecture at CEPT Ahmedabad. A studio internship in housing or public work, with shade, canal light, and a knockdown market stall already drawn.",
  primary: { href: "#projects", label: "See the work" },
  secondary: { href: "#contact", label: "Write to me" },
  stats: [
    { value: "3 boards", label: "Shade, canal studio, market stall" },
    { value: "CEPT", label: "B.Arch, Ahmedabad" },
    { value: "Studio intern", label: "Housing or public work" },
    { value: "12 minutes", label: "Two people can raise the stall" },
  ],
  about: {
    heading: "About",
    name: "Leela Nair",
    program: "B.Arch, CEPT Ahmedabad",
    bio: "I draw for heat, dust, and a budget, not for a render that never meets a monsoon. Recent boards: courtyard shade the hostel can afford, a canal-edge studio that respects the flood line, a stall two people can raise without a drill.",
    facts: [
      { label: "Campus", value: "CEPT Ahmedabad" },
      { label: "Focus", value: "Housing and public work" },
      { label: "Looking", value: "Studio internship" },
      { label: "Based", value: "Ahmedabad" },
    ],
  },
  projectsHeading: "Boards",
  projects: [
    {
      year: "2026",
      title: "Hostel courtyard shade",
      body: "Morning sun stays, afternoon glare drops, and bikes still park along the west wall.",
      stack: ["timber", "Rhino", "hand section"],
    },
    {
      year: "2025",
      title: "Canal edge studio",
      body: "A drawing studio on the canal edge. The north light is the brief. The flood line is the constraint.",
      stack: ["1:100 model", "site section", "Sabarmati"],
    },
    {
      year: "2025",
      title: "Market stall kit",
      body: "Two people can raise it in twelve minutes without a drill.",
      stack: ["knockdown joints", "bamboo", "jig"],
    },
  ],
  writingHeading: "Studio notes",
  writing: [
    {
      date: "Jan 2026",
      title: "Shade that still lets the bikes through",
      lede: "The pergola failed twice on paper because it blocked the west wall. The third drawing parked the bikes first, then the timber.",
    },
    {
      date: "Oct 2025",
      title: "North light, flood line",
      lede: "The canal studio is a light problem until July. Then it is a water problem. Both have to be on the same sheet.",
    },
    {
      date: "Jul 2025",
      title: "Twelve minutes, no drill",
      lede: "Sunday market vendors will not wait on a specialist. If two people cannot raise the stall, it is not a stall.",
    },
  ],
  linksHeading: "Elsewhere",
  links: [
    { href: "https://are.na/leela-nair", label: "Are.na boards" },
    { href: "https://issuu.com/leelanair", label: "Portfolio PDF" },
  ],
  contact: {
    heading: "Contact",
    note: "Looking for a studio internship in housing or public work. Boards go out as a 12-page PDF.",
  },
};
