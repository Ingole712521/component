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
  nav: [
    { href: "#work", label: "Studies" },
    { href: "#work", label: "Notes" },
    { href: "mailto:kabir.sen@example.edu", label: "Contact" },
  ],
  headline: ["Campus data,", "turned into notes people use."],
  standfirst: "I keep the method visible. I drop the rows I cannot defend.",
  lede: "M.Stat at the Indian Statistical Institute, Kolkata. A summer role in applied statistics or research engineering, with shuttle delays and lab occupancy already modelled.",
  primary: { href: "#work", label: "See the work" },
  secondary: { href: "mailto:kabir.sen@example.edu", label: "Write to me" },
  stats: [
    { value: "4 routes", label: "Monsoon delay model for ISI shuttles" },
    { value: "ISI Kolkata", label: "M.Stat" },
    { value: "Summer role", label: "Applied statistics search" },
    { value: "After 9pm", label: "Lab heatmap students still open" },
  ],
  workHeading: "Selected work",
  work: [
    {
      title: "Monsoon delay model",
      meta: "2026 · R · campus buses",
      body: "Predicted late arrivals on four ISI shuttle routes from rainfall and gate congestion. The ops team used the Friday forecast to shift two morning trips.",
    },
    {
      title: "Lab occupancy heat",
      meta: "2025 · Python · computer lab",
      body: "A week of badge swipes turned into a heatmap so students could see which rooms were actually free after 9pm.",
    },
    {
      title: "Survey bias note",
      meta: "2025 · Stata · methods",
      body: "Wrote the missing-data section for a hostel food survey. Dropped the rows we could not defend instead of filling them in.",
    },
  ],
};
