"use client";
import React, { useState, useEffect } from "react";
import { MapPinCheckInsideIcon, Search, User, Menu, X } from "lucide-react";
import { damion } from "../../../app/fonts";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-50 fixed top-0 left-0 transition-all duration-700 ease-in-out ${
        isScrolled
          ? "bg-[var(--background)] shadow-xl text-[var(--foreground)] rounded-b-3xl"
          : "text-[var(--background)]"
      }`}
    >
      <div className="flex w-full justify-between items-center p-4 md:p-6">
        {/* Logo */}
        <h1 className={`text-2xl font-bold ${damion.className}`}>Boss Woods</h1>

        {/* Address - hidden on small screens */}
        <span className="hidden sm:flex items-center gap-2 text-sm">
          <MapPinCheckInsideIcon size={16} />
          Falomo Square, Ikoyi
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center space-x-4">
            <li>
              <Search size={20} />
            </li>
            <li>|</li>
            <li>
              <User size={20} />
            </li>
            <li>
              <a href="#contact">Login</a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop secondary nav */}
      <nav className="hidden md:flex justify-center pb-4">
        <ul className="flex uppercase font-bold items-center space-x-4">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Mobile nav dropdown */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[var(--background)] text-[var(--foreground)] px-6 pb-4">
          <ul className="flex flex-col gap-4 font-semibold uppercase text-sm">
            <li>
              <a href="#home" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </li>
            <li className="flex items-center gap-2 mt-2">
              <Search size={18} />
              <User size={18} />
              <a href="#contact">Login</a>
            </li>
            <li className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPinCheckInsideIcon size={16} />
              Falomo Square, Ikoyi
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
