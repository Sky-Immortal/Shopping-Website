import React, { useState, useEffect } from "react";
import images from "../images";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../Reusables/button";
import "../../../src/App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.scrollY;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className={`nav-container p-2 md:p-4 bg-white border-b border-gray-300 fixed w-full top-0 z-10 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-row justify-between items-center max-w-5xl mx-auto">
          {/* Left: Logo */}
          <div className="logo-container flex items-center">
            <img
              src={images.logo}
              alt="Logo"
              className="logo-image w-5 h-5 mr-2"
            />
            <span className="logo-text text-xl font-extrabold text-black tracking-wider" style={{ WebkitTextStroke: '0.5px black' }}>
              FASHION
            </span>
          </div>

          {/* Right: Menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black">
              {menuOpen ? <FaTimes size={1} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="/"
                  className="text-black hover:text-blue-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/new-arrivals"
                  className="text-black hover:text-blue-500 transition-colors"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="/favourites"
                  className="text-black hover:text-blue-500 transition-colors"
                >
                  Young's Favourite
                </a>
              </li>
              <li>
                <a
                  href="/discounts"
                  className="text-black hover:text-blue-500 transition-colors"
                >
                  Discounts
                </a>
              </li>
            </ul>
            <Button text="Signup" className="ml-6" />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20">
          <div className="fixed top-0 left-0 h-full w-3/4 max-w-sm bg-white shadow-lg z-30 p-6">
            <button
              onClick={toggleMenu}
              className="text-black mb-6 flex justify-end"
            >
              <FaTimes size={24} />
            </button>
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="/"
                  className="text-black hover:text-blue-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/new-arrivals"
                  className="text-black hover:text-blue-500 transition-colors"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="/favourites"
                  className="text-black hover:text-blue-500 transition-colors"
                >
                  Young's Favourite
                </a>
              </li>
              <li>
                <a
                  href="/discounts"
                  className="text-black hover:text-blue-500 transition-colors"
                >
                  Discounts
                </a>
              </li>
            </ul>
            <Button text="Signup" className="mt-6 w-full" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
