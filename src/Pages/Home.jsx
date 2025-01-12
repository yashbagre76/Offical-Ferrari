import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Split from "../Components/split";
import CarInfo from "../Components/CarInfo";

function Home() {
  return (
    <div className="relative h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-full">
        <Hero />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-sans opacity-80">
          Start Your Engine
        </h1>
        <p className="text-lg md:text-2xl mb-6 font-sans opacity-80">
          Experience the thrill of speed and luxury like never before.
        </p>
        <button className="bg-transparent border-2 border-red-600 px-6 py-3 text-lg font-semibold rounded-full hover:bg-red-600 hover:text-white transition-all duration-300">
          Learn More
        </button>
      </div>
      <About />
      <Split />
      <CarInfo />
    </div>
  );
}

export default Home;
