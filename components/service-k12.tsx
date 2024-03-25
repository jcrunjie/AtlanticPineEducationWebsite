interface services {
  title: string;
  features: string[];
}

interface serviceProps {
  title: string;
  description: string;
  services: services[];
  additionalInfoTitle: string;
  additionalInfoContent: string;
}

interface props {
  serviceProps: serviceProps
}

export default function Service( { serviceProps }:props) {
  return (
    <section>
      <div className="pt-5rem border-gray-800">
        <div
          className="md:max-w-none md:w-full mx-auto gradient-block1"
          data-aos="fade-right"
        >
          <div className="py-3">
            <h1 className="h2 text-white max-w-6xl mx-auto px-4 sm:px-6">
              {serviceProps.title}
            </h1>
            <p className="text-lg text-white py-3 px-8 max-w-6xl mx-auto px-4 sm:px-6">
              {serviceProps.description}
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 border-gray-800">
            {/* Section header */}

            <div className="max-w-3xl mx-auto text-center my-6">
              <h1 className="h3">Our Professional Services and Features</h1>
            </div>
            <ul className="service">
              {
                serviceProps.services.map((service, index) => (
                <li className={"card text-white bg-purple-"+(index*10+60)}>
                  <div className="icon">
                    <i className="fa-solid fa-gear"></i>
                  </div>
                  <div className="title">{service.title}</div>
                  <div className="content">
                    <ul className="text-sm text-white">
                      {
                        service.features.map((feature, index) => (
                          <li className="flex items-center mb-2">
                          <svg
                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>
                            {feature}
                          </span>
                        </li>
                        ))
                      }
                    </ul>
                  </div>
                </li>
                ))
              }
            </ul>
            {/* additional */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 gradient-block1 rounded-corners mt-6"
              data-aos="fade-right"
            >
              <div className="md:order-1">
                <p className="text-xl text-white">
                  <b>Parents' Guide Detailed Information:</b> Provides
                  comprehensive guidance for parents, including key information
                  on student safety, health management, and emergency response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
