"use client";

import { C, glow2, mono } from "../tokens";
import { Reveal } from "../components/Reveal";
import { Label } from "../components/Label";
import { problems, stats } from "../constants/problem";
import ProblemRow from "../components/ProblemRow";

export const Problem = () => {
  return (
    <section
      id="problem"
      style={{ background: "#0d110e", padding: "100px 24px" }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Reveal>
          <Label>The Problem</Label>
          <h2
            style={{
              fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              marginBottom: 72,
              color: C.text,
              letterSpacing: "-0.02em",
            }}
          >
            The gym is broken by design.
          </h2>
        </Reveal>

        <div style={{ borderTop: `1px solid ${C.border}` }}>
          {problems.map((item, i) => (
            <ProblemRow key={i} item={item} index={i} />
          ))}
        </div>

        {/* Stats strip */}
        <Reveal delay={0.35}>
          <div
            style={{
              marginTop: 56,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 2,
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: "28px 32px",
                  background: C.surface,
                  borderTop: `2px solid ${C.green}`,
                }}
              >
                <p
                  style={{
                    ...mono,
                    fontSize: "1.6rem",
                    color: C.green,
                    fontWeight: 700,
                    textShadow: glow2,
                    marginBottom: 8,
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    color: C.muted,
                    fontSize: "0.78rem",
                    fontWeight: 300,
                    lineHeight: 1.5,
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    ...mono,
                    color: C.muted,
                    fontSize: "0.62rem",
                    opacity: 0.45,
                    marginTop: 8,
                  }}
                >
                  {s.source}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
