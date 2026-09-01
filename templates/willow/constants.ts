/**
 * Personalize this template here.
 * Change names, copy, links, and lists. The React file only reads these values.
 */
import type { CinematicContent } from "../cinematic/types";

export const content: CinematicContent = {
  scene: {
    src: "/templates/scenes/scene-willow.png",
    alt: "Painted misty pine forest and river",
  },
  initials: "TJ",
  mark: "Tara",
  email: "tara.joseph@example.edu",
  github: {
    href: "https://github.com/tara-joseph",
    label: "GitHub",
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Wards" },
    { href: "#writing", label: "Notes" },
    { href: "#github", label: "Links" },
    { href: "#contact", label: "Contact" },
  ],
  headline: ["Clinical work,", "written for the next person on."],
  standfirst: "No extra adjectives. The file has to stand up in the round.",
  lede: "MBBS at Christian Medical College, Vellore. A research or public health internship, with an OPD wait study and two village camps already written down.",
  primary: { href: "#projects", label: "See the work" },
  secondary: { href: "#contact", label: "Write to me" },
  stats: [
    { value: "86 patients", label: "Timed in the morning OPD" },
    { value: "CMC Vellore", label: "MBBS" },
    { value: "Internship", label: "Research or public health" },
    { value: "Two villages", label: "Anemia camp with the PHC nurse" },
  ],
  about: {
    heading: "About",
    name: "Tara Joseph",
    program: "MBBS, Christian Medical College, Vellore",
    bio: "I write clinical and field work so the next person on can use the file. Recent pieces: an OPD wait study that found the token window, not the doctor; an anemia camp across two villages; a rheumatic fever write-up the consultant used on Friday round.",
    facts: [
      { label: "Campus", value: "CMC Vellore" },
      { label: "Focus", value: "Community medicine" },
      { label: "Looking", value: "Research or public health" },
      { label: "Based", value: "Vellore" },
    ],
  },
  projectsHeading: "Wards and field",
  projects: [
    {
      year: "2026",
      title: "OPD wait study",
      body: "Timed 86 morning patients. The bottleneck was the token window, not the doctor. Wrote a one-page note the unit still keeps at the desk.",
      stack: ["time-motion", "Excel", "one-page note"],
    },
    {
      year: "2025",
      title: "Anemia camp, two villages",
      body: "Helped run screening with the PHC nurse. Recorded who came back for iron, and who did not, without padding the count.",
      stack: ["field posting", "registers", "PHC"],
    },
    {
      year: "2025",
      title: "Case write-up, rheumatic fever",
      body: "A clear timeline for the ward file. The consultant used it in the Friday round.",
      stack: ["paediatrics", "ward notes", "timeline"],
    },
  ],
  writingHeading: "Notes for the next person on",
  writing: [
    {
      date: "Mar 2026",
      title: "The token window, not the doctor",
      lede: "Eighty-six clocks. The queue was already long before anyone reached the consult. The unit still keeps the one-pager at the desk.",
    },
    {
      date: "Nov 2025",
      title: "Who came back for iron",
      lede: "The camp count is easy. Follow-up is not. We wrote who returned, and who did not, without rounding the story up.",
    },
    {
      date: "Aug 2025",
      title: "A timeline that survived the round",
      lede: "Rheumatic fever only makes sense in order. The consultant asked for the file, not a speech.",
    },
  ],
  linksHeading: "Elsewhere",
  links: [
    { href: "https://orcid.org/0000-0000-0000-0001", label: "ORCID" },
    { href: "https://cmcvellore.example.edu/students/tara", label: "Campus page" },
  ],
  contact: {
    heading: "Contact",
    note: "Open to a research or public health internship. Notes are one page unless the file needs more.",
  },
};
