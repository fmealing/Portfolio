"use client";

import { C, glow2, mono } from "../tokens";
import { Reveal } from "../components/Reveal";
import { Label } from "../components/Label";
import { progressStats, socialHandles } from "../constants/roadmap";

export const Roadmap = () => {
  return (
    <section style={{ background: C.bg, padding: "100px 24px 80px" }}>
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <Reveal>
          <Label>Status</Label>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              marginBottom: 64,
              color: C.text,
              letterSpacing: "-0.02em",
            }}
          >
            This is early.
            <br />
            I&apos;m documenting everything.
          </h2>
        </Reveal>

        {/* Progress stats */}
        <Reveal delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 3,
              marginBottom: 72,
            }}
          >
            {progressStats.map((stat) => (
              <div
                key={stat.label}
                style={{ background: C.surface, padding: "28px 24px" }}
              >
                <p
                  style={{
                    ...mono,
                    fontSize: "0.6rem",
                    color: C.muted,
                    letterSpacing: "0.18em",
                    marginBottom: 10,
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </p>
                <p
                  style={{
                    ...mono,
                    fontSize: "1.8rem",
                    color: C.green,
                    fontWeight: 700,
                    marginBottom: 10,
                    textShadow: glow2,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    color: C.muted,
                    fontSize: "0.82rem",
                    fontWeight: 300,
                    lineHeight: 1.5,
                  }}
                >
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Building in public */}
        <Reveal delay={0.2}>
          <div style={{ marginBottom: 72 }}>
            <p
              style={{
                color: C.muted,
                fontSize: "1rem",
                lineHeight: 1.8,
                maxWidth: 580,
                fontWeight: 300,
                marginBottom: 28,
              }}
            >
              Building in public: every build session, every failure, every
              breakthrough on the record.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {socialHandles.map((handle) => (
                <span
                  key={handle}
                  style={{
                    ...mono,
                    fontSize: "0.68rem",
                    color: C.green,
                    border: `1px solid ${C.border}`,
                    padding: "7px 16px",
                    letterSpacing: "0.08em",
                  }}
                >
                  {handle}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
