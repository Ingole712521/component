/**
 * Personalize this template here.
 * Change names, copy, links, and lists. The React file only reads these values.
 */
import type { CinematicContent } from "../cinematic/types";

export const content: CinematicContent = {
  scene: {
    src: "/templates/scenes/scene-nimbus.png",
    alt: "Painted alpine lake and cabin at purple twilight",
  },
  initials: "KS",
  mark: "Kabir",
  email: "kabir.sen@example.edu",
  github: {
    href: "https://github.com/kabir-sen",
    label: "GitHub",
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Studies" },
    { href: "#writing", label: "Notes" },
    { href: "#github", label: "GitHub" },
    { href: "#contact", label: "Contact" },
  ],
  headline: ["Campus data,", "turned into notes people use."],
  standfirst: "I keep the method visible. I drop the rows I cannot defend.",
  lede: "M.Stat at the Indian Statistical Institute, Kolkata. A summer role in applied statistics or research engineering, with shuttle delays and lab occupancy already modelled.",
  primary: { href: "#projects", label: "See the work" },
  secondary: { href: "#contact", label: "Write to me" },
  stats: [
    { value: "4 routes", label: "Monsoon delay model for ISI shuttles" },
    { value: "ISI Kolkata", label: "M.Stat" },
    { value: "Summer role", label: "Applied statistics search" },
    { value: "After 9pm", label: "Lab heatmap students still open" },
  ],
  about: {
    heading: "About",
    name: "Kabir Sen",
    program: "M.Stat, Indian Statistical Institute, Kolkata",
    bio: "I model things the campus already feels: late shuttles in the rain, labs that look empty and are not. The method stays in the note. If I cannot defend a row, I drop it instead of filling it in.",
    facts: [
      { label: "Campus", value: "ISI Kolkata" },
      { label: "Focus", value: "Applied statistics" },
      { label: "Looking", value: "Summer research engineering" },
      { label: "Based", value: "Kolkata" },
    ],
  },
  projectsHeading: "Studies",
  projects: [
    {
      year: "2026",
      title: "Monsoon delay model",
      body: "Predicted late arrivals on four ISI shuttle routes from rainfall and gate congestion. The ops team used the Friday forecast to shift two morning trips.",
      stack: ["R", "gtfs", "rain gauges"],
    },
    {
      year: "2025",
      title: "Lab occupancy heat",
      body: "A week of badge swipes turned into a heatmap so students could see which rooms were actually free after 9pm.",
      stack: ["Python", "pandas", "Plotly"],
    },
    {
      year: "2025",
      title: "Survey bias note",
      body: "Wrote the missing-data section for a hostel food survey. Dropped the rows we could not defend instead of filling them in.",
      stack: ["Stata", "survey weights", "methods"],
    },
  ],
  writingHeading: "Methods notes",
  writing: [
    {
      date: "Jul 2026",
      title: "A Friday forecast the ops team actually shifted",
      lede: "The monsoon model was not a paper. It was a number on Thursday night, and two morning trips that moved.",
    },
    {
      date: "Dec 2025",
      title: "Empty labs that were not empty",
      lede: "Badge swipes after 9pm told a different story from walking the corridor. The heatmap is still bookmarked on lab machines.",
    },
    {
      date: "Sep 2025",
      title: "Missing data is not a hole to fill",
      lede: "The hostel food survey had rows we could not stand behind. The honest table is smaller. That is the result.",
    },
  ],
  linksHeading: "Elsewhere",
  links: [
    { href: "https://github.com/kabir-sen/shuttle-delay", label: "Shuttle model" },
    { href: "https://observablehq.com/@kabir-sen", label: "Observable" },
  ],
  contact: {
    heading: "Contact",
    note: "Looking for applied statistics or research engineering this summer. Notebooks and method notes on request.",
  },
};
