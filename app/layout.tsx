import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-face",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-face",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Animioui",
    template: "%s | Animioui",
  },
  description:
    "Student portfolio templates you can preview, pick, and make your own.",
  openGraph: {
    title: "Animioui",
    locale: "en_US",
    description:
      "Student portfolio templates you can preview, pick, and make your own.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no">
      <body className={`${bricolage.variable} ${jetbrains.variable} ${bricolage.className}`}>
        <span
          hidden
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html: `<!--
THESIS: The homepage is the morning applications go out. Templates sit in the weather, not in a dashboard. It refuses the dark split-hero gallery.
OWN-WORLD: Painted cerulean sky, peach clouds, frosted glass pill nav, ink pills on white paper stages, live page crops.
STORY: A student sees a finished portfolio in the sky, believes these are real sites, and opens a preview.
FIRST VIEWPORT: Full-bleed painted sky. Centered glass pill nav. Short white headline and two CTAs. Live template stage overlapping the lower sky.
FORM: Placement-day Sky, brief-pinned over assigned Studio Lightbox; seed e55ab5b0.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`,
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
