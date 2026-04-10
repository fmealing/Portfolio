"use client";

import { C, mono } from "../tokens";

export const Footer = () => {
  return (
    <div
      style={{
        background: "#0a0c0a",
        borderTop: `1px solid ${C.border}`,
        padding: "24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          ...mono,
          fontSize: "0.62rem",
          color: C.muted,
          opacity: 0.4,
          letterSpacing: "0.1em",
        }}
      >
        Ghost Glove — florianmealing.com — florianmealing@gmail.com
      </p>
    </div>
  );
}
