interface value {
  title: string;
  description: string;
}

interface props {
  valuesHeading: string;
  values: value[];
}

export default function Values({ valuesHeading, values }: props) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h2">{valuesHeading}</h1>
          </div>
        </div>
        <div className="container-row">
          <div className="row-item">
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-10"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  transform="translate(21 21)"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <ellipse
                    className="stroke-current text-purple-300"
                    cx="11"
                    cy="11"
                    rx="5.5"
                    ry="11"
                  />
                  <path
                    className="stroke-current text-purple-100"
                    d="M11 0v22M0 11h22"
                  />
                  <circle
                    className="stroke-current text-purple-100"
                    cx="11"
                    cy="11"
                    r="11"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2">{values[0].title}</h4>
              <p className="text-sm text-gray-400 text-center">
                {values[0].description}
              </p>
            </div>
          </div>
          <div className="row-item">
            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-20"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  transform="translate(22 21)"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="stroke-current text-purple-100"
                    d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5"
                  />
                  <circle
                    className="stroke-current text-purple-300"
                    cx="13"
                    cy="9"
                    r="3"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2">{values[1].title}</h4>
              <p className="text-sm text-gray-400 text-center">
                {values[1].description}
              </p>
            </div>
          </div>
          <div className="row-item">
            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <path
                  className="stroke-current text-purple-100"
                  d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="stroke-current text-purple-300"
                  d="M43 42h-9M43 37h-9"
                  strokeLinecap="square"
                  strokeWidth="2"
                />
              </svg>
              <h4 className="h4 mb-2">{values[2].title}</h4>
              <p className="text-sm text-gray-400 text-center">
                {values[2].description}
              </p>
            </div>
          </div>
          <div className="row-item">
            {/* 4th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-40"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="stroke-current text-purple-100"
                    d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6"
                  />
                  <path
                    className="stroke-current text-purple-300"
                    d="M22 30h4v12h-4z"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2">{values[3].title}</h4>
              <p className="text-sm text-gray-400 text-center">
                {values[3].description}
              </p>
            </div>
          </div>
          <div className="row-item">
            {/* 5th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-50"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  transform="translate(21 22)"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="stroke-current text-purple-300"
                    d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415"
                  />
                  <circle
                    className="stroke-current text-purple-300"
                    cx="17"
                    cy="5"
                    r="3"
                  />
                  <path
                    className="stroke-current text-purple-100"
                    d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2">{values[4].title}</h4>
              <p className="text-sm text-gray-400 text-center">
                {values[4].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
