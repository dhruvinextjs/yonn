"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  "home",
  "features",
  "screenshot",
  "contact",
  "privacy-fr",
  "terms-fr",
  "/",
];

export default function HeaderFR() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  /* header bg change */
  // useEffect(() => {
  //   const onScroll = () => setScrolled(window.scrollY > 50);
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // ✅ INITIAL CHECK — reload par bhi correct state
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/privacy-fr") {
      setActiveSection("privacy-fr");
    } else if (pathname === "/terms-fr") {
      setActiveSection("terms-fr");
    } else if (pathname === "/FR") {
      setActiveSection("FR");
    } else if (pathname === "/") {
      setActiveSection("home");
    }
  }, [pathname]);

  /* scroll spy */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `nav-link transition-colors duration-300 ${
      scrolled ? "text-[rgba(55,55,55,0.8)]" : "text-white"
    } ${activeSection === id ? "active" : ""}`;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/FR">
          <Image
            src={scrolled ? "/images/dark_logo.svg" : "/images/white_logo.svg"}
            alt="Logo"
            width={165}
            height={40}
          />
        </Link>

        {/* Desktop Navigation → ONLY lg */}
        <nav className="hidden lg:flex items-center space-x-6 uppercase text-[15px] font-light">
          <Link href="/FR" className={linkClass("home")}>
            Accueil
          </Link>
          <Link href="#features" className={linkClass("features")}>
            Fonctionnalités
          </Link>
          <Link href="#screenshot" className={linkClass("screenshot")}>
            Captures d&apos;écran
          </Link>
          <Link href="#contact" className={linkClass("contact")}>
            Contact
          </Link>
          <Link href="/privacy-fr" className={linkClass("privacy-fr")}>
            Politique
          </Link>
          <Link href="/terms-fr" className={linkClass("terms-fr")}>
            Mentions légales
          </Link>
          <Link href="/" className={linkClass("/")}>
            English
          </Link>
        </nav>

        {/* Hamburger → md & iPad */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="lg:hidden focus:outline-none"
        >
          <svg
            className={`w-6 h-6 transition-colors ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
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

      {/* Mobile / iPad Menu — smooth animation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white shadow-md
          ${menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="flex flex-col space-y-4 p-6 uppercase text-gray-700">
          <Link href="#home" onClick={() => setMenuOpen(false)}>
            Accueil
          </Link>
          <Link href="#features" onClick={() => setMenuOpen(false)}>
            Fonctionnalités
          </Link>
          <Link href="#screenshot" onClick={() => setMenuOpen(false)}>
            Captures d&apos;écran
          </Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link href="/privacy-fr" onClick={() => setMenuOpen(false)}>
            Politique
          </Link>
          <Link href="/terms-fr" onClick={() => setMenuOpen(false)}>
            Mentions légales
          </Link>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            English
          </Link>
        </nav>
      </div>
    </header>
  );
}
