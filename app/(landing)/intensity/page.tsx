import { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Ghost Glove | Intensity Tracking",
  description:
    "Perceived effort lies. We measure what your output actually looks like so you stop guessing.",
};

const GREEN = "#39FF6A";

function EffortGap() {
  return (
    <div
      style={{
        border: "1px solid rgba(57,255,106,0.18)",
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      {/* Massive number split */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {/* Perceived — ghosted */}
        <div
          style={{
            padding: "22px 18px 20px",
            borderRight: "1px solid rgba(57,255,106,0.1)",
            opacity: 0.28,
          }}
        >
          <p
            style={{
              fontSize: "0.56rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#fff",
              fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)",
              fontWeight: 700,
              margin: "0 0 12px",
            }}
          >
            You thought
          </p>
          <div
            style={{
              fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)",
              fontSize: "4.8rem",
              fontWeight: 800,
              lineHeight: 0.88,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            8
          </div>
          <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginTop: 6 }}>
            out of 10
          </div>
        </div>

        {/* Actual — dominant green */}
        <div style={{ padding: "22px 18px 20px" }}>
          <p
            style={{
              fontSize: "0.56rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: GREEN,
              fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)",
              fontWeight: 700,
              margin: "0 0 12px",
            }}
          >
            Actually
          </p>
          <div
            style={{
              fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)",
              fontSize: "4.8rem",
              fontWeight: 800,
              lineHeight: 0.88,
              color: GREEN,
              letterSpacing: "-0.02em",
            }}
          >
            5.8
          </div>
          <div style={{ fontSize: "0.75rem", color: "rgba(57,255,106,0.45)", marginTop: 6 }}>
            out of 10
          </div>
        </div>
      </div>

      {/* Gap callout */}
      <div
        style={{
          borderTop: "1px solid rgba(57,255,106,0.1)",
          padding: "13px 18px",
          background: "rgba(57,255,106,0.04)",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)",
            fontWeight: 800,
            fontSize: "1.1rem",
            color: GREEN,
            letterSpacing: "0.04em",
          }}
        >
          2.2 POINTS
        </span>
        <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.38)" }}>
          left on the table every session.
        </span>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(57,255,106,0.06)",
          padding: "8px 18px",
          fontSize: "0.63rem",
          color: "#2e2e2e",
          fontStyle: "italic",
        }}
      >
        Illustrative data.
      </div>
    </div>
  );
}

export default function Intensity() {
  return (
    <LandingPage
      variant="intensity"
      headline="You think you're working hard. The data might disagree."
      hook="Perceived effort lies. Most people think they gave 8/10 when the numbers say 6."
      visual={<EffortGap />}
      bullets={[
        "Real-time data on what your output actually looks like: speed, load, consistency.",
        "After every session, you see clearly whether you pushed your limits or quietly coasted.",
        "Session by session, you build a picture of whether your intensity is climbing or flatlining without you noticing.",
      ]}
      ctaText="Show me my actual effort"
      microcopy="No spam. Just updates when it launches."
    />
  );
}
