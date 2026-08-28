import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

const BentoGrid = dynamic(() => import("@/components/sections/BentoGrid"));
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"));
const Showcase = dynamic(() => import("@/components/sections/Showcase"));
const Pricing = dynamic(() => import("@/components/sections/Pricing"));
const CTA = dynamic(() => import("@/components/sections/CTA"));
const ContactForm = dynamic(() => import("@/components/sections/ContactForm"));

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <BentoGrid />
      <WhyChooseUs />
      <Showcase />
      <Pricing />
      <CTA />
      <ContactForm />
    </div>
  );
}
