import React, { useState, useEffect, useRef } from "react";
import LoadingScreen from "./LoadingScreen";

const SearchBar = () => {
  const [listingType, setListingType] = useState("Condo");
  const [offerType, setOfferType] = useState("For Sale");
  const [selectedCity, setSelectedCity] = useState("New York");
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Sort by");
  const [isLoading, setIsLoading] = useState(false);
  const searchBarRef = useRef(null);

  const listingTypes = ["Condo", "House", "Apartment", "Villa", "Townhouse"];
  const offerTypes = ["For Sale", "For Rent", "For Lease"];
  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
  ];
  const filters = ["All", "Rent", "Sale"];
  const sortOptions = [
    "Price: Low to High",
    "Price: High to Low",
    "Newest",
    "Oldest",
    "Popular",
  ];

  const handleSearchClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to hero section after loading
      const heroSection = document.querySelector(".hero-section");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "auto" });
      }
      // Here you can add actual search functionality
      console.log("Searching for:", { listingType, offerType, selectedCity });
    }, 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated) return;

      const element = searchBarRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Trigger animation when element is 50% visible
      if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
        setIsVisible(true);
        setHasAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <section className="relative z-40 -mt-16 sm:-mt-20 mb-2 overflow-hidden">
        <div className="container-custom">
          <div
            ref={searchBarRef}
            className="bg-homeland-dark bg-opacity-95 backdrop-blur-sm shadow-2xl p-4 sm:p-6 lg:p-12 mx-2 sm:mx-4 relative rounded-lg"
            style={{ zIndex: 50 }}
          >
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-stretch lg:items-end">
              {/* Listing Type Dropdown - Responsive */}
              <div className="flex-1 w-full lg:w-auto">
                <label className="block text-white text-responsive-sm font-medium mb-2">
                  LISTING TYPES
                </label>
                <div className="relative">
                  <select
                    value={listingType}
                    onChange={(e) => setListingType(e.target.value)}
                    className="input-responsive appearance-none focus:outline-none focus:ring-2 focus:ring-homeland-green focus:border-transparent relative z-10"
                    style={{ zIndex: 10 }}
                  >
                    {listingTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Offer Type Dropdown - Responsive */}
              <div className="flex-1 w-full lg:w-auto">
                <label className="block text-white text-responsive-sm font-medium mb-2">
                  OFFER TYPE
                </label>
                <div className="relative">
                  <select
                    value={offerType}
                    onChange={(e) => setOfferType(e.target.value)}
                    className="input-responsive appearance-none focus:outline-none focus:ring-2 focus:ring-homeland-green focus:border-transparent relative z-10"
                    style={{ zIndex: 10 }}
                  >
                    {offerTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* City Dropdown - Responsive */}
              <div className="flex-1 w-full lg:w-auto">
                <label className="block text-white text-responsive-sm font-medium mb-2">
                  SELECT CITY
                </label>
                <div className="relative">
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="input-responsive appearance-none focus:outline-none focus:ring-2 focus:ring-homeland-green focus:border-transparent relative z-10"
                    style={{ zIndex: 10 }}
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Search Button - Responsive */}
              <div className="w-full lg:w-auto">
                <label className="block text-white text-responsive-sm font-medium mb-2 opacity-0">
                  Search
                </label>
                <button
                  onClick={handleSearchClick}
                  className="btn-primary w-full lg:w-auto text-responsive-base font-medium hover:bg-green-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 hover:scale-105"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchBar;
