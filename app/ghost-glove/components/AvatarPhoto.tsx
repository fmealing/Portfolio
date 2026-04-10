import { useState } from "react";
import { C, mono } from "../tokens";
import { Lightbox } from "./Lightbox";

interface AvatarPhotoProps {
  src: string;
  alt: string;
  height?: number;
}

// -------------- Clickable photo
const AvatarPhoto: React.FC<AvatarPhotoProps> = ({
  src,
  alt,
  height = 280,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          cursor: "zoom-in",
          border: `1px solid ${C.border}`,
          height,
          transition: "border-color 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "rgba(57,255,106,0.35)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = C.border;
        }}
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
        />
        <div
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
            ...mono,
            fontSize: "0.6rem",
            color: C.green,
            background: "rgba(17,19,16,0.75)",
            padding: "3px 7px",
            letterSpacing: "0.08em",
            opacity: 0.8,
          }}
        >
          EXPAND
        </div>
      </div>

      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
};

export default AvatarPhoto;
