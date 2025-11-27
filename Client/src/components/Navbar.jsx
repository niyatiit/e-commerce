import React, { useState } from "react";
import { IoSearchSharp, IoMenu, IoClose } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold font-serif text-gray-900">
              FOREVER.
            </h1>
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex space-x-8 font-serif">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-bold">
              HOME
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 font-bold"
            >
              COLLECTION
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-bold">
              ABOUT
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 font-bold"
            >
              CONTACT
            </a>
          </div>

          {/* Icons + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button>
              <IoSearchSharp size={22} />
            </button>

            {/* User */}
            <button>
              <FaRegUser size={22} />
            </button>

            {/* Cart */}
            <div className="relative">
              <button>
                <FaCartArrowDown size={22} />
              </button>
              <span className="absolute -top-2 -right-2 bg-black text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                10
              </span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <IoClose size={25} /> : <IoMenu size={25} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-md">
          <a href="#" className="block text-gray-700 hover:text-gray-900 font-bold">
            HOME
          </a>
          <a href="#" className="block text-gray-700 hover:text-gray-900 font-bold">
            COLLECTION
          </a>
          <a href="#" className="block text-gray-700 hover:text-gray-900 font-bold">
            ABOUT
          </a>
          <a href="#" className="block text-gray-700 hover:text-gray-900 font-bold">
            CONTACT
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
