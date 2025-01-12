import React, { useEffect, useState } from "react";

function CarInfo() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    // Change section automatically every 3 seconds
    const interval = setInterval(() => {
      setCurrentSection((prevSection) => (prevSection + 1) % 4); // Loop through sections 0-3
    }, 3000);

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Section 1 */}
      <div
        className={`w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out transform ${
          currentSection === 0 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative w-full h-full">
          <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-gray-300 text-4xl sm:text-5xl font-serif opacity-100 transition-all duration-700 ease-in-out translate-y-0">
            Ferrari Demor F854
          </h1>
          <img
            src="public/goh-rhy-yan-f_SDCASisgs-unsplash.jpg" // Replace with your image path
            alt="Car Model 1"
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          />
          <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-6 rounded-full text-xl font-semibold hover:bg-black transition-all duration-300">
            Discover
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div
        className={`w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out transform ${
          currentSection === 1 ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative w-full h-full">
          <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-gray-300 text-4xl sm:text-5xl font-serif opacity-100 transition-all duration-700 ease-in-out translate-y-0">
            Ferrari Red Spider D332
          </h1>
          <img
            src="public/pexels-dante-juhasz-62201650-12964213.jpg" // Replace with your image path
            alt="Car Model 2"
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          />
          <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-6 rounded-full text-xl font-semibold hover:bg-black transition-all duration-300">
            Discover
          </button>
        </div>
      </div>

      {/* Section 3 */}
      <div
        className={`w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out transform ${
          currentSection === 2 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative w-full h-full">
          <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-gray-300 text-4xl sm:text-5xl font-serif opacity-100 transition-all duration-700 ease-in-out translate-y-0">
            Ferrari Black Spider ZX8333
          </h1>
          <img
            src="public/pexels-quang-huy-3436683-5126057.jpg" // Replace with your image path
            alt="Car Model 3"
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          />
          <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-6 rounded-full text-xl font-semibold hover:bg-black transition-all duration-300">
            Discover
          </button>
        </div>
      </div>

      {/* Section 4 */}
      <div
        className={`w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out transform ${
          currentSection === 3 ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative w-full h-full">
          <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-gray-300 text-4xl sm:text-5xl font-serif opacity-100 transition-all duration-700 ease-in-out translate-y-0">
            Ferrari Colbian Blue SP43
          </h1>
          <img
            src="public/pexels-mikebirdy-5759865.jpg" // Replace with your image path
            alt="Car Model 4"
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          />
          <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-6 rounded-full text-xl font-semibold hover:bg-black transition-all duration-300">
            Discover
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarInfo;
