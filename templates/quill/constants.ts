/**
 * Personalize this template here.
 * Change names, copy, links, and lists. The React file only reads these values.
 */
import type { CinematicContent } from "../cinematic/types";

export const content: CinematicContent = {
  scene: {
    src: "/templates/scenes/scene-quill.png",
    alt: "Painted monsoon city rooftops at dusk",
  },
  initials: "FQ",
  mark: "Farah",
  email: "farah.qureshi@example.edu",
  nav: [
    { href: "#work", label: "Campus" },
    { href: "#work", label: "City" },
    { href: "mailto:farah.qureshi@example.edu", label: "Contact" },
  ],
  headline: ["Campus and city stories", "that still have names attached."],
  standfirst: "I report. I keep the people in the sentences.",
  lede: "Journalism at St. Xavier's. A summer desk or reporting internship, with a night canteen, CST after the last local, and a monsoon that arrived in the inbox first.",
  primary: { href: "#work", label: "See the work" },
  secondary: { href: "mailto:farah.qureshi@example.edu", label: "Write to me" },
  stats: [
    { value: "3 pieces", label: "Campus, city, and a monsoon essay" },
    { value: "Xavier's", label: "Journalism desk" },
    { value: "Summer desk", label: "Reporting internship search" },
    { value: "Four nights", label: "CST after the last local" },
  ],
  workHeading: "Selected work",
  work: [
    {
      title: "The canteen closed at 8. The stories did not.",
      meta: "Campus · night desk",
      body: "Three hotplates, and the students who keep the late edition alive after the official kitchen shuts.",
    },
    {
      title: "Who waits at CST after the last local.",
      meta: "City · four nights in June",
      body: "Porters, exam kids, and a stationmaster who still writes delay notes by hand.",
    },
    {
      title: "A monsoon that arrived in the inbox first.",
      meta: "Essay",
      body: "Weather alerts, hostel WhatsApp groups, and why the forecast now feels like a rumor with a timestamp.",
    },
  ],
};
