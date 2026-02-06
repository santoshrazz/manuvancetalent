import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { Statistics } from "@/components/home/stats";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Cta } from "@/components/home/cta";
import { Reviews } from "@/components/reviews";

export default function Home() {

  return (
    <>
      <Hero />
      <Services />
      <Statistics />
      <Reviews />
      <WhyChooseUs />
      <Cta />
    </>
  );
}
