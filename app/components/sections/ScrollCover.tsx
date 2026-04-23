"use client";

import { useState, useRef, useEffect } from "react";
import { useCurrentSection } from "../../hooks/useSection";
import { useDarkMode } from "../../hooks/useDarkMode";

const sectionData: Record<string, { label: string; subLabel?: string; bgColor: string; tagline: string }> = {
  hero: { label: "VIVO", bgColor: "#b7102a", tagline: "Redefining Innovation" },
  "quick-nav": { label: "ALL SERIES", bgColor: "#1b1b1b", tagline: "Flagship • Mid-Range • Budget • Gaming" },
  "x-series": { label: "X SERIES", subLabel: "Flagship", bgColor: "#1d4ed8", tagline: "200MP + ZEISS • Rp 11-25 juta" },
  "v-series": { label: "V SERIES", subLabel: "Mid-Range", bgColor: "#d97706", tagline: "Aura Light Portrait • Rp 5-11 juta" },
  "y-series": { label: "Y SERIES", subLabel: "Budget", bgColor: "#15803d", tagline: "7000mAh Battery • Rp 1.5-5 juta" },
  "t-series": { label: "T SERIES", subLabel: "Gaming", bgColor: "#b7102a", tagline: "Turbo Performance • Rp 3-6 juta" },
  iqoo: { label: "iQOO", subLabel: "Performance", bgColor: "#1e3a8a", tagline: "Extreme Gaming • Rp 4-12 juta" },
  "price-table": { label: "PRICING", bgColor: "#89CFF0", tagline: "All Series Price Summary" },
  cta: { label: "BUY NOW", bgColor: "#b7102a", tagline: "Ready to Experience?" },
};

const quickNavColors = ["#1d4ed8", "#d97706", "#15803d", "#b7102a"];

const sectionOrder = [
  "hero", "quick-nav", "x-series", "v-series", "y-series", "t-series", "iqoo", "price-table", "cta"
];

export default function ScrollCover() {
  const currentSection = useCurrentSection();
  const { isDarkMode } = useDarkMode();
  const [targetSection, setTargetSection] = useState<string | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Don't scroll if at CTA (last section)
      if (currentSection === "cta" && e.deltaY > 0) {
        return;
      }
      
      // Don't scroll if at hero (first section) and scrolling up
      if (currentSection === "hero" && e.deltaY < 0) {
        return;
      }
      
      e.preventDefault();
      
      const currentIdx = sectionOrder.indexOf(currentSection);
      let targetIdx = currentIdx;
      
      if (e.deltaY > 0) {
        targetIdx = currentIdx + 1;
      } else if (e.deltaY < 0) {
        targetIdx = currentIdx - 1;
      }
      
      if (targetIdx >= 0 && targetIdx < sectionOrder.length && targetIdx !== currentIdx) {
        setTargetSection(sectionOrder[targetIdx]);
        setIsScrolling(true);
        
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        
        scrollTimeoutRef.current = setTimeout(() => {
          const targetEl = document.getElementById(sectionOrder[targetIdx]);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "auto", block: "start" });
          }
          
          setTimeout(() => {
            setIsScrolling(false);
            setTargetSection(null);
          }, 450);
        }, 300);
      }
    };

    const handleNavScroll = (e: CustomEvent) => {
    const targetId = e.detail?.href || e.detail?.target;
    
    // Don't scroll if already at this section
    if (targetId === currentSection) {
      return;
    }
    
    if (targetId && sectionData[targetId]) {
        setTargetSection(targetId);
        setIsScrolling(true);
        
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        
        scrollTimeoutRef.current = setTimeout(() => {
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "auto", block: "start" });
          }
          
          setTimeout(() => {
            setIsScrolling(false);
            setTargetSection(null);
          }, 450);
        }, 300);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("nav-scroll", handleNavScroll as EventListener);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("nav-scroll", handleNavScroll as EventListener);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [currentSection]);

  const displayTarget = targetSection;
  const displayCurrent = displayTarget ? sectionData[displayTarget] : sectionData[currentSection];

  const isQuickNavBackground = 
    (isScrolling && displayTarget === "quick-nav") || 
    (!displayTarget && currentSection === "quick-nav");

  const borderColor = isDarkMode ? "border-white" : "border-black";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const surfaceBg = isDarkMode ? "bg-black" : "bg-surface";

  return (
    <>
      <div 
        className={`fixed inset-0 z-[60] transition-opacity duration-150 ${
          isScrolling ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {isQuickNavBackground ? (
          <div className="absolute inset-0 flex">
            {quickNavColors.map((color, idx) => (
              <div 
                key={idx} 
                className={`flex-1 border-r-4 ${borderColor} last:border-r-0`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        ) : (
          <div className="absolute inset-0" style={{ backgroundColor: displayCurrent.bgColor }} />
        )}
        
        <div className={`absolute top-0 left-0 right-0 h-16 ${surfaceBg} border-b-4 ${borderColor} flex items-center justify-center`}>
          <span className={`font-headline-lg uppercase ${textColor}`}>
            {displayCurrent.label}
          </span>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          {displayTarget && (
            <div className="text-center">
              <div className="font-display-2xl text-white uppercase animate-pulse">
                {displayCurrent.label}
              </div>
              <div className="font-body-lg text-white opacity-80 mt-2">
                {displayCurrent.tagline}
              </div>
              <div className="mt-4 text-white opacity-50 font-label-bold">
                MOVING...
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className={`fixed left-0 right-0 bottom-0 h-16 ${isDarkMode ? "bg-white" : "bg-on-surface"} z-50 lg:hidden flex items-center justify-center`}>
        <span className={`font-label-bold uppercase ${isDarkMode ? "text-black" : "text-surface"}`}>
          {sectionData[currentSection].label}
        </span>
      </div>
    </>
  );
}