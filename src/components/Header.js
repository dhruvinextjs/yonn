"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white shadow-md translate-y-0"
          : "translate-y-2 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={scrolled ? "/images/dark_logo.svg" : "/images/white_logo.svg"}
            alt="Logo"
            width={165}
            height={40}
          />
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex space-x-8 uppercase transition-colors text-[15px] font-light duration-300 ${
            scrolled ? "text-[rgba(55,55,55,0.8)]" : "text-white"
          }`}
        >
          <Link href="#home" className="nav-link active">Home</Link>
          <Link href="#about" className="nav-link">Features</Link>
          <Link href="#services" className="nav-link">Screenshot</Link>
          <Link href="#contact" className="nav-link">Contact</Link>
          <Link href="#contact" className="nav-link">Policy</Link>
          <Link href="#contact" className="nav-link">Terms</Link>
          <Link href="#contact" className="nav-link">Francais</Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
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

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen
              ? "max-h-[500px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          } bg-white shadow-md`}
        >
          <nav className="flex flex-col space-y-4 p-6 text-gray-700 uppercase">
            <Link href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="#about" onClick={() => setMenuOpen(false)}>
              Features
            </Link>
            <Link href="#services" onClick={() => setMenuOpen(false)}>
              Screenshot
            </Link>
            <Link href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <Link href="#contact" onClick={() => setMenuOpen(false)}>
              Policy
            </Link>
            <Link href="#contact" onClick={() => setMenuOpen(false)}>
              Terms
            </Link>
            <Link href="#contact" onClick={() => setMenuOpen(false)}>
              Francais
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
