import Image from "next/image";
import happiness from "@/public/images/happiness.png";
import international from "@/public/images/international.png";

interface message {
  title: string;
  description: string;
}

interface props {
  mission: message;
  vision: message;
}

export default function Mission({ mission, vision }: props) {
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
                  <h3 className="h3">{mission.title}</h3>
                  <p className="text-xl text-purple-200 mt-2">
                    {mission.description}
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
                  <h3 className="h3 text-white">{vision.title}</h3>
                  <p className="text-xl text-purple-200 mt-2">
                    {vision.description}
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
