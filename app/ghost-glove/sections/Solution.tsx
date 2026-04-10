"use client";

import { C, mono } from "../tokens";
import { Reveal } from "../components/Reveal";
import { Label } from "../components/Label";
import { features } from "../constants/solution";
import FlowDiagram from "../components/Solution/FlowDiagram";
import GlovePhoto from "../components/Solution/GlovePhoto";

export const Solution = () => {
  return (
    <section id="solution" style={{ background: C.bg, padding: "100px 24px" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        {/* Header */}
        <Reveal>
          <Label>The Solution</Label>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              fontWeight: 600,
              lineHeight: 1.2,
              maxWidth: 680,
              marginBottom: 24,
              color: C.text,
              letterSpacing: "-0.02em",
            }}
          >
            A glove that watches you train, so you can race your past self.
          </h2>
          <p
            style={{
              color: C.muted,
              fontSize: "1.05rem",
              lineHeight: 1.8,
              maxWidth: 620,
              marginBottom: 56,
              fontWeight: 300,
            }}
          >
            Ghost Glove is a smart gym glove with flex sensors in each finger, a
            6-axis IMU on the wrist, and an ESP32 that streams live data to a
            web dashboard. It counts reps automatically, tracks intensity, and
            watches your form. No manual logging. No phone in hand.
          </p>
        </Reveal>

        {/* Photo grid */}
        <Reveal delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "3fr 2fr",
              gridTemplateRows: "300px 220px",
              gap: 6,
            }}
          >
            {/* Row 1: wide feature + portrait */}
            <GlovePhoto
              src="/ghost_glove_images/prototype.JPG"
              alt="Ghost Glove prototype"
              position="bottom"
            />
            <GlovePhoto
              src="/ghost_glove_images/Prototype_2.JPG"
              alt="Wrist attachment detail"
            />
            {/* Row 2: two equal tiles spanning full width */}
            <GlovePhoto
              src="/ghost_glove_images/Prototype_3.png"
              alt="PCB close-up"
            />
            <GlovePhoto
              src="/ghost_glove_images/Prototype_4.png"
              alt="Glove in hand"
              position="50% 80%"
            />
          </div>

          <p
            style={{
              ...mono,
              fontSize: "0.64rem",
              color: C.muted,
              textAlign: "center",
              opacity: 0.5,
              marginTop: 10,
            }}
          >
            tap any photo to expand
          </p>
        </Reveal>

        {/* How it works */}
        <Reveal delay={0.15}>
          <FlowDiagram />
        </Reveal>

        {/* Feature tags */}
        <Reveal delay={0.2}>
          <div
            style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 48 }}
          >
            {features.map((f) => (
              <div
                key={f}
                style={{
                  ...mono,
                  padding: "7px 14px",
                  border: `1px solid ${C.border}`,
                  fontSize: "0.68rem",
                  color: C.green,
                  letterSpacing: "0.04em",
                  borderRadius: 2,
                }}
              >
                {f}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
