"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzdepaa";

const GREEN = "#39FF6A";
const BG = "#111310";

interface Props {
  variant: string;
  headline: string;
  hook: string;
  visual: React.ReactNode;
  bullets: string[];
  ctaText: string;
  microcopy: string;
}

export default function LandingPage({
  variant,
  headline,
  hook,
  visual,
  bullets,
  ctaText,
  microcopy,
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "err">(
    "idle"
  );
  const [focused, setFocused] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          variant,
          _subject: `Ghost Glove: ${variant}`,
        }),
      });
      if (res.ok) {
        setStatus("done");
        // Fire GA4 conversion event — mark "generate_lead" as a conversion in GA4 dashboard
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.(
          "event",
          "generate_lead",
          { page_variant: variant }
        );
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  }

  return (
    <main
      style={{
        background: BG,
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "var(--font-dm, DM Sans, sans-serif)",
      }}
    >
      <div style={{ height: 3, background: GREEN }} />

      {/* ── ABOVE FOLD: headline → hook → card → form ── */}
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "28px 22px 52px" }}>
        <h1
          style={{
            fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)",
            fontSize: "clamp(2.6rem, 10vw, 5.5rem)",
            fontWeight: 800,
            lineHeight: 0.96,
            textTransform: "uppercase",
            letterSpacing: "0.01em",
            margin: "0 0 14px",
            color: "#fff",
          }}
        >
          {headline}
        </h1>

        <div style={{ width: 36, height: 2, background: GREEN, margin: "0 0 16px" }} />

        <p
          style={{
            fontSize: "0.88rem",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.48)",
            margin: "0 0 24px",
          }}
        >
          {hook}
        </p>

        {/* Data card — proof first */}
        <div style={{ marginBottom: 22 }}>{visual}</div>

        {/* Form */}
        {status === "done" ? (
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.8)",
              padding: "4px 0",
            }}
          >
            You&apos;re on the list. We&apos;ll reach out when it&apos;s ready.
          </p>
        ) : (
          <>
            <form
              onSubmit={submit}
              style={{ display: "flex", flexDirection: "column", gap: 9 }}
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={{
                  background: "#161814",
                  border: `1px solid ${focused ? "rgba(57,255,106,0.65)" : "rgba(57,255,106,0.18)"}`,
                  borderRadius: 3,
                  color: "#fff",
                  fontSize: "1rem",
                  padding: "14px 16px",
                  outline: "none",
                  width: "100%",
                  boxSizing: "border-box",
                  transition: "border-color 0.12s",
                }}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  background: status === "loading" ? "rgba(57,255,106,0.45)" : GREEN,
                  color: "#000",
                  border: "none",
                  borderRadius: 3,
                  padding: "16px",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: status === "loading" ? "wait" : "pointer",
                  width: "100%",
                  transition: "background 0.12s",
                }}
              >
                {status === "loading" ? "Sending..." : ctaText}
              </button>
            </form>
            <p
              style={{
                margin: "9px 0 0",
                fontSize: "0.73rem",
                color: "#444",
                lineHeight: 1.5,
              }}
            >
              {microcopy}
            </p>
            {status === "err" && (
              <p style={{ margin: "8px 0 0", fontSize: "0.78rem", color: "#ff6b6b" }}>
                Something went wrong.{" "}
                <a href="mailto:florianmealing@gmail.com" style={{ color: "#ff6b6b" }}>
                  Email me directly.
                </a>
              </p>
            )}
          </>
        )}
      </div>

      {/* ── BELOW FOLD: bullets ── */}
      <div style={{ height: 1, background: "rgba(57,255,106,0.09)" }} />

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "48px 22px 88px" }}>
        <p
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: GREEN,
            fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)",
            fontWeight: 700,
            margin: "0 0 28px",
          }}
        >
          What we&apos;re building
        </p>
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          {bullets.map((b, i) => (
            <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span
                style={{
                  color: GREEN,
                  fontWeight: 700,
                  flexShrink: 0,
                  lineHeight: 1.75,
                  fontSize: "0.8rem",
                }}
              >
                &gt;
              </span>
              <span
                style={{
                  fontSize: "0.93rem",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.68)",
                }}
              >
                {b}
              </span>
            </li>
          ))}
        </ul>
        <p
          style={{
            margin: "36px 0 0",
            fontSize: "0.82rem",
            color: "rgba(255,255,255,0.22)",
            fontStyle: "italic",
          }}
        >
          Built by an engineer who lifts.
        </p>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(57,255,106,0.07)" }}>
        <div
          style={{
            maxWidth: 600,
            margin: "0 auto",
            padding: "20px 22px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-barlow, 'Barlow Condensed', sans-serif)",
              fontWeight: 800,
              fontSize: "0.95rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: GREEN,
            }}
          >
            Ghost Glove
          </span>
          <a
            href="https://florianmealing.com"
            style={{ fontSize: "0.68rem", color: "#333", textDecoration: "none" }}
          >
            florianmealing.com
          </a>
        </div>
      </footer>
    </main>
  );
}
