import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  fullHeight?: boolean;
}

export default function SectionWrapper({
  children,
  fullHeight = false,
}: SectionWrapperProps) {
  return (
    <section
      className={`
        ${
          fullHeight
            ? "min-h-screen flex items-center snap-start flex-col justify-center relative"
            : "py-24 md:py-32"
        }
        px-6
      `}
    >
      <div className="max-w-5xl mx-auto w-full">{children}</div>
    </section>
  );
}
