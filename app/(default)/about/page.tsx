export const metadata = {
  title: "About - Atlantic Pine Education",
  description: "Company history, team introduction, achievements and awards",
};

import Mission from "@/components/mission";
import Values from "@/components/values";
import Intro from "@/components/company-intro";

export default function About() {
  return (
    <>
      <Mission />
      <Values />
      <Intro />
    </>
  );
}
