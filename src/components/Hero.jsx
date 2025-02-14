import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Pic from "./../assets/Pic1.png";

const Hero = () => {
  return (
    <header id="home" className="relative h-screen bg-black text-white">
      {/* Three.js Canvas for Stars */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars
            radius={200} // Radius of the sphere
            depth={50}   // Depth of field
            count={5000} // Number of stars
            factor={10}   // Star size
            saturation={100}
            fade
          />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-8 sm:px-10 md:px-20">
        {/* Text Section */}
        <div className="text-center lg:text-left flex flex-col items-start space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light">
            Hey, I am
          </h1>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold">
            Samyog KC
          </h2>
          <h3 className="text-yellow-400 text-3xl sm:text-4xl md:text-5xl font-light">
            Web Designer | Web Developer
          </h3>
        </div>

        {/* Image Section */}
        <div className="mt-8 lg:mt-0 max-w-[60%] sm:max-w-[50%] md:max-w-[40%] lg:max-w-[30%]">
          <img
            src={Pic}
            alt="Samyog KC"
            className="rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
