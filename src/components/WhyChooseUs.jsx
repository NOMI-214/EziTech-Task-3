import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg
          className="w-16 h-16 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: "Research Suburbs",
      description: (
        <p>
          Lorem ipsum dolor sit amet consectetur <br />
          adipisicing elit. Incidunt iure qui natus <br /> perspiciatis ex odio
          molestia.
        </p>
      ),
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-16 h-16 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
      title: "Sold Houses",
      description: (
        <p>
          Lorem ipsum dolor sit amet consectetur <br />
          adipisicing elit. Incidunt iure qui natus <br /> perspiciatis ex odio
          molestia.
        </p>
      ),
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-16 h-16 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
        </svg>
      ),
      title: "Security Priority",
      description: (
        <p>
          Lorem ipsum dolor sit amet consectetur <br />
          adipisicing elit. Incidunt iure qui natus <br /> perspiciatis ex odio
          molestia.
        </p>
      ),
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-homeland-dark mb-4">
            WHY CHOOSE US?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="text-left group hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-homeland-dark mb-4 text-center">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                {feature.description}
              </p>

              {/* Read More Link */}
              <div className="text-center">
                <a
                  href="/read-more"
                  className="text-gray-500 hover:text-homeland-green font-medium transition-colors duration-300 inline-flex items-center group/link"
                >
                  READ MORE
                  <svg
                    className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
