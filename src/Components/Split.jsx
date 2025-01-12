import React from "react";
import { Button, Typography, Box } from "@mui/material";

function Split() {
  return (
    <Box className="flex h-screen">
      {/* Left Panel */}
      <Box
        className="w-1/2 h-full relative overflow-hidden flex flex-col items-center justify-center group"
        sx={{
          position: "relative",
          "&:hover .image": { transform: "scale(1.1)" },
          transition: "all 0.5s ease",
        }}
      >
        {/* Background Image */}
        <img
          src="public\\woman-2979961_1280.jpg"
          alt="Left Panel"
          className="absolute inset-0 w-full h-full object-cover image transition-transform duration-500"
        />
        {/* Overlay */}
        <Box
          className="absolute inset-0"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        ></Box>
        {/* Content */}
        <Box className="relative text-center px-6">
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontWeight: "bold",
              mb: 2,
              fontSize: "2.5rem",
            }}
          >
            New Arrival
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(173, 216, 230, 0.9)",
              fontWeight: "600",
              mb: 3,
              fontSize: "1.25rem",
            }}
          >
            Discover More
          </Typography>
          {/* Removed the Learn More button and text */}
          <Typography
            variant="body1"
            sx={{
              color: "white",
              fontWeight: "300",
              fontSize: "1rem",
            }}
          >
            New Exclusive Collection in Women's Wear
          </Typography>
        </Box>
      </Box>

      {/* Right Panel */}
      <Box
        className="w-1/2 h-full relative overflow-hidden flex flex-col items-center justify-center group"
        sx={{
          position: "relative",
          "&:hover .image": { transform: "scale(1.1)" },
          transition: "all 0.5s ease",
        }}
      >
        {/* Background Image */}
        <img
          src="public\\fashion-1844888_1280 (1).jpg"
          alt="Right Panel"
          className="absolute inset-0 w-full h-full object-cover image transition-transform duration-500"
        />
        {/* Overlay */}
        <Box
          className="absolute inset-0"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        ></Box>
        {/* Content */}
        <Box className="relative text-center px-6">
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontWeight: "bold",
              mb: 2,
              fontSize: "2.5rem",
            }}
          >
            Mens Clothing and Footwear
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(173, 216, 230, 0.9)",
              fontWeight: "600",
              mb: 3,
              fontSize: "1.25rem",
            }}
          >
            Discover More
          </Typography>
          {/* Removed the Learn More button and text */}
          <Typography
            variant="body1"
            sx={{
              color: "white",
              fontWeight: "300",
              fontSize: "1rem",
            }}
          >
            New Men Arrivals Here
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Split;
