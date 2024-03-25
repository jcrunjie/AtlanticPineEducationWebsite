export const metadata = {
  title: "Services for US K12 Schools - Atlantic Pine Education",
  description:
    "Achieving Educational Dreams, Embarking on the American K12 Learning Journey",
};

import Splash from "@/components/splash";
import List3D from "@/components/list3D";
import Card from "@/components/card";
import data from "@/data/en.json";
export default function K12() {
  return (
    <>
        <Splash
          title={data.k12.title}
          description={data.k12.description}
          splashPageBackgroundColorClassName={
            data.k12.splashPageBackgroundColorClassName
          }
        />
        <List3D title={data.k12.servicesTitle} services={data.k12.services} />
        <Card boldedTitle={data.k12.additionalInfoTitle} content={data.k12.additionalInfoContent} backgroundColorClassName={data.k12.splashPageBackgroundColorClassName}/>
    </>
  );
}
