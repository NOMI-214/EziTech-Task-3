import React, { useState } from "react";

const PropertyList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState(new Set());

  const properties = [
    {
      id: 1,
      image: "https://preview.colorlib.com/theme/homeland/images/img_1.jpg",
      labels: [
        { text: "SALE", color: "bg-red-600" },
        { text: "RENT", color: "bg-green-600" },
      ],
      address: "625 S. Berendo St",
      fullAddress: "625 S. Berendo St Unit 607 Los Angeles, CA 90005",
      price: "$2,265,500",
      beds: "2+",
      baths: "2",
      sqft: "7,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      image: "https://preview.colorlib.com/theme/homeland/images/img_2.jpg",
      labels: [{ text: "SALE", color: "bg-red-600" }],
      address: "853 S Lucerne Blvd",
      fullAddress: "853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005",
      price: "$1,265,500",
      beds: "3",
      baths: "2",
      sqft: "5,500",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      image: "https://preview.colorlib.com/theme/homeland/images/img_3.jpg",
      labels: [{ text: "RENT", color: "bg-green-600" }],
      address: "1234 Main St",
      fullAddress: "1234 Main St Unit 202 Beverly Hills, CA 90210",
      price: "$3,500/month",
      beds: "2",
      baths: "2",
      sqft: "4,200",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 4,
      image: "https://preview.colorlib.com/theme/homeland/images/img_4.jpg",
      labels: [{ text: "SALE", color: "bg-red-600" }],
      address: "5678 Oak Ave",
      fullAddress: "5678 Oak Ave Unit 305 Santa Monica, CA 90401",
      price: "$1,850,000",
      beds: "4",
      baths: "3",
      sqft: "6,800",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 5,
      image: "https://preview.colorlib.com/theme/homeland/images/img_5.jpg",
      labels: [{ text: "RENT", color: "bg-green-600" }],
      address: "9012 Pine St",
      fullAddress: "9012 Pine St Unit 401 Venice, CA 90291",
      price: "$4,200/month",
      beds: "3",
      baths: "2",
      sqft: "5,100",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      id: 6,
      image: "https://preview.colorlib.com/theme/homeland/images/img_6.jpg",
      labels: [{ text: "SALE", color: "bg-red-600" }],
      address: "3456 Maple Dr",
      fullAddress: "3456 Maple Dr Unit 102 Manhattan Beach, CA 90266",
      price: "$2,100,000",
      beds: "3",
      baths: "2",
      sqft: "4,800",
      description:
        "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
  ];

  const toggleFavorite = (propertyId) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(propertyId)) {
        newFavorites.delete(propertyId);
      } else {
        newFavorites.add(propertyId);
      }
      return newFavorites;
    });
  };

  const scrollToHero = () => {
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Property List */}
        <div className="space-y-6 mb-12">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white overflow-hidden card-shadow hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Property Image */}
                <div className="lg:w-1/3 relative">
                  <img
                    src={property.image}
                    alt={property.address}
                    className="w-full h-64 lg:h-full object-cover cursor-pointer hover:animate-pulse hover:scale-110 transition-all duration-300"
                  />
                  {/* Labels */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1">
                    {property.labels.map((label, index) => (
                      <span
                        key={index}
                        className={`${label.color} text-white px-3 py-1 text-xs font-medium rounded shadow-lg`}
                      >
                        {label.text}
                      </span>
                    ))}
                  </div>
                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 shadow-lg"
                  >
                    <svg
                      className={`w-5 h-5 ${
                        favorites.has(property.id)
                          ? "text-red-500"
                          : "text-gray-400"
                      }`}
                      fill={
                        favorites.has(property.id) ? "currentColor" : "none"
                      }
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>

                {/* Property Details */}
                <div className="lg:w-2/3 p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-homeland-dark mb-2">
                        {property.address}
                      </h3>
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <svg
                          className="w-4 h-4 mr-2 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{property.fullAddress}</span>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {property.description}
                      </p>
                    </div>

                    <div className="lg:ml-6 lg:text-right">
                      <div className="text-2xl font-bold text-homeland-green mb-4">
                        {property.price}
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-xs text-gray-500 uppercase font-medium mb-1">
                            BEDS
                          </div>
                          <div className="text-sm font-bold text-homeland-dark">
                            {property.beds}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 uppercase font-medium mb-1">
                            BATHS
                          </div>
                          <div className="text-sm font-bold text-homeland-dark">
                            {property.baths}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 uppercase font-medium mb-1">
                            SQ FT
                          </div>
                          <div className="text-sm font-bold text-homeland-dark">
                            {property.sqft}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2">
          {/* Page 1 - Active */}
          <button
            onClick={() => {
              setCurrentPage(1);
              scrollToHero();
            }}
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium bg-homeland-green text-white transition-all duration-300"
          >
            1
          </button>
          {/* Page 2 */}
          <button
            onClick={() => {
              setCurrentPage(2);
              scrollToHero();
            }}
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium bg-white text-gray-600 hover:bg-gray-50 transition-all duration-300 border border-gray-200"
          >
            2
          </button>
          {/* Page 3 */}
          <button
            onClick={() => {
              setCurrentPage(3);
              scrollToHero();
            }}
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium bg-white text-gray-600 hover:bg-gray-50 transition-all duration-300 border border-gray-200"
          >
            3
          </button>
          {/* Page 4 */}
          <button
            onClick={() => {
              setCurrentPage(4);
              scrollToHero();
            }}
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium bg-white text-gray-600 hover:bg-gray-50 transition-all duration-300 border border-gray-200"
          >
            4
          </button>
          {/* Page 5 */}
          <button
            onClick={() => {
              setCurrentPage(5);
              scrollToHero();
            }}
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium bg-white text-gray-600 hover:bg-gray-50 transition-all duration-300 border border-gray-200"
          >
            5
          </button>
          {/* Ellipsis */}
          <span className="text-gray-600 text-sm font-medium">...</span>
          {/* Page 10 */}
          <button
            onClick={() => {
              setCurrentPage(10);
              scrollToHero();
            }}
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium bg-white text-gray-600 hover:bg-gray-50 transition-all duration-300 border border-gray-200"
          >
            10
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
