import React from "react";
import { Box, Container } from "@mui/material";

function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="public/editvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <Box
        className="absolute inset-0 bg-black bg-opacity-60"
        sx={{ zIndex: 1 }}
      ></Box>

      {/* Hero Content */}
      <Container
        className="relative z-10 text-white flex flex-col justify-center items-center h-full px-6 sm:px-12 md:px-20 lg:px-32"
        maxWidth="lg"
      >
        <Box textAlign="center">
          {/* Description */}
          <p className="text-lg sm:text-xl leading-relaxed mb-6">
            Discover the legacy of Ferrari - one of the most iconic luxury
            sports car brands in the world.
          </p>

          {/* Hero Content */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 opacity-80">
              Start Your Engine
            </h2>
            <p className="text-lg md:text-2xl mb-6 font-sans opacity-80">
              Experience the thrill of speed and luxury like never before.
            </p>
            <button className="bg-transparent border-2 border-red-600 px-6 py-3 text-lg font-semibold rounded-full hover:bg-red-600 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default Hero;
