import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPropertiesDropdownOpen, setIsPropertiesDropdownOpen] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".navbar-container")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleLoadingClick = (path) => {
    setIsLoading(true);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      setIsLoading(false);
      navigate(path);
      if (path === "/") {
        setTimeout(() => {
          const event = new CustomEvent("resetToGridView");
          window.dispatchEvent(event);

          const heroSection = document.querySelector(".hero-section");
          if (heroSection) {
            heroSection.scrollIntoView({ behavior: "auto" });
          }
        }, 100);
      }
    }, 2000);
  };

  const navLinks = [
    { name: "Home", href: "/", path: "/" },
    { name: "Buy", href: "/buy", path: "/buy" },
    { name: "Rent", href: "/rent", path: "/rent" },
    {
      name: "Properties",
      href: "#properties",
      hasDropdown: true,
      dropdownItems: [
        { name: "Condo", href: "#condo" },
        { name: "Property Land", href: "#property-land" },
        { name: "Commercial Building", href: "#commercial" },
        {
          name: "Sub Menu",
          hasSubmenu: true,
          submenuItems: [
            { name: "Menu One", href: "#menu-one" },
            { name: "Menu Two", href: "#menu-two" },
            { name: "Menu Three", href: "#menu-three" },
          ],
        },
      ],
    },
    { name: "Blog", href: "/blog", path: "/blog" },
    { name: "About", href: "/about", path: "/about" },
    { name: "Contact", href: "/contact", path: "/contact" },
  ];

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <nav
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg text-homeland-dark"
            : "bg-transparent text-white"
        }`}
      >
        <div className="container-custom">
          <div className="nav-responsive navbar-container">
            {/* Logo - Responsive */}
            <div className="flex-shrink-0">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleLoadingClick("/");
                }}
                className={`text-2xl sm:text-3xl font-bold tracking-wide cursor-pointer transition-colors duration-300 ${
                  isScrolled
                    ? "text-homeland-dark hover:text-homeland-green"
                    : "text-white hover:text-homeland-green"
                }`}
              >
                Homeland
              </a>
            </div>

            {/* Desktop Navigation - Responsive */}
            <div className="hidden lg:block">
              <div className="flex items-baseline space-x-4 xl:space-x-8">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative group">
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (
                          [
                            "Home",
                            "Buy",
                            "Rent",
                            "Blog",
                            "About",
                            "Contact",
                          ].includes(link.name)
                        ) {
                          e.preventDefault();
                          handleLoadingClick(link.path);
                        }
                      }}
                      className={`hover:text-homeland-green px-2 py-2 text-responsive-sm font-medium transition-colors duration-300 uppercase tracking-wide ${
                        isScrolled ? "text-homeland-dark" : "text-white"
                      }`}
                      onMouseEnter={() =>
                        link.hasDropdown && setIsPropertiesDropdownOpen(true)
                      }
                      onMouseLeave={() =>
                        link.hasDropdown && setIsPropertiesDropdownOpen(false)
                      }
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <svg
                          className="inline-block w-3 h-3 sm:w-4 sm:h-4 ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </a>

                    {/* Dropdown Menu - Responsive */}
                    {link.hasDropdown && (
                      <div
                        className={`absolute left-0 mt-2 w-48 sm:w-56 bg-white shadow-xl py-2 z-50 rounded-lg ${
                          isPropertiesDropdownOpen ? "block" : "hidden"
                        }`}
                        onMouseEnter={() => setIsPropertiesDropdownOpen(true)}
                        onMouseLeave={() => setIsPropertiesDropdownOpen(false)}
                      >
                        {link.dropdownItems.map((item) => (
                          <div key={item.name} className="relative group/sub">
                            <a
                              href={item.href}
                              className="block px-4 sm:px-6 py-2 sm:py-3 text-responsive-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-medium"
                            >
                              {item.name}
                              {item.hasSubmenu && (
                                <svg
                                  className="inline-block w-3 h-3 sm:w-4 sm:h-4 ml-1 float-right"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </a>

                            {/* Submenu - Responsive */}
                            {item.hasSubmenu && (
                              <div className="absolute left-full top-0 w-48 sm:w-56 bg-white shadow-xl py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 rounded-lg">
                                {item.submenuItems.map((subItem) => (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-4 sm:px-6 py-2 sm:py-3 text-responsive-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-medium"
                                  >
                                    {subItem.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile menu button - Responsive */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`focus:outline-none transition-colors duration-300 ${
                  isScrolled
                    ? "text-homeland-dark hover:text-homeland-green"
                    : "text-white hover:text-homeland-green"
                }`}
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Responsive */}
          <div
            className={`lg:hidden transition-all duration-300 overflow-hidden ${
              isMobileMenuOpen
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white shadow-lg rounded-b-lg">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (
                        [
                          "Home",
                          "Buy",
                          "Rent",
                          "Blog",
                          "About",
                          "Contact",
                        ].includes(link.name)
                      ) {
                        e.preventDefault();
                        handleLoadingClick(link.path);
                      }
                    }}
                    className="text-homeland-dark hover:text-homeland-green block px-3 py-3 text-responsive-base font-medium transition-colors duration-300 border-b border-gray-100 last:border-b-0"
                  >
                    {link.name}
                  </a>

                  {/* Mobile dropdown for Properties */}
                  {link.hasDropdown && (
                    <div className="pl-4 space-y-1">
                      {link.dropdownItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-gray-600 hover:text-homeland-green block px-3 py-2 text-responsive-sm font-medium transition-colors duration-300"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
