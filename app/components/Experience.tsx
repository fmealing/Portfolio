"use client";

import { motion } from "framer-motion";

interface Entry {
  period:   string;
  role:     string;
  org:      string;
  location: string;
  current?: boolean;
  bullets:  string[];
}

const entries: Entry[] = [
  {
    period:   "2024 — present",
    role:     "Founder & Full-Stack Engineer",
    org:      "SyncMove",
    location: "Remote",
    current:  true,
    bullets: [
      "Founded and shipped a full-stack fitness tracking platform (web + mobile).",
      "Architected backend in Node.js/TypeScript with a RESTful API.",
      "Built the React web app and React Native mobile app.",
      "Designed database schema and handled end-to-end system architecture.",
    ],
  },
  {
    period:   "2022 — 2026",
    role:     "MEng Engineering",
    org:      "University of Birmingham",
    location: "Birmingham, UK",
    bullets: [
      "First Class Honours — current grade 74.76%.",
      "Specialising in embedded systems, robotics, and control.",
      "Key modules: Engineering Mathematics (87%), Electronic Engineering (82%), IoT (80%).",
      "Final Year Project: IoT Wearable Glove for gym rep tracking.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 py-28 px-8"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="label mb-10"
        >
          04 / experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="font-display mb-14"
          style={{ fontSize: "clamp(32px, 5vw, 60px)", color: "var(--cream)" }}
        >
          Where I&apos;ve been.
        </motion.h2>

        {/* Entry list */}
        <div className="space-y-0">
          {entries.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
              className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-14 py-12"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {/* Left — period + location */}
              <div>
                <p
                  className="text-sm font-medium tabular-nums mb-1"
                  style={{ color: "var(--gold)" }}
                >
                  {e.period}
                </p>
                <p
                  className="text-xs font-light"
                  style={{ color: "var(--cream-muted)" }}
                >
                  {e.location}
                </p>
                {e.current && (
                  <span
                    className="inline-block mt-3 text-xs tracking-[0.14em] uppercase px-2 py-0.5"
                    style={{
                      background: "rgba(196,168,74,0.1)",
                      border: "1px solid rgba(196,168,74,0.25)",
                      color: "var(--gold)",
                    }}
                  >
                    current
                  </span>
                )}
              </div>

              {/* Right — role + content */}
              <div>
                <h3
                  className="text-base font-light mb-0.5"
                  style={{ color: "var(--cream)" }}
                >
                  {e.role}
                </h3>
                <p
                  className="text-sm font-light mb-6"
                  style={{ color: "var(--cream-muted)" }}
                >
                  {e.org}
                </p>

                <ul className="space-y-2.5">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm font-light">
                      <span
                        className="shrink-0 mt-px text-xs"
                        style={{ color: "var(--gold)" }}
                      >
                        ·
                      </span>
                      <span style={{ color: "var(--cream-dim)", lineHeight: "1.7" }}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Close rule */}
          <div className="rule" />
        </div>
      </div>
    </section>
  );
}
