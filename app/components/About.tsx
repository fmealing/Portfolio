"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";

const statsStrip = [
  { value: "74.76%", label: "grade" },
  { value: "MEng", label: "degree" },
  { value: "2022–26", label: "duration" },
  { value: "5+", label: "projects" },
];

const modules = [
  { name: "Engineering Mathematics", grade: "87%", pct: 87 },
  { name: "Electronic Engineering", grade: "82%", pct: 82 },
  { name: "Internet of Things", grade: "80%", pct: 80 },
  { name: "Embedded Systems", grade: "77%", pct: 77 },
  { name: "Telerobotics & AR", grade: "74%", pct: 74 },
  { name: "Computing for Engineerings", grade: "80%", pct: 80 },
];

const fade: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(headingRef, { once: true, margin: "-80px" });
  const { displayed, done } = useTypewriter("About me.", inView, 48, 100);

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
          &gt; about
        </motion.p>

        {/* ── Section heading ── */}
        <h2
          ref={headingRef}
          className="font-mono font-semibold mb-14"
          style={{ fontSize: "clamp(28px, 4vw, 52px)", color: "var(--cream)", minHeight: "1.2em" }}
        >
          {displayed}
          {inView && !done && <span className="cursor-blink">█</span>}
          {done && <span className="cursor-blink">█</span>}
        </h2>

        {/* ── Stats strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14"
        >
          <div className="rule mb-5" />
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-px"
            style={{ background: "var(--border)" }}
          >
            {statsStrip.map((s) => (
              <div
                key={s.label}
                className="px-6 py-5"
                style={{ background: "var(--card)" }}
              >
                <p
                  className="font-semibold text-4xl mb-1"
                  style={{ color: "var(--green)" }}
                >
                  {s.value}
                </p>
                <p className="label">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="rule mt-5" />
        </motion.div>

        {/* ── Bio (left) + Module grades tiles (right) ── */}
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
              Final-year MEng Mechatronics & Robotics Engineering student at the
              University of Birmingham, specialising in embedded systems,
              robotics, and full-stack product development.
            </p>
            <p
              className="text-sm font-light leading-[1.85]"
              style={{ color: "var(--cream-muted)" }}
            >
              I&apos;ve designed and built real hardware prototypes, autonomous
              robots, IoT wearables, and production web/mobile platforms from
              scratch. I care about the gap between theory and shipping — and I
              live on that edge.
            </p>

            <div
              className="mt-8 pt-8"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <p className="label mb-3">currently</p>
              <p
                className="text-sm font-light"
                style={{ color: "var(--cream-dim)" }}
              >
                Final Year Project — IoT Wearable Glove for gym tracking. ESP32,
                flex sensors, IMU, MQTT + cloud pipeline.
              </p>
            </div>
          </motion.div>

          {/* Module grade tiles */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <p className="label mb-5">key module grades</p>

            {/* 2-column tile grid */}
            <div className="grid grid-cols-2 gap-2">
              {modules.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.06 }}
                  className="grade-tile p-4"
                >
                  {/* Grade — bright phosphor */}
                  <p
                    className="font-semibold text-2xl mb-1 tabular-nums"
                    style={{ color: "var(--green)" }}
                  >
                    {m.grade}
                  </p>
                  {/* Module name */}
                  <p
                    className="text-xs font-light leading-snug"
                    style={{ color: "var(--cream-dim)" }}
                  >
                    {m.name}
                  </p>
                  {/* Thin bar showing relative grade */}
                  <div
                    className="mt-3 h-px w-full"
                    style={{ background: "var(--border)" }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${m.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.3 + i * 0.06 }}
                      className="h-full"
                      style={{ background: "var(--green-line)" }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Overall tile — spans full width */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.5 }}
                className="grade-tile p-4 col-span-2 flex items-center justify-between"
                style={{ borderColor: "rgba(0,255,65,0.2)" }}
              >
                <p className="label">overall · first class</p>
                <p
                  className="font-semibold text-2xl tabular-nums"
                  style={{ color: "var(--green)" }}
                >
                  74.76%
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
