import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      address: "625 S. BERENDO ST",
      price: "$1,000,500",
      tags: ["FOR RENT"],
      tagColor: "bg-blue-600",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      address: "1234 OAK AVENUE",
      price: "$850,000",
      tags: ["FOR SALE"],
      tagColor: "bg-green-600",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      address: "5678 PINE STREET",
      price: "$1,200,000",
      tags: ["FOR RENT"],
      tagColor: "bg-purple-600",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      address: "9101 MAPLE DRIVE",
      price: "$2,500,000",
      tags: ["FOR SALE"],
      tagColor: "bg-red-600",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      address: "3456 ELM COURT",
      price: "$750,000",
      tags: ["FOR RENT"],
      tagColor: "bg-orange-600",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-section relative h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Overlay - Responsive */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white z-10 w-full max-w-4xl">
          {/* Tags - Responsive */}
          <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6">
            {slides[currentSlide].tags.map((tag, index) => (
              <span
                key={index}
                className={`${slides[currentSlide].tagColor} text-white px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium shadow-lg`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Address - Fluid Typography */}
          <h1 className="text-fluid-xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
            {slides[currentSlide].address}
          </h1>

          {/* Price - Fluid Typography */}
          <div className="text-fluid-xl font-bold text-homeland-green mb-6 sm:mb-8">
            {slides[currentSlide].price}
          </div>

          {/* CTA Button - Responsive */}
          <button className="btn-outline text-responsive-base sm:text-responsive-lg px-6 py-3 sm:px-8 sm:py-4 w-full sm:w-auto max-w-xs sm:max-w-none">
            SEE DETAILS
          </button>
        </div>
      </div>

      {/* Navigation Arrows - Responsive */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
        aria-label="Previous slide"
      >
        <svg
          className="w-4 h-4 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
        aria-label="Next slide"
      >
        <svg
          className="w-4 h-4 sm:w-6 sm:h-6"
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
      </button>

      {/* Slide Indicators - Responsive */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSlide
                ? "bg-homeland-green"
                : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile Touch Indicators */}
      <div className="absolute inset-0 pointer-events-none lg:hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
