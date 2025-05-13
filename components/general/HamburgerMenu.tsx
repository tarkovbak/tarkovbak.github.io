// components/HamburgerMenu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Source_Sans_3 } from "next/font/google";

export const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

interface Props {
  links: { href: string; label: string }[];
}

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <div
        className={`sm:hidden mt-[-25px] z-50 ${
          isOpen ? "fixed" : "absolute"
        } top-16 right-7`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-[4px] p-2 transition-transform hover:scale-110 cursor-pointer"
          aria-label="Toggle Menu"
        >
          <span
            className={`w-6 h-0.5 transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5 bg-gray-500" : "bg-white"
            }`}
          />
          <span
            className={`w-6 h-0.5 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100 bg-white"
            }`}
          />
          <span
            className={`w-6 h-0.5 transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5 bg-gray-500" : "bg-white"
            }`}
          />
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 transform transition-transform duration-300 sm:hidden z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } bg-white`}
      >
        <div
          className={`flex flex-col gap-6 mt-24 p-6 text-gray-500 ${sourceSansPro.className}`}
        >
          <Link
            className="text-md font-medium link-hover-underline-collapsed"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <Link
            className="text-md font-medium link-hover-underline-collapsed"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            LISTINGS
          </Link>
          <Link
            className="text-md font-medium link-hover-underline-collapsed"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            LET'S MOVE
          </Link>
          <Link
            className="text-md font-medium link-hover-underline-collapsed"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            ABOUT US
          </Link>
        </div>
      </div>
    </>
  );
}
