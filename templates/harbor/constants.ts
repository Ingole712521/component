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
  nav: [
    { href: "#work", label: "Boards" },
    { href: "#work", label: "Studio" },
    { href: "mailto:leela.nair@example.edu", label: "Contact" },
  ],
  headline: ["Buildings that live", "with heat, dust, and a budget."],
  standfirst: "The north light is the brief. The flood line is the constraint.",
  lede: "Architecture at CEPT Ahmedabad. A studio internship in housing or public work, with shade, canal light, and a knockdown market stall already drawn.",
  primary: { href: "#work", label: "See the work" },
  secondary: { href: "mailto:leela.nair@example.edu", label: "Write to me" },
  stats: [
    { value: "3 boards", label: "Shade, canal studio, market stall" },
    { value: "CEPT", label: "B.Arch, Ahmedabad" },
    { value: "Studio intern", label: "Housing or public work" },
    { value: "12 minutes", label: "Two people can raise the stall" },
  ],
  workHeading: "Selected work",
  work: [
    {
      title: "Hostel courtyard shade",
      meta: "Timber pergola · CEPT hostel",
      body: "Morning sun stays, afternoon glare drops, and bikes still park along the west wall.",
    },
    {
      title: "Canal edge studio",
      meta: "1:100 model · Sabarmati",
      body: "A drawing studio on the canal edge. The north light is the brief. The flood line is the constraint.",
    },
    {
      title: "Market stall kit",
      meta: "Knockdown stall · Sunday market",
      body: "Two people can raise it in twelve minutes without a drill.",
    },
  ],
};
