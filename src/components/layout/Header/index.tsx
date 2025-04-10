"use client";
import React, { useState, useEffect } from "react";
import { MapPinCheckInsideIcon, Search, User } from "lucide-react";
import { damion } from "../../../app/fonts";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`w-full z-20 fixed pb-5 top-0 left-0 transition-all duration-700 ease-in-out
        ${
          isScrolled
            ? "bg-[var(--background)] shadow-xl text-[var(--foreground)] rounded-b-3xl"
            : "text-[var(--background)]"
        }`}
    >
      <div className="flex w-full justify-between p-5 md:p-7">
        <div className="flex items-center">
          <h1 className={`text-2xl font-bold ${damion.className}`}>
            Boss Woods
          </h1>
        </div>
        <span className="flex items-center gap-3">
          <MapPinCheckInsideIcon size={14} /> Falomo Square, Ikoyi
        </span>
        <nav className="flex items-center">
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
      </div>
      <nav className="w-full flex justify-center">
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
    </header>
  );
};

export default Header;
