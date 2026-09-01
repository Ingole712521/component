/**
 * Personalize this template here.
 * Change names, copy, links, and lists. The React file only reads these values.
 */
import type { CinematicContent } from "../cinematic/types";

export const content: CinematicContent = {
  scene: {
    src: "/templates/scenes/scene-keel.png",
    alt: "Painted daylight meadow under tall white clouds",
  },
  initials: "AR",
  mark: "Aisha",
  email: "aisha.rahman@example.edu",
  github: {
    href: "https://github.com/aisha-rahman",
    label: "GitHub",
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Field" },
    { href: "#writing", label: "Writing" },
    { href: "#github", label: "Links" },
    { href: "#contact", label: "Contact" },
  ],
  headline: ["Living systems,", "written so others can follow."],
  standfirst: "I study what is alive, then make the notes readable.",
  lede: "Life sciences at Ashoka University. Open to research internships and science communication roles for summer 2027, with wetland fieldwork already in the file.",
  primary: { href: "#projects", label: "See the work" },
  secondary: { href: "#contact", label: "Write to me" },
  stats: [
    { value: "11 water bodies", label: "Surveyed with Wetland Watch" },
    { value: "Ashoka", label: "B.Sc. Life Sciences" },
    { value: "Summer 2027", label: "Research and sci-comm search" },
    { value: "Urban birds", label: "Thesis on wetland birds in the NCR" },
  ],
  about: {
    heading: "About",
    name: "Aisha Rahman",
    program: "B.Sc. Life Sciences, Ashoka University",
    bio: "I spend more time at water bodies the city forgot than in a lecture hall. The work is counts, weekly notes for a public site, and a thesis on wetland birds in the NCR. I write so a volunteer who was not there can still follow the method.",
    facts: [
      { label: "Campus", value: "Ashoka University" },
      { label: "Focus", value: "Ecology and science writing" },
      { label: "Looking", value: "Research or sci-comm, 2027" },
      { label: "Field", value: "NCR wetlands" },
    ],
  },
  projectsHeading: "Field and campus",
  projects: [
    {
      year: "2025",
      title: "Field intern, Wetland Watch",
      body: "Surveyed 11 water bodies, wrote weekly notes for the public site, and trained two junior volunteers.",
      stack: ["QGIS", "R", "iNaturalist"],
    },
    {
      year: "2026",
      title: "Teaching assistant, Biostats I",
      body: "Ran the Friday problem set hour. Built a one-page cheat sheet the class still uses.",
      stack: ["R", "R Markdown", "office hours"],
    },
    {
      year: "2027",
      title: "Thesis, urban wetland birds",
      body: "Coursework in ecology, biostatistics, and science writing. The thesis follows birds on water bodies the city forgot.",
      stack: ["distance sampling", "R", "field notes"],
    },
  ],
  writingHeading: "Writing",
  writing: [
    {
      date: "Jan 2026",
      title: "Eleven ponds, one method",
      lede: "Wetland Watch only works if next week's volunteer can repeat the count. The weekly note is a protocol, not a diary.",
    },
    {
      date: "Apr 2026",
      title: "The cheat sheet that outlived the term",
      lede: "Biostats I did not need another slide deck. It needed one page students could keep under a water bottle.",
    },
    {
      date: "Aug 2026",
      title: "Birds on water the city forgot",
      lede: "The thesis sites are not parks. They are borrow pits and canal edges. The birds are still there, which is the point.",
    },
  ],
  linksHeading: "Elsewhere",
  links: [
    { href: "https://wetlandwatch.example.org/notes", label: "Wetland Watch notes" },
    { href: "https://orcid.org/0000-0000-0000-0000", label: "ORCID" },
  ],
  contact: {
    heading: "Contact",
    note: "Open to research internships and science communication roles for summer 2027. Field notes travel as PDFs.",
  },
};
