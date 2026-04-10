"use client";

import { C, mono } from "../tokens";

interface LabelProps {
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ children }) => {
  return (
    <p
      style={{
        ...mono,
        fontSize: "0.62rem",
        letterSpacing: "0.3em",
        color: C.green,
        textTransform: "uppercase",
        marginBottom: 16,
        opacity: 0.75,
      }}
    >
      {children}
    </p>
  );
};
