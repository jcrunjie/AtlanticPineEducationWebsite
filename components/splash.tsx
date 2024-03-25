import classNames from "classnames";

interface props {
  title: string;
  description: string;
  splashPageBackgroundColorClassName: string;
}

export default function Splash({
  title,
  description,
  splashPageBackgroundColorClassName,
}: props) {
    // Update this list to preload values for all color-related classNames that will use this component
  const backgroundColorClassNames = ['gradient-block1', 'gradient-block2', 'gradient-block3', 'gradient-block4', 'gradient-block5', 'gradient-block6'];
  return (
    <div
      className={classNames(
        "mt-20",
        "md:max-w-none",
        "md:w-full",
        "mx-auto",
        splashPageBackgroundColorClassName
      )}
      data-aos="fade-right"
    >
      <div className="py-3">
        <h1 className="h2 text-white max-w-6xl mx-auto px-4 sm:px-6">
          {title}
        </h1>
        <p className="text-lg text-white py-3 px-8 max-w-6xl mx-auto px-4 sm:px-6">
          {description}
        </p>
      </div>
    </div>
  );
}
