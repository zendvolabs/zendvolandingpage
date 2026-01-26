import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import HowItWorks from "@/components/sections/HowItWorks";
import Navbar from "@/components/layout/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Faqs } from "@/components/sections/FaqSection";
import { WhyWaitList } from "@/components/sections/WhyWaitList";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Intro />
        <HowItWorks />
        <WhyWaitList/>
        <Faqs/>
        <CtaBanner/>
      </main>
    </div>
  );
}
