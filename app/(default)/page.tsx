export const metadata = {
  title: "Home - Atlantic Pine Education",
  description:
    "We are dedicated to serving as a conduit for cultural exchange between China and the United States.",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      <Testimonials />
      {/* <Features /> */}
      <Newsletter />
    </>
  );
}
