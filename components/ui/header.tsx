"use client";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { useState } from "react";
import Logo from "@/public/images/AtlanticPineLogo.svg";
import LogoHover from "@/public/images/AtlanticPineLogoHover.svg";

interface navigation {
  heading: string;
  href: string;
}

interface language {
  heading: string;
  href: string;
  lang: string;
}
interface props {
  lang: string;
  homeHref: string;
  navigations: navigation[];
  language: language;
}

export default function Header({
  lang,
  homeHref,
  navigations,
  language,
}: props) {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  // const [language, setLanguage] = useState(0);
  // const languages = [
  //   {
  //     home: {
  //       href: "/en/",
  //     },
  //     about: {
  //       heading: "About",
  //       href: "/en/about",
  //     },
  //     services: {
  //       heading: "Services",
  //       href: "/en/#services-en",
  //     },
  //     contact: {
  //       heading: "Contact Us",
  //       href: "/en/contact-us",
  //     },
  //     language: {
  //       heading: "中文",
  //       href: "/cn/",
  //       lang: "cn",
  //     },
  //     lang: "en",
  //   },
  //   {
  //     home: {
  //       href: "/cn/",
  //     },
  //     about: {
  //       heading: "关于我们",
  //       href: "/about-cn",
  //       lang: "cn",
  //     },
  //     services: {
  //       heading: "服务",
  //       href: "/home-cn#services-cn", // TODO: change these links to chinese
  //     },
  //     contact: {
  //       heading: "联系我们",
  //       href: "/contact-us",
  //     },
  //     language: {
  //       heading: "English",
  //       href: "/",
  //       lang: "en",
  //     },
  //     lang: "cn",
  //   },
  // ];

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" lang={lang}>
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div
            className="shrink-0 mr-4"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {/* Logo */}
            <Link href={homeHref} className="block" aria-label="Atlantic-Pine">
              {isHovering ? (
                <Image
                  className="w-10 h-10 fill-current"
                  src={LogoHover}
                  alt="Logo"
                />
              ) : (
                <Image
                  className="w-10 h-10 fill-current"
                  src={Logo}
                  alt="Logo"
                />
              )}
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {navigations.map((element, index) => (
                <li>
                  <Link
                    href={element.href}
                    className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    {element.heading}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={language.href}
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3 rounded-3xl"
                  lang={language.lang}
                  // onClick={() => {
                  //   setLanguage(language === 0 ? 1 : 0);
                  // }}
                >
                  {language.heading}
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
