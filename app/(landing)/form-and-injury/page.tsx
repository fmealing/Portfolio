import { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "By the time you feel it, the damage is already done. Ghost Glove.",
  description:
    "Most lifting injuries aren't accidents. We catch the patterns before your body does.",
};

const GREEN = "#39FF6A";

// Each entry: [quality 0-100, color override if drifting]
const REPS: { quality: number; drifting: boolean }[] = [
  { quality: 100, drifting: false },
  { quality: 97, drifting: false },
  { quality: 95, drifting: false },
  { quality: 91, drifting: false },
  { quality: 85, drifting: false },
  { quality: 70, drifting: true },
  { quality: 52, drifting: true },
  { quality: 38, drifting: true },
];

function repColor(quality: number, drifting: boolean): string {
  if (!drifting) return GREEN;
  if (quality > 60) return "rgba(255,165,60,0.85)";
  return "rgba(255,60,60,0.8)";
}

function RepMap() {
  return (
    <div
      style={{
        border: "1px solid rgba(57,255,106,0.18)",
        borderRadius: 4,
        overflow: "hidden",
        padding: "20px 18px 0",
      }}
    >
      <p
        style={{
          fontSize: "0.56rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
          fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)",
          fontWeight: 700,
          margin: "0 0 16px",
        }}
      >
        Form consistency / set 4 of 5
      </p>

      {/* Bar chart */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 5,
          height: 112,
          marginBottom: 6,
        }}
      >
        {REPS.map((rep, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                width: "100%",
                height: `${rep.quality}%`,
                background: repColor(rep.quality, rep.drifting),
                borderRadius: "2px 2px 0 0",
              }}
            />
          </div>
        ))}
      </div>

      {/* Rep numbers */}
      <div style={{ display: "flex", gap: 5, marginBottom: 0 }}>
        {REPS.map((rep, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: "0.58rem",
              color: rep.drifting ? "rgba(255,100,100,0.55)" : "rgba(255,255,255,0.28)",
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* Warning annotation */}
      <div
        style={{
          margin: "14px -18px 0",
          padding: "12px 18px",
          background: "rgba(255,60,60,0.05)",
          borderTop: "1px solid rgba(255,60,60,0.18)",
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)",
            fontWeight: 800,
            fontSize: "0.7rem",
            color: "rgba(255,100,100,0.7)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            flexShrink: 0,
            paddingTop: 1,
          }}
        >
          Rep 6
        </span>
        <span style={{ fontSize: "0.72rem", color: "rgba(255,120,120,0.55)", lineHeight: 1.5 }}>
          Form drift detected. Three more sessions of this and it becomes a pattern your body remembers.
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

export default function FormAndInjury() {
  return (
    <LandingPage
      variant="form-and-injury"
      headline="By the time you feel it, the damage is already done."
      hook="Most lifting injuries aren't accidents. They're invisible errors repeated hundreds of times."
      visual={<RepMap />}
      bullets={[
        "Movement consistency tracked rep by rep across every session.",
        "You see the exact point where fatigue starts changing how you move.",
        "Not a replacement for a coach. The closest thing to having one present every single session.",
      ]}
      ctaText="Catch my form issues"
      microcopy="No spam. Just a message when it's ready."
    />
  );
}
