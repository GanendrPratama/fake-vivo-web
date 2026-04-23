"use client";

import { useState } from "react";
import { useCurrentSection } from "../../hooks/useSection";

const sections = [
  { id: "hero", label: "Home" },
  { id: "quick-nav", label: "Series" },
  { id: "x-series", label: "X Series" },
  { id: "v-series", label: "V Series" },
  { id: "y-series", label: "Y Series" },
  { id: "t-series", label: "T Series" },
  { id: "iqoo", label: "iQOO" },
  { id: "price-table", label: "Pricing" },
  { id: "cta", label: "Buy Now" },
];

export default function SectionNavigator() {
  const currentSection = useCurrentSection();
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToSection = (id: string) => {
    window.dispatchEvent(new CustomEvent("nav-scroll", { 
      detail: { href: id, target: id } 
    }));
    setIsExpanded(false);
  };

  return (
    <div className="fixed right-4 bottom-4 z-50 lg:right-16">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-on-surface text-surface border-4 border-on-surface px-3 py-2 font-label-bold uppercase hover:opacity-80 transition-opacity"
      >
        {isExpanded ? "✕" : "Jump to"}
      </button>

      {isExpanded && (
        <div className="absolute bottom-full mb-2 right-0 bg-surface border-4 border-on-surface w-48 max-h-64 overflow-y-auto">
          {sections.map((section) => (
            <button 
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left px-3 py-2 font-label-bold uppercase border-b-2 border-on-surface last:border-b-0 hover:bg-on-surface hover:text-surface transition-colors ${
                currentSection === section.id ? "bg-on-surface text-surface" : ""
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}