import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { SiteShell } from "../_components/site-shell";
import { SkyBand } from "../_components/sky-band";
import styles from "../_components/home-world.module.css";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Browse a live template, open the full preview, then pick the layout that fits your applications.",
};

const steps = [
  {
    title: "Browse a live layout",
    body: "Each card is a real page, scaled into a frame. You can tell in a few seconds if the structure fits engineering, design, campus work, data, architecture, or writing.",
  },
  {
    title: "Open the full preview",
    body: "The template becomes a full site at /preview/its-name. Scroll from the painted homepage through projects, writing, and contact, the way a recruiter would. Nothing here is a static mock.",
  },
  {
    title: "Pick one to make your own",
    body: "Preview and pick are the only actions right now. Personalizing a template is the next step, not a shipped editor.",
  },
];

export default function HowItWorksPage() {
  return (
    <SiteShell>
      <main id="main-content">
        <SkyBand
          compact
          headingId="how-heading"
          title="Preview first. Pick when it fits."
          lede="Animioui is a gallery of student portfolio templates you can open as real sites."
          actions={
            <Link href="/templates" className={styles.btnPrimary}>
              Browse templates
              <span className={styles.btnIcon} aria-hidden>
                <ArrowRight size={14} weight="bold" />
              </span>
            </Link>
          }
        />
        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step.title} className={styles.step}>
              <h2 className={styles.stepTitle}>{step.title}</h2>
              <p className={styles.stepBody}>{step.body}</p>
            </li>
          ))}
        </ol>
      </main>
    </SiteShell>
  );
}
