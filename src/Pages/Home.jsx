import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Split from "../Components/Split";
import CarInfo from "../Components/CarInfo";
import Footer from "../Components/Footer";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 3000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preloader */}
      {isLoading && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          {/* Ferrari Logo */}
          <div className="flex flex-col items-center">
            <img
              src="\public\logo.png" // Replace with your actual logo path
              alt="Ferrari Logo"
              className="w-32 h-32 animate-pulse" // Logo with a pulsing animation
            />
            {/* Skeleton Loader */}
            <div className="w-24 h-4 mt-4 bg-gray-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      )}

      {/* Main Content */}
      {!isLoading && (
        <>
          <Hero />
          <Navbar />
          <About />
          <Split />
          <CarInfo />
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
