export const metadata = {
  title: "Services for US K12 Schools - Atlantic Pine Education",
  description:
    "Achieving Educational Dreams, Embarking on the American K12 Learning Journey",
};

import Service from "@/components/service-k12";
import data from "@/data/en.json";
export default function K12() {
  return (
    <>
      <Service serviceProps={data.k12}/>
    </>
  );
}
