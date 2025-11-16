"use client";

import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  fullHeight?: boolean;
  className?: string;
}

export default function SectionWrapper({
  children,
  fullHeight = false,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      className={`
        relative w-full
        ${
          fullHeight
            ? "min-h-screen flex items-center justify-center bg-black"
            : "py-24 md:py-32"
        }
        px-6 md:px-10
        ${className}
      `}
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">{children}</div>
    </section>
  );
}
