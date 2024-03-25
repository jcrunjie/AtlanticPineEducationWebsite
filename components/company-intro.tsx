interface props {
  title: string;
  description: string;
}

export default function Intro({ title, description }: props) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h2 pb-12">{title}</h1>
          </div>
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 bg-purple-600 rounded-corners mb-4"
            data-aos="fade-right"
          >
            <div className="py-3 md:order-1">
              <p className="text-xl text-purple-200 py-3 px-8">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
