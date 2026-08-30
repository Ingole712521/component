import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import HomeFeatures from "@/components/sections/HomeFeatures";
import HomeWorkflow from "@/components/sections/HomeWorkflow";
import HomeShowcase from "@/components/sections/HomeShowcase";
import Pricing from "@/components/sections/Pricing";
import HomeCta from "@/components/sections/HomeCta";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <HomeFeatures />
      <HomeWorkflow />
      <HomeShowcase />
      <Pricing />
      <HomeCta />
    </>
  );
}
