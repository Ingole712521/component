import type { Metadata } from "next";
import { UnderConstruction } from "./_components/under-construction";

export const metadata: Metadata = {
  title: "Under construction",
  description: "The site is being rebuilt. Check back soon.",
};

export default function HomePage() {
  return (
    <main id="main-content">
      <UnderConstruction />
    </main>
  );
}
