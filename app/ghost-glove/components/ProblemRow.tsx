import { useState } from "react";
import { problems } from "../constants/problem";
import { C, mono } from "../tokens";
import { Reveal } from "./Reveal";

interface ProblemRowProps {
  item: (typeof problems)[0];
  index: number;
}

const ProblemRow: React.FC<ProblemRowProps> = ({ item, index }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={index * 0.1}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding: "36px 24px 36px 28px",
          borderBottom: `1px solid ${C.border}`,
          borderLeft: `3px solid ${hovered ? C.warn : "transparent"}`,
          display: "grid",
          gridTemplateColumns: "48px 1fr",
          gap: "0 32px",
          alignItems: "start",
          transition: "border-color 0.2s ease, background 0.2s ease",
          background: hovered ? "rgba(255,68,68,0.04)" : "transparent",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            paddingTop: 4,
          }}
        >
          <span
            style={{
              ...mono,
              fontSize: "1.4rem",
              fontWeight: 700,
              color: hovered ? C.warn : C.green,
              opacity: hovered ? 1 : 0.3,
              lineHeight: 1,
              transition: "color 0.2s ease, opacity 0.2s ease",
            }}
          >
            {item.num}
          </span>
        </div>
        <div>
          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              marginBottom: 12,
              color: C.text,
              letterSpacing: "-0.01em",
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              color: C.muted,
              lineHeight: 1.8,
              fontWeight: 300,
              fontSize: "0.97rem",
            }}
          >
            {item.body}
          </p>
        </div>
      </div>
    </Reveal>
  );
};

export default ProblemRow;
