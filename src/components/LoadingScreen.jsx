import React from "react";

const LoadingScreen = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-75 flex items-center justify-center">
      <div className="text-center">
        {/* Spinner */}
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-homeland-green mb-4"></div>

        {/* Loading Text */}
        <div className="text-white text-xl font-medium">Loading...</div>

        {/* Homeland Logo */}
        <div className="text-homeland-green text-2xl font-bold mt-4">
          Homeland
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
