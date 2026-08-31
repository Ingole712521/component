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
  nav: [
    { href: "#work", label: "Wards" },
    { href: "#work", label: "Notes" },
    { href: "mailto:tara.joseph@example.edu", label: "Contact" },
  ],
  headline: ["Clinical work,", "written for the next person on."],
  standfirst: "No extra adjectives. The file has to stand up in the round.",
  lede: "MBBS at Christian Medical College, Vellore. A research or public health internship, with an OPD wait study and two village camps already written down.",
  primary: { href: "#work", label: "See the work" },
  secondary: { href: "mailto:tara.joseph@example.edu", label: "Write to me" },
  stats: [
    { value: "86 patients", label: "Timed in the morning OPD" },
    { value: "CMC Vellore", label: "MBBS" },
    { value: "Internship", label: "Research or public health" },
    { value: "Two villages", label: "Anemia camp with the PHC nurse" },
  ],
  workHeading: "Selected work",
  work: [
    {
      title: "OPD wait study",
      meta: "2026 · community medicine",
      body: "Timed 86 morning patients. The bottleneck was the token window, not the doctor. Wrote a one-page note the unit still keeps at the desk.",
    },
    {
      title: "Anemia camp, two villages",
      meta: "2025 · field posting",
      body: "Helped run screening with the PHC nurse. Recorded who came back for iron, and who did not, without padding the count.",
    },
    {
      title: "Case write-up, rheumatic fever",
      meta: "2025 · paediatrics",
      body: "A clear timeline for the ward file. The consultant used it in the Friday round.",
    },
  ],
};
