import React from "react";
import FerrariLogo from "/public/logo.png";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent text-white py-6 z-30">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo and Navigation Section */}
        <div className="flex items-center space-x-8 bg-transparent w-full justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4 bg-transparent">
            <img
              src={FerrariLogo}
              alt="Ferrari Logo"
              className="w-15 h-15 bg-transparent"
            />
          </div>

          {/* Navigation Section */}
          <nav>
            <ul className="flex space-x-40 p-9">
              <li>
                <a
                  href="#home"
                  className="flex text-lg font-medium hover:text-gray-200 transition-all duration-300 ease-in-out"
                >
                  Racing
                </a>
              </li>
              <li>
                <a
                  href="#models"
                  className="text-lg font-medium hover:text-gray-200 transition-all duration-300 ease-in-out"
                >
                  Sport Cars
                </a>
              </li>
              <li>
                <a
                  href="#history"
                  className="text-lg font-medium hover:text-gray-200 transition-all duration-300 ease-in-out"
                >
                  Collection
                </a>
              </li>
              <li>
                <a
                  href="#shop"
                  className="text-lg font-medium hover:text-gray-200 transition-all duration-300 ease-in-out"
                >
                  Experiences
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-lg font-medium hover:text-gray-200 transition-all duration-300 ease-in-out"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-lg font-medium hover:text-gray-200 transition-all duration-300 ease-in-out"
                >
                  Search
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
