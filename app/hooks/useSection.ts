"use client";

import { useState, useEffect } from "react";

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

export function useCurrentSection() {
  const [currentSection, setCurrentSection] = useState("cta");

  useEffect(() => {
    // Set initial section to cta since it's likely the last viewed
    setCurrentSection("cta");
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting entry
        const intersecting = entries.find(e => e.isIntersecting);
        if (intersecting) {
          setCurrentSection(intersecting.target.id);
        }
      },
      { threshold: 0.1 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return currentSection;
}