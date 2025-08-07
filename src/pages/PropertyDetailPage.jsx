import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";

const PropertyDetailPage = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
    alert("Message sent successfully!");
    setContactForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  // Add slider state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev < property.gallery.length - 1 ? prev + 1 : prev
    );
  };

  // Mock property data - in real app, this would come from API based on ID
  const property = {
    id: id || "1",
    address: "625 S. BERENDO ST",
    price: "$1,000,500",
    mainImage:
      "https://preview.colorlib.com/theme/homeland/images/hero_bg_2.jpg",
    detailImage:
      "https://preview.colorlib.com/theme/homeland/images/hero_bg_3.jpg",
    beds: 3,
    baths: 2,
    sqft: 7000,
    homeType: "Condo",
    yearBuilt: 2019,
    pricePerSqft: "$520",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veli eu malesuada libero sit amet. Mauris placerat eleifend lorem sed vestibulum. Mauris neque risus, rutrum at lorem in, blandit congue enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum.",
    additionalInfo:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
    moreInfo:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    gallery: [
      "https://preview.colorlib.com/theme/homeland/images/hero_bg_3.jpg",
      "https://preview.colorlib.com/theme/homeland/images/hero_bg_1.jpg",
      "https://preview.colorlib.com/theme/homeland/images/hero_bg_2.jpg",
      "https://preview.colorlib.com/theme/homeland/images/hero_bg_3.jpg",
      "https://preview.colorlib.com/theme/homeland/images/img_2.jpg",
      "https://preview.colorlib.com/theme/homeland/images/img_5.jpg",
      "https://preview.colorlib.com/theme/homeland/images/hero_bg_3.jpg",
      "https://preview.colorlib.com/theme/homeland/images/hero_bg_2.jpg",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://preview.colorlib.com/theme/homeland/images/img_2.jpg",
      "https://preview.colorlib.com/theme/homeland/images/img_5.jpg",
    ],
  };

  const relatedProperties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      address: "625 S. Berendo St",
      fullAddress: "625 S. Berendo St Los Angeles, CA 90005",
      price: "$2,265,500",
      beds: 3,
      baths: 2,
      sqft: 7000,
      labels: [{ text: "SALE", color: "bg-red-600" }],
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      address: "871 Crenshaw Blvd",
      fullAddress: "871 Crenshaw Blvd Torrance, CA 90501",
      price: "$2,265,500",
      beds: 2,
      baths: 2,
      sqft: 1620,
      labels: [{ text: "SALE", color: "bg-red-600" }],
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      address: "853 S Lucerne Blvd",
      fullAddress: "853 S Lucerne Blvd Los Angeles, CA 90005",
      price: "$2,265,500",
      beds: 2,
      baths: 2,
      sqft: 5500,
      labels: [{ text: "SALE", color: "bg-red-600" }],
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    if (!modalImage) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") setModalImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [modalImage]);

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      {!isLoading && (
        <div className="min-h-screen bg-white overflow-x-hidden">
          <Navbar />

          {/* Hero Section - Responsive */}
          <section
            className="relative h-screen bg-cover bg-center bg-no-repeat hero-section"
            style={{
              backgroundImage: `url('${property.mainImage}')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 flex items-center justify-center h-full px-4">
              <div className="text-center text-white">
                <p className="text-responsive-sm uppercase tracking-wider mb-2 text-homeland-green font-medium">
                  PROPERTY DETAILS OF
                </p>
                <h1 className="text-fluid-xl font-bold tracking-wide uppercase mb-4">
                  {property.address}
                </h1>
                <p className="text-fluid-lg font-bold text-homeland-green">
                  {property.price}
                </p>
              </div>
            </div>
          </section>

          {/* Property Details Section - Responsive */}
          <section className="section-padding bg-white">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  {/* Property Main Image - Responsive slider */}
                  <div className="mb-8 relative group">
                    <img
                      src={property.gallery[currentImageIndex]}
                      alt={property.address}
                      className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-lg"
                    />
                    {/* Left Arrow - Responsive */}
                    <button
                      onClick={handlePrevImage}
                      disabled={currentImageIndex === 0}
                      aria-label="Previous image"
                      className={`absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 rounded-full shadow-md p-2 sm:p-3 z-10 transition-all duration-200 ${
                        currentImageIndex === 0
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:text-homeland-green"
                      }`}
                    >
                      <svg
                        className="w-4 h-4 sm:w-6 sm:h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    {/* Right Arrow - Responsive */}
                    <button
                      onClick={handleNextImage}
                      disabled={
                        currentImageIndex === property.gallery.length - 1
                      }
                      aria-label="Next image"
                      className={`absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 rounded-full shadow-md p-2 sm:p-3 z-10 transition-all duration-200 ${
                        currentImageIndex === property.gallery.length - 1
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:text-homeland-green"
                      }`}
                    >
                      <svg
                        className="w-4 h-4 sm:w-6 sm:h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Price and Basic Info - Responsive */}
                  <div className="bg-white mb-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6">
                      <div>
                        <h2 className="text-fluid-xl font-bold text-homeland-green mb-0">
                          {property.price}
                        </h2>
                      </div>
                      <div className="flex space-x-6 sm:space-x-12 mt-6 md:mt-0">
                        <div className="text-right">
                          <span className="block text-responsive-sm font-bold text-gray-500 uppercase tracking-widest mb-1">
                            BEDS
                          </span>
                          <span className="text-responsive-lg font-bold text-gray-900">
                            {property.beds}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="block text-responsive-sm font-bold text-gray-500 uppercase tracking-widest mb-1">
                            BATHS
                          </span>
                          <span className="text-responsive-lg font-bold text-gray-900">
                            {property.baths}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="block text-responsive-sm font-bold text-gray-500 uppercase tracking-widest mb-1">
                            SQ FT
                          </span>
                          <span className="text-responsive-lg font-bold text-gray-900">
                            {property.sqft.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <hr className="my-6 border-gray-200" />
                    <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-4">
                      <div className="py-4">
                        <span className="block text-responsive-sm font-bold text-gray-500 uppercase tracking-widest mb-1">
                          HOME TYPE
                        </span>
                        <span className="block text-responsive-base font-semibold text-gray-700">
                          {property.homeType}
                        </span>
                      </div>
                      <div className="py-4">
                        <span className="block text-responsive-sm font-bold text-gray-500 uppercase tracking-widest mb-1">
                          YEAR BUILT
                        </span>
                        <span className="block text-responsive-base font-semibold text-gray-700">
                          {property.yearBuilt}
                        </span>
                      </div>
                      <div className="py-4">
                        <span className="block text-responsive-sm font-bold text-gray-500 uppercase tracking-widest mb-1">
                          PRICE/SQFT
                        </span>
                        <span className="block text-responsive-base font-semibold text-gray-700">
                          {property.pricePerSqft}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* More Info & Gallery Section - Responsive */}
                  <div className="border border-gray-200 p-4 sm:p-6 my-8 rounded-lg">
                    {/* More Info Section */}
                    <div className="mb-8">
                      <h3 className="text-responsive-xl font-bold text-gray-900 mb-6">
                        More Info
                      </h3>
                      <div className="space-y-4 text-gray-600 leading-relaxed text-responsive-base">
                        <p>{property.description}</p>
                        <p>{property.additionalInfo}</p>
                        <p>{property.moreInfo}</p>
                      </div>
                    </div>
                    {/* Gallery Section - Responsive grid */}
                    <div className="mb-0">
                      <h3 className="text-responsive-xl font-bold text-gray-900 mb-6">
                        Gallery
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 w-full">
                        {property.gallery.slice(0, 9).map((image, index) => (
                          <div
                            key={index}
                            className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
                            onClick={() => setModalImage(image)}
                          >
                            <img
                              src={image}
                              alt={`Gallery ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            {/* Zoom Icon Overlay - Responsive */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-200">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-white opacity-0 group-hover:opacity-100 transition duration-200"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <circle
                                  cx="11"
                                  cy="11"
                                  r="7"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  fill="none"
                                />
                                <line
                                  x1="16.5"
                                  y1="16.5"
                                  x2="21"
                                  y2="21"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Modal for enlarged image - Responsive */}
                      {modalImage && (
                        <div
                          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
                          onClick={() => setModalImage(null)}
                          style={{ cursor: "zoom-out" }}
                        >
                          <div className="absolute top-4 right-4 z-50">
                            <button
                              className="text-white bg-black bg-opacity-60 rounded-full p-2 hover:bg-opacity-90 transition"
                              onClick={(e) => {
                                e.stopPropagation();
                                setModalImage(null);
                              }}
                              aria-label="Close"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 sm:h-6 sm:w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                          <img
                            src={modalImage}
                            alt="Enlarged gallery"
                            className="max-w-full w-full h-auto max-h-[90vh] z-40 rounded shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                            style={{ cursor: "auto" }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Sidebar - Responsive */}
                <div className="lg:col-span-1">
                  {/* Contact Agent Form - Responsive */}
                  <div className="p-4 sm:p-6 mb-8 rounded-lg">
                    <h3 className="text-responsive-lg font-bold text-gray-900 mb-6 uppercase tracking-wide">
                      CONTACT AGENT
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        className="input-responsive"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className="input-responsive"
                        required
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={contactForm.phone}
                        onChange={handleInputChange}
                        placeholder="Phone"
                        className="input-responsive"
                        required
                      />
                      <textarea
                        name="message"
                        value={contactForm.message}
                        onChange={handleInputChange}
                        placeholder="Message"
                        rows="4"
                        className="input-responsive resize-vertical"
                        required
                      ></textarea>
                      <button
                        type="submit"
                        className="btn-primary w-full uppercase tracking-wide"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>

                  {/* Paragraph Section - Responsive */}
                  <div className="bg-white p-4 sm:p-6 border border-gray-200 rounded-lg">
                    <h3 className="text-responsive-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                      PARAGRAPH
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-responsive-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Veli eu malesuada libero sit amet. Mauris placerat
                      eleifend lorem sed vestibulum. Mauris neque risus, rutrum
                      at lorem in, blandit congue enim. Pellentesque habitant
                      morbi tristique senectus et netus et malesuada fames ac
                      turpis egestas. Vestibulum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Properties Section - Responsive */}
          <section className="section-padding bg-gray-50">
            <div className="container-custom">
              <h2 className="text-responsive-xl font-bold text-gray-900 mb-8 sm:mb-12 text-left uppercase tracking-wide">
                RELATED PROPERTIES
              </h2>

              <div className="grid-responsive">
                {relatedProperties.map((relatedProperty) => (
                  <div
                    key={relatedProperty.id}
                    className="bg-white overflow-hidden card-shadow animate-responsive"
                  >
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={relatedProperty.image}
                        alt={relatedProperty.address}
                        className="img-responsive w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
                        onClick={() => window.location.reload()}
                      />

                      {/* Labels - Responsive */}
                      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex flex-col space-y-1 sm:space-y-2">
                        {relatedProperty.labels.map((label, index) => (
                          <span
                            key={index}
                            className={`${label.color} text-white text-xs font-bold px-2 sm:px-3 py-1 uppercase tracking-wide rounded`}
                          >
                            {label.text}
                          </span>
                        ))}
                      </div>

                      {/* Favorite Button - Responsive */}
                      <button className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-red-500 transition-colors duration-300"
                          fill="none"
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

                    <div className="p-4 sm:p-6">
                      <h3 className="text-responsive-lg font-bold text-gray-900 mb-2">
                        {relatedProperty.address}
                      </h3>

                      <div className="flex items-center text-gray-600 text-responsive-sm mb-4">
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="line-clamp-1">
                          {relatedProperty.fullAddress}
                        </span>
                      </div>

                      <div className="text-responsive-xl font-bold text-homeland-green mb-4">
                        {relatedProperty.price}
                      </div>

                      <hr className="mb-4" />

                      <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center text-responsive-sm">
                        <div>
                          <div className="font-bold text-gray-900 uppercase tracking-wide">
                            Beds
                          </div>
                          <div className="text-responsive-base font-semibold text-gray-700">
                            {relatedProperty.beds}
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 uppercase tracking-wide">
                            Baths
                          </div>
                          <div className="text-responsive-base font-semibold text-gray-700">
                            {relatedProperty.baths}
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 uppercase tracking-wide">
                            SqFt
                          </div>
                          <div className="text-responsive-base font-semibold text-gray-700">
                            {relatedProperty.sqft.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Footer />
        </div>
      )}
    </>
  );
};

export default PropertyDetailPage;
