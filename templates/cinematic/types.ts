import type { StaticImageData } from "next/image";

export type CinematicLink = {
  href: string;
  label: string;
};

export type CinematicStat = {
  value: string;
  label: string;
};

export type CinematicFact = {
  label: string;
  value: string;
};

export type CinematicProject = {
  year: string;
  title: string;
  body: string;
  stack: string[];
};

export type CinematicNote = {
  title: string;
  date: string;
  lede: string;
};

export type CinematicContent = {
  scene: {
    src: string | StaticImageData;
    alt: string;
  };
  initials: string;
  mark: string;
  email: string;
  github: CinematicLink;
  nav: CinematicLink[];
  headline: [string, string];
  standfirst: string;
  lede: string;
  primary: CinematicLink;
  secondary: CinematicLink;
  stats: CinematicStat[];
  about: {
    heading: string;
    name: string;
    program: string;
    bio: string;
    facts: CinematicFact[];
  };
  projectsHeading: string;
  projects: CinematicProject[];
  writingHeading: string;
  writing: CinematicNote[];
  linksHeading: string;
  links: CinematicLink[];
  contact: {
    heading: string;
    note: string;
  };
};
