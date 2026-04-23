"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useCurrentSection } from "../../hooks/useSection";
import { useDarkMode } from "../../hooks/useDarkMode";

const navLinks = [
  { href: "#x-series", label: "X Series" },
  { href: "#v-series", label: "V Series" },
  { href: "#y-series", label: "Y Series" },
  { href: "#t-series", label: "T Series" },
  { href: "#iqoo", label: "iQOO" },
];

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const targetId = href.replace("#", "");
  window.dispatchEvent(new CustomEvent("nav-scroll", { 
    detail: { href: targetId, target: targetId } 
  }));
}

export default function Header() {
  const activeSection = useCurrentSection();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b-4 h-16 ${isDarkMode ? "bg-black border-white" : "bg-surface border-on-surface"}`}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 h-full flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
            <Image 
              src="/Vivo_logo_2019.svg" 
              alt="Vivo Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        <nav className="hidden lg:flex gap-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a 
                key={link.href}
                href={link.href}
                onClick={(e) => !isActive ? handleNavClick(e, link.href) : undefined}
                className={`px-3 lg:px-4 py-1 lg:py-2 font-label-bold uppercase text-xs lg:text-sm transition-colors ${
                  isActive
                    ? "opacity-40 cursor-not-allowed"
                    : isDarkMode
                      ? "hover:bg-primary hover:text-white cursor-pointer text-white"
                      : "hover:bg-primary hover:text-white cursor-pointer"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleDarkMode}
            className={`font-label-bold uppercase border-2 lg:border-4 px-3 lg:px-4 py-1 lg:py-2 text-sm cursor-pointer transition-colors ${
              isDarkMode 
                ? "border-white text-white hover:bg-white hover:text-black" 
                : "border-on-surface hover:bg-on-surface hover:text-surface"
            }`}
          >
            {isDarkMode ? "☀" : "☾"}
          </button>
          <button onClick={() => window.dispatchEvent(new CustomEvent("nav-scroll", { detail: { href: "cta", target: "cta" } }))} className={`font-label-bold uppercase border-2 lg:border-4 px-3 lg:px-4 py-1 lg:py-2 text-sm cursor-pointer transition-colors ${
            isDarkMode 
              ? "border-white text-white hover:bg-white hover:text-black" 
              : "border-on-surface hover:bg-on-surface hover:text-surface"
          }`}>
            Shop Now
          </button>
        </div>
      </div>
    </header>
  );
}