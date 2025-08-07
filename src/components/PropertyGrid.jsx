import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PropertyGrid = ({ filterType = "All" }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState(new Set());

  const properties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      labels: [
        { text: "SALE", color: "bg-red-600" },
        { text: "RENT", color: "bg-green-600" },
      ],
      address: "871 Crenshaw Blvd",
      fullAddress: "1 New York Ave, Warners Bay, NSW 2282",
      price: "$2,265,500",
      beds: "2+",
      baths: "2",
      sqft: "1,620",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      labels: [{ text: "LEASE", color: "bg-blue-500" }],
      address: "853 S Lucerne Blvd",
      fullAddress: "853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005",
      price: "$2,265,500",
      beds: "2+",
      baths: "2",
      sqft: "5,500",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
      labels: [
        { text: "SALE", color: "bg-red-600" },
        { text: "RENT", color: "bg-green-600" },
      ],
      address: "9012 Sunset Blvd",
      fullAddress: "9012 Sunset Blvd West Hollywood CA 90069",
      price: "$3,200,000",
      beds: "5",
      baths: "4",
      sqft: "4,500",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      labels: [{ text: "RENT", color: "bg-green-600" }],
      address: "3456 Wilshire Blvd",
      fullAddress: "3456 Wilshire Blvd Los Angeles CA 90010",
      price: "$12,000/month",
      beds: "6",
      baths: "5",
      sqft: "6,800",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      labels: [
        { text: "SALE", color: "bg-red-600" },
        { text: "RENT", color: "bg-green-600" },
      ],
      address: "7890 Rodeo Drive",
      fullAddress: "7890 Rodeo Drive Beverly Hills CA 90210",
      price: "$8,500/month",
      beds: "4",
      baths: "3",
      sqft: "3,800",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      labels: [
        { text: "SALE", color: "bg-red-600" },
        { text: "RENT", color: "bg-green-600" },
      ],
      address: "625 S. Berendo St",
      fullAddress: "625 S. Berendo St Unit 607 Los Angeles, \nCA 90005",
      price: "$2,265,500",
      beds: "2+",
      baths: "2",
      sqft: "7,000",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      labels: [
        { text: "SALE", color: "bg-red-600" },
        { text: "RENT", color: "bg-green-600" },
      ],
      address: "871 Crenshaw Blvd",
      fullAddress: "1 New York Ave, Warners Bay, NSW 2282",
      price: "$2,265,500",
      beds: "2+",
      baths: "2",
      sqft: "1,620",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      labels: [{ text: "LEASE", color: "bg-blue-500" }],
      address: "853 S Lucerne Blvd",
      fullAddress: "853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005",
      price: "$2,265,500",
      beds: "2+",
      baths: "2",
      sqft: "5,500",
    },
  ];

  const toggleFavorite = (propertyId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(propertyId)) {
      newFavorites.delete(propertyId);
    } else {
      newFavorites.add(propertyId);
    }
    setFavorites(newFavorites);
  };

  const scrollToHero = () => {
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "auto" });
    }
  };

  const handlePropertyClick = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };

  // Filter properties based on filterType prop
  const filteredProperties = properties.filter((property) => {
    if (filterType === "All") return true;
    if (filterType === "Sale") {
      return property.labels.some(
        (label) => label.text === "SALE" || label.text === "Sale"
      );
    }
    if (filterType === "Rent") {
      return property.labels.some(
        (label) =>
          label.text === "RENT" ||
          label.text === "Rent" ||
          label.text === "LEASE"
      );
    }
    return true;
  });

  const totalPages = 10;
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        {/* Property Grid - Fully Responsive */}
        <div className="grid-responsive mb-12">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white overflow-hidden card-shadow animate-responsive"
            >
              {/* Property Image - Responsive */}
              <div className="relative aspect-video">
                <img
                  src={property.image}
                  alt={property.address}
                  className="img-responsive w-full h-full object-cover cursor-pointer transition-all duration-300 hover:scale-105"
                  onClick={() => handlePropertyClick(property.id)}
                />

                {/* Labels - Responsive positioning */}
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex flex-col gap-1">
                  {property.labels.map((label, index) => (
                    <span
                      key={index}
                      className={`${label.color} text-white px-2 py-1 sm:px-3 sm:py-1 text-xs font-medium rounded shadow-lg cursor-pointer hover:opacity-80 transition-opacity duration-300`}
                      onClick={() => handlePropertyClick(property.id)}
                    >
                      {label.text}
                    </span>
                  ))}
                </div>

                {/* Favorite Button - Responsive sizing */}
                <button
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 shadow-lg"
                >
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      favorites.has(property.id)
                        ? "text-red-500 fill-current"
                        : "text-gray-400"
                    }`}
                    fill={favorites.has(property.id) ? "currentColor" : "none"}
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

              {/* Property Details - Responsive padding and typography */}
              <div className="p-4 sm:p-6">
                <h3 className="text-responsive-lg font-bold text-homeland-dark mb-2 line-clamp-1">
                  {property.address}
                </h3>
                <div className="flex items-start text-responsive-sm text-gray-600 mb-3 sm:mb-4">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-gray-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="line-clamp-2">{property.fullAddress}</span>
                </div>
                <div className="text-responsive-xl font-bold text-homeland-green mb-3 sm:mb-4">
                  {property.price}
                </div>
                <div className="flex flex-wrap items-center text-responsive-sm text-gray-600 gap-2 sm:gap-4">
                  <span className="font-medium whitespace-nowrap">
                    BEDS {property.beds}
                  </span>
                  <span className="font-medium whitespace-nowrap">
                    BATHS {property.baths}
                  </span>
                  <span className="font-medium whitespace-nowrap">
                    SQ FT {property.sqft}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination - Responsive */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
          {/* Page 1 - Active */}
          <button
            onClick={() => {
              setCurrentPage(1);
              scrollToHero();
            }}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-responsive-sm font-medium bg-homeland-green text-white transition-all duration-300 hover:scale-105"
          >
            1
          </button>

          {/* Page 2 */}
          <button
            onClick={() => {
              setCurrentPage(2);
              scrollToHero();
            }}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-responsive-sm font-medium bg-white text-gray-600 hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:scale-105"
          >
            2
          </button>

          {/* Page 3 */}
          <button
            onClick={() => {
              setCurrentPage(3);
              scrollToHero();
            }}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-responsive-sm font-medium bg-white text-gray-600 hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:scale-105"
          >
            3
          </button>

          {/* Page 4 */}
          <button
            onClick={() => {
              setCurrentPage(4);
              scrollToHero();
            }}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-responsive-sm font-medium bg-white text-gray-600 hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:scale-105"
          >
            4
          </button>

          {/* Page 5 */}
          <button
            onClick={() => {
              setCurrentPage(5);
              scrollToHero();
            }}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-responsive-sm font-medium bg-white text-gray-600 hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:scale-105"
          >
            5
          </button>

          {/* Ellipsis */}
          <span className="text-gray-600 text-responsive-sm font-medium px-2">
            ...
          </span>

          {/* Page 10 */}
          <button
            onClick={() => {
              setCurrentPage(10);
              scrollToHero();
            }}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-responsive-sm font-medium bg-white text-gray-600 hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:scale-105"
          >
            10
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;
