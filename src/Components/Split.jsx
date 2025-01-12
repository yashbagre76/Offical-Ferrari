import React from "react";

function Split() {
  return (
    <div className="flex h-screen">
      {/* Left Panel */}
      <div className="w-1/2 h-full relative overflow-hidden group flex flex-col items-center justify-center">
        {/* Background Image */}
        <img
          src="public\woman-2979961_1280.jpg"
          alt="Left Panel"
          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {/* Content */}
        <div className="relative text-center px-6">
          <h1 className="text-white text-4xl font-bold mb-4">New Arrival</h1>
          <h3 className="text-blue-100 font-semibold text-lg mb-6">
            Discover More
          </h3>
          <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-200 transition-colors duration-300 mb-6">
            <span className="text-black font-semibold">Go</span>
          </button>
          <h2 className="text-white text-lg font-light">
            New Exclusive Collection in Women's Wear
          </h2>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-1/2 h-full relative overflow-hidden flex flex-col items-center justify-center group">
        {/* Background Image */}
        <img
          src="\public\fashion-1844888_1280 (1).jpg"
          alt="Right Panel"
          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {/* Content */}
        <div className="relative text-center px-6">
          <h1 className="text-white text-4xl font-bold mb-4">
            Mens Clothing and footware
          </h1>
          <h2 className="text-blue-100 font-semibold text-lg mb-6">
            Discover More
          </h2>
          <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-200 transition-colors duration-300 mb-6">
            <span className="text-black font-semibold">Go</span>
          </button>
          <h1 className="text-white text-xl mt-4 font-light">
            New Men Arrivals Here
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Split;
