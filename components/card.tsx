import classNames from "classnames";

interface props {
  boldedTitle: string;
  content: string;
  backgroundColorClassName: string;
}

export default function Card({
  boldedTitle,
  content,
  backgroundColorClassName,
}: props) {
  const backgroundColorClassNames = ["gradient-block1"];
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <div
        className={classNames(
          "max-w-xl",
          "md:max-w-none",
          "md:w-full",
          "mx-auto",
          "md:col-span-7",
          "lg:col-span-6",
          "rounded-corners",
          "mt-6",
          "",
          "text-white",
          backgroundColorClassName
        )}
        data-aos="fade-right"
      >
        <div className="md:order-1">
          <p className="text-xl text-white">
            <b>{boldedTitle}</b> {content}
          </p>
        </div>
      </div>
    </div>
  );
}
