import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSearchSharp, IoMenu, IoClose } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const {  getCartCount, navigate, token, setToken, setCartItems } =
    useContext(ShopContext);

  const isLoggedIn = !!token;

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    setUserDropdownOpen(false);
    navigate("/login");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl text-gray-900">FOREVER.</h1>
            </Link>
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex space-x-8">
            {["/", "/collection", "/about", "/contact"].map((path, i) => {
              const names = ["HOME", "COLLECTION", "ABOUT", "CONTACT"];
              return (
                <NavLink
                  key={i}
                  to={path}
                  className={({ isActive }) =>
                    `font-bold ${
                      isActive
                        ? "text-black underline underline-offset-4"
                        : "text-gray-700"
                    }`
                  }
                >
                  {names[i]}
                </NavLink>
              );
            })}
          </div>

          {/* Icons + Mobile Menu */}
          <div className="flex items-center space-x-5 relative top-1">
            {/* Search */}
            <button onClick={() => setShowSearch(true)}>
              <IoSearchSharp size={22} className="hover:cursor-pointer" />
            </button>

            {/* User Dropdown */}
            {isLoggedIn && (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="focus:outline-none"
                >
                  <FaRegUser size={22} className="hover:cursor-pointer" />
                </button>

                <div
                  className={`absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg
                  transform transition-all duration-300 ease-out
                  ${
                    userDropdownOpen
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <Link
                    to="/login"
                    onClick={() => setUserDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/orders"
                    onClick={() => setUserDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Orders
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}

            {/* Cart */}
            <div className="relative">
              <Link to="/cart">
                <FaCartArrowDown size={22} className="hover:cursor-pointer" />
              </Link>
              <span className="absolute -top-2 -right-2 bg-black text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
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
          <Link to="/" className="block text-gray-700 hover:text-gray-900 font-bold">
            HOME
          </Link>
          <Link
            to="/collection"
            className="block text-gray-700 hover:text-gray-900 font-bold"
          >
            COLLECTION
          </Link>
          <Link to="/about" className="block text-gray-700 hover:text-gray-900 font-bold">
            ABOUT
          </Link>
          <Link to="/contact" className="block text-gray-700 hover:text-gray-900 font-bold">
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
