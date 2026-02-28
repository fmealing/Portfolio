"use client";

import { motion, type Variants } from "framer-motion";

const statsStrip = [
  { value: "74.76%",   label: "grade" },
  { value: "MEng",     label: "degree" },
  { value: "2022–26",  label: "duration" },
  { value: "5+",       label: "projects" },
];

const modules = [
  { name: "Engineering Mathematics", grade: "87%" },
  { name: "Electronic Engineering",  grade: "82%" },
  { name: "Internet of Things",      grade: "80%" },
  { name: "Embedded Systems",        grade: "77%" },
  { name: "Telerobotics & AR",       grade: "74%" },
];

const fade: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-28 px-8"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Eyebrow */}
        <motion.p
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="label mb-10"
        >
          01 / about
        </motion.p>

        {/* ── Pullquote in Instrument Serif ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14"
        >
          <p
            className="font-display leading-tight"
            style={{
              fontSize: "clamp(28px, 4.5vw, 58px)",
              color: "var(--cream)",
            }}
          >
            &ldquo;Engineering student specialising<br className="hidden sm:block" />
            in the gap between circuits and code.&rdquo;
          </p>
        </motion.div>

        {/* ── Horizontal stats strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-14"
        >
          <div className="rule mb-6" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px" style={{ background: "var(--border)" }}>
            {statsStrip.map((s) => (
              <div
                key={s.label}
                className="px-6 py-5"
                style={{ background: "var(--card)" }}
              >
                <p
                  className="font-display text-4xl mb-1"
                  style={{ color: "var(--gold)" }}
                >
                  {s.value}
                </p>
                <p className="label">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="rule mt-6" />
        </motion.div>

        {/* ── Bio (left) + module grades (right) ── */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p
              className="text-sm font-light leading-[1.85] mb-5"
              style={{ color: "var(--cream-dim)" }}
            >
              Final-year MEng Engineering student at the University of
              Birmingham, specialising in embedded systems, robotics, and
              full-stack product development.
            </p>
            <p
              className="text-sm font-light leading-[1.85]"
              style={{ color: "var(--cream-muted)" }}
            >
              I&apos;ve designed and built real hardware prototypes, autonomous
              robots, IoT wearables, and production web/mobile platforms from
              scratch. I care deeply about the gap between theory and
              shipping — and I live on that edge.
            </p>

            <div className="mt-8 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
              <p className="label mb-3">currently</p>
              <p className="text-sm font-light" style={{ color: "var(--cream-dim)" }}>
                Final Year Project — IoT Wearable Glove for gym tracking.
                ESP32, flex sensors, IMU, MQTT + cloud pipeline.
              </p>
            </div>
          </motion.div>

          {/* Module grades — as a table */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <p className="label mb-5">key module grades</p>
            <div className="space-y-0">
              {modules.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className="flex items-center justify-between py-3"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <span
                    className="text-sm font-light"
                    style={{ color: "var(--cream-dim)" }}
                  >
                    {m.name}
                  </span>
                  <span
                    className="text-sm font-medium tabular-nums"
                    style={{ color: "var(--gold)" }}
                  >
                    {m.grade}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Overall */}
            <div
              className="mt-5 pt-5 flex items-center justify-between"
              style={{ borderTop: "1px solid var(--gold-line)" }}
            >
              <span className="label">overall first class</span>
              <span
                className="text-base font-medium"
                style={{ color: "var(--gold)" }}
              >
                74.76%
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
