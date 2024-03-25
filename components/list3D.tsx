import classNames from "classnames";

interface service {
  title: string;
  backgroundColorClassName: string;
  features: string[];
}

interface props {
  title: string;
  services: service[];
}

export default function List3D({ title, services }: props) {
  const backgroundColorClassNames = [
    "bg-purple-60",
    "bg-purple-70",
    "bg-purple-80",
    "bg-purple-90",
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 border-gray-800">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center my-6">
          <h1 className="h3">{title}</h1>
        </div>
        <ul className="service">
          {services.map((service, index) => (
            <li
              className={classNames(
                "card",
                "text-white",
                service.backgroundColorClassName
              )}
            >
              <div className="icon">
                <i className="fa-solid fa-gear"></i>
              </div>
              <div className="title">{service.title}</div>
              <div className="content">
                <ul className="text-sm text-white">
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
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
