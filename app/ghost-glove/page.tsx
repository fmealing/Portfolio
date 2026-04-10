"use client";

import { C, mono, sans } from "./tokens";
import { Hero } from "./sections/Hero";
import { Problem } from "./sections/Problem";
import { Solution } from "./sections/Solution";
import { Gamification } from "./sections/Gamification";
import { UserJourney } from "./sections/UserJourney";
import { Market } from "./sections/Market";
import { Roadmap } from "./sections/Roadmap";
import { Footer } from "./sections/Footer";

const GhostGlovePage = () => {
  return (
    <main style={{ ...sans, background: C.bg, color: C.text, minHeight: "100vh", overflowX: "hidden" }}>
      {/* Back link */}
      <div style={{ position: "fixed", top: 16, left: 20, zIndex: 100 }}>
        <a
          href="/"
          style={{
            ...mono,
            color: C.muted,
            fontSize: "0.68rem",
            letterSpacing: "0.08em",
            textDecoration: "none",
            opacity: 0.7,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
        >
          ← florianmealing.com
        </a>
      </div>

      <Hero />
      <Problem />
      <Solution />
      <Gamification />
      <UserJourney />
      <Market />
      <Roadmap />
      <Footer />
    </main>
  );
};

export default GhostGlovePage;
