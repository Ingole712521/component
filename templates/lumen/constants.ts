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
  github: {
    href: "https://github.com/rhea-kapoor",
    label: "GitHub",
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Pictures" },
    { href: "#writing", label: "Notes" },
    { href: "#github", label: "Links" },
    { href: "#contact", label: "Contact" },
  ],
  headline: ["Pictures, type,", "and the rooms they live in."],
  standfirst: "I shoot first, then design around what the photo already knows.",
  lede: "Communication design at NID Ahmedabad. A studio internship in editorial and identity work, with a hostel night market, a monsoon type specimen, and a furniture study already on the table.",
  primary: { href: "#projects", label: "See the work" },
  secondary: { href: "#contact", label: "Write to me" },
  stats: [
    { value: "3 studies", label: "Night market, type, studio chairs" },
    { value: "NID Ahmedabad", label: "Communication design" },
    { value: "Studio intern", label: "Editorial and identity search" },
    { value: "2026", label: "Hostel night market, still in print" },
  ],
  about: {
    heading: "About",
    name: "Rhea Kapoor",
    program: "Communication design, NID Ahmedabad",
    bio: "I start with a photograph, then decide what the type, paper, and room have to do to keep up. Most of the work lives on campus: a night market poster the hostel still puts up, a monsoon specimen that had to survive damp paper, chairs in an empty studio.",
    facts: [
      { label: "Campus", value: "NID Ahmedabad" },
      { label: "Focus", value: "Editorial and identity" },
      { label: "Looking", value: "Studio internship" },
      { label: "Based", value: "Ahmedabad" },
    ],
  },
  projectsHeading: "Pictures and type",
  projects: [
    {
      year: "2026",
      title: "Hostel night market",
      body: "Warm stall lights on wet pavement. Shot on campus, then set as a night-market poster the hostel still puts up.",
      stack: ["35mm", "InDesign", "screenprint"],
    },
    {
      year: "2025",
      title: "Type for monsoon",
      body: "A type study printed on damp paper, so the letterforms have to survive the weather they describe.",
      stack: ["letterpress", "specimen", "cotton paper"],
    },
    {
      year: "2025",
      title: "Studio chairs",
      body: "Empty studio, stacked chairs, one high window. A furniture note for the campus workshop.",
      stack: ["large format", "model photos", "workshop"],
    },
  ],
  writingHeading: "Studio notes",
  writing: [
    {
      date: "Feb 2026",
      title: "The poster had to work in rain",
      lede: "The night market print sits under a tin roof that leaks. If the type cannot take a drip, it is not finished.",
    },
    {
      date: "Sep 2025",
      title: "Damp paper as a brief, not an accident",
      lede: "The monsoon specimen is printed wet on purpose. The letters swell. That is the weather talking, not a print error to hide.",
    },
    {
      date: "Jun 2025",
      title: "Chairs before a room has a name",
      lede: "I photographed the stacked chairs first. The furniture note came later, when the workshop asked what the empty studio was actually for.",
    },
  ],
  linksHeading: "Elsewhere",
  links: [
    { href: "https://are.na/rhea-kapoor", label: "Are.na" },
    { href: "https://read.cv/rheakapoor", label: "Read.cv" },
  ],
  contact: {
    heading: "Contact",
    note: "Looking for a studio internship in editorial or identity. Prints and PDFs go out the same week you write.",
  },
};
