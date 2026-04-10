"use client";

import { C, mono } from "../tokens";

interface ImgProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
}

export const Img: React.FC<ImgProps> = ({ src, alt, style, className }) => {
  return (
    <div
      className={className}
      style={{ position: "relative", overflow: "hidden", ...style }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
          const next = e.currentTarget.nextSibling as HTMLElement | null;
          if (next) next.style.display = "flex";
        }}
      />
      <div
        style={{
          display: "none",
          position: "absolute",
          inset: 0,
          background: C.surface,
          border: `1px dashed rgba(57,255,106,0.18)`,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 10,
          color: C.muted,
          ...mono,
          fontSize: "0.68rem",
          textAlign: "center",
          padding: 20,
        }}
      >
        <span style={{ fontSize: "2rem", opacity: 0.25, lineHeight: 1 }}>
          [ img ]
        </span>
        <span style={{ opacity: 0.8, lineHeight: 1.5 }}>{alt}</span>
        <span
          style={{ opacity: 0.4, fontSize: "0.55rem", wordBreak: "break-all" }}
        >
          {src}
        </span>
      </div>
    </div>
  );
};
