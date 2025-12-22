"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={scrolled ? "/images/logo-dark.png" : "/images/logo-light.png"}
            alt="Logo"
            width={150}
            height={40}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <a href="#home" className="hover:text-orange-500 transition">
            Home
          </a>
          <a href="#about" className="hover:text-orange-500 transition">
            About
          </a>
          <a href="#services" className="hover:text-orange-500 transition">
            Services
          </a>
          <a href="#contact" className="hover:text-orange-500 transition">
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 p-6 text-gray-700">
            <a href="#home" className="hover:text-orange-500 transition">
              Home
            </a>
            <a href="#about" className="hover:text-orange-500 transition">
              About
            </a>
            <a href="#services" className="hover:text-orange-500 transition">
              Services
            </a>
            <a href="#contact" className="hover:text-orange-500 transition">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
