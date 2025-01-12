import React from "react";

function About() {
  return (
    <div className="relative w-full h-screen">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="public\Untitled video - Made with Clipchamp (1).mp4" // Ensure this matches the file in the public folder
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Text Content */}
      <div className="relative text-white px-6 sm:px-12 md:px-20 lg:px-32 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">Achievements</h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          <span className="font-semibold text-red-600">Ferrari S.p.A.</span>{" "}
          (/fəˈrɑːri/, Italian: [ferˈraːri]) is an Italian luxury sports car
          manufacturer based in Maranello. Founded in 1939 by
          <span className="font-semibold text-red-600">Enzo Ferrari</span>{" "}
          (1898–1988), the company built its first car in 1940, adopted its
          current name in 1945, and began to produce its current line of road
          cars in 1947.
          <br />
          <br />
          <span className="text-red-500 font-bold">
            Ferrari became a public company in 1960
          </span>
          , and from 1963 to 2014 it was a subsidiary of Fiat S.p.A. It was spun
          off from Fiat's successor entity, Fiat Chrysler Automobiles, in 2016.
          The company currently offers a large model range, including supercars,
          grand tourers, and one SUV.
          <br />
          <br />
          <span className="text-red-600 font-semibold">Scuderia Ferrari</span>,
          the company's racing team, is the oldest and most successful in
          Formula One. Ferrari fans, known as{" "}
          <span className="italic">tifosi</span>, are famous for their loyalty
          and passion. Ferrari remains one of the world's strongest brands,
          renowned for its racing heritage, luxury, and exclusivity.
          <br />
          <br />
          As of May 2023, Ferrari is one of the largest car manufacturers by
          market capitalization, valued at approximately{" "}
          <span className="font-bold text-red-500">US$85.5 billion</span>.
        </p>
      </div>
    </div>
  );
}

export default About;
