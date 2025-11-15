"use client";

import { useState, useEffect } from "react";

const sections = ["Hero", "WhatIDo", "Portfolio", "Why", "Pricing", "Contact"];

export default function DotNav() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2; // mid-screen reference

      let current = 0;

      sections.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          current = i;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    window.scrollTo({
      top: el.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* DESKTOP DOT NAV (right side) */}
      <div
        className="
          hidden md:flex
          fixed right-8 top-1/2 -translate-y-1/2
          flex-col gap-4 z-50
        "
      >
        {sections.map((id, i) => (
          <div
            key={id}
            className={`
              w-3 h-3 rounded-full cursor-pointer transition-all duration-300
              ${
                active === i
                  ? "bg-accentBlue scale-125"
                  : "bg-gray-300 opacity-60 hover:opacity-100"
              }
            `}
            onClick={() => scrollToSection(id)}
          />
        ))}
      </div>

      {/* MOBILE DOT NAV (bottom center) */}
      <div
        className="
          md:hidden
          fixed bottom-6 left-1/2 -translate-x-1/2
          flex gap-4 z-50
        "
      >
        {sections.map((id, i) => (
          <div
            key={id}
            className={`
              w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300
              ${
                active === i
                  ? "bg-accentBlue scale-110"
                  : "bg-gray-300 opacity-50"
              }
            `}
            onClick={() => scrollToSection(id)}
          />
        ))}
      </div>
    </>
  );
}
