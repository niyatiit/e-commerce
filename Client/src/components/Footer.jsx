import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-15">

        {/* LEFT SECTION */}
        <div>
          <h1 className="text-3xl font-bold tracking-wide">
            FOREVER<span className="text-pink-400">.</span>
          </h1>
          <p className="text-gray-500 mt-4 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* COMPANY LINKS */}
        <div>
          <h2 className="text-lg font-bold mb-4">COMPANY</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Delvary</li>
            <li>Pravacy Policy</li>
          </ul>
        </div>

        {/* CONTACT SECTION */}
        <div>
          <h2 className="text-lg font-bold mb-4">GET IN TOUCH</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="text-center text-gray-600 text-sm mt-12 border-t pt-6">
        Copyright 2024@forever.com - All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
