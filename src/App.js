import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import PropertyView from "./components/PropertyView";
import Footer from "./components/Footer";
import BuyPage from "./pages/BuyPage";
import RentPage from "./pages/RentPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";

const HomePage = () => (
  <div className="App overflow-x-hidden">
    <Navbar />
    <Hero />
    <SearchBar />
    <PropertyView />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/property/:id" element={<PropertyDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
