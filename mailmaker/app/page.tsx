import ScrollToTop from "@/components/ScrollToTop";
import Features from "./Features";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import Solution from "./Solution";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Solution />
      <Features />
      <HowItWorks />
      <Testimonials /> 
      <Pricing />
      <ScrollToTop />
    </main>
  );
}
