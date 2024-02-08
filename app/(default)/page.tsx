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

import data from "@/data/en.json";

export default function Home() {
  return (
    <>
      <Hero title={data.home.title} description={data.home.description} />
      <Zigzag
        title={data.services.title}
        message={data.services.message}
        linkMessage={data.services.linkMessage}
        services={data.services.services}
      />
      <Testimonials />
      {/* <Features /> */}
      <Newsletter />
    </>
  );
}
