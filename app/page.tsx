import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { Statistics } from "@/components/home/stats";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { CTA } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Statistics />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
