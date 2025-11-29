import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="w-full ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* LEFT SIDE TEXT */}
        <div className="flex flex-col justify-center px-6 py-16 md:px-10">
          <span className="text-gray-500 tracking-wide">
            ── OUR BESTSELLERS
          </span>

          <h1 className="text-5xl font-bold mt-4 mb-6">Latest Arrivals</h1>

          <button className="text-gray-800 font-semibold flex items-center gap-2 hover:underline">
            SHOP NOW <span>──</span>
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full  flex items-center justify-center h-[90vh]">
          <img
            src={assets.model_arrival}
            alt="Hero"
            className="h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
