import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import PropertyFilter from "../components/PropertyFilter";
import PropertyGrid from "../components/PropertyGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";

const BuyPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleViewChange = (newViewMode) => {
    if (newViewMode === "list") {
      // Navigate to main home page PropertyList
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/");
        // Switch to list view on home page after navigation
        setTimeout(() => {
          const event = new CustomEvent("switchToListView");
          window.dispatchEvent(event);
        }, 100);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <LoadingScreen isVisible={isLoading} />
      <Navbar />
      <Hero />
      <SearchBar />
      <PropertyFilter onViewChange={handleViewChange} currentView="grid" />
      <PropertyGrid filterType="Sale" />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default BuyPage;
