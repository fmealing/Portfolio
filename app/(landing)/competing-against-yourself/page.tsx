import { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Ghost Glove | Compete Against Yourself",
  description:
    "Stop measuring yourself against strangers. Track your past self and race that instead.",
};

const GREEN = "#39FF6A";

function GhostMatchup() {
  return (
    <div
      style={{
        border: "1px solid rgba(57,255,106,0.18)",
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {/* Ghost — heavily faded */}
        <div
          style={{
            padding: "18px 16px 20px",
            borderRight: "1px solid rgba(57,255,106,0.1)",
            opacity: 0.25,
          }}
        >
          <ColLabel color="#fff">Last Week</ColLabel>
          <GhostStat label="Best set" value="8 reps" />
          <GhostStat label="Bar speed" value="0.82 m/s" />
          <GhostStat label="Grip holds" value="Rep 7" />
        </div>

        {/* You — bright, deltas are the hero */}
        <div style={{ padding: "18px 16px 20px" }}>
          <ColLabel color={GREEN}>This Week</ColLabel>
          <YouStat label="Best set" value="9 reps" delta="+1 REP" />
          <YouStat label="Bar speed" value="0.91 m/s" delta="+11%" />
          <YouStat label="Grip holds" value="Rep 9" delta="+2 REPS" />
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(57,255,106,0.08)",
          padding: "9px 16px",
          fontSize: "0.65rem",
          color: "#2e2e2e",
          fontStyle: "italic",
        }}
      >
        Illustrative data.
      </div>
    </div>
  );
}

function ColLabel({ color, children }: { color: string; children: string }) {
  return (
    <p
      style={{
        fontSize: "0.56rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color,
        fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)",
        fontWeight: 700,
        margin: "0 0 18px",
      }}
    >
      {children}
    </p>
  );
}

function GhostStat({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.5)", marginBottom: 2 }}>
        {label}
      </div>
      <div
        style={{
          fontSize: "1.05rem",
          fontWeight: 700,
          fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)",
          letterSpacing: "0.02em",
          color: "#fff",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function YouStat({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta?: string;
}) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.35)", marginBottom: 2 }}>
        {label}
      </div>
      <div
        style={{
          fontSize: "1.05rem",
          fontWeight: 600,
          color: "rgba(255,255,255,0.75)",
          marginBottom: delta ? 3 : 0,
        }}
      >
        {value}
      </div>
      {delta && (
        <div
          style={{
            fontSize: "1.35rem",
            fontWeight: 800,
            color: GREEN,
            fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)",
            letterSpacing: "0.03em",
            lineHeight: 1,
          }}
        >
          {delta} &#9650;
        </div>
      )}
    </div>
  );
}

export default function CompetingAgainstYourself() {
  return (
    <LandingPage
      variant="competing-against-yourself"
      headline="Your only opponent is last week's you."
      hook="Most apps compare you to strangers. That tells you nothing about whether you're actually getting better."
      visual={<GhostMatchup />}
      bullets={[
        "Every session, your actual performance gets recorded. Reps, speed, output, consistency.",
        'That data becomes your ghost: a precise replay of how you lifted last week.',
        "Next session, you know exactly what to beat. Not a leaderboard. The version of you from seven days ago.",
      ]}
      ctaText="I want early access"
      microcopy="No spam. Just a message when it's ready."
    />
  );
}
