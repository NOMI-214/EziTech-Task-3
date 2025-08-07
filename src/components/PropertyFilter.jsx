import React, { useState } from "react";

const PropertyFilter = ({ onViewChange, currentView }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Sort by");

  const scrollToHero = () => {
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "auto" });
    }
  };

  const handleViewClick = (newViewMode) => {
    if (onViewChange) {
      onViewChange(newViewMode);
    }
  };

  const filters = ["All", "Rent", "Sale"];
  const sortOptions = [
    "Price: Low to High",
    "Price: High to Low",
    "Newest",
    "Oldest",
    "Popular",
  ];

  return (
    <section className="bg-white py-3 sm:py-4 border-b border-gray-200 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 px-2 sm:px-4">
          {/* View Toggle Icons - Responsive */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleViewClick("grid")}
              className={`p-2 rounded transition-colors duration-200 hover:scale-105 ${
                currentView === "grid"
                  ? "bg-gray-100 text-black"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              aria-label="Grid view"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM9 4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V4zM9 10a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2zM15 4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V4zM15 10a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2z" />
              </svg>
            </button>
            <button
              onClick={() => handleViewClick("list")}
              className={`p-2 rounded transition-colors duration-200 hover:scale-105 ${
                currentView === "list"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              aria-label="List view"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Filter Labels and Sort Dropdown - Responsive */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 w-full sm:w-auto">
            {/* Filter Labels - Responsive */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {filters.map((filter, index) => (
                <div key={filter} className="flex items-center">
                  <button
                    onClick={() => {
                      setActiveFilter(filter);
                      scrollToHero();
                    }}
                    className={`text-responsive-sm font-medium transition-colors duration-200 hover:text-gray-600 ${
                      activeFilter === filter
                        ? "text-black font-bold"
                        : "text-gray-400"
                    }`}
                  >
                    {filter}
                  </button>
                  {index < filters.length - 1 && (
                    <div className="w-px h-4 bg-gray-300 mx-2 sm:mx-4 hidden sm:block"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Sort Dropdown - Responsive */}
            <div className="relative w-full sm:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-responsive appearance-none bg-white border border-gray-300 px-3 py-2 pr-8 text-responsive-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-homeland-green focus:border-transparent w-full sm:w-auto"
              >
                <option value="Sort by">Sort by</option>
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
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
        </div>
      </div>
    </section>
  );
};

export default PropertyFilter;
