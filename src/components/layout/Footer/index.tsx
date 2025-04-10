import { damion } from "@/app/fonts";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="rounded-t-3xl bg-[#151217] text-[var(--background)] p-7 md:p-16">
      <div className="container mx-auto max-w-xl flex flex-col gap-7">
        <span
          className={`text-center mx-auto flex text-3xl items-center gap-3 w-fit ${damion.className}`}
        >
          BossWoods
        </span>
        <ul className="flex uppercase justify-center font-bold items-center space-x-4">
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
        <ul className="flex uppercase justify-center font-bold items-center space-x-4">
          <li>
            <a
              href="#home"
              className="w-10 h-10 flex bg-white rounded-full  items-center justify-center"
            >
              <FacebookIcon size={20} color="#151217" />
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
            >
              <TwitterIcon size={20} color="#151217" />
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="w-10 h-10  bg-white rounded-full flex items-center justify-center"
            >
              <InstagramIcon size={20} color="#151217" />
            </a>
          </li>
        </ul>
      </div>

      <div className="container mx-auto mt-16 max-w-7xl text-center">
        <p className="text-gray-600 text-lg">
          &copy; {new Date().getFullYear()} BossWoods Cigars. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
