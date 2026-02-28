"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";

interface Entry {
  period:   string;
  role:     string;
  org:      string;
  location: string;
  current?: boolean;
  bullets:  string[];
}

const workEntries: Entry[] = [
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
      "Designed database schema and end-to-end system architecture.",
    ],
  },
  {
    period:   "Jun 2024 — Sep 2024",
    role:     "Kitchen Team Leader",
    org:      "Toby Carvery",
    location: "York, UK",
    bullets: [
      "Shift leadership during peak service periods.",
      "Staff training and performance support.",
      "Service coordination with management.",
    ],
  },
  {
    period:   "Jun 2022 — May 2024",
    role:     "Kitchen Team Member",
    org:      "Toby Carvery",
    location: "York, UK",
    bullets: [
      "Operated carvery station during peak service.",
      "Maintained food safety and hygiene standards.",
      "Supported team during busy weekend and event shifts.",
    ],
  },
];

const educationEntries: Entry[] = [
  {
    period:   "2022 — 2026",
    role:     "MEng Mechatronics & Robotics Engineering",
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

function EntryBlock({ entry }: { entry: Entry }) {
  return (
    <div
      className="grid md:grid-cols-[190px_1fr] gap-6 md:gap-14 py-10"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Left — period + location */}
      <div>
        <p
          className="text-xs font-medium tabular-nums mb-1"
          style={{ color: "var(--green)" }}
        >
          {entry.period}
        </p>
        <p className="text-xs font-light" style={{ color: "var(--cream-muted)" }}>
          {entry.location}
        </p>
        {entry.current && (
          <span
            className="inline-block mt-3 text-xs tracking-[0.14em] uppercase px-2 py-0.5"
            style={{
              background: "rgba(0,255,65,0.08)",
              border: "1px solid rgba(0,255,65,0.22)",
              color: "var(--green)",
            }}
          >
            current
          </span>
        )}
      </div>

      {/* Right — role + bullets */}
      <div>
        <h3 className="text-sm font-medium mb-0.5" style={{ color: "var(--cream)" }}>
          {entry.role}
        </h3>
        <p className="text-xs font-light mb-5" style={{ color: "var(--cream-muted)" }}>
          {entry.org}
        </p>
        <ul className="space-y-2">
          {entry.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-xs font-light">
              <span className="shrink-0 mt-px" style={{ color: "var(--green)" }}>·</span>
              <span style={{ color: "var(--cream-dim)", lineHeight: "1.75" }}>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Group({
  label,
  entries,
  delay = 0,
}: {
  label: string;
  entries: Entry[];
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      <p className="label mb-0">{label}</p>
      <div>
        {entries.map((e) => (
          <EntryBlock key={`${e.role}-${e.period}`} entry={e} />
        ))}
        <div className="rule" />
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(headingRef, { once: true, margin: "-80px" });
  const { displayed, done } = useTypewriter("Where I've been.", inView, 45, 100);

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
          &gt; experience
        </motion.p>

        <h2
          ref={headingRef}
          className="font-mono font-semibold mb-14"
          style={{ fontSize: "clamp(28px, 4vw, 52px)", color: "var(--cream)", minHeight: "1.2em" }}
        >
          {displayed}
          {inView && <span className="cursor-blink">█</span>}
        </h2>

        <div className="space-y-14">
          <Group label="work"      entries={workEntries}      delay={0} />
          <Group label="education" entries={educationEntries} delay={0.1} />
        </div>
      </div>
    </section>
  );
}
