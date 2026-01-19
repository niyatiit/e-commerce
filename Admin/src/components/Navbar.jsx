import React from "react";

const Navbar = ({ setToken }) => {
  return (
    <nav className="w-full h-16 bg-white shadow-sm flex items-center justify-between px-6 fixed">
      {/* Left Side - Logo & Admin Text */}
      <div className="gap-2">
        <h1 className="text-xl font-bold tracking-wide">
          FOREVER<span className="text-pink-500">.</span>
        </h1>
        <span className="text-xs text-gray-500 font-medium pl-2">
          ADMIN PANEL
        </span>
      </div>

      {/* Right Side - Logout Button */}
      <button onClick={()=>setToken('')} className="bg-gray-700 text-white text-sm px-4 py-1.5 rounded-full hover:bg-gray-800 transition cursor-pointer">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
