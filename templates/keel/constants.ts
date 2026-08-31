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
  nav: [
    { href: "#work", label: "Field" },
    { href: "#work", label: "Writing" },
    { href: "mailto:aisha.rahman@example.edu", label: "Contact" },
  ],
  headline: ["Living systems,", "written so others can follow."],
  standfirst: "I study what is alive, then make the notes readable.",
  lede: "Life sciences at Ashoka University. Open to research internships and science communication roles for summer 2027, with wetland fieldwork already in the file.",
  primary: { href: "#work", label: "See the work" },
  secondary: { href: "mailto:aisha.rahman@example.edu", label: "Write to me" },
  stats: [
    { value: "11 water bodies", label: "Surveyed with Wetland Watch" },
    { value: "Ashoka", label: "B.Sc. Life Sciences" },
    { value: "Summer 2027", label: "Research and sci-comm search" },
    { value: "Urban birds", label: "Thesis on wetland birds in the NCR" },
  ],
  workHeading: "Selected work",
  work: [
    {
      title: "Field intern, Wetland Watch",
      meta: "Jun to Aug 2025 · Delhi",
      body: "Surveyed 11 water bodies, wrote weekly notes for the public site, and trained two junior volunteers.",
    },
    {
      title: "Teaching assistant, Biostats I",
      meta: "Spring 2026 · Ashoka",
      body: "Ran the Friday problem set hour. Built a one-page cheat sheet the class still uses.",
    },
    {
      title: "Thesis, urban wetland birds",
      meta: "2026 to 2027 · NCR",
      body: "Coursework in ecology, biostatistics, and science writing. The thesis follows birds on water bodies the city forgot.",
    },
  ],
};
