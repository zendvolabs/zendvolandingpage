"use client";

import { useState, useEffect } from "react";

/**
 * A custom hook that returns the current scroll position.
 * Useful for animations or changing UI state based on scroll.
 */
export function useScroll(threshold = 0) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
