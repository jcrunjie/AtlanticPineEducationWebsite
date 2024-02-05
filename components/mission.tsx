import Image from "next/image";
import LandingImage from "@/public/images/landingPagePlaceHolder.svg";
import happiness from "@/public/images/happiness.png";
import international from "@/public/images/international.png";

export default function Mission() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 my-6">
        <div className="py-12 md:py-20 border-gray-800">
          {/* Items */}
          <div className="grid gap-20"></div>
          <div className="container">
            <div className="column">
              <div
                className="about md:w-full mx-auto md:col-span-7 lg:col-span-6 bg-purple-600 rounded-corners mb-4"
                data-aos="fade-right"
              >
                <div className="px-8 py-10 md:order-1">
                  <h3 className="h3">Mission</h3>
                  <p className="text-xl text-purple-200 mt-2">
                    Atlantic Pine Education Company is committed to becoming a
                    bridge and promoter of Sino-American cultural exchange. Our
                    mission is to help Chinese students achieve comprehensive
                    development in their studies and lives in the United States
                    through carefully designed educational programs while
                    deepening their understanding of American culture and
                    values. We are also committed to providing unique
                    opportunities for American students to gain in-depth
                    knowledge of China's rich history, culture, and modern
                    society, promoting mutual understanding and respect between
                    the youth of the two countries.
                  </p>
                </div>
              </div>
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-4 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto rounded-corners mb-4"
                  src={international}
                  width={500}
                  alt="Features 02"
                />
              </div>
            </div>
            <div className="column">
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-4 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto rounded-corners mb-4"
                  src={happiness}
                  width={500}
                  alt="Features 02"
                />
              </div>
              <div
                className="about md:w-full mx-auto md:col-span-7 lg:col-span-6 bg-purple-700 rounded-corners"
                data-aos="fade-right"
              >
                <div className="px-8 py-10 md:order-1">
                  <h3 className="h3 text-white">Vision</h3>
                  <p className="text-xl text-purple-200 mt-2">
                    Our vision is to break down cultural barriers and build a
                    more harmonious, respectful, and understanding relationship
                    between China and the United States through educational
                    exchange. As a pioneer in the field of education, we are
                    committed to cultivating the next generation of leaders with
                    a global vision, cross-cultural communication skills, and
                    innovative spirit. We believe that through these efforts, we
                    can make an important contribution to the long-term friendly
                    cooperation and common prosperity between China and the
                    United States.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
