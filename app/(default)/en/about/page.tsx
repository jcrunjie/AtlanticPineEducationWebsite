export const metadata = {
  title: "About - Atlantic Pine Education",
  description: "Company history, team introduction, achievements and awards",
};

import Mission from "@/components/mission";
import Values from "@/components/values";
import Intro from "@/components/company-intro";
import data from "@/data/en.json";

export default function About() {
  return (
    <>
      <Mission mission={data.about.mission} vision={data.about.vision} />
      <Values
        valuesHeading={data.about.valuesHeading}
        values={data.about.values}
      />
      <Intro />
    </>
  );
}
