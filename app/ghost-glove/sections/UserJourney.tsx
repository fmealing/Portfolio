"use client";

import { useState } from "react";
import { C, mono } from "../tokens";
import { Reveal } from "../components/Reveal";
import { Label } from "../components/Label";
import { Lightbox } from "../components/Lightbox";
import StepPhoto from "../components/UserJourney/StepPhoto";
import { timeline } from "../constants/userJourney";

export const UserJourney = () => {
  return (
    <section style={{ background: C.bg, padding: "100px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Reveal>
          <Label>User Journey</Label>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              fontWeight: 600,
              lineHeight: 1.2,
              marginBottom: 16,
              color: C.text,
              letterSpacing: "-0.02em",
            }}
          >
            Jamie is 24.
          </h2>
          <p
            style={{
              color: C.muted,
              fontSize: "1.05rem",
              lineHeight: 1.8,
              maxWidth: 620,
              marginBottom: 80,
              fontWeight: 300,
            }}
          >
            The first two times he went hard for about three weeks, got bored,
            stopped seeing the point, and quietly let the membership lapse. This
            time he bought the glove because his flatmate would not stop talking
            about it.
          </p>
        </Reveal>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical rule */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 1,
              background: `linear-gradient(to bottom, rgba(57,255,106,0.25) 0%, rgba(57,255,106,0.04) 100%)`,
            }}
          />

          {timeline.map((entry, i) => (
            <Reveal key={entry.marker} delay={i * 0.07}>
              <div className="uj-row">
                {/* Dot on the rule */}
                <div
                  style={{
                    position: "absolute",
                    left: -3,
                    top: 6,
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: C.green,
                    boxShadow: `0 0 8px rgba(57,255,106,0.6)`,
                  }}
                />

                {/* Marker */}
                <div className="uj-marker">
                  <p
                    style={{
                      ...mono,
                      fontSize: "0.62rem",
                      color: C.green,
                      letterSpacing: "0.14em",
                      opacity: 0.7,
                      lineHeight: 1,
                    }}
                  >
                    {entry.marker.toUpperCase()}
                  </p>
                </div>

                {/* Content */}
                <div>
                  <p
                    style={{
                      color: C.muted,
                      fontSize: "0.95rem",
                      lineHeight: 1.85,
                      fontWeight: 300,
                      marginBottom: entry.images.length > 0 ? 20 : 0,
                      maxWidth: 800,
                    }}
                  >
                    {entry.text}
                  </p>

                  {/* Images */}
                  {entry.images.length > 0 && (
                    <div className="uj-images">
                      {entry.images.map((img) => (
                        <div
                          key={img}
                          className="uj-image-item"
                          style={{
                            flex: `0 0 ${entry.images.length === 1 ? "400px" : "320px"}`,
                          }}
                        >
                          <StepPhoto
                            src={`/ghost_glove_images/${img}`}
                            alt={`${entry.marker} screenshot`}
                            height={entry.images.length === 1 ? 320 : 260}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <style>{`
          .uj-row {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 0 48px;
            padding-left: 28px;
            padding-bottom: 72px;
            position: relative;
          }
          .uj-marker {
            padding-top: 4px;
          }
          .uj-images {
            display: flex;
            gap: 8px;
          }
          @media (max-width: 640px) {
            .uj-row {
              grid-template-columns: 1fr;
              gap: 8px 0;
              padding-bottom: 48px;
            }
            .uj-marker {
              padding-top: 0;
              margin-bottom: 4px;
            }
            .uj-images {
              flex-direction: column;
            }
            .uj-image-item {
              flex: 0 0 auto !important;
              width: 100% !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};
