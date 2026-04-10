"use client";

import { C, glow, mono } from "../tokens";
import { Reveal } from "../components/Reveal";
import { Label } from "../components/Label";
import { avatarImages, axes } from "../constants/gamification";
import AvatarPhoto from "../components/AvatarPhoto";

export const Gamification = () => {
  return (
    <section
      style={{
        background: "#0a0e0b",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient centre glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(57,255,106,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <Reveal>
          <Label>The Hook</Label>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              marginBottom: 28,
              color: C.text,
              letterSpacing: "-0.025em",
            }}
          >
            Your only opponent
            <br />
            <span style={{ color: C.green, textShadow: glow }}>
              is who you were.
            </span>
          </h2>
          <p
            style={{
              color: C.muted,
              fontSize: "1.05rem",
              lineHeight: 1.8,
              maxWidth: 620,
              marginBottom: 72,
              fontWeight: 300,
            }}
          >
            Every session the glove builds a data avatar of your performance.
            Over time you race against previous versions of yourself: a 4-week
            ghost and a 6-month ghost. The gap starts small. But it&apos;s real,
            and you can&apos;t argue with it.
          </p>
        </Reveal>

        {/* Avatar images */}
        <Reveal delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 6,
              marginBottom: 12,
            }}
          >
            {avatarImages.map((img) => (
              <div key={img.src}>
                <AvatarPhoto src={img.src} alt={img.alt} height={280} />
                <p
                  style={{
                    ...mono,
                    fontSize: "0.62rem",
                    color: C.muted,
                    marginTop: 10,
                    textAlign: "center",
                    opacity: 0.6,
                  }}
                >
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
          <p
            style={{
              ...mono,
              fontSize: "0.64rem",
              color: C.muted,
              textAlign: "center",
              opacity: 0.5,
              marginBottom: 72,
            }}
          >
            tap any photo to expand
          </p>
        </Reveal>

        {/* Three axes — spec-sheet rows */}
        <Reveal delay={0.15}>
          <p
            style={{
              ...mono,
              fontSize: "0.6rem",
              color: C.green,
              letterSpacing: "0.14em",
              marginBottom: 0,
              opacity: 0.6,
            }}
          >
            THREE AXES THAT SHAPE YOUR AVATAR
          </p>

          <div style={{ marginBottom: 72 }}>
            {/* Column headers */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "3rem 1fr 1fr 1fr",
                gap: "0 24px",
                padding: "14px 0 10px",
                borderBottom: `1px solid rgba(57,255,106,0.12)`,
              }}
            >
              {["", "AXIS", "TRACKS", "AVATAR CHANGE"].map((h) => (
                <span
                  key={h}
                  style={{
                    ...mono,
                    fontSize: "0.56rem",
                    color: C.muted,
                    letterSpacing: "0.12em",
                    opacity: 0.55,
                  }}
                >
                  {h}
                </span>
              ))}
            </div>

            {axes.map((axis) => (
              <div
                key={axis.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "3rem 1fr 1fr 1fr",
                  gap: "0 24px",
                  padding: "22px 0",
                  borderBottom: `1px solid rgba(57,255,106,0.06)`,
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    ...mono,
                    fontSize: "0.62rem",
                    color: C.green,
                    opacity: 0.4,
                    letterSpacing: "0.1em",
                  }}
                >
                  {axis.id}
                </span>
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: C.text,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {axis.label}
                </span>
                <span
                  style={{
                    color: C.muted,
                    fontSize: "0.88rem",
                    fontWeight: 300,
                    lineHeight: 1.5,
                  }}
                >
                  {axis.track}
                </span>
                <span
                  style={{
                    color: C.green,
                    fontSize: "0.88rem",
                    fontWeight: 300,
                    lineHeight: 1.5,
                    opacity: 0.75,
                  }}
                >
                  {axis.avatarChange}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
