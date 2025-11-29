import React from "react";

export const Title = ({ text1, text2 }) => {
  return (
    <div className="flex justify-center items-center mt-10 mb-6 gap-4">
      {/* LINE BEFORE */}
      <div className="w-16 h-[2px] bg-gray-400"></div>

      {/* TEXT */}
      <h2 className="text-3xl font-bold tracking-wide text-gray-900">
        {text1}
        <span className="ml-2 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 bg-clip-text text-transparent">
          {text2}
        </span>
      </h2>

      <div className="w-16 h-[2px] bg-gray-400"></div>
    </div>
  );
};
