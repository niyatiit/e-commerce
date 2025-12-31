import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSearchSharp, IoMenu, IoClose } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <nav className="bg-white shadow-md sticky top-0 w-full md:w-full w-[70%] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl text-gray-900">FOREVER.</h1>
            </Link>
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-black underline underline-offset-4"
                    : "text-gray-700"
                }`
              }
            >
              HOME
            </NavLink>

            <NavLink
              to="/collection"
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-black underline underline-offset-4"
                    : "text-gray-700"
                }`
              }
            >
              COLLECTION
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-black underline underline-offset-4"
                    : "text-gray-700"
                }`
              }
            >
              ABOUT
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-black underline underline-offset-4"
                    : "text-gray-700"
                }`
              }
            >
              CONTACT
            </NavLink>
          </div>

          {/* Icons + Mobile Menu Button */}
          <div className="flex items-center space-x-5 relative top-1  ">
            {/* Search */}
            <button onClick={() => setShowSearch(true)}>
              <IoSearchSharp size={22} className="hover:cursor-pointer" />
            </button>

            {/* User */}

            {/* User with dropdown */}
            <div className="relative group">
              <button>
                <FaRegUser size={22} className="hover:cursor-pointer" />
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg hidden group-hover:block z-50">
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Profile
                </Link>
                <Link
                  to="/orders"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Orders
                </Link>
                <Link
                  to="/logout"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </div>
            </div>

            {/* Cart */}
            <div className="relative">
              <Link to="/Cart">
                <FaCartArrowDown size={22} className="hover:cursor-pointer" />
              </Link>
              <span className="absolute -top-2 -right-2 bg-black text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden ">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <IoClose size={25} className="cursor-pointer" />
                ) : (
                  <IoMenu size={25} className="cursor-pointer" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-md">
          <Link
            to="/"
            className="block text-gray-700 hover:text-gray-900 font-bold"
          >
            HOME
          </Link>
          <Link
            to="/collection"
            className="block text-gray-700 hover:text-gray-900 font-bold"
          >
            COLLECTION
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 hover:text-gray-900 font-bold"
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-gray-900 font-bold"
          >
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
