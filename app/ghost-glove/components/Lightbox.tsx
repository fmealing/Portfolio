"use client";

import { C, glow, mono } from "../tokens";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ src, alt, onClose }) => {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        background: "rgba(0,0,0,0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        cursor: "zoom-out",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "92vw",
          maxHeight: "88vh",
          objectFit: "contain",
          border: `1px solid rgba(57,255,106,0.2)`,
          boxShadow: glow,
          cursor: "default",
        }}
      />
      <button
        onClick={onClose}
        style={{
          position: "fixed",
          top: 20,
          right: 24,
          background: "none",
          border: "none",
          color: C.text,
          fontSize: "1.4rem",
          cursor: "pointer",
          ...mono,
          opacity: 0.7,
          lineHeight: 1,
        }}
      >
        ✕
      </button>
    </div>
  );
};
