import type { StaticImageData } from "next/image";

export type CinematicLink = {
  href: string;
  label: string;
};

export type CinematicStat = {
  value: string;
  label: string;
};

export type CinematicWork = {
  title: string;
  meta: string;
  body: string;
};

export type CinematicContent = {
  scene: {
    src: string | StaticImageData;
    alt: string;
  };
  initials: string;
  mark: string;
  email: string;
  nav: CinematicLink[];
  headline: [string, string];
  standfirst: string;
  lede: string;
  primary: CinematicLink;
  secondary: CinematicLink;
  stats: CinematicStat[];
  workHeading: string;
  work: CinematicWork[];
};
