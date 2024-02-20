"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  const [language, setLanguage] = useState(0);
  const languages = [
    {
      about: {
        heading: "About",
        href: "/about",
      },
      services: {
        heading: "Services",
        href: "/#services",
      },
      contact: {
        heading: "Contact Us",
        href: "/contact-us",
      },
      language: {
        heading: "中文",
        href: "/home-cn",
        lang: "cn",
      },
      lang: "en",
    },
    {
      about: {
        heading: "关于我们",
        href: "/about-cn",
        lang: "cn",
      },
      services: {
        heading: "服务",
        href: "/#services", // TODO: change these links to chinese
      },
      contact: {
        heading: "联系我们",
        href: "/contact-us",
      },
      language: {
        heading: "English",
        href: "/",
        lang: "en",
      },
      lang: "cn",
    },
  ];

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>
      {/* TODO: make langauge compatibility for mobile as well */}
      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={
          mobileNavOpen
            ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0.8 }
        }
      >
        <ul className="bg-gray-200 px-4 py-2">
          <li>
            <Link
              href={languages[language].about.href}
              className="flex font-medium w-full text-purple-600 hover:text-purple-200 py-2 justify-center"
              onClick={() => setMobileNavOpen(false)}
            >
              {languages[language].about.heading}
            </Link>
          </li>
          <li>
            <Link
              href={languages[language].services.href}
              className="flex font-medium w-full text-purple-600 hover:text-purple-200 py-2 justify-center"
              onClick={() => setMobileNavOpen(false)}
            >
              {languages[language].services.heading}
            </Link>
          </li>
          <li>
            <Link
              href={languages[language].contact.href}
              className="flex font-medium w-full text-purple-600 hover:text-purple-200 py-2 justify-center"
              onClick={() => setMobileNavOpen(false)}
            >
              {languages[language].contact.heading}
            </Link>
          </li>
          <li>
            <Link
              href={languages[language].language.href}
              lang={languages[language].lang}
              className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-purple-200 bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
              onClick={() => {
                setLanguage(language === 0 ? 1 : 0);
                setMobileNavOpen(false);
              }}
            >
              {languages[language].language.heading}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
