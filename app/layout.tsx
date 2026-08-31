import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/layout/ClientShell";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans-face",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-face",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Animioui",
    template: "%s | Animioui",
  },
  description:
    "Copy-paste React components with GSAP and Framer Motion. Install via CLI and own every line.",
  openGraph: {
    title: "Animioui",
    description:
      "Copy-paste React components with GSAP and Framer Motion. Install via CLI and own every line.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${jetbrains.variable}`}>
        {/*
          THESIS: The first viewport is a live motion bench, not a terminal mock.
          OWN-WORLD: Cool charcoal, one cobalt accent, Bricolage Grotesque, pill controls, double-bezel stages.
          STORY: Developers see the motion, copy a command, and leave with source they own.
          FIRST VIEWPORT: Floating island nav, left offer, right live components, Get started in the copy column.
          FORM: Instrument-atelier component library. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
        */}
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
