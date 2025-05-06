import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(window.scrollY < lastScrollY);
      }
      setLastScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed z-50 top-0 left-0 w-full transition-all duration-300 ${
        isVisible
          ? isScrolled
            ? "bg-blue-600 shadow-lg"
            : "bg-transparent"
          : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between font-inter">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-white font-poppins whitespace-nowrap">
          Gentle Cleaning Co.
        </h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-10 text-white font-medium text-lg items-center">
          <li>
            <Link href="#services" className="hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link href="#pricing" className="hover:underline">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Call Button */}
        <a
          href="tel:7576395555"
          className="hidden md:flex items-center bg-[var(--color-primary)] text-gray-900 px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-[var(--color-darken)] transition-all"
        >
          <FaPhone className="mr-2" /> Call Us
        </a>

        {/* Mobile Call Button */}
        <a
          href="tel:7576395555"
          className="md:hidden flex items-center bg-[var(--color-primary)] text-gray-900 px-3 py-2 rounded-lg font-semibold shadow-md hover:bg-[var(--color-darken)] transition-all"
        >
          <FaPhone className="mr-2" size="1.2em" /> Call Us
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl ml-4 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-[var(--color-secondary)] bg-opacity-90 flex flex-col justify-center items-center space-y-10 text-white text-3xl font-semibold font-poppins transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-4xl z-10"
          onClick={() => setIsMenuOpen(false)}
        >
          <FaTimes />
        </button>
        <Link href="#services" onClick={() => setIsMenuOpen(false)}>
          Services
        </Link>
        <Link href="#pricing" onClick={() => setIsMenuOpen(false)}>
          Pricing
        </Link>
        <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
