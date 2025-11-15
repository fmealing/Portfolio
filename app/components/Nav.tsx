"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 px-6 py-3
      rounded-full shadow-lg bg-white/80 backdrop-blur-lg transition-all duration-500 z-50
      ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
    `}
    >
      <span className="font-medium text-charcoal">Florian Mealing</span>
    </nav>
  );
}
