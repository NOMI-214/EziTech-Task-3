import React, { useState, useEffect } from "react";
import PropertyGrid from "./PropertyGrid";
import PropertyList from "./PropertyList";
import PropertyFilter from "./PropertyFilter";
import WhyChooseUs from "./WhyChooseUs";
import RecentBlog from "./RecentBlog";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import Agents from "./Agents";
import LoadingScreen from "./LoadingScreen";

const PropertyView = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [isLoading, setIsLoading] = useState(false);

  const handleViewChange = (newViewMode) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setViewMode(newViewMode);
    }, 2000);
  };

  useEffect(() => {
    const handleResetToGrid = () => {
      setViewMode("grid");
    };

    const handleSwitchToList = () => {
      setViewMode("list");
    };

    window.addEventListener("resetToGridView", handleResetToGrid);
    window.addEventListener("switchToListView", handleSwitchToList);

    return () => {
      window.removeEventListener("resetToGridView", handleResetToGrid);
      window.removeEventListener("switchToListView", handleSwitchToList);
    };
  }, []);

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <PropertyFilter onViewChange={handleViewChange} currentView={viewMode} />
      {viewMode === "grid" ? (
        <>
          <PropertyGrid />
          <WhyChooseUs />
          <RecentBlog />
          <Agents />
        </>
      ) : (
        <>
          <PropertyList />
          <WhyChooseUs />
          <RecentBlog />
          <FrequentlyAskedQuestions />
        </>
      )}
    </>
  );
};

export default PropertyView;
