"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import PageIllustration from "@/components/page-illustration";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import data from "@/data/en.json";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <Header
        lang={data.header.lang}
        homeHref={data.header.homeHref}
        navigations={data.header.navigations}
        language={data.header.language}
      />
      <main className="grow" lang="en">
        <PageIllustration />

        {children}
      </main>

      <Footer />
    </>
  );
}
