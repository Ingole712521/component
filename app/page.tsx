"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import BentoGrid from "@/components/sections/BentoGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Showcase from "@/components/sections/Showcase";
import CTA from "@/components/sections/CTA";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <div className="bg-black text-white relative">
      <Hero />
      <About />
      <BentoGrid />
      <WhyChooseUs />
      <Showcase />
      <CTA />
      <ContactForm />
    </div>
  );
}
