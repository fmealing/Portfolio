"use client";

import { C, mono } from "../tokens";
import { Reveal } from "../components/Reveal";
import { Label } from "../components/Label";

export const Market = () => {
  return (
    <section style={{ background: "#0d110e", padding: "100px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Header */}
        <Reveal>
          <Label>The Market</Label>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              marginBottom: 28,
              color: C.text,
              letterSpacing: "-0.02em",
            }}
          >
            The category does not exist yet.
          </h2>
          <p
            style={{
              color: C.muted,
              fontSize: "1.05rem",
              lineHeight: 1.85,
              maxWidth: 680,
              marginBottom: 72,
              fontWeight: 300,
            }}
          >
            The wearable fitness market was valued at $84.68 billion in 2026 and
            is growing at 24.43% annually. Whoop raised $575 million at a $10.1
            billion valuation. The demand for data-driven training is validated
            at scale. But every product in this space does the same thing: it
            shows you numbers. None of them have built a game mechanic out of
            those numbers. None of them have given you an opponent.
          </p>
        </Reveal>

        {/* Technology moat */}
        <Reveal delay={0.2}>
          <div
            style={{
              marginTop: 72,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 3,
            }}
          >
            <div
              style={{
                background: C.surface,
                padding: "32px 28px",
                borderTop: `2px solid ${C.green}`,
              }}
            >
              <p
                style={{
                  ...mono,
                  fontSize: "0.58rem",
                  color: C.green,
                  opacity: 0.6,
                  letterSpacing: "0.14em",
                  marginBottom: 14,
                }}
              >
                CURRENT SENSOR STACK
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: C.text,
                  marginBottom: 12,
                }}
              >
                5x Flex Sensors + 6-Axis IMU
              </p>
              <p
                style={{
                  color: C.muted,
                  fontSize: "0.88rem",
                  lineHeight: 1.65,
                  fontWeight: 300,
                }}
              >
                Proven prototype. Real rep counting, form feedback, and
                intensity tracking on hardware that costs less than a gym
                session.
              </p>
            </div>

            <div
              style={{
                background: C.surface,
                padding: "32px 28px",
                borderTop: `2px solid rgba(57,255,106,0.35)`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle glow in corner */}
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(57,255,106,0.06) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <p
                style={{
                  ...mono,
                  fontSize: "0.58rem",
                  color: C.green,
                  opacity: 0.6,
                  letterSpacing: "0.14em",
                  marginBottom: 14,
                }}
              >
                RESEARCH FRONTIER
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: C.text,
                  marginBottom: 12,
                }}
              >
                Gallium-based liquid metal sensors
              </p>
              <p
                style={{
                  color: C.muted,
                  fontSize: "0.88rem",
                  lineHeight: 1.65,
                  fontWeight: 300,
                }}
              >
                In early conversation with the University of Birmingham to
                explore gallium sensor integration: stretchable, high-fidelity,
                and not available in any consumer product today.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Closing statement */}
        <Reveal delay={0.25}>
          <div
            style={{
              marginTop: 56,
              borderLeft: `3px solid ${C.green}`,
              paddingLeft: 32,
            }}
          >
            <p
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
                fontWeight: 600,
                color: C.text,
                lineHeight: 1.45,
              }}
            >
              There is no product that turns your training history into an
              opponent. Ghost Glove is that product, and the sensor technology
              to make it significantly better already exists in a lab.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
