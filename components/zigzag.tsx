import Image from "next/image";
import Link from "next/link";

import k12 from "@/public/images/k-12.png";
import exchange1 from "@/public/images/exchange1.png";
import exchange2 from "@/public/images/exchange2.png";
import leader from "@/public/images/leader.png";
import summer from "@/public/images/summer.png";
import collegeApp from "@/public/images/college-app.png";

interface service {
  title: string;
  description: string;
  features: string[];
  link: string;
}

interface props {
  message: string;
  linkMessage: string;
  title: string;
  services: service[];
}

const images = [k12, exchange1, leader, summer, collegeApp, exchange2];

export default function Zigzag({
  message,
  linkMessage,
  title,
  services,
}: props) {
  return (
    <section id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              {message}
            </div>
            <h1 className="h2 mb-4">{title}</h1>
          </div>
          {/* Items */}
          <div className="grid gap-20">
            {services.map((service, index) => (
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div
                  className={
                    index % 2 === 0
                      ? "max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0"
                      : "max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                  }
                  data-aos="fade-up"
                >
                  <Image
                    className="max-w-full mx-auto md:max-w-none h-auto rounded-corners"
                    src={images[index]}
                    width={540}
                    height={405}
                    alt="Service image"
                  />
                </div>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                >
                  <div
                    className={
                      index % 2 === 0
                        ? "md:pl-4 lg:pl-12 xl:pl-16"
                        : "md:pr-4 lg:pr-12 xl:pr-16"
                    }
                  >
                    <h3 className="h3 mb-3">{service.title}</h3>
                    <p className="text-xl text-gray-400 mb-4">
                      {service.description}
                    </p>
                    <ul className="text-lg text-gray-400 -mb-2">
                      {service.features.map((feature, index) => (
                        <li className="flex items-center mb-2">
                          <svg
                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.link}
                      className="flex transition duration-150 ease-in-out"
                      aria-label="US-K12"
                    >
                      <div className="font-architects-daughter text-xl text-purple-600 hover:text-gray-200 mt-4">
                        <b>{linkMessage}</b>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
